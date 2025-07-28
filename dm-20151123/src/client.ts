// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi, * as $OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dm", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }

  async _postOSSObject(bucketName: string, form: {[key: string]: any}): Promise<{[key: string]: any}> {
    let request_ = new $dara.Request();
    let boundary = $dara.Form.getBoundary();
    request_.protocol = "HTTPS";
    request_.method = "POST";
    request_.pathname = `/`;
    request_.headers = {
      host: String(form["host"]),
      date: OpenApiUtil.getDateUTCString(),
      'user-agent': OpenApiUtil.getUserAgent(""),
    };
    request_.headers["content-type"] = `multipart/form-data; boundary=${boundary}`;
    request_.body = $dara.Form.toFileForm(form, boundary);
    let response_ = await $dara.doAction(request_);

    let respMap : {[key: string]: any} = null;
    let bodyStr = await $dara.Stream.readAsString(response_.body);
    if ((response_.statusCode >= 400) && (response_.statusCode < 600)) {
      respMap = $dara.XML.parseXml(bodyStr, null);
      let err = respMap["Error"];
      throw new $OpenApi.ClientError({
        code: String(err["Code"]),
        message: String(err["Message"]),
        data: {
          httpCode: response_.statusCode,
          requestId: String(err["RequestId"]),
          hostId: String(err["HostId"]),
        },
      });
    }

    respMap = $dara.XML.parseXml(bodyStr, null);
    return {
      ...respMap,
    };
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
   * Add IP Protection Information
   * 
   * @param request - AddIpfilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddIpfilterResponse
   */
  async addIpfilterWithOptions(request: $_model.AddIpfilterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddIpfilterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipAddress)) {
      query["IpAddress"] = request.ipAddress;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddIpfilter",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddIpfilterResponse>(await this.callApi(params, req, runtime), new $_model.AddIpfilterResponse({}));
  }

  /**
   * Add IP Protection Information
   * 
   * @param request - AddIpfilterRequest
   * @returns AddIpfilterResponse
   */
  async addIpfilter(request: $_model.AddIpfilterRequest): Promise<$_model.AddIpfilterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addIpfilterWithOptions(request, runtime);
  }

  /**
   * Verify Reply Address
   * 
   * @param request - ApproveReplyMailAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApproveReplyMailAddressResponse
   */
  async approveReplyMailAddressWithOptions(request: $_model.ApproveReplyMailAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApproveReplyMailAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.ticket)) {
      query["Ticket"] = request.ticket;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApproveReplyMailAddress",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApproveReplyMailAddressResponse>(await this.callApi(params, req, runtime), new $_model.ApproveReplyMailAddressResponse({}));
  }

  /**
   * Verify Reply Address
   * 
   * @param request - ApproveReplyMailAddressRequest
   * @returns ApproveReplyMailAddressResponse
   */
  async approveReplyMailAddress(request: $_model.ApproveReplyMailAddressRequest): Promise<$_model.ApproveReplyMailAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.approveReplyMailAddressWithOptions(request, runtime);
  }

  /**
   * Batch Send Emails
   * 
   * @param request - BatchSendMailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSendMailResponse
   */
  async batchSendMailWithOptions(request: $_model.BatchSendMailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchSendMailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.clickTrace)) {
      query["ClickTrace"] = request.clickTrace;
    }

    if (!$dara.isNull(request.headers)) {
      query["Headers"] = request.headers;
    }

    if (!$dara.isNull(request.ipPoolId)) {
      query["IpPoolId"] = request.ipPoolId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.receiversName)) {
      query["ReceiversName"] = request.receiversName;
    }

    if (!$dara.isNull(request.replyAddress)) {
      query["ReplyAddress"] = request.replyAddress;
    }

    if (!$dara.isNull(request.replyAddressAlias)) {
      query["ReplyAddressAlias"] = request.replyAddressAlias;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.unSubscribeFilterLevel)) {
      query["UnSubscribeFilterLevel"] = request.unSubscribeFilterLevel;
    }

    if (!$dara.isNull(request.unSubscribeLinkType)) {
      query["UnSubscribeLinkType"] = request.unSubscribeLinkType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchSendMail",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchSendMailResponse>(await this.callApi(params, req, runtime), new $_model.BatchSendMailResponse({}));
  }

  /**
   * Batch Send Emails
   * 
   * @param request - BatchSendMailRequest
   * @returns BatchSendMailResponse
   */
  async batchSendMail(request: $_model.BatchSendMailRequest): Promise<$_model.BatchSendMailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchSendMailWithOptions(request, runtime);
  }

  /**
   * 修改域名DKIM记录
   * 
   * @param request - ChangeDomainDkimRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeDomainDkimRecordResponse
   */
  async changeDomainDkimRecordWithOptions(request: $_model.ChangeDomainDkimRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeDomainDkimRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dkimRsaLength)) {
      query["DkimRsaLength"] = request.dkimRsaLength;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeDomainDkimRecord",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeDomainDkimRecordResponse>(await this.callApi(params, req, runtime), new $_model.ChangeDomainDkimRecordResponse({}));
  }

  /**
   * 修改域名DKIM记录
   * 
   * @param request - ChangeDomainDkimRecordRequest
   * @returns ChangeDomainDkimRecordResponse
   */
  async changeDomainDkimRecord(request: $_model.ChangeDomainDkimRecordRequest): Promise<$_model.ChangeDomainDkimRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeDomainDkimRecordWithOptions(request, runtime);
  }

  /**
   * Check Domain Status
   * 
   * @param request - CheckDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDomainResponse
   */
  async checkDomainWithOptions(request: $_model.CheckDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckDomain",
      version: "2015-11-23",
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
   * Check Domain Status
   * 
   * @param request - CheckDomainRequest
   * @returns CheckDomainResponse
   */
  async checkDomain(request: $_model.CheckDomainRequest): Promise<$_model.CheckDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDomainWithOptions(request, runtime);
  }

  /**
   * Validate Reply-To Address
   * 
   * @param request - CheckReplyToMailAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckReplyToMailAddressResponse
   */
  async checkReplyToMailAddressWithOptions(request: $_model.CheckReplyToMailAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckReplyToMailAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.mailAddressId)) {
      query["MailAddressId"] = request.mailAddressId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckReplyToMailAddress",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckReplyToMailAddressResponse>(await this.callApi(params, req, runtime), new $_model.CheckReplyToMailAddressResponse({}));
  }

  /**
   * Validate Reply-To Address
   * 
   * @param request - CheckReplyToMailAddressRequest
   * @returns CheckReplyToMailAddressResponse
   */
  async checkReplyToMailAddress(request: $_model.CheckReplyToMailAddressRequest): Promise<$_model.CheckReplyToMailAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkReplyToMailAddressWithOptions(request, runtime);
  }

  /**
   * Create Domain
   * 
   * @param request - CreateDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResponse
   */
  async createDomainWithOptions(request: $_model.CreateDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.dkimSelector)) {
      query["dkimSelector"] = request.dkimSelector;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDomain",
      version: "2015-11-23",
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
   * Create Domain
   * 
   * @param request - CreateDomainRequest
   * @returns CreateDomainResponse
   */
  async createDomain(request: $_model.CreateDomainRequest): Promise<$_model.CreateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  /**
   * Create a mail address.
   * 
   * @param request - CreateMailAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMailAddressResponse
   */
  async createMailAddressWithOptions(request: $_model.CreateMailAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMailAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.replyAddress)) {
      query["ReplyAddress"] = request.replyAddress;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sendtype)) {
      query["Sendtype"] = request.sendtype;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMailAddress",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMailAddressResponse>(await this.callApi(params, req, runtime), new $_model.CreateMailAddressResponse({}));
  }

  /**
   * Create a mail address.
   * 
   * @param request - CreateMailAddressRequest
   * @returns CreateMailAddressResponse
   */
  async createMailAddress(request: $_model.CreateMailAddressRequest): Promise<$_model.CreateMailAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMailAddressWithOptions(request, runtime);
  }

  /**
   * Create Receiver List
   * 
   * @param request - CreateReceiverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateReceiverResponse
   */
  async createReceiverWithOptions(request: $_model.CreateReceiverRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateReceiverResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.receiversAlias)) {
      query["ReceiversAlias"] = request.receiversAlias;
    }

    if (!$dara.isNull(request.receiversName)) {
      query["ReceiversName"] = request.receiversName;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateReceiver",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateReceiverResponse>(await this.callApi(params, req, runtime), new $_model.CreateReceiverResponse({}));
  }

  /**
   * Create Receiver List
   * 
   * @param request - CreateReceiverRequest
   * @returns CreateReceiverResponse
   */
  async createReceiver(request: $_model.CreateReceiverRequest): Promise<$_model.CreateReceiverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createReceiverWithOptions(request, runtime);
  }

  /**
   * Create Tag
   * 
   * @param request - CreateTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTagResponse
   */
  async createTagWithOptions(request: $_model.CreateTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tagDescription)) {
      query["TagDescription"] = request.tagDescription;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTag",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTagResponse>(await this.callApi(params, req, runtime), new $_model.CreateTagResponse({}));
  }

  /**
   * Create Tag
   * 
   * @param request - CreateTagRequest
   * @returns CreateTagResponse
   */
  async createTag(request: $_model.CreateTagRequest): Promise<$_model.CreateTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTagWithOptions(request, runtime);
  }

  /**
   * Create User\\"s Invalid Address
   * 
   * @param request - CreateUserSuppressionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserSuppressionResponse
   */
  async createUserSuppressionWithOptions(request: $_model.CreateUserSuppressionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserSuppressionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserSuppression",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserSuppressionResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserSuppressionResponse({}));
  }

  /**
   * Create User\\"s Invalid Address
   * 
   * @param request - CreateUserSuppressionRequest
   * @returns CreateUserSuppressionResponse
   */
  async createUserSuppression(request: $_model.CreateUserSuppressionRequest): Promise<$_model.CreateUserSuppressionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserSuppressionWithOptions(request, runtime);
  }

  /**
   * Set Dedicated IP Auto Renewal
   * 
   * @param request - DedicatedIpAutoRenewalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DedicatedIpAutoRenewalResponse
   */
  async dedicatedIpAutoRenewalWithOptions(request: $_model.DedicatedIpAutoRenewalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DedicatedIpAutoRenewalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenewal)) {
      query["AutoRenewal"] = request.autoRenewal;
    }

    if (!$dara.isNull(request.buyResourceIds)) {
      query["BuyResourceIds"] = request.buyResourceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DedicatedIpAutoRenewal",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DedicatedIpAutoRenewalResponse>(await this.callApi(params, req, runtime), new $_model.DedicatedIpAutoRenewalResponse({}));
  }

  /**
   * Set Dedicated IP Auto Renewal
   * 
   * @param request - DedicatedIpAutoRenewalRequest
   * @returns DedicatedIpAutoRenewalResponse
   */
  async dedicatedIpAutoRenewal(request: $_model.DedicatedIpAutoRenewalRequest): Promise<$_model.DedicatedIpAutoRenewalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dedicatedIpAutoRenewalWithOptions(request, runtime);
  }

  /**
   * Change the warmup method for a dedicated IP
   * 
   * @param request - DedicatedIpChangeWarmupTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DedicatedIpChangeWarmupTypeResponse
   */
  async dedicatedIpChangeWarmupTypeWithOptions(request: $_model.DedicatedIpChangeWarmupTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DedicatedIpChangeWarmupTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.warmupType)) {
      query["WarmupType"] = request.warmupType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DedicatedIpChangeWarmupType",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DedicatedIpChangeWarmupTypeResponse>(await this.callApi(params, req, runtime), new $_model.DedicatedIpChangeWarmupTypeResponse({}));
  }

  /**
   * Change the warmup method for a dedicated IP
   * 
   * @param request - DedicatedIpChangeWarmupTypeRequest
   * @returns DedicatedIpChangeWarmupTypeResponse
   */
  async dedicatedIpChangeWarmupType(request: $_model.DedicatedIpChangeWarmupTypeRequest): Promise<$_model.DedicatedIpChangeWarmupTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dedicatedIpChangeWarmupTypeWithOptions(request, runtime);
  }

  /**
   * Dedicated IP User IP List
   * 
   * @param request - DedicatedIpListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DedicatedIpListResponse
   */
  async dedicatedIpListWithOptions(request: $_model.DedicatedIpListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DedicatedIpListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DedicatedIpList",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DedicatedIpListResponse>(await this.callApi(params, req, runtime), new $_model.DedicatedIpListResponse({}));
  }

  /**
   * Dedicated IP User IP List
   * 
   * @param request - DedicatedIpListRequest
   * @returns DedicatedIpListResponse
   */
  async dedicatedIpList(request: $_model.DedicatedIpListRequest): Promise<$_model.DedicatedIpListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dedicatedIpListWithOptions(request, runtime);
  }

  /**
   * Purchased Independent IPs Not Added to Pool
   * 
   * @param request - DedicatedIpNonePoolListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DedicatedIpNonePoolListResponse
   */
  async dedicatedIpNonePoolListWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DedicatedIpNonePoolListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DedicatedIpNonePoolList",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DedicatedIpNonePoolListResponse>(await this.callApi(params, req, runtime), new $_model.DedicatedIpNonePoolListResponse({}));
  }

  /**
   * Purchased Independent IPs Not Added to Pool
   * @returns DedicatedIpNonePoolListResponse
   */
  async dedicatedIpNonePoolList(): Promise<$_model.DedicatedIpNonePoolListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dedicatedIpNonePoolListWithOptions(runtime);
  }

  /**
   * Creation of Independent IP Pool
   * 
   * @param request - DedicatedIpPoolCreateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DedicatedIpPoolCreateResponse
   */
  async dedicatedIpPoolCreateWithOptions(request: $_model.DedicatedIpPoolCreateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DedicatedIpPoolCreateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buyResourceIds)) {
      query["BuyResourceIds"] = request.buyResourceIds;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DedicatedIpPoolCreate",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DedicatedIpPoolCreateResponse>(await this.callApi(params, req, runtime), new $_model.DedicatedIpPoolCreateResponse({}));
  }

  /**
   * Creation of Independent IP Pool
   * 
   * @param request - DedicatedIpPoolCreateRequest
   * @returns DedicatedIpPoolCreateResponse
   */
  async dedicatedIpPoolCreate(request: $_model.DedicatedIpPoolCreateRequest): Promise<$_model.DedicatedIpPoolCreateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dedicatedIpPoolCreateWithOptions(request, runtime);
  }

  /**
   * 独立IP池删除
   * 
   * @param request - DedicatedIpPoolDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DedicatedIpPoolDeleteResponse
   */
  async dedicatedIpPoolDeleteWithOptions(request: $_model.DedicatedIpPoolDeleteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DedicatedIpPoolDeleteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DedicatedIpPoolDelete",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DedicatedIpPoolDeleteResponse>(await this.callApi(params, req, runtime), new $_model.DedicatedIpPoolDeleteResponse({}));
  }

  /**
   * 独立IP池删除
   * 
   * @param request - DedicatedIpPoolDeleteRequest
   * @returns DedicatedIpPoolDeleteResponse
   */
  async dedicatedIpPoolDelete(request: $_model.DedicatedIpPoolDeleteRequest): Promise<$_model.DedicatedIpPoolDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dedicatedIpPoolDeleteWithOptions(request, runtime);
  }

  /**
   * Dedicated IP Pool List
   * 
   * @param request - DedicatedIpPoolListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DedicatedIpPoolListResponse
   */
  async dedicatedIpPoolListWithOptions(request: $_model.DedicatedIpPoolListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DedicatedIpPoolListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DedicatedIpPoolList",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DedicatedIpPoolListResponse>(await this.callApi(params, req, runtime), new $_model.DedicatedIpPoolListResponse({}));
  }

  /**
   * Dedicated IP Pool List
   * 
   * @param request - DedicatedIpPoolListRequest
   * @returns DedicatedIpPoolListResponse
   */
  async dedicatedIpPoolList(request: $_model.DedicatedIpPoolListRequest): Promise<$_model.DedicatedIpPoolListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dedicatedIpPoolListWithOptions(request, runtime);
  }

  /**
   * Update of dedicated IP Pool
   * 
   * @param request - DedicatedIpPoolUpdateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DedicatedIpPoolUpdateResponse
   */
  async dedicatedIpPoolUpdateWithOptions(request: $_model.DedicatedIpPoolUpdateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DedicatedIpPoolUpdateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buyResourceIds)) {
      query["BuyResourceIds"] = request.buyResourceIds;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.updateResource)) {
      query["UpdateResource"] = request.updateResource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DedicatedIpPoolUpdate",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DedicatedIpPoolUpdateResponse>(await this.callApi(params, req, runtime), new $_model.DedicatedIpPoolUpdateResponse({}));
  }

  /**
   * Update of dedicated IP Pool
   * 
   * @param request - DedicatedIpPoolUpdateRequest
   * @returns DedicatedIpPoolUpdateResponse
   */
  async dedicatedIpPoolUpdate(request: $_model.DedicatedIpPoolUpdateRequest): Promise<$_model.DedicatedIpPoolUpdateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dedicatedIpPoolUpdateWithOptions(request, runtime);
  }

  /**
   * Delete Domain
   * 
   * @param request - DeleteDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(request: $_model.DeleteDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomain",
      version: "2015-11-23",
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
   * Delete Domain
   * 
   * @param request - DeleteDomainRequest
   * @returns DeleteDomainResponse
   */
  async deleteDomain(request: $_model.DeleteDomainRequest): Promise<$_model.DeleteDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  /**
   * Remove invalid addresses from the invalid address database
   * 
   * @param request - DeleteInvalidAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInvalidAddressResponse
   */
  async deleteInvalidAddressWithOptions(request: $_model.DeleteInvalidAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInvalidAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.toAddress)) {
      query["ToAddress"] = request.toAddress;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInvalidAddress",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInvalidAddressResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInvalidAddressResponse({}));
  }

  /**
   * Remove invalid addresses from the invalid address database
   * 
   * @param request - DeleteInvalidAddressRequest
   * @returns DeleteInvalidAddressResponse
   */
  async deleteInvalidAddress(request: $_model.DeleteInvalidAddressRequest): Promise<$_model.DeleteInvalidAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInvalidAddressWithOptions(request, runtime);
  }

  /**
   * Delete IP Protection Information
   * 
   * @param request - DeleteIpfilterByEdmIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpfilterByEdmIdResponse
   */
  async deleteIpfilterByEdmIdWithOptions(request: $_model.DeleteIpfilterByEdmIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIpfilterByEdmIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fromType)) {
      query["FromType"] = request.fromType;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIpfilterByEdmId",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIpfilterByEdmIdResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIpfilterByEdmIdResponse({}));
  }

  /**
   * Delete IP Protection Information
   * 
   * @param request - DeleteIpfilterByEdmIdRequest
   * @returns DeleteIpfilterByEdmIdResponse
   */
  async deleteIpfilterByEdmId(request: $_model.DeleteIpfilterByEdmIdRequest): Promise<$_model.DeleteIpfilterByEdmIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIpfilterByEdmIdWithOptions(request, runtime);
  }

  /**
   * Delete Mail Address
   * 
   * @param request - DeleteMailAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMailAddressResponse
   */
  async deleteMailAddressWithOptions(request: $_model.DeleteMailAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMailAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mailAddressId)) {
      query["MailAddressId"] = request.mailAddressId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMailAddress",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMailAddressResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMailAddressResponse({}));
  }

  /**
   * Delete Mail Address
   * 
   * @param request - DeleteMailAddressRequest
   * @returns DeleteMailAddressResponse
   */
  async deleteMailAddress(request: $_model.DeleteMailAddressRequest): Promise<$_model.DeleteMailAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMailAddressWithOptions(request, runtime);
  }

  /**
   * Delete Receiver List
   * 
   * @param request - DeleteReceiverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteReceiverResponse
   */
  async deleteReceiverWithOptions(request: $_model.DeleteReceiverRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteReceiverResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.receiverId)) {
      query["ReceiverId"] = request.receiverId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteReceiver",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteReceiverResponse>(await this.callApi(params, req, runtime), new $_model.DeleteReceiverResponse({}));
  }

  /**
   * Delete Receiver List
   * 
   * @param request - DeleteReceiverRequest
   * @returns DeleteReceiverResponse
   */
  async deleteReceiver(request: $_model.DeleteReceiverRequest): Promise<$_model.DeleteReceiverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteReceiverWithOptions(request, runtime);
  }

  /**
   * Delete a Single Recipient
   * 
   * @param request - DeleteReceiverDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteReceiverDetailResponse
   */
  async deleteReceiverDetailWithOptions(request: $_model.DeleteReceiverDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteReceiverDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.receiverId)) {
      query["ReceiverId"] = request.receiverId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteReceiverDetail",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteReceiverDetailResponse>(await this.callApi(params, req, runtime), new $_model.DeleteReceiverDetailResponse({}));
  }

  /**
   * Delete a Single Recipient
   * 
   * @param request - DeleteReceiverDetailRequest
   * @returns DeleteReceiverDetailResponse
   */
  async deleteReceiverDetail(request: $_model.DeleteReceiverDetailRequest): Promise<$_model.DeleteReceiverDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteReceiverDetailWithOptions(request, runtime);
  }

  /**
   * Delete Tag
   * 
   * @param request - DeleteTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTagResponse
   */
  async deleteTagWithOptions(request: $_model.DeleteTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTag",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTagResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTagResponse({}));
  }

  /**
   * Delete Tag
   * 
   * @param request - DeleteTagRequest
   * @returns DeleteTagResponse
   */
  async deleteTag(request: $_model.DeleteTagRequest): Promise<$_model.DeleteTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTagWithOptions(request, runtime);
  }

  /**
   * Retrieve account information.
   * 
   * @param request - DescAccountSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescAccountSummaryResponse
   */
  async descAccountSummaryWithOptions(request: $_model.DescAccountSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescAccountSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescAccountSummary",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescAccountSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescAccountSummaryResponse({}));
  }

  /**
   * Retrieve account information.
   * 
   * @param request - DescAccountSummaryRequest
   * @returns DescAccountSummaryResponse
   */
  async descAccountSummary(request: $_model.DescAccountSummaryRequest): Promise<$_model.DescAccountSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.descAccountSummaryWithOptions(request, runtime);
  }

  /**
   * Get Domain Details
   * 
   * @param request - DescDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescDomainResponse
   */
  async descDomainWithOptions(request: $_model.DescDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.requireRealTimeDnsRecords)) {
      query["RequireRealTimeDnsRecords"] = request.requireRealTimeDnsRecords;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescDomain",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescDomainResponse>(await this.callApi(params, req, runtime), new $_model.DescDomainResponse({}));
  }

  /**
   * Get Domain Details
   * 
   * @param request - DescDomainRequest
   * @returns DescDomainResponse
   */
  async descDomain(request: $_model.DescDomainRequest): Promise<$_model.DescDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.descDomainWithOptions(request, runtime);
  }

  /**
   * Get IP Protection Information
   * 
   * @param request - GetIpProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIpProtectionResponse
   */
  async getIpProtectionWithOptions(request: $_model.GetIpProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIpProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIpProtection",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIpProtectionResponse>(await this.callApi(params, req, runtime), new $_model.GetIpProtectionResponse({}));
  }

  /**
   * Get IP Protection Information
   * 
   * @param request - GetIpProtectionRequest
   * @returns GetIpProtectionResponse
   */
  async getIpProtection(request: $_model.GetIpProtectionRequest): Promise<$_model.GetIpProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIpProtectionWithOptions(request, runtime);
  }

  /**
   * Retrieve IP Protection Information
   * 
   * @param request - GetIpfilterListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIpfilterListResponse
   */
  async getIpfilterListWithOptions(request: $_model.GetIpfilterListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIpfilterListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIpfilterList",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIpfilterListResponse>(await this.callApi(params, req, runtime), new $_model.GetIpfilterListResponse({}));
  }

  /**
   * Retrieve IP Protection Information
   * 
   * @param request - GetIpfilterListRequest
   * @returns GetIpfilterListResponse
   */
  async getIpfilterList(request: $_model.GetIpfilterListRequest): Promise<$_model.GetIpfilterListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIpfilterListWithOptions(request, runtime);
  }

  /**
   * 获取用户无效地址级别配置
   * 
   * @param request - GetSuppressionListLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSuppressionListLevelResponse
   */
  async getSuppressionListLevelWithOptions(request: $_model.GetSuppressionListLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSuppressionListLevelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSuppressionListLevel",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSuppressionListLevelResponse>(await this.callApi(params, req, runtime), new $_model.GetSuppressionListLevelResponse({}));
  }

  /**
   * 获取用户无效地址级别配置
   * 
   * @param request - GetSuppressionListLevelRequest
   * @returns GetSuppressionListLevelResponse
   */
  async getSuppressionListLevel(request: $_model.GetSuppressionListLevelRequest): Promise<$_model.GetSuppressionListLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSuppressionListLevelWithOptions(request, runtime);
  }

  /**
   * Get tracking information
   * 
   * @param request - GetTrackListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrackListResponse
   */
  async getTrackListWithOptions(request: $_model.GetTrackListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTrackListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.dedicatedIp)) {
      query["DedicatedIp"] = request.dedicatedIp;
    }

    if (!$dara.isNull(request.dedicatedIpPoolId)) {
      query["DedicatedIpPoolId"] = request.dedicatedIpPoolId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.esp)) {
      query["Esp"] = request.esp;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.offsetCreateTime)) {
      query["OffsetCreateTime"] = request.offsetCreateTime;
    }

    if (!$dara.isNull(request.offsetCreateTimeDesc)) {
      query["OffsetCreateTimeDesc"] = request.offsetCreateTimeDesc;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    if (!$dara.isNull(request.total)) {
      query["Total"] = request.total;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrackList",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTrackListResponse>(await this.callApi(params, req, runtime), new $_model.GetTrackListResponse({}));
  }

  /**
   * Get tracking information
   * 
   * @param request - GetTrackListRequest
   * @returns GetTrackListResponse
   */
  async getTrackList(request: $_model.GetTrackListRequest): Promise<$_model.GetTrackListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTrackListWithOptions(request, runtime);
  }

  /**
   * Get tracking information based on the sender address and tag name
   * 
   * @param request - GetTrackListByMailFromAndTagNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrackListByMailFromAndTagNameResponse
   */
  async getTrackListByMailFromAndTagNameWithOptions(request: $_model.GetTrackListByMailFromAndTagNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTrackListByMailFromAndTagNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.dedicatedIp)) {
      query["DedicatedIp"] = request.dedicatedIp;
    }

    if (!$dara.isNull(request.dedicatedIpPoolId)) {
      query["DedicatedIpPoolId"] = request.dedicatedIpPoolId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.esp)) {
      query["Esp"] = request.esp;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.offsetCreateTime)) {
      query["OffsetCreateTime"] = request.offsetCreateTime;
    }

    if (!$dara.isNull(request.offsetCreateTimeDesc)) {
      query["OffsetCreateTimeDesc"] = request.offsetCreateTimeDesc;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    if (!$dara.isNull(request.total)) {
      query["Total"] = request.total;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrackListByMailFromAndTagName",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTrackListByMailFromAndTagNameResponse>(await this.callApi(params, req, runtime), new $_model.GetTrackListByMailFromAndTagNameResponse({}));
  }

  /**
   * Get tracking information based on the sender address and tag name
   * 
   * @param request - GetTrackListByMailFromAndTagNameRequest
   * @returns GetTrackListByMailFromAndTagNameResponse
   */
  async getTrackListByMailFromAndTagName(request: $_model.GetTrackListByMailFromAndTagNameRequest): Promise<$_model.GetTrackListByMailFromAndTagNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTrackListByMailFromAndTagNameWithOptions(request, runtime);
  }

  /**
   * Get Account Details
   * 
   * @param request - GetUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserResponse>(await this.callApi(params, req, runtime), new $_model.GetUserResponse({}));
  }

  /**
   * Get Account Details
   * @returns GetUserResponse
   */
  async getUser(): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserWithOptions(runtime);
  }

  /**
   * 获取发信的黑名单列表
   * 
   * @param request - ListBlockSendingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBlockSendingResponse
   */
  async listBlockSendingWithOptions(request: $_model.ListBlockSendingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBlockSendingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.blockEmail)) {
      query["BlockEmail"] = request.blockEmail;
    }

    if (!$dara.isNull(request.blockType)) {
      query["BlockType"] = request.blockType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.senderEmail)) {
      query["SenderEmail"] = request.senderEmail;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBlockSending",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBlockSendingResponse>(await this.callApi(params, req, runtime), new $_model.ListBlockSendingResponse({}));
  }

  /**
   * 获取发信的黑名单列表
   * 
   * @param request - ListBlockSendingRequest
   * @returns ListBlockSendingResponse
   */
  async listBlockSending(request: $_model.ListBlockSendingRequest): Promise<$_model.ListBlockSendingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBlockSendingWithOptions(request, runtime);
  }

  /**
   * List User Invalid Addresses.
   * 
   * @param request - ListUserSuppressionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserSuppressionResponse
   */
  async listUserSuppressionWithOptions(request: $_model.ListUserSuppressionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserSuppressionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.endBounceTime)) {
      query["EndBounceTime"] = request.endBounceTime;
    }

    if (!$dara.isNull(request.endCreateTime)) {
      query["EndCreateTime"] = request.endCreateTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startBounceTime)) {
      query["StartBounceTime"] = request.startBounceTime;
    }

    if (!$dara.isNull(request.startCreateTime)) {
      query["StartCreateTime"] = request.startCreateTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserSuppression",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserSuppressionResponse>(await this.callApi(params, req, runtime), new $_model.ListUserSuppressionResponse({}));
  }

  /**
   * List User Invalid Addresses.
   * 
   * @param request - ListUserSuppressionRequest
   * @returns ListUserSuppressionResponse
   */
  async listUserSuppression(request: $_model.ListUserSuppressionRequest): Promise<$_model.ListUserSuppressionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserSuppressionWithOptions(request, runtime);
  }

  /**
   * Modify the sending address
   * 
   * @param request - ModifyMailAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMailAddressResponse
   */
  async modifyMailAddressWithOptions(request: $_model.ModifyMailAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMailAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mailAddressId)) {
      query["MailAddressId"] = request.mailAddressId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.replyAddress)) {
      query["ReplyAddress"] = request.replyAddress;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMailAddress",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMailAddressResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMailAddressResponse({}));
  }

  /**
   * Modify the sending address
   * 
   * @param request - ModifyMailAddressRequest
   * @returns ModifyMailAddressResponse
   */
  async modifyMailAddress(request: $_model.ModifyMailAddressRequest): Promise<$_model.ModifyMailAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMailAddressWithOptions(request, runtime);
  }

  /**
   * Modify the domain-level password
   * 
   * @param request - ModifyPWByDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPWByDomainResponse
   */
  async modifyPWByDomainWithOptions(request: $_model.ModifyPWByDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPWByDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPWByDomain",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPWByDomainResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPWByDomainResponse({}));
  }

  /**
   * Modify the domain-level password
   * 
   * @param request - ModifyPWByDomainRequest
   * @returns ModifyPWByDomainResponse
   */
  async modifyPWByDomain(request: $_model.ModifyPWByDomainRequest): Promise<$_model.ModifyPWByDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPWByDomainWithOptions(request, runtime);
  }

  /**
   * Modify Tag
   * 
   * @param request - ModifyTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTagResponse
   */
  async modifyTagWithOptions(request: $_model.ModifyTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tagDescription)) {
      query["TagDescription"] = request.tagDescription;
    }

    if (!$dara.isNull(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTag",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTagResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTagResponse({}));
  }

  /**
   * Modify Tag
   * 
   * @param request - ModifyTagRequest
   * @returns ModifyTagResponse
   */
  async modifyTag(request: $_model.ModifyTagRequest): Promise<$_model.ModifyTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTagWithOptions(request, runtime);
  }

  /**
   * Query domain information
   * 
   * @param request - QueryDomainByParamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainByParamResponse
   */
  async queryDomainByParamWithOptions(request: $_model.QueryDomainByParamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDomainByParamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDomainByParam",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDomainByParamResponse>(await this.callApi(params, req, runtime), new $_model.QueryDomainByParamResponse({}));
  }

  /**
   * Query domain information
   * 
   * @param request - QueryDomainByParamRequest
   * @returns QueryDomainByParamResponse
   */
  async queryDomainByParam(request: $_model.QueryDomainByParamRequest): Promise<$_model.QueryDomainByParamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDomainByParamWithOptions(request, runtime);
  }

  /**
   * NextStart changed to string
   * 
   * @remarks
   * Retrieve deduplicated invalid address information. If an email is sent to the same invalid address multiple times, only the first occurrence will be recorded. The query should be based on the time when the address was first classified as invalid.
   * 
   * @param request - QueryInvalidAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInvalidAddressResponse
   */
  async queryInvalidAddressWithOptions(request: $_model.QueryInvalidAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInvalidAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.length)) {
      query["Length"] = request.length;
    }

    if (!$dara.isNull(request.nextStart)) {
      query["NextStart"] = request.nextStart;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryInvalidAddress",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInvalidAddressResponse>(await this.callApi(params, req, runtime), new $_model.QueryInvalidAddressResponse({}));
  }

  /**
   * NextStart changed to string
   * 
   * @remarks
   * Retrieve deduplicated invalid address information. If an email is sent to the same invalid address multiple times, only the first occurrence will be recorded. The query should be based on the time when the address was first classified as invalid.
   * 
   * @param request - QueryInvalidAddressRequest
   * @returns QueryInvalidAddressResponse
   */
  async queryInvalidAddress(request: $_model.QueryInvalidAddressRequest): Promise<$_model.QueryInvalidAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInvalidAddressWithOptions(request, runtime);
  }

  /**
   * Query the list of sending addresses.
   * 
   * @param request - QueryMailAddressByParamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMailAddressByParamResponse
   */
  async queryMailAddressByParamWithOptions(request: $_model.QueryMailAddressByParamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMailAddressByParamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sendtype)) {
      query["Sendtype"] = request.sendtype;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMailAddressByParam",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMailAddressByParamResponse>(await this.callApi(params, req, runtime), new $_model.QueryMailAddressByParamResponse({}));
  }

  /**
   * Query the list of sending addresses.
   * 
   * @param request - QueryMailAddressByParamRequest
   * @returns QueryMailAddressByParamResponse
   */
  async queryMailAddressByParam(request: $_model.QueryMailAddressByParamRequest): Promise<$_model.QueryMailAddressByParamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMailAddressByParamWithOptions(request, runtime);
  }

  /**
   * Query the details of the recipient list
   * 
   * @param request - QueryReceiverByParamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryReceiverByParamResponse
   */
  async queryReceiverByParamWithOptions(request: $_model.QueryReceiverByParamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryReceiverByParamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryReceiverByParam",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryReceiverByParamResponse>(await this.callApi(params, req, runtime), new $_model.QueryReceiverByParamResponse({}));
  }

  /**
   * Query the details of the recipient list
   * 
   * @param request - QueryReceiverByParamRequest
   * @returns QueryReceiverByParamResponse
   */
  async queryReceiverByParam(request: $_model.QueryReceiverByParamRequest): Promise<$_model.QueryReceiverByParamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryReceiverByParamWithOptions(request, runtime);
  }

  /**
   * Retrieve detailed information about a recipient list
   * 
   * @param request - QueryReceiverDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryReceiverDetailResponse
   */
  async queryReceiverDetailWithOptions(request: $_model.QueryReceiverDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryReceiverDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.nextStart)) {
      query["NextStart"] = request.nextStart;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.receiverId)) {
      query["ReceiverId"] = request.receiverId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryReceiverDetail",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryReceiverDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryReceiverDetailResponse({}));
  }

  /**
   * Retrieve detailed information about a recipient list
   * 
   * @param request - QueryReceiverDetailRequest
   * @returns QueryReceiverDetailResponse
   */
  async queryReceiverDetail(request: $_model.QueryReceiverDetailRequest): Promise<$_model.QueryReceiverDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryReceiverDetailWithOptions(request, runtime);
  }

  /**
   * Call QueryTagByParam to retrieve tags.
   * 
   * @param request - QueryTagByParamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTagByParamResponse
   */
  async queryTagByParamWithOptions(request: $_model.QueryTagByParamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTagByParamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTagByParam",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTagByParamResponse>(await this.callApi(params, req, runtime), new $_model.QueryTagByParamResponse({}));
  }

  /**
   * Call QueryTagByParam to retrieve tags.
   * 
   * @param request - QueryTagByParamRequest
   * @returns QueryTagByParamResponse
   */
  async queryTagByParam(request: $_model.QueryTagByParamRequest): Promise<$_model.QueryTagByParamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTagByParamWithOptions(request, runtime);
  }

  /**
   * Query task list
   * 
   * @param request - QueryTaskByParamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskByParamResponse
   */
  async queryTaskByParamWithOptions(request: $_model.QueryTaskByParamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTaskByParamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTaskByParam",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTaskByParamResponse>(await this.callApi(params, req, runtime), new $_model.QueryTaskByParamResponse({}));
  }

  /**
   * Query task list
   * 
   * @param request - QueryTaskByParamRequest
   * @returns QueryTaskByParamResponse
   */
  async queryTaskByParam(request: $_model.QueryTaskByParamRequest): Promise<$_model.QueryTaskByParamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTaskByParamWithOptions(request, runtime);
  }

  /**
   * 删除用户无效地址
   * 
   * @param request - RemoveUserSuppressionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserSuppressionResponse
   */
  async removeUserSuppressionWithOptions(request: $_model.RemoveUserSuppressionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUserSuppressionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.suppressionIds)) {
      query["SuppressionIds"] = request.suppressionIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUserSuppression",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUserSuppressionResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUserSuppressionResponse({}));
  }

  /**
   * 删除用户无效地址
   * 
   * @param request - RemoveUserSuppressionRequest
   * @returns RemoveUserSuppressionResponse
   */
  async removeUserSuppression(request: $_model.RemoveUserSuppressionRequest): Promise<$_model.RemoveUserSuppressionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUserSuppressionWithOptions(request, runtime);
  }

  /**
   * Create a Single Recipient
   * 
   * @param request - SaveReceiverDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveReceiverDetailResponse
   */
  async saveReceiverDetailWithOptions(request: $_model.SaveReceiverDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveReceiverDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.detail)) {
      query["Detail"] = request.detail;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.receiverId)) {
      query["ReceiverId"] = request.receiverId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveReceiverDetail",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveReceiverDetailResponse>(await this.callApi(params, req, runtime), new $_model.SaveReceiverDetailResponse({}));
  }

  /**
   * Create a Single Recipient
   * 
   * @param request - SaveReceiverDetailRequest
   * @returns SaveReceiverDetailResponse
   */
  async saveReceiverDetail(request: $_model.SaveReceiverDetailRequest): Promise<$_model.SaveReceiverDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveReceiverDetailWithOptions(request, runtime);
  }

  /**
   * Send Template Test Email
   * 
   * @param request - SendTestByTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendTestByTemplateResponse
   */
  async sendTestByTemplateWithOptions(request: $_model.SendTestByTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendTestByTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.birthday)) {
      query["Birthday"] = request.birthday;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.gender)) {
      query["Gender"] = request.gender;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.nickName)) {
      query["NickName"] = request.nickName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendTestByTemplate",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendTestByTemplateResponse>(await this.callApi(params, req, runtime), new $_model.SendTestByTemplateResponse({}));
  }

  /**
   * Send Template Test Email
   * 
   * @param request - SendTestByTemplateRequest
   * @returns SendTestByTemplateResponse
   */
  async sendTestByTemplate(request: $_model.SendTestByTemplateRequest): Promise<$_model.SendTestByTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendTestByTemplateWithOptions(request, runtime);
  }

  /**
   * Retrieve Sending Data under Specified Conditions
   * 
   * @param request - SenderStatisticsByTagNameAndBatchIDRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SenderStatisticsByTagNameAndBatchIDResponse
   */
  async senderStatisticsByTagNameAndBatchIDWithOptions(request: $_model.SenderStatisticsByTagNameAndBatchIDRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SenderStatisticsByTagNameAndBatchIDResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.dedicatedIp)) {
      query["DedicatedIp"] = request.dedicatedIp;
    }

    if (!$dara.isNull(request.dedicatedIpPoolId)) {
      query["DedicatedIpPoolId"] = request.dedicatedIpPoolId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.esp)) {
      query["Esp"] = request.esp;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SenderStatisticsByTagNameAndBatchID",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SenderStatisticsByTagNameAndBatchIDResponse>(await this.callApi(params, req, runtime), new $_model.SenderStatisticsByTagNameAndBatchIDResponse({}));
  }

  /**
   * Retrieve Sending Data under Specified Conditions
   * 
   * @param request - SenderStatisticsByTagNameAndBatchIDRequest
   * @returns SenderStatisticsByTagNameAndBatchIDResponse
   */
  async senderStatisticsByTagNameAndBatchID(request: $_model.SenderStatisticsByTagNameAndBatchIDRequest): Promise<$_model.SenderStatisticsByTagNameAndBatchIDResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.senderStatisticsByTagNameAndBatchIDWithOptions(request, runtime);
  }

  /**
   * Query Delivery Result Details
   * 
   * @param request - SenderStatisticsDetailByParamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SenderStatisticsDetailByParamResponse
   */
  async senderStatisticsDetailByParamWithOptions(request: $_model.SenderStatisticsDetailByParamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SenderStatisticsDetailByParamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.length)) {
      query["Length"] = request.length;
    }

    if (!$dara.isNull(request.nextStart)) {
      query["NextStart"] = request.nextStart;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    if (!$dara.isNull(request.toAddress)) {
      query["ToAddress"] = request.toAddress;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SenderStatisticsDetailByParam",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SenderStatisticsDetailByParamResponse>(await this.callApi(params, req, runtime), new $_model.SenderStatisticsDetailByParamResponse({}));
  }

  /**
   * Query Delivery Result Details
   * 
   * @param request - SenderStatisticsDetailByParamRequest
   * @returns SenderStatisticsDetailByParamResponse
   */
  async senderStatisticsDetailByParam(request: $_model.SenderStatisticsDetailByParamRequest): Promise<$_model.SenderStatisticsDetailByParamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.senderStatisticsDetailByParamWithOptions(request, runtime);
  }

  /**
   * 设置用户无效地址级别配置
   * 
   * @param request - SetSuppressionListLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSuppressionListLevelResponse
   */
  async setSuppressionListLevelWithOptions(request: $_model.SetSuppressionListLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetSuppressionListLevelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.suppressionListLevel)) {
      query["SuppressionListLevel"] = request.suppressionListLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetSuppressionListLevel",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetSuppressionListLevelResponse>(await this.callApi(params, req, runtime), new $_model.SetSuppressionListLevelResponse({}));
  }

  /**
   * 设置用户无效地址级别配置
   * 
   * @param request - SetSuppressionListLevelRequest
   * @returns SetSuppressionListLevelResponse
   */
  async setSuppressionListLevel(request: $_model.SetSuppressionListLevelRequest): Promise<$_model.SetSuppressionListLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setSuppressionListLevelWithOptions(request, runtime);
  }

  /**
   * API for Sending Emails
   * 
   * @param request - SingleSendMailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SingleSendMailResponse
   */
  async singleSendMailWithOptions(request: $_model.SingleSendMailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SingleSendMailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.addressType)) {
      body["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.attachments)) {
      body["Attachments"] = request.attachments;
    }

    if (!$dara.isNull(request.clickTrace)) {
      body["ClickTrace"] = request.clickTrace;
    }

    if (!$dara.isNull(request.fromAlias)) {
      body["FromAlias"] = request.fromAlias;
    }

    if (!$dara.isNull(request.headers)) {
      body["Headers"] = request.headers;
    }

    if (!$dara.isNull(request.htmlBody)) {
      body["HtmlBody"] = request.htmlBody;
    }

    if (!$dara.isNull(request.ipPoolId)) {
      body["IpPoolId"] = request.ipPoolId;
    }

    if (!$dara.isNull(request.replyAddress)) {
      body["ReplyAddress"] = request.replyAddress;
    }

    if (!$dara.isNull(request.replyAddressAlias)) {
      body["ReplyAddressAlias"] = request.replyAddressAlias;
    }

    if (!$dara.isNull(request.replyToAddress)) {
      body["ReplyToAddress"] = request.replyToAddress;
    }

    if (!$dara.isNull(request.subject)) {
      body["Subject"] = request.subject;
    }

    if (!$dara.isNull(request.tagName)) {
      body["TagName"] = request.tagName;
    }

    if (!$dara.isNull(request.textBody)) {
      body["TextBody"] = request.textBody;
    }

    if (!$dara.isNull(request.toAddress)) {
      body["ToAddress"] = request.toAddress;
    }

    if (!$dara.isNull(request.unSubscribeFilterLevel)) {
      body["UnSubscribeFilterLevel"] = request.unSubscribeFilterLevel;
    }

    if (!$dara.isNull(request.unSubscribeLinkType)) {
      body["UnSubscribeLinkType"] = request.unSubscribeLinkType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SingleSendMail",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SingleSendMailResponse>(await this.callApi(params, req, runtime), new $_model.SingleSendMailResponse({}));
  }

  /**
   * API for Sending Emails
   * 
   * @param request - SingleSendMailRequest
   * @returns SingleSendMailResponse
   */
  async singleSendMail(request: $_model.SingleSendMailRequest): Promise<$_model.SingleSendMailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.singleSendMailWithOptions(request, runtime);
  }

  async singleSendMailAdvance(request: $_model.SingleSendMailAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SingleSendMailResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "Dm",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let singleSendMailReq = new $_model.SingleSendMailRequest({ });
    OpenApiUtil.convert(request, singleSendMailReq);
    if (!$dara.isNull(request.attachments)) {
      let i0 : number = 0;

      for(let item0 of request.attachments) {
        if (!$dara.isNull(item0.attachmentUrlObject)) {
          authResponse = await authClient.callApi(authParams, authReq, runtime);
          tmpBody = authResponse["body"];
          useAccelerate = Boolean(tmpBody["UseAccelerate"]);
          authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
          fileObj = new $dara.FileField({
            filename: authResponseBody["ObjectKey"],
            content: item0.attachmentUrlObject,
            contentType: "",
          });
          ossHeader = {
            host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
            OSSAccessKeyId: authResponseBody["AccessKeyId"],
            policy: authResponseBody["EncodedPolicy"],
            Signature: authResponseBody["Signature"],
            key: authResponseBody["ObjectKey"],
            file: fileObj,
            success_action_status: "201",
          };
          await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
          let tmpObj : $_model.SingleSendMailRequestAttachments = singleSendMailReq.attachments[i0];
          tmpObj.attachmentUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
          i0++;
        }

      }
    }

    let singleSendMailResp = await this.singleSendMailWithOptions(singleSendMailReq, runtime);
    return singleSendMailResp;
  }

  /**
   * Lift sending restrictions due to unsubscription, reporting, etc.
   * 
   * @param request - UnblockSendingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnblockSendingResponse
   */
  async unblockSendingWithOptions(request: $_model.UnblockSendingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnblockSendingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.blockEmail)) {
      query["BlockEmail"] = request.blockEmail;
    }

    if (!$dara.isNull(request.blockType)) {
      query["BlockType"] = request.blockType;
    }

    if (!$dara.isNull(request.senderEmail)) {
      query["SenderEmail"] = request.senderEmail;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnblockSending",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnblockSendingResponse>(await this.callApi(params, req, runtime), new $_model.UnblockSendingResponse({}));
  }

  /**
   * Lift sending restrictions due to unsubscription, reporting, etc.
   * 
   * @param request - UnblockSendingRequest
   * @returns UnblockSendingResponse
   */
  async unblockSending(request: $_model.UnblockSendingRequest): Promise<$_model.UnblockSendingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unblockSendingWithOptions(request, runtime);
  }

  /**
   * Update IP Protection API
   * 
   * @param request - UpdateIpProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIpProtectionResponse
   */
  async updateIpProtectionWithOptions(request: $_model.UpdateIpProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIpProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipProtection)) {
      query["IpProtection"] = request.ipProtection;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIpProtection",
      version: "2015-11-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIpProtectionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIpProtectionResponse({}));
  }

  /**
   * Update IP Protection API
   * 
   * @param request - UpdateIpProtectionRequest
   * @returns UpdateIpProtectionResponse
   */
  async updateIpProtection(request: $_model.UpdateIpProtectionRequest): Promise<$_model.UpdateIpProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIpProtectionWithOptions(request, runtime);
  }

  /**
   * Update account information
   * 
   * @param tmpReq - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(tmpReq: $_model.UpdateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateUserShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.user)) {
      request.userShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.user, "User", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userShrink)) {
      body["User"] = request.userShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2015-11-23",
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
   * Update account information
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

}
