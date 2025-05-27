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
      'ap-southeast-1': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "dysmsapi.ap-southeast-5.aliyuncs.com",
      'cn-beijing': "dysmsapi-proxy.cn-beijing.aliyuncs.com",
      'cn-hongkong': "dysmsapi-xman.cn-hongkong.aliyuncs.com",
      'eu-central-1': "dysmsapi.eu-central-1.aliyuncs.com",
      'us-east-1': "dysmsapi.us-east-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dysmsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加验证码签名信息
   * 
   * @param request - AddExtCodeSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddExtCodeSignResponse
   */
  async addExtCodeSignWithOptions(request: $_model.AddExtCodeSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddExtCodeSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extCode)) {
      query["ExtCode"] = request.extCode;
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

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddExtCodeSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddExtCodeSignResponse>(await this.callApi(params, req, runtime), new $_model.AddExtCodeSignResponse({}));
  }

  /**
   * 添加验证码签名信息
   * 
   * @param request - AddExtCodeSignRequest
   * @returns AddExtCodeSignResponse
   */
  async addExtCodeSign(request: $_model.AddExtCodeSignRequest): Promise<$_model.AddExtCodeSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addExtCodeSignWithOptions(request, runtime);
  }

  /**
   * Creates a short URL.
   * 
   * @remarks
   *   Before you call this operation, you must register the primary domain name of the source URL in the Short Message Service (SMS) console. After the domain name is registered, you can call this operation to create a short URL. For more information, see [Domain name registration](https://help.aliyun.com/document_detail/302325.html#title-mau-zdh-hd0).
   * *   You can create up to 3,000 short URLs within a natural day.
   * *   After a short URL is generated, a security review is required. Generally, the review takes 10 minutes to 2 hours to complete. Before the security review is passed, the short URL cannot be directly accessed.
   * 
   * @param request - AddShortUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddShortUrlResponse
   */
  async addShortUrlWithOptions(request: $_model.AddShortUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddShortUrlResponse> {
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
    if (!$dara.isNull(request.effectiveDays)) {
      body["EffectiveDays"] = request.effectiveDays;
    }

    if (!$dara.isNull(request.shortUrlName)) {
      body["ShortUrlName"] = request.shortUrlName;
    }

    if (!$dara.isNull(request.sourceUrl)) {
      body["SourceUrl"] = request.sourceUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddShortUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddShortUrlResponse>(await this.callApi(params, req, runtime), new $_model.AddShortUrlResponse({}));
  }

  /**
   * Creates a short URL.
   * 
   * @remarks
   *   Before you call this operation, you must register the primary domain name of the source URL in the Short Message Service (SMS) console. After the domain name is registered, you can call this operation to create a short URL. For more information, see [Domain name registration](https://help.aliyun.com/document_detail/302325.html#title-mau-zdh-hd0).
   * *   You can create up to 3,000 short URLs within a natural day.
   * *   After a short URL is generated, a security review is required. Generally, the review takes 10 minutes to 2 hours to complete. Before the security review is passed, the short URL cannot be directly accessed.
   * 
   * @param request - AddShortUrlRequest
   * @returns AddShortUrlResponse
   */
  async addShortUrl(request: $_model.AddShortUrlRequest): Promise<$_model.AddShortUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addShortUrlWithOptions(request, runtime);
  }

  /**
   * Creates a signature.
   * 
   * @remarks
   * You can call the AddSmsSign operation or use the [Short Message Service (SMS) console](https://dysms.console.aliyun.com/dysms.htm#/overview) to create an SMS signature. The signature must comply with the [SMS signature specifications](https://help.aliyun.com/document_detail/108076.html). You can call the QuerySmsSign operation or use the SMS console to query the review status of the signature.
   * For more information, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limit
   * You can call this operation only once per second. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * > 
   * *   You cannot cancel the review of a signature.
   * *   Individual users can create only one verification code signature, and can create only one general-purpose signature within a natural day. If you need to apply for multiple signatures, we recommend that you upgrade your account to an enterprise user.
   * *   If you need to use the same signature for messages sent to recipients both in and outside the Chinese mainland, the signature must be a general-purpose signature.
   * *   If you apply for a signature or message template, you must specify the signature scenario or template type. You must also provide the information of your services, such as a website URL, a domain name with an ICP filing, an application download URL, or the name of your WeChat official account or mini program. For sign-in scenarios, you must also provide an account and password for tests. A detailed description can improve the review efficiency of signatures and templates.
   * *   An SMS signature must undergo a thorough review process before it can be approved for use.
   * 
   * @param request - AddSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSmsSignResponse
   */
  async addSmsSignWithOptions(request: $_model.AddSmsSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSmsSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.signSource)) {
      query["SignSource"] = request.signSource;
    }

    if (!$dara.isNull(request.signType)) {
      query["SignType"] = request.signType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.signFileList)) {
      body["SignFileList"] = request.signFileList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSmsSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSmsSignResponse>(await this.callApi(params, req, runtime), new $_model.AddSmsSignResponse({}));
  }

  /**
   * Creates a signature.
   * 
   * @remarks
   * You can call the AddSmsSign operation or use the [Short Message Service (SMS) console](https://dysms.console.aliyun.com/dysms.htm#/overview) to create an SMS signature. The signature must comply with the [SMS signature specifications](https://help.aliyun.com/document_detail/108076.html). You can call the QuerySmsSign operation or use the SMS console to query the review status of the signature.
   * For more information, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limit
   * You can call this operation only once per second. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * > 
   * *   You cannot cancel the review of a signature.
   * *   Individual users can create only one verification code signature, and can create only one general-purpose signature within a natural day. If you need to apply for multiple signatures, we recommend that you upgrade your account to an enterprise user.
   * *   If you need to use the same signature for messages sent to recipients both in and outside the Chinese mainland, the signature must be a general-purpose signature.
   * *   If you apply for a signature or message template, you must specify the signature scenario or template type. You must also provide the information of your services, such as a website URL, a domain name with an ICP filing, an application download URL, or the name of your WeChat official account or mini program. For sign-in scenarios, you must also provide an account and password for tests. A detailed description can improve the review efficiency of signatures and templates.
   * *   An SMS signature must undergo a thorough review process before it can be approved for use.
   * 
   * @param request - AddSmsSignRequest
   * @returns AddSmsSignResponse
   */
  async addSmsSign(request: $_model.AddSmsSignRequest): Promise<$_model.AddSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSmsSignWithOptions(request, runtime);
  }

  /**
   * Creates a message template.
   * 
   * @remarks
   * You can call the operation or use the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview) to apply for a message template. The template must comply with the [message template specifications](https://help.aliyun.com/document_detail/108253.html). You can call the [QuerySmsTemplate](https://help.aliyun.com/document_detail/419289.html) operation or use the Alibaba Cloud SMS console to check whether the message template is approved.
   * > 
   * *   Message templates pending approval can be withdrawn. You can withdraw a message template pending approval on the Message Templates tab in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview).
   * *   Message templates that have been approved can be deleted, and cannot be modified. You can delete a message template pending approval on the Message Templates tab in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview).
   * *   If you call the AddSmsTemplate operation, you can apply for a maximum of 100 message templates in a calendar day. After you apply for a message template, we recommend that you wait for at least 30 seconds before you apply for another one. If you use the Alibaba Cloud SMS console, you can apply for an unlimited number of message templates.
   * *   Messages sent to the Chinese mainland and messages sent to countries or regions outside the Chinese mainland use separate message templates. Create message templates based on your needs.
   * *   If you apply for a signature or message template, you must specify the signature scenario or template type. You must also provide the information of your services, such as a website URL, a domain name with an ICP filing, an application download URL, or the name of your WeChat official account or mini program. For sign-in scenarios, you must also provide an account and password for tests. A detailed description can improve the review efficiency of signatures and templates.
   * *   A signature must undergo a thorough review process before it can be approved for use. For more information, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @deprecated OpenAPI AddSmsTemplate is deprecated, please use Dysmsapi::2017-05-25::CreateSmsTemplate instead.
   * 
   * @param request - AddSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSmsTemplateResponse
   */
  // Deprecated
  async addSmsTemplateWithOptions(request: $_model.AddSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSmsTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSmsTemplateResponse>(await this.callApi(params, req, runtime), new $_model.AddSmsTemplateResponse({}));
  }

  /**
   * Creates a message template.
   * 
   * @remarks
   * You can call the operation or use the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview) to apply for a message template. The template must comply with the [message template specifications](https://help.aliyun.com/document_detail/108253.html). You can call the [QuerySmsTemplate](https://help.aliyun.com/document_detail/419289.html) operation or use the Alibaba Cloud SMS console to check whether the message template is approved.
   * > 
   * *   Message templates pending approval can be withdrawn. You can withdraw a message template pending approval on the Message Templates tab in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview).
   * *   Message templates that have been approved can be deleted, and cannot be modified. You can delete a message template pending approval on the Message Templates tab in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview).
   * *   If you call the AddSmsTemplate operation, you can apply for a maximum of 100 message templates in a calendar day. After you apply for a message template, we recommend that you wait for at least 30 seconds before you apply for another one. If you use the Alibaba Cloud SMS console, you can apply for an unlimited number of message templates.
   * *   Messages sent to the Chinese mainland and messages sent to countries or regions outside the Chinese mainland use separate message templates. Create message templates based on your needs.
   * *   If you apply for a signature or message template, you must specify the signature scenario or template type. You must also provide the information of your services, such as a website URL, a domain name with an ICP filing, an application download URL, or the name of your WeChat official account or mini program. For sign-in scenarios, you must also provide an account and password for tests. A detailed description can improve the review efficiency of signatures and templates.
   * *   A signature must undergo a thorough review process before it can be approved for use. For more information, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @deprecated OpenAPI AddSmsTemplate is deprecated, please use Dysmsapi::2017-05-25::CreateSmsTemplate instead.
   * 
   * @param request - AddSmsTemplateRequest
   * @returns AddSmsTemplateResponse
   */
  // Deprecated
  async addSmsTemplate(request: $_model.AddSmsTemplateRequest): Promise<$_model.AddSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSmsTemplateWithOptions(request, runtime);
  }

  /**
   * 更换签名的资质和授权书
   * 
   * @param request - ChangeSignatureQualificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeSignatureQualificationResponse
   */
  async changeSignatureQualificationWithOptions(request: $_model.ChangeSignatureQualificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeSignatureQualificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorizationLetterId)) {
      query["AuthorizationLetterId"] = request.authorizationLetterId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!$dara.isNull(request.signatureName)) {
      query["SignatureName"] = request.signatureName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeSignatureQualification",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeSignatureQualificationResponse>(await this.callApi(params, req, runtime), new $_model.ChangeSignatureQualificationResponse({}));
  }

  /**
   * 更换签名的资质和授权书
   * 
   * @param request - ChangeSignatureQualificationRequest
   * @returns ChangeSignatureQualificationResponse
   */
  async changeSignatureQualification(request: $_model.ChangeSignatureQualificationRequest): Promise<$_model.ChangeSignatureQualificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeSignatureQualificationWithOptions(request, runtime);
  }

  /**
   * Checks whether a mobile phone number can receive card messages.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 2,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CheckMobilesCardSupportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckMobilesCardSupportResponse
   */
  async checkMobilesCardSupportWithOptions(request: $_model.CheckMobilesCardSupportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckMobilesCardSupportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mobiles)) {
      query["Mobiles"] = request.mobiles;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckMobilesCardSupport",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckMobilesCardSupportResponse>(await this.callApi(params, req, runtime), new $_model.CheckMobilesCardSupportResponse({}));
  }

  /**
   * Checks whether a mobile phone number can receive card messages.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 2,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CheckMobilesCardSupportRequest
   * @returns CheckMobilesCardSupportResponse
   */
  async checkMobilesCardSupport(request: $_model.CheckMobilesCardSupportRequest): Promise<$_model.CheckMobilesCardSupportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkMobilesCardSupportWithOptions(request, runtime);
  }

  /**
   * Sends conversion rate information to Alibaba Cloud SMS.
   * 
   * @param request - ConversionDataIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConversionDataIntlResponse
   */
  async conversionDataIntlWithOptions(request: $_model.ConversionDataIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConversionDataIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conversionRate)) {
      query["ConversionRate"] = request.conversionRate;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.reportTime)) {
      query["ReportTime"] = request.reportTime;
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
      action: "ConversionDataIntl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConversionDataIntlResponse>(await this.callApi(params, req, runtime), new $_model.ConversionDataIntlResponse({}));
  }

  /**
   * Sends conversion rate information to Alibaba Cloud SMS.
   * 
   * @param request - ConversionDataIntlRequest
   * @returns ConversionDataIntlResponse
   */
  async conversionDataIntl(request: $_model.ConversionDataIntlRequest): Promise<$_model.ConversionDataIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.conversionDataIntlWithOptions(request, runtime);
  }

  /**
   * Creates a card message template.
   * 
   * @remarks
   *   The CreateCardSmsTemplate operation saves the card message template information, submits it to the mobile phone manufacturer for approval, and returns the message template ID.
   * *   If the type of the message template is not supported or events that are not supported by the mobile phone manufacturer are specified, the template is not submitted. For more information, see [Supported message templates](https://help.aliyun.com/document_detail/434611.html).
   * *   For information about sample card message templates, see [Sample card message templates](https://help.aliyun.com/document_detail/435361.html).
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - CreateCardSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCardSmsTemplateResponse
   */
  async createCardSmsTemplateWithOptions(tmpReq: $_model.CreateCardSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCardSmsTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCardSmsTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.template)) {
      request.templateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.template, "Template", "json");
    }

    let query = { };
    if (!$dara.isNull(request.factorys)) {
      query["Factorys"] = request.factorys;
    }

    if (!$dara.isNull(request.memo)) {
      query["Memo"] = request.memo;
    }

    if (!$dara.isNull(request.templateShrink)) {
      query["Template"] = request.templateShrink;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCardSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCardSmsTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateCardSmsTemplateResponse({}));
  }

  /**
   * Creates a card message template.
   * 
   * @remarks
   *   The CreateCardSmsTemplate operation saves the card message template information, submits it to the mobile phone manufacturer for approval, and returns the message template ID.
   * *   If the type of the message template is not supported or events that are not supported by the mobile phone manufacturer are specified, the template is not submitted. For more information, see [Supported message templates](https://help.aliyun.com/document_detail/434611.html).
   * *   For information about sample card message templates, see [Sample card message templates](https://help.aliyun.com/document_detail/435361.html).
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateCardSmsTemplateRequest
   * @returns CreateCardSmsTemplateResponse
   */
  async createCardSmsTemplate(request: $_model.CreateCardSmsTemplateRequest): Promise<$_model.CreateCardSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCardSmsTemplateWithOptions(request, runtime);
  }

  /**
   * 创建短链
   * 
   * @param request - CreateSmartShortUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmartShortUrlResponse
   */
  async createSmartShortUrlWithOptions(request: $_model.CreateSmartShortUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmartShortUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumbers)) {
      query["PhoneNumbers"] = request.phoneNumbers;
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
      action: "CreateSmartShortUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmartShortUrlResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmartShortUrlResponse({}));
  }

  /**
   * 创建短链
   * 
   * @param request - CreateSmartShortUrlRequest
   * @returns CreateSmartShortUrlResponse
   */
  async createSmartShortUrl(request: $_model.CreateSmartShortUrlRequest): Promise<$_model.CreateSmartShortUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmartShortUrlWithOptions(request, runtime);
  }

  /**
   * 创建委托授权书
   * 
   * @param tmpReq - CreateSmsAuthorizationLetterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsAuthorizationLetterResponse
   */
  async createSmsAuthorizationLetterWithOptions(tmpReq: $_model.CreateSmsAuthorizationLetterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsAuthorizationLetterResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSmsAuthorizationLetterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.signList)) {
      request.signListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.signList, "SignList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authorization)) {
      query["Authorization"] = request.authorization;
    }

    if (!$dara.isNull(request.authorizationLetterExpDate)) {
      query["AuthorizationLetterExpDate"] = request.authorizationLetterExpDate;
    }

    if (!$dara.isNull(request.authorizationLetterName)) {
      query["AuthorizationLetterName"] = request.authorizationLetterName;
    }

    if (!$dara.isNull(request.authorizationLetterPic)) {
      query["AuthorizationLetterPic"] = request.authorizationLetterPic;
    }

    if (!$dara.isNull(request.organizationCode)) {
      query["OrganizationCode"] = request.organizationCode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.proxyAuthorization)) {
      query["ProxyAuthorization"] = request.proxyAuthorization;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signListShrink)) {
      query["SignList"] = request.signListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsAuthorizationLetter",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmsAuthorizationLetterResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmsAuthorizationLetterResponse({}));
  }

  /**
   * 创建委托授权书
   * 
   * @param request - CreateSmsAuthorizationLetterRequest
   * @returns CreateSmsAuthorizationLetterResponse
   */
  async createSmsAuthorizationLetter(request: $_model.CreateSmsAuthorizationLetterRequest): Promise<$_model.CreateSmsAuthorizationLetterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsAuthorizationLetterWithOptions(request, runtime);
  }

  /**
   * Create SMS Signature
   * 
   * @remarks
   * - For details about the announcement of changes to the new and original interfaces, see [Announcement on Updates to SMS Service Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Individual authenticated users can apply for one formal signature per natural day under the same Alibaba Cloud account, while enterprise authenticated users have no current restrictions. For details on the differences in rights between individual and enterprise users, please refer to [User Guide](https://help.aliyun.com/zh/sms/user-guide/usage-notes?spm).
   * - Signature information applied through the interface will be synchronized in the SMS service console. For operations related to signatures in the console, see [SMS Signatures](https://help.aliyun.com/zh/sms/user-guide/create-signatures?spm).
   * - After submitting the signature application, you can query the signature review status and details via the [GetSmsSign](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-getsmssign?spm) interface. You can also [Configure Receipt Messages](https://help.aliyun.com/zh/sms/developer-reference/configure-delivery-receipts-1?spm) and obtain signature review status messages through SignSmsReport.
   * 
   * @param tmpReq - CreateSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsSignResponse
   */
  async createSmsSignWithOptions(tmpReq: $_model.CreateSmsSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsSignResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSmsSignShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.moreData)) {
      request.moreDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.moreData, "MoreData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applySceneContent)) {
      query["ApplySceneContent"] = request.applySceneContent;
    }

    if (!$dara.isNull(request.authorizationLetterId)) {
      query["AuthorizationLetterId"] = request.authorizationLetterId;
    }

    if (!$dara.isNull(request.moreDataShrink)) {
      query["MoreData"] = request.moreDataShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
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

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.signSource)) {
      query["SignSource"] = request.signSource;
    }

    if (!$dara.isNull(request.signType)) {
      query["SignType"] = request.signType;
    }

    if (!$dara.isNull(request.thirdParty)) {
      query["ThirdParty"] = request.thirdParty;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsSign",
      version: "2017-05-25",
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
   * Create SMS Signature
   * 
   * @remarks
   * - For details about the announcement of changes to the new and original interfaces, see [Announcement on Updates to SMS Service Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Individual authenticated users can apply for one formal signature per natural day under the same Alibaba Cloud account, while enterprise authenticated users have no current restrictions. For details on the differences in rights between individual and enterprise users, please refer to [User Guide](https://help.aliyun.com/zh/sms/user-guide/usage-notes?spm).
   * - Signature information applied through the interface will be synchronized in the SMS service console. For operations related to signatures in the console, see [SMS Signatures](https://help.aliyun.com/zh/sms/user-guide/create-signatures?spm).
   * - After submitting the signature application, you can query the signature review status and details via the [GetSmsSign](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-getsmssign?spm) interface. You can also [Configure Receipt Messages](https://help.aliyun.com/zh/sms/developer-reference/configure-delivery-receipts-1?spm) and obtain signature review status messages through SignSmsReport.
   * 
   * @param request - CreateSmsSignRequest
   * @returns CreateSmsSignResponse
   */
  async createSmsSign(request: $_model.CreateSmsSignRequest): Promise<$_model.CreateSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsSignWithOptions(request, runtime);
  }

  /**
   * Create SMS Template
   * 
   * @remarks
   * - For details about the changes of this new interface compared to the original one, please refer to [Announcement on the Update of SMS Service Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - It is recommended to apply for SMS templates via the API with at least a 30-second interval between each request.
   * - The template information applied through the API will be synchronized in the SMS service console. For operations related to templates in the console, please refer to SMS Templates.
   * - After submitting the template application, you can query the audit status and details using the GetSmsTemplate interface. You can also configure delivery receipts to obtain the audit status messages via TemplateSmsReport.
   * - Domestic SMS templates are not interchangeable with international/Hong Kong, Macao, and Taiwan SMS templates. Please apply for templates based on your business scenario.
   * - Only enterprise-verified users can apply for promotional messages and international/Hong Kong, Macao, and Taiwan messages. For differences in rights between personal and enterprise users, please refer to Usage Instructions.
   * 
   * @param tmpReq - CreateSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsTemplateResponse
   */
  async createSmsTemplateWithOptions(tmpReq: $_model.CreateSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSmsTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.moreData)) {
      request.moreDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.moreData, "MoreData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applySceneContent)) {
      query["ApplySceneContent"] = request.applySceneContent;
    }

    if (!$dara.isNull(request.intlType)) {
      query["IntlType"] = request.intlType;
    }

    if (!$dara.isNull(request.moreDataShrink)) {
      query["MoreData"] = request.moreDataShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.relatedSignName)) {
      query["RelatedSignName"] = request.relatedSignName;
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

    if (!$dara.isNull(request.templateRule)) {
      query["TemplateRule"] = request.templateRule;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmsTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmsTemplateResponse({}));
  }

  /**
   * Create SMS Template
   * 
   * @remarks
   * - For details about the changes of this new interface compared to the original one, please refer to [Announcement on the Update of SMS Service Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - It is recommended to apply for SMS templates via the API with at least a 30-second interval between each request.
   * - The template information applied through the API will be synchronized in the SMS service console. For operations related to templates in the console, please refer to SMS Templates.
   * - After submitting the template application, you can query the audit status and details using the GetSmsTemplate interface. You can also configure delivery receipts to obtain the audit status messages via TemplateSmsReport.
   * - Domestic SMS templates are not interchangeable with international/Hong Kong, Macao, and Taiwan SMS templates. Please apply for templates based on your business scenario.
   * - Only enterprise-verified users can apply for promotional messages and international/Hong Kong, Macao, and Taiwan messages. For differences in rights between personal and enterprise users, please refer to Usage Instructions.
   * 
   * @param request - CreateSmsTemplateRequest
   * @returns CreateSmsTemplateResponse
   */
  async createSmsTemplate(request: $_model.CreateSmsTemplateRequest): Promise<$_model.CreateSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsTemplateWithOptions(request, runtime);
  }

  /**
   * 删除验证码签名
   * 
   * @param request - DeleteExtCodeSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExtCodeSignResponse
   */
  async deleteExtCodeSignWithOptions(request: $_model.DeleteExtCodeSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExtCodeSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extCode)) {
      query["ExtCode"] = request.extCode;
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

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExtCodeSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExtCodeSignResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExtCodeSignResponse({}));
  }

  /**
   * 删除验证码签名
   * 
   * @param request - DeleteExtCodeSignRequest
   * @returns DeleteExtCodeSignResponse
   */
  async deleteExtCodeSign(request: $_model.DeleteExtCodeSignRequest): Promise<$_model.DeleteExtCodeSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExtCodeSignWithOptions(request, runtime);
  }

  /**
   * Deletes a short URL. After you delete a short URL, it cannot be changed to its original state.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteShortUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteShortUrlResponse
   */
  async deleteShortUrlWithOptions(request: $_model.DeleteShortUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteShortUrlResponse> {
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
    if (!$dara.isNull(request.sourceUrl)) {
      body["SourceUrl"] = request.sourceUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteShortUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteShortUrlResponse>(await this.callApi(params, req, runtime), new $_model.DeleteShortUrlResponse({}));
  }

  /**
   * Deletes a short URL. After you delete a short URL, it cannot be changed to its original state.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteShortUrlRequest
   * @returns DeleteShortUrlResponse
   */
  async deleteShortUrl(request: $_model.DeleteShortUrlRequest): Promise<$_model.DeleteShortUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteShortUrlWithOptions(request, runtime);
  }

  /**
   * 删除资质对客openAPI
   * 
   * @param request - DeleteSmsQualificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSmsQualificationResponse
   */
  async deleteSmsQualificationWithOptions(request: $_model.DeleteSmsQualificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSmsQualificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qualificationGroupId)) {
      query["QualificationGroupId"] = request.qualificationGroupId;
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
      action: "DeleteSmsQualification",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSmsQualificationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSmsQualificationResponse({}));
  }

  /**
   * 删除资质对客openAPI
   * 
   * @param request - DeleteSmsQualificationRequest
   * @returns DeleteSmsQualificationResponse
   */
  async deleteSmsQualification(request: $_model.DeleteSmsQualificationRequest): Promise<$_model.DeleteSmsQualificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSmsQualificationWithOptions(request, runtime);
  }

  /**
   * Deletes a signature.
   * 
   * @remarks
   *   You cannot delete a signature that has not been approved.
   * *   After you delete a signature, you cannot recover it. Proceed with caution.
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSmsSignResponse
   */
  async deleteSmsSignWithOptions(request: $_model.DeleteSmsSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSmsSignResponse> {
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

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSmsSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSmsSignResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSmsSignResponse({}));
  }

  /**
   * Deletes a signature.
   * 
   * @remarks
   *   You cannot delete a signature that has not been approved.
   * *   After you delete a signature, you cannot recover it. Proceed with caution.
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteSmsSignRequest
   * @returns DeleteSmsSignResponse
   */
  async deleteSmsSign(request: $_model.DeleteSmsSignRequest): Promise<$_model.DeleteSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSmsSignWithOptions(request, runtime);
  }

  /**
   * Deletes a message template.
   * 
   * @remarks
   *   Message templates pending approval can be withdrawn. You can delete a message template pending approval on the Message Templates tab in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview).
   * *   Message templates that have been approved can be deleted, and cannot be modified. You can delete a message template pending approval on the Message Templates tab in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview).
   * *   You cannot recover deleted message templates. Proceed with caution.
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSmsTemplateResponse
   */
  async deleteSmsTemplateWithOptions(request: $_model.DeleteSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSmsTemplateResponse> {
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

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSmsTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSmsTemplateResponse({}));
  }

  /**
   * Deletes a message template.
   * 
   * @remarks
   *   Message templates pending approval can be withdrawn. You can delete a message template pending approval on the Message Templates tab in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview).
   * *   Message templates that have been approved can be deleted, and cannot be modified. You can delete a message template pending approval on the Message Templates tab in the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview).
   * *   You cannot recover deleted message templates. Proceed with caution.
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteSmsTemplateRequest
   * @returns DeleteSmsTemplateResponse
   */
  async deleteSmsTemplate(request: $_model.DeleteSmsTemplateRequest): Promise<$_model.DeleteSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSmsTemplateWithOptions(request, runtime);
  }

  /**
   * Query card sending details
   * 
   * @param request - GetCardSmsDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCardSmsDetailsResponse
   */
  async getCardSmsDetailsWithOptions(request: $_model.GetCardSmsDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCardSmsDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizCardId)) {
      query["BizCardId"] = request.bizCardId;
    }

    if (!$dara.isNull(request.bizDigitId)) {
      query["BizDigitId"] = request.bizDigitId;
    }

    if (!$dara.isNull(request.bizSmsId)) {
      query["BizSmsId"] = request.bizSmsId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
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
      action: "GetCardSmsDetails",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCardSmsDetailsResponse>(await this.callApi(params, req, runtime), new $_model.GetCardSmsDetailsResponse({}));
  }

  /**
   * Query card sending details
   * 
   * @param request - GetCardSmsDetailsRequest
   * @returns GetCardSmsDetailsResponse
   */
  async getCardSmsDetails(request: $_model.GetCardSmsDetailsRequest): Promise<$_model.GetCardSmsDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCardSmsDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the short URLs of a card messages template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetCardSmsLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCardSmsLinkResponse
   */
  async getCardSmsLinkWithOptions(request: $_model.GetCardSmsLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCardSmsLinkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cardCodeType)) {
      query["CardCodeType"] = request.cardCodeType;
    }

    if (!$dara.isNull(request.cardLinkType)) {
      query["CardLinkType"] = request.cardLinkType;
    }

    if (!$dara.isNull(request.cardTemplateCode)) {
      query["CardTemplateCode"] = request.cardTemplateCode;
    }

    if (!$dara.isNull(request.cardTemplateParamJson)) {
      query["CardTemplateParamJson"] = request.cardTemplateParamJson;
    }

    if (!$dara.isNull(request.customShortCodeJson)) {
      query["CustomShortCodeJson"] = request.customShortCodeJson;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.phoneNumberJson)) {
      query["PhoneNumberJson"] = request.phoneNumberJson;
    }

    if (!$dara.isNull(request.signNameJson)) {
      query["SignNameJson"] = request.signNameJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCardSmsLink",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCardSmsLinkResponse>(await this.callApi(params, req, runtime), new $_model.GetCardSmsLinkResponse({}));
  }

  /**
   * Queries the short URLs of a card messages template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetCardSmsLinkRequest
   * @returns GetCardSmsLinkResponse
   */
  async getCardSmsLink(request: $_model.GetCardSmsLinkRequest): Promise<$_model.GetCardSmsLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCardSmsLinkWithOptions(request, runtime);
  }

  /**
   * Converts a resource uploaded to the specified Object Storage Service (OSS) bucket for unified management. Then, a resource ID is returned. You can manage the resource based on the ID.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetMediaResourceIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaResourceIdResponse
   */
  async getMediaResourceIdWithOptions(request: $_model.GetMediaResourceIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaResourceIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extendInfo)) {
      query["ExtendInfo"] = request.extendInfo;
    }

    if (!$dara.isNull(request.fileSize)) {
      query["FileSize"] = request.fileSize;
    }

    if (!$dara.isNull(request.memo)) {
      query["Memo"] = request.memo;
    }

    if (!$dara.isNull(request.ossKey)) {
      query["OssKey"] = request.ossKey;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaResourceId",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaResourceIdResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaResourceIdResponse({}));
  }

  /**
   * Converts a resource uploaded to the specified Object Storage Service (OSS) bucket for unified management. Then, a resource ID is returned. You can manage the resource based on the ID.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetMediaResourceIdRequest
   * @returns GetMediaResourceIdResponse
   */
  async getMediaResourceId(request: $_model.GetMediaResourceIdRequest): Promise<$_model.GetMediaResourceIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaResourceIdWithOptions(request, runtime);
  }

  /**
   * Queries the OSS configuration information about card messages.
   * 
   * @remarks
   * Resources such as images and videos used for card message templates can be uploaded to Object Storage Service (OSS) buckets for storage. For more information, see [Upload files to OSS](https://help.aliyun.com/document_detail/437303.html).
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetOSSInfoForCardTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOSSInfoForCardTemplateResponse
   */
  async getOSSInfoForCardTemplateWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetOSSInfoForCardTemplateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetOSSInfoForCardTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOSSInfoForCardTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetOSSInfoForCardTemplateResponse({}));
  }

  /**
   * Queries the OSS configuration information about card messages.
   * 
   * @remarks
   * Resources such as images and videos used for card message templates can be uploaded to Object Storage Service (OSS) buckets for storage. For more information, see [Upload files to OSS](https://help.aliyun.com/document_detail/437303.html).
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * @returns GetOSSInfoForCardTemplateResponse
   */
  async getOSSInfoForCardTemplate(): Promise<$_model.GetOSSInfoForCardTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOSSInfoForCardTemplateWithOptions(runtime);
  }

  /**
   * SMS File Upload, Get Authorization Info
   * 
   * @remarks
   * - When creating signatures or templates, you can upload materials such as login pages with links, backend page screenshots, software copyrights, supplementary agreements, etc. This helps the review personnel understand your business details. If there are multiple materials, they can be combined into one file, supporting png, jpg, jpeg, doc, docx, pdf formats.
   * - For additional materials needed when creating signatures or templates, you can upload them to the OSS file system for storage. For file upload operations, refer to [OSS File Upload](https://help.aliyun.com/zh/sms/upload-files-through-oss).
   * 
   * @param request - GetOSSInfoForUploadFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOSSInfoForUploadFileResponse
   */
  async getOSSInfoForUploadFileWithOptions(request: $_model.GetOSSInfoForUploadFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOSSInfoForUploadFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
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
      action: "GetOSSInfoForUploadFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOSSInfoForUploadFileResponse>(await this.callApi(params, req, runtime), new $_model.GetOSSInfoForUploadFileResponse({}));
  }

  /**
   * SMS File Upload, Get Authorization Info
   * 
   * @remarks
   * - When creating signatures or templates, you can upload materials such as login pages with links, backend page screenshots, software copyrights, supplementary agreements, etc. This helps the review personnel understand your business details. If there are multiple materials, they can be combined into one file, supporting png, jpg, jpeg, doc, docx, pdf formats.
   * - For additional materials needed when creating signatures or templates, you can upload them to the OSS file system for storage. For file upload operations, refer to [OSS File Upload](https://help.aliyun.com/zh/sms/upload-files-through-oss).
   * 
   * @param request - GetOSSInfoForUploadFileRequest
   * @returns GetOSSInfoForUploadFileResponse
   */
  async getOSSInfoForUploadFile(request: $_model.GetOSSInfoForUploadFileRequest): Promise<$_model.GetOSSInfoForUploadFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOSSInfoForUploadFileWithOptions(request, runtime);
  }

  /**
   * 上传文件获取oss配置
   * 
   * @param request - GetQualificationOssInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualificationOssInfoResponse
   */
  async getQualificationOssInfoWithOptions(request: $_model.GetQualificationOssInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualificationOssInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
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
      action: "GetQualificationOssInfo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualificationOssInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetQualificationOssInfoResponse({}));
  }

  /**
   * 上传文件获取oss配置
   * 
   * @param request - GetQualificationOssInfoRequest
   * @returns GetQualificationOssInfoResponse
   */
  async getQualificationOssInfo(request: $_model.GetQualificationOssInfoRequest): Promise<$_model.GetQualificationOssInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualificationOssInfoWithOptions(request, runtime);
  }

  /**
   * Query SMS Signature Details
   * 
   * @remarks
   * - For details about the changes of this new interface and the original one, please refer to [Announcement on the Update of SMS Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Review Time: Generally, after submitting the signature, Alibaba Cloud expects to complete the review within 2 hours (Review Business Hours: Monday to Sunday 9:00~21:00, with legal holidays postponed). It is recommended to submit your application before 18:00.
   * - If the signature fails the review, the reason for the failure will be returned. Please refer to [Handling Suggestions for Failed SMS Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm), invoke the [UpdateSmsSign](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-updatesmssign?spm) API, or modify the unapproved SMS signature on the [Signature Management](https://dysms.console.aliyun.com/domestic/text/sign) page.
   * 
   * @param request - GetSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSmsSignResponse
   */
  async getSmsSignWithOptions(request: $_model.GetSmsSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSmsSignResponse> {
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

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSmsSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSmsSignResponse>(await this.callApi(params, req, runtime), new $_model.GetSmsSignResponse({}));
  }

  /**
   * Query SMS Signature Details
   * 
   * @remarks
   * - For details about the changes of this new interface and the original one, please refer to [Announcement on the Update of SMS Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Review Time: Generally, after submitting the signature, Alibaba Cloud expects to complete the review within 2 hours (Review Business Hours: Monday to Sunday 9:00~21:00, with legal holidays postponed). It is recommended to submit your application before 18:00.
   * - If the signature fails the review, the reason for the failure will be returned. Please refer to [Handling Suggestions for Failed SMS Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm), invoke the [UpdateSmsSign](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-updatesmssign?spm) API, or modify the unapproved SMS signature on the [Signature Management](https://dysms.console.aliyun.com/domestic/text/sign) page.
   * 
   * @param request - GetSmsSignRequest
   * @returns GetSmsSignResponse
   */
  async getSmsSign(request: $_model.GetSmsSignRequest): Promise<$_model.GetSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSmsSignWithOptions(request, runtime);
  }

  /**
   * Query Text SMS Template Details
   * 
   * @remarks
   * - For details about the announcement of changes to the new and original interfaces, see [Announcement on Updates to SMS Service Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Review Time: Under normal circumstances, Alibaba Cloud expects to complete the review within 2 hours after template submission (review working hours: Monday to Sunday 9:00~21:00, with statutory holidays postponed). It is recommended to submit your application before 18:00.
   * - If the template fails the review, the reason for the failure will be returned. Please refer to [Handling Suggestions for Failed SMS Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm=a2c4g.11186623.0.0.41fd339f3bPSCQ), invoke the [ModifySmsTemplate](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-modifysmstemplate?spm=a2c4g.11186623.0.0.5b1f6e8bQloFit) API or modify the SMS template on the [Template Management](https://dysms.console.aliyun.com/domestic/text/template) page.
   * - The current QuerySmsTemplate interface queries the audit details of a single template by template code. The [QuerySmsTemplateList](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-querysmstemplatelist?spm=a2c4g.11186623.0.0.24086e8bO8cFn4) interface can query the template details of all templates under your current account.
   * 
   * @param request - GetSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSmsTemplateResponse
   */
  async getSmsTemplateWithOptions(request: $_model.GetSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSmsTemplateResponse> {
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

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSmsTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetSmsTemplateResponse({}));
  }

  /**
   * Query Text SMS Template Details
   * 
   * @remarks
   * - For details about the announcement of changes to the new and original interfaces, see [Announcement on Updates to SMS Service Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Review Time: Under normal circumstances, Alibaba Cloud expects to complete the review within 2 hours after template submission (review working hours: Monday to Sunday 9:00~21:00, with statutory holidays postponed). It is recommended to submit your application before 18:00.
   * - If the template fails the review, the reason for the failure will be returned. Please refer to [Handling Suggestions for Failed SMS Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm=a2c4g.11186623.0.0.41fd339f3bPSCQ), invoke the [ModifySmsTemplate](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-modifysmstemplate?spm=a2c4g.11186623.0.0.5b1f6e8bQloFit) API or modify the SMS template on the [Template Management](https://dysms.console.aliyun.com/domestic/text/template) page.
   * - The current QuerySmsTemplate interface queries the audit details of a single template by template code. The [QuerySmsTemplateList](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-querysmstemplatelist?spm=a2c4g.11186623.0.0.24086e8bO8cFn4) interface can query the template details of all templates under your current account.
   * 
   * @param request - GetSmsTemplateRequest
   * @returns GetSmsTemplateResponse
   */
  async getSmsTemplate(request: $_model.GetSmsTemplateRequest): Promise<$_model.GetSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSmsTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the tags of a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
      action: "ListTagResources",
      version: "2017-05-25",
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
   * Queries the tags of a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies a rejected signature and submit it for approval. Signatures that are pending approval or have been approved cannot be modified.
   * 
   * @remarks
   * You can call the operation or use the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview) to modify an existing signature and submit the signature for approval. The signature must comply with the [signature specifications](https://help.aliyun.com/document_detail/108076.html).
   * For more information, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * > 
   * *   Signatures pending approval cannot be modified.
   * *   You cannot modify a signature after it is approved. If you no longer need the signature, you can delete it.
   * *   If you are an individual user, you cannot apply for a new signature on the same day that your signature is rejected or deleted. We recommend that you modify the rejected signature and submit it again.
   * 
   * @param request - ModifySmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySmsSignResponse
   */
  async modifySmsSignWithOptions(request: $_model.ModifySmsSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySmsSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.signSource)) {
      query["SignSource"] = request.signSource;
    }

    if (!$dara.isNull(request.signType)) {
      query["SignType"] = request.signType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.signFileList)) {
      body["SignFileList"] = request.signFileList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySmsSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySmsSignResponse>(await this.callApi(params, req, runtime), new $_model.ModifySmsSignResponse({}));
  }

  /**
   * Modifies a rejected signature and submit it for approval. Signatures that are pending approval or have been approved cannot be modified.
   * 
   * @remarks
   * You can call the operation or use the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview) to modify an existing signature and submit the signature for approval. The signature must comply with the [signature specifications](https://help.aliyun.com/document_detail/108076.html).
   * For more information, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * > 
   * *   Signatures pending approval cannot be modified.
   * *   You cannot modify a signature after it is approved. If you no longer need the signature, you can delete it.
   * *   If you are an individual user, you cannot apply for a new signature on the same day that your signature is rejected or deleted. We recommend that you modify the rejected signature and submit it again.
   * 
   * @param request - ModifySmsSignRequest
   * @returns ModifySmsSignResponse
   */
  async modifySmsSign(request: $_model.ModifySmsSignRequest): Promise<$_model.ModifySmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySmsSignWithOptions(request, runtime);
  }

  /**
   * Modifies the information of an unapproved message template and submits it for review again.
   * 
   * @remarks
   * After you apply for a message template, if the template fails to pass the review, you can call this operation to modify the template and submit the template again. You can call this operation to modify only a template for a specific message type.
   * The template content must comply with the [SMS template specifications](https://help.aliyun.com/document_detail/108253.html).
   * For more information, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limit
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @deprecated OpenAPI ModifySmsTemplate is deprecated, please use Dysmsapi::2017-05-25::UpdateSmsTemplate instead.
   * 
   * @param request - ModifySmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySmsTemplateResponse
   */
  // Deprecated
  async modifySmsTemplateWithOptions(request: $_model.ModifySmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySmsTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateContent)) {
      query["TemplateContent"] = request.templateContent;
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
      action: "ModifySmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySmsTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ModifySmsTemplateResponse({}));
  }

  /**
   * Modifies the information of an unapproved message template and submits it for review again.
   * 
   * @remarks
   * After you apply for a message template, if the template fails to pass the review, you can call this operation to modify the template and submit the template again. You can call this operation to modify only a template for a specific message type.
   * The template content must comply with the [SMS template specifications](https://help.aliyun.com/document_detail/108253.html).
   * For more information, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limit
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @deprecated OpenAPI ModifySmsTemplate is deprecated, please use Dysmsapi::2017-05-25::UpdateSmsTemplate instead.
   * 
   * @param request - ModifySmsTemplateRequest
   * @returns ModifySmsTemplateResponse
   */
  // Deprecated
  async modifySmsTemplate(request: $_model.ModifySmsTemplateRequest): Promise<$_model.ModifySmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySmsTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the review status of a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryCardSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCardSmsTemplateResponse
   */
  async queryCardSmsTemplateWithOptions(request: $_model.QueryCardSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCardSmsTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCardSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCardSmsTemplateResponse>(await this.callApi(params, req, runtime), new $_model.QueryCardSmsTemplateResponse({}));
  }

  /**
   * Queries the review status of a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryCardSmsTemplateRequest
   * @returns QueryCardSmsTemplateResponse
   */
  async queryCardSmsTemplate(request: $_model.QueryCardSmsTemplateRequest): Promise<$_model.QueryCardSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCardSmsTemplateWithOptions(request, runtime);
  }

  /**
   * Queries sent card messages.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryCardSmsTemplateReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCardSmsTemplateReportResponse
   */
  async queryCardSmsTemplateReportWithOptions(request: $_model.QueryCardSmsTemplateReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCardSmsTemplateReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.templateCodes)) {
      query["TemplateCodes"] = request.templateCodes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCardSmsTemplateReport",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCardSmsTemplateReportResponse>(await this.callApi(params, req, runtime), new $_model.QueryCardSmsTemplateReportResponse({}));
  }

  /**
   * Queries sent card messages.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 300 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryCardSmsTemplateReportRequest
   * @returns QueryCardSmsTemplateReportResponse
   */
  async queryCardSmsTemplateReport(request: $_model.QueryCardSmsTemplateReportRequest): Promise<$_model.QueryCardSmsTemplateReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCardSmsTemplateReportWithOptions(request, runtime);
  }

  /**
   * 查询验证码签名
   * 
   * @param request - QueryExtCodeSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryExtCodeSignResponse
   */
  async queryExtCodeSignWithOptions(request: $_model.QueryExtCodeSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryExtCodeSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extCode)) {
      query["ExtCode"] = request.extCode;
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

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryExtCodeSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryExtCodeSignResponse>(await this.callApi(params, req, runtime), new $_model.QueryExtCodeSignResponse({}));
  }

  /**
   * 查询验证码签名
   * 
   * @param request - QueryExtCodeSignRequest
   * @returns QueryExtCodeSignResponse
   */
  async queryExtCodeSign(request: $_model.QueryExtCodeSignRequest): Promise<$_model.QueryExtCodeSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryExtCodeSignWithOptions(request, runtime);
  }

  /**
   * Checks whether a mobile phone number can receive card messages.
   * 
   * @param tmpReq - QueryMobilesCardSupportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMobilesCardSupportResponse
   */
  async queryMobilesCardSupportWithOptions(tmpReq: $_model.QueryMobilesCardSupportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMobilesCardSupportResponse> {
    tmpReq.validate();
    let request = new $_model.QueryMobilesCardSupportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.mobiles)) {
      request.mobilesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.mobiles, "Mobiles", "json");
    }

    let query = { };
    if (!$dara.isNull(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.mobilesShrink)) {
      query["Mobiles"] = request.mobilesShrink;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMobilesCardSupport",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMobilesCardSupportResponse>(await this.callApi(params, req, runtime), new $_model.QueryMobilesCardSupportResponse({}));
  }

  /**
   * Checks whether a mobile phone number can receive card messages.
   * 
   * @param request - QueryMobilesCardSupportRequest
   * @returns QueryMobilesCardSupportResponse
   */
  async queryMobilesCardSupport(request: $_model.QueryMobilesCardSupportRequest): Promise<$_model.QueryMobilesCardSupportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMobilesCardSupportWithOptions(request, runtime);
  }

  /**
   * 点击明细查询
   * 
   * @param request - QueryPageSmartShortUrlLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPageSmartShortUrlLogResponse
   */
  async queryPageSmartShortUrlLogWithOptions(request: $_model.QueryPageSmartShortUrlLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPageSmartShortUrlLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createDateEnd)) {
      query["CreateDateEnd"] = request.createDateEnd;
    }

    if (!$dara.isNull(request.createDateStart)) {
      query["CreateDateStart"] = request.createDateStart;
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

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
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
      action: "QueryPageSmartShortUrlLog",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPageSmartShortUrlLogResponse>(await this.callApi(params, req, runtime), new $_model.QueryPageSmartShortUrlLogResponse({}));
  }

  /**
   * 点击明细查询
   * 
   * @param request - QueryPageSmartShortUrlLogRequest
   * @returns QueryPageSmartShortUrlLogResponse
   */
  async queryPageSmartShortUrlLog(request: $_model.QueryPageSmartShortUrlLogRequest): Promise<$_model.QueryPageSmartShortUrlLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPageSmartShortUrlLogWithOptions(request, runtime);
  }

  /**
   * Queries the information about a message.
   * 
   * @param request - QuerySendDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySendDetailsResponse
   */
  async querySendDetailsWithOptions(request: $_model.QuerySendDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySendDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
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
      action: "QuerySendDetails",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySendDetailsResponse>(await this.callApi(params, req, runtime), new $_model.QuerySendDetailsResponse({}));
  }

  /**
   * Queries the information about a message.
   * 
   * @param request - QuerySendDetailsRequest
   * @returns QuerySendDetailsResponse
   */
  async querySendDetails(request: $_model.QuerySendDetailsRequest): Promise<$_model.QuerySendDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySendDetailsWithOptions(request, runtime);
  }

  /**
   * Queries message delivery details.
   * 
   * @remarks
   * You can call the operation to query message delivery details, including the number of delivered messages, the number of messages with delivery receipts, and the time that a message is sent. If a large number of messages are sent on the specified date, you can specify the number of items displayed on each page and the number of pages to view the details by page.
   * ### QPS limits
   * You can call this operation up to 20 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySendStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySendStatisticsResponse
   */
  async querySendStatisticsWithOptions(request: $_model.QuerySendStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySendStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.isGlobe)) {
      query["IsGlobe"] = request.isGlobe;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
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

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySendStatistics",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySendStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.QuerySendStatisticsResponse({}));
  }

  /**
   * Queries message delivery details.
   * 
   * @remarks
   * You can call the operation to query message delivery details, including the number of delivered messages, the number of messages with delivery receipts, and the time that a message is sent. If a large number of messages are sent on the specified date, you can specify the number of items displayed on each page and the number of pages to view the details by page.
   * ### QPS limits
   * You can call this operation up to 20 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySendStatisticsRequest
   * @returns QuerySendStatisticsResponse
   */
  async querySendStatistics(request: $_model.QuerySendStatisticsRequest): Promise<$_model.QuerySendStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySendStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the status of a short URL.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 20 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryShortUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryShortUrlResponse
   */
  async queryShortUrlWithOptions(request: $_model.QueryShortUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryShortUrlResponse> {
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
    if (!$dara.isNull(request.shortUrl)) {
      body["ShortUrl"] = request.shortUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryShortUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryShortUrlResponse>(await this.callApi(params, req, runtime), new $_model.QueryShortUrlResponse({}));
  }

  /**
   * Queries the status of a short URL.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 20 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryShortUrlRequest
   * @returns QueryShortUrlResponse
   */
  async queryShortUrl(request: $_model.QueryShortUrlRequest): Promise<$_model.QueryShortUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryShortUrlWithOptions(request, runtime);
  }

  /**
   * 查询单个资质详情
   * 
   * @param request - QuerySingleSmsQualificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySingleSmsQualificationResponse
   */
  async querySingleSmsQualificationWithOptions(request: $_model.QuerySingleSmsQualificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySingleSmsQualificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qualificationGroupId)) {
      query["QualificationGroupId"] = request.qualificationGroupId;
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
      action: "QuerySingleSmsQualification",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySingleSmsQualificationResponse>(await this.callApi(params, req, runtime), new $_model.QuerySingleSmsQualificationResponse({}));
  }

  /**
   * 查询单个资质详情
   * 
   * @param request - QuerySingleSmsQualificationRequest
   * @returns QuerySingleSmsQualificationResponse
   */
  async querySingleSmsQualification(request: $_model.QuerySingleSmsQualificationRequest): Promise<$_model.QuerySingleSmsQualificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySingleSmsQualificationWithOptions(request, runtime);
  }

  /**
   * 查询委托授权书
   * 
   * @param tmpReq - QuerySmsAuthorizationLetterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsAuthorizationLetterResponse
   */
  async querySmsAuthorizationLetterWithOptions(tmpReq: $_model.QuerySmsAuthorizationLetterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsAuthorizationLetterResponse> {
    tmpReq.validate();
    let request = new $_model.QuerySmsAuthorizationLetterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.authorizationLetterIdList)) {
      request.authorizationLetterIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authorizationLetterIdList, "AuthorizationLetterIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authorizationLetterIdListShrink)) {
      query["AuthorizationLetterIdList"] = request.authorizationLetterIdListShrink;
    }

    if (!$dara.isNull(request.organizationCode)) {
      query["OrganizationCode"] = request.organizationCode;
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

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsAuthorizationLetter",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsAuthorizationLetterResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsAuthorizationLetterResponse({}));
  }

  /**
   * 查询委托授权书
   * 
   * @param request - QuerySmsAuthorizationLetterRequest
   * @returns QuerySmsAuthorizationLetterResponse
   */
  async querySmsAuthorizationLetter(request: $_model.QuerySmsAuthorizationLetterRequest): Promise<$_model.QuerySmsAuthorizationLetterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsAuthorizationLetterWithOptions(request, runtime);
  }

  /**
   * 查询资质审核列表页
   * 
   * @param request - QuerySmsQualificationRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsQualificationRecordResponse
   */
  async querySmsQualificationRecordWithOptions(request: $_model.QuerySmsQualificationRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsQualificationRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.companyName)) {
      query["CompanyName"] = request.companyName;
    }

    if (!$dara.isNull(request.legalPersonName)) {
      query["LegalPersonName"] = request.legalPersonName;
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

    if (!$dara.isNull(request.qualificationGroupName)) {
      query["QualificationGroupName"] = request.qualificationGroupName;
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

    if (!$dara.isNull(request.useBySelf)) {
      query["UseBySelf"] = request.useBySelf;
    }

    if (!$dara.isNull(request.workOrderId)) {
      query["WorkOrderId"] = request.workOrderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsQualificationRecord",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsQualificationRecordResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsQualificationRecordResponse({}));
  }

  /**
   * 查询资质审核列表页
   * 
   * @param request - QuerySmsQualificationRecordRequest
   * @returns QuerySmsQualificationRecordResponse
   */
  async querySmsQualificationRecord(request: $_model.QuerySmsQualificationRecordRequest): Promise<$_model.QuerySmsQualificationRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsQualificationRecordWithOptions(request, runtime);
  }

  /**
   * Queries the status of a signature.
   * 
   * @remarks
   * After you apply for an SMS signature, you can query its status by using the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm) or calling the operation. If the signature is rejected, you can modify the signature based on the reason why it is rejected.
   * ### QPS limits
   * You can call this API operation up to 500 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsSignResponse
   */
  async querySmsSignWithOptions(request: $_model.QuerySmsSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsSignResponse> {
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

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsSignResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsSignResponse({}));
  }

  /**
   * Queries the status of a signature.
   * 
   * @remarks
   * After you apply for an SMS signature, you can query its status by using the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm) or calling the operation. If the signature is rejected, you can modify the signature based on the reason why it is rejected.
   * ### QPS limits
   * You can call this API operation up to 500 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySmsSignRequest
   * @returns QuerySmsSignResponse
   */
  async querySmsSign(request: $_model.QuerySmsSignRequest): Promise<$_model.QuerySmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSignWithOptions(request, runtime);
  }

  /**
   * Queries message signatures by page.
   * 
   * @remarks
   * You can call this operation to query the details of message signatures, including the name, creation time, and approval status of each signature. If a message template is rejected, the reason is returned. Modify the message signature based on the reason.
   * ### QPS limit
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySmsSignListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsSignListResponse
   */
  async querySmsSignListWithOptions(request: $_model.QuerySmsSignListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsSignListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
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
      action: "QuerySmsSignList",
      version: "2017-05-25",
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
   * Queries message signatures by page.
   * 
   * @remarks
   * You can call this operation to query the details of message signatures, including the name, creation time, and approval status of each signature. If a message template is rejected, the reason is returned. Modify the message signature based on the reason.
   * ### QPS limit
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySmsSignListRequest
   * @returns QuerySmsSignListResponse
   */
  async querySmsSignList(request: $_model.QuerySmsSignListRequest): Promise<$_model.QuerySmsSignListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSignListWithOptions(request, runtime);
  }

  /**
   * Queries the approval status of a message template.
   * 
   * @remarks
   * After you create a message template, you can call this operation to query the approval status of the template. If a message template is rejected, the reason is returned. Modify the message template based on the reason.
   * ### QPS limit
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @deprecated OpenAPI QuerySmsTemplate is deprecated, please use Dysmsapi::2017-05-25::GetSmsTemplate instead.
   * 
   * @param request - QuerySmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsTemplateResponse
   */
  // Deprecated
  async querySmsTemplateWithOptions(request: $_model.QuerySmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsTemplateResponse> {
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

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsTemplateResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsTemplateResponse({}));
  }

  /**
   * Queries the approval status of a message template.
   * 
   * @remarks
   * After you create a message template, you can call this operation to query the approval status of the template. If a message template is rejected, the reason is returned. Modify the message template based on the reason.
   * ### QPS limit
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @deprecated OpenAPI QuerySmsTemplate is deprecated, please use Dysmsapi::2017-05-25::GetSmsTemplate instead.
   * 
   * @param request - QuerySmsTemplateRequest
   * @returns QuerySmsTemplateResponse
   */
  // Deprecated
  async querySmsTemplate(request: $_model.QuerySmsTemplateRequest): Promise<$_model.QuerySmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsTemplateWithOptions(request, runtime);
  }

  /**
   * Queries message templates.
   * 
   * @remarks
   * You can call this operation to query the details of message templates, including the name, creation time, and approval status of each template. If a message template is rejected, the reason is returned. Modify the message template based on the reason.
   * ### QPS limit
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySmsTemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsTemplateListResponse
   */
  async querySmsTemplateListWithOptions(request: $_model.QuerySmsTemplateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsTemplateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
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
      action: "QuerySmsTemplateList",
      version: "2017-05-25",
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
   * Queries message templates.
   * 
   * @remarks
   * You can call this operation to query the details of message templates, including the name, creation time, and approval status of each template. If a message template is rejected, the reason is returned. Modify the message template based on the reason.
   * ### QPS limit
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QuerySmsTemplateListRequest
   * @returns QuerySmsTemplateListResponse
   */
  async querySmsTemplateList(request: $_model.QuerySmsTemplateListRequest): Promise<$_model.QuerySmsTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsTemplateListWithOptions(request, runtime);
  }

  /**
   * 验证手机验证码
   * 
   * @param request - RequiredPhoneCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RequiredPhoneCodeResponse
   */
  async requiredPhoneCodeWithOptions(request: $_model.RequiredPhoneCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RequiredPhoneCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNo)) {
      query["PhoneNo"] = request.phoneNo;
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
      action: "RequiredPhoneCode",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RequiredPhoneCodeResponse>(await this.callApi(params, req, runtime), new $_model.RequiredPhoneCodeResponse({}));
  }

  /**
   * 验证手机验证码
   * 
   * @param request - RequiredPhoneCodeRequest
   * @returns RequiredPhoneCodeResponse
   */
  async requiredPhoneCode(request: $_model.RequiredPhoneCodeRequest): Promise<$_model.RequiredPhoneCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.requiredPhoneCodeWithOptions(request, runtime);
  }

  /**
   * Sends multiple card messages at a time.
   * 
   * @remarks
   * You can call the operation to send multiple card messages to a maximum of mobile phone numbers at a time. Different signatures and rollback settings can be specified for the mobile phone numbers.
   * ### QPS limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SendBatchCardSmsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendBatchCardSmsResponse
   */
  async sendBatchCardSmsWithOptions(request: $_model.SendBatchCardSmsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendBatchCardSmsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cardTemplateCode)) {
      query["CardTemplateCode"] = request.cardTemplateCode;
    }

    if (!$dara.isNull(request.cardTemplateParamJson)) {
      query["CardTemplateParamJson"] = request.cardTemplateParamJson;
    }

    if (!$dara.isNull(request.digitalTemplateCode)) {
      query["DigitalTemplateCode"] = request.digitalTemplateCode;
    }

    if (!$dara.isNull(request.digitalTemplateParamJson)) {
      query["DigitalTemplateParamJson"] = request.digitalTemplateParamJson;
    }

    if (!$dara.isNull(request.fallbackType)) {
      query["FallbackType"] = request.fallbackType;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.phoneNumberJson)) {
      query["PhoneNumberJson"] = request.phoneNumberJson;
    }

    if (!$dara.isNull(request.signNameJson)) {
      query["SignNameJson"] = request.signNameJson;
    }

    if (!$dara.isNull(request.smsTemplateCode)) {
      query["SmsTemplateCode"] = request.smsTemplateCode;
    }

    if (!$dara.isNull(request.smsTemplateParamJson)) {
      query["SmsTemplateParamJson"] = request.smsTemplateParamJson;
    }

    if (!$dara.isNull(request.smsUpExtendCodeJson)) {
      query["SmsUpExtendCodeJson"] = request.smsUpExtendCodeJson;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateParamJson)) {
      query["TemplateParamJson"] = request.templateParamJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendBatchCardSms",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendBatchCardSmsResponse>(await this.callApi(params, req, runtime), new $_model.SendBatchCardSmsResponse({}));
  }

  /**
   * Sends multiple card messages at a time.
   * 
   * @remarks
   * You can call the operation to send multiple card messages to a maximum of mobile phone numbers at a time. Different signatures and rollback settings can be specified for the mobile phone numbers.
   * ### QPS limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SendBatchCardSmsRequest
   * @returns SendBatchCardSmsResponse
   */
  async sendBatchCardSms(request: $_model.SendBatchCardSmsRequest): Promise<$_model.SendBatchCardSmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendBatchCardSmsWithOptions(request, runtime);
  }

  /**
   * Uses a single message template and multiple signatures to send messages to multiple recipients.
   * 
   * @remarks
   * You can call the operation to send messages to a maximum of 100 recipients at a time.
   * 
   * @param request - SendBatchSmsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendBatchSmsResponse
   */
  async sendBatchSmsWithOptions(request: $_model.SendBatchSmsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendBatchSmsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
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

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.phoneNumberJson)) {
      body["PhoneNumberJson"] = request.phoneNumberJson;
    }

    if (!$dara.isNull(request.signNameJson)) {
      body["SignNameJson"] = request.signNameJson;
    }

    if (!$dara.isNull(request.smsUpExtendCodeJson)) {
      body["SmsUpExtendCodeJson"] = request.smsUpExtendCodeJson;
    }

    if (!$dara.isNull(request.templateParamJson)) {
      body["TemplateParamJson"] = request.templateParamJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendBatchSms",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendBatchSmsResponse>(await this.callApi(params, req, runtime), new $_model.SendBatchSmsResponse({}));
  }

  /**
   * Uses a single message template and multiple signatures to send messages to multiple recipients.
   * 
   * @remarks
   * You can call the operation to send messages to a maximum of 100 recipients at a time.
   * 
   * @param request - SendBatchSmsRequest
   * @returns SendBatchSmsResponse
   */
  async sendBatchSms(request: $_model.SendBatchSmsRequest): Promise<$_model.SendBatchSmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendBatchSmsWithOptions(request, runtime);
  }

  /**
   * Sends a card message.
   * 
   * @remarks
   *   Make sure that the message template that you want to use has been approved. If the mobile phone number of a recipient does not support card messages, the SendCardSms operation allows the rollback feature to ensure successful delivery.
   * *   When you call the SendCardSms operation to send card messages, the operation checks whether the mobile phone numbers of the recipients support card messages. If the mobile phone numbers do not support card messages, you can specify whether to enable rollback. Otherwise, the card message cannot be delivered.
   * ### QPS limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SendCardSmsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendCardSmsResponse
   */
  async sendCardSmsWithOptions(request: $_model.SendCardSmsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendCardSmsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cardObjects)) {
      query["CardObjects"] = request.cardObjects;
    }

    if (!$dara.isNull(request.cardTemplateCode)) {
      query["CardTemplateCode"] = request.cardTemplateCode;
    }

    if (!$dara.isNull(request.digitalTemplateCode)) {
      query["DigitalTemplateCode"] = request.digitalTemplateCode;
    }

    if (!$dara.isNull(request.digitalTemplateParam)) {
      query["DigitalTemplateParam"] = request.digitalTemplateParam;
    }

    if (!$dara.isNull(request.fallbackType)) {
      query["FallbackType"] = request.fallbackType;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.smsTemplateCode)) {
      query["SmsTemplateCode"] = request.smsTemplateCode;
    }

    if (!$dara.isNull(request.smsTemplateParam)) {
      query["SmsTemplateParam"] = request.smsTemplateParam;
    }

    if (!$dara.isNull(request.smsUpExtendCode)) {
      query["SmsUpExtendCode"] = request.smsUpExtendCode;
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
      action: "SendCardSms",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendCardSmsResponse>(await this.callApi(params, req, runtime), new $_model.SendCardSmsResponse({}));
  }

  /**
   * Sends a card message.
   * 
   * @remarks
   *   Make sure that the message template that you want to use has been approved. If the mobile phone number of a recipient does not support card messages, the SendCardSms operation allows the rollback feature to ensure successful delivery.
   * *   When you call the SendCardSms operation to send card messages, the operation checks whether the mobile phone numbers of the recipients support card messages. If the mobile phone numbers do not support card messages, you can specify whether to enable rollback. Otherwise, the card message cannot be delivered.
   * ### QPS limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SendCardSmsRequest
   * @returns SendCardSmsResponse
   */
  async sendCardSms(request: $_model.SendCardSmsRequest): Promise<$_model.SendCardSmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendCardSmsWithOptions(request, runtime);
  }

  /**
   * Sends a message. Before you call this operation, submit a message signature and message template, and make sure that the signature and template are approved.
   * 
   * @remarks
   *   This operation is mainly used to send a single message. In special scenarios, you can send multiple messages with the same content to a maximum of 1,000 mobile numbers. Note that group sending may be delayed.
   * *   To send messages with different signatures and template content to multiple mobile numbers in a single request, call the [SendBatchSms](https://help.aliyun.com/document_detail/102364.html) operation.
   * *   You are charged for using Alibaba Cloud Short Message Service (SMS) based on the amount of messages sent. For more information, see [Pricing](https://www.aliyun.com/price/product#/sms/detail).
   * *   If your verification code signature and general-purpose signature have the same name, the system uses the general-purpose signature to send messages by default.
   * 
   * @param request - SendSmsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendSmsResponse
   */
  async sendSmsWithOptions(request: $_model.SendSmsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendSmsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumbers)) {
      query["PhoneNumbers"] = request.phoneNumbers;
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

    if (!$dara.isNull(request.smsUpExtendCode)) {
      query["SmsUpExtendCode"] = request.smsUpExtendCode;
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
      action: "SendSms",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendSmsResponse>(await this.callApi(params, req, runtime), new $_model.SendSmsResponse({}));
  }

  /**
   * Sends a message. Before you call this operation, submit a message signature and message template, and make sure that the signature and template are approved.
   * 
   * @remarks
   *   This operation is mainly used to send a single message. In special scenarios, you can send multiple messages with the same content to a maximum of 1,000 mobile numbers. Note that group sending may be delayed.
   * *   To send messages with different signatures and template content to multiple mobile numbers in a single request, call the [SendBatchSms](https://help.aliyun.com/document_detail/102364.html) operation.
   * *   You are charged for using Alibaba Cloud Short Message Service (SMS) based on the amount of messages sent. For more information, see [Pricing](https://www.aliyun.com/price/product#/sms/detail).
   * *   If your verification code signature and general-purpose signature have the same name, the system uses the general-purpose signature to send messages by default.
   * 
   * @param request - SendSmsRequest
   * @returns SendSmsResponse
   */
  async sendSms(request: $_model.SendSmsRequest): Promise<$_model.SendSmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendSmsWithOptions(request, runtime);
  }

  /**
   * Reports the status of an OTP message to Alibaba Cloud SMS.
   * 
   * @remarks
   * Metrics:
   * *   Requested OTP messages
   * *   Verified OTP messages
   * An OTP conversion rate is calculated based on the following formula: OTP conversion rate = Number of verified OTP messages/Number of requested OTP messages.
   * > If you call the SmsConversion operation to query OTP conversion rates, your business may be affected. We recommend that you perform the following operations: 1. Call the SmsConversion operation in an asynchronous manner by configuring queues or events. 2. Manually degrade your services or use a circuit breaker to automatically degrade services.
   * 
   * @param request - SmsConversionIntlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmsConversionIntlResponse
   */
  async smsConversionIntlWithOptions(request: $_model.SmsConversionIntlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SmsConversionIntlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conversionTime)) {
      query["ConversionTime"] = request.conversionTime;
    }

    if (!$dara.isNull(request.delivered)) {
      query["Delivered"] = request.delivered;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
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
      action: "SmsConversionIntl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SmsConversionIntlResponse>(await this.callApi(params, req, runtime), new $_model.SmsConversionIntlResponse({}));
  }

  /**
   * Reports the status of an OTP message to Alibaba Cloud SMS.
   * 
   * @remarks
   * Metrics:
   * *   Requested OTP messages
   * *   Verified OTP messages
   * An OTP conversion rate is calculated based on the following formula: OTP conversion rate = Number of verified OTP messages/Number of requested OTP messages.
   * > If you call the SmsConversion operation to query OTP conversion rates, your business may be affected. We recommend that you perform the following operations: 1. Call the SmsConversion operation in an asynchronous manner by configuring queues or events. 2. Manually degrade your services or use a circuit breaker to automatically degrade services.
   * 
   * @param request - SmsConversionIntlRequest
   * @returns SmsConversionIntlResponse
   */
  async smsConversionIntl(request: $_model.SmsConversionIntlRequest): Promise<$_model.SmsConversionIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.smsConversionIntlWithOptions(request, runtime);
  }

  /**
   * 创建资质对客openAPI
   * 
   * @param tmpReq - SubmitSmsQualificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSmsQualificationResponse
   */
  async submitSmsQualificationWithOptions(tmpReq: $_model.SubmitSmsQualificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSmsQualificationResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitSmsQualificationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.businessLicensePics)) {
      request.businessLicensePicsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.businessLicensePics, "BusinessLicensePics", "json");
    }

    if (!$dara.isNull(tmpReq.otherFiles)) {
      request.otherFilesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.otherFiles, "OtherFiles", "json");
    }

    let query = { };
    if (!$dara.isNull(request.adminIDCardExpDate)) {
      query["AdminIDCardExpDate"] = request.adminIDCardExpDate;
    }

    if (!$dara.isNull(request.adminIDCardFrontFace)) {
      query["AdminIDCardFrontFace"] = request.adminIDCardFrontFace;
    }

    if (!$dara.isNull(request.adminIDCardNo)) {
      query["AdminIDCardNo"] = request.adminIDCardNo;
    }

    if (!$dara.isNull(request.adminIDCardPic)) {
      query["AdminIDCardPic"] = request.adminIDCardPic;
    }

    if (!$dara.isNull(request.adminIDCardType)) {
      query["AdminIDCardType"] = request.adminIDCardType;
    }

    if (!$dara.isNull(request.adminName)) {
      query["AdminName"] = request.adminName;
    }

    if (!$dara.isNull(request.adminPhoneNo)) {
      query["AdminPhoneNo"] = request.adminPhoneNo;
    }

    if (!$dara.isNull(request.businessLicensePicsShrink)) {
      query["BusinessLicensePics"] = request.businessLicensePicsShrink;
    }

    if (!$dara.isNull(request.bussinessLicenseExpDate)) {
      query["BussinessLicenseExpDate"] = request.bussinessLicenseExpDate;
    }

    if (!$dara.isNull(request.certifyCode)) {
      query["CertifyCode"] = request.certifyCode;
    }

    if (!$dara.isNull(request.companyName)) {
      query["CompanyName"] = request.companyName;
    }

    if (!$dara.isNull(request.companyType)) {
      query["CompanyType"] = request.companyType;
    }

    if (!$dara.isNull(request.legalPersonIDCardNo)) {
      query["LegalPersonIDCardNo"] = request.legalPersonIDCardNo;
    }

    if (!$dara.isNull(request.legalPersonIDCardType)) {
      query["LegalPersonIDCardType"] = request.legalPersonIDCardType;
    }

    if (!$dara.isNull(request.legalPersonIdCardBackSide)) {
      query["LegalPersonIdCardBackSide"] = request.legalPersonIdCardBackSide;
    }

    if (!$dara.isNull(request.legalPersonIdCardEffTime)) {
      query["LegalPersonIdCardEffTime"] = request.legalPersonIdCardEffTime;
    }

    if (!$dara.isNull(request.legalPersonIdCardFrontSide)) {
      query["LegalPersonIdCardFrontSide"] = request.legalPersonIdCardFrontSide;
    }

    if (!$dara.isNull(request.legalPersonName)) {
      query["LegalPersonName"] = request.legalPersonName;
    }

    if (!$dara.isNull(request.organizationCode)) {
      query["OrganizationCode"] = request.organizationCode;
    }

    if (!$dara.isNull(request.otherFilesShrink)) {
      query["OtherFiles"] = request.otherFilesShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qualificationName)) {
      query["QualificationName"] = request.qualificationName;
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

    if (!$dara.isNull(request.useBySelf)) {
      query["UseBySelf"] = request.useBySelf;
    }

    if (!$dara.isNull(request.whetherShare)) {
      query["WhetherShare"] = request.whetherShare;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSmsQualification",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSmsQualificationResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSmsQualificationResponse({}));
  }

  /**
   * 创建资质对客openAPI
   * 
   * @param request - SubmitSmsQualificationRequest
   * @returns SubmitSmsQualificationResponse
   */
  async submitSmsQualification(request: $_model.SubmitSmsQualificationRequest): Promise<$_model.SubmitSmsQualificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSmsQualificationWithOptions(request, runtime);
  }

  /**
   * Attaches tags to a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
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
      version: "2017-05-25",
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
   * Attaches tags to a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Deletes tags from a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2017-05-25",
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
   * Deletes tags from a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * 修改验证码签名
   * 
   * @param request - UpdateExtCodeSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExtCodeSignResponse
   */
  async updateExtCodeSignWithOptions(request: $_model.UpdateExtCodeSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExtCodeSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.existExtCode)) {
      query["ExistExtCode"] = request.existExtCode;
    }

    if (!$dara.isNull(request.newExtCode)) {
      query["NewExtCode"] = request.newExtCode;
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

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExtCodeSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateExtCodeSignResponse>(await this.callApi(params, req, runtime), new $_model.UpdateExtCodeSignResponse({}));
  }

  /**
   * 修改验证码签名
   * 
   * @param request - UpdateExtCodeSignRequest
   * @returns UpdateExtCodeSignResponse
   */
  async updateExtCodeSign(request: $_model.UpdateExtCodeSignRequest): Promise<$_model.UpdateExtCodeSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateExtCodeSignWithOptions(request, runtime);
  }

  /**
   * 修改资质对客openAPI
   * 
   * @param tmpReq - UpdateSmsQualificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmsQualificationResponse
   */
  async updateSmsQualificationWithOptions(tmpReq: $_model.UpdateSmsQualificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmsQualificationResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSmsQualificationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.businessLicensePics)) {
      request.businessLicensePicsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.businessLicensePics, "BusinessLicensePics", "json");
    }

    if (!$dara.isNull(tmpReq.otherFiles)) {
      request.otherFilesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.otherFiles, "OtherFiles", "json");
    }

    let query = { };
    if (!$dara.isNull(request.adminIDCardExpDate)) {
      query["AdminIDCardExpDate"] = request.adminIDCardExpDate;
    }

    if (!$dara.isNull(request.adminIDCardFrontFace)) {
      query["AdminIDCardFrontFace"] = request.adminIDCardFrontFace;
    }

    if (!$dara.isNull(request.adminIDCardNo)) {
      query["AdminIDCardNo"] = request.adminIDCardNo;
    }

    if (!$dara.isNull(request.adminIDCardPic)) {
      query["AdminIDCardPic"] = request.adminIDCardPic;
    }

    if (!$dara.isNull(request.adminIDCardType)) {
      query["AdminIDCardType"] = request.adminIDCardType;
    }

    if (!$dara.isNull(request.adminName)) {
      query["AdminName"] = request.adminName;
    }

    if (!$dara.isNull(request.adminPhoneNo)) {
      query["AdminPhoneNo"] = request.adminPhoneNo;
    }

    if (!$dara.isNull(request.businessLicensePicsShrink)) {
      query["BusinessLicensePics"] = request.businessLicensePicsShrink;
    }

    if (!$dara.isNull(request.bussinessLicenseExpDate)) {
      query["BussinessLicenseExpDate"] = request.bussinessLicenseExpDate;
    }

    if (!$dara.isNull(request.certifyCode)) {
      query["CertifyCode"] = request.certifyCode;
    }

    if (!$dara.isNull(request.companyName)) {
      query["CompanyName"] = request.companyName;
    }

    if (!$dara.isNull(request.legalPersonIDCardNo)) {
      query["LegalPersonIDCardNo"] = request.legalPersonIDCardNo;
    }

    if (!$dara.isNull(request.legalPersonIDCardType)) {
      query["LegalPersonIDCardType"] = request.legalPersonIDCardType;
    }

    if (!$dara.isNull(request.legalPersonIdCardBackSide)) {
      query["LegalPersonIdCardBackSide"] = request.legalPersonIdCardBackSide;
    }

    if (!$dara.isNull(request.legalPersonIdCardEffTime)) {
      query["LegalPersonIdCardEffTime"] = request.legalPersonIdCardEffTime;
    }

    if (!$dara.isNull(request.legalPersonIdCardFrontSide)) {
      query["LegalPersonIdCardFrontSide"] = request.legalPersonIdCardFrontSide;
    }

    if (!$dara.isNull(request.legalPersonName)) {
      query["LegalPersonName"] = request.legalPersonName;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.otherFilesShrink)) {
      query["OtherFiles"] = request.otherFilesShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qualificationGroupId)) {
      query["QualificationGroupId"] = request.qualificationGroupId;
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
      action: "UpdateSmsQualification",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmsQualificationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmsQualificationResponse({}));
  }

  /**
   * 修改资质对客openAPI
   * 
   * @param request - UpdateSmsQualificationRequest
   * @returns UpdateSmsQualificationResponse
   */
  async updateSmsQualification(request: $_model.UpdateSmsQualificationRequest): Promise<$_model.UpdateSmsQualificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmsQualificationWithOptions(request, runtime);
  }

  /**
   * Update Text SMS Signature
   * 
   * @remarks
   * - For details about the changes of this new interface and the original one, please refer to [Announcement on the Update of SMS Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Only signatures that have not passed the review can be modified. Please refer to [Handling Suggestions for Failed SMS Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm) and call this interface to modify and resubmit for review after modification.
   * - Signature information applied through the interface will be synchronized in the SMS service console. For operations related to signatures in the console, please see [SMS Signatures](https://help.aliyun.com/zh/sms/user-guide/create-signatures?spm).
   * 
   * @param tmpReq - UpdateSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmsSignResponse
   */
  async updateSmsSignWithOptions(tmpReq: $_model.UpdateSmsSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmsSignResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSmsSignShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.moreData)) {
      request.moreDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.moreData, "MoreData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applySceneContent)) {
      query["ApplySceneContent"] = request.applySceneContent;
    }

    if (!$dara.isNull(request.authorizationLetterId)) {
      query["AuthorizationLetterId"] = request.authorizationLetterId;
    }

    if (!$dara.isNull(request.moreDataShrink)) {
      query["MoreData"] = request.moreDataShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
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

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.signSource)) {
      query["SignSource"] = request.signSource;
    }

    if (!$dara.isNull(request.signType)) {
      query["SignType"] = request.signType;
    }

    if (!$dara.isNull(request.thirdParty)) {
      query["ThirdParty"] = request.thirdParty;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmsSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmsSignResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmsSignResponse({}));
  }

  /**
   * Update Text SMS Signature
   * 
   * @remarks
   * - For details about the changes of this new interface and the original one, please refer to [Announcement on the Update of SMS Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Only signatures that have not passed the review can be modified. Please refer to [Handling Suggestions for Failed SMS Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm) and call this interface to modify and resubmit for review after modification.
   * - Signature information applied through the interface will be synchronized in the SMS service console. For operations related to signatures in the console, please see [SMS Signatures](https://help.aliyun.com/zh/sms/user-guide/create-signatures?spm).
   * 
   * @param request - UpdateSmsSignRequest
   * @returns UpdateSmsSignResponse
   */
  async updateSmsSign(request: $_model.UpdateSmsSignRequest): Promise<$_model.UpdateSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmsSignWithOptions(request, runtime);
  }

  /**
   * Update Text SMS Template
   * 
   * @remarks
   * - For details about the changes of this new interface compared to the original one, please refer to [Announcement on SMS Service Update: Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Only templates that have not passed the review can be modified. Please refer to [Handling Suggestions for Failed SMS Template Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm=a2c4g.11186623.0.0.4bf5561ajcFtMQ) and call this interface to modify and resubmit for review.
   * - Modifications made through the interface will be synchronized in the SMS service console. For related operations on templates in the console, see [SMS Templates](https://help.aliyun.com/zh/sms/user-guide/message-templates/?spm=a2c4g.11186623.0.0.35a947464Itaxp).
   * ### QPS Limit
   * The single-user QPS limit for this interface is 1000 times/second. Exceeding this limit will result in API throttling, which may impact your business. Please make calls reasonably.
   * 
   * @param tmpReq - UpdateSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmsTemplateResponse
   */
  async updateSmsTemplateWithOptions(tmpReq: $_model.UpdateSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmsTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSmsTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.moreData)) {
      request.moreDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.moreData, "MoreData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applySceneContent)) {
      query["ApplySceneContent"] = request.applySceneContent;
    }

    if (!$dara.isNull(request.intlType)) {
      query["IntlType"] = request.intlType;
    }

    if (!$dara.isNull(request.moreDataShrink)) {
      query["MoreData"] = request.moreDataShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.relatedSignName)) {
      query["RelatedSignName"] = request.relatedSignName;
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

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmsTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmsTemplateResponse({}));
  }

  /**
   * Update Text SMS Template
   * 
   * @remarks
   * - For details about the changes of this new interface compared to the original one, please refer to [Announcement on SMS Service Update: Signature & Template Interfaces](https://help.aliyun.com/zh/sms/product-overview/announcement-on-sms-service-update-signature-template-interface).
   * - Only templates that have not passed the review can be modified. Please refer to [Handling Suggestions for Failed SMS Template Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm=a2c4g.11186623.0.0.4bf5561ajcFtMQ) and call this interface to modify and resubmit for review.
   * - Modifications made through the interface will be synchronized in the SMS service console. For related operations on templates in the console, see [SMS Templates](https://help.aliyun.com/zh/sms/user-guide/message-templates/?spm=a2c4g.11186623.0.0.35a947464Itaxp).
   * ### QPS Limit
   * The single-user QPS limit for this interface is 1000 times/second. Exceeding this limit will result in API throttling, which may impact your business. Please make calls reasonably.
   * 
   * @param request - UpdateSmsTemplateRequest
   * @returns UpdateSmsTemplateResponse
   */
  async updateSmsTemplate(request: $_model.UpdateSmsTemplateRequest): Promise<$_model.UpdateSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmsTemplateWithOptions(request, runtime);
  }

  /**
   * 发送手机验证码
   * 
   * @param request - ValidPhoneCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidPhoneCodeResponse
   */
  async validPhoneCodeWithOptions(request: $_model.ValidPhoneCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidPhoneCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certifyCode)) {
      query["CertifyCode"] = request.certifyCode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNo)) {
      query["PhoneNo"] = request.phoneNo;
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
      action: "ValidPhoneCode",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidPhoneCodeResponse>(await this.callApi(params, req, runtime), new $_model.ValidPhoneCodeResponse({}));
  }

  /**
   * 发送手机验证码
   * 
   * @param request - ValidPhoneCodeRequest
   * @returns ValidPhoneCodeResponse
   */
  async validPhoneCode(request: $_model.ValidPhoneCodeRequest): Promise<$_model.ValidPhoneCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validPhoneCodeWithOptions(request, runtime);
  }

}
