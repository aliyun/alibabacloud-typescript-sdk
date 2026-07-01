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
      'cn-zhangjiakou': "dysmsapi.aliyuncs.com",
      'cn-shenzhen-finance-1': "dysmsapi.aliyuncs.com",
      'cn-shenzhen': "dysmsapi.aliyuncs.com",
      'cn-shanghai-finance-1': "dysmsapi.aliyuncs.com",
      'cn-qingdao': "dysmsapi.aliyuncs.com",
      'cn-north-2-gov-1': "dysmsapi.aliyuncs.com",
      'cn-huhehaote': "dysmsapi.aliyuncs.com",
      'cn-hangzhou-finance': "dysmsapi.aliyuncs.com",
      'cn-hangzhou': "dysmsapi.aliyuncs.com",
      'cn-chengdu': "dysmsapi.aliyuncs.com",
      'cn-beijing-finance-1': "dysmsapi.aliyuncs.com",
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
   * 创建/编辑5G消息固定菜单
   * 
   * @param request - AddRcsSignMenuRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRcsSignMenuResponse
   */
  async addRcsSignMenuWithOptions(request: $_model.AddRcsSignMenuRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddRcsSignMenuResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.menuContent)) {
      query["MenuContent"] = request.menuContent;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRcsSignMenu",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRcsSignMenuResponse>(await this.callApi(params, req, runtime), new $_model.AddRcsSignMenuResponse({}));
  }

  /**
   * 创建/编辑5G消息固定菜单
   * 
   * @param request - AddRcsSignMenuRequest
   * @returns AddRcsSignMenuResponse
   */
  async addRcsSignMenu(request: $_model.AddRcsSignMenuRequest): Promise<$_model.AddRcsSignMenuResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRcsSignMenuWithOptions(request, runtime);
  }

  /**
   * Creates a short URL.
   * 
   * @remarks
   * >Notice: 
   * Short Message Service does not currently support this API operation.
   * - You can create up to 3,000 short URLs per calendar day.
   * - After a short URL is generated, it must pass a security review, which typically takes 10 minutes to 2 hours. You cannot access the short URL until it passes this review.
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
   * >Notice: 
   * Short Message Service does not currently support this API operation.
   * - You can create up to 3,000 short URLs per calendar day.
   * - After a short URL is generated, it must pass a security review, which typically takes 10 minutes to 2 hours. You cannot access the short URL until it passes this review.
   * 
   * @param request - AddShortUrlRequest
   * @returns AddShortUrlResponse
   */
  async addShortUrl(request: $_model.AddShortUrlRequest): Promise<$_model.AddShortUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addShortUrlWithOptions(request, runtime);
  }

  /**
   * This API has been discontinued.
   * 
   * @remarks
   * - In accordance with the regulations of the Ministry of Industry and Information Technology (MIIT) and the [relevant requirements](https://help.aliyun.com/document_detail/2806975.html) of carriers, Alibaba Cloud has made functional modifications to signature-related APIs. To improve the review efficiency and approval rate of your signatures, use the new API [CreateSmsSign - Apply for an SMS signature](https://help.aliyun.com/document_detail/2807427.html).
   * - An individual user can apply for one signature per natural day under the same Alibaba Cloud account. Enterprise users have no limit on the number of applications. For details about the differences in rights and interests between individual users and enterprise users, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * - The signature information applied for through the API is synchronized to the SMS console. For operations on signatures in the console, see [SMS signatures](https://help.aliyun.com/document_detail/108073.html).
   * - After you submit a signature application, you can call the [QuerySmsSign](https://help.aliyun.com/document_detail/419283.html) API to query the review status and details of the signature. You can also [configure receipt messages](https://help.aliyun.com/document_detail/101508.html) and use [SignSmsReport](https://help.aliyun.com/document_detail/120998.html) to obtain signature review status messages.
   * ### QPS limit
   * The single-user QPS limit for this API is 1 call per second. If the limit is exceeded, API calls will be throttled, which may affect your business. Call this API at a reasonable rate.
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
   * This API has been discontinued.
   * 
   * @remarks
   * - In accordance with the regulations of the Ministry of Industry and Information Technology (MIIT) and the [relevant requirements](https://help.aliyun.com/document_detail/2806975.html) of carriers, Alibaba Cloud has made functional modifications to signature-related APIs. To improve the review efficiency and approval rate of your signatures, use the new API [CreateSmsSign - Apply for an SMS signature](https://help.aliyun.com/document_detail/2807427.html).
   * - An individual user can apply for one signature per natural day under the same Alibaba Cloud account. Enterprise users have no limit on the number of applications. For details about the differences in rights and interests between individual users and enterprise users, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * - The signature information applied for through the API is synchronized to the SMS console. For operations on signatures in the console, see [SMS signatures](https://help.aliyun.com/document_detail/108073.html).
   * - After you submit a signature application, you can call the [QuerySmsSign](https://help.aliyun.com/document_detail/419283.html) API to query the review status and details of the signature. You can also [configure receipt messages](https://help.aliyun.com/document_detail/101508.html) and use [SignSmsReport](https://help.aliyun.com/document_detail/120998.html) to obtain signature review status messages.
   * ### QPS limit
   * The single-user QPS limit for this API is 1 call per second. If the limit is exceeded, API calls will be throttled, which may affect your business. Call this API at a reasonable rate.
   * 
   * @param request - AddSmsSignRequest
   * @returns AddSmsSignResponse
   */
  async addSmsSign(request: $_model.AddSmsSignRequest): Promise<$_model.AddSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSmsSignWithOptions(request, runtime);
  }

  /**
   * An SMS template is the detailed content received by the recipient, including variables and template content. You can apply for verification code, notification, or promotional SMS templates based on your business needs. SMS can only be sent after the template is approved.
   * 
   * @remarks
   * - In accordance with the regulations of the Ministry of Industry and Information Technology and the [related requirements](https://help.aliyun.com/document_detail/2806975.html) of carriers, Alibaba Cloud has revamped the functionality of template-related APIs. To improve the review efficiency and approval rate of your templates, please use the new operation [CreateSmsTemplate - Apply for SMS template](https://help.aliyun.com/document_detail/2807431.html).
   * - You can submit a maximum of 100 SMS template applications per natural day via the API. It is recommended that each application be submitted at intervals of at least 30 seconds. There is no limit on the number of submissions when applying for SMS templates through the [console](https://dysms.console.aliyun.com/domestic/text/template).
   * - Template information applied for through the API is synchronized to the SMS service console. For related template operations in the console, see [SMS templates](https://help.aliyun.com/document_detail/108085.html).
   * - After submitting the template application, you can query the template review status and details through the [QuerySmsTemplate](https://help.aliyun.com/document_detail/419289.html) operation. You can also [configure receipt messages](https://help.aliyun.com/document_detail/101508.html) and obtain the template review status messages through [TemplateSmsReport](https://help.aliyun.com/document_detail/120999.html).
   * - Domestic SMS templates and international/Hong Kong, Macao, and Taiwan SMS templates are not interchangeable (cannot be mixed). Please apply for templates based on your business usage scenarios.
   * - Only enterprise-verified users can apply for promotional SMS and international/Hong Kong, Macao, and Taiwan messages. For details about the differences between individual and enterprise user privileges, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limits
   * The per-user QPS limit for this operation is 1,000 calls per second. If the limit is exceeded, API calls will be throttled, which may affect your business. Please call the operation reasonably.
   * 
   * @deprecated OpenAPI AddSmsTemplate is deprecated, please use Dysmsapi::2017-05-25::CreateSmsTemplate instead.
   * 
   * @param request - AddSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSmsTemplateResponse
   */
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
   * An SMS template is the detailed content received by the recipient, including variables and template content. You can apply for verification code, notification, or promotional SMS templates based on your business needs. SMS can only be sent after the template is approved.
   * 
   * @remarks
   * - In accordance with the regulations of the Ministry of Industry and Information Technology and the [related requirements](https://help.aliyun.com/document_detail/2806975.html) of carriers, Alibaba Cloud has revamped the functionality of template-related APIs. To improve the review efficiency and approval rate of your templates, please use the new operation [CreateSmsTemplate - Apply for SMS template](https://help.aliyun.com/document_detail/2807431.html).
   * - You can submit a maximum of 100 SMS template applications per natural day via the API. It is recommended that each application be submitted at intervals of at least 30 seconds. There is no limit on the number of submissions when applying for SMS templates through the [console](https://dysms.console.aliyun.com/domestic/text/template).
   * - Template information applied for through the API is synchronized to the SMS service console. For related template operations in the console, see [SMS templates](https://help.aliyun.com/document_detail/108085.html).
   * - After submitting the template application, you can query the template review status and details through the [QuerySmsTemplate](https://help.aliyun.com/document_detail/419289.html) operation. You can also [configure receipt messages](https://help.aliyun.com/document_detail/101508.html) and obtain the template review status messages through [TemplateSmsReport](https://help.aliyun.com/document_detail/120999.html).
   * - Domestic SMS templates and international/Hong Kong, Macao, and Taiwan SMS templates are not interchangeable (cannot be mixed). Please apply for templates based on your business usage scenarios.
   * - Only enterprise-verified users can apply for promotional SMS and international/Hong Kong, Macao, and Taiwan messages. For details about the differences between individual and enterprise user privileges, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * ### QPS limits
   * The per-user QPS limit for this operation is 1,000 calls per second. If the limit is exceeded, API calls will be throttled, which may affect your business. Please call the operation reasonably.
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
   * Updates the qualification and authorization letter for a signature.
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
   * Updates the qualification and authorization letter for a signature.
   * 
   * @param request - ChangeSignatureQualificationRequest
   * @returns ChangeSignatureQualificationResponse
   */
  async changeSignatureQualification(request: $_model.ChangeSignatureQualificationRequest): Promise<$_model.ChangeSignatureQualificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeSignatureQualificationWithOptions(request, runtime);
  }

  /**
   * Checks whether phone numbers support card SMS.
   * 
   * @remarks
   * - Alibaba Cloud accounts that have not activated card SMS cannot call this API.
   * - Card SMS is currently in the internal invitation phase. Contact your Alibaba Cloud account manager to apply for activation or [contact Alibaba Cloud pre-sales](https://help.aliyun.com/document_detail/464625.html).
   * - We recommend that you use the new API [QueryMobilesCardSupport](~~QueryMobilesCardSupport~~) to query whether phone numbers support card SMS.
   * ### QPS limit
   * The per-user QPS limit for this API is 2,000 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Make calls reasonably.
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
   * Checks whether phone numbers support card SMS.
   * 
   * @remarks
   * - Alibaba Cloud accounts that have not activated card SMS cannot call this API.
   * - Card SMS is currently in the internal invitation phase. Contact your Alibaba Cloud account manager to apply for activation or [contact Alibaba Cloud pre-sales](https://help.aliyun.com/document_detail/464625.html).
   * - We recommend that you use the new API [QueryMobilesCardSupport](~~QueryMobilesCardSupport~~) to query whether phone numbers support card SMS.
   * ### QPS limit
   * The per-user QPS limit for this API is 2,000 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Make calls reasonably.
   * 
   * @param request - CheckMobilesCardSupportRequest
   * @returns CheckMobilesCardSupportResponse
   */
  async checkMobilesCardSupport(request: $_model.CheckMobilesCardSupportRequest): Promise<$_model.CheckMobilesCardSupportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkMobilesCardSupportWithOptions(request, runtime);
  }

  /**
   * Reports SMS conversion rate statistics to the Alibaba Cloud SMS platform.
   * 
   * @remarks
   * 指标说明：转化率=OTP 转化量/OTP 发送量。
   * - OTP发送量：验证码发送量。
   * - OTP转化量：验证码转换量。（用户成功获取验证码，并进行回传）
   * >转化率反馈功能会对业务系统有一定的侵入性，为了防止调用转化率 API 的抖动影响业务逻辑，请考虑： 
   * >- 使用异步模式（例如：队列或事件驱动）调用 API。 
   * >- 添加可降级的方案保护业务逻辑（例如：手动降级开工或者使用断路器自动降级）。
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
   * Reports SMS conversion rate statistics to the Alibaba Cloud SMS platform.
   * 
   * @remarks
   * 指标说明：转化率=OTP 转化量/OTP 发送量。
   * - OTP发送量：验证码发送量。
   * - OTP转化量：验证码转换量。（用户成功获取验证码，并进行回传）
   * >转化率反馈功能会对业务系统有一定的侵入性，为了防止调用转化率 API 的抖动影响业务逻辑，请考虑： 
   * >- 使用异步模式（例如：队列或事件驱动）调用 API。 
   * >- 添加可降级的方案保护业务逻辑（例如：手动降级开工或者使用断路器自动降级）。
   * 
   * @param request - ConversionDataIntlRequest
   * @returns ConversionDataIntlResponse
   */
  async conversionDataIntl(request: $_model.ConversionDataIntlRequest): Promise<$_model.ConversionDataIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.conversionDataIntlWithOptions(request, runtime);
  }

  /**
   * Creates a card SMS template.
   * 
   * @remarks
   * - The card SMS feature is currently available by invitation only. To enable this feature, contact your Alibaba Cloud business manager or our [pre-sales consultation](https://help.aliyun.com/document_detail/464625.html?spm=a2c4g.11186623.0.0.213273d4Xe6UEu#section-81n-72q-ybm) team.
   * - This operation saves a card SMS template, submits it to mobile phone vendors for review, and returns a template code.
   * - If a card SMS template contains a type or event that a vendor does not support, the system does not submit the template to that vendor for review. For more information, see [Supported template types by vendor](https://help.aliyun.com/document_detail/434611.html).
   * - For more examples of card SMS templates, see [Card SMS template examples](https://help.aliyun.com/document_detail/435361.html).
   * ### QPS limit
   * The QPS limit for a single user is 300. API calls that exceed this limit are throttled, which may impact your business. Plan your calls accordingly.
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
   * Creates a card SMS template.
   * 
   * @remarks
   * - The card SMS feature is currently available by invitation only. To enable this feature, contact your Alibaba Cloud business manager or our [pre-sales consultation](https://help.aliyun.com/document_detail/464625.html?spm=a2c4g.11186623.0.0.213273d4Xe6UEu#section-81n-72q-ybm) team.
   * - This operation saves a card SMS template, submits it to mobile phone vendors for review, and returns a template code.
   * - If a card SMS template contains a type or event that a vendor does not support, the system does not submit the template to that vendor for review. For more information, see [Supported template types by vendor](https://help.aliyun.com/document_detail/434611.html).
   * - For more examples of card SMS templates, see [Card SMS template examples](https://help.aliyun.com/document_detail/435361.html).
   * ### QPS limit
   * The QPS limit for a single user is 300. API calls that exceed this limit are throttled, which may impact your business. Plan your calls accordingly.
   * 
   * @param request - CreateCardSmsTemplateRequest
   * @returns CreateCardSmsTemplateResponse
   */
  async createCardSmsTemplate(request: $_model.CreateCardSmsTemplateRequest): Promise<$_model.CreateCardSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCardSmsTemplateWithOptions(request, runtime);
  }

  /**
   * Creates an order to add, update, or delete a digital message signature.
   * 
   * @remarks
   * Creates, updates, or deletes a signature.
   * 
   * @param tmpReq - CreateDigitalSignOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDigitalSignOrderResponse
   */
  async createDigitalSignOrderWithOptions(tmpReq: $_model.CreateDigitalSignOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDigitalSignOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDigitalSignOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.orderContext)) {
      request.orderContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderContext, "OrderContext", "json");
    }

    let query = { };
    if (!$dara.isNull(request.extendMessage)) {
      query["ExtendMessage"] = request.extendMessage;
    }

    if (!$dara.isNull(request.orderContextShrink)) {
      query["OrderContext"] = request.orderContextShrink;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!$dara.isNull(request.qualificationVersion)) {
      query["QualificationVersion"] = request.qualificationVersion;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signId)) {
      query["SignId"] = request.signId;
    }

    if (!$dara.isNull(request.signIndustry)) {
      query["SignIndustry"] = request.signIndustry;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!$dara.isNull(request.signSource)) {
      query["SignSource"] = request.signSource;
    }

    if (!$dara.isNull(request.submitter)) {
      query["Submitter"] = request.submitter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDigitalSignOrder",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDigitalSignOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateDigitalSignOrderResponse({}));
  }

  /**
   * Creates an order to add, update, or delete a digital message signature.
   * 
   * @remarks
   * Creates, updates, or deletes a signature.
   * 
   * @param request - CreateDigitalSignOrderRequest
   * @returns CreateDigitalSignOrderResponse
   */
  async createDigitalSignOrder(request: $_model.CreateDigitalSignOrderRequest): Promise<$_model.CreateDigitalSignOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDigitalSignOrderWithOptions(request, runtime);
  }

  /**
   * Creates a digital SMS template.
   * 
   * @remarks
   * Use this operation to create a reusable template for your digital SMS messages.
   * 
   * @param request - CreateDigitalSmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDigitalSmsTemplateResponse
   */
  async createDigitalSmsTemplateWithOptions(request: $_model.CreateDigitalSmsTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDigitalSmsTemplateResponse> {
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

    if (!$dara.isNull(request.templateContents)) {
      query["TemplateContents"] = request.templateContents;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDigitalSmsTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDigitalSmsTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateDigitalSmsTemplateResponse({}));
  }

  /**
   * Creates a digital SMS template.
   * 
   * @remarks
   * Use this operation to create a reusable template for your digital SMS messages.
   * 
   * @param request - CreateDigitalSmsTemplateRequest
   * @returns CreateDigitalSmsTemplateResponse
   */
  async createDigitalSmsTemplate(request: $_model.CreateDigitalSmsTemplateRequest): Promise<$_model.CreateDigitalSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDigitalSmsTemplateWithOptions(request, runtime);
  }

  /**
   * 创建终端5G适配情况查询任务
   * 
   * @param request - CreateRCSMobileCapableTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRCSMobileCapableTaskResponse
   */
  async createRCSMobileCapableTaskWithOptions(request: $_model.CreateRCSMobileCapableTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRCSMobileCapableTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.phoneNumbersFile)) {
      query["PhoneNumbersFile"] = request.phoneNumbersFile;
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
      action: "CreateRCSMobileCapableTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRCSMobileCapableTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateRCSMobileCapableTaskResponse({}));
  }

  /**
   * 创建终端5G适配情况查询任务
   * 
   * @param request - CreateRCSMobileCapableTaskRequest
   * @returns CreateRCSMobileCapableTaskResponse
   */
  async createRCSMobileCapableTask(request: $_model.CreateRCSMobileCapableTaskRequest): Promise<$_model.CreateRCSMobileCapableTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRCSMobileCapableTaskWithOptions(request, runtime);
  }

  /**
   * 创建5G消息模板
   * 
   * @param request - CreateRCSTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRCSTemplateResponse
   */
  async createRCSTemplateWithOptions(request: $_model.CreateRCSTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRCSTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.relatedSignNames)) {
      query["RelatedSignNames"] = request.relatedSignNames;
    }

    if (!$dara.isNull(request.templateContent)) {
      query["TemplateContent"] = request.templateContent;
    }

    if (!$dara.isNull(request.templateFormat)) {
      query["TemplateFormat"] = request.templateFormat;
    }

    if (!$dara.isNull(request.templateMenu)) {
      query["TemplateMenu"] = request.templateMenu;
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
      action: "CreateRCSTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRCSTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateRCSTemplateResponse({}));
  }

  /**
   * 创建5G消息模板
   * 
   * @param request - CreateRCSTemplateRequest
   * @returns CreateRCSTemplateResponse
   */
  async createRCSTemplate(request: $_model.CreateRCSTemplateRequest): Promise<$_model.CreateRCSTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRCSTemplateWithOptions(request, runtime);
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
   * The process for using a live app as a signature source has changed. If you use an app as the signature source, you must call this operation to create an ICP filing record for it.
   * 
   * @remarks
   * >Notice: To use a **live app** as a signature source, you must now provide its ICP filing information. This requires you to upload a screenshot of the app\\"s ICP filing.
   * 
   * @param request - CreateSmsAppIcpRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsAppIcpRecordResponse
   */
  async createSmsAppIcpRecordWithOptions(request: $_model.CreateSmsAppIcpRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsAppIcpRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appApprovalDate)) {
      query["AppApprovalDate"] = request.appApprovalDate;
    }

    if (!$dara.isNull(request.appIcpLicenseNumber)) {
      query["AppIcpLicenseNumber"] = request.appIcpLicenseNumber;
    }

    if (!$dara.isNull(request.appIcpRecordPic)) {
      query["AppIcpRecordPic"] = request.appIcpRecordPic;
    }

    if (!$dara.isNull(request.appPrincipalUnitName)) {
      query["AppPrincipalUnitName"] = request.appPrincipalUnitName;
    }

    if (!$dara.isNull(request.appRuntimePic)) {
      query["AppRuntimePic"] = request.appRuntimePic;
    }

    if (!$dara.isNull(request.appServiceName)) {
      query["AppServiceName"] = request.appServiceName;
    }

    if (!$dara.isNull(request.appStoreDownloadPic)) {
      query["AppStoreDownloadPic"] = request.appStoreDownloadPic;
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
      action: "CreateSmsAppIcpRecord",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmsAppIcpRecordResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmsAppIcpRecordResponse({}));
  }

  /**
   * The process for using a live app as a signature source has changed. If you use an app as the signature source, you must call this operation to create an ICP filing record for it.
   * 
   * @remarks
   * >Notice: To use a **live app** as a signature source, you must now provide its ICP filing information. This requires you to upload a screenshot of the app\\"s ICP filing.
   * 
   * @param request - CreateSmsAppIcpRecordRequest
   * @returns CreateSmsAppIcpRecordResponse
   */
  async createSmsAppIcpRecord(request: $_model.CreateSmsAppIcpRecordRequest): Promise<$_model.CreateSmsAppIcpRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsAppIcpRecordWithOptions(request, runtime);
  }

  /**
   * If the qualification is intended for use by a third party or the requested signature involves third-party rights, you must obtain third-party authorization and create an authorization letter before submitting the application.
   * 
   * @remarks
   * - Before use, please read the [Authorization Letter Specifications](https://help.aliyun.com/document_detail/56741.html). Download the [Authorization Letter Template](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20250414/bvpcmo/%E6%8E%88%E6%9D%83%E5%A7%94%E6%89%98%E4%B9%A6%E6%A8%A1%E7%89%88.doc), fill it out and stamp it according to the specifications, and then upload it.
   * - The authorization letter you create can be used when applying for SMS qualifications or SMS signatures. If your qualification or signature is intended for use by a third party, you must create and submit an authorization letter.
   * - After creating an authorization letter, you can call [QuerySmsAuthorizationLetter](~~QuerySmsAuthorizationLetter~~) to query the details of the created authorization letter. Authorization letter information created through the API is synchronized to the Short Message Service console.
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
   * If the qualification is intended for use by a third party or the requested signature involves third-party rights, you must obtain third-party authorization and create an authorization letter before submitting the application.
   * 
   * @remarks
   * - Before use, please read the [Authorization Letter Specifications](https://help.aliyun.com/document_detail/56741.html). Download the [Authorization Letter Template](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20250414/bvpcmo/%E6%8E%88%E6%9D%83%E5%A7%94%E6%89%98%E4%B9%A6%E6%A8%A1%E7%89%88.doc), fill it out and stamp it according to the specifications, and then upload it.
   * - The authorization letter you create can be used when applying for SMS qualifications or SMS signatures. If your qualification or signature is intended for use by a third party, you must create and submit an authorization letter.
   * - After creating an authorization letter, you can call [QuerySmsAuthorizationLetter](~~QuerySmsAuthorizationLetter~~) to query the details of the created authorization letter. Authorization letter information created through the API is synchronized to the Short Message Service console.
   * 
   * @param request - CreateSmsAuthorizationLetterRequest
   * @returns CreateSmsAuthorizationLetterResponse
   */
  async createSmsAuthorizationLetter(request: $_model.CreateSmsAuthorizationLetterRequest): Promise<$_model.CreateSmsAuthorizationLetterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsAuthorizationLetterWithOptions(request, runtime);
  }

  /**
   * An SMS signature identifies the sender of an SMS message. Before sending SMS messages, you must apply for a signature and a template. The system prepends the approved SMS signature to the message content and sends them together to the recipient.
   * 
   * @remarks
   * - For details about the changes between the new and original operations, see [Announcement on updating signature and template operations for Short Message Service](https://help.aliyun.com/document_detail/2806975.html).
   * - Users who verify your identity - Individual account can apply for one formal signature per calendar day per Alibaba Cloud account. Users who verify your identity - Enterprise account currently have no such limit. For details about the differences between individual and enterprise user privileges, see [Before you begin](https://help.aliyun.com/document_detail/55324.html).
   * - Read the [Signature specifications](https://help.aliyun.com/document_detail/108076.html) to learn about the SMS signature review standards.
   * - Signatures applied for through the API are synchronized to the Short Message Service console. For console-related operations, see [SMS signatures](https://help.aliyun.com/document_detail/108073.html).
   * - After you submit a signature application, you can call the [GetSmsSign](https://help.aliyun.com/document_detail/2807429.html) operation to query the signature review status and details. You can also [configure receipt messages](https://help.aliyun.com/document_detail/101508.html) and use [SignSmsReport](https://help.aliyun.com/document_detail/120998.html) to obtain the signature review status messages.
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
    if (!$dara.isNull(request.appIcpRecordId)) {
      query["AppIcpRecordId"] = request.appIcpRecordId;
    }

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

    if (!$dara.isNull(request.trademarkId)) {
      query["TrademarkId"] = request.trademarkId;
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
   * An SMS signature identifies the sender of an SMS message. Before sending SMS messages, you must apply for a signature and a template. The system prepends the approved SMS signature to the message content and sends them together to the recipient.
   * 
   * @remarks
   * - For details about the changes between the new and original operations, see [Announcement on updating signature and template operations for Short Message Service](https://help.aliyun.com/document_detail/2806975.html).
   * - Users who verify your identity - Individual account can apply for one formal signature per calendar day per Alibaba Cloud account. Users who verify your identity - Enterprise account currently have no such limit. For details about the differences between individual and enterprise user privileges, see [Before you begin](https://help.aliyun.com/document_detail/55324.html).
   * - Read the [Signature specifications](https://help.aliyun.com/document_detail/108076.html) to learn about the SMS signature review standards.
   * - Signatures applied for through the API are synchronized to the Short Message Service console. For console-related operations, see [SMS signatures](https://help.aliyun.com/document_detail/108073.html).
   * - After you submit a signature application, you can call the [GetSmsSign](https://help.aliyun.com/document_detail/2807429.html) operation to query the signature review status and details. You can also [configure receipt messages](https://help.aliyun.com/document_detail/101508.html) and use [SignSmsReport](https://help.aliyun.com/document_detail/120998.html) to obtain the signature review status messages.
   * 
   * @param request - CreateSmsSignRequest
   * @returns CreateSmsSignResponse
   */
  async createSmsSign(request: $_model.CreateSmsSignRequest): Promise<$_model.CreateSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsSignWithOptions(request, runtime);
  }

  /**
   * A message template defines the content of an SMS message. This content includes the message text and any variables. You can create templates for various business needs, such as sending verification codes, notifications, or promotional messages. A template must be approved before you can use it to send messages.
   * 
   * @remarks
   * - For details on the API changes for signatures and templates, see the [Announcement on Signature and Template API Updates for Short Message Service](https://help.aliyun.com/document_detail/2806975.html).
   * - Wait at least 30 seconds between API calls when applying for a message template.
   * - Message templates you apply for via the API are synchronized to the Short Message Service console. For details on how to manage message templates in the console, see [Message templates](https://help.aliyun.com/document_detail/108085.html).
   * - After you submit a template for review, you can call the [GetSmsTemplate](https://help.aliyun.com/document_detail/2807433.html) API to query the template\\"s review status and details. You can also [configure status reports](https://help.aliyun.com/document_detail/101508.html) to receive the template\\"s review status through [TemplateSmsReport](https://help.aliyun.com/document_detail/120999.html).
   * - Message templates for Chinese mainland messages and international messages are not interchangeable. Apply for message templates based on your use case.
   * - Only enterprise-verified users can apply for message templates for promotional messages and international messages. For details on the permission differences between individual and enterprise users, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
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

    if (!$dara.isNull(request.trafficDriving)) {
      query["TrafficDriving"] = request.trafficDriving;
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
   * A message template defines the content of an SMS message. This content includes the message text and any variables. You can create templates for various business needs, such as sending verification codes, notifications, or promotional messages. A template must be approved before you can use it to send messages.
   * 
   * @remarks
   * - For details on the API changes for signatures and templates, see the [Announcement on Signature and Template API Updates for Short Message Service](https://help.aliyun.com/document_detail/2806975.html).
   * - Wait at least 30 seconds between API calls when applying for a message template.
   * - Message templates you apply for via the API are synchronized to the Short Message Service console. For details on how to manage message templates in the console, see [Message templates](https://help.aliyun.com/document_detail/108085.html).
   * - After you submit a template for review, you can call the [GetSmsTemplate](https://help.aliyun.com/document_detail/2807433.html) API to query the template\\"s review status and details. You can also [configure status reports](https://help.aliyun.com/document_detail/101508.html) to receive the template\\"s review status through [TemplateSmsReport](https://help.aliyun.com/document_detail/120999.html).
   * - Message templates for Chinese mainland messages and international messages are not interchangeable. Apply for message templates based on your use case.
   * - Only enterprise-verified users can apply for message templates for promotional messages and international messages. For details on the permission differences between individual and enterprise users, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * 
   * @param request - CreateSmsTemplateRequest
   * @returns CreateSmsTemplateResponse
   */
  async createSmsTemplate(request: $_model.CreateSmsTemplateRequest): Promise<$_model.CreateSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a trademark entity. This operation is used when you need to upload trademark information when the signature source is set to trademark.
   * 
   * @remarks
   * The trademark must be searchable on the China Trademark Network of the Trademark Office of the China National Intellectual Property Administration, and the trademark owner must match the enterprise name.
   * 
   * @param request - CreateSmsTrademarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsTrademarkResponse
   */
  async createSmsTrademarkWithOptions(request: $_model.CreateSmsTrademarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsTrademarkResponse> {
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

    if (!$dara.isNull(request.trademarkApplicantName)) {
      query["TrademarkApplicantName"] = request.trademarkApplicantName;
    }

    if (!$dara.isNull(request.trademarkEffExpDate)) {
      query["TrademarkEffExpDate"] = request.trademarkEffExpDate;
    }

    if (!$dara.isNull(request.trademarkName)) {
      query["TrademarkName"] = request.trademarkName;
    }

    if (!$dara.isNull(request.trademarkPic)) {
      query["TrademarkPic"] = request.trademarkPic;
    }

    if (!$dara.isNull(request.trademarkRegistrationNumber)) {
      query["TrademarkRegistrationNumber"] = request.trademarkRegistrationNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsTrademark",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmsTrademarkResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmsTrademarkResponse({}));
  }

  /**
   * Creates a trademark entity. This operation is used when you need to upload trademark information when the signature source is set to trademark.
   * 
   * @remarks
   * The trademark must be searchable on the China Trademark Network of the Trademark Office of the China National Intellectual Property Administration, and the trademark owner must match the enterprise name.
   * 
   * @param request - CreateSmsTrademarkRequest
   * @returns CreateSmsTrademarkResponse
   */
  async createSmsTrademark(request: $_model.CreateSmsTrademarkRequest): Promise<$_model.CreateSmsTrademarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsTrademarkWithOptions(request, runtime);
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
   * Deletes a short URL. After deletion, the short URL is no longer usable and cannot be resolved to the source URL.
   * 
   * @remarks
   * >Notice: 
   * Short Message Service does not currently support this API operation.
   * ### QPS limit
   * The QPS limit for a single user is 100. Calls that exceed this limit are subject to rate limiting, which may affect your business. To prevent disruptions, call this operation at a reasonable frequency.
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
   * Deletes a short URL. After deletion, the short URL is no longer usable and cannot be resolved to the source URL.
   * 
   * @remarks
   * >Notice: 
   * Short Message Service does not currently support this API operation.
   * ### QPS limit
   * The QPS limit for a single user is 100. Calls that exceed this limit are subject to rate limiting, which may affect your business. To prevent disruptions, call this operation at a reasonable frequency.
   * 
   * @param request - DeleteShortUrlRequest
   * @returns DeleteShortUrlResponse
   */
  async deleteShortUrl(request: $_model.DeleteShortUrlRequest): Promise<$_model.DeleteShortUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteShortUrlWithOptions(request, runtime);
  }

  /**
   * If you no longer use an SMS qualification or need to delete it for other reasons, call this API or delete the SMS qualification in the Short Message Service console.
   * 
   * @remarks
   * >Warning: Once a qualification is deleted, it cannot be restored or selected when you apply for signatures later. Proceed with caution.
   * - Qualifications under review cannot be modified or deleted. You can withdraw the application in the Short Message Service [console](https://dysms.console.aliyun.com/domestic/text/qualification) before performing the operation.
   * - Approved qualifications that have been bound to signatures cannot be deleted.
   * - Rejected qualifications can be directly resubmitted for review after you [modify the qualification information](~~UpdateSmsQualification~~).
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
   * If you no longer use an SMS qualification or need to delete it for other reasons, call this API or delete the SMS qualification in the Short Message Service console.
   * 
   * @remarks
   * >Warning: Once a qualification is deleted, it cannot be restored or selected when you apply for signatures later. Proceed with caution.
   * - Qualifications under review cannot be modified or deleted. You can withdraw the application in the Short Message Service [console](https://dysms.console.aliyun.com/domestic/text/qualification) before performing the operation.
   * - Approved qualifications that have been bound to signatures cannot be deleted.
   * - Rejected qualifications can be directly resubmitted for review after you [modify the qualification information](~~UpdateSmsQualification~~).
   * 
   * @param request - DeleteSmsQualificationRequest
   * @returns DeleteSmsQualificationResponse
   */
  async deleteSmsQualification(request: $_model.DeleteSmsQualificationRequest): Promise<$_model.DeleteSmsQualificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSmsQualificationWithOptions(request, runtime);
  }

  /**
   * If you no longer use an SMS signature and need to delete it, call this operation or delete the SMS signature in the SMS Service console.
   * 
   * @remarks
   * - You can delete signatures that are in the Withdrawn, Failed, or Approved state. You cannot delete signatures that are in the Pending Approval state.
   * - Deleted SMS signatures cannot be recovered, and the signature can no longer be used to send SMS messages. Proceed with caution.
   * - Signature deletion operations performed via the API are synchronized to the SMS Service console. For information about how to manage templates in the console, see [SMS signatures](https://help.aliyun.com/document_detail/108073.html).
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
   * If you no longer use an SMS signature and need to delete it, call this operation or delete the SMS signature in the SMS Service console.
   * 
   * @remarks
   * - You can delete signatures that are in the Withdrawn, Failed, or Approved state. You cannot delete signatures that are in the Pending Approval state.
   * - Deleted SMS signatures cannot be recovered, and the signature can no longer be used to send SMS messages. Proceed with caution.
   * - Signature deletion operations performed via the API are synchronized to the SMS Service console. For information about how to manage templates in the console, see [SMS signatures](https://help.aliyun.com/document_detail/108073.html).
   * 
   * @param request - DeleteSmsSignRequest
   * @returns DeleteSmsSignResponse
   */
  async deleteSmsSign(request: $_model.DeleteSmsSignRequest): Promise<$_model.DeleteSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSmsSignWithOptions(request, runtime);
  }

  /**
   * Deletes an SMS template that you no longer need.
   * 
   * @remarks
   * - 支持删除已撤回、审核失败或审核通过的模板，审核中的短信模板不支持删除。
   * - 删除短信模板后不可恢复，且后续不可再使用该模板发送短信，请谨慎操作。
   * - 通过接口删除模板的操作会在短信服务控制台同步，在控制台对模板的相关操作，请参见[短信模板](https://help.aliyun.com/document_detail/108085.html)。
   * ### QPS限制
   * 本接口的单用户QPS限制为1000次/秒。超过限制，API调用会被限流，这可能会影响您的业务，请合理调用。
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
   * Deletes an SMS template that you no longer need.
   * 
   * @remarks
   * - 支持删除已撤回、审核失败或审核通过的模板，审核中的短信模板不支持删除。
   * - 删除短信模板后不可恢复，且后续不可再使用该模板发送短信，请谨慎操作。
   * - 通过接口删除模板的操作会在短信服务控制台同步，在控制台对模板的相关操作，请参见[短信模板](https://help.aliyun.com/document_detail/108085.html)。
   * ### QPS限制
   * 本接口的单用户QPS限制为1000次/秒。超过限制，API调用会被限流，这可能会影响您的业务，请合理调用。
   * 
   * @param request - DeleteSmsTemplateRequest
   * @returns DeleteSmsTemplateResponse
   */
  async deleteSmsTemplate(request: $_model.DeleteSmsTemplateRequest): Promise<$_model.DeleteSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSmsTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the card SMS sending records and sending status of a single phone number.
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
   * Queries the card SMS sending records and sending status of a single phone number.
   * 
   * @param request - GetCardSmsDetailsRequest
   * @returns GetCardSmsDetailsResponse
   */
  async getCardSmsDetails(request: $_model.GetCardSmsDetailsRequest): Promise<$_model.GetCardSmsDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCardSmsDetailsWithOptions(request, runtime);
  }

  /**
   * Retrieves the short URL for a card message.
   * 
   * @remarks
   * - 目前卡片短信在内部邀约阶段，请联系您的阿里云商务经理申请开通或联系[阿里云售前咨询](https://help.aliyun.com/document_detail/464625.html?spm=a2c4g.11186623.0.0.213273d4Xe6UEu#section-81n-72q-ybm)。
   * ### QPS限制
   * - 本接口的单用户QPS限制为1000次/秒。超过限制，API调用会被限流，这可能会影响您的业务，请合理调用。
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
   * Retrieves the short URL for a card message.
   * 
   * @remarks
   * - 目前卡片短信在内部邀约阶段，请联系您的阿里云商务经理申请开通或联系[阿里云售前咨询](https://help.aliyun.com/document_detail/464625.html?spm=a2c4g.11186623.0.0.213273d4Xe6UEu#section-81n-72q-ybm)。
   * ### QPS限制
   * - 本接口的单用户QPS限制为1000次/秒。超过限制，API调用会被限流，这可能会影响您的业务，请合理调用。
   * 
   * @param request - GetCardSmsLinkRequest
   * @returns GetCardSmsLinkResponse
   */
  async getCardSmsLink(request: $_model.GetCardSmsLinkRequest): Promise<$_model.GetCardSmsLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCardSmsLinkWithOptions(request, runtime);
  }

  /**
   * Converts images and videos uploaded to OSS storage for card SMS into resource data for unified management, and returns a resource ID. You can manage the returned resource ID as needed.
   * 
   * @remarks
   * ### QPS限制
   * 本接口的单用户QPS限制为300次/秒。超过限制，API调用会被限流，这可能会影响您的业务，请合理调用。
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
   * Converts images and videos uploaded to OSS storage for card SMS into resource data for unified management, and returns a resource ID. You can manage the returned resource ID as needed.
   * 
   * @remarks
   * ### QPS限制
   * 本接口的单用户QPS限制为300次/秒。超过限制，API调用会被限流，这可能会影响您的业务，请合理调用。
   * 
   * @param request - GetMediaResourceIdRequest
   * @returns GetMediaResourceIdResponse
   */
  async getMediaResourceId(request: $_model.GetMediaResourceIdRequest): Promise<$_model.GetMediaResourceIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaResourceIdWithOptions(request, runtime);
  }

  /**
   * Retrieves the OSS resource configuration information for card messages. This information is used for subsequent OSS file upload operations.
   * 
   * @remarks
   * - 您在调用卡片短信相关API接口前，首先需要开通卡片短信功能，目前卡片短信在内部邀约阶段，请联系您的阿里云商务经理申请开通或联系[阿里云售前咨询](https://help.aliyun.com/document_detail/464625.html)。
   * - 卡片短信模板中使用的图片、视频等素材资源可上传到OSS文件系统保存。文件上传操作，请参见[OSS文件上传](https://help.aliyun.com/document_detail/437303.html)。
   * ### QPS限制
   * 本接口的单用户QPS限制为300次/秒。超过限制，API调用会被限流，这可能会影响您的业务，请合理调用。
   * 
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
   * Retrieves the OSS resource configuration information for card messages. This information is used for subsequent OSS file upload operations.
   * 
   * @remarks
   * - 您在调用卡片短信相关API接口前，首先需要开通卡片短信功能，目前卡片短信在内部邀约阶段，请联系您的阿里云商务经理申请开通或联系[阿里云售前咨询](https://help.aliyun.com/document_detail/464625.html)。
   * - 卡片短信模板中使用的图片、视频等素材资源可上传到OSS文件系统保存。文件上传操作，请参见[OSS文件上传](https://help.aliyun.com/document_detail/437303.html)。
   * ### QPS限制
   * 本接口的单用户QPS限制为300次/秒。超过限制，API调用会被限流，这可能会影响您的业务，请合理调用。
   * @returns GetOSSInfoForCardTemplateResponse
   */
  async getOSSInfoForCardTemplate(): Promise<$_model.GetOSSInfoForCardTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOSSInfoForCardTemplateWithOptions(runtime);
  }

  /**
   * Obtains OSS resource configuration information, which will be used for subsequent OSS file upload operations.
   * 
   * @remarks
   * - When you create a signature or template, you can upload materials such as login pages with links, backend page screenshots, software copyrights, and supplementary agreements. These materials help reviewers understand the details of your business. If you have multiple materials, you can combine them into one file. The supported formats are png, jpg, jpeg, doc, docx, and pdf.
   * - Additional materials required for creating a signature or template can be uploaded to the OSS file system for storage. For information about file upload operations, see [Upload files to OSS](https://help.aliyun.com/document_detail/2833114.html).
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
   * Obtains OSS resource configuration information, which will be used for subsequent OSS file upload operations.
   * 
   * @remarks
   * - When you create a signature or template, you can upload materials such as login pages with links, backend page screenshots, software copyrights, and supplementary agreements. These materials help reviewers understand the details of your business. If you have multiple materials, you can combine them into one file. The supported formats are png, jpg, jpeg, doc, docx, and pdf.
   * - Additional materials required for creating a signature or template can be uploaded to the OSS file system for storage. For information about file upload operations, see [Upload files to OSS](https://help.aliyun.com/document_detail/2833114.html).
   * 
   * @param request - GetOSSInfoForUploadFileRequest
   * @returns GetOSSInfoForUploadFileResponse
   */
  async getOSSInfoForUploadFile(request: $_model.GetOSSInfoForUploadFileRequest): Promise<$_model.GetOSSInfoForUploadFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOSSInfoForUploadFileWithOptions(request, runtime);
  }

  /**
   * Obtains the OSS resource configuration information for qualification materials. This configuration information will be used for subsequent uploads of qualification files such as authorization letters and enterprise certificates.
   * 
   * @remarks
   * - When you apply for a qualification or signature, if the purpose is for other use or involves a third party, you must provide an [authorization letter](https://help.aliyun.com/document_detail/56741.html).
   * - After you use this API to obtain the OSS resource configuration information, upload the related qualification materials through OSS. For more information, see [Upload files through OSS](https://help.aliyun.com/document_detail/2833114.html).
   * - The names of files to be uploaded cannot contain Chinese characters or special symbols.
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
   * Obtains the OSS resource configuration information for qualification materials. This configuration information will be used for subsequent uploads of qualification files such as authorization letters and enterprise certificates.
   * 
   * @remarks
   * - When you apply for a qualification or signature, if the purpose is for other use or involves a third party, you must provide an [authorization letter](https://help.aliyun.com/document_detail/56741.html).
   * - After you use this API to obtain the OSS resource configuration information, upload the related qualification materials through OSS. For more information, see [Upload files through OSS](https://help.aliyun.com/document_detail/2833114.html).
   * - The names of files to be uploaded cannot contain Chinese characters or special symbols.
   * 
   * @param request - GetQualificationOssInfoRequest
   * @returns GetQualificationOssInfoResponse
   */
  async getQualificationOssInfo(request: $_model.GetQualificationOssInfoRequest): Promise<$_model.GetQualificationOssInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualificationOssInfoWithOptions(request, runtime);
  }

  /**
   * 查询5g短信详情
   * 
   * @param request - GetRCSSignatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRCSSignatureResponse
   */
  async getRCSSignatureWithOptions(request: $_model.GetRCSSignatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRCSSignatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRCSSignature",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRCSSignatureResponse>(await this.callApi(params, req, runtime), new $_model.GetRCSSignatureResponse({}));
  }

  /**
   * 查询5g短信详情
   * 
   * @param request - GetRCSSignatureRequest
   * @returns GetRCSSignatureResponse
   */
  async getRCSSignature(request: $_model.GetRCSSignatureRequest): Promise<$_model.GetRCSSignatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRCSSignatureWithOptions(request, runtime);
  }

  /**
   * Retrieves the OSS information for OCR.
   * 
   * @param request - GetSmsOcrOssInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSmsOcrOssInfoResponse
   */
  async getSmsOcrOssInfoWithOptions(request: $_model.GetSmsOcrOssInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSmsOcrOssInfoResponse> {
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

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSmsOcrOssInfo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSmsOcrOssInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetSmsOcrOssInfoResponse({}));
  }

  /**
   * Retrieves the OSS information for OCR.
   * 
   * @param request - GetSmsOcrOssInfoRequest
   * @returns GetSmsOcrOssInfoResponse
   */
  async getSmsOcrOssInfo(request: $_model.GetSmsOcrOssInfoRequest): Promise<$_model.GetSmsOcrOssInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSmsOcrOssInfoWithOptions(request, runtime);
  }

  /**
   * Queries the review details of a signature after you apply for it.
   * 
   * @remarks
   * - 仅可查询**首次创建**的签名资料或者**最新审核通过**的资料。
   * - 新接口和原接口变更的公告详情请参见[关于短信服务更新签名&模板接口的公告](https://help.aliyun.com/document_detail/2806975.html)。
   * - 审核时间：一般情况下，签名提交后，阿里云预计在 2 个小时内审核完成（审核工作时间：周一至周日 9:00~21:00，法定节假日顺延）。
   * - 如果签名未通过审核，会返回审核失败的原因，请参考[短信审核失败的处理建议](https://help.aliyun.com/document_detail/65990.html)，调用[UpdateSmsSign](https://help.aliyun.com/document_detail/2807428.html)接口或在[签名管理](https://dysms.console.aliyun.com/domestic/text/sign)页面修改未审核通过的短信签名。
   * - [QuerySmsSignList](~~QuerySmsSignList~~)接口可以查询您账号下的所有签名，包括签名审核状态、签名类型、签名名称等。
   * - 本接口的单用户QPS限制为150次/秒。超过限制，API调用将会被限流，这可能会影响您的业务，请合理调用。
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
   * Queries the review details of a signature after you apply for it.
   * 
   * @remarks
   * - 仅可查询**首次创建**的签名资料或者**最新审核通过**的资料。
   * - 新接口和原接口变更的公告详情请参见[关于短信服务更新签名&模板接口的公告](https://help.aliyun.com/document_detail/2806975.html)。
   * - 审核时间：一般情况下，签名提交后，阿里云预计在 2 个小时内审核完成（审核工作时间：周一至周日 9:00~21:00，法定节假日顺延）。
   * - 如果签名未通过审核，会返回审核失败的原因，请参考[短信审核失败的处理建议](https://help.aliyun.com/document_detail/65990.html)，调用[UpdateSmsSign](https://help.aliyun.com/document_detail/2807428.html)接口或在[签名管理](https://dysms.console.aliyun.com/domestic/text/sign)页面修改未审核通过的短信签名。
   * - [QuerySmsSignList](~~QuerySmsSignList~~)接口可以查询您账号下的所有签名，包括签名审核状态、签名类型、签名名称等。
   * - 本接口的单用户QPS限制为150次/秒。超过限制，API调用将会被限流，这可能会影响您的业务，请合理调用。
   * 
   * @param request - GetSmsSignRequest
   * @returns GetSmsSignResponse
   */
  async getSmsSign(request: $_model.GetSmsSignRequest): Promise<$_model.GetSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSmsSignWithOptions(request, runtime);
  }

  /**
   * Queries the approval details of a template after you submit a template application. You can view the approval status of the template.
   * 
   * @remarks
   * - 新接口和原接口变更的公告详情请参见[关于短信服务更新签名&模板接口的公告](https://help.aliyun.com/document_detail/2806975.html)。
   * - 审核时间：一般情况下，模板提交后，阿里云预计在2个小时内审核完成（审核工作时间：周一至周日9:00~21:00，法定节假日顺延）。
   * - 如果模板未通过审核，会返回审核失败的原因，请参考[短信审核失败的处理建议](https://help.aliyun.com/document_detail/65990.html)，调用[UpdateSmsTemplate](~~UpdateSmsTemplate~~)接口或在[模板管理](https://dysms.console.aliyun.com/domestic/text/template)页面修改短信模板。
   * - 当前接口是通过模板Code查询单个模板的审核详情。[QuerySmsTemplateList](https://help.aliyun.com/document_detail/419288.html)接口可以查询您当前账号下所有模板的模板详情。
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
   * Queries the approval details of a template after you submit a template application. You can view the approval status of the template.
   * 
   * @remarks
   * - 新接口和原接口变更的公告详情请参见[关于短信服务更新签名&模板接口的公告](https://help.aliyun.com/document_detail/2806975.html)。
   * - 审核时间：一般情况下，模板提交后，阿里云预计在2个小时内审核完成（审核工作时间：周一至周日9:00~21:00，法定节假日顺延）。
   * - 如果模板未通过审核，会返回审核失败的原因，请参考[短信审核失败的处理建议](https://help.aliyun.com/document_detail/65990.html)，调用[UpdateSmsTemplate](~~UpdateSmsTemplate~~)接口或在[模板管理](https://dysms.console.aliyun.com/domestic/text/template)页面修改短信模板。
   * - 当前接口是通过模板Code查询单个模板的审核详情。[QuerySmsTemplateList](https://help.aliyun.com/document_detail/419288.html)接口可以查询您当前账号下所有模板的模板详情。
   * 
   * @param request - GetSmsTemplateRequest
   * @returns GetSmsTemplateResponse
   */
  async getSmsTemplate(request: $_model.GetSmsTemplateRequest): Promise<$_model.GetSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSmsTemplateWithOptions(request, runtime);
  }

  /**
   * 查询模板列表详情（新接口）
   * 
   * @param tmpReq - GetSmsTemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSmsTemplateListResponse
   */
  async getSmsTemplateListWithOptions(tmpReq: $_model.GetSmsTemplateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSmsTemplateListResponse> {
    tmpReq.validate();
    let request = new $_model.GetSmsTemplateListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.usableStateList)) {
      request.usableStateListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.usableStateList, "UsableStateList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
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

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateTag)) {
      query["TemplateTag"] = request.templateTag;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    if (!$dara.isNull(request.usableStateListShrink)) {
      query["UsableStateList"] = request.usableStateListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSmsTemplateList",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSmsTemplateListResponse>(await this.callApi(params, req, runtime), new $_model.GetSmsTemplateListResponse({}));
  }

  /**
   * 查询模板列表详情（新接口）
   * 
   * @param request - GetSmsTemplateListRequest
   * @returns GetSmsTemplateListResponse
   */
  async getSmsTemplateList(request: $_model.GetSmsTemplateListRequest): Promise<$_model.GetSmsTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSmsTemplateListWithOptions(request, runtime);
  }

  /**
   * Tags are markers that you add to templates. Each tag consists of a key-value pair (Key-Value). You can query the template codes bound to a tag key-value pair, or query all tags bound to a specific template.
   * 
   * @remarks
   * You can log on to the Short Message Service (SMS) console and go to the [Template Management](https://dysms.console.aliyun.com/domestic/text/template) page to filter SMS templates that are bound to tag key-value pairs, or click **Details** in the Actions column to view the tags that are bound to the current template.
   * ### QPS limit
   * The per-user QPS limit of this operation is 50 calls per second. If the limit is exceeded, API calls will be throttled, which may affect your business. Call this operation properly.
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
   * Tags are markers that you add to templates. Each tag consists of a key-value pair (Key-Value). You can query the template codes bound to a tag key-value pair, or query all tags bound to a specific template.
   * 
   * @remarks
   * You can log on to the Short Message Service (SMS) console and go to the [Template Management](https://dysms.console.aliyun.com/domestic/text/template) page to filter SMS templates that are bound to tag key-value pairs, or click **Details** in the Actions column to view the tags that are bound to the current template.
   * ### QPS limit
   * The per-user QPS limit of this operation is 50 calls per second. If the limit is exceeded, API calls will be throttled, which may affect your business. Call this operation properly.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * This operation is discontinued.
   * 
   * @remarks
   * - 根据工信部规定与运营商[相关要求](https://help.aliyun.com/document_detail/2806975.html)，阿里云进行了签名相关API的功能改造。为提升您签名的审核效率和审核通过率，请您使用新接口[UpdateSmsSign-修改短信签名](https://help.aliyun.com/document_detail/2807428.html)。
   * - 仅支持修改未通过审核的签名，请参考[短信审核失败的处理建议](https://help.aliyun.com/document_detail/65990.html)，调用此接口修改后自动提交审核，签名进入待审核状态。
   * - 通过接口修改签名的操作会在短信服务控制台同步，在控制台对签名的相关操作，请参见[短信签名](https://help.aliyun.com/document_detail/108073.html)。
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
   * This operation is discontinued.
   * 
   * @remarks
   * - 根据工信部规定与运营商[相关要求](https://help.aliyun.com/document_detail/2806975.html)，阿里云进行了签名相关API的功能改造。为提升您签名的审核效率和审核通过率，请您使用新接口[UpdateSmsSign-修改短信签名](https://help.aliyun.com/document_detail/2807428.html)。
   * - 仅支持修改未通过审核的签名，请参考[短信审核失败的处理建议](https://help.aliyun.com/document_detail/65990.html)，调用此接口修改后自动提交审核，签名进入待审核状态。
   * - 通过接口修改签名的操作会在短信服务控制台同步，在控制台对签名的相关操作，请参见[短信签名](https://help.aliyun.com/document_detail/108073.html)。
   * 
   * @param request - ModifySmsSignRequest
   * @returns ModifySmsSignResponse
   */
  async modifySmsSign(request: $_model.ModifySmsSignRequest): Promise<$_model.ModifySmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySmsSignWithOptions(request, runtime);
  }

  /**
   * This operation is discontinued.
   * 
   * @remarks
   * - 根据工信部规定与运营商[相关要求](https://help.aliyun.com/document_detail/2806975.html)，阿里云进行了模板相关API的功能改造。为提升您模板的审核效率和审核通过率，请您使用新接口[UpdateSmsTemplate-修改短信模板](https://help.aliyun.com/document_detail/2807432.html)。
   * - 仅支持修改未通过审核的模板，请参考[短信审核失败的处理建议](https://help.aliyun.com/document_detail/65990.html)，调用此接口修改后重新提交审核。
   * - 通过接口修改模板的操作会在短信服务控制台同步，在控制台对模板的相关操作，请参见[短信模板](https://help.aliyun.com/document_detail/108085.html)。
   * ### QPS限制
   * 本接口的单用户QPS限制为1000次/秒。超过限制，API调用会被限流，这可能会影响您的业务，请合理调用。
   * 
   * @deprecated OpenAPI ModifySmsTemplate is deprecated, please use Dysmsapi::2017-05-25::UpdateSmsTemplate instead.
   * 
   * @param request - ModifySmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySmsTemplateResponse
   */
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
   * This operation is discontinued.
   * 
   * @remarks
   * - 根据工信部规定与运营商[相关要求](https://help.aliyun.com/document_detail/2806975.html)，阿里云进行了模板相关API的功能改造。为提升您模板的审核效率和审核通过率，请您使用新接口[UpdateSmsTemplate-修改短信模板](https://help.aliyun.com/document_detail/2807432.html)。
   * - 仅支持修改未通过审核的模板，请参考[短信审核失败的处理建议](https://help.aliyun.com/document_detail/65990.html)，调用此接口修改后重新提交审核。
   * - 通过接口修改模板的操作会在短信服务控制台同步，在控制台对模板的相关操作，请参见[短信模板](https://help.aliyun.com/document_detail/108085.html)。
   * ### QPS限制
   * 本接口的单用户QPS限制为1000次/秒。超过限制，API调用会被限流，这可能会影响您的业务，请合理调用。
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
   * Queries the review status of a card SMS template and returns information about the review by mobile phone vendors.
   * 
   * @remarks
   * - Alibaba Cloud accounts that have not activated the card SMS service cannot call this API.
   * - The card SMS service is currently in the internal invitation phase. Contact your Alibaba Cloud business manager to apply for activation or [contact Alibaba Cloud pre-sales consultation](https://help.aliyun.com/document_detail/464625.html).
   * - You can also log on to the [Domestic Card SMS](https://dysms.console.aliyun.com/domestic/card) page in the console and query the review status of card SMS templates on the Template Management tab.
   * ### QPS limit
   * The per-user QPS limit for this operation is 300 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation responsibly.
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
   * Queries the review status of a card SMS template and returns information about the review by mobile phone vendors.
   * 
   * @remarks
   * - Alibaba Cloud accounts that have not activated the card SMS service cannot call this API.
   * - The card SMS service is currently in the internal invitation phase. Contact your Alibaba Cloud business manager to apply for activation or [contact Alibaba Cloud pre-sales consultation](https://help.aliyun.com/document_detail/464625.html).
   * - You can also log on to the [Domestic Card SMS](https://dysms.console.aliyun.com/domestic/card) page in the console and query the review status of card SMS templates on the Template Management tab.
   * ### QPS limit
   * The per-user QPS limit for this operation is 300 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation responsibly.
   * 
   * @param request - QueryCardSmsTemplateRequest
   * @returns QueryCardSmsTemplateResponse
   */
  async queryCardSmsTemplate(request: $_model.QueryCardSmsTemplateRequest): Promise<$_model.QueryCardSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCardSmsTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the parsing data of a specified card SMS template. The parsing data includes the number of successful SMS parsing receipts, the number of message exposures, and the number of message clicks.
   * 
   * @remarks
   * ### QPS limit
   * The QPS limit on this operation is 300 calls per second per user. If the number of calls per second exceeds the limit, throttling is triggered. This may affect your business. Call this operation at a reasonable pace.
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
   * Queries the parsing data of a specified card SMS template. The parsing data includes the number of successful SMS parsing receipts, the number of message exposures, and the number of message clicks.
   * 
   * @remarks
   * ### QPS limit
   * The QPS limit on this operation is 300 calls per second per user. If the number of calls per second exceeds the limit, throttling is triggered. This may affect your business. Call this operation at a reasonable pace.
   * 
   * @param request - QueryCardSmsTemplateReportRequest
   * @returns QueryCardSmsTemplateReportResponse
   */
  async queryCardSmsTemplateReport(request: $_model.QueryCardSmsTemplateReportRequest): Promise<$_model.QueryCardSmsTemplateReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCardSmsTemplateReportWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a digital SMS signature by its name.
   * 
   * @remarks
   * You can query only the digital SMS signatures that belong to your Alibaba Cloud account.
   * 
   * @param request - QueryDigitalSignByNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDigitalSignByNameResponse
   */
  async queryDigitalSignByNameWithOptions(request: $_model.QueryDigitalSignByNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDigitalSignByNameResponse> {
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
      action: "QueryDigitalSignByName",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDigitalSignByNameResponse>(await this.callApi(params, req, runtime), new $_model.QueryDigitalSignByNameResponse({}));
  }

  /**
   * Retrieves the details of a digital SMS signature by its name.
   * 
   * @remarks
   * You can query only the digital SMS signatures that belong to your Alibaba Cloud account.
   * 
   * @param request - QueryDigitalSignByNameRequest
   * @returns QueryDigitalSignByNameResponse
   */
  async queryDigitalSignByName(request: $_model.QueryDigitalSignByNameRequest): Promise<$_model.QueryDigitalSignByNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDigitalSignByNameWithOptions(request, runtime);
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
   * Queries whether a phone number supports card SMS messages.
   * 
   * @remarks
   * - 未开通卡片短信业务的阿里云账号无法调用此API。
   * - 目前卡片短信在内部邀约阶段，请联系您的阿里云商务经理申请开通或[联系阿里云售前咨询](https://help.aliyun.com/document_detail/464625.html)。
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
   * Queries whether a phone number supports card SMS messages.
   * 
   * @remarks
   * - 未开通卡片短信业务的阿里云账号无法调用此API。
   * - 目前卡片短信在内部邀约阶段，请联系您的阿里云商务经理申请开通或[联系阿里云售前咨询](https://help.aliyun.com/document_detail/464625.html)。
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
   * 批量查询终端5G适配情况
   * 
   * @param request - QueryRCSMobileCapableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRCSMobileCapableResponse
   */
  async queryRCSMobileCapableWithOptions(request: $_model.QueryRCSMobileCapableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRCSMobileCapableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.phoneNumbers)) {
      query["PhoneNumbers"] = request.phoneNumbers;
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
      action: "QueryRCSMobileCapable",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRCSMobileCapableResponse>(await this.callApi(params, req, runtime), new $_model.QueryRCSMobileCapableResponse({}));
  }

  /**
   * 批量查询终端5G适配情况
   * 
   * @param request - QueryRCSMobileCapableRequest
   * @returns QueryRCSMobileCapableResponse
   */
  async queryRCSMobileCapable(request: $_model.QueryRCSMobileCapableRequest): Promise<$_model.QueryRCSMobileCapableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRCSMobileCapableWithOptions(request, runtime);
  }

  /**
   * 查询终端5G适配情况任务结果
   * 
   * @param request - QueryRCSMobileCapableTaskResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRCSMobileCapableTaskResultResponse
   */
  async queryRCSMobileCapableTaskResultWithOptions(request: $_model.QueryRCSMobileCapableTaskResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRCSMobileCapableTaskResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRCSMobileCapableTaskResult",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRCSMobileCapableTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.QueryRCSMobileCapableTaskResultResponse({}));
  }

  /**
   * 查询终端5G适配情况任务结果
   * 
   * @param request - QueryRCSMobileCapableTaskResultRequest
   * @returns QueryRCSMobileCapableTaskResultResponse
   */
  async queryRCSMobileCapableTaskResult(request: $_model.QueryRCSMobileCapableTaskResultRequest): Promise<$_model.QueryRCSMobileCapableTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRCSMobileCapableTaskResultWithOptions(request, runtime);
  }

  /**
   * 查询5G模板详情
   * 
   * @param request - QueryRCSTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRCSTemplateResponse
   */
  async queryRCSTemplateWithOptions(request: $_model.QueryRCSTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRCSTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRCSTemplate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRCSTemplateResponse>(await this.callApi(params, req, runtime), new $_model.QueryRCSTemplateResponse({}));
  }

  /**
   * 查询5G模板详情
   * 
   * @param request - QueryRCSTemplateRequest
   * @returns QueryRCSTemplateResponse
   */
  async queryRCSTemplate(request: $_model.QueryRCSTemplateRequest): Promise<$_model.QueryRCSTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRCSTemplateWithOptions(request, runtime);
  }

  /**
   * 指定版本查看5G消息固定菜单详情
   * 
   * @param request - QueryRcsSignMenuByVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRcsSignMenuByVersionResponse
   */
  async queryRcsSignMenuByVersionWithOptions(request: $_model.QueryRcsSignMenuByVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRcsSignMenuByVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.rcsMenuVersion)) {
      query["RcsMenuVersion"] = request.rcsMenuVersion;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRcsSignMenuByVersion",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRcsSignMenuByVersionResponse>(await this.callApi(params, req, runtime), new $_model.QueryRcsSignMenuByVersionResponse({}));
  }

  /**
   * 指定版本查看5G消息固定菜单详情
   * 
   * @param request - QueryRcsSignMenuByVersionRequest
   * @returns QueryRcsSignMenuByVersionResponse
   */
  async queryRcsSignMenuByVersion(request: $_model.QueryRcsSignMenuByVersionRequest): Promise<$_model.QueryRcsSignMenuByVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRcsSignMenuByVersionWithOptions(request, runtime);
  }

  /**
   * Queries the delivery records and status of SMS messages sent to a single phone number.
   * 
   * @remarks
   * - This operation queries the details of SMS messages sent to a specific phone number on a given date. You can also provide the `BizId` to query a specific delivery record.
   * - This operation queries delivery details for a single phone number at a time. To view delivery details in bulk, use the [QuerySendStatistics](https://help.aliyun.com/document_detail/419276.html) operation to query delivery statistics, or log in to the [Delivery Receipts](https://dysms.console.aliyun.com/record) page in the console.
   * ### QPS limit
   * The QPS limit for this operation is 5,000 requests per second per user. Calls that exceed this limit are throttled.
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
   * Queries the delivery records and status of SMS messages sent to a single phone number.
   * 
   * @remarks
   * - This operation queries the details of SMS messages sent to a specific phone number on a given date. You can also provide the `BizId` to query a specific delivery record.
   * - This operation queries delivery details for a single phone number at a time. To view delivery details in bulk, use the [QuerySendStatistics](https://help.aliyun.com/document_detail/419276.html) operation to query delivery statistics, or log in to the [Delivery Receipts](https://dysms.console.aliyun.com/record) page in the console.
   * ### QPS limit
   * The QPS limit for this operation is 5,000 requests per second per user. Calls that exceed this limit are throttled.
   * 
   * @param request - QuerySendDetailsRequest
   * @returns QuerySendDetailsResponse
   */
  async querySendDetails(request: $_model.QuerySendDetailsRequest): Promise<$_model.QuerySendDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySendDetailsWithOptions(request, runtime);
  }

  /**
   * Queries message delivery statistics, including send dates, the number of successfully sent messages, and the number of received delivery receipts.
   * 
   * @remarks
   * - If you query data over a long time range, the results are paginated. You can specify the page size and page number to navigate through the Delivery Logs.
   * - You can also view delivery details by logging in to the [Short Message Service console](https://dysms.console.aliyun.com/dysms.htm#/overview) and navigating to the **Business Statistics** > **Delivery Logs** page.
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
   * Queries message delivery statistics, including send dates, the number of successfully sent messages, and the number of received delivery receipts.
   * 
   * @remarks
   * - If you query data over a long time range, the results are paginated. You can specify the page size and page number to navigate through the Delivery Logs.
   * - You can also view delivery details by logging in to the [Short Message Service console](https://dysms.console.aliyun.com/dysms.htm#/overview) and navigating to the **Business Statistics** > **Delivery Logs** page.
   * 
   * @param request - QuerySendStatisticsRequest
   * @returns QuerySendStatisticsResponse
   */
  async querySendStatistics(request: $_model.QuerySendStatisticsRequest): Promise<$_model.QuerySendStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySendStatisticsWithOptions(request, runtime);
  }

  /**
   * Checks the status and availability of a short link.
   * 
   * @remarks
   * >Notice: 
   * This API is not currently supported by Short Message Service.
   * ### QPS limit
   * The QPS limit for this API is 20 queries per second per user. API calls that exceed this limit are rate-limited, which can impact your business. Plan your calls accordingly.
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
   * Checks the status and availability of a short link.
   * 
   * @remarks
   * >Notice: 
   * This API is not currently supported by Short Message Service.
   * ### QPS limit
   * The QPS limit for this API is 20 queries per second per user. API calls that exceed this limit are rate-limited, which can impact your business. Plan your calls accordingly.
   * 
   * @param request - QueryShortUrlRequest
   * @returns QueryShortUrlResponse
   */
  async queryShortUrl(request: $_model.QueryShortUrlRequest): Promise<$_model.QueryShortUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryShortUrlWithOptions(request, runtime);
  }

  /**
   * After you apply for SMS qualifications, you can call this operation to query the details of a single qualification.
   * 
   * @remarks
   * - This API queries the details of a single qualification (enterprise information, legal representative information, and administrator information).
   * - To query all qualification information under your current account, or to query review details, call the [QuerySmsQualificationRecord](~~QuerySmsQualificationRecord~~) operation.
   * - Affected by the SMS signature real-name registration requirements, the volume of qualification review tickets is growing rapidly, and the review time may be extended. Please be patient. The review is expected to be completed within 2 business days (review hours: Monday to Sunday 9:00-21:00, postponed for legal holidays). In special cases, the review time may be extended. Please be patient.
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
   * After you apply for SMS qualifications, you can call this operation to query the details of a single qualification.
   * 
   * @remarks
   * - This API queries the details of a single qualification (enterprise information, legal representative information, and administrator information).
   * - To query all qualification information under your current account, or to query review details, call the [QuerySmsQualificationRecord](~~QuerySmsQualificationRecord~~) operation.
   * - Affected by the SMS signature real-name registration requirements, the volume of qualification review tickets is growing rapidly, and the review time may be extended. Please be patient. The review is expected to be completed within 2 business days (review hours: Monday to Sunday 9:00-21:00, postponed for legal holidays). In special cases, the review time may be extended. Please be patient.
   * 
   * @param request - QuerySingleSmsQualificationRequest
   * @returns QuerySingleSmsQualificationResponse
   */
  async querySingleSmsQualification(request: $_model.QuerySingleSmsQualificationRequest): Promise<$_model.QuerySingleSmsQualificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySingleSmsQualificationWithOptions(request, runtime);
  }

  /**
   * Queries icp record details.
   * 
   * @remarks
   * Pass a list of icp record IDs to retrieve their details.
   * For example, call the QuerySmsSignList or GetSmsSign API to obtain the required icp record IDs.
   * 
   * @param tmpReq - QuerySmsAppIcpRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsAppIcpRecordResponse
   */
  async querySmsAppIcpRecordWithOptions(tmpReq: $_model.QuerySmsAppIcpRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsAppIcpRecordResponse> {
    tmpReq.validate();
    let request = new $_model.QuerySmsAppIcpRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.appIcpRecordIdList)) {
      request.appIcpRecordIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appIcpRecordIdList, "AppIcpRecordIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appIcpRecordIdListShrink)) {
      query["AppIcpRecordIdList"] = request.appIcpRecordIdListShrink;
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
      action: "QuerySmsAppIcpRecord",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsAppIcpRecordResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsAppIcpRecordResponse({}));
  }

  /**
   * Queries icp record details.
   * 
   * @remarks
   * Pass a list of icp record IDs to retrieve their details.
   * For example, call the QuerySmsSignList or GetSmsSign API to obtain the required icp record IDs.
   * 
   * @param request - QuerySmsAppIcpRecordRequest
   * @returns QuerySmsAppIcpRecordResponse
   */
  async querySmsAppIcpRecord(request: $_model.QuerySmsAppIcpRecordRequest): Promise<$_model.QuerySmsAppIcpRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsAppIcpRecordWithOptions(request, runtime);
  }

  /**
   * Queries created letters of authorization. You can view the review status and authorized signature scope of the letters.
   * 
   * @remarks
   * - Supports full query or conditional query:
   *   - **Full query**: Queries the information of all letters of authorization under your current account. No parameters need to be passed. Full query is performed by default.
   *   - **Conditional query**: Supports queries by letter of authorization ID, signature name, and review status of the letter of authorization. Pass the parameters by which you want to filter.
   * - Review duration: Affected by the real-name registration requirements for SMS signatures, the volume of qualification review tickets is currently increasing rapidly, and the review duration may be extended. Please wait patiently. The review is expected to be completed within 2 working days. SMS signatures and templates are expected to be reviewed within 2 hours after submission. Reviews involving governments and enterprises are generally completed within 2 working days. If verification upgrades, a large number of review tasks, or non-working hours are encountered, the review duration may be extended. Please wait patiently. (Review working hours: Monday to Sunday, 9:00–21:00, postponed for statutory holidays.)
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
   * Queries created letters of authorization. You can view the review status and authorized signature scope of the letters.
   * 
   * @remarks
   * - Supports full query or conditional query:
   *   - **Full query**: Queries the information of all letters of authorization under your current account. No parameters need to be passed. Full query is performed by default.
   *   - **Conditional query**: Supports queries by letter of authorization ID, signature name, and review status of the letter of authorization. Pass the parameters by which you want to filter.
   * - Review duration: Affected by the real-name registration requirements for SMS signatures, the volume of qualification review tickets is currently increasing rapidly, and the review duration may be extended. Please wait patiently. The review is expected to be completed within 2 working days. SMS signatures and templates are expected to be reviewed within 2 hours after submission. Reviews involving governments and enterprises are generally completed within 2 working days. If verification upgrades, a large number of review tasks, or non-working hours are encountered, the review duration may be extended. Please wait patiently. (Review working hours: Monday to Sunday, 9:00–21:00, postponed for statutory holidays.)
   * 
   * @param request - QuerySmsAuthorizationLetterRequest
   * @returns QuerySmsAuthorizationLetterResponse
   */
  async querySmsAuthorizationLetter(request: $_model.QuerySmsAuthorizationLetterRequest): Promise<$_model.QuerySmsAuthorizationLetterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsAuthorizationLetterWithOptions(request, runtime);
  }

  /**
   * Queries a list of SMS qualifications and their review details after you submit qualification applications. This operation supports filtered query.
   * 
   * @remarks
   * - 支持全量查询或条件查询：
   *   - **全量查询**：查询您当前帐户下所有短信资质，无需传参。默认全量查询。
   *   - **条件查询**：支持根据资质名称、企业名称、法人姓名、审核状态、审核工单ID、资质用途进行查询，传入您希望筛选的参数即可。
   * - 本接口用于查询资质及其审核信息，如果需要查询单个资质的具体信息（企业信息、法人信息、管理员信息），请调用[查询单个资质详情](~~QuerySingleSmsQualification~~)接口。
   * - 受短信签名实名制报备要求影响，当前资质审核工单量增长快速，审核时间可能会延长，请耐心等待，预计2个工作日内完成（审核工作时间：周一至周日 9:00~21:00，法定节假日顺延）。特殊情况可能延长审核时间，请耐心等待。
   * - 如果资质未通过审核，审核备注`AuditRemark`会返回审核失败的原因，请参考[审核失败的处理建议](~~2384377#a96cc318b94x1~~)，调用[修改短信资质](~~UpdateSmsQualification~~)接口或在控制台[资质管理](https://dysms.console.aliyun.com/domestic/text/qualification)页面修改资质信息后，重新发起审核。
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
   * Queries a list of SMS qualifications and their review details after you submit qualification applications. This operation supports filtered query.
   * 
   * @remarks
   * - 支持全量查询或条件查询：
   *   - **全量查询**：查询您当前帐户下所有短信资质，无需传参。默认全量查询。
   *   - **条件查询**：支持根据资质名称、企业名称、法人姓名、审核状态、审核工单ID、资质用途进行查询，传入您希望筛选的参数即可。
   * - 本接口用于查询资质及其审核信息，如果需要查询单个资质的具体信息（企业信息、法人信息、管理员信息），请调用[查询单个资质详情](~~QuerySingleSmsQualification~~)接口。
   * - 受短信签名实名制报备要求影响，当前资质审核工单量增长快速，审核时间可能会延长，请耐心等待，预计2个工作日内完成（审核工作时间：周一至周日 9:00~21:00，法定节假日顺延）。特殊情况可能延长审核时间，请耐心等待。
   * - 如果资质未通过审核，审核备注`AuditRemark`会返回审核失败的原因，请参考[审核失败的处理建议](~~2384377#a96cc318b94x1~~)，调用[修改短信资质](~~UpdateSmsQualification~~)接口或在控制台[资质管理](https://dysms.console.aliyun.com/domestic/text/qualification)页面修改资质信息后，重新发起审核。
   * 
   * @param request - QuerySmsQualificationRecordRequest
   * @returns QuerySmsQualificationRecordResponse
   */
  async querySmsQualificationRecord(request: $_model.QuerySmsQualificationRecordRequest): Promise<$_model.QuerySmsQualificationRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsQualificationRecordWithOptions(request, runtime);
  }

  /**
   * Queries the review status of an SMS signature.
   * 
   * @remarks
   * - To comply with regulations from the Ministry of Industry and Information Technology (MIIT) and [related requirements](https://help.aliyun.com/document_detail/2806975.html) from carriers, Alibaba Cloud has upgraded its SMS signature management APIs. We recommend using the new [GetSmsSign - Query Signature Details](https://help.aliyun.com/document_detail/2807429.html) API, which returns more detailed information about signatures than this API.
   * - We typically review signatures within two hours of submission. The review service is available from 9:00 to 21:00, Monday to Sunday. Reviews may be delayed during public holidays. We recommend submitting your application before 18:00 for a timely review.
   * - If a signature is rejected, the response includes the review reason. For troubleshooting information, see [Troubleshooting Signature Review Failures](https://help.aliyun.com/document_detail/65990.html). You can then call the [ModifySmsTemplate](https://help.aliyun.com/document_detail/419287.html) API or modify the SMS signature on the [Signature Management](https://dysms.console.aliyun.com/domestic/text) page.
   * - This API queries the review details for a single signature by name. To query all signatures in your account, call the [QuerySmsSignList](https://help.aliyun.com/document_detail/419288.html) API.
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
   * Queries the review status of an SMS signature.
   * 
   * @remarks
   * - To comply with regulations from the Ministry of Industry and Information Technology (MIIT) and [related requirements](https://help.aliyun.com/document_detail/2806975.html) from carriers, Alibaba Cloud has upgraded its SMS signature management APIs. We recommend using the new [GetSmsSign - Query Signature Details](https://help.aliyun.com/document_detail/2807429.html) API, which returns more detailed information about signatures than this API.
   * - We typically review signatures within two hours of submission. The review service is available from 9:00 to 21:00, Monday to Sunday. Reviews may be delayed during public holidays. We recommend submitting your application before 18:00 for a timely review.
   * - If a signature is rejected, the response includes the review reason. For troubleshooting information, see [Troubleshooting Signature Review Failures](https://help.aliyun.com/document_detail/65990.html). You can then call the [ModifySmsTemplate](https://help.aliyun.com/document_detail/419287.html) API or modify the SMS signature on the [Signature Management](https://dysms.console.aliyun.com/domestic/text) page.
   * - This API queries the review details for a single signature by name. To query all signatures in your account, call the [QuerySmsSignList](https://help.aliyun.com/document_detail/419288.html) API.
   * 
   * @param request - QuerySmsSignRequest
   * @returns QuerySmsSignResponse
   */
  async querySmsSign(request: $_model.QuerySmsSignRequest): Promise<$_model.QuerySmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSignWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query all signatures under your account, including signature audit status, signature type, and signature name.
   * 
   * @remarks
   * This operation queries the signature information that was **first created** or the **most recently approved** signature details under your current account. If you need to query more information such as application scenario content or files uploaded during application, you can call the [GetSmsSign](~~GetSmsSign~~) operation to query the audit details of a single signature by signature name.
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
   * You can call this operation to query all signatures under your account, including signature audit status, signature type, and signature name.
   * 
   * @remarks
   * This operation queries the signature information that was **first created** or the **most recently approved** signature details under your current account. If you need to query more information such as application scenario content or files uploaded during application, you can call the [GetSmsSign](~~GetSmsSign~~) operation to query the audit details of a single signature by signature name.
   * 
   * @param request - QuerySmsSignListRequest
   * @returns QuerySmsSignListResponse
   */
  async querySmsSignList(request: $_model.QuerySmsSignListRequest): Promise<$_model.QuerySmsSignListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsSignListWithOptions(request, runtime);
  }

  /**
   * This API has been deprecated.
   * 
   * @remarks
   * - Alibaba Cloud has updated its template-related APIs to comply with regulatory and [carrier requirements](https://help.aliyun.com/document_detail/2806975.html). We recommend that you use the new [GetSmsTemplate - Query template review details](https://help.aliyun.com/document_detail/2807433.html) API. The new API returns more detailed template information in its response.
   * - Review timeline: After you submit a template, Alibaba Cloud typically completes the review within two hours. Review hours are 9:00 to 21:00 (UTC+8) from Monday to Sunday. Reviews are postponed during public holidays. We recommend that you submit your templates before 18:00 (UTC+8).
   * - If a template fails review, the response includes the reason for the rejection. For more information, see [Suggestions for handling a failed review](https://help.aliyun.com/document_detail/65990.html). You can then call the [ModifySmsTemplate](https://help.aliyun.com/document_detail/419287.html) API or modify the template on the [Template Management](https://dysms.console.aliyun.com/domestic/text/template) page.
   * - QuerySmsTemplate queries the review details of a single template by its template code. To query the details of all templates in your account, call the [QuerySmsTemplateList](https://help.aliyun.com/document_detail/419288.html) API.
   * 
   * @deprecated OpenAPI QuerySmsTemplate is deprecated, please use Dysmsapi::2017-05-25::GetSmsTemplate instead.
   * 
   * @param request - QuerySmsTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsTemplateResponse
   */
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
   * This API has been deprecated.
   * 
   * @remarks
   * - Alibaba Cloud has updated its template-related APIs to comply with regulatory and [carrier requirements](https://help.aliyun.com/document_detail/2806975.html). We recommend that you use the new [GetSmsTemplate - Query template review details](https://help.aliyun.com/document_detail/2807433.html) API. The new API returns more detailed template information in its response.
   * - Review timeline: After you submit a template, Alibaba Cloud typically completes the review within two hours. Review hours are 9:00 to 21:00 (UTC+8) from Monday to Sunday. Reviews are postponed during public holidays. We recommend that you submit your templates before 18:00 (UTC+8).
   * - If a template fails review, the response includes the reason for the rejection. For more information, see [Suggestions for handling a failed review](https://help.aliyun.com/document_detail/65990.html). You can then call the [ModifySmsTemplate](https://help.aliyun.com/document_detail/419287.html) API or modify the template on the [Template Management](https://dysms.console.aliyun.com/domestic/text/template) page.
   * - QuerySmsTemplate queries the review details of a single template by its template code. To query the details of all templates in your account, call the [QuerySmsTemplateList](https://help.aliyun.com/document_detail/419288.html) API.
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
   * You can call this operation to query all templates under your account. This way, you can view template details, including the template approval status, template type, and template content.
   * 
   * @remarks
   * - This operation queries the template details of all templates under your current account. To query more details such as the template variable content and the file information uploaded during application, you can call the [GetSmsTemplate](~~GetSmsTemplate~~) operation to query the approval details of a single template by template code.
   * - You can also log on to the Short Message Service (SMS) console and view the template details of all templates under your current account on the [Template Management](https://dysms.console.aliyun.com/domestic/text/template) page.
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
   * You can call this operation to query all templates under your account. This way, you can view template details, including the template approval status, template type, and template content.
   * 
   * @remarks
   * - This operation queries the template details of all templates under your current account. To query more details such as the template variable content and the file information uploaded during application, you can call the [GetSmsTemplate](~~GetSmsTemplate~~) operation to query the approval details of a single template by template code.
   * - You can also log on to the Short Message Service (SMS) console and view the template details of all templates under your current account on the [Template Management](https://dysms.console.aliyun.com/domestic/text/template) page.
   * 
   * @param request - QuerySmsTemplateListRequest
   * @returns QuerySmsTemplateListResponse
   */
  async querySmsTemplateList(request: $_model.QuerySmsTemplateListRequest): Promise<$_model.QuerySmsTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsTemplateListWithOptions(request, runtime);
  }

  /**
   * Queries the details of one or more trademarks.
   * 
   * @remarks
   * This operation retrieves the details of trademarks by using a list of trademark IDs.
   * For example, you can obtain trademark IDs by calling signature query operations such as `QuerySmsSignList` or `GetSmsSign`. You can then use this operation to retrieve the details of each trademark.
   * 
   * @param tmpReq - QuerySmsTrademarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmsTrademarkResponse
   */
  async querySmsTrademarkWithOptions(tmpReq: $_model.QuerySmsTrademarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmsTrademarkResponse> {
    tmpReq.validate();
    let request = new $_model.QuerySmsTrademarkShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.trademarkIdList)) {
      request.trademarkIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.trademarkIdList, "TrademarkIdList", "json");
    }

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

    if (!$dara.isNull(request.trademarkIdListShrink)) {
      query["TrademarkIdList"] = request.trademarkIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmsTrademark",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmsTrademarkResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmsTrademarkResponse({}));
  }

  /**
   * Queries the details of one or more trademarks.
   * 
   * @remarks
   * This operation retrieves the details of trademarks by using a list of trademark IDs.
   * For example, you can obtain trademark IDs by calling signature query operations such as `QuerySmsSignList` or `GetSmsSign`. You can then use this operation to retrieve the details of each trademark.
   * 
   * @param request - QuerySmsTrademarkRequest
   * @returns QuerySmsTrademarkResponse
   */
  async querySmsTrademark(request: $_model.QuerySmsTrademarkRequest): Promise<$_model.QuerySmsTrademarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmsTrademarkWithOptions(request, runtime);
  }

  /**
   * When applying for SMS qualification, the administrator\\"s phone number must be verified. Use this operation to obtain an SMS verification code.
   * 
   * @remarks
   * - After you receive the phone verification code, pass it to the `CertifyCode` parameter of the [SubmitSmsQualification](~~SubmitSmsQualification~~) or [UpdateSmsQualification](~~UpdateSmsQualification~~) operation.
   * - You can call the [ValidPhoneCode](~~ValidPhoneCode~~) operation to verify whether the SMS verification code is correct.
   * - This operation is subject to [throttling](~~44335#section-0wh-xn6-0t7~~). Do not call it too frequently. For the same phone number, a maximum of 1 message per minute, 5 messages per hour, and 10 messages per day are supported.
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
   * When applying for SMS qualification, the administrator\\"s phone number must be verified. Use this operation to obtain an SMS verification code.
   * 
   * @remarks
   * - After you receive the phone verification code, pass it to the `CertifyCode` parameter of the [SubmitSmsQualification](~~SubmitSmsQualification~~) or [UpdateSmsQualification](~~UpdateSmsQualification~~) operation.
   * - You can call the [ValidPhoneCode](~~ValidPhoneCode~~) operation to verify whether the SMS verification code is correct.
   * - This operation is subject to [throttling](~~44335#section-0wh-xn6-0t7~~). Do not call it too frequently. For the same phone number, a maximum of 1 message per minute, 5 messages per hour, and 10 messages per day are supported.
   * 
   * @param request - RequiredPhoneCodeRequest
   * @returns RequiredPhoneCodeResponse
   */
  async requiredPhoneCode(request: $_model.RequiredPhoneCodeRequest): Promise<$_model.RequiredPhoneCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.requiredPhoneCodeWithOptions(request, runtime);
  }

  /**
   * Sends card SMS messages in batches.
   * 
   * @remarks
   * - Sending card SMS messages is a billable operation. You are not charged if a card SMS message fails to be sent or rendered. For more information, see [Multimedia SMS pricing](https://help.aliyun.com/document_detail/437951.html).
   * - The card SMS feature is currently in the internal invitation phase. Contact your Alibaba Cloud business manager to apply for activation, or contact [Alibaba Cloud pre-sales consulting](https://help.aliyun.com/document_detail/464625.html?spm=a2c4g.11186623.0.0.213219fcSn2Ykj#section-81n-72q-ybm).
   * - We recommend that you set the timeout period for card SMS messages to a value greater than or equal to 3 seconds. If a timeout failure occurs, we recommend that you check the delivery status before deciding whether to retry. We also recommend that you do not enable SDK retry logic when calling this operation; otherwise, multiple sending attempts may occur. For more information about timeout and retry settings, see [Timeout mechanism](https://help.aliyun.com/document_detail/262079.html) and [Retry mechanism](https://help.aliyun.com/document_detail/262080.html).
   * - Domestic SMS, international SMS, and multimedia SMS do not currently support idempotency. Implement idempotency control to prevent duplicate operations caused by multiple retries.
   * - Before you send a card SMS message, you must add and obtain approval for a card SMS template. When this operation is called to send an SMS message, the system checks whether the phone number supports card SMS messages. If the phone number does not support card SMS messages, you can configure whether to accept fallback to digital SMS or text SMS in the operation to improve the delivery rate.
   * - When you send card SMS messages in batches, each phone number can use a different signature and a different fallback. In a single request, you can send card SMS messages to a maximum of 100 phone numbers.
   * ### QPS limit
   * The QPS limit per user for this operation is 1,000 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation in a reasonable manner.
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
   * Sends card SMS messages in batches.
   * 
   * @remarks
   * - Sending card SMS messages is a billable operation. You are not charged if a card SMS message fails to be sent or rendered. For more information, see [Multimedia SMS pricing](https://help.aliyun.com/document_detail/437951.html).
   * - The card SMS feature is currently in the internal invitation phase. Contact your Alibaba Cloud business manager to apply for activation, or contact [Alibaba Cloud pre-sales consulting](https://help.aliyun.com/document_detail/464625.html?spm=a2c4g.11186623.0.0.213219fcSn2Ykj#section-81n-72q-ybm).
   * - We recommend that you set the timeout period for card SMS messages to a value greater than or equal to 3 seconds. If a timeout failure occurs, we recommend that you check the delivery status before deciding whether to retry. We also recommend that you do not enable SDK retry logic when calling this operation; otherwise, multiple sending attempts may occur. For more information about timeout and retry settings, see [Timeout mechanism](https://help.aliyun.com/document_detail/262079.html) and [Retry mechanism](https://help.aliyun.com/document_detail/262080.html).
   * - Domestic SMS, international SMS, and multimedia SMS do not currently support idempotency. Implement idempotency control to prevent duplicate operations caused by multiple retries.
   * - Before you send a card SMS message, you must add and obtain approval for a card SMS template. When this operation is called to send an SMS message, the system checks whether the phone number supports card SMS messages. If the phone number does not support card SMS messages, you can configure whether to accept fallback to digital SMS or text SMS in the operation to improve the delivery rate.
   * - When you send card SMS messages in batches, each phone number can use a different signature and a different fallback. In a single request, you can send card SMS messages to a maximum of 100 phone numbers.
   * ### QPS limit
   * The QPS limit per user for this operation is 1,000 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation in a reasonable manner.
   * 
   * @param request - SendBatchCardSmsRequest
   * @returns SendBatchCardSmsResponse
   */
  async sendBatchCardSms(request: $_model.SendBatchCardSmsRequest): Promise<$_model.SendBatchCardSmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendBatchCardSmsWithOptions(request, runtime);
  }

  /**
   * This operation sends messages to different phone numbers using a single template, with different signatures and template variables for each recipient.
   * 
   * @remarks
   * ### Basic information
   * - You can send messages to a maximum of 100 phone numbers in a single call.
   * - The global [endpoint](https://help.aliyun.com/document_detail/419270.html) is `dysmsapi.aliyuncs.com`. For a list of region-specific endpoints, see [Endpoints](https://help.aliyun.com/document_detail/419270.html).
   * ### API calls
   * - We recommend calling this operation using an SDK. For more information, see [Make your first API call](https://help.aliyun.com/document_detail/2841024.html).
   * - To send messages from the console, see [Send group messages](https://help.aliyun.com/document_detail/108266.html).
   * - To build your own API requests, see [V3 request body and signature mechanism](https://help.aliyun.com/document_detail/2593177.html).
   * ### Usage notes
   * - For domestic SMS, we recommend setting the timeout period to 1 second or longer. If a timeout occurs, check the delivery receipt status before you retry the request. For more information about timeout and retry settings, see [timeout mechanism](https://help.aliyun.com/document_detail/262079.html) and [retry mechanism](https://help.aliyun.com/document_detail/262080.html).
   * - This operation does not support idempotence for domestic SMS, international SMS, or Multimedia Messaging Service (MMS) messages. You must implement your own idempotence controls to prevent duplicate operations caused by multiple retries.
   * - This is a billable operation. For domestic SMS, you are charged based on the delivery receipt status from the carrier. You are not charged for messages that are successfully submitted but fail carrier delivery. For more information, see [Billing overview](https://help.aliyun.com/document_detail/44340.html).
   *   >Warning: 
   *   Batch message delivery may be delayed due to system capacity limits. For time-sensitive messages, such as verification codes or alert notifications, use the SendSms operation to send messages individually.
   *   
   * ### QPS limit
   * The Queries Per Second (QPS) limit for a single user is 5,000. Calls that exceed this limit are throttled. Plan your usage accordingly.
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
   * This operation sends messages to different phone numbers using a single template, with different signatures and template variables for each recipient.
   * 
   * @remarks
   * ### Basic information
   * - You can send messages to a maximum of 100 phone numbers in a single call.
   * - The global [endpoint](https://help.aliyun.com/document_detail/419270.html) is `dysmsapi.aliyuncs.com`. For a list of region-specific endpoints, see [Endpoints](https://help.aliyun.com/document_detail/419270.html).
   * ### API calls
   * - We recommend calling this operation using an SDK. For more information, see [Make your first API call](https://help.aliyun.com/document_detail/2841024.html).
   * - To send messages from the console, see [Send group messages](https://help.aliyun.com/document_detail/108266.html).
   * - To build your own API requests, see [V3 request body and signature mechanism](https://help.aliyun.com/document_detail/2593177.html).
   * ### Usage notes
   * - For domestic SMS, we recommend setting the timeout period to 1 second or longer. If a timeout occurs, check the delivery receipt status before you retry the request. For more information about timeout and retry settings, see [timeout mechanism](https://help.aliyun.com/document_detail/262079.html) and [retry mechanism](https://help.aliyun.com/document_detail/262080.html).
   * - This operation does not support idempotence for domestic SMS, international SMS, or Multimedia Messaging Service (MMS) messages. You must implement your own idempotence controls to prevent duplicate operations caused by multiple retries.
   * - This is a billable operation. For domestic SMS, you are charged based on the delivery receipt status from the carrier. You are not charged for messages that are successfully submitted but fail carrier delivery. For more information, see [Billing overview](https://help.aliyun.com/document_detail/44340.html).
   *   >Warning: 
   *   Batch message delivery may be delayed due to system capacity limits. For time-sensitive messages, such as verification codes or alert notifications, use the SendSms operation to send messages individually.
   *   
   * ### QPS limit
   * The Queries Per Second (QPS) limit for a single user is 5,000. Calls that exceed this limit are throttled. Plan your usage accordingly.
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
   * - 发送卡片短信为计费接口，卡片短信发送失败或渲染失败时不计费，详情请参见[多媒体短信定价](https://help.aliyun.com/document_detail/437951.html)。
   * - 目前卡片短信在内部邀约阶段，请联系您的阿里云商务经理申请开通或联系[阿里云售前咨询](https://help.aliyun.com/document_detail/464625.html?spm=a2c4g.11186623.0.0.213219fcSn2Ykj#section-81n-72q-ybm)。
   * - 卡片短信超时时间建议设置为≥3S；发生超时失败的情况时，建议查看回执状态后再判断是否重试。同时建议您在调用此接口时，不要开启SDK重试逻辑，否则可能会造成多次发送的情况。超时和重试的相关设置，请参见[超时机制](https://help.aliyun.com/document_detail/262079.html)、[重试机制](https://help.aliyun.com/document_detail/262080.html)。
   * - 国内短信、国际短信及多媒体短信目前均不支持幂等的能力，请您做好幂等控制，防止因多次重试而导致的重复操作问题。
   * - 发送卡片短信前需添加卡片短信模板且模板审核通过。本接口在发送短信时，会校验号码是否支持卡片短信。如果该手机号不支持发送卡片短信，可在接口中设置是否接受数字短信和文本短信的回落，提升发送的触达率。
   * ### QPS限制
   * 本接口的单用户QPS限制为1000次/秒。超过限制，API调用会被限流，这可能会影响您的业务，请合理调用。
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
   * - 发送卡片短信为计费接口，卡片短信发送失败或渲染失败时不计费，详情请参见[多媒体短信定价](https://help.aliyun.com/document_detail/437951.html)。
   * - 目前卡片短信在内部邀约阶段，请联系您的阿里云商务经理申请开通或联系[阿里云售前咨询](https://help.aliyun.com/document_detail/464625.html?spm=a2c4g.11186623.0.0.213219fcSn2Ykj#section-81n-72q-ybm)。
   * - 卡片短信超时时间建议设置为≥3S；发生超时失败的情况时，建议查看回执状态后再判断是否重试。同时建议您在调用此接口时，不要开启SDK重试逻辑，否则可能会造成多次发送的情况。超时和重试的相关设置，请参见[超时机制](https://help.aliyun.com/document_detail/262079.html)、[重试机制](https://help.aliyun.com/document_detail/262080.html)。
   * - 国内短信、国际短信及多媒体短信目前均不支持幂等的能力，请您做好幂等控制，防止因多次重试而导致的重复操作问题。
   * - 发送卡片短信前需添加卡片短信模板且模板审核通过。本接口在发送短信时，会校验号码是否支持卡片短信。如果该手机号不支持发送卡片短信，可在接口中设置是否接受数字短信和文本短信的回落，提升发送的触达率。
   * ### QPS限制
   * 本接口的单用户QPS限制为1000次/秒。超过限制，API调用会被限流，这可能会影响您的业务，请合理调用。
   * 
   * @param request - SendCardSmsRequest
   * @returns SendCardSmsResponse
   */
  async sendCardSms(request: $_model.SendCardSmsRequest): Promise<$_model.SendCardSmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendCardSmsWithOptions(request, runtime);
  }

  /**
   * 发送物流短信
   * 
   * @param request - SendLogisticsSmsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendLogisticsSmsResponse
   */
  async sendLogisticsSmsWithOptions(request: $_model.SendLogisticsSmsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendLogisticsSmsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.expressCompanyCode)) {
      query["ExpressCompanyCode"] = request.expressCompanyCode;
    }

    if (!$dara.isNull(request.mailNo)) {
      query["MailNo"] = request.mailNo;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.platformCompanyCode)) {
      query["PlatformCompanyCode"] = request.platformCompanyCode;
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
      action: "SendLogisticsSms",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendLogisticsSmsResponse>(await this.callApi(params, req, runtime), new $_model.SendLogisticsSmsResponse({}));
  }

  /**
   * 发送物流短信
   * 
   * @param request - SendLogisticsSmsRequest
   * @returns SendLogisticsSmsResponse
   */
  async sendLogisticsSms(request: $_model.SendLogisticsSmsRequest): Promise<$_model.SendLogisticsSmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendLogisticsSmsWithOptions(request, runtime);
  }

  /**
   * 5G消息首次下行
   * 
   * @param request - SendRCSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendRCSResponse
   */
  async sendRCSWithOptions(request: $_model.SendRCSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendRCSResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.phoneNumbers)) {
      query["PhoneNumbers"] = request.phoneNumbers;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendRCS",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendRCSResponse>(await this.callApi(params, req, runtime), new $_model.SendRCSResponse({}));
  }

  /**
   * 5G消息首次下行
   * 
   * @param request - SendRCSRequest
   * @returns SendRCSResponse
   */
  async sendRCS(request: $_model.SendRCSRequest): Promise<$_model.SendRCSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendRCSWithOptions(request, runtime);
  }

  /**
   * 5G消息交互下行
   * 
   * @param request - SendRCSReplyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendRCSReplyResponse
   */
  async sendRCSReplyWithOptions(request: $_model.SendRCSReplyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendRCSReplyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inReplyToRcsID)) {
      query["InReplyToRcsID"] = request.inReplyToRcsID;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.phoneNumbers)) {
      query["PhoneNumbers"] = request.phoneNumbers;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendRCSReply",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendRCSReplyResponse>(await this.callApi(params, req, runtime), new $_model.SendRCSReplyResponse({}));
  }

  /**
   * 5G消息交互下行
   * 
   * @param request - SendRCSReplyRequest
   * @returns SendRCSReplyResponse
   */
  async sendRCSReply(request: $_model.SendRCSReplyRequest): Promise<$_model.SendRCSReplyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendRCSReplyWithOptions(request, runtime);
  }

  /**
   * Sends an SMS message to one or more specified mobile numbers.
   * 
   * @remarks
   * Use this API to send an SMS message to a single mobile number. This API also supports sending messages with the same signature and template variables to multiple mobile numbers, up to 1,000 per request. Note that bulk sending may experience some latency. If you need to send messages with different signatures or template variables to multiple recipients, use the [SendBatchSms](https://help.aliyun.com/document_detail/419274.html) API, which supports up to 100 mobile numbers per request.
   * ### Usage notes
   * - For SMS messages sent to the Chinese mainland, we recommend setting the timeout period to 1 second or longer. If a timeout occurs, check the delivery receipt status before retrying the request. For more information about timeout and retry settings, see [Timeout mechanism](https://help.aliyun.com/document_detail/262079.html) and [Retry mechanism](https://help.aliyun.com/document_detail/262080.html).
   * - This API does not support idempotence for domestic, international, or multimedia SMS messages. You must implement your own idempotence controls to prevent sending duplicate messages during retries.
   * - This is a billable API. For messages sent to the Chinese mainland, billing is based on the delivery receipt status from the carrier. You are not charged if the API call is successful but the carrier fails to deliver the message. For more information, see [Billing](https://help.aliyun.com/document_detail/44340.html).
   * ### QPS limit
   * This API has a queries per second (QPS) limit of 5,000 for each user. The system throttles calls that exceed this limit. To avoid throttling, use this API within the specified limit.
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
   * Sends an SMS message to one or more specified mobile numbers.
   * 
   * @remarks
   * Use this API to send an SMS message to a single mobile number. This API also supports sending messages with the same signature and template variables to multiple mobile numbers, up to 1,000 per request. Note that bulk sending may experience some latency. If you need to send messages with different signatures or template variables to multiple recipients, use the [SendBatchSms](https://help.aliyun.com/document_detail/419274.html) API, which supports up to 100 mobile numbers per request.
   * ### Usage notes
   * - For SMS messages sent to the Chinese mainland, we recommend setting the timeout period to 1 second or longer. If a timeout occurs, check the delivery receipt status before retrying the request. For more information about timeout and retry settings, see [Timeout mechanism](https://help.aliyun.com/document_detail/262079.html) and [Retry mechanism](https://help.aliyun.com/document_detail/262080.html).
   * - This API does not support idempotence for domestic, international, or multimedia SMS messages. You must implement your own idempotence controls to prevent sending duplicate messages during retries.
   * - This is a billable API. For messages sent to the Chinese mainland, billing is based on the delivery receipt status from the carrier. You are not charged if the API call is successful but the carrier fails to deliver the message. For more information, see [Billing](https://help.aliyun.com/document_detail/44340.html).
   * ### QPS limit
   * This API has a queries per second (QPS) limit of 5,000 for each user. The system throttles calls that exceed this limit. To avoid throttling, use this API within the specified limit.
   * 
   * @param request - SendSmsRequest
   * @returns SendSmsResponse
   */
  async sendSms(request: $_model.SendSmsRequest): Promise<$_model.SendSmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendSmsWithOptions(request, runtime);
  }

  /**
   * Feeds back the SMS delivery status corresponding to each message ID (MessageId) to the Alibaba Cloud International SMS platform.
   * 
   * @remarks
   * Metric definitions:
   * - OTP send volume: the number of verification codes sent.
   * - OTP conversion volume: the number of verification codes converted (the number of times a user successfully obtained a verification code and reported it back).
   * Conversion rate = OTP conversion volume / OTP send volume.
   * > The conversion rate feedback feature has a certain level of intrusiveness on the business system. To prevent jitter in conversion rate API calls from affecting business logic, please consider the following:  - Call the API in asynchronous mode (for example, using a queue or event-driven approach).  - Add a degradable solution to protect business logic (for example, manual degradation, or automatic degradation using a circuit breaker).
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
   * Feeds back the SMS delivery status corresponding to each message ID (MessageId) to the Alibaba Cloud International SMS platform.
   * 
   * @remarks
   * Metric definitions:
   * - OTP send volume: the number of verification codes sent.
   * - OTP conversion volume: the number of verification codes converted (the number of times a user successfully obtained a verification code and reported it back).
   * Conversion rate = OTP conversion volume / OTP send volume.
   * > The conversion rate feedback feature has a certain level of intrusiveness on the business system. To prevent jitter in conversion rate API calls from affecting business logic, please consider the following:  - Call the API in asynchronous mode (for example, using a queue or event-driven approach).  - Add a degradable solution to protect business logic (for example, manual degradation, or automatic degradation using a circuit breaker).
   * 
   * @param request - SmsConversionIntlRequest
   * @returns SmsConversionIntlResponse
   */
  async smsConversionIntl(request: $_model.SmsConversionIntlRequest): Promise<$_model.SmsConversionIntlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.smsConversionIntlWithOptions(request, runtime);
  }

  /**
   * Submits an SMS qualification application. As required by the Ministry of Industry and Information Technology (MIIT) and carriers for real-name SMS sending, domestic SMS services require qualification credential information of the signature owner. Apply for an SMS qualification first, and then apply for signatures and templates.
   * 
   * @remarks
   * - Before submitting an application, read [Qualification material description](https://help.aliyun.com/document_detail/2384377.html) and prepare the required qualification materials.
   * - Currently, only users who have completed **verify your identity - Enterprise account** can use the API to apply for SMS qualifications. If your Alibaba Cloud account has completed verify your identity - Individual account, apply for qualifications through the Short Message Service [console](https://dysms.console.aliyun.com/domestic/text/qualification/add), or [upgrade to verify your identity - Enterprise account](https://help.aliyun.com/document_detail/37178.html). [View my account verification type](https://myaccount.console.aliyun.com/cert-info)
   * - Batch qualification applications are not supported. Wait at least 5 seconds between applications.
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
   * Submits an SMS qualification application. As required by the Ministry of Industry and Information Technology (MIIT) and carriers for real-name SMS sending, domestic SMS services require qualification credential information of the signature owner. Apply for an SMS qualification first, and then apply for signatures and templates.
   * 
   * @remarks
   * - Before submitting an application, read [Qualification material description](https://help.aliyun.com/document_detail/2384377.html) and prepare the required qualification materials.
   * - Currently, only users who have completed **verify your identity - Enterprise account** can use the API to apply for SMS qualifications. If your Alibaba Cloud account has completed verify your identity - Individual account, apply for qualifications through the Short Message Service [console](https://dysms.console.aliyun.com/domestic/text/qualification/add), or [upgrade to verify your identity - Enterprise account](https://help.aliyun.com/document_detail/37178.html). [View my account verification type](https://myaccount.console.aliyun.com/cert-info)
   * - Batch qualification applications are not supported. Wait at least 5 seconds between applications.
   * 
   * @param request - SubmitSmsQualificationRequest
   * @returns SubmitSmsQualificationResponse
   */
  async submitSmsQualification(request: $_model.SubmitSmsQualificationRequest): Promise<$_model.SubmitSmsQualificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSmsQualificationWithOptions(request, runtime);
  }

  /**
   * Tags can mark resources, allowing enterprises or individuals to classify templates of the same type for easier search and resource aggregation. Call this operation to bind tags to SMS templates.
   * 
   * @remarks
   * - Each template can be bound to up to 20 tags.
   * - The tag key (Key) must be unique within the same template. If a template has two tags with the same Key but different Values, the new value overwrites the old value.
   * - This feature is only available for domestic text messages of Short Message Service on the China site.
   * ### QPS limit
   * The per-user QPS limit of this operation is 50 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation at a reasonable frequency.
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
   * Tags can mark resources, allowing enterprises or individuals to classify templates of the same type for easier search and resource aggregation. Call this operation to bind tags to SMS templates.
   * 
   * @remarks
   * - Each template can be bound to up to 20 tags.
   * - The tag key (Key) must be unique within the same template. If a template has two tags with the same Key but different Values, the new value overwrites the old value.
   * - This feature is only available for domestic text messages of Short Message Service on the China site.
   * ### QPS limit
   * The per-user QPS limit of this operation is 50 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation at a reasonable frequency.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Tags can mark resources, allowing enterprises or individuals to categorize templates of the same type for easier search and resource aggregation. If a template is no longer applicable to its currently bound tags, you can unbind the tags from the template. You can delete a single tag or delete tags in batches.
   * 
   * @remarks
   * ### QPS limit
   * The QPS limit per user for this operation is 50 calls per second. If the limit is exceeded, API calls will be throttled, which may affect your business. Please call the operation reasonably.
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
   * Tags can mark resources, allowing enterprises or individuals to categorize templates of the same type for easier search and resource aggregation. If a template is no longer applicable to its currently bound tags, you can unbind the tags from the template. You can delete a single tag or delete tags in batches.
   * 
   * @remarks
   * ### QPS limit
   * The QPS limit per user for this operation is 50 calls per second. If the limit is exceeded, API calls will be throttled, which may affect your business. Please call the operation reasonably.
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
   * 编辑5g签名
   * 
   * @param request - UpdateRCSSignatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRCSSignatureResponse
   */
  async updateRCSSignatureWithOptions(request: $_model.UpdateRCSSignatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRCSSignatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backgroundImage)) {
      query["BackgroundImage"] = request.backgroundImage;
    }

    if (!$dara.isNull(request.bubbleColor)) {
      query["BubbleColor"] = request.bubbleColor;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.latitude)) {
      query["Latitude"] = request.latitude;
    }

    if (!$dara.isNull(request.logo)) {
      query["Logo"] = request.logo;
    }

    if (!$dara.isNull(request.longitude)) {
      query["Longitude"] = request.longitude;
    }

    if (!$dara.isNull(request.officeAddress)) {
      query["OfficeAddress"] = request.officeAddress;
    }

    if (!$dara.isNull(request.serviceEmail)) {
      query["ServiceEmail"] = request.serviceEmail;
    }

    if (!$dara.isNull(request.servicePhone)) {
      query["ServicePhone"] = request.servicePhone;
    }

    if (!$dara.isNull(request.serviceTerms)) {
      query["ServiceTerms"] = request.serviceTerms;
    }

    if (!$dara.isNull(request.serviceWebsite)) {
      query["ServiceWebsite"] = request.serviceWebsite;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRCSSignature",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRCSSignatureResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRCSSignatureResponse({}));
  }

  /**
   * 编辑5g签名
   * 
   * @param request - UpdateRCSSignatureRequest
   * @returns UpdateRCSSignatureResponse
   */
  async updateRCSSignature(request: $_model.UpdateRCSSignatureRequest): Promise<$_model.UpdateRCSSignatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRCSSignatureWithOptions(request, runtime);
  }

  /**
   * If you need to update SMS qualification information, you can submit a modification request through this API. After submission, it will re-enter the review process.
   * 
   * @remarks
   * - Qualifications under review do not support modification. Please wait for the review process to finish, or [withdraw the application](https://dysms.console.aliyun.com/domestic/text/qualification) in the SMS Service console before making modifications.
   * - The modified SMS qualification **must be re-reviewed** (including qualifications that have already passed review). Please upload materials that meet the specifications according to the [Qualification Material Description](https://help.aliyun.com/document_detail/2384377.html).
   * - **Modification is not supported** for the qualification name, application purpose, or unified social credit code.
   * - Batch modification of SMS qualifications is not supported. It is recommended to leave at least 5 seconds between modifications.
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
   * If you need to update SMS qualification information, you can submit a modification request through this API. After submission, it will re-enter the review process.
   * 
   * @remarks
   * - Qualifications under review do not support modification. Please wait for the review process to finish, or [withdraw the application](https://dysms.console.aliyun.com/domestic/text/qualification) in the SMS Service console before making modifications.
   * - The modified SMS qualification **must be re-reviewed** (including qualifications that have already passed review). Please upload materials that meet the specifications according to the [Qualification Material Description](https://help.aliyun.com/document_detail/2384377.html).
   * - **Modification is not supported** for the qualification name, application purpose, or unified social credit code.
   * - Batch modification of SMS qualifications is not supported. It is recommended to leave at least 5 seconds between modifications.
   * 
   * @param request - UpdateSmsQualificationRequest
   * @returns UpdateSmsQualificationResponse
   */
  async updateSmsQualification(request: $_model.UpdateSmsQualificationRequest): Promise<$_model.UpdateSmsQualificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmsQualificationWithOptions(request, runtime);
  }

  /**
   * You can modify rejected or approved signatures. A modified signature is automatically submitted for review, and its status changes to pending review.
   * 
   * @remarks
   * - For details about the updates to the signature and template APIs, see [Announcement on Updating Signature & Template APIs for Short Message Service](https://help.aliyun.com/document_detail/2806975.html).
   * - You can modify signatures that are either **rejected** or **approved**. For guidance on handling review failures, see [Handling signature review failures](https://help.aliyun.com/document_detail/65990.html). Call this API to modify and resubmit the signature for review.
   * - You cannot use this API to edit the name of a **rejected** signature. To edit the name, go to the [Short Message Service console](https://dysms.console.aliyun.com/domestic/text/sign).
   * - Signatures you request using this API are synchronized with the Short Message Service console. For information on managing signatures in the console, see [Signatures](https://help.aliyun.com/document_detail/108073.html).
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
    if (!$dara.isNull(request.appIcpRecordId)) {
      query["AppIcpRecordId"] = request.appIcpRecordId;
    }

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

    if (!$dara.isNull(request.trademarkId)) {
      query["TrademarkId"] = request.trademarkId;
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
   * You can modify rejected or approved signatures. A modified signature is automatically submitted for review, and its status changes to pending review.
   * 
   * @remarks
   * - For details about the updates to the signature and template APIs, see [Announcement on Updating Signature & Template APIs for Short Message Service](https://help.aliyun.com/document_detail/2806975.html).
   * - You can modify signatures that are either **rejected** or **approved**. For guidance on handling review failures, see [Handling signature review failures](https://help.aliyun.com/document_detail/65990.html). Call this API to modify and resubmit the signature for review.
   * - You cannot use this API to edit the name of a **rejected** signature. To edit the name, go to the [Short Message Service console](https://dysms.console.aliyun.com/domestic/text/sign).
   * - Signatures you request using this API are synchronized with the Short Message Service console. For information on managing signatures in the console, see [Signatures](https://help.aliyun.com/document_detail/108073.html).
   * 
   * @param request - UpdateSmsSignRequest
   * @returns UpdateSmsSignResponse
   */
  async updateSmsSign(request: $_model.UpdateSmsSignRequest): Promise<$_model.UpdateSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmsSignWithOptions(request, runtime);
  }

  /**
   * This API modifies a template that failed review and automatically resubmits it.
   * 
   * @remarks
   * - For details about the changes to the signature and template APIs, see [Announcement on Updating Signature & Template APIs for Short Message Service](https://help.aliyun.com/document_detail/2806975.html).
   * - You can only modify templates that have failed review. For troubleshooting, see [Suggestions for handling failed SMS template reviews](https://help.aliyun.com/document_detail/65990.html). After modifying a template with this API, you must resubmit it for review.
   * - Template changes made using this API are synchronized with the Short Message Service console. To learn more about managing templates in the console, see [SMS templates](https://help.aliyun.com/document_detail/108085.html).
   * ### QPS limit
   * The QPS limit for this API is 1,000 queries per second per user. If you exceed this limit, your API calls will be throttled. This can affect your business, so please use the API responsibly.
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

    if (!$dara.isNull(request.trafficDriving)) {
      query["TrafficDriving"] = request.trafficDriving;
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
   * This API modifies a template that failed review and automatically resubmits it.
   * 
   * @remarks
   * - For details about the changes to the signature and template APIs, see [Announcement on Updating Signature & Template APIs for Short Message Service](https://help.aliyun.com/document_detail/2806975.html).
   * - You can only modify templates that have failed review. For troubleshooting, see [Suggestions for handling failed SMS template reviews](https://help.aliyun.com/document_detail/65990.html). After modifying a template with this API, you must resubmit it for review.
   * - Template changes made using this API are synchronized with the Short Message Service console. To learn more about managing templates in the console, see [SMS templates](https://help.aliyun.com/document_detail/108085.html).
   * ### QPS limit
   * The QPS limit for this API is 1,000 queries per second per user. If you exceed this limit, your API calls will be throttled. This can affect your business, so please use the API responsibly.
   * 
   * @param request - UpdateSmsTemplateRequest
   * @returns UpdateSmsTemplateResponse
   */
  async updateSmsTemplate(request: $_model.UpdateSmsTemplateRequest): Promise<$_model.UpdateSmsTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmsTemplateWithOptions(request, runtime);
  }

  /**
   * 升级文本短信为5g签名
   * 
   * @param request - UpgradeToRCSSignatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeToRCSSignatureResponse
   */
  async upgradeToRCSSignatureWithOptions(request: $_model.UpgradeToRCSSignatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeToRCSSignatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backgroundImage)) {
      query["BackgroundImage"] = request.backgroundImage;
    }

    if (!$dara.isNull(request.bubbleColor)) {
      query["BubbleColor"] = request.bubbleColor;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.latitude)) {
      query["Latitude"] = request.latitude;
    }

    if (!$dara.isNull(request.logo)) {
      query["Logo"] = request.logo;
    }

    if (!$dara.isNull(request.longitude)) {
      query["Longitude"] = request.longitude;
    }

    if (!$dara.isNull(request.officeAddress)) {
      query["OfficeAddress"] = request.officeAddress;
    }

    if (!$dara.isNull(request.serviceEmail)) {
      query["ServiceEmail"] = request.serviceEmail;
    }

    if (!$dara.isNull(request.servicePhone)) {
      query["ServicePhone"] = request.servicePhone;
    }

    if (!$dara.isNull(request.serviceTerms)) {
      query["ServiceTerms"] = request.serviceTerms;
    }

    if (!$dara.isNull(request.serviceWebsite)) {
      query["ServiceWebsite"] = request.serviceWebsite;
    }

    if (!$dara.isNull(request.signName)) {
      query["SignName"] = request.signName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeToRCSSignature",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeToRCSSignatureResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeToRCSSignatureResponse({}));
  }

  /**
   * 升级文本短信为5g签名
   * 
   * @param request - UpgradeToRCSSignatureRequest
   * @returns UpgradeToRCSSignatureResponse
   */
  async upgradeToRCSSignature(request: $_model.UpgradeToRCSSignatureRequest): Promise<$_model.UpgradeToRCSSignatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeToRCSSignatureWithOptions(request, runtime);
  }

  /**
   * When applying for SMS qualification, the administrator\\"s phone number must be verified. This operation verifies the phone number and the received verification code.
   * 
   * @remarks
   * - Call the [RequiredPhoneCode](~~RequiredPhoneCode~~) operation first. Alibaba Cloud sends an SMS verification code to the phone number that you provided.
   * - This operation does not affect the SMS qualification application process and is used only to verify the SMS verification code. When you submit the actual application, pass the verification code into the `CertifyCode` parameter of the [SubmitSmsQualification](~~SubmitSmsQualification~~) operation.
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
   * When applying for SMS qualification, the administrator\\"s phone number must be verified. This operation verifies the phone number and the received verification code.
   * 
   * @remarks
   * - Call the [RequiredPhoneCode](~~RequiredPhoneCode~~) operation first. Alibaba Cloud sends an SMS verification code to the phone number that you provided.
   * - This operation does not affect the SMS qualification application process and is used only to verify the SMS verification code. When you submit the actual application, pass the verification code into the `CertifyCode` parameter of the [SubmitSmsQualification](~~SubmitSmsQualification~~) operation.
   * 
   * @param request - ValidPhoneCodeRequest
   * @returns ValidPhoneCodeResponse
   */
  async validPhoneCode(request: $_model.ValidPhoneCodeRequest): Promise<$_model.ValidPhoneCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validPhoneCodeWithOptions(request, runtime);
  }

  /**
   * 物流短信运单号校验
   * 
   * @param request - VerifyLogisticsSmsMailNoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyLogisticsSmsMailNoResponse
   */
  async verifyLogisticsSmsMailNoWithOptions(request: $_model.VerifyLogisticsSmsMailNoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyLogisticsSmsMailNoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.expressCompanyCode)) {
      query["ExpressCompanyCode"] = request.expressCompanyCode;
    }

    if (!$dara.isNull(request.mailNo)) {
      query["MailNo"] = request.mailNo;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.platformCompanyCode)) {
      query["PlatformCompanyCode"] = request.platformCompanyCode;
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
      action: "VerifyLogisticsSmsMailNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyLogisticsSmsMailNoResponse>(await this.callApi(params, req, runtime), new $_model.VerifyLogisticsSmsMailNoResponse({}));
  }

  /**
   * 物流短信运单号校验
   * 
   * @param request - VerifyLogisticsSmsMailNoRequest
   * @returns VerifyLogisticsSmsMailNoResponse
   */
  async verifyLogisticsSmsMailNo(request: $_model.VerifyLogisticsSmsMailNoRequest): Promise<$_model.VerifyLogisticsSmsMailNoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyLogisticsSmsMailNoWithOptions(request, runtime);
  }

}
