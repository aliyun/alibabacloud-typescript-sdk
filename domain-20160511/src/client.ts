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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("domain", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 域名检查
   * 
   * @param request - CheckDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDomainResponse
   */
  async checkDomainWithOptions(request: $_model.CheckDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckDomain",
      version: "2016-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDomainResponse>(await this.callApi(params, req, runtime), new $_model.CheckDomainResponse({}));
  }

  /**
   * 域名检查
   * 
   * @param request - CheckDomainRequest
   * @returns CheckDomainResponse
   */
  async checkDomain(request: $_model.CheckDomainRequest): Promise<$_model.CheckDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDomainWithOptions(request, runtime);
  }

  /**
   * 删除联系人模板
   * 
   * @param request - DeleteContactTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContactTemplateResponse
   */
  async deleteContactTemplateWithOptions(request: $_model.DeleteContactTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContactTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactTemplateId)) {
      query["ContactTemplateId"] = request.contactTemplateId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteContactTemplate",
      version: "2016-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContactTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContactTemplateResponse({}));
  }

  /**
   * 删除联系人模板
   * 
   * @param request - DeleteContactTemplateRequest
   * @returns DeleteContactTemplateResponse
   */
  async deleteContactTemplate(request: $_model.DeleteContactTemplateRequest): Promise<$_model.DeleteContactTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContactTemplateWithOptions(request, runtime);
  }

  /**
   * 查询任务详情列表
   * 
   * @param request - QueryBatchTaskDetailListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBatchTaskDetailListResponse
   */
  async queryBatchTaskDetailListWithOptions(request: $_model.QueryBatchTaskDetailListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBatchTaskDetailListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.saleId)) {
      query["SaleId"] = request.saleId;
    }

    if (!$dara.isNull(request.taskNo)) {
      query["TaskNo"] = request.taskNo;
    }

    if (!$dara.isNull(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryBatchTaskDetailList",
      version: "2016-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBatchTaskDetailListResponse>(await this.callApi(params, req, runtime), new $_model.QueryBatchTaskDetailListResponse({}));
  }

  /**
   * 查询任务详情列表
   * 
   * @param request - QueryBatchTaskDetailListRequest
   * @returns QueryBatchTaskDetailListResponse
   */
  async queryBatchTaskDetailList(request: $_model.QueryBatchTaskDetailListRequest): Promise<$_model.QueryBatchTaskDetailListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBatchTaskDetailListWithOptions(request, runtime);
  }

  /**
   * 查询任务列表
   * 
   * @param request - QueryBatchTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBatchTaskListResponse
   */
  async queryBatchTaskListWithOptions(request: $_model.QueryBatchTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBatchTaskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginCreateTime)) {
      query["BeginCreateTime"] = request.beginCreateTime;
    }

    if (!$dara.isNull(request.endCreateTime)) {
      query["EndCreateTime"] = request.endCreateTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryBatchTaskList",
      version: "2016-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBatchTaskListResponse>(await this.callApi(params, req, runtime), new $_model.QueryBatchTaskListResponse({}));
  }

  /**
   * 查询任务列表
   * 
   * @param request - QueryBatchTaskListRequest
   * @returns QueryBatchTaskListResponse
   */
  async queryBatchTaskList(request: $_model.QueryBatchTaskListRequest): Promise<$_model.QueryBatchTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBatchTaskListWithOptions(request, runtime);
  }

  /**
   * 查询联系人
   * 
   * @param request - QueryContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryContactResponse
   */
  async queryContactWithOptions(request: $_model.QueryContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactType)) {
      query["ContactType"] = request.contactType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryContact",
      version: "2016-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryContactResponse>(await this.callApi(params, req, runtime), new $_model.QueryContactResponse({}));
  }

  /**
   * 查询联系人
   * 
   * @param request - QueryContactRequest
   * @returns QueryContactResponse
   */
  async queryContact(request: $_model.QueryContactRequest): Promise<$_model.QueryContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryContactWithOptions(request, runtime);
  }

  /**
   * 查询联系人模板
   * 
   * @param request - QueryContactTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryContactTemplateResponse
   */
  async queryContactTemplateWithOptions(request: $_model.QueryContactTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryContactTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!$dara.isNull(request.CCompany)) {
      query["CCompany"] = request.CCompany;
    }

    if (!$dara.isNull(request.contactTemplateId)) {
      query["ContactTemplateId"] = request.contactTemplateId;
    }

    if (!$dara.isNull(request.defaultTemplate)) {
      query["DefaultTemplate"] = request.defaultTemplate;
    }

    if (!$dara.isNull(request.ECompany)) {
      query["ECompany"] = request.ECompany;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regType)) {
      query["RegType"] = request.regType;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryContactTemplate",
      version: "2016-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryContactTemplateResponse>(await this.callApi(params, req, runtime), new $_model.QueryContactTemplateResponse({}));
  }

  /**
   * 查询联系人模板
   * 
   * @param request - QueryContactTemplateRequest
   * @returns QueryContactTemplateResponse
   */
  async queryContactTemplate(request: $_model.QueryContactTemplateRequest): Promise<$_model.QueryContactTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryContactTemplateWithOptions(request, runtime);
  }

  /**
   * 根据saleId查询域名信息
   * 
   * @param request - QueryDomainBySaleIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainBySaleIdResponse
   */
  async queryDomainBySaleIdWithOptions(request: $_model.QueryDomainBySaleIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDomainBySaleIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.saleId)) {
      query["SaleId"] = request.saleId;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDomainBySaleId",
      version: "2016-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDomainBySaleIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryDomainBySaleIdResponse({}));
  }

  /**
   * 根据saleId查询域名信息
   * 
   * @param request - QueryDomainBySaleIdRequest
   * @returns QueryDomainBySaleIdResponse
   */
  async queryDomainBySaleId(request: $_model.QueryDomainBySaleIdRequest): Promise<$_model.QueryDomainBySaleIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDomainBySaleIdWithOptions(request, runtime);
  }

  /**
   * 查询域名列表
   * 
   * @param request - QueryDomainListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainListResponse
   */
  async queryDomainListWithOptions(request: $_model.QueryDomainListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDomainListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deadEndDate)) {
      query["DeadEndDate"] = request.deadEndDate;
    }

    if (!$dara.isNull(request.deadStartDate)) {
      query["DeadStartDate"] = request.deadStartDate;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.orderByType)) {
      query["OrderByType"] = request.orderByType;
    }

    if (!$dara.isNull(request.orderKeyType)) {
      query["OrderKeyType"] = request.orderKeyType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productDomainType)) {
      query["ProductDomainType"] = request.productDomainType;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.regEndDate)) {
      query["RegEndDate"] = request.regEndDate;
    }

    if (!$dara.isNull(request.regStartDate)) {
      query["RegStartDate"] = request.regStartDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDomainList",
      version: "2016-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDomainListResponse>(await this.callApi(params, req, runtime), new $_model.QueryDomainListResponse({}));
  }

  /**
   * 查询域名列表
   * 
   * @param request - QueryDomainListRequest
   * @returns QueryDomainListResponse
   */
  async queryDomainList(request: $_model.QueryDomainListRequest): Promise<$_model.QueryDomainListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDomainListWithOptions(request, runtime);
  }

  /**
   * 查询失败原因列表
   * 
   * @param request - QueryFailReasonListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFailReasonListResponse
   */
  async queryFailReasonListWithOptions(request: $_model.QueryFailReasonListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFailReasonListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactTemplateId)) {
      query["ContactTemplateId"] = request.contactTemplateId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.saleId)) {
      query["SaleId"] = request.saleId;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFailReasonList",
      version: "2016-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFailReasonListResponse>(await this.callApi(params, req, runtime), new $_model.QueryFailReasonListResponse({}));
  }

  /**
   * 查询失败原因列表
   * 
   * @param request - QueryFailReasonListRequest
   * @returns QueryFailReasonListResponse
   */
  async queryFailReasonList(request: $_model.QueryFailReasonListRequest): Promise<$_model.QueryFailReasonListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFailReasonListWithOptions(request, runtime);
  }

  /**
   * 保存联系人模板
   * 
   * @param request - SaveContactTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveContactTemplateResponse
   */
  async saveContactTemplateWithOptions(request: $_model.SaveContactTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveContactTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.CCity)) {
      query["CCity"] = request.CCity;
    }

    if (!$dara.isNull(request.CCompany)) {
      query["CCompany"] = request.CCompany;
    }

    if (!$dara.isNull(request.CCountry)) {
      query["CCountry"] = request.CCountry;
    }

    if (!$dara.isNull(request.CName)) {
      query["CName"] = request.CName;
    }

    if (!$dara.isNull(request.CProvince)) {
      query["CProvince"] = request.CProvince;
    }

    if (!$dara.isNull(request.CVenu)) {
      query["CVenu"] = request.CVenu;
    }

    if (!$dara.isNull(request.contactTemplateId)) {
      query["ContactTemplateId"] = request.contactTemplateId;
    }

    if (!$dara.isNull(request.defaultTemplate)) {
      query["DefaultTemplate"] = request.defaultTemplate;
    }

    if (!$dara.isNull(request.ECity)) {
      query["ECity"] = request.ECity;
    }

    if (!$dara.isNull(request.ECompany)) {
      query["ECompany"] = request.ECompany;
    }

    if (!$dara.isNull(request.EName)) {
      query["EName"] = request.EName;
    }

    if (!$dara.isNull(request.EProvince)) {
      query["EProvince"] = request.EProvince;
    }

    if (!$dara.isNull(request.EVenu)) {
      query["EVenu"] = request.EVenu;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.postalCode)) {
      query["PostalCode"] = request.postalCode;
    }

    if (!$dara.isNull(request.regType)) {
      query["RegType"] = request.regType;
    }

    if (!$dara.isNull(request.telArea)) {
      query["TelArea"] = request.telArea;
    }

    if (!$dara.isNull(request.telExt)) {
      query["TelExt"] = request.telExt;
    }

    if (!$dara.isNull(request.telMain)) {
      query["TelMain"] = request.telMain;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveContactTemplate",
      version: "2016-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveContactTemplateResponse>(await this.callApi(params, req, runtime), new $_model.SaveContactTemplateResponse({}));
  }

  /**
   * 保存联系人模板
   * 
   * @param request - SaveContactTemplateRequest
   * @returns SaveContactTemplateResponse
   */
  async saveContactTemplate(request: $_model.SaveContactTemplateRequest): Promise<$_model.SaveContactTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveContactTemplateWithOptions(request, runtime);
  }

  /**
   * 保存联系人模板实名资料
   * 
   * @param request - SaveContactTemplateCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveContactTemplateCredentialResponse
   */
  async saveContactTemplateCredentialWithOptions(request: $_model.SaveContactTemplateCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveContactTemplateCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactTemplateId)) {
      query["ContactTemplateId"] = request.contactTemplateId;
    }

    if (!$dara.isNull(request.credential)) {
      query["Credential"] = request.credential;
    }

    if (!$dara.isNull(request.credentialNo)) {
      query["CredentialNo"] = request.credentialNo;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveContactTemplateCredential",
      version: "2016-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveContactTemplateCredentialResponse>(await this.callApi(params, req, runtime), new $_model.SaveContactTemplateCredentialResponse({}));
  }

  /**
   * 保存联系人模板实名资料
   * 
   * @param request - SaveContactTemplateCredentialRequest
   * @returns SaveContactTemplateCredentialResponse
   */
  async saveContactTemplateCredential(request: $_model.SaveContactTemplateCredentialRequest): Promise<$_model.SaveContactTemplateCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveContactTemplateCredentialWithOptions(request, runtime);
  }

  /**
   * 修改域名dns任务,对外开放接口，用于domain中
   * 
   * @param request - SaveTaskForModifyingDomainDnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTaskForModifyingDomainDnsResponse
   */
  async saveTaskForModifyingDomainDnsWithOptions(request: $_model.SaveTaskForModifyingDomainDnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveTaskForModifyingDomainDnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunDns)) {
      query["AliyunDns"] = request.aliyunDns;
    }

    if (!$dara.isNull(request.dnsList)) {
      query["DnsList"] = request.dnsList;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.saleId)) {
      query["SaleId"] = request.saleId;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveTaskForModifyingDomainDns",
      version: "2016-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveTaskForModifyingDomainDnsResponse>(await this.callApi(params, req, runtime), new $_model.SaveTaskForModifyingDomainDnsResponse({}));
  }

  /**
   * 修改域名dns任务,对外开放接口，用于domain中
   * 
   * @param request - SaveTaskForModifyingDomainDnsRequest
   * @returns SaveTaskForModifyingDomainDnsResponse
   */
  async saveTaskForModifyingDomainDns(request: $_model.SaveTaskForModifyingDomainDnsRequest): Promise<$_model.SaveTaskForModifyingDomainDnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveTaskForModifyingDomainDnsWithOptions(request, runtime);
  }

  /**
   * 保存域名实名资料任务
   * 
   * @param request - SaveTaskForSubmittingDomainNameCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTaskForSubmittingDomainNameCredentialResponse
   */
  async saveTaskForSubmittingDomainNameCredentialWithOptions(request: $_model.SaveTaskForSubmittingDomainNameCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveTaskForSubmittingDomainNameCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.credential)) {
      query["Credential"] = request.credential;
    }

    if (!$dara.isNull(request.credentialNo)) {
      query["CredentialNo"] = request.credentialNo;
    }

    if (!$dara.isNull(request.credentialType)) {
      query["CredentialType"] = request.credentialType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.saleId)) {
      query["SaleId"] = request.saleId;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveTaskForSubmittingDomainNameCredential",
      version: "2016-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveTaskForSubmittingDomainNameCredentialResponse>(await this.callApi(params, req, runtime), new $_model.SaveTaskForSubmittingDomainNameCredentialResponse({}));
  }

  /**
   * 保存域名实名资料任务
   * 
   * @param request - SaveTaskForSubmittingDomainNameCredentialRequest
   * @returns SaveTaskForSubmittingDomainNameCredentialResponse
   */
  async saveTaskForSubmittingDomainNameCredential(request: $_model.SaveTaskForSubmittingDomainNameCredentialRequest): Promise<$_model.SaveTaskForSubmittingDomainNameCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveTaskForSubmittingDomainNameCredentialWithOptions(request, runtime);
  }

  /**
   * 根据模板保存域名的实名认证信息
   * 
   * @param request - SaveTaskForSubmittingDomainNameCredentialByTemplateIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTaskForSubmittingDomainNameCredentialByTemplateIdResponse
   */
  async saveTaskForSubmittingDomainNameCredentialByTemplateIdWithOptions(request: $_model.SaveTaskForSubmittingDomainNameCredentialByTemplateIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveTaskForSubmittingDomainNameCredentialByTemplateIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactTemplateId)) {
      query["ContactTemplateId"] = request.contactTemplateId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.saleId)) {
      query["SaleId"] = request.saleId;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveTaskForSubmittingDomainNameCredentialByTemplateId",
      version: "2016-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveTaskForSubmittingDomainNameCredentialByTemplateIdResponse>(await this.callApi(params, req, runtime), new $_model.SaveTaskForSubmittingDomainNameCredentialByTemplateIdResponse({}));
  }

  /**
   * 根据模板保存域名的实名认证信息
   * 
   * @param request - SaveTaskForSubmittingDomainNameCredentialByTemplateIdRequest
   * @returns SaveTaskForSubmittingDomainNameCredentialByTemplateIdResponse
   */
  async saveTaskForSubmittingDomainNameCredentialByTemplateId(request: $_model.SaveTaskForSubmittingDomainNameCredentialByTemplateIdRequest): Promise<$_model.SaveTaskForSubmittingDomainNameCredentialByTemplateIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveTaskForSubmittingDomainNameCredentialByTemplateIdWithOptions(request, runtime);
  }

  /**
   * 保存修改联系人的任务
   * 
   * @param request - SaveTaskForUpdatingContactByTempateIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTaskForUpdatingContactByTempateIdResponse
   */
  async saveTaskForUpdatingContactByTempateIdWithOptions(request: $_model.SaveTaskForUpdatingContactByTempateIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveTaskForUpdatingContactByTempateIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addTransferLock)) {
      query["AddTransferLock"] = request.addTransferLock;
    }

    if (!$dara.isNull(request.contactTemplateId)) {
      query["ContactTemplateId"] = request.contactTemplateId;
    }

    if (!$dara.isNull(request.contactType)) {
      query["ContactType"] = request.contactType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.saleId)) {
      query["SaleId"] = request.saleId;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveTaskForUpdatingContactByTempateId",
      version: "2016-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveTaskForUpdatingContactByTempateIdResponse>(await this.callApi(params, req, runtime), new $_model.SaveTaskForUpdatingContactByTempateIdResponse({}));
  }

  /**
   * 保存修改联系人的任务
   * 
   * @param request - SaveTaskForUpdatingContactByTempateIdRequest
   * @returns SaveTaskForUpdatingContactByTempateIdResponse
   */
  async saveTaskForUpdatingContactByTempateId(request: $_model.SaveTaskForUpdatingContactByTempateIdRequest): Promise<$_model.SaveTaskForUpdatingContactByTempateIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveTaskForUpdatingContactByTempateIdWithOptions(request, runtime);
  }

  /**
   * 保存修改联系人的任务
   * 
   * @param request - SaveTaskForUpdatingContactByTemplateIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTaskForUpdatingContactByTemplateIdResponse
   */
  async saveTaskForUpdatingContactByTemplateIdWithOptions(request: $_model.SaveTaskForUpdatingContactByTemplateIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveTaskForUpdatingContactByTemplateIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addTransferLock)) {
      query["AddTransferLock"] = request.addTransferLock;
    }

    if (!$dara.isNull(request.contactTemplateId)) {
      query["ContactTemplateId"] = request.contactTemplateId;
    }

    if (!$dara.isNull(request.contactType)) {
      query["ContactType"] = request.contactType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.saleId)) {
      query["SaleId"] = request.saleId;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveTaskForUpdatingContactByTemplateId",
      version: "2016-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveTaskForUpdatingContactByTemplateIdResponse>(await this.callApi(params, req, runtime), new $_model.SaveTaskForUpdatingContactByTemplateIdResponse({}));
  }

  /**
   * 保存修改联系人的任务
   * 
   * @param request - SaveTaskForUpdatingContactByTemplateIdRequest
   * @returns SaveTaskForUpdatingContactByTemplateIdResponse
   */
  async saveTaskForUpdatingContactByTemplateId(request: $_model.SaveTaskForUpdatingContactByTemplateIdRequest): Promise<$_model.SaveTaskForUpdatingContactByTemplateIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveTaskForUpdatingContactByTemplateIdWithOptions(request, runtime);
  }

  /**
   * 开启或者关闭whois保护
   * 
   * @param request - WhoisProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WhoisProtectionResponse
   */
  async whoisProtectionWithOptions(request: $_model.WhoisProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.WhoisProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataContent)) {
      query["DataContent"] = request.dataContent;
    }

    if (!$dara.isNull(request.dataSource)) {
      query["DataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!$dara.isNull(request.whoisProtect)) {
      query["WhoisProtect"] = request.whoisProtect;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "WhoisProtection",
      version: "2016-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.WhoisProtectionResponse>(await this.callApi(params, req, runtime), new $_model.WhoisProtectionResponse({}));
  }

  /**
   * 开启或者关闭whois保护
   * 
   * @param request - WhoisProtectionRequest
   * @returns WhoisProtectionResponse
   */
  async whoisProtection(request: $_model.WhoisProtectionRequest): Promise<$_model.WhoisProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.whoisProtectionWithOptions(request, runtime);
  }

}
