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
   * Bind Application Domain
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
   * Bind Application Domain
   * 
   * @param request - BindAppDomainRequest
   * @returns BindAppDomainResponse
   */
  async bindAppDomain(request: $_model.BindAppDomainRequest): Promise<$_model.BindAppDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAppDomainWithOptions(request, runtime);
  }

  /**
   * Create a website instance
   * 
   * @param tmpReq - CreateAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppInstanceResponse
   */
  async createAppInstanceWithOptions(tmpReq: $_model.CreateAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAppInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applicationType)) {
      query["ApplicationType"] = request.applicationType;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deployArea)) {
      query["DeployArea"] = request.deployArea;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppInstance",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppInstanceResponse({}));
  }

  /**
   * Create a website instance
   * 
   * @param request - CreateAppInstanceRequest
   * @returns CreateAppInstanceResponse
   */
  async createAppInstance(request: $_model.CreateAppInstanceRequest): Promise<$_model.CreateAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppInstanceWithOptions(request, runtime);
  }

  /**
   * SSO ticket
   * 
   * @param request - CreateAppInstanceTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppInstanceTicketResponse
   */
  async createAppInstanceTicketWithOptions(request: $_model.CreateAppInstanceTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppInstanceTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppInstanceTicket",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppInstanceTicketResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppInstanceTicketResponse({}));
  }

  /**
   * SSO ticket
   * 
   * @param request - CreateAppInstanceTicketRequest
   * @returns CreateAppInstanceTicketResponse
   */
  async createAppInstanceTicket(request: $_model.CreateAppInstanceTicketRequest): Promise<$_model.CreateAppInstanceTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppInstanceTicketWithOptions(request, runtime);
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
   * 创建素材中心文件夹
   * 
   * @param request - CreateMaterialDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMaterialDirectoryResponse
   */
  async createMaterialDirectoryWithOptions(request: $_model.CreateMaterialDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMaterialDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.parentDirectoryId)) {
      query["ParentDirectoryId"] = request.parentDirectoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMaterialDirectory",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMaterialDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateMaterialDirectoryResponse({}));
  }

  /**
   * 创建素材中心文件夹
   * 
   * @param request - CreateMaterialDirectoryRequest
   * @returns CreateMaterialDirectoryResponse
   */
  async createMaterialDirectory(request: $_model.CreateMaterialDirectoryRequest): Promise<$_model.CreateMaterialDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMaterialDirectoryWithOptions(request, runtime);
  }

  /**
   * Delete the SSL certificate of a domain
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
   * Delete the SSL certificate of a domain
   * 
   * @param request - DeleteAppDomainCertificateRequest
   * @returns DeleteAppDomainCertificateResponse
   */
  async deleteAppDomainCertificate(request: $_model.DeleteAppDomainCertificateRequest): Promise<$_model.DeleteAppDomainCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppDomainCertificateWithOptions(request, runtime);
  }

  /**
   * Delete the domain redirection rules
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
   * Delete the domain redirection rules
   * 
   * @param request - DeleteAppDomainRedirectRequest
   * @returns DeleteAppDomainRedirectResponse
   */
  async deleteAppDomainRedirect(request: $_model.DeleteAppDomainRedirectRequest): Promise<$_model.DeleteAppDomainRedirectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppDomainRedirectWithOptions(request, runtime);
  }

  /**
   * 删除素材中心文件夹
   * 
   * @param request - DeleteMaterialDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMaterialDirectoryResponse
   */
  async deleteMaterialDirectoryWithOptions(request: $_model.DeleteMaterialDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMaterialDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMaterialDirectory",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMaterialDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMaterialDirectoryResponse({}));
  }

  /**
   * 删除素材中心文件夹
   * 
   * @param request - DeleteMaterialDirectoryRequest
   * @returns DeleteMaterialDirectoryResponse
   */
  async deleteMaterialDirectory(request: $_model.DeleteMaterialDirectoryRequest): Promise<$_model.DeleteMaterialDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMaterialDirectoryWithOptions(request, runtime);
  }

  /**
   * 删除素材生产任务
   * 
   * @param tmpReq - DeleteMaterialTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMaterialTaskResponse
   */
  async deleteMaterialTaskWithOptions(tmpReq: $_model.DeleteMaterialTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMaterialTaskResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteMaterialTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskIds)) {
      request.taskIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIds, "TaskIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.taskIdsShrink)) {
      query["TaskIds"] = request.taskIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMaterialTask",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMaterialTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMaterialTaskResponse({}));
  }

  /**
   * 删除素材生产任务
   * 
   * @param request - DeleteMaterialTaskRequest
   * @returns DeleteMaterialTaskResponse
   */
  async deleteMaterialTask(request: $_model.DeleteMaterialTaskRequest): Promise<$_model.DeleteMaterialTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMaterialTaskWithOptions(request, runtime);
  }

  /**
   * Query the DNS resolution records of a domain
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
   * Query the DNS resolution records of a domain
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
   * 导出素材文件
   * 
   * @param tmpReq - ExportMaterialFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportMaterialFileResponse
   */
  async exportMaterialFileWithOptions(tmpReq: $_model.ExportMaterialFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportMaterialFileResponse> {
    tmpReq.validate();
    let request = new $_model.ExportMaterialFileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileIds)) {
      request.fileIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileIds, "FileIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.fileIdsShrink)) {
      query["FileIds"] = request.fileIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportMaterialFile",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportMaterialFileResponse>(await this.callApi(params, req, runtime), new $_model.ExportMaterialFileResponse({}));
  }

  /**
   * 导出素材文件
   * 
   * @param request - ExportMaterialFileRequest
   * @returns ExportMaterialFileResponse
   */
  async exportMaterialFile(request: $_model.ExportMaterialFileRequest): Promise<$_model.ExportMaterialFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportMaterialFileWithOptions(request, runtime);
  }

  /**
   * Query Application Instance Details
   * 
   * @param request - GetAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppInstanceResponse
   */
  async getAppInstanceWithOptions(request: $_model.GetAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppInstance",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetAppInstanceResponse({}));
  }

  /**
   * Query Application Instance Details
   * 
   * @param request - GetAppInstanceRequest
   * @returns GetAppInstanceResponse
   */
  async getAppInstance(request: $_model.GetAppInstanceRequest): Promise<$_model.GetAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppInstanceWithOptions(request, runtime);
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
   * 检查AccessToken
   * 
   * @param request - IntrospectAppInstanceTicketForPreviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IntrospectAppInstanceTicketForPreviewResponse
   */
  async introspectAppInstanceTicketForPreviewWithOptions(request: $_model.IntrospectAppInstanceTicketForPreviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IntrospectAppInstanceTicketForPreviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IntrospectAppInstanceTicketForPreview",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IntrospectAppInstanceTicketForPreviewResponse>(await this.callApi(params, req, runtime), new $_model.IntrospectAppInstanceTicketForPreviewResponse({}));
  }

  /**
   * 检查AccessToken
   * 
   * @param request - IntrospectAppInstanceTicketForPreviewRequest
   * @returns IntrospectAppInstanceTicketForPreviewResponse
   */
  async introspectAppInstanceTicketForPreview(request: $_model.IntrospectAppInstanceTicketForPreviewRequest): Promise<$_model.IntrospectAppInstanceTicketForPreviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.introspectAppInstanceTicketForPreviewWithOptions(request, runtime);
  }

  /**
   * Query the list of domain redirection rules
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
   * Query the list of domain redirection rules
   * 
   * @param request - ListAppDomainRedirectRecordsRequest
   * @returns ListAppDomainRedirectRecordsResponse
   */
  async listAppDomainRedirectRecords(request: $_model.ListAppDomainRedirectRecordsRequest): Promise<$_model.ListAppDomainRedirectRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppDomainRedirectRecordsWithOptions(request, runtime);
  }

  /**
   * List all domain names under the application instance
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
   * List all domain names under the application instance
   * 
   * @param request - ListAppInstanceDomainsRequest
   * @returns ListAppInstanceDomainsResponse
   */
  async listAppInstanceDomains(request: $_model.ListAppInstanceDomainsRequest): Promise<$_model.ListAppInstanceDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppInstanceDomainsWithOptions(request, runtime);
  }

  /**
   * Website Instance List Query
   * 
   * @param tmpReq - ListAppInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppInstancesResponse
   */
  async listAppInstancesWithOptions(tmpReq: $_model.ListAppInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.ListAppInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.statusList)) {
      request.statusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "StatusList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.endTimeBegin)) {
      query["EndTimeBegin"] = request.endTimeBegin;
    }

    if (!$dara.isNull(request.endTimeEnd)) {
      query["EndTimeEnd"] = request.endTimeEnd;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
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

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.statusListShrink)) {
      query["StatusList"] = request.statusListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppInstances",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListAppInstancesResponse({}));
  }

  /**
   * Website Instance List Query
   * 
   * @param request - ListAppInstancesRequest
   * @returns ListAppInstancesResponse
   */
  async listAppInstances(request: $_model.ListAppInstancesRequest): Promise<$_model.ListAppInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppInstancesWithOptions(request, runtime);
  }

  /**
   * Modify the configuration of a building instance
   * 
   * @param request - ModifyAppInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppInstanceSpecResponse
   */
  async modifyAppInstanceSpecWithOptions(request: $_model.ModifyAppInstanceSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppInstanceSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationType)) {
      query["ApplicationType"] = request.applicationType;
    }

    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deployArea)) {
      query["DeployArea"] = request.deployArea;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppInstanceSpec",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppInstanceSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppInstanceSpecResponse({}));
  }

  /**
   * Modify the configuration of a building instance
   * 
   * @param request - ModifyAppInstanceSpecRequest
   * @returns ModifyAppInstanceSpecResponse
   */
  async modifyAppInstanceSpec(request: $_model.ModifyAppInstanceSpecRequest): Promise<$_model.ModifyAppInstanceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppInstanceSpecWithOptions(request, runtime);
  }

  /**
   * 修改素材中心文件夹
   * 
   * @param request - ModifyMaterialDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMaterialDirectoryResponse
   */
  async modifyMaterialDirectoryWithOptions(request: $_model.ModifyMaterialDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMaterialDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMaterialDirectory",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMaterialDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMaterialDirectoryResponse({}));
  }

  /**
   * 修改素材中心文件夹
   * 
   * @param request - ModifyMaterialDirectoryRequest
   * @returns ModifyMaterialDirectoryResponse
   */
  async modifyMaterialDirectory(request: $_model.ModifyMaterialDirectoryRequest): Promise<$_model.ModifyMaterialDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMaterialDirectoryWithOptions(request, runtime);
  }

  /**
   * 修改素材文件
   * 
   * @param request - ModifyMaterialFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMaterialFileResponse
   */
  async modifyMaterialFileWithOptions(request: $_model.ModifyMaterialFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMaterialFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMaterialFile",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMaterialFileResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMaterialFileResponse({}));
  }

  /**
   * 修改素材文件
   * 
   * @param request - ModifyMaterialFileRequest
   * @returns ModifyMaterialFileResponse
   */
  async modifyMaterialFile(request: $_model.ModifyMaterialFileRequest): Promise<$_model.ModifyMaterialFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMaterialFileWithOptions(request, runtime);
  }

  /**
   * 修改素材文件状态
   * 
   * @param tmpReq - ModifyMaterialFileStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMaterialFileStatusResponse
   */
  async modifyMaterialFileStatusWithOptions(tmpReq: $_model.ModifyMaterialFileStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMaterialFileStatusResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyMaterialFileStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileIds)) {
      request.fileIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileIds, "FileIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.fileIdsShrink)) {
      query["FileIds"] = request.fileIdsShrink;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMaterialFileStatus",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMaterialFileStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMaterialFileStatusResponse({}));
  }

  /**
   * 修改素材文件状态
   * 
   * @param request - ModifyMaterialFileStatusRequest
   * @returns ModifyMaterialFileStatusResponse
   */
  async modifyMaterialFileStatus(request: $_model.ModifyMaterialFileStatusRequest): Promise<$_model.ModifyMaterialFileStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMaterialFileStatusWithOptions(request, runtime);
  }

  /**
   * 移动素材中心文件夹
   * 
   * @param request - MoveMaterialDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveMaterialDirectoryResponse
   */
  async moveMaterialDirectoryWithOptions(request: $_model.MoveMaterialDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveMaterialDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.parentDirectoryId)) {
      query["ParentDirectoryId"] = request.parentDirectoryId;
    }

    if (!$dara.isNull(request.sortNum)) {
      query["SortNum"] = request.sortNum;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveMaterialDirectory",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveMaterialDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.MoveMaterialDirectoryResponse({}));
  }

  /**
   * 移动素材中心文件夹
   * 
   * @param request - MoveMaterialDirectoryRequest
   * @returns MoveMaterialDirectoryResponse
   */
  async moveMaterialDirectory(request: $_model.MoveMaterialDirectoryRequest): Promise<$_model.MoveMaterialDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveMaterialDirectoryWithOptions(request, runtime);
  }

  /**
   * 移动素材文件
   * 
   * @param tmpReq - MoveMaterialFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveMaterialFileResponse
   */
  async moveMaterialFileWithOptions(tmpReq: $_model.MoveMaterialFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveMaterialFileResponse> {
    tmpReq.validate();
    let request = new $_model.MoveMaterialFileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileIds)) {
      request.fileIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileIds, "FileIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.fileIdsShrink)) {
      query["FileIds"] = request.fileIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveMaterialFile",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveMaterialFileResponse>(await this.callApi(params, req, runtime), new $_model.MoveMaterialFileResponse({}));
  }

  /**
   * 移动素材文件
   * 
   * @param request - MoveMaterialFileRequest
   * @returns MoveMaterialFileResponse
   */
  async moveMaterialFile(request: $_model.MoveMaterialFileRequest): Promise<$_model.MoveMaterialFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveMaterialFileWithOptions(request, runtime);
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
   * 查询素材中心文件夹树结构
   * 
   * @param request - QueryMaterialDirectoryTreeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMaterialDirectoryTreeResponse
   */
  async queryMaterialDirectoryTreeWithOptions(request: $_model.QueryMaterialDirectoryTreeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialDirectoryTreeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.hiddenPublic)) {
      query["HiddenPublic"] = request.hiddenPublic;
    }

    if (!$dara.isNull(request.root)) {
      query["Root"] = request.root;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMaterialDirectoryTree",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMaterialDirectoryTreeResponse>(await this.callApi(params, req, runtime), new $_model.QueryMaterialDirectoryTreeResponse({}));
  }

  /**
   * 查询素材中心文件夹树结构
   * 
   * @param request - QueryMaterialDirectoryTreeRequest
   * @returns QueryMaterialDirectoryTreeResponse
   */
  async queryMaterialDirectoryTree(request: $_model.QueryMaterialDirectoryTreeRequest): Promise<$_model.QueryMaterialDirectoryTreeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMaterialDirectoryTreeWithOptions(request, runtime);
  }

  /**
   * 查询素材文件详情
   * 
   * @param request - QueryMaterialFileDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMaterialFileDetailResponse
   */
  async queryMaterialFileDetailWithOptions(request: $_model.QueryMaterialFileDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialFileDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMaterialFileDetail",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMaterialFileDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryMaterialFileDetailResponse({}));
  }

  /**
   * 查询素材文件详情
   * 
   * @param request - QueryMaterialFileDetailRequest
   * @returns QueryMaterialFileDetailResponse
   */
  async queryMaterialFileDetail(request: $_model.QueryMaterialFileDetailRequest): Promise<$_model.QueryMaterialFileDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMaterialFileDetailWithOptions(request, runtime);
  }

  /**
   * Query Material File List
   * 
   * @param tmpReq - QueryMaterialFileListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMaterialFileListResponse
   */
  async queryMaterialFileListWithOptions(tmpReq: $_model.QueryMaterialFileListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialFileListResponse> {
    tmpReq.validate();
    let request = new $_model.QueryMaterialFileListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.statusList)) {
      request.statusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "StatusList", "json");
    }

    if (!$dara.isNull(tmpReq.suffixList)) {
      request.suffixListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.suffixList, "SuffixList", "json");
    }

    if (!$dara.isNull(tmpReq.typeList)) {
      request.typeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.typeList, "TypeList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.maxFileSize)) {
      query["MaxFileSize"] = request.maxFileSize;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.minFileSize)) {
      query["MinFileSize"] = request.minFileSize;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.statusListShrink)) {
      query["StatusList"] = request.statusListShrink;
    }

    if (!$dara.isNull(request.suffixListShrink)) {
      query["SuffixList"] = request.suffixListShrink;
    }

    if (!$dara.isNull(request.typeListShrink)) {
      query["TypeList"] = request.typeListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMaterialFileList",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMaterialFileListResponse>(await this.callApi(params, req, runtime), new $_model.QueryMaterialFileListResponse({}));
  }

  /**
   * Query Material File List
   * 
   * @param request - QueryMaterialFileListRequest
   * @returns QueryMaterialFileListResponse
   */
  async queryMaterialFileList(request: $_model.QueryMaterialFileListRequest): Promise<$_model.QueryMaterialFileListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMaterialFileListWithOptions(request, runtime);
  }

  /**
   * 查询素材中心文件概要信息
   * 
   * @param tmpReq - QueryMaterialFileSummaryInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMaterialFileSummaryInfoResponse
   */
  async queryMaterialFileSummaryInfoWithOptions(tmpReq: $_model.QueryMaterialFileSummaryInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialFileSummaryInfoResponse> {
    tmpReq.validate();
    let request = new $_model.QueryMaterialFileSummaryInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.statusList)) {
      request.statusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "StatusList", "json");
    }

    if (!$dara.isNull(tmpReq.typeList)) {
      request.typeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.typeList, "TypeList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.statusListShrink)) {
      query["StatusList"] = request.statusListShrink;
    }

    if (!$dara.isNull(request.typeListShrink)) {
      query["TypeList"] = request.typeListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMaterialFileSummaryInfo",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMaterialFileSummaryInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryMaterialFileSummaryInfoResponse({}));
  }

  /**
   * 查询素材中心文件概要信息
   * 
   * @param request - QueryMaterialFileSummaryInfoRequest
   * @returns QueryMaterialFileSummaryInfoResponse
   */
  async queryMaterialFileSummaryInfo(request: $_model.QueryMaterialFileSummaryInfoRequest): Promise<$_model.QueryMaterialFileSummaryInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMaterialFileSummaryInfoWithOptions(request, runtime);
  }

  /**
   * 查询素材生产任务详情
   * 
   * @param request - QueryMaterialTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMaterialTaskDetailResponse
   */
  async queryMaterialTaskDetailWithOptions(request: $_model.QueryMaterialTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMaterialTaskDetail",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMaterialTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryMaterialTaskDetailResponse({}));
  }

  /**
   * 查询素材生产任务详情
   * 
   * @param request - QueryMaterialTaskDetailRequest
   * @returns QueryMaterialTaskDetailResponse
   */
  async queryMaterialTaskDetail(request: $_model.QueryMaterialTaskDetailRequest): Promise<$_model.QueryMaterialTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMaterialTaskDetailWithOptions(request, runtime);
  }

  /**
   * 查询素材生产任务列表
   * 
   * @param tmpReq - QueryMaterialTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMaterialTaskListResponse
   */
  async queryMaterialTaskListWithOptions(tmpReq: $_model.QueryMaterialTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialTaskListResponse> {
    tmpReq.validate();
    let request = new $_model.QueryMaterialTaskListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.statusList)) {
      request.statusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "StatusList", "json");
    }

    if (!$dara.isNull(tmpReq.taskTypeList)) {
      request.taskTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskTypeList, "TaskTypeList", "json");
    }

    let query = { };
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

    if (!$dara.isNull(request.statusListShrink)) {
      query["StatusList"] = request.statusListShrink;
    }

    if (!$dara.isNull(request.taskTypeListShrink)) {
      query["TaskTypeList"] = request.taskTypeListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMaterialTaskList",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMaterialTaskListResponse>(await this.callApi(params, req, runtime), new $_model.QueryMaterialTaskListResponse({}));
  }

  /**
   * 查询素材生产任务列表
   * 
   * @param request - QueryMaterialTaskListRequest
   * @returns QueryMaterialTaskListResponse
   */
  async queryMaterialTaskList(request: $_model.QueryMaterialTaskListRequest): Promise<$_model.QueryMaterialTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMaterialTaskListWithOptions(request, runtime);
  }

  /**
   * Refresh ticket
   * 
   * @param request - RefreshAppInstanceTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshAppInstanceTicketResponse
   */
  async refreshAppInstanceTicketWithOptions(request: $_model.RefreshAppInstanceTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshAppInstanceTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshAppInstanceTicket",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshAppInstanceTicketResponse>(await this.callApi(params, req, runtime), new $_model.RefreshAppInstanceTicketResponse({}));
  }

  /**
   * Refresh ticket
   * 
   * @param request - RefreshAppInstanceTicketRequest
   * @returns RefreshAppInstanceTicketResponse
   */
  async refreshAppInstanceTicket(request: $_model.RefreshAppInstanceTicketRequest): Promise<$_model.RefreshAppInstanceTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshAppInstanceTicketWithOptions(request, runtime);
  }

  /**
   * 渠道业务退款接口
   * 
   * @param request - RefundAppInstanceForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefundAppInstanceForPartnerResponse
   */
  async refundAppInstanceForPartnerWithOptions(request: $_model.RefundAppInstanceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefundAppInstanceForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.refundReason)) {
      query["RefundReason"] = request.refundReason;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefundAppInstanceForPartner",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefundAppInstanceForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.RefundAppInstanceForPartnerResponse({}));
  }

  /**
   * 渠道业务退款接口
   * 
   * @param request - RefundAppInstanceForPartnerRequest
   * @returns RefundAppInstanceForPartnerResponse
   */
  async refundAppInstanceForPartner(request: $_model.RefundAppInstanceForPartnerRequest): Promise<$_model.RefundAppInstanceForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refundAppInstanceForPartnerWithOptions(request, runtime);
  }

  /**
   * Renewal of website building instance
   * 
   * @param request - RenewAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewAppInstanceResponse
   */
  async renewAppInstanceWithOptions(request: $_model.RenewAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewAppInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewAppInstance",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewAppInstanceResponse({}));
  }

  /**
   * Renewal of website building instance
   * 
   * @param request - RenewAppInstanceRequest
   * @returns RenewAppInstanceResponse
   */
  async renewAppInstance(request: $_model.RenewAppInstanceRequest): Promise<$_model.RenewAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewAppInstanceWithOptions(request, runtime);
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
   * Set the SSL certificate for a domain
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
   * Set the SSL certificate for a domain
   * 
   * @param request - SetAppDomainCertificateRequest
   * @returns SetAppDomainCertificateResponse
   */
  async setAppDomainCertificate(request: $_model.SetAppDomainCertificateRequest): Promise<$_model.SetAppDomainCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAppDomainCertificateWithOptions(request, runtime);
  }

  /**
   * 提交素材生产任务
   * 
   * @param request - SubmitMaterialTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitMaterialTaskResponse
   */
  async submitMaterialTaskWithOptions(request: $_model.SubmitMaterialTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitMaterialTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskParam)) {
      query["TaskParam"] = request.taskParam;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitMaterialTask",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitMaterialTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitMaterialTaskResponse({}));
  }

  /**
   * 提交素材生产任务
   * 
   * @param request - SubmitMaterialTaskRequest
   * @returns SubmitMaterialTaskResponse
   */
  async submitMaterialTask(request: $_model.SubmitMaterialTaskRequest): Promise<$_model.SubmitMaterialTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitMaterialTaskWithOptions(request, runtime);
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
   * Unbind Application Domain
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
   * Unbind Application Domain
   * 
   * @param request - UnbindAppDomainRequest
   * @returns UnbindAppDomainResponse
   */
  async unbindAppDomain(request: $_model.UnbindAppDomainRequest): Promise<$_model.UnbindAppDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindAppDomainWithOptions(request, runtime);
  }

  /**
   * 上传素材文件
   * 
   * @param request - UploadMaterialFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadMaterialFileResponse
   */
  async uploadMaterialFileWithOptions(request: $_model.UploadMaterialFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadMaterialFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadMaterialFile",
      version: "2025-04-29",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadMaterialFileResponse>(await this.callApi(params, req, runtime), new $_model.UploadMaterialFileResponse({}));
  }

  /**
   * 上传素材文件
   * 
   * @param request - UploadMaterialFileRequest
   * @returns UploadMaterialFileResponse
   */
  async uploadMaterialFile(request: $_model.UploadMaterialFileRequest): Promise<$_model.UploadMaterialFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadMaterialFileWithOptions(request, runtime);
  }

}
