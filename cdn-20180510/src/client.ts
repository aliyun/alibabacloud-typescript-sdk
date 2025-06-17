// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'ap-northeast-1': "cdn.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "cdn.ap-southeast-1.aliyuncs.com",
      'ap-southeast-1': "cdn.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "cdn.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "cdn.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "cdn.ap-southeast-1.aliyuncs.com",
      'eu-central-1': "cdn.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "cdn.ap-southeast-1.aliyuncs.com",
      'me-east-1': "cdn.ap-southeast-1.aliyuncs.com",
      'us-east-1': "cdn.ap-southeast-1.aliyuncs.com",
      'us-west-1': "cdn.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cdn", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a domain name to accelerate.
   * 
   * @remarks
   *   You must activate Alibaba Cloud CDN before you can add a domain name to it. For more information, see [Activate Alibaba Cloud CDN](https://help.aliyun.com/document_detail/27272.html).
   * *   The domain name that you want to add has a valid Internet Content Provider (ICP) number.
   * *   You can add only one domain name to Alibaba Cloud CDN in each call. Each Alibaba Cloud account can add a maximum of 50 domain names to Alibaba Cloud CDN.
   * *   If the content of the origin server is not stored on Alibaba Cloud, the content must be reviewed. The review will be completed by the end of the next business day after you submit the application.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - AddCdnDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCdnDomainResponse
   */
  async addCdnDomainWithOptions(request: $_model.AddCdnDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddCdnDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdnType)) {
      query["CdnType"] = request.cdnType;
    }

    if (!$dara.isNull(request.checkUrl)) {
      query["CheckUrl"] = request.checkUrl;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCdnDomainResponse>(await this.callApi(params, req, runtime), new $_model.AddCdnDomainResponse({}));
  }

  /**
   * Adds a domain name to accelerate.
   * 
   * @remarks
   *   You must activate Alibaba Cloud CDN before you can add a domain name to it. For more information, see [Activate Alibaba Cloud CDN](https://help.aliyun.com/document_detail/27272.html).
   * *   The domain name that you want to add has a valid Internet Content Provider (ICP) number.
   * *   You can add only one domain name to Alibaba Cloud CDN in each call. Each Alibaba Cloud account can add a maximum of 50 domain names to Alibaba Cloud CDN.
   * *   If the content of the origin server is not stored on Alibaba Cloud, the content must be reviewed. The review will be completed by the end of the next business day after you submit the application.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - AddCdnDomainRequest
   * @returns AddCdnDomainResponse
   */
  async addCdnDomain(request: $_model.AddCdnDomainRequest): Promise<$_model.AddCdnDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCdnDomainWithOptions(request, runtime);
  }

  /**
   * Adds a Function Compute trigger.
   * 
   * @param request - AddFCTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFCTriggerResponse
   */
  async addFCTriggerWithOptions(request: $_model.AddFCTriggerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFCTriggerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.triggerARN)) {
      query["TriggerARN"] = request.triggerARN;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eventMetaName)) {
      body["EventMetaName"] = request.eventMetaName;
    }

    if (!$dara.isNull(request.eventMetaVersion)) {
      body["EventMetaVersion"] = request.eventMetaVersion;
    }

    if (!$dara.isNull(request.functionARN)) {
      body["FunctionARN"] = request.functionARN;
    }

    if (!$dara.isNull(request.notes)) {
      body["Notes"] = request.notes;
    }

    if (!$dara.isNull(request.roleARN)) {
      body["RoleARN"] = request.roleARN;
    }

    if (!$dara.isNull(request.sourceARN)) {
      body["SourceARN"] = request.sourceARN;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFCTrigger",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFCTriggerResponse>(await this.callApi(params, req, runtime), new $_model.AddFCTriggerResponse({}));
  }

  /**
   * Adds a Function Compute trigger.
   * 
   * @param request - AddFCTriggerRequest
   * @returns AddFCTriggerResponse
   */
  async addFCTrigger(request: $_model.AddFCTriggerRequest): Promise<$_model.AddFCTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFCTriggerWithOptions(request, runtime);
  }

  /**
   * Adds one or more domain names to Alibaba Cloud CDN. You can add a maximum of 50 domain names at a time.
   * 
   * @remarks
   *   You must activate Alibaba Cloud CDN before you can add a domain name to it. For more information, see [Activate Alibaba Cloud CDN](https://help.aliyun.com/document_detail/27272.html).
   * *   If the acceleration region is Chinese Mainland Only or Global, you must apply for an ICP filing for the domain name.
   * *   You can specify multiple domain names and separate them with commas (,). You can specify at most 50 domain names in each call.
   * *   For more information, see [Add a domain name](https://help.aliyun.com/document_detail/122181.html).
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - BatchAddCdnDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchAddCdnDomainResponse
   */
  async batchAddCdnDomainWithOptions(request: $_model.BatchAddCdnDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchAddCdnDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdnType)) {
      query["CdnType"] = request.cdnType;
    }

    if (!$dara.isNull(request.checkUrl)) {
      query["CheckUrl"] = request.checkUrl;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!$dara.isNull(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchAddCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchAddCdnDomainResponse>(await this.callApi(params, req, runtime), new $_model.BatchAddCdnDomainResponse({}));
  }

  /**
   * Adds one or more domain names to Alibaba Cloud CDN. You can add a maximum of 50 domain names at a time.
   * 
   * @remarks
   *   You must activate Alibaba Cloud CDN before you can add a domain name to it. For more information, see [Activate Alibaba Cloud CDN](https://help.aliyun.com/document_detail/27272.html).
   * *   If the acceleration region is Chinese Mainland Only or Global, you must apply for an ICP filing for the domain name.
   * *   You can specify multiple domain names and separate them with commas (,). You can specify at most 50 domain names in each call.
   * *   For more information, see [Add a domain name](https://help.aliyun.com/document_detail/122181.html).
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - BatchAddCdnDomainRequest
   * @returns BatchAddCdnDomainResponse
   */
  async batchAddCdnDomain(request: $_model.BatchAddCdnDomainRequest): Promise<$_model.BatchAddCdnDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchAddCdnDomainWithOptions(request, runtime);
  }

  /**
   * Deletes configurations of multiple accelerated domain names at a time.
   * 
   * @remarks
   *   You can specify up to 50 domain names in each request.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - BatchDeleteCdnDomainConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteCdnDomainConfigResponse
   */
  async batchDeleteCdnDomainConfigWithOptions(request: $_model.BatchDeleteCdnDomainConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteCdnDomainConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteCdnDomainConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteCdnDomainConfigResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteCdnDomainConfigResponse({}));
  }

  /**
   * Deletes configurations of multiple accelerated domain names at a time.
   * 
   * @remarks
   *   You can specify up to 50 domain names in each request.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - BatchDeleteCdnDomainConfigRequest
   * @returns BatchDeleteCdnDomainConfigResponse
   */
  async batchDeleteCdnDomainConfig(request: $_model.BatchDeleteCdnDomainConfigRequest): Promise<$_model.BatchDeleteCdnDomainConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteCdnDomainConfigWithOptions(request, runtime);
  }

  /**
   * Queries whether one or more IP addresses are assigned to Alibaba Cloud CDN.
   * 
   * @remarks
   * >The maximum number of times that each user can call this operation per second is 20.
   * 
   * @param request - BatchDescribeCdnIpInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDescribeCdnIpInfoResponse
   */
  async batchDescribeCdnIpInfoWithOptions(request: $_model.BatchDescribeCdnIpInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDescribeCdnIpInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipAddrList)) {
      query["IpAddrList"] = request.ipAddrList;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDescribeCdnIpInfo",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDescribeCdnIpInfoResponse>(await this.callApi(params, req, runtime), new $_model.BatchDescribeCdnIpInfoResponse({}));
  }

  /**
   * Queries whether one or more IP addresses are assigned to Alibaba Cloud CDN.
   * 
   * @remarks
   * >The maximum number of times that each user can call this operation per second is 20.
   * 
   * @param request - BatchDescribeCdnIpInfoRequest
   * @returns BatchDescribeCdnIpInfoResponse
   */
  async batchDescribeCdnIpInfo(request: $_model.BatchDescribeCdnIpInfoRequest): Promise<$_model.BatchDescribeCdnIpInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDescribeCdnIpInfoWithOptions(request, runtime);
  }

  /**
   * Configures multiple accelerated domain names at a time.
   * 
   * @remarks
   *   You can call this operation up to 30 times per second per account.
   * *   You can specify multiple domain names and must separate them with commas (,). You can specify up to 50 domain names in each call.
   * *   If the BatchSetCdnDomainConfig operation is successful, a unique configuration ID (ConfigId) is generated. You can use configuration IDs to update or delete configurations. For more information, see [Usage notes on ConfigId](https://help.aliyun.com/document_detail/388994.html).
   * 
   * @param request - BatchSetCdnDomainConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSetCdnDomainConfigResponse
   */
  async batchSetCdnDomainConfigWithOptions(request: $_model.BatchSetCdnDomainConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchSetCdnDomainConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.functions)) {
      query["Functions"] = request.functions;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchSetCdnDomainConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchSetCdnDomainConfigResponse>(await this.callApi(params, req, runtime), new $_model.BatchSetCdnDomainConfigResponse({}));
  }

  /**
   * Configures multiple accelerated domain names at a time.
   * 
   * @remarks
   *   You can call this operation up to 30 times per second per account.
   * *   You can specify multiple domain names and must separate them with commas (,). You can specify up to 50 domain names in each call.
   * *   If the BatchSetCdnDomainConfig operation is successful, a unique configuration ID (ConfigId) is generated. You can use configuration IDs to update or delete configurations. For more information, see [Usage notes on ConfigId](https://help.aliyun.com/document_detail/388994.html).
   * 
   * @param request - BatchSetCdnDomainConfigRequest
   * @returns BatchSetCdnDomainConfigResponse
   */
  async batchSetCdnDomainConfig(request: $_model.BatchSetCdnDomainConfigRequest): Promise<$_model.BatchSetCdnDomainConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchSetCdnDomainConfigWithOptions(request, runtime);
  }

  /**
   * 批量配置多个域名的灰度动态功能
   * 
   * @param request - BatchSetGrayDomainFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSetGrayDomainFunctionResponse
   */
  async batchSetGrayDomainFunctionWithOptions(request: $_model.BatchSetGrayDomainFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchSetGrayDomainFunctionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configs)) {
      body["Configs"] = request.configs;
    }

    if (!$dara.isNull(request.domainNames)) {
      body["DomainNames"] = request.domainNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchSetGrayDomainFunction",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchSetGrayDomainFunctionResponse>(await this.callApi(params, req, runtime), new $_model.BatchSetGrayDomainFunctionResponse({}));
  }

  /**
   * 批量配置多个域名的灰度动态功能
   * 
   * @param request - BatchSetGrayDomainFunctionRequest
   * @returns BatchSetGrayDomainFunctionResponse
   */
  async batchSetGrayDomainFunction(request: $_model.BatchSetGrayDomainFunctionRequest): Promise<$_model.BatchSetGrayDomainFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchSetGrayDomainFunctionWithOptions(request, runtime);
  }

  /**
   * Enables one or more domain names at a time. After a domain name is enabled, the value of the DomainStatus parameter is changed to Online.
   * 
   * @remarks
   *   If a domain name specified in the request is in an invalid state or your account has an overdue payment, the domain name cannot be enabled.
   * *   You can call this operation up to 30 times per second per account.
   * *   You can specify up to 50 domain names in each request.
   * 
   * @param request - BatchStartCdnDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchStartCdnDomainResponse
   */
  async batchStartCdnDomainWithOptions(request: $_model.BatchStartCdnDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchStartCdnDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchStartCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchStartCdnDomainResponse>(await this.callApi(params, req, runtime), new $_model.BatchStartCdnDomainResponse({}));
  }

  /**
   * Enables one or more domain names at a time. After a domain name is enabled, the value of the DomainStatus parameter is changed to Online.
   * 
   * @remarks
   *   If a domain name specified in the request is in an invalid state or your account has an overdue payment, the domain name cannot be enabled.
   * *   You can call this operation up to 30 times per second per account.
   * *   You can specify up to 50 domain names in each request.
   * 
   * @param request - BatchStartCdnDomainRequest
   * @returns BatchStartCdnDomainResponse
   */
  async batchStartCdnDomain(request: $_model.BatchStartCdnDomainRequest): Promise<$_model.BatchStartCdnDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchStartCdnDomainWithOptions(request, runtime);
  }

  /**
   * Disables one or more accelerated domain names at a time. After an accelerated domain name is disabled, the value of the DomainStatus parameter is changed to Offline.
   * 
   * @remarks
   *   After an accelerated domain name is disabled, Alibaba Cloud CDN retains its information and reroutes all the requests that are destined for the accelerated domain name to the origin.
   * *   If you need to temporarily disable CDN acceleration for a domain name, we recommend that you call the StopDomain operation.
   * *   You can call this operation up to 30 times per second per account.
   * *   You can specify up to 50 domain names in each request.
   * 
   * @param request - BatchStopCdnDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchStopCdnDomainResponse
   */
  async batchStopCdnDomainWithOptions(request: $_model.BatchStopCdnDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchStopCdnDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchStopCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchStopCdnDomainResponse>(await this.callApi(params, req, runtime), new $_model.BatchStopCdnDomainResponse({}));
  }

  /**
   * Disables one or more accelerated domain names at a time. After an accelerated domain name is disabled, the value of the DomainStatus parameter is changed to Offline.
   * 
   * @remarks
   *   After an accelerated domain name is disabled, Alibaba Cloud CDN retains its information and reroutes all the requests that are destined for the accelerated domain name to the origin.
   * *   If you need to temporarily disable CDN acceleration for a domain name, we recommend that you call the StopDomain operation.
   * *   You can call this operation up to 30 times per second per account.
   * *   You can specify up to 50 domain names in each request.
   * 
   * @param request - BatchStopCdnDomainRequest
   * @returns BatchStopCdnDomainResponse
   */
  async batchStopCdnDomain(request: $_model.BatchStopCdnDomainRequest): Promise<$_model.BatchStopCdnDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchStopCdnDomainWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of multiple accelerated domain names at a time.
   * 
   * @remarks
   *   You can call this operation up to 30 times per second per account.
   * *   You can specify up to 50 domain names in each request. Separate multiple domain names with commas (,).
   * 
   * @param request - BatchUpdateCdnDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUpdateCdnDomainResponse
   */
  async batchUpdateCdnDomainWithOptions(request: $_model.BatchUpdateCdnDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUpdateCdnDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!$dara.isNull(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUpdateCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchUpdateCdnDomainResponse>(await this.callApi(params, req, runtime), new $_model.BatchUpdateCdnDomainResponse({}));
  }

  /**
   * Updates the configurations of multiple accelerated domain names at a time.
   * 
   * @remarks
   *   You can call this operation up to 30 times per second per account.
   * *   You can specify up to 50 domain names in each request. Separate multiple domain names with commas (,).
   * 
   * @param request - BatchUpdateCdnDomainRequest
   * @returns BatchUpdateCdnDomainResponse
   */
  async batchUpdateCdnDomain(request: $_model.BatchUpdateCdnDomainRequest): Promise<$_model.BatchUpdateCdnDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUpdateCdnDomainWithOptions(request, runtime);
  }

  /**
   * Registers the dynamic routing feature of Dynamic Content Delivery Network (DCDN) for an Alibaba Cloud CDN-accelerated domain name. After the registration is successful, the routing center generates the dynamic routing information and send it to DCDN points of presence (POPs). This is a prerequisite for you to transfer a domain name from Alibaba Cloud CDN to DCDN.
   * 
   * @param request - CdnMigrateRegisterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CdnMigrateRegisterResponse
   */
  async cdnMigrateRegisterWithOptions(request: $_model.CdnMigrateRegisterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CdnMigrateRegisterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CdnMigrateRegister",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CdnMigrateRegisterResponse>(await this.callApi(params, req, runtime), new $_model.CdnMigrateRegisterResponse({}));
  }

  /**
   * Registers the dynamic routing feature of Dynamic Content Delivery Network (DCDN) for an Alibaba Cloud CDN-accelerated domain name. After the registration is successful, the routing center generates the dynamic routing information and send it to DCDN points of presence (POPs). This is a prerequisite for you to transfer a domain name from Alibaba Cloud CDN to DCDN.
   * 
   * @param request - CdnMigrateRegisterRequest
   * @returns CdnMigrateRegisterResponse
   */
  async cdnMigrateRegister(request: $_model.CdnMigrateRegisterRequest): Promise<$_model.CdnMigrateRegisterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cdnMigrateRegisterWithOptions(request, runtime);
  }

  /**
   * Transfer a domain name from Alibaba Cloud CDN to DCDN.
   * 
   * @param request - ChangeCdnDomainToDcdnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeCdnDomainToDcdnResponse
   */
  async changeCdnDomainToDcdnWithOptions(request: $_model.ChangeCdnDomainToDcdnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeCdnDomainToDcdnResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeCdnDomainToDcdn",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeCdnDomainToDcdnResponse>(await this.callApi(params, req, runtime), new $_model.ChangeCdnDomainToDcdnResponse({}));
  }

  /**
   * Transfer a domain name from Alibaba Cloud CDN to DCDN.
   * 
   * @param request - ChangeCdnDomainToDcdnRequest
   * @returns ChangeCdnDomainToDcdnResponse
   */
  async changeCdnDomainToDcdn(request: $_model.ChangeCdnDomainToDcdnRequest): Promise<$_model.ChangeCdnDomainToDcdnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeCdnDomainToDcdnWithOptions(request, runtime);
  }

  /**
   * Checks whether a domain name exists.
   * 
   * @param request - CheckCdnDomainExistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCdnDomainExistResponse
   */
  async checkCdnDomainExistWithOptions(request: $_model.CheckCdnDomainExistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckCdnDomainExistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckCdnDomainExist",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckCdnDomainExistResponse>(await this.callApi(params, req, runtime), new $_model.CheckCdnDomainExistResponse({}));
  }

  /**
   * Checks whether a domain name exists.
   * 
   * @param request - CheckCdnDomainExistRequest
   * @returns CheckCdnDomainExistResponse
   */
  async checkCdnDomainExist(request: $_model.CheckCdnDomainExistRequest): Promise<$_model.CheckCdnDomainExistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkCdnDomainExistWithOptions(request, runtime);
  }

  /**
   * Checks whether an ICP filing is obtained for the domain name.
   * 
   * @param request - CheckCdnDomainICPRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCdnDomainICPResponse
   */
  async checkCdnDomainICPWithOptions(request: $_model.CheckCdnDomainICPRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckCdnDomainICPResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckCdnDomainICP",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckCdnDomainICPResponse>(await this.callApi(params, req, runtime), new $_model.CheckCdnDomainICPResponse({}));
  }

  /**
   * Checks whether an ICP filing is obtained for the domain name.
   * 
   * @param request - CheckCdnDomainICPRequest
   * @returns CheckCdnDomainICPResponse
   */
  async checkCdnDomainICP(request: $_model.CheckCdnDomainICPRequest): Promise<$_model.CheckCdnDomainICPResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkCdnDomainICPWithOptions(request, runtime);
  }

  /**
   * Creates a certificate signing request (CSR).
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateCdnCertificateSigningRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCdnCertificateSigningRequestResponse
   */
  async createCdnCertificateSigningRequestWithOptions(request: $_model.CreateCdnCertificateSigningRequestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCdnCertificateSigningRequestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!$dara.isNull(request.organizationUnit)) {
      query["OrganizationUnit"] = request.organizationUnit;
    }

    if (!$dara.isNull(request.SANs)) {
      query["SANs"] = request.SANs;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCdnCertificateSigningRequest",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCdnCertificateSigningRequestResponse>(await this.callApi(params, req, runtime), new $_model.CreateCdnCertificateSigningRequestResponse({}));
  }

  /**
   * Creates a certificate signing request (CSR).
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateCdnCertificateSigningRequestRequest
   * @returns CreateCdnCertificateSigningRequestResponse
   */
  async createCdnCertificateSigningRequest(request: $_model.CreateCdnCertificateSigningRequestRequest): Promise<$_model.CreateCdnCertificateSigningRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCdnCertificateSigningRequestWithOptions(request, runtime);
  }

  /**
   * Creates a tracking task. After you create a tracking task, the system sends operations reports to you by email on a regular basis.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - CreateCdnDeliverTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCdnDeliverTaskResponse
   */
  async createCdnDeliverTaskWithOptions(request: $_model.CreateCdnDeliverTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCdnDeliverTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deliver)) {
      body["Deliver"] = request.deliver;
    }

    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.reports)) {
      body["Reports"] = request.reports;
    }

    if (!$dara.isNull(request.schedule)) {
      body["Schedule"] = request.schedule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCdnDeliverTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCdnDeliverTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateCdnDeliverTaskResponse({}));
  }

  /**
   * Creates a tracking task. After you create a tracking task, the system sends operations reports to you by email on a regular basis.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - CreateCdnDeliverTaskRequest
   * @returns CreateCdnDeliverTaskResponse
   */
  async createCdnDeliverTask(request: $_model.CreateCdnDeliverTaskRequest): Promise<$_model.CreateCdnDeliverTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCdnDeliverTaskWithOptions(request, runtime);
  }

  /**
   * Creates a custom operations report.
   * 
   * @remarks
   *   This operation allows you to create a custom operations report for a specific domain name. You can view the statistics about the domain name in the report.
   * *   You can call this operation up to three times per second per account.
   * 
   * @param request - CreateCdnSubTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCdnSubTaskResponse
   */
  async createCdnSubTaskWithOptions(request: $_model.CreateCdnSubTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCdnSubTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.reportIds)) {
      body["ReportIds"] = request.reportIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCdnSubTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCdnSubTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateCdnSubTaskResponse({}));
  }

  /**
   * Creates a custom operations report.
   * 
   * @remarks
   *   This operation allows you to create a custom operations report for a specific domain name. You can view the statistics about the domain name in the report.
   * *   You can call this operation up to three times per second per account.
   * 
   * @param request - CreateCdnSubTaskRequest
   * @returns CreateCdnSubTaskResponse
   */
  async createCdnSubTask(request: $_model.CreateCdnSubTaskRequest): Promise<$_model.CreateCdnSubTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCdnSubTaskWithOptions(request, runtime);
  }

  /**
   * Enables real-time log delivery for specific accelerated domain names.
   * 
   * @remarks
   * >  You can call this API operation up to 100 times per second per account.
   * 
   * @param request - CreateRealTimeLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRealTimeLogDeliveryResponse
   */
  async createRealTimeLogDeliveryWithOptions(request: $_model.CreateRealTimeLogDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRealTimeLogDeliveryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRealTimeLogDelivery",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRealTimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.CreateRealTimeLogDeliveryResponse({}));
  }

  /**
   * Enables real-time log delivery for specific accelerated domain names.
   * 
   * @remarks
   * >  You can call this API operation up to 100 times per second per account.
   * 
   * @param request - CreateRealTimeLogDeliveryRequest
   * @returns CreateRealTimeLogDeliveryResponse
   */
  async createRealTimeLogDelivery(request: $_model.CreateRealTimeLogDeliveryRequest): Promise<$_model.CreateRealTimeLogDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRealTimeLogDeliveryWithOptions(request, runtime);
  }

  /**
   * Creates a task to export resource usage details to an Excel file.
   * 
   * @remarks
   *   You can create a task to query data in the last year. The maximum time range that can be queried is one month.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateUsageDetailDataExportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUsageDetailDataExportTaskResponse
   */
  async createUsageDetailDataExportTaskWithOptions(request: $_model.CreateUsageDetailDataExportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUsageDetailDataExportTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUsageDetailDataExportTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUsageDetailDataExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateUsageDetailDataExportTaskResponse({}));
  }

  /**
   * Creates a task to export resource usage details to an Excel file.
   * 
   * @remarks
   *   You can create a task to query data in the last year. The maximum time range that can be queried is one month.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateUsageDetailDataExportTaskRequest
   * @returns CreateUsageDetailDataExportTaskResponse
   */
  async createUsageDetailDataExportTask(request: $_model.CreateUsageDetailDataExportTaskRequest): Promise<$_model.CreateUsageDetailDataExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUsageDetailDataExportTaskWithOptions(request, runtime);
  }

  /**
   * Creates a task to export your resource usage history to a PDF file.
   * 
   * @remarks
   *   You can create a task to query data in the last year. The maximum time range that can be queried is one month.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateUserUsageDataExportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserUsageDataExportTaskResponse
   */
  async createUserUsageDataExportTaskWithOptions(request: $_model.CreateUserUsageDataExportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserUsageDataExportTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserUsageDataExportTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserUsageDataExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserUsageDataExportTaskResponse({}));
  }

  /**
   * Creates a task to export your resource usage history to a PDF file.
   * 
   * @remarks
   *   You can create a task to query data in the last year. The maximum time range that can be queried is one month.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateUserUsageDataExportTaskRequest
   * @returns CreateUserUsageDataExportTaskResponse
   */
  async createUserUsageDataExportTask(request: $_model.CreateUserUsageDataExportTaskRequest): Promise<$_model.CreateUserUsageDataExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserUsageDataExportTaskWithOptions(request, runtime);
  }

  /**
   * Deletes tracking tasks by task ID.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - DeleteCdnDeliverTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCdnDeliverTaskResponse
   */
  async deleteCdnDeliverTaskWithOptions(request: $_model.DeleteCdnDeliverTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCdnDeliverTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliverId)) {
      query["DeliverId"] = request.deliverId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCdnDeliverTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCdnDeliverTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCdnDeliverTaskResponse({}));
  }

  /**
   * Deletes tracking tasks by task ID.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - DeleteCdnDeliverTaskRequest
   * @returns DeleteCdnDeliverTaskResponse
   */
  async deleteCdnDeliverTask(request: $_model.DeleteCdnDeliverTaskRequest): Promise<$_model.DeleteCdnDeliverTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCdnDeliverTaskWithOptions(request, runtime);
  }

  /**
   * Removes an accelerated domain name from Alibaba Cloud CDN.
   * 
   * @remarks
   *   We recommend that you add an A record for the domain name in the system of your DNS service provider before you remove the domain name from Alibaba Cloud CDN. Otherwise, the domain name may become inaccessible. Proceed with caution.
   * *   After you successfully call the DeleteCdnDomain operation, all records of the removed domain name are deleted. If you need to only disable the domain name, we recommend that you call the StopCdnDomain operation.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DeleteCdnDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCdnDomainResponse
   */
  async deleteCdnDomainWithOptions(request: $_model.DeleteCdnDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCdnDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCdnDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCdnDomainResponse({}));
  }

  /**
   * Removes an accelerated domain name from Alibaba Cloud CDN.
   * 
   * @remarks
   *   We recommend that you add an A record for the domain name in the system of your DNS service provider before you remove the domain name from Alibaba Cloud CDN. Otherwise, the domain name may become inaccessible. Proceed with caution.
   * *   After you successfully call the DeleteCdnDomain operation, all records of the removed domain name are deleted. If you need to only disable the domain name, we recommend that you call the StopCdnDomain operation.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DeleteCdnDomainRequest
   * @returns DeleteCdnDomainResponse
   */
  async deleteCdnDomain(request: $_model.DeleteCdnDomainRequest): Promise<$_model.DeleteCdnDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCdnDomainWithOptions(request, runtime);
  }

  /**
   * The ID of the request.
   * 
   * @remarks
   * >  You can call this API operation up to three times per second per account.
   * 
   * @param request - DeleteCdnSubTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCdnSubTaskResponse
   */
  async deleteCdnSubTaskWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCdnSubTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCdnSubTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCdnSubTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCdnSubTaskResponse({}));
  }

  /**
   * The ID of the request.
   * 
   * @remarks
   * >  You can call this API operation up to three times per second per account.
   * @returns DeleteCdnSubTaskResponse
   */
  async deleteCdnSubTask(): Promise<$_model.DeleteCdnSubTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCdnSubTaskWithOptions(runtime);
  }

  /**
   * A客户定制实时日志删除接口
   * 
   * @param request - DeleteCustomDomainSampleRateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomDomainSampleRateResponse
   */
  async deleteCustomDomainSampleRateWithOptions(request: $_model.DeleteCustomDomainSampleRateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomDomainSampleRateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainNames)) {
      body["DomainNames"] = request.domainNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomDomainSampleRate",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomDomainSampleRateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomDomainSampleRateResponse({}));
  }

  /**
   * A客户定制实时日志删除接口
   * 
   * @param request - DeleteCustomDomainSampleRateRequest
   * @returns DeleteCustomDomainSampleRateResponse
   */
  async deleteCustomDomainSampleRate(request: $_model.DeleteCustomDomainSampleRateRequest): Promise<$_model.DeleteCustomDomainSampleRateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomDomainSampleRateWithOptions(request, runtime);
  }

  /**
   * Deletes a specified Function Compute trigger.
   * 
   * @param request - DeleteFCTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFCTriggerResponse
   */
  async deleteFCTriggerWithOptions(request: $_model.DeleteFCTriggerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFCTriggerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.triggerARN)) {
      query["TriggerARN"] = request.triggerARN;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFCTrigger",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFCTriggerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFCTriggerResponse({}));
  }

  /**
   * Deletes a specified Function Compute trigger.
   * 
   * @param request - DeleteFCTriggerRequest
   * @returns DeleteFCTriggerResponse
   */
  async deleteFCTrigger(request: $_model.DeleteFCTriggerRequest): Promise<$_model.DeleteFCTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFCTriggerWithOptions(request, runtime);
  }

  /**
   * Deletes the Logstore that is used by a specified configuration record of real-time log delivery.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteRealTimeLogLogstoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRealTimeLogLogstoreResponse
   */
  async deleteRealTimeLogLogstoreWithOptions(request: $_model.DeleteRealTimeLogLogstoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRealTimeLogLogstoreResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRealTimeLogLogstore",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRealTimeLogLogstoreResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRealTimeLogLogstoreResponse({}));
  }

  /**
   * Deletes the Logstore that is used by a specified configuration record of real-time log delivery.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteRealTimeLogLogstoreRequest
   * @returns DeleteRealTimeLogLogstoreResponse
   */
  async deleteRealTimeLogLogstore(request: $_model.DeleteRealTimeLogLogstoreRequest): Promise<$_model.DeleteRealTimeLogLogstoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRealTimeLogLogstoreWithOptions(request, runtime);
  }

  /**
   * Deletes the configurations of real-time log delivery for specific accelerated domain names.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteRealtimeLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRealtimeLogDeliveryResponse
   */
  async deleteRealtimeLogDeliveryWithOptions(request: $_model.DeleteRealtimeLogDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRealtimeLogDeliveryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRealtimeLogDelivery",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRealtimeLogDeliveryResponse({}));
  }

  /**
   * Deletes the configurations of real-time log delivery for specific accelerated domain names.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteRealtimeLogDeliveryRequest
   * @returns DeleteRealtimeLogDeliveryResponse
   */
  async deleteRealtimeLogDelivery(request: $_model.DeleteRealtimeLogDeliveryRequest): Promise<$_model.DeleteRealtimeLogDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
   * Deletes specified configurations of an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DeleteSpecificConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSpecificConfigResponse
   */
  async deleteSpecificConfigWithOptions(request: $_model.DeleteSpecificConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSpecificConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSpecificConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSpecificConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSpecificConfigResponse({}));
  }

  /**
   * Deletes specified configurations of an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DeleteSpecificConfigRequest
   * @returns DeleteSpecificConfigResponse
   */
  async deleteSpecificConfig(request: $_model.DeleteSpecificConfigRequest): Promise<$_model.DeleteSpecificConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSpecificConfigWithOptions(request, runtime);
  }

  /**
   * Deletes a specified configuration of the staging environment.
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DeleteSpecificStagingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSpecificStagingConfigResponse
   */
  async deleteSpecificStagingConfigWithOptions(request: $_model.DeleteSpecificStagingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSpecificStagingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSpecificStagingConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSpecificStagingConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSpecificStagingConfigResponse({}));
  }

  /**
   * Deletes a specified configuration of the staging environment.
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DeleteSpecificStagingConfigRequest
   * @returns DeleteSpecificStagingConfigResponse
   */
  async deleteSpecificStagingConfig(request: $_model.DeleteSpecificStagingConfigRequest): Promise<$_model.DeleteSpecificStagingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSpecificStagingConfigWithOptions(request, runtime);
  }

  /**
   * Deletes a task that was used to export usage details.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteUsageDetailDataExportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUsageDetailDataExportTaskResponse
   */
  async deleteUsageDetailDataExportTaskWithOptions(request: $_model.DeleteUsageDetailDataExportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUsageDetailDataExportTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUsageDetailDataExportTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUsageDetailDataExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUsageDetailDataExportTaskResponse({}));
  }

  /**
   * Deletes a task that was used to export usage details.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteUsageDetailDataExportTaskRequest
   * @returns DeleteUsageDetailDataExportTaskResponse
   */
  async deleteUsageDetailDataExportTask(request: $_model.DeleteUsageDetailDataExportTaskRequest): Promise<$_model.DeleteUsageDetailDataExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUsageDetailDataExportTaskWithOptions(request, runtime);
  }

  /**
   * Deletes a task that was used to export usage history.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteUserUsageDataExportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserUsageDataExportTaskResponse
   */
  async deleteUserUsageDataExportTaskWithOptions(request: $_model.DeleteUserUsageDataExportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserUsageDataExportTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserUsageDataExportTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserUsageDataExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserUsageDataExportTaskResponse({}));
  }

  /**
   * Deletes a task that was used to export usage history.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteUserUsageDataExportTaskRequest
   * @returns DeleteUserUsageDataExportTaskResponse
   */
  async deleteUserUsageDataExportTask(request: $_model.DeleteUserUsageDataExportTaskRequest): Promise<$_model.DeleteUserUsageDataExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserUsageDataExportTaskWithOptions(request, runtime);
  }

  /**
   * Queries countries and regions that can be added to the blacklist.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeBlockedRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBlockedRegionsResponse
   */
  async describeBlockedRegionsWithOptions(request: $_model.DescribeBlockedRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBlockedRegionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBlockedRegions",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBlockedRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBlockedRegionsResponse({}));
  }

  /**
   * Queries countries and regions that can be added to the blacklist.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeBlockedRegionsRequest
   * @returns DescribeBlockedRegionsResponse
   */
  async describeBlockedRegions(request: $_model.DescribeBlockedRegionsRequest): Promise<$_model.DescribeBlockedRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBlockedRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about an SSL certificate.
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeCdnCertificateDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnCertificateDetailResponse
   */
  async describeCdnCertificateDetailWithOptions(request: $_model.DescribeCdnCertificateDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnCertificateDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnCertificateDetail",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnCertificateDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnCertificateDetailResponse({}));
  }

  /**
   * Queries the detailed information about an SSL certificate.
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeCdnCertificateDetailRequest
   * @returns DescribeCdnCertificateDetailResponse
   */
  async describeCdnCertificateDetail(request: $_model.DescribeCdnCertificateDetailRequest): Promise<$_model.DescribeCdnCertificateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnCertificateDetailWithOptions(request, runtime);
  }

  /**
   * Queries certificate details by certificate ID.
   * 
   * @param request - DescribeCdnCertificateDetailByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnCertificateDetailByIdResponse
   */
  async describeCdnCertificateDetailByIdWithOptions(request: $_model.DescribeCdnCertificateDetailByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnCertificateDetailByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.certRegion)) {
      query["CertRegion"] = request.certRegion;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnCertificateDetailById",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnCertificateDetailByIdResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnCertificateDetailByIdResponse({}));
  }

  /**
   * Queries certificate details by certificate ID.
   * 
   * @param request - DescribeCdnCertificateDetailByIdRequest
   * @returns DescribeCdnCertificateDetailByIdResponse
   */
  async describeCdnCertificateDetailById(request: $_model.DescribeCdnCertificateDetailByIdRequest): Promise<$_model.DescribeCdnCertificateDetailByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnCertificateDetailByIdWithOptions(request, runtime);
  }

  /**
   * Queries the certificates of accelerated domain names.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @deprecated OpenAPI DescribeCdnCertificateList is deprecated, please use Cdn::2018-05-10::DescribeCdnSSLCertificateList instead.
   * 
   * @param request - DescribeCdnCertificateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnCertificateListResponse
   */
  // Deprecated
  async describeCdnCertificateListWithOptions(request: $_model.DescribeCdnCertificateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnCertificateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnCertificateList",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnCertificateListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnCertificateListResponse({}));
  }

  /**
   * Queries the certificates of accelerated domain names.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @deprecated OpenAPI DescribeCdnCertificateList is deprecated, please use Cdn::2018-05-10::DescribeCdnSSLCertificateList instead.
   * 
   * @param request - DescribeCdnCertificateListRequest
   * @returns DescribeCdnCertificateListResponse
   */
  // Deprecated
  async describeCdnCertificateList(request: $_model.DescribeCdnCertificateListRequest): Promise<$_model.DescribeCdnCertificateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnCertificateListWithOptions(request, runtime);
  }

  /**
   * Queries the Internet service provider (ISP), region, and country that are required for advanced conditions.
   * 
   * @param request - DescribeCdnConditionIPBInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnConditionIPBInfoResponse
   */
  async describeCdnConditionIPBInfoWithOptions(request: $_model.DescribeCdnConditionIPBInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnConditionIPBInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnConditionIPBInfo",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnConditionIPBInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnConditionIPBInfoResponse({}));
  }

  /**
   * Queries the Internet service provider (ISP), region, and country that are required for advanced conditions.
   * 
   * @param request - DescribeCdnConditionIPBInfoRequest
   * @returns DescribeCdnConditionIPBInfoResponse
   */
  async describeCdnConditionIPBInfo(request: $_model.DescribeCdnConditionIPBInfoRequest): Promise<$_model.DescribeCdnConditionIPBInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnConditionIPBInfoWithOptions(request, runtime);
  }

  /**
   * Queries the domain names that are deleted from your account.
   * 
   * @remarks
   * > You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeCdnDeletedDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnDeletedDomainsResponse
   */
  async describeCdnDeletedDomainsWithOptions(request: $_model.DescribeCdnDeletedDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnDeletedDomainsResponse> {
    request.validate();
    let query = { };
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
      action: "DescribeCdnDeletedDomains",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnDeletedDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnDeletedDomainsResponse({}));
  }

  /**
   * Queries the domain names that are deleted from your account.
   * 
   * @remarks
   * > You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeCdnDeletedDomainsRequest
   * @returns DescribeCdnDeletedDomainsResponse
   */
  async describeCdnDeletedDomains(request: $_model.DescribeCdnDeletedDomainsRequest): Promise<$_model.DescribeCdnDeletedDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnDeletedDomainsWithOptions(request, runtime);
  }

  /**
   * Queries one or more tracking tasks of operations reports.
   * 
   * @remarks
   * > You can call this operation up to 3 times per second per account.
   * 
   * @param request - DescribeCdnDeliverListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnDeliverListResponse
   */
  async describeCdnDeliverListWithOptions(request: $_model.DescribeCdnDeliverListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnDeliverListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliverId)) {
      query["DeliverId"] = request.deliverId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnDeliverList",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnDeliverListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnDeliverListResponse({}));
  }

  /**
   * Queries one or more tracking tasks of operations reports.
   * 
   * @remarks
   * > You can call this operation up to 3 times per second per account.
   * 
   * @param request - DescribeCdnDeliverListRequest
   * @returns DescribeCdnDeliverListResponse
   */
  async describeCdnDeliverList(request: $_model.DescribeCdnDeliverListRequest): Promise<$_model.DescribeCdnDeliverListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnDeliverListWithOptions(request, runtime);
  }

  /**
   * 天翼定制化小时日志下载接口
   * 
   * @param request - DescribeCdnDomainAtoaLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnDomainAtoaLogsResponse
   */
  async describeCdnDomainAtoaLogsWithOptions(request: $_model.DescribeCdnDomainAtoaLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnDomainAtoaLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnDomainAtoaLogs",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnDomainAtoaLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnDomainAtoaLogsResponse({}));
  }

  /**
   * 天翼定制化小时日志下载接口
   * 
   * @param request - DescribeCdnDomainAtoaLogsRequest
   * @returns DescribeCdnDomainAtoaLogsResponse
   */
  async describeCdnDomainAtoaLogs(request: $_model.DescribeCdnDomainAtoaLogsRequest): Promise<$_model.DescribeCdnDomainAtoaLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnDomainAtoaLogsWithOptions(request, runtime);
  }

  /**
   * Queries accelerated domain names by SSL certificate.
   * 
   * @remarks
   * >  You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeCdnDomainByCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnDomainByCertificateResponse
   */
  async describeCdnDomainByCertificateWithOptions(request: $_model.DescribeCdnDomainByCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnDomainByCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.exact)) {
      query["Exact"] = request.exact;
    }

    if (!$dara.isNull(request.SSLPub)) {
      query["SSLPub"] = request.SSLPub;
    }

    if (!$dara.isNull(request.SSLStatus)) {
      query["SSLStatus"] = request.SSLStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnDomainByCertificate",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnDomainByCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnDomainByCertificateResponse({}));
  }

  /**
   * Queries accelerated domain names by SSL certificate.
   * 
   * @remarks
   * >  You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeCdnDomainByCertificateRequest
   * @returns DescribeCdnDomainByCertificateResponse
   */
  async describeCdnDomainByCertificate(request: $_model.DescribeCdnDomainByCertificateRequest): Promise<$_model.DescribeCdnDomainByCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnDomainByCertificateWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of an accelerated domain name. You can query the configurations of one or more features at the same time.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeCdnDomainConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnDomainConfigsResponse
   */
  async describeCdnDomainConfigsWithOptions(request: $_model.DescribeCdnDomainConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnDomainConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnDomainConfigs",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnDomainConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnDomainConfigsResponse({}));
  }

  /**
   * Queries the configurations of an accelerated domain name. You can query the configurations of one or more features at the same time.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeCdnDomainConfigsRequest
   * @returns DescribeCdnDomainConfigsResponse
   */
  async describeCdnDomainConfigs(request: $_model.DescribeCdnDomainConfigsRequest): Promise<$_model.DescribeCdnDomainConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnDomainConfigsWithOptions(request, runtime);
  }

  /**
   * Queries the basic information about an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeCdnDomainDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnDomainDetailResponse
   */
  async describeCdnDomainDetailWithOptions(request: $_model.DescribeCdnDomainDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnDomainDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnDomainDetail",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnDomainDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnDomainDetailResponse({}));
  }

  /**
   * Queries the basic information about an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeCdnDomainDetailRequest
   * @returns DescribeCdnDomainDetailResponse
   */
  async describeCdnDomainDetail(request: $_model.DescribeCdnDomainDetailRequest): Promise<$_model.DescribeCdnDomainDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnDomainDetailWithOptions(request, runtime);
  }

  /**
   * Queries the address where you can download the log data of a specific domain name.
   * 
   * @remarks
   *   If you do not set **StartTime** or **EndTime**, the request returns the data collected in the last 24 hours. If you set both **StartTime** and **EndTime**, the request returns the data collected within the specified time range.
   * *   The log data is collected every hour.
   * *   You can call this operation up to 100 times per second per account.
   * *   You can query only logs in the last month. The start time and the current time cannot exceed 31 days.
   * 
   * @param request - DescribeCdnDomainLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnDomainLogsResponse
   */
  async describeCdnDomainLogsWithOptions(request: $_model.DescribeCdnDomainLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnDomainLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnDomainLogs",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnDomainLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnDomainLogsResponse({}));
  }

  /**
   * Queries the address where you can download the log data of a specific domain name.
   * 
   * @remarks
   *   If you do not set **StartTime** or **EndTime**, the request returns the data collected in the last 24 hours. If you set both **StartTime** and **EndTime**, the request returns the data collected within the specified time range.
   * *   The log data is collected every hour.
   * *   You can call this operation up to 100 times per second per account.
   * *   You can query only logs in the last month. The start time and the current time cannot exceed 31 days.
   * 
   * @param request - DescribeCdnDomainLogsRequest
   * @returns DescribeCdnDomainLogsResponse
   */
  async describeCdnDomainLogs(request: $_model.DescribeCdnDomainLogsRequest): Promise<$_model.DescribeCdnDomainLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnDomainLogsWithOptions(request, runtime);
  }

  /**
   * 查询离线日志下载地址
   * 
   * @param request - DescribeCdnDomainLogsExTtlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnDomainLogsExTtlResponse
   */
  async describeCdnDomainLogsExTtlWithOptions(request: $_model.DescribeCdnDomainLogsExTtlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnDomainLogsExTtlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnDomainLogsExTtl",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnDomainLogsExTtlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnDomainLogsExTtlResponse({}));
  }

  /**
   * 查询离线日志下载地址
   * 
   * @param request - DescribeCdnDomainLogsExTtlRequest
   * @returns DescribeCdnDomainLogsExTtlResponse
   */
  async describeCdnDomainLogsExTtl(request: $_model.DescribeCdnDomainLogsExTtlRequest): Promise<$_model.DescribeCdnDomainLogsExTtlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnDomainLogsExTtlWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of features in the staging environment.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeCdnDomainStagingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnDomainStagingConfigResponse
   */
  async describeCdnDomainStagingConfigWithOptions(request: $_model.DescribeCdnDomainStagingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnDomainStagingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnDomainStagingConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnDomainStagingConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnDomainStagingConfigResponse({}));
  }

  /**
   * Queries the configurations of features in the staging environment.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeCdnDomainStagingConfigRequest
   * @returns DescribeCdnDomainStagingConfigResponse
   */
  async describeCdnDomainStagingConfig(request: $_model.DescribeCdnDomainStagingConfigRequest): Promise<$_model.DescribeCdnDomainStagingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnDomainStagingConfigWithOptions(request, runtime);
  }

  /**
   * You can call the DescribeCdnFullDomainsBlockIPConfig operation to query the configurations of full blocking.
   * 
   * @remarks
   * > 
   * *   To use this operation,[submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
   * *   If you specify IP addresses or CIDR blocks, IP addresses that are effective and the corresponding expiration time are returned. If you do not specify IP addresses or CIDR blocks, all effective IP addresses and the corresponding expiration time are returned.
   * *   The results are written to OSS and returned as OSS URLs. The content in OSS objects is in the format of IP address-Corresponding expiration time. The expiration time is in the YYYY-MM-DD hh:mm:ss format.
   * *   You can share OSS URLs with others. The shared URLs are valid for three days.
   * 
   * @param request - DescribeCdnFullDomainsBlockIPConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnFullDomainsBlockIPConfigResponse
   */
  async describeCdnFullDomainsBlockIPConfigWithOptions(request: $_model.DescribeCdnFullDomainsBlockIPConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnFullDomainsBlockIPConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.IPList)) {
      body["IPList"] = request.IPList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnFullDomainsBlockIPConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnFullDomainsBlockIPConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnFullDomainsBlockIPConfigResponse({}));
  }

  /**
   * You can call the DescribeCdnFullDomainsBlockIPConfig operation to query the configurations of full blocking.
   * 
   * @remarks
   * > 
   * *   To use this operation,[submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
   * *   If you specify IP addresses or CIDR blocks, IP addresses that are effective and the corresponding expiration time are returned. If you do not specify IP addresses or CIDR blocks, all effective IP addresses and the corresponding expiration time are returned.
   * *   The results are written to OSS and returned as OSS URLs. The content in OSS objects is in the format of IP address-Corresponding expiration time. The expiration time is in the YYYY-MM-DD hh:mm:ss format.
   * *   You can share OSS URLs with others. The shared URLs are valid for three days.
   * 
   * @param request - DescribeCdnFullDomainsBlockIPConfigRequest
   * @returns DescribeCdnFullDomainsBlockIPConfigResponse
   */
  async describeCdnFullDomainsBlockIPConfig(request: $_model.DescribeCdnFullDomainsBlockIPConfigRequest): Promise<$_model.DescribeCdnFullDomainsBlockIPConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnFullDomainsBlockIPConfigWithOptions(request, runtime);
  }

  /**
   * Queries the blocking history.
   * 
   * @remarks
   * > 
   * *   To use this operation, [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
   * *   For a specified IP addresses and time range, the time when the IP address was delivered to the edge and the corresponding result are returned.
   * *   If a specified IP address or CIDR block has multiple blocking records in a specified time range, the records are sorted by delivery time in descending order.
   * *   The maximum time range to query is 90 days.
   * *   If no blocking record exists or delivery fails for the given IP address and time range, the delivery time is empty.
   * 
   * @param request - DescribeCdnFullDomainsBlockIPHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnFullDomainsBlockIPHistoryResponse
   */
  async describeCdnFullDomainsBlockIPHistoryWithOptions(request: $_model.DescribeCdnFullDomainsBlockIPHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnFullDomainsBlockIPHistoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.IPList)) {
      body["IPList"] = request.IPList;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnFullDomainsBlockIPHistory",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnFullDomainsBlockIPHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnFullDomainsBlockIPHistoryResponse({}));
  }

  /**
   * Queries the blocking history.
   * 
   * @remarks
   * > 
   * *   To use this operation, [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
   * *   For a specified IP addresses and time range, the time when the IP address was delivered to the edge and the corresponding result are returned.
   * *   If a specified IP address or CIDR block has multiple blocking records in a specified time range, the records are sorted by delivery time in descending order.
   * *   The maximum time range to query is 90 days.
   * *   If no blocking record exists or delivery fails for the given IP address and time range, the delivery time is empty.
   * 
   * @param request - DescribeCdnFullDomainsBlockIPHistoryRequest
   * @returns DescribeCdnFullDomainsBlockIPHistoryResponse
   */
  async describeCdnFullDomainsBlockIPHistory(request: $_model.DescribeCdnFullDomainsBlockIPHistoryRequest): Promise<$_model.DescribeCdnFullDomainsBlockIPHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnFullDomainsBlockIPHistoryWithOptions(request, runtime);
  }

  /**
   * Queries the information about SSL certificates that belong to your Alibaba Cloud account.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeCdnHttpsDomainListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnHttpsDomainListResponse
   */
  async describeCdnHttpsDomainListWithOptions(request: $_model.DescribeCdnHttpsDomainListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnHttpsDomainListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
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
      action: "DescribeCdnHttpsDomainList",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnHttpsDomainListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnHttpsDomainListResponse({}));
  }

  /**
   * Queries the information about SSL certificates that belong to your Alibaba Cloud account.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeCdnHttpsDomainListRequest
   * @returns DescribeCdnHttpsDomainListResponse
   */
  async describeCdnHttpsDomainList(request: $_model.DescribeCdnHttpsDomainListRequest): Promise<$_model.DescribeCdnHttpsDomainListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnHttpsDomainListWithOptions(request, runtime);
  }

  /**
   * Queries the registration status of the dynamic routing feature of Dynamic Content Delivery Network (DCDN) for a domain name that is added to Alibaba Cloud CDN.
   * 
   * @remarks
   * >  If a domain name is not transferred from Alibaba Cloud CDN to DCDN after it is registered in the routing center of DCDN, the registration information is retained for only one day.
   * 
   * @param request - DescribeCdnMigrateRegisterStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnMigrateRegisterStatusResponse
   */
  async describeCdnMigrateRegisterStatusWithOptions(request: $_model.DescribeCdnMigrateRegisterStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnMigrateRegisterStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnMigrateRegisterStatus",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnMigrateRegisterStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnMigrateRegisterStatusResponse({}));
  }

  /**
   * Queries the registration status of the dynamic routing feature of Dynamic Content Delivery Network (DCDN) for a domain name that is added to Alibaba Cloud CDN.
   * 
   * @remarks
   * >  If a domain name is not transferred from Alibaba Cloud CDN to DCDN after it is registered in the routing center of DCDN, the registration information is retained for only one day.
   * 
   * @param request - DescribeCdnMigrateRegisterStatusRequest
   * @returns DescribeCdnMigrateRegisterStatusResponse
   */
  async describeCdnMigrateRegisterStatus(request: $_model.DescribeCdnMigrateRegisterStatusRequest): Promise<$_model.DescribeCdnMigrateRegisterStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnMigrateRegisterStatusWithOptions(request, runtime);
  }

  /**
   * Queries the code of a commodity by account UID.
   * 
   * @param request - DescribeCdnOrderCommodityCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnOrderCommodityCodeResponse
   */
  async describeCdnOrderCommodityCodeWithOptions(request: $_model.DescribeCdnOrderCommodityCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnOrderCommodityCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnOrderCommodityCode",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnOrderCommodityCodeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnOrderCommodityCodeResponse({}));
  }

  /**
   * Queries the code of a commodity by account UID.
   * 
   * @param request - DescribeCdnOrderCommodityCodeRequest
   * @returns DescribeCdnOrderCommodityCodeResponse
   */
  async describeCdnOrderCommodityCode(request: $_model.DescribeCdnOrderCommodityCodeRequest): Promise<$_model.DescribeCdnOrderCommodityCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnOrderCommodityCodeWithOptions(request, runtime);
  }

  /**
   * Queries Internet service providers (ISPs) and regions that are supported by Alibaba Cloud CDN.
   * 
   * @remarks
   *   The lists of ISPs and regions that are supported by Alibaba Cloud CDN are updated and published on the Alibaba Cloud International site.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeCdnRegionAndIspRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnRegionAndIspResponse
   */
  async describeCdnRegionAndIspWithOptions(request: $_model.DescribeCdnRegionAndIspRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnRegionAndIspResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnRegionAndIsp",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnRegionAndIspResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnRegionAndIspResponse({}));
  }

  /**
   * Queries Internet service providers (ISPs) and regions that are supported by Alibaba Cloud CDN.
   * 
   * @remarks
   *   The lists of ISPs and regions that are supported by Alibaba Cloud CDN are updated and published on the Alibaba Cloud International site.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeCdnRegionAndIspRequest
   * @returns DescribeCdnRegionAndIspResponse
   */
  async describeCdnRegionAndIsp(request: $_model.DescribeCdnRegionAndIspRequest): Promise<$_model.DescribeCdnRegionAndIspResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnRegionAndIspWithOptions(request, runtime);
  }

  /**
   * Queries the content of an operations report.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - DescribeCdnReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnReportResponse
   */
  async describeCdnReportWithOptions(request: $_model.DescribeCdnReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.area)) {
      query["Area"] = request.area;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.httpCode)) {
      query["HttpCode"] = request.httpCode;
    }

    if (!$dara.isNull(request.isOverseas)) {
      query["IsOverseas"] = request.isOverseas;
    }

    if (!$dara.isNull(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnReport",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnReportResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnReportResponse({}));
  }

  /**
   * Queries the content of an operations report.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - DescribeCdnReportRequest
   * @returns DescribeCdnReportResponse
   */
  async describeCdnReport(request: $_model.DescribeCdnReportRequest): Promise<$_model.DescribeCdnReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnReportWithOptions(request, runtime);
  }

  /**
   * Queries operations reports.
   * 
   * @remarks
   *   This operation queries the metadata of all operations reports. The statistics in the reports are not returned.
   * *   You can call this operation up to three times per second per account.
   * 
   * @param request - DescribeCdnReportListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnReportListResponse
   */
  async describeCdnReportListWithOptions(request: $_model.DescribeCdnReportListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnReportListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnReportList",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnReportListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnReportListResponse({}));
  }

  /**
   * Queries operations reports.
   * 
   * @remarks
   *   This operation queries the metadata of all operations reports. The statistics in the reports are not returned.
   * *   You can call this operation up to three times per second per account.
   * 
   * @param request - DescribeCdnReportListRequest
   * @returns DescribeCdnReportListResponse
   */
  async describeCdnReportList(request: $_model.DescribeCdnReportListRequest): Promise<$_model.DescribeCdnReportListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnReportListWithOptions(request, runtime);
  }

  /**
   * Queries the details about a ShangMi (SM) certificate.
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeCdnSMCertificateDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnSMCertificateDetailResponse
   */
  async describeCdnSMCertificateDetailWithOptions(request: $_model.DescribeCdnSMCertificateDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnSMCertificateDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnSMCertificateDetail",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnSMCertificateDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnSMCertificateDetailResponse({}));
  }

  /**
   * Queries the details about a ShangMi (SM) certificate.
   * 
   * @remarks
   * > You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeCdnSMCertificateDetailRequest
   * @returns DescribeCdnSMCertificateDetailResponse
   */
  async describeCdnSMCertificateDetail(request: $_model.DescribeCdnSMCertificateDetailRequest): Promise<$_model.DescribeCdnSMCertificateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnSMCertificateDetailWithOptions(request, runtime);
  }

  /**
   * Queries the ShangMi (SM) certificates of an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeCdnSMCertificateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnSMCertificateListResponse
   */
  async describeCdnSMCertificateListWithOptions(request: $_model.DescribeCdnSMCertificateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnSMCertificateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnSMCertificateList",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnSMCertificateListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnSMCertificateListResponse({}));
  }

  /**
   * Queries the ShangMi (SM) certificates of an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeCdnSMCertificateListRequest
   * @returns DescribeCdnSMCertificateListResponse
   */
  async describeCdnSMCertificateList(request: $_model.DescribeCdnSMCertificateListRequest): Promise<$_model.DescribeCdnSMCertificateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnSMCertificateListWithOptions(request, runtime);
  }

  /**
   * Queries the certificate list by domain name.
   * 
   * @param request - DescribeCdnSSLCertificateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnSSLCertificateListResponse
   */
  async describeCdnSSLCertificateListWithOptions(request: $_model.DescribeCdnSSLCertificateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnSSLCertificateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKeyword)) {
      query["SearchKeyword"] = request.searchKeyword;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnSSLCertificateList",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnSSLCertificateListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnSSLCertificateListResponse({}));
  }

  /**
   * Queries the certificate list by domain name.
   * 
   * @param request - DescribeCdnSSLCertificateListRequest
   * @returns DescribeCdnSSLCertificateListResponse
   */
  async describeCdnSSLCertificateList(request: $_model.DescribeCdnSSLCertificateListRequest): Promise<$_model.DescribeCdnSSLCertificateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnSSLCertificateListWithOptions(request, runtime);
  }

  /**
   * Queries information about security features of Alibaba Cloud CDN.
   * 
   * @param request - DescribeCdnSecFuncInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnSecFuncInfoResponse
   */
  async describeCdnSecFuncInfoWithOptions(request: $_model.DescribeCdnSecFuncInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnSecFuncInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.secFuncType)) {
      query["SecFuncType"] = request.secFuncType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnSecFuncInfo",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnSecFuncInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnSecFuncInfoResponse({}));
  }

  /**
   * Queries information about security features of Alibaba Cloud CDN.
   * 
   * @param request - DescribeCdnSecFuncInfoRequest
   * @returns DescribeCdnSecFuncInfoResponse
   */
  async describeCdnSecFuncInfo(request: $_model.DescribeCdnSecFuncInfoRequest): Promise<$_model.DescribeCdnSecFuncInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnSecFuncInfoWithOptions(request, runtime);
  }

  /**
   * Queries the status of your Alibaba Cloud CDN service. The information includes the service activation time, the current service status, the current metering method, and the metering method for the next cycle.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeCdnServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnServiceResponse
   */
  async describeCdnServiceWithOptions(request: $_model.DescribeCdnServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnService",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnServiceResponse({}));
  }

  /**
   * Queries the status of your Alibaba Cloud CDN service. The information includes the service activation time, the current service status, the current metering method, and the metering method for the next cycle.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeCdnServiceRequest
   * @returns DescribeCdnServiceResponse
   */
  async describeCdnService(request: $_model.DescribeCdnServiceRequest): Promise<$_model.DescribeCdnServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnServiceWithOptions(request, runtime);
  }

  /**
   * Queries the tracking tasks that you have created.
   * 
   * @remarks
   *   By default, this operation queries all custom operations reports. However, only one operations report can be displayed. Therefore, only one operations report is returned.
   * *   You can call this operation up to three times per second per account.
   * 
   * @param request - DescribeCdnSubListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnSubListResponse
   */
  async describeCdnSubListWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnSubListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnSubList",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnSubListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnSubListResponse({}));
  }

  /**
   * Queries the tracking tasks that you have created.
   * 
   * @remarks
   *   By default, this operation queries all custom operations reports. However, only one operations report can be displayed. Therefore, only one operations report is returned.
   * *   You can call this operation up to three times per second per account.
   * @returns DescribeCdnSubListResponse
   */
  async describeCdnSubList(): Promise<$_model.DescribeCdnSubListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnSubListWithOptions(runtime);
  }

  /**
   * Queries the types of domain names.
   * 
   * @param request - DescribeCdnTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnTypesResponse
   */
  async describeCdnTypesWithOptions(request: $_model.DescribeCdnTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnTypesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnTypes",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnTypesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnTypesResponse({}));
  }

  /**
   * Queries the types of domain names.
   * 
   * @param request - DescribeCdnTypesRequest
   * @returns DescribeCdnTypesResponse
   */
  async describeCdnTypes(request: $_model.DescribeCdnTypesRequest): Promise<$_model.DescribeCdnTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnTypesWithOptions(request, runtime);
  }

  /**
   * Queries the billing history under your Alibaba Cloud account.
   * 
   * @remarks
   *   You can query billing history up to the last one month.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeCdnUserBillHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnUserBillHistoryResponse
   */
  async describeCdnUserBillHistoryWithOptions(request: $_model.DescribeCdnUserBillHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnUserBillHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnUserBillHistory",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnUserBillHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnUserBillHistoryResponse({}));
  }

  /**
   * Queries the billing history under your Alibaba Cloud account.
   * 
   * @remarks
   *   You can query billing history up to the last one month.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeCdnUserBillHistoryRequest
   * @returns DescribeCdnUserBillHistoryResponse
   */
  async describeCdnUserBillHistory(request: $_model.DescribeCdnUserBillHistoryRequest): Promise<$_model.DescribeCdnUserBillHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnUserBillHistoryWithOptions(request, runtime);
  }

  /**
   * Estimates resource usage of the current month.
   * 
   * @remarks
   * You can call this operation to estimate resource usage of the current month based on the metering method that is specified on the first day of the current month. You can call this operation to estimate resource usage only of the current month within your Alibaba Cloud account. The time range used for the estimation starts at 00:00 on the first day of the current month and ends 2 hours earlier than the current time.
   * *   Pay by monthly 95th percentile: The top 5% values between the start time and end time are excluded. The estimated value is the highest value among the remaining values.
   * *   Pay by average daily peak bandwidth per month: Estimated value = Sum of daily peak bandwidth values/Number of days. The current day is excluded.
   * *   Pay by 4th peak bandwidth per month: The estimated value is the 4th peak bandwidth value between the start time and end time. If the time range is less than four days, the estimated value is 0.
   * *   Pay by average daily 95th percentile bandwidth per month: Estimated value = Sum of daily 95th percentile bandwidth values/Number of days. The current day is excluded.
   * *   Pay by 95th percentile bandwidth with 50% off from 00:00 to 08:00: The top 5% values between the start time and end time are excluded. The estimated value is the highest value among the remaining values.
   * > You can call this operation only once per second per account.
   * 
   * @param request - DescribeCdnUserBillPredictionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnUserBillPredictionResponse
   */
  async describeCdnUserBillPredictionWithOptions(request: $_model.DescribeCdnUserBillPredictionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnUserBillPredictionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.area)) {
      query["Area"] = request.area;
    }

    if (!$dara.isNull(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnUserBillPrediction",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnUserBillPredictionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnUserBillPredictionResponse({}));
  }

  /**
   * Estimates resource usage of the current month.
   * 
   * @remarks
   * You can call this operation to estimate resource usage of the current month based on the metering method that is specified on the first day of the current month. You can call this operation to estimate resource usage only of the current month within your Alibaba Cloud account. The time range used for the estimation starts at 00:00 on the first day of the current month and ends 2 hours earlier than the current time.
   * *   Pay by monthly 95th percentile: The top 5% values between the start time and end time are excluded. The estimated value is the highest value among the remaining values.
   * *   Pay by average daily peak bandwidth per month: Estimated value = Sum of daily peak bandwidth values/Number of days. The current day is excluded.
   * *   Pay by 4th peak bandwidth per month: The estimated value is the 4th peak bandwidth value between the start time and end time. If the time range is less than four days, the estimated value is 0.
   * *   Pay by average daily 95th percentile bandwidth per month: Estimated value = Sum of daily 95th percentile bandwidth values/Number of days. The current day is excluded.
   * *   Pay by 95th percentile bandwidth with 50% off from 00:00 to 08:00: The top 5% values between the start time and end time are excluded. The estimated value is the highest value among the remaining values.
   * > You can call this operation only once per second per account.
   * 
   * @param request - DescribeCdnUserBillPredictionRequest
   * @returns DescribeCdnUserBillPredictionResponse
   */
  async describeCdnUserBillPrediction(request: $_model.DescribeCdnUserBillPredictionRequest): Promise<$_model.DescribeCdnUserBillPredictionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnUserBillPredictionWithOptions(request, runtime);
  }

  /**
   * Queries information about the metering methods of an account. The maximum time range to query is one month.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeCdnUserBillTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnUserBillTypeResponse
   */
  async describeCdnUserBillTypeWithOptions(request: $_model.DescribeCdnUserBillTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnUserBillTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnUserBillType",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnUserBillTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnUserBillTypeResponse({}));
  }

  /**
   * Queries information about the metering methods of an account. The maximum time range to query is one month.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeCdnUserBillTypeRequest
   * @returns DescribeCdnUserBillTypeResponse
   */
  async describeCdnUserBillType(request: $_model.DescribeCdnUserBillTypeRequest): Promise<$_model.DescribeCdnUserBillTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnUserBillTypeWithOptions(request, runtime);
  }

  /**
   * Queries configurations of security features.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeCdnUserConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnUserConfigsResponse
   */
  async describeCdnUserConfigsWithOptions(request: $_model.DescribeCdnUserConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnUserConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnUserConfigs",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnUserConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnUserConfigsResponse({}));
  }

  /**
   * Queries configurations of security features.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeCdnUserConfigsRequest
   * @returns DescribeCdnUserConfigsResponse
   */
  async describeCdnUserConfigs(request: $_model.DescribeCdnUserConfigsRequest): Promise<$_model.DescribeCdnUserConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnUserConfigsWithOptions(request, runtime);
  }

  /**
   * Queries accelerated domain names that have specified features configured and the status of the domain names.
   * 
   * @remarks
   * >  The maximum number of times that each user can call this operation per second is 100.
   * 
   * @param request - DescribeCdnUserDomainsByFuncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnUserDomainsByFuncResponse
   */
  async describeCdnUserDomainsByFuncWithOptions(request: $_model.DescribeCdnUserDomainsByFuncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnUserDomainsByFuncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.funcId)) {
      query["FuncId"] = request.funcId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnUserDomainsByFunc",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnUserDomainsByFuncResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnUserDomainsByFuncResponse({}));
  }

  /**
   * Queries accelerated domain names that have specified features configured and the status of the domain names.
   * 
   * @remarks
   * >  The maximum number of times that each user can call this operation per second is 100.
   * 
   * @param request - DescribeCdnUserDomainsByFuncRequest
   * @returns DescribeCdnUserDomainsByFuncResponse
   */
  async describeCdnUserDomainsByFunc(request: $_model.DescribeCdnUserDomainsByFuncRequest): Promise<$_model.DescribeCdnUserDomainsByFuncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnUserDomainsByFuncWithOptions(request, runtime);
  }

  /**
   * Queries the quotas and usage of Alibaba Cloud CDN resources.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeCdnUserQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnUserQuotaResponse
   */
  async describeCdnUserQuotaWithOptions(request: $_model.DescribeCdnUserQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnUserQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnUserQuota",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnUserQuotaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnUserQuotaResponse({}));
  }

  /**
   * Queries the quotas and usage of Alibaba Cloud CDN resources.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeCdnUserQuotaRequest
   * @returns DescribeCdnUserQuotaResponse
   */
  async describeCdnUserQuota(request: $_model.DescribeCdnUserQuotaRequest): Promise<$_model.DescribeCdnUserQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnUserQuotaWithOptions(request, runtime);
  }

  /**
   * Queries the resource plans that you have purchased for Alibaba Cloud CDN.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeCdnUserResourcePackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnUserResourcePackageResponse
   */
  async describeCdnUserResourcePackageWithOptions(request: $_model.DescribeCdnUserResourcePackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnUserResourcePackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnUserResourcePackage",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnUserResourcePackageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnUserResourcePackageResponse({}));
  }

  /**
   * Queries the resource plans that you have purchased for Alibaba Cloud CDN.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeCdnUserResourcePackageRequest
   * @returns DescribeCdnUserResourcePackageResponse
   */
  async describeCdnUserResourcePackage(request: $_model.DescribeCdnUserResourcePackageRequest): Promise<$_model.DescribeCdnUserResourcePackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnUserResourcePackageWithOptions(request, runtime);
  }

  /**
   * Queries domain names that use Web Application Firewall (WAF).
   * 
   * @remarks
   * > You can call this operation up to 150 times per second per account.
   * 
   * @param request - DescribeCdnWafDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnWafDomainResponse
   */
  async describeCdnWafDomainWithOptions(request: $_model.DescribeCdnWafDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnWafDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnWafDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnWafDomainResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnWafDomainResponse({}));
  }

  /**
   * Queries domain names that use Web Application Firewall (WAF).
   * 
   * @remarks
   * > You can call this operation up to 150 times per second per account.
   * 
   * @param request - DescribeCdnWafDomainRequest
   * @returns DescribeCdnWafDomainResponse
   */
  async describeCdnWafDomain(request: $_model.DescribeCdnWafDomainRequest): Promise<$_model.DescribeCdnWafDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnWafDomainWithOptions(request, runtime);
  }

  /**
   * Queries the information about a specific certificate by certificate ID.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   If a certificate is associated with a domain name but the certificate is not enabled, the result of this operation shows that the certificate does not exist.
   * 
   * @param request - DescribeCertificateInfoByIDRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCertificateInfoByIDResponse
   */
  async describeCertificateInfoByIDWithOptions(request: $_model.DescribeCertificateInfoByIDRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCertificateInfoByIDResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCertificateInfoByID",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCertificateInfoByIDResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCertificateInfoByIDResponse({}));
  }

  /**
   * Queries the information about a specific certificate by certificate ID.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   If a certificate is associated with a domain name but the certificate is not enabled, the result of this operation shows that the certificate does not exist.
   * 
   * @param request - DescribeCertificateInfoByIDRequest
   * @returns DescribeCertificateInfoByIDResponse
   */
  async describeCertificateInfoByID(request: $_model.DescribeCertificateInfoByIDRequest): Promise<$_model.DescribeCertificateInfoByIDResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCertificateInfoByIDWithOptions(request, runtime);
  }

  /**
   * A客户定制查询域名采样率
   * 
   * @param request - DescribeCustomDomainSampleRateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomDomainSampleRateResponse
   */
  async describeCustomDomainSampleRateWithOptions(request: $_model.DescribeCustomDomainSampleRateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomDomainSampleRateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomDomainSampleRate",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomDomainSampleRateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomDomainSampleRateResponse({}));
  }

  /**
   * A客户定制查询域名采样率
   * 
   * @param request - DescribeCustomDomainSampleRateRequest
   * @returns DescribeCustomDomainSampleRateResponse
   */
  async describeCustomDomainSampleRate(request: $_model.DescribeCustomDomainSampleRateRequest): Promise<$_model.DescribeCustomDomainSampleRateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomDomainSampleRateWithOptions(request, runtime);
  }

  /**
   * Queries the details about a custom logging configuration.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeCustomLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomLogConfigResponse
   */
  async describeCustomLogConfigWithOptions(request: $_model.DescribeCustomLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomLogConfigResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomLogConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomLogConfigResponse({}));
  }

  /**
   * Queries the details about a custom logging configuration.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeCustomLogConfigRequest
   * @returns DescribeCustomLogConfigResponse
   */
  async describeCustomLogConfig(request: $_model.DescribeCustomLogConfigRequest): Promise<$_model.DescribeCustomLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomLogConfigWithOptions(request, runtime);
  }

  /**
   * Queries the average response time of one or more accelerated domain names. You can query data collected within the last 90 days.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature to for data analysis.
   * > *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * >*   You can call this operation up to 100 times per second per account.
   * >*   You can specify up to 500 domain names in each request. Separate multiple domain names with commas (,).
   * 
   * @param request - DescribeDomainAverageResponseTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainAverageResponseTimeResponse
   */
  async describeDomainAverageResponseTimeWithOptions(request: $_model.DescribeDomainAverageResponseTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainAverageResponseTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeMerge)) {
      query["TimeMerge"] = request.timeMerge;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainAverageResponseTime",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainAverageResponseTimeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainAverageResponseTimeResponse({}));
  }

  /**
   * Queries the average response time of one or more accelerated domain names. You can query data collected within the last 90 days.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature to for data analysis.
   * > *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * >*   You can call this operation up to 100 times per second per account.
   * >*   You can specify up to 500 domain names in each request. Separate multiple domain names with commas (,).
   * 
   * @param request - DescribeDomainAverageResponseTimeRequest
   * @returns DescribeDomainAverageResponseTimeResponse
   */
  async describeDomainAverageResponseTime(request: $_model.DescribeDomainAverageResponseTimeRequest): Promise<$_model.DescribeDomainAverageResponseTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainAverageResponseTimeWithOptions(request, runtime);
  }

  /**
   * Queries bandwidth monitoring data for one or more accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 150 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainBpsDataResponse
   */
  async describeDomainBpsDataWithOptions(request: $_model.DescribeDomainBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainBpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainBpsData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainBpsDataResponse({}));
  }

  /**
   * Queries bandwidth monitoring data for one or more accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 150 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainBpsDataRequest
   * @returns DescribeDomainBpsDataResponse
   */
  async describeDomainBpsData(request: $_model.DescribeDomainBpsDataRequest): Promise<$_model.DescribeDomainBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainBpsDataWithOptions(request, runtime);
  }

  /**
   * Queries bandwidth data by protocol.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainBpsDataByLayerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainBpsDataByLayerResponse
   */
  async describeDomainBpsDataByLayerWithOptions(request: $_model.DescribeDomainBpsDataByLayerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainBpsDataByLayerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.layer)) {
      query["Layer"] = request.layer;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainBpsDataByLayer",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainBpsDataByLayerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainBpsDataByLayerResponse({}));
  }

  /**
   * Queries bandwidth data by protocol.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainBpsDataByLayerRequest
   * @returns DescribeDomainBpsDataByLayerResponse
   */
  async describeDomainBpsDataByLayer(request: $_model.DescribeDomainBpsDataByLayerRequest): Promise<$_model.DescribeDomainBpsDataByLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainBpsDataByLayerWithOptions(request, runtime);
  }

  /**
   * Queries the bandwidth data at a specified time for an accelerated domain.
   * 
   * @remarks
   *   The bandwidth is measured in bit/s.
   * *   You can specify only one accelerated domain name in each request.
   * *   The data is collected every 5 minutes.
   * *   You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDomainBpsDataByTimeStampRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainBpsDataByTimeStampResponse
   */
  async describeDomainBpsDataByTimeStampWithOptions(request: $_model.DescribeDomainBpsDataByTimeStampRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainBpsDataByTimeStampResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ispNames)) {
      query["IspNames"] = request.ispNames;
    }

    if (!$dara.isNull(request.locationNames)) {
      query["LocationNames"] = request.locationNames;
    }

    if (!$dara.isNull(request.timePoint)) {
      query["TimePoint"] = request.timePoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainBpsDataByTimeStamp",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainBpsDataByTimeStampResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainBpsDataByTimeStampResponse({}));
  }

  /**
   * Queries the bandwidth data at a specified time for an accelerated domain.
   * 
   * @remarks
   *   The bandwidth is measured in bit/s.
   * *   You can specify only one accelerated domain name in each request.
   * *   The data is collected every 5 minutes.
   * *   You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDomainBpsDataByTimeStampRequest
   * @returns DescribeDomainBpsDataByTimeStampResponse
   */
  async describeDomainBpsDataByTimeStamp(request: $_model.DescribeDomainBpsDataByTimeStampRequest): Promise<$_model.DescribeDomainBpsDataByTimeStampResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainBpsDataByTimeStampWithOptions(request, runtime);
  }

  /**
   * Queries log entries of rate limiting.
   * 
   * @remarks
   *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range. You must set both parameters or leave both parameters empty.
   * *   You can specify up to 20 domain names in reach request. If you specify multiple domain names, separate them with commas (,).
   * *   You can query data collected over the last 30 days.
   * *   You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDomainCcActivityLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainCcActivityLogResponse
   */
  async describeDomainCcActivityLogWithOptions(request: $_model.DescribeDomainCcActivityLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainCcActivityLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.triggerObject)) {
      query["TriggerObject"] = request.triggerObject;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainCcActivityLog",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainCcActivityLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainCcActivityLogResponse({}));
  }

  /**
   * Queries log entries of rate limiting.
   * 
   * @remarks
   *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range. You must set both parameters or leave both parameters empty.
   * *   You can specify up to 20 domain names in reach request. If you specify multiple domain names, separate them with commas (,).
   * *   You can query data collected over the last 30 days.
   * *   You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDomainCcActivityLogRequest
   * @returns DescribeDomainCcActivityLogResponse
   */
  async describeDomainCcActivityLog(request: $_model.DescribeDomainCcActivityLogRequest): Promise<$_model.DescribeDomainCcActivityLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainCcActivityLogWithOptions(request, runtime);
  }

  /**
   * Queries the certificate information of an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDomainCertificateInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainCertificateInfoResponse
   */
  async describeDomainCertificateInfoWithOptions(request: $_model.DescribeDomainCertificateInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainCertificateInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainCertificateInfo",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainCertificateInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainCertificateInfoResponse({}));
  }

  /**
   * Queries the certificate information of an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDomainCertificateInfoRequest
   * @returns DescribeDomainCertificateInfoResponse
   */
  async describeDomainCertificateInfo(request: $_model.DescribeDomainCertificateInfoRequest): Promise<$_model.DescribeDomainCertificateInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainCertificateInfoWithOptions(request, runtime);
  }

  /**
   * Detects the CNAME for an accelerated domain name. You can check the resolution result to determine whether the CNAME is configured.
   * 
   * @param request - DescribeDomainCnameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainCnameResponse
   */
  async describeDomainCnameWithOptions(request: $_model.DescribeDomainCnameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainCnameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainCname",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainCnameResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainCnameResponse({}));
  }

  /**
   * Detects the CNAME for an accelerated domain name. You can check the resolution result to determine whether the CNAME is configured.
   * 
   * @param request - DescribeDomainCnameRequest
   * @returns DescribeDomainCnameResponse
   */
  async describeDomainCname(request: $_model.DescribeDomainCnameRequest): Promise<$_model.DescribeDomainCnameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainCnameWithOptions(request, runtime);
  }

  /**
   * Queries the custom log configuration of an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDomainCustomLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainCustomLogConfigResponse
   */
  async describeDomainCustomLogConfigWithOptions(request: $_model.DescribeDomainCustomLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainCustomLogConfigResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainCustomLogConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainCustomLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainCustomLogConfigResponse({}));
  }

  /**
   * Queries the custom log configuration of an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDomainCustomLogConfigRequest
   * @returns DescribeDomainCustomLogConfigResponse
   */
  async describeDomainCustomLogConfig(request: $_model.DescribeDomainCustomLogConfigRequest): Promise<$_model.DescribeDomainCustomLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainCustomLogConfigWithOptions(request, runtime);
  }

  /**
   * The domain name that you want to query. You can specify multiple domain names and separate them with commas (,). You can specify at most 30 domain names in each call.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDomainDetailDataByLayerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainDetailDataByLayerResponse
   */
  async describeDomainDetailDataByLayerWithOptions(request: $_model.DescribeDomainDetailDataByLayerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainDetailDataByLayerResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainDetailDataByLayer",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainDetailDataByLayerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainDetailDataByLayerResponse({}));
  }

  /**
   * The domain name that you want to query. You can specify multiple domain names and separate them with commas (,). You can specify at most 30 domain names in each call.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeDomainDetailDataByLayerRequest
   * @returns DescribeDomainDetailDataByLayerResponse
   */
  async describeDomainDetailDataByLayer(request: $_model.DescribeDomainDetailDataByLayerRequest): Promise<$_model.DescribeDomainDetailDataByLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainDetailDataByLayerWithOptions(request, runtime);
  }

  /**
   * Queries byte hit ratios that are measured in percentage.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainHitRateDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainHitRateDataResponse
   */
  async describeDomainHitRateDataWithOptions(request: $_model.DescribeDomainHitRateDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainHitRateDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainHitRateData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainHitRateDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainHitRateDataResponse({}));
  }

  /**
   * Queries byte hit ratios that are measured in percentage.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainHitRateDataRequest
   * @returns DescribeDomainHitRateDataResponse
   */
  async describeDomainHitRateData(request: $_model.DescribeDomainHitRateDataRequest): Promise<$_model.DescribeDomainHitRateDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainHitRateDataWithOptions(request, runtime);
  }

  /**
   * Queries the total number and proportions of HTTP status codes returned from an accelerated domain name. The data is collected every 5 minutes.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainHttpCodeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainHttpCodeDataResponse
   */
  async describeDomainHttpCodeDataWithOptions(request: $_model.DescribeDomainHttpCodeDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainHttpCodeDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainHttpCodeData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainHttpCodeDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainHttpCodeDataResponse({}));
  }

  /**
   * Queries the total number and proportions of HTTP status codes returned from an accelerated domain name. The data is collected every 5 minutes.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainHttpCodeDataRequest
   * @returns DescribeDomainHttpCodeDataResponse
   */
  async describeDomainHttpCodeData(request: $_model.DescribeDomainHttpCodeDataRequest): Promise<$_model.DescribeDomainHttpCodeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainHttpCodeDataWithOptions(request, runtime);
  }

  /**
   * Queries HTTP status codes by protocol.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * ### Time granularity
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainHttpCodeDataByLayerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainHttpCodeDataByLayerResponse
   */
  async describeDomainHttpCodeDataByLayerWithOptions(request: $_model.DescribeDomainHttpCodeDataByLayerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainHttpCodeDataByLayerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.layer)) {
      query["Layer"] = request.layer;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainHttpCodeDataByLayer",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainHttpCodeDataByLayerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainHttpCodeDataByLayerResponse({}));
  }

  /**
   * Queries HTTP status codes by protocol.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * ### Time granularity
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainHttpCodeDataByLayerRequest
   * @returns DescribeDomainHttpCodeDataByLayerResponse
   */
  async describeDomainHttpCodeDataByLayer(request: $_model.DescribeDomainHttpCodeDataByLayerRequest): Promise<$_model.DescribeDomainHttpCodeDataByLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainHttpCodeDataByLayerWithOptions(request, runtime);
  }

  /**
   * Queries the proportions of data usage of different Internet service providers (ISPs). Data is collected every day. You can query data collected in the last 90 days.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature for data analysis.
   * > *   If you do not set StartTime or EndTime, the request returns the data collected in the last 24 hours. If you set both StartTime and EndTime, the request returns the data collected within the specified time range.
   * >*   This operation queries proportions of data usage of different ISPs for only a specific accelerated domain name, or for all accelerated domain names in your Alibaba Cloud account.
   * >*   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDomainISPDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainISPDataResponse
   */
  async describeDomainISPDataWithOptions(request: $_model.DescribeDomainISPDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainISPDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainISPData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainISPDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainISPDataResponse({}));
  }

  /**
   * Queries the proportions of data usage of different Internet service providers (ISPs). Data is collected every day. You can query data collected in the last 90 days.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature for data analysis.
   * > *   If you do not set StartTime or EndTime, the request returns the data collected in the last 24 hours. If you set both StartTime and EndTime, the request returns the data collected within the specified time range.
   * >*   This operation queries proportions of data usage of different ISPs for only a specific accelerated domain name, or for all accelerated domain names in your Alibaba Cloud account.
   * >*   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDomainISPDataRequest
   * @returns DescribeDomainISPDataResponse
   */
  async describeDomainISPData(request: $_model.DescribeDomainISPDataRequest): Promise<$_model.DescribeDomainISPDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainISPDataWithOptions(request, runtime);
  }

  /**
   * Queries the 95th percentile bandwidth data of a domain name.
   * 
   * @remarks
   * *You can use one of the following methods to query data:**
   * *   If you specify the StartTime and EndTime parameters and the time range that is specified by these parameters is less than or equal to 24 hours, the 95th percentile bandwidth data on the day of the start time is returned. If the time range that is specified by these parameters is more than 24 hours, the 95th percentile bandwidth data in the month of the start time is returned.
   * *   If you specify the TimePoint and Cycle parameters, the 95th percentile bandwidth data of the cycle is returned.
   * *   If you specify the StartTime, EndTime, and Cycle parameters, the 95th percentile bandwidth data of the cycle is returned.
   * If you do not use one of the methods, the 95th percentile bandwidth data of the previous 24 hours is returned by default.
   * * Maximum time range to query: 90 days 
   * * Minimum data granularity to query: 1 day 
   * * Historical data available: 90 days
   * - You can call this operation up to 100 times per second per account.
   * - The unit of the bandwidth data returned is bit/s.
   * 
   * @param request - DescribeDomainMax95BpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainMax95BpsDataResponse
   */
  async describeDomainMax95BpsDataWithOptions(request: $_model.DescribeDomainMax95BpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainMax95BpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cycle)) {
      query["Cycle"] = request.cycle;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timePoint)) {
      query["TimePoint"] = request.timePoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainMax95BpsData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainMax95BpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainMax95BpsDataResponse({}));
  }

  /**
   * Queries the 95th percentile bandwidth data of a domain name.
   * 
   * @remarks
   * *You can use one of the following methods to query data:**
   * *   If you specify the StartTime and EndTime parameters and the time range that is specified by these parameters is less than or equal to 24 hours, the 95th percentile bandwidth data on the day of the start time is returned. If the time range that is specified by these parameters is more than 24 hours, the 95th percentile bandwidth data in the month of the start time is returned.
   * *   If you specify the TimePoint and Cycle parameters, the 95th percentile bandwidth data of the cycle is returned.
   * *   If you specify the StartTime, EndTime, and Cycle parameters, the 95th percentile bandwidth data of the cycle is returned.
   * If you do not use one of the methods, the 95th percentile bandwidth data of the previous 24 hours is returned by default.
   * * Maximum time range to query: 90 days 
   * * Minimum data granularity to query: 1 day 
   * * Historical data available: 90 days
   * - You can call this operation up to 100 times per second per account.
   * - The unit of the bandwidth data returned is bit/s.
   * 
   * @param request - DescribeDomainMax95BpsDataRequest
   * @returns DescribeDomainMax95BpsDataResponse
   */
  async describeDomainMax95BpsData(request: $_model.DescribeDomainMax95BpsDataRequest): Promise<$_model.DescribeDomainMax95BpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainMax95BpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the traffic data and the number of requests for multiple accelerated domain names at a time.
   * 
   * @remarks
   *   If you do not set StartTime or EndTime, data collected within the last 10 minutes is queried.
   * *   The maximum interval between StartTime and EndTime is 1 hour.
   * *   You can query data within the last 90 days.
   * *   You can query the traffic data and the number of requests for accelerated domain names that are deleted.
   * *   You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDomainMultiUsageDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainMultiUsageDataResponse
   */
  async describeDomainMultiUsageDataWithOptions(request: $_model.DescribeDomainMultiUsageDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainMultiUsageDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainMultiUsageData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainMultiUsageDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainMultiUsageDataResponse({}));
  }

  /**
   * Queries the traffic data and the number of requests for multiple accelerated domain names at a time.
   * 
   * @remarks
   *   If you do not set StartTime or EndTime, data collected within the last 10 minutes is queried.
   * *   The maximum interval between StartTime and EndTime is 1 hour.
   * *   You can query data within the last 90 days.
   * *   You can query the traffic data and the number of requests for accelerated domain names that are deleted.
   * *   You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDomainMultiUsageDataRequest
   * @returns DescribeDomainMultiUsageDataResponse
   */
  async describeDomainMultiUsageData(request: $_model.DescribeDomainMultiUsageDataRequest): Promise<$_model.DescribeDomainMultiUsageDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainMultiUsageDataWithOptions(request, runtime);
  }

  /**
   * Queries monitoring data including the amount of network traffic and the number of visits by directory.
   * 
   * @remarks
   *   This operation is available only to users that are on the whitelist. If the daily peak bandwidth value of your workloads reaches 10 Gbit/s, you can [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex) to apply to be included in the whitelist.
   * *   You can call this API operation up to 6,000 times per second per account.
   * *   Data collection by directory is available only to specified domain names within your Alibaba Cloud account. It cannot be enabled for all domain names within your Alibaba Cloud account.
   * *   The average size of the files that belong to the domain name must be larger than 1 MB.
   * *   The number of directories specified for a single domain name cannot exceed 100. If the number of directories exceeds 100, the data accuracy reduces.
   * *   If you do not set StartTime or EndTime, data collected within the last 24 hours is queried. If you set both StartTime and EndTime, data within the specified time range is queried.
   * *   You can query data collected within the last 30 days.
   * 
   * @param request - DescribeDomainPathDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainPathDataResponse
   */
  async describeDomainPathDataWithOptions(request: $_model.DescribeDomainPathDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainPathDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainPathData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainPathDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainPathDataResponse({}));
  }

  /**
   * Queries monitoring data including the amount of network traffic and the number of visits by directory.
   * 
   * @remarks
   *   This operation is available only to users that are on the whitelist. If the daily peak bandwidth value of your workloads reaches 10 Gbit/s, you can [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex) to apply to be included in the whitelist.
   * *   You can call this API operation up to 6,000 times per second per account.
   * *   Data collection by directory is available only to specified domain names within your Alibaba Cloud account. It cannot be enabled for all domain names within your Alibaba Cloud account.
   * *   The average size of the files that belong to the domain name must be larger than 1 MB.
   * *   The number of directories specified for a single domain name cannot exceed 100. If the number of directories exceeds 100, the data accuracy reduces.
   * *   If you do not set StartTime or EndTime, data collected within the last 24 hours is queried. If you set both StartTime and EndTime, data within the specified time range is queried.
   * *   You can query data collected within the last 30 days.
   * 
   * @param request - DescribeDomainPathDataRequest
   * @returns DescribeDomainPathDataResponse
   */
  async describeDomainPathData(request: $_model.DescribeDomainPathDataRequest): Promise<$_model.DescribeDomainPathDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainPathDataWithOptions(request, runtime);
  }

  /**
   * Queries the page view (PV) data of an accelerated domain name. The data is collected at an interval of 1 hour. You can query data in the last 90 days.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature to for data analysis.
   * > *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * >*   You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDomainPvDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainPvDataResponse
   */
  async describeDomainPvDataWithOptions(request: $_model.DescribeDomainPvDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainPvDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainPvData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainPvDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainPvDataResponse({}));
  }

  /**
   * Queries the page view (PV) data of an accelerated domain name. The data is collected at an interval of 1 hour. You can query data in the last 90 days.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature to for data analysis.
   * > *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * >*   You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeDomainPvDataRequest
   * @returns DescribeDomainPvDataResponse
   */
  async describeDomainPvData(request: $_model.DescribeDomainPvDataRequest): Promise<$_model.DescribeDomainPvDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainPvDataWithOptions(request, runtime);
  }

  /**
   * Queries the number of queries per second (QPS) for an accelerated domain name. The data is collected every 5 minutes. You can query data collected within the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainQpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainQpsDataResponse
   */
  async describeDomainQpsDataWithOptions(request: $_model.DescribeDomainQpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainQpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainQpsData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainQpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainQpsDataResponse({}));
  }

  /**
   * Queries the number of queries per second (QPS) for an accelerated domain name. The data is collected every 5 minutes. You can query data collected within the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainQpsDataRequest
   * @returns DescribeDomainQpsDataResponse
   */
  async describeDomainQpsData(request: $_model.DescribeDomainQpsDataRequest): Promise<$_model.DescribeDomainQpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainQpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the number of queries per second (QPS) at a specific layer for one or more accelerated domain names. You can query data collected within the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per user.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter varies with the maximum time range per query. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainQpsDataByLayerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainQpsDataByLayerResponse
   */
  async describeDomainQpsDataByLayerWithOptions(request: $_model.DescribeDomainQpsDataByLayerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainQpsDataByLayerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.layer)) {
      query["Layer"] = request.layer;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainQpsDataByLayer",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainQpsDataByLayerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainQpsDataByLayerResponse({}));
  }

  /**
   * Queries the number of queries per second (QPS) at a specific layer for one or more accelerated domain names. You can query data collected within the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 20 times per second per user.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter varies with the maximum time range per query. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainQpsDataByLayerRequest
   * @returns DescribeDomainQpsDataByLayerResponse
   */
  async describeDomainQpsDataByLayer(request: $_model.DescribeDomainQpsDataByLayerRequest): Promise<$_model.DescribeDomainQpsDataByLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainQpsDataByLayerWithOptions(request, runtime);
  }

  /**
   * Queries the bandwidth data about one or more accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity** The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainRealTimeBpsDataResponse
   */
  async describeDomainRealTimeBpsDataWithOptions(request: $_model.DescribeDomainRealTimeBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainRealTimeBpsDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainRealTimeBpsData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainRealTimeBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainRealTimeBpsDataResponse({}));
  }

  /**
   * Queries the bandwidth data about one or more accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity** The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeBpsDataRequest
   * @returns DescribeDomainRealTimeBpsDataResponse
   */
  async describeDomainRealTimeBpsData(request: $_model.DescribeDomainRealTimeBpsDataRequest): Promise<$_model.DescribeDomainRealTimeBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainRealTimeBpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the byte hit ratios of accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * * The network traffic destined for different domain names may be redirected to the same origin server. Therefore, the byte hit ratios may be inaccurate. The accuracy of query results is based on the actual configurations.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeByteHitRateDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainRealTimeByteHitRateDataResponse
   */
  async describeDomainRealTimeByteHitRateDataWithOptions(request: $_model.DescribeDomainRealTimeByteHitRateDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainRealTimeByteHitRateDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainRealTimeByteHitRateData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainRealTimeByteHitRateDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainRealTimeByteHitRateDataResponse({}));
  }

  /**
   * Queries the byte hit ratios of accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * * The network traffic destined for different domain names may be redirected to the same origin server. Therefore, the byte hit ratios may be inaccurate. The accuracy of query results is based on the actual configurations.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeByteHitRateDataRequest
   * @returns DescribeDomainRealTimeByteHitRateDataResponse
   */
  async describeDomainRealTimeByteHitRateData(request: $_model.DescribeDomainRealTimeByteHitRateDataRequest): Promise<$_model.DescribeDomainRealTimeByteHitRateDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainRealTimeByteHitRateDataWithOptions(request, runtime);
  }

  /**
   * Queries the real-time monitoring data for a domain name.
   * 
   * @remarks
   *   You can query data in the last seven days. Data is collected every minute.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDomainRealTimeDetailDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainRealTimeDetailDataResponse
   */
  async describeDomainRealTimeDetailDataWithOptions(request: $_model.DescribeDomainRealTimeDetailDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainRealTimeDetailDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainRealTimeDetailData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainRealTimeDetailDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainRealTimeDetailDataResponse({}));
  }

  /**
   * Queries the real-time monitoring data for a domain name.
   * 
   * @remarks
   *   You can query data in the last seven days. Data is collected every minute.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDomainRealTimeDetailDataRequest
   * @returns DescribeDomainRealTimeDetailDataResponse
   */
  async describeDomainRealTimeDetailData(request: $_model.DescribeDomainRealTimeDetailDataRequest): Promise<$_model.DescribeDomainRealTimeDetailDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainRealTimeDetailDataWithOptions(request, runtime);
  }

  /**
   * Queries the total number and proportions of HTTP status codes returned from an accelerated domain name.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeHttpCodeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainRealTimeHttpCodeDataResponse
   */
  async describeDomainRealTimeHttpCodeDataWithOptions(request: $_model.DescribeDomainRealTimeHttpCodeDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainRealTimeHttpCodeDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainRealTimeHttpCodeData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainRealTimeHttpCodeDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainRealTimeHttpCodeDataResponse({}));
  }

  /**
   * Queries the total number and proportions of HTTP status codes returned from an accelerated domain name.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeHttpCodeDataRequest
   * @returns DescribeDomainRealTimeHttpCodeDataResponse
   */
  async describeDomainRealTimeHttpCodeData(request: $_model.DescribeDomainRealTimeHttpCodeDataRequest): Promise<$_model.DescribeDomainRealTimeHttpCodeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainRealTimeHttpCodeDataWithOptions(request, runtime);
  }

  /**
   * Queries the number of queries per second for one or more accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeQpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainRealTimeQpsDataResponse
   */
  async describeDomainRealTimeQpsDataWithOptions(request: $_model.DescribeDomainRealTimeQpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainRealTimeQpsDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainRealTimeQpsData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainRealTimeQpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainRealTimeQpsDataResponse({}));
  }

  /**
   * Queries the number of queries per second for one or more accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeQpsDataRequest
   * @returns DescribeDomainRealTimeQpsDataResponse
   */
  async describeDomainRealTimeQpsData(request: $_model.DescribeDomainRealTimeQpsDataRequest): Promise<$_model.DescribeDomainRealTimeQpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainRealTimeQpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the request hit ratios for one or more accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * * By default, requests in the Go programming language use the POST request method. You must manually change the request method to GET by declaring: request.Method="GET".
   * * The network traffic destined for different domain names may be redirected to the same origin server. Therefore, the request hit ratios may be inaccurate. The accuracy of query results is based on the actual configurations.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeReqHitRateDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainRealTimeReqHitRateDataResponse
   */
  async describeDomainRealTimeReqHitRateDataWithOptions(request: $_model.DescribeDomainRealTimeReqHitRateDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainRealTimeReqHitRateDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainRealTimeReqHitRateData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainRealTimeReqHitRateDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainRealTimeReqHitRateDataResponse({}));
  }

  /**
   * Queries the request hit ratios for one or more accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * * By default, requests in the Go programming language use the POST request method. You must manually change the request method to GET by declaring: request.Method="GET".
   * * The network traffic destined for different domain names may be redirected to the same origin server. Therefore, the request hit ratios may be inaccurate. The accuracy of query results is based on the actual configurations.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeReqHitRateDataRequest
   * @returns DescribeDomainRealTimeReqHitRateDataResponse
   */
  async describeDomainRealTimeReqHitRateData(request: $_model.DescribeDomainRealTimeReqHitRateDataRequest): Promise<$_model.DescribeDomainRealTimeReqHitRateDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainRealTimeReqHitRateDataWithOptions(request, runtime);
  }

  /**
   * Queries origin bandwidth data for accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeSrcBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainRealTimeSrcBpsDataResponse
   */
  async describeDomainRealTimeSrcBpsDataWithOptions(request: $_model.DescribeDomainRealTimeSrcBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainRealTimeSrcBpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainRealTimeSrcBpsData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainRealTimeSrcBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainRealTimeSrcBpsDataResponse({}));
  }

  /**
   * Queries origin bandwidth data for accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeSrcBpsDataRequest
   * @returns DescribeDomainRealTimeSrcBpsDataResponse
   */
  async describeDomainRealTimeSrcBpsData(request: $_model.DescribeDomainRealTimeSrcBpsDataRequest): Promise<$_model.DescribeDomainRealTimeSrcBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainRealTimeSrcBpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the total number and proportions of HTTP status codes returned during back-to-origin routing.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeSrcHttpCodeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainRealTimeSrcHttpCodeDataResponse
   */
  async describeDomainRealTimeSrcHttpCodeDataWithOptions(request: $_model.DescribeDomainRealTimeSrcHttpCodeDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainRealTimeSrcHttpCodeDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainRealTimeSrcHttpCodeData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainRealTimeSrcHttpCodeDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainRealTimeSrcHttpCodeDataResponse({}));
  }

  /**
   * Queries the total number and proportions of HTTP status codes returned during back-to-origin routing.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeSrcHttpCodeDataRequest
   * @returns DescribeDomainRealTimeSrcHttpCodeDataResponse
   */
  async describeDomainRealTimeSrcHttpCodeData(request: $_model.DescribeDomainRealTimeSrcHttpCodeDataRequest): Promise<$_model.DescribeDomainRealTimeSrcHttpCodeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainRealTimeSrcHttpCodeDataWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring data of back-to-origin traffic for one or more specified accelerated domains. The data is collected every minute.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last hour by default. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeSrcTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainRealTimeSrcTrafficDataResponse
   */
  async describeDomainRealTimeSrcTrafficDataWithOptions(request: $_model.DescribeDomainRealTimeSrcTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainRealTimeSrcTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainRealTimeSrcTrafficData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainRealTimeSrcTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainRealTimeSrcTrafficDataResponse({}));
  }

  /**
   * Queries the monitoring data of back-to-origin traffic for one or more specified accelerated domains. The data is collected every minute.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last hour by default. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeSrcTrafficDataRequest
   * @returns DescribeDomainRealTimeSrcTrafficDataResponse
   */
  async describeDomainRealTimeSrcTrafficData(request: $_model.DescribeDomainRealTimeSrcTrafficDataRequest): Promise<$_model.DescribeDomainRealTimeSrcTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainRealTimeSrcTrafficDataWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring data of network traffic for one or more accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 50 times per second per account.
   * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainRealTimeTrafficDataResponse
   */
  async describeDomainRealTimeTrafficDataWithOptions(request: $_model.DescribeDomainRealTimeTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainRealTimeTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainRealTimeTrafficData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainRealTimeTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainRealTimeTrafficDataResponse({}));
  }

  /**
   * Queries the monitoring data of network traffic for one or more accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 50 times per second per account.
   * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last hour. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the StartTime and EndTime parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|1 hour|7 days|5 minutes|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * 
   * @param request - DescribeDomainRealTimeTrafficDataRequest
   * @returns DescribeDomainRealTimeTrafficDataResponse
   */
  async describeDomainRealTimeTrafficData(request: $_model.DescribeDomainRealTimeTrafficDataRequest): Promise<$_model.DescribeDomainRealTimeTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainRealTimeTrafficDataWithOptions(request, runtime);
  }

  /**
   * Queries the real-time log delivery information about an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDomainRealtimeLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainRealtimeLogDeliveryResponse
   */
  async describeDomainRealtimeLogDeliveryWithOptions(request: $_model.DescribeDomainRealtimeLogDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainRealtimeLogDeliveryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainRealtimeLogDelivery",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainRealtimeLogDeliveryResponse({}));
  }

  /**
   * Queries the real-time log delivery information about an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDomainRealtimeLogDeliveryRequest
   * @returns DescribeDomainRealtimeLogDeliveryResponse
   */
  async describeDomainRealtimeLogDelivery(request: $_model.DescribeDomainRealtimeLogDeliveryRequest): Promise<$_model.DescribeDomainRealtimeLogDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
   * Queries the geographic distribution of users for a domain name. The data is collected at an interval of one day. You can query the data in the last 90 days.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you not use this operation because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature for data analysis.
   * > *   If you do not specify the **StartTime** or **EndTime** parameter, data collected within the last **24** hours is queried. If you specify both the **StartTime** and **EndTime** parameters, data collected within the specified time range is queried.
   * >*   There is delay in data collection. If you want to query data collected within the last day, we recommend that you query the data on the next day.
   * >*   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDomainRegionDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainRegionDataResponse
   */
  async describeDomainRegionDataWithOptions(request: $_model.DescribeDomainRegionDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainRegionDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainRegionData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainRegionDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainRegionDataResponse({}));
  }

  /**
   * Queries the geographic distribution of users for a domain name. The data is collected at an interval of one day. You can query the data in the last 90 days.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you not use this operation because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature for data analysis.
   * > *   If you do not specify the **StartTime** or **EndTime** parameter, data collected within the last **24** hours is queried. If you specify both the **StartTime** and **EndTime** parameters, data collected within the specified time range is queried.
   * >*   There is delay in data collection. If you want to query data collected within the last day, we recommend that you query the data on the next day.
   * >*   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDomainRegionDataRequest
   * @returns DescribeDomainRegionDataResponse
   */
  async describeDomainRegionData(request: $_model.DescribeDomainRegionDataRequest): Promise<$_model.DescribeDomainRegionDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainRegionDataWithOptions(request, runtime);
  }

  /**
   * Queries the request hit ratio in percentage.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainReqHitRateDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainReqHitRateDataResponse
   */
  async describeDomainReqHitRateDataWithOptions(request: $_model.DescribeDomainReqHitRateDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainReqHitRateDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainReqHitRateData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainReqHitRateDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainReqHitRateDataResponse({}));
  }

  /**
   * Queries the request hit ratio in percentage.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainReqHitRateDataRequest
   * @returns DescribeDomainReqHitRateDataResponse
   */
  async describeDomainReqHitRateData(request: $_model.DescribeDomainReqHitRateDataRequest): Promise<$_model.DescribeDomainReqHitRateDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainReqHitRateDataWithOptions(request, runtime);
  }

  /**
   * Queries bandwidth monitoring data of requests that are redirected to origin servers for one or more accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the time range to query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainSrcBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainSrcBpsDataResponse
   */
  async describeDomainSrcBpsDataWithOptions(request: $_model.DescribeDomainSrcBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainSrcBpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainSrcBpsData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainSrcBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainSrcBpsDataResponse({}));
  }

  /**
   * Queries bandwidth monitoring data of requests that are redirected to origin servers for one or more accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not specify the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you specify both the StartTime and EndTime parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the time range to query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainSrcBpsDataRequest
   * @returns DescribeDomainSrcBpsDataResponse
   */
  async describeDomainSrcBpsData(request: $_model.DescribeDomainSrcBpsDataRequest): Promise<$_model.DescribeDomainSrcBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainSrcBpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the proportions of HTTP status codes that are returned during back-to-origin routing.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter varies with the maximum time range per query. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainSrcHttpCodeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainSrcHttpCodeDataResponse
   */
  async describeDomainSrcHttpCodeDataWithOptions(request: $_model.DescribeDomainSrcHttpCodeDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainSrcHttpCodeDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainSrcHttpCodeData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainSrcHttpCodeDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainSrcHttpCodeDataResponse({}));
  }

  /**
   * Queries the proportions of HTTP status codes that are returned during back-to-origin routing.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter varies with the maximum time range per query. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainSrcHttpCodeDataRequest
   * @returns DescribeDomainSrcHttpCodeDataResponse
   */
  async describeDomainSrcHttpCodeData(request: $_model.DescribeDomainSrcHttpCodeDataRequest): Promise<$_model.DescribeDomainSrcHttpCodeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainSrcHttpCodeDataWithOptions(request, runtime);
  }

  /**
   * Queries the number of queries per second (QPS) that are sent to the origin server. You can query data collected in the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * ### Time granularity
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainSrcQpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainSrcQpsDataResponse
   */
  async describeDomainSrcQpsDataWithOptions(request: $_model.DescribeDomainSrcQpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainSrcQpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainSrcQpsData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainSrcQpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainSrcQpsDataResponse({}));
  }

  /**
   * Queries the number of queries per second (QPS) that are sent to the origin server. You can query data collected in the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * ### Time granularity
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainSrcQpsDataRequest
   * @returns DescribeDomainSrcQpsDataResponse
   */
  async describeDomainSrcQpsData(request: $_model.DescribeDomainSrcQpsDataRequest): Promise<$_model.DescribeDomainSrcQpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainSrcQpsDataWithOptions(request, runtime);
  }

  /**
   * Queries frequently requested origin URLs of one or more accelerated domain names.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature for data analysis.
   * > *   The data is collected at an interval of 5 minutes.
   * >*   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDomainSrcTopUrlVisitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainSrcTopUrlVisitResponse
   */
  async describeDomainSrcTopUrlVisitWithOptions(request: $_model.DescribeDomainSrcTopUrlVisitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainSrcTopUrlVisitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainSrcTopUrlVisit",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainSrcTopUrlVisitResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainSrcTopUrlVisitResponse({}));
  }

  /**
   * Queries frequently requested origin URLs of one or more accelerated domain names.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature for data analysis.
   * > *   The data is collected at an interval of 5 minutes.
   * >*   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDomainSrcTopUrlVisitRequest
   * @returns DescribeDomainSrcTopUrlVisitResponse
   */
  async describeDomainSrcTopUrlVisit(request: $_model.DescribeDomainSrcTopUrlVisitRequest): Promise<$_model.DescribeDomainSrcTopUrlVisitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainSrcTopUrlVisitWithOptions(request, runtime);
  }

  /**
   * Queries origin traffic for one or more specified accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainSrcTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainSrcTrafficDataResponse
   */
  async describeDomainSrcTrafficDataWithOptions(request: $_model.DescribeDomainSrcTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainSrcTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainSrcTrafficData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainSrcTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainSrcTrafficDataResponse({}));
  }

  /**
   * Queries origin traffic for one or more specified accelerated domain names.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainSrcTrafficDataRequest
   * @returns DescribeDomainSrcTrafficDataResponse
   */
  async describeDomainSrcTrafficData(request: $_model.DescribeDomainSrcTrafficDataRequest): Promise<$_model.DescribeDomainSrcTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainSrcTrafficDataWithOptions(request, runtime);
  }

  /**
   * Queries client IP addresses that are ranked by the number of requests or the amount of network traffic within a specific time range for one or more accelerated domain names. You can query data collected within the last 90 days.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature to for data analysis.
   * > *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * >*   Data is collected every hour.
   * >*   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDomainTopClientIpVisitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainTopClientIpVisitResponse
   */
  async describeDomainTopClientIpVisitWithOptions(request: $_model.DescribeDomainTopClientIpVisitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainTopClientIpVisitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainTopClientIpVisit",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainTopClientIpVisitResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainTopClientIpVisitResponse({}));
  }

  /**
   * Queries client IP addresses that are ranked by the number of requests or the amount of network traffic within a specific time range for one or more accelerated domain names. You can query data collected within the last 90 days.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature to for data analysis.
   * > *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * >*   Data is collected every hour.
   * >*   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDomainTopClientIpVisitRequest
   * @returns DescribeDomainTopClientIpVisitResponse
   */
  async describeDomainTopClientIpVisit(request: $_model.DescribeDomainTopClientIpVisitRequest): Promise<$_model.DescribeDomainTopClientIpVisitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainTopClientIpVisitWithOptions(request, runtime);
  }

  /**
   * Queries frequently requested web pages of one or more accelerated domain names on a specified day and sorts the web pages. You can query data collected within the last 90 days.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature or [ship real-time logs in Log Service](https://help.aliyun.com/document_detail/440145.html) to analyze data.
   * > 
   * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * *   Data is collected at an interval of five minutes.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDomainTopReferVisitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainTopReferVisitResponse
   */
  async describeDomainTopReferVisitWithOptions(request: $_model.DescribeDomainTopReferVisitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainTopReferVisitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainTopReferVisit",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainTopReferVisitResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainTopReferVisitResponse({}));
  }

  /**
   * Queries frequently requested web pages of one or more accelerated domain names on a specified day and sorts the web pages. You can query data collected within the last 90 days.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature or [ship real-time logs in Log Service](https://help.aliyun.com/document_detail/440145.html) to analyze data.
   * > 
   * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * *   Data is collected at an interval of five minutes.
   * *   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDomainTopReferVisitRequest
   * @returns DescribeDomainTopReferVisitResponse
   */
  async describeDomainTopReferVisit(request: $_model.DescribeDomainTopReferVisitRequest): Promise<$_model.DescribeDomainTopReferVisitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainTopReferVisitWithOptions(request, runtime);
  }

  /**
   * Queries top 100 frequently requested URLs of an accelerated domain name within a specified time range.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature for data analysis.
   * > *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * >*   You can query data collected in the last 90 days.
   * >*   You can specify only one domain name in each call.
   * >*   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDomainTopUrlVisitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainTopUrlVisitResponse
   */
  async describeDomainTopUrlVisitWithOptions(request: $_model.DescribeDomainTopUrlVisitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainTopUrlVisitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainTopUrlVisit",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainTopUrlVisitResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainTopUrlVisitResponse({}));
  }

  /**
   * Queries top 100 frequently requested URLs of an accelerated domain name within a specified time range.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature for data analysis.
   * > *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * >*   You can query data collected in the last 90 days.
   * >*   You can specify only one domain name in each call.
   * >*   You can call this operation up to 10 times per second per account.
   * 
   * @param request - DescribeDomainTopUrlVisitRequest
   * @returns DescribeDomainTopUrlVisitResponse
   */
  async describeDomainTopUrlVisit(request: $_model.DescribeDomainTopUrlVisitRequest): Promise<$_model.DescribeDomainTopUrlVisitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainTopUrlVisitWithOptions(request, runtime);
  }

  /**
   * Queries network traffic for one or more accelerated domain names. You can query data that is collected in the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366|04:00 on the next day|
   * 
   * @param request - DescribeDomainTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainTrafficDataResponse
   */
  async describeDomainTrafficDataWithOptions(request: $_model.DescribeDomainTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainTrafficData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainTrafficDataResponse({}));
  }

  /**
   * Queries network traffic for one or more accelerated domain names. You can query data that is collected in the last 90 days.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|366 days|366|04:00 on the next day|
   * 
   * @param request - DescribeDomainTrafficDataRequest
   * @returns DescribeDomainTrafficDataResponse
   */
  async describeDomainTrafficData(request: $_model.DescribeDomainTrafficDataRequest): Promise<$_model.DescribeDomainTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainTrafficDataWithOptions(request, runtime);
  }

  /**
   * Queries the resource usage data of specific domain names in a specified billable region.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|90 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainUsageDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainUsageDataResponse
   */
  async describeDomainUsageDataWithOptions(request: $_model.DescribeDomainUsageDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainUsageDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.area)) {
      query["Area"] = request.area;
    }

    if (!$dara.isNull(request.dataProtocol)) {
      query["DataProtocol"] = request.dataProtocol;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.field)) {
      query["Field"] = request.field;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
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
      action: "DescribeDomainUsageData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainUsageDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainUsageDataResponse({}));
  }

  /**
   * Queries the resource usage data of specific domain names in a specified billable region.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account.
   * * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|4 hours|
   * |1 day|90 days|366 days|04:00 on the next day|
   * 
   * @param request - DescribeDomainUsageDataRequest
   * @returns DescribeDomainUsageDataResponse
   */
  async describeDomainUsageData(request: $_model.DescribeDomainUsageDataRequest): Promise<$_model.DescribeDomainUsageDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainUsageDataWithOptions(request, runtime);
  }

  /**
   * Queries the unique visitor (UV) data of an accelerated domain name. Data is collected every hour. You can query data collected in the last 90 days.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature for data analysis.
   * > 
   * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * *   You can specify only one accelerated domain name or all accelerated domain names in your Alibaba Cloud account.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDomainUvDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainUvDataResponse
   */
  async describeDomainUvDataWithOptions(request: $_model.DescribeDomainUvDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainUvDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainUvData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainUvDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainUvDataResponse({}));
  }

  /**
   * Queries the unique visitor (UV) data of an accelerated domain name. Data is collected every hour. You can query data collected in the last 90 days.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature for data analysis.
   * > 
   * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * *   You can specify only one accelerated domain name or all accelerated domain names in your Alibaba Cloud account.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeDomainUvDataRequest
   * @returns DescribeDomainUvDataResponse
   */
  async describeDomainUvData(request: $_model.DescribeDomainUvDataRequest): Promise<$_model.DescribeDomainUvDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainUvDataWithOptions(request, runtime);
  }

  /**
   * Queries the verification content of a domain name, including the host record and record value.
   * 
   * @remarks
   * You can call this operation to query the verification content of an accelerated domain name based on whether the global resource plan is enabled.
   * 
   * @param request - DescribeDomainVerifyDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainVerifyDataResponse
   */
  async describeDomainVerifyDataWithOptions(request: $_model.DescribeDomainVerifyDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainVerifyDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.globalResourcePlan)) {
      query["GlobalResourcePlan"] = request.globalResourcePlan;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainVerifyData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainVerifyDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainVerifyDataResponse({}));
  }

  /**
   * Queries the verification content of a domain name, including the host record and record value.
   * 
   * @remarks
   * You can call this operation to query the verification content of an accelerated domain name based on whether the global resource plan is enabled.
   * 
   * @param request - DescribeDomainVerifyDataRequest
   * @returns DescribeDomainVerifyDataResponse
   */
  async describeDomainVerifyData(request: $_model.DescribeDomainVerifyDataRequest): Promise<$_model.DescribeDomainVerifyDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainVerifyDataWithOptions(request, runtime);
  }

  /**
   * Queries accelerated domain names by origin server.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDomainsBySourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainsBySourceResponse
   */
  async describeDomainsBySourceWithOptions(request: $_model.DescribeDomainsBySourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainsBySourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sources)) {
      query["Sources"] = request.sources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainsBySource",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainsBySourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainsBySourceResponse({}));
  }

  /**
   * Queries accelerated domain names by origin server.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeDomainsBySourceRequest
   * @returns DescribeDomainsBySourceResponse
   */
  async describeDomainsBySource(request: $_model.DescribeDomainsBySourceRequest): Promise<$_model.DescribeDomainsBySourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainsBySourceWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring data of an accelerated domain name. Data is collected every day. You can query data collected within the last 90 days.
   * 
   * @remarks
   *   You can call this operation up to 10 times per second per account.
   * *   If you do not set StartTime or EndTime, data within the last 24 hours is queried. If you set both StartTime and EndTime, data within the specified time range is queried.
   * *   You can query the monitoring data of a specific accelerated domain name or all accelerated domain names that belong to your Alibaba Cloud account.
   * 
   * @param request - DescribeDomainsUsageByDayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainsUsageByDayResponse
   */
  async describeDomainsUsageByDayWithOptions(request: $_model.DescribeDomainsUsageByDayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainsUsageByDayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainsUsageByDay",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainsUsageByDayResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainsUsageByDayResponse({}));
  }

  /**
   * Queries the monitoring data of an accelerated domain name. Data is collected every day. You can query data collected within the last 90 days.
   * 
   * @remarks
   *   You can call this operation up to 10 times per second per account.
   * *   If you do not set StartTime or EndTime, data within the last 24 hours is queried. If you set both StartTime and EndTime, data within the specified time range is queried.
   * *   You can query the monitoring data of a specific accelerated domain name or all accelerated domain names that belong to your Alibaba Cloud account.
   * 
   * @param request - DescribeDomainsUsageByDayRequest
   * @returns DescribeDomainsUsageByDayResponse
   */
  async describeDomainsUsageByDay(request: $_model.DescribeDomainsUsageByDayRequest): Promise<$_model.DescribeDomainsUsageByDayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainsUsageByDayWithOptions(request, runtime);
  }

  /**
   * Queries the execution errors of a script in EdgeScript (ES).
   * 
   * @remarks
   *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeEsExceptionDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEsExceptionDataResponse
   */
  async describeEsExceptionDataWithOptions(request: $_model.DescribeEsExceptionDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEsExceptionDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEsExceptionData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEsExceptionDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEsExceptionDataResponse({}));
  }

  /**
   * Queries the execution errors of a script in EdgeScript (ES).
   * 
   * @remarks
   *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeEsExceptionDataRequest
   * @returns DescribeEsExceptionDataResponse
   */
  async describeEsExceptionData(request: $_model.DescribeEsExceptionDataRequest): Promise<$_model.DescribeEsExceptionDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEsExceptionDataWithOptions(request, runtime);
  }

  /**
   * Queries the execution status of scripts in EdgeScript (ES).
   * 
   * @remarks
   *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeEsExecuteDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEsExecuteDataResponse
   */
  async describeEsExecuteDataWithOptions(request: $_model.DescribeEsExecuteDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEsExecuteDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEsExecuteData",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEsExecuteDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEsExecuteDataResponse({}));
  }

  /**
   * Queries the execution status of scripts in EdgeScript (ES).
   * 
   * @remarks
   *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeEsExecuteDataRequest
   * @returns DescribeEsExecuteDataResponse
   */
  async describeEsExecuteData(request: $_model.DescribeEsExecuteDataRequest): Promise<$_model.DescribeEsExecuteDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEsExecuteDataWithOptions(request, runtime);
  }

  /**
   * Queries a specified Function Compute trigger.
   * 
   * @param request - DescribeFCTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFCTriggerResponse
   */
  async describeFCTriggerWithOptions(request: $_model.DescribeFCTriggerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFCTriggerResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFCTrigger",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFCTriggerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFCTriggerResponse({}));
  }

  /**
   * Queries a specified Function Compute trigger.
   * 
   * @param request - DescribeFCTriggerRequest
   * @returns DescribeFCTriggerResponse
   */
  async describeFCTrigger(request: $_model.DescribeFCTriggerRequest): Promise<$_model.DescribeFCTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFCTriggerWithOptions(request, runtime);
  }

  /**
   * Checks whether a specified IP address is the IP address of a CDN point of presence (POP).
   * 
   * @param request - DescribeIpInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIpInfoResponse
   */
  async describeIpInfoWithOptions(request: $_model.DescribeIpInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIpInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.IP)) {
      query["IP"] = request.IP;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIpInfo",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIpInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIpInfoResponse({}));
  }

  /**
   * Checks whether a specified IP address is the IP address of a CDN point of presence (POP).
   * 
   * @param request - DescribeIpInfoRequest
   * @returns DescribeIpInfoResponse
   */
  async describeIpInfo(request: $_model.DescribeIpInfoRequest): Promise<$_model.DescribeIpInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIpInfoWithOptions(request, runtime);
  }

  /**
   * Queries the status of IP addresses of points of presence (POPs). The status of an IP address of a POP indicates whether content delivery acceleration is supported by the POP.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeIpStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIpStatusResponse
   */
  async describeIpStatusWithOptions(request: $_model.DescribeIpStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIpStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIpStatus",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIpStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIpStatusResponse({}));
  }

  /**
   * Queries the status of IP addresses of points of presence (POPs). The status of an IP address of a POP indicates whether content delivery acceleration is supported by the POP.
   * 
   * @remarks
   * > You can call this operation up to 50 times per second per account.
   * 
   * @param request - DescribeIpStatusRequest
   * @returns DescribeIpStatusResponse
   */
  async describeIpStatus(request: $_model.DescribeIpStatusRequest): Promise<$_model.DescribeIpStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIpStatusWithOptions(request, runtime);
  }

  /**
   * Queries the virtual IP addresses (VIPs) of L2 CDN points of presence (POPs) for a specific domain name.
   * 
   * @remarks
   *   This operation is available only to users whose daily peak bandwidth value is higher than 1 Gbit/s. If you meet this requirement, you can [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex) to apply for permissions to use this operation.
   * *   You can call this operation up to 40 times per second per account.
   * 
   * @param request - DescribeL2VipsByDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeL2VipsByDomainResponse
   */
  async describeL2VipsByDomainWithOptions(request: $_model.DescribeL2VipsByDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeL2VipsByDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeL2VipsByDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeL2VipsByDomainResponse>(await this.callApi(params, req, runtime), new $_model.DescribeL2VipsByDomainResponse({}));
  }

  /**
   * Queries the virtual IP addresses (VIPs) of L2 CDN points of presence (POPs) for a specific domain name.
   * 
   * @remarks
   *   This operation is available only to users whose daily peak bandwidth value is higher than 1 Gbit/s. If you meet this requirement, you can [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex) to apply for permissions to use this operation.
   * *   You can call this operation up to 40 times per second per account.
   * 
   * @param request - DescribeL2VipsByDomainRequest
   * @returns DescribeL2VipsByDomainResponse
   */
  async describeL2VipsByDomain(request: $_model.DescribeL2VipsByDomainRequest): Promise<$_model.DescribeL2VipsByDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeL2VipsByDomainWithOptions(request, runtime);
  }

  /**
   * Queries the prefetch details of a task, including the prefetch progress of all resources in the task. Only users who are included in the whitelist can use this operation. You can contact your business manager to apply for the whitelist.
   * 
   * @remarks
   *   You can query data within the last 3 days.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribePreloadDetailByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePreloadDetailByIdResponse
   */
  async describePreloadDetailByIdWithOptions(request: $_model.DescribePreloadDetailByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePreloadDetailByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePreloadDetailById",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePreloadDetailByIdResponse>(await this.callApi(params, req, runtime), new $_model.DescribePreloadDetailByIdResponse({}));
  }

  /**
   * Queries the prefetch details of a task, including the prefetch progress of all resources in the task. Only users who are included in the whitelist can use this operation. You can contact your business manager to apply for the whitelist.
   * 
   * @remarks
   *   You can query data within the last 3 days.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribePreloadDetailByIdRequest
   * @returns DescribePreloadDetailByIdResponse
   */
  async describePreloadDetailById(request: $_model.DescribePreloadDetailByIdRequest): Promise<$_model.DescribePreloadDetailByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePreloadDetailByIdWithOptions(request, runtime);
  }

  /**
   * Queries the bandwidth values by Internet service provider (ISP) and region.
   * 
   * @remarks
   *   The data is collected every 5 minutes.
   * *   You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeRangeDataByLocateAndIspServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRangeDataByLocateAndIspServiceResponse
   */
  async describeRangeDataByLocateAndIspServiceWithOptions(request: $_model.DescribeRangeDataByLocateAndIspServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRangeDataByLocateAndIspServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ispNames)) {
      query["IspNames"] = request.ispNames;
    }

    if (!$dara.isNull(request.locationNames)) {
      query["LocationNames"] = request.locationNames;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRangeDataByLocateAndIspService",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRangeDataByLocateAndIspServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRangeDataByLocateAndIspServiceResponse({}));
  }

  /**
   * Queries the bandwidth values by Internet service provider (ISP) and region.
   * 
   * @remarks
   *   The data is collected every 5 minutes.
   * *   You can call this operation up to 20 times per second per account.
   * 
   * @param request - DescribeRangeDataByLocateAndIspServiceRequest
   * @returns DescribeRangeDataByLocateAndIspServiceResponse
   */
  async describeRangeDataByLocateAndIspService(request: $_model.DescribeRangeDataByLocateAndIspServiceRequest): Promise<$_model.DescribeRangeDataByLocateAndIspServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRangeDataByLocateAndIspServiceWithOptions(request, runtime);
  }

  /**
   * Queries the number of real-time log deliveries.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeRealtimeDeliveryAccRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRealtimeDeliveryAccResponse
   */
  async describeRealtimeDeliveryAccWithOptions(request: $_model.DescribeRealtimeDeliveryAccRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRealtimeDeliveryAccResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.logStore)) {
      query["LogStore"] = request.logStore;
    }

    if (!$dara.isNull(request.project)) {
      query["Project"] = request.project;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRealtimeDeliveryAcc",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRealtimeDeliveryAccResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRealtimeDeliveryAccResponse({}));
  }

  /**
   * Queries the number of real-time log deliveries.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeRealtimeDeliveryAccRequest
   * @returns DescribeRealtimeDeliveryAccResponse
   */
  async describeRealtimeDeliveryAcc(request: $_model.DescribeRealtimeDeliveryAccRequest): Promise<$_model.DescribeRealtimeDeliveryAccResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRealtimeDeliveryAccWithOptions(request, runtime);
  }

  /**
   * DescribeRefreshQuota
   * 
   * @remarks
   * Queries the maximum and remaining numbers of URLs and directories that can be refreshed, the maximum and remaining numbers of times that you can prefetch content, and the maximum and remaining numbers of URLs and directories that can be blocked on the current day.
   * 
   * @param request - DescribeRefreshQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRefreshQuotaResponse
   */
  async describeRefreshQuotaWithOptions(request: $_model.DescribeRefreshQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRefreshQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRefreshQuota",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRefreshQuotaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRefreshQuotaResponse({}));
  }

  /**
   * DescribeRefreshQuota
   * 
   * @remarks
   * Queries the maximum and remaining numbers of URLs and directories that can be refreshed, the maximum and remaining numbers of times that you can prefetch content, and the maximum and remaining numbers of URLs and directories that can be blocked on the current day.
   * 
   * @param request - DescribeRefreshQuotaRequest
   * @returns DescribeRefreshQuotaResponse
   */
  async describeRefreshQuota(request: $_model.DescribeRefreshQuotaRequest): Promise<$_model.DescribeRefreshQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRefreshQuotaWithOptions(request, runtime);
  }

  /**
   * Queries the statuses of refresh or prefetch tasks by task ID.
   * 
   * @remarks
   *   You can query data in the last three days.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeRefreshTaskByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRefreshTaskByIdResponse
   */
  async describeRefreshTaskByIdWithOptions(request: $_model.DescribeRefreshTaskByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRefreshTaskByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRefreshTaskById",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRefreshTaskByIdResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRefreshTaskByIdResponse({}));
  }

  /**
   * Queries the statuses of refresh or prefetch tasks by task ID.
   * 
   * @remarks
   *   You can query data in the last three days.
   * *   You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeRefreshTaskByIdRequest
   * @returns DescribeRefreshTaskByIdResponse
   */
  async describeRefreshTaskById(request: $_model.DescribeRefreshTaskByIdRequest): Promise<$_model.DescribeRefreshTaskByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRefreshTaskByIdWithOptions(request, runtime);
  }

  /**
   * Queries the status of refresh or prefetch tasks that belong to an accelerated domain name.
   * 
   * @remarks
   *   You can query the status of tasks by task ID or URL.
   * *   You can set both the **TaskId** and **ObjectPath** parameters. If you do not set the **TaskId** or **ObjectPath** parameter, data entries on the first page (20 entries) collected in the last 3 days are returned.
   * *   You can query data collected in the last 3 days.
   * *   If auto CDN cache update is enabled in the Object Storage Service (OSS) console, you cannot call the DescribeRefreshTasks operation to query automatic refresh tasks in OSS.
   * *   You can call this operation up to 10 times per second per account. If you want to query tasks at a higher frequency, call the [DescribeRefreshTaskById](https://help.aliyun.com/document_detail/187709.html) operation. This operation allows you to query tasks by task ID.
   * 
   * @param request - DescribeRefreshTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRefreshTasksResponse
   */
  async describeRefreshTasksWithOptions(request: $_model.DescribeRefreshTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRefreshTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRefreshTasks",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRefreshTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRefreshTasksResponse({}));
  }

  /**
   * Queries the status of refresh or prefetch tasks that belong to an accelerated domain name.
   * 
   * @remarks
   *   You can query the status of tasks by task ID or URL.
   * *   You can set both the **TaskId** and **ObjectPath** parameters. If you do not set the **TaskId** or **ObjectPath** parameter, data entries on the first page (20 entries) collected in the last 3 days are returned.
   * *   You can query data collected in the last 3 days.
   * *   If auto CDN cache update is enabled in the Object Storage Service (OSS) console, you cannot call the DescribeRefreshTasks operation to query automatic refresh tasks in OSS.
   * *   You can call this operation up to 10 times per second per account. If you want to query tasks at a higher frequency, call the [DescribeRefreshTaskById](https://help.aliyun.com/document_detail/187709.html) operation. This operation allows you to query tasks by task ID.
   * 
   * @param request - DescribeRefreshTasksRequest
   * @returns DescribeRefreshTasksResponse
   */
  async describeRefreshTasks(request: $_model.DescribeRefreshTasksRequest): Promise<$_model.DescribeRefreshTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRefreshTasksWithOptions(request, runtime);
  }

  /**
   * Queries node IP addresses in the staging environment.
   * 
   * @remarks
   * >The maximum number of times that each user can call this operation per second is 30.
   * 
   * @param request - DescribeStagingIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStagingIpResponse
   */
  async describeStagingIpWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStagingIpResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStagingIp",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStagingIpResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStagingIpResponse({}));
  }

  /**
   * Queries node IP addresses in the staging environment.
   * 
   * @remarks
   * >The maximum number of times that each user can call this operation per second is 30.
   * @returns DescribeStagingIpResponse
   */
  async describeStagingIp(): Promise<$_model.DescribeStagingIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStagingIpWithOptions(runtime);
  }

  /**
   * Queries tags that are added to specified resources.
   * 
   * @remarks
   * >  The maximum number of times that each user can call this operation per second is 10.
   * 
   * @param request - DescribeTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagResourcesResponse
   */
  async describeTagResourcesWithOptions(request: $_model.DescribeTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagResourcesResponse> {
    request.validate();
    let query = { };
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
      action: "DescribeTagResources",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagResourcesResponse({}));
  }

  /**
   * Queries tags that are added to specified resources.
   * 
   * @remarks
   * >  The maximum number of times that each user can call this operation per second is 10.
   * 
   * @param request - DescribeTagResourcesRequest
   * @returns DescribeTagResourcesResponse
   */
  async describeTagResources(request: $_model.DescribeTagResourcesRequest): Promise<$_model.DescribeTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the top N domain names ranked by network traffic. You can query data collected in the last 30 days.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature for data analysis.
   * > *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the current month. If you set both these parameters, the request returns the data collected within the specified time range.
   * >*   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeTopDomainsByFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTopDomainsByFlowResponse
   */
  async describeTopDomainsByFlowWithOptions(request: $_model.DescribeTopDomainsByFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTopDomainsByFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTopDomainsByFlow",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTopDomainsByFlowResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTopDomainsByFlowResponse({}));
  }

  /**
   * Queries the top N domain names ranked by network traffic. You can query data collected in the last 30 days.
   * 
   * @remarks
   * The statistical analysis feature of Alibaba Cloud CDN is no longer available. The API operations related to the statistical analysis feature are no longer maintained. We recommend that you do not use the API operations because data may be missing or inaccurate. You can use the [operations report](https://help.aliyun.com/document_detail/279577.html) feature for data analysis.
   * > *   If you do not set the **StartTime** or **EndTime** parameter, the request returns the data collected in the current month. If you set both these parameters, the request returns the data collected within the specified time range.
   * >*   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeTopDomainsByFlowRequest
   * @returns DescribeTopDomainsByFlowResponse
   */
  async describeTopDomainsByFlow(request: $_model.DescribeTopDomainsByFlowRequest): Promise<$_model.DescribeTopDomainsByFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTopDomainsByFlowWithOptions(request, runtime);
  }

  /**
   * Queries the status of a user.
   * 
   * @param request - DescribeUserCdnStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserCdnStatusResponse
   */
  async describeUserCdnStatusWithOptions(request: $_model.DescribeUserCdnStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserCdnStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserCdnStatus",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserCdnStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserCdnStatusResponse({}));
  }

  /**
   * Queries the status of a user.
   * 
   * @param request - DescribeUserCdnStatusRequest
   * @returns DescribeUserCdnStatusResponse
   */
  async describeUserCdnStatus(request: $_model.DescribeUserCdnStatusRequest): Promise<$_model.DescribeUserCdnStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserCdnStatusWithOptions(request, runtime);
  }

  /**
   * Queries the number of domain names whose SSL certificates are about to expire or have already expired.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeUserCertificateExpireCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserCertificateExpireCountResponse
   */
  async describeUserCertificateExpireCountWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserCertificateExpireCountResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserCertificateExpireCount",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserCertificateExpireCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserCertificateExpireCountResponse({}));
  }

  /**
   * Queries the number of domain names whose SSL certificates are about to expire or have already expired.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * @returns DescribeUserCertificateExpireCountResponse
   */
  async describeUserCertificateExpireCount(): Promise<$_model.DescribeUserCertificateExpireCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserCertificateExpireCountWithOptions(runtime);
  }

  /**
   * Queries configurations of security features.
   * 
   * @param request - DescribeUserConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserConfigsResponse
   */
  async describeUserConfigsWithOptions(request: $_model.DescribeUserConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserConfigs",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserConfigsResponse({}));
  }

  /**
   * Queries configurations of security features.
   * 
   * @param request - DescribeUserConfigsRequest
   * @returns DescribeUserConfigsResponse
   */
  async describeUserConfigs(request: $_model.DescribeUserConfigsRequest): Promise<$_model.DescribeUserConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserConfigsWithOptions(request, runtime);
  }

  /**
   * Queries all accelerated domain names in your Alibaba Cloud account and the status of the accelerated domain names. You can filter domain names by name or status. Fuzzy match is supported.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can specify up to 50 domain names in each request. Separate multiple domain names with commas (,).
   * 
   * @param request - DescribeUserDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserDomainsResponse
   */
  async describeUserDomainsWithOptions(request: $_model.DescribeUserDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cdnType)) {
      query["CdnType"] = request.cdnType;
    }

    if (!$dara.isNull(request.changeEndTime)) {
      query["ChangeEndTime"] = request.changeEndTime;
    }

    if (!$dara.isNull(request.changeStartTime)) {
      query["ChangeStartTime"] = request.changeStartTime;
    }

    if (!$dara.isNull(request.checkDomainShow)) {
      query["CheckDomainShow"] = request.checkDomainShow;
    }

    if (!$dara.isNull(request.coverage)) {
      query["Coverage"] = request.coverage;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainSearchType)) {
      query["DomainSearchType"] = request.domainSearchType;
    }

    if (!$dara.isNull(request.domainStatus)) {
      query["DomainStatus"] = request.domainStatus;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserDomains",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserDomainsResponse({}));
  }

  /**
   * Queries all accelerated domain names in your Alibaba Cloud account and the status of the accelerated domain names. You can filter domain names by name or status. Fuzzy match is supported.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account.
   * *   You can specify up to 50 domain names in each request. Separate multiple domain names with commas (,).
   * 
   * @param request - DescribeUserDomainsRequest
   * @returns DescribeUserDomainsResponse
   */
  async describeUserDomains(request: $_model.DescribeUserDomainsRequest): Promise<$_model.DescribeUserDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserDomainsWithOptions(request, runtime);
  }

  /**
   * Queries user tags.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeUserTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserTagsResponse
   */
  async describeUserTagsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserTagsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserTags",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserTagsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserTagsResponse({}));
  }

  /**
   * Queries user tags.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * @returns DescribeUserTagsResponse
   */
  async describeUserTags(): Promise<$_model.DescribeUserTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserTagsWithOptions(runtime);
  }

  /**
   * Queries usage export tasks that were created in the last three months.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeUserUsageDataExportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserUsageDataExportTaskResponse
   */
  async describeUserUsageDataExportTaskWithOptions(request: $_model.DescribeUserUsageDataExportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserUsageDataExportTaskResponse> {
    request.validate();
    let query = { };
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
      action: "DescribeUserUsageDataExportTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserUsageDataExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserUsageDataExportTaskResponse({}));
  }

  /**
   * Queries usage export tasks that were created in the last three months.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeUserUsageDataExportTaskRequest
   * @returns DescribeUserUsageDataExportTaskResponse
   */
  async describeUserUsageDataExportTask(request: $_model.DescribeUserUsageDataExportTaskRequest): Promise<$_model.DescribeUserUsageDataExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserUsageDataExportTaskWithOptions(request, runtime);
  }

  /**
   * Queries tasks that were used to export resource usage details of one or more accelerated domain names that belong to your Alibaba Cloud account. Resource usage information is collected every five minutes.
   * 
   * @remarks
   *   This operation has been available since July 20, 2018. You can query information about resource usage collected within the last three months.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeUserUsageDetailDataExportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserUsageDetailDataExportTaskResponse
   */
  async describeUserUsageDetailDataExportTaskWithOptions(request: $_model.DescribeUserUsageDetailDataExportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserUsageDetailDataExportTaskResponse> {
    request.validate();
    let query = { };
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
      action: "DescribeUserUsageDetailDataExportTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserUsageDetailDataExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserUsageDetailDataExportTaskResponse({}));
  }

  /**
   * Queries tasks that were used to export resource usage details of one or more accelerated domain names that belong to your Alibaba Cloud account. Resource usage information is collected every five minutes.
   * 
   * @remarks
   *   This operation has been available since July 20, 2018. You can query information about resource usage collected within the last three months.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - DescribeUserUsageDetailDataExportTaskRequest
   * @returns DescribeUserUsageDetailDataExportTaskResponse
   */
  async describeUserUsageDetailDataExportTask(request: $_model.DescribeUserUsageDetailDataExportTaskRequest): Promise<$_model.DescribeUserUsageDetailDataExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserUsageDetailDataExportTaskWithOptions(request, runtime);
  }

  /**
   * Queries virtual IP addresses (VIPs) of CDN points of presence (POPs) by domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeUserVipsByDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserVipsByDomainResponse
   */
  async describeUserVipsByDomainWithOptions(request: $_model.DescribeUserVipsByDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserVipsByDomainResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserVipsByDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserVipsByDomainResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserVipsByDomainResponse({}));
  }

  /**
   * Queries virtual IP addresses (VIPs) of CDN points of presence (POPs) by domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - DescribeUserVipsByDomainRequest
   * @returns DescribeUserVipsByDomainResponse
   */
  async describeUserVipsByDomain(request: $_model.DescribeUserVipsByDomainRequest): Promise<$_model.DescribeUserVipsByDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserVipsByDomainWithOptions(request, runtime);
  }

  /**
   * Queries the ownership verification content of an accelerated domain name.
   * 
   * @param request - DescribeVerifyContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifyContentResponse
   */
  async describeVerifyContentWithOptions(request: $_model.DescribeVerifyContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVerifyContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVerifyContent",
      version: "2018-05-10",
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
   * Queries the ownership verification content of an accelerated domain name.
   * 
   * @param request - DescribeVerifyContentRequest
   * @returns DescribeVerifyContentResponse
   */
  async describeVerifyContent(request: $_model.DescribeVerifyContentRequest): Promise<$_model.DescribeVerifyContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyContentWithOptions(request, runtime);
  }

  /**
   * Disables real-time log delivery for specific accelerated domain names.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DisableRealtimeLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableRealtimeLogDeliveryResponse
   */
  async disableRealtimeLogDeliveryWithOptions(request: $_model.DisableRealtimeLogDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableRealtimeLogDeliveryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableRealtimeLogDelivery",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.DisableRealtimeLogDeliveryResponse({}));
  }

  /**
   * Disables real-time log delivery for specific accelerated domain names.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - DisableRealtimeLogDeliveryRequest
   * @returns DisableRealtimeLogDeliveryResponse
   */
  async disableRealtimeLogDelivery(request: $_model.DisableRealtimeLogDeliveryRequest): Promise<$_model.DisableRealtimeLogDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
   * Enables real-time log delivery for an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - EnableRealtimeLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableRealtimeLogDeliveryResponse
   */
  async enableRealtimeLogDeliveryWithOptions(request: $_model.EnableRealtimeLogDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableRealtimeLogDeliveryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableRealtimeLogDelivery",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.EnableRealtimeLogDeliveryResponse({}));
  }

  /**
   * Enables real-time log delivery for an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - EnableRealtimeLogDeliveryRequest
   * @returns EnableRealtimeLogDeliveryResponse
   */
  async enableRealtimeLogDelivery(request: $_model.EnableRealtimeLogDeliveryRequest): Promise<$_model.EnableRealtimeLogDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
   * 按域名、functionName查询灰度配置信息，返回的信息中包含当前的灰度状态、灰度进度
   * 
   * @param request - GetGrayDomainFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGrayDomainFunctionResponse
   */
  async getGrayDomainFunctionWithOptions(request: $_model.GetGrayDomainFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGrayDomainFunctionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.functionNames)) {
      body["FunctionNames"] = request.functionNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGrayDomainFunction",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGrayDomainFunctionResponse>(await this.callApi(params, req, runtime), new $_model.GetGrayDomainFunctionResponse({}));
  }

  /**
   * 按域名、functionName查询灰度配置信息，返回的信息中包含当前的灰度状态、灰度进度
   * 
   * @param request - GetGrayDomainFunctionRequest
   * @returns GetGrayDomainFunctionResponse
   */
  async getGrayDomainFunction(request: $_model.GetGrayDomainFunctionRequest): Promise<$_model.GetGrayDomainFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGrayDomainFunctionWithOptions(request, runtime);
  }

  /**
   * Queries domain names by log configuration ID.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListDomainsByLogConfigIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainsByLogConfigIdResponse
   */
  async listDomainsByLogConfigIdWithOptions(request: $_model.ListDomainsByLogConfigIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDomainsByLogConfigIdResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDomainsByLogConfigId",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDomainsByLogConfigIdResponse>(await this.callApi(params, req, runtime), new $_model.ListDomainsByLogConfigIdResponse({}));
  }

  /**
   * Queries domain names by log configuration ID.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListDomainsByLogConfigIdRequest
   * @returns ListDomainsByLogConfigIdResponse
   */
  async listDomainsByLogConfigId(request: $_model.ListDomainsByLogConfigIdRequest): Promise<$_model.ListDomainsByLogConfigIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDomainsByLogConfigIdWithOptions(request, runtime);
  }

  /**
   * Queries the Function Compute trigger that is set for an Alibaba Cloud CDN event.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListFCTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFCTriggerResponse
   */
  async listFCTriggerWithOptions(request: $_model.ListFCTriggerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFCTriggerResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFCTrigger",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFCTriggerResponse>(await this.callApi(params, req, runtime), new $_model.ListFCTriggerResponse({}));
  }

  /**
   * Queries the Function Compute trigger that is set for an Alibaba Cloud CDN event.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListFCTriggerRequest
   * @returns ListFCTriggerResponse
   */
  async listFCTrigger(request: $_model.ListFCTriggerRequest): Promise<$_model.ListFCTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFCTriggerWithOptions(request, runtime);
  }

  /**
   * Queries all real-time log delivery tasks within your Alibaba Cloud account.
   * 
   * @param request - ListRealtimeLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRealtimeLogDeliveryResponse
   */
  async listRealtimeLogDeliveryWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListRealtimeLogDeliveryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListRealtimeLogDelivery",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.ListRealtimeLogDeliveryResponse({}));
  }

  /**
   * Queries all real-time log delivery tasks within your Alibaba Cloud account.
   * @returns ListRealtimeLogDeliveryResponse
   */
  async listRealtimeLogDelivery(): Promise<$_model.ListRealtimeLogDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRealtimeLogDeliveryWithOptions(runtime);
  }

  /**
   * Queries all domain names that are associated with a specific real-time log delivery configuration record.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListRealtimeLogDeliveryDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRealtimeLogDeliveryDomainsResponse
   */
  async listRealtimeLogDeliveryDomainsWithOptions(request: $_model.ListRealtimeLogDeliveryDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRealtimeLogDeliveryDomainsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRealtimeLogDeliveryDomains",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRealtimeLogDeliveryDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ListRealtimeLogDeliveryDomainsResponse({}));
  }

  /**
   * Queries all domain names that are associated with a specific real-time log delivery configuration record.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListRealtimeLogDeliveryDomainsRequest
   * @returns ListRealtimeLogDeliveryDomainsResponse
   */
  async listRealtimeLogDeliveryDomains(request: $_model.ListRealtimeLogDeliveryDomainsRequest): Promise<$_model.ListRealtimeLogDeliveryDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRealtimeLogDeliveryDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the information about the real-time log delivery feature in a specified region.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListRealtimeLogDeliveryInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRealtimeLogDeliveryInfosResponse
   */
  async listRealtimeLogDeliveryInfosWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListRealtimeLogDeliveryInfosResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListRealtimeLogDeliveryInfos",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRealtimeLogDeliveryInfosResponse>(await this.callApi(params, req, runtime), new $_model.ListRealtimeLogDeliveryInfosResponse({}));
  }

  /**
   * Queries the information about the real-time log delivery feature in a specified region.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * @returns ListRealtimeLogDeliveryInfosResponse
   */
  async listRealtimeLogDeliveryInfos(): Promise<$_model.ListRealtimeLogDeliveryInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRealtimeLogDeliveryInfosWithOptions(runtime);
  }

  /**
   * Queries the tags that are attached to a resource.
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

    if (!$dara.isNull(request.tagOwnerBid)) {
      query["TagOwnerBid"] = request.tagOwnerBid;
    }

    if (!$dara.isNull(request.tagOwnerUid)) {
      query["TagOwnerUid"] = request.tagOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2018-05-10",
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
   * Queries the tags that are attached to a resource.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries all custom log configurations in your account.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListUserCustomLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserCustomLogConfigResponse
   */
  async listUserCustomLogConfigWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListUserCustomLogConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListUserCustomLogConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserCustomLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.ListUserCustomLogConfigResponse({}));
  }

  /**
   * Queries all custom log configurations in your account.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * @returns ListUserCustomLogConfigResponse
   */
  async listUserCustomLogConfig(): Promise<$_model.ListUserCustomLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserCustomLogConfigWithOptions(runtime);
  }

  /**
   * Modifies the configuration of an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - ModifyCdnDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCdnDomainResponse
   */
  async modifyCdnDomainWithOptions(request: $_model.ModifyCdnDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCdnDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!$dara.isNull(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCdnDomainResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCdnDomainResponse({}));
  }

  /**
   * Modifies the configuration of an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - ModifyCdnDomainRequest
   * @returns ModifyCdnDomainResponse
   */
  async modifyCdnDomain(request: $_model.ModifyCdnDomainRequest): Promise<$_model.ModifyCdnDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCdnDomainWithOptions(request, runtime);
  }

  /**
   * Transfer domain names from an Alibaba Cloud account to the current account.
   * 
   * @remarks
   * This operation is used in the following scenario:
   * *   You have multiple Alibaba Cloud accounts and want to transfer domain names from Account A to Account B.
   * *   You are prompted that a domain name has been added when you add the domain name to Alibaba Cloud CDN. You do not know which account does the domain name belong to, and you want to transfer the domain name to your current account.
   * 
   * @param request - ModifyCdnDomainOwnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCdnDomainOwnerResponse
   */
  async modifyCdnDomainOwnerWithOptions(request: $_model.ModifyCdnDomainOwnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCdnDomainOwnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCdnDomainOwner",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCdnDomainOwnerResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCdnDomainOwnerResponse({}));
  }

  /**
   * Transfer domain names from an Alibaba Cloud account to the current account.
   * 
   * @remarks
   * This operation is used in the following scenario:
   * *   You have multiple Alibaba Cloud accounts and want to transfer domain names from Account A to Account B.
   * *   You are prompted that a domain name has been added when you add the domain name to Alibaba Cloud CDN. You do not know which account does the domain name belong to, and you want to transfer the domain name to your current account.
   * 
   * @param request - ModifyCdnDomainOwnerRequest
   * @returns ModifyCdnDomainOwnerResponse
   */
  async modifyCdnDomainOwner(request: $_model.ModifyCdnDomainOwnerRequest): Promise<$_model.ModifyCdnDomainOwnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCdnDomainOwnerWithOptions(request, runtime);
  }

  /**
   * Changes the acceleration region for an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - ModifyCdnDomainSchdmByPropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCdnDomainSchdmByPropertyResponse
   */
  async modifyCdnDomainSchdmByPropertyWithOptions(request: $_model.ModifyCdnDomainSchdmByPropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCdnDomainSchdmByPropertyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.property)) {
      query["Property"] = request.property;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCdnDomainSchdmByProperty",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCdnDomainSchdmByPropertyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCdnDomainSchdmByPropertyResponse({}));
  }

  /**
   * Changes the acceleration region for an accelerated domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - ModifyCdnDomainSchdmByPropertyRequest
   * @returns ModifyCdnDomainSchdmByPropertyResponse
   */
  async modifyCdnDomainSchdmByProperty(request: $_model.ModifyCdnDomainSchdmByPropertyRequest): Promise<$_model.ModifyCdnDomainSchdmByPropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCdnDomainSchdmByPropertyWithOptions(request, runtime);
  }

  /**
   * Changes the metering method of Alibaba Cloud CDN.
   * 
   * @param request - ModifyCdnServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCdnServiceResponse
   */
  async modifyCdnServiceWithOptions(request: $_model.ModifyCdnServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCdnServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCdnService",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCdnServiceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCdnServiceResponse({}));
  }

  /**
   * Changes the metering method of Alibaba Cloud CDN.
   * 
   * @param request - ModifyCdnServiceRequest
   * @returns ModifyCdnServiceResponse
   */
  async modifyCdnService(request: $_model.ModifyCdnServiceRequest): Promise<$_model.ModifyCdnServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCdnServiceWithOptions(request, runtime);
  }

  /**
   * A客户定制新增修改域名采样率接口
   * 
   * @param request - ModifyCustomDomainSampleRateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCustomDomainSampleRateResponse
   */
  async modifyCustomDomainSampleRateWithOptions(request: $_model.ModifyCustomDomainSampleRateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCustomDomainSampleRateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseConfigID)) {
      body["BaseConfigID"] = request.baseConfigID;
    }

    if (!$dara.isNull(request.domainNames)) {
      body["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.sampleRate)) {
      body["SampleRate"] = request.sampleRate;
    }

    if (!$dara.isNull(request.sinkID)) {
      body["SinkID"] = request.sinkID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCustomDomainSampleRate",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCustomDomainSampleRateResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCustomDomainSampleRateResponse({}));
  }

  /**
   * A客户定制新增修改域名采样率接口
   * 
   * @param request - ModifyCustomDomainSampleRateRequest
   * @returns ModifyCustomDomainSampleRateResponse
   */
  async modifyCustomDomainSampleRate(request: $_model.ModifyCustomDomainSampleRateRequest): Promise<$_model.ModifyCustomDomainSampleRateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCustomDomainSampleRateWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of real-time log delivery for a specific domain name. Each domain name supports only one Logstore.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - ModifyRealtimeLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRealtimeLogDeliveryResponse
   */
  async modifyRealtimeLogDeliveryWithOptions(request: $_model.ModifyRealtimeLogDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRealtimeLogDeliveryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRealtimeLogDelivery",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRealtimeLogDeliveryResponse({}));
  }

  /**
   * Modifies the configurations of real-time log delivery for a specific domain name. Each domain name supports only one Logstore.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - ModifyRealtimeLogDeliveryRequest
   * @returns ModifyRealtimeLogDeliveryResponse
   */
  async modifyRealtimeLogDelivery(request: $_model.ModifyRealtimeLogDeliveryRequest): Promise<$_model.ModifyRealtimeLogDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
   * Activates Alibaba Cloud CDN. You must activate Alibaba Cloud CDN before you can manage domain names in Alibaba Cloud CDN.
   * 
   * @remarks
   *   Alibaba Cloud CDN can be activated only once per Alibaba Cloud account. The Alibaba Cloud account must complete real-name verification to activate Alibaba Cloud CDN.
   * *   You can call this operation up to five times per second per user.
   * 
   * @param request - OpenCdnServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenCdnServiceResponse
   */
  async openCdnServiceWithOptions(request: $_model.OpenCdnServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenCdnServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenCdnService",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenCdnServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenCdnServiceResponse({}));
  }

  /**
   * Activates Alibaba Cloud CDN. You must activate Alibaba Cloud CDN before you can manage domain names in Alibaba Cloud CDN.
   * 
   * @remarks
   *   Alibaba Cloud CDN can be activated only once per Alibaba Cloud account. The Alibaba Cloud account must complete real-name verification to activate Alibaba Cloud CDN.
   * *   You can call this operation up to five times per second per user.
   * 
   * @param request - OpenCdnServiceRequest
   * @returns OpenCdnServiceResponse
   */
  async openCdnService(request: $_model.OpenCdnServiceRequest): Promise<$_model.OpenCdnServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openCdnServiceWithOptions(request, runtime);
  }

  /**
   * 发布灰度配置到线上，支持多种模式，如全网发布、指定方式(灰度发布)，回滚
   * 
   * @param request - PublishGrayDomainConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishGrayDomainConfigResponse
   */
  async publishGrayDomainConfigWithOptions(request: $_model.PublishGrayDomainConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishGrayDomainConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customCountryId)) {
      body["CustomCountryId"] = request.customCountryId;
    }

    if (!$dara.isNull(request.customPercent)) {
      body["CustomPercent"] = request.customPercent;
    }

    if (!$dara.isNull(request.customProvinceId)) {
      body["CustomProvinceId"] = request.customProvinceId;
    }

    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.publishMode)) {
      body["PublishMode"] = request.publishMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishGrayDomainConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishGrayDomainConfigResponse>(await this.callApi(params, req, runtime), new $_model.PublishGrayDomainConfigResponse({}));
  }

  /**
   * 发布灰度配置到线上，支持多种模式，如全网发布、指定方式(灰度发布)，回滚
   * 
   * @param request - PublishGrayDomainConfigRequest
   * @returns PublishGrayDomainConfigResponse
   */
  async publishGrayDomainConfig(request: $_model.PublishGrayDomainConfigRequest): Promise<$_model.PublishGrayDomainConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishGrayDomainConfigWithOptions(request, runtime);
  }

  /**
   * Publishes the configurations of the staging environment to the production environment.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - PublishStagingConfigToProductionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishStagingConfigToProductionResponse
   */
  async publishStagingConfigToProductionWithOptions(request: $_model.PublishStagingConfigToProductionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishStagingConfigToProductionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishStagingConfigToProduction",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishStagingConfigToProductionResponse>(await this.callApi(params, req, runtime), new $_model.PublishStagingConfigToProductionResponse({}));
  }

  /**
   * Publishes the configurations of the staging environment to the production environment.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - PublishStagingConfigToProductionRequest
   * @returns PublishStagingConfigToProductionResponse
   */
  async publishStagingConfigToProduction(request: $_model.PublishStagingConfigToProductionRequest): Promise<$_model.PublishStagingConfigToProductionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishStagingConfigToProductionWithOptions(request, runtime);
  }

  /**
   * Prefetches content from origin servers to points of presence (POPs). This reduces loads on origin servers because users can directly hit cache upon their first visits.
   * 
   * @remarks
   *   Alibaba Cloud CDN supports POST requests in which parameters are sent as a form.
   * *   You can call the [RefreshObjectCaches](https://help.aliyun.com/document_detail/91164.html) operation to refresh content and call the [PushObjectCache](https://help.aliyun.com/document_detail/91161.html) operation to prefetch content.
   * *   By default, each Alibaba Cloud account can submit up to 1,000 URLs per day. If the daily peak bandwidth value of your workloads exceeds 200 Mbit/s, you can [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//ticket-intl.console.aliyun.com/%23/ticket/createIndex) to increase your daily quota. Alibaba Cloud reviews your application and then increases the quota accordingly.
   * *   You can specify at most 100 URLs in each prefetch request.
   * *   For each Alibaba Cloud account, the prefetch queue can contain up to 50,000 URLs. Content is prefetched based on the time when the URLs are submitted. The URL that is submitted the earliest has the highest priority. If the number of URLs in the queue reaches 50,000, you cannot submit more URLs until the number drops below 50,000.
   * *   You can call this operation up to 50 times per second per account.
   * *   For more information about how to automate refresh or prefetch tasks, see [Run scripts to refresh and prefetch content](https://help.aliyun.com/document_detail/151829.html).
   * ## Precautions
   * *   After a prefetch task is submitted and completed, the POPs immediately start to retrieve resources from the origin server. Therefore, a large number of refresh tasks cause a large number of concurrent download tasks. This increases the number of requests that are redirected to the origin server. The back-to-origin routing process consumes more bandwidth resources and the origin server may be overwhelmed.
   * *   The time required for a prefetch task to complete is proportional to the size of the prefetched file. In actual practice, most prefetch tasks require 5 to 30 minutes to complete. A task with a smaller average file size requires less time.
   * *   To allow RAM users to perform this operation, you must first grant them the required permissions. For more information, see [Authorize a RAM user to prefetch and refresh resources](https://help.aliyun.com/document_detail/260300.html).
   * 
   * @param request - PushObjectCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushObjectCacheResponse
   */
  async pushObjectCacheWithOptions(request: $_model.PushObjectCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushObjectCacheResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.area)) {
      query["Area"] = request.area;
    }

    if (!$dara.isNull(request.l2Preload)) {
      query["L2Preload"] = request.l2Preload;
    }

    if (!$dara.isNull(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.queryHashkey)) {
      query["QueryHashkey"] = request.queryHashkey;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.withHeader)) {
      query["WithHeader"] = request.withHeader;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushObjectCache",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushObjectCacheResponse>(await this.callApi(params, req, runtime), new $_model.PushObjectCacheResponse({}));
  }

  /**
   * Prefetches content from origin servers to points of presence (POPs). This reduces loads on origin servers because users can directly hit cache upon their first visits.
   * 
   * @remarks
   *   Alibaba Cloud CDN supports POST requests in which parameters are sent as a form.
   * *   You can call the [RefreshObjectCaches](https://help.aliyun.com/document_detail/91164.html) operation to refresh content and call the [PushObjectCache](https://help.aliyun.com/document_detail/91161.html) operation to prefetch content.
   * *   By default, each Alibaba Cloud account can submit up to 1,000 URLs per day. If the daily peak bandwidth value of your workloads exceeds 200 Mbit/s, you can [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//ticket-intl.console.aliyun.com/%23/ticket/createIndex) to increase your daily quota. Alibaba Cloud reviews your application and then increases the quota accordingly.
   * *   You can specify at most 100 URLs in each prefetch request.
   * *   For each Alibaba Cloud account, the prefetch queue can contain up to 50,000 URLs. Content is prefetched based on the time when the URLs are submitted. The URL that is submitted the earliest has the highest priority. If the number of URLs in the queue reaches 50,000, you cannot submit more URLs until the number drops below 50,000.
   * *   You can call this operation up to 50 times per second per account.
   * *   For more information about how to automate refresh or prefetch tasks, see [Run scripts to refresh and prefetch content](https://help.aliyun.com/document_detail/151829.html).
   * ## Precautions
   * *   After a prefetch task is submitted and completed, the POPs immediately start to retrieve resources from the origin server. Therefore, a large number of refresh tasks cause a large number of concurrent download tasks. This increases the number of requests that are redirected to the origin server. The back-to-origin routing process consumes more bandwidth resources and the origin server may be overwhelmed.
   * *   The time required for a prefetch task to complete is proportional to the size of the prefetched file. In actual practice, most prefetch tasks require 5 to 30 minutes to complete. A task with a smaller average file size requires less time.
   * *   To allow RAM users to perform this operation, you must first grant them the required permissions. For more information, see [Authorize a RAM user to prefetch and refresh resources](https://help.aliyun.com/document_detail/260300.html).
   * 
   * @param request - PushObjectCacheRequest
   * @returns PushObjectCacheResponse
   */
  async pushObjectCache(request: $_model.PushObjectCacheRequest): Promise<$_model.PushObjectCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushObjectCacheWithOptions(request, runtime);
  }

  /**
   * Refreshes the cache based on cache tags that you configured.
   * 
   * @param request - RefreshObjectCacheByCacheTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshObjectCacheByCacheTagResponse
   */
  async refreshObjectCacheByCacheTagWithOptions(request: $_model.RefreshObjectCacheByCacheTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshObjectCacheByCacheTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cacheTag)) {
      query["CacheTag"] = request.cacheTag;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshObjectCacheByCacheTag",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshObjectCacheByCacheTagResponse>(await this.callApi(params, req, runtime), new $_model.RefreshObjectCacheByCacheTagResponse({}));
  }

  /**
   * Refreshes the cache based on cache tags that you configured.
   * 
   * @param request - RefreshObjectCacheByCacheTagRequest
   * @returns RefreshObjectCacheByCacheTagResponse
   */
  async refreshObjectCacheByCacheTag(request: $_model.RefreshObjectCacheByCacheTagRequest): Promise<$_model.RefreshObjectCacheByCacheTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshObjectCacheByCacheTagWithOptions(request, runtime);
  }

  /**
   * Refreshes files on Alibaba Cloud CDN points of presence (POPs). After files are refreshed, the original file content immediately becomes invalid. If clients request the original file content, Alibaba Cloud CDN forwards the requests to the origin server. Then, Alibaba Cloud CDN caches the latest content to the POPs and returns the content to the clients. Alibaba Cloud CDN allows you to refresh content from multiple URLs at the same time.
   * 
   * @remarks
   *   Alibaba Cloud CDN supports POST requests in which parameters are sent as a form.
   * *   You can call the [RefreshObjectCaches](https://help.aliyun.com/document_detail/91164.html) operation to refresh content and call the [PushObjectCache](https://help.aliyun.com/document_detail/91161.html) operation to prefetch content.
   * *   You can call the RefreshObjectCaches operation up to 50 times per second per account.
   * *   For more information about how to automatically refresh or prefetch tasks, see [Run scripts to refresh and prefetch content](https://help.aliyun.com/document_detail/151829.html).
   * ## Precautions
   * *   After a refresh task is submitted and completed, specific resources are removed from POPs. When a POP receives a request for the removed resources, the POP forwards the request to the origin server to retrieve the resources. The retrieved resources are returned to the client and cached on the POP. Multiple refresh tasks may cause a large number of resources to be removed from the POPs. This increases the number of requests that are forwarded to the origin server. The back-to-origin routing process consumes more bandwidth resources and the origin server may be overwhelmed.
   * *   A refresh task takes effect 5 to 6 minutes after being submitted. This means that if the resource you want to refresh has a TTL of less than five minutes, you wait for it to expire instead of manually running a refresh task.
   * *   If you want to use RAM users to refresh or prefetch resources, you must obtain the required permissions. For more information, see [Authorize a RAM user to prefetch and refresh resources](https://help.aliyun.com/document_detail/260300.html).
   * ### Refresh quota
   * *   By default, each Alibaba Cloud account can refresh content from up to 10,000 URLs and 100 directories per day. The directories include subdirectories. If the daily peak bandwidth value exceeds 200 Mbit/s, you can [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//ticket-intl.console.aliyun.com/%23/ticket/createIndex) to request a quota increase. Alibaba Cloud CDN evaluates your application based on your workloads.
   * *   By default, each Alibaba Cloud account can submit up to 20 refresh rules that contain regular expressions per day. If the daily peak bandwidth of your Alibaba Cloud account exceeds 10 Gbit/s, you can [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex) to request a quota increase.
   * *   You can specify up to 1,000 URL refresh rules, 100 directory refresh rules, or 1 refresh rule that contains regular expressions in each call.
   * *   You can refresh up to 1,000 URLs per minute for each domain name.
   * 
   * @param request - RefreshObjectCachesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshObjectCachesResponse
   */
  async refreshObjectCachesWithOptions(request: $_model.RefreshObjectCachesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshObjectCachesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      body["Force"] = request.force;
    }

    if (!$dara.isNull(request.objectPath)) {
      body["ObjectPath"] = request.objectPath;
    }

    if (!$dara.isNull(request.objectType)) {
      body["ObjectType"] = request.objectType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshObjectCaches",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshObjectCachesResponse>(await this.callApi(params, req, runtime), new $_model.RefreshObjectCachesResponse({}));
  }

  /**
   * Refreshes files on Alibaba Cloud CDN points of presence (POPs). After files are refreshed, the original file content immediately becomes invalid. If clients request the original file content, Alibaba Cloud CDN forwards the requests to the origin server. Then, Alibaba Cloud CDN caches the latest content to the POPs and returns the content to the clients. Alibaba Cloud CDN allows you to refresh content from multiple URLs at the same time.
   * 
   * @remarks
   *   Alibaba Cloud CDN supports POST requests in which parameters are sent as a form.
   * *   You can call the [RefreshObjectCaches](https://help.aliyun.com/document_detail/91164.html) operation to refresh content and call the [PushObjectCache](https://help.aliyun.com/document_detail/91161.html) operation to prefetch content.
   * *   You can call the RefreshObjectCaches operation up to 50 times per second per account.
   * *   For more information about how to automatically refresh or prefetch tasks, see [Run scripts to refresh and prefetch content](https://help.aliyun.com/document_detail/151829.html).
   * ## Precautions
   * *   After a refresh task is submitted and completed, specific resources are removed from POPs. When a POP receives a request for the removed resources, the POP forwards the request to the origin server to retrieve the resources. The retrieved resources are returned to the client and cached on the POP. Multiple refresh tasks may cause a large number of resources to be removed from the POPs. This increases the number of requests that are forwarded to the origin server. The back-to-origin routing process consumes more bandwidth resources and the origin server may be overwhelmed.
   * *   A refresh task takes effect 5 to 6 minutes after being submitted. This means that if the resource you want to refresh has a TTL of less than five minutes, you wait for it to expire instead of manually running a refresh task.
   * *   If you want to use RAM users to refresh or prefetch resources, you must obtain the required permissions. For more information, see [Authorize a RAM user to prefetch and refresh resources](https://help.aliyun.com/document_detail/260300.html).
   * ### Refresh quota
   * *   By default, each Alibaba Cloud account can refresh content from up to 10,000 URLs and 100 directories per day. The directories include subdirectories. If the daily peak bandwidth value exceeds 200 Mbit/s, you can [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//ticket-intl.console.aliyun.com/%23/ticket/createIndex) to request a quota increase. Alibaba Cloud CDN evaluates your application based on your workloads.
   * *   By default, each Alibaba Cloud account can submit up to 20 refresh rules that contain regular expressions per day. If the daily peak bandwidth of your Alibaba Cloud account exceeds 10 Gbit/s, you can [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex) to request a quota increase.
   * *   You can specify up to 1,000 URL refresh rules, 100 directory refresh rules, or 1 refresh rule that contains regular expressions in each call.
   * *   You can refresh up to 1,000 URLs per minute for each domain name.
   * 
   * @param request - RefreshObjectCachesRequest
   * @returns RefreshObjectCachesResponse
   */
  async refreshObjectCaches(request: $_model.RefreshObjectCachesRequest): Promise<$_model.RefreshObjectCachesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshObjectCachesWithOptions(request, runtime);
  }

  /**
   * Rolls back configurations in the staging environment. After you call this operation, all configurations in the staging environment are cleared.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - RollbackStagingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackStagingConfigResponse
   */
  async rollbackStagingConfigWithOptions(request: $_model.RollbackStagingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackStagingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackStagingConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackStagingConfigResponse>(await this.callApi(params, req, runtime), new $_model.RollbackStagingConfigResponse({}));
  }

  /**
   * Rolls back configurations in the staging environment. After you call this operation, all configurations in the staging environment are cleared.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - RollbackStagingConfigRequest
   * @returns RollbackStagingConfigResponse
   */
  async rollbackStagingConfig(request: $_model.RollbackStagingConfigRequest): Promise<$_model.RollbackStagingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackStagingConfigWithOptions(request, runtime);
  }

  /**
   * You can call this operation to configure an SSL certificate for a specific domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - SetCdnDomainCSRCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetCdnDomainCSRCertificateResponse
   */
  async setCdnDomainCSRCertificateWithOptions(request: $_model.SetCdnDomainCSRCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetCdnDomainCSRCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.serverCertificate)) {
      query["ServerCertificate"] = request.serverCertificate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetCdnDomainCSRCertificate",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetCdnDomainCSRCertificateResponse>(await this.callApi(params, req, runtime), new $_model.SetCdnDomainCSRCertificateResponse({}));
  }

  /**
   * You can call this operation to configure an SSL certificate for a specific domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - SetCdnDomainCSRCertificateRequest
   * @returns SetCdnDomainCSRCertificateResponse
   */
  async setCdnDomainCSRCertificate(request: $_model.SetCdnDomainCSRCertificateRequest): Promise<$_model.SetCdnDomainCSRCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setCdnDomainCSRCertificateWithOptions(request, runtime);
  }

  /**
   * Enables or disables a ShangMi (SM) certificate for a domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - SetCdnDomainSMCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetCdnDomainSMCertificateResponse
   */
  async setCdnDomainSMCertificateWithOptions(request: $_model.SetCdnDomainSMCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetCdnDomainSMCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.SSLProtocol)) {
      query["SSLProtocol"] = request.SSLProtocol;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetCdnDomainSMCertificate",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetCdnDomainSMCertificateResponse>(await this.callApi(params, req, runtime), new $_model.SetCdnDomainSMCertificateResponse({}));
  }

  /**
   * Enables or disables a ShangMi (SM) certificate for a domain name.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - SetCdnDomainSMCertificateRequest
   * @returns SetCdnDomainSMCertificateResponse
   */
  async setCdnDomainSMCertificate(request: $_model.SetCdnDomainSMCertificateRequest): Promise<$_model.SetCdnDomainSMCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setCdnDomainSMCertificateWithOptions(request, runtime);
  }

  /**
   * Enables or disables the certificate for a domain name and updates the certificate information.
   * 
   * @remarks
   *   You can call this operation up to 30 times per second per account.
   * *   Method: POST.
   * 
   * @param request - SetCdnDomainSSLCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetCdnDomainSSLCertificateResponse
   */
  async setCdnDomainSSLCertificateWithOptions(request: $_model.SetCdnDomainSSLCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetCdnDomainSSLCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.certRegion)) {
      query["CertRegion"] = request.certRegion;
    }

    if (!$dara.isNull(request.certType)) {
      query["CertType"] = request.certType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.SSLPri)) {
      query["SSLPri"] = request.SSLPri;
    }

    if (!$dara.isNull(request.SSLProtocol)) {
      query["SSLProtocol"] = request.SSLProtocol;
    }

    if (!$dara.isNull(request.SSLPub)) {
      query["SSLPub"] = request.SSLPub;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetCdnDomainSSLCertificate",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetCdnDomainSSLCertificateResponse>(await this.callApi(params, req, runtime), new $_model.SetCdnDomainSSLCertificateResponse({}));
  }

  /**
   * Enables or disables the certificate for a domain name and updates the certificate information.
   * 
   * @remarks
   *   You can call this operation up to 30 times per second per account.
   * *   Method: POST.
   * 
   * @param request - SetCdnDomainSSLCertificateRequest
   * @returns SetCdnDomainSSLCertificateResponse
   */
  async setCdnDomainSSLCertificate(request: $_model.SetCdnDomainSSLCertificateRequest): Promise<$_model.SetCdnDomainSSLCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setCdnDomainSSLCertificateWithOptions(request, runtime);
  }

  /**
   * Configures a domain name to be accelerated in the staging environment.
   * 
   * @remarks
   * >  You can call this operation up to 30 times per second per account.
   * 
   * @param request - SetCdnDomainStagingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetCdnDomainStagingConfigResponse
   */
  async setCdnDomainStagingConfigWithOptions(request: $_model.SetCdnDomainStagingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetCdnDomainStagingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.functions)) {
      query["Functions"] = request.functions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetCdnDomainStagingConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetCdnDomainStagingConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetCdnDomainStagingConfigResponse({}));
  }

  /**
   * Configures a domain name to be accelerated in the staging environment.
   * 
   * @remarks
   * >  You can call this operation up to 30 times per second per account.
   * 
   * @param request - SetCdnDomainStagingConfigRequest
   * @returns SetCdnDomainStagingConfigResponse
   */
  async setCdnDomainStagingConfig(request: $_model.SetCdnDomainStagingConfigRequest): Promise<$_model.SetCdnDomainStagingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setCdnDomainStagingConfigWithOptions(request, runtime);
  }

  /**
   * Blocks or unblocks IP addresses from accessing domain names.
   * 
   * @remarks
   * > 
   * *   To use this operation, [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
   * *   This operation is suitable for blocking or unblocking a maximum of 1,000 IP addresses or CIDR blocks at a time.
   * 
   * @param request - SetCdnFullDomainsBlockIPRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetCdnFullDomainsBlockIPResponse
   */
  async setCdnFullDomainsBlockIPWithOptions(request: $_model.SetCdnFullDomainsBlockIPRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetCdnFullDomainsBlockIPResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.blockInterval)) {
      body["BlockInterval"] = request.blockInterval;
    }

    if (!$dara.isNull(request.IPList)) {
      body["IPList"] = request.IPList;
    }

    if (!$dara.isNull(request.operationType)) {
      body["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.updateType)) {
      body["UpdateType"] = request.updateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetCdnFullDomainsBlockIP",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetCdnFullDomainsBlockIPResponse>(await this.callApi(params, req, runtime), new $_model.SetCdnFullDomainsBlockIPResponse({}));
  }

  /**
   * Blocks or unblocks IP addresses from accessing domain names.
   * 
   * @remarks
   * > 
   * *   To use this operation, [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
   * *   This operation is suitable for blocking or unblocking a maximum of 1,000 IP addresses or CIDR blocks at a time.
   * 
   * @param request - SetCdnFullDomainsBlockIPRequest
   * @returns SetCdnFullDomainsBlockIPResponse
   */
  async setCdnFullDomainsBlockIP(request: $_model.SetCdnFullDomainsBlockIPRequest): Promise<$_model.SetCdnFullDomainsBlockIPResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setCdnFullDomainsBlockIPWithOptions(request, runtime);
  }

  /**
   * Sets a custom origin header.
   * 
   * @param request - SetReqHeaderConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetReqHeaderConfigResponse
   */
  async setReqHeaderConfigWithOptions(request: $_model.SetReqHeaderConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetReqHeaderConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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
      action: "SetReqHeaderConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetReqHeaderConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetReqHeaderConfigResponse({}));
  }

  /**
   * Sets a custom origin header.
   * 
   * @param request - SetReqHeaderConfigRequest
   * @returns SetReqHeaderConfigResponse
   */
  async setReqHeaderConfig(request: $_model.SetReqHeaderConfigRequest): Promise<$_model.SetReqHeaderConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setReqHeaderConfigWithOptions(request, runtime);
  }

  /**
   * Configures the virtual waiting room feature for an accelerated domain name. This operation is available only for accelerated domain names of the Dynamic CDN workload type.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - SetWaitingRoomConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetWaitingRoomConfigResponse
   */
  async setWaitingRoomConfigWithOptions(request: $_model.SetWaitingRoomConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetWaitingRoomConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowPct)) {
      query["AllowPct"] = request.allowPct;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.gapTime)) {
      query["GapTime"] = request.gapTime;
    }

    if (!$dara.isNull(request.maxTimeWait)) {
      query["MaxTimeWait"] = request.maxTimeWait;
    }

    if (!$dara.isNull(request.waitUri)) {
      query["WaitUri"] = request.waitUri;
    }

    if (!$dara.isNull(request.waitUrl)) {
      query["WaitUrl"] = request.waitUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetWaitingRoomConfig",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetWaitingRoomConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetWaitingRoomConfigResponse({}));
  }

  /**
   * Configures the virtual waiting room feature for an accelerated domain name. This operation is available only for accelerated domain names of the Dynamic CDN workload type.
   * 
   * @remarks
   * > You can call this operation up to 30 times per second per account.
   * 
   * @param request - SetWaitingRoomConfigRequest
   * @returns SetWaitingRoomConfigResponse
   */
  async setWaitingRoomConfig(request: $_model.SetWaitingRoomConfigRequest): Promise<$_model.SetWaitingRoomConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setWaitingRoomConfigWithOptions(request, runtime);
  }

  /**
   * Enables a disabled domain name. After the domain name is enabled, the value of the DomainStatus parameter is changed to Online.
   * 
   * @remarks
   *   If the domain name is in an invalid state or you have an overdue payment in your account, the domain name cannot be enabled.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - StartCdnDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartCdnDomainResponse
   */
  async startCdnDomainWithOptions(request: $_model.StartCdnDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartCdnDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartCdnDomainResponse>(await this.callApi(params, req, runtime), new $_model.StartCdnDomainResponse({}));
  }

  /**
   * Enables a disabled domain name. After the domain name is enabled, the value of the DomainStatus parameter is changed to Online.
   * 
   * @remarks
   *   If the domain name is in an invalid state or you have an overdue payment in your account, the domain name cannot be enabled.
   * *   You can call this operation up to 100 times per second per account.
   * 
   * @param request - StartCdnDomainRequest
   * @returns StartCdnDomainResponse
   */
  async startCdnDomain(request: $_model.StartCdnDomainRequest): Promise<$_model.StartCdnDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startCdnDomainWithOptions(request, runtime);
  }

  /**
   * Disables an accelerated domain name. After the domain name is disabled, the value of the DomainStatus parameter is changed to Offline.
   * 
   * @remarks
   *   After an accelerated domain is disabled, Alibaba Cloud CDN retains its information and routes all the requests that are destined for the accelerated domain to the origin server.
   * *   You can call this operation up to 40 times per second per account.
   * 
   * @param request - StopCdnDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopCdnDomainResponse
   */
  async stopCdnDomainWithOptions(request: $_model.StopCdnDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopCdnDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopCdnDomain",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopCdnDomainResponse>(await this.callApi(params, req, runtime), new $_model.StopCdnDomainResponse({}));
  }

  /**
   * Disables an accelerated domain name. After the domain name is disabled, the value of the DomainStatus parameter is changed to Offline.
   * 
   * @remarks
   *   After an accelerated domain is disabled, Alibaba Cloud CDN retains its information and routes all the requests that are destined for the accelerated domain to the origin server.
   * *   You can call this operation up to 40 times per second per account.
   * 
   * @param request - StopCdnDomainRequest
   * @returns StopCdnDomainResponse
   */
  async stopCdnDomain(request: $_model.StopCdnDomainRequest): Promise<$_model.StopCdnDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopCdnDomainWithOptions(request, runtime);
  }

  /**
   * Adds one or more tags to specific resources.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2018-05-10",
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
   * Adds one or more tags to specific resources.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from specified resources.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
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

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2018-05-10",
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
   * Removes tags from specified resources.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates a tracking task.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - UpdateCdnDeliverTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCdnDeliverTaskResponse
   */
  async updateCdnDeliverTaskWithOptions(request: $_model.UpdateCdnDeliverTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCdnDeliverTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deliver)) {
      body["Deliver"] = request.deliver;
    }

    if (!$dara.isNull(request.deliverId)) {
      body["DeliverId"] = request.deliverId;
    }

    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.reports)) {
      body["Reports"] = request.reports;
    }

    if (!$dara.isNull(request.schedule)) {
      body["Schedule"] = request.schedule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCdnDeliverTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCdnDeliverTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCdnDeliverTaskResponse({}));
  }

  /**
   * Updates a tracking task.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - UpdateCdnDeliverTaskRequest
   * @returns UpdateCdnDeliverTaskResponse
   */
  async updateCdnDeliverTask(request: $_model.UpdateCdnDeliverTaskRequest): Promise<$_model.UpdateCdnDeliverTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCdnDeliverTaskWithOptions(request, runtime);
  }

  /**
   * Updates one or more operations reports.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - UpdateCdnSubTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCdnSubTaskResponse
   */
  async updateCdnSubTaskWithOptions(request: $_model.UpdateCdnSubTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCdnSubTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.reportIds)) {
      body["ReportIds"] = request.reportIds;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCdnSubTask",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCdnSubTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCdnSubTaskResponse({}));
  }

  /**
   * Updates one or more operations reports.
   * 
   * @remarks
   * > You can call this operation up to three times per second per account.
   * 
   * @param request - UpdateCdnSubTaskRequest
   * @returns UpdateCdnSubTaskResponse
   */
  async updateCdnSubTask(request: $_model.UpdateCdnSubTaskRequest): Promise<$_model.UpdateCdnSubTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCdnSubTaskWithOptions(request, runtime);
  }

  /**
   * Updates a specified Function Compute trigger.
   * 
   * @param request - UpdateFCTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFCTriggerResponse
   */
  async updateFCTriggerWithOptions(request: $_model.UpdateFCTriggerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFCTriggerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.triggerARN)) {
      query["TriggerARN"] = request.triggerARN;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functionARN)) {
      body["FunctionARN"] = request.functionARN;
    }

    if (!$dara.isNull(request.notes)) {
      body["Notes"] = request.notes;
    }

    if (!$dara.isNull(request.roleARN)) {
      body["RoleARN"] = request.roleARN;
    }

    if (!$dara.isNull(request.sourceARN)) {
      body["SourceARN"] = request.sourceARN;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFCTrigger",
      version: "2018-05-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFCTriggerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFCTriggerResponse({}));
  }

  /**
   * Updates a specified Function Compute trigger.
   * 
   * @param request - UpdateFCTriggerRequest
   * @returns UpdateFCTriggerResponse
   */
  async updateFCTrigger(request: $_model.UpdateFCTriggerRequest): Promise<$_model.UpdateFCTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFCTriggerWithOptions(request, runtime);
  }

  /**
   * Verifies the ownership of a specified domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
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

    if (!$dara.isNull(request.verifyType)) {
      query["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyDomainOwner",
      version: "2018-05-10",
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
   * Verifies the ownership of a specified domain name.
   * 
   * @remarks
   * > You can call this operation up to 100 times per second per account.
   * 
   * @param request - VerifyDomainOwnerRequest
   * @returns VerifyDomainOwnerResponse
   */
  async verifyDomainOwner(request: $_model.VerifyDomainOwnerRequest): Promise<$_model.VerifyDomainOwnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyDomainOwnerWithOptions(request, runtime);
  }

}
