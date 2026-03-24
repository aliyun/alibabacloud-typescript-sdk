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
      'cn-qingdao': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-beijing': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-chengdu': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-zhangjiakou': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-huhehaote': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-hangzhou': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-heyuan': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-wulanchabu': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'us-west-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'us-east-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'eu-central-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'me-east-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'cn-shanghai-finance-1': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen-finance-1': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-north-2-gov-1': "wafopenapi.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("waf-openapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds one or more IP addresses or CIDR blocks to an address book in a Web Application Firewall (WAF) instance. Address books can be referenced in protection rules for centralized IP address management.
   * 
   * @param request - AddAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAddressResponse
   */
  async addAddressWithOptions(request: $_model.AddAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressList)) {
      query["AddressList"] = request.addressList;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAddress",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAddressResponse>(await this.callApi(params, req, runtime), new $_model.AddAddressResponse({}));
  }

  /**
   * Adds one or more IP addresses or CIDR blocks to an address book in a Web Application Firewall (WAF) instance. Address books can be referenced in protection rules for centralized IP address management.
   * 
   * @param request - AddAddressRequest
   * @returns AddAddressResponse
   */
  async addAddress(request: $_model.AddAddressRequest): Promise<$_model.AddAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAddressWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which a protected object belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Changes the resource group to which a protected object belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Clears all addresses from a Web Application Firewall (WAF) address book.
   * 
   * @param request - ClearAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearAddressResponse
   */
  async clearAddressWithOptions(request: $_model.ClearAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClearAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClearAddress",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClearAddressResponse>(await this.callApi(params, req, runtime), new $_model.ClearAddressResponse({}));
  }

  /**
   * Clears all addresses from a Web Application Firewall (WAF) address book.
   * 
   * @param request - ClearAddressRequest
   * @returns ClearAddressResponse
   */
  async clearAddress(request: $_model.ClearAddressRequest): Promise<$_model.ClearAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clearAddressWithOptions(request, runtime);
  }

  /**
   * Clears the IP blacklist for a critical event protection rule.
   * 
   * @param request - ClearMajorProtectionBlackIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearMajorProtectionBlackIpResponse
   */
  async clearMajorProtectionBlackIpWithOptions(request: $_model.ClearMajorProtectionBlackIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClearMajorProtectionBlackIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClearMajorProtectionBlackIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClearMajorProtectionBlackIpResponse>(await this.callApi(params, req, runtime), new $_model.ClearMajorProtectionBlackIpResponse({}));
  }

  /**
   * Clears the IP blacklist for a critical event protection rule.
   * 
   * @param request - ClearMajorProtectionBlackIpRequest
   * @returns ClearMajorProtectionBlackIpResponse
   */
  async clearMajorProtectionBlackIp(request: $_model.ClearMajorProtectionBlackIpRequest): Promise<$_model.ClearMajorProtectionBlackIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clearMajorProtectionBlackIpWithOptions(request, runtime);
  }

  /**
   * Copies a protection template.
   * 
   * @param request - CopyDefenseTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyDefenseTemplateResponse
   */
  async copyDefenseTemplateWithOptions(request: $_model.CopyDefenseTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyDefenseTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyDefenseTemplate",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyDefenseTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CopyDefenseTemplateResponse({}));
  }

  /**
   * Copies a protection template.
   * 
   * @param request - CopyDefenseTemplateRequest
   * @returns CopyDefenseTemplateResponse
   */
  async copyDefenseTemplate(request: $_model.CopyDefenseTemplateRequest): Promise<$_model.CopyDefenseTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyDefenseTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a task to export API security data.
   * 
   * @param request - CreateApiExportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApiExportResponse
   */
  async createApiExportWithOptions(request: $_model.CreateApiExportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApiExportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.param)) {
      query["Param"] = request.param;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApiExport",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApiExportResponse>(await this.callApi(params, req, runtime), new $_model.CreateApiExportResponse({}));
  }

  /**
   * Creates a task to export API security data.
   * 
   * @param request - CreateApiExportRequest
   * @returns CreateApiExportResponse
   */
  async createApiExport(request: $_model.CreateApiExportRequest): Promise<$_model.CreateApiExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApiExportWithOptions(request, runtime);
  }

  /**
   * Uploads a certificate that uses an internationally accepted algorithm for a domain name added to Web Application Firewall (WAF) in CNAME record mode.
   * 
   * @param request - CreateCertsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCertsResponse
   */
  async createCertsWithOptions(request: $_model.CreateCertsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCertsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certContent)) {
      query["CertContent"] = request.certContent;
    }

    if (!$dara.isNull(request.certKey)) {
      query["CertKey"] = request.certKey;
    }

    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCerts",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCertsResponse>(await this.callApi(params, req, runtime), new $_model.CreateCertsResponse({}));
  }

  /**
   * Uploads a certificate that uses an internationally accepted algorithm for a domain name added to Web Application Firewall (WAF) in CNAME record mode.
   * 
   * @param request - CreateCertsRequest
   * @returns CreateCertsResponse
   */
  async createCerts(request: $_model.CreateCertsRequest): Promise<$_model.CreateCertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCertsWithOptions(request, runtime);
  }

  /**
   * Integrates cloud products with Web Application Firewall (WAF). Currently, only Elastic Compute Service (ECS) and Classic Load Balancer (CLB) are supported.
   * 
   * @param tmpReq - CreateCloudResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudResourceResponse
   */
  async createCloudResourceWithOptions(tmpReq: $_model.CreateCloudResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudResourceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCloudResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listen)) {
      request.listenShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listen, "Listen", "json");
    }

    if (!$dara.isNull(tmpReq.redirect)) {
      request.redirectShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.redirect, "Redirect", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.listenShrink)) {
      query["Listen"] = request.listenShrink;
    }

    if (!$dara.isNull(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    if (!$dara.isNull(request.redirectShrink)) {
      query["Redirect"] = request.redirectShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudResourceResponse({}));
  }

  /**
   * Integrates cloud products with Web Application Firewall (WAF). Currently, only Elastic Compute Service (ECS) and Classic Load Balancer (CLB) are supported.
   * 
   * @param request - CreateCloudResourceRequest
   * @returns CreateCloudResourceResponse
   */
  async createCloudResource(request: $_model.CreateCloudResourceRequest): Promise<$_model.CreateCloudResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudResourceWithOptions(request, runtime);
  }

  /**
   * Adds an extension certificate for cloud native mode.
   * 
   * @param request - CreateCloudResourceExtensionCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudResourceExtensionCertResponse
   */
  async createCloudResourceExtensionCertWithOptions(request: $_model.CreateCloudResourceExtensionCertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudResourceExtensionCertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.cloudResourceId)) {
      query["CloudResourceId"] = request.cloudResourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudResourceExtensionCert",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudResourceExtensionCertResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudResourceExtensionCertResponse({}));
  }

  /**
   * Adds an extension certificate for cloud native mode.
   * 
   * @param request - CreateCloudResourceExtensionCertRequest
   * @returns CreateCloudResourceExtensionCertResponse
   */
  async createCloudResourceExtensionCert(request: $_model.CreateCloudResourceExtensionCertRequest): Promise<$_model.CreateCloudResourceExtensionCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudResourceExtensionCertWithOptions(request, runtime);
  }

  /**
   * Creates a protected object.
   * 
   * @param tmpReq - CreateDefenseResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDefenseResourceResponse
   */
  async createDefenseResourceWithOptions(tmpReq: $_model.CreateDefenseResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDefenseResourceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDefenseResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customHeaders)) {
      request.customHeadersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customHeaders, "CustomHeaders", "json");
    }

    let query = { };
    if (!$dara.isNull(request.customHeadersShrink)) {
      query["CustomHeaders"] = request.customHeadersShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.detail)) {
      query["Detail"] = request.detail;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    if (!$dara.isNull(request.pattern)) {
      query["Pattern"] = request.pattern;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceGroup)) {
      query["ResourceGroup"] = request.resourceGroup;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resourceOrigin)) {
      query["ResourceOrigin"] = request.resourceOrigin;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.xffStatus)) {
      query["XffStatus"] = request.xffStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDefenseResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDefenseResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDefenseResourceResponse({}));
  }

  /**
   * Creates a protected object.
   * 
   * @param request - CreateDefenseResourceRequest
   * @returns CreateDefenseResourceResponse
   */
  async createDefenseResource(request: $_model.CreateDefenseResourceRequest): Promise<$_model.CreateDefenseResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDefenseResourceWithOptions(request, runtime);
  }

  /**
   * Creates a protected object group.
   * 
   * @param request - CreateDefenseResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDefenseResourceGroupResponse
   */
  async createDefenseResourceGroupWithOptions(request: $_model.CreateDefenseResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDefenseResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addList)) {
      query["AddList"] = request.addList;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDefenseResourceGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDefenseResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateDefenseResourceGroupResponse({}));
  }

  /**
   * Creates a protected object group.
   * 
   * @param request - CreateDefenseResourceGroupRequest
   * @returns CreateDefenseResourceGroupResponse
   */
  async createDefenseResourceGroup(request: $_model.CreateDefenseResourceGroupRequest): Promise<$_model.CreateDefenseResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDefenseResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates a protection rule.
   * 
   * @param request - CreateDefenseRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDefenseRuleResponse
   */
  async createDefenseRuleWithOptions(request: $_model.CreateDefenseRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDefenseRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!$dara.isNull(request.defenseType)) {
      query["DefenseType"] = request.defenseType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.rules)) {
      body["Rules"] = request.rules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDefenseRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDefenseRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateDefenseRuleResponse({}));
  }

  /**
   * Creates a protection rule.
   * 
   * @param request - CreateDefenseRuleRequest
   * @returns CreateDefenseRuleResponse
   */
  async createDefenseRule(request: $_model.CreateDefenseRuleRequest): Promise<$_model.CreateDefenseRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDefenseRuleWithOptions(request, runtime);
  }

  /**
   * Creates a protection template in Web Application Firewall (WAF).
   * 
   * @param request - CreateDefenseTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDefenseTemplateResponse
   */
  async createDefenseTemplateWithOptions(request: $_model.CreateDefenseTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDefenseTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!$dara.isNull(request.defenseSubScene)) {
      query["DefenseSubScene"] = request.defenseSubScene;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateOrigin)) {
      query["TemplateOrigin"] = request.templateOrigin;
    }

    if (!$dara.isNull(request.templateStatus)) {
      query["TemplateStatus"] = request.templateStatus;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    if (!$dara.isNull(request.unbindResourceGroups)) {
      query["UnbindResourceGroups"] = request.unbindResourceGroups;
    }

    if (!$dara.isNull(request.unbindResources)) {
      query["UnbindResources"] = request.unbindResources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDefenseTemplate",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDefenseTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateDefenseTemplateResponse({}));
  }

  /**
   * Creates a protection template in Web Application Firewall (WAF).
   * 
   * @param request - CreateDefenseTemplateRequest
   * @returns CreateDefenseTemplateResponse
   */
  async createDefenseTemplate(request: $_model.CreateDefenseTemplateRequest): Promise<$_model.CreateDefenseTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDefenseTemplateWithOptions(request, runtime);
  }

  /**
   * Adds a domain name to a Web Application Firewall (WAF) instance for protection.
   * 
   * @param tmpReq - CreateDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResponse
   */
  async createDomainWithOptions(tmpReq: $_model.CreateDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDomainResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDomainShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listen)) {
      request.listenShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listen, "Listen", "json");
    }

    if (!$dara.isNull(tmpReq.redirect)) {
      request.redirectShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.redirect, "Redirect", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.listenShrink)) {
      query["Listen"] = request.listenShrink;
    }

    if (!$dara.isNull(request.redirectShrink)) {
      query["Redirect"] = request.redirectShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDomain",
      version: "2021-10-01",
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
   * Adds a domain name to a Web Application Firewall (WAF) instance for protection.
   * 
   * @param request - CreateDomainRequest
   * @returns CreateDomainResponse
   */
  async createDomain(request: $_model.CreateDomainRequest): Promise<$_model.CreateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  /**
   * Creates a hybrid cloud Web Application Firewall (WAF) cluster.
   * 
   * @param request - CreateHybridCloudClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHybridCloudClusterResponse
   */
  async createHybridCloudClusterWithOptions(request: $_model.CreateHybridCloudClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHybridCloudClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessMode)) {
      query["AccessMode"] = request.accessMode;
    }

    if (!$dara.isNull(request.accessRegion)) {
      query["AccessRegion"] = request.accessRegion;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.httpPorts)) {
      query["HttpPorts"] = request.httpPorts;
    }

    if (!$dara.isNull(request.httpsPorts)) {
      query["HttpsPorts"] = request.httpsPorts;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logFieldsNotReturned)) {
      query["LogFieldsNotReturned"] = request.logFieldsNotReturned;
    }

    if (!$dara.isNull(request.protectionServerCount)) {
      query["ProtectionServerCount"] = request.protectionServerCount;
    }

    if (!$dara.isNull(request.proxyStatus)) {
      query["ProxyStatus"] = request.proxyStatus;
    }

    if (!$dara.isNull(request.proxyType)) {
      query["ProxyType"] = request.proxyType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleConfig)) {
      query["RuleConfig"] = request.ruleConfig;
    }

    if (!$dara.isNull(request.ruleStatus)) {
      query["RuleStatus"] = request.ruleStatus;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHybridCloudCluster",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHybridCloudClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateHybridCloudClusterResponse({}));
  }

  /**
   * Creates a hybrid cloud Web Application Firewall (WAF) cluster.
   * 
   * @param request - CreateHybridCloudClusterRequest
   * @returns CreateHybridCloudClusterResponse
   */
  async createHybridCloudCluster(request: $_model.CreateHybridCloudClusterRequest): Promise<$_model.CreateHybridCloudClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHybridCloudClusterWithOptions(request, runtime);
  }

  /**
   * Creates a Hybrid Cloud Web Application Firewall (WAF) cluster rule.
   * 
   * @param request - CreateHybridCloudClusterRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHybridCloudClusterRuleResponse
   */
  async createHybridCloudClusterRuleWithOptions(request: $_model.CreateHybridCloudClusterRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHybridCloudClusterRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleConfig)) {
      query["RuleConfig"] = request.ruleConfig;
    }

    if (!$dara.isNull(request.ruleStatus)) {
      query["RuleStatus"] = request.ruleStatus;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHybridCloudClusterRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHybridCloudClusterRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateHybridCloudClusterRuleResponse({}));
  }

  /**
   * Creates a Hybrid Cloud Web Application Firewall (WAF) cluster rule.
   * 
   * @param request - CreateHybridCloudClusterRuleRequest
   * @returns CreateHybridCloudClusterRuleResponse
   */
  async createHybridCloudClusterRule(request: $_model.CreateHybridCloudClusterRuleRequest): Promise<$_model.CreateHybridCloudClusterRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHybridCloudClusterRuleWithOptions(request, runtime);
  }

  /**
   * Creates a node group in a Hybrid Cloud Web Application Firewall (WAF) cluster.
   * 
   * @param request - CreateHybridCloudGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHybridCloudGroupResponse
   */
  async createHybridCloudGroupWithOptions(request: $_model.CreateHybridCloudGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHybridCloudGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backSourceMark)) {
      query["BackSourceMark"] = request.backSourceMark;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.loadBalanceIp)) {
      query["LoadBalanceIp"] = request.loadBalanceIp;
    }

    if (!$dara.isNull(request.locationCode)) {
      query["LocationCode"] = request.locationCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHybridCloudGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHybridCloudGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateHybridCloudGroupResponse({}));
  }

  /**
   * Creates a node group in a Hybrid Cloud Web Application Firewall (WAF) cluster.
   * 
   * @param request - CreateHybridCloudGroupRequest
   * @returns CreateHybridCloudGroupResponse
   */
  async createHybridCloudGroup(request: $_model.CreateHybridCloudGroupRequest): Promise<$_model.CreateHybridCloudGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHybridCloudGroupWithOptions(request, runtime);
  }

  /**
   * Creates a log delivery configuration for a Web Application Firewall (WAF) instance in a hybrid cloud.
   * 
   * @param request - CreateLogDeliveryConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLogDeliveryConfigResponse
   */
  async createLogDeliveryConfigWithOptions(request: $_model.CreateLogDeliveryConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLogDeliveryConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryDetail)) {
      query["DeliveryDetail"] = request.deliveryDetail;
    }

    if (!$dara.isNull(request.deliveryName)) {
      query["DeliveryName"] = request.deliveryName;
    }

    if (!$dara.isNull(request.deliveryType)) {
      query["DeliveryType"] = request.deliveryType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLogDeliveryConfig",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLogDeliveryConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateLogDeliveryConfigResponse({}));
  }

  /**
   * Creates a log delivery configuration for a Web Application Firewall (WAF) instance in a hybrid cloud.
   * 
   * @param request - CreateLogDeliveryConfigRequest
   * @returns CreateLogDeliveryConfigResponse
   */
  async createLogDeliveryConfig(request: $_model.CreateLogDeliveryConfigRequest): Promise<$_model.CreateLogDeliveryConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLogDeliveryConfigWithOptions(request, runtime);
  }

  /**
   * Creates an IP address blacklist for critical event protection.
   * 
   * @remarks
   * This operation is available only on the China site (aliyun.com).
   * 
   * @param request - CreateMajorProtectionBlackIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMajorProtectionBlackIpResponse
   */
  async createMajorProtectionBlackIpWithOptions(request: $_model.CreateMajorProtectionBlackIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMajorProtectionBlackIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ipList)) {
      query["IpList"] = request.ipList;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMajorProtectionBlackIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMajorProtectionBlackIpResponse>(await this.callApi(params, req, runtime), new $_model.CreateMajorProtectionBlackIpResponse({}));
  }

  /**
   * Creates an IP address blacklist for critical event protection.
   * 
   * @remarks
   * This operation is available only on the China site (aliyun.com).
   * 
   * @param request - CreateMajorProtectionBlackIpRequest
   * @returns CreateMajorProtectionBlackIpResponse
   */
  async createMajorProtectionBlackIp(request: $_model.CreateMajorProtectionBlackIpRequest): Promise<$_model.CreateMajorProtectionBlackIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMajorProtectionBlackIpWithOptions(request, runtime);
  }

  /**
   * Adds member accounts to use the multi-account management feature of Web Application Firewall (WAF).
   * 
   * @param request - CreateMemberAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemberAccountsResponse
   */
  async createMemberAccountsWithOptions(request: $_model.CreateMemberAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMemberAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.memberAccountIds)) {
      query["MemberAccountIds"] = request.memberAccountIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMemberAccounts",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMemberAccountsResponse>(await this.callApi(params, req, runtime), new $_model.CreateMemberAccountsResponse({}));
  }

  /**
   * Adds member accounts to use the multi-account management feature of Web Application Firewall (WAF).
   * 
   * @param request - CreateMemberAccountsRequest
   * @returns CreateMemberAccountsResponse
   */
  async createMemberAccounts(request: $_model.CreateMemberAccountsRequest): Promise<$_model.CreateMemberAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMemberAccountsWithOptions(request, runtime);
  }

  /**
   * Starts a trial for a proof of concept (POC) feature.
   * 
   * @param request - CreatePocFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePocFunctionResponse
   */
  async createPocFunctionWithOptions(request: $_model.CreatePocFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePocFunctionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePocFunction",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePocFunctionResponse>(await this.callApi(params, req, runtime), new $_model.CreatePocFunctionResponse({}));
  }

  /**
   * Starts a trial for a proof of concept (POC) feature.
   * 
   * @param request - CreatePocFunctionRequest
   * @returns CreatePocFunctionResponse
   */
  async createPocFunction(request: $_model.CreatePocFunctionRequest): Promise<$_model.CreatePocFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPocFunctionWithOptions(request, runtime);
  }

  /**
   * Creates a pay-as-you-go Web Application Firewall (WAF) 3.0 instance.
   * 
   * @param request - CreatePostpaidInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePostpaidInstanceResponse
   */
  async createPostpaidInstanceWithOptions(request: $_model.CreatePostpaidInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePostpaidInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePostpaidInstance",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePostpaidInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreatePostpaidInstanceResponse({}));
  }

  /**
   * Creates a pay-as-you-go Web Application Firewall (WAF) 3.0 instance.
   * 
   * @param request - CreatePostpaidInstanceRequest
   * @returns CreatePostpaidInstanceResponse
   */
  async createPostpaidInstance(request: $_model.CreatePostpaidInstanceRequest): Promise<$_model.CreatePostpaidInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPostpaidInstanceWithOptions(request, runtime);
  }

  /**
   * Uploads an SM certificate for CNAME record access to Web Application Firewall (WAF).
   * 
   * @param request - CreateSM2CertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSM2CertResponse
   */
  async createSM2CertWithOptions(request: $_model.CreateSM2CertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSM2CertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.encryptCertificate)) {
      query["EncryptCertificate"] = request.encryptCertificate;
    }

    if (!$dara.isNull(request.encryptPrivateKey)) {
      query["EncryptPrivateKey"] = request.encryptPrivateKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.signCertificate)) {
      query["SignCertificate"] = request.signCertificate;
    }

    if (!$dara.isNull(request.signPrivateKey)) {
      query["SignPrivateKey"] = request.signPrivateKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSM2Cert",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSM2CertResponse>(await this.callApi(params, req, runtime), new $_model.CreateSM2CertResponse({}));
  }

  /**
   * Uploads an SM certificate for CNAME record access to Web Application Firewall (WAF).
   * 
   * @param request - CreateSM2CertRequest
   * @returns CreateSM2CertResponse
   */
  async createSM2Cert(request: $_model.CreateSM2CertRequest): Promise<$_model.CreateSM2CertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSM2CertWithOptions(request, runtime);
  }

  /**
   * Deletes addresses from an address book.
   * 
   * @param request - DeleteAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAddressResponse
   */
  async deleteAddressWithOptions(request: $_model.DeleteAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressList)) {
      query["AddressList"] = request.addressList;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAddress",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAddressResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAddressResponse({}));
  }

  /**
   * Deletes addresses from an address book.
   * 
   * @param request - DeleteAddressRequest
   * @returns DeleteAddressResponse
   */
  async deleteAddress(request: $_model.DeleteAddressRequest): Promise<$_model.DeleteAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAddressWithOptions(request, runtime);
  }

  /**
   * Deletes API security risks in a batch.
   * 
   * @param request - DeleteApisecAbnormalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApisecAbnormalsResponse
   */
  async deleteApisecAbnormalsWithOptions(request: $_model.DeleteApisecAbnormalsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApisecAbnormalsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.abnormalIds)) {
      query["AbnormalIds"] = request.abnormalIds;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApisecAbnormals",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApisecAbnormalsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApisecAbnormalsResponse({}));
  }

  /**
   * Deletes API security risks in a batch.
   * 
   * @param request - DeleteApisecAbnormalsRequest
   * @returns DeleteApisecAbnormalsResponse
   */
  async deleteApisecAbnormals(request: $_model.DeleteApisecAbnormalsRequest): Promise<$_model.DeleteApisecAbnormalsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApisecAbnormalsWithOptions(request, runtime);
  }

  /**
   * Deletes API security events in batches.
   * 
   * @param request - DeleteApisecEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApisecEventsResponse
   */
  async deleteApisecEventsWithOptions(request: $_model.DeleteApisecEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApisecEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.eventIds)) {
      query["EventIds"] = request.eventIds;
    }

    if (!$dara.isNull(request.eventScope)) {
      query["EventScope"] = request.eventScope;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApisecEvents",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApisecEventsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApisecEventsResponse({}));
  }

  /**
   * Deletes API security events in batches.
   * 
   * @param request - DeleteApisecEventsRequest
   * @returns DeleteApisecEventsResponse
   */
  async deleteApisecEvents(request: $_model.DeleteApisecEventsRequest): Promise<$_model.DeleteApisecEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApisecEventsWithOptions(request, runtime);
  }

  /**
   * Removes a cloud service from Web Application Firewall (WAF). This operation currently supports only Elastic Compute Service (ECS) and Classic Load Balancer (CLB).
   * 
   * @param request - DeleteCloudResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudResourceResponse
   */
  async deleteCloudResourceWithOptions(request: $_model.DeleteCloudResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cloudResourceId)) {
      query["CloudResourceId"] = request.cloudResourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resourceProduct)) {
      query["ResourceProduct"] = request.resourceProduct;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudResourceResponse({}));
  }

  /**
   * Removes a cloud service from Web Application Firewall (WAF). This operation currently supports only Elastic Compute Service (ECS) and Classic Load Balancer (CLB).
   * 
   * @param request - DeleteCloudResourceRequest
   * @returns DeleteCloudResourceResponse
   */
  async deleteCloudResource(request: $_model.DeleteCloudResourceRequest): Promise<$_model.DeleteCloudResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudResourceWithOptions(request, runtime);
  }

  /**
   * Deletes an extension certificate for cloud native mode.
   * 
   * @param request - DeleteCloudResourceExtensionCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudResourceExtensionCertResponse
   */
  async deleteCloudResourceExtensionCertWithOptions(request: $_model.DeleteCloudResourceExtensionCertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudResourceExtensionCertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.cloudResourceId)) {
      query["CloudResourceId"] = request.cloudResourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudResourceExtensionCert",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudResourceExtensionCertResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudResourceExtensionCertResponse({}));
  }

  /**
   * Deletes an extension certificate for cloud native mode.
   * 
   * @param request - DeleteCloudResourceExtensionCertRequest
   * @returns DeleteCloudResourceExtensionCertResponse
   */
  async deleteCloudResourceExtensionCert(request: $_model.DeleteCloudResourceExtensionCertRequest): Promise<$_model.DeleteCloudResourceExtensionCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudResourceExtensionCertWithOptions(request, runtime);
  }

  /**
   * Deletes a protected object.
   * 
   * @param request - DeleteDefenseResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDefenseResourceResponse
   */
  async deleteDefenseResourceWithOptions(request: $_model.DeleteDefenseResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDefenseResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDefenseResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDefenseResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDefenseResourceResponse({}));
  }

  /**
   * Deletes a protected object.
   * 
   * @param request - DeleteDefenseResourceRequest
   * @returns DeleteDefenseResourceResponse
   */
  async deleteDefenseResource(request: $_model.DeleteDefenseResourceRequest): Promise<$_model.DeleteDefenseResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDefenseResourceWithOptions(request, runtime);
  }

  /**
   * Deletes a protected object group.
   * 
   * @param request - DeleteDefenseResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDefenseResourceGroupResponse
   */
  async deleteDefenseResourceGroupWithOptions(request: $_model.DeleteDefenseResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDefenseResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDefenseResourceGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDefenseResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDefenseResourceGroupResponse({}));
  }

  /**
   * Deletes a protected object group.
   * 
   * @param request - DeleteDefenseResourceGroupRequest
   * @returns DeleteDefenseResourceGroupResponse
   */
  async deleteDefenseResourceGroup(request: $_model.DeleteDefenseResourceGroupRequest): Promise<$_model.DeleteDefenseResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDefenseResourceGroupWithOptions(request, runtime);
  }

  /**
   * Deletes the specified protection rules.
   * 
   * @param request - DeleteDefenseRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDefenseRuleResponse
   */
  async deleteDefenseRuleWithOptions(request: $_model.DeleteDefenseRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDefenseRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defenseType)) {
      query["DefenseType"] = request.defenseType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleIds)) {
      query["RuleIds"] = request.ruleIds;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDefenseRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDefenseRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDefenseRuleResponse({}));
  }

  /**
   * Deletes the specified protection rules.
   * 
   * @param request - DeleteDefenseRuleRequest
   * @returns DeleteDefenseRuleResponse
   */
  async deleteDefenseRule(request: $_model.DeleteDefenseRuleRequest): Promise<$_model.DeleteDefenseRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDefenseRuleWithOptions(request, runtime);
  }

  /**
   * Unblocks an IP address that is blocked by the scan protection module.
   * 
   * @param request - DeleteDefenseRuleBlockIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDefenseRuleBlockIpResponse
   */
  async deleteDefenseRuleBlockIpWithOptions(request: $_model.DeleteDefenseRuleBlockIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDefenseRuleBlockIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDefenseRuleBlockIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDefenseRuleBlockIpResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDefenseRuleBlockIpResponse({}));
  }

  /**
   * Unblocks an IP address that is blocked by the scan protection module.
   * 
   * @param request - DeleteDefenseRuleBlockIpRequest
   * @returns DeleteDefenseRuleBlockIpResponse
   */
  async deleteDefenseRuleBlockIp(request: $_model.DeleteDefenseRuleBlockIpRequest): Promise<$_model.DeleteDefenseRuleBlockIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDefenseRuleBlockIpWithOptions(request, runtime);
  }

  /**
   * Deletes a protection rule template.
   * 
   * @param request - DeleteDefenseTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDefenseTemplateResponse
   */
  async deleteDefenseTemplateWithOptions(request: $_model.DeleteDefenseTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDefenseTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDefenseTemplate",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDefenseTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDefenseTemplateResponse({}));
  }

  /**
   * Deletes a protection rule template.
   * 
   * @param request - DeleteDefenseTemplateRequest
   * @returns DeleteDefenseTemplateResponse
   */
  async deleteDefenseTemplate(request: $_model.DeleteDefenseTemplateRequest): Promise<$_model.DeleteDefenseTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDefenseTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a domain name that has been added to Web Application Firewall (WAF) in CNAME record mode.
   * 
   * @param request - DeleteDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(request: $_model.DeleteDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomain",
      version: "2021-10-01",
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
   * Deletes a domain name that has been added to Web Application Firewall (WAF) in CNAME record mode.
   * 
   * @param request - DeleteDomainRequest
   * @returns DeleteDomainResponse
   */
  async deleteDomain(request: $_model.DeleteDomainRequest): Promise<$_model.DeleteDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  /**
   * Deletes a hybrid cloud cluster rule from a Web Application Firewall (WAF) instance.
   * 
   * @param request - DeleteHybridCloudClusterRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHybridCloudClusterRuleResponse
   */
  async deleteHybridCloudClusterRuleWithOptions(request: $_model.DeleteHybridCloudClusterRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHybridCloudClusterRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterRuleResourceId)) {
      query["ClusterRuleResourceId"] = request.clusterRuleResourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHybridCloudClusterRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHybridCloudClusterRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHybridCloudClusterRuleResponse({}));
  }

  /**
   * Deletes a hybrid cloud cluster rule from a Web Application Firewall (WAF) instance.
   * 
   * @param request - DeleteHybridCloudClusterRuleRequest
   * @returns DeleteHybridCloudClusterRuleResponse
   */
  async deleteHybridCloudClusterRule(request: $_model.DeleteHybridCloudClusterRuleRequest): Promise<$_model.DeleteHybridCloudClusterRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHybridCloudClusterRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a group.
   * 
   * @param request - DeleteHybridCloudGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHybridCloudGroupResponse
   */
  async deleteHybridCloudGroupWithOptions(request: $_model.DeleteHybridCloudGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHybridCloudGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHybridCloudGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHybridCloudGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHybridCloudGroupResponse({}));
  }

  /**
   * Deletes a group.
   * 
   * @param request - DeleteHybridCloudGroupRequest
   * @returns DeleteHybridCloudGroupResponse
   */
  async deleteHybridCloudGroup(request: $_model.DeleteHybridCloudGroupRequest): Promise<$_model.DeleteHybridCloudGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHybridCloudGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a log delivery configuration.
   * 
   * @param request - DeleteLogDeliveryConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLogDeliveryConfigResponse
   */
  async deleteLogDeliveryConfigWithOptions(request: $_model.DeleteLogDeliveryConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLogDeliveryConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryName)) {
      query["DeliveryName"] = request.deliveryName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLogDeliveryConfig",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLogDeliveryConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLogDeliveryConfigResponse({}));
  }

  /**
   * Deletes a log delivery configuration.
   * 
   * @param request - DeleteLogDeliveryConfigRequest
   * @returns DeleteLogDeliveryConfigResponse
   */
  async deleteLogDeliveryConfig(request: $_model.DeleteLogDeliveryConfigRequest): Promise<$_model.DeleteLogDeliveryConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLogDeliveryConfigWithOptions(request, runtime);
  }

  /**
   * Deletes an IP address from the blacklist for critical event protection.
   * 
   * @param request - DeleteMajorProtectionBlackIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMajorProtectionBlackIpResponse
   */
  async deleteMajorProtectionBlackIpWithOptions(request: $_model.DeleteMajorProtectionBlackIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMajorProtectionBlackIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ipList)) {
      query["IpList"] = request.ipList;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMajorProtectionBlackIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMajorProtectionBlackIpResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMajorProtectionBlackIpResponse({}));
  }

  /**
   * Deletes an IP address from the blacklist for critical event protection.
   * 
   * @param request - DeleteMajorProtectionBlackIpRequest
   * @returns DeleteMajorProtectionBlackIpResponse
   */
  async deleteMajorProtectionBlackIp(request: $_model.DeleteMajorProtectionBlackIpRequest): Promise<$_model.DeleteMajorProtectionBlackIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMajorProtectionBlackIpWithOptions(request, runtime);
  }

  /**
   * Deletes a Web Application Firewall (WAF) member account.
   * 
   * @param request - DeleteMemberAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemberAccountResponse
   */
  async deleteMemberAccountWithOptions(request: $_model.DeleteMemberAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMemberAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.memberAccountId)) {
      query["MemberAccountId"] = request.memberAccountId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMemberAccount",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMemberAccountResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMemberAccountResponse({}));
  }

  /**
   * Deletes a Web Application Firewall (WAF) member account.
   * 
   * @param request - DeleteMemberAccountRequest
   * @returns DeleteMemberAccountResponse
   */
  async deleteMemberAccount(request: $_model.DeleteMemberAccountRequest): Promise<$_model.DeleteMemberAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMemberAccountWithOptions(request, runtime);
  }

  /**
   * Queries abnormal cloud resources added in cloud native mode.
   * 
   * @param request - DescribeAbnormalCloudResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAbnormalCloudResourcesResponse
   */
  async describeAbnormalCloudResourcesWithOptions(request: $_model.DescribeAbnormalCloudResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAbnormalCloudResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAbnormalCloudResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAbnormalCloudResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAbnormalCloudResourcesResponse({}));
  }

  /**
   * Queries abnormal cloud resources added in cloud native mode.
   * 
   * @param request - DescribeAbnormalCloudResourcesRequest
   * @returns DescribeAbnormalCloudResourcesResponse
   */
  async describeAbnormalCloudResources(request: $_model.DescribeAbnormalCloudResourcesRequest): Promise<$_model.DescribeAbnormalCloudResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAbnormalCloudResourcesWithOptions(request, runtime);
  }

  /**
   * Queries whether an account is a delegated administrator for Web Application Firewall (WAF) using the multi-account management feature.
   * 
   * @param request - DescribeAccountDelegatedStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountDelegatedStatusResponse
   */
  async describeAccountDelegatedStatusWithOptions(request: $_model.DescribeAccountDelegatedStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountDelegatedStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccountDelegatedStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccountDelegatedStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccountDelegatedStatusResponse({}));
  }

  /**
   * Queries whether an account is a delegated administrator for Web Application Firewall (WAF) using the multi-account management feature.
   * 
   * @param request - DescribeAccountDelegatedStatusRequest
   * @returns DescribeAccountDelegatedStatusResponse
   */
  async describeAccountDelegatedStatus(request: $_model.DescribeAccountDelegatedStatusRequest): Promise<$_model.DescribeAccountDelegatedStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountDelegatedStatusWithOptions(request, runtime);
  }

  /**
   * Queries a paginated list of addresses in an address book.
   * 
   * @param request - DescribeAddressesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAddressesResponse
   */
  async describeAddressesWithOptions(request: $_model.DescribeAddressesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAddressesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressLike)) {
      query["AddressLike"] = request.addressLike;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAddresses",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAddressesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAddressesResponse({}));
  }

  /**
   * Queries a paginated list of addresses in an address book.
   * 
   * @param request - DescribeAddressesRequest
   * @returns DescribeAddressesResponse
   */
  async describeAddresses(request: $_model.DescribeAddressesRequest): Promise<$_model.DescribeAddressesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAddressesWithOptions(request, runtime);
  }

  /**
   * Queries the alert banner information of a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeAlarmBannerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlarmBannerResponse
   */
  async describeAlarmBannerWithOptions(request: $_model.DescribeAlarmBannerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlarmBannerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlarmBanner",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlarmBannerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlarmBannerResponse({}));
  }

  /**
   * Queries the alert banner information of a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeAlarmBannerRequest
   * @returns DescribeAlarmBannerResponse
   */
  async describeAlarmBanner(request: $_model.DescribeAlarmBannerRequest): Promise<$_model.DescribeAlarmBannerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlarmBannerWithOptions(request, runtime);
  }

  /**
   * Queries a list of alerts.
   * 
   * @param request - DescribeAlarmListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlarmListResponse
   */
  async describeAlarmListWithOptions(request: $_model.DescribeAlarmListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlarmListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlarmList",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlarmListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlarmListResponse({}));
  }

  /**
   * Queries a list of alerts.
   * 
   * @param request - DescribeAlarmListRequest
   * @returns DescribeAlarmListResponse
   */
  async describeAlarmList(request: $_model.DescribeAlarmListRequest): Promise<$_model.DescribeAlarmListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlarmListWithOptions(request, runtime);
  }

  /**
   * Queries a list of API security export tasks.
   * 
   * @param request - DescribeApiExportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiExportsResponse
   */
  async describeApiExportsWithOptions(request: $_model.DescribeApiExportsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiExportsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiExports",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiExportsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiExportsResponse({}));
  }

  /**
   * Queries a list of API security export tasks.
   * 
   * @param request - DescribeApiExportsRequest
   * @returns DescribeApiExportsResponse
   */
  async describeApiExports(request: $_model.DescribeApiExportsRequest): Promise<$_model.DescribeApiExportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiExportsWithOptions(request, runtime);
  }

  /**
   * Queries the API security risk statistics for domain names that are protected by Web Application Firewall (WAF).
   * 
   * @param request - DescribeApisecAbnormalDomainStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecAbnormalDomainStatisticResponse
   */
  async describeApisecAbnormalDomainStatisticWithOptions(request: $_model.DescribeApisecAbnormalDomainStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecAbnormalDomainStatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderWay)) {
      query["OrderWay"] = request.orderWay;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecAbnormalDomainStatistic",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecAbnormalDomainStatisticResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecAbnormalDomainStatisticResponse({}));
  }

  /**
   * Queries the API security risk statistics for domain names that are protected by Web Application Firewall (WAF).
   * 
   * @param request - DescribeApisecAbnormalDomainStatisticRequest
   * @returns DescribeApisecAbnormalDomainStatisticResponse
   */
  async describeApisecAbnormalDomainStatistic(request: $_model.DescribeApisecAbnormalDomainStatisticRequest): Promise<$_model.DescribeApisecAbnormalDomainStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecAbnormalDomainStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the API security risks that are detected by Web Application Firewall (WAF).
   * 
   * @param request - DescribeApisecAbnormalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecAbnormalsResponse
   */
  async describeApisecAbnormalsWithOptions(request: $_model.DescribeApisecAbnormalsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecAbnormalsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.abnormalId)) {
      query["AbnormalId"] = request.abnormalId;
    }

    if (!$dara.isNull(request.abnormalLevel)) {
      query["AbnormalLevel"] = request.abnormalLevel;
    }

    if (!$dara.isNull(request.abnormalTag)) {
      query["AbnormalTag"] = request.abnormalTag;
    }

    if (!$dara.isNull(request.apiFormat)) {
      query["ApiFormat"] = request.apiFormat;
    }

    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.apiTag)) {
      query["ApiTag"] = request.apiTag;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.matchedHost)) {
      query["MatchedHost"] = request.matchedHost;
    }

    if (!$dara.isNull(request.orderKey)) {
      query["OrderKey"] = request.orderKey;
    }

    if (!$dara.isNull(request.orderWay)) {
      query["OrderWay"] = request.orderWay;
    }

    if (!$dara.isNull(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.userStatus)) {
      query["UserStatus"] = request.userStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecAbnormals",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecAbnormalsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecAbnormalsResponse({}));
  }

  /**
   * Queries the API security risks that are detected by Web Application Firewall (WAF).
   * 
   * @param request - DescribeApisecAbnormalsRequest
   * @returns DescribeApisecAbnormalsResponse
   */
  async describeApisecAbnormals(request: $_model.DescribeApisecAbnormalsRequest): Promise<$_model.DescribeApisecAbnormalsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecAbnormalsWithOptions(request, runtime);
  }

  /**
   * Queries a list of API security assets that are protected by Web Application Firewall (WAF).
   * 
   * @param request - DescribeApisecApiResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecApiResourcesResponse
   */
  async describeApisecApiResourcesWithOptions(request: $_model.DescribeApisecApiResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecApiResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiFormat)) {
      query["ApiFormat"] = request.apiFormat;
    }

    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.apiMethod)) {
      query["ApiMethod"] = request.apiMethod;
    }

    if (!$dara.isNull(request.apiStatus)) {
      query["ApiStatus"] = request.apiStatus;
    }

    if (!$dara.isNull(request.apiTag)) {
      query["ApiTag"] = request.apiTag;
    }

    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.authFlag)) {
      query["AuthFlag"] = request.authFlag;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.follow)) {
      query["Follow"] = request.follow;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.matchedHost)) {
      query["MatchedHost"] = request.matchedHost;
    }

    if (!$dara.isNull(request.note)) {
      query["Note"] = request.note;
    }

    if (!$dara.isNull(request.orderKey)) {
      query["OrderKey"] = request.orderKey;
    }

    if (!$dara.isNull(request.orderWay)) {
      query["OrderWay"] = request.orderWay;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestSensitiveType)) {
      query["RequestSensitiveType"] = request.requestSensitiveType;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.sensitiveLevel)) {
      query["SensitiveLevel"] = request.sensitiveLevel;
    }

    if (!$dara.isNull(request.sensitiveType)) {
      query["SensitiveType"] = request.sensitiveType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecApiResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecApiResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecApiResourcesResponse({}));
  }

  /**
   * Queries a list of API security assets that are protected by Web Application Firewall (WAF).
   * 
   * @param request - DescribeApisecApiResourcesRequest
   * @returns DescribeApisecApiResourcesResponse
   */
  async describeApisecApiResources(request: $_model.DescribeApisecApiResourcesRequest): Promise<$_model.DescribeApisecApiResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecApiResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the trend of API assets detected by the API security module of Web Application Firewall (WAF).
   * 
   * @param request - DescribeApisecAssetTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecAssetTrendResponse
   */
  async describeApisecAssetTrendWithOptions(request: $_model.DescribeApisecAssetTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecAssetTrendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecAssetTrend",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecAssetTrendResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecAssetTrendResponse({}));
  }

  /**
   * Queries the trend of API assets detected by the API security module of Web Application Firewall (WAF).
   * 
   * @param request - DescribeApisecAssetTrendRequest
   * @returns DescribeApisecAssetTrendResponse
   */
  async describeApisecAssetTrend(request: $_model.DescribeApisecAssetTrendRequest): Promise<$_model.DescribeApisecAssetTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecAssetTrendWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an API security event.
   * 
   * @param request - DescribeApisecEventDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecEventDetailResponse
   */
  async describeApisecEventDetailWithOptions(request: $_model.DescribeApisecEventDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecEventDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.detailType)) {
      query["DetailType"] = request.detailType;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.eventScope)) {
      query["EventScope"] = request.eventScope;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecEventDetail",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecEventDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecEventDetailResponse({}));
  }

  /**
   * Retrieves the details of an API security event.
   * 
   * @param request - DescribeApisecEventDetailRequest
   * @returns DescribeApisecEventDetailResponse
   */
  async describeApisecEventDetail(request: $_model.DescribeApisecEventDetailRequest): Promise<$_model.DescribeApisecEventDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecEventDetailWithOptions(request, runtime);
  }

  /**
   * Queries API security event statistics grouped by domain name for a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeApisecEventDomainStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecEventDomainStatisticResponse
   */
  async describeApisecEventDomainStatisticWithOptions(request: $_model.DescribeApisecEventDomainStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecEventDomainStatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderWay)) {
      query["OrderWay"] = request.orderWay;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecEventDomainStatistic",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecEventDomainStatisticResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecEventDomainStatisticResponse({}));
  }

  /**
   * Queries API security event statistics grouped by domain name for a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeApisecEventDomainStatisticRequest
   * @returns DescribeApisecEventDomainStatisticResponse
   */
  async describeApisecEventDomainStatistic(request: $_model.DescribeApisecEventDomainStatisticRequest): Promise<$_model.DescribeApisecEventDomainStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecEventDomainStatisticWithOptions(request, runtime);
  }

  /**
   * Queries a list of API security events.
   * 
   * @param request - DescribeApisecEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecEventsResponse
   */
  async describeApisecEventsWithOptions(request: $_model.DescribeApisecEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.apiFormat)) {
      query["ApiFormat"] = request.apiFormat;
    }

    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.apiTag)) {
      query["ApiTag"] = request.apiTag;
    }

    if (!$dara.isNull(request.attackIp)) {
      query["AttackIp"] = request.attackIp;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.eventLevel)) {
      query["EventLevel"] = request.eventLevel;
    }

    if (!$dara.isNull(request.eventScope)) {
      query["EventScope"] = request.eventScope;
    }

    if (!$dara.isNull(request.eventTag)) {
      query["EventTag"] = request.eventTag;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.matchedHost)) {
      query["MatchedHost"] = request.matchedHost;
    }

    if (!$dara.isNull(request.orderKey)) {
      query["OrderKey"] = request.orderKey;
    }

    if (!$dara.isNull(request.orderWay)) {
      query["OrderWay"] = request.orderWay;
    }

    if (!$dara.isNull(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!$dara.isNull(request.userStatus)) {
      query["UserStatus"] = request.userStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecEvents",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecEventsResponse({}));
  }

  /**
   * Queries a list of API security events.
   * 
   * @param request - DescribeApisecEventsRequest
   * @returns DescribeApisecEventsResponse
   */
  async describeApisecEvents(request: $_model.DescribeApisecEventsRequest): Promise<$_model.DescribeApisecEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecEventsWithOptions(request, runtime);
  }

  /**
   * Queries the API security examples that are detected by Web Application Firewall (WAF).
   * 
   * @param request - DescribeApisecExamplesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecExamplesResponse
   */
  async describeApisecExamplesWithOptions(request: $_model.DescribeApisecExamplesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecExamplesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.abnormalTag)) {
      query["AbnormalTag"] = request.abnormalTag;
    }

    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.exampleType)) {
      query["ExampleType"] = request.exampleType;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.requestSensitiveTypeList)) {
      query["RequestSensitiveTypeList"] = request.requestSensitiveTypeList;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.responseSensitiveTypeList)) {
      query["ResponseSensitiveTypeList"] = request.responseSensitiveTypeList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecExamples",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecExamplesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecExamplesResponse({}));
  }

  /**
   * Queries the API security examples that are detected by Web Application Firewall (WAF).
   * 
   * @param request - DescribeApisecExamplesRequest
   * @returns DescribeApisecExamplesResponse
   */
  async describeApisecExamples(request: $_model.DescribeApisecExamplesRequest): Promise<$_model.DescribeApisecExamplesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecExamplesWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of API security log subscription.
   * 
   * @param request - DescribeApisecLogDeliveriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecLogDeliveriesResponse
   */
  async describeApisecLogDeliveriesWithOptions(request: $_model.DescribeApisecLogDeliveriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecLogDeliveriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecLogDeliveries",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecLogDeliveriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecLogDeliveriesResponse({}));
  }

  /**
   * Queries the configurations of API security log subscription.
   * 
   * @param request - DescribeApisecLogDeliveriesRequest
   * @returns DescribeApisecLogDeliveriesResponse
   */
  async describeApisecLogDeliveries(request: $_model.DescribeApisecLogDeliveriesRequest): Promise<$_model.DescribeApisecLogDeliveriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecLogDeliveriesWithOptions(request, runtime);
  }

  /**
   * Queries the list of domain names that are protected by API security.
   * 
   * @param request - DescribeApisecMatchedHostsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecMatchedHostsResponse
   */
  async describeApisecMatchedHostsWithOptions(request: $_model.DescribeApisecMatchedHostsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecMatchedHostsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.matchedHost)) {
      query["MatchedHost"] = request.matchedHost;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecMatchedHosts",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecMatchedHostsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecMatchedHostsResponse({}));
  }

  /**
   * Queries the list of domain names that are protected by API security.
   * 
   * @param request - DescribeApisecMatchedHostsRequest
   * @returns DescribeApisecMatchedHostsResponse
   */
  async describeApisecMatchedHosts(request: $_model.DescribeApisecMatchedHostsRequest): Promise<$_model.DescribeApisecMatchedHostsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecMatchedHostsWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of active API security protection object groups.
   * 
   * @param request - DescribeApisecProtectionGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecProtectionGroupsResponse
   */
  async describeApisecProtectionGroupsWithOptions(request: $_model.DescribeApisecProtectionGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecProtectionGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apisecStatus)) {
      query["ApisecStatus"] = request.apisecStatus;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroup)) {
      query["ResourceGroup"] = request.resourceGroup;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecProtectionGroups",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecProtectionGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecProtectionGroupsResponse({}));
  }

  /**
   * Retrieves a list of active API security protection object groups.
   * 
   * @param request - DescribeApisecProtectionGroupsRequest
   * @returns DescribeApisecProtectionGroupsResponse
   */
  async describeApisecProtectionGroups(request: $_model.DescribeApisecProtectionGroupsRequest): Promise<$_model.DescribeApisecProtectionGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecProtectionGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the protected objects of a Web Application Firewall (WAF) instance for which API security is enabled.
   * 
   * @param request - DescribeApisecProtectionResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecProtectionResourcesResponse
   */
  async describeApisecProtectionResourcesWithOptions(request: $_model.DescribeApisecProtectionResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecProtectionResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apisecStatus)) {
      query["ApisecStatus"] = request.apisecStatus;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecProtectionResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecProtectionResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecProtectionResourcesResponse({}));
  }

  /**
   * Queries the protected objects of a Web Application Firewall (WAF) instance for which API security is enabled.
   * 
   * @param request - DescribeApisecProtectionResourcesRequest
   * @returns DescribeApisecProtectionResourcesResponse
   */
  async describeApisecProtectionResources(request: $_model.DescribeApisecProtectionResourcesRequest): Promise<$_model.DescribeApisecProtectionResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecProtectionResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the rules of an API security policy.
   * 
   * @param request - DescribeApisecRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecRulesResponse
   */
  async describeApisecRulesWithOptions(request: $_model.DescribeApisecRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecRules",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecRulesResponse({}));
  }

  /**
   * Queries the rules of an API security policy.
   * 
   * @param request - DescribeApisecRulesRequest
   * @returns DescribeApisecRulesResponse
   */
  async describeApisecRules(request: $_model.DescribeApisecRulesRequest): Promise<$_model.DescribeApisecRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecRulesWithOptions(request, runtime);
  }

  /**
   * Queries statistics on domain names where sensitive data is detected by the API security module.
   * 
   * @param request - DescribeApisecSensitiveDomainStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecSensitiveDomainStatisticResponse
   */
  async describeApisecSensitiveDomainStatisticWithOptions(request: $_model.DescribeApisecSensitiveDomainStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecSensitiveDomainStatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderWay)) {
      query["OrderWay"] = request.orderWay;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecSensitiveDomainStatistic",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecSensitiveDomainStatisticResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecSensitiveDomainStatisticResponse({}));
  }

  /**
   * Queries statistics on domain names where sensitive data is detected by the API security module.
   * 
   * @param request - DescribeApisecSensitiveDomainStatisticRequest
   * @returns DescribeApisecSensitiveDomainStatisticResponse
   */
  async describeApisecSensitiveDomainStatistic(request: $_model.DescribeApisecSensitiveDomainStatisticRequest): Promise<$_model.DescribeApisecSensitiveDomainStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecSensitiveDomainStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the Logstores whose names start with apisec- in Simple Log Service.
   * 
   * @param request - DescribeApisecSlsLogStoresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecSlsLogStoresResponse
   */
  async describeApisecSlsLogStoresWithOptions(request: $_model.DescribeApisecSlsLogStoresRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecSlsLogStoresResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logRegionId)) {
      query["LogRegionId"] = request.logRegionId;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecSlsLogStores",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecSlsLogStoresResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecSlsLogStoresResponse({}));
  }

  /**
   * Queries the Logstores whose names start with apisec- in Simple Log Service.
   * 
   * @param request - DescribeApisecSlsLogStoresRequest
   * @returns DescribeApisecSlsLogStoresResponse
   */
  async describeApisecSlsLogStores(request: $_model.DescribeApisecSlsLogStoresRequest): Promise<$_model.DescribeApisecSlsLogStoresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecSlsLogStoresWithOptions(request, runtime);
  }

  /**
   * Queries the projects whose names start with apisec- in Simple Log Service.
   * 
   * @param request - DescribeApisecSlsProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecSlsProjectsResponse
   */
  async describeApisecSlsProjectsWithOptions(request: $_model.DescribeApisecSlsProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecSlsProjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logRegionId)) {
      query["LogRegionId"] = request.logRegionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecSlsProjects",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecSlsProjectsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecSlsProjectsResponse({}));
  }

  /**
   * Queries the projects whose names start with apisec- in Simple Log Service.
   * 
   * @param request - DescribeApisecSlsProjectsRequest
   * @returns DescribeApisecSlsProjectsResponse
   */
  async describeApisecSlsProjects(request: $_model.DescribeApisecSlsProjectsRequest): Promise<$_model.DescribeApisecSlsProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecSlsProjectsWithOptions(request, runtime);
  }

  /**
   * Queries statistics for API security risks or security events.
   * 
   * @param request - DescribeApisecStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecStatisticsResponse
   */
  async describeApisecStatisticsWithOptions(request: $_model.DescribeApisecStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userStatusList)) {
      query["UserStatusList"] = request.userStatusList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecStatistics",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecStatisticsResponse({}));
  }

  /**
   * Queries statistics for API security risks or security events.
   * 
   * @param request - DescribeApisecStatisticsRequest
   * @returns DescribeApisecStatisticsResponse
   */
  async describeApisecStatistics(request: $_model.DescribeApisecStatisticsRequest): Promise<$_model.DescribeApisecStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries security suggestions for API assets.
   * 
   * @param request - DescribeApisecSuggestionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecSuggestionsResponse
   */
  async describeApisecSuggestionsWithOptions(request: $_model.DescribeApisecSuggestionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecSuggestionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecSuggestions",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecSuggestionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecSuggestionsResponse({}));
  }

  /**
   * Queries security suggestions for API assets.
   * 
   * @param request - DescribeApisecSuggestionsRequest
   * @returns DescribeApisecSuggestionsResponse
   */
  async describeApisecSuggestions(request: $_model.DescribeApisecSuggestionsRequest): Promise<$_model.DescribeApisecSuggestionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecSuggestionsWithOptions(request, runtime);
  }

  /**
   * Queries user operation records for API security of Web Application Firewall (WAF).
   * 
   * @param request - DescribeApisecUserOperationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisecUserOperationsResponse
   */
  async describeApisecUserOperationsWithOptions(request: $_model.DescribeApisecUserOperationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisecUserOperationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApisecUserOperations",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisecUserOperationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisecUserOperationsResponse({}));
  }

  /**
   * Queries user operation records for API security of Web Application Firewall (WAF).
   * 
   * @param request - DescribeApisecUserOperationsRequest
   * @returns DescribeApisecUserOperationsResponse
   */
  async describeApisecUserOperations(request: $_model.DescribeApisecUserOperationsRequest): Promise<$_model.DescribeApisecUserOperationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisecUserOperationsWithOptions(request, runtime);
  }

  /**
   * Queries paged records of ruleset changes.
   * 
   * @param request - DescribeBaseRuleChangeLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBaseRuleChangeLogResponse
   */
  async describeBaseRuleChangeLogWithOptions(request: $_model.DescribeBaseRuleChangeLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBaseRuleChangeLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBaseRuleChangeLog",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBaseRuleChangeLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBaseRuleChangeLogResponse({}));
  }

  /**
   * Queries paged records of ruleset changes.
   * 
   * @param request - DescribeBaseRuleChangeLogRequest
   * @returns DescribeBaseRuleChangeLogResponse
   */
  async describeBaseRuleChangeLog(request: $_model.DescribeBaseRuleChangeLogRequest): Promise<$_model.DescribeBaseRuleChangeLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBaseRuleChangeLogWithOptions(request, runtime);
  }

  /**
   * Queries the system rules for Web Application Firewall (WAF) protection.
   * 
   * @param request - DescribeBaseSystemRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBaseSystemRulesResponse
   */
  async describeBaseSystemRulesWithOptions(request: $_model.DescribeBaseSystemRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBaseSystemRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.detectType)) {
      query["DetectType"] = request.detectType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.ruleAction)) {
      query["RuleAction"] = request.ruleAction;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleStatus)) {
      query["RuleStatus"] = request.ruleStatus;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBaseSystemRules",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBaseSystemRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBaseSystemRulesResponse({}));
  }

  /**
   * Queries the system rules for Web Application Firewall (WAF) protection.
   * 
   * @param request - DescribeBaseSystemRulesRequest
   * @returns DescribeBaseSystemRulesResponse
   */
  async describeBaseSystemRules(request: $_model.DescribeBaseSystemRulesRequest): Promise<$_model.DescribeBaseSystemRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBaseSystemRulesWithOptions(request, runtime);
  }

  /**
   * Queries the AppKey for bot management.
   * 
   * @param request - DescribeBotAppKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBotAppKeyResponse
   */
  async describeBotAppKeyWithOptions(request: $_model.DescribeBotAppKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBotAppKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyVersion)) {
      query["KeyVersion"] = request.keyVersion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBotAppKey",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBotAppKeyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBotAppKeyResponse({}));
  }

  /**
   * Queries the AppKey for bot management.
   * 
   * @param request - DescribeBotAppKeyRequest
   * @returns DescribeBotAppKeyResponse
   */
  async describeBotAppKey(request: $_model.DescribeBotAppKeyRequest): Promise<$_model.DescribeBotAppKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBotAppKeyWithOptions(request, runtime);
  }

  /**
   * Queries the labels of bot management rules.
   * 
   * @param request - DescribeBotRuleLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBotRuleLabelsResponse
   */
  async describeBotRuleLabelsWithOptions(request: $_model.DescribeBotRuleLabelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBotRuleLabelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.labelType)) {
      query["LabelType"] = request.labelType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.subScene)) {
      query["SubScene"] = request.subScene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBotRuleLabels",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBotRuleLabelsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBotRuleLabelsResponse({}));
  }

  /**
   * Queries the labels of bot management rules.
   * 
   * @param request - DescribeBotRuleLabelsRequest
   * @returns DescribeBotRuleLabelsResponse
   */
  async describeBotRuleLabels(request: $_model.DescribeBotRuleLabelsRequest): Promise<$_model.DescribeBotRuleLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBotRuleLabelsWithOptions(request, runtime);
  }

  /**
   * Retrieves certificate details, including the certificate name, expiration time, issuance time, and associated domain name.
   * 
   * @param request - DescribeCertDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCertDetailResponse
   */
  async describeCertDetailWithOptions(request: $_model.DescribeCertDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCertDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCertDetail",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCertDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCertDetailResponse({}));
  }

  /**
   * Retrieves certificate details, including the certificate name, expiration time, issuance time, and associated domain name.
   * 
   * @param request - DescribeCertDetailRequest
   * @returns DescribeCertDetailResponse
   */
  async describeCertDetail(request: $_model.DescribeCertDetailRequest): Promise<$_model.DescribeCertDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCertDetailWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of certificates for a user.
   * 
   * @param request - DescribeCertsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCertsResponse
   */
  async describeCertsWithOptions(request: $_model.DescribeCertsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCertsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCerts",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCertsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCertsResponse({}));
  }

  /**
   * Retrieves the list of certificates for a user.
   * 
   * @param request - DescribeCertsRequest
   * @returns DescribeCertsResponse
   */
  async describeCerts(request: $_model.DescribeCertsRequest): Promise<$_model.DescribeCertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCertsWithOptions(request, runtime);
  }

  /**
   * Retrieves the billing module information of Web Application Firewall (WAF).
   * 
   * @param request - DescribeChargeModuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChargeModuleResponse
   */
  async describeChargeModuleWithOptions(request: $_model.DescribeChargeModuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChargeModuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChargeModule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChargeModuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChargeModuleResponse({}));
  }

  /**
   * Retrieves the billing module information of Web Application Firewall (WAF).
   * 
   * @param request - DescribeChargeModuleRequest
   * @returns DescribeChargeModuleResponse
   */
  async describeChargeModule(request: $_model.DescribeChargeModuleRequest): Promise<$_model.DescribeChargeModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChargeModuleWithOptions(request, runtime);
  }

  /**
   * Queries the billing results for Web Application Firewall (WAF).
   * 
   * @param request - DescribeChargeResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChargeResultResponse
   */
  async describeChargeResultWithOptions(request: $_model.DescribeChargeResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChargeResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chargeCycle)) {
      query["ChargeCycle"] = request.chargeCycle;
    }

    if (!$dara.isNull(request.chargeModules)) {
      query["ChargeModules"] = request.chargeModules;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChargeResult",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChargeResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChargeResultResponse({}));
  }

  /**
   * Queries the billing results for Web Application Firewall (WAF).
   * 
   * @param request - DescribeChargeResultRequest
   * @returns DescribeChargeResultResponse
   */
  async describeChargeResult(request: $_model.DescribeChargeResultRequest): Promise<$_model.DescribeChargeResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChargeResultWithOptions(request, runtime);
  }

  /**
   * Retrieves port details of cloud service instances onboarded to Web Application Firewall (WAF).
   * 
   * @param request - DescribeCloudResourceAccessPortDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudResourceAccessPortDetailsResponse
   */
  async describeCloudResourceAccessPortDetailsWithOptions(request: $_model.DescribeCloudResourceAccessPortDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudResourceAccessPortDetailsResponse> {
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

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resourceProduct)) {
      query["ResourceProduct"] = request.resourceProduct;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudResourceAccessPortDetails",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudResourceAccessPortDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudResourceAccessPortDetailsResponse({}));
  }

  /**
   * Retrieves port details of cloud service instances onboarded to Web Application Firewall (WAF).
   * 
   * @param request - DescribeCloudResourceAccessPortDetailsRequest
   * @returns DescribeCloudResourceAccessPortDetailsResponse
   */
  async describeCloudResourceAccessPortDetails(request: $_model.DescribeCloudResourceAccessPortDetailsRequest): Promise<$_model.DescribeCloudResourceAccessPortDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudResourceAccessPortDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the ports of cloud services added to Web Application Firewall (WAF). This operation is supported only for Elastic Compute Service (ECS) and Classic Load Balancer (CLB).
   * 
   * @param request - DescribeCloudResourceAccessedPortsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudResourceAccessedPortsResponse
   */
  async describeCloudResourceAccessedPortsWithOptions(request: $_model.DescribeCloudResourceAccessedPortsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudResourceAccessedPortsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudResourceAccessedPorts",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudResourceAccessedPortsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudResourceAccessedPortsResponse({}));
  }

  /**
   * Queries the ports of cloud services added to Web Application Firewall (WAF). This operation is supported only for Elastic Compute Service (ECS) and Classic Load Balancer (CLB).
   * 
   * @param request - DescribeCloudResourceAccessedPortsRequest
   * @returns DescribeCloudResourceAccessedPortsResponse
   */
  async describeCloudResourceAccessedPorts(request: $_model.DescribeCloudResourceAccessedPortsRequest): Promise<$_model.DescribeCloudResourceAccessedPortsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudResourceAccessedPortsWithOptions(request, runtime);
  }

  /**
   * Queries a list of resources added to Web Application Firewall (WAF) in cloud native mode.
   * 
   * @param request - DescribeCloudResourceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudResourceListResponse
   */
  async describeCloudResourceListWithOptions(request: $_model.DescribeCloudResourceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudResourceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cloudResourceId)) {
      query["CloudResourceId"] = request.cloudResourceId;
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

    if (!$dara.isNull(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resourceProduct)) {
      query["ResourceProduct"] = request.resourceProduct;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudResourceList",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudResourceListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudResourceListResponse({}));
  }

  /**
   * Queries a list of resources added to Web Application Firewall (WAF) in cloud native mode.
   * 
   * @param request - DescribeCloudResourceListRequest
   * @returns DescribeCloudResourceListResponse
   */
  async describeCloudResourceList(request: $_model.DescribeCloudResourceListRequest): Promise<$_model.DescribeCloudResourceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudResourceListWithOptions(request, runtime);
  }

  /**
   * Queries the list of cloud services added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeCloudResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudResourcesResponse
   */
  async describeCloudResourcesWithOptions(request: $_model.DescribeCloudResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceDomain)) {
      query["ResourceDomain"] = request.resourceDomain;
    }

    if (!$dara.isNull(request.resourceFunction)) {
      query["ResourceFunction"] = request.resourceFunction;
    }

    if (!$dara.isNull(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!$dara.isNull(request.resourceInstanceName)) {
      query["ResourceInstanceName"] = request.resourceInstanceName;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceProduct)) {
      query["ResourceProduct"] = request.resourceProduct;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceRouteName)) {
      query["ResourceRouteName"] = request.resourceRouteName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudResourcesResponse({}));
  }

  /**
   * Queries the list of cloud services added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeCloudResourcesRequest
   * @returns DescribeCloudResourcesResponse
   */
  async describeCloudResources(request: $_model.DescribeCloudResourcesRequest): Promise<$_model.DescribeCloudResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the total number of domain names added to WAF, including those in canonical name (CNAME) mode and hybrid cloud mode.
   * 
   * @param request - DescribeCnameCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCnameCountResponse
   */
  async describeCnameCountWithOptions(request: $_model.DescribeCnameCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCnameCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCnameCount",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCnameCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCnameCountResponse({}));
  }

  /**
   * Queries the total number of domain names added to WAF, including those in canonical name (CNAME) mode and hybrid cloud mode.
   * 
   * @param request - DescribeCnameCountRequest
   * @returns DescribeCnameCountResponse
   */
  async describeCnameCount(request: $_model.DescribeCnameCountRequest): Promise<$_model.DescribeCnameCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCnameCountWithOptions(request, runtime);
  }

  /**
   * Queries all log fields supported by Simple Log Service for Web Application Firewall (WAF).
   * 
   * @param tmpReq - DescribeCommonLogFieldsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCommonLogFieldsResponse
   */
  async describeCommonLogFieldsWithOptions(tmpReq: $_model.DescribeCommonLogFieldsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCommonLogFieldsResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeCommonLogFieldsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.logKeyList)) {
      request.logKeyListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.logKeyList, "LogKeyList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isDefault)) {
      query["IsDefault"] = request.isDefault;
    }

    if (!$dara.isNull(request.isRequired)) {
      query["IsRequired"] = request.isRequired;
    }

    if (!$dara.isNull(request.logKeyListShrink)) {
      query["LogKeyList"] = request.logKeyListShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCommonLogFields",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCommonLogFieldsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCommonLogFieldsResponse({}));
  }

  /**
   * Queries all log fields supported by Simple Log Service for Web Application Firewall (WAF).
   * 
   * @param request - DescribeCommonLogFieldsRequest
   * @returns DescribeCommonLogFieldsResponse
   */
  async describeCommonLogFields(request: $_model.DescribeCommonLogFieldsRequest): Promise<$_model.DescribeCommonLogFieldsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCommonLogFieldsWithOptions(request, runtime);
  }

  /**
   * Describes the compilation result of a custom regular expression rule.
   * 
   * @param request - DescribeCustomBaseRuleCompileResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomBaseRuleCompileResultResponse
   */
  async describeCustomBaseRuleCompileResultWithOptions(request: $_model.DescribeCustomBaseRuleCompileResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomBaseRuleCompileResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomBaseRuleCompileResult",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomBaseRuleCompileResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomBaseRuleCompileResultResponse({}));
  }

  /**
   * Describes the compilation result of a custom regular expression rule.
   * 
   * @param request - DescribeCustomBaseRuleCompileResultRequest
   * @returns DescribeCustomBaseRuleCompileResultResponse
   */
  async describeCustomBaseRuleCompileResult(request: $_model.DescribeCustomBaseRuleCompileResultRequest): Promise<$_model.DescribeCustomBaseRuleCompileResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomBaseRuleCompileResultWithOptions(request, runtime);
  }

  /**
   * Checks whether the current WAF instance is under a Distributed Denial of Service (DDoS) attack.
   * 
   * @param request - DescribeDDoSStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDDoSStatusResponse
   */
  async describeDDoSStatusWithOptions(request: $_model.DescribeDDoSStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDDoSStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDDoSStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDDoSStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDDoSStatusResponse({}));
  }

  /**
   * Checks whether the current WAF instance is under a Distributed Denial of Service (DDoS) attack.
   * 
   * @param request - DescribeDDoSStatusRequest
   * @returns DescribeDDoSStatusResponse
   */
  async describeDDoSStatus(request: $_model.DescribeDDoSStatusRequest): Promise<$_model.DescribeDDoSStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDoSStatusWithOptions(request, runtime);
  }

  /**
   * Queries the default SSL/TLS settings of a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeDefaultHttpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefaultHttpsResponse
   */
  async describeDefaultHttpsWithOptions(request: $_model.DescribeDefaultHttpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefaultHttpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefaultHttps",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefaultHttpsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefaultHttpsResponse({}));
  }

  /**
   * Queries the default SSL/TLS settings of a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeDefaultHttpsRequest
   * @returns DescribeDefaultHttpsResponse
   */
  async describeDefaultHttps(request: $_model.DescribeDefaultHttpsRequest): Promise<$_model.DescribeDefaultHttpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefaultHttpsWithOptions(request, runtime);
  }

  /**
   * Queries a paginated list of protected objects that can be associated with a defense group.
   * 
   * @param request - DescribeDefenseGroupValidResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseGroupValidResourcesResponse
   */
  async describeDefenseGroupValidResourcesWithOptions(request: $_model.DescribeDefenseGroupValidResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseGroupValidResourcesResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseGroupValidResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseGroupValidResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseGroupValidResourcesResponse({}));
  }

  /**
   * Queries a paginated list of protected objects that can be associated with a defense group.
   * 
   * @param request - DescribeDefenseGroupValidResourcesRequest
   * @returns DescribeDefenseGroupValidResourcesResponse
   */
  async describeDefenseGroupValidResources(request: $_model.DescribeDefenseGroupValidResourcesRequest): Promise<$_model.DescribeDefenseGroupValidResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseGroupValidResourcesWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a protected object.
   * 
   * @param request - DescribeDefenseResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseResourceResponse
   */
  async describeDefenseResourceWithOptions(request: $_model.DescribeDefenseResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseResourceResponse({}));
  }

  /**
   * Retrieves the details of a protected object.
   * 
   * @param request - DescribeDefenseResourceRequest
   * @returns DescribeDefenseResourceResponse
   */
  async describeDefenseResource(request: $_model.DescribeDefenseResourceRequest): Promise<$_model.DescribeDefenseResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseResourceWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a protected object group.
   * 
   * @param request - DescribeDefenseResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseResourceGroupResponse
   */
  async describeDefenseResourceGroupWithOptions(request: $_model.DescribeDefenseResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseResourceGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseResourceGroupResponse({}));
  }

  /**
   * Retrieves the details of a protected object group.
   * 
   * @param request - DescribeDefenseResourceGroupRequest
   * @returns DescribeDefenseResourceGroupResponse
   */
  async describeDefenseResourceGroup(request: $_model.DescribeDefenseResourceGroupRequest): Promise<$_model.DescribeDefenseResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseResourceGroupWithOptions(request, runtime);
  }

  /**
   * Queries the names of protected object groups.
   * 
   * @param request - DescribeDefenseResourceGroupNamesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseResourceGroupNamesResponse
   */
  async describeDefenseResourceGroupNamesWithOptions(request: $_model.DescribeDefenseResourceGroupNamesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseResourceGroupNamesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupNameLike)) {
      query["GroupNameLike"] = request.groupNameLike;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseResourceGroupNames",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseResourceGroupNamesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseResourceGroupNamesResponse({}));
  }

  /**
   * Queries the names of protected object groups.
   * 
   * @param request - DescribeDefenseResourceGroupNamesRequest
   * @returns DescribeDefenseResourceGroupNamesResponse
   */
  async describeDefenseResourceGroupNames(request: $_model.DescribeDefenseResourceGroupNamesRequest): Promise<$_model.DescribeDefenseResourceGroupNamesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseResourceGroupNamesWithOptions(request, runtime);
  }

  /**
   * Retrieves information about protected object groups using pagination.
   * 
   * @param request - DescribeDefenseResourceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseResourceGroupsResponse
   */
  async describeDefenseResourceGroupsWithOptions(request: $_model.DescribeDefenseResourceGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseResourceGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupNameLike)) {
      query["GroupNameLike"] = request.groupNameLike;
    }

    if (!$dara.isNull(request.groupNames)) {
      query["GroupNames"] = request.groupNames;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseResourceGroups",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseResourceGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseResourceGroupsResponse({}));
  }

  /**
   * Retrieves information about protected object groups using pagination.
   * 
   * @param request - DescribeDefenseResourceGroupsRequest
   * @returns DescribeDefenseResourceGroupsResponse
   */
  async describeDefenseResourceGroups(request: $_model.DescribeDefenseResourceGroupsRequest): Promise<$_model.DescribeDefenseResourceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseResourceGroupsWithOptions(request, runtime);
  }

  /**
   * Performs a pagination query to retrieve the names of protected objects.
   * 
   * @param request - DescribeDefenseResourceNamesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseResourceNamesResponse
   */
  async describeDefenseResourceNamesWithOptions(request: $_model.DescribeDefenseResourceNamesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseResourceNamesResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseResourceNames",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseResourceNamesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseResourceNamesResponse({}));
  }

  /**
   * Performs a pagination query to retrieve the names of protected objects.
   * 
   * @param request - DescribeDefenseResourceNamesRequest
   * @returns DescribeDefenseResourceNamesResponse
   */
  async describeDefenseResourceNames(request: $_model.DescribeDefenseResourceNamesRequest): Promise<$_model.DescribeDefenseResourceNamesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseResourceNamesWithOptions(request, runtime);
  }

  /**
   * Queries the asset owner account of protected objects in multi-account management scenarios.
   * 
   * @param request - DescribeDefenseResourceOwnerUidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseResourceOwnerUidResponse
   */
  async describeDefenseResourceOwnerUidWithOptions(request: $_model.DescribeDefenseResourceOwnerUidRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseResourceOwnerUidResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resourceNames)) {
      query["ResourceNames"] = request.resourceNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseResourceOwnerUid",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseResourceOwnerUidResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseResourceOwnerUidResponse({}));
  }

  /**
   * Queries the asset owner account of protected objects in multi-account management scenarios.
   * 
   * @param request - DescribeDefenseResourceOwnerUidRequest
   * @returns DescribeDefenseResourceOwnerUidResponse
   */
  async describeDefenseResourceOwnerUid(request: $_model.DescribeDefenseResourceOwnerUidRequest): Promise<$_model.DescribeDefenseResourceOwnerUidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseResourceOwnerUidWithOptions(request, runtime);
  }

  /**
   * Queries the protection templates associated with a protected object or protected object group.
   * 
   * @param request - DescribeDefenseResourceTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseResourceTemplatesResponse
   */
  async describeDefenseResourceTemplatesWithOptions(request: $_model.DescribeDefenseResourceTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseResourceTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseResourceTemplates",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseResourceTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseResourceTemplatesResponse({}));
  }

  /**
   * Queries the protection templates associated with a protected object or protected object group.
   * 
   * @param request - DescribeDefenseResourceTemplatesRequest
   * @returns DescribeDefenseResourceTemplatesResponse
   */
  async describeDefenseResourceTemplates(request: $_model.DescribeDefenseResourceTemplatesRequest): Promise<$_model.DescribeDefenseResourceTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseResourceTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries a list of protected objects.
   * 
   * @param request - DescribeDefenseResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseResourcesResponse
   */
  async describeDefenseResourcesWithOptions(request: $_model.DescribeDefenseResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseResourcesResponse> {
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

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseResourcesResponse({}));
  }

  /**
   * Queries a list of protected objects.
   * 
   * @param request - DescribeDefenseResourcesRequest
   * @returns DescribeDefenseResourcesResponse
   */
  async describeDefenseResources(request: $_model.DescribeDefenseResourcesRequest): Promise<$_model.DescribeDefenseResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseResourcesWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a specified protection rule.
   * 
   * @param request - DescribeDefenseRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseRuleResponse
   */
  async describeDefenseRuleWithOptions(request: $_model.DescribeDefenseRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defenseType)) {
      query["DefenseType"] = request.defenseType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseRuleResponse({}));
  }

  /**
   * Retrieves the details of a specified protection rule.
   * 
   * @param request - DescribeDefenseRuleRequest
   * @returns DescribeDefenseRuleResponse
   */
  async describeDefenseRule(request: $_model.DescribeDefenseRuleRequest): Promise<$_model.DescribeDefenseRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseRuleWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of rules in a specified Web Application Firewall (WAF) protection module.
   * 
   * @param request - DescribeDefenseRuleStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseRuleStatisticsResponse
   */
  async describeDefenseRuleStatisticsWithOptions(request: $_model.DescribeDefenseRuleStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseRuleStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fourthKey)) {
      query["FourthKey"] = request.fourthKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.primaryKey)) {
      query["PrimaryKey"] = request.primaryKey;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.secondaryKey)) {
      query["SecondaryKey"] = request.secondaryKey;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.thirdKey)) {
      query["ThirdKey"] = request.thirdKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseRuleStatistics",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseRuleStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseRuleStatisticsResponse({}));
  }

  /**
   * Queries the statistics of rules in a specified Web Application Firewall (WAF) protection module.
   * 
   * @param request - DescribeDefenseRuleStatisticsRequest
   * @returns DescribeDefenseRuleStatisticsResponse
   */
  async describeDefenseRuleStatistics(request: $_model.DescribeDefenseRuleStatisticsRequest): Promise<$_model.DescribeDefenseRuleStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseRuleStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries a paginated list of protection rules.
   * 
   * @param request - DescribeDefenseRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseRulesResponse
   */
  async describeDefenseRulesWithOptions(request: $_model.DescribeDefenseRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defenseType)) {
      query["DefenseType"] = request.defenseType;
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

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseRules",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseRulesResponse({}));
  }

  /**
   * Queries a paginated list of protection rules.
   * 
   * @param request - DescribeDefenseRulesRequest
   * @returns DescribeDefenseRulesResponse
   */
  async describeDefenseRules(request: $_model.DescribeDefenseRulesRequest): Promise<$_model.DescribeDefenseRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseRulesWithOptions(request, runtime);
  }

  /**
   * Queries the protection configurations for a specific defense scenario.
   * 
   * @param request - DescribeDefenseSceneConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseSceneConfigResponse
   */
  async describeDefenseSceneConfigWithOptions(request: $_model.DescribeDefenseSceneConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseSceneConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configKey)) {
      query["ConfigKey"] = request.configKey;
    }

    if (!$dara.isNull(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseSceneConfig",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseSceneConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseSceneConfigResponse({}));
  }

  /**
   * Queries the protection configurations for a specific defense scenario.
   * 
   * @param request - DescribeDefenseSceneConfigRequest
   * @returns DescribeDefenseSceneConfigResponse
   */
  async describeDefenseSceneConfig(request: $_model.DescribeDefenseSceneConfigRequest): Promise<$_model.DescribeDefenseSceneConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseSceneConfigWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a specific protection template.
   * 
   * @param request - DescribeDefenseTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseTemplateResponse
   */
  async describeDefenseTemplateWithOptions(request: $_model.DescribeDefenseTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseTemplate",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseTemplateResponse({}));
  }

  /**
   * Retrieves the details of a specific protection template.
   * 
   * @param request - DescribeDefenseTemplateRequest
   * @returns DescribeDefenseTemplateResponse
   */
  async describeDefenseTemplate(request: $_model.DescribeDefenseTemplateRequest): Promise<$_model.DescribeDefenseTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the names of protected object groups that can be associated with a specific protection template.
   * 
   * @param request - DescribeDefenseTemplateValidGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseTemplateValidGroupsResponse
   */
  async describeDefenseTemplateValidGroupsWithOptions(request: $_model.DescribeDefenseTemplateValidGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseTemplateValidGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseTemplateValidGroups",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseTemplateValidGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseTemplateValidGroupsResponse({}));
  }

  /**
   * Queries the names of protected object groups that can be associated with a specific protection template.
   * 
   * @param request - DescribeDefenseTemplateValidGroupsRequest
   * @returns DescribeDefenseTemplateValidGroupsResponse
   */
  async describeDefenseTemplateValidGroups(request: $_model.DescribeDefenseTemplateValidGroupsRequest): Promise<$_model.DescribeDefenseTemplateValidGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseTemplateValidGroupsWithOptions(request, runtime);
  }

  /**
   * Queries a paginated list of protected objects that are valid for a specified protection template.
   * 
   * @param request - DescribeDefenseTemplateValidResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseTemplateValidResourcesResponse
   */
  async describeDefenseTemplateValidResourcesWithOptions(request: $_model.DescribeDefenseTemplateValidResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseTemplateValidResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseTemplateValidResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseTemplateValidResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseTemplateValidResourcesResponse({}));
  }

  /**
   * Queries a paginated list of protected objects that are valid for a specified protection template.
   * 
   * @param request - DescribeDefenseTemplateValidResourcesRequest
   * @returns DescribeDefenseTemplateValidResourcesResponse
   */
  async describeDefenseTemplateValidResources(request: $_model.DescribeDefenseTemplateValidResourcesRequest): Promise<$_model.DescribeDefenseTemplateValidResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseTemplateValidResourcesWithOptions(request, runtime);
  }

  /**
   * Retrieves a paginated list of protection templates.
   * 
   * @param request - DescribeDefenseTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseTemplatesResponse
   */
  async describeDefenseTemplatesWithOptions(request: $_model.DescribeDefenseTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDefenseTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!$dara.isNull(request.defenseSubScene)) {
      query["DefenseSubScene"] = request.defenseSubScene;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseTemplates",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDefenseTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDefenseTemplatesResponse({}));
  }

  /**
   * Retrieves a paginated list of protection templates.
   * 
   * @param request - DescribeDefenseTemplatesRequest
   * @returns DescribeDefenseTemplatesResponse
   */
  async describeDefenseTemplates(request: $_model.DescribeDefenseTemplatesRequest): Promise<$_model.DescribeDefenseTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseTemplatesWithOptions(request, runtime);
  }

  /**
   * Verifies that the DNS record of a domain name is correct.
   * 
   * @param request - DescribeDomainDNSRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainDNSRecordResponse
   */
  async describeDomainDNSRecordWithOptions(request: $_model.DescribeDomainDNSRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainDNSRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainDNSRecord",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainDNSRecordResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainDNSRecordResponse({}));
  }

  /**
   * Verifies that the DNS record of a domain name is correct.
   * 
   * @param request - DescribeDomainDNSRecordRequest
   * @returns DescribeDomainDNSRecordResponse
   */
  async describeDomainDNSRecord(request: $_model.DescribeDomainDNSRecordRequest): Promise<$_model.DescribeDomainDNSRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainDNSRecordWithOptions(request, runtime);
  }

  /**
   * Retrieves the access configuration details of a domain name onboarded to Web Application Firewall (WAF).
   * 
   * @param request - DescribeDomainDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainDetailResponse
   */
  async describeDomainDetailWithOptions(request: $_model.DescribeDomainDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainDetail",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainDetailResponse({}));
  }

  /**
   * Retrieves the access configuration details of a domain name onboarded to Web Application Firewall (WAF).
   * 
   * @param request - DescribeDomainDetailRequest
   * @returns DescribeDomainDetailResponse
   */
  async describeDomainDetail(request: $_model.DescribeDomainDetailRequest): Promise<$_model.DescribeDomainDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainDetailWithOptions(request, runtime);
  }

  /**
   * Queries the ports used by all domain names that are added in CNAME record mode and hybrid cloud mode with public network disaster recovery enabled.
   * 
   * @param request - DescribeDomainUsedPortsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainUsedPortsResponse
   */
  async describeDomainUsedPortsWithOptions(request: $_model.DescribeDomainUsedPortsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainUsedPortsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainUsedPorts",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainUsedPortsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainUsedPortsResponse({}));
  }

  /**
   * Queries the ports used by all domain names that are added in CNAME record mode and hybrid cloud mode with public network disaster recovery enabled.
   * 
   * @param request - DescribeDomainUsedPortsRequest
   * @returns DescribeDomainUsedPortsResponse
   */
  async describeDomainUsedPorts(request: $_model.DescribeDomainUsedPortsRequest): Promise<$_model.DescribeDomainUsedPortsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainUsedPortsWithOptions(request, runtime);
  }

  /**
   * Queries the domain names that are added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainsResponse
   */
  async describeDomainsWithOptions(request: $_model.DescribeDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backend)) {
      query["Backend"] = request.backend;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomains",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainsResponse({}));
  }

  /**
   * Queries the domain names that are added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeDomainsRequest
   * @returns DescribeDomainsResponse
   */
  async describeDomains(request: $_model.DescribeDomainsRequest): Promise<$_model.DescribeDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the daily bills for WAF on-demand instances for the last 7 days.
   * 
   * @param request - DescribeElasticBillsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticBillsResponse
   */
  async describeElasticBillsWithOptions(request: $_model.DescribeElasticBillsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeElasticBillsResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeElasticBills",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeElasticBillsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeElasticBillsResponse({}));
  }

  /**
   * Queries the daily bills for WAF on-demand instances for the last 7 days.
   * 
   * @param request - DescribeElasticBillsRequest
   * @returns DescribeElasticBillsResponse
   */
  async describeElasticBills(request: $_model.DescribeElasticBillsRequest): Promise<$_model.DescribeElasticBillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElasticBillsWithOptions(request, runtime);
  }

  /**
   * Queries the traffic statistics.
   * 
   * @param request - DescribeFlowChartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFlowChartResponse
   */
  async describeFlowChartWithOptions(request: $_model.DescribeFlowChartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFlowChartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFlowChart",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFlowChartResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFlowChartResponse({}));
  }

  /**
   * Queries the traffic statistics.
   * 
   * @param request - DescribeFlowChartRequest
   * @returns DescribeFlowChartResponse
   */
  async describeFlowChart(request: $_model.DescribeFlowChartRequest): Promise<$_model.DescribeFlowChartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFlowChartWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 protected objects by request count.
   * 
   * @param request - DescribeFlowTopResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFlowTopResourceResponse
   */
  async describeFlowTopResourceWithOptions(request: $_model.DescribeFlowTopResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFlowTopResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFlowTopResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFlowTopResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFlowTopResourceResponse({}));
  }

  /**
   * Queries the top 10 protected objects by request count.
   * 
   * @param request - DescribeFlowTopResourceRequest
   * @returns DescribeFlowTopResourceResponse
   */
  async describeFlowTopResource(request: $_model.DescribeFlowTopResourceRequest): Promise<$_model.DescribeFlowTopResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFlowTopResourceWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 most requested URLs.
   * 
   * @param request - DescribeFlowTopUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFlowTopUrlResponse
   */
  async describeFlowTopUrlWithOptions(request: $_model.DescribeFlowTopUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFlowTopUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFlowTopUrl",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFlowTopUrlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFlowTopUrlResponse({}));
  }

  /**
   * Queries the top 10 most requested URLs.
   * 
   * @param request - DescribeFlowTopUrlRequest
   * @returns DescribeFlowTopUrlResponse
   */
  async describeFlowTopUrl(request: $_model.DescribeFlowTopUrlRequest): Promise<$_model.DescribeFlowTopUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFlowTopUrlWithOptions(request, runtime);
  }

  /**
   * Queries statistics information about assets detected by the basic API security feature.
   * 
   * @param request - DescribeFreeUserAssetCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFreeUserAssetCountResponse
   */
  async describeFreeUserAssetCountWithOptions(request: $_model.DescribeFreeUserAssetCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFreeUserAssetCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFreeUserAssetCount",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFreeUserAssetCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFreeUserAssetCountResponse({}));
  }

  /**
   * Queries statistics information about assets detected by the basic API security feature.
   * 
   * @param request - DescribeFreeUserAssetCountRequest
   * @returns DescribeFreeUserAssetCountResponse
   */
  async describeFreeUserAssetCount(request: $_model.DescribeFreeUserAssetCountRequest): Promise<$_model.DescribeFreeUserAssetCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFreeUserAssetCountWithOptions(request, runtime);
  }

  /**
   * Queries statistics about security events detected by basic API security checks.
   * 
   * @param request - DescribeFreeUserEventCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFreeUserEventCountResponse
   */
  async describeFreeUserEventCountWithOptions(request: $_model.DescribeFreeUserEventCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFreeUserEventCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFreeUserEventCount",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFreeUserEventCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFreeUserEventCountResponse({}));
  }

  /**
   * Queries statistics about security events detected by basic API security checks.
   * 
   * @param request - DescribeFreeUserEventCountRequest
   * @returns DescribeFreeUserEventCountResponse
   */
  async describeFreeUserEventCount(request: $_model.DescribeFreeUserEventCountRequest): Promise<$_model.DescribeFreeUserEventCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFreeUserEventCountWithOptions(request, runtime);
  }

  /**
   * Queries the types of security events for basic API security detection.
   * 
   * @param request - DescribeFreeUserEventTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFreeUserEventTypesResponse
   */
  async describeFreeUserEventTypesWithOptions(request: $_model.DescribeFreeUserEventTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFreeUserEventTypesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFreeUserEventTypes",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFreeUserEventTypesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFreeUserEventTypesResponse({}));
  }

  /**
   * Queries the types of security events for basic API security detection.
   * 
   * @param request - DescribeFreeUserEventTypesRequest
   * @returns DescribeFreeUserEventTypesResponse
   */
  async describeFreeUserEventTypes(request: $_model.DescribeFreeUserEventTypesRequest): Promise<$_model.DescribeFreeUserEventTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFreeUserEventTypesWithOptions(request, runtime);
  }

  /**
   * Queries security events detected by the basic API security scan.
   * 
   * @param request - DescribeFreeUserEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFreeUserEventsResponse
   */
  async describeFreeUserEventsWithOptions(request: $_model.DescribeFreeUserEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFreeUserEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFreeUserEvents",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFreeUserEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFreeUserEventsResponse({}));
  }

  /**
   * Queries security events detected by the basic API security scan.
   * 
   * @param request - DescribeFreeUserEventsRequest
   * @returns DescribeFreeUserEventsResponse
   */
  async describeFreeUserEvents(request: $_model.DescribeFreeUserEventsRequest): Promise<$_model.DescribeFreeUserEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFreeUserEventsWithOptions(request, runtime);
  }

  /**
   * Queries the system status of a node in a hybrid cloud cluster.
   * 
   * @param request - DescribeHybridCloudBasicMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudBasicMonitorResponse
   */
  async describeHybridCloudBasicMonitorWithOptions(request: $_model.DescribeHybridCloudBasicMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridCloudBasicMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mid)) {
      query["Mid"] = request.mid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridCloudBasicMonitor",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridCloudBasicMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridCloudBasicMonitorResponse({}));
  }

  /**
   * Queries the system status of a node in a hybrid cloud cluster.
   * 
   * @param request - DescribeHybridCloudBasicMonitorRequest
   * @returns DescribeHybridCloudBasicMonitorResponse
   */
  async describeHybridCloudBasicMonitor(request: $_model.DescribeHybridCloudBasicMonitorRequest): Promise<$_model.DescribeHybridCloudBasicMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridCloudBasicMonitorWithOptions(request, runtime);
  }

  /**
   * Retrieves a hybrid cloud cluster rule.
   * 
   * @param request - DescribeHybridCloudClusterRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudClusterRuleResponse
   */
  async describeHybridCloudClusterRuleWithOptions(request: $_model.DescribeHybridCloudClusterRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridCloudClusterRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridCloudClusterRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridCloudClusterRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridCloudClusterRuleResponse({}));
  }

  /**
   * Retrieves a hybrid cloud cluster rule.
   * 
   * @param request - DescribeHybridCloudClusterRuleRequest
   * @returns DescribeHybridCloudClusterRuleResponse
   */
  async describeHybridCloudClusterRule(request: $_model.DescribeHybridCloudClusterRuleRequest): Promise<$_model.DescribeHybridCloudClusterRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridCloudClusterRuleWithOptions(request, runtime);
  }

  /**
   * Cluster rules
   * 
   * @param request - DescribeHybridCloudClusterRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudClusterRulesResponse
   */
  async describeHybridCloudClusterRulesWithOptions(request: $_model.DescribeHybridCloudClusterRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridCloudClusterRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleContent)) {
      query["RuleContent"] = request.ruleContent;
    }

    if (!$dara.isNull(request.ruleMatchType)) {
      query["RuleMatchType"] = request.ruleMatchType;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridCloudClusterRules",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridCloudClusterRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridCloudClusterRulesResponse({}));
  }

  /**
   * Cluster rules
   * 
   * @param request - DescribeHybridCloudClusterRulesRequest
   * @returns DescribeHybridCloudClusterRulesResponse
   */
  async describeHybridCloudClusterRules(request: $_model.DescribeHybridCloudClusterRulesRequest): Promise<$_model.DescribeHybridCloudClusterRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridCloudClusterRulesWithOptions(request, runtime);
  }

  /**
   * Queries the servers in a hybrid cloud Web Application Firewall (WAF) cluster.
   * 
   * @param request - DescribeHybridCloudClusterServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudClusterServersResponse
   */
  async describeHybridCloudClusterServersWithOptions(request: $_model.DescribeHybridCloudClusterServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridCloudClusterServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridCloudClusterServers",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridCloudClusterServersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridCloudClusterServersResponse({}));
  }

  /**
   * Queries the servers in a hybrid cloud Web Application Firewall (WAF) cluster.
   * 
   * @param request - DescribeHybridCloudClusterServersRequest
   * @returns DescribeHybridCloudClusterServersResponse
   */
  async describeHybridCloudClusterServers(request: $_model.DescribeHybridCloudClusterServersRequest): Promise<$_model.DescribeHybridCloudClusterServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridCloudClusterServersWithOptions(request, runtime);
  }

  /**
   * Queries a list of hybrid cloud clusters.
   * 
   * @param request - DescribeHybridCloudClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudClustersResponse
   */
  async describeHybridCloudClustersWithOptions(request: $_model.DescribeHybridCloudClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridCloudClustersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridCloudClusters",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridCloudClustersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridCloudClustersResponse({}));
  }

  /**
   * Queries a list of hybrid cloud clusters.
   * 
   * @param request - DescribeHybridCloudClustersRequest
   * @returns DescribeHybridCloudClustersResponse
   */
  async describeHybridCloudClusters(request: $_model.DescribeHybridCloudClustersRequest): Promise<$_model.DescribeHybridCloudClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridCloudClustersWithOptions(request, runtime);
  }

  /**
   * Queries the Hybrid Cloud WAF node groups that are added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeHybridCloudGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudGroupsResponse
   */
  async describeHybridCloudGroupsWithOptions(request: $_model.DescribeHybridCloudGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridCloudGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterProxyType)) {
      query["ClusterProxyType"] = request.clusterProxyType;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridCloudGroups",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridCloudGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridCloudGroupsResponse({}));
  }

  /**
   * Queries the Hybrid Cloud WAF node groups that are added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeHybridCloudGroupsRequest
   * @returns DescribeHybridCloudGroupsResponse
   */
  async describeHybridCloudGroups(request: $_model.DescribeHybridCloudGroupsRequest): Promise<$_model.DescribeHybridCloudGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridCloudGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the status of applications on nodes in a hybrid cloud Web Application Firewall (WAF) cluster.
   * 
   * @param request - DescribeHybridCloudProcessMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudProcessMonitorResponse
   */
  async describeHybridCloudProcessMonitorWithOptions(request: $_model.DescribeHybridCloudProcessMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridCloudProcessMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mid)) {
      query["Mid"] = request.mid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridCloudProcessMonitor",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridCloudProcessMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridCloudProcessMonitorResponse({}));
  }

  /**
   * Queries the status of applications on nodes in a hybrid cloud Web Application Firewall (WAF) cluster.
   * 
   * @param request - DescribeHybridCloudProcessMonitorRequest
   * @returns DescribeHybridCloudProcessMonitorResponse
   */
  async describeHybridCloudProcessMonitor(request: $_model.DescribeHybridCloudProcessMonitorRequest): Promise<$_model.DescribeHybridCloudProcessMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridCloudProcessMonitorWithOptions(request, runtime);
  }

  /**
   * Queries the count of protectable nodes that can be added to a hybrid cloud cluster.
   * 
   * @param request - DescribeHybridCloudProtectableCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudProtectableCountResponse
   */
  async describeHybridCloudProtectableCountWithOptions(request: $_model.DescribeHybridCloudProtectableCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridCloudProtectableCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridCloudProtectableCount",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridCloudProtectableCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridCloudProtectableCountResponse({}));
  }

  /**
   * Queries the count of protectable nodes that can be added to a hybrid cloud cluster.
   * 
   * @param request - DescribeHybridCloudProtectableCountRequest
   * @returns DescribeHybridCloudProtectableCountResponse
   */
  async describeHybridCloudProtectableCount(request: $_model.DescribeHybridCloudProtectableCountRequest): Promise<$_model.DescribeHybridCloudProtectableCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridCloudProtectableCountWithOptions(request, runtime);
  }

  /**
   * Queries the details of a hybrid cloud domain name.
   * 
   * @param request - DescribeHybridCloudResourceDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudResourceDetailResponse
   */
  async describeHybridCloudResourceDetailWithOptions(request: $_model.DescribeHybridCloudResourceDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridCloudResourceDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backend)) {
      query["Backend"] = request.backend;
    }

    if (!$dara.isNull(request.cnameEnabled)) {
      query["CnameEnabled"] = request.cnameEnabled;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridCloudResourceDetail",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridCloudResourceDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridCloudResourceDetailResponse({}));
  }

  /**
   * Queries the details of a hybrid cloud domain name.
   * 
   * @param request - DescribeHybridCloudResourceDetailRequest
   * @returns DescribeHybridCloudResourceDetailResponse
   */
  async describeHybridCloudResourceDetail(request: $_model.DescribeHybridCloudResourceDetailRequest): Promise<$_model.DescribeHybridCloudResourceDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridCloudResourceDetailWithOptions(request, runtime);
  }

  /**
   * Queries the domain names that are added to Web Application Firewall (WAF) in hybrid cloud mode.
   * 
   * @param request - DescribeHybridCloudResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudResourcesResponse
   */
  async describeHybridCloudResourcesWithOptions(request: $_model.DescribeHybridCloudResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridCloudResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backend)) {
      query["Backend"] = request.backend;
    }

    if (!$dara.isNull(request.cnameEnabled)) {
      query["CnameEnabled"] = request.cnameEnabled;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridCloudResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridCloudResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridCloudResourcesResponse({}));
  }

  /**
   * Queries the domain names that are added to Web Application Firewall (WAF) in hybrid cloud mode.
   * 
   * @param request - DescribeHybridCloudResourcesRequest
   * @returns DescribeHybridCloudResourcesResponse
   */
  async describeHybridCloudResources(request: $_model.DescribeHybridCloudResourcesRequest): Promise<$_model.DescribeHybridCloudResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridCloudResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the hybrid cloud SDK servers that are managed by a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeHybridCloudSdkServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudSdkServersResponse
   */
  async describeHybridCloudSdkServersWithOptions(request: $_model.DescribeHybridCloudSdkServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridCloudSdkServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridCloudSdkServers",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridCloudSdkServersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridCloudSdkServersResponse({}));
  }

  /**
   * Queries the hybrid cloud SDK servers that are managed by a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeHybridCloudSdkServersRequest
   * @returns DescribeHybridCloudSdkServersResponse
   */
  async describeHybridCloudSdkServers(request: $_model.DescribeHybridCloudSdkServersRequest): Promise<$_model.DescribeHybridCloudSdkServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridCloudSdkServersWithOptions(request, runtime);
  }

  /**
   * Queries hybrid cloud server regions, including carriers, continents, and cities.
   * 
   * @param request - DescribeHybridCloudServerRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudServerRegionsResponse
   */
  async describeHybridCloudServerRegionsWithOptions(request: $_model.DescribeHybridCloudServerRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridCloudServerRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionType)) {
      query["RegionType"] = request.regionType;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridCloudServerRegions",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridCloudServerRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridCloudServerRegionsResponse({}));
  }

  /**
   * Queries hybrid cloud server regions, including carriers, continents, and cities.
   * 
   * @param request - DescribeHybridCloudServerRegionsRequest
   * @returns DescribeHybridCloudServerRegionsResponse
   */
  async describeHybridCloudServerRegions(request: $_model.DescribeHybridCloudServerRegionsRequest): Promise<$_model.DescribeHybridCloudServerRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridCloudServerRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the regions that are supported for hybrid cloud access in Web Application Firewall (WAF).
   * 
   * @param request - DescribeHybridCloudSupportRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudSupportRegionsResponse
   */
  async describeHybridCloudSupportRegionsWithOptions(request: $_model.DescribeHybridCloudSupportRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridCloudSupportRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridCloudSupportRegions",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridCloudSupportRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridCloudSupportRegionsResponse({}));
  }

  /**
   * Queries the regions that are supported for hybrid cloud access in Web Application Firewall (WAF).
   * 
   * @param request - DescribeHybridCloudSupportRegionsRequest
   * @returns DescribeHybridCloudSupportRegionsResponse
   */
  async describeHybridCloudSupportRegions(request: $_model.DescribeHybridCloudSupportRegionsRequest): Promise<$_model.DescribeHybridCloudSupportRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridCloudSupportRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the list of unassigned servers in a hybrid cloud cluster.
   * 
   * @param request - DescribeHybridCloudUnassignedMachinesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudUnassignedMachinesResponse
   */
  async describeHybridCloudUnassignedMachinesWithOptions(request: $_model.DescribeHybridCloudUnassignedMachinesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridCloudUnassignedMachinesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridCloudUnassignedMachines",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridCloudUnassignedMachinesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridCloudUnassignedMachinesResponse({}));
  }

  /**
   * Queries the list of unassigned servers in a hybrid cloud cluster.
   * 
   * @param request - DescribeHybridCloudUnassignedMachinesRequest
   * @returns DescribeHybridCloudUnassignedMachinesResponse
   */
  async describeHybridCloudUnassignedMachines(request: $_model.DescribeHybridCloudUnassignedMachinesRequest): Promise<$_model.DescribeHybridCloudUnassignedMachinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridCloudUnassignedMachinesWithOptions(request, runtime);
  }

  /**
   * Queries the list of unsupported ports for a hybrid cloud.
   * 
   * @param request - DescribeHybridCloudUnsupportPortsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudUnsupportPortsResponse
   */
  async describeHybridCloudUnsupportPortsWithOptions(request: $_model.DescribeHybridCloudUnsupportPortsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridCloudUnsupportPortsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridCloudUnsupportPorts",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridCloudUnsupportPortsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridCloudUnsupportPortsResponse({}));
  }

  /**
   * Queries the list of unsupported ports for a hybrid cloud.
   * 
   * @param request - DescribeHybridCloudUnsupportPortsRequest
   * @returns DescribeHybridCloudUnsupportPortsResponse
   */
  async describeHybridCloudUnsupportPorts(request: $_model.DescribeHybridCloudUnsupportPortsRequest): Promise<$_model.DescribeHybridCloudUnsupportPortsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridCloudUnsupportPortsWithOptions(request, runtime);
  }

  /**
   * Queries the available HTTP and HTTPS port ranges for hybrid cloud access.
   * 
   * @param request - DescribeHybridCloudUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridCloudUserResponse
   */
  async describeHybridCloudUserWithOptions(request: $_model.DescribeHybridCloudUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridCloudUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridCloudUser",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridCloudUserResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridCloudUserResponse({}));
  }

  /**
   * Queries the available HTTP and HTTPS port ranges for hybrid cloud access.
   * 
   * @param request - DescribeHybridCloudUserRequest
   * @returns DescribeHybridCloudUserResponse
   */
  async describeHybridCloudUser(request: $_model.DescribeHybridCloudUserRequest): Promise<$_model.DescribeHybridCloudUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridCloudUserWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of the Web Application Firewall (WAF) instance in your Alibaba Cloud account.
   * 
   * @param request - DescribeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceResponse
   */
  async describeInstanceWithOptions(request: $_model.DescribeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstance",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceResponse({}));
  }

  /**
   * Retrieves the details of the Web Application Firewall (WAF) instance in your Alibaba Cloud account.
   * 
   * @param request - DescribeInstanceRequest
   * @returns DescribeInstanceResponse
   */
  async describeInstance(request: $_model.DescribeInstanceRequest): Promise<$_model.DescribeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  /**
   * Retrieves supported countries and regions outside China for IP-based region blacklist.
   * 
   * @param request - DescribeIpAbroadCountryInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIpAbroadCountryInfosResponse
   */
  async describeIpAbroadCountryInfosWithOptions(request: $_model.DescribeIpAbroadCountryInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIpAbroadCountryInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.abroadRegion)) {
      query["AbroadRegion"] = request.abroadRegion;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIpAbroadCountryInfos",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIpAbroadCountryInfosResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIpAbroadCountryInfosResponse({}));
  }

  /**
   * Retrieves supported countries and regions outside China for IP-based region blacklist.
   * 
   * @param request - DescribeIpAbroadCountryInfosRequest
   * @returns DescribeIpAbroadCountryInfosResponse
   */
  async describeIpAbroadCountryInfos(request: $_model.DescribeIpAbroadCountryInfosRequest): Promise<$_model.DescribeIpAbroadCountryInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIpAbroadCountryInfosWithOptions(request, runtime);
  }

  /**
   * Queries a single log delivery configuration for a hybrid cloud.
   * 
   * @param request - DescribeLogDeliveryConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogDeliveryConfigResponse
   */
  async describeLogDeliveryConfigWithOptions(request: $_model.DescribeLogDeliveryConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogDeliveryConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryName)) {
      query["DeliveryName"] = request.deliveryName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLogDeliveryConfig",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogDeliveryConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogDeliveryConfigResponse({}));
  }

  /**
   * Queries a single log delivery configuration for a hybrid cloud.
   * 
   * @param request - DescribeLogDeliveryConfigRequest
   * @returns DescribeLogDeliveryConfigResponse
   */
  async describeLogDeliveryConfig(request: $_model.DescribeLogDeliveryConfigRequest): Promise<$_model.DescribeLogDeliveryConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogDeliveryConfigWithOptions(request, runtime);
  }

  /**
   * Queries all log delivery configurations of a Web Application Firewall (WAF) instance for hybrid cloud.
   * 
   * @param request - DescribeLogDeliveryConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogDeliveryConfigsResponse
   */
  async describeLogDeliveryConfigsWithOptions(request: $_model.DescribeLogDeliveryConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogDeliveryConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryNameLike)) {
      query["DeliveryNameLike"] = request.deliveryNameLike;
    }

    if (!$dara.isNull(request.deliveryType)) {
      query["DeliveryType"] = request.deliveryType;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLogDeliveryConfigs",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogDeliveryConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogDeliveryConfigsResponse({}));
  }

  /**
   * Queries all log delivery configurations of a Web Application Firewall (WAF) instance for hybrid cloud.
   * 
   * @param request - DescribeLogDeliveryConfigsRequest
   * @returns DescribeLogDeliveryConfigsResponse
   */
  async describeLogDeliveryConfigs(request: $_model.DescribeLogDeliveryConfigsRequest): Promise<$_model.DescribeLogDeliveryConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogDeliveryConfigsWithOptions(request, runtime);
  }

  /**
   * Queries the IP address blacklist for critical event protection in a paginated format.
   * 
   * @param request - DescribeMajorProtectionBlackIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMajorProtectionBlackIpsResponse
   */
  async describeMajorProtectionBlackIpsWithOptions(request: $_model.DescribeMajorProtectionBlackIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMajorProtectionBlackIpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ipLike)) {
      query["IpLike"] = request.ipLike;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMajorProtectionBlackIps",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMajorProtectionBlackIpsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMajorProtectionBlackIpsResponse({}));
  }

  /**
   * Queries the IP address blacklist for critical event protection in a paginated format.
   * 
   * @param request - DescribeMajorProtectionBlackIpsRequest
   * @returns DescribeMajorProtectionBlackIpsResponse
   */
  async describeMajorProtectionBlackIps(request: $_model.DescribeMajorProtectionBlackIpsRequest): Promise<$_model.DescribeMajorProtectionBlackIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMajorProtectionBlackIpsWithOptions(request, runtime);
  }

  /**
   * Retrieves all member accounts managed by the WAF multi-account management feature.
   * 
   * @param request - DescribeMemberAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMemberAccountsResponse
   */
  async describeMemberAccountsWithOptions(request: $_model.DescribeMemberAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMemberAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountStatus)) {
      query["AccountStatus"] = request.accountStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMemberAccounts",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMemberAccountsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMemberAccountsResponse({}));
  }

  /**
   * Retrieves all member accounts managed by the WAF multi-account management feature.
   * 
   * @param request - DescribeMemberAccountsRequest
   * @returns DescribeMemberAccountsResponse
   */
  async describeMemberAccounts(request: $_model.DescribeMemberAccountsRequest): Promise<$_model.DescribeMemberAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMemberAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the time series statistics for all traffic. This includes malicious and normal business requests.
   * 
   * @param tmpReq - DescribeNetworkFlowTimeSeriesMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNetworkFlowTimeSeriesMetricResponse
   */
  async describeNetworkFlowTimeSeriesMetricWithOptions(tmpReq: $_model.DescribeNetworkFlowTimeSeriesMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNetworkFlowTimeSeriesMetricResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeNetworkFlowTimeSeriesMetricShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filterShrink)) {
      query["Filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNetworkFlowTimeSeriesMetric",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNetworkFlowTimeSeriesMetricResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNetworkFlowTimeSeriesMetricResponse({}));
  }

  /**
   * Queries the time series statistics for all traffic. This includes malicious and normal business requests.
   * 
   * @param request - DescribeNetworkFlowTimeSeriesMetricRequest
   * @returns DescribeNetworkFlowTimeSeriesMetricResponse
   */
  async describeNetworkFlowTimeSeriesMetric(request: $_model.DescribeNetworkFlowTimeSeriesMetricRequest): Promise<$_model.DescribeNetworkFlowTimeSeriesMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNetworkFlowTimeSeriesMetricWithOptions(request, runtime);
  }

  /**
   * Queries the top N statistics for all traffic that passes through Web Application Firewall (WAF), including malicious and normal service requests. The results are aggregated by different dimensions and sorted in descending order.
   * 
   * @param tmpReq - DescribeNetworkFlowTopNMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNetworkFlowTopNMetricResponse
   */
  async describeNetworkFlowTopNMetricWithOptions(tmpReq: $_model.DescribeNetworkFlowTopNMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNetworkFlowTopNMetricResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeNetworkFlowTopNMetricShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filterShrink)) {
      query["Filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNetworkFlowTopNMetric",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNetworkFlowTopNMetricResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNetworkFlowTopNMetricResponse({}));
  }

  /**
   * Queries the top N statistics for all traffic that passes through Web Application Firewall (WAF), including malicious and normal service requests. The results are aggregated by different dimensions and sorted in descending order.
   * 
   * @param request - DescribeNetworkFlowTopNMetricRequest
   * @returns DescribeNetworkFlowTopNMetricResponse
   */
  async describeNetworkFlowTopNMetric(request: $_model.DescribeNetworkFlowTopNMetricRequest): Promise<$_model.DescribeNetworkFlowTopNMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNetworkFlowTopNMetricWithOptions(request, runtime);
  }

  /**
   * Queries the protection pause status of a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribePauseProtectionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePauseProtectionStatusResponse
   */
  async describePauseProtectionStatusWithOptions(request: $_model.DescribePauseProtectionStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePauseProtectionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePauseProtectionStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePauseProtectionStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribePauseProtectionStatusResponse({}));
  }

  /**
   * Queries the protection pause status of a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribePauseProtectionStatusRequest
   * @returns DescribePauseProtectionStatusResponse
   */
  async describePauseProtectionStatus(request: $_model.DescribePauseProtectionStatusRequest): Promise<$_model.DescribePauseProtectionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePauseProtectionStatusWithOptions(request, runtime);
  }

  /**
   * Queries the trend of queries per second (QPS).
   * 
   * @param request - DescribePeakTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePeakTrendResponse
   */
  async describePeakTrendWithOptions(request: $_model.DescribePeakTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePeakTrendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePeakTrend",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePeakTrendResponse>(await this.callApi(params, req, runtime), new $_model.DescribePeakTrendResponse({}));
  }

  /**
   * Queries the trend of queries per second (QPS).
   * 
   * @param request - DescribePeakTrendRequest
   * @returns DescribePeakTrendResponse
   */
  async describePeakTrend(request: $_model.DescribePeakTrendRequest): Promise<$_model.DescribePeakTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePeakTrendWithOptions(request, runtime);
  }

  /**
   * Retrieves the enabled proof of concept (POC) feature trials.
   * 
   * @param request - DescribePocFunctionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePocFunctionsResponse
   */
  async describePocFunctionsWithOptions(request: $_model.DescribePocFunctionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePocFunctionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePocFunctions",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePocFunctionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePocFunctionsResponse({}));
  }

  /**
   * Retrieves the enabled proof of concept (POC) feature trials.
   * 
   * @param request - DescribePocFunctionsRequest
   * @returns DescribePocFunctionsResponse
   */
  async describePocFunctions(request: $_model.DescribePocFunctionsRequest): Promise<$_model.DescribePocFunctionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePocFunctionsWithOptions(request, runtime);
  }

  /**
   * Queries burstable pay-as-you-go charges for a WAF subscription instance, such as burstable QPS.
   * 
   * @param request - DescribePrepayDailyBillsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePrepayDailyBillsResponse
   */
  async describePrepayDailyBillsWithOptions(request: $_model.DescribePrepayDailyBillsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePrepayDailyBillsResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePrepayDailyBills",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePrepayDailyBillsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePrepayDailyBillsResponse({}));
  }

  /**
   * Queries burstable pay-as-you-go charges for a WAF subscription instance, such as burstable QPS.
   * 
   * @param request - DescribePrepayDailyBillsRequest
   * @returns DescribePrepayDailyBillsResponse
   */
  async describePrepayDailyBills(request: $_model.DescribePrepayDailyBillsRequest): Promise<$_model.DescribePrepayDailyBillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePrepayDailyBillsWithOptions(request, runtime);
  }

  /**
   * Queries synchronized cloud service instances.
   * 
   * @param request - DescribeProductInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProductInstancesResponse
   */
  async describeProductInstancesWithOptions(request: $_model.DescribeProductInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProductInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerUserId)) {
      query["OwnerUserId"] = request.ownerUserId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceInstanceAccessStatus)) {
      query["ResourceInstanceAccessStatus"] = request.resourceInstanceAccessStatus;
    }

    if (!$dara.isNull(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!$dara.isNull(request.resourceInstanceIp)) {
      query["ResourceInstanceIp"] = request.resourceInstanceIp;
    }

    if (!$dara.isNull(request.resourceInstanceName)) {
      query["ResourceInstanceName"] = request.resourceInstanceName;
    }

    if (!$dara.isNull(request.resourceIp)) {
      query["ResourceIp"] = request.resourceIp;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceProduct)) {
      query["ResourceProduct"] = request.resourceProduct;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProductInstances",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProductInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProductInstancesResponse({}));
  }

  /**
   * Queries synchronized cloud service instances.
   * 
   * @param request - DescribeProductInstancesRequest
   * @returns DescribeProductInstancesResponse
   */
  async describeProductInstances(request: $_model.DescribeProductInstancesRequest): Promise<$_model.DescribeProductInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProductInstancesWithOptions(request, runtime);
  }

  /**
   * Queries penalties for domain names added to Web Application Firewall (WAF) without an Internet Content Provider (ICP) filing.
   * 
   * @param request - DescribePunishedDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePunishedDomainsResponse
   */
  async describePunishedDomainsWithOptions(request: $_model.DescribePunishedDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePunishedDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.punishType)) {
      query["PunishType"] = request.punishType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePunishedDomains",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePunishedDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePunishedDomainsResponse({}));
  }

  /**
   * Queries penalties for domain names added to Web Application Firewall (WAF) without an Internet Content Provider (ICP) filing.
   * 
   * @param request - DescribePunishedDomainsRequest
   * @returns DescribePunishedDomainsResponse
   */
  async describePunishedDomains(request: $_model.DescribePunishedDomainsRequest): Promise<$_model.DescribePunishedDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePunishedDomainsWithOptions(request, runtime);
  }

  /**
   * Queries a paginated list of associated protection rules.
   * 
   * @param request - DescribeRelatedDefenseRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRelatedDefenseRulesResponse
   */
  async describeRelatedDefenseRulesWithOptions(request: $_model.DescribeRelatedDefenseRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRelatedDefenseRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!$dara.isNull(request.defenseType)) {
      query["DefenseType"] = request.defenseType;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRelatedDefenseRules",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRelatedDefenseRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRelatedDefenseRulesResponse({}));
  }

  /**
   * Queries a paginated list of associated protection rules.
   * 
   * @param request - DescribeRelatedDefenseRulesRequest
   * @returns DescribeRelatedDefenseRulesResponse
   */
  async describeRelatedDefenseRules(request: $_model.DescribeRelatedDefenseRulesRequest): Promise<$_model.DescribeRelatedDefenseRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRelatedDefenseRulesWithOptions(request, runtime);
  }

  /**
   * Queries the certificates of a cloud product instance. This operation is available only in multi-account scenarios and returns the certificates of both the delegated administrator and the member that owns the instance. For example, if user A is a delegated administrator with cert1 and the instance lb-xx-1 belongs to member B who has cert2, a query for the instance lb-xx-1 returns both cert1 and cert2.
   * 
   * @param request - DescribeResourceInstanceCertsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceInstanceCertsResponse
   */
  async describeResourceInstanceCertsWithOptions(request: $_model.DescribeResourceInstanceCertsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceInstanceCertsResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceInstanceCerts",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceInstanceCertsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceInstanceCertsResponse({}));
  }

  /**
   * Queries the certificates of a cloud product instance. This operation is available only in multi-account scenarios and returns the certificates of both the delegated administrator and the member that owns the instance. For example, if user A is a delegated administrator with cert1 and the instance lb-xx-1 belongs to member B who has cert2, a query for the instance lb-xx-1 returns both cert1 and cert2.
   * 
   * @param request - DescribeResourceInstanceCertsRequest
   * @returns DescribeResourceInstanceCertsResponse
   */
  async describeResourceInstanceCerts(request: $_model.DescribeResourceInstanceCertsRequest): Promise<$_model.DescribeResourceInstanceCertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceInstanceCertsWithOptions(request, runtime);
  }

  /**
   * Queries the log delivery status for protected objects.
   * 
   * @param request - DescribeResourceLogDeliveryStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceLogDeliveryStatusResponse
   */
  async describeResourceLogDeliveryStatusWithOptions(request: $_model.DescribeResourceLogDeliveryStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceLogDeliveryStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceLogDeliveryStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceLogDeliveryStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceLogDeliveryStatusResponse({}));
  }

  /**
   * Queries the log delivery status for protected objects.
   * 
   * @param request - DescribeResourceLogDeliveryStatusRequest
   * @returns DescribeResourceLogDeliveryStatusResponse
   */
  async describeResourceLogDeliveryStatus(request: $_model.DescribeResourceLogDeliveryStatusRequest): Promise<$_model.DescribeResourceLogDeliveryStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceLogDeliveryStatusWithOptions(request, runtime);
  }

  /**
   * Queries the log field configuration for a protected object.
   * 
   * @param request - DescribeResourceLogFieldConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceLogFieldConfigResponse
   */
  async describeResourceLogFieldConfigWithOptions(request: $_model.DescribeResourceLogFieldConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceLogFieldConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryType)) {
      query["DeliveryType"] = request.deliveryType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceLogFieldConfig",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceLogFieldConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceLogFieldConfigResponse({}));
  }

  /**
   * Queries the log field configuration for a protected object.
   * 
   * @param request - DescribeResourceLogFieldConfigRequest
   * @returns DescribeResourceLogFieldConfigResponse
   */
  async describeResourceLogFieldConfig(request: $_model.DescribeResourceLogFieldConfigRequest): Promise<$_model.DescribeResourceLogFieldConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceLogFieldConfigWithOptions(request, runtime);
  }

  /**
   * Queries the log collection status of protected objects in a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeResourceLogStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceLogStatusResponse
   */
  async describeResourceLogStatusWithOptions(request: $_model.DescribeResourceLogStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceLogStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceLogStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceLogStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceLogStatusResponse({}));
  }

  /**
   * Queries the log collection status of protected objects in a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeResourceLogStatusRequest
   * @returns DescribeResourceLogStatusResponse
   */
  async describeResourceLogStatus(request: $_model.DescribeResourceLogStatusRequest): Promise<$_model.DescribeResourceLogStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceLogStatusWithOptions(request, runtime);
  }

  /**
   * Queries the ports of a cloud service instance that are added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeResourcePortRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourcePortResponse
   */
  async describeResourcePortWithOptions(request: $_model.DescribeResourcePortRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourcePortResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourcePort",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourcePortResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourcePortResponse({}));
  }

  /**
   * Queries the ports of a cloud service instance that are added to Web Application Firewall (WAF).
   * 
   * @param request - DescribeResourcePortRequest
   * @returns DescribeResourcePortResponse
   */
  async describeResourcePort(request: $_model.DescribeResourcePortRequest): Promise<$_model.DescribeResourcePortResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourcePortWithOptions(request, runtime);
  }

  /**
   * Queries the region IDs of cloud service resources that can be added to Web Application Firewall (WAF) by using the SDK.
   * 
   * @param request - DescribeResourceRegionIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceRegionIdResponse
   */
  async describeResourceRegionIdWithOptions(request: $_model.DescribeResourceRegionIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceRegionIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceRegionId",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceRegionIdResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceRegionIdResponse({}));
  }

  /**
   * Queries the region IDs of cloud service resources that can be added to Web Application Firewall (WAF) by using the SDK.
   * 
   * @param request - DescribeResourceRegionIdRequest
   * @returns DescribeResourceRegionIdResponse
   */
  async describeResourceRegionId(request: $_model.DescribeResourceRegionIdRequest): Promise<$_model.DescribeResourceRegionIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceRegionIdWithOptions(request, runtime);
  }

  /**
   * Queries the list of regions supported by cloud native mode, primarily for CLB and ECS products.
   * 
   * @param request - DescribeResourceSupportRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceSupportRegionsResponse
   */
  async describeResourceSupportRegionsWithOptions(request: $_model.DescribeResourceSupportRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceSupportRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resourceProduct)) {
      query["ResourceProduct"] = request.resourceProduct;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceSupportRegions",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceSupportRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceSupportRegionsResponse({}));
  }

  /**
   * Queries the list of regions supported by cloud native mode, primarily for CLB and ECS products.
   * 
   * @param request - DescribeResourceSupportRegionsRequest
   * @returns DescribeResourceSupportRegionsResponse
   */
  async describeResourceSupportRegions(request: $_model.DescribeResourceSupportRegionsRequest): Promise<$_model.DescribeResourceSupportRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceSupportRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the trend of abnormal response codes, such as 5xx, 405, 499, 302, and 444, that are returned by Web Application Firewall (WAF) to clients or by origin servers to WAF.
   * 
   * @param request - DescribeResponseCodeTrendGraphRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResponseCodeTrendGraphResponse
   */
  async describeResponseCodeTrendGraphWithOptions(request: $_model.DescribeResponseCodeTrendGraphRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResponseCodeTrendGraphResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResponseCodeTrendGraph",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResponseCodeTrendGraphResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResponseCodeTrendGraphResponse({}));
  }

  /**
   * Queries the trend of abnormal response codes, such as 5xx, 405, 499, 302, and 444, that are returned by Web Application Firewall (WAF) to clients or by origin servers to WAF.
   * 
   * @param request - DescribeResponseCodeTrendGraphRequest
   * @returns DescribeResponseCodeTrendGraphResponse
   */
  async describeResponseCodeTrendGraph(request: $_model.DescribeResponseCodeTrendGraphRequest): Promise<$_model.DescribeResponseCodeTrendGraphResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResponseCodeTrendGraphWithOptions(request, runtime);
  }

  /**
   * Queries the authorization status of the service-linked role for Web Application Firewall (WAF).
   * 
   * @param request - DescribeRoleAuthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRoleAuthStatusResponse
   */
  async describeRoleAuthStatusWithOptions(request: $_model.DescribeRoleAuthStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRoleAuthStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRoleAuthStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRoleAuthStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRoleAuthStatusResponse({}));
  }

  /**
   * Queries the authorization status of the service-linked role for Web Application Firewall (WAF).
   * 
   * @param request - DescribeRoleAuthStatusRequest
   * @returns DescribeRoleAuthStatusResponse
   */
  async describeRoleAuthStatus(request: $_model.DescribeRoleAuthStatusRequest): Promise<$_model.DescribeRoleAuthStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRoleAuthStatusWithOptions(request, runtime);
  }

  /**
   * Queries a paginated list of regular expression rule groups.
   * 
   * @param request - DescribeRuleGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleGroupsResponse
   */
  async describeRuleGroupsWithOptions(request: $_model.DescribeRuleGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRuleGroupsResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.searchType)) {
      query["SearchType"] = request.searchType;
    }

    if (!$dara.isNull(request.searchValue)) {
      query["SearchValue"] = request.searchValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRuleGroups",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRuleGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRuleGroupsResponse({}));
  }

  /**
   * Queries a paginated list of regular expression rule groups.
   * 
   * @param request - DescribeRuleGroupsRequest
   * @returns DescribeRuleGroupsResponse
   */
  async describeRuleGroups(request: $_model.DescribeRuleGroupsRequest): Promise<$_model.DescribeRuleGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRuleGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 source IP addresses from which the most attacks originated.
   * 
   * @param request - DescribeRuleHitsTopClientIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleHitsTopClientIpResponse
   */
  async describeRuleHitsTopClientIpWithOptions(request: $_model.DescribeRuleHitsTopClientIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRuleHitsTopClientIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRuleHitsTopClientIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRuleHitsTopClientIpResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRuleHitsTopClientIpResponse({}));
  }

  /**
   * Queries the top 10 source IP addresses from which the most attacks originated.
   * 
   * @param request - DescribeRuleHitsTopClientIpRequest
   * @returns DescribeRuleHitsTopClientIpResponse
   */
  async describeRuleHitsTopClientIp(request: $_model.DescribeRuleHitsTopClientIpRequest): Promise<$_model.DescribeRuleHitsTopClientIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRuleHitsTopClientIpWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 protected objects that triggered protection rules most frequently.
   * 
   * @param request - DescribeRuleHitsTopResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleHitsTopResourceResponse
   */
  async describeRuleHitsTopResourceWithOptions(request: $_model.DescribeRuleHitsTopResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRuleHitsTopResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRuleHitsTopResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRuleHitsTopResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRuleHitsTopResourceResponse({}));
  }

  /**
   * Queries the top 10 protected objects that triggered protection rules most frequently.
   * 
   * @param request - DescribeRuleHitsTopResourceRequest
   * @returns DescribeRuleHitsTopResourceResponse
   */
  async describeRuleHitsTopResource(request: $_model.DescribeRuleHitsTopResourceRequest): Promise<$_model.DescribeRuleHitsTopResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRuleHitsTopResourceWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 rule IDs that are triggered most frequently.
   * 
   * @param request - DescribeRuleHitsTopRuleIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleHitsTopRuleIdResponse
   */
  async describeRuleHitsTopRuleIdWithOptions(request: $_model.DescribeRuleHitsTopRuleIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRuleHitsTopRuleIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isGroupResource)) {
      query["IsGroupResource"] = request.isGroupResource;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRuleHitsTopRuleId",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRuleHitsTopRuleIdResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRuleHitsTopRuleIdResponse({}));
  }

  /**
   * Queries the top 10 rule IDs that are triggered most frequently.
   * 
   * @param request - DescribeRuleHitsTopRuleIdRequest
   * @returns DescribeRuleHitsTopRuleIdResponse
   */
  async describeRuleHitsTopRuleId(request: $_model.DescribeRuleHitsTopRuleIdRequest): Promise<$_model.DescribeRuleHitsTopRuleIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRuleHitsTopRuleIdWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 most frequently triggered protection rule types.
   * 
   * @param request - DescribeRuleHitsTopTuleTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleHitsTopTuleTypeResponse
   */
  async describeRuleHitsTopTuleTypeWithOptions(request: $_model.DescribeRuleHitsTopTuleTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRuleHitsTopTuleTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRuleHitsTopTuleType",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRuleHitsTopTuleTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRuleHitsTopTuleTypeResponse({}));
  }

  /**
   * Queries the top 10 most frequently triggered protection rule types.
   * 
   * @param request - DescribeRuleHitsTopTuleTypeRequest
   * @returns DescribeRuleHitsTopTuleTypeResponse
   */
  async describeRuleHitsTopTuleType(request: $_model.DescribeRuleHitsTopTuleTypeRequest): Promise<$_model.DescribeRuleHitsTopTuleTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRuleHitsTopTuleTypeWithOptions(request, runtime);
  }

  /**
   * Displays the top 10 User-Agents by number of attacks.
   * 
   * @param request - DescribeRuleHitsTopUaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleHitsTopUaResponse
   */
  async describeRuleHitsTopUaWithOptions(request: $_model.DescribeRuleHitsTopUaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRuleHitsTopUaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRuleHitsTopUa",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRuleHitsTopUaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRuleHitsTopUaResponse({}));
  }

  /**
   * Displays the top 10 User-Agents by number of attacks.
   * 
   * @param request - DescribeRuleHitsTopUaRequest
   * @returns DescribeRuleHitsTopUaResponse
   */
  async describeRuleHitsTopUa(request: $_model.DescribeRuleHitsTopUaRequest): Promise<$_model.DescribeRuleHitsTopUaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRuleHitsTopUaWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 URLs that trigger protection rules most frequently.
   * 
   * @param request - DescribeRuleHitsTopUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleHitsTopUrlResponse
   */
  async describeRuleHitsTopUrlWithOptions(request: $_model.DescribeRuleHitsTopUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRuleHitsTopUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRuleHitsTopUrl",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRuleHitsTopUrlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRuleHitsTopUrlResponse({}));
  }

  /**
   * Queries the top 10 URLs that trigger protection rules most frequently.
   * 
   * @param request - DescribeRuleHitsTopUrlRequest
   * @returns DescribeRuleHitsTopUrlResponse
   */
  async describeRuleHitsTopUrl(request: $_model.DescribeRuleHitsTopUrlRequest): Promise<$_model.DescribeRuleHitsTopUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRuleHitsTopUrlWithOptions(request, runtime);
  }

  /**
   * Queries the detailed logs of attack traffic. Each log entry contains the details of a request that matched a protection rule.
   * 
   * @remarks
   * Attack traffic refers to requests that hit a rule and are identified as threats. The following three types of requests are not included:
   * - Requests that hit a whitelist rule.
   * - Requests that hit a bot rule whose action is set to Mark for Origin Fetch.
   * - Requests that hit a rule whose action is set to Dynamic Token, Slider, Strict Slider, or JS Challenge, but are allowed because the user passed the verification.
   * 
   * @param tmpReq - DescribeSecurityEventLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityEventLogsResponse
   */
  async describeSecurityEventLogsWithOptions(tmpReq: $_model.DescribeSecurityEventLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityEventLogsResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeSecurityEventLogsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filterShrink)) {
      query["Filter"] = request.filterShrink;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityEventLogs",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityEventLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityEventLogsResponse({}));
  }

  /**
   * Queries the detailed logs of attack traffic. Each log entry contains the details of a request that matched a protection rule.
   * 
   * @remarks
   * Attack traffic refers to requests that hit a rule and are identified as threats. The following three types of requests are not included:
   * - Requests that hit a whitelist rule.
   * - Requests that hit a bot rule whose action is set to Mark for Origin Fetch.
   * - Requests that hit a rule whose action is set to Dynamic Token, Slider, Strict Slider, or JS Challenge, but are allowed because the user passed the verification.
   * 
   * @param request - DescribeSecurityEventLogsRequest
   * @returns DescribeSecurityEventLogsResponse
   */
  async describeSecurityEventLogs(request: $_model.DescribeSecurityEventLogsRequest): Promise<$_model.DescribeSecurityEventLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityEventLogsWithOptions(request, runtime);
  }

  /**
   * Queries the time series data of attack traffic. Attack requests are requests that hit a rule and are identified as a threat.
   * 
   * @remarks
   * Attack traffic refers to requests that hit a rule and are identified as a threat. The following data is excluded:
   * - Requests that hit a whitelist rule.
   * - Requests that hit a bot rule where the rule action is "Mark for origin fetch".
   * - Requests that hit a rule with the action "Dynamic Token", "Slider", "Strict Slider", or "JS Challenge", but are allowed because the user passed the verification.
   * 
   * @param tmpReq - DescribeSecurityEventTimeSeriesMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityEventTimeSeriesMetricResponse
   */
  async describeSecurityEventTimeSeriesMetricWithOptions(tmpReq: $_model.DescribeSecurityEventTimeSeriesMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityEventTimeSeriesMetricResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeSecurityEventTimeSeriesMetricShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filterShrink)) {
      query["Filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityEventTimeSeriesMetric",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityEventTimeSeriesMetricResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityEventTimeSeriesMetricResponse({}));
  }

  /**
   * Queries the time series data of attack traffic. Attack requests are requests that hit a rule and are identified as a threat.
   * 
   * @remarks
   * Attack traffic refers to requests that hit a rule and are identified as a threat. The following data is excluded:
   * - Requests that hit a whitelist rule.
   * - Requests that hit a bot rule where the rule action is "Mark for origin fetch".
   * - Requests that hit a rule with the action "Dynamic Token", "Slider", "Strict Slider", or "JS Challenge", but are allowed because the user passed the verification.
   * 
   * @param request - DescribeSecurityEventTimeSeriesMetricRequest
   * @returns DescribeSecurityEventTimeSeriesMetricResponse
   */
  async describeSecurityEventTimeSeriesMetric(request: $_model.DescribeSecurityEventTimeSeriesMetricRequest): Promise<$_model.DescribeSecurityEventTimeSeriesMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityEventTimeSeriesMetricWithOptions(request, runtime);
  }

  /**
   * Queries the top N statistics for attack traffic. Attack traffic is aggregated by a specified dimension, sorted, and the top N results are returned.
   * 
   * @remarks
   * Attack traffic refers to requests that hit a rule and are identified as a threat. The following types of requests are not included in the statistics:
   * - Requests that hit a whitelist rule.
   * - Requests that hit a bot rule with the action set to Tag.
   * - Requests that hit a rule with the action set to Dynamic Token, Slider, Strict Slider, or JS Challenge, and are allowed after the user passes verification.
   * 
   * @param tmpReq - DescribeSecurityEventTopNMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityEventTopNMetricResponse
   */
  async describeSecurityEventTopNMetricWithOptions(tmpReq: $_model.DescribeSecurityEventTopNMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityEventTopNMetricResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeSecurityEventTopNMetricShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filterShrink)) {
      query["Filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityEventTopNMetric",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityEventTopNMetricResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityEventTopNMetricResponse({}));
  }

  /**
   * Queries the top N statistics for attack traffic. Attack traffic is aggregated by a specified dimension, sorted, and the top N results are returned.
   * 
   * @remarks
   * Attack traffic refers to requests that hit a rule and are identified as a threat. The following types of requests are not included in the statistics:
   * - Requests that hit a whitelist rule.
   * - Requests that hit a bot rule with the action set to Tag.
   * - Requests that hit a rule with the action set to Dynamic Token, Slider, Strict Slider, or JS Challenge, and are allowed after the user passes verification.
   * 
   * @param request - DescribeSecurityEventTopNMetricRequest
   * @returns DescribeSecurityEventTopNMetricResponse
   */
  async describeSecurityEventTopNMetric(request: $_model.DescribeSecurityEventTopNMetricRequest): Promise<$_model.DescribeSecurityEventTopNMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityEventTopNMetricWithOptions(request, runtime);
  }

  /**
   * Queries statistics for domain names and APIs that handle personal information.
   * 
   * @param request - DescribeSensitiveApiStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSensitiveApiStatisticResponse
   */
  async describeSensitiveApiStatisticWithOptions(request: $_model.DescribeSensitiveApiStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSensitiveApiStatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.matchedHost)) {
      query["MatchedHost"] = request.matchedHost;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSensitiveApiStatistic",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSensitiveApiStatisticResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSensitiveApiStatisticResponse({}));
  }

  /**
   * Queries statistics for domain names and APIs that handle personal information.
   * 
   * @param request - DescribeSensitiveApiStatisticRequest
   * @returns DescribeSensitiveApiStatisticResponse
   */
  async describeSensitiveApiStatistic(request: $_model.DescribeSensitiveApiStatisticRequest): Promise<$_model.DescribeSensitiveApiStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSensitiveApiStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the compliance detection results for API security.
   * 
   * @param request - DescribeSensitiveDetectionResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSensitiveDetectionResultResponse
   */
  async describeSensitiveDetectionResultWithOptions(request: $_model.DescribeSensitiveDetectionResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSensitiveDetectionResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSensitiveDetectionResult",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSensitiveDetectionResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSensitiveDetectionResultResponse({}));
  }

  /**
   * Queries the compliance detection results for API security.
   * 
   * @param request - DescribeSensitiveDetectionResultRequest
   * @returns DescribeSensitiveDetectionResultResponse
   */
  async describeSensitiveDetectionResult(request: $_model.DescribeSensitiveDetectionResultRequest): Promise<$_model.DescribeSensitiveDetectionResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSensitiveDetectionResultWithOptions(request, runtime);
  }

  /**
   * Queries the distribution of outbound traffic that contains personal information.
   * 
   * @param request - DescribeSensitiveOutboundDistributionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSensitiveOutboundDistributionResponse
   */
  async describeSensitiveOutboundDistributionWithOptions(request: $_model.DescribeSensitiveOutboundDistributionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSensitiveOutboundDistributionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSensitiveOutboundDistribution",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSensitiveOutboundDistributionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSensitiveOutboundDistributionResponse({}));
  }

  /**
   * Queries the distribution of outbound traffic that contains personal information.
   * 
   * @param request - DescribeSensitiveOutboundDistributionRequest
   * @returns DescribeSensitiveOutboundDistributionResponse
   */
  async describeSensitiveOutboundDistribution(request: $_model.DescribeSensitiveOutboundDistributionRequest): Promise<$_model.DescribeSensitiveOutboundDistributionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSensitiveOutboundDistributionWithOptions(request, runtime);
  }

  /**
   * Queries statistics about outbound transfers of personal information.
   * 
   * @param request - DescribeSensitiveOutboundStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSensitiveOutboundStatisticResponse
   */
  async describeSensitiveOutboundStatisticWithOptions(request: $_model.DescribeSensitiveOutboundStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSensitiveOutboundStatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.detectionResult)) {
      query["DetectionResult"] = request.detectionResult;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderKey)) {
      query["OrderKey"] = request.orderKey;
    }

    if (!$dara.isNull(request.orderWay)) {
      query["OrderWay"] = request.orderWay;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.sensitiveCode)) {
      query["SensitiveCode"] = request.sensitiveCode;
    }

    if (!$dara.isNull(request.sensitiveLevel)) {
      query["SensitiveLevel"] = request.sensitiveLevel;
    }

    if (!$dara.isNull(request.sensitiveType)) {
      query["SensitiveType"] = request.sensitiveType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSensitiveOutboundStatistic",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSensitiveOutboundStatisticResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSensitiveOutboundStatisticResponse({}));
  }

  /**
   * Queries statistics about outbound transfers of personal information.
   * 
   * @param request - DescribeSensitiveOutboundStatisticRequest
   * @returns DescribeSensitiveOutboundStatisticResponse
   */
  async describeSensitiveOutboundStatistic(request: $_model.DescribeSensitiveOutboundStatisticRequest): Promise<$_model.DescribeSensitiveOutboundStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSensitiveOutboundStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the trend of sensitive outbound data detected by Web Application Firewall (WAF).
   * 
   * @param request - DescribeSensitiveOutboundTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSensitiveOutboundTrendResponse
   */
  async describeSensitiveOutboundTrendWithOptions(request: $_model.DescribeSensitiveOutboundTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSensitiveOutboundTrendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSensitiveOutboundTrend",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSensitiveOutboundTrendResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSensitiveOutboundTrendResponse({}));
  }

  /**
   * Queries the trend of sensitive outbound data detected by Web Application Firewall (WAF).
   * 
   * @param request - DescribeSensitiveOutboundTrendRequest
   * @returns DescribeSensitiveOutboundTrendResponse
   */
  async describeSensitiveOutboundTrend(request: $_model.DescribeSensitiveOutboundTrendRequest): Promise<$_model.DescribeSensitiveOutboundTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSensitiveOutboundTrendWithOptions(request, runtime);
  }

  /**
   * Queries access logs for sensitive data.
   * 
   * @param request - DescribeSensitiveRequestLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSensitiveRequestLogResponse
   */
  async describeSensitiveRequestLogWithOptions(request: $_model.DescribeSensitiveRequestLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSensitiveRequestLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.apiFormat)) {
      query["ApiFormat"] = request.apiFormat;
    }

    if (!$dara.isNull(request.clientIP)) {
      query["ClientIP"] = request.clientIP;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.matchedHost)) {
      query["MatchedHost"] = request.matchedHost;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.sensitiveCode)) {
      query["SensitiveCode"] = request.sensitiveCode;
    }

    if (!$dara.isNull(request.sensitiveData)) {
      query["SensitiveData"] = request.sensitiveData;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSensitiveRequestLog",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSensitiveRequestLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSensitiveRequestLogResponse({}));
  }

  /**
   * Queries access logs for sensitive data.
   * 
   * @param request - DescribeSensitiveRequestLogRequest
   * @returns DescribeSensitiveRequestLogResponse
   */
  async describeSensitiveRequestLog(request: $_model.DescribeSensitiveRequestLogRequest): Promise<$_model.DescribeSensitiveRequestLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSensitiveRequestLogWithOptions(request, runtime);
  }

  /**
   * Queries the results of sensitive data tracing.
   * 
   * @param request - DescribeSensitiveRequestsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSensitiveRequestsResponse
   */
  async describeSensitiveRequestsWithOptions(request: $_model.DescribeSensitiveRequestsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSensitiveRequestsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.sensitiveCode)) {
      query["SensitiveCode"] = request.sensitiveCode;
    }

    if (!$dara.isNull(request.sensitiveData)) {
      query["SensitiveData"] = request.sensitiveData;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSensitiveRequests",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSensitiveRequestsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSensitiveRequestsResponse({}));
  }

  /**
   * Queries the results of sensitive data tracing.
   * 
   * @param request - DescribeSensitiveRequestsRequest
   * @returns DescribeSensitiveRequestsResponse
   */
  async describeSensitiveRequests(request: $_model.DescribeSensitiveRequestsRequest): Promise<$_model.DescribeSensitiveRequestsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSensitiveRequestsWithOptions(request, runtime);
  }

  /**
   * Queries statistics on sensitive data for data leakage prevention.
   * 
   * @param request - DescribeSensitiveStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSensitiveStatisticResponse
   */
  async describeSensitiveStatisticWithOptions(request: $_model.DescribeSensitiveStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSensitiveStatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statisticType)) {
      query["StatisticType"] = request.statisticType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSensitiveStatistic",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSensitiveStatisticResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSensitiveStatisticResponse({}));
  }

  /**
   * Queries statistics on sensitive data for data leakage prevention.
   * 
   * @param request - DescribeSensitiveStatisticRequest
   * @returns DescribeSensitiveStatisticResponse
   */
  async describeSensitiveStatistic(request: $_model.DescribeSensitiveStatisticRequest): Promise<$_model.DescribeSensitiveStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSensitiveStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the Logstore authorization status.
   * 
   * @param request - DescribeSlsAuthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlsAuthStatusResponse
   */
  async describeSlsAuthStatusWithOptions(request: $_model.DescribeSlsAuthStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlsAuthStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlsAuthStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlsAuthStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlsAuthStatusResponse({}));
  }

  /**
   * Queries the Logstore authorization status.
   * 
   * @param request - DescribeSlsAuthStatusRequest
   * @returns DescribeSlsAuthStatusResponse
   */
  async describeSlsAuthStatus(request: $_model.DescribeSlsAuthStatusRequest): Promise<$_model.DescribeSlsAuthStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlsAuthStatusWithOptions(request, runtime);
  }

  /**
   * Retrieves Logstore information, including total capacity, storage duration, and used capacity.
   * 
   * @param request - DescribeSlsLogStoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlsLogStoreResponse
   */
  async describeSlsLogStoreWithOptions(request: $_model.DescribeSlsLogStoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlsLogStoreResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlsLogStore",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlsLogStoreResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlsLogStoreResponse({}));
  }

  /**
   * Retrieves Logstore information, including total capacity, storage duration, and used capacity.
   * 
   * @param request - DescribeSlsLogStoreRequest
   * @returns DescribeSlsLogStoreResponse
   */
  async describeSlsLogStore(request: $_model.DescribeSlsLogStoreRequest): Promise<$_model.DescribeSlsLogStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlsLogStoreWithOptions(request, runtime);
  }

  /**
   * Queries the status of a Simple Log Service Logstore.
   * 
   * @param request - DescribeSlsLogStoreStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlsLogStoreStatusResponse
   */
  async describeSlsLogStoreStatusWithOptions(request: $_model.DescribeSlsLogStoreStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlsLogStoreStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlsLogStoreStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlsLogStoreStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlsLogStoreStatusResponse({}));
  }

  /**
   * Queries the status of a Simple Log Service Logstore.
   * 
   * @param request - DescribeSlsLogStoreStatusRequest
   * @returns DescribeSlsLogStoreStatusResponse
   */
  async describeSlsLogStoreStatus(request: $_model.DescribeSlsLogStoreStatusRequest): Promise<$_model.DescribeSlsLogStoreStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlsLogStoreStatusWithOptions(request, runtime);
  }

  /**
   * Queries the number of protected resources that are associated with one or more protection templates.
   * 
   * @param request - DescribeTemplateResourceCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplateResourceCountResponse
   */
  async describeTemplateResourceCountWithOptions(request: $_model.DescribeTemplateResourceCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTemplateResourceCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTemplateResourceCount",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTemplateResourceCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTemplateResourceCountResponse({}));
  }

  /**
   * Queries the number of protected resources that are associated with one or more protection templates.
   * 
   * @param request - DescribeTemplateResourceCountRequest
   * @returns DescribeTemplateResourceCountResponse
   */
  async describeTemplateResourceCount(request: $_model.DescribeTemplateResourceCountRequest): Promise<$_model.DescribeTemplateResourceCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTemplateResourceCountWithOptions(request, runtime);
  }

  /**
   * Queries the resources attached to a protection template.
   * 
   * @param request - DescribeTemplateResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplateResourcesResponse
   */
  async describeTemplateResourcesWithOptions(request: $_model.DescribeTemplateResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTemplateResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assetApi)) {
      query["AssetApi"] = request.assetApi;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTemplateResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTemplateResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTemplateResourcesResponse({}));
  }

  /**
   * Queries the resources attached to a protection template.
   * 
   * @param request - DescribeTemplateResourcesRequest
   * @returns DescribeTemplateResourcesResponse
   */
  async describeTemplateResources(request: $_model.DescribeTemplateResourcesRequest): Promise<$_model.DescribeTemplateResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTemplateResourcesWithOptions(request, runtime);
  }

  /**
   * Queries a paginated list of notable security events.
   * 
   * @param request - DescribeThreatEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeThreatEventResponse
   */
  async describeThreatEventWithOptions(request: $_model.DescribeThreatEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeThreatEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeThreatEvent",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeThreatEventResponse>(await this.callApi(params, req, runtime), new $_model.DescribeThreatEventResponse({}));
  }

  /**
   * Queries a paginated list of notable security events.
   * 
   * @param request - DescribeThreatEventRequest
   * @returns DescribeThreatEventResponse
   */
  async describeThreatEvent(request: $_model.DescribeThreatEventRequest): Promise<$_model.DescribeThreatEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeThreatEventWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a security event that requires attention.
   * 
   * @param request - DescribeThreatEventDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeThreatEventDetailResponse
   */
  async describeThreatEventDetailWithOptions(request: $_model.DescribeThreatEventDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeThreatEventDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeThreatEventDetail",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeThreatEventDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeThreatEventDetailResponse({}));
  }

  /**
   * Retrieves the details of a security event that requires attention.
   * 
   * @param request - DescribeThreatEventDetailRequest
   * @returns DescribeThreatEventDetailResponse
   */
  async describeThreatEventDetail(request: $_model.DescribeThreatEventDetailRequest): Promise<$_model.DescribeThreatEventDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeThreatEventDetailWithOptions(request, runtime);
  }

  /**
   * Queries the top five security event metrics, which are aggregated by different objects and sorted in descending order.
   * 
   * @param request - DescribeThreatEventTopMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeThreatEventTopMetricResponse
   */
  async describeThreatEventTopMetricWithOptions(request: $_model.DescribeThreatEventTopMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeThreatEventTopMetricResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeThreatEventTopMetric",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeThreatEventTopMetricResponse>(await this.callApi(params, req, runtime), new $_model.DescribeThreatEventTopMetricResponse({}));
  }

  /**
   * Queries the top five security event metrics, which are aggregated by different objects and sorted in descending order.
   * 
   * @param request - DescribeThreatEventTopMetricRequest
   * @returns DescribeThreatEventTopMetricResponse
   */
  async describeThreatEventTopMetric(request: $_model.DescribeThreatEventTopMetricRequest): Promise<$_model.DescribeThreatEventTopMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeThreatEventTopMetricWithOptions(request, runtime);
  }

  /**
   * Queries the trend of API security risks for a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeUserAbnormalTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserAbnormalTrendResponse
   */
  async describeUserAbnormalTrendWithOptions(request: $_model.DescribeUserAbnormalTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserAbnormalTrendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserAbnormalTrend",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserAbnormalTrendResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserAbnormalTrendResponse({}));
  }

  /**
   * Queries the trend of API security risks for a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeUserAbnormalTrendRequest
   * @returns DescribeUserAbnormalTrendResponse
   */
  async describeUserAbnormalTrend(request: $_model.DescribeUserAbnormalTrendRequest): Promise<$_model.DescribeUserAbnormalTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserAbnormalTrendWithOptions(request, runtime);
  }

  /**
   * Queries user risk types and statistics related to API security in Web Application Firewall (WAF).
   * 
   * @param request - DescribeUserAbnormalTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserAbnormalTypeResponse
   */
  async describeUserAbnormalTypeWithOptions(request: $_model.DescribeUserAbnormalTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserAbnormalTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.userStatusList)) {
      query["UserStatusList"] = request.userStatusList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserAbnormalType",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserAbnormalTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserAbnormalTypeResponse({}));
  }

  /**
   * Queries user risk types and statistics related to API security in Web Application Firewall (WAF).
   * 
   * @param request - DescribeUserAbnormalTypeRequest
   * @returns DescribeUserAbnormalTypeResponse
   */
  async describeUserAbnormalType(request: $_model.DescribeUserAbnormalTypeRequest): Promise<$_model.DescribeUserAbnormalTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserAbnormalTypeWithOptions(request, runtime);
  }

  /**
   * Queries traffic statistics for an API operation.
   * 
   * @param request - DescribeUserApiRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserApiRequestResponse
   */
  async describeUserApiRequestWithOptions(request: $_model.DescribeUserApiRequestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserApiRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiFormat)) {
      query["ApiFormat"] = request.apiFormat;
    }

    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserApiRequest",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserApiRequestResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserApiRequestResponse({}));
  }

  /**
   * Queries traffic statistics for an API operation.
   * 
   * @param request - DescribeUserApiRequestRequest
   * @returns DescribeUserApiRequestResponse
   */
  async describeUserApiRequest(request: $_model.DescribeUserApiRequestRequest): Promise<$_model.DescribeUserApiRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserApiRequestWithOptions(request, runtime);
  }

  /**
   * Queries user asset statistics for API Security.
   * 
   * @param request - DescribeUserAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserAssetResponse
   */
  async describeUserAssetWithOptions(request: $_model.DescribeUserAssetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserAssetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.days)) {
      query["Days"] = request.days;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserAsset",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserAssetResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserAssetResponse({}));
  }

  /**
   * Queries user asset statistics for API Security.
   * 
   * @param request - DescribeUserAssetRequest
   * @returns DescribeUserAssetResponse
   */
  async describeUserAsset(request: $_model.DescribeUserAssetRequest): Promise<$_model.DescribeUserAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserAssetWithOptions(request, runtime);
  }

  /**
   * Describes the trend of API security attacks.
   * 
   * @param request - DescribeUserEventTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserEventTrendResponse
   */
  async describeUserEventTrendWithOptions(request: $_model.DescribeUserEventTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserEventTrendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.eventScope)) {
      query["EventScope"] = request.eventScope;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserEventTrend",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserEventTrendResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserEventTrendResponse({}));
  }

  /**
   * Describes the trend of API security attacks.
   * 
   * @param request - DescribeUserEventTrendRequest
   * @returns DescribeUserEventTrendResponse
   */
  async describeUserEventTrend(request: $_model.DescribeUserEventTrendRequest): Promise<$_model.DescribeUserEventTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserEventTrendWithOptions(request, runtime);
  }

  /**
   * Queries the types and statistics of user security events.
   * 
   * @param request - DescribeUserEventTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserEventTypeResponse
   */
  async describeUserEventTypeWithOptions(request: $_model.DescribeUserEventTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserEventTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventScope)) {
      query["EventScope"] = request.eventScope;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.userStatusList)) {
      query["UserStatusList"] = request.userStatusList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserEventType",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserEventTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserEventTypeResponse({}));
  }

  /**
   * Queries the types and statistics of user security events.
   * 
   * @param request - DescribeUserEventTypeRequest
   * @returns DescribeUserEventTypeResponse
   */
  async describeUserEventType(request: $_model.DescribeUserEventTypeRequest): Promise<$_model.DescribeUserEventTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserEventTypeWithOptions(request, runtime);
  }

  /**
   * Queries the log field configuration of a Web Application Firewall (WAF) instance, including additional fields, removed fields, delivery strategies, and extended settings.
   * 
   * @param request - DescribeUserLogFieldConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserLogFieldConfigResponse
   */
  async describeUserLogFieldConfigWithOptions(request: $_model.DescribeUserLogFieldConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserLogFieldConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryType)) {
      query["DeliveryType"] = request.deliveryType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserLogFieldConfig",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserLogFieldConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserLogFieldConfigResponse({}));
  }

  /**
   * Queries the log field configuration of a Web Application Firewall (WAF) instance, including additional fields, removed fields, delivery strategies, and extended settings.
   * 
   * @param request - DescribeUserLogFieldConfigRequest
   * @returns DescribeUserLogFieldConfigResponse
   */
  async describeUserLogFieldConfig(request: $_model.DescribeUserLogFieldConfigRequest): Promise<$_model.DescribeUserLogFieldConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserLogFieldConfigWithOptions(request, runtime);
  }

  /**
   * Queries the available log storage regions.
   * 
   * @param request - DescribeUserSlsLogRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserSlsLogRegionsResponse
   */
  async describeUserSlsLogRegionsWithOptions(request: $_model.DescribeUserSlsLogRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserSlsLogRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserSlsLogRegions",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserSlsLogRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserSlsLogRegionsResponse({}));
  }

  /**
   * Queries the available log storage regions.
   * 
   * @param request - DescribeUserSlsLogRegionsRequest
   * @returns DescribeUserSlsLogRegionsResponse
   */
  async describeUserSlsLogRegions(request: $_model.DescribeUserSlsLogRegionsRequest): Promise<$_model.DescribeUserSlsLogRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserSlsLogRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the status, region ID, and status modification time of Web Application Firewall (WAF) logs.
   * 
   * @param request - DescribeUserWafLogStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserWafLogStatusResponse
   */
  async describeUserWafLogStatusWithOptions(request: $_model.DescribeUserWafLogStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserWafLogStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserWafLogStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserWafLogStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserWafLogStatusResponse({}));
  }

  /**
   * Queries the status, region ID, and status modification time of Web Application Firewall (WAF) logs.
   * 
   * @param request - DescribeUserWafLogStatusRequest
   * @returns DescribeUserWafLogStatusResponse
   */
  async describeUserWafLogStatus(request: $_model.DescribeUserWafLogStatusRequest): Promise<$_model.DescribeUserWafLogStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserWafLogStatusWithOptions(request, runtime);
  }

  /**
   * Queries the domain ownership verification content of a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeVerifyContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifyContentResponse
   */
  async describeVerifyContentWithOptions(request: $_model.DescribeVerifyContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVerifyContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessOrigin)) {
      query["AccessOrigin"] = request.accessOrigin;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVerifyContent",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVerifyContentResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVerifyContentResponse({}));
  }

  /**
   * Queries the domain ownership verification content of a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeVerifyContentRequest
   * @returns DescribeVerifyContentResponse
   */
  async describeVerifyContent(request: $_model.DescribeVerifyContentRequest): Promise<$_model.DescribeVerifyContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyContentWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 IP addresses that have the highest number of requests.
   * 
   * @param request - DescribeVisitTopIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVisitTopIpResponse
   */
  async describeVisitTopIpWithOptions(request: $_model.DescribeVisitTopIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVisitTopIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVisitTopIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVisitTopIpResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVisitTopIpResponse({}));
  }

  /**
   * Queries the top 10 IP addresses that have the highest number of requests.
   * 
   * @param request - DescribeVisitTopIpRequest
   * @returns DescribeVisitTopIpResponse
   */
  async describeVisitTopIp(request: $_model.DescribeVisitTopIpRequest): Promise<$_model.DescribeVisitTopIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVisitTopIpWithOptions(request, runtime);
  }

  /**
   * Queries the top 10 User-Agents that sent the most requests.
   * 
   * @param request - DescribeVisitUasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVisitUasResponse
   */
  async describeVisitUasWithOptions(request: $_model.DescribeVisitUasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVisitUasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVisitUas",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVisitUasResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVisitUasResponse({}));
  }

  /**
   * Queries the top 10 User-Agents that sent the most requests.
   * 
   * @param request - DescribeVisitUasRequest
   * @returns DescribeVisitUasResponse
   */
  async describeVisitUas(request: $_model.DescribeVisitUasRequest): Promise<$_model.DescribeVisitUasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVisitUasWithOptions(request, runtime);
  }

  /**
   * Queries the back-to-origin CIDR blocks of a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeWafSourceIpSegmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWafSourceIpSegmentResponse
   */
  async describeWafSourceIpSegmentWithOptions(request: $_model.DescribeWafSourceIpSegmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWafSourceIpSegmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWafSourceIpSegment",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWafSourceIpSegmentResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWafSourceIpSegmentResponse({}));
  }

  /**
   * Queries the back-to-origin CIDR blocks of a Web Application Firewall (WAF) instance.
   * 
   * @param request - DescribeWafSourceIpSegmentRequest
   * @returns DescribeWafSourceIpSegmentResponse
   */
  async describeWafSourceIpSegment(request: $_model.DescribeWafSourceIpSegmentRequest): Promise<$_model.DescribeWafSourceIpSegmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWafSourceIpSegmentWithOptions(request, runtime);
  }

  /**
   * Initializes a service-linked role for WAF.
   * 
   * @param request - InitializeWafOperationRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitializeWafOperationRoleResponse
   */
  async initializeWafOperationRoleWithOptions(request: $_model.InitializeWafOperationRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitializeWafOperationRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitializeWafOperationRole",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitializeWafOperationRoleResponse>(await this.callApi(params, req, runtime), new $_model.InitializeWafOperationRoleResponse({}));
  }

  /**
   * Initializes a service-linked role for WAF.
   * 
   * @param request - InitializeWafOperationRoleRequest
   * @returns InitializeWafOperationRoleResponse
   */
  async initializeWafOperationRole(request: $_model.InitializeWafOperationRoleRequest): Promise<$_model.InitializeWafOperationRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initializeWafOperationRoleWithOptions(request, runtime);
  }

  /**
   * Queries tag keys.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: $_model.ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagKeys",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListTagKeysResponse({}));
  }

  /**
   * Queries tag keys.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: $_model.ListTagKeysRequest): Promise<$_model.ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to a resource.
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      version: "2021-10-01",
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
   * Queries the tags that are added to a resource.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Lists the tag values of a specified tag key.
   * 
   * @param request - ListTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: $_model.ListTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagValuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagValues",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagValuesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagValuesResponse({}));
  }

  /**
   * Lists the tag values of a specified tag key.
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: $_model.ListTagValuesRequest): Promise<$_model.ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Modifies the status of API security risks in batches.
   * 
   * @param request - ModifyApisecAbnormalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApisecAbnormalsResponse
   */
  async modifyApisecAbnormalsWithOptions(request: $_model.ModifyApisecAbnormalsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApisecAbnormalsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.abnormalIds)) {
      query["AbnormalIds"] = request.abnormalIds;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.note)) {
      query["Note"] = request.note;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.userStatus)) {
      query["UserStatus"] = request.userStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApisecAbnormals",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApisecAbnormalsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApisecAbnormalsResponse({}));
  }

  /**
   * Modifies the status of API security risks in batches.
   * 
   * @param request - ModifyApisecAbnormalsRequest
   * @returns ModifyApisecAbnormalsResponse
   */
  async modifyApisecAbnormals(request: $_model.ModifyApisecAbnormalsRequest): Promise<$_model.ModifyApisecAbnormalsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApisecAbnormalsWithOptions(request, runtime);
  }

  /**
   * Modifies the annotation of an API asset in the API security module of Web Application Firewall (WAF).
   * 
   * @param request - ModifyApisecApiResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApisecApiResourceResponse
   */
  async modifyApisecApiResourceWithOptions(request: $_model.ModifyApisecApiResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApisecApiResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.follow)) {
      query["Follow"] = request.follow;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.note)) {
      query["Note"] = request.note;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApisecApiResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApisecApiResourceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApisecApiResourceResponse({}));
  }

  /**
   * Modifies the annotation of an API asset in the API security module of Web Application Firewall (WAF).
   * 
   * @param request - ModifyApisecApiResourceRequest
   * @returns ModifyApisecApiResourceResponse
   */
  async modifyApisecApiResource(request: $_model.ModifyApisecApiResourceRequest): Promise<$_model.ModifyApisecApiResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApisecApiResourceWithOptions(request, runtime);
  }

  /**
   * Modifies the status of a batch of API security events.
   * 
   * @param request - ModifyApisecEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApisecEventsResponse
   */
  async modifyApisecEventsWithOptions(request: $_model.ModifyApisecEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApisecEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.eventIds)) {
      query["EventIds"] = request.eventIds;
    }

    if (!$dara.isNull(request.eventScope)) {
      query["EventScope"] = request.eventScope;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.note)) {
      query["Note"] = request.note;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.userStatus)) {
      query["UserStatus"] = request.userStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApisecEvents",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApisecEventsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApisecEventsResponse({}));
  }

  /**
   * Modifies the status of a batch of API security events.
   * 
   * @param request - ModifyApisecEventsRequest
   * @returns ModifyApisecEventsResponse
   */
  async modifyApisecEvents(request: $_model.ModifyApisecEventsRequest): Promise<$_model.ModifyApisecEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApisecEventsWithOptions(request, runtime);
  }

  /**
   * Updates the API security log subscription settings.
   * 
   * @param request - ModifyApisecLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApisecLogDeliveryResponse
   */
  async modifyApisecLogDeliveryWithOptions(request: $_model.ModifyApisecLogDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApisecLogDeliveryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assertKey)) {
      query["AssertKey"] = request.assertKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logRegionId)) {
      query["LogRegionId"] = request.logRegionId;
    }

    if (!$dara.isNull(request.logStoreName)) {
      query["LogStoreName"] = request.logStoreName;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApisecLogDelivery",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApisecLogDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApisecLogDeliveryResponse({}));
  }

  /**
   * Updates the API security log subscription settings.
   * 
   * @param request - ModifyApisecLogDeliveryRequest
   * @returns ModifyApisecLogDeliveryResponse
   */
  async modifyApisecLogDelivery(request: $_model.ModifyApisecLogDeliveryRequest): Promise<$_model.ModifyApisecLogDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApisecLogDeliveryWithOptions(request, runtime);
  }

  /**
   * Modifies the log delivery status of an API security module in a Web Application Firewall (WAF) instance.
   * 
   * @param request - ModifyApisecLogDeliveryStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApisecLogDeliveryStatusResponse
   */
  async modifyApisecLogDeliveryStatusWithOptions(request: $_model.ModifyApisecLogDeliveryStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApisecLogDeliveryStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assertKey)) {
      query["AssertKey"] = request.assertKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApisecLogDeliveryStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApisecLogDeliveryStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApisecLogDeliveryStatusResponse({}));
  }

  /**
   * Modifies the log delivery status of an API security module in a Web Application Firewall (WAF) instance.
   * 
   * @param request - ModifyApisecLogDeliveryStatusRequest
   * @returns ModifyApisecLogDeliveryStatusResponse
   */
  async modifyApisecLogDeliveryStatus(request: $_model.ModifyApisecLogDeliveryStatusRequest): Promise<$_model.ModifyApisecLogDeliveryStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApisecLogDeliveryStatusWithOptions(request, runtime);
  }

  /**
   * Enables or disables API security features for a protected object or protected object group in the Web Application Firewall (WAF) API security module.
   * 
   * @param request - ModifyApisecModuleStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApisecModuleStatusResponse
   */
  async modifyApisecModuleStatusWithOptions(request: $_model.ModifyApisecModuleStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApisecModuleStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.reportStatus)) {
      query["ReportStatus"] = request.reportStatus;
    }

    if (!$dara.isNull(request.resourceGroups)) {
      query["ResourceGroups"] = request.resourceGroups;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.traceStatus)) {
      query["TraceStatus"] = request.traceStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApisecModuleStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApisecModuleStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApisecModuleStatusResponse({}));
  }

  /**
   * Enables or disables API security features for a protected object or protected object group in the Web Application Firewall (WAF) API security module.
   * 
   * @param request - ModifyApisecModuleStatusRequest
   * @returns ModifyApisecModuleStatusResponse
   */
  async modifyApisecModuleStatus(request: $_model.ModifyApisecModuleStatusRequest): Promise<$_model.ModifyApisecModuleStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApisecModuleStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the API security status for a protected object or a protected object group.
   * 
   * @param request - ModifyApisecStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApisecStatusResponse
   */
  async modifyApisecStatusWithOptions(request: $_model.ModifyApisecStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApisecStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apisecStatus)) {
      query["ApisecStatus"] = request.apisecStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroups)) {
      query["ResourceGroups"] = request.resourceGroups;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApisecStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApisecStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApisecStatusResponse({}));
  }

  /**
   * Modifies the API security status for a protected object or a protected object group.
   * 
   * @param request - ModifyApisecStatusRequest
   * @returns ModifyApisecStatusResponse
   */
  async modifyApisecStatus(request: $_model.ModifyApisecStatusRequest): Promise<$_model.ModifyApisecStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApisecStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of a cloud resource connected to WAF.
   * 
   * @param tmpReq - ModifyCloudResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCloudResourceResponse
   */
  async modifyCloudResourceWithOptions(tmpReq: $_model.ModifyCloudResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCloudResourceResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyCloudResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listen)) {
      request.listenShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listen, "Listen", "json");
    }

    if (!$dara.isNull(tmpReq.redirect)) {
      request.redirectShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.redirect, "Redirect", "json");
    }

    let query = { };
    if (!$dara.isNull(request.cloudResourceId)) {
      query["CloudResourceId"] = request.cloudResourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.listenShrink)) {
      query["Listen"] = request.listenShrink;
    }

    if (!$dara.isNull(request.redirectShrink)) {
      query["Redirect"] = request.redirectShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCloudResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCloudResourceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCloudResourceResponse({}));
  }

  /**
   * Modifies the configuration of a cloud resource connected to WAF.
   * 
   * @param request - ModifyCloudResourceRequest
   * @returns ModifyCloudResourceResponse
   */
  async modifyCloudResource(request: $_model.ModifyCloudResourceRequest): Promise<$_model.ModifyCloudResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCloudResourceWithOptions(request, runtime);
  }

  /**
   * Modifies the certificate for a resource managed by WAF in cloud native mode.
   * 
   * @param request - ModifyCloudResourceCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCloudResourceCertResponse
   */
  async modifyCloudResourceCertWithOptions(request: $_model.ModifyCloudResourceCertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCloudResourceCertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificates)) {
      query["Certificates"] = request.certificates;
    }

    if (!$dara.isNull(request.cloudResourceId)) {
      query["CloudResourceId"] = request.cloudResourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!$dara.isNull(request.resourceProduct)) {
      query["ResourceProduct"] = request.resourceProduct;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCloudResourceCert",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCloudResourceCertResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCloudResourceCertResponse({}));
  }

  /**
   * Modifies the certificate for a resource managed by WAF in cloud native mode.
   * 
   * @param request - ModifyCloudResourceCertRequest
   * @returns ModifyCloudResourceCertResponse
   */
  async modifyCloudResourceCert(request: $_model.ModifyCloudResourceCertRequest): Promise<$_model.ModifyCloudResourceCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCloudResourceCertWithOptions(request, runtime);
  }

  /**
   * Modifies the default certificate for cloud native mode.
   * 
   * @param request - ModifyCloudResourceDefaultCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCloudResourceDefaultCertResponse
   */
  async modifyCloudResourceDefaultCertWithOptions(request: $_model.ModifyCloudResourceDefaultCertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCloudResourceDefaultCertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.cloudResourceId)) {
      query["CloudResourceId"] = request.cloudResourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCloudResourceDefaultCert",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCloudResourceDefaultCertResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCloudResourceDefaultCertResponse({}));
  }

  /**
   * Modifies the default certificate for cloud native mode.
   * 
   * @param request - ModifyCloudResourceDefaultCertRequest
   * @returns ModifyCloudResourceDefaultCertResponse
   */
  async modifyCloudResourceDefaultCert(request: $_model.ModifyCloudResourceDefaultCertRequest): Promise<$_model.ModifyCloudResourceDefaultCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCloudResourceDefaultCertWithOptions(request, runtime);
  }

  /**
   * Modifies the default SSL/TLS settings.
   * 
   * @param request - ModifyDefaultHttpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefaultHttpsResponse
   */
  async modifyDefaultHttpsWithOptions(request: $_model.ModifyDefaultHttpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDefaultHttpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.cipherSuite)) {
      query["CipherSuite"] = request.cipherSuite;
    }

    if (!$dara.isNull(request.customCiphers)) {
      query["CustomCiphers"] = request.customCiphers;
    }

    if (!$dara.isNull(request.enableTLSv3)) {
      query["EnableTLSv3"] = request.enableTLSv3;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.TLSVersion)) {
      query["TLSVersion"] = request.TLSVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDefaultHttps",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDefaultHttpsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDefaultHttpsResponse({}));
  }

  /**
   * Modifies the default SSL/TLS settings.
   * 
   * @param request - ModifyDefaultHttpsRequest
   * @returns ModifyDefaultHttpsResponse
   */
  async modifyDefaultHttps(request: $_model.ModifyDefaultHttpsRequest): Promise<$_model.ModifyDefaultHttpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDefaultHttpsWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of a protected object group.
   * 
   * @param request - ModifyDefenseResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefenseResourceGroupResponse
   */
  async modifyDefenseResourceGroupWithOptions(request: $_model.ModifyDefenseResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDefenseResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addList)) {
      query["AddList"] = request.addList;
    }

    if (!$dara.isNull(request.deleteList)) {
      query["DeleteList"] = request.deleteList;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDefenseResourceGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDefenseResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDefenseResourceGroupResponse({}));
  }

  /**
   * Modifies the configuration of a protected object group.
   * 
   * @param request - ModifyDefenseResourceGroupRequest
   * @returns ModifyDefenseResourceGroupResponse
   */
  async modifyDefenseResourceGroup(request: $_model.ModifyDefenseResourceGroupRequest): Promise<$_model.ModifyDefenseResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDefenseResourceGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the cookie settings of a protected object and the method to identify the originating IP addresses of clients.
   * 
   * @param request - ModifyDefenseResourceXffRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefenseResourceXffResponse
   */
  async modifyDefenseResourceXffWithOptions(request: $_model.ModifyDefenseResourceXffRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDefenseResourceXffResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acwCookieStatus)) {
      query["AcwCookieStatus"] = request.acwCookieStatus;
    }

    if (!$dara.isNull(request.acwSecureStatus)) {
      query["AcwSecureStatus"] = request.acwSecureStatus;
    }

    if (!$dara.isNull(request.acwV3SecureStatus)) {
      query["AcwV3SecureStatus"] = request.acwV3SecureStatus;
    }

    if (!$dara.isNull(request.customHeaders)) {
      query["CustomHeaders"] = request.customHeaders;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.responseHeaders)) {
      query["ResponseHeaders"] = request.responseHeaders;
    }

    if (!$dara.isNull(request.xffStatus)) {
      query["XffStatus"] = request.xffStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDefenseResourceXff",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDefenseResourceXffResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDefenseResourceXffResponse({}));
  }

  /**
   * Modifies the cookie settings of a protected object and the method to identify the originating IP addresses of clients.
   * 
   * @param request - ModifyDefenseResourceXffRequest
   * @returns ModifyDefenseResourceXffResponse
   */
  async modifyDefenseResourceXff(request: $_model.ModifyDefenseResourceXffRequest): Promise<$_model.ModifyDefenseResourceXffResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDefenseResourceXffWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of a protection rule.
   * 
   * @param request - ModifyDefenseRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefenseRuleResponse
   */
  async modifyDefenseRuleWithOptions(request: $_model.ModifyDefenseRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDefenseRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!$dara.isNull(request.defenseType)) {
      query["DefenseType"] = request.defenseType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.rules)) {
      body["Rules"] = request.rules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDefenseRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDefenseRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDefenseRuleResponse({}));
  }

  /**
   * Modifies the configuration of a protection rule.
   * 
   * @param request - ModifyDefenseRuleRequest
   * @returns ModifyDefenseRuleResponse
   */
  async modifyDefenseRule(request: $_model.ModifyDefenseRuleRequest): Promise<$_model.ModifyDefenseRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDefenseRuleWithOptions(request, runtime);
  }

  /**
   * Updates the cache for a web tamper-proofing rule.
   * 
   * @param request - ModifyDefenseRuleCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefenseRuleCacheResponse
   */
  async modifyDefenseRuleCacheWithOptions(request: $_model.ModifyDefenseRuleCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDefenseRuleCacheResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDefenseRuleCache",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDefenseRuleCacheResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDefenseRuleCacheResponse({}));
  }

  /**
   * Updates the cache for a web tamper-proofing rule.
   * 
   * @param request - ModifyDefenseRuleCacheRequest
   * @returns ModifyDefenseRuleCacheResponse
   */
  async modifyDefenseRuleCache(request: $_model.ModifyDefenseRuleCacheRequest): Promise<$_model.ModifyDefenseRuleCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDefenseRuleCacheWithOptions(request, runtime);
  }

  /**
   * Enables or disables a protection rule.
   * 
   * @param request - ModifyDefenseRuleStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefenseRuleStatusResponse
   */
  async modifyDefenseRuleStatusWithOptions(request: $_model.ModifyDefenseRuleStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDefenseRuleStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defenseType)) {
      query["DefenseType"] = request.defenseType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleStatus)) {
      query["RuleStatus"] = request.ruleStatus;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDefenseRuleStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDefenseRuleStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDefenseRuleStatusResponse({}));
  }

  /**
   * Enables or disables a protection rule.
   * 
   * @param request - ModifyDefenseRuleStatusRequest
   * @returns ModifyDefenseRuleStatusResponse
   */
  async modifyDefenseRuleStatus(request: $_model.ModifyDefenseRuleStatusRequest): Promise<$_model.ModifyDefenseRuleStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDefenseRuleStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the mitigation settings for a protection scenario.
   * 
   * @param request - ModifyDefenseSceneConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefenseSceneConfigResponse
   */
  async modifyDefenseSceneConfigWithOptions(request: $_model.ModifyDefenseSceneConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDefenseSceneConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configKey)) {
      query["ConfigKey"] = request.configKey;
    }

    if (!$dara.isNull(request.configValue)) {
      query["ConfigValue"] = request.configValue;
    }

    if (!$dara.isNull(request.defenseScene)) {
      query["DefenseScene"] = request.defenseScene;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDefenseSceneConfig",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDefenseSceneConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDefenseSceneConfigResponse({}));
  }

  /**
   * Modifies the mitigation settings for a protection scenario.
   * 
   * @param request - ModifyDefenseSceneConfigRequest
   * @returns ModifyDefenseSceneConfigResponse
   */
  async modifyDefenseSceneConfig(request: $_model.ModifyDefenseSceneConfigRequest): Promise<$_model.ModifyDefenseSceneConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDefenseSceneConfigWithOptions(request, runtime);
  }

  /**
   * Modifies a defense template.
   * 
   * @param request - ModifyDefenseTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefenseTemplateResponse
   */
  async modifyDefenseTemplateWithOptions(request: $_model.ModifyDefenseTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDefenseTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDefenseTemplate",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDefenseTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDefenseTemplateResponse({}));
  }

  /**
   * Modifies a defense template.
   * 
   * @param request - ModifyDefenseTemplateRequest
   * @returns ModifyDefenseTemplateResponse
   */
  async modifyDefenseTemplate(request: $_model.ModifyDefenseTemplateRequest): Promise<$_model.ModifyDefenseTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDefenseTemplateWithOptions(request, runtime);
  }

  /**
   * Changes the status of a protection rule template.
   * 
   * @param request - ModifyDefenseTemplateStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefenseTemplateStatusResponse
   */
  async modifyDefenseTemplateStatusWithOptions(request: $_model.ModifyDefenseTemplateStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDefenseTemplateStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateStatus)) {
      query["TemplateStatus"] = request.templateStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDefenseTemplateStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDefenseTemplateStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDefenseTemplateStatusResponse({}));
  }

  /**
   * Changes the status of a protection rule template.
   * 
   * @param request - ModifyDefenseTemplateStatusRequest
   * @returns ModifyDefenseTemplateStatusResponse
   */
  async modifyDefenseTemplateStatus(request: $_model.ModifyDefenseTemplateStatusRequest): Promise<$_model.ModifyDefenseTemplateStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDefenseTemplateStatusWithOptions(request, runtime);
  }

  /**
   * Updates a CNAME-based domain name onboarded to Web Application Firewall (WAF).
   * 
   * @param tmpReq - ModifyDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDomainResponse
   */
  async modifyDomainWithOptions(tmpReq: $_model.ModifyDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDomainResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyDomainShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listen)) {
      request.listenShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listen, "Listen", "json");
    }

    if (!$dara.isNull(tmpReq.redirect)) {
      request.redirectShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.redirect, "Redirect", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.listenShrink)) {
      query["Listen"] = request.listenShrink;
    }

    if (!$dara.isNull(request.redirectShrink)) {
      query["Redirect"] = request.redirectShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDomain",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDomainResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDomainResponse({}));
  }

  /**
   * Updates a CNAME-based domain name onboarded to Web Application Firewall (WAF).
   * 
   * @param request - ModifyDomainRequest
   * @returns ModifyDomainResponse
   */
  async modifyDomain(request: $_model.ModifyDomainRequest): Promise<$_model.ModifyDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDomainWithOptions(request, runtime);
  }

  /**
   * Modifies the certificate that is associated with a domain name added to a Web Application Firewall (WAF) instance in CNAME record mode.
   * 
   * @param request - ModifyDomainCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDomainCertResponse
   */
  async modifyDomainCertWithOptions(request: $_model.ModifyDomainCertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDomainCertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.cipherSuite)) {
      query["CipherSuite"] = request.cipherSuite;
    }

    if (!$dara.isNull(request.customCiphers)) {
      query["CustomCiphers"] = request.customCiphers;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.enableTLSv3)) {
      query["EnableTLSv3"] = request.enableTLSv3;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.TLSVersion)) {
      query["TLSVersion"] = request.TLSVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDomainCert",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDomainCertResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDomainCertResponse({}));
  }

  /**
   * Modifies the certificate that is associated with a domain name added to a Web Application Firewall (WAF) instance in CNAME record mode.
   * 
   * @param request - ModifyDomainCertRequest
   * @returns ModifyDomainCertResponse
   */
  async modifyDomainCert(request: $_model.ModifyDomainCertRequest): Promise<$_model.ModifyDomainCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDomainCertWithOptions(request, runtime);
  }

  /**
   * Re-add a domain name that was penalized for not having an ICP filing to Web Application Firewall (WAF).
   * 
   * @param request - ModifyDomainPunishStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDomainPunishStatusResponse
   */
  async modifyDomainPunishStatusWithOptions(request: $_model.ModifyDomainPunishStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDomainPunishStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDomainPunishStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDomainPunishStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDomainPunishStatusResponse({}));
  }

  /**
   * Re-add a domain name that was penalized for not having an ICP filing to Web Application Firewall (WAF).
   * 
   * @param request - ModifyDomainPunishStatusRequest
   * @returns ModifyDomainPunishStatusResponse
   */
  async modifyDomainPunishStatus(request: $_model.ModifyDomainPunishStatusRequest): Promise<$_model.ModifyDomainPunishStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDomainPunishStatusWithOptions(request, runtime);
  }

  /**
   * Updates hybrid cloud cluster settings, such as the cluster name, ports, and access mode.
   * 
   * @param request - ModifyHybridCloudClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridCloudClusterResponse
   */
  async modifyHybridCloudClusterWithOptions(request: $_model.ModifyHybridCloudClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHybridCloudClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessMode)) {
      query["AccessMode"] = request.accessMode;
    }

    if (!$dara.isNull(request.accessRegion)) {
      query["AccessRegion"] = request.accessRegion;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.httpPorts)) {
      query["HttpPorts"] = request.httpPorts;
    }

    if (!$dara.isNull(request.httpsPorts)) {
      query["HttpsPorts"] = request.httpsPorts;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logFieldsNotReturned)) {
      query["LogFieldsNotReturned"] = request.logFieldsNotReturned;
    }

    if (!$dara.isNull(request.protectionServerCount)) {
      query["ProtectionServerCount"] = request.protectionServerCount;
    }

    if (!$dara.isNull(request.proxyStatus)) {
      query["ProxyStatus"] = request.proxyStatus;
    }

    if (!$dara.isNull(request.proxyType)) {
      query["ProxyType"] = request.proxyType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleConfig)) {
      query["RuleConfig"] = request.ruleConfig;
    }

    if (!$dara.isNull(request.ruleStatus)) {
      query["RuleStatus"] = request.ruleStatus;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHybridCloudCluster",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHybridCloudClusterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHybridCloudClusterResponse({}));
  }

  /**
   * Updates hybrid cloud cluster settings, such as the cluster name, ports, and access mode.
   * 
   * @param request - ModifyHybridCloudClusterRequest
   * @returns ModifyHybridCloudClusterResponse
   */
  async modifyHybridCloudCluster(request: $_model.ModifyHybridCloudClusterRequest): Promise<$_model.ModifyHybridCloudClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHybridCloudClusterWithOptions(request, runtime);
  }

  /**
   * Modifies the manual bypass status for a hybrid cloud cluster that is integrated with an SDK.
   * 
   * @param request - ModifyHybridCloudClusterBypassStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridCloudClusterBypassStatusResponse
   */
  async modifyHybridCloudClusterBypassStatusWithOptions(request: $_model.ModifyHybridCloudClusterBypassStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHybridCloudClusterBypassStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterResourceId)) {
      query["ClusterResourceId"] = request.clusterResourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleStatus)) {
      query["RuleStatus"] = request.ruleStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHybridCloudClusterBypassStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHybridCloudClusterBypassStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHybridCloudClusterBypassStatusResponse({}));
  }

  /**
   * Modifies the manual bypass status for a hybrid cloud cluster that is integrated with an SDK.
   * 
   * @param request - ModifyHybridCloudClusterBypassStatusRequest
   * @returns ModifyHybridCloudClusterBypassStatusResponse
   */
  async modifyHybridCloudClusterBypassStatus(request: $_model.ModifyHybridCloudClusterBypassStatusRequest): Promise<$_model.ModifyHybridCloudClusterBypassStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHybridCloudClusterBypassStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the rule of a hybrid cloud cluster.
   * 
   * @param request - ModifyHybridCloudClusterRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridCloudClusterRuleResponse
   */
  async modifyHybridCloudClusterRuleWithOptions(request: $_model.ModifyHybridCloudClusterRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHybridCloudClusterRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterRuleResourceId)) {
      query["ClusterRuleResourceId"] = request.clusterRuleResourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleConfig)) {
      query["RuleConfig"] = request.ruleConfig;
    }

    if (!$dara.isNull(request.ruleStatus)) {
      query["RuleStatus"] = request.ruleStatus;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHybridCloudClusterRule",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHybridCloudClusterRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHybridCloudClusterRuleResponse({}));
  }

  /**
   * Modifies the rule of a hybrid cloud cluster.
   * 
   * @param request - ModifyHybridCloudClusterRuleRequest
   * @returns ModifyHybridCloudClusterRuleResponse
   */
  async modifyHybridCloudClusterRule(request: $_model.ModifyHybridCloudClusterRuleRequest): Promise<$_model.ModifyHybridCloudClusterRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHybridCloudClusterRuleWithOptions(request, runtime);
  }

  /**
   * Modifies the information of a cluster group.
   * 
   * @param request - ModifyHybridCloudGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridCloudGroupResponse
   */
  async modifyHybridCloudGroupWithOptions(request: $_model.ModifyHybridCloudGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHybridCloudGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHybridCloudGroup",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHybridCloudGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHybridCloudGroupResponse({}));
  }

  /**
   * Modifies the information of a cluster group.
   * 
   * @param request - ModifyHybridCloudGroupRequest
   * @returns ModifyHybridCloudGroupResponse
   */
  async modifyHybridCloudGroup(request: $_model.ModifyHybridCloudGroupRequest): Promise<$_model.ModifyHybridCloudGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHybridCloudGroupWithOptions(request, runtime);
  }

  /**
   * Adds a node to a node group in a hybrid cloud cluster of a Web Application Firewall (WAF) instance.
   * 
   * @param request - ModifyHybridCloudGroupExpansionServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridCloudGroupExpansionServerResponse
   */
  async modifyHybridCloudGroupExpansionServerWithOptions(request: $_model.ModifyHybridCloudGroupExpansionServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHybridCloudGroupExpansionServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mids)) {
      query["Mids"] = request.mids;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHybridCloudGroupExpansionServer",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHybridCloudGroupExpansionServerResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHybridCloudGroupExpansionServerResponse({}));
  }

  /**
   * Adds a node to a node group in a hybrid cloud cluster of a Web Application Firewall (WAF) instance.
   * 
   * @param request - ModifyHybridCloudGroupExpansionServerRequest
   * @returns ModifyHybridCloudGroupExpansionServerResponse
   */
  async modifyHybridCloudGroupExpansionServer(request: $_model.ModifyHybridCloudGroupExpansionServerRequest): Promise<$_model.ModifyHybridCloudGroupExpansionServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHybridCloudGroupExpansionServerWithOptions(request, runtime);
  }

  /**
   * Removes a node from a group in a hybrid cloud cluster.
   * 
   * @param request - ModifyHybridCloudGroupShrinkServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridCloudGroupShrinkServerResponse
   */
  async modifyHybridCloudGroupShrinkServerWithOptions(request: $_model.ModifyHybridCloudGroupShrinkServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHybridCloudGroupShrinkServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mids)) {
      query["Mids"] = request.mids;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHybridCloudGroupShrinkServer",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHybridCloudGroupShrinkServerResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHybridCloudGroupShrinkServerResponse({}));
  }

  /**
   * Removes a node from a group in a hybrid cloud cluster.
   * 
   * @param request - ModifyHybridCloudGroupShrinkServerRequest
   * @returns ModifyHybridCloudGroupShrinkServerResponse
   */
  async modifyHybridCloudGroupShrinkServer(request: $_model.ModifyHybridCloudGroupShrinkServerRequest): Promise<$_model.ModifyHybridCloudGroupShrinkServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHybridCloudGroupShrinkServerWithOptions(request, runtime);
  }

  /**
   * Modifies the traffic redirection status of a hybrid cloud SDK.
   * 
   * @param request - ModifyHybridCloudSdkPullinStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridCloudSdkPullinStatusResponse
   */
  async modifyHybridCloudSdkPullinStatusWithOptions(request: $_model.ModifyHybridCloudSdkPullinStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHybridCloudSdkPullinStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mid)) {
      query["Mid"] = request.mid;
    }

    if (!$dara.isNull(request.pullinStatus)) {
      query["PullinStatus"] = request.pullinStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHybridCloudSdkPullinStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHybridCloudSdkPullinStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHybridCloudSdkPullinStatusResponse({}));
  }

  /**
   * Modifies the traffic redirection status of a hybrid cloud SDK.
   * 
   * @param request - ModifyHybridCloudSdkPullinStatusRequest
   * @returns ModifyHybridCloudSdkPullinStatusResponse
   */
  async modifyHybridCloudSdkPullinStatus(request: $_model.ModifyHybridCloudSdkPullinStatusRequest): Promise<$_model.ModifyHybridCloudSdkPullinStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHybridCloudSdkPullinStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of a hybrid cloud node in a Web Application Firewall (WAF) instance.
   * 
   * @param request - ModifyHybridCloudServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridCloudServerResponse
   */
  async modifyHybridCloudServerWithOptions(request: $_model.ModifyHybridCloudServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHybridCloudServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.continents)) {
      query["Continents"] = request.continents;
    }

    if (!$dara.isNull(request.customName)) {
      query["CustomName"] = request.customName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mid)) {
      query["Mid"] = request.mid;
    }

    if (!$dara.isNull(request.operator)) {
      query["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHybridCloudServer",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHybridCloudServerResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHybridCloudServerResponse({}));
  }

  /**
   * Modifies the configuration of a hybrid cloud node in a Web Application Firewall (WAF) instance.
   * 
   * @param request - ModifyHybridCloudServerRequest
   * @returns ModifyHybridCloudServerResponse
   */
  async modifyHybridCloudServer(request: $_model.ModifyHybridCloudServerRequest): Promise<$_model.ModifyHybridCloudServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHybridCloudServerWithOptions(request, runtime);
  }

  /**
   * Modifies a log delivery configuration for a hybrid cloud cluster.
   * 
   * @param request - ModifyLogDeliveryConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLogDeliveryConfigResponse
   */
  async modifyLogDeliveryConfigWithOptions(request: $_model.ModifyLogDeliveryConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLogDeliveryConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryDetail)) {
      query["DeliveryDetail"] = request.deliveryDetail;
    }

    if (!$dara.isNull(request.deliveryName)) {
      query["DeliveryName"] = request.deliveryName;
    }

    if (!$dara.isNull(request.deliveryType)) {
      query["DeliveryType"] = request.deliveryType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLogDeliveryConfig",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLogDeliveryConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLogDeliveryConfigResponse({}));
  }

  /**
   * Modifies a log delivery configuration for a hybrid cloud cluster.
   * 
   * @param request - ModifyLogDeliveryConfigRequest
   * @returns ModifyLogDeliveryConfigResponse
   */
  async modifyLogDeliveryConfig(request: $_model.ModifyLogDeliveryConfigRequest): Promise<$_model.ModifyLogDeliveryConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLogDeliveryConfigWithOptions(request, runtime);
  }

  /**
   * Modifies an IP address blacklist for critical event protection.
   * 
   * @param request - ModifyMajorProtectionBlackIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMajorProtectionBlackIpResponse
   */
  async modifyMajorProtectionBlackIpWithOptions(request: $_model.ModifyMajorProtectionBlackIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMajorProtectionBlackIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ipList)) {
      query["IpList"] = request.ipList;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMajorProtectionBlackIp",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMajorProtectionBlackIpResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMajorProtectionBlackIpResponse({}));
  }

  /**
   * Modifies an IP address blacklist for critical event protection.
   * 
   * @param request - ModifyMajorProtectionBlackIpRequest
   * @returns ModifyMajorProtectionBlackIpResponse
   */
  async modifyMajorProtectionBlackIp(request: $_model.ModifyMajorProtectionBlackIpRequest): Promise<$_model.ModifyMajorProtectionBlackIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMajorProtectionBlackIpWithOptions(request, runtime);
  }

  /**
   * Modifies the information of a member account that is managed by the multi-account management feature of Web Application Firewall (WAF).
   * 
   * @param request - ModifyMemberAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMemberAccountResponse
   */
  async modifyMemberAccountWithOptions(request: $_model.ModifyMemberAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMemberAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.memberAccountId)) {
      query["MemberAccountId"] = request.memberAccountId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMemberAccount",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMemberAccountResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMemberAccountResponse({}));
  }

  /**
   * Modifies the information of a member account that is managed by the multi-account management feature of Web Application Firewall (WAF).
   * 
   * @param request - ModifyMemberAccountRequest
   * @returns ModifyMemberAccountResponse
   */
  async modifyMemberAccount(request: $_model.ModifyMemberAccountRequest): Promise<$_model.ModifyMemberAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMemberAccountWithOptions(request, runtime);
  }

  /**
   * Modifies the protection status of Web Application Firewall (WAF).
   * 
   * @param request - ModifyPauseProtectionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPauseProtectionStatusResponse
   */
  async modifyPauseProtectionStatusWithOptions(request: $_model.ModifyPauseProtectionStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPauseProtectionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pauseStatus)) {
      query["PauseStatus"] = request.pauseStatus;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPauseProtectionStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPauseProtectionStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPauseProtectionStatusResponse({}));
  }

  /**
   * Modifies the protection status of Web Application Firewall (WAF).
   * 
   * @param request - ModifyPauseProtectionStatusRequest
   * @returns ModifyPauseProtectionStatusResponse
   */
  async modifyPauseProtectionStatus(request: $_model.ModifyPauseProtectionStatusRequest): Promise<$_model.ModifyPauseProtectionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPauseProtectionStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the log delivery status of a protected object in Web Application Firewall (WAF).
   * 
   * @param request - ModifyResourceLogDeliveryStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyResourceLogDeliveryStatusResponse
   */
  async modifyResourceLogDeliveryStatusWithOptions(request: $_model.ModifyResourceLogDeliveryStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyResourceLogDeliveryStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryName)) {
      query["DeliveryName"] = request.deliveryName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyResourceLogDeliveryStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyResourceLogDeliveryStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyResourceLogDeliveryStatusResponse({}));
  }

  /**
   * Modifies the log delivery status of a protected object in Web Application Firewall (WAF).
   * 
   * @param request - ModifyResourceLogDeliveryStatusRequest
   * @returns ModifyResourceLogDeliveryStatusResponse
   */
  async modifyResourceLogDeliveryStatus(request: $_model.ModifyResourceLogDeliveryStatusRequest): Promise<$_model.ModifyResourceLogDeliveryStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyResourceLogDeliveryStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the log field configuration of a protected object.
   * 
   * @param request - ModifyResourceLogFieldConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyResourceLogFieldConfigResponse
   */
  async modifyResourceLogFieldConfigWithOptions(request: $_model.ModifyResourceLogFieldConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyResourceLogFieldConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryType)) {
      query["DeliveryType"] = request.deliveryType;
    }

    if (!$dara.isNull(request.extendConfig)) {
      query["ExtendConfig"] = request.extendConfig;
    }

    if (!$dara.isNull(request.fieldList)) {
      query["FieldList"] = request.fieldList;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logDeliveryStrategy)) {
      query["LogDeliveryStrategy"] = request.logDeliveryStrategy;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyResourceLogFieldConfig",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyResourceLogFieldConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyResourceLogFieldConfigResponse({}));
  }

  /**
   * Modifies the log field configuration of a protected object.
   * 
   * @param request - ModifyResourceLogFieldConfigRequest
   * @returns ModifyResourceLogFieldConfigResponse
   */
  async modifyResourceLogFieldConfig(request: $_model.ModifyResourceLogFieldConfigRequest): Promise<$_model.ModifyResourceLogFieldConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyResourceLogFieldConfigWithOptions(request, runtime);
  }

  /**
   * Enables or disables the log collection feature for a protected object.
   * 
   * @param request - ModifyResourceLogStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyResourceLogStatusResponse
   */
  async modifyResourceLogStatusWithOptions(request: $_model.ModifyResourceLogStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyResourceLogStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyResourceLogStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyResourceLogStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyResourceLogStatusResponse({}));
  }

  /**
   * Enables or disables the log collection feature for a protected object.
   * 
   * @param request - ModifyResourceLogStatusRequest
   * @returns ModifyResourceLogStatusResponse
   */
  async modifyResourceLogStatus(request: $_model.ModifyResourceLogStatusRequest): Promise<$_model.ModifyResourceLogStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyResourceLogStatusWithOptions(request, runtime);
  }

  /**
   * Attaches protected objects to or detaches protected objects from a protection template.
   * 
   * @param request - ModifyTemplateResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTemplateResourcesResponse
   */
  async modifyTemplateResourcesWithOptions(request: $_model.ModifyTemplateResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTemplateResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindAssets)) {
      query["BindAssets"] = request.bindAssets;
    }

    if (!$dara.isNull(request.bindResourceGroups)) {
      query["BindResourceGroups"] = request.bindResourceGroups;
    }

    if (!$dara.isNull(request.bindResources)) {
      query["BindResources"] = request.bindResources;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.unbindAssets)) {
      query["UnbindAssets"] = request.unbindAssets;
    }

    if (!$dara.isNull(request.unbindResourceGroups)) {
      query["UnbindResourceGroups"] = request.unbindResourceGroups;
    }

    if (!$dara.isNull(request.unbindResources)) {
      query["UnbindResources"] = request.unbindResources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTemplateResources",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTemplateResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTemplateResourcesResponse({}));
  }

  /**
   * Attaches protected objects to or detaches protected objects from a protection template.
   * 
   * @param request - ModifyTemplateResourcesRequest
   * @returns ModifyTemplateResourcesResponse
   */
  async modifyTemplateResources(request: $_model.ModifyTemplateResourcesRequest): Promise<$_model.ModifyTemplateResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTemplateResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the default log field configuration of a Web Application Firewall (WAF) instance for log delivery to Simple Log Service.
   * 
   * @param request - ModifyUserLogFieldConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserLogFieldConfigResponse
   */
  async modifyUserLogFieldConfigWithOptions(request: $_model.ModifyUserLogFieldConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUserLogFieldConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryType)) {
      query["DeliveryType"] = request.deliveryType;
    }

    if (!$dara.isNull(request.extendConfig)) {
      query["ExtendConfig"] = request.extendConfig;
    }

    if (!$dara.isNull(request.fieldList)) {
      query["FieldList"] = request.fieldList;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logDeliveryStrategy)) {
      query["LogDeliveryStrategy"] = request.logDeliveryStrategy;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyUserLogFieldConfig",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyUserLogFieldConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyUserLogFieldConfigResponse({}));
  }

  /**
   * Modifies the default log field configuration of a Web Application Firewall (WAF) instance for log delivery to Simple Log Service.
   * 
   * @param request - ModifyUserLogFieldConfigRequest
   * @returns ModifyUserLogFieldConfigResponse
   */
  async modifyUserLogFieldConfig(request: $_model.ModifyUserLogFieldConfigRequest): Promise<$_model.ModifyUserLogFieldConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUserLogFieldConfigWithOptions(request, runtime);
  }

  /**
   * Enables or disables Simple Log Service for Web Application Firewall (WAF).
   * 
   * @param request - ModifyUserWafLogStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserWafLogStatusResponse
   */
  async modifyUserWafLogStatusWithOptions(request: $_model.ModifyUserWafLogStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUserWafLogStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logRegionId)) {
      query["LogRegionId"] = request.logRegionId;
    }

    if (!$dara.isNull(request.logStatus)) {
      query["LogStatus"] = request.logStatus;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyUserWafLogStatus",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyUserWafLogStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyUserWafLogStatusResponse({}));
  }

  /**
   * Enables or disables Simple Log Service for Web Application Firewall (WAF).
   * 
   * @param request - ModifyUserWafLogStatusRequest
   * @returns ModifyUserWafLogStatusResponse
   */
  async modifyUserWafLogStatus(request: $_model.ModifyUserWafLogStatusRequest): Promise<$_model.ModifyUserWafLogStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUserWafLogStatusWithOptions(request, runtime);
  }

  /**
   * Re-adds a cloud product to Web Application Firewall (WAF) to restore protection after a cloud product access failure.
   * 
   * @param request - ReCreateCloudResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReCreateCloudResourceResponse
   */
  async reCreateCloudResourceWithOptions(request: $_model.ReCreateCloudResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReCreateCloudResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cloudResourceId)) {
      query["CloudResourceId"] = request.cloudResourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceInstanceId)) {
      query["ResourceInstanceId"] = request.resourceInstanceId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resourceProduct)) {
      query["ResourceProduct"] = request.resourceProduct;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReCreateCloudResource",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReCreateCloudResourceResponse>(await this.callApi(params, req, runtime), new $_model.ReCreateCloudResourceResponse({}));
  }

  /**
   * Re-adds a cloud product to Web Application Firewall (WAF) to restore protection after a cloud product access failure.
   * 
   * @param request - ReCreateCloudResourceRequest
   * @returns ReCreateCloudResourceResponse
   */
  async reCreateCloudResource(request: $_model.ReCreateCloudResourceRequest): Promise<$_model.ReCreateCloudResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reCreateCloudResourceWithOptions(request, runtime);
  }

  /**
   * Releases a Web Application Firewall (WAF) 3.0 instance.
   * 
   * @param request - ReleaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstanceResponse
   */
  async releaseInstanceWithOptions(request: $_model.ReleaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseInstance",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseInstanceResponse({}));
  }

  /**
   * Releases a Web Application Firewall (WAF) 3.0 instance.
   * 
   * @param request - ReleaseInstanceRequest
   * @returns ReleaseInstanceResponse
   */
  async releaseInstance(request: $_model.ReleaseInstanceRequest): Promise<$_model.ReleaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  /**
   * Synchronizes Elastic Compute Service (ECS), Classic Load Balancer (CLB), and Network Load Balancer (NLB) instances to Web Application Firewall (WAF).
   * 
   * @remarks
   * After you call this operation, the system performs the synchronization asynchronously. You can call the [DescribeProductInstances](https://help.aliyun.com/document_detail/2743168.html) operation to query the synchronization result.
   * 
   * @param request - SyncProductInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncProductInstanceResponse
   */
  async syncProductInstanceWithOptions(request: $_model.SyncProductInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncProductInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncProductInstance",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncProductInstanceResponse>(await this.callApi(params, req, runtime), new $_model.SyncProductInstanceResponse({}));
  }

  /**
   * Synchronizes Elastic Compute Service (ECS), Classic Load Balancer (CLB), and Network Load Balancer (NLB) instances to Web Application Firewall (WAF).
   * 
   * @remarks
   * After you call this operation, the system performs the synchronization asynchronously. You can call the [DescribeProductInstances](https://help.aliyun.com/document_detail/2743168.html) operation to query the synchronization result.
   * 
   * @param request - SyncProductInstanceRequest
   * @returns SyncProductInstanceResponse
   */
  async syncProductInstance(request: $_model.SyncProductInstanceRequest): Promise<$_model.SyncProductInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncProductInstanceWithOptions(request, runtime);
  }

  /**
   * Adds tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "TagResources",
      version: "2021-10-01",
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
   * Adds tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from resources and then deletes the tags.
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2021-10-01",
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
   * Removes tags from resources and then deletes the tags.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Verifies that you own the specified domain name. Domain ownership must be verified before you can add a domain name to Web Application Firewall (WAF) by using CNAME access.
   * 
   * @param request - VerifyDomainOwnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyDomainOwnerResponse
   */
  async verifyDomainOwnerWithOptions(request: $_model.VerifyDomainOwnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyDomainOwnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.verifyType)) {
      query["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyDomainOwner",
      version: "2021-10-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyDomainOwnerResponse>(await this.callApi(params, req, runtime), new $_model.VerifyDomainOwnerResponse({}));
  }

  /**
   * Verifies that you own the specified domain name. Domain ownership must be verified before you can add a domain name to Web Application Firewall (WAF) by using CNAME access.
   * 
   * @param request - VerifyDomainOwnerRequest
   * @returns VerifyDomainOwnerResponse
   */
  async verifyDomainOwner(request: $_model.VerifyDomainOwnerRequest): Promise<$_model.VerifyDomainOwnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyDomainOwnerWithOptions(request, runtime);
  }

}
