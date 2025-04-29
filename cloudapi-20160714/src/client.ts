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
      'cn-qingdao': "apigateway.cn-qingdao.aliyuncs.com",
      'cn-beijing': "apigateway.cn-beijing.aliyuncs.com",
      'cn-zhangjiakou': "apigateway.cn-zhangjiakou.aliyuncs.com",
      'cn-huhehaote': "apigateway.cn-huhehaote.aliyuncs.com",
      'cn-wulanchabu': "apigateway.cn-wulanchabu.aliyuncs.com",
      'cn-hangzhou': "apigateway.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "apigateway.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "apigateway.cn-shenzhen.aliyuncs.com",
      'cn-heyuan': "apigateway.cn-heyuan.aliyuncs.com",
      'cn-guangzhou': "apigateway.cn-guangzhou.aliyuncs.com",
      'cn-chengdu': "apigateway.cn-chengdu.aliyuncs.com",
      'cn-hongkong': "apigateway.cn-hongkong.aliyuncs.com",
      'ap-northeast-1': "apigateway.ap-northeast-1.aliyuncs.com",
      'ap-southeast-1': "apigateway.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "apigateway.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "apigateway.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "apigateway.ap-southeast-5.aliyuncs.com",
      'ap-southeast-6': "apigateway.ap-southeast-6.aliyuncs.com",
      'ap-southeast-7': "apigateway.ap-southeast-7.aliyuncs.com",
      'us-east-1': "apigateway.us-east-1.aliyuncs.com",
      'us-west-1': "apigateway.us-west-1.aliyuncs.com",
      'eu-west-1': "apigateway.eu-west-1.aliyuncs.com",
      'eu-central-1': "apigateway.eu-central-1.aliyuncs.com",
      'ap-south-1': "apigateway.ap-south-1.aliyuncs.com",
      'me-east-1': "apigateway.me-east-1.aliyuncs.com",
      'me-central-1': "apigateway.me-central-1.aliyuncs.com",
      'cn-hangzhou-finance': "apigateway.cn-hangzhou-finance.aliyuncs.com",
      'cn-shanghai-finance-1': "apigateway.cn-shanghai-finance-1.aliyuncs.com",
      'cn-shenzhen-finance-1': "apigateway.cn-shenzhen-finance-1.aliyuncs.com",
      'cn-north-2-gov-1': "apigateway.cn-north-2-gov-1.aliyuncs.com",
      'ap-northeast-2-pop': "apigateway.aliyuncs.com",
      'cn-beijing-finance-1': "apigateway.cn-beijing-finance-1.aliyuncs.com",
      'cn-beijing-finance-pop': "apigateway.aliyuncs.com",
      'cn-beijing-gov-1': "apigateway.aliyuncs.com",
      'cn-beijing-nu16-b01': "apigateway.aliyuncs.com",
      'cn-edge-1': "apigateway.aliyuncs.com",
      'cn-fujian': "apigateway.aliyuncs.com",
      'cn-haidian-cm12-c01': "apigateway.aliyuncs.com",
      'cn-hangzhou-bj-b01': "apigateway.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "apigateway.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "apigateway.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "apigateway.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "apigateway.aliyuncs.com",
      'cn-hangzhou-test-306': "apigateway.aliyuncs.com",
      'cn-hongkong-finance-pop': "apigateway.aliyuncs.com",
      'cn-huhehaote-nebula-1': "apigateway.aliyuncs.com",
      'cn-qingdao-nebula': "apigateway.aliyuncs.com",
      'cn-shanghai-et15-b01': "apigateway.aliyuncs.com",
      'cn-shanghai-et2-b01': "apigateway.aliyuncs.com",
      'cn-shanghai-inner': "apigateway.cn-shanghai-inner.aliyuncs.com",
      'cn-shanghai-internal-test-1': "apigateway.aliyuncs.com",
      'cn-shenzhen-inner': "apigateway.aliyuncs.com",
      'cn-shenzhen-st4-d01': "apigateway.aliyuncs.com",
      'cn-shenzhen-su18-b01': "apigateway.aliyuncs.com",
      'cn-wuhan': "apigateway.aliyuncs.com",
      'cn-yushanfang': "apigateway.aliyuncs.com",
      'cn-zhangbei': "apigateway.aliyuncs.com",
      'cn-zhangbei-na61-b01': "apigateway.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "apigateway.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "apigateway.aliyuncs.com",
      'eu-west-1-oxs': "apigateway.aliyuncs.com",
      'rus-west-1-pop': "apigateway.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Unpublishes a specified API from a specified runtime environment.
   * 
   * @remarks
   *   This operation is intended for API providers and is the opposite of DeployApi.
   * *   An API can be unpublished from a specified runtime environment in under 5 seconds.
   * *   An unpublished API cannot be called in the specified runtime environment.
   * 
   * @param request - AbolishApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AbolishApiResponse
   */
  async abolishApiWithOptions(request: $_model.AbolishApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AbolishApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AbolishApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AbolishApiResponse>(await this.callApi(params, req, runtime), new $_model.AbolishApiResponse({}));
  }

  /**
   * Unpublishes a specified API from a specified runtime environment.
   * 
   * @remarks
   *   This operation is intended for API providers and is the opposite of DeployApi.
   * *   An API can be unpublished from a specified runtime environment in under 5 seconds.
   * *   An unpublished API cannot be called in the specified runtime environment.
   * 
   * @param request - AbolishApiRequest
   * @returns AbolishApiResponse
   */
  async abolishApi(request: $_model.AbolishApiRequest): Promise<$_model.AbolishApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.abolishApiWithOptions(request, runtime);
  }

  /**
   * This feature provides instance-level access control capabilities for dedicated instances. Adds an IP address entry to the access control polocy of an instance.
   * 
   * @param request - AddAccessControlListEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAccessControlListEntryResponse
   */
  async addAccessControlListEntryWithOptions(request: $_model.AddAccessControlListEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAccessControlListEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclEntrys)) {
      query["AclEntrys"] = request.aclEntrys;
    }

    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAccessControlListEntry",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAccessControlListEntryResponse>(await this.callApi(params, req, runtime), new $_model.AddAccessControlListEntryResponse({}));
  }

  /**
   * This feature provides instance-level access control capabilities for dedicated instances. Adds an IP address entry to the access control polocy of an instance.
   * 
   * @param request - AddAccessControlListEntryRequest
   * @returns AddAccessControlListEntryResponse
   */
  async addAccessControlListEntry(request: $_model.AddAccessControlListEntryRequest): Promise<$_model.AddAccessControlListEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAccessControlListEntryWithOptions(request, runtime);
  }

  /**
   * Adds a policy to an existing ACL.
   * 
   * @remarks
   * When you call this operation, note that:
   * *   This operation is intended for API providers.
   * *   An added policy immediately takes effect on all APIs that are bound to the access control list (ACL).
   * *   A maximum of 100 policies can be added to an ACL.
   * 
   * @param request - AddIpControlPolicyItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddIpControlPolicyItemResponse
   */
  async addIpControlPolicyItemWithOptions(request: $_model.AddIpControlPolicyItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddIpControlPolicyItemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.cidrIp)) {
      query["CidrIp"] = request.cidrIp;
    }

    if (!$dara.isNull(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddIpControlPolicyItem",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddIpControlPolicyItemResponse>(await this.callApi(params, req, runtime), new $_model.AddIpControlPolicyItemResponse({}));
  }

  /**
   * Adds a policy to an existing ACL.
   * 
   * @remarks
   * When you call this operation, note that:
   * *   This operation is intended for API providers.
   * *   An added policy immediately takes effect on all APIs that are bound to the access control list (ACL).
   * *   A maximum of 100 policies can be added to an ACL.
   * 
   * @param request - AddIpControlPolicyItemRequest
   * @returns AddIpControlPolicyItemResponse
   */
  async addIpControlPolicyItem(request: $_model.AddIpControlPolicyItemRequest): Promise<$_model.AddIpControlPolicyItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addIpControlPolicyItemWithOptions(request, runtime);
  }

  /**
   * Adds a custom special policy to a specified throttling policy.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   If the input SpecialKey already exists, the previous configuration is overwritten. Use caution when calling this operation.
   * *   Special throttling policies must be added to an existing throttling policy, and can take effect on all the APIs to which the throttling policy is bound.
   * 
   * @param request - AddTrafficSpecialControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTrafficSpecialControlResponse
   */
  async addTrafficSpecialControlWithOptions(request: $_model.AddTrafficSpecialControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTrafficSpecialControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.specialKey)) {
      query["SpecialKey"] = request.specialKey;
    }

    if (!$dara.isNull(request.specialType)) {
      query["SpecialType"] = request.specialType;
    }

    if (!$dara.isNull(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    if (!$dara.isNull(request.trafficValue)) {
      query["TrafficValue"] = request.trafficValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTrafficSpecialControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTrafficSpecialControlResponse>(await this.callApi(params, req, runtime), new $_model.AddTrafficSpecialControlResponse({}));
  }

  /**
   * Adds a custom special policy to a specified throttling policy.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   If the input SpecialKey already exists, the previous configuration is overwritten. Use caution when calling this operation.
   * *   Special throttling policies must be added to an existing throttling policy, and can take effect on all the APIs to which the throttling policy is bound.
   * 
   * @param request - AddTrafficSpecialControlRequest
   * @returns AddTrafficSpecialControlResponse
   */
  async addTrafficSpecialControl(request: $_model.AddTrafficSpecialControlRequest): Promise<$_model.AddTrafficSpecialControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTrafficSpecialControlWithOptions(request, runtime);
  }

  /**
   * Associates an internal domain name resolution with a dedicated instance.
   * 
   * @remarks
   * An internal domain name resolution can be associated only with a dedicated instance, not with a shared instance or shared instance cluster.
   * 
   * @param tmpReq - AssociateInstanceWithPrivateDNSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateInstanceWithPrivateDNSResponse
   */
  async associateInstanceWithPrivateDNSWithOptions(tmpReq: $_model.AssociateInstanceWithPrivateDNSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateInstanceWithPrivateDNSResponse> {
    tmpReq.validate();
    let request = new $_model.AssociateInstanceWithPrivateDNSShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.intranetDomains)) {
      request.intranetDomainsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.intranetDomains, "IntranetDomains", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.intranetDomainsShrink)) {
      body["IntranetDomains"] = request.intranetDomainsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateInstanceWithPrivateDNS",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateInstanceWithPrivateDNSResponse>(await this.callApi(params, req, runtime), new $_model.AssociateInstanceWithPrivateDNSResponse({}));
  }

  /**
   * Associates an internal domain name resolution with a dedicated instance.
   * 
   * @remarks
   * An internal domain name resolution can be associated only with a dedicated instance, not with a shared instance or shared instance cluster.
   * 
   * @param request - AssociateInstanceWithPrivateDNSRequest
   * @returns AssociateInstanceWithPrivateDNSResponse
   */
  async associateInstanceWithPrivateDNS(request: $_model.AssociateInstanceWithPrivateDNSRequest): Promise<$_model.AssociateInstanceWithPrivateDNSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateInstanceWithPrivateDNSWithOptions(request, runtime);
  }

  /**
   * Attaches APIs to an API product. If the API product does not exist, the system automatically creates the API product.
   * 
   * @param request - AttachApiProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachApiProductResponse
   */
  async attachApiProductWithOptions(request: $_model.AttachApiProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachApiProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiProductId)) {
      query["ApiProductId"] = request.apiProductId;
    }

    if (!$dara.isNull(request.apis)) {
      query["Apis"] = request.apis;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachApiProduct",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachApiProductResponse>(await this.callApi(params, req, runtime), new $_model.AttachApiProductResponse({}));
  }

  /**
   * Attaches APIs to an API product. If the API product does not exist, the system automatically creates the API product.
   * 
   * @param request - AttachApiProductRequest
   * @returns AttachApiProductResponse
   */
  async attachApiProduct(request: $_model.AttachApiProductRequest): Promise<$_model.AttachApiProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachApiProductWithOptions(request, runtime);
  }

  /**
   * Attach plugin to API group.
   * 
   * @param request - AttachGroupPluginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachGroupPluginResponse
   */
  async attachGroupPluginWithOptions(request: $_model.AttachGroupPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachGroupPluginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachGroupPlugin",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachGroupPluginResponse>(await this.callApi(params, req, runtime), new $_model.AttachGroupPluginResponse({}));
  }

  /**
   * Attach plugin to API group.
   * 
   * @param request - AttachGroupPluginRequest
   * @returns AttachGroupPluginResponse
   */
  async attachGroupPlugin(request: $_model.AttachGroupPluginRequest): Promise<$_model.AttachGroupPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachGroupPluginWithOptions(request, runtime);
  }

  /**
   * Binds a plug-in to an API.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   You can only bind plug-ins to published APIs.
   * *   The plug-in takes effect immediately after it is bound to an API.
   * *   If you bind a different plug-in to an API, this plug-in takes effect immediately.
   * 
   * @param request - AttachPluginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachPluginResponse
   */
  async attachPluginWithOptions(request: $_model.AttachPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachPluginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachPlugin",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachPluginResponse>(await this.callApi(params, req, runtime), new $_model.AttachPluginResponse({}));
  }

  /**
   * Binds a plug-in to an API.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   You can only bind plug-ins to published APIs.
   * *   The plug-in takes effect immediately after it is bound to an API.
   * *   If you bind a different plug-in to an API, this plug-in takes effect immediately.
   * 
   * @param request - AttachPluginRequest
   * @returns AttachPluginResponse
   */
  async attachPlugin(request: $_model.AttachPluginRequest): Promise<$_model.AttachPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachPluginWithOptions(request, runtime);
  }

  /**
   * Unpublishes multiple published APIs at a time.
   * 
   * @param request - BatchAbolishApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchAbolishApisResponse
   */
  async batchAbolishApisWithOptions(request: $_model.BatchAbolishApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchAbolishApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.api)) {
      query["Api"] = request.api;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchAbolishApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchAbolishApisResponse>(await this.callApi(params, req, runtime), new $_model.BatchAbolishApisResponse({}));
  }

  /**
   * Unpublishes multiple published APIs at a time.
   * 
   * @param request - BatchAbolishApisRequest
   * @returns BatchAbolishApisResponse
   */
  async batchAbolishApis(request: $_model.BatchAbolishApisRequest): Promise<$_model.BatchAbolishApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchAbolishApisWithOptions(request, runtime);
  }

  /**
   * Publishes multiple APIs at a time.
   * 
   * @param request - BatchDeployApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeployApisResponse
   */
  async batchDeployApisWithOptions(request: $_model.BatchDeployApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeployApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.api)) {
      query["Api"] = request.api;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeployApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeployApisResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeployApisResponse({}));
  }

  /**
   * Publishes multiple APIs at a time.
   * 
   * @param request - BatchDeployApisRequest
   * @returns BatchDeployApisResponse
   */
  async batchDeployApis(request: $_model.BatchDeployApisRequest): Promise<$_model.BatchDeployApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeployApisWithOptions(request, runtime);
  }

  /**
   * This feature provides instance-level access control capabilities for dedicated instances. Creates an Access Control List (ACL). Each user is allowed to create five ACLs in each region.
   * 
   * @param request - CreateAccessControlListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessControlListResponse
   */
  async createAccessControlListWithOptions(request: $_model.CreateAccessControlListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccessControlListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!$dara.isNull(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccessControlList",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccessControlListResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccessControlListResponse({}));
  }

  /**
   * This feature provides instance-level access control capabilities for dedicated instances. Creates an Access Control List (ACL). Each user is allowed to create five ACLs in each region.
   * 
   * @param request - CreateAccessControlListRequest
   * @returns CreateAccessControlListResponse
   */
  async createAccessControlList(request: $_model.CreateAccessControlListRequest): Promise<$_model.CreateAccessControlListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccessControlListWithOptions(request, runtime);
  }

  /**
   * Creates an API.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   The name of an API must be unique within an API group.
   * *   A request path must be unique within an API group.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - CreateApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApiResponse
   */
  async createApiWithOptions(request: $_model.CreateApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowSignatureMethod)) {
      query["AllowSignatureMethod"] = request.allowSignatureMethod;
    }

    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.appCodeAuthType)) {
      query["AppCodeAuthType"] = request.appCodeAuthType;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.backendEnable)) {
      query["BackendEnable"] = request.backendEnable;
    }

    if (!$dara.isNull(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.disableInternet)) {
      query["DisableInternet"] = request.disableInternet;
    }

    if (!$dara.isNull(request.forceNonceCheck)) {
      query["ForceNonceCheck"] = request.forceNonceCheck;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.openIdConnectConfig)) {
      query["OpenIdConnectConfig"] = request.openIdConnectConfig;
    }

    if (!$dara.isNull(request.requestConfig)) {
      query["RequestConfig"] = request.requestConfig;
    }

    if (!$dara.isNull(request.resultBodyModel)) {
      query["ResultBodyModel"] = request.resultBodyModel;
    }

    if (!$dara.isNull(request.resultType)) {
      query["ResultType"] = request.resultType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.serviceConfig)) {
      query["ServiceConfig"] = request.serviceConfig;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    if (!$dara.isNull(request.webSocketApiType)) {
      query["WebSocketApiType"] = request.webSocketApiType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.constantParameters)) {
      body["ConstantParameters"] = request.constantParameters;
    }

    if (!$dara.isNull(request.errorCodeSamples)) {
      body["ErrorCodeSamples"] = request.errorCodeSamples;
    }

    if (!$dara.isNull(request.failResultSample)) {
      body["FailResultSample"] = request.failResultSample;
    }

    if (!$dara.isNull(request.requestParameters)) {
      body["RequestParameters"] = request.requestParameters;
    }

    if (!$dara.isNull(request.resultDescriptions)) {
      body["ResultDescriptions"] = request.resultDescriptions;
    }

    if (!$dara.isNull(request.resultSample)) {
      body["ResultSample"] = request.resultSample;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    if (!$dara.isNull(request.serviceParametersMap)) {
      body["ServiceParametersMap"] = request.serviceParametersMap;
    }

    if (!$dara.isNull(request.systemParameters)) {
      body["SystemParameters"] = request.systemParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApiResponse>(await this.callApi(params, req, runtime), new $_model.CreateApiResponse({}));
  }

  /**
   * Creates an API.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   The name of an API must be unique within an API group.
   * *   A request path must be unique within an API group.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - CreateApiRequest
   * @returns CreateApiResponse
   */
  async createApi(request: $_model.CreateApiRequest): Promise<$_model.CreateApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApiWithOptions(request, runtime);
  }

  /**
   * 创建API分组
   * 
   * @param request - CreateApiGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApiGroupResponse
   */
  async createApiGroupWithOptions(request: $_model.CreateApiGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApiGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.basePath)) {
      query["BasePath"] = request.basePath;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApiGroup",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApiGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateApiGroupResponse({}));
  }

  /**
   * 创建API分组
   * 
   * @param request - CreateApiGroupRequest
   * @returns CreateApiGroupResponse
   */
  async createApiGroup(request: $_model.CreateApiGroupRequest): Promise<$_model.CreateApiGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApiGroupWithOptions(request, runtime);
  }

  /**
   * Adds a variable to an environment.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * 
   * @param request - CreateApiStageVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApiStageVariableResponse
   */
  async createApiStageVariableWithOptions(request: $_model.CreateApiStageVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApiStageVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageId)) {
      query["StageId"] = request.stageId;
    }

    if (!$dara.isNull(request.stageRouteModel)) {
      query["StageRouteModel"] = request.stageRouteModel;
    }

    if (!$dara.isNull(request.supportRoute)) {
      query["SupportRoute"] = request.supportRoute;
    }

    if (!$dara.isNull(request.variableName)) {
      query["VariableName"] = request.variableName;
    }

    if (!$dara.isNull(request.variableValue)) {
      query["VariableValue"] = request.variableValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApiStageVariable",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApiStageVariableResponse>(await this.callApi(params, req, runtime), new $_model.CreateApiStageVariableResponse({}));
  }

  /**
   * Adds a variable to an environment.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * 
   * @param request - CreateApiStageVariableRequest
   * @returns CreateApiStageVariableResponse
   */
  async createApiStageVariable(request: $_model.CreateApiStageVariableRequest): Promise<$_model.CreateApiStageVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApiStageVariableWithOptions(request, runtime);
  }

  /**
   * Creates an application for calling APIs in API Gateway.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   Each application has a key-value pair which is used for identity verification when you call an API.
   * *   An application must be authorized to call an API.
   * *   Each application has only one key-value pair, which can be reset if the pair is leaked.
   * *   A maximum of 1,000 applications can be created for each Alibaba Cloud account.
   * *   You can call this operation up to 50 times per second per account.
   * 
   * @param request - CreateAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppResponse
   */
  async createAppWithOptions(request: $_model.CreateAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appSecret)) {
      query["AppSecret"] = request.appSecret;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApp",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppResponse({}));
  }

  /**
   * Creates an application for calling APIs in API Gateway.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   Each application has a key-value pair which is used for identity verification when you call an API.
   * *   An application must be authorized to call an API.
   * *   Each application has only one key-value pair, which can be reset if the pair is leaked.
   * *   A maximum of 1,000 applications can be created for each Alibaba Cloud account.
   * *   You can call this operation up to 50 times per second per account.
   * 
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(request: $_model.CreateAppRequest): Promise<$_model.CreateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  /**
   * Adds an AppCode to an application.
   * 
   * @param request - CreateAppCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppCodeResponse
   */
  async createAppCodeWithOptions(request: $_model.CreateAppCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppCode",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppCodeResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppCodeResponse({}));
  }

  /**
   * Adds an AppCode to an application.
   * 
   * @param request - CreateAppCodeRequest
   * @returns CreateAppCodeResponse
   */
  async createAppCode(request: $_model.CreateAppCodeRequest): Promise<$_model.CreateAppCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppCodeWithOptions(request, runtime);
  }

  /**
   * Adds an AppKey and AppSecret pair to an application.
   * 
   * @param request - CreateAppKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppKeyResponse
   */
  async createAppKeyWithOptions(request: $_model.CreateAppKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.appSecret)) {
      query["AppSecret"] = request.appSecret;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppKey",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppKeyResponse({}));
  }

  /**
   * Adds an AppKey and AppSecret pair to an application.
   * 
   * @param request - CreateAppKeyRequest
   * @returns CreateAppKeyResponse
   */
  async createAppKey(request: $_model.CreateAppKeyRequest): Promise<$_model.CreateAppKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppKeyWithOptions(request, runtime);
  }

  /**
   * Creates a backend service in API Gateway.
   * 
   * @param request - CreateBackendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackendResponse
   */
  async createBackendWithOptions(request: $_model.CreateBackendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendName)) {
      query["BackendName"] = request.backendName;
    }

    if (!$dara.isNull(request.backendType)) {
      query["BackendType"] = request.backendType;
    }

    if (!$dara.isNull(request.createEventBridgeServiceLinkedRole)) {
      query["CreateEventBridgeServiceLinkedRole"] = request.createEventBridgeServiceLinkedRole;
    }

    if (!$dara.isNull(request.createSlr)) {
      query["CreateSlr"] = request.createSlr;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBackend",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBackendResponse>(await this.callApi(params, req, runtime), new $_model.CreateBackendResponse({}));
  }

  /**
   * Creates a backend service in API Gateway.
   * 
   * @param request - CreateBackendRequest
   * @returns CreateBackendResponse
   */
  async createBackend(request: $_model.CreateBackendRequest): Promise<$_model.CreateBackendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackendWithOptions(request, runtime);
  }

  /**
   * 创建后端服务在环境上的配置
   * 
   * @param request - CreateBackendModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackendModelResponse
   */
  async createBackendModelWithOptions(request: $_model.CreateBackendModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackendModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!$dara.isNull(request.backendModelData)) {
      query["BackendModelData"] = request.backendModelData;
    }

    if (!$dara.isNull(request.backendType)) {
      query["BackendType"] = request.backendType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBackendModel",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBackendModelResponse>(await this.callApi(params, req, runtime), new $_model.CreateBackendModelResponse({}));
  }

  /**
   * 创建后端服务在环境上的配置
   * 
   * @param request - CreateBackendModelRequest
   * @returns CreateBackendModelResponse
   */
  async createBackendModel(request: $_model.CreateBackendModelRequest): Promise<$_model.CreateBackendModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackendModelWithOptions(request, runtime);
  }

  /**
   * Creates a custom dataset.
   * 
   * @param request - CreateDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetResponse
   */
  async createDatasetWithOptions(request: $_model.CreateDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatasetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.datasetType)) {
      query["DatasetType"] = request.datasetType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataset",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatasetResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatasetResponse({}));
  }

  /**
   * Creates a custom dataset.
   * 
   * @param request - CreateDatasetRequest
   * @returns CreateDatasetResponse
   */
  async createDataset(request: $_model.CreateDatasetRequest): Promise<$_model.CreateDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDatasetWithOptions(request, runtime);
  }

  /**
   * 创建自定义数据集条目
   * 
   * @param request - CreateDatasetItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetItemResponse
   */
  async createDatasetItemWithOptions(request: $_model.CreateDatasetItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatasetItemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatasetItem",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatasetItemResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatasetItemResponse({}));
  }

  /**
   * 创建自定义数据集条目
   * 
   * @param request - CreateDatasetItemRequest
   * @returns CreateDatasetItemResponse
   */
  async createDatasetItem(request: $_model.CreateDatasetItemRequest): Promise<$_model.CreateDatasetItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDatasetItemWithOptions(request, runtime);
  }

  /**
   * Creates an API Gateway instance.
   * 
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.httpsPolicy)) {
      query["HttpsPolicy"] = request.httpsPolicy;
    }

    if (!$dara.isNull(request.instanceCidr)) {
      query["InstanceCidr"] = request.instanceCidr;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.userVpcId)) {
      query["UserVpcId"] = request.userVpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!$dara.isNull(request.zoneVSwitchSecurityGroup)) {
      query["ZoneVSwitchSecurityGroup"] = request.zoneVSwitchSecurityGroup;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2016-07-14",
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
   * Creates an API Gateway instance.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * 创建内网域名
   * 
   * @param request - CreateIntranetDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIntranetDomainResponse
   */
  async createIntranetDomainWithOptions(request: $_model.CreateIntranetDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIntranetDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIntranetDomain",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIntranetDomainResponse>(await this.callApi(params, req, runtime), new $_model.CreateIntranetDomainResponse({}));
  }

  /**
   * 创建内网域名
   * 
   * @param request - CreateIntranetDomainRequest
   * @returns CreateIntranetDomainResponse
   */
  async createIntranetDomain(request: $_model.CreateIntranetDomainRequest): Promise<$_model.CreateIntranetDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIntranetDomainWithOptions(request, runtime);
  }

  /**
   * Creates an access control list (ACL) in a region.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   An ACL must be bound to an API to take effect. After an ACL is bound to an API, the ACL takes effect on the API immediately.
   * *   You can add policies to an ACL when you create the ACL.
   * *   If an ACL does not have any policy, the ACL is ineffective.
   * 
   * @param request - CreateIpControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIpControlResponse
   */
  async createIpControlWithOptions(request: $_model.CreateIpControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIpControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ipControlName)) {
      query["IpControlName"] = request.ipControlName;
    }

    if (!$dara.isNull(request.ipControlPolicys)) {
      query["IpControlPolicys"] = request.ipControlPolicys;
    }

    if (!$dara.isNull(request.ipControlType)) {
      query["IpControlType"] = request.ipControlType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIpControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIpControlResponse>(await this.callApi(params, req, runtime), new $_model.CreateIpControlResponse({}));
  }

  /**
   * Creates an access control list (ACL) in a region.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   An ACL must be bound to an API to take effect. After an ACL is bound to an API, the ACL takes effect on the API immediately.
   * *   You can add policies to an ACL when you create the ACL.
   * *   If an ACL does not have any policy, the ACL is ineffective.
   * 
   * @param request - CreateIpControlRequest
   * @returns CreateIpControlResponse
   */
  async createIpControl(request: $_model.CreateIpControlRequest): Promise<$_model.CreateIpControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIpControlWithOptions(request, runtime);
  }

  /**
   * Creates a Simple Log Service configuration for an API.
   * 
   * @param request - CreateLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLogConfigResponse
   */
  async createLogConfigWithOptions(request: $_model.CreateLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLogConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createSlr)) {
      query["CreateSlr"] = request.createSlr;
    }

    if (!$dara.isNull(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.slsLogStore)) {
      query["SlsLogStore"] = request.slsLogStore;
    }

    if (!$dara.isNull(request.slsProject)) {
      query["SlsProject"] = request.slsProject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLogConfig",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateLogConfigResponse({}));
  }

  /**
   * Creates a Simple Log Service configuration for an API.
   * 
   * @param request - CreateLogConfigRequest
   * @returns CreateLogConfigResponse
   */
  async createLogConfig(request: $_model.CreateLogConfigRequest): Promise<$_model.CreateLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLogConfigWithOptions(request, runtime);
  }

  /**
   * Creates a model for an API group.
   * 
   * @remarks
   *   For more information about the model definition, see [JSON Schema Draft 4](https://tools.ietf.org/html/draft-zyp-json-schema-04?spm=a2c4g.11186623.2.10.2e977ff7p4BpQd).
   * *   JSON Schema supports only element attributes of the Object type.
   * 
   * @param request - CreateModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelResponse
   */
  async createModelWithOptions(request: $_model.CreateModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.schema)) {
      query["Schema"] = request.schema;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModel",
      version: "2016-07-14",
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
   * Creates a model for an API group.
   * 
   * @remarks
   *   For more information about the model definition, see [JSON Schema Draft 4](https://tools.ietf.org/html/draft-zyp-json-schema-04?spm=a2c4g.11186623.2.10.2e977ff7p4BpQd).
   * *   JSON Schema supports only element attributes of the Object type.
   * 
   * @param request - CreateModelRequest
   * @returns CreateModelResponse
   */
  async createModel(request: $_model.CreateModelRequest): Promise<$_model.CreateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createModelWithOptions(request, runtime);
  }

  /**
   * Enables CloudMonitor alerting for a specified API group.
   * 
   * @param request - CreateMonitorGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorGroupResponse
   */
  async createMonitorGroupWithOptions(request: $_model.CreateMonitorGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitorGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auth)) {
      query["Auth"] = request.auth;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.rawMonitorGroupId)) {
      query["RawMonitorGroupId"] = request.rawMonitorGroupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMonitorGroup",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitorGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitorGroupResponse({}));
  }

  /**
   * Enables CloudMonitor alerting for a specified API group.
   * 
   * @param request - CreateMonitorGroupRequest
   * @returns CreateMonitorGroupResponse
   */
  async createMonitorGroup(request: $_model.CreateMonitorGroupRequest): Promise<$_model.CreateMonitorGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMonitorGroupWithOptions(request, runtime);
  }

  /**
   * Creates a plug-in.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   The number of plug-ins of the same type that each user can create is limited. Different limits apply to different plug-in types.
   * *   The plug-in definitions for advanced features are restricted.
   * *   Plug-ins must be bound to APIs to take effect. After a plug-in is bound, it takes effect on that API immediately.
   * 
   * @param request - CreatePluginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePluginResponse
   */
  async createPluginWithOptions(request: $_model.CreatePluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePluginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.pluginData)) {
      query["PluginData"] = request.pluginData;
    }

    if (!$dara.isNull(request.pluginName)) {
      query["PluginName"] = request.pluginName;
    }

    if (!$dara.isNull(request.pluginType)) {
      query["PluginType"] = request.pluginType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePlugin",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePluginResponse>(await this.callApi(params, req, runtime), new $_model.CreatePluginResponse({}));
  }

  /**
   * Creates a plug-in.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   The number of plug-ins of the same type that each user can create is limited. Different limits apply to different plug-in types.
   * *   The plug-in definitions for advanced features are restricted.
   * *   Plug-ins must be bound to APIs to take effect. After a plug-in is bound, it takes effect on that API immediately.
   * 
   * @param request - CreatePluginRequest
   * @returns CreatePluginResponse
   */
  async createPlugin(request: $_model.CreatePluginRequest): Promise<$_model.CreatePluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPluginWithOptions(request, runtime);
  }

  /**
   * Creates an internal domain name resolution and adds a resolution record.
   * 
   * @remarks
   * An internal domain name resolution of the virtual private cloud (VPC) type can be bound only to traditional dedicated instances. An internal domain name resolution of the A type can be bound only to VPC integration dedicated instances.
   * 
   * @param tmpReq - CreatePrivateDNSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrivateDNSResponse
   */
  async createPrivateDNSWithOptions(tmpReq: $_model.CreatePrivateDNSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrivateDNSResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePrivateDNSShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.records)) {
      request.recordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.records, "Records", "json");
    }

    let query = { };
    if (!$dara.isNull(request.intranetDomain)) {
      query["IntranetDomain"] = request.intranetDomain;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.recordsShrink)) {
      body["Records"] = request.recordsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrivateDNS",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrivateDNSResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrivateDNSResponse({}));
  }

  /**
   * Creates an internal domain name resolution and adds a resolution record.
   * 
   * @remarks
   * An internal domain name resolution of the virtual private cloud (VPC) type can be bound only to traditional dedicated instances. An internal domain name resolution of the A type can be bound only to VPC integration dedicated instances.
   * 
   * @param request - CreatePrivateDNSRequest
   * @returns CreatePrivateDNSResponse
   */
  async createPrivateDNS(request: $_model.CreatePrivateDNSRequest): Promise<$_model.CreatePrivateDNSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPrivateDNSWithOptions(request, runtime);
  }

  /**
   * Creates a backend signature key.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   The API operation only creates a key policy. You must call the binding operation to bind the key to an API.
   * *   After the key is bound to the API, requests sent from API Gateway to the backend service contain signature strings. You can specify whether your backend service verifies these signature strings.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - CreateSignatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSignatureResponse
   */
  async createSignatureWithOptions(request: $_model.CreateSignatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSignatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.signatureKey)) {
      query["SignatureKey"] = request.signatureKey;
    }

    if (!$dara.isNull(request.signatureName)) {
      query["SignatureName"] = request.signatureName;
    }

    if (!$dara.isNull(request.signatureSecret)) {
      query["SignatureSecret"] = request.signatureSecret;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSignature",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSignatureResponse>(await this.callApi(params, req, runtime), new $_model.CreateSignatureResponse({}));
  }

  /**
   * Creates a backend signature key.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   The API operation only creates a key policy. You must call the binding operation to bind the key to an API.
   * *   After the key is bound to the API, requests sent from API Gateway to the backend service contain signature strings. You can specify whether your backend service verifies these signature strings.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - CreateSignatureRequest
   * @returns CreateSignatureResponse
   */
  async createSignature(request: $_model.CreateSignatureRequest): Promise<$_model.CreateSignatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSignatureWithOptions(request, runtime);
  }

  /**
   * Creates a custom throttling policy.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   Throttling policies must be bound to APIs to take effect. After a policy is bound to an API, it goes into effect on that API immediately.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - CreateTrafficControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTrafficControlResponse
   */
  async createTrafficControlWithOptions(request: $_model.CreateTrafficControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTrafficControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiDefault)) {
      query["ApiDefault"] = request.apiDefault;
    }

    if (!$dara.isNull(request.appDefault)) {
      query["AppDefault"] = request.appDefault;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.trafficControlName)) {
      query["TrafficControlName"] = request.trafficControlName;
    }

    if (!$dara.isNull(request.trafficControlUnit)) {
      query["TrafficControlUnit"] = request.trafficControlUnit;
    }

    if (!$dara.isNull(request.userDefault)) {
      query["UserDefault"] = request.userDefault;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTrafficControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTrafficControlResponse>(await this.callApi(params, req, runtime), new $_model.CreateTrafficControlResponse({}));
  }

  /**
   * Creates a custom throttling policy.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   Throttling policies must be bound to APIs to take effect. After a policy is bound to an API, it goes into effect on that API immediately.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - CreateTrafficControlRequest
   * @returns CreateTrafficControlResponse
   */
  async createTrafficControl(request: $_model.CreateTrafficControlRequest): Promise<$_model.CreateTrafficControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTrafficControlWithOptions(request, runtime);
  }

  /**
   * This feature provides instance-level access control capabilities for dedicated instances. Deletes an access control policy.
   * 
   * @param request - DeleteAccessControlListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessControlListResponse
   */
  async deleteAccessControlListWithOptions(request: $_model.DeleteAccessControlListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessControlListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccessControlList",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccessControlListResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccessControlListResponse({}));
  }

  /**
   * This feature provides instance-level access control capabilities for dedicated instances. Deletes an access control policy.
   * 
   * @param request - DeleteAccessControlListRequest
   * @returns DeleteAccessControlListResponse
   */
  async deleteAccessControlList(request: $_model.DeleteAccessControlListRequest): Promise<$_model.DeleteAccessControlListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccessControlListWithOptions(request, runtime);
  }

  /**
   * Deletes all custom special policies of a specified throttling policy.
   * 
   * @remarks
   *   This API is intended for API providers.
   * 
   * @param request - DeleteAllTrafficSpecialControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAllTrafficSpecialControlResponse
   */
  async deleteAllTrafficSpecialControlWithOptions(request: $_model.DeleteAllTrafficSpecialControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAllTrafficSpecialControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAllTrafficSpecialControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAllTrafficSpecialControlResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAllTrafficSpecialControlResponse({}));
  }

  /**
   * Deletes all custom special policies of a specified throttling policy.
   * 
   * @remarks
   *   This API is intended for API providers.
   * 
   * @param request - DeleteAllTrafficSpecialControlRequest
   * @returns DeleteAllTrafficSpecialControlResponse
   */
  async deleteAllTrafficSpecialControl(request: $_model.DeleteAllTrafficSpecialControlRequest): Promise<$_model.DeleteAllTrafficSpecialControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAllTrafficSpecialControlWithOptions(request, runtime);
  }

  /**
   * Deletes the definition of a specified API.
   * 
   * @remarks
   *   This operation is intended for API providers and cannot be undone after it is complete.
   * *   An API that is running in the runtime environment must be unpublished before you can delete the API.****
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - DeleteApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApiResponse
   */
  async deleteApiWithOptions(request: $_model.DeleteApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApiResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApiResponse({}));
  }

  /**
   * Deletes the definition of a specified API.
   * 
   * @remarks
   *   This operation is intended for API providers and cannot be undone after it is complete.
   * *   An API that is running in the runtime environment must be unpublished before you can delete the API.****
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - DeleteApiRequest
   * @returns DeleteApiResponse
   */
  async deleteApi(request: $_model.DeleteApiRequest): Promise<$_model.DeleteApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApiWithOptions(request, runtime);
  }

  /**
   * Deletes an API group.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   An API group that contains APIs cannot be deleted. To delete the API group, you must first delete its APIs.
   * *   After an API group is deleted, the second-level domain name bound to the API group is automatically invalidated.
   * *   If the specified API group does not exist, a success response is returned.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - DeleteApiGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApiGroupResponse
   */
  async deleteApiGroupWithOptions(request: $_model.DeleteApiGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApiGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApiGroup",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApiGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApiGroupResponse({}));
  }

  /**
   * Deletes an API group.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   An API group that contains APIs cannot be deleted. To delete the API group, you must first delete its APIs.
   * *   After an API group is deleted, the second-level domain name bound to the API group is automatically invalidated.
   * *   If the specified API group does not exist, a success response is returned.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - DeleteApiGroupRequest
   * @returns DeleteApiGroupResponse
   */
  async deleteApiGroup(request: $_model.DeleteApiGroupRequest): Promise<$_model.DeleteApiGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApiGroupWithOptions(request, runtime);
  }

  /**
   * Deletes an API product. Deleting an API product causes the association between APIs and the deleted API product to be deleted as well. Exercise caution when you delete an API product. If any API in the API product is associated with an application, the API product fails to be deleted.
   * 
   * @param request - DeleteApiProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApiProductResponse
   */
  async deleteApiProductWithOptions(request: $_model.DeleteApiProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApiProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiProductId)) {
      query["ApiProductId"] = request.apiProductId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApiProduct",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApiProductResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApiProductResponse({}));
  }

  /**
   * Deletes an API product. Deleting an API product causes the association between APIs and the deleted API product to be deleted as well. Exercise caution when you delete an API product. If any API in the API product is associated with an application, the API product fails to be deleted.
   * 
   * @param request - DeleteApiProductRequest
   * @returns DeleteApiProductResponse
   */
  async deleteApiProduct(request: $_model.DeleteApiProductRequest): Promise<$_model.DeleteApiProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApiProductWithOptions(request, runtime);
  }

  /**
   * Deletes a specified variable in a specified environment.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * 
   * @param request - DeleteApiStageVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApiStageVariableResponse
   */
  async deleteApiStageVariableWithOptions(request: $_model.DeleteApiStageVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApiStageVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageId)) {
      query["StageId"] = request.stageId;
    }

    if (!$dara.isNull(request.variableName)) {
      query["VariableName"] = request.variableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApiStageVariable",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApiStageVariableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApiStageVariableResponse({}));
  }

  /**
   * Deletes a specified variable in a specified environment.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * 
   * @param request - DeleteApiStageVariableRequest
   * @returns DeleteApiStageVariableResponse
   */
  async deleteApiStageVariable(request: $_model.DeleteApiStageVariableRequest): Promise<$_model.DeleteApiStageVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApiStageVariableWithOptions(request, runtime);
  }

  /**
   * Deletes an application.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   After an application is deleted, the application and its API authorization cannot be restored.
   * *   You can call this operation up to 50 times per second per account.
   * 
   * @param request - DeleteAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppResponse
   */
  async deleteAppWithOptions(request: $_model.DeleteAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApp",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppResponse({}));
  }

  /**
   * Deletes an application.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   After an application is deleted, the application and its API authorization cannot be restored.
   * *   You can call this operation up to 50 times per second per account.
   * 
   * @param request - DeleteAppRequest
   * @returns DeleteAppResponse
   */
  async deleteApp(request: $_model.DeleteAppRequest): Promise<$_model.DeleteAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  /**
   * Deletes the AppCode of an application.
   * 
   * @param request - DeleteAppCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppCodeResponse
   */
  async deleteAppCodeWithOptions(request: $_model.DeleteAppCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppCode",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppCodeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppCodeResponse({}));
  }

  /**
   * Deletes the AppCode of an application.
   * 
   * @param request - DeleteAppCodeRequest
   * @returns DeleteAppCodeResponse
   */
  async deleteAppCode(request: $_model.DeleteAppCodeRequest): Promise<$_model.DeleteAppCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppCodeWithOptions(request, runtime);
  }

  /**
   * Deletes the AppKey and AppSecret of an application.
   * 
   * @param request - DeleteAppKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppKeyResponse
   */
  async deleteAppKeyWithOptions(request: $_model.DeleteAppKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppKey",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppKeyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppKeyResponse({}));
  }

  /**
   * Deletes the AppKey and AppSecret of an application.
   * 
   * @param request - DeleteAppKeyRequest
   * @returns DeleteAppKeyResponse
   */
  async deleteAppKey(request: $_model.DeleteAppKeyRequest): Promise<$_model.DeleteAppKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppKeyWithOptions(request, runtime);
  }

  /**
   * Deletes a backend service.
   * 
   * @param request - DeleteBackendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackendResponse
   */
  async deleteBackendWithOptions(request: $_model.DeleteBackendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackend",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBackendResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBackendResponse({}));
  }

  /**
   * Deletes a backend service.
   * 
   * @param request - DeleteBackendRequest
   * @returns DeleteBackendResponse
   */
  async deleteBackend(request: $_model.DeleteBackendRequest): Promise<$_model.DeleteBackendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackendWithOptions(request, runtime);
  }

  /**
   * Deletes the definition of a backend service in an environment. After the definition is deleted, the API that uses the backend service and is published to this environment will be unpublished.
   * 
   * @param request - DeleteBackendModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackendModelResponse
   */
  async deleteBackendModelWithOptions(request: $_model.DeleteBackendModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackendModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!$dara.isNull(request.backendModelId)) {
      query["BackendModelId"] = request.backendModelId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackendModel",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBackendModelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBackendModelResponse({}));
  }

  /**
   * Deletes the definition of a backend service in an environment. After the definition is deleted, the API that uses the backend service and is published to this environment will be unpublished.
   * 
   * @param request - DeleteBackendModelRequest
   * @returns DeleteBackendModelResponse
   */
  async deleteBackendModel(request: $_model.DeleteBackendModelRequest): Promise<$_model.DeleteBackendModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackendModelWithOptions(request, runtime);
  }

  /**
   * 删除自定义数据集
   * 
   * @param request - DeleteDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetResponse
   */
  async deleteDatasetWithOptions(request: $_model.DeleteDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataset",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatasetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatasetResponse({}));
  }

  /**
   * 删除自定义数据集
   * 
   * @param request - DeleteDatasetRequest
   * @returns DeleteDatasetResponse
   */
  async deleteDataset(request: $_model.DeleteDatasetRequest): Promise<$_model.DeleteDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDatasetWithOptions(request, runtime);
  }

  /**
   * Deletes a data entry from a custom dataset.
   * 
   * @param request - DeleteDatasetItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetItemResponse
   */
  async deleteDatasetItemWithOptions(request: $_model.DeleteDatasetItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasetItemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetItemId)) {
      query["DatasetItemId"] = request.datasetItemId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatasetItem",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatasetItemResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatasetItemResponse({}));
  }

  /**
   * Deletes a data entry from a custom dataset.
   * 
   * @param request - DeleteDatasetItemRequest
   * @returns DeleteDatasetItemResponse
   */
  async deleteDatasetItem(request: $_model.DeleteDatasetItemRequest): Promise<$_model.DeleteDatasetItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDatasetItemWithOptions(request, runtime);
  }

  /**
   * Unbinds a custom domain name from an API group.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   If the specified domain name does not exist, a successful response will still appear.
   * *   Unbinding a domain name from an API group will affect access to the APIs in the group. Exercise caution when using this operation.
   * 
   * @param request - DeleteDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(request: $_model.DeleteDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomain",
      version: "2016-07-14",
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
   * Unbinds a custom domain name from an API group.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   If the specified domain name does not exist, a successful response will still appear.
   * *   Unbinding a domain name from an API group will affect access to the APIs in the group. Exercise caution when using this operation.
   * 
   * @param request - DeleteDomainRequest
   * @returns DeleteDomainResponse
   */
  async deleteDomain(request: $_model.DeleteDomainRequest): Promise<$_model.DeleteDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  /**
   * Deletes the SSL certificate of a specified domain name. This operation is intended for API providers. If the SSL certificate does not exist, a success response is still returned. If the specified API group does not exist, the InvalidGroupId.NotFound error is returned. Access over HTTPS is not supported after the SSL certificate is deleted. Exercise caution when using this API operation.
   * 
   * @param request - DeleteDomainCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainCertificateResponse
   */
  async deleteDomainCertificateWithOptions(request: $_model.DeleteDomainCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomainCertificate",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDomainCertificateResponse({}));
  }

  /**
   * Deletes the SSL certificate of a specified domain name. This operation is intended for API providers. If the SSL certificate does not exist, a success response is still returned. If the specified API group does not exist, the InvalidGroupId.NotFound error is returned. Access over HTTPS is not supported after the SSL certificate is deleted. Exercise caution when using this API operation.
   * 
   * @param request - DeleteDomainCertificateRequest
   * @returns DeleteDomainCertificateResponse
   */
  async deleteDomainCertificate(request: $_model.DeleteDomainCertificateRequest): Promise<$_model.DeleteDomainCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainCertificateWithOptions(request, runtime);
  }

  /**
   * Deletes an API Gateway instance.
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2016-07-14",
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
   * Deletes an API Gateway instance.
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes an access control list (ACL).
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   If the ACL is bound to an API, you must unbind the ACL from the API before you can delete the ACL. Otherwise, an error is returned.
   * *   If you call this operation on an ACL that does not exist, a success message is returned.
   * 
   * @param request - DeleteIpControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpControlResponse
   */
  async deleteIpControlWithOptions(request: $_model.DeleteIpControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIpControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIpControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIpControlResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIpControlResponse({}));
  }

  /**
   * Deletes an access control list (ACL).
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   If the ACL is bound to an API, you must unbind the ACL from the API before you can delete the ACL. Otherwise, an error is returned.
   * *   If you call this operation on an ACL that does not exist, a success message is returned.
   * 
   * @param request - DeleteIpControlRequest
   * @returns DeleteIpControlResponse
   */
  async deleteIpControl(request: $_model.DeleteIpControlRequest): Promise<$_model.DeleteIpControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIpControlWithOptions(request, runtime);
  }

  /**
   * Delete the specified log configuration.
   * 
   * @param request - DeleteLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLogConfigResponse
   */
  async deleteLogConfigWithOptions(request: $_model.DeleteLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLogConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLogConfig",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLogConfigResponse({}));
  }

  /**
   * Delete the specified log configuration.
   * 
   * @param request - DeleteLogConfigRequest
   * @returns DeleteLogConfigResponse
   */
  async deleteLogConfig(request: $_model.DeleteLogConfigRequest): Promise<$_model.DeleteLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLogConfigWithOptions(request, runtime);
  }

  /**
   * Deletes a model.
   * 
   * @param request - DeleteModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelResponse
   */
  async deleteModelWithOptions(request: $_model.DeleteModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModel",
      version: "2016-07-14",
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
   * Deletes a model.
   * 
   * @param request - DeleteModelRequest
   * @returns DeleteModelResponse
   */
  async deleteModel(request: $_model.DeleteModelRequest): Promise<$_model.DeleteModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteModelWithOptions(request, runtime);
  }

  /**
   * Deletes a CloudMonitor application group corresponding to an API group.
   * 
   * @param request - DeleteMonitorGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMonitorGroupResponse
   */
  async deleteMonitorGroupWithOptions(request: $_model.DeleteMonitorGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMonitorGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.rawMonitorGroupId)) {
      query["RawMonitorGroupId"] = request.rawMonitorGroupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMonitorGroup",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMonitorGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMonitorGroupResponse({}));
  }

  /**
   * Deletes a CloudMonitor application group corresponding to an API group.
   * 
   * @param request - DeleteMonitorGroupRequest
   * @returns DeleteMonitorGroupResponse
   */
  async deleteMonitorGroup(request: $_model.DeleteMonitorGroupRequest): Promise<$_model.DeleteMonitorGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMonitorGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a plug-in.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   You must first unbind the plug-in from the API. Otherwise, an error is reported when you delete the plug-in.
   * 
   * @param request - DeletePluginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePluginResponse
   */
  async deletePluginWithOptions(request: $_model.DeletePluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePluginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePlugin",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePluginResponse>(await this.callApi(params, req, runtime), new $_model.DeletePluginResponse({}));
  }

  /**
   * Deletes a plug-in.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   You must first unbind the plug-in from the API. Otherwise, an error is reported when you delete the plug-in.
   * 
   * @param request - DeletePluginRequest
   * @returns DeletePluginResponse
   */
  async deletePlugin(request: $_model.DeletePluginRequest): Promise<$_model.DeletePluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePluginWithOptions(request, runtime);
  }

  /**
   * Deletes an internal domain name resolution.
   * 
   * @param request - DeletePrivateDNSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrivateDNSResponse
   */
  async deletePrivateDNSWithOptions(request: $_model.DeletePrivateDNSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePrivateDNSResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.intranetDomain)) {
      query["IntranetDomain"] = request.intranetDomain;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrivateDNS",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePrivateDNSResponse>(await this.callApi(params, req, runtime), new $_model.DeletePrivateDNSResponse({}));
  }

  /**
   * Deletes an internal domain name resolution.
   * 
   * @param request - DeletePrivateDNSRequest
   * @returns DeletePrivateDNSResponse
   */
  async deletePrivateDNS(request: $_model.DeletePrivateDNSRequest): Promise<$_model.DeletePrivateDNSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePrivateDNSWithOptions(request, runtime);
  }

  /**
   * Deletes a backend signature key.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   This API operation deletes an existing backend signature key.
   * *   You cannot delete a key that is bound to an API. To delete the key, you must unbind it first.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - DeleteSignatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSignatureResponse
   */
  async deleteSignatureWithOptions(request: $_model.DeleteSignatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSignatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.signatureId)) {
      query["SignatureId"] = request.signatureId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSignature",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSignatureResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSignatureResponse({}));
  }

  /**
   * Deletes a backend signature key.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   This API operation deletes an existing backend signature key.
   * *   You cannot delete a key that is bound to an API. To delete the key, you must unbind it first.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - DeleteSignatureRequest
   * @returns DeleteSignatureResponse
   */
  async deleteSignature(request: $_model.DeleteSignatureRequest): Promise<$_model.DeleteSignatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSignatureWithOptions(request, runtime);
  }

  /**
   * Deletes a custom throttling policy and the special throttling rules in the policy.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   If the throttling policy you want to delete is bound to APIs, you need to unbind the policy first. Otherwise, an error is reported when you delete the policy.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - DeleteTrafficControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTrafficControlResponse
   */
  async deleteTrafficControlWithOptions(request: $_model.DeleteTrafficControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTrafficControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTrafficControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTrafficControlResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTrafficControlResponse({}));
  }

  /**
   * Deletes a custom throttling policy and the special throttling rules in the policy.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   If the throttling policy you want to delete is bound to APIs, you need to unbind the policy first. Otherwise, an error is reported when you delete the policy.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - DeleteTrafficControlRequest
   * @returns DeleteTrafficControlResponse
   */
  async deleteTrafficControl(request: $_model.DeleteTrafficControlRequest): Promise<$_model.DeleteTrafficControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTrafficControlWithOptions(request, runtime);
  }

  /**
   * Deletes a custom special throttling policy.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   You can obtain the input parameters required in this operation by calling other APIs.
   * 
   * @param request - DeleteTrafficSpecialControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTrafficSpecialControlResponse
   */
  async deleteTrafficSpecialControlWithOptions(request: $_model.DeleteTrafficSpecialControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTrafficSpecialControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.specialKey)) {
      query["SpecialKey"] = request.specialKey;
    }

    if (!$dara.isNull(request.specialType)) {
      query["SpecialType"] = request.specialType;
    }

    if (!$dara.isNull(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTrafficSpecialControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTrafficSpecialControlResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTrafficSpecialControlResponse({}));
  }

  /**
   * Deletes a custom special throttling policy.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   You can obtain the input parameters required in this operation by calling other APIs.
   * 
   * @param request - DeleteTrafficSpecialControlRequest
   * @returns DeleteTrafficSpecialControlResponse
   */
  async deleteTrafficSpecialControl(request: $_model.DeleteTrafficSpecialControlRequest): Promise<$_model.DeleteTrafficSpecialControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTrafficSpecialControlWithOptions(request, runtime);
  }

  /**
   * Publishes an API to an environment.
   * 
   * @remarks
   *   This operation is intended for API providers. Only the API that you have defined and published to a runtime environment can be called.
   * *   An API is published to a cluster in under 5 seconds.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - DeployApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployApiResponse
   */
  async deployApiWithOptions(request: $_model.DeployApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeployApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployApiResponse>(await this.callApi(params, req, runtime), new $_model.DeployApiResponse({}));
  }

  /**
   * Publishes an API to an environment.
   * 
   * @remarks
   *   This operation is intended for API providers. Only the API that you have defined and published to a runtime environment can be called.
   * *   An API is published to a cluster in under 5 seconds.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - DeployApiRequest
   * @returns DeployApiResponse
   */
  async deployApi(request: $_model.DeployApiRequest): Promise<$_model.DeployApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deployApiWithOptions(request, runtime);
  }

  /**
   * 查询批量下线API任务
   * 
   * @param request - DescribeAbolishApiTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAbolishApiTaskResponse
   */
  async describeAbolishApiTaskWithOptions(request: $_model.DescribeAbolishApiTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAbolishApiTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.operationUid)) {
      query["OperationUid"] = request.operationUid;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAbolishApiTask",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAbolishApiTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAbolishApiTaskResponse({}));
  }

  /**
   * 查询批量下线API任务
   * 
   * @param request - DescribeAbolishApiTaskRequest
   * @returns DescribeAbolishApiTaskResponse
   */
  async describeAbolishApiTask(request: $_model.DescribeAbolishApiTaskRequest): Promise<$_model.DescribeAbolishApiTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAbolishApiTaskWithOptions(request, runtime);
  }

  /**
   * This feature provides instance-level access control for dedicated instances. Queries the details of an access control policy.
   * 
   * @param request - DescribeAccessControlListAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessControlListAttributeResponse
   */
  async describeAccessControlListAttributeWithOptions(request: $_model.DescribeAccessControlListAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccessControlListAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccessControlListAttribute",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccessControlListAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccessControlListAttributeResponse({}));
  }

  /**
   * This feature provides instance-level access control for dedicated instances. Queries the details of an access control policy.
   * 
   * @param request - DescribeAccessControlListAttributeRequest
   * @returns DescribeAccessControlListAttributeResponse
   */
  async describeAccessControlListAttribute(request: $_model.DescribeAccessControlListAttributeRequest): Promise<$_model.DescribeAccessControlListAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessControlListAttributeWithOptions(request, runtime);
  }

  /**
   * This feature provides instance-level access control for dedicated instances. Queries access control policies.
   * 
   * @param request - DescribeAccessControlListsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessControlListsResponse
   */
  async describeAccessControlListsWithOptions(request: $_model.DescribeAccessControlListsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccessControlListsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!$dara.isNull(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccessControlLists",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccessControlListsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccessControlListsResponse({}));
  }

  /**
   * This feature provides instance-level access control for dedicated instances. Queries access control policies.
   * 
   * @param request - DescribeAccessControlListsRequest
   * @returns DescribeAccessControlListsResponse
   */
  async describeAccessControlLists(request: $_model.DescribeAccessControlListsRequest): Promise<$_model.DescribeAccessControlListsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessControlListsWithOptions(request, runtime);
  }

  /**
   * Queries the definition of an API.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * 
   * @param request - DescribeApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiResponse
   */
  async describeApiWithOptions(request: $_model.DescribeApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiResponse({}));
  }

  /**
   * Queries the definition of an API.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * 
   * @param request - DescribeApiRequest
   * @returns DescribeApiResponse
   */
  async describeApi(request: $_model.DescribeApiRequest): Promise<$_model.DescribeApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiWithOptions(request, runtime);
  }

  /**
   * Queries the documentation of an API.
   * 
   * @remarks
   *   For API callers, the specified API must be a public or authorized private API that has been published to a runtime environment.
   * *   When you call this operation as an API caller, the service information, parameter definitions, and other details of the API you specify are returned.
   * *   When you call this operation as an API provider, the definition of the specified API running in the specified runtime environment is returned. The returned definition takes effect in the runtime environment, and may be different from the definition of the API you modify.
   * *   Before you call this operation as an API provider, ensure that the API to be queried is a public one or that your application has been authorized to call the API, because authentication on API callers is required.
   * 
   * @param request - DescribeApiDocRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiDocResponse
   */
  async describeApiDocWithOptions(request: $_model.DescribeApiDocRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiDocResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiDoc",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiDocResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiDocResponse({}));
  }

  /**
   * Queries the documentation of an API.
   * 
   * @remarks
   *   For API callers, the specified API must be a public or authorized private API that has been published to a runtime environment.
   * *   When you call this operation as an API caller, the service information, parameter definitions, and other details of the API you specify are returned.
   * *   When you call this operation as an API provider, the definition of the specified API running in the specified runtime environment is returned. The returned definition takes effect in the runtime environment, and may be different from the definition of the API you modify.
   * *   Before you call this operation as an API provider, ensure that the API to be queried is a public one or that your application has been authorized to call the API, because authentication on API callers is required.
   * 
   * @param request - DescribeApiDocRequest
   * @returns DescribeApiDocResponse
   */
  async describeApiDoc(request: $_model.DescribeApiDocRequest): Promise<$_model.DescribeApiDocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiDocWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query details about an API group, including the automatically assigned second-level domain name, custom domain name, and SSL certificate.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * 
   * @param request - DescribeApiGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiGroupResponse
   */
  async describeApiGroupWithOptions(request: $_model.DescribeApiGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiGroup",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiGroupResponse({}));
  }

  /**
   * You can call this operation to query details about an API group, including the automatically assigned second-level domain name, custom domain name, and SSL certificate.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * 
   * @param request - DescribeApiGroupRequest
   * @returns DescribeApiGroupResponse
   */
  async describeApiGroup(request: $_model.DescribeApiGroupRequest): Promise<$_model.DescribeApiGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiGroupWithOptions(request, runtime);
  }

  /**
   * Queries the VPC whitelist that is allowed to access an API group.
   * 
   * @param request - DescribeApiGroupVpcWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiGroupVpcWhitelistResponse
   */
  async describeApiGroupVpcWhitelistWithOptions(request: $_model.DescribeApiGroupVpcWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiGroupVpcWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiGroupVpcWhitelist",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiGroupVpcWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiGroupVpcWhitelistResponse({}));
  }

  /**
   * Queries the VPC whitelist that is allowed to access an API group.
   * 
   * @param request - DescribeApiGroupVpcWhitelistRequest
   * @returns DescribeApiGroupVpcWhitelistResponse
   */
  async describeApiGroupVpcWhitelist(request: $_model.DescribeApiGroupVpcWhitelistRequest): Promise<$_model.DescribeApiGroupVpcWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiGroupVpcWhitelistWithOptions(request, runtime);
  }

  /**
   * Queries existing API groups and their basic information.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * 
   * @param request - DescribeApiGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiGroupsResponse
   */
  async describeApiGroupsWithOptions(request: $_model.DescribeApiGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.basePath)) {
      query["BasePath"] = request.basePath;
    }

    if (!$dara.isNull(request.enableTagAuth)) {
      query["EnableTagAuth"] = request.enableTagAuth;
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

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiGroups",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiGroupsResponse({}));
  }

  /**
   * Queries existing API groups and their basic information.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * 
   * @param request - DescribeApiGroupsRequest
   * @returns DescribeApiGroupsResponse
   */
  async describeApiGroups(request: $_model.DescribeApiGroupsRequest): Promise<$_model.DescribeApiGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the historical versions of a specified API.
   * 
   * @remarks
   *   This operation is intended for API providers. Only APIs that have been published have historical version records.
   * *   This operation allows you to obtain the historical versions of an API. This operation is always called by other operations.
   * 
   * @param request - DescribeApiHistoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiHistoriesResponse
   */
  async describeApiHistoriesWithOptions(request: $_model.DescribeApiHistoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiHistoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiHistories",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiHistoriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiHistoriesResponse({}));
  }

  /**
   * Queries the historical versions of a specified API.
   * 
   * @remarks
   *   This operation is intended for API providers. Only APIs that have been published have historical version records.
   * *   This operation allows you to obtain the historical versions of an API. This operation is always called by other operations.
   * 
   * @param request - DescribeApiHistoriesRequest
   * @returns DescribeApiHistoriesResponse
   */
  async describeApiHistories(request: $_model.DescribeApiHistoriesRequest): Promise<$_model.DescribeApiHistoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiHistoriesWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified historical version of a specified API definition.
   * 
   * @remarks
   * Queries the details of a specified historical version of a specified API definition.
   * *   This API is intended for API providers.
   * *   API Gateway records the time and definition of an API every time the API is published. You can use the version number obtained from other operations to query definition details at a certain publication.
   * 
   * @param request - DescribeApiHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiHistoryResponse
   */
  async describeApiHistoryWithOptions(request: $_model.DescribeApiHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.historyVersion)) {
      query["HistoryVersion"] = request.historyVersion;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiHistory",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiHistoryResponse({}));
  }

  /**
   * Queries the details of a specified historical version of a specified API definition.
   * 
   * @remarks
   * Queries the details of a specified historical version of a specified API definition.
   * *   This API is intended for API providers.
   * *   API Gateway records the time and definition of an API every time the API is published. You can use the version number obtained from other operations to query definition details at a certain publication.
   * 
   * @param request - DescribeApiHistoryRequest
   * @returns DescribeApiHistoryResponse
   */
  async describeApiHistory(request: $_model.DescribeApiHistoryRequest): Promise<$_model.DescribeApiHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiHistoryWithOptions(request, runtime);
  }

  /**
   * Queries the access control lists (ACLs) that are bound to all the APIs in an API group in a specified environment.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   If an optional parameter is not specified, all results are returned on separate pages.
   * ·
   * 
   * @param request - DescribeApiIpControlsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiIpControlsResponse
   */
  async describeApiIpControlsWithOptions(request: $_model.DescribeApiIpControlsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiIpControlsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiIpControls",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiIpControlsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiIpControlsResponse({}));
  }

  /**
   * Queries the access control lists (ACLs) that are bound to all the APIs in an API group in a specified environment.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   If an optional parameter is not specified, all results are returned on separate pages.
   * ·
   * 
   * @param request - DescribeApiIpControlsRequest
   * @returns DescribeApiIpControlsResponse
   */
  async describeApiIpControls(request: $_model.DescribeApiIpControlsRequest): Promise<$_model.DescribeApiIpControlsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiIpControlsWithOptions(request, runtime);
  }

  /**
   * Queries the response time statistics of an API.
   * 
   * @remarks
   * You can call this operation to query the latency metrics in milliseconds for a specified API.
   * *   This API is intended for API providers.
   * *   Only statistics for API calls made in the release environment are collected by default.
   * 
   * @param request - DescribeApiLatencyDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiLatencyDataResponse
   */
  async describeApiLatencyDataWithOptions(request: $_model.DescribeApiLatencyDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiLatencyDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiLatencyData",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiLatencyDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiLatencyDataResponse({}));
  }

  /**
   * Queries the response time statistics of an API.
   * 
   * @remarks
   * You can call this operation to query the latency metrics in milliseconds for a specified API.
   * *   This API is intended for API providers.
   * *   Only statistics for API calls made in the release environment are collected by default.
   * 
   * @param request - DescribeApiLatencyDataRequest
   * @returns DescribeApiLatencyDataResponse
   */
  async describeApiLatencyData(request: $_model.DescribeApiLatencyDataRequest): Promise<$_model.DescribeApiLatencyDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiLatencyDataWithOptions(request, runtime);
  }

  /**
   * Queries the Alibaba Cloud Marketplace attributes of an API.
   * 
   * @param request - DescribeApiMarketAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiMarketAttributesResponse
   */
  async describeApiMarketAttributesWithOptions(request: $_model.DescribeApiMarketAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiMarketAttributesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiMarketAttributes",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiMarketAttributesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiMarketAttributesResponse({}));
  }

  /**
   * Queries the Alibaba Cloud Marketplace attributes of an API.
   * 
   * @param request - DescribeApiMarketAttributesRequest
   * @returns DescribeApiMarketAttributesResponse
   */
  async describeApiMarketAttributes(request: $_model.DescribeApiMarketAttributesRequest): Promise<$_model.DescribeApiMarketAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiMarketAttributesWithOptions(request, runtime);
  }

  /**
   * Queries the attached APIs of an API product.
   * 
   * @param request - DescribeApiProductApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiProductApisResponse
   */
  async describeApiProductApisWithOptions(request: $_model.DescribeApiProductApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiProductApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiProductId)) {
      query["ApiProductId"] = request.apiProductId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiProductApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiProductApisResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiProductApisResponse({}));
  }

  /**
   * Queries the attached APIs of an API product.
   * 
   * @param request - DescribeApiProductApisRequest
   * @returns DescribeApiProductApisResponse
   */
  async describeApiProductApis(request: $_model.DescribeApiProductApisRequest): Promise<$_model.DescribeApiProductApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiProductApisWithOptions(request, runtime);
  }

  /**
   * Queries API products by application.
   * 
   * @param request - DescribeApiProductsByAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiProductsByAppResponse
   */
  async describeApiProductsByAppWithOptions(request: $_model.DescribeApiProductsByAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiProductsByAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiProductsByApp",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiProductsByAppResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiProductsByAppResponse({}));
  }

  /**
   * Queries API products by application.
   * 
   * @param request - DescribeApiProductsByAppRequest
   * @returns DescribeApiProductsByAppResponse
   */
  async describeApiProductsByApp(request: $_model.DescribeApiProductsByAppRequest): Promise<$_model.DescribeApiProductsByAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiProductsByAppWithOptions(request, runtime);
  }

  /**
   * Queries the QPS statistics of an API.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   Only statistics for API calls made in the release environment are collected by default.
   * 
   * @param request - DescribeApiQpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiQpsDataResponse
   */
  async describeApiQpsDataWithOptions(request: $_model.DescribeApiQpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiQpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiQpsData",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiQpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiQpsDataResponse({}));
  }

  /**
   * Queries the QPS statistics of an API.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   Only statistics for API calls made in the release environment are collected by default.
   * 
   * @param request - DescribeApiQpsDataRequest
   * @returns DescribeApiQpsDataResponse
   */
  async describeApiQpsData(request: $_model.DescribeApiQpsDataRequest): Promise<$_model.DescribeApiQpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiQpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the backend signature keys that are bound to the APIs of a specified API group in a specified environment.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   The ApiIds parameter is optional. If this parameter is not specified, all results in the specified environment of an API group are returned.
   * 
   * @param request - DescribeApiSignaturesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiSignaturesResponse
   */
  async describeApiSignaturesWithOptions(request: $_model.DescribeApiSignaturesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiSignaturesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiSignatures",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiSignaturesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiSignaturesResponse({}));
  }

  /**
   * Queries the backend signature keys that are bound to the APIs of a specified API group in a specified environment.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   The ApiIds parameter is optional. If this parameter is not specified, all results in the specified environment of an API group are returned.
   * 
   * @param request - DescribeApiSignaturesRequest
   * @returns DescribeApiSignaturesResponse
   */
  async describeApiSignatures(request: $_model.DescribeApiSignaturesRequest): Promise<$_model.DescribeApiSignaturesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiSignaturesWithOptions(request, runtime);
  }

  /**
   * Queries the throttling policies bound to all members of an API group in a specified environment.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   The ApiIds parameter is optional. If this parameter is not specified, all results in the specified environment of an API group are returned.
   * 
   * @param request - DescribeApiTrafficControlsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiTrafficControlsResponse
   */
  async describeApiTrafficControlsWithOptions(request: $_model.DescribeApiTrafficControlsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiTrafficControlsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiTrafficControls",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiTrafficControlsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiTrafficControlsResponse({}));
  }

  /**
   * Queries the throttling policies bound to all members of an API group in a specified environment.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   The ApiIds parameter is optional. If this parameter is not specified, all results in the specified environment of an API group are returned.
   * 
   * @param request - DescribeApiTrafficControlsRequest
   * @returns DescribeApiTrafficControlsResponse
   */
  async describeApiTrafficControls(request: $_model.DescribeApiTrafficControlsRequest): Promise<$_model.DescribeApiTrafficControlsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiTrafficControlsWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on the traffic of an API.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   Only statistics for API calls made in the release environment are collected by default.
   * 
   * @param request - DescribeApiTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiTrafficDataResponse
   */
  async describeApiTrafficDataWithOptions(request: $_model.DescribeApiTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiTrafficData",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiTrafficDataResponse({}));
  }

  /**
   * Queries the statistics on the traffic of an API.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   Only statistics for API calls made in the release environment are collected by default.
   * 
   * @param request - DescribeApiTrafficDataRequest
   * @returns DescribeApiTrafficDataResponse
   */
  async describeApiTrafficData(request: $_model.DescribeApiTrafficDataRequest): Promise<$_model.DescribeApiTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiTrafficDataWithOptions(request, runtime);
  }

  /**
   * Queries a list of APIs that are being defined.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   This operation returns a list of all APIs that are being defined. The basic information about these APIs is also returned in the list.
   * *   This operation returns all APIs that are being edited, regardless of their environments. The returned definitions may be different from the definitions in the environments.
   * 
   * @param request - DescribeApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisResponse
   */
  async describeApisWithOptions(request: $_model.DescribeApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.apiMethod)) {
      query["ApiMethod"] = request.apiMethod;
    }

    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.apiPath)) {
      query["ApiPath"] = request.apiPath;
    }

    if (!$dara.isNull(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!$dara.isNull(request.enableTagAuth)) {
      query["EnableTagAuth"] = request.enableTagAuth;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.unDeployed)) {
      query["UnDeployed"] = request.unDeployed;
    }

    if (!$dara.isNull(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisResponse({}));
  }

  /**
   * Queries a list of APIs that are being defined.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   This operation returns a list of all APIs that are being defined. The basic information about these APIs is also returned in the list.
   * *   This operation returns all APIs that are being edited, regardless of their environments. The returned definitions may be different from the definitions in the environments.
   * 
   * @param request - DescribeApisRequest
   * @returns DescribeApisResponse
   */
  async describeApis(request: $_model.DescribeApisRequest): Promise<$_model.DescribeApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisWithOptions(request, runtime);
  }

  /**
   * Queries the APIs with which an application is associated.
   * 
   * @param request - DescribeApisByAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisByAppResponse
   */
  async describeApisByAppWithOptions(request: $_model.DescribeApisByAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisByAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.apiUid)) {
      query["ApiUid"] = request.apiUid;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.method)) {
      query["Method"] = request.method;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisByApp",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisByAppResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisByAppResponse({}));
  }

  /**
   * Queries the APIs with which an application is associated.
   * 
   * @param request - DescribeApisByAppRequest
   * @returns DescribeApisByAppResponse
   */
  async describeApisByApp(request: $_model.DescribeApisByAppRequest): Promise<$_model.DescribeApisByAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisByAppWithOptions(request, runtime);
  }

  /**
   * Queries APIs in the draft or published state that are created by using a specified backend service.
   * 
   * @param request - DescribeApisByBackendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisByBackendResponse
   */
  async describeApisByBackendWithOptions(request: $_model.DescribeApisByBackendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisByBackendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisByBackend",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisByBackendResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisByBackendResponse({}));
  }

  /**
   * Queries APIs in the draft or published state that are created by using a specified backend service.
   * 
   * @param request - DescribeApisByBackendRequest
   * @returns DescribeApisByBackendResponse
   */
  async describeApisByBackend(request: $_model.DescribeApisByBackendRequest): Promise<$_model.DescribeApisByBackendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisByBackendWithOptions(request, runtime);
  }

  /**
   * Queries the APIs that are bound to an access control list (ACL).
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   You can specify PageNumber to obtain the result on the specified page.
   * 
   * @param request - DescribeApisByIpControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisByIpControlResponse
   */
  async describeApisByIpControlWithOptions(request: $_model.DescribeApisByIpControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisByIpControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisByIpControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisByIpControlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisByIpControlResponse({}));
  }

  /**
   * Queries the APIs that are bound to an access control list (ACL).
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   You can specify PageNumber to obtain the result on the specified page.
   * 
   * @param request - DescribeApisByIpControlRequest
   * @returns DescribeApisByIpControlResponse
   */
  async describeApisByIpControl(request: $_model.DescribeApisByIpControlRequest): Promise<$_model.DescribeApisByIpControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisByIpControlWithOptions(request, runtime);
  }

  /**
   * Queries the APIs to which a specified backend signature key is bound.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   The results are returned on separate pages. You can specify PageNumber to obtain the result on the specified page.
   * 
   * @param request - DescribeApisBySignatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisBySignatureResponse
   */
  async describeApisBySignatureWithOptions(request: $_model.DescribeApisBySignatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisBySignatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.signatureId)) {
      query["SignatureId"] = request.signatureId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisBySignature",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisBySignatureResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisBySignatureResponse({}));
  }

  /**
   * Queries the APIs to which a specified backend signature key is bound.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   The results are returned on separate pages. You can specify PageNumber to obtain the result on the specified page.
   * 
   * @param request - DescribeApisBySignatureRequest
   * @returns DescribeApisBySignatureResponse
   */
  async describeApisBySignature(request: $_model.DescribeApisBySignatureRequest): Promise<$_model.DescribeApisBySignatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisBySignatureWithOptions(request, runtime);
  }

  /**
   * Queries the APIs to which a specified throttling policy is bound.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   You can specify PageNumber to obtain the result on the specified page.
   * 
   * @param request - DescribeApisByTrafficControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisByTrafficControlResponse
   */
  async describeApisByTrafficControlWithOptions(request: $_model.DescribeApisByTrafficControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisByTrafficControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisByTrafficControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisByTrafficControlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisByTrafficControlResponse({}));
  }

  /**
   * Queries the APIs to which a specified throttling policy is bound.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   You can specify PageNumber to obtain the result on the specified page.
   * 
   * @param request - DescribeApisByTrafficControlRequest
   * @returns DescribeApisByTrafficControlResponse
   */
  async describeApisByTrafficControl(request: $_model.DescribeApisByTrafficControlRequest): Promise<$_model.DescribeApisByTrafficControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisByTrafficControlWithOptions(request, runtime);
  }

  /**
   * Queries the APIs that are associated with a virtual private cloud (VPC) access authorization in a region.
   * 
   * @param request - DescribeApisByVpcAccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisByVpcAccessResponse
   */
  async describeApisByVpcAccessWithOptions(request: $_model.DescribeApisByVpcAccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisByVpcAccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.vpcName)) {
      query["VpcName"] = request.vpcName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisByVpcAccess",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisByVpcAccessResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisByVpcAccessResponse({}));
  }

  /**
   * Queries the APIs that are associated with a virtual private cloud (VPC) access authorization in a region.
   * 
   * @param request - DescribeApisByVpcAccessRequest
   * @returns DescribeApisByVpcAccessResponse
   */
  async describeApisByVpcAccess(request: $_model.DescribeApisByVpcAccessRequest): Promise<$_model.DescribeApisByVpcAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisByVpcAccessWithOptions(request, runtime);
  }

  /**
   * Queries APIs by application. The environment information is also returned.
   * 
   * @param request - DescribeApisWithStageNameIntegratedByAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisWithStageNameIntegratedByAppResponse
   */
  async describeApisWithStageNameIntegratedByAppWithOptions(request: $_model.DescribeApisWithStageNameIntegratedByAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisWithStageNameIntegratedByAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.apiUid)) {
      query["ApiUid"] = request.apiUid;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.method)) {
      query["Method"] = request.method;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisWithStageNameIntegratedByApp",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisWithStageNameIntegratedByAppResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisWithStageNameIntegratedByAppResponse({}));
  }

  /**
   * Queries APIs by application. The environment information is also returned.
   * 
   * @param request - DescribeApisWithStageNameIntegratedByAppRequest
   * @returns DescribeApisWithStageNameIntegratedByAppResponse
   */
  async describeApisWithStageNameIntegratedByApp(request: $_model.DescribeApisWithStageNameIntegratedByAppRequest): Promise<$_model.DescribeApisWithStageNameIntegratedByAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisWithStageNameIntegratedByAppWithOptions(request, runtime);
  }

  /**
   * Queries the apps that can be authorized.
   * 
   * @param request - DescribeAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppResponse
   */
  async describeAppWithOptions(request: $_model.DescribeAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApp",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppResponse({}));
  }

  /**
   * Queries the apps that can be authorized.
   * 
   * @param request - DescribeAppRequest
   * @returns DescribeAppResponse
   */
  async describeApp(request: $_model.DescribeAppRequest): Promise<$_model.DescribeAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppWithOptions(request, runtime);
  }

  /**
   * Queries apps and their basic information.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   AppId is optional.
   * 
   * @param request - DescribeAppAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppAttributesResponse
   */
  async describeAppAttributesWithOptions(request: $_model.DescribeAppAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppAttributesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.enableTagAuth)) {
      query["EnableTagAuth"] = request.enableTagAuth;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppAttributes",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppAttributesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppAttributesResponse({}));
  }

  /**
   * Queries apps and their basic information.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   AppId is optional.
   * 
   * @param request - DescribeAppAttributesRequest
   * @returns DescribeAppAttributesResponse
   */
  async describeAppAttributes(request: $_model.DescribeAppAttributesRequest): Promise<$_model.DescribeAppAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppAttributesWithOptions(request, runtime);
  }

  /**
   * Queries the key-related information of an application.
   * 
   * @param request - DescribeAppSecuritiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppSecuritiesResponse
   */
  async describeAppSecuritiesWithOptions(request: $_model.DescribeAppSecuritiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppSecuritiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppSecurities",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppSecuritiesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppSecuritiesResponse({}));
  }

  /**
   * Queries the key-related information of an application.
   * 
   * @param request - DescribeAppSecuritiesRequest
   * @returns DescribeAppSecuritiesResponse
   */
  async describeAppSecurities(request: $_model.DescribeAppSecuritiesRequest): Promise<$_model.DescribeAppSecuritiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppSecuritiesWithOptions(request, runtime);
  }

  /**
   * This key is used for authentication when an API call is made.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * 
   * @param request - DescribeAppSecurityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppSecurityResponse
   */
  async describeAppSecurityWithOptions(request: $_model.DescribeAppSecurityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppSecurityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppSecurity",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppSecurityResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppSecurityResponse({}));
  }

  /**
   * This key is used for authentication when an API call is made.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * 
   * @param request - DescribeAppSecurityRequest
   * @returns DescribeAppSecurityResponse
   */
  async describeAppSecurity(request: $_model.DescribeAppSecurityRequest): Promise<$_model.DescribeAppSecurityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppSecurityWithOptions(request, runtime);
  }

  /**
   * Queries the apps of a user. App information is returned only to the app owner.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   API providers can use the app IDs or their Alibaba Cloud accounts to query app information.
   * *   Each provider can call this operation for a maximum of 200 times every day in a region.
   * 
   * @param request - DescribeAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppsResponse
   */
  async describeAppsWithOptions(request: $_model.DescribeAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appOwner)) {
      query["AppOwner"] = request.appOwner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApps",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppsResponse({}));
  }

  /**
   * Queries the apps of a user. App information is returned only to the app owner.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   API providers can use the app IDs or their Alibaba Cloud accounts to query app information.
   * *   Each provider can call this operation for a maximum of 200 times every day in a region.
   * 
   * @param request - DescribeAppsRequest
   * @returns DescribeAppsResponse
   */
  async describeApps(request: $_model.DescribeAppsRequest): Promise<$_model.DescribeAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppsWithOptions(request, runtime);
  }

  /**
   * Queries authorized applications by API product.
   * 
   * @param request - DescribeAppsByApiProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppsByApiProductResponse
   */
  async describeAppsByApiProductWithOptions(request: $_model.DescribeAppsByApiProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppsByApiProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiProductId)) {
      query["ApiProductId"] = request.apiProductId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppsByApiProduct",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppsByApiProductResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppsByApiProductResponse({}));
  }

  /**
   * Queries authorized applications by API product.
   * 
   * @param request - DescribeAppsByApiProductRequest
   * @returns DescribeAppsByApiProductResponse
   */
  async describeAppsByApiProduct(request: $_model.DescribeAppsByApiProductRequest): Promise<$_model.DescribeAppsByApiProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppsByApiProductWithOptions(request, runtime);
  }

  /**
   * Queries the authorized APIs of a specified APP.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   The specified application can call all APIs included in the responses.
   * 
   * @param request - DescribeAuthorizedApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuthorizedApisResponse
   */
  async describeAuthorizedApisWithOptions(request: $_model.DescribeAuthorizedApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuthorizedApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuthorizedApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuthorizedApisResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuthorizedApisResponse({}));
  }

  /**
   * Queries the authorized APIs of a specified APP.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   The specified application can call all APIs included in the responses.
   * 
   * @param request - DescribeAuthorizedApisRequest
   * @returns DescribeAuthorizedApisResponse
   */
  async describeAuthorizedApis(request: $_model.DescribeAuthorizedApisRequest): Promise<$_model.DescribeAuthorizedApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuthorizedApisWithOptions(request, runtime);
  }

  /**
   * Queries the current apps.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   All applications included in the responses have access to the specified API.
   * 
   * @param request - DescribeAuthorizedAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuthorizedAppsResponse
   */
  async describeAuthorizedAppsWithOptions(request: $_model.DescribeAuthorizedAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuthorizedAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appOwnerId)) {
      query["AppOwnerId"] = request.appOwnerId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuthorizedApps",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuthorizedAppsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuthorizedAppsResponse({}));
  }

  /**
   * Queries the current apps.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   All applications included in the responses have access to the specified API.
   * 
   * @param request - DescribeAuthorizedAppsRequest
   * @returns DescribeAuthorizedAppsResponse
   */
  async describeAuthorizedApps(request: $_model.DescribeAuthorizedAppsRequest): Promise<$_model.DescribeAuthorizedAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuthorizedAppsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a backend service and its URL configured for each environment.
   * 
   * @param request - DescribeBackendInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackendInfoResponse
   */
  async describeBackendInfoWithOptions(request: $_model.DescribeBackendInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackendInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackendInfo",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackendInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackendInfoResponse({}));
  }

  /**
   * Queries the information about a backend service and its URL configured for each environment.
   * 
   * @param request - DescribeBackendInfoRequest
   * @returns DescribeBackendInfoResponse
   */
  async describeBackendInfo(request: $_model.DescribeBackendInfoRequest): Promise<$_model.DescribeBackendInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackendInfoWithOptions(request, runtime);
  }

  /**
   * Queries backend services. You can filter backend services by backend service name and backend service type.
   * 
   * @param request - DescribeBackendListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackendListResponse
   */
  async describeBackendListWithOptions(request: $_model.DescribeBackendListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackendListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendName)) {
      query["BackendName"] = request.backendName;
    }

    if (!$dara.isNull(request.backendType)) {
      query["BackendType"] = request.backendType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackendList",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackendListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackendListResponse({}));
  }

  /**
   * Queries backend services. You can filter backend services by backend service name and backend service type.
   * 
   * @param request - DescribeBackendListRequest
   * @returns DescribeBackendListResponse
   */
  async describeBackendList(request: $_model.DescribeBackendListRequest): Promise<$_model.DescribeBackendListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackendListWithOptions(request, runtime);
  }

  /**
   * Queries the information about a single dataset.
   * 
   * @param request - DescribeDatasetInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatasetInfoResponse
   */
  async describeDatasetInfoWithOptions(request: $_model.DescribeDatasetInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDatasetInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDatasetInfo",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDatasetInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDatasetInfoResponse({}));
  }

  /**
   * Queries the information about a single dataset.
   * 
   * @param request - DescribeDatasetInfoRequest
   * @returns DescribeDatasetInfoResponse
   */
  async describeDatasetInfo(request: $_model.DescribeDatasetInfoRequest): Promise<$_model.DescribeDatasetInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatasetInfoWithOptions(request, runtime);
  }

  /**
   * Queries a data entry in a custom dataset.
   * 
   * @param request - DescribeDatasetItemInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatasetItemInfoResponse
   */
  async describeDatasetItemInfoWithOptions(request: $_model.DescribeDatasetItemInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDatasetItemInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetItemId)) {
      query["DatasetItemId"] = request.datasetItemId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDatasetItemInfo",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDatasetItemInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDatasetItemInfoResponse({}));
  }

  /**
   * Queries a data entry in a custom dataset.
   * 
   * @param request - DescribeDatasetItemInfoRequest
   * @returns DescribeDatasetItemInfoResponse
   */
  async describeDatasetItemInfo(request: $_model.DescribeDatasetItemInfoRequest): Promise<$_model.DescribeDatasetItemInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatasetItemInfoWithOptions(request, runtime);
  }

  /**
   * Queries the data entries of a custom dataset.
   * 
   * @param request - DescribeDatasetItemListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatasetItemListResponse
   */
  async describeDatasetItemListWithOptions(request: $_model.DescribeDatasetItemListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDatasetItemListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetItemIds)) {
      query["DatasetItemIds"] = request.datasetItemIds;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDatasetItemList",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDatasetItemListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDatasetItemListResponse({}));
  }

  /**
   * Queries the data entries of a custom dataset.
   * 
   * @param request - DescribeDatasetItemListRequest
   * @returns DescribeDatasetItemListResponse
   */
  async describeDatasetItemList(request: $_model.DescribeDatasetItemListRequest): Promise<$_model.DescribeDatasetItemListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatasetItemListWithOptions(request, runtime);
  }

  /**
   * Queries custom datasets.
   * 
   * @param request - DescribeDatasetListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatasetListResponse
   */
  async describeDatasetListWithOptions(request: $_model.DescribeDatasetListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDatasetListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetIds)) {
      query["DatasetIds"] = request.datasetIds;
    }

    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDatasetList",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDatasetListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDatasetListResponse({}));
  }

  /**
   * Queries custom datasets.
   * 
   * @param request - DescribeDatasetListRequest
   * @returns DescribeDatasetListResponse
   */
  async describeDatasetList(request: $_model.DescribeDatasetListRequest): Promise<$_model.DescribeDatasetListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatasetListWithOptions(request, runtime);
  }

  /**
   * Queries the progress of an asynchronous API publishing task.
   * 
   * @param request - DescribeDeployApiTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeployApiTaskResponse
   */
  async describeDeployApiTaskWithOptions(request: $_model.DescribeDeployApiTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeployApiTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.operationUid)) {
      query["OperationUid"] = request.operationUid;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeployApiTask",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeployApiTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeployApiTaskResponse({}));
  }

  /**
   * Queries the progress of an asynchronous API publishing task.
   * 
   * @param request - DescribeDeployApiTaskRequest
   * @returns DescribeDeployApiTaskResponse
   */
  async describeDeployApiTask(request: $_model.DescribeDeployApiTaskRequest): Promise<$_model.DescribeDeployApiTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeployApiTaskWithOptions(request, runtime);
  }

  /**
   * Queries the definition of an API that takes effect in an environment. The definition may differ from the definition being edited.
   * 
   * @param request - DescribeDeployedApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeployedApiResponse
   */
  async describeDeployedApiWithOptions(request: $_model.DescribeDeployedApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeployedApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeployedApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeployedApiResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeployedApiResponse({}));
  }

  /**
   * Queries the definition of an API that takes effect in an environment. The definition may differ from the definition being edited.
   * 
   * @param request - DescribeDeployedApiRequest
   * @returns DescribeDeployedApiResponse
   */
  async describeDeployedApi(request: $_model.DescribeDeployedApiRequest): Promise<$_model.DescribeDeployedApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeployedApiWithOptions(request, runtime);
  }

  /**
   * Queries the APIs that have been published to a specified environment.
   * 
   * @remarks
   *   This API is intended for API providers.
   * 
   * @param request - DescribeDeployedApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeployedApisResponse
   */
  async describeDeployedApisWithOptions(request: $_model.DescribeDeployedApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeployedApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.apiMethod)) {
      query["ApiMethod"] = request.apiMethod;
    }

    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.apiPath)) {
      query["ApiPath"] = request.apiPath;
    }

    if (!$dara.isNull(request.enableTagAuth)) {
      query["EnableTagAuth"] = request.enableTagAuth;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeployedApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeployedApisResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeployedApisResponse({}));
  }

  /**
   * Queries the APIs that have been published to a specified environment.
   * 
   * @remarks
   *   This API is intended for API providers.
   * 
   * @param request - DescribeDeployedApisRequest
   * @returns DescribeDeployedApisResponse
   */
  async describeDeployedApis(request: $_model.DescribeDeployedApisRequest): Promise<$_model.DescribeDeployedApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeployedApisWithOptions(request, runtime);
  }

  /**
   * Queries details about a bound custom domain name, including the automatically assigned second-level domain name, custom domain name, and SSL certificate.
   * 
   * @param request - DescribeDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainResponse
   */
  async describeDomainWithOptions(request: $_model.DescribeDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomain",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainResponse({}));
  }

  /**
   * Queries details about a bound custom domain name, including the automatically assigned second-level domain name, custom domain name, and SSL certificate.
   * 
   * @param request - DescribeDomainRequest
   * @returns DescribeDomainResponse
   */
  async describeDomain(request: $_model.DescribeDomainRequest): Promise<$_model.DescribeDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainWithOptions(request, runtime);
  }

  /**
   * Queries the average latency of an API group in an environment.
   * 
   * @param request - DescribeGroupLatencyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupLatencyResponse
   */
  async describeGroupLatencyWithOptions(request: $_model.DescribeGroupLatencyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupLatencyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroupLatency",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupLatencyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupLatencyResponse({}));
  }

  /**
   * Queries the average latency of an API group in an environment.
   * 
   * @param request - DescribeGroupLatencyRequest
   * @returns DescribeGroupLatencyResponse
   */
  async describeGroupLatency(request: $_model.DescribeGroupLatencyRequest): Promise<$_model.DescribeGroupLatencyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupLatencyWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on the number of requests directed to an API group within a period of time.
   * 
   * @param request - DescribeGroupQpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupQpsResponse
   */
  async describeGroupQpsWithOptions(request: $_model.DescribeGroupQpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupQpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroupQps",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupQpsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupQpsResponse({}));
  }

  /**
   * Queries the statistics on the number of requests directed to an API group within a period of time.
   * 
   * @param request - DescribeGroupQpsRequest
   * @returns DescribeGroupQpsResponse
   */
  async describeGroupQps(request: $_model.DescribeGroupQpsRequest): Promise<$_model.DescribeGroupQpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupQpsWithOptions(request, runtime);
  }

  /**
   * Queries the traffic of an API group.
   * 
   * @param request - DescribeGroupTrafficRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupTrafficResponse
   */
  async describeGroupTrafficWithOptions(request: $_model.DescribeGroupTrafficRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupTrafficResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroupTraffic",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupTrafficResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupTrafficResponse({}));
  }

  /**
   * Queries the traffic of an API group.
   * 
   * @param request - DescribeGroupTrafficRequest
   * @returns DescribeGroupTrafficResponse
   */
  async describeGroupTraffic(request: $_model.DescribeGroupTrafficRequest): Promise<$_model.DescribeGroupTrafficResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupTrafficWithOptions(request, runtime);
  }

  /**
   * Queries the historical versions of an API.
   * 
   * @param request - DescribeHistoryApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHistoryApisResponse
   */
  async describeHistoryApisWithOptions(request: $_model.DescribeHistoryApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHistoryApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHistoryApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHistoryApisResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHistoryApisResponse({}));
  }

  /**
   * Queries the historical versions of an API.
   * 
   * @param request - DescribeHistoryApisRequest
   * @returns DescribeHistoryApisResponse
   */
  async describeHistoryApis(request: $_model.DescribeHistoryApisRequest): Promise<$_model.DescribeHistoryApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryApisWithOptions(request, runtime);
  }

  /**
   * Queries the result of an OAS API import task.
   * 
   * @param request - DescribeImportOASTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImportOASTaskResponse
   */
  async describeImportOASTaskWithOptions(request: $_model.DescribeImportOASTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImportOASTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.operationId)) {
      query["OperationId"] = request.operationId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImportOASTask",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeImportOASTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeImportOASTaskResponse({}));
  }

  /**
   * Queries the result of an OAS API import task.
   * 
   * @param request - DescribeImportOASTaskRequest
   * @returns DescribeImportOASTaskResponse
   */
  async describeImportOASTask(request: $_model.DescribeImportOASTaskRequest): Promise<$_model.DescribeImportOASTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImportOASTaskWithOptions(request, runtime);
  }

  /**
   * Queries the information about a dedicated instance cluster.
   * 
   * @param request - DescribeInstanceClusterInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceClusterInfoResponse
   */
  async describeInstanceClusterInfoWithOptions(request: $_model.DescribeInstanceClusterInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceClusterInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceClusterName)) {
      query["InstanceClusterName"] = request.instanceClusterName;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceClusterInfo",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceClusterInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceClusterInfoResponse({}));
  }

  /**
   * Queries the information about a dedicated instance cluster.
   * 
   * @param request - DescribeInstanceClusterInfoRequest
   * @returns DescribeInstanceClusterInfoResponse
   */
  async describeInstanceClusterInfo(request: $_model.DescribeInstanceClusterInfoRequest): Promise<$_model.DescribeInstanceClusterInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceClusterInfoWithOptions(request, runtime);
  }

  /**
   * Queries dedicated instance clusters.
   * 
   * @param request - DescribeInstanceClusterListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceClusterListResponse
   */
  async describeInstanceClusterListWithOptions(request: $_model.DescribeInstanceClusterListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceClusterListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceClusterId)) {
      query["InstanceClusterId"] = request.instanceClusterId;
    }

    if (!$dara.isNull(request.instanceClusterName)) {
      query["InstanceClusterName"] = request.instanceClusterName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceClusterList",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceClusterListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceClusterListResponse({}));
  }

  /**
   * Queries dedicated instance clusters.
   * 
   * @param request - DescribeInstanceClusterListRequest
   * @returns DescribeInstanceClusterListResponse
   */
  async describeInstanceClusterList(request: $_model.DescribeInstanceClusterListRequest): Promise<$_model.DescribeInstanceClusterListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceClusterListWithOptions(request, runtime);
  }

  /**
   * Queries the number of lost connections to a dedicated instance within a period of time.
   * 
   * @param request - DescribeInstanceDropConnectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceDropConnectionsResponse
   */
  async describeInstanceDropConnectionsWithOptions(request: $_model.DescribeInstanceDropConnectionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceDropConnectionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sbcName)) {
      query["SbcName"] = request.sbcName;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceDropConnections",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceDropConnectionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceDropConnectionsResponse({}));
  }

  /**
   * Queries the number of lost connections to a dedicated instance within a period of time.
   * 
   * @param request - DescribeInstanceDropConnectionsRequest
   * @returns DescribeInstanceDropConnectionsResponse
   */
  async describeInstanceDropConnections(request: $_model.DescribeInstanceDropConnectionsRequest): Promise<$_model.DescribeInstanceDropConnectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceDropConnectionsWithOptions(request, runtime);
  }

  /**
   * Queries the number of dropped packets within a period of time.
   * 
   * @param request - DescribeInstanceDropPacketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceDropPacketResponse
   */
  async describeInstanceDropPacketWithOptions(request: $_model.DescribeInstanceDropPacketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceDropPacketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sbcName)) {
      query["SbcName"] = request.sbcName;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceDropPacket",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceDropPacketResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceDropPacketResponse({}));
  }

  /**
   * Queries the number of dropped packets within a period of time.
   * 
   * @param request - DescribeInstanceDropPacketRequest
   * @returns DescribeInstanceDropPacketResponse
   */
  async describeInstanceDropPacket(request: $_model.DescribeInstanceDropPacketRequest): Promise<$_model.DescribeInstanceDropPacketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceDropPacketWithOptions(request, runtime);
  }

  /**
   * Queries the distribution of HTTP status codes of requests to a dedicated instance within a period of time.
   * 
   * @param request - DescribeInstanceHttpCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceHttpCodeResponse
   */
  async describeInstanceHttpCodeWithOptions(request: $_model.DescribeInstanceHttpCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceHttpCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceHttpCode",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceHttpCodeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceHttpCodeResponse({}));
  }

  /**
   * Queries the distribution of HTTP status codes of requests to a dedicated instance within a period of time.
   * 
   * @param request - DescribeInstanceHttpCodeRequest
   * @returns DescribeInstanceHttpCodeResponse
   */
  async describeInstanceHttpCode(request: $_model.DescribeInstanceHttpCodeRequest): Promise<$_model.DescribeInstanceHttpCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceHttpCodeWithOptions(request, runtime);
  }

  /**
   * Queries the average latency of a dedicated instance over a period of time.
   * 
   * @param request - DescribeInstanceLatencyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceLatencyResponse
   */
  async describeInstanceLatencyWithOptions(request: $_model.DescribeInstanceLatencyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceLatencyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceLatency",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceLatencyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceLatencyResponse({}));
  }

  /**
   * Queries the average latency of a dedicated instance over a period of time.
   * 
   * @param request - DescribeInstanceLatencyRequest
   * @returns DescribeInstanceLatencyResponse
   */
  async describeInstanceLatency(request: $_model.DescribeInstanceLatencyRequest): Promise<$_model.DescribeInstanceLatencyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceLatencyWithOptions(request, runtime);
  }

  /**
   * Queries the number of new connections to a dedicated instance within a period of time.
   * 
   * @param request - DescribeInstanceNewConnectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceNewConnectionsResponse
   */
  async describeInstanceNewConnectionsWithOptions(request: $_model.DescribeInstanceNewConnectionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceNewConnectionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sbcName)) {
      query["SbcName"] = request.sbcName;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceNewConnections",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceNewConnectionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceNewConnectionsResponse({}));
  }

  /**
   * Queries the number of new connections to a dedicated instance within a period of time.
   * 
   * @param request - DescribeInstanceNewConnectionsRequest
   * @returns DescribeInstanceNewConnectionsResponse
   */
  async describeInstanceNewConnections(request: $_model.DescribeInstanceNewConnectionsRequest): Promise<$_model.DescribeInstanceNewConnectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceNewConnectionsWithOptions(request, runtime);
  }

  /**
   * Queries the numbers of inbound and outbound packets of a dedicated instance within a period of time.
   * 
   * @param request - DescribeInstancePacketsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancePacketsResponse
   */
  async describeInstancePacketsWithOptions(request: $_model.DescribeInstancePacketsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstancePacketsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sbcName)) {
      query["SbcName"] = request.sbcName;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstancePackets",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstancePacketsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstancePacketsResponse({}));
  }

  /**
   * Queries the numbers of inbound and outbound packets of a dedicated instance within a period of time.
   * 
   * @param request - DescribeInstancePacketsRequest
   * @returns DescribeInstancePacketsResponse
   */
  async describeInstancePackets(request: $_model.DescribeInstancePacketsRequest): Promise<$_model.DescribeInstancePacketsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancePacketsWithOptions(request, runtime);
  }

  /**
   * Queries the number of requests to a dedicated instance within a period of time.
   * 
   * @param request - DescribeInstanceQpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceQpsResponse
   */
  async describeInstanceQpsWithOptions(request: $_model.DescribeInstanceQpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceQpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceQps",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceQpsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceQpsResponse({}));
  }

  /**
   * Queries the number of requests to a dedicated instance within a period of time.
   * 
   * @param request - DescribeInstanceQpsRequest
   * @returns DescribeInstanceQpsResponse
   */
  async describeInstanceQps(request: $_model.DescribeInstanceQpsRequest): Promise<$_model.DescribeInstanceQpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceQpsWithOptions(request, runtime);
  }

  /**
   * Queries the number of concurrent connections to a dedicated instance within a period of time.
   * 
   * @param request - DescribeInstanceSlbConnectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSlbConnectResponse
   */
  async describeInstanceSlbConnectWithOptions(request: $_model.DescribeInstanceSlbConnectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceSlbConnectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sbcName)) {
      query["SbcName"] = request.sbcName;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceSlbConnect",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceSlbConnectResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceSlbConnectResponse({}));
  }

  /**
   * Queries the number of concurrent connections to a dedicated instance within a period of time.
   * 
   * @param request - DescribeInstanceSlbConnectRequest
   * @returns DescribeInstanceSlbConnectResponse
   */
  async describeInstanceSlbConnect(request: $_model.DescribeInstanceSlbConnectRequest): Promise<$_model.DescribeInstanceSlbConnectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSlbConnectWithOptions(request, runtime);
  }

  /**
   * Queries the request traffic and response traffic of a dedicated instance within a period of time.
   * 
   * @param request - DescribeInstanceTrafficRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceTrafficResponse
   */
  async describeInstanceTrafficWithOptions(request: $_model.DescribeInstanceTrafficRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceTrafficResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceTraffic",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceTrafficResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceTrafficResponse({}));
  }

  /**
   * Queries the request traffic and response traffic of a dedicated instance within a period of time.
   * 
   * @param request - DescribeInstanceTrafficRequest
   * @returns DescribeInstanceTrafficResponse
   */
  async describeInstanceTraffic(request: $_model.DescribeInstanceTrafficRequest): Promise<$_model.DescribeInstanceTrafficResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceTrafficWithOptions(request, runtime);
  }

  /**
   * Queries the details of instances in a region. The instances include shared instances and dedicated instances.
   * 
   * @param request - DescribeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
   */
  async describeInstancesWithOptions(request: $_model.DescribeInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableTagAuthorization)) {
      query["EnableTagAuthorization"] = request.enableTagAuthorization;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstances",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstancesResponse({}));
  }

  /**
   * Queries the details of instances in a region. The instances include shared instances and dedicated instances.
   * 
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: $_model.DescribeInstancesRequest): Promise<$_model.DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the rule entries of an IP address-based traffic control policy.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   You can filter the query results by policy ID.
   * 
   * @param request - DescribeIpControlPolicyItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIpControlPolicyItemsResponse
   */
  async describeIpControlPolicyItemsWithOptions(request: $_model.DescribeIpControlPolicyItemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIpControlPolicyItemsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyItemId)) {
      query["PolicyItemId"] = request.policyItemId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIpControlPolicyItems",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIpControlPolicyItemsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIpControlPolicyItemsResponse({}));
  }

  /**
   * Queries the rule entries of an IP address-based traffic control policy.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   You can filter the query results by policy ID.
   * 
   * @param request - DescribeIpControlPolicyItemsRequest
   * @returns DescribeIpControlPolicyItemsResponse
   */
  async describeIpControlPolicyItems(request: $_model.DescribeIpControlPolicyItemsRequest): Promise<$_model.DescribeIpControlPolicyItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIpControlPolicyItemsWithOptions(request, runtime);
  }

  /**
   * Queries custom access control lists (ACLs) on separate pages.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   This operation is used to query the ACLs in a region. Region is a system parameter.
   * *   You can filter the query results by ACL ID, name, or type.
   * *   This operation cannot be used to query specific policies. If you want to query specific policies, call the [DescribeIpControlPolicyItems](~~DescribeIpControlPolicyItems~~) operation.
   * 
   * @param request - DescribeIpControlsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIpControlsResponse
   */
  async describeIpControlsWithOptions(request: $_model.DescribeIpControlsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIpControlsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!$dara.isNull(request.ipControlName)) {
      query["IpControlName"] = request.ipControlName;
    }

    if (!$dara.isNull(request.ipControlType)) {
      query["IpControlType"] = request.ipControlType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIpControls",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIpControlsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIpControlsResponse({}));
  }

  /**
   * Queries custom access control lists (ACLs) on separate pages.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   This operation is used to query the ACLs in a region. Region is a system parameter.
   * *   You can filter the query results by ACL ID, name, or type.
   * *   This operation cannot be used to query specific policies. If you want to query specific policies, call the [DescribeIpControlPolicyItems](~~DescribeIpControlPolicyItems~~) operation.
   * 
   * @param request - DescribeIpControlsRequest
   * @returns DescribeIpControlsResponse
   */
  async describeIpControls(request: $_model.DescribeIpControlsRequest): Promise<$_model.DescribeIpControlsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIpControlsWithOptions(request, runtime);
  }

  /**
   * 查询日志配置
   * 
   * @param request - DescribeLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogConfigResponse
   */
  async describeLogConfigWithOptions(request: $_model.DescribeLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLogConfig",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogConfigResponse({}));
  }

  /**
   * 查询日志配置
   * 
   * @param request - DescribeLogConfigRequest
   * @returns DescribeLogConfigResponse
   */
  async describeLogConfig(request: $_model.DescribeLogConfigRequest): Promise<$_model.DescribeLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogConfigWithOptions(request, runtime);
  }

  /**
   * Queries the number of remaining ordered relationships for a purchaser.
   * 
   * @param request - DescribeMarketRemainsQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMarketRemainsQuotaResponse
   */
  async describeMarketRemainsQuotaWithOptions(request: $_model.DescribeMarketRemainsQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMarketRemainsQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMarketRemainsQuota",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMarketRemainsQuotaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMarketRemainsQuotaResponse({}));
  }

  /**
   * Queries the number of remaining ordered relationships for a purchaser.
   * 
   * @param request - DescribeMarketRemainsQuotaRequest
   * @returns DescribeMarketRemainsQuotaResponse
   */
  async describeMarketRemainsQuota(request: $_model.DescribeMarketRemainsQuotaRequest): Promise<$_model.DescribeMarketRemainsQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMarketRemainsQuotaWithOptions(request, runtime);
  }

  /**
   * Queries the created models of an API group.
   * 
   * @remarks
   *   Fuzzy queries are supported.
   * 
   * @param request - DescribeModelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeModelsResponse
   */
  async describeModelsWithOptions(request: $_model.DescribeModelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!$dara.isNull(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeModels",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeModelsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeModelsResponse({}));
  }

  /**
   * Queries the created models of an API group.
   * 
   * @remarks
   *   Fuzzy queries are supported.
   * 
   * @param request - DescribeModelsRequest
   * @returns DescribeModelsResponse
   */
  async describeModels(request: $_model.DescribeModelsRequest): Promise<$_model.DescribeModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModelsWithOptions(request, runtime);
  }

  /**
   * Queries the APIs to which a specified plug-in is bound.
   * 
   * @param request - DescribePluginApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePluginApisResponse
   */
  async describePluginApisWithOptions(request: $_model.DescribePluginApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePluginApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.method)) {
      query["Method"] = request.method;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePluginApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePluginApisResponse>(await this.callApi(params, req, runtime), new $_model.DescribePluginApisResponse({}));
  }

  /**
   * Queries the APIs to which a specified plug-in is bound.
   * 
   * @param request - DescribePluginApisRequest
   * @returns DescribePluginApisResponse
   */
  async describePluginApis(request: $_model.DescribePluginApisRequest): Promise<$_model.DescribePluginApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePluginApisWithOptions(request, runtime);
  }

  /**
   * Query the list of groups bound to a plugin based on the plugin ID
   * 
   * @param request - DescribePluginGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePluginGroupsResponse
   */
  async describePluginGroupsWithOptions(request: $_model.DescribePluginGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePluginGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePluginGroups",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePluginGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePluginGroupsResponse({}));
  }

  /**
   * Query the list of groups bound to a plugin based on the plugin ID
   * 
   * @param request - DescribePluginGroupsRequest
   * @returns DescribePluginGroupsResponse
   */
  async describePluginGroups(request: $_model.DescribePluginGroupsRequest): Promise<$_model.DescribePluginGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePluginGroupsWithOptions(request, runtime);
  }

  /**
   * 查询插件列表
   * 
   * @param request - DescribePluginSchemasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePluginSchemasResponse
   */
  async describePluginSchemasWithOptions(request: $_model.DescribePluginSchemasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePluginSchemasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePluginSchemas",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePluginSchemasResponse>(await this.callApi(params, req, runtime), new $_model.DescribePluginSchemasResponse({}));
  }

  /**
   * 查询插件列表
   * 
   * @param request - DescribePluginSchemasRequest
   * @returns DescribePluginSchemasResponse
   */
  async describePluginSchemas(request: $_model.DescribePluginSchemasRequest): Promise<$_model.DescribePluginSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePluginSchemasWithOptions(request, runtime);
  }

  /**
   * 查询插件模板
   * 
   * @param request - DescribePluginTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePluginTemplatesResponse
   */
  async describePluginTemplatesWithOptions(request: $_model.DescribePluginTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePluginTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pluginName)) {
      query["PluginName"] = request.pluginName;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePluginTemplates",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePluginTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribePluginTemplatesResponse({}));
  }

  /**
   * 查询插件模板
   * 
   * @param request - DescribePluginTemplatesRequest
   * @returns DescribePluginTemplatesResponse
   */
  async describePluginTemplates(request: $_model.DescribePluginTemplatesRequest): Promise<$_model.DescribePluginTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePluginTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries API Gateway plug-ins and the details of the plug-ins.
   * 
   * @remarks
   *   This operation supports pagination.
   * *   This operation allows you to query plug-ins by business type.
   * *   This operation allows you to query plug-ins by ID.
   * *   This operation allows you to query plug-ins by name.
   * 
   * @param request - DescribePluginsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePluginsResponse
   */
  async describePluginsWithOptions(request: $_model.DescribePluginsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePluginsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.pluginName)) {
      query["PluginName"] = request.pluginName;
    }

    if (!$dara.isNull(request.pluginType)) {
      query["PluginType"] = request.pluginType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlugins",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePluginsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePluginsResponse({}));
  }

  /**
   * Queries API Gateway plug-ins and the details of the plug-ins.
   * 
   * @remarks
   *   This operation supports pagination.
   * *   This operation allows you to query plug-ins by business type.
   * *   This operation allows you to query plug-ins by ID.
   * *   This operation allows you to query plug-ins by name.
   * 
   * @param request - DescribePluginsRequest
   * @returns DescribePluginsResponse
   */
  async describePlugins(request: $_model.DescribePluginsRequest): Promise<$_model.DescribePluginsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePluginsWithOptions(request, runtime);
  }

  /**
   * Queries the plug-ins that are bound to a running API in an environment.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   This operation supports pagination.
   * 
   * @param request - DescribePluginsByApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePluginsByApiResponse
   */
  async describePluginsByApiWithOptions(request: $_model.DescribePluginsByApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePluginsByApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePluginsByApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePluginsByApiResponse>(await this.callApi(params, req, runtime), new $_model.DescribePluginsByApiResponse({}));
  }

  /**
   * Queries the plug-ins that are bound to a running API in an environment.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   This operation supports pagination.
   * 
   * @param request - DescribePluginsByApiRequest
   * @returns DescribePluginsByApiResponse
   */
  async describePluginsByApi(request: $_model.DescribePluginsByApiRequest): Promise<$_model.DescribePluginsByApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePluginsByApiWithOptions(request, runtime);
  }

  /**
   * Query Plugins Bound to API Group
   * 
   * @param request - DescribePluginsByGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePluginsByGroupResponse
   */
  async describePluginsByGroupWithOptions(request: $_model.DescribePluginsByGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePluginsByGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePluginsByGroup",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePluginsByGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribePluginsByGroupResponse({}));
  }

  /**
   * Query Plugins Bound to API Group
   * 
   * @param request - DescribePluginsByGroupRequest
   * @returns DescribePluginsByGroupResponse
   */
  async describePluginsByGroup(request: $_model.DescribePluginsByGroupRequest): Promise<$_model.DescribePluginsByGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePluginsByGroupWithOptions(request, runtime);
  }

  /**
   * Queries the details about an API group purchased from Alibaba Cloud Marketplace.
   * 
   * @param request - DescribePurchasedApiGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePurchasedApiGroupResponse
   */
  async describePurchasedApiGroupWithOptions(request: $_model.DescribePurchasedApiGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePurchasedApiGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePurchasedApiGroup",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePurchasedApiGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribePurchasedApiGroupResponse({}));
  }

  /**
   * Queries the details about an API group purchased from Alibaba Cloud Marketplace.
   * 
   * @param request - DescribePurchasedApiGroupRequest
   * @returns DescribePurchasedApiGroupResponse
   */
  async describePurchasedApiGroup(request: $_model.DescribePurchasedApiGroupRequest): Promise<$_model.DescribePurchasedApiGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePurchasedApiGroupWithOptions(request, runtime);
  }

  /**
   * Queries the API groups purchased from Alibaba Cloud Marketplace.
   * 
   * @param request - DescribePurchasedApiGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePurchasedApiGroupsResponse
   */
  async describePurchasedApiGroupsWithOptions(request: $_model.DescribePurchasedApiGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePurchasedApiGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePurchasedApiGroups",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePurchasedApiGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePurchasedApiGroupsResponse({}));
  }

  /**
   * Queries the API groups purchased from Alibaba Cloud Marketplace.
   * 
   * @param request - DescribePurchasedApiGroupsRequest
   * @returns DescribePurchasedApiGroupsResponse
   */
  async describePurchasedApiGroups(request: $_model.DescribePurchasedApiGroupsRequest): Promise<$_model.DescribePurchasedApiGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePurchasedApiGroupsWithOptions(request, runtime);
  }

  /**
   * Queries APIs that are purchased from Alibaba Cloud Marketplace.
   * 
   * @param request - DescribePurchasedApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePurchasedApisResponse
   */
  async describePurchasedApisWithOptions(request: $_model.DescribePurchasedApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePurchasedApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!$dara.isNull(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePurchasedApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePurchasedApisResponse>(await this.callApi(params, req, runtime), new $_model.DescribePurchasedApisResponse({}));
  }

  /**
   * Queries APIs that are purchased from Alibaba Cloud Marketplace.
   * 
   * @param request - DescribePurchasedApisRequest
   * @returns DescribePurchasedApisResponse
   */
  async describePurchasedApis(request: $_model.DescribePurchasedApisRequest): Promise<$_model.DescribePurchasedApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePurchasedApisWithOptions(request, runtime);
  }

  /**
   * Queries the Alibaba Cloud regions that are supported by API Gateway.
   * 
   * @remarks
   * This operation queries regions in which API Gateway is available.
   * *   This operation is intended for API providers and callers.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2016-07-14",
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
   * Queries the Alibaba Cloud regions that are supported by API Gateway.
   * 
   * @remarks
   * This operation queries regions in which API Gateway is available.
   * *   This operation is intended for API providers and callers.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries backend signature keys.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   This operation is used to query the backend signature keys in a Region. Region is a system parameter.
   * 
   * @param request - DescribeSignaturesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSignaturesResponse
   */
  async describeSignaturesWithOptions(request: $_model.DescribeSignaturesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSignaturesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.signatureId)) {
      query["SignatureId"] = request.signatureId;
    }

    if (!$dara.isNull(request.signatureName)) {
      query["SignatureName"] = request.signatureName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSignatures",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSignaturesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSignaturesResponse({}));
  }

  /**
   * Queries backend signature keys.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   This operation is used to query the backend signature keys in a Region. Region is a system parameter.
   * 
   * @param request - DescribeSignaturesRequest
   * @returns DescribeSignaturesResponse
   */
  async describeSignatures(request: $_model.DescribeSignaturesRequest): Promise<$_model.DescribeSignaturesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSignaturesWithOptions(request, runtime);
  }

  /**
   * Queries the backend signature keys that are bound to a specified API.
   * 
   * @remarks
   *   This API is intended for API providers.
   * 
   * @param request - DescribeSignaturesByApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSignaturesByApiResponse
   */
  async describeSignaturesByApiWithOptions(request: $_model.DescribeSignaturesByApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSignaturesByApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSignaturesByApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSignaturesByApiResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSignaturesByApiResponse({}));
  }

  /**
   * Queries the backend signature keys that are bound to a specified API.
   * 
   * @remarks
   *   This API is intended for API providers.
   * 
   * @param request - DescribeSignaturesByApiRequest
   * @returns DescribeSignaturesByApiResponse
   */
  async describeSignaturesByApi(request: $_model.DescribeSignaturesByApiRequest): Promise<$_model.DescribeSignaturesByApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSignaturesByApiWithOptions(request, runtime);
  }

  /**
   * Queries the number of API Gateway resources in a region.
   * 
   * @param request - DescribeSummaryDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSummaryDataResponse
   */
  async describeSummaryDataWithOptions(request: $_model.DescribeSummaryDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSummaryDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSummaryData",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSummaryDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSummaryDataResponse({}));
  }

  /**
   * Queries the number of API Gateway resources in a region.
   * 
   * @param request - DescribeSummaryDataRequest
   * @returns DescribeSummaryDataResponse
   */
  async describeSummaryData(request: $_model.DescribeSummaryDataRequest): Promise<$_model.DescribeSummaryDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSummaryDataWithOptions(request, runtime);
  }

  /**
   * Queries the common parameters supported by the system.
   * 
   * @remarks
   *   This API is intended for API callers.
   * *   The response of this API contains the system parameters that are optional in API definitions.
   * 
   * @param request - DescribeSystemParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSystemParametersResponse
   */
  async describeSystemParametersWithOptions(request: $_model.DescribeSystemParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSystemParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSystemParameters",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSystemParametersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSystemParametersResponse({}));
  }

  /**
   * Queries the common parameters supported by the system.
   * 
   * @remarks
   *   This API is intended for API callers.
   * *   The response of this API contains the system parameters that are optional in API definitions.
   * 
   * @param request - DescribeSystemParametersRequest
   * @returns DescribeSystemParametersResponse
   */
  async describeSystemParameters(request: $_model.DescribeSystemParametersRequest): Promise<$_model.DescribeSystemParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSystemParametersWithOptions(request, runtime);
  }

  /**
   * Queries custom throttling policies and their details. Conditional queries are supported.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   This API can be used to query all existing throttling policies (including special throttling policies) and their details.
   * *   You can specify query conditions. For example, you can query the throttling policies bound to a specified API or in a specified environment.
   * 
   * @param request - DescribeTrafficControlsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTrafficControlsResponse
   */
  async describeTrafficControlsWithOptions(request: $_model.DescribeTrafficControlsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTrafficControlsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!$dara.isNull(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    if (!$dara.isNull(request.trafficControlName)) {
      query["TrafficControlName"] = request.trafficControlName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTrafficControls",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTrafficControlsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTrafficControlsResponse({}));
  }

  /**
   * Queries custom throttling policies and their details. Conditional queries are supported.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   This API can be used to query all existing throttling policies (including special throttling policies) and their details.
   * *   You can specify query conditions. For example, you can query the throttling policies bound to a specified API or in a specified environment.
   * 
   * @param request - DescribeTrafficControlsRequest
   * @returns DescribeTrafficControlsResponse
   */
  async describeTrafficControls(request: $_model.DescribeTrafficControlsRequest): Promise<$_model.DescribeTrafficControlsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTrafficControlsWithOptions(request, runtime);
  }

  /**
   * Queries the throttling policy that is bound to a specific API.
   * 
   * @remarks
   *   This API is intended for API providers.
   * 
   * @param request - DescribeTrafficControlsByApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTrafficControlsByApiResponse
   */
  async describeTrafficControlsByApiWithOptions(request: $_model.DescribeTrafficControlsByApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTrafficControlsByApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTrafficControlsByApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTrafficControlsByApiResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTrafficControlsByApiResponse({}));
  }

  /**
   * Queries the throttling policy that is bound to a specific API.
   * 
   * @remarks
   *   This API is intended for API providers.
   * 
   * @param request - DescribeTrafficControlsByApiRequest
   * @returns DescribeTrafficControlsByApiResponse
   */
  async describeTrafficControlsByApi(request: $_model.DescribeTrafficControlsByApiRequest): Promise<$_model.DescribeTrafficControlsByApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTrafficControlsByApiWithOptions(request, runtime);
  }

  /**
   * 查询批量更新API后端元定结果
   * 
   * @param request - DescribeUpdateBackendTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUpdateBackendTaskResponse
   */
  async describeUpdateBackendTaskWithOptions(request: $_model.DescribeUpdateBackendTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUpdateBackendTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.operationUid)) {
      query["OperationUid"] = request.operationUid;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUpdateBackendTask",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUpdateBackendTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUpdateBackendTaskResponse({}));
  }

  /**
   * 查询批量更新API后端元定结果
   * 
   * @param request - DescribeUpdateBackendTaskRequest
   * @returns DescribeUpdateBackendTaskResponse
   */
  async describeUpdateBackendTask(request: $_model.DescribeUpdateBackendTaskRequest): Promise<$_model.DescribeUpdateBackendTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUpdateBackendTaskWithOptions(request, runtime);
  }

  /**
   * 查询更新VPC授权的任务
   * 
   * @param request - DescribeUpdateVpcInfoTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUpdateVpcInfoTaskResponse
   */
  async describeUpdateVpcInfoTaskWithOptions(request: $_model.DescribeUpdateVpcInfoTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUpdateVpcInfoTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.operationUid)) {
      query["OperationUid"] = request.operationUid;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUpdateVpcInfoTask",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUpdateVpcInfoTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUpdateVpcInfoTaskResponse({}));
  }

  /**
   * 查询更新VPC授权的任务
   * 
   * @param request - DescribeUpdateVpcInfoTaskRequest
   * @returns DescribeUpdateVpcInfoTaskResponse
   */
  async describeUpdateVpcInfoTask(request: $_model.DescribeUpdateVpcInfoTaskRequest): Promise<$_model.DescribeUpdateVpcInfoTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUpdateVpcInfoTaskWithOptions(request, runtime);
  }

  /**
   * Queries VPC access authorizations.
   * 
   * @param request - DescribeVpcAccessesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcAccessesResponse
   */
  async describeVpcAccessesWithOptions(request: $_model.DescribeVpcAccessesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVpcAccessesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accurateQuery)) {
      query["AccurateQuery"] = request.accurateQuery;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpcAccessId)) {
      query["VpcAccessId"] = request.vpcAccessId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVpcAccesses",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVpcAccessesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVpcAccessesResponse({}));
  }

  /**
   * Queries VPC access authorizations.
   * 
   * @param request - DescribeVpcAccessesRequest
   * @returns DescribeVpcAccessesResponse
   */
  async describeVpcAccesses(request: $_model.DescribeVpcAccessesRequest): Promise<$_model.DescribeVpcAccessesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVpcAccessesWithOptions(request, runtime);
  }

  /**
   * Queries zones in a region.
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: $_model.DescribeZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZones",
      version: "2016-07-14",
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
   * Queries zones in a region.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Detaches APIs from an API product.
   * 
   * @param request - DetachApiProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachApiProductResponse
   */
  async detachApiProductWithOptions(request: $_model.DetachApiProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachApiProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiProductId)) {
      query["ApiProductId"] = request.apiProductId;
    }

    if (!$dara.isNull(request.apis)) {
      query["Apis"] = request.apis;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachApiProduct",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachApiProductResponse>(await this.callApi(params, req, runtime), new $_model.DetachApiProductResponse({}));
  }

  /**
   * Detaches APIs from an API product.
   * 
   * @param request - DetachApiProductRequest
   * @returns DetachApiProductResponse
   */
  async detachApiProduct(request: $_model.DetachApiProductRequest): Promise<$_model.DetachApiProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachApiProductWithOptions(request, runtime);
  }

  /**
   * Unbind group plugin
   * 
   * @param request - DetachGroupPluginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachGroupPluginResponse
   */
  async detachGroupPluginWithOptions(request: $_model.DetachGroupPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachGroupPluginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachGroupPlugin",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachGroupPluginResponse>(await this.callApi(params, req, runtime), new $_model.DetachGroupPluginResponse({}));
  }

  /**
   * Unbind group plugin
   * 
   * @param request - DetachGroupPluginRequest
   * @returns DetachGroupPluginResponse
   */
  async detachGroupPlugin(request: $_model.DetachGroupPluginRequest): Promise<$_model.DetachGroupPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachGroupPluginWithOptions(request, runtime);
  }

  /**
   * 解绑插件
   * 
   * @param request - DetachPluginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachPluginResponse
   */
  async detachPluginWithOptions(request: $_model.DetachPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachPluginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachPlugin",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachPluginResponse>(await this.callApi(params, req, runtime), new $_model.DetachPluginResponse({}));
  }

  /**
   * 解绑插件
   * 
   * @param request - DetachPluginRequest
   * @returns DetachPluginResponse
   */
  async detachPlugin(request: $_model.DetachPluginRequest): Promise<$_model.DetachPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachPluginWithOptions(request, runtime);
  }

  /**
   * This feature provides instance-level access control capabilities for dedicated API Gateway instances. Disables access control on an instance.
   * 
   * @param request - DisableInstanceAccessControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableInstanceAccessControlResponse
   */
  async disableInstanceAccessControlWithOptions(request: $_model.DisableInstanceAccessControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableInstanceAccessControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableInstanceAccessControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableInstanceAccessControlResponse>(await this.callApi(params, req, runtime), new $_model.DisableInstanceAccessControlResponse({}));
  }

  /**
   * This feature provides instance-level access control capabilities for dedicated API Gateway instances. Disables access control on an instance.
   * 
   * @param request - DisableInstanceAccessControlRequest
   * @returns DisableInstanceAccessControlResponse
   */
  async disableInstanceAccessControl(request: $_model.DisableInstanceAccessControlRequest): Promise<$_model.DisableInstanceAccessControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableInstanceAccessControlWithOptions(request, runtime);
  }

  /**
   * Disassociates an internal domain name resolution from a dedicated instance.
   * 
   * @param tmpReq - DissociateInstanceWithPrivateDNSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateInstanceWithPrivateDNSResponse
   */
  async dissociateInstanceWithPrivateDNSWithOptions(tmpReq: $_model.DissociateInstanceWithPrivateDNSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DissociateInstanceWithPrivateDNSResponse> {
    tmpReq.validate();
    let request = new $_model.DissociateInstanceWithPrivateDNSShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.intranetDomains)) {
      request.intranetDomainsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.intranetDomains, "IntranetDomains", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.intranetDomainsShrink)) {
      body["IntranetDomains"] = request.intranetDomainsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DissociateInstanceWithPrivateDNS",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DissociateInstanceWithPrivateDNSResponse>(await this.callApi(params, req, runtime), new $_model.DissociateInstanceWithPrivateDNSResponse({}));
  }

  /**
   * Disassociates an internal domain name resolution from a dedicated instance.
   * 
   * @param request - DissociateInstanceWithPrivateDNSRequest
   * @returns DissociateInstanceWithPrivateDNSResponse
   */
  async dissociateInstanceWithPrivateDNS(request: $_model.DissociateInstanceWithPrivateDNSRequest): Promise<$_model.DissociateInstanceWithPrivateDNSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dissociateInstanceWithPrivateDNSWithOptions(request, runtime);
  }

  /**
   * Checks the syntax before Swagger-compliant data is imported.
   * 
   * @param tmpReq - DryRunSwaggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DryRunSwaggerResponse
   */
  async dryRunSwaggerWithOptions(tmpReq: $_model.DryRunSwaggerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DryRunSwaggerResponse> {
    tmpReq.validate();
    let request = new $_model.DryRunSwaggerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.globalCondition)) {
      request.globalConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.globalCondition, "GlobalCondition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dataFormat)) {
      query["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.globalConditionShrink)) {
      query["GlobalCondition"] = request.globalConditionShrink;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.overwrite)) {
      query["Overwrite"] = request.overwrite;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DryRunSwagger",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DryRunSwaggerResponse>(await this.callApi(params, req, runtime), new $_model.DryRunSwaggerResponse({}));
  }

  /**
   * Checks the syntax before Swagger-compliant data is imported.
   * 
   * @param request - DryRunSwaggerRequest
   * @returns DryRunSwaggerResponse
   */
  async dryRunSwagger(request: $_model.DryRunSwaggerRequest): Promise<$_model.DryRunSwaggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dryRunSwaggerWithOptions(request, runtime);
  }

  /**
   * This feature provides instance-level access control capabilities for dedicated API Gateway instances. Specifies the access control policy of an instance.
   * 
   * @param request - EnableInstanceAccessControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableInstanceAccessControlResponse
   */
  async enableInstanceAccessControlWithOptions(request: $_model.EnableInstanceAccessControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableInstanceAccessControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.aclType)) {
      query["AclType"] = request.aclType;
    }

    if (!$dara.isNull(request.addressIPVersion)) {
      query["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableInstanceAccessControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableInstanceAccessControlResponse>(await this.callApi(params, req, runtime), new $_model.EnableInstanceAccessControlResponse({}));
  }

  /**
   * This feature provides instance-level access control capabilities for dedicated API Gateway instances. Specifies the access control policy of an instance.
   * 
   * @param request - EnableInstanceAccessControlRequest
   * @returns EnableInstanceAccessControlResponse
   */
  async enableInstanceAccessControl(request: $_model.EnableInstanceAccessControlRequest): Promise<$_model.EnableInstanceAccessControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableInstanceAccessControlWithOptions(request, runtime);
  }

  /**
   * 导出OAS
   * 
   * @param tmpReq - ExportOASRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportOASResponse
   */
  async exportOASWithOptions(tmpReq: $_model.ExportOASRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportOASResponse> {
    tmpReq.validate();
    let request = new $_model.ExportOASShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.apiIdList)) {
      request.apiIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.apiIdList, "ApiIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.apiIdListShrink)) {
      query["ApiIdList"] = request.apiIdListShrink;
    }

    if (!$dara.isNull(request.dataFormat)) {
      query["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.oasVersion)) {
      query["OasVersion"] = request.oasVersion;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!$dara.isNull(request.withXExtensions)) {
      query["WithXExtensions"] = request.withXExtensions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportOAS",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportOASResponse>(await this.callApi(params, req, runtime), new $_model.ExportOASResponse({}));
  }

  /**
   * 导出OAS
   * 
   * @param request - ExportOASRequest
   * @returns ExportOASResponse
   */
  async exportOAS(request: $_model.ExportOASRequest): Promise<$_model.ExportOASResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportOASWithOptions(request, runtime);
  }

  /**
   * Imports APIs based on the OAS standard.
   * 
   * @param request - ImportOASRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportOASResponse
   */
  async importOASWithOptions(request: $_model.ImportOASRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportOASResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.backendName)) {
      query["BackendName"] = request.backendName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.ignoreWarning)) {
      query["IgnoreWarning"] = request.ignoreWarning;
    }

    if (!$dara.isNull(request.OASVersion)) {
      query["OASVersion"] = request.OASVersion;
    }

    if (!$dara.isNull(request.overwrite)) {
      query["Overwrite"] = request.overwrite;
    }

    if (!$dara.isNull(request.requestMode)) {
      query["RequestMode"] = request.requestMode;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.skipDryRun)) {
      query["SkipDryRun"] = request.skipDryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportOAS",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportOASResponse>(await this.callApi(params, req, runtime), new $_model.ImportOASResponse({}));
  }

  /**
   * Imports APIs based on the OAS standard.
   * 
   * @param request - ImportOASRequest
   * @returns ImportOASResponse
   */
  async importOAS(request: $_model.ImportOASRequest): Promise<$_model.ImportOASResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importOASWithOptions(request, runtime);
  }

  /**
   * Creates an API by importing Swagger-compliant data.
   * 
   * @remarks
   *   Alibaba Cloud supports extensions based on Swagger 2.0.
   * *   Alibaba Cloud supports Swagger configuration files in JSON and YAML formats.
   * 
   * @param tmpReq - ImportSwaggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportSwaggerResponse
   */
  async importSwaggerWithOptions(tmpReq: $_model.ImportSwaggerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportSwaggerResponse> {
    tmpReq.validate();
    let request = new $_model.ImportSwaggerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.globalCondition)) {
      request.globalConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.globalCondition, "GlobalCondition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dataFormat)) {
      query["DataFormat"] = request.dataFormat;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.globalConditionShrink)) {
      query["GlobalCondition"] = request.globalConditionShrink;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.overwrite)) {
      query["Overwrite"] = request.overwrite;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportSwagger",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportSwaggerResponse>(await this.callApi(params, req, runtime), new $_model.ImportSwaggerResponse({}));
  }

  /**
   * Creates an API by importing Swagger-compliant data.
   * 
   * @remarks
   *   Alibaba Cloud supports extensions based on Swagger 2.0.
   * *   Alibaba Cloud supports Swagger configuration files in JSON and YAML formats.
   * 
   * @param request - ImportSwaggerRequest
   * @returns ImportSwaggerResponse
   */
  async importSwagger(request: $_model.ImportSwaggerRequest): Promise<$_model.ImportSwaggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importSwaggerWithOptions(request, runtime);
  }

  /**
   * Queries internal domain name resolutions by domain name or resolution type.
   * 
   * @param request - ListPrivateDNSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivateDNSResponse
   */
  async listPrivateDNSWithOptions(request: $_model.ListPrivateDNSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrivateDNSResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.intranetDomain)) {
      query["IntranetDomain"] = request.intranetDomain;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrivateDNS",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrivateDNSResponse>(await this.callApi(params, req, runtime), new $_model.ListPrivateDNSResponse({}));
  }

  /**
   * Queries internal domain name resolutions by domain name or resolution type.
   * 
   * @param request - ListPrivateDNSRequest
   * @returns ListPrivateDNSResponse
   */
  async listPrivateDNS(request: $_model.ListPrivateDNSRequest): Promise<$_model.ListPrivateDNSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrivateDNSWithOptions(request, runtime);
  }

  /**
   * Queries the visible resource tags.
   * 
   * @remarks
   *   The Tag.N.Key and Tag.N.Value parameters constitute a key-value pair.
   * *   ResourceId.N must meet all the key-value pairs that are entered. If you enter multiple key-value pairs, resources that contain the specified key-value pairs are returned.
   * *   This operation is used to query resource tags based on conditions. If no relationship matches the conditions, an empty list is returned.
   * *   You can query both user tags and visible system tags.
   * *   In addition to the required parameters, you can also specify ResourceId.N to query the visible resource tags of a specified resource in a region.
   * *   You can also specify Tag.N.Key to query the visible keys of a specified key in a region.
   * *   At least one of ResourceId.N, Tag.N.Key, and Tag.N.Value exists.
   * *   You can query tags of the same type or different types in a single operation.
   * *   You can query all your user types and visible system tags.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2016-07-14",
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
   * Queries the visible resource tags.
   * 
   * @remarks
   *   The Tag.N.Key and Tag.N.Value parameters constitute a key-value pair.
   * *   ResourceId.N must meet all the key-value pairs that are entered. If you enter multiple key-value pairs, resources that contain the specified key-value pairs are returned.
   * *   This operation is used to query resource tags based on conditions. If no relationship matches the conditions, an empty list is returned.
   * *   You can query both user tags and visible system tags.
   * *   In addition to the required parameters, you can also specify ResourceId.N to query the visible resource tags of a specified resource in a region.
   * *   You can also specify Tag.N.Key to query the visible keys of a specified key in a region.
   * *   At least one of ResourceId.N, Tag.N.Key, and Tag.N.Value exists.
   * *   You can query tags of the same type or different types in a single operation.
   * *   You can query all your user types and visible system tags.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the definition of an API.
   * 
   * @remarks
   * *This operation is intended for API providers.**
   * *   This API operation requires a full update. Updates of partial parameters are not supported.
   * *   When you modify an API name, make sure that the name of each API within the same group is unique.
   * *   When you modify the request path, make sure that each request path within the same group is unique.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - ModifyApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApiResponse
   */
  async modifyApiWithOptions(request: $_model.ModifyApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowSignatureMethod)) {
      query["AllowSignatureMethod"] = request.allowSignatureMethod;
    }

    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.appCodeAuthType)) {
      query["AppCodeAuthType"] = request.appCodeAuthType;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.backendEnable)) {
      query["BackendEnable"] = request.backendEnable;
    }

    if (!$dara.isNull(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.disableInternet)) {
      query["DisableInternet"] = request.disableInternet;
    }

    if (!$dara.isNull(request.forceNonceCheck)) {
      query["ForceNonceCheck"] = request.forceNonceCheck;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.openIdConnectConfig)) {
      query["OpenIdConnectConfig"] = request.openIdConnectConfig;
    }

    if (!$dara.isNull(request.requestConfig)) {
      query["RequestConfig"] = request.requestConfig;
    }

    if (!$dara.isNull(request.resultBodyModel)) {
      query["ResultBodyModel"] = request.resultBodyModel;
    }

    if (!$dara.isNull(request.resultType)) {
      query["ResultType"] = request.resultType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.serviceConfig)) {
      query["ServiceConfig"] = request.serviceConfig;
    }

    if (!$dara.isNull(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    if (!$dara.isNull(request.webSocketApiType)) {
      query["WebSocketApiType"] = request.webSocketApiType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.constantParameters)) {
      body["ConstantParameters"] = request.constantParameters;
    }

    if (!$dara.isNull(request.errorCodeSamples)) {
      body["ErrorCodeSamples"] = request.errorCodeSamples;
    }

    if (!$dara.isNull(request.failResultSample)) {
      body["FailResultSample"] = request.failResultSample;
    }

    if (!$dara.isNull(request.requestParameters)) {
      body["RequestParameters"] = request.requestParameters;
    }

    if (!$dara.isNull(request.resultDescriptions)) {
      body["ResultDescriptions"] = request.resultDescriptions;
    }

    if (!$dara.isNull(request.resultSample)) {
      body["ResultSample"] = request.resultSample;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    if (!$dara.isNull(request.serviceParametersMap)) {
      body["ServiceParametersMap"] = request.serviceParametersMap;
    }

    if (!$dara.isNull(request.systemParameters)) {
      body["SystemParameters"] = request.systemParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApiResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApiResponse({}));
  }

  /**
   * Modifies the definition of an API.
   * 
   * @remarks
   * *This operation is intended for API providers.**
   * *   This API operation requires a full update. Updates of partial parameters are not supported.
   * *   When you modify an API name, make sure that the name of each API within the same group is unique.
   * *   When you modify the request path, make sure that each request path within the same group is unique.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - ModifyApiRequest
   * @returns ModifyApiResponse
   */
  async modifyApi(request: $_model.ModifyApiRequest): Promise<$_model.ModifyApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApiWithOptions(request, runtime);
  }

  /**
   * Modifies the draft definition of an API. This operation is different from the ModifyApi operation. This operation does not require all information about the API. You need to only specify the parameters that you want to modify. For example, if you want to change the authentication method of the API from Anonymous to APP, you specify APP as the value of AuthType and do not need to configure other parameters.
   * 
   * @param request - ModifyApiConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApiConfigurationResponse
   */
  async modifyApiConfigurationWithOptions(request: $_model.ModifyApiConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApiConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowSignatureMethod)) {
      query["AllowSignatureMethod"] = request.allowSignatureMethod;
    }

    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.appCodeAuthType)) {
      query["AppCodeAuthType"] = request.appCodeAuthType;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.backendName)) {
      query["BackendName"] = request.backendName;
    }

    if (!$dara.isNull(request.bodyFormat)) {
      query["BodyFormat"] = request.bodyFormat;
    }

    if (!$dara.isNull(request.bodyModel)) {
      query["BodyModel"] = request.bodyModel;
    }

    if (!$dara.isNull(request.contentTypeCategory)) {
      query["ContentTypeCategory"] = request.contentTypeCategory;
    }

    if (!$dara.isNull(request.contentTypeValue)) {
      query["ContentTypeValue"] = request.contentTypeValue;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.disableInternet)) {
      query["DisableInternet"] = request.disableInternet;
    }

    if (!$dara.isNull(request.errorCodeSamples)) {
      query["ErrorCodeSamples"] = request.errorCodeSamples;
    }

    if (!$dara.isNull(request.failResultSample)) {
      query["FailResultSample"] = request.failResultSample;
    }

    if (!$dara.isNull(request.forceNonceCheck)) {
      query["ForceNonceCheck"] = request.forceNonceCheck;
    }

    if (!$dara.isNull(request.functionComputeConfig)) {
      query["FunctionComputeConfig"] = request.functionComputeConfig;
    }

    if (!$dara.isNull(request.httpConfig)) {
      query["HttpConfig"] = request.httpConfig;
    }

    if (!$dara.isNull(request.mockConfig)) {
      query["MockConfig"] = request.mockConfig;
    }

    if (!$dara.isNull(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.ossConfig)) {
      query["OssConfig"] = request.ossConfig;
    }

    if (!$dara.isNull(request.postBodyDescription)) {
      query["PostBodyDescription"] = request.postBodyDescription;
    }

    if (!$dara.isNull(request.requestHttpMethod)) {
      query["RequestHttpMethod"] = request.requestHttpMethod;
    }

    if (!$dara.isNull(request.requestMode)) {
      query["RequestMode"] = request.requestMode;
    }

    if (!$dara.isNull(request.requestParameters)) {
      query["RequestParameters"] = request.requestParameters;
    }

    if (!$dara.isNull(request.requestPath)) {
      query["RequestPath"] = request.requestPath;
    }

    if (!$dara.isNull(request.requestProtocol)) {
      query["RequestProtocol"] = request.requestProtocol;
    }

    if (!$dara.isNull(request.resultSample)) {
      query["ResultSample"] = request.resultSample;
    }

    if (!$dara.isNull(request.resultType)) {
      query["ResultType"] = request.resultType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      query["ServiceParameters"] = request.serviceParameters;
    }

    if (!$dara.isNull(request.serviceParametersMap)) {
      query["ServiceParametersMap"] = request.serviceParametersMap;
    }

    if (!$dara.isNull(request.serviceProtocol)) {
      query["ServiceProtocol"] = request.serviceProtocol;
    }

    if (!$dara.isNull(request.serviceTimeout)) {
      query["ServiceTimeout"] = request.serviceTimeout;
    }

    if (!$dara.isNull(request.useBackendService)) {
      query["UseBackendService"] = request.useBackendService;
    }

    if (!$dara.isNull(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    if (!$dara.isNull(request.vpcConfig)) {
      query["VpcConfig"] = request.vpcConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApiConfiguration",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApiConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApiConfigurationResponse({}));
  }

  /**
   * Modifies the draft definition of an API. This operation is different from the ModifyApi operation. This operation does not require all information about the API. You need to only specify the parameters that you want to modify. For example, if you want to change the authentication method of the API from Anonymous to APP, you specify APP as the value of AuthType and do not need to configure other parameters.
   * 
   * @param request - ModifyApiConfigurationRequest
   * @returns ModifyApiConfigurationResponse
   */
  async modifyApiConfiguration(request: $_model.ModifyApiConfigurationRequest): Promise<$_model.ModifyApiConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApiConfigurationWithOptions(request, runtime);
  }

  /**
   * Modifies the name, description, or basepath of an existing API group.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - ModifyApiGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApiGroupResponse
   */
  async modifyApiGroupWithOptions(request: $_model.ModifyApiGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApiGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.basePath)) {
      query["BasePath"] = request.basePath;
    }

    if (!$dara.isNull(request.compatibleFlags)) {
      query["CompatibleFlags"] = request.compatibleFlags;
    }

    if (!$dara.isNull(request.customAppCodeConfig)) {
      query["CustomAppCodeConfig"] = request.customAppCodeConfig;
    }

    if (!$dara.isNull(request.customTraceConfig)) {
      query["CustomTraceConfig"] = request.customTraceConfig;
    }

    if (!$dara.isNull(request.customerConfigs)) {
      query["CustomerConfigs"] = request.customerConfigs;
    }

    if (!$dara.isNull(request.defaultDomain)) {
      query["DefaultDomain"] = request.defaultDomain;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.filterAppCodeForBackend)) {
      query["FilterAppCodeForBackend"] = request.filterAppCodeForBackend;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.passthroughHeaders)) {
      query["PassthroughHeaders"] = request.passthroughHeaders;
    }

    if (!$dara.isNull(request.rpcPattern)) {
      query["RpcPattern"] = request.rpcPattern;
    }

    if (!$dara.isNull(request.rpsLimitForServerless)) {
      query["RpsLimitForServerless"] = request.rpsLimitForServerless;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.supportSSE)) {
      query["SupportSSE"] = request.supportSSE;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.userLogConfig)) {
      query["UserLogConfig"] = request.userLogConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApiGroup",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApiGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApiGroupResponse({}));
  }

  /**
   * Modifies the name, description, or basepath of an existing API group.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - ModifyApiGroupRequest
   * @returns ModifyApiGroupResponse
   */
  async modifyApiGroup(request: $_model.ModifyApiGroupRequest): Promise<$_model.ModifyApiGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApiGroupWithOptions(request, runtime);
  }

  /**
   * 变更分组实例
   * 
   * @param request - ModifyApiGroupInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApiGroupInstanceResponse
   */
  async modifyApiGroupInstanceWithOptions(request: $_model.ModifyApiGroupInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApiGroupInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.targetInstanceId)) {
      query["TargetInstanceId"] = request.targetInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApiGroupInstance",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApiGroupInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApiGroupInstanceResponse({}));
  }

  /**
   * 变更分组实例
   * 
   * @param request - ModifyApiGroupInstanceRequest
   * @returns ModifyApiGroupInstanceResponse
   */
  async modifyApiGroupInstance(request: $_model.ModifyApiGroupInstanceRequest): Promise<$_model.ModifyApiGroupInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApiGroupInstanceWithOptions(request, runtime);
  }

  /**
   * Modifies the network policy of an API group.
   * 
   * @param request - ModifyApiGroupNetworkPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApiGroupNetworkPolicyResponse
   */
  async modifyApiGroupNetworkPolicyWithOptions(request: $_model.ModifyApiGroupNetworkPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApiGroupNetworkPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.httpsPolicy)) {
      query["HttpsPolicy"] = request.httpsPolicy;
    }

    if (!$dara.isNull(request.innerDomainEnable)) {
      query["InnerDomainEnable"] = request.innerDomainEnable;
    }

    if (!$dara.isNull(request.internetEnable)) {
      query["InternetEnable"] = request.internetEnable;
    }

    if (!$dara.isNull(request.internetIPV6Enable)) {
      query["InternetIPV6Enable"] = request.internetIPV6Enable;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.vpcIntranetEnable)) {
      query["VpcIntranetEnable"] = request.vpcIntranetEnable;
    }

    if (!$dara.isNull(request.vpcSlbIntranetEnable)) {
      query["VpcSlbIntranetEnable"] = request.vpcSlbIntranetEnable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApiGroupNetworkPolicy",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApiGroupNetworkPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApiGroupNetworkPolicyResponse({}));
  }

  /**
   * Modifies the network policy of an API group.
   * 
   * @param request - ModifyApiGroupNetworkPolicyRequest
   * @returns ModifyApiGroupNetworkPolicyResponse
   */
  async modifyApiGroupNetworkPolicy(request: $_model.ModifyApiGroupNetworkPolicyRequest): Promise<$_model.ModifyApiGroupNetworkPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApiGroupNetworkPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the VPC whitelist of an API group.
   * 
   * @param request - ModifyApiGroupVpcWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApiGroupVpcWhitelistResponse
   */
  async modifyApiGroupVpcWhitelistWithOptions(request: $_model.ModifyApiGroupVpcWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApiGroupVpcWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.vpcIds)) {
      query["VpcIds"] = request.vpcIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApiGroupVpcWhitelist",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApiGroupVpcWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApiGroupVpcWhitelistResponse({}));
  }

  /**
   * Modifies the VPC whitelist of an API group.
   * 
   * @param request - ModifyApiGroupVpcWhitelistRequest
   * @returns ModifyApiGroupVpcWhitelistResponse
   */
  async modifyApiGroupVpcWhitelist(request: $_model.ModifyApiGroupVpcWhitelistRequest): Promise<$_model.ModifyApiGroupVpcWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApiGroupVpcWhitelistWithOptions(request, runtime);
  }

  /**
   * Modifies a specified app.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   AppName or Description can be modified. If these parameters are not specified, no modifications are made and the operation will directly return a successful response.********
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - ModifyAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppResponse
   */
  async modifyAppWithOptions(request: $_model.ModifyAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApp",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppResponse({}));
  }

  /**
   * Modifies a specified app.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   AppName or Description can be modified. If these parameters are not specified, no modifications are made and the operation will directly return a successful response.********
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - ModifyAppRequest
   * @returns ModifyAppResponse
   */
  async modifyApp(request: $_model.ModifyAppRequest): Promise<$_model.ModifyAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

  /**
   * 修改后端服务
   * 
   * @param request - ModifyBackendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackendResponse
   */
  async modifyBackendWithOptions(request: $_model.ModifyBackendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!$dara.isNull(request.backendName)) {
      query["BackendName"] = request.backendName;
    }

    if (!$dara.isNull(request.backendType)) {
      query["BackendType"] = request.backendType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBackend",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBackendResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBackendResponse({}));
  }

  /**
   * 修改后端服务
   * 
   * @param request - ModifyBackendRequest
   * @returns ModifyBackendResponse
   */
  async modifyBackend(request: $_model.ModifyBackendRequest): Promise<$_model.ModifyBackendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackendWithOptions(request, runtime);
  }

  /**
   * 修改后端服务在环境上的定义
   * 
   * @param request - ModifyBackendModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackendModelResponse
   */
  async modifyBackendModelWithOptions(request: $_model.ModifyBackendModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackendModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendId)) {
      query["BackendId"] = request.backendId;
    }

    if (!$dara.isNull(request.backendModelData)) {
      query["BackendModelData"] = request.backendModelData;
    }

    if (!$dara.isNull(request.backendModelId)) {
      query["BackendModelId"] = request.backendModelId;
    }

    if (!$dara.isNull(request.backendType)) {
      query["BackendType"] = request.backendType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBackendModel",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBackendModelResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBackendModelResponse({}));
  }

  /**
   * 修改后端服务在环境上的定义
   * 
   * @param request - ModifyBackendModelRequest
   * @returns ModifyBackendModelResponse
   */
  async modifyBackendModel(request: $_model.ModifyBackendModelRequest): Promise<$_model.ModifyBackendModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackendModelWithOptions(request, runtime);
  }

  /**
   * Modifies the name of a custom dataset.
   * 
   * @param request - ModifyDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDatasetResponse
   */
  async modifyDatasetWithOptions(request: $_model.ModifyDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDatasetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDataset",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDatasetResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDatasetResponse({}));
  }

  /**
   * Modifies the name of a custom dataset.
   * 
   * @param request - ModifyDatasetRequest
   * @returns ModifyDatasetResponse
   */
  async modifyDataset(request: $_model.ModifyDatasetRequest): Promise<$_model.ModifyDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDatasetWithOptions(request, runtime);
  }

  /**
   * Modifies the expiration time and description of a data entry in a custom dataset.
   * 
   * @param request - ModifyDatasetItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDatasetItemResponse
   */
  async modifyDatasetItemWithOptions(request: $_model.ModifyDatasetItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDatasetItemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetItemId)) {
      query["DatasetItemId"] = request.datasetItemId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDatasetItem",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDatasetItemResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDatasetItemResponse({}));
  }

  /**
   * Modifies the expiration time and description of a data entry in a custom dataset.
   * 
   * @param request - ModifyDatasetItemRequest
   * @returns ModifyDatasetItemResponse
   */
  async modifyDatasetItem(request: $_model.ModifyDatasetItemRequest): Promise<$_model.ModifyDatasetItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDatasetItemWithOptions(request, runtime);
  }

  /**
   * Modifies the properties of an API Gateway instance.
   * 
   * @param tmpReq - ModifyInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceAttributeResponse
   */
  async modifyInstanceAttributeWithOptions(tmpReq: $_model.ModifyInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceAttributeResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyInstanceAttributeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.toConnectVpcIpBlock)) {
      request.toConnectVpcIpBlockShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.toConnectVpcIpBlock, "ToConnectVpcIpBlock", "json");
    }

    let query = { };
    if (!$dara.isNull(request.deleteVpcIpBlock)) {
      query["DeleteVpcIpBlock"] = request.deleteVpcIpBlock;
    }

    if (!$dara.isNull(request.egressIpv6Enable)) {
      query["EgressIpv6Enable"] = request.egressIpv6Enable;
    }

    if (!$dara.isNull(request.httpsPolicy)) {
      query["HttpsPolicy"] = request.httpsPolicy;
    }

    if (!$dara.isNull(request.IPV6Enabled)) {
      query["IPV6Enabled"] = request.IPV6Enabled;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.intranetSegments)) {
      query["IntranetSegments"] = request.intranetSegments;
    }

    if (!$dara.isNull(request.maintainEndTime)) {
      query["MaintainEndTime"] = request.maintainEndTime;
    }

    if (!$dara.isNull(request.maintainStartTime)) {
      query["MaintainStartTime"] = request.maintainStartTime;
    }

    if (!$dara.isNull(request.toConnectVpcIpBlockShrink)) {
      query["ToConnectVpcIpBlock"] = request.toConnectVpcIpBlockShrink;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.vpcSlbIntranetEnable)) {
      query["VpcSlbIntranetEnable"] = request.vpcSlbIntranetEnable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceAttribute",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceAttributeResponse({}));
  }

  /**
   * Modifies the properties of an API Gateway instance.
   * 
   * @param request - ModifyInstanceAttributeRequest
   * @returns ModifyInstanceAttributeResponse
   */
  async modifyInstanceAttribute(request: $_model.ModifyInstanceAttributeRequest): Promise<$_model.ModifyInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Upgrades or downgrades the configurations of an API Gateway instance.
   * 
   * @param request - ModifyInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceSpecResponse
   */
  async modifyInstanceSpecWithOptions(request: $_model.ModifyInstanceSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!$dara.isNull(request.modifyAction)) {
      query["ModifyAction"] = request.modifyAction;
    }

    if (!$dara.isNull(request.skipWaitSwitch)) {
      query["SkipWaitSwitch"] = request.skipWaitSwitch;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceSpec",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceSpecResponse({}));
  }

  /**
   * Upgrades or downgrades the configurations of an API Gateway instance.
   * 
   * @param request - ModifyInstanceSpecRequest
   * @returns ModifyInstanceSpecResponse
   */
  async modifyInstanceSpec(request: $_model.ModifyInstanceSpecRequest): Promise<$_model.ModifyInstanceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceSpecWithOptions(request, runtime);
  }

  /**
   * Modify instance client VPC config.
   * 
   * @param request - ModifyInstanceVpcAttributeForConsoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceVpcAttributeForConsoleResponse
   */
  async modifyInstanceVpcAttributeForConsoleWithOptions(request: $_model.ModifyInstanceVpcAttributeForConsoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceVpcAttributeForConsoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteVpcAccess)) {
      query["DeleteVpcAccess"] = request.deleteVpcAccess;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpcOwnerId)) {
      query["VpcOwnerId"] = request.vpcOwnerId;
    }

    if (!$dara.isNull(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceVpcAttributeForConsole",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceVpcAttributeForConsoleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceVpcAttributeForConsoleResponse({}));
  }

  /**
   * Modify instance client VPC config.
   * 
   * @param request - ModifyInstanceVpcAttributeForConsoleRequest
   * @returns ModifyInstanceVpcAttributeForConsoleResponse
   */
  async modifyInstanceVpcAttributeForConsole(request: $_model.ModifyInstanceVpcAttributeForConsoleRequest): Promise<$_model.ModifyInstanceVpcAttributeForConsoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceVpcAttributeForConsoleWithOptions(request, runtime);
  }

  /**
   * Modifies the VPC domain name policy of an API group.
   * 
   * @param request - ModifyIntranetDomainPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIntranetDomainPolicyResponse
   */
  async modifyIntranetDomainPolicyWithOptions(request: $_model.ModifyIntranetDomainPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyIntranetDomainPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.vpcIntranetEnable)) {
      query["VpcIntranetEnable"] = request.vpcIntranetEnable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyIntranetDomainPolicy",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyIntranetDomainPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyIntranetDomainPolicyResponse({}));
  }

  /**
   * Modifies the VPC domain name policy of an API group.
   * 
   * @param request - ModifyIntranetDomainPolicyRequest
   * @returns ModifyIntranetDomainPolicyResponse
   */
  async modifyIntranetDomainPolicy(request: $_model.ModifyIntranetDomainPolicyRequest): Promise<$_model.ModifyIntranetDomainPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyIntranetDomainPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies an access control list (ACL).
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   This operation allows you to modify only the name and description of an ACL. You cannot modify the type of the ACL.
   * 
   * @param request - ModifyIpControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIpControlResponse
   */
  async modifyIpControlWithOptions(request: $_model.ModifyIpControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyIpControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!$dara.isNull(request.ipControlName)) {
      query["IpControlName"] = request.ipControlName;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyIpControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyIpControlResponse>(await this.callApi(params, req, runtime), new $_model.ModifyIpControlResponse({}));
  }

  /**
   * Modifies an access control list (ACL).
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   This operation allows you to modify only the name and description of an ACL. You cannot modify the type of the ACL.
   * 
   * @param request - ModifyIpControlRequest
   * @returns ModifyIpControlResponse
   */
  async modifyIpControl(request: $_model.ModifyIpControlRequest): Promise<$_model.ModifyIpControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyIpControlWithOptions(request, runtime);
  }

  /**
   * Modifies a policy in an access control list (ACL).
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   The modification immediately takes effect on all the APIs that are bound to the policy.
   * *   This operation causes a full modification of the content of a policy.
   * 
   * @param request - ModifyIpControlPolicyItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIpControlPolicyItemResponse
   */
  async modifyIpControlPolicyItemWithOptions(request: $_model.ModifyIpControlPolicyItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyIpControlPolicyItemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.cidrIp)) {
      query["CidrIp"] = request.cidrIp;
    }

    if (!$dara.isNull(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!$dara.isNull(request.policyItemId)) {
      query["PolicyItemId"] = request.policyItemId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyIpControlPolicyItem",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyIpControlPolicyItemResponse>(await this.callApi(params, req, runtime), new $_model.ModifyIpControlPolicyItemResponse({}));
  }

  /**
   * Modifies a policy in an access control list (ACL).
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   The modification immediately takes effect on all the APIs that are bound to the policy.
   * *   This operation causes a full modification of the content of a policy.
   * 
   * @param request - ModifyIpControlPolicyItemRequest
   * @returns ModifyIpControlPolicyItemResponse
   */
  async modifyIpControlPolicyItem(request: $_model.ModifyIpControlPolicyItemRequest): Promise<$_model.ModifyIpControlPolicyItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyIpControlPolicyItemWithOptions(request, runtime);
  }

  /**
   * 修改日志配置
   * 
   * @param request - ModifyLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLogConfigResponse
   */
  async modifyLogConfigWithOptions(request: $_model.ModifyLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLogConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.slsLogStore)) {
      query["SlsLogStore"] = request.slsLogStore;
    }

    if (!$dara.isNull(request.slsProject)) {
      query["SlsProject"] = request.slsProject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLogConfig",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLogConfigResponse({}));
  }

  /**
   * 修改日志配置
   * 
   * @param request - ModifyLogConfigRequest
   * @returns ModifyLogConfigResponse
   */
  async modifyLogConfig(request: $_model.ModifyLogConfigRequest): Promise<$_model.ModifyLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLogConfigWithOptions(request, runtime);
  }

  /**
   * Updates the model of an API group.
   * 
   * @param request - ModifyModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyModelResponse
   */
  async modifyModelWithOptions(request: $_model.ModifyModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.newModelName)) {
      query["NewModelName"] = request.newModelName;
    }

    if (!$dara.isNull(request.schema)) {
      query["Schema"] = request.schema;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyModel",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyModelResponse>(await this.callApi(params, req, runtime), new $_model.ModifyModelResponse({}));
  }

  /**
   * Updates the model of an API group.
   * 
   * @param request - ModifyModelRequest
   * @returns ModifyModelResponse
   */
  async modifyModel(request: $_model.ModifyModelRequest): Promise<$_model.ModifyModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyModelWithOptions(request, runtime);
  }

  /**
   * Modifies the information of a plug-in.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   The name of the plug-in must be unique.
   * 
   * @param request - ModifyPluginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPluginResponse
   */
  async modifyPluginWithOptions(request: $_model.ModifyPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPluginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.pluginData)) {
      query["PluginData"] = request.pluginData;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.pluginName)) {
      query["PluginName"] = request.pluginName;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPlugin",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPluginResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPluginResponse({}));
  }

  /**
   * Modifies the information of a plug-in.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   The name of the plug-in must be unique.
   * 
   * @param request - ModifyPluginRequest
   * @returns ModifyPluginResponse
   */
  async modifyPlugin(request: $_model.ModifyPluginRequest): Promise<$_model.ModifyPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPluginWithOptions(request, runtime);
  }

  /**
   * Modifies a backend signature key.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   This API operation modifies the name, Key value, and Secret value of an existing signature key.
   * *   Note that the modification takes effect immediately. If the key has been bound to an API, you must adjust the backend signature verification based on the new key accordingly.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - ModifySignatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySignatureResponse
   */
  async modifySignatureWithOptions(request: $_model.ModifySignatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySignatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.signatureId)) {
      query["SignatureId"] = request.signatureId;
    }

    if (!$dara.isNull(request.signatureKey)) {
      query["SignatureKey"] = request.signatureKey;
    }

    if (!$dara.isNull(request.signatureName)) {
      query["SignatureName"] = request.signatureName;
    }

    if (!$dara.isNull(request.signatureSecret)) {
      query["SignatureSecret"] = request.signatureSecret;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySignature",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySignatureResponse>(await this.callApi(params, req, runtime), new $_model.ModifySignatureResponse({}));
  }

  /**
   * Modifies a backend signature key.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   This API operation modifies the name, Key value, and Secret value of an existing signature key.
   * *   Note that the modification takes effect immediately. If the key has been bound to an API, you must adjust the backend signature verification based on the new key accordingly.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - ModifySignatureRequest
   * @returns ModifySignatureResponse
   */
  async modifySignature(request: $_model.ModifySignatureRequest): Promise<$_model.ModifySignatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySignatureWithOptions(request, runtime);
  }

  /**
   * Modifies the settings of a custom throttling policy.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   The modifications take effect on the bound APIs instantly.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - ModifyTrafficControlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTrafficControlResponse
   */
  async modifyTrafficControlWithOptions(request: $_model.ModifyTrafficControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTrafficControlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiDefault)) {
      query["ApiDefault"] = request.apiDefault;
    }

    if (!$dara.isNull(request.appDefault)) {
      query["AppDefault"] = request.appDefault;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    if (!$dara.isNull(request.trafficControlName)) {
      query["TrafficControlName"] = request.trafficControlName;
    }

    if (!$dara.isNull(request.trafficControlUnit)) {
      query["TrafficControlUnit"] = request.trafficControlUnit;
    }

    if (!$dara.isNull(request.userDefault)) {
      query["UserDefault"] = request.userDefault;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTrafficControl",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTrafficControlResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTrafficControlResponse({}));
  }

  /**
   * Modifies the settings of a custom throttling policy.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   The modifications take effect on the bound APIs instantly.
   * *   The QPS limit on this operation is 50 per user.
   * 
   * @param request - ModifyTrafficControlRequest
   * @returns ModifyTrafficControlResponse
   */
  async modifyTrafficControl(request: $_model.ModifyTrafficControlRequest): Promise<$_model.ModifyTrafficControlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTrafficControlWithOptions(request, runtime);
  }

  /**
   * Modifies a virtual private cloud (VPC) authorization and updates the metadata of the API associated with the VPC authorization.
   * 
   * @param request - ModifyVpcAccessAndUpdateApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVpcAccessAndUpdateApisResponse
   */
  async modifyVpcAccessAndUpdateApisWithOptions(request: $_model.ModifyVpcAccessAndUpdateApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyVpcAccessAndUpdateApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.needBatchWork)) {
      query["NeedBatchWork"] = request.needBatchWork;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.refresh)) {
      query["Refresh"] = request.refresh;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpcTargetHostName)) {
      query["VpcTargetHostName"] = request.vpcTargetHostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyVpcAccessAndUpdateApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyVpcAccessAndUpdateApisResponse>(await this.callApi(params, req, runtime), new $_model.ModifyVpcAccessAndUpdateApisResponse({}));
  }

  /**
   * Modifies a virtual private cloud (VPC) authorization and updates the metadata of the API associated with the VPC authorization.
   * 
   * @param request - ModifyVpcAccessAndUpdateApisRequest
   * @returns ModifyVpcAccessAndUpdateApisResponse
   */
  async modifyVpcAccessAndUpdateApis(request: $_model.ModifyVpcAccessAndUpdateApisRequest): Promise<$_model.ModifyVpcAccessAndUpdateApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVpcAccessAndUpdateApisWithOptions(request, runtime);
  }

  /**
   * 开通API网关服务
   * 
   * @param request - OpenApiGatewayServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenApiGatewayServiceResponse
   */
  async openApiGatewayServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.OpenApiGatewayServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "OpenApiGatewayService",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenApiGatewayServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenApiGatewayServiceResponse({}));
  }

  /**
   * 开通API网关服务
   * @returns OpenApiGatewayServiceResponse
   */
  async openApiGatewayService(): Promise<$_model.OpenApiGatewayServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openApiGatewayServiceWithOptions(runtime);
  }

  /**
   * Queries the request logs of a user.
   * 
   * @param request - QueryRequestLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRequestLogsResponse
   */
  async queryRequestLogsWithOptions(request: $_model.QueryRequestLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRequestLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.requestLogId)) {
      query["RequestLogId"] = request.requestLogId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRequestLogs",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRequestLogsResponse>(await this.callApi(params, req, runtime), new $_model.QueryRequestLogsResponse({}));
  }

  /**
   * Queries the request logs of a user.
   * 
   * @param request - QueryRequestLogsRequest
   * @returns QueryRequestLogsResponse
   */
  async queryRequestLogs(request: $_model.QueryRequestLogsRequest): Promise<$_model.QueryRequestLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRequestLogsWithOptions(request, runtime);
  }

  /**
   * Reactivates a custom domain name whose validity status is Abnormal.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   You must solve the problem that is mentioned in the domain name exception prompt before you can reactivate the domain name.
   * *   A typical reason why a custom domain name becomes abnormal is that the domain name does not have an ICP filing or the domain name is included in a blacklist by the administration. When a custom domain name is abnormal, users cannot use it to call APIs.
   * *   You can call this operation to reactivate the domain name to resume normal access.
   * 
   * @param request - ReactivateDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReactivateDomainResponse
   */
  async reactivateDomainWithOptions(request: $_model.ReactivateDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReactivateDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReactivateDomain",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReactivateDomainResponse>(await this.callApi(params, req, runtime), new $_model.ReactivateDomainResponse({}));
  }

  /**
   * Reactivates a custom domain name whose validity status is Abnormal.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   You must solve the problem that is mentioned in the domain name exception prompt before you can reactivate the domain name.
   * *   A typical reason why a custom domain name becomes abnormal is that the domain name does not have an ICP filing or the domain name is included in a blacklist by the administration. When a custom domain name is abnormal, users cannot use it to call APIs.
   * *   You can call this operation to reactivate the domain name to resume normal access.
   * 
   * @param request - ReactivateDomainRequest
   * @returns ReactivateDomainResponse
   */
  async reactivateDomain(request: $_model.ReactivateDomainRequest): Promise<$_model.ReactivateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reactivateDomainWithOptions(request, runtime);
  }

  /**
   * 删除访问控制策略中IP条目
   * 
   * @param request - RemoveAccessControlListEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveAccessControlListEntryResponse
   */
  async removeAccessControlListEntryWithOptions(request: $_model.RemoveAccessControlListEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveAccessControlListEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclEntrys)) {
      query["AclEntrys"] = request.aclEntrys;
    }

    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveAccessControlListEntry",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveAccessControlListEntryResponse>(await this.callApi(params, req, runtime), new $_model.RemoveAccessControlListEntryResponse({}));
  }

  /**
   * 删除访问控制策略中IP条目
   * 
   * @param request - RemoveAccessControlListEntryRequest
   * @returns RemoveAccessControlListEntryResponse
   */
  async removeAccessControlListEntry(request: $_model.RemoveAccessControlListEntryRequest): Promise<$_model.RemoveAccessControlListEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeAccessControlListEntryWithOptions(request, runtime);
  }

  /**
   * Revokes permissions on API products from an application.
   * 
   * @param tmpReq - RemoveApiProductsAuthoritiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveApiProductsAuthoritiesResponse
   */
  async removeApiProductsAuthoritiesWithOptions(tmpReq: $_model.RemoveApiProductsAuthoritiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveApiProductsAuthoritiesResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveApiProductsAuthoritiesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.apiProductIds)) {
      request.apiProductIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.apiProductIds, "ApiProductIds", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.apiProductIdsShrink)) {
      query["ApiProductIds"] = request.apiProductIdsShrink;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveApiProductsAuthorities",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveApiProductsAuthoritiesResponse>(await this.callApi(params, req, runtime), new $_model.RemoveApiProductsAuthoritiesResponse({}));
  }

  /**
   * Revokes permissions on API products from an application.
   * 
   * @param request - RemoveApiProductsAuthoritiesRequest
   * @returns RemoveApiProductsAuthoritiesResponse
   */
  async removeApiProductsAuthorities(request: $_model.RemoveApiProductsAuthoritiesRequest): Promise<$_model.RemoveApiProductsAuthoritiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeApiProductsAuthoritiesWithOptions(request, runtime);
  }

  /**
   * Revokes the access permissions on multiple APIs from a specified application.
   * 
   * @remarks
   *   This operation is intended for API providers and callers.
   * *   Before you revoke access permissions, check by whom the permissions were granted. API providers can only revoke permissions granted by a Provider, and API callers can only revoke permissions granted by a Consumer.
   * 
   * @param request - RemoveApisAuthoritiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveApisAuthoritiesResponse
   */
  async removeApisAuthoritiesWithOptions(request: $_model.RemoveApisAuthoritiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveApisAuthoritiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveApisAuthorities",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveApisAuthoritiesResponse>(await this.callApi(params, req, runtime), new $_model.RemoveApisAuthoritiesResponse({}));
  }

  /**
   * Revokes the access permissions on multiple APIs from a specified application.
   * 
   * @remarks
   *   This operation is intended for API providers and callers.
   * *   Before you revoke access permissions, check by whom the permissions were granted. API providers can only revoke permissions granted by a Provider, and API callers can only revoke permissions granted by a Consumer.
   * 
   * @param request - RemoveApisAuthoritiesRequest
   * @returns RemoveApisAuthoritiesResponse
   */
  async removeApisAuthorities(request: $_model.RemoveApisAuthoritiesRequest): Promise<$_model.RemoveApisAuthoritiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeApisAuthoritiesWithOptions(request, runtime);
  }

  /**
   * Revokes the access permissions on a specified API from multiple applications. In this case, multiple applications map to a single API.
   * 
   * @remarks
   *   This operation is intended for API providers and callers.
   * *   Before you revoke access permissions, check by whom the permissions were granted. API providers can only revoke permissions granted by a Provider, and API callers can only revoke permissions granted by a Consumer.
   * 
   * @param request - RemoveAppsAuthoritiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveAppsAuthoritiesResponse
   */
  async removeAppsAuthoritiesWithOptions(request: $_model.RemoveAppsAuthoritiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveAppsAuthoritiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveAppsAuthorities",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveAppsAuthoritiesResponse>(await this.callApi(params, req, runtime), new $_model.RemoveAppsAuthoritiesResponse({}));
  }

  /**
   * Revokes the access permissions on a specified API from multiple applications. In this case, multiple applications map to a single API.
   * 
   * @remarks
   *   This operation is intended for API providers and callers.
   * *   Before you revoke access permissions, check by whom the permissions were granted. API providers can only revoke permissions granted by a Provider, and API callers can only revoke permissions granted by a Consumer.
   * 
   * @param request - RemoveAppsAuthoritiesRequest
   * @returns RemoveAppsAuthoritiesResponse
   */
  async removeAppsAuthorities(request: $_model.RemoveAppsAuthoritiesRequest): Promise<$_model.RemoveAppsAuthoritiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeAppsAuthoritiesWithOptions(request, runtime);
  }

  /**
   * Unbinds an API from an access control list (ACL).
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   The unbinding takes effect immediately. After the API is unbound from the ACL, the corresponding environment does not have any IP address access control in place for the API.
   * 
   * @param request - RemoveIpControlApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveIpControlApisResponse
   */
  async removeIpControlApisWithOptions(request: $_model.RemoveIpControlApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveIpControlApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveIpControlApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveIpControlApisResponse>(await this.callApi(params, req, runtime), new $_model.RemoveIpControlApisResponse({}));
  }

  /**
   * Unbinds an API from an access control list (ACL).
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   The unbinding takes effect immediately. After the API is unbound from the ACL, the corresponding environment does not have any IP address access control in place for the API.
   * 
   * @param request - RemoveIpControlApisRequest
   * @returns RemoveIpControlApisResponse
   */
  async removeIpControlApis(request: $_model.RemoveIpControlApisRequest): Promise<$_model.RemoveIpControlApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeIpControlApisWithOptions(request, runtime);
  }

  /**
   * Removes one or more policies from an access control list (ACL).
   * 
   * @remarks
   *   This operation is intended for API providers.
   * 
   * @param request - RemoveIpControlPolicyItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveIpControlPolicyItemResponse
   */
  async removeIpControlPolicyItemWithOptions(request: $_model.RemoveIpControlPolicyItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveIpControlPolicyItemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!$dara.isNull(request.policyItemIds)) {
      query["PolicyItemIds"] = request.policyItemIds;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveIpControlPolicyItem",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveIpControlPolicyItemResponse>(await this.callApi(params, req, runtime), new $_model.RemoveIpControlPolicyItemResponse({}));
  }

  /**
   * Removes one or more policies from an access control list (ACL).
   * 
   * @remarks
   *   This operation is intended for API providers.
   * 
   * @param request - RemoveIpControlPolicyItemRequest
   * @returns RemoveIpControlPolicyItemResponse
   */
  async removeIpControlPolicyItem(request: $_model.RemoveIpControlPolicyItemRequest): Promise<$_model.RemoveIpControlPolicyItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeIpControlPolicyItemWithOptions(request, runtime);
  }

  /**
   * Unbinds a backend signature key from APIs.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   The operation takes effect immediately. The request sent from API Gateway to the backend service does not contain the signature string. The corresponding verification step can be removed from the backend.
   * 
   * @param request - RemoveSignatureApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveSignatureApisResponse
   */
  async removeSignatureApisWithOptions(request: $_model.RemoveSignatureApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveSignatureApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.signatureId)) {
      query["SignatureId"] = request.signatureId;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveSignatureApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveSignatureApisResponse>(await this.callApi(params, req, runtime), new $_model.RemoveSignatureApisResponse({}));
  }

  /**
   * Unbinds a backend signature key from APIs.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   The operation takes effect immediately. The request sent from API Gateway to the backend service does not contain the signature string. The corresponding verification step can be removed from the backend.
   * 
   * @param request - RemoveSignatureApisRequest
   * @returns RemoveSignatureApisResponse
   */
  async removeSignatureApis(request: $_model.RemoveSignatureApisRequest): Promise<$_model.RemoveSignatureApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeSignatureApisWithOptions(request, runtime);
  }

  /**
   * Unbinds a specified throttling policy from APIs.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   This API allows you to unbind a specified throttling policy from up to 100 APIs at a time.
   * 
   * @param request - RemoveTrafficControlApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTrafficControlApisResponse
   */
  async removeTrafficControlApisWithOptions(request: $_model.RemoveTrafficControlApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveTrafficControlApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!$dara.isNull(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveTrafficControlApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveTrafficControlApisResponse>(await this.callApi(params, req, runtime), new $_model.RemoveTrafficControlApisResponse({}));
  }

  /**
   * Unbinds a specified throttling policy from APIs.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   This API allows you to unbind a specified throttling policy from up to 100 APIs at a time.
   * 
   * @param request - RemoveTrafficControlApisRequest
   * @returns RemoveTrafficControlApisResponse
   */
  async removeTrafficControlApis(request: $_model.RemoveTrafficControlApisRequest): Promise<$_model.RemoveTrafficControlApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeTrafficControlApisWithOptions(request, runtime);
  }

  /**
   * Deletes a VPC authorization without unpublishing the associated APIs.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   Revokes the permissions of API Gateway to access your VPC instance.
   * >  Deleting an authorization affects the associated API. Before you delete the authorization, make sure that it is not used by the API.
   * 
   * @param request - RemoveVpcAccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveVpcAccessResponse
   */
  async removeVpcAccessWithOptions(request: $_model.RemoveVpcAccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveVpcAccessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.needBatchWork)) {
      query["NeedBatchWork"] = request.needBatchWork;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveVpcAccess",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveVpcAccessResponse>(await this.callApi(params, req, runtime), new $_model.RemoveVpcAccessResponse({}));
  }

  /**
   * Deletes a VPC authorization without unpublishing the associated APIs.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   Revokes the permissions of API Gateway to access your VPC instance.
   * >  Deleting an authorization affects the associated API. Before you delete the authorization, make sure that it is not used by the API.
   * 
   * @param request - RemoveVpcAccessRequest
   * @returns RemoveVpcAccessResponse
   */
  async removeVpcAccess(request: $_model.RemoveVpcAccessRequest): Promise<$_model.RemoveVpcAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeVpcAccessWithOptions(request, runtime);
  }

  /**
   * 删除VPC授权并下线关联API
   * 
   * @param request - RemoveVpcAccessAndAbolishApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveVpcAccessAndAbolishApisResponse
   */
  async removeVpcAccessAndAbolishApisWithOptions(request: $_model.RemoveVpcAccessAndAbolishApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveVpcAccessAndAbolishApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.needBatchWork)) {
      query["NeedBatchWork"] = request.needBatchWork;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveVpcAccessAndAbolishApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveVpcAccessAndAbolishApisResponse>(await this.callApi(params, req, runtime), new $_model.RemoveVpcAccessAndAbolishApisResponse({}));
  }

  /**
   * 删除VPC授权并下线关联API
   * 
   * @param request - RemoveVpcAccessAndAbolishApisRequest
   * @returns RemoveVpcAccessAndAbolishApisResponse
   */
  async removeVpcAccessAndAbolishApis(request: $_model.RemoveVpcAccessAndAbolishApisRequest): Promise<$_model.RemoveVpcAccessAndAbolishApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeVpcAccessAndAbolishApisWithOptions(request, runtime);
  }

  /**
   * Resets the AppCode of an application. You can call this operation only once per minute.
   * 
   * @param request - ResetAppCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAppCodeResponse
   */
  async resetAppCodeWithOptions(request: $_model.ResetAppCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAppCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCode)) {
      query["AppCode"] = request.appCode;
    }

    if (!$dara.isNull(request.newAppCode)) {
      query["NewAppCode"] = request.newAppCode;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetAppCode",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetAppCodeResponse>(await this.callApi(params, req, runtime), new $_model.ResetAppCodeResponse({}));
  }

  /**
   * Resets the AppCode of an application. You can call this operation only once per minute.
   * 
   * @param request - ResetAppCodeRequest
   * @returns ResetAppCodeResponse
   */
  async resetAppCode(request: $_model.ResetAppCodeRequest): Promise<$_model.ResetAppCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAppCodeWithOptions(request, runtime);
  }

  /**
   * Resets the key of an application.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   A new secret is automatically generated after you have called this operation. This secret cannot be customized.
   * *   The results returned by this operation do not contain the application secret. You can obtain the secret by calling DescribeAppSecurity.
   * 
   * @param request - ResetAppSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAppSecretResponse
   */
  async resetAppSecretWithOptions(request: $_model.ResetAppSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAppSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.newAppKey)) {
      query["NewAppKey"] = request.newAppKey;
    }

    if (!$dara.isNull(request.newAppSecret)) {
      query["NewAppSecret"] = request.newAppSecret;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetAppSecret",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetAppSecretResponse>(await this.callApi(params, req, runtime), new $_model.ResetAppSecretResponse({}));
  }

  /**
   * Resets the key of an application.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   A new secret is automatically generated after you have called this operation. This secret cannot be customized.
   * *   The results returned by this operation do not contain the application secret. You can obtain the secret by calling DescribeAppSecurity.
   * 
   * @param request - ResetAppSecretRequest
   * @returns ResetAppSecretResponse
   */
  async resetAppSecret(request: $_model.ResetAppSecretRequest): Promise<$_model.ResetAppSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAppSecretWithOptions(request, runtime);
  }

  /**
   * 根据APP生成SDK
   * 
   * @param request - SdkGenerateByAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SdkGenerateByAppResponse
   */
  async sdkGenerateByAppWithOptions(request: $_model.SdkGenerateByAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SdkGenerateByAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SdkGenerateByApp",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SdkGenerateByAppResponse>(await this.callApi(params, req, runtime), new $_model.SdkGenerateByAppResponse({}));
  }

  /**
   * 根据APP生成SDK
   * 
   * @param request - SdkGenerateByAppRequest
   * @returns SdkGenerateByAppResponse
   */
  async sdkGenerateByApp(request: $_model.SdkGenerateByAppRequest): Promise<$_model.SdkGenerateByAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sdkGenerateByAppWithOptions(request, runtime);
  }

  /**
   * 生成与App关联的API的SDK
   * 
   * @param request - SdkGenerateByAppForRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SdkGenerateByAppForRegionResponse
   */
  async sdkGenerateByAppForRegionWithOptions(request: $_model.SdkGenerateByAppForRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SdkGenerateByAppForRegionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SdkGenerateByAppForRegion",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SdkGenerateByAppForRegionResponse>(await this.callApi(params, req, runtime), new $_model.SdkGenerateByAppForRegionResponse({}));
  }

  /**
   * 生成与App关联的API的SDK
   * 
   * @param request - SdkGenerateByAppForRegionRequest
   * @returns SdkGenerateByAppForRegionResponse
   */
  async sdkGenerateByAppForRegion(request: $_model.SdkGenerateByAppForRegionRequest): Promise<$_model.SdkGenerateByAppForRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sdkGenerateByAppForRegionWithOptions(request, runtime);
  }

  /**
   * 根据分组生成SDK
   * 
   * @param request - SdkGenerateByGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SdkGenerateByGroupResponse
   */
  async sdkGenerateByGroupWithOptions(request: $_model.SdkGenerateByGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SdkGenerateByGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SdkGenerateByGroup",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SdkGenerateByGroupResponse>(await this.callApi(params, req, runtime), new $_model.SdkGenerateByGroupResponse({}));
  }

  /**
   * 根据分组生成SDK
   * 
   * @param request - SdkGenerateByGroupRequest
   * @returns SdkGenerateByGroupResponse
   */
  async sdkGenerateByGroup(request: $_model.SdkGenerateByGroupRequest): Promise<$_model.SdkGenerateByGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sdkGenerateByGroupWithOptions(request, runtime);
  }

  /**
   * 修改访问控制策略的名称
   * 
   * @param request - SetAccessControlListAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAccessControlListAttributeResponse
   */
  async setAccessControlListAttributeWithOptions(request: $_model.SetAccessControlListAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAccessControlListAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclId)) {
      query["AclId"] = request.aclId;
    }

    if (!$dara.isNull(request.aclName)) {
      query["AclName"] = request.aclName;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAccessControlListAttribute",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAccessControlListAttributeResponse>(await this.callApi(params, req, runtime), new $_model.SetAccessControlListAttributeResponse({}));
  }

  /**
   * 修改访问控制策略的名称
   * 
   * @param request - SetAccessControlListAttributeRequest
   * @returns SetAccessControlListAttributeResponse
   */
  async setAccessControlListAttribute(request: $_model.SetAccessControlListAttributeRequest): Promise<$_model.SetAccessControlListAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAccessControlListAttributeWithOptions(request, runtime);
  }

  /**
   * Grants permissions on API products to an application.
   * 
   * @param tmpReq - SetApiProductsAuthoritiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApiProductsAuthoritiesResponse
   */
  async setApiProductsAuthoritiesWithOptions(tmpReq: $_model.SetApiProductsAuthoritiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetApiProductsAuthoritiesResponse> {
    tmpReq.validate();
    let request = new $_model.SetApiProductsAuthoritiesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.apiProductIds)) {
      request.apiProductIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.apiProductIds, "ApiProductIds", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.apiProductIdsShrink)) {
      query["ApiProductIds"] = request.apiProductIdsShrink;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.authValidTime)) {
      query["AuthValidTime"] = request.authValidTime;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApiProductsAuthorities",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetApiProductsAuthoritiesResponse>(await this.callApi(params, req, runtime), new $_model.SetApiProductsAuthoritiesResponse({}));
  }

  /**
   * Grants permissions on API products to an application.
   * 
   * @param request - SetApiProductsAuthoritiesRequest
   * @returns SetApiProductsAuthoritiesResponse
   */
  async setApiProductsAuthorities(request: $_model.SetApiProductsAuthoritiesRequest): Promise<$_model.SetApiProductsAuthoritiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApiProductsAuthoritiesWithOptions(request, runtime);
  }

  /**
   * Authorizes a specified application to call multiple APIs.
   * 
   * @remarks
   *   This operation is intended for API providers and callers.
   * *   API providers can authorize all applications to call their APIs.
   * *   API callers can authorize their own applications to call the APIs that they have purchased.
   * 
   * @param request - SetApisAuthoritiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApisAuthoritiesResponse
   */
  async setApisAuthoritiesWithOptions(request: $_model.SetApisAuthoritiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetApisAuthoritiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.authValidTime)) {
      query["AuthValidTime"] = request.authValidTime;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApisAuthorities",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetApisAuthoritiesResponse>(await this.callApi(params, req, runtime), new $_model.SetApisAuthoritiesResponse({}));
  }

  /**
   * Authorizes a specified application to call multiple APIs.
   * 
   * @remarks
   *   This operation is intended for API providers and callers.
   * *   API providers can authorize all applications to call their APIs.
   * *   API callers can authorize their own applications to call the APIs that they have purchased.
   * 
   * @param request - SetApisAuthoritiesRequest
   * @returns SetApisAuthoritiesResponse
   */
  async setApisAuthorities(request: $_model.SetApisAuthoritiesRequest): Promise<$_model.SetApisAuthoritiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApisAuthoritiesWithOptions(request, runtime);
  }

  /**
   * Authorizes multiple applications to call APIs in an API product.
   * 
   * @param request - SetAppsAuthToApiProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAppsAuthToApiProductResponse
   */
  async setAppsAuthToApiProductWithOptions(request: $_model.SetAppsAuthToApiProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAppsAuthToApiProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiProductId)) {
      query["ApiProductId"] = request.apiProductId;
    }

    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!$dara.isNull(request.authValidTime)) {
      query["AuthValidTime"] = request.authValidTime;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAppsAuthToApiProduct",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAppsAuthToApiProductResponse>(await this.callApi(params, req, runtime), new $_model.SetAppsAuthToApiProductResponse({}));
  }

  /**
   * Authorizes multiple applications to call APIs in an API product.
   * 
   * @param request - SetAppsAuthToApiProductRequest
   * @returns SetAppsAuthToApiProductResponse
   */
  async setAppsAuthToApiProduct(request: $_model.SetAppsAuthToApiProductRequest): Promise<$_model.SetAppsAuthToApiProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAppsAuthToApiProductWithOptions(request, runtime);
  }

  /**
   * Grants access permissions on a specified API to multiple applications.
   * 
   * @remarks
   *   This operation is intended for API providers and callers.
   * *   API providers can authorize all applications to call their APIs.
   * *   API callers can authorize their own applications to call the APIs that they have purchased.
   * 
   * @param request - SetAppsAuthoritiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAppsAuthoritiesResponse
   */
  async setAppsAuthoritiesWithOptions(request: $_model.SetAppsAuthoritiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAppsAuthoritiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!$dara.isNull(request.authValidTime)) {
      query["AuthValidTime"] = request.authValidTime;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAppsAuthorities",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAppsAuthoritiesResponse>(await this.callApi(params, req, runtime), new $_model.SetAppsAuthoritiesResponse({}));
  }

  /**
   * Grants access permissions on a specified API to multiple applications.
   * 
   * @remarks
   *   This operation is intended for API providers and callers.
   * *   API providers can authorize all applications to call their APIs.
   * *   API callers can authorize their own applications to call the APIs that they have purchased.
   * 
   * @param request - SetAppsAuthoritiesRequest
   * @returns SetAppsAuthoritiesResponse
   */
  async setAppsAuthorities(request: $_model.SetAppsAuthoritiesRequest): Promise<$_model.SetAppsAuthoritiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAppsAuthoritiesWithOptions(request, runtime);
  }

  /**
   * Binds a custom domain name to a specified API group.
   * 
   * @param request - SetDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDomainResponse
   */
  async setDomainWithOptions(request: $_model.SetDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindStageName)) {
      query["BindStageName"] = request.bindStageName;
    }

    if (!$dara.isNull(request.customDomainType)) {
      query["CustomDomainType"] = request.customDomainType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.isForce)) {
      query["IsForce"] = request.isForce;
    }

    if (!$dara.isNull(request.isHttpRedirectToHttps)) {
      query["IsHttpRedirectToHttps"] = request.isHttpRedirectToHttps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDomain",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDomainResponse>(await this.callApi(params, req, runtime), new $_model.SetDomainResponse({}));
  }

  /**
   * Binds a custom domain name to a specified API group.
   * 
   * @param request - SetDomainRequest
   * @returns SetDomainResponse
   */
  async setDomain(request: $_model.SetDomainRequest): Promise<$_model.SetDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDomainWithOptions(request, runtime);
  }

  /**
   * Uploads an SSL certificate for a specified custom domain name.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   The SSL certificate must match the custom domain name.
   * *   After the SSL certificate is bound, HTTPS-based API services become available.
   * 
   * @param request - SetDomainCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDomainCertificateResponse
   */
  async setDomainCertificateWithOptions(request: $_model.SetDomainCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDomainCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caCertificateBody)) {
      query["CaCertificateBody"] = request.caCertificateBody;
    }

    if (!$dara.isNull(request.certificateBody)) {
      query["CertificateBody"] = request.certificateBody;
    }

    if (!$dara.isNull(request.certificateName)) {
      query["CertificateName"] = request.certificateName;
    }

    if (!$dara.isNull(request.certificatePrivateKey)) {
      query["CertificatePrivateKey"] = request.certificatePrivateKey;
    }

    if (!$dara.isNull(request.clientCertSDnPassThrough)) {
      query["ClientCertSDnPassThrough"] = request.clientCertSDnPassThrough;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sslOcspCacheEnable)) {
      query["SslOcspCacheEnable"] = request.sslOcspCacheEnable;
    }

    if (!$dara.isNull(request.sslOcspEnable)) {
      query["SslOcspEnable"] = request.sslOcspEnable;
    }

    if (!$dara.isNull(request.sslVerifyDepth)) {
      query["SslVerifyDepth"] = request.sslVerifyDepth;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDomainCertificate",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDomainCertificateResponse>(await this.callApi(params, req, runtime), new $_model.SetDomainCertificateResponse({}));
  }

  /**
   * Uploads an SSL certificate for a specified custom domain name.
   * 
   * @remarks
   *   This operation is intended for API providers.
   * *   The SSL certificate must match the custom domain name.
   * *   After the SSL certificate is bound, HTTPS-based API services become available.
   * 
   * @param request - SetDomainCertificateRequest
   * @returns SetDomainCertificateResponse
   */
  async setDomainCertificate(request: $_model.SetDomainCertificateRequest): Promise<$_model.SetDomainCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDomainCertificateWithOptions(request, runtime);
  }

  /**
   * Enables or disables WebSocket for a custom domain name.
   * 
   * @param request - SetDomainWebSocketStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDomainWebSocketStatusResponse
   */
  async setDomainWebSocketStatusWithOptions(request: $_model.SetDomainWebSocketStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDomainWebSocketStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionValue)) {
      query["ActionValue"] = request.actionValue;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.WSSEnable)) {
      query["WSSEnable"] = request.WSSEnable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDomainWebSocketStatus",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDomainWebSocketStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetDomainWebSocketStatusResponse({}));
  }

  /**
   * Enables or disables WebSocket for a custom domain name.
   * 
   * @param request - SetDomainWebSocketStatusRequest
   * @returns SetDomainWebSocketStatusResponse
   */
  async setDomainWebSocketStatus(request: $_model.SetDomainWebSocketStatusRequest): Promise<$_model.SetDomainWebSocketStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDomainWebSocketStatusWithOptions(request, runtime);
  }

  /**
   * 设置分组授权AppCode
   * 
   * @param request - SetGroupAuthAppCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetGroupAuthAppCodeResponse
   */
  async setGroupAuthAppCodeWithOptions(request: $_model.SetGroupAuthAppCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetGroupAuthAppCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authAppCode)) {
      query["AuthAppCode"] = request.authAppCode;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetGroupAuthAppCode",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetGroupAuthAppCodeResponse>(await this.callApi(params, req, runtime), new $_model.SetGroupAuthAppCodeResponse({}));
  }

  /**
   * 设置分组授权AppCode
   * 
   * @param request - SetGroupAuthAppCodeRequest
   * @returns SetGroupAuthAppCodeResponse
   */
  async setGroupAuthAppCode(request: $_model.SetGroupAuthAppCodeRequest): Promise<$_model.SetGroupAuthAppCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setGroupAuthAppCodeWithOptions(request, runtime);
  }

  /**
   * Creates a binding relationship between specified access control lists (ACLs) and APIs.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   A maximum of 100 APIs can be bound at a time.
   * 
   * @param request - SetIpControlApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetIpControlApisResponse
   */
  async setIpControlApisWithOptions(request: $_model.SetIpControlApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetIpControlApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.ipControlId)) {
      query["IpControlId"] = request.ipControlId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetIpControlApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetIpControlApisResponse>(await this.callApi(params, req, runtime), new $_model.SetIpControlApisResponse({}));
  }

  /**
   * Creates a binding relationship between specified access control lists (ACLs) and APIs.
   * 
   * @remarks
   *   This operation is intended for API callers.
   * *   A maximum of 100 APIs can be bound at a time.
   * 
   * @param request - SetIpControlApisRequest
   * @returns SetIpControlApisResponse
   */
  async setIpControlApis(request: $_model.SetIpControlApisRequest): Promise<$_model.SetIpControlApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setIpControlApisWithOptions(request, runtime);
  }

  /**
   * Binds a signature key to APIs.
   * 
   * @param request - SetSignatureApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSignatureApisResponse
   */
  async setSignatureApisWithOptions(request: $_model.SetSignatureApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetSignatureApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.signatureId)) {
      query["SignatureId"] = request.signatureId;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetSignatureApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetSignatureApisResponse>(await this.callApi(params, req, runtime), new $_model.SetSignatureApisResponse({}));
  }

  /**
   * Binds a signature key to APIs.
   * 
   * @param request - SetSignatureApisRequest
   * @returns SetSignatureApisResponse
   */
  async setSignatureApis(request: $_model.SetSignatureApisRequest): Promise<$_model.SetSignatureApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setSignatureApisWithOptions(request, runtime);
  }

  /**
   * Binds a throttling policy to APIs.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   This API allows you to bind a specific throttling policy to up to 100 APIs at a time.
   * 
   * @param request - SetTrafficControlApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetTrafficControlApisResponse
   */
  async setTrafficControlApisWithOptions(request: $_model.SetTrafficControlApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetTrafficControlApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiIds)) {
      query["ApiIds"] = request.apiIds;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    if (!$dara.isNull(request.trafficControlId)) {
      query["TrafficControlId"] = request.trafficControlId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetTrafficControlApis",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetTrafficControlApisResponse>(await this.callApi(params, req, runtime), new $_model.SetTrafficControlApisResponse({}));
  }

  /**
   * Binds a throttling policy to APIs.
   * 
   * @remarks
   *   This API is intended for API providers.
   * *   This API allows you to bind a specific throttling policy to up to 100 APIs at a time.
   * 
   * @param request - SetTrafficControlApisRequest
   * @returns SetTrafficControlApisResponse
   */
  async setTrafficControlApis(request: $_model.SetTrafficControlApisRequest): Promise<$_model.SetTrafficControlApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setTrafficControlApisWithOptions(request, runtime);
  }

  /**
   * Creates a virtual private cloud (VPC) access authorization and enables reverse access.
   * 
   * @remarks
   * This operation is intended for API providers.
   * * This operation is used to authorize API Gateway to access your VPC instance.
   * 
   * @param request - SetVpcAccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetVpcAccessResponse
   */
  async setVpcAccessWithOptions(request: $_model.SetVpcAccessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetVpcAccessResponse> {
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

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpcTargetHostName)) {
      query["VpcTargetHostName"] = request.vpcTargetHostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetVpcAccess",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetVpcAccessResponse>(await this.callApi(params, req, runtime), new $_model.SetVpcAccessResponse({}));
  }

  /**
   * Creates a virtual private cloud (VPC) access authorization and enables reverse access.
   * 
   * @remarks
   * This operation is intended for API providers.
   * * This operation is used to authorize API Gateway to access your VPC instance.
   * 
   * @param request - SetVpcAccessRequest
   * @returns SetVpcAccessResponse
   */
  async setVpcAccess(request: $_model.SetVpcAccessRequest): Promise<$_model.SetVpcAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setVpcAccessWithOptions(request, runtime);
  }

  /**
   * Specifies a wildcard domain name template for a bound custom domain name.
   * 
   * @param request - SetWildcardDomainPatternsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetWildcardDomainPatternsResponse
   */
  async setWildcardDomainPatternsWithOptions(request: $_model.SetWildcardDomainPatternsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetWildcardDomainPatternsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.wildcardDomainPatterns)) {
      query["WildcardDomainPatterns"] = request.wildcardDomainPatterns;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetWildcardDomainPatterns",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetWildcardDomainPatternsResponse>(await this.callApi(params, req, runtime), new $_model.SetWildcardDomainPatternsResponse({}));
  }

  /**
   * Specifies a wildcard domain name template for a bound custom domain name.
   * 
   * @param request - SetWildcardDomainPatternsRequest
   * @returns SetWildcardDomainPatternsResponse
   */
  async setWildcardDomainPatterns(request: $_model.SetWildcardDomainPatternsRequest): Promise<$_model.SetWildcardDomainPatternsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setWildcardDomainPatternsWithOptions(request, runtime);
  }

  /**
   * Switches the definition of an API in a specified runtime environment to a historical version.
   * 
   * @param request - SwitchApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchApiResponse
   */
  async switchApiWithOptions(request: $_model.SwitchApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.historyVersion)) {
      query["HistoryVersion"] = request.historyVersion;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.stageName)) {
      query["StageName"] = request.stageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchApi",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchApiResponse>(await this.callApi(params, req, runtime), new $_model.SwitchApiResponse({}));
  }

  /**
   * Switches the definition of an API in a specified runtime environment to a historical version.
   * 
   * @param request - SwitchApiRequest
   * @returns SwitchApiResponse
   */
  async switchApi(request: $_model.SwitchApiRequest): Promise<$_model.SwitchApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchApiWithOptions(request, runtime);
  }

  /**
   * Creates a tag-resource relationship.
   * 
   * @remarks
   *   All tags (key-value pairs) are applied to all resources of a specified ResourceId, with each resource specified as ResourceId.N.
   * *   Tag.N is a resource tag consisting of a key-value pair: Tag.N.Key and Tag.N.Value.
   * *   If you call this operation to tag multiple resources simultaneously, either all or none of the resources will be tagged.
   * *   If you specify Tag.1.Value in addition to required parameters, you must also specify Tag.1.Key. Otherwise, an InvalidParameter.TagKey error is reported. A tag that has a value must have the corresponding key, but the key can be an empty string.
   * *   If a tag with the same key has been bound to a resource, the new tag will overwrite the existing one.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2016-07-14",
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
   * Creates a tag-resource relationship.
   * 
   * @remarks
   *   All tags (key-value pairs) are applied to all resources of a specified ResourceId, with each resource specified as ResourceId.N.
   * *   Tag.N is a resource tag consisting of a key-value pair: Tag.N.Key and Tag.N.Value.
   * *   If you call this operation to tag multiple resources simultaneously, either all or none of the resources will be tagged.
   * *   If you specify Tag.1.Value in addition to required parameters, you must also specify Tag.1.Key. Otherwise, an InvalidParameter.TagKey error is reported. A tag that has a value must have the corresponding key, but the key can be an empty string.
   * *   If a tag with the same key has been bound to a resource, the new tag will overwrite the existing one.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from resources.
   * 
   * @remarks
   *   If you call this operation to untag multiple resources simultaneously, either all or none of the resources will be untagged.
   * *   If you specify resource IDs without specifying tag keys and set the All parameter to true, all tags bound to the specified resources will be deleted. If a resource does not have any tags, the request is not processed but a success is returned.
   * *   If you specify resource IDs without specifying tag keys and set the All parameter to false, the request is not processed but a success is returned.
   * *   When tag keys are specified, the All parameter is invalid.
   * *   When multiple resources and key-value pairs are specified, the specified tags bound to the resources are deleted.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2016-07-14",
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
   * Removes tags from resources.
   * 
   * @remarks
   *   If you call this operation to untag multiple resources simultaneously, either all or none of the resources will be untagged.
   * *   If you specify resource IDs without specifying tag keys and set the All parameter to true, all tags bound to the specified resources will be deleted. If a resource does not have any tags, the request is not processed but a success is returned.
   * *   If you specify resource IDs without specifying tag keys and set the All parameter to false, the request is not processed but a success is returned.
   * *   When tag keys are specified, the All parameter is invalid.
   * *   When multiple resources and key-value pairs are specified, the specified tags bound to the resources are deleted.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies an internal domain name resolution.
   * 
   * @param tmpReq - UpdatePrivateDNSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrivateDNSResponse
   */
  async updatePrivateDNSWithOptions(tmpReq: $_model.UpdatePrivateDNSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrivateDNSResponse> {
    tmpReq.validate();
    let request = new $_model.UpdatePrivateDNSShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.records)) {
      request.recordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.records, "Records", "json");
    }

    let query = { };
    if (!$dara.isNull(request.intranetDomain)) {
      query["IntranetDomain"] = request.intranetDomain;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.recordsShrink)) {
      body["Records"] = request.recordsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrivateDNS",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrivateDNSResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrivateDNSResponse({}));
  }

  /**
   * Modifies an internal domain name resolution.
   * 
   * @param request - UpdatePrivateDNSRequest
   * @returns UpdatePrivateDNSResponse
   */
  async updatePrivateDNS(request: $_model.UpdatePrivateDNSRequest): Promise<$_model.UpdatePrivateDNSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePrivateDNSWithOptions(request, runtime);
  }

  /**
   * Tests the network connectivity between an API Gateway instance and a port on an Elastic Compute Service (ECS) or Server Load Balance (SLB) instance in a virtual private cloud (VPC) access authorization.
   * 
   * @param request - ValidateVpcConnectivityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateVpcConnectivityResponse
   */
  async validateVpcConnectivityWithOptions(request: $_model.ValidateVpcConnectivityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateVpcConnectivityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.vpcAccessId)) {
      query["VpcAccessId"] = request.vpcAccessId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateVpcConnectivity",
      version: "2016-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateVpcConnectivityResponse>(await this.callApi(params, req, runtime), new $_model.ValidateVpcConnectivityResponse({}));
  }

  /**
   * Tests the network connectivity between an API Gateway instance and a port on an Elastic Compute Service (ECS) or Server Load Balance (SLB) instance in a virtual private cloud (VPC) access authorization.
   * 
   * @param request - ValidateVpcConnectivityRequest
   * @returns ValidateVpcConnectivityResponse
   */
  async validateVpcConnectivity(request: $_model.ValidateVpcConnectivityRequest): Promise<$_model.ValidateVpcConnectivityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateVpcConnectivityWithOptions(request, runtime);
  }

}
