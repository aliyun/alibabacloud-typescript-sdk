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
    this._endpoint = this.getEndpoint("dysms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AddDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDomainResponse
   */
  async addDomainWithOptions(request: $_model.AddDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDomainResponse> {
    request.validate();
    let query = { };
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
      action: "AddDomain",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDomainResponse>(await this.callApi(params, req, runtime), new $_model.AddDomainResponse({}));
  }

  /**
   * @param request - AddDomainRequest
   * @returns AddDomainResponse
   */
  async addDomain(request: $_model.AddDomainRequest): Promise<$_model.AddDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDomainWithOptions(request, runtime);
  }

  /**
   * @param request - AddDomainNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDomainNewResponse
   */
  async addDomainNewWithOptions(request: $_model.AddDomainNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDomainNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "AddDomainNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDomainNewResponse>(await this.callApi(params, req, runtime), new $_model.AddDomainNewResponse({}));
  }

  /**
   * @param request - AddDomainNewRequest
   * @returns AddDomainNewResponse
   */
  async addDomainNew(request: $_model.AddDomainNewRequest): Promise<$_model.AddDomainNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDomainNewWithOptions(request, runtime);
  }

  /**
   * @param request - ApplyExportSmsSendRecordNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyExportSmsSendRecordNewResponse
   */
  async applyExportSmsSendRecordNewWithOptions(request: $_model.ApplyExportSmsSendRecordNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyExportSmsSendRecordNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.errorCode)) {
      query["ErrorCode"] = request.errorCode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNum)) {
      query["PhoneNum"] = request.phoneNum;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.realTimeDataFlag)) {
      query["RealTimeDataFlag"] = request.realTimeDataFlag;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sendDate)) {
      query["SendDate"] = request.sendDate;
    }

    if (!$dara.isNull(request.sendStatus)) {
      query["SendStatus"] = request.sendStatus;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyExportSmsSendRecordNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyExportSmsSendRecordNewResponse>(await this.callApi(params, req, runtime), new $_model.ApplyExportSmsSendRecordNewResponse({}));
  }

  /**
   * @param request - ApplyExportSmsSendRecordNewRequest
   * @returns ApplyExportSmsSendRecordNewResponse
   */
  async applyExportSmsSendRecordNew(request: $_model.ApplyExportSmsSendRecordNewRequest): Promise<$_model.ApplyExportSmsSendRecordNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyExportSmsSendRecordNewWithOptions(request, runtime);
  }

  /**
   * 批量创建签名
   * 
   * @param tmpReq - BatchCreateSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCreateSmsSignResponse
   */
  async batchCreateSmsSignWithOptions(tmpReq: $_model.BatchCreateSmsSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchCreateSmsSignResponse> {
    tmpReq.validate();
    let request = new $_model.BatchCreateSmsSignShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.columnIndexMappingRule)) {
      request.columnIndexMappingRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.columnIndexMappingRule, "ColumnIndexMappingRule", "json");
    }

    if (!$dara.isNull(tmpReq.moreData)) {
      request.moreDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.moreData, "MoreData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.columnIndexMappingRuleShrink)) {
      query["ColumnIndexMappingRule"] = request.columnIndexMappingRuleShrink;
    }

    if (!$dara.isNull(request.extendMessage)) {
      query["ExtendMessage"] = request.extendMessage;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.moreDataShrink)) {
      query["MoreData"] = request.moreDataShrink;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.ossKeys)) {
      query["OssKeys"] = request.ossKeys;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.signOssKey)) {
      query["SignOssKey"] = request.signOssKey;
    }

    if (!$dara.isNull(request.userViewFileName)) {
      query["UserViewFileName"] = request.userViewFileName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchCreateSmsSign",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchCreateSmsSignResponse>(await this.callApi(params, req, runtime), new $_model.BatchCreateSmsSignResponse({}));
  }

  /**
   * 批量创建签名
   * 
   * @param request - BatchCreateSmsSignRequest
   * @returns BatchCreateSmsSignResponse
   */
  async batchCreateSmsSign(request: $_model.BatchCreateSmsSignRequest): Promise<$_model.BatchCreateSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchCreateSmsSignWithOptions(request, runtime);
  }

  /**
   * @param request - BatchDeleteExportSendRecordNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteExportSendRecordNewResponse
   */
  async batchDeleteExportSendRecordNewWithOptions(request: $_model.BatchDeleteExportSendRecordNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteExportSendRecordNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "BatchDeleteExportSendRecordNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteExportSendRecordNewResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteExportSendRecordNewResponse({}));
  }

  /**
   * @param request - BatchDeleteExportSendRecordNewRequest
   * @returns BatchDeleteExportSendRecordNewResponse
   */
  async batchDeleteExportSendRecordNew(request: $_model.BatchDeleteExportSendRecordNewRequest): Promise<$_model.BatchDeleteExportSendRecordNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteExportSendRecordNewWithOptions(request, runtime);
  }

  /**
   * @param request - BatchDeleteTaskNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteTaskNewResponse
   */
  async batchDeleteTaskNewWithOptions(request: $_model.BatchDeleteTaskNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteTaskNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteTaskNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteTaskNewResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteTaskNewResponse({}));
  }

  /**
   * @param request - BatchDeleteTaskNewRequest
   * @returns BatchDeleteTaskNewResponse
   */
  async batchDeleteTaskNew(request: $_model.BatchDeleteTaskNewRequest): Promise<$_model.BatchDeleteTaskNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteTaskNewWithOptions(request, runtime);
  }

  /**
   * @param request - CalculateSmsLengthNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CalculateSmsLengthNewResponse
   */
  async calculateSmsLengthNewWithOptions(request: $_model.CalculateSmsLengthNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CalculateSmsLengthNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smsContent)) {
      query["SmsContent"] = request.smsContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CalculateSmsLengthNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CalculateSmsLengthNewResponse>(await this.callApi(params, req, runtime), new $_model.CalculateSmsLengthNewResponse({}));
  }

  /**
   * @param request - CalculateSmsLengthNewRequest
   * @returns CalculateSmsLengthNewResponse
   */
  async calculateSmsLengthNew(request: $_model.CalculateSmsLengthNewRequest): Promise<$_model.CalculateSmsLengthNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.calculateSmsLengthNewWithOptions(request, runtime);
  }

  /**
   * 签名取消审核
   * 
   * @param request - CancelSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelSmsSignResponse
   */
  async cancelSmsSignWithOptions(request: $_model.CancelSmsSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelSmsSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signatureCode)) {
      query["SignatureCode"] = request.signatureCode;
    }

    if (!$dara.isNull(request.signatureId)) {
      query["SignatureId"] = request.signatureId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelSmsSign",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelSmsSignResponse>(await this.callApi(params, req, runtime), new $_model.CancelSmsSignResponse({}));
  }

  /**
   * 签名取消审核
   * 
   * @param request - CancelSmsSignRequest
   * @returns CancelSmsSignResponse
   */
  async cancelSmsSign(request: $_model.CancelSmsSignRequest): Promise<$_model.CancelSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelSmsSignWithOptions(request, runtime);
  }

  /**
   * @param request - CancelSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelSmsTemplateResponse
   */
  async cancelSmsTemplateWithOptions(request: $_model.CancelSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelSmsTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelSmsTemplate",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelSmsTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CancelSmsTemplateResponse({}));
  }

  /**
   * @param request - CancelSmsTemplateRequest
   * @returns CancelSmsTemplateResponse
   */
  async cancelSmsTemplate(request: $_model.CancelSmsTemplateRequest): Promise<$_model.CancelSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelSmsTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - CancelSmsTemplateNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelSmsTemplateNewResponse
   */
  async cancelSmsTemplateNewWithOptions(request: $_model.CancelSmsTemplateNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelSmsTemplateNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.intelligentApproval)) {
      query["IntelligentApproval"] = request.intelligentApproval;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelSmsTemplateNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelSmsTemplateNewResponse>(await this.callApi(params, req, runtime), new $_model.CancelSmsTemplateNewResponse({}));
  }

  /**
   * @param request - CancelSmsTemplateNewRequest
   * @returns CancelSmsTemplateNewResponse
   */
  async cancelSmsTemplateNew(request: $_model.CancelSmsTemplateNewRequest): Promise<$_model.CancelSmsTemplateNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelSmsTemplateNewWithOptions(request, runtime);
  }

  /**
   * @param request - CheckSmsSignNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSmsSignNewResponse
   */
  async checkSmsSignNewWithOptions(request: $_model.CheckSmsSignNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckSmsSignNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "CheckSmsSignNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckSmsSignNewResponse>(await this.callApi(params, req, runtime), new $_model.CheckSmsSignNewResponse({}));
  }

  /**
   * @param request - CheckSmsSignNewRequest
   * @returns CheckSmsSignNewResponse
   */
  async checkSmsSignNew(request: $_model.CheckSmsSignNewRequest): Promise<$_model.CheckSmsSignNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkSmsSignNewWithOptions(request, runtime);
  }

  /**
   * @param request - CreateAlicomProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlicomProductResponse
   */
  async createAlicomProductWithOptions(request: $_model.CreateAlicomProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAlicomProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.busOffer)) {
      query["BusOffer"] = request.busOffer;
    }

    if (!$dara.isNull(request.busOffers)) {
      query["BusOffers"] = request.busOffers;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
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
      action: "CreateAlicomProduct",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAlicomProductResponse>(await this.callApi(params, req, runtime), new $_model.CreateAlicomProductResponse({}));
  }

  /**
   * @param request - CreateAlicomProductRequest
   * @returns CreateAlicomProductResponse
   */
  async createAlicomProduct(request: $_model.CreateAlicomProductRequest): Promise<$_model.CreateAlicomProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAlicomProductWithOptions(request, runtime);
  }

  /**
   * 创建授权
   * 
   * @param request - CreateAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAuthorizationResponse
   */
  async createAuthorizationWithOptions(request: $_model.CreateAuthorizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAuthorizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizeCode)) {
      query["AuthorizeCode"] = request.authorizeCode;
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

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAuthorization",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.CreateAuthorizationResponse({}));
  }

  /**
   * 创建授权
   * 
   * @param request - CreateAuthorizationRequest
   * @returns CreateAuthorizationResponse
   */
  async createAuthorization(request: $_model.CreateAuthorizationRequest): Promise<$_model.CreateAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAuthorizationWithOptions(request, runtime);
  }

  /**
   * 创建消息回调
   * 
   * @param request - CreateCardMessageCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCardMessageCallbackResponse
   */
  async createCardMessageCallbackWithOptions(request: $_model.CreateCardMessageCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCardMessageCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "CreateCardMessageCallback",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCardMessageCallbackResponse>(await this.callApi(params, req, runtime), new $_model.CreateCardMessageCallbackResponse({}));
  }

  /**
   * 创建消息回调
   * 
   * @param request - CreateCardMessageCallbackRequest
   * @returns CreateCardMessageCallbackResponse
   */
  async createCardMessageCallback(request: $_model.CreateCardMessageCallbackRequest): Promise<$_model.CreateCardMessageCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCardMessageCallbackWithOptions(request, runtime);
  }

  /**
   * 创建mns
   * 
   * @param request - CreateCardMessageQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCardMessageQueueResponse
   */
  async createCardMessageQueueWithOptions(request: $_model.CreateCardMessageQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCardMessageQueueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.queueType)) {
      query["QueueType"] = request.queueType;
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
      action: "CreateCardMessageQueue",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCardMessageQueueResponse>(await this.callApi(params, req, runtime), new $_model.CreateCardMessageQueueResponse({}));
  }

  /**
   * 创建mns
   * 
   * @param request - CreateCardMessageQueueRequest
   * @returns CreateCardMessageQueueResponse
   */
  async createCardMessageQueue(request: $_model.CreateCardMessageQueueRequest): Promise<$_model.CreateCardMessageQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCardMessageQueueWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDigitalSmsTemplateNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDigitalSmsTemplateNewResponse
   */
  async createDigitalSmsTemplateNewWithOptions(request: $_model.CreateDigitalSmsTemplateNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDigitalSmsTemplateNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.contentOssKeys)) {
      query["ContentOssKeys"] = request.contentOssKeys;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateContent)) {
      query["TemplateContent"] = request.templateContent;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDigitalSmsTemplateNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDigitalSmsTemplateNewResponse>(await this.callApi(params, req, runtime), new $_model.CreateDigitalSmsTemplateNewResponse({}));
  }

  /**
   * @param request - CreateDigitalSmsTemplateNewRequest
   * @returns CreateDigitalSmsTemplateNewResponse
   */
  async createDigitalSmsTemplateNew(request: $_model.CreateDigitalSmsTemplateNewRequest): Promise<$_model.CreateDigitalSmsTemplateNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDigitalSmsTemplateNewWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI CreateFileByBiz is deprecated
   * 
   * @param request - CreateFileByBizRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFileByBizResponse
   */
  // Deprecated
  async createFileByBizWithOptions(request: $_model.CreateFileByBizRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFileByBizResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "CreateFileByBiz",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFileByBizResponse>(await this.callApi(params, req, runtime), new $_model.CreateFileByBizResponse({}));
  }

  /**
   * @deprecated OpenAPI CreateFileByBiz is deprecated
   * 
   * @param request - CreateFileByBizRequest
   * @returns CreateFileByBizResponse
   */
  // Deprecated
  async createFileByBiz(request: $_model.CreateFileByBizRequest): Promise<$_model.CreateFileByBizResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFileByBizWithOptions(request, runtime);
  }

  /**
   * @param request - CreateFlowLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowLimitResponse
   */
  async createFlowLimitWithOptions(request: $_model.CreateFlowLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFlowLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dailyLimit)) {
      query["DailyLimit"] = request.dailyLimit;
    }

    if (!$dara.isNull(request.hourLimit)) {
      query["HourLimit"] = request.hourLimit;
    }

    if (!$dara.isNull(request.minuteLimit)) {
      query["MinuteLimit"] = request.minuteLimit;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "CreateFlowLimit",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFlowLimitResponse>(await this.callApi(params, req, runtime), new $_model.CreateFlowLimitResponse({}));
  }

  /**
   * @param request - CreateFlowLimitRequest
   * @returns CreateFlowLimitResponse
   */
  async createFlowLimit(request: $_model.CreateFlowLimitRequest): Promise<$_model.CreateFlowLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFlowLimitWithOptions(request, runtime);
  }

  /**
   * @param request - CreateFlowLimitNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowLimitNewResponse
   */
  async createFlowLimitNewWithOptions(request: $_model.CreateFlowLimitNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFlowLimitNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.dailyLimit)) {
      query["DailyLimit"] = request.dailyLimit;
    }

    if (!$dara.isNull(request.hourLimit)) {
      query["HourLimit"] = request.hourLimit;
    }

    if (!$dara.isNull(request.minuteLimit)) {
      query["MinuteLimit"] = request.minuteLimit;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "CreateFlowLimitNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFlowLimitNewResponse>(await this.callApi(params, req, runtime), new $_model.CreateFlowLimitNewResponse({}));
  }

  /**
   * @param request - CreateFlowLimitNewRequest
   * @returns CreateFlowLimitNewResponse
   */
  async createFlowLimitNew(request: $_model.CreateFlowLimitNewRequest): Promise<$_model.CreateFlowLimitNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFlowLimitNewWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMessageCallbackNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMessageCallbackNewResponse
   */
  async createMessageCallbackNewWithOptions(request: $_model.CreateMessageCallbackNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMessageCallbackNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "CreateMessageCallbackNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMessageCallbackNewResponse>(await this.callApi(params, req, runtime), new $_model.CreateMessageCallbackNewResponse({}));
  }

  /**
   * @param request - CreateMessageCallbackNewRequest
   * @returns CreateMessageCallbackNewResponse
   */
  async createMessageCallbackNew(request: $_model.CreateMessageCallbackNewRequest): Promise<$_model.CreateMessageCallbackNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMessageCallbackNewWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMessageCallbackTestNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMessageCallbackTestNewResponse
   */
  async createMessageCallbackTestNewWithOptions(request: $_model.CreateMessageCallbackTestNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMessageCallbackTestNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.method)) {
      query["Method"] = request.method;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMessageCallbackTestNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMessageCallbackTestNewResponse>(await this.callApi(params, req, runtime), new $_model.CreateMessageCallbackTestNewResponse({}));
  }

  /**
   * @param request - CreateMessageCallbackTestNewRequest
   * @returns CreateMessageCallbackTestNewResponse
   */
  async createMessageCallbackTestNew(request: $_model.CreateMessageCallbackTestNewRequest): Promise<$_model.CreateMessageCallbackTestNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMessageCallbackTestNewWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMessageQueueNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMessageQueueNewResponse
   */
  async createMessageQueueNewWithOptions(request: $_model.CreateMessageQueueNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMessageQueueNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.queueType)) {
      query["QueueType"] = request.queueType;
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
      action: "CreateMessageQueueNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMessageQueueNewResponse>(await this.callApi(params, req, runtime), new $_model.CreateMessageQueueNewResponse({}));
  }

  /**
   * @param request - CreateMessageQueueNewRequest
   * @returns CreateMessageQueueNewResponse
   */
  async createMessageQueueNew(request: $_model.CreateMessageQueueNewRequest): Promise<$_model.CreateMessageQueueNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMessageQueueNewWithOptions(request, runtime);
  }

  /**
   * @param request - CreatePhoneWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePhoneWhiteListResponse
   */
  async createPhoneWhiteListWithOptions(request: $_model.CreatePhoneWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePhoneWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumbers)) {
      query["PhoneNumbers"] = request.phoneNumbers;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "CreatePhoneWhiteList",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePhoneWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.CreatePhoneWhiteListResponse({}));
  }

  /**
   * @param request - CreatePhoneWhiteListRequest
   * @returns CreatePhoneWhiteListResponse
   */
  async createPhoneWhiteList(request: $_model.CreatePhoneWhiteListRequest): Promise<$_model.CreatePhoneWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPhoneWhiteListWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - CreatePhoneWhiteListNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePhoneWhiteListNewResponse
   */
  async createPhoneWhiteListNewWithOptions(tmpReq: $_model.CreatePhoneWhiteListNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePhoneWhiteListNewResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePhoneWhiteListNewShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.remarks)) {
      request.remarksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.remarks, "Remarks", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumbers)) {
      query["PhoneNumbers"] = request.phoneNumbers;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.remarksShrink)) {
      query["Remarks"] = request.remarksShrink;
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
      action: "CreatePhoneWhiteListNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePhoneWhiteListNewResponse>(await this.callApi(params, req, runtime), new $_model.CreatePhoneWhiteListNewResponse({}));
  }

  /**
   * @param request - CreatePhoneWhiteListNewRequest
   * @returns CreatePhoneWhiteListNewResponse
   */
  async createPhoneWhiteListNew(request: $_model.CreatePhoneWhiteListNewRequest): Promise<$_model.CreatePhoneWhiteListNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPhoneWhiteListNewWithOptions(request, runtime);
  }

  /**
   * @param request - CreatePkgThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePkgThresholdResponse
   */
  async createPkgThresholdWithOptions(request: $_model.CreatePkgThresholdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePkgThresholdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.packageWarningLimit)) {
      query["PackageWarningLimit"] = request.packageWarningLimit;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "CreatePkgThreshold",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePkgThresholdResponse>(await this.callApi(params, req, runtime), new $_model.CreatePkgThresholdResponse({}));
  }

  /**
   * @param request - CreatePkgThresholdRequest
   * @returns CreatePkgThresholdResponse
   */
  async createPkgThreshold(request: $_model.CreatePkgThresholdRequest): Promise<$_model.CreatePkgThresholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPkgThresholdWithOptions(request, runtime);
  }

  /**
   * @param request - CreatePkgThresholdNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePkgThresholdNewResponse
   */
  async createPkgThresholdNewWithOptions(request: $_model.CreatePkgThresholdNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePkgThresholdNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.packageWarningLimit)) {
      query["PackageWarningLimit"] = request.packageWarningLimit;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "CreatePkgThresholdNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePkgThresholdNewResponse>(await this.callApi(params, req, runtime), new $_model.CreatePkgThresholdNewResponse({}));
  }

  /**
   * @param request - CreatePkgThresholdNewRequest
   * @returns CreatePkgThresholdNewResponse
   */
  async createPkgThresholdNew(request: $_model.CreatePkgThresholdNewRequest): Promise<$_model.CreatePkgThresholdNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPkgThresholdNewWithOptions(request, runtime);
  }

  /**
   * @param request - CreatePrevLimitNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrevLimitNewResponse
   */
  async createPrevLimitNewWithOptions(request: $_model.CreatePrevLimitNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrevLimitNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hourLimit)) {
      query["HourLimit"] = request.hourLimit;
    }

    if (!$dara.isNull(request.increaseRate)) {
      query["IncreaseRate"] = request.increaseRate;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.successRate)) {
      query["SuccessRate"] = request.successRate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrevLimitNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrevLimitNewResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrevLimitNewResponse({}));
  }

  /**
   * @param request - CreatePrevLimitNewRequest
   * @returns CreatePrevLimitNewResponse
   */
  async createPrevLimitNew(request: $_model.CreatePrevLimitNewRequest): Promise<$_model.CreatePrevLimitNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPrevLimitNewWithOptions(request, runtime);
  }

  /**
   * @param request - CreateProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProductResponse
   */
  async createProductWithOptions(request: $_model.CreateProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
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
      action: "CreateProduct",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProductResponse>(await this.callApi(params, req, runtime), new $_model.CreateProductResponse({}));
  }

  /**
   * @param request - CreateProductRequest
   * @returns CreateProductResponse
   */
  async createProduct(request: $_model.CreateProductRequest): Promise<$_model.CreateProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProductWithOptions(request, runtime);
  }

  /**
   * @param request - CreateProductNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProductNewResponse
   */
  async createProductNewWithOptions(request: $_model.CreateProductNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProductNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
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
      action: "CreateProductNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProductNewResponse>(await this.callApi(params, req, runtime), new $_model.CreateProductNewResponse({}));
  }

  /**
   * @param request - CreateProductNewRequest
   * @returns CreateProductNewResponse
   */
  async createProductNew(request: $_model.CreateProductNewRequest): Promise<$_model.CreateProductNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProductNewWithOptions(request, runtime);
  }

  /**
   * @param request - CreateShortUrlNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateShortUrlNewResponse
   */
  async createShortUrlNewWithOptions(request: $_model.CreateShortUrlNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateShortUrlNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.effectDay)) {
      query["EffectDay"] = request.effectDay;
    }

    if (!$dara.isNull(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sourceUrl)) {
      query["SourceUrl"] = request.sourceUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateShortUrlNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateShortUrlNewResponse>(await this.callApi(params, req, runtime), new $_model.CreateShortUrlNewResponse({}));
  }

  /**
   * @param request - CreateShortUrlNewRequest
   * @returns CreateShortUrlNewResponse
   */
  async createShortUrlNew(request: $_model.CreateShortUrlNewRequest): Promise<$_model.CreateShortUrlNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createShortUrlNewWithOptions(request, runtime);
  }

  /**
   * @param request - CreateSmsDetectTaskNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsDetectTaskNewResponse
   */
  async createSmsDetectTaskNewWithOptions(request: $_model.CreateSmsDetectTaskNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsDetectTaskNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.check)) {
      query["Check"] = request.check;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.smsContent)) {
      query["SmsContent"] = request.smsContent;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateParam)) {
      query["TemplateParam"] = request.templateParam;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsDetectTaskNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmsDetectTaskNewResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmsDetectTaskNewResponse({}));
  }

  /**
   * @param request - CreateSmsDetectTaskNewRequest
   * @returns CreateSmsDetectTaskNewResponse
   */
  async createSmsDetectTaskNew(request: $_model.CreateSmsDetectTaskNewRequest): Promise<$_model.CreateSmsDetectTaskNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsDetectTaskNewWithOptions(request, runtime);
  }

  /**
   * @param request - CreateSmsInternalApplyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsInternalApplyResponse
   */
  async createSmsInternalApplyWithOptions(request: $_model.CreateSmsInternalApplyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsInternalApplyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appDownloadLink)) {
      query["AppDownloadLink"] = request.appDownloadLink;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.industry)) {
      query["Industry"] = request.industry;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageLink)) {
      query["PageLink"] = request.pageLink;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsInternalApply",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmsInternalApplyResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmsInternalApplyResponse({}));
  }

  /**
   * @param request - CreateSmsInternalApplyRequest
   * @returns CreateSmsInternalApplyResponse
   */
  async createSmsInternalApply(request: $_model.CreateSmsInternalApplyRequest): Promise<$_model.CreateSmsInternalApplyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsInternalApplyWithOptions(request, runtime);
  }

  /**
   * @param request - CreateSmsProductForChannelCustRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsProductForChannelCustResponse
   */
  async createSmsProductForChannelCustWithOptions(request: $_model.CreateSmsProductForChannelCustRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsProductForChannelCustResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.onlyCheckOpened)) {
      query["OnlyCheckOpened"] = request.onlyCheckOpened;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "CreateSmsProductForChannelCust",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmsProductForChannelCustResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmsProductForChannelCustResponse({}));
  }

  /**
   * @param request - CreateSmsProductForChannelCustRequest
   * @returns CreateSmsProductForChannelCustResponse
   */
  async createSmsProductForChannelCust(request: $_model.CreateSmsProductForChannelCustRequest): Promise<$_model.CreateSmsProductForChannelCustResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsProductForChannelCustWithOptions(request, runtime);
  }

  /**
   * @param request - CreateSmsSaasTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsSaasTaskResponse
   */
  async createSmsSaasTaskWithOptions(request: $_model.CreateSmsSaasTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsSaasTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.orderTime)) {
      query["OrderTime"] = request.orderTime;
    }

    if (!$dara.isNull(request.ossFileName)) {
      query["OssFileName"] = request.ossFileName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneList)) {
      query["PhoneList"] = request.phoneList;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scheduleType)) {
      query["ScheduleType"] = request.scheduleType;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.smsContent)) {
      query["SmsContent"] = request.smsContent;
    }

    if (!$dara.isNull(request.smsTemplateCode)) {
      query["SmsTemplateCode"] = request.smsTemplateCode;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.validCount)) {
      query["ValidCount"] = request.validCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsSaasTask",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmsSaasTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmsSaasTaskResponse({}));
  }

  /**
   * @param request - CreateSmsSaasTaskRequest
   * @returns CreateSmsSaasTaskResponse
   */
  async createSmsSaasTask(request: $_model.CreateSmsSaasTaskRequest): Promise<$_model.CreateSmsSaasTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsSaasTaskWithOptions(request, runtime);
  }

  /**
   * @param request - CreateSmsSaasTaskNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsSaasTaskNewResponse
   */
  async createSmsSaasTaskNewWithOptions(request: $_model.CreateSmsSaasTaskNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsSaasTaskNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.dataAbilityTaskId)) {
      query["DataAbilityTaskId"] = request.dataAbilityTaskId;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.orderTime)) {
      query["OrderTime"] = request.orderTime;
    }

    if (!$dara.isNull(request.ossFileName)) {
      query["OssFileName"] = request.ossFileName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneList)) {
      query["PhoneList"] = request.phoneList;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scheduleType)) {
      query["ScheduleType"] = request.scheduleType;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.smsContent)) {
      query["SmsContent"] = request.smsContent;
    }

    if (!$dara.isNull(request.smsTemplateCode)) {
      query["SmsTemplateCode"] = request.smsTemplateCode;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.validCount)) {
      query["ValidCount"] = request.validCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsSaasTaskNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmsSaasTaskNewResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmsSaasTaskNewResponse({}));
  }

  /**
   * @param request - CreateSmsSaasTaskNewRequest
   * @returns CreateSmsSaasTaskNewResponse
   */
  async createSmsSaasTaskNew(request: $_model.CreateSmsSaasTaskNewRequest): Promise<$_model.CreateSmsSaasTaskNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsSaasTaskNewWithOptions(request, runtime);
  }

  /**
   * @param request - CreateSmsSendFailDetailsDownloadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsSendFailDetailsDownloadResponse
   */
  async createSmsSendFailDetailsDownloadWithOptions(request: $_model.CreateSmsSendFailDetailsDownloadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsSendFailDetailsDownloadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sendDate)) {
      query["SendDate"] = request.sendDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsSendFailDetailsDownload",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmsSendFailDetailsDownloadResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmsSendFailDetailsDownloadResponse({}));
  }

  /**
   * @param request - CreateSmsSendFailDetailsDownloadRequest
   * @returns CreateSmsSendFailDetailsDownloadResponse
   */
  async createSmsSendFailDetailsDownload(request: $_model.CreateSmsSendFailDetailsDownloadRequest): Promise<$_model.CreateSmsSendFailDetailsDownloadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsSendFailDetailsDownloadWithOptions(request, runtime);
  }

  /**
   * @param request - CreateSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsSignResponse
   */
  async createSmsSignWithOptions(request: $_model.CreateSmsSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extendMessage)) {
      query["ExtendMessage"] = request.extendMessage;
    }

    if (!$dara.isNull(request.fileIds)) {
      query["FileIds"] = request.fileIds;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsSign",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmsSignResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmsSignResponse({}));
  }

  /**
   * @param request - CreateSmsSignRequest
   * @returns CreateSmsSignResponse
   */
  async createSmsSign(request: $_model.CreateSmsSignRequest): Promise<$_model.CreateSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsSignWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - CreateSmsSignNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsSignNewResponse
   */
  async createSmsSignNewWithOptions(tmpReq: $_model.CreateSmsSignNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsSignNewResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSmsSignNewShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.moreData)) {
      request.moreDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.moreData, "MoreData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applicationSceneId)) {
      query["ApplicationSceneId"] = request.applicationSceneId;
    }

    if (!$dara.isNull(request.applySource)) {
      query["ApplySource"] = request.applySource;
    }

    if (!$dara.isNull(request.authorization)) {
      query["Authorization"] = request.authorization;
    }

    if (!$dara.isNull(request.authorizationEffTime)) {
      query["AuthorizationEffTime"] = request.authorizationEffTime;
    }

    if (!$dara.isNull(request.authorizationLetter)) {
      query["AuthorizationLetter"] = request.authorizationLetter;
    }

    if (!$dara.isNull(request.authorizationLetterAuditPass)) {
      query["AuthorizationLetterAuditPass"] = request.authorizationLetterAuditPass;
    }

    if (!$dara.isNull(request.authorizationLetterId)) {
      query["AuthorizationLetterId"] = request.authorizationLetterId;
    }

    if (!$dara.isNull(request.authorizationLetterName)) {
      query["AuthorizationLetterName"] = request.authorizationLetterName;
    }

    if (!$dara.isNull(request.authorizationSignScope)) {
      query["AuthorizationSignScope"] = request.authorizationSignScope;
    }

    if (!$dara.isNull(request.createSignGray)) {
      query["CreateSignGray"] = request.createSignGray;
    }

    if (!$dara.isNull(request.enableAuthorizationLetter)) {
      query["EnableAuthorizationLetter"] = request.enableAuthorizationLetter;
    }

    if (!$dara.isNull(request.extendMessage)) {
      query["ExtendMessage"] = request.extendMessage;
    }

    if (!$dara.isNull(request.fileIds)) {
      query["FileIds"] = request.fileIds;
    }

    if (!$dara.isNull(request.isAuthorizationLetterOCRComplete)) {
      query["IsAuthorizationLetterOCRComplete"] = request.isAuthorizationLetterOCRComplete;
    }

    if (!$dara.isNull(request.isAuthorizationLetterOCRDiff)) {
      query["IsAuthorizationLetterOCRDiff"] = request.isAuthorizationLetterOCRDiff;
    }

    if (!$dara.isNull(request.isSignScopeOCRDiff)) {
      query["IsSignScopeOCRDiff"] = request.isSignScopeOCRDiff;
    }

    if (!$dara.isNull(request.moreDataShrink)) {
      query["MoreData"] = request.moreDataShrink;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.organizationCode)) {
      query["OrganizationCode"] = request.organizationCode;
    }

    if (!$dara.isNull(request.ossKeys)) {
      query["OssKeys"] = request.ossKeys;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.proxyAuthorization)) {
      query["ProxyAuthorization"] = request.proxyAuthorization;
    }

    if (!$dara.isNull(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!$dara.isNull(request.qualificationType)) {
      query["QualificationType"] = request.qualificationType;
    }

    if (!$dara.isNull(request.qualificationVersion)) {
      query["QualificationVersion"] = request.qualificationVersion;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.signCode)) {
      query["SignCode"] = request.signCode;
    }

    if (!$dara.isNull(request.signId)) {
      query["SignId"] = request.signId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.signScopeOCR)) {
      query["SignScopeOCR"] = request.signScopeOCR;
    }

    if (!$dara.isNull(request.signUpgrade)) {
      query["SignUpgrade"] = request.signUpgrade;
    }

    if (!$dara.isNull(request.thirdParty)) {
      query["ThirdParty"] = request.thirdParty;
    }

    if (!$dara.isNull(request.userViewFileName)) {
      query["UserViewFileName"] = request.userViewFileName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsSignNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmsSignNewResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmsSignNewResponse({}));
  }

  /**
   * @param request - CreateSmsSignNewRequest
   * @returns CreateSmsSignNewResponse
   */
  async createSmsSignNew(request: $_model.CreateSmsSignNewRequest): Promise<$_model.CreateSmsSignNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsSignNewWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - CreateSmsTemplateNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsTemplateNewResponse
   */
  async createSmsTemplateNewWithOptions(tmpReq: $_model.CreateSmsTemplateNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsTemplateNewResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSmsTemplateNewShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.moreData)) {
      request.moreDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.moreData, "MoreData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aiTemplate)) {
      query["AiTemplate"] = request.aiTemplate;
    }

    if (!$dara.isNull(request.aiTemplateUuid)) {
      query["AiTemplateUuid"] = request.aiTemplateUuid;
    }

    if (!$dara.isNull(request.applicationSceneId)) {
      query["ApplicationSceneId"] = request.applicationSceneId;
    }

    if (!$dara.isNull(request.applySource)) {
      query["ApplySource"] = request.applySource;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.intlType)) {
      query["IntlType"] = request.intlType;
    }

    if (!$dara.isNull(request.moreDataShrink)) {
      query["MoreData"] = request.moreDataShrink;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ossKeys)) {
      query["OssKeys"] = request.ossKeys;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.productUrl)) {
      query["ProductUrl"] = request.productUrl;
    }

    if (!$dara.isNull(request.relatedSignName)) {
      query["RelatedSignName"] = request.relatedSignName;
    }

    if (!$dara.isNull(request.relatedSignOrderId)) {
      query["RelatedSignOrderId"] = request.relatedSignOrderId;
    }

    if (!$dara.isNull(request.relatedSignUsageName)) {
      query["RelatedSignUsageName"] = request.relatedSignUsageName;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.rmdTemplateId)) {
      query["RmdTemplateId"] = request.rmdTemplateId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateContent)) {
      query["TemplateContent"] = request.templateContent;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateRule)) {
      query["TemplateRule"] = request.templateRule;
    }

    if (!$dara.isNull(request.userViewFileName)) {
      query["UserViewFileName"] = request.userViewFileName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsTemplateNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmsTemplateNewResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmsTemplateNewResponse({}));
  }

  /**
   * @param request - CreateSmsTemplateNewRequest
   * @returns CreateSmsTemplateNewResponse
   */
  async createSmsTemplateNew(request: $_model.CreateSmsTemplateNewRequest): Promise<$_model.CreateSmsTemplateNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsTemplateNewWithOptions(request, runtime);
  }

  /**
   * @param request - CreateWarningThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWarningThresholdResponse
   */
  async createWarningThresholdWithOptions(request: $_model.CreateWarningThresholdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWarningThresholdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.dailyHaltLimit)) {
      query["DailyHaltLimit"] = request.dailyHaltLimit;
    }

    if (!$dara.isNull(request.dailyWarningLimit)) {
      query["DailyWarningLimit"] = request.dailyWarningLimit;
    }

    if (!$dara.isNull(request.monthlyHaltLimit)) {
      query["MonthlyHaltLimit"] = request.monthlyHaltLimit;
    }

    if (!$dara.isNull(request.monthlyWarningLimit)) {
      query["MonthlyWarningLimit"] = request.monthlyWarningLimit;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "CreateWarningThreshold",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWarningThresholdResponse>(await this.callApi(params, req, runtime), new $_model.CreateWarningThresholdResponse({}));
  }

  /**
   * @param request - CreateWarningThresholdRequest
   * @returns CreateWarningThresholdResponse
   */
  async createWarningThreshold(request: $_model.CreateWarningThresholdRequest): Promise<$_model.CreateWarningThresholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWarningThresholdWithOptions(request, runtime);
  }

  /**
   * @param request - CreateWarningThresholdNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWarningThresholdNewResponse
   */
  async createWarningThresholdNewWithOptions(request: $_model.CreateWarningThresholdNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWarningThresholdNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.dailyHaltLimit)) {
      query["DailyHaltLimit"] = request.dailyHaltLimit;
    }

    if (!$dara.isNull(request.dailyWarningLimit)) {
      query["DailyWarningLimit"] = request.dailyWarningLimit;
    }

    if (!$dara.isNull(request.monthlyHaltLimit)) {
      query["MonthlyHaltLimit"] = request.monthlyHaltLimit;
    }

    if (!$dara.isNull(request.monthlyWarningLimit)) {
      query["MonthlyWarningLimit"] = request.monthlyWarningLimit;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "CreateWarningThresholdNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWarningThresholdNewResponse>(await this.callApi(params, req, runtime), new $_model.CreateWarningThresholdNewResponse({}));
  }

  /**
   * @param request - CreateWarningThresholdNewRequest
   * @returns CreateWarningThresholdNewResponse
   */
  async createWarningThresholdNew(request: $_model.CreateWarningThresholdNewRequest): Promise<$_model.CreateWarningThresholdNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWarningThresholdNewWithOptions(request, runtime);
  }

  /**
   * 删除导出记录
   * 
   * @param request - DelCardSendExportInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DelCardSendExportInfoResponse
   */
  async delCardSendExportInfoWithOptions(request: $_model.DelCardSendExportInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DelCardSendExportInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DelCardSendExportInfo",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DelCardSendExportInfoResponse>(await this.callApi(params, req, runtime), new $_model.DelCardSendExportInfoResponse({}));
  }

  /**
   * 删除导出记录
   * 
   * @param request - DelCardSendExportInfoRequest
   * @returns DelCardSendExportInfoResponse
   */
  async delCardSendExportInfo(request: $_model.DelCardSendExportInfoRequest): Promise<$_model.DelCardSendExportInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.delCardSendExportInfoWithOptions(request, runtime);
  }

  /**
   * 删除消息回调
   * 
   * @param request - DeleteCardMessageCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCardMessageCallbackResponse
   */
  async deleteCardMessageCallbackWithOptions(request: $_model.DeleteCardMessageCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCardMessageCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "DeleteCardMessageCallback",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCardMessageCallbackResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCardMessageCallbackResponse({}));
  }

  /**
   * 删除消息回调
   * 
   * @param request - DeleteCardMessageCallbackRequest
   * @returns DeleteCardMessageCallbackResponse
   */
  async deleteCardMessageCallback(request: $_model.DeleteCardMessageCallbackRequest): Promise<$_model.DeleteCardMessageCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCardMessageCallbackWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteCardMessageQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCardMessageQueueResponse
   */
  async deleteCardMessageQueueWithOptions(request: $_model.DeleteCardMessageQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCardMessageQueueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.queueType)) {
      query["QueueType"] = request.queueType;
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
      action: "DeleteCardMessageQueue",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCardMessageQueueResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCardMessageQueueResponse({}));
  }

  /**
   * @param request - DeleteCardMessageQueueRequest
   * @returns DeleteCardMessageQueueResponse
   */
  async deleteCardMessageQueue(request: $_model.DeleteCardMessageQueueRequest): Promise<$_model.DeleteCardMessageQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCardMessageQueueWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteContactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContactsResponse
   */
  async deleteContactsWithOptions(request: $_model.DeleteContactsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContactsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "DeleteContacts",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContactsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContactsResponse({}));
  }

  /**
   * @param request - DeleteContactsRequest
   * @returns DeleteContactsResponse
   */
  async deleteContacts(request: $_model.DeleteContactsRequest): Promise<$_model.DeleteContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContactsWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteContactsNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContactsNewResponse
   */
  async deleteContactsNewWithOptions(request: $_model.DeleteContactsNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContactsNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "DeleteContactsNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContactsNewResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContactsNewResponse({}));
  }

  /**
   * @param request - DeleteContactsNewRequest
   * @returns DeleteContactsNewResponse
   */
  async deleteContactsNew(request: $_model.DeleteContactsNewRequest): Promise<$_model.DeleteContactsNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContactsNewWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteDigitalTemplateNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDigitalTemplateNewResponse
   */
  async deleteDigitalTemplateNewWithOptions(request: $_model.DeleteDigitalTemplateNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDigitalTemplateNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditState)) {
      query["AuditState"] = request.auditState;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDigitalTemplateNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDigitalTemplateNewResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDigitalTemplateNewResponse({}));
  }

  /**
   * @param request - DeleteDigitalTemplateNewRequest
   * @returns DeleteDigitalTemplateNewResponse
   */
  async deleteDigitalTemplateNew(request: $_model.DeleteDigitalTemplateNewRequest): Promise<$_model.DeleteDigitalTemplateNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDigitalTemplateNewWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteMessageCallbackNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMessageCallbackNewResponse
   */
  async deleteMessageCallbackNewWithOptions(request: $_model.DeleteMessageCallbackNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMessageCallbackNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "DeleteMessageCallbackNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMessageCallbackNewResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMessageCallbackNewResponse({}));
  }

  /**
   * @param request - DeleteMessageCallbackNewRequest
   * @returns DeleteMessageCallbackNewResponse
   */
  async deleteMessageCallbackNew(request: $_model.DeleteMessageCallbackNewRequest): Promise<$_model.DeleteMessageCallbackNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMessageCallbackNewWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteMessageQueueNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMessageQueueNewResponse
   */
  async deleteMessageQueueNewWithOptions(request: $_model.DeleteMessageQueueNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMessageQueueNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.queueType)) {
      query["QueueType"] = request.queueType;
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
      action: "DeleteMessageQueueNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMessageQueueNewResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMessageQueueNewResponse({}));
  }

  /**
   * @param request - DeleteMessageQueueNewRequest
   * @returns DeleteMessageQueueNewResponse
   */
  async deleteMessageQueueNew(request: $_model.DeleteMessageQueueNewRequest): Promise<$_model.DeleteMessageQueueNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMessageQueueNewWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteOrCanceleTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOrCanceleTaskResponse
   */
  async deleteOrCanceleTaskWithOptions(request: $_model.DeleteOrCanceleTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOrCanceleTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isDeleted)) {
      query["IsDeleted"] = request.isDeleted;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOrCanceleTask",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOrCanceleTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOrCanceleTaskResponse({}));
  }

  /**
   * @param request - DeleteOrCanceleTaskRequest
   * @returns DeleteOrCanceleTaskResponse
   */
  async deleteOrCanceleTask(request: $_model.DeleteOrCanceleTaskRequest): Promise<$_model.DeleteOrCanceleTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOrCanceleTaskWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteOrCanceleTaskNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOrCanceleTaskNewResponse
   */
  async deleteOrCanceleTaskNewWithOptions(request: $_model.DeleteOrCanceleTaskNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOrCanceleTaskNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isDeleted)) {
      query["IsDeleted"] = request.isDeleted;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOrCanceleTaskNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOrCanceleTaskNewResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOrCanceleTaskNewResponse({}));
  }

  /**
   * @param request - DeleteOrCanceleTaskNewRequest
   * @returns DeleteOrCanceleTaskNewResponse
   */
  async deleteOrCanceleTaskNew(request: $_model.DeleteOrCanceleTaskNewRequest): Promise<$_model.DeleteOrCanceleTaskNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOrCanceleTaskNewWithOptions(request, runtime);
  }

  /**
   * @param request - DeletePhoneWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePhoneWhiteListResponse
   */
  async deletePhoneWhiteListWithOptions(request: $_model.DeletePhoneWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePhoneWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "DeletePhoneWhiteList",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePhoneWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.DeletePhoneWhiteListResponse({}));
  }

  /**
   * @param request - DeletePhoneWhiteListRequest
   * @returns DeletePhoneWhiteListResponse
   */
  async deletePhoneWhiteList(request: $_model.DeletePhoneWhiteListRequest): Promise<$_model.DeletePhoneWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePhoneWhiteListWithOptions(request, runtime);
  }

  /**
   * @param request - DeletePhoneWhiteListNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePhoneWhiteListNewResponse
   */
  async deletePhoneWhiteListNewWithOptions(request: $_model.DeletePhoneWhiteListNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePhoneWhiteListNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "DeletePhoneWhiteListNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePhoneWhiteListNewResponse>(await this.callApi(params, req, runtime), new $_model.DeletePhoneWhiteListNewResponse({}));
  }

  /**
   * @param request - DeletePhoneWhiteListNewRequest
   * @returns DeletePhoneWhiteListNewResponse
   */
  async deletePhoneWhiteListNew(request: $_model.DeletePhoneWhiteListNewRequest): Promise<$_model.DeletePhoneWhiteListNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePhoneWhiteListNewWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteShortUrlNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteShortUrlNewResponse
   */
  async deleteShortUrlNewWithOptions(request: $_model.DeleteShortUrlNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteShortUrlNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "DeleteShortUrlNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteShortUrlNewResponse>(await this.callApi(params, req, runtime), new $_model.DeleteShortUrlNewResponse({}));
  }

  /**
   * @param request - DeleteShortUrlNewRequest
   * @returns DeleteShortUrlNewResponse
   */
  async deleteShortUrlNew(request: $_model.DeleteShortUrlNewRequest): Promise<$_model.DeleteShortUrlNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteShortUrlNewWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteSmsTemplateNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSmsTemplateNewResponse
   */
  async deleteSmsTemplateNewWithOptions(request: $_model.DeleteSmsTemplateNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSmsTemplateNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isSmsSign)) {
      query["IsSmsSign"] = request.isSmsSign;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.smsTemplateIds)) {
      query["SmsTemplateIds"] = request.smsTemplateIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSmsTemplateNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSmsTemplateNewResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSmsTemplateNewResponse({}));
  }

  /**
   * @param request - DeleteSmsTemplateNewRequest
   * @returns DeleteSmsTemplateNewResponse
   */
  async deleteSmsTemplateNew(request: $_model.DeleteSmsTemplateNewRequest): Promise<$_model.DeleteSmsTemplateNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSmsTemplateNewWithOptions(request, runtime);
  }

  /**
   * 发送纪录信息导出
   * 
   * @param request - ExportCardSmsHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportCardSmsHistoryResponse
   */
  async exportCardSmsHistoryWithOptions(request: $_model.ExportCardSmsHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportCardSmsHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiSend)) {
      query["ApiSend"] = request.apiSend;
    }

    if (!$dara.isNull(request.cardTemplateType)) {
      query["CardTemplateType"] = request.cardTemplateType;
    }

    if (!$dara.isNull(request.gmtCreate)) {
      query["GmtCreate"] = request.gmtCreate;
    }

    if (!$dara.isNull(request.receiveState)) {
      query["ReceiveState"] = request.receiveState;
    }

    if (!$dara.isNull(request.receiver)) {
      query["Receiver"] = request.receiver;
    }

    if (!$dara.isNull(request.renderState)) {
      query["RenderState"] = request.renderState;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.tmpCode)) {
      query["TmpCode"] = request.tmpCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportCardSmsHistory",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportCardSmsHistoryResponse>(await this.callApi(params, req, runtime), new $_model.ExportCardSmsHistoryResponse({}));
  }

  /**
   * 发送纪录信息导出
   * 
   * @param request - ExportCardSmsHistoryRequest
   * @returns ExportCardSmsHistoryResponse
   */
  async exportCardSmsHistory(request: $_model.ExportCardSmsHistoryRequest): Promise<$_model.ExportCardSmsHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportCardSmsHistoryWithOptions(request, runtime);
  }

  /**
   * 导出发送统计信息-解析统计
   * 
   * @param request - ExportCardSmsStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportCardSmsStatisticsResponse
   */
  async exportCardSmsStatisticsWithOptions(request: $_model.ExportCardSmsStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportCardSmsStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customTmpCode)) {
      query["CustomTmpCode"] = request.customTmpCode;
    }

    if (!$dara.isNull(request.sendDateEnd)) {
      query["SendDateEnd"] = request.sendDateEnd;
    }

    if (!$dara.isNull(request.sendDateStart)) {
      query["SendDateStart"] = request.sendDateStart;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.tmpCode)) {
      query["TmpCode"] = request.tmpCode;
    }

    if (!$dara.isNull(request.tmpName)) {
      query["TmpName"] = request.tmpName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportCardSmsStatistics",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportCardSmsStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.ExportCardSmsStatisticsResponse({}));
  }

  /**
   * 导出发送统计信息-解析统计
   * 
   * @param request - ExportCardSmsStatisticsRequest
   * @returns ExportCardSmsStatisticsResponse
   */
  async exportCardSmsStatistics(request: $_model.ExportCardSmsStatisticsRequest): Promise<$_model.ExportCardSmsStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportCardSmsStatisticsWithOptions(request, runtime);
  }

  /**
   * 导出发送统计信息-发送+解析统计
   * 
   * @param request - ExportCardSmsStatisticsSendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportCardSmsStatisticsSendResponse
   */
  async exportCardSmsStatisticsSendWithOptions(request: $_model.ExportCardSmsStatisticsSendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportCardSmsStatisticsSendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customTmpCode)) {
      query["CustomTmpCode"] = request.customTmpCode;
    }

    if (!$dara.isNull(request.sendDateEnd)) {
      query["SendDateEnd"] = request.sendDateEnd;
    }

    if (!$dara.isNull(request.sendDateStart)) {
      query["SendDateStart"] = request.sendDateStart;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.tmpCode)) {
      query["TmpCode"] = request.tmpCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportCardSmsStatisticsSend",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportCardSmsStatisticsSendResponse>(await this.callApi(params, req, runtime), new $_model.ExportCardSmsStatisticsSendResponse({}));
  }

  /**
   * 导出发送统计信息-发送+解析统计
   * 
   * @param request - ExportCardSmsStatisticsSendRequest
   * @returns ExportCardSmsStatisticsSendResponse
   */
  async exportCardSmsStatisticsSend(request: $_model.ExportCardSmsStatisticsSendRequest): Promise<$_model.ExportCardSmsStatisticsSendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportCardSmsStatisticsSendWithOptions(request, runtime);
  }

  /**
   * 发送效果统计导出
   * 
   * @param request - ExportTmpEffectReportDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportTmpEffectReportDataResponse
   */
  async exportTmpEffectReportDataWithOptions(request: $_model.ExportTmpEffectReportDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportTmpEffectReportDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.tmpCode)) {
      query["TmpCode"] = request.tmpCode;
    }

    if (!$dara.isNull(request.tmpName)) {
      query["TmpName"] = request.tmpName;
    }

    if (!$dara.isNull(request.vendorCode)) {
      query["VendorCode"] = request.vendorCode;
    }

    if (!$dara.isNull(request.vendorName)) {
      query["VendorName"] = request.vendorName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportTmpEffectReportData",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportTmpEffectReportDataResponse>(await this.callApi(params, req, runtime), new $_model.ExportTmpEffectReportDataResponse({}));
  }

  /**
   * 发送效果统计导出
   * 
   * @param request - ExportTmpEffectReportDataRequest
   * @returns ExportTmpEffectReportDataResponse
   */
  async exportTmpEffectReportData(request: $_model.ExportTmpEffectReportDataRequest): Promise<$_model.ExportTmpEffectReportDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportTmpEffectReportDataWithOptions(request, runtime);
  }

  /**
   * 授权书下载
   * 
   * @param request - GetLetterOfAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLetterOfAuthorizationResponse
   */
  async getLetterOfAuthorizationWithOptions(request: $_model.GetLetterOfAuthorizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLetterOfAuthorizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLetterOfAuthorization",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLetterOfAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.GetLetterOfAuthorizationResponse({}));
  }

  /**
   * 授权书下载
   * 
   * @param request - GetLetterOfAuthorizationRequest
   * @returns GetLetterOfAuthorizationResponse
   */
  async getLetterOfAuthorization(request: $_model.GetLetterOfAuthorizationRequest): Promise<$_model.GetLetterOfAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLetterOfAuthorizationWithOptions(request, runtime);
  }

  /**
   * 获取推送的消息信息
   * 
   * @param request - ListPushMsgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPushMsgResponse
   */
  async listPushMsgWithOptions(request: $_model.ListPushMsgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPushMsgResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.msgType)) {
      query["MsgType"] = request.msgType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pushTime)) {
      query["PushTime"] = request.pushTime;
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
      action: "ListPushMsg",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPushMsgResponse>(await this.callApi(params, req, runtime), new $_model.ListPushMsgResponse({}));
  }

  /**
   * 获取推送的消息信息
   * 
   * @param request - ListPushMsgRequest
   * @returns ListPushMsgResponse
   */
  async listPushMsg(request: $_model.ListPushMsgRequest): Promise<$_model.ListPushMsgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPushMsgWithOptions(request, runtime);
  }

  /**
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.tagOwnerUid)) {
      query["TagOwnerUid"] = request.tagOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2017-06-20",
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
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - OpenShortUrlProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenShortUrlProductResponse
   */
  async openShortUrlProductWithOptions(request: $_model.OpenShortUrlProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenShortUrlProductResponse> {
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
      action: "OpenShortUrlProduct",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenShortUrlProductResponse>(await this.callApi(params, req, runtime), new $_model.OpenShortUrlProductResponse({}));
  }

  /**
   * @param request - OpenShortUrlProductRequest
   * @returns OpenShortUrlProductResponse
   */
  async openShortUrlProduct(request: $_model.OpenShortUrlProductRequest): Promise<$_model.OpenShortUrlProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openShortUrlProductWithOptions(request, runtime);
  }

  /**
   * @param request - OpenShortUrlProductNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenShortUrlProductNewResponse
   */
  async openShortUrlProductNewWithOptions(request: $_model.OpenShortUrlProductNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenShortUrlProductNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "OpenShortUrlProductNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenShortUrlProductNewResponse>(await this.callApi(params, req, runtime), new $_model.OpenShortUrlProductNewResponse({}));
  }

  /**
   * @param request - OpenShortUrlProductNewRequest
   * @returns OpenShortUrlProductNewResponse
   */
  async openShortUrlProductNew(request: $_model.OpenShortUrlProductNewRequest): Promise<$_model.OpenShortUrlProductNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openShortUrlProductNewWithOptions(request, runtime);
  }

  /**
   * @param request - OpencPrevFlagNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpencPrevFlagNewResponse
   */
  async opencPrevFlagNewWithOptions(request: $_model.OpencPrevFlagNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpencPrevFlagNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isOpen)) {
      query["IsOpen"] = request.isOpen;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "OpencPrevFlagNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpencPrevFlagNewResponse>(await this.callApi(params, req, runtime), new $_model.OpencPrevFlagNewResponse({}));
  }

  /**
   * @param request - OpencPrevFlagNewRequest
   * @returns OpencPrevFlagNewResponse
   */
  async opencPrevFlagNew(request: $_model.OpencPrevFlagNewRequest): Promise<$_model.OpencPrevFlagNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.opencPrevFlagNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAnyParamTemplateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAnyParamTemplateUserResponse
   */
  async queryAnyParamTemplateUserWithOptions(request: $_model.QueryAnyParamTemplateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAnyParamTemplateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryAnyParamTemplateUser",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAnyParamTemplateUserResponse>(await this.callApi(params, req, runtime), new $_model.QueryAnyParamTemplateUserResponse({}));
  }

  /**
   * @param request - QueryAnyParamTemplateUserRequest
   * @returns QueryAnyParamTemplateUserResponse
   */
  async queryAnyParamTemplateUser(request: $_model.QueryAnyParamTemplateUserRequest): Promise<$_model.QueryAnyParamTemplateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAnyParamTemplateUserWithOptions(request, runtime);
  }

  /**
   * 获取授权状态
   * 
   * @param request - QueryAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAuthorizationResponse
   */
  async queryAuthorizationWithOptions(request: $_model.QueryAuthorizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAuthorizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizeCode)) {
      query["AuthorizeCode"] = request.authorizeCode;
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
      action: "QueryAuthorization",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.QueryAuthorizationResponse({}));
  }

  /**
   * 获取授权状态
   * 
   * @param request - QueryAuthorizationRequest
   * @returns QueryAuthorizationResponse
   */
  async queryAuthorization(request: $_model.QueryAuthorizationRequest): Promise<$_model.QueryAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAuthorizationWithOptions(request, runtime);
  }

  /**
   * @param request - QueryBillingStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBillingStatisticsResponse
   */
  async queryBillingStatisticsWithOptions(request: $_model.QueryBillingStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBillingStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billCycle)) {
      query["BillCycle"] = request.billCycle;
    }

    if (!$dara.isNull(request.itemName)) {
      query["ItemName"] = request.itemName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryBillingStatistics",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBillingStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.QueryBillingStatisticsResponse({}));
  }

  /**
   * @param request - QueryBillingStatisticsRequest
   * @returns QueryBillingStatisticsResponse
   */
  async queryBillingStatistics(request: $_model.QueryBillingStatisticsRequest): Promise<$_model.QueryBillingStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBillingStatisticsWithOptions(request, runtime);
  }

  /**
   * @param request - QueryCardMessageQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCardMessageQueueResponse
   */
  async queryCardMessageQueueWithOptions(request: $_model.QueryCardMessageQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCardMessageQueueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.queueTypes)) {
      query["QueueTypes"] = request.queueTypes;
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
      action: "QueryCardMessageQueue",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCardMessageQueueResponse>(await this.callApi(params, req, runtime), new $_model.QueryCardMessageQueueResponse({}));
  }

  /**
   * @param request - QueryCardMessageQueueRequest
   * @returns QueryCardMessageQueueResponse
   */
  async queryCardMessageQueue(request: $_model.QueryCardMessageQueueRequest): Promise<$_model.QueryCardMessageQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCardMessageQueueWithOptions(request, runtime);
  }

  /**
   * 查询发送记录导出信息
   * 
   * @param request - QueryCardSendExportInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCardSendExportInfoResponse
   */
  async queryCardSendExportInfoWithOptions(request: $_model.QueryCardSendExportInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCardSendExportInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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
      action: "QueryCardSendExportInfo",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCardSendExportInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryCardSendExportInfoResponse({}));
  }

  /**
   * 查询发送记录导出信息
   * 
   * @param request - QueryCardSendExportInfoRequest
   * @returns QueryCardSendExportInfoResponse
   */
  async queryCardSendExportInfo(request: $_model.QueryCardSendExportInfoRequest): Promise<$_model.QueryCardSendExportInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCardSendExportInfoWithOptions(request, runtime);
  }

  /**
   * 分页查询发送纪录信息
   * 
   * @param request - QueryCardSmsHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCardSmsHistoryResponse
   */
  async queryCardSmsHistoryWithOptions(request: $_model.QueryCardSmsHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCardSmsHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiSend)) {
      query["ApiSend"] = request.apiSend;
    }

    if (!$dara.isNull(request.cardTemplateType)) {
      query["CardTemplateType"] = request.cardTemplateType;
    }

    if (!$dara.isNull(request.gmtCreate)) {
      query["GmtCreate"] = request.gmtCreate;
    }

    if (!$dara.isNull(request.maxId)) {
      query["MaxId"] = request.maxId;
    }

    if (!$dara.isNull(request.minId)) {
      query["MinId"] = request.minId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.receiveState)) {
      query["ReceiveState"] = request.receiveState;
    }

    if (!$dara.isNull(request.receiver)) {
      query["Receiver"] = request.receiver;
    }

    if (!$dara.isNull(request.renderState)) {
      query["RenderState"] = request.renderState;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.tmpCode)) {
      query["TmpCode"] = request.tmpCode;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCardSmsHistory",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCardSmsHistoryResponse>(await this.callApi(params, req, runtime), new $_model.QueryCardSmsHistoryResponse({}));
  }

  /**
   * 分页查询发送纪录信息
   * 
   * @param request - QueryCardSmsHistoryRequest
   * @returns QueryCardSmsHistoryResponse
   */
  async queryCardSmsHistory(request: $_model.QueryCardSmsHistoryRequest): Promise<$_model.QueryCardSmsHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCardSmsHistoryWithOptions(request, runtime);
  }

  /**
   * 查询发送纪录信息详情
   * 
   * @param request - QueryCardSmsHistoryDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCardSmsHistoryDetailResponse
   */
  async queryCardSmsHistoryDetailWithOptions(request: $_model.QueryCardSmsHistoryDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCardSmsHistoryDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.gmtCreate)) {
      query["GmtCreate"] = request.gmtCreate;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCardSmsHistoryDetail",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCardSmsHistoryDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryCardSmsHistoryDetailResponse({}));
  }

  /**
   * 查询发送纪录信息详情
   * 
   * @param request - QueryCardSmsHistoryDetailRequest
   * @returns QueryCardSmsHistoryDetailResponse
   */
  async queryCardSmsHistoryDetail(request: $_model.QueryCardSmsHistoryDetailRequest): Promise<$_model.QueryCardSmsHistoryDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCardSmsHistoryDetailWithOptions(request, runtime);
  }

  /**
   * 分页查询发送统计信息-解析统计
   * 
   * @param request - QueryCardSmsStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCardSmsStatisticsResponse
   */
  async queryCardSmsStatisticsWithOptions(request: $_model.QueryCardSmsStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCardSmsStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customTmpCode)) {
      query["CustomTmpCode"] = request.customTmpCode;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sendDateEnd)) {
      query["SendDateEnd"] = request.sendDateEnd;
    }

    if (!$dara.isNull(request.sendDateStart)) {
      query["SendDateStart"] = request.sendDateStart;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.tmpCode)) {
      query["TmpCode"] = request.tmpCode;
    }

    if (!$dara.isNull(request.tmpName)) {
      query["TmpName"] = request.tmpName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCardSmsStatistics",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCardSmsStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.QueryCardSmsStatisticsResponse({}));
  }

  /**
   * 分页查询发送统计信息-解析统计
   * 
   * @param request - QueryCardSmsStatisticsRequest
   * @returns QueryCardSmsStatisticsResponse
   */
  async queryCardSmsStatistics(request: $_model.QueryCardSmsStatisticsRequest): Promise<$_model.QueryCardSmsStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCardSmsStatisticsWithOptions(request, runtime);
  }

  /**
   * 按时间查询发送统计信息-解析统计
   * 
   * @param request - QueryCardSmsStatisticsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCardSmsStatisticsListResponse
   */
  async queryCardSmsStatisticsListWithOptions(request: $_model.QueryCardSmsStatisticsListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCardSmsStatisticsListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customTmpCode)) {
      query["CustomTmpCode"] = request.customTmpCode;
    }

    if (!$dara.isNull(request.sendDateEnd)) {
      query["SendDateEnd"] = request.sendDateEnd;
    }

    if (!$dara.isNull(request.sendDateStart)) {
      query["SendDateStart"] = request.sendDateStart;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.tmpCode)) {
      query["TmpCode"] = request.tmpCode;
    }

    if (!$dara.isNull(request.tmpName)) {
      query["TmpName"] = request.tmpName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCardSmsStatisticsList",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCardSmsStatisticsListResponse>(await this.callApi(params, req, runtime), new $_model.QueryCardSmsStatisticsListResponse({}));
  }

  /**
   * 按时间查询发送统计信息-解析统计
   * 
   * @param request - QueryCardSmsStatisticsListRequest
   * @returns QueryCardSmsStatisticsListResponse
   */
  async queryCardSmsStatisticsList(request: $_model.QueryCardSmsStatisticsListRequest): Promise<$_model.QueryCardSmsStatisticsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCardSmsStatisticsListWithOptions(request, runtime);
  }

  /**
   * 分页查询发送统计信息-发送+解析统计
   * 
   * @param request - QueryCardSmsStatisticsSendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCardSmsStatisticsSendResponse
   */
  async queryCardSmsStatisticsSendWithOptions(request: $_model.QueryCardSmsStatisticsSendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCardSmsStatisticsSendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customTmpCode)) {
      query["CustomTmpCode"] = request.customTmpCode;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sendDateEnd)) {
      query["SendDateEnd"] = request.sendDateEnd;
    }

    if (!$dara.isNull(request.sendDateStart)) {
      query["SendDateStart"] = request.sendDateStart;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.tmpCode)) {
      query["TmpCode"] = request.tmpCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCardSmsStatisticsSend",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCardSmsStatisticsSendResponse>(await this.callApi(params, req, runtime), new $_model.QueryCardSmsStatisticsSendResponse({}));
  }

  /**
   * 分页查询发送统计信息-发送+解析统计
   * 
   * @param request - QueryCardSmsStatisticsSendRequest
   * @returns QueryCardSmsStatisticsSendResponse
   */
  async queryCardSmsStatisticsSend(request: $_model.QueryCardSmsStatisticsSendRequest): Promise<$_model.QueryCardSmsStatisticsSendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCardSmsStatisticsSendWithOptions(request, runtime);
  }

  /**
   * 按日期查询发送统计信息-发送+解析统计
   * 
   * @param request - QueryCardSmsStatisticsSendListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCardSmsStatisticsSendListResponse
   */
  async queryCardSmsStatisticsSendListWithOptions(request: $_model.QueryCardSmsStatisticsSendListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCardSmsStatisticsSendListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customTmpCode)) {
      query["CustomTmpCode"] = request.customTmpCode;
    }

    if (!$dara.isNull(request.sendDateEnd)) {
      query["SendDateEnd"] = request.sendDateEnd;
    }

    if (!$dara.isNull(request.sendDateStart)) {
      query["SendDateStart"] = request.sendDateStart;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.tmpCode)) {
      query["TmpCode"] = request.tmpCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCardSmsStatisticsSendList",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCardSmsStatisticsSendListResponse>(await this.callApi(params, req, runtime), new $_model.QueryCardSmsStatisticsSendListResponse({}));
  }

  /**
   * 按日期查询发送统计信息-发送+解析统计
   * 
   * @param request - QueryCardSmsStatisticsSendListRequest
   * @returns QueryCardSmsStatisticsSendListResponse
   */
  async queryCardSmsStatisticsSendList(request: $_model.QueryCardSmsStatisticsSendListRequest): Promise<$_model.QueryCardSmsStatisticsSendListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCardSmsStatisticsSendListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryCommonCustInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCommonCustInfoResponse
   */
  async queryCommonCustInfoWithOptions(request: $_model.QueryCommonCustInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCommonCustInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryCommonCustInfo",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCommonCustInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryCommonCustInfoResponse({}));
  }

  /**
   * @param request - QueryCommonCustInfoRequest
   * @returns QueryCommonCustInfoResponse
   */
  async queryCommonCustInfo(request: $_model.QueryCommonCustInfoRequest): Promise<$_model.QueryCommonCustInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCommonCustInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryContactsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryContactsListResponse
   */
  async queryContactsListWithOptions(request: $_model.QueryContactsListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryContactsListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryContactsList",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryContactsListResponse>(await this.callApi(params, req, runtime), new $_model.QueryContactsListResponse({}));
  }

  /**
   * @param request - QueryContactsListRequest
   * @returns QueryContactsListResponse
   */
  async queryContactsList(request: $_model.QueryContactsListRequest): Promise<$_model.QueryContactsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryContactsListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryContactsListNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryContactsListNewResponse
   */
  async queryContactsListNewWithOptions(request: $_model.QueryContactsListNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryContactsListNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryContactsListNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryContactsListNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryContactsListNewResponse({}));
  }

  /**
   * @param request - QueryContactsListNewRequest
   * @returns QueryContactsListNewResponse
   */
  async queryContactsListNew(request: $_model.QueryContactsListNewRequest): Promise<$_model.QueryContactsListNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryContactsListNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDailyBillInfoLeafNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDailyBillInfoLeafNewResponse
   */
  async queryDailyBillInfoLeafNewWithOptions(request: $_model.QueryDailyBillInfoLeafNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDailyBillInfoLeafNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billCycle)) {
      query["BillCycle"] = request.billCycle;
    }

    if (!$dara.isNull(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!$dara.isNull(request.itemName)) {
      query["ItemName"] = request.itemName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subjectItemId)) {
      query["SubjectItemId"] = request.subjectItemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDailyBillInfoLeafNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDailyBillInfoLeafNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryDailyBillInfoLeafNewResponse({}));
  }

  /**
   * @param request - QueryDailyBillInfoLeafNewRequest
   * @returns QueryDailyBillInfoLeafNewResponse
   */
  async queryDailyBillInfoLeafNew(request: $_model.QueryDailyBillInfoLeafNewRequest): Promise<$_model.QueryDailyBillInfoLeafNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDailyBillInfoLeafNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDigitalTemplateDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDigitalTemplateDetailResponse
   */
  async queryDigitalTemplateDetailWithOptions(request: $_model.QueryDigitalTemplateDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDigitalTemplateDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditState)) {
      query["AuditState"] = request.auditState;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDigitalTemplateDetail",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDigitalTemplateDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryDigitalTemplateDetailResponse({}));
  }

  /**
   * @param request - QueryDigitalTemplateDetailRequest
   * @returns QueryDigitalTemplateDetailResponse
   */
  async queryDigitalTemplateDetail(request: $_model.QueryDigitalTemplateDetailRequest): Promise<$_model.QueryDigitalTemplateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDigitalTemplateDetailWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDigitalTemplateDetailNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDigitalTemplateDetailNewResponse
   */
  async queryDigitalTemplateDetailNewWithOptions(request: $_model.QueryDigitalTemplateDetailNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDigitalTemplateDetailNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditState)) {
      query["AuditState"] = request.auditState;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDigitalTemplateDetailNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDigitalTemplateDetailNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryDigitalTemplateDetailNewResponse({}));
  }

  /**
   * @param request - QueryDigitalTemplateDetailNewRequest
   * @returns QueryDigitalTemplateDetailNewResponse
   */
  async queryDigitalTemplateDetailNew(request: $_model.QueryDigitalTemplateDetailNewRequest): Promise<$_model.QueryDigitalTemplateDetailNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDigitalTemplateDetailNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDigitalTemplateLastRangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDigitalTemplateLastRangeResponse
   */
  async queryDigitalTemplateLastRangeWithOptions(request: $_model.QueryDigitalTemplateLastRangeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDigitalTemplateLastRangeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDigitalTemplateLastRange",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDigitalTemplateLastRangeResponse>(await this.callApi(params, req, runtime), new $_model.QueryDigitalTemplateLastRangeResponse({}));
  }

  /**
   * @param request - QueryDigitalTemplateLastRangeRequest
   * @returns QueryDigitalTemplateLastRangeResponse
   */
  async queryDigitalTemplateLastRange(request: $_model.QueryDigitalTemplateLastRangeRequest): Promise<$_model.QueryDigitalTemplateLastRangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDigitalTemplateLastRangeWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDigitalTemplateLastRangeNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDigitalTemplateLastRangeNewResponse
   */
  async queryDigitalTemplateLastRangeNewWithOptions(request: $_model.QueryDigitalTemplateLastRangeNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDigitalTemplateLastRangeNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditState)) {
      query["AuditState"] = request.auditState;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodType)) {
      query["ProdType"] = request.prodType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDigitalTemplateLastRangeNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDigitalTemplateLastRangeNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryDigitalTemplateLastRangeNewResponse({}));
  }

  /**
   * @param request - QueryDigitalTemplateLastRangeNewRequest
   * @returns QueryDigitalTemplateLastRangeNewResponse
   */
  async queryDigitalTemplateLastRangeNew(request: $_model.QueryDigitalTemplateLastRangeNewRequest): Promise<$_model.QueryDigitalTemplateLastRangeNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDigitalTemplateLastRangeNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDigitalTemplatePageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDigitalTemplatePageListResponse
   */
  async queryDigitalTemplatePageListWithOptions(request: $_model.QueryDigitalTemplatePageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDigitalTemplatePageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditState)) {
      query["AuditState"] = request.auditState;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDigitalTemplatePageList",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDigitalTemplatePageListResponse>(await this.callApi(params, req, runtime), new $_model.QueryDigitalTemplatePageListResponse({}));
  }

  /**
   * @param request - QueryDigitalTemplatePageListRequest
   * @returns QueryDigitalTemplatePageListResponse
   */
  async queryDigitalTemplatePageList(request: $_model.QueryDigitalTemplatePageListRequest): Promise<$_model.QueryDigitalTemplatePageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDigitalTemplatePageListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDigitalTemplatePageListNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDigitalTemplatePageListNewResponse
   */
  async queryDigitalTemplatePageListNewWithOptions(request: $_model.QueryDigitalTemplatePageListNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDigitalTemplatePageListNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditState)) {
      query["AuditState"] = request.auditState;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDigitalTemplatePageListNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDigitalTemplatePageListNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryDigitalTemplatePageListNewResponse({}));
  }

  /**
   * @param request - QueryDigitalTemplatePageListNewRequest
   * @returns QueryDigitalTemplatePageListNewResponse
   */
  async queryDigitalTemplatePageListNew(request: $_model.QueryDigitalTemplatePageListNewRequest): Promise<$_model.QueryDigitalTemplatePageListNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDigitalTemplatePageListNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDomainListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainListResponse
   */
  async queryDomainListWithOptions(request: $_model.QueryDomainListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDomainListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
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
      action: "QueryDomainList",
      version: "2017-06-20",
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
   * @param request - QueryDomainListRequest
   * @returns QueryDomainListResponse
   */
  async queryDomainList(request: $_model.QueryDomainListRequest): Promise<$_model.QueryDomainListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDomainListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDomainListNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainListNewResponse
   */
  async queryDomainListNewWithOptions(request: $_model.QueryDomainListNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDomainListNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryDomainListNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDomainListNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryDomainListNewResponse({}));
  }

  /**
   * @param request - QueryDomainListNewRequest
   * @returns QueryDomainListNewResponse
   */
  async queryDomainListNew(request: $_model.QueryDomainListNewRequest): Promise<$_model.QueryDomainListNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDomainListNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryExportSendRecordListNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryExportSendRecordListNewResponse
   */
  async queryExportSendRecordListNewWithOptions(request: $_model.QueryExportSendRecordListNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryExportSendRecordListNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applyStatus)) {
      query["ApplyStatus"] = request.applyStatus;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryExportSendRecordListNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryExportSendRecordListNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryExportSendRecordListNewResponse({}));
  }

  /**
   * @param request - QueryExportSendRecordListNewRequest
   * @returns QueryExportSendRecordListNewResponse
   */
  async queryExportSendRecordListNew(request: $_model.QueryExportSendRecordListNewRequest): Promise<$_model.QueryExportSendRecordListNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryExportSendRecordListNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryFailDetailDownloadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFailDetailDownloadResponse
   */
  async queryFailDetailDownloadWithOptions(request: $_model.QueryFailDetailDownloadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFailDetailDownloadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskInstanceId)) {
      query["TaskInstanceId"] = request.taskInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFailDetailDownload",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFailDetailDownloadResponse>(await this.callApi(params, req, runtime), new $_model.QueryFailDetailDownloadResponse({}));
  }

  /**
   * @param request - QueryFailDetailDownloadRequest
   * @returns QueryFailDetailDownloadResponse
   */
  async queryFailDetailDownload(request: $_model.QueryFailDetailDownloadRequest): Promise<$_model.QueryFailDetailDownloadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFailDetailDownloadWithOptions(request, runtime);
  }

  /**
   * @param request - QueryFailDetailDownloadNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFailDetailDownloadNewResponse
   */
  async queryFailDetailDownloadNewWithOptions(request: $_model.QueryFailDetailDownloadNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFailDetailDownloadNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskInstanceId)) {
      query["TaskInstanceId"] = request.taskInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFailDetailDownloadNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFailDetailDownloadNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryFailDetailDownloadNewResponse({}));
  }

  /**
   * @param request - QueryFailDetailDownloadNewRequest
   * @returns QueryFailDetailDownloadNewResponse
   */
  async queryFailDetailDownloadNew(request: $_model.QueryFailDetailDownloadNewRequest): Promise<$_model.QueryFailDetailDownloadNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFailDetailDownloadNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryFlowLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFlowLimitResponse
   */
  async queryFlowLimitWithOptions(request: $_model.QueryFlowLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFlowLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryFlowLimit",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFlowLimitResponse>(await this.callApi(params, req, runtime), new $_model.QueryFlowLimitResponse({}));
  }

  /**
   * @param request - QueryFlowLimitRequest
   * @returns QueryFlowLimitResponse
   */
  async queryFlowLimit(request: $_model.QueryFlowLimitRequest): Promise<$_model.QueryFlowLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFlowLimitWithOptions(request, runtime);
  }

  /**
   * @param request - QueryFlowLimitNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFlowLimitNewResponse
   */
  async queryFlowLimitNewWithOptions(request: $_model.QueryFlowLimitNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFlowLimitNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryFlowLimitNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFlowLimitNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryFlowLimitNewResponse({}));
  }

  /**
   * @param request - QueryFlowLimitNewRequest
   * @returns QueryFlowLimitNewResponse
   */
  async queryFlowLimitNew(request: $_model.QueryFlowLimitNewRequest): Promise<$_model.QueryFlowLimitNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFlowLimitNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryIndexColRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryIndexColRecordResponse
   */
  async queryIndexColRecordWithOptions(request: $_model.QueryIndexColRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryIndexColRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskInstanceId)) {
      query["TaskInstanceId"] = request.taskInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryIndexColRecord",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryIndexColRecordResponse>(await this.callApi(params, req, runtime), new $_model.QueryIndexColRecordResponse({}));
  }

  /**
   * @param request - QueryIndexColRecordRequest
   * @returns QueryIndexColRecordResponse
   */
  async queryIndexColRecord(request: $_model.QueryIndexColRecordRequest): Promise<$_model.QueryIndexColRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryIndexColRecordWithOptions(request, runtime);
  }

  /**
   * @param request - QueryLearningStatusNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryLearningStatusNewResponse
   */
  async queryLearningStatusNewWithOptions(request: $_model.QueryLearningStatusNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryLearningStatusNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryLearningStatusNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryLearningStatusNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryLearningStatusNewResponse({}));
  }

  /**
   * @param request - QueryLearningStatusNewRequest
   * @returns QueryLearningStatusNewResponse
   */
  async queryLearningStatusNew(request: $_model.QueryLearningStatusNewRequest): Promise<$_model.QueryLearningStatusNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryLearningStatusNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMarketingAssistantStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMarketingAssistantStatusResponse
   */
  async queryMarketingAssistantStatusWithOptions(request: $_model.QueryMarketingAssistantStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMarketingAssistantStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryMarketingAssistantStatus",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMarketingAssistantStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryMarketingAssistantStatusResponse({}));
  }

  /**
   * @param request - QueryMarketingAssistantStatusRequest
   * @returns QueryMarketingAssistantStatusResponse
   */
  async queryMarketingAssistantStatus(request: $_model.QueryMarketingAssistantStatusRequest): Promise<$_model.QueryMarketingAssistantStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMarketingAssistantStatusWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMessageCallbackNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMessageCallbackNewResponse
   */
  async queryMessageCallbackNewWithOptions(request: $_model.QueryMessageCallbackNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMessageCallbackNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryMessageCallbackNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMessageCallbackNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryMessageCallbackNewResponse({}));
  }

  /**
   * @param request - QueryMessageCallbackNewRequest
   * @returns QueryMessageCallbackNewResponse
   */
  async queryMessageCallbackNew(request: $_model.QueryMessageCallbackNewRequest): Promise<$_model.QueryMessageCallbackNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMessageCallbackNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMessageQueueNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMessageQueueNewResponse
   */
  async queryMessageQueueNewWithOptions(request: $_model.QueryMessageQueueNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMessageQueueNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.queueTypes)) {
      query["QueueTypes"] = request.queueTypes;
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
      action: "QueryMessageQueueNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMessageQueueNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryMessageQueueNewResponse({}));
  }

  /**
   * @param request - QueryMessageQueueNewRequest
   * @returns QueryMessageQueueNewResponse
   */
  async queryMessageQueueNew(request: $_model.QueryMessageQueueNewRequest): Promise<$_model.QueryMessageQueueNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMessageQueueNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMonthlyBillInfoLeafNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMonthlyBillInfoLeafNewResponse
   */
  async queryMonthlyBillInfoLeafNewWithOptions(request: $_model.QueryMonthlyBillInfoLeafNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMonthlyBillInfoLeafNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billCycle)) {
      query["BillCycle"] = request.billCycle;
    }

    if (!$dara.isNull(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!$dara.isNull(request.itemName)) {
      query["ItemName"] = request.itemName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subjectItemId)) {
      query["SubjectItemId"] = request.subjectItemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMonthlyBillInfoLeafNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMonthlyBillInfoLeafNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryMonthlyBillInfoLeafNewResponse({}));
  }

  /**
   * @param request - QueryMonthlyBillInfoLeafNewRequest
   * @returns QueryMonthlyBillInfoLeafNewResponse
   */
  async queryMonthlyBillInfoLeafNew(request: $_model.QueryMonthlyBillInfoLeafNewRequest): Promise<$_model.QueryMonthlyBillInfoLeafNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMonthlyBillInfoLeafNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMonthlyBillRentalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMonthlyBillRentalResponse
   */
  async queryMonthlyBillRentalWithOptions(request: $_model.QueryMonthlyBillRentalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMonthlyBillRentalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billCycle)) {
      query["BillCycle"] = request.billCycle;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryMonthlyBillRental",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMonthlyBillRentalResponse>(await this.callApi(params, req, runtime), new $_model.QueryMonthlyBillRentalResponse({}));
  }

  /**
   * @param request - QueryMonthlyBillRentalRequest
   * @returns QueryMonthlyBillRentalResponse
   */
  async queryMonthlyBillRental(request: $_model.QueryMonthlyBillRentalRequest): Promise<$_model.QueryMonthlyBillRentalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMonthlyBillRentalWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMonthlyBillRentalNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMonthlyBillRentalNewResponse
   */
  async queryMonthlyBillRentalNewWithOptions(request: $_model.QueryMonthlyBillRentalNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMonthlyBillRentalNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billCycle)) {
      query["BillCycle"] = request.billCycle;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryMonthlyBillRentalNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMonthlyBillRentalNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryMonthlyBillRentalNewResponse({}));
  }

  /**
   * @param request - QueryMonthlyBillRentalNewRequest
   * @returns QueryMonthlyBillRentalNewResponse
   */
  async queryMonthlyBillRentalNew(request: $_model.QueryMonthlyBillRentalNewRequest): Promise<$_model.QueryMonthlyBillRentalNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMonthlyBillRentalNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMsgCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMsgCountResponse
   */
  async queryMsgCountWithOptions(request: $_model.QueryMsgCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMsgCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryMsgCount",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMsgCountResponse>(await this.callApi(params, req, runtime), new $_model.QueryMsgCountResponse({}));
  }

  /**
   * @param request - QueryMsgCountRequest
   * @returns QueryMsgCountResponse
   */
  async queryMsgCount(request: $_model.QueryMsgCountRequest): Promise<$_model.QueryMsgCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMsgCountWithOptions(request, runtime);
  }

  /**
   * @param request - QueryOpenStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOpenStatusResponse
   */
  async queryOpenStatusWithOptions(request: $_model.QueryOpenStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryOpenStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.busOffer)) {
      query["BusOffer"] = request.busOffer;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
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
      action: "QueryOpenStatus",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryOpenStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryOpenStatusResponse({}));
  }

  /**
   * @param request - QueryOpenStatusRequest
   * @returns QueryOpenStatusResponse
   */
  async queryOpenStatus(request: $_model.QueryOpenStatusRequest): Promise<$_model.QueryOpenStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryOpenStatusWithOptions(request, runtime);
  }

  /**
   * @param request - QueryOpencFlagNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOpencFlagNewResponse
   */
  async queryOpencFlagNewWithOptions(request: $_model.QueryOpencFlagNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryOpencFlagNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryOpencFlagNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryOpencFlagNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryOpencFlagNewResponse({}));
  }

  /**
   * @param request - QueryOpencFlagNewRequest
   * @returns QueryOpencFlagNewResponse
   */
  async queryOpencFlagNew(request: $_model.QueryOpencFlagNewRequest): Promise<$_model.QueryOpencFlagNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryOpencFlagNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPhoneWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPhoneWhiteListResponse
   */
  async queryPhoneWhiteListWithOptions(request: $_model.QueryPhoneWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPhoneWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryPhoneWhiteList",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPhoneWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.QueryPhoneWhiteListResponse({}));
  }

  /**
   * @param request - QueryPhoneWhiteListRequest
   * @returns QueryPhoneWhiteListResponse
   */
  async queryPhoneWhiteList(request: $_model.QueryPhoneWhiteListRequest): Promise<$_model.QueryPhoneWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPhoneWhiteListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPhoneWhiteListNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPhoneWhiteListNewResponse
   */
  async queryPhoneWhiteListNewWithOptions(request: $_model.QueryPhoneWhiteListNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPhoneWhiteListNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryPhoneWhiteListNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPhoneWhiteListNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryPhoneWhiteListNewResponse({}));
  }

  /**
   * @param request - QueryPhoneWhiteListNewRequest
   * @returns QueryPhoneWhiteListNewResponse
   */
  async queryPhoneWhiteListNew(request: $_model.QueryPhoneWhiteListNewRequest): Promise<$_model.QueryPhoneWhiteListNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPhoneWhiteListNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPkgThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPkgThresholdResponse
   */
  async queryPkgThresholdWithOptions(request: $_model.QueryPkgThresholdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPkgThresholdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryPkgThreshold",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPkgThresholdResponse>(await this.callApi(params, req, runtime), new $_model.QueryPkgThresholdResponse({}));
  }

  /**
   * @param request - QueryPkgThresholdRequest
   * @returns QueryPkgThresholdResponse
   */
  async queryPkgThreshold(request: $_model.QueryPkgThresholdRequest): Promise<$_model.QueryPkgThresholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPkgThresholdWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPkgThresholdNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPkgThresholdNewResponse
   */
  async queryPkgThresholdNewWithOptions(request: $_model.QueryPkgThresholdNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPkgThresholdNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryPkgThresholdNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPkgThresholdNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryPkgThresholdNewResponse({}));
  }

  /**
   * @param request - QueryPkgThresholdNewRequest
   * @returns QueryPkgThresholdNewResponse
   */
  async queryPkgThresholdNew(request: $_model.QueryPkgThresholdNewRequest): Promise<$_model.QueryPkgThresholdNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPkgThresholdNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPrevLimitNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPrevLimitNewResponse
   */
  async queryPrevLimitNewWithOptions(request: $_model.QueryPrevLimitNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPrevLimitNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryPrevLimitNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPrevLimitNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryPrevLimitNewResponse({}));
  }

  /**
   * @param request - QueryPrevLimitNewRequest
   * @returns QueryPrevLimitNewResponse
   */
  async queryPrevLimitNew(request: $_model.QueryPrevLimitNewRequest): Promise<$_model.QueryPrevLimitNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPrevLimitNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySaasRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySaasRecordResponse
   */
  async querySaasRecordWithOptions(request: $_model.QuerySaasRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySaasRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.indexCol)) {
      query["IndexCol"] = request.indexCol;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.result)) {
      query["Result"] = request.result;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskInstanceId)) {
      query["TaskInstanceId"] = request.taskInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySaasRecord",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySaasRecordResponse>(await this.callApi(params, req, runtime), new $_model.QuerySaasRecordResponse({}));
  }

  /**
   * @param request - QuerySaasRecordRequest
   * @returns QuerySaasRecordResponse
   */
  async querySaasRecord(request: $_model.QuerySaasRecordRequest): Promise<$_model.QuerySaasRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySaasRecordWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySaasRecordNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySaasRecordNewResponse
   */
  async querySaasRecordNewWithOptions(request: $_model.QuerySaasRecordNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySaasRecordNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.indexCol)) {
      query["IndexCol"] = request.indexCol;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.result)) {
      query["Result"] = request.result;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskInstanceId)) {
      query["TaskInstanceId"] = request.taskInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySaasRecordNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySaasRecordNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySaasRecordNewResponse({}));
  }

  /**
   * @param request - QuerySaasRecordNewRequest
   * @returns QuerySaasRecordNewResponse
   */
  async querySaasRecordNew(request: $_model.QuerySaasRecordNewRequest): Promise<$_model.QuerySaasRecordNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySaasRecordNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySendDetailsByPhoneNumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySendDetailsByPhoneNumResponse
   */
  async querySendDetailsByPhoneNumWithOptions(request: $_model.QuerySendDetailsByPhoneNumRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySendDetailsByPhoneNumResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.errorCode)) {
      query["ErrorCode"] = request.errorCode;
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

    if (!$dara.isNull(request.phoneNum)) {
      query["PhoneNum"] = request.phoneNum;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sendDate)) {
      query["SendDate"] = request.sendDate;
    }

    if (!$dara.isNull(request.sendStatus)) {
      query["SendStatus"] = request.sendStatus;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySendDetailsByPhoneNum",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySendDetailsByPhoneNumResponse>(await this.callApi(params, req, runtime), new $_model.QuerySendDetailsByPhoneNumResponse({}));
  }

  /**
   * @param request - QuerySendDetailsByPhoneNumRequest
   * @returns QuerySendDetailsByPhoneNumResponse
   */
  async querySendDetailsByPhoneNum(request: $_model.QuerySendDetailsByPhoneNumRequest): Promise<$_model.QuerySendDetailsByPhoneNumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySendDetailsByPhoneNumWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySendDetailsByPhoneNumNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySendDetailsByPhoneNumNewResponse
   */
  async querySendDetailsByPhoneNumNewWithOptions(request: $_model.QuerySendDetailsByPhoneNumNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySendDetailsByPhoneNumNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.errorCode)) {
      query["ErrorCode"] = request.errorCode;
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

    if (!$dara.isNull(request.phoneNum)) {
      query["PhoneNum"] = request.phoneNum;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sendDate)) {
      query["SendDate"] = request.sendDate;
    }

    if (!$dara.isNull(request.sendStatus)) {
      query["SendStatus"] = request.sendStatus;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.statisticsStatus)) {
      query["StatisticsStatus"] = request.statisticsStatus;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySendDetailsByPhoneNumNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySendDetailsByPhoneNumNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySendDetailsByPhoneNumNewResponse({}));
  }

  /**
   * @param request - QuerySendDetailsByPhoneNumNewRequest
   * @returns QuerySendDetailsByPhoneNumNewResponse
   */
  async querySendDetailsByPhoneNumNew(request: $_model.QuerySendDetailsByPhoneNumNewRequest): Promise<$_model.QuerySendDetailsByPhoneNumNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySendDetailsByPhoneNumNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySendFailDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySendFailDetailsResponse
   */
  async querySendFailDetailsWithOptions(request: $_model.QuerySendFailDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySendFailDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sendDate)) {
      query["SendDate"] = request.sendDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySendFailDetails",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySendFailDetailsResponse>(await this.callApi(params, req, runtime), new $_model.QuerySendFailDetailsResponse({}));
  }

  /**
   * @param request - QuerySendFailDetailsRequest
   * @returns QuerySendFailDetailsResponse
   */
  async querySendFailDetails(request: $_model.QuerySendFailDetailsRequest): Promise<$_model.QuerySendFailDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySendFailDetailsWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySendFailDetailsNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySendFailDetailsNewResponse
   */
  async querySendFailDetailsNewWithOptions(request: $_model.QuerySendFailDetailsNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySendFailDetailsNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sendDate)) {
      query["SendDate"] = request.sendDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySendFailDetailsNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySendFailDetailsNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySendFailDetailsNewResponse({}));
  }

  /**
   * @param request - QuerySendFailDetailsNewRequest
   * @returns QuerySendFailDetailsNewResponse
   */
  async querySendFailDetailsNew(request: $_model.QuerySendFailDetailsNewRequest): Promise<$_model.QuerySendFailDetailsNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySendFailDetailsNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySendToGlobeStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySendToGlobeStatusResponse
   */
  async querySendToGlobeStatusWithOptions(request: $_model.QuerySendToGlobeStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySendToGlobeStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QuerySendToGlobeStatus",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySendToGlobeStatusResponse>(await this.callApi(params, req, runtime), new $_model.QuerySendToGlobeStatusResponse({}));
  }

  /**
   * @param request - QuerySendToGlobeStatusRequest
   * @returns QuerySendToGlobeStatusResponse
   */
  async querySendToGlobeStatus(request: $_model.QuerySendToGlobeStatusRequest): Promise<$_model.QuerySendToGlobeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySendToGlobeStatusWithOptions(request, runtime);
  }

  /**
   * @param request - QueryShortUrlDetailNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryShortUrlDetailNewResponse
   */
  async queryShortUrlDetailNewWithOptions(request: $_model.QueryShortUrlDetailNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryShortUrlDetailNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.shortUrlId)) {
      query["ShortUrlId"] = request.shortUrlId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryShortUrlDetailNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryShortUrlDetailNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryShortUrlDetailNewResponse({}));
  }

  /**
   * @param request - QueryShortUrlDetailNewRequest
   * @returns QueryShortUrlDetailNewResponse
   */
  async queryShortUrlDetailNew(request: $_model.QueryShortUrlDetailNewRequest): Promise<$_model.QueryShortUrlDetailNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryShortUrlDetailNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryShortUrlListNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryShortUrlListNewResponse
   */
  async queryShortUrlListNewWithOptions(request: $_model.QueryShortUrlListNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryShortUrlListNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventName)) {
      query["EventName"] = request.eventName;
    }

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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.shortUrl)) {
      query["ShortUrl"] = request.shortUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryShortUrlListNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryShortUrlListNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryShortUrlListNewResponse({}));
  }

  /**
   * @param request - QueryShortUrlListNewRequest
   * @returns QueryShortUrlListNewResponse
   */
  async queryShortUrlListNew(request: $_model.QueryShortUrlListNewRequest): Promise<$_model.QueryShortUrlListNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryShortUrlListNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryShortUrlStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryShortUrlStatusResponse
   */
  async queryShortUrlStatusWithOptions(request: $_model.QueryShortUrlStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryShortUrlStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryShortUrlStatus",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryShortUrlStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryShortUrlStatusResponse({}));
  }

  /**
   * @param request - QueryShortUrlStatusRequest
   * @returns QueryShortUrlStatusResponse
   */
  async queryShortUrlStatus(request: $_model.QueryShortUrlStatusRequest): Promise<$_model.QueryShortUrlStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryShortUrlStatusWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySlsStatusNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySlsStatusNewResponse
   */
  async querySlsStatusNewWithOptions(request: $_model.QuerySlsStatusNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySlsStatusNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QuerySlsStatusNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySlsStatusNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySlsStatusNewResponse({}));
  }

  /**
   * @param request - QuerySlsStatusNewRequest
   * @returns QuerySlsStatusNewResponse
   */
  async querySlsStatusNew(request: $_model.QuerySlsStatusNewRequest): Promise<$_model.QuerySlsStatusNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySlsStatusNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsBaseScreenNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsBaseScreenNewResponse
   */
  async querySmsBaseScreenNewWithOptions(request: $_model.QuerySmsBaseScreenNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsBaseScreenNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QuerySmsBaseScreenNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsBaseScreenNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsBaseScreenNewResponse({}));
  }

  /**
   * @param request - QuerySmsBaseScreenNewRequest
   * @returns QuerySmsBaseScreenNewResponse
   */
  async querySmsBaseScreenNew(request: $_model.QuerySmsBaseScreenNewRequest): Promise<$_model.QuerySmsBaseScreenNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsBaseScreenNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsDetectCountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsDetectCountsResponse
   */
  async querySmsDetectCountsWithOptions(request: $_model.QuerySmsDetectCountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsDetectCountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QuerySmsDetectCounts",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsDetectCountsResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsDetectCountsResponse({}));
  }

  /**
   * @param request - QuerySmsDetectCountsRequest
   * @returns QuerySmsDetectCountsResponse
   */
  async querySmsDetectCounts(request: $_model.QuerySmsDetectCountsRequest): Promise<$_model.QuerySmsDetectCountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsDetectCountsWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsDetectCountsNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsDetectCountsNewResponse
   */
  async querySmsDetectCountsNewWithOptions(request: $_model.QuerySmsDetectCountsNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsDetectCountsNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QuerySmsDetectCountsNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsDetectCountsNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsDetectCountsNewResponse({}));
  }

  /**
   * @param request - QuerySmsDetectCountsNewRequest
   * @returns QuerySmsDetectCountsNewResponse
   */
  async querySmsDetectCountsNew(request: $_model.QuerySmsDetectCountsNewRequest): Promise<$_model.QuerySmsDetectCountsNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsDetectCountsNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsDetectListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsDetectListResponse
   */
  async querySmsDetectListWithOptions(request: $_model.QuerySmsDetectListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsDetectListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QuerySmsDetectList",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsDetectListResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsDetectListResponse({}));
  }

  /**
   * @param request - QuerySmsDetectListRequest
   * @returns QuerySmsDetectListResponse
   */
  async querySmsDetectList(request: $_model.QuerySmsDetectListRequest): Promise<$_model.QuerySmsDetectListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsDetectListWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsDetectListNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsDetectListNewResponse
   */
  async querySmsDetectListNewWithOptions(request: $_model.QuerySmsDetectListNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsDetectListNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QuerySmsDetectListNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsDetectListNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsDetectListNewResponse({}));
  }

  /**
   * @param request - QuerySmsDetectListNewRequest
   * @returns QuerySmsDetectListNewResponse
   */
  async querySmsDetectListNew(request: $_model.QuerySmsDetectListNewRequest): Promise<$_model.QuerySmsDetectListNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsDetectListNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsPackageDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsPackageDetailResponse
   */
  async querySmsPackageDetailWithOptions(request: $_model.QuerySmsPackageDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsPackageDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QuerySmsPackageDetail",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsPackageDetailResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsPackageDetailResponse({}));
  }

  /**
   * @param request - QuerySmsPackageDetailRequest
   * @returns QuerySmsPackageDetailResponse
   */
  async querySmsPackageDetail(request: $_model.QuerySmsPackageDetailRequest): Promise<$_model.QuerySmsPackageDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsPackageDetailWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsPackageDetailNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsPackageDetailNewResponse
   */
  async querySmsPackageDetailNewWithOptions(request: $_model.QuerySmsPackageDetailNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsPackageDetailNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QuerySmsPackageDetailNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsPackageDetailNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsPackageDetailNewResponse({}));
  }

  /**
   * @param request - QuerySmsPackageDetailNewRequest
   * @returns QuerySmsPackageDetailNewResponse
   */
  async querySmsPackageDetailNew(request: $_model.QuerySmsPackageDetailNewRequest): Promise<$_model.QuerySmsPackageDetailNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsPackageDetailNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsPackageNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsPackageNewResponse
   */
  async querySmsPackageNewWithOptions(request: $_model.QuerySmsPackageNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsPackageNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.productName)) {
      query["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.time)) {
      query["Time"] = request.time;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsPackageNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsPackageNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsPackageNewResponse({}));
  }

  /**
   * @param request - QuerySmsPackageNewRequest
   * @returns QuerySmsPackageNewResponse
   */
  async querySmsPackageNew(request: $_model.QuerySmsPackageNewRequest): Promise<$_model.QuerySmsPackageNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsPackageNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsPackageOrderListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsPackageOrderListResponse
   */
  async querySmsPackageOrderListWithOptions(request: $_model.QuerySmsPackageOrderListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsPackageOrderListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billCycle)) {
      query["BillCycle"] = request.billCycle;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QuerySmsPackageOrderList",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsPackageOrderListResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsPackageOrderListResponse({}));
  }

  /**
   * @param request - QuerySmsPackageOrderListRequest
   * @returns QuerySmsPackageOrderListResponse
   */
  async querySmsPackageOrderList(request: $_model.QuerySmsPackageOrderListRequest): Promise<$_model.QuerySmsPackageOrderListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsPackageOrderListWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsPackageOrderListNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsPackageOrderListNewResponse
   */
  async querySmsPackageOrderListNewWithOptions(request: $_model.QuerySmsPackageOrderListNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsPackageOrderListNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billCycle)) {
      query["BillCycle"] = request.billCycle;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QuerySmsPackageOrderListNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsPackageOrderListNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsPackageOrderListNewResponse({}));
  }

  /**
   * @param request - QuerySmsPackageOrderListNewRequest
   * @returns QuerySmsPackageOrderListNewResponse
   */
  async querySmsPackageOrderListNew(request: $_model.QuerySmsPackageOrderListNewRequest): Promise<$_model.QuerySmsPackageOrderListNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsPackageOrderListNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsPackageSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsPackageSummaryResponse
   */
  async querySmsPackageSummaryWithOptions(request: $_model.QuerySmsPackageSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsPackageSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QuerySmsPackageSummary",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsPackageSummaryResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsPackageSummaryResponse({}));
  }

  /**
   * @param request - QuerySmsPackageSummaryRequest
   * @returns QuerySmsPackageSummaryResponse
   */
  async querySmsPackageSummary(request: $_model.QuerySmsPackageSummaryRequest): Promise<$_model.QuerySmsPackageSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsPackageSummaryWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsPackageSummaryNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsPackageSummaryNewResponse
   */
  async querySmsPackageSummaryNewWithOptions(request: $_model.QuerySmsPackageSummaryNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsPackageSummaryNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QuerySmsPackageSummaryNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsPackageSummaryNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsPackageSummaryNewResponse({}));
  }

  /**
   * @param request - QuerySmsPackageSummaryNewRequest
   * @returns QuerySmsPackageSummaryNewResponse
   */
  async querySmsPackageSummaryNew(request: $_model.QuerySmsPackageSummaryNewRequest): Promise<$_model.QuerySmsPackageSummaryNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsPackageSummaryNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsSaasTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsSaasTaskDetailResponse
   */
  async querySmsSaasTaskDetailWithOptions(request: $_model.QuerySmsSaasTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsSaasTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskInstanceId)) {
      query["TaskInstanceId"] = request.taskInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsSaasTaskDetail",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsSaasTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsSaasTaskDetailResponse({}));
  }

  /**
   * @param request - QuerySmsSaasTaskDetailRequest
   * @returns QuerySmsSaasTaskDetailResponse
   */
  async querySmsSaasTaskDetail(request: $_model.QuerySmsSaasTaskDetailRequest): Promise<$_model.QuerySmsSaasTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSaasTaskDetailWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsSaasTaskDetailNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsSaasTaskDetailNewResponse
   */
  async querySmsSaasTaskDetailNewWithOptions(request: $_model.QuerySmsSaasTaskDetailNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsSaasTaskDetailNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsSaasTaskDetailNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsSaasTaskDetailNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsSaasTaskDetailNewResponse({}));
  }

  /**
   * @param request - QuerySmsSaasTaskDetailNewRequest
   * @returns QuerySmsSaasTaskDetailNewResponse
   */
  async querySmsSaasTaskDetailNew(request: $_model.QuerySmsSaasTaskDetailNewRequest): Promise<$_model.QuerySmsSaasTaskDetailNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSaasTaskDetailNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsSaasTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsSaasTaskListResponse
   */
  async querySmsSaasTaskListWithOptions(request: $_model.QuerySmsSaasTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsSaasTaskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsSaasTaskList",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsSaasTaskListResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsSaasTaskListResponse({}));
  }

  /**
   * @param request - QuerySmsSaasTaskListRequest
   * @returns QuerySmsSaasTaskListResponse
   */
  async querySmsSaasTaskList(request: $_model.QuerySmsSaasTaskListRequest): Promise<$_model.QuerySmsSaasTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSaasTaskListWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsSaasTaskListNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsSaasTaskListNewResponse
   */
  async querySmsSaasTaskListNewWithOptions(request: $_model.QuerySmsSaasTaskListNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsSaasTaskListNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsSaasTaskListNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsSaasTaskListNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsSaasTaskListNewResponse({}));
  }

  /**
   * @param request - QuerySmsSaasTaskListNewRequest
   * @returns QuerySmsSaasTaskListNewResponse
   */
  async querySmsSaasTaskListNew(request: $_model.QuerySmsSaasTaskListNewRequest): Promise<$_model.QuerySmsSaasTaskListNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSaasTaskListNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsSendFailDetailsUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsSendFailDetailsUrlResponse
   */
  async querySmsSendFailDetailsUrlWithOptions(request: $_model.QuerySmsSendFailDetailsUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsSendFailDetailsUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sendDate)) {
      query["SendDate"] = request.sendDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsSendFailDetailsUrl",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsSendFailDetailsUrlResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsSendFailDetailsUrlResponse({}));
  }

  /**
   * @param request - QuerySmsSendFailDetailsUrlRequest
   * @returns QuerySmsSendFailDetailsUrlResponse
   */
  async querySmsSendFailDetailsUrl(request: $_model.QuerySmsSendFailDetailsUrlRequest): Promise<$_model.QuerySmsSendFailDetailsUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSendFailDetailsUrlWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsSendFailDetailsUrlNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsSendFailDetailsUrlNewResponse
   */
  async querySmsSendFailDetailsUrlNewWithOptions(request: $_model.QuerySmsSendFailDetailsUrlNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsSendFailDetailsUrlNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sendDate)) {
      query["SendDate"] = request.sendDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsSendFailDetailsUrlNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsSendFailDetailsUrlNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsSendFailDetailsUrlNewResponse({}));
  }

  /**
   * @param request - QuerySmsSendFailDetailsUrlNewRequest
   * @returns QuerySmsSendFailDetailsUrlNewResponse
   */
  async querySmsSendFailDetailsUrlNew(request: $_model.QuerySmsSendFailDetailsUrlNewRequest): Promise<$_model.QuerySmsSendFailDetailsUrlNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSendFailDetailsUrlNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsSignDetailBySignIdNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsSignDetailBySignIdNewResponse
   */
  async querySmsSignDetailBySignIdNewWithOptions(request: $_model.QuerySmsSignDetailBySignIdNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsSignDetailBySignIdNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signGray)) {
      query["SignGray"] = request.signGray;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsSignDetailBySignIdNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsSignDetailBySignIdNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsSignDetailBySignIdNewResponse({}));
  }

  /**
   * @param request - QuerySmsSignDetailBySignIdNewRequest
   * @returns QuerySmsSignDetailBySignIdNewResponse
   */
  async querySmsSignDetailBySignIdNew(request: $_model.QuerySmsSignDetailBySignIdNewRequest): Promise<$_model.QuerySmsSignDetailBySignIdNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSignDetailBySignIdNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsSignLastRangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsSignLastRangeResponse
   */
  async querySmsSignLastRangeWithOptions(request: $_model.QuerySmsSignLastRangeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsSignLastRangeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditState)) {
      query["AuditState"] = request.auditState;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.isGlobeSign)) {
      query["IsGlobeSign"] = request.isGlobeSign;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.needDefaultSign)) {
      query["NeedDefaultSign"] = request.needDefaultSign;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsSignLastRange",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsSignLastRangeResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsSignLastRangeResponse({}));
  }

  /**
   * @param request - QuerySmsSignLastRangeRequest
   * @returns QuerySmsSignLastRangeResponse
   */
  async querySmsSignLastRange(request: $_model.QuerySmsSignLastRangeRequest): Promise<$_model.QuerySmsSignLastRangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSignLastRangeWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsSignLastRangeNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsSignLastRangeNewResponse
   */
  async querySmsSignLastRangeNewWithOptions(request: $_model.QuerySmsSignLastRangeNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsSignLastRangeNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditState)) {
      query["AuditState"] = request.auditState;
    }

    if (!$dara.isNull(request.isGlobeSign)) {
      query["IsGlobeSign"] = request.isGlobeSign;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.needDefaultSign)) {
      query["NeedDefaultSign"] = request.needDefaultSign;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsSignLastRangeNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsSignLastRangeNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsSignLastRangeNewResponse({}));
  }

  /**
   * @param request - QuerySmsSignLastRangeNewRequest
   * @returns QuerySmsSignLastRangeNewResponse
   */
  async querySmsSignLastRangeNew(request: $_model.QuerySmsSignLastRangeNewRequest): Promise<$_model.QuerySmsSignLastRangeNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSignLastRangeNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsSignListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsSignListResponse
   */
  async querySmsSignListWithOptions(request: $_model.QuerySmsSignListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsSignListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditState)) {
      query["AuditState"] = request.auditState;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.isGlobeSign)) {
      query["IsGlobeSign"] = request.isGlobeSign;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsSignList",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsSignListResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsSignListResponse({}));
  }

  /**
   * @param request - QuerySmsSignListRequest
   * @returns QuerySmsSignListResponse
   */
  async querySmsSignList(request: $_model.QuerySmsSignListRequest): Promise<$_model.QuerySmsSignListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSignListWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - QuerySmsSignListNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsSignListNewResponse
   */
  async querySmsSignListNewWithOptions(tmpReq: $_model.QuerySmsSignListNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsSignListNewResponse> {
    tmpReq.validate();
    let request = new $_model.QuerySmsSignListNewShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.operatorCodes)) {
      request.operatorCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operatorCodes, "OperatorCodes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aggregatedRegisterStatus)) {
      query["AggregatedRegisterStatus"] = request.aggregatedRegisterStatus;
    }

    if (!$dara.isNull(request.auditState)) {
      query["AuditState"] = request.auditState;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.isGlobeSign)) {
      query["IsGlobeSign"] = request.isGlobeSign;
    }

    if (!$dara.isNull(request.operatorCodesShrink)) {
      query["OperatorCodes"] = request.operatorCodesShrink;
    }

    if (!$dara.isNull(request.operatorRegisterStatus)) {
      query["OperatorRegisterStatus"] = request.operatorRegisterStatus;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.qualificationName)) {
      query["QualificationName"] = request.qualificationName;
    }

    if (!$dara.isNull(request.registerResult)) {
      query["RegisterResult"] = request.registerResult;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.signSource)) {
      query["SignSource"] = request.signSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsSignListNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsSignListNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsSignListNewResponse({}));
  }

  /**
   * @param request - QuerySmsSignListNewRequest
   * @returns QuerySmsSignListNewResponse
   */
  async querySmsSignListNew(request: $_model.QuerySmsSignListNewRequest): Promise<$_model.QuerySmsSignListNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSignListNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsSignValidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsSignValidResponse
   */
  async querySmsSignValidWithOptions(request: $_model.QuerySmsSignValidRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsSignValidResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsSignValid",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsSignValidResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsSignValidResponse({}));
  }

  /**
   * @param request - QuerySmsSignValidRequest
   * @returns QuerySmsSignValidResponse
   */
  async querySmsSignValid(request: $_model.QuerySmsSignValidRequest): Promise<$_model.QuerySmsSignValidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSignValidWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsSignValidNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsSignValidNewResponse
   */
  async querySmsSignValidNewWithOptions(request: $_model.QuerySmsSignValidNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsSignValidNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.signUpgrade)) {
      query["SignUpgrade"] = request.signUpgrade;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsSignValidNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsSignValidNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsSignValidNewResponse({}));
  }

  /**
   * @param request - QuerySmsSignValidNewRequest
   * @returns QuerySmsSignValidNewResponse
   */
  async querySmsSignValidNew(request: $_model.QuerySmsSignValidNewRequest): Promise<$_model.QuerySmsSignValidNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSignValidNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsStatisticsResponse
   */
  async querySmsStatisticsWithOptions(request: $_model.QuerySmsStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsStatistics",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsStatisticsResponse({}));
  }

  /**
   * @param request - QuerySmsStatisticsRequest
   * @returns QuerySmsStatisticsResponse
   */
  async querySmsStatistics(request: $_model.QuerySmsStatisticsRequest): Promise<$_model.QuerySmsStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsStatisticsWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsStatisticsByTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsStatisticsByTemplateResponse
   */
  async querySmsStatisticsByTemplateWithOptions(request: $_model.QuerySmsStatisticsByTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsStatisticsByTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsStatisticsByTemplate",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsStatisticsByTemplateResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsStatisticsByTemplateResponse({}));
  }

  /**
   * @param request - QuerySmsStatisticsByTemplateRequest
   * @returns QuerySmsStatisticsByTemplateResponse
   */
  async querySmsStatisticsByTemplate(request: $_model.QuerySmsStatisticsByTemplateRequest): Promise<$_model.QuerySmsStatisticsByTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsStatisticsByTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsStatisticsByTemplateNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsStatisticsByTemplateNewResponse
   */
  async querySmsStatisticsByTemplateNewWithOptions(request: $_model.QuerySmsStatisticsByTemplateNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsStatisticsByTemplateNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsStatisticsByTemplateNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsStatisticsByTemplateNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsStatisticsByTemplateNewResponse({}));
  }

  /**
   * @param request - QuerySmsStatisticsByTemplateNewRequest
   * @returns QuerySmsStatisticsByTemplateNewResponse
   */
  async querySmsStatisticsByTemplateNew(request: $_model.QuerySmsStatisticsByTemplateNewRequest): Promise<$_model.QuerySmsStatisticsByTemplateNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsStatisticsByTemplateNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsStatisticsNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsStatisticsNewResponse
   */
  async querySmsStatisticsNewWithOptions(request: $_model.QuerySmsStatisticsNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsStatisticsNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsStatisticsNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsStatisticsNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsStatisticsNewResponse({}));
  }

  /**
   * @param request - QuerySmsStatisticsNewRequest
   * @returns QuerySmsStatisticsNewResponse
   */
  async querySmsStatisticsNew(request: $_model.QuerySmsStatisticsNewRequest): Promise<$_model.QuerySmsStatisticsNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsStatisticsNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsStatisticsUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsStatisticsUrlResponse
   */
  async querySmsStatisticsUrlWithOptions(request: $_model.QuerySmsStatisticsUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsStatisticsUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsStatisticsUrl",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsStatisticsUrlResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsStatisticsUrlResponse({}));
  }

  /**
   * @param request - QuerySmsStatisticsUrlRequest
   * @returns QuerySmsStatisticsUrlResponse
   */
  async querySmsStatisticsUrl(request: $_model.QuerySmsStatisticsUrlRequest): Promise<$_model.QuerySmsStatisticsUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsStatisticsUrlWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsStatisticsUrlNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsStatisticsUrlNewResponse
   */
  async querySmsStatisticsUrlNewWithOptions(request: $_model.QuerySmsStatisticsUrlNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsStatisticsUrlNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsStatisticsUrlNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsStatisticsUrlNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsStatisticsUrlNewResponse({}));
  }

  /**
   * @param request - QuerySmsStatisticsUrlNewRequest
   * @returns QuerySmsStatisticsUrlNewResponse
   */
  async querySmsStatisticsUrlNew(request: $_model.QuerySmsStatisticsUrlNewRequest): Promise<$_model.QuerySmsStatisticsUrlNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsStatisticsUrlNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsStepRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsStepResponse
   */
  async querySmsStepWithOptions(request: $_model.QuerySmsStepRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsStepResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billCycle)) {
      query["BillCycle"] = request.billCycle;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QuerySmsStep",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsStepResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsStepResponse({}));
  }

  /**
   * @param request - QuerySmsStepRequest
   * @returns QuerySmsStepResponse
   */
  async querySmsStep(request: $_model.QuerySmsStepRequest): Promise<$_model.QuerySmsStepResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsStepWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsTemplateByCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsTemplateByCodeResponse
   */
  async querySmsTemplateByCodeWithOptions(request: $_model.QuerySmsTemplateByCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsTemplateByCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsTemplateByCode",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsTemplateByCodeResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsTemplateByCodeResponse({}));
  }

  /**
   * @param request - QuerySmsTemplateByCodeRequest
   * @returns QuerySmsTemplateByCodeResponse
   */
  async querySmsTemplateByCode(request: $_model.QuerySmsTemplateByCodeRequest): Promise<$_model.QuerySmsTemplateByCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsTemplateByCodeWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsTemplateByCodeNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsTemplateByCodeNewResponse
   */
  async querySmsTemplateByCodeNewWithOptions(request: $_model.QuerySmsTemplateByCodeNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsTemplateByCodeNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsTemplateByCodeNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsTemplateByCodeNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsTemplateByCodeNewResponse({}));
  }

  /**
   * @param request - QuerySmsTemplateByCodeNewRequest
   * @returns QuerySmsTemplateByCodeNewResponse
   */
  async querySmsTemplateByCodeNew(request: $_model.QuerySmsTemplateByCodeNewRequest): Promise<$_model.QuerySmsTemplateByCodeNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsTemplateByCodeNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsTemplateLastRangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsTemplateLastRangeResponse
   */
  async querySmsTemplateLastRangeWithOptions(request: $_model.QuerySmsTemplateLastRangeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsTemplateLastRangeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.needDefaultTemplate)) {
      query["NeedDefaultTemplate"] = request.needDefaultTemplate;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsTemplateLastRange",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsTemplateLastRangeResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsTemplateLastRangeResponse({}));
  }

  /**
   * @param request - QuerySmsTemplateLastRangeRequest
   * @returns QuerySmsTemplateLastRangeResponse
   */
  async querySmsTemplateLastRange(request: $_model.QuerySmsTemplateLastRangeRequest): Promise<$_model.QuerySmsTemplateLastRangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsTemplateLastRangeWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsTemplateLastRangeNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsTemplateLastRangeNewResponse
   */
  async querySmsTemplateLastRangeNewWithOptions(request: $_model.QuerySmsTemplateLastRangeNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsTemplateLastRangeNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.filterAnyParam)) {
      query["FilterAnyParam"] = request.filterAnyParam;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.needDefaultTemplate)) {
      query["NeedDefaultTemplate"] = request.needDefaultTemplate;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsTemplateLastRangeNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsTemplateLastRangeNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsTemplateLastRangeNewResponse({}));
  }

  /**
   * @param request - QuerySmsTemplateLastRangeNewRequest
   * @returns QuerySmsTemplateLastRangeNewResponse
   */
  async querySmsTemplateLastRangeNew(request: $_model.QuerySmsTemplateLastRangeNewRequest): Promise<$_model.QuerySmsTemplateLastRangeNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsTemplateLastRangeNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsTemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsTemplateListResponse
   */
  async querySmsTemplateListWithOptions(request: $_model.QuerySmsTemplateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsTemplateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditState)) {
      query["AuditState"] = request.auditState;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodType)) {
      query["ProdType"] = request.prodType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsTemplateList",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsTemplateListResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsTemplateListResponse({}));
  }

  /**
   * @param request - QuerySmsTemplateListRequest
   * @returns QuerySmsTemplateListResponse
   */
  async querySmsTemplateList(request: $_model.QuerySmsTemplateListRequest): Promise<$_model.QuerySmsTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsTemplateListWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsTemplateListNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsTemplateListNewResponse
   */
  async querySmsTemplateListNewWithOptions(request: $_model.QuerySmsTemplateListNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsTemplateListNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditState)) {
      query["AuditState"] = request.auditState;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.intlType)) {
      query["IntlType"] = request.intlType;
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

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.prodType)) {
      query["ProdType"] = request.prodType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tagListString)) {
      query["TagListString"] = request.tagListString;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsTemplateListNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsTemplateListNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsTemplateListNewResponse({}));
  }

  /**
   * @param request - QuerySmsTemplateListNewRequest
   * @returns QuerySmsTemplateListNewResponse
   */
  async querySmsTemplateListNew(request: $_model.QuerySmsTemplateListNewRequest): Promise<$_model.QuerySmsTemplateListNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsTemplateListNewWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsUserTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsUserTagsResponse
   */
  async querySmsUserTagsWithOptions(request: $_model.QuerySmsUserTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsUserTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QuerySmsUserTags",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsUserTagsResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsUserTagsResponse({}));
  }

  /**
   * @param request - QuerySmsUserTagsRequest
   * @returns QuerySmsUserTagsResponse
   */
  async querySmsUserTags(request: $_model.QuerySmsUserTagsRequest): Promise<$_model.QuerySmsUserTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsUserTagsWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySmsUserTagsNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsUserTagsNewResponse
   */
  async querySmsUserTagsNewWithOptions(request: $_model.QuerySmsUserTagsNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsUserTagsNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QuerySmsUserTagsNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsUserTagsNewResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsUserTagsNewResponse({}));
  }

  /**
   * @param request - QuerySmsUserTagsNewRequest
   * @returns QuerySmsUserTagsNewResponse
   */
  async querySmsUserTagsNew(request: $_model.QuerySmsUserTagsNewRequest): Promise<$_model.QuerySmsUserTagsNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsUserTagsNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryStandarTemplateCollectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryStandarTemplateCollectionsResponse
   */
  async queryStandarTemplateCollectionsWithOptions(request: $_model.QueryStandarTemplateCollectionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryStandarTemplateCollectionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateContent)) {
      query["TemplateContent"] = request.templateContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryStandarTemplateCollections",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryStandarTemplateCollectionsResponse>(await this.callApi(params, req, runtime), new $_model.QueryStandarTemplateCollectionsResponse({}));
  }

  /**
   * @param request - QueryStandarTemplateCollectionsRequest
   * @returns QueryStandarTemplateCollectionsResponse
   */
  async queryStandarTemplateCollections(request: $_model.QueryStandarTemplateCollectionsRequest): Promise<$_model.QueryStandarTemplateCollectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryStandarTemplateCollectionsWithOptions(request, runtime);
  }

  /**
   * @param request - QueryStandarTemplateCollectionsNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryStandarTemplateCollectionsNewResponse
   */
  async queryStandarTemplateCollectionsNewWithOptions(request: $_model.QueryStandarTemplateCollectionsNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryStandarTemplateCollectionsNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateContent)) {
      query["TemplateContent"] = request.templateContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryStandarTemplateCollectionsNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryStandarTemplateCollectionsNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryStandarTemplateCollectionsNewResponse({}));
  }

  /**
   * @param request - QueryStandarTemplateCollectionsNewRequest
   * @returns QueryStandarTemplateCollectionsNewResponse
   */
  async queryStandarTemplateCollectionsNew(request: $_model.QueryStandarTemplateCollectionsNewRequest): Promise<$_model.QueryStandarTemplateCollectionsNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryStandarTemplateCollectionsNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryStandardProtocolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryStandardProtocolResponse
   */
  async queryStandardProtocolWithOptions(request: $_model.QueryStandardProtocolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryStandardProtocolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
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
      action: "QueryStandardProtocol",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryStandardProtocolResponse>(await this.callApi(params, req, runtime), new $_model.QueryStandardProtocolResponse({}));
  }

  /**
   * @param request - QueryStandardProtocolRequest
   * @returns QueryStandardProtocolResponse
   */
  async queryStandardProtocol(request: $_model.QueryStandardProtocolRequest): Promise<$_model.QueryStandardProtocolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryStandardProtocolWithOptions(request, runtime);
  }

  /**
   * @param request - QueryStandardProtocolListNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryStandardProtocolListNewResponse
   */
  async queryStandardProtocolListNewWithOptions(request: $_model.QueryStandardProtocolListNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryStandardProtocolListNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
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
      action: "QueryStandardProtocolListNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryStandardProtocolListNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryStandardProtocolListNewResponse({}));
  }

  /**
   * @param request - QueryStandardProtocolListNewRequest
   * @returns QueryStandardProtocolListNewResponse
   */
  async queryStandardProtocolListNew(request: $_model.QueryStandardProtocolListNewRequest): Promise<$_model.QueryStandardProtocolListNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryStandardProtocolListNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTagResourcesResponse
   */
  async queryTagResourcesWithOptions(request: $_model.QueryTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      action: "QueryTagResources",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.QueryTagResourcesResponse({}));
  }

  /**
   * @param request - QueryTagResourcesRequest
   * @returns QueryTagResourcesResponse
   */
  async queryTagResources(request: $_model.QueryTagResourcesRequest): Promise<$_model.QueryTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTagResourcesNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTagResourcesNewResponse
   */
  async queryTagResourcesNewWithOptions(request: $_model.QueryTagResourcesNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTagResourcesNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceIdListString)) {
      query["ResourceIdListString"] = request.resourceIdListString;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.tagListString)) {
      query["TagListString"] = request.tagListString;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTagResourcesNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTagResourcesNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryTagResourcesNewResponse({}));
  }

  /**
   * @param request - QueryTagResourcesNewRequest
   * @returns QueryTagResourcesNewResponse
   */
  async queryTagResourcesNew(request: $_model.QueryTagResourcesNewRequest): Promise<$_model.QueryTagResourcesNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTagResourcesNewWithOptions(request, runtime);
  }

  /**
   * 发送效果统计
   * 
   * @param request - QueryTmpEffectReportDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTmpEffectReportDataResponse
   */
  async queryTmpEffectReportDataWithOptions(request: $_model.QueryTmpEffectReportDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTmpEffectReportDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.tmpCode)) {
      query["TmpCode"] = request.tmpCode;
    }

    if (!$dara.isNull(request.tmpName)) {
      query["TmpName"] = request.tmpName;
    }

    if (!$dara.isNull(request.vendorCode)) {
      query["VendorCode"] = request.vendorCode;
    }

    if (!$dara.isNull(request.vendorName)) {
      query["VendorName"] = request.vendorName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTmpEffectReportData",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTmpEffectReportDataResponse>(await this.callApi(params, req, runtime), new $_model.QueryTmpEffectReportDataResponse({}));
  }

  /**
   * 发送效果统计
   * 
   * @param request - QueryTmpEffectReportDataRequest
   * @returns QueryTmpEffectReportDataResponse
   */
  async queryTmpEffectReportData(request: $_model.QueryTmpEffectReportDataRequest): Promise<$_model.QueryTmpEffectReportDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTmpEffectReportDataWithOptions(request, runtime);
  }

  /**
   * 发送效果统计-日报
   * 
   * @param request - QueryTmpEffectReportDayDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTmpEffectReportDayDataResponse
   */
  async queryTmpEffectReportDayDataWithOptions(request: $_model.QueryTmpEffectReportDayDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTmpEffectReportDayDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.tmpCode)) {
      query["TmpCode"] = request.tmpCode;
    }

    if (!$dara.isNull(request.tmpName)) {
      query["TmpName"] = request.tmpName;
    }

    if (!$dara.isNull(request.vendorName)) {
      query["VendorName"] = request.vendorName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTmpEffectReportDayData",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTmpEffectReportDayDataResponse>(await this.callApi(params, req, runtime), new $_model.QueryTmpEffectReportDayDataResponse({}));
  }

  /**
   * 发送效果统计-日报
   * 
   * @param request - QueryTmpEffectReportDayDataRequest
   * @returns QueryTmpEffectReportDayDataResponse
   */
  async queryTmpEffectReportDayData(request: $_model.QueryTmpEffectReportDayDataRequest): Promise<$_model.QueryTmpEffectReportDayDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTmpEffectReportDayDataWithOptions(request, runtime);
  }

  /**
   * @param request - QueryUsertagExistenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUsertagExistenceResponse
   */
  async queryUsertagExistenceWithOptions(request: $_model.QueryUsertagExistenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUsertagExistenceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.usertagPosition)) {
      query["UsertagPosition"] = request.usertagPosition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUsertagExistence",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUsertagExistenceResponse>(await this.callApi(params, req, runtime), new $_model.QueryUsertagExistenceResponse({}));
  }

  /**
   * @param request - QueryUsertagExistenceRequest
   * @returns QueryUsertagExistenceResponse
   */
  async queryUsertagExistence(request: $_model.QueryUsertagExistenceRequest): Promise<$_model.QueryUsertagExistenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUsertagExistenceWithOptions(request, runtime);
  }

  /**
   * @param request - QueryWarningThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWarningThresholdResponse
   */
  async queryWarningThresholdWithOptions(request: $_model.QueryWarningThresholdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryWarningThresholdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryWarningThreshold",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryWarningThresholdResponse>(await this.callApi(params, req, runtime), new $_model.QueryWarningThresholdResponse({}));
  }

  /**
   * @param request - QueryWarningThresholdRequest
   * @returns QueryWarningThresholdResponse
   */
  async queryWarningThreshold(request: $_model.QueryWarningThresholdRequest): Promise<$_model.QueryWarningThresholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWarningThresholdWithOptions(request, runtime);
  }

  /**
   * @param request - QueryWarningThresholdNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWarningThresholdNewResponse
   */
  async queryWarningThresholdNewWithOptions(request: $_model.QueryWarningThresholdNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryWarningThresholdNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryWarningThresholdNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryWarningThresholdNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryWarningThresholdNewResponse({}));
  }

  /**
   * @param request - QueryWarningThresholdNewRequest
   * @returns QueryWarningThresholdNewResponse
   */
  async queryWarningThresholdNew(request: $_model.QueryWarningThresholdNewRequest): Promise<$_model.QueryWarningThresholdNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWarningThresholdNewWithOptions(request, runtime);
  }

  /**
   * @param request - QueryWorkOrdAuditListNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWorkOrdAuditListNewResponse
   */
  async queryWorkOrdAuditListNewWithOptions(request: $_model.QueryWorkOrdAuditListNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryWorkOrdAuditListNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
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
      action: "QueryWorkOrdAuditListNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryWorkOrdAuditListNewResponse>(await this.callApi(params, req, runtime), new $_model.QueryWorkOrdAuditListNewResponse({}));
  }

  /**
   * @param request - QueryWorkOrdAuditListNewRequest
   * @returns QueryWorkOrdAuditListNewResponse
   */
  async queryWorkOrdAuditListNew(request: $_model.QueryWorkOrdAuditListNewRequest): Promise<$_model.QueryWorkOrdAuditListNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWorkOrdAuditListNewWithOptions(request, runtime);
  }

  /**
   * @param request - SaveContactsNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveContactsNewResponse
   */
  async saveContactsNewWithOptions(request: $_model.SaveContactsNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveContactsNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.openPkgWarning)) {
      query["OpenPkgWarning"] = request.openPkgWarning;
    }

    if (!$dara.isNull(request.openPreventBrushWarning)) {
      query["OpenPreventBrushWarning"] = request.openPreventBrushWarning;
    }

    if (!$dara.isNull(request.openSendWarning)) {
      query["OpenSendWarning"] = request.openSendWarning;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.receiveSignTemplateAuditResult)) {
      query["ReceiveSignTemplateAuditResult"] = request.receiveSignTemplateAuditResult;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.verificationCode)) {
      query["VerificationCode"] = request.verificationCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveContactsNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveContactsNewResponse>(await this.callApi(params, req, runtime), new $_model.SaveContactsNewResponse({}));
  }

  /**
   * @param request - SaveContactsNewRequest
   * @returns SaveContactsNewResponse
   */
  async saveContactsNew(request: $_model.SaveContactsNewRequest): Promise<$_model.SaveContactsNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveContactsNewWithOptions(request, runtime);
  }

  /**
   * @param request - SaveLearningStatusNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveLearningStatusNewResponse
   */
  async saveLearningStatusNewWithOptions(request: $_model.SaveLearningStatusNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveLearningStatusNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveLearningStatusNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveLearningStatusNewResponse>(await this.callApi(params, req, runtime), new $_model.SaveLearningStatusNewResponse({}));
  }

  /**
   * @param request - SaveLearningStatusNewRequest
   * @returns SaveLearningStatusNewResponse
   */
  async saveLearningStatusNew(request: $_model.SaveLearningStatusNewRequest): Promise<$_model.SaveLearningStatusNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveLearningStatusNewWithOptions(request, runtime);
  }

  /**
   * @param request - SelectTagResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectTagResourceResponse
   */
  async selectTagResourceWithOptions(request: $_model.SelectTagResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SelectTagResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!$dara.isNull(request.tagValue)) {
      query["TagValue"] = request.tagValue;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SelectTagResource",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SelectTagResourceResponse>(await this.callApi(params, req, runtime), new $_model.SelectTagResourceResponse({}));
  }

  /**
   * @param request - SelectTagResourceRequest
   * @returns SelectTagResourceResponse
   */
  async selectTagResource(request: $_model.SelectTagResourceRequest): Promise<$_model.SelectTagResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.selectTagResourceWithOptions(request, runtime);
  }

  /**
   * @param request - SelectTagResourceNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectTagResourceNewResponse
   */
  async selectTagResourceNewWithOptions(request: $_model.SelectTagResourceNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SelectTagResourceNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!$dara.isNull(request.tagValue)) {
      query["TagValue"] = request.tagValue;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SelectTagResourceNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SelectTagResourceNewResponse>(await this.callApi(params, req, runtime), new $_model.SelectTagResourceNewResponse({}));
  }

  /**
   * @param request - SelectTagResourceNewRequest
   * @returns SelectTagResourceNewResponse
   */
  async selectTagResourceNew(request: $_model.SelectTagResourceNewRequest): Promise<$_model.SelectTagResourceNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.selectTagResourceNewWithOptions(request, runtime);
  }

  /**
   * @param request - SendSmsTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendSmsTestResponse
   */
  async sendSmsTestWithOptions(request: $_model.SendSmsTestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendSmsTestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ncToken)) {
      query["NcToken"] = request.ncToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.remoteIp)) {
      query["RemoteIp"] = request.remoteIp;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sig)) {
      query["Sig"] = request.sig;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateParam)) {
      query["TemplateParam"] = request.templateParam;
    }

    if (!$dara.isNull(request.testType)) {
      query["TestType"] = request.testType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendSmsTest",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendSmsTestResponse>(await this.callApi(params, req, runtime), new $_model.SendSmsTestResponse({}));
  }

  /**
   * @param request - SendSmsTestRequest
   * @returns SendSmsTestResponse
   */
  async sendSmsTest(request: $_model.SendSmsTestRequest): Promise<$_model.SendSmsTestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendSmsTestWithOptions(request, runtime);
  }

  /**
   * @param request - SendSmsTestNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendSmsTestNewResponse
   */
  async sendSmsTestNewWithOptions(request: $_model.SendSmsTestNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendSmsTestNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ncToken)) {
      query["NcToken"] = request.ncToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.remoteIp)) {
      query["RemoteIp"] = request.remoteIp;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sig)) {
      query["Sig"] = request.sig;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateParam)) {
      query["TemplateParam"] = request.templateParam;
    }

    if (!$dara.isNull(request.testType)) {
      query["TestType"] = request.testType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendSmsTestNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendSmsTestNewResponse>(await this.callApi(params, req, runtime), new $_model.SendSmsTestNewResponse({}));
  }

  /**
   * @param request - SendSmsTestNewRequest
   * @returns SendSmsTestNewResponse
   */
  async sendSmsTestNew(request: $_model.SendSmsTestNewRequest): Promise<$_model.SendSmsTestNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendSmsTestNewWithOptions(request, runtime);
  }

  /**
   * @param request - SendVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendVerificationResponse
   */
  async sendVerificationWithOptions(request: $_model.SendVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.verifyType)) {
      query["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendVerification",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendVerificationResponse>(await this.callApi(params, req, runtime), new $_model.SendVerificationResponse({}));
  }

  /**
   * @param request - SendVerificationRequest
   * @returns SendVerificationResponse
   */
  async sendVerification(request: $_model.SendVerificationRequest): Promise<$_model.SendVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendVerificationWithOptions(request, runtime);
  }

  /**
   * @param request - SendVerificationNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendVerificationNewResponse
   */
  async sendVerificationNewWithOptions(request: $_model.SendVerificationNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendVerificationNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.verifyType)) {
      query["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendVerificationNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendVerificationNewResponse>(await this.callApi(params, req, runtime), new $_model.SendVerificationNewResponse({}));
  }

  /**
   * @param request - SendVerificationNewRequest
   * @returns SendVerificationNewResponse
   */
  async sendVerificationNew(request: $_model.SendVerificationNewRequest): Promise<$_model.SendVerificationNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendVerificationNewWithOptions(request, runtime);
  }

  /**
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      version: "2017-06-20",
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
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - TagResourcesNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesNewResponse
   */
  async tagResourcesNewWithOptions(request: $_model.TagResourcesNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceIdListString)) {
      query["ResourceIdListString"] = request.resourceIdListString;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.tagListString)) {
      query["TagListString"] = request.tagListString;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResourcesNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesNewResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesNewResponse({}));
  }

  /**
   * @param request - TagResourcesNewRequest
   * @returns TagResourcesNewResponse
   */
  async tagResourcesNew(request: $_model.TagResourcesNewRequest): Promise<$_model.TagResourcesNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesNewWithOptions(request, runtime);
  }

  /**
   * @param request - TagResourcesSystemTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesSystemTagsResponse
   */
  async tagResourcesSystemTagsWithOptions(request: $_model.TagResourcesSystemTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesSystemTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.tagOwnerUid)) {
      query["TagOwnerUid"] = request.tagOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResourcesSystemTags",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesSystemTagsResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesSystemTagsResponse({}));
  }

  /**
   * @param request - TagResourcesSystemTagsRequest
   * @returns TagResourcesSystemTagsResponse
   */
  async tagResourcesSystemTags(request: $_model.TagResourcesSystemTagsRequest): Promise<$_model.TagResourcesSystemTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesSystemTagsWithOptions(request, runtime);
  }

  /**
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

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2017-06-20",
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
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - UntagResourcesNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesNewResponse
   */
  async untagResourcesNewWithOptions(request: $_model.UntagResourcesNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceIdListString)) {
      query["ResourceIdListString"] = request.resourceIdListString;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagListString)) {
      query["TagListString"] = request.tagListString;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResourcesNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesNewResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesNewResponse({}));
  }

  /**
   * @param request - UntagResourcesNewRequest
   * @returns UntagResourcesNewResponse
   */
  async untagResourcesNew(request: $_model.UntagResourcesNewRequest): Promise<$_model.UntagResourcesNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesNewWithOptions(request, runtime);
  }

  /**
   * @param request - UntagResourcesSystemTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesSystemTagsResponse
   */
  async untagResourcesSystemTagsWithOptions(request: $_model.UntagResourcesSystemTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesSystemTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!$dara.isNull(request.tagOwnerUid)) {
      query["TagOwnerUid"] = request.tagOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResourcesSystemTags",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesSystemTagsResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesSystemTagsResponse({}));
  }

  /**
   * @param request - UntagResourcesSystemTagsRequest
   * @returns UntagResourcesSystemTagsResponse
   */
  async untagResourcesSystemTags(request: $_model.UntagResourcesSystemTagsRequest): Promise<$_model.UntagResourcesSystemTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesSystemTagsWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateIpWhiteListNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIpWhiteListNewResponse
   */
  async updateIpWhiteListNewWithOptions(request: $_model.UpdateIpWhiteListNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIpWhiteListNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.featureCode)) {
      query["FeatureCode"] = request.featureCode;
    }

    if (!$dara.isNull(request.ipWhiteList)) {
      query["IpWhiteList"] = request.ipWhiteList;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.realNameInsId)) {
      query["RealNameInsId"] = request.realNameInsId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIpWhiteListNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIpWhiteListNewResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIpWhiteListNewResponse({}));
  }

  /**
   * @param request - UpdateIpWhiteListNewRequest
   * @returns UpdateIpWhiteListNewResponse
   */
  async updateIpWhiteListNew(request: $_model.UpdateIpWhiteListNewRequest): Promise<$_model.UpdateIpWhiteListNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIpWhiteListNewWithOptions(request, runtime);
  }

  /**
   * @param request - UpdatePartnerTemplateNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePartnerTemplateNewResponse
   */
  async updatePartnerTemplateNewWithOptions(request: $_model.UpdatePartnerTemplateNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePartnerTemplateNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePartnerTemplateNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePartnerTemplateNewResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePartnerTemplateNewResponse({}));
  }

  /**
   * @param request - UpdatePartnerTemplateNewRequest
   * @returns UpdatePartnerTemplateNewResponse
   */
  async updatePartnerTemplateNew(request: $_model.UpdatePartnerTemplateNewRequest): Promise<$_model.UpdatePartnerTemplateNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePartnerTemplateNewWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateSlsStatusNewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSlsStatusNewResponse
   */
  async updateSlsStatusNewWithOptions(request: $_model.UpdateSlsStatusNewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSlsStatusNewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authStatus)) {
      query["AuthStatus"] = request.authStatus;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.saveTime)) {
      query["SaveTime"] = request.saveTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSlsStatusNew",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSlsStatusNewResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSlsStatusNewResponse({}));
  }

  /**
   * @param request - UpdateSlsStatusNewRequest
   * @returns UpdateSlsStatusNewResponse
   */
  async updateSlsStatusNew(request: $_model.UpdateSlsStatusNewRequest): Promise<$_model.UpdateSlsStatusNewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSlsStatusNewWithOptions(request, runtime);
  }

  /**
   * 上传卡片素材并获取素材id
   * 
   * @param request - UploadCardResRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadCardResResponse
   */
  async uploadCardResWithOptions(request: $_model.UploadCardResRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadCardResResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!$dara.isNull(request.callerType)) {
      query["CallerType"] = request.callerType;
    }

    if (!$dara.isNull(request.callerUid)) {
      query["CallerUid"] = request.callerUid;
    }

    if (!$dara.isNull(request.extendInfo)) {
      query["ExtendInfo"] = request.extendInfo;
    }

    if (!$dara.isNull(request.fileSize)) {
      query["FileSize"] = request.fileSize;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.memo)) {
      query["Memo"] = request.memo;
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

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadCardRes",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadCardResResponse>(await this.callApi(params, req, runtime), new $_model.UploadCardResResponse({}));
  }

  /**
   * 上传卡片素材并获取素材id
   * 
   * @param request - UploadCardResRequest
   * @returns UploadCardResResponse
   */
  async uploadCardRes(request: $_model.UploadCardResRequest): Promise<$_model.UploadCardResResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadCardResWithOptions(request, runtime);
  }

  /**
   * 上传动参图片素材
   * 
   * @param request - UploadCardResWithDyncParamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadCardResWithDyncParamResponse
   */
  async uploadCardResWithDyncParamWithOptions(request: $_model.UploadCardResWithDyncParamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadCardResWithDyncParamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dynamicParam)) {
      query["DynamicParam"] = request.dynamicParam;
    }

    if (!$dara.isNull(request.expiredTimes)) {
      query["ExpiredTimes"] = request.expiredTimes;
    }

    if (!$dara.isNull(request.fileSize)) {
      query["FileSize"] = request.fileSize;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.memo)) {
      query["Memo"] = request.memo;
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

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadCardResWithDyncParam",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadCardResWithDyncParamResponse>(await this.callApi(params, req, runtime), new $_model.UploadCardResWithDyncParamResponse({}));
  }

  /**
   * 上传动参图片素材
   * 
   * @param request - UploadCardResWithDyncParamRequest
   * @returns UploadCardResWithDyncParamResponse
   */
  async uploadCardResWithDyncParam(request: $_model.UploadCardResWithDyncParamRequest): Promise<$_model.UploadCardResWithDyncParamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadCardResWithDyncParamWithOptions(request, runtime);
  }

  /**
   * @param request - ValidatYunSmsIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidatYunSmsIdResponse
   */
  async validatYunSmsIdWithOptions(request: $_model.ValidatYunSmsIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidatYunSmsIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.data)) {
      query["data"] = request.data;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidatYunSmsId",
      version: "2017-06-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidatYunSmsIdResponse>(await this.callApi(params, req, runtime), new $_model.ValidatYunSmsIdResponse({}));
  }

  /**
   * @param request - ValidatYunSmsIdRequest
   * @returns ValidatYunSmsIdResponse
   */
  async validatYunSmsId(request: $_model.ValidatYunSmsIdRequest): Promise<$_model.ValidatYunSmsIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validatYunSmsIdWithOptions(request, runtime);
  }

}
