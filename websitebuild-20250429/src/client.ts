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
    this._endpoint = this.getEndpoint("websitebuild", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 绑定应用域名
   * 
   * @param request - BindAppDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAppDomainResponse
   */
  async bindAppDomainWithOptions(request: $_model.BindAppDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindAppDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindAppDomain",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindAppDomainResponse>(await this.callApi(params, req, runtime), new $_model.BindAppDomainResponse({}));
  }

  /**
   * 绑定应用域名
   * 
   * @param request - BindAppDomainRequest
   * @returns BindAppDomainResponse
   */
  async bindAppDomain(request: $_model.BindAppDomainRequest): Promise<$_model.BindAppDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAppDomainWithOptions(request, runtime);
  }

  /**
   * 提交创建Logo任务
   * 
   * @param request - CreateLogoTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLogoTaskResponse
   */
  async createLogoTaskWithOptions(request: $_model.CreateLogoTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLogoTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logoVersion)) {
      query["LogoVersion"] = request.logoVersion;
    }

    if (!$dara.isNull(request.negativePrompt)) {
      query["NegativePrompt"] = request.negativePrompt;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLogoTask",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLogoTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateLogoTaskResponse({}));
  }

  /**
   * 提交创建Logo任务
   * 
   * @param request - CreateLogoTaskRequest
   * @returns CreateLogoTaskResponse
   */
  async createLogoTask(request: $_model.CreateLogoTaskRequest): Promise<$_model.CreateLogoTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLogoTaskWithOptions(request, runtime);
  }

  /**
   * 删除域名的SSL证书
   * 
   * @param request - DeleteAppDomainCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppDomainCertificateResponse
   */
  async deleteAppDomainCertificateWithOptions(request: $_model.DeleteAppDomainCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppDomainCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppDomainCertificate",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppDomainCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppDomainCertificateResponse({}));
  }

  /**
   * 删除域名的SSL证书
   * 
   * @param request - DeleteAppDomainCertificateRequest
   * @returns DeleteAppDomainCertificateResponse
   */
  async deleteAppDomainCertificate(request: $_model.DeleteAppDomainCertificateRequest): Promise<$_model.DeleteAppDomainCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppDomainCertificateWithOptions(request, runtime);
  }

  /**
   * 删除域名的跳转规则
   * 
   * @param request - DeleteAppDomainRedirectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppDomainRedirectResponse
   */
  async deleteAppDomainRedirectWithOptions(request: $_model.DeleteAppDomainRedirectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppDomainRedirectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppDomainRedirect",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppDomainRedirectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppDomainRedirectResponse({}));
  }

  /**
   * 删除域名的跳转规则
   * 
   * @param request - DeleteAppDomainRedirectRequest
   * @returns DeleteAppDomainRedirectResponse
   */
  async deleteAppDomainRedirect(request: $_model.DeleteAppDomainRedirectRequest): Promise<$_model.DeleteAppDomainRedirectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppDomainRedirectWithOptions(request, runtime);
  }

  /**
   * 查询域名的DNS解析记录
   * 
   * @param request - DescribeAppDomainDnsRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppDomainDnsRecordResponse
   */
  async describeAppDomainDnsRecordWithOptions(request: $_model.DescribeAppDomainDnsRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppDomainDnsRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.purpose)) {
      query["Purpose"] = request.purpose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppDomainDnsRecord",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppDomainDnsRecordResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppDomainDnsRecordResponse({}));
  }

  /**
   * 查询域名的DNS解析记录
   * 
   * @param request - DescribeAppDomainDnsRecordRequest
   * @returns DescribeAppDomainDnsRecordResponse
   */
  async describeAppDomainDnsRecord(request: $_model.DescribeAppDomainDnsRecordRequest): Promise<$_model.DescribeAppDomainDnsRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppDomainDnsRecordWithOptions(request, runtime);
  }

  /**
   * DispatchConsoleAPIForPartner
   * 
   * @param request - DispatchConsoleAPIForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DispatchConsoleAPIForPartnerResponse
   */
  async dispatchConsoleAPIForPartnerWithOptions(request: $_model.DispatchConsoleAPIForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DispatchConsoleAPIForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.liveToken)) {
      query["LiveToken"] = request.liveToken;
    }

    if (!$dara.isNull(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.siteHost)) {
      query["SiteHost"] = request.siteHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DispatchConsoleAPIForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DispatchConsoleAPIForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.DispatchConsoleAPIForPartnerResponse({}));
  }

  /**
   * DispatchConsoleAPIForPartner
   * 
   * @param request - DispatchConsoleAPIForPartnerRequest
   * @returns DispatchConsoleAPIForPartnerResponse
   */
  async dispatchConsoleAPIForPartner(request: $_model.DispatchConsoleAPIForPartnerRequest): Promise<$_model.DispatchConsoleAPIForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dispatchConsoleAPIForPartnerWithOptions(request, runtime);
  }

  /**
   * 查询Logo创建任务
   * 
   * @param request - GetCreateLogoTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCreateLogoTaskResponse
   */
  async getCreateLogoTaskWithOptions(request: $_model.GetCreateLogoTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCreateLogoTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCreateLogoTask",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCreateLogoTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetCreateLogoTaskResponse({}));
  }

  /**
   * 查询Logo创建任务
   * 
   * @param request - GetCreateLogoTaskRequest
   * @returns GetCreateLogoTaskResponse
   */
  async getCreateLogoTask(request: $_model.GetCreateLogoTaskRequest): Promise<$_model.GetCreateLogoTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCreateLogoTaskWithOptions(request, runtime);
  }

  /**
   * 提供给服务商的域名查询接口
   * 
   * @param request - GetDomainInfoForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainInfoForPartnerResponse
   */
  async getDomainInfoForPartnerWithOptions(request: $_model.GetDomainInfoForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDomainInfoForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomainInfoForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDomainInfoForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.GetDomainInfoForPartnerResponse({}));
  }

  /**
   * 提供给服务商的域名查询接口
   * 
   * @param request - GetDomainInfoForPartnerRequest
   * @returns GetDomainInfoForPartnerResponse
   */
  async getDomainInfoForPartner(request: $_model.GetDomainInfoForPartnerRequest): Promise<$_model.GetDomainInfoForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDomainInfoForPartnerWithOptions(request, runtime);
  }

  /**
   * 查询域名备案信息
   * 
   * @param request - GetIcpFilingInfoForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIcpFilingInfoForPartnerResponse
   */
  async getIcpFilingInfoForPartnerWithOptions(request: $_model.GetIcpFilingInfoForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIcpFilingInfoForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIcpFilingInfoForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIcpFilingInfoForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.GetIcpFilingInfoForPartnerResponse({}));
  }

  /**
   * 查询域名备案信息
   * 
   * @param request - GetIcpFilingInfoForPartnerRequest
   * @returns GetIcpFilingInfoForPartnerResponse
   */
  async getIcpFilingInfoForPartner(request: $_model.GetIcpFilingInfoForPartnerRequest): Promise<$_model.GetIcpFilingInfoForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIcpFilingInfoForPartnerWithOptions(request, runtime);
  }

  /**
   * 通过授权码得到accessToken
   * 
   * @param request - GetUserAccessTokenForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserAccessTokenForPartnerResponse
   */
  async getUserAccessTokenForPartnerWithOptions(request: $_model.GetUserAccessTokenForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserAccessTokenForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteHost)) {
      query["SiteHost"] = request.siteHost;
    }

    if (!$dara.isNull(request.ticket)) {
      query["Ticket"] = request.ticket;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserAccessTokenForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserAccessTokenForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.GetUserAccessTokenForPartnerResponse({}));
  }

  /**
   * 通过授权码得到accessToken
   * 
   * @param request - GetUserAccessTokenForPartnerRequest
   * @returns GetUserAccessTokenForPartnerResponse
   */
  async getUserAccessTokenForPartner(request: $_model.GetUserAccessTokenForPartnerRequest): Promise<$_model.GetUserAccessTokenForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserAccessTokenForPartnerWithOptions(request, runtime);
  }

  /**
   * 合作伙伴获取用户SLR角色授权临时凭证
   * 
   * @param request - GetUserTmpIdentityForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserTmpIdentityForPartnerResponse
   */
  async getUserTmpIdentityForPartnerWithOptions(request: $_model.GetUserTmpIdentityForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserTmpIdentityForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authPurpose)) {
      query["AuthPurpose"] = request.authPurpose;
    }

    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.serviceLinkedRole)) {
      query["ServiceLinkedRole"] = request.serviceLinkedRole;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserTmpIdentityForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserTmpIdentityForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.GetUserTmpIdentityForPartnerResponse({}));
  }

  /**
   * 合作伙伴获取用户SLR角色授权临时凭证
   * 
   * @param request - GetUserTmpIdentityForPartnerRequest
   * @returns GetUserTmpIdentityForPartnerResponse
   */
  async getUserTmpIdentityForPartner(request: $_model.GetUserTmpIdentityForPartnerRequest): Promise<$_model.GetUserTmpIdentityForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserTmpIdentityForPartnerWithOptions(request, runtime);
  }

  /**
   * 查询域名的跳转规则列表
   * 
   * @param request - ListAppDomainRedirectRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppDomainRedirectRecordsResponse
   */
  async listAppDomainRedirectRecordsWithOptions(request: $_model.ListAppDomainRedirectRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppDomainRedirectRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
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
      action: "ListAppDomainRedirectRecords",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppDomainRedirectRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppDomainRedirectRecordsResponse({}));
  }

  /**
   * 查询域名的跳转规则列表
   * 
   * @param request - ListAppDomainRedirectRecordsRequest
   * @returns ListAppDomainRedirectRecordsResponse
   */
  async listAppDomainRedirectRecords(request: $_model.ListAppDomainRedirectRecordsRequest): Promise<$_model.ListAppDomainRedirectRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppDomainRedirectRecordsWithOptions(request, runtime);
  }

  /**
   * 查询应用实例下的所有域名列表
   * 
   * @param request - ListAppInstanceDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppInstanceDomainsResponse
   */
  async listAppInstanceDomainsWithOptions(request: $_model.ListAppInstanceDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppInstanceDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["OrderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppInstanceDomains",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppInstanceDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppInstanceDomainsResponse({}));
  }

  /**
   * 查询应用实例下的所有域名列表
   * 
   * @param request - ListAppInstanceDomainsRequest
   * @returns ListAppInstanceDomainsResponse
   */
  async listAppInstanceDomains(request: $_model.ListAppInstanceDomainsRequest): Promise<$_model.ListAppInstanceDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppInstanceDomainsWithOptions(request, runtime);
  }

  /**
   * 合作伙伴操作应用
   * 
   * @param request - OperateAppInstanceForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateAppInstanceForPartnerResponse
   */
  async operateAppInstanceForPartnerWithOptions(request: $_model.OperateAppInstanceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateAppInstanceForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.operateEvent)) {
      query["OperateEvent"] = request.operateEvent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateAppInstanceForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateAppInstanceForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.OperateAppInstanceForPartnerResponse({}));
  }

  /**
   * 合作伙伴操作应用
   * 
   * @param request - OperateAppInstanceForPartnerRequest
   * @returns OperateAppInstanceForPartnerResponse
   */
  async operateAppInstanceForPartner(request: $_model.OperateAppInstanceForPartnerRequest): Promise<$_model.OperateAppInstanceForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateAppInstanceForPartnerWithOptions(request, runtime);
  }

  /**
   * 合作伙伴操作应用服务
   * 
   * @param request - OperateAppServiceForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateAppServiceForPartnerResponse
   */
  async operateAppServiceForPartnerWithOptions(request: $_model.OperateAppServiceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateAppServiceForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.operateEvent)) {
      query["OperateEvent"] = request.operateEvent;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateAppServiceForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateAppServiceForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.OperateAppServiceForPartnerResponse({}));
  }

  /**
   * 合作伙伴操作应用服务
   * 
   * @param request - OperateAppServiceForPartnerRequest
   * @returns OperateAppServiceForPartnerResponse
   */
  async operateAppServiceForPartner(request: $_model.OperateAppServiceForPartnerRequest): Promise<$_model.OperateAppServiceForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateAppServiceForPartnerWithOptions(request, runtime);
  }

  /**
   * 图片检索
   * 
   * @param tmpReq - SearchImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchImageResponse
   */
  async searchImageWithOptions(tmpReq: $_model.SearchImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchImageResponse> {
    tmpReq.validate();
    let request = new $_model.SearchImageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.colorHex)) {
      query["ColorHex"] = request.colorHex;
    }

    if (!$dara.isNull(request.hasPerson)) {
      query["HasPerson"] = request.hasPerson;
    }

    if (!$dara.isNull(request.imageCategory)) {
      query["ImageCategory"] = request.imageCategory;
    }

    if (!$dara.isNull(request.imageRatio)) {
      query["ImageRatio"] = request.imageRatio;
    }

    if (!$dara.isNull(request.maxHeight)) {
      query["MaxHeight"] = request.maxHeight;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.maxWidth)) {
      query["MaxWidth"] = request.maxWidth;
    }

    if (!$dara.isNull(request.minHeight)) {
      query["MinHeight"] = request.minHeight;
    }

    if (!$dara.isNull(request.minWidth)) {
      query["MinWidth"] = request.minWidth;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ossKey)) {
      query["OssKey"] = request.ossKey;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.text)) {
      query["Text"] = request.text;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchImage",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchImageResponse>(await this.callApi(params, req, runtime), new $_model.SearchImageResponse({}));
  }

  /**
   * 图片检索
   * 
   * @param request - SearchImageRequest
   * @returns SearchImageResponse
   */
  async searchImage(request: $_model.SearchImageRequest): Promise<$_model.SearchImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchImageWithOptions(request, runtime);
  }

  /**
   * 设置域名的SSL证书
   * 
   * @param request - SetAppDomainCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAppDomainCertificateResponse
   */
  async setAppDomainCertificateWithOptions(request: $_model.SetAppDomainCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAppDomainCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.certificateName)) {
      query["CertificateName"] = request.certificateName;
    }

    if (!$dara.isNull(request.certificateType)) {
      query["CertificateType"] = request.certificateType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!$dara.isNull(request.publicKey)) {
      query["PublicKey"] = request.publicKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAppDomainCertificate",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAppDomainCertificateResponse>(await this.callApi(params, req, runtime), new $_model.SetAppDomainCertificateResponse({}));
  }

  /**
   * 设置域名的SSL证书
   * 
   * @param request - SetAppDomainCertificateRequest
   * @returns SetAppDomainCertificateResponse
   */
  async setAppDomainCertificate(request: $_model.SetAppDomainCertificateRequest): Promise<$_model.SetAppDomainCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAppDomainCertificateWithOptions(request, runtime);
  }

  /**
   * 合作伙伴同步应用实例
   * 
   * @param tmpReq - SyncAppInstanceForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncAppInstanceForPartnerResponse
   */
  async syncAppInstanceForPartnerWithOptions(tmpReq: $_model.SyncAppInstanceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncAppInstanceForPartnerResponse> {
    tmpReq.validate();
    let request = new $_model.SyncAppInstanceForPartnerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.appInstance)) {
      request.appInstanceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appInstance, "AppInstance", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appInstanceShrink)) {
      query["AppInstance"] = request.appInstanceShrink;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.operator)) {
      query["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.sourceBizId)) {
      query["SourceBizId"] = request.sourceBizId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncAppInstanceForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncAppInstanceForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.SyncAppInstanceForPartnerResponse({}));
  }

  /**
   * 合作伙伴同步应用实例
   * 
   * @param request - SyncAppInstanceForPartnerRequest
   * @returns SyncAppInstanceForPartnerResponse
   */
  async syncAppInstanceForPartner(request: $_model.SyncAppInstanceForPartnerRequest): Promise<$_model.SyncAppInstanceForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncAppInstanceForPartnerWithOptions(request, runtime);
  }

  /**
   * 解绑应用域名
   * 
   * @param request - UnbindAppDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindAppDomainResponse
   */
  async unbindAppDomainWithOptions(request: $_model.UnbindAppDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindAppDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindAppDomain",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindAppDomainResponse>(await this.callApi(params, req, runtime), new $_model.UnbindAppDomainResponse({}));
  }

  /**
   * 解绑应用域名
   * 
   * @param request - UnbindAppDomainRequest
   * @returns UnbindAppDomainResponse
   */
  async unbindAppDomain(request: $_model.UnbindAppDomainRequest): Promise<$_model.UnbindAppDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindAppDomainWithOptions(request, runtime);
  }

}
