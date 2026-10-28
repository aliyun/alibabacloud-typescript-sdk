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
      'ap-northeast-1': "agency.aliyuncs.com",
      'ap-northeast-2-pop': "agency.aliyuncs.com",
      'ap-south-1': "agency.aliyuncs.com",
      'ap-southeast-2': "agency.aliyuncs.com",
      'ap-southeast-3': "agency.aliyuncs.com",
      'ap-southeast-5': "agency.aliyuncs.com",
      'cn-beijing': "agency.aliyuncs.com",
      'cn-beijing-finance-1': "agency.aliyuncs.com",
      'cn-beijing-finance-pop': "agency.aliyuncs.com",
      'cn-beijing-gov-1': "agency.aliyuncs.com",
      'cn-beijing-nu16-b01': "agency.aliyuncs.com",
      'cn-chengdu': "agency.aliyuncs.com",
      'cn-edge-1': "agency.aliyuncs.com",
      'cn-fujian': "agency.aliyuncs.com",
      'cn-haidian-cm12-c01': "agency.aliyuncs.com",
      'cn-hangzhou': "agency.aliyuncs.com",
      'cn-hangzhou-bj-b01': "agency.aliyuncs.com",
      'cn-hangzhou-finance': "agency.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "agency.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "agency.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "agency.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "agency.aliyuncs.com",
      'cn-hangzhou-test-306': "agency.aliyuncs.com",
      'cn-hongkong': "agency.aliyuncs.com",
      'cn-hongkong-finance-pop': "agency.aliyuncs.com",
      'cn-huhehaote': "agency.aliyuncs.com",
      'cn-huhehaote-nebula-1': "agency.aliyuncs.com",
      'cn-north-2-gov-1': "agency.aliyuncs.com",
      'cn-qingdao': "agency.aliyuncs.com",
      'cn-qingdao-nebula': "agency.aliyuncs.com",
      'cn-shanghai': "agency.aliyuncs.com",
      'cn-shanghai-et15-b01': "agency.aliyuncs.com",
      'cn-shanghai-et2-b01': "agency.aliyuncs.com",
      'cn-shanghai-finance-1': "agency.aliyuncs.com",
      'cn-shanghai-inner': "agency.aliyuncs.com",
      'cn-shanghai-internal-test-1': "agency.aliyuncs.com",
      'cn-shenzhen': "agency.aliyuncs.com",
      'cn-shenzhen-finance-1': "agency.aliyuncs.com",
      'cn-shenzhen-inner': "agency.aliyuncs.com",
      'cn-shenzhen-st4-d01': "agency.aliyuncs.com",
      'cn-shenzhen-su18-b01': "agency.aliyuncs.com",
      'cn-wuhan': "agency.aliyuncs.com",
      'cn-wulanchabu': "agency.aliyuncs.com",
      'cn-yushanfang': "agency.aliyuncs.com",
      'cn-zhangbei': "agency.aliyuncs.com",
      'cn-zhangbei-na61-b01': "agency.aliyuncs.com",
      'cn-zhangjiakou': "agency.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "agency.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "agency.aliyuncs.com",
      'eu-central-1': "agency.aliyuncs.com",
      'eu-west-1': "agency.aliyuncs.com",
      'eu-west-1-oxs': "agency.aliyuncs.com",
      'me-east-1': "agency.aliyuncs.com",
      'rus-west-1-pop': "agency.aliyuncs.com",
      'us-east-1': "agency.aliyuncs.com",
      'us-west-1': "agency.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("agency", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Configures the automatic write-off feature before the end-of-month settlement. When the consumed but undeducted quota reaches the specified automatic write-off amount, the amount is transferred to the deducted quota for offset.
   * 
   * @param request - AutomaticWriteOffRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AutomaticWriteOffResponse
   */
  async automaticWriteOffWithOptions(request: $_model.AutomaticWriteOffRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AutomaticWriteOffResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.automaticWriteOffAmount)) {
      query["AutomaticWriteOffAmount"] = request.automaticWriteOffAmount;
    }

    if (!$dara.isNull(request.automaticWriteOffEnabled)) {
      query["AutomaticWriteOffEnabled"] = request.automaticWriteOffEnabled;
    }

    if (!$dara.isNull(request.customerUid)) {
      query["CustomerUid"] = request.customerUid;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AutomaticWriteOff",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AutomaticWriteOffResponse>(await this.callApi(params, req, runtime), new $_model.AutomaticWriteOffResponse({}));
  }

  /**
   * Configures the automatic write-off feature before the end-of-month settlement. When the consumed but undeducted quota reaches the specified automatic write-off amount, the amount is transferred to the deducted quota for offset.
   * 
   * @param request - AutomaticWriteOffRequest
   * @returns AutomaticWriteOffResponse
   */
  async automaticWriteOff(request: $_model.AutomaticWriteOffRequest): Promise<$_model.AutomaticWriteOffResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.automaticWriteOffWithOptions(request, runtime);
  }

  /**
   * Invalidates a coupon.
   * 
   * @param request - CancelCouponRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelCouponResponse
   */
  async cancelCouponWithOptions(request: $_model.CancelCouponRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelCouponResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.couponId)) {
      query["CouponId"] = request.couponId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelCoupon",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelCouponResponse>(await this.callApi(params, req, runtime), new $_model.CancelCouponResponse({}));
  }

  /**
   * Invalidates a coupon.
   * 
   * @param request - CancelCouponRequest
   * @returns CancelCouponResponse
   */
  async cancelCoupon(request: $_model.CancelCouponRequest): Promise<$_model.CancelCouponResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelCouponWithOptions(request, runtime);
  }

  /**
   * Unsubscribe from multi-level bills for international channel ecosystem partners.
   * 
   * @remarks
   * Make sure that the caller is an international Alibaba Cloud master reseller partner.
   * You can unsubscribe from one type of bill file at a time.
   * After the corresponding bill type is unsubscribed, files are no longer pushed to the specified OSS space.
   * **This content is published only on the international site.**
   * 
   * @param request - CancelSubscriptionBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelSubscriptionBillResponse
   */
  async cancelSubscriptionBillWithOptions(request: $_model.CancelSubscriptionBillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelSubscriptionBillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.subscribeType)) {
      query["SubscribeType"] = request.subscribeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelSubscriptionBill",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelSubscriptionBillResponse>(await this.callApi(params, req, runtime), new $_model.CancelSubscriptionBillResponse({}));
  }

  /**
   * Unsubscribe from multi-level bills for international channel ecosystem partners.
   * 
   * @remarks
   * Make sure that the caller is an international Alibaba Cloud master reseller partner.
   * You can unsubscribe from one type of bill file at a time.
   * After the corresponding bill type is unsubscribed, files are no longer pushed to the specified OSS space.
   * **This content is published only on the international site.**
   * 
   * @param request - CancelSubscriptionBillRequest
   * @returns CancelSubscriptionBillResponse
   */
  async cancelSubscriptionBill(request: $_model.CancelSubscriptionBillRequest): Promise<$_model.CancelSubscriptionBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelSubscriptionBillWithOptions(request, runtime);
  }

  /**
   * Queries the list of coupon approval statuses.
   * 
   * @remarks
   * Ensure that the current calling account is a distribution partner. 
   * <notice>Available only on the international site.</notice>
   * 
   * @param request - CouponApprovalStatusListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CouponApprovalStatusListResponse
   */
  async couponApprovalStatusListWithOptions(request: $_model.CouponApprovalStatusListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CouponApprovalStatusListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateStatus)) {
      query["TemplateStatus"] = request.templateStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CouponApprovalStatusList",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CouponApprovalStatusListResponse>(await this.callApi(params, req, runtime), new $_model.CouponApprovalStatusListResponse({}));
  }

  /**
   * Queries the list of coupon approval statuses.
   * 
   * @remarks
   * Ensure that the current calling account is a distribution partner. 
   * <notice>Available only on the international site.</notice>
   * 
   * @param request - CouponApprovalStatusListRequest
   * @returns CouponApprovalStatusListResponse
   */
  async couponApprovalStatusList(request: $_model.CouponApprovalStatusListRequest): Promise<$_model.CouponApprovalStatusListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.couponApprovalStatusListWithOptions(request, runtime);
  }

  /**
   * Creates a coupon template.
   * 
   * @param tmpReq - CreateCouponTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCouponTemplateResponse
   */
  async createCouponTemplateWithOptions(tmpReq: $_model.CreateCouponTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCouponTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCouponTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.productType)) {
      request.productTypeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.productType, "ProductType", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.applicableProducts)) {
      query["ApplicableProducts"] = request.applicableProducts;
    }

    if (!$dara.isNull(request.costBearer)) {
      query["CostBearer"] = request.costBearer;
    }

    if (!$dara.isNull(request.couponDescription)) {
      query["CouponDescription"] = request.couponDescription;
    }

    if (!$dara.isNull(request.expireddate)) {
      query["Expireddate"] = request.expireddate;
    }

    if (!$dara.isNull(request.limitPerPerson)) {
      query["LimitPerPerson"] = request.limitPerPerson;
    }

    if (!$dara.isNull(request.productTypeShrink)) {
      query["ProductType"] = request.productTypeShrink;
    }

    if (!$dara.isNull(request.purchaseType)) {
      query["PurchaseType"] = request.purchaseType;
    }

    if (!$dara.isNull(request.reasonForApplication)) {
      query["ReasonForApplication"] = request.reasonForApplication;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.vailddate)) {
      query["Vailddate"] = request.vailddate;
    }

    if (!$dara.isNull(request.vaildperioddays)) {
      query["Vaildperioddays"] = request.vaildperioddays;
    }

    if (!$dara.isNull(request.validUntil)) {
      query["ValidUntil"] = request.validUntil;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCouponTemplate",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCouponTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateCouponTemplateResponse({}));
  }

  /**
   * Creates a coupon template.
   * 
   * @param request - CreateCouponTemplateRequest
   * @returns CreateCouponTemplateResponse
   */
  async createCouponTemplate(request: $_model.CreateCouponTemplateRequest): Promise<$_model.CreateCouponTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCouponTemplateWithOptions(request, runtime);
  }

  /**
   * Registers a customer to be invited.
   * 
   * @param request - CreateCustomerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomerResponse
   */
  async createCustomerWithOptions(request: $_model.CreateCustomerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerName)) {
      query["CustomerName"] = request.customerName;
    }

    if (!$dara.isNull(request.customerSource)) {
      query["CustomerSource"] = request.customerSource;
    }

    if (!$dara.isNull(request.customerSubTrade)) {
      query["CustomerSubTrade"] = request.customerSubTrade;
    }

    if (!$dara.isNull(request.customerTrade)) {
      query["CustomerTrade"] = request.customerTrade;
    }

    if (!$dara.isNull(request.nation)) {
      query["Nation"] = request.nation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomer",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomerResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomerResponse({}));
  }

  /**
   * Registers a customer to be invited.
   * 
   * @param request - CreateCustomerRequest
   * @returns CreateCustomerResponse
   */
  async createCustomer(request: $_model.CreateCustomerRequest): Promise<$_model.CreateCustomerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomerWithOptions(request, runtime);
  }

  /**
   * Queries the quota adjustment records for distribution customers on the Alibaba Cloud International Website. This operation applies only to international users and cannot be called on the Alibaba Cloud China Website.
   * 
   * @remarks
   * The caller must be a channel master distributor partner or a channel distributor partner on the Alibaba Cloud International Website.
   * 
   * @param request - CustomerQuotaRecordListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CustomerQuotaRecordListResponse
   */
  async customerQuotaRecordListWithOptions(request: $_model.CustomerQuotaRecordListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CustomerQuotaRecordListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CustomerQuotaRecordList",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CustomerQuotaRecordListResponse>(await this.callApi(params, req, runtime), new $_model.CustomerQuotaRecordListResponse({}));
  }

  /**
   * Queries the quota adjustment records for distribution customers on the Alibaba Cloud International Website. This operation applies only to international users and cannot be called on the Alibaba Cloud China Website.
   * 
   * @remarks
   * The caller must be a channel master distributor partner or a channel distributor partner on the Alibaba Cloud International Website.
   * 
   * @param request - CustomerQuotaRecordListRequest
   * @returns CustomerQuotaRecordListResponse
   */
  async customerQuotaRecordList(request: $_model.CustomerQuotaRecordListRequest): Promise<$_model.CustomerQuotaRecordListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.customerQuotaRecordListWithOptions(request, runtime);
  }

  /**
   * Reduces the deducted credit of a reseller\\"s customer. For example, if the current deducted credit is 500 and the available credit is 1000, a reduction of 300 changes the deducted credit to 200 and the available credit to 1300.
   * Note: Sometimes the used credit of a customer may be negative. This indicates that no recovery of the used credit is needed. Wait for the customer to consume the credit. This occurs when a refund is issued while the customer\\"s credit is fully used. As a result, the customer\\"s credit increases beyond the original limit.
   * For example, if the current maximum available credit of a customer is 1000 with no usage, and a refund of 300 occurs, the used credit becomes -300.
   * 
   * @param request - DeductOutstandingBalanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeductOutstandingBalanceResponse
   */
  async deductOutstandingBalanceWithOptions(request: $_model.DeductOutstandingBalanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeductOutstandingBalanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deductAmount)) {
      query["DeductAmount"] = request.deductAmount;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeductOutstandingBalance",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeductOutstandingBalanceResponse>(await this.callApi(params, req, runtime), new $_model.DeductOutstandingBalanceResponse({}));
  }

  /**
   * Reduces the deducted credit of a reseller\\"s customer. For example, if the current deducted credit is 500 and the available credit is 1000, a reduction of 300 changes the deducted credit to 200 and the available credit to 1300.
   * Note: Sometimes the used credit of a customer may be negative. This indicates that no recovery of the used credit is needed. Wait for the customer to consume the credit. This occurs when a refund is issued while the customer\\"s credit is fully used. As a result, the customer\\"s credit increases beyond the original limit.
   * For example, if the current maximum available credit of a customer is 1000 with no usage, and a refund of 300 occurs, the used credit becomes -300.
   * 
   * @param request - DeductOutstandingBalanceRequest
   * @returns DeductOutstandingBalanceResponse
   */
  async deductOutstandingBalance(request: $_model.DeductOutstandingBalanceRequest): Promise<$_model.DeductOutstandingBalanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deductOutstandingBalanceWithOptions(request, runtime);
  }

  /**
   * Invalidates a coupon template.
   * 
   * @remarks
   * Make sure that the current caller is a distribution partner. 
   * <notice>Available only on the China site.</notice>.
   * 
   * @param request - DeleteCouponTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCouponTemplateResponse
   */
  async deleteCouponTemplateWithOptions(request: $_model.DeleteCouponTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCouponTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCouponTemplate",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCouponTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCouponTemplateResponse({}));
  }

  /**
   * Invalidates a coupon template.
   * 
   * @remarks
   * Make sure that the current caller is a distribution partner. 
   * <notice>Available only on the China site.</notice>.
   * 
   * @param request - DeleteCouponTemplateRequest
   * @returns DeleteCouponTemplateResponse
   */
  async deleteCouponTemplate(request: $_model.DeleteCouponTemplateRequest): Promise<$_model.DeleteCouponTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCouponTemplateWithOptions(request, runtime);
  }

  /**
   * Manages the shutdown status of pay-as-you-go instances for resold subordinate customers by Alibaba Cloud international channel master distributor partners and Alibaba Cloud international channel distributor partners.
   * 
   * @remarks
   * The caller must be an Alibaba Cloud international channel master distributor partner or an Alibaba Cloud international channel distributor partner.
   * **This content is published only on the China site (Chinese).**.
   * 
   * @param request - EditEndUserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditEndUserStatusResponse
   */
  async editEndUserStatusWithOptions(request: $_model.EditEndUserStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditEndUserStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditEndUserStatus",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditEndUserStatusResponse>(await this.callApi(params, req, runtime), new $_model.EditEndUserStatusResponse({}));
  }

  /**
   * Manages the shutdown status of pay-as-you-go instances for resold subordinate customers by Alibaba Cloud international channel master distributor partners and Alibaba Cloud international channel distributor partners.
   * 
   * @remarks
   * The caller must be an Alibaba Cloud international channel master distributor partner or an Alibaba Cloud international channel distributor partner.
   * **This content is published only on the China site (Chinese).**.
   * 
   * @param request - EditEndUserStatusRequest
   * @returns EditEndUserStatusResponse
   */
  async editEndUserStatus(request: $_model.EditEndUserStatusRequest): Promise<$_model.EditEndUserStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editEndUserStatusWithOptions(request, runtime);
  }

  /**
   * Sets the new purchase status of a subordinate reseller customer for an Alibaba Cloud reseller partner.
   * 
   * @remarks
   * The caller must be an Alibaba Cloud reseller partner.
   * **This content is published only on the China site.**.
   * 
   * @param request - EditNewBuyStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditNewBuyStatusResponse
   */
  async editNewBuyStatusWithOptions(request: $_model.EditNewBuyStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditNewBuyStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newBuyStatus)) {
      query["NewBuyStatus"] = request.newBuyStatus;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditNewBuyStatus",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditNewBuyStatusResponse>(await this.callApi(params, req, runtime), new $_model.EditNewBuyStatusResponse({}));
  }

  /**
   * Sets the new purchase status of a subordinate reseller customer for an Alibaba Cloud reseller partner.
   * 
   * @remarks
   * The caller must be an Alibaba Cloud reseller partner.
   * **This content is published only on the China site.**.
   * 
   * @param request - EditNewBuyStatusRequest
   * @returns EditNewBuyStatusResponse
   */
  async editNewBuyStatus(request: $_model.EditNewBuyStatusRequest): Promise<$_model.EditNewBuyStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editNewBuyStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the shutdown policy of a subordinate customer by an Alibaba Cloud distributor partner or reseller partner.
   * 
   * @remarks
   * The caller must be an Alibaba Cloud international channel distributor partner or an Alibaba Cloud international channel reseller partner.
   * **This content is published only on the Chinese site.**.
   * 
   * @param request - EditZeroCreditShutdownRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditZeroCreditShutdownResponse
   */
  async editZeroCreditShutdownWithOptions(request: $_model.EditZeroCreditShutdownRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditZeroCreditShutdownResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.shutdownPolicy)) {
      query["ShutdownPolicy"] = request.shutdownPolicy;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditZeroCreditShutdown",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditZeroCreditShutdownResponse>(await this.callApi(params, req, runtime), new $_model.EditZeroCreditShutdownResponse({}));
  }

  /**
   * Modifies the shutdown policy of a subordinate customer by an Alibaba Cloud distributor partner or reseller partner.
   * 
   * @remarks
   * The caller must be an Alibaba Cloud international channel distributor partner or an Alibaba Cloud international channel reseller partner.
   * **This content is published only on the Chinese site.**.
   * 
   * @param request - EditZeroCreditShutdownRequest
   * @returns EditZeroCreditShutdownResponse
   */
  async editZeroCreditShutdown(request: $_model.EditZeroCreditShutdownRequest): Promise<$_model.EditZeroCreditShutdownResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editZeroCreditShutdownWithOptions(request, runtime);
  }

  /**
   * Exports the quota adjustment records of a distributor\\"s customer, corresponding to the total budget adjustment details export feature on ACPN.
   * 
   * @remarks
   * The caller must be an Alibaba Cloud international site channel master distributor partner or an Alibaba Cloud international site channel distributor partner.
   * 
   * @param request - ExportCustomerQuotaRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportCustomerQuotaRecordResponse
   */
  async exportCustomerQuotaRecordWithOptions(request: $_model.ExportCustomerQuotaRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportCustomerQuotaRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.endUserPk)) {
      query["EndUserPk"] = request.endUserPk;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportCustomerQuotaRecord",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportCustomerQuotaRecordResponse>(await this.callApi(params, req, runtime), new $_model.ExportCustomerQuotaRecordResponse({}));
  }

  /**
   * Exports the quota adjustment records of a distributor\\"s customer, corresponding to the total budget adjustment details export feature on ACPN.
   * 
   * @remarks
   * The caller must be an Alibaba Cloud international site channel master distributor partner or an Alibaba Cloud international site channel distributor partner.
   * 
   * @param request - ExportCustomerQuotaRecordRequest
   * @returns ExportCustomerQuotaRecordResponse
   */
  async exportCustomerQuotaRecord(request: $_model.ExportCustomerQuotaRecordRequest): Promise<$_model.ExportCustomerQuotaRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportCustomerQuotaRecordWithOptions(request, runtime);
  }

  /**
   * Exports the reversed deduction details from ACPN.
   * 
   * @param request - ExportReversedDeductionHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportReversedDeductionHistoryResponse
   */
  async exportReversedDeductionHistoryWithOptions(request: $_model.ExportReversedDeductionHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportReversedDeductionHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.exportUid)) {
      query["ExportUid"] = request.exportUid;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportReversedDeductionHistory",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportReversedDeductionHistoryResponse>(await this.callApi(params, req, runtime), new $_model.ExportReversedDeductionHistoryResponse({}));
  }

  /**
   * Exports the reversed deduction details from ACPN.
   * 
   * @param request - ExportReversedDeductionHistoryRequest
   * @returns ExportReversedDeductionHistoryResponse
   */
  async exportReversedDeductionHistory(request: $_model.ExportReversedDeductionHistoryRequest): Promise<$_model.ExportReversedDeductionHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportReversedDeductionHistoryWithOptions(request, runtime);
  }

  /**
   * Returns the account information of distribution customers.
   * 
   * @param request - GetAccountInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountInfoResponse
   */
  async getAccountInfoWithOptions(request: $_model.GetAccountInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountInfo",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccountInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetAccountInfoResponse({}));
  }

  /**
   * Returns the account information of distribution customers.
   * 
   * @param request - GetAccountInfoRequest
   * @returns GetAccountInfoResponse
   */
  async getAccountInfo(request: $_model.GetAccountInfoRequest): Promise<$_model.GetAccountInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountInfoWithOptions(request, runtime);
  }

  /**
   * Queries a list of all active and delisted commission-eligible commodities for T1-level international distribution partners. This operation is available only for international users and cannot be called on the China site.
   * 
   * @remarks
   * Ensure that the current calling account is a distribution partner. 
   * <notice>Available only on the international site.</notice>
   * 
   * @param tmpReq - GetCommissionableProductsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCommissionableProductsResponse
   */
  async getCommissionableProductsWithOptions(tmpReq: $_model.GetCommissionableProductsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCommissionableProductsResponse> {
    tmpReq.validate();
    let request = new $_model.GetCommissionableProductsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listShowStatusList)) {
      request.listShowStatusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listShowStatusList, "ListShowStatusList", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.commodityCodeList)) {
      query["CommodityCodeList"] = request.commodityCodeList;
    }

    if (!$dara.isNull(request.fiscalYear)) {
      query["FiscalYear"] = request.fiscalYear;
    }

    if (!$dara.isNull(request.listShowStatusListShrink)) {
      query["ListShowStatusList"] = request.listShowStatusListShrink;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pipCodeList)) {
      query["PipCodeList"] = request.pipCodeList;
    }

    if (!$dara.isNull(request.realEndMonth)) {
      query["RealEndMonth"] = request.realEndMonth;
    }

    if (!$dara.isNull(request.realStartMonth)) {
      query["RealStartMonth"] = request.realStartMonth;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCommissionableProducts",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCommissionableProductsResponse>(await this.callApi(params, req, runtime), new $_model.GetCommissionableProductsResponse({}));
  }

  /**
   * Queries a list of all active and delisted commission-eligible commodities for T1-level international distribution partners. This operation is available only for international users and cannot be called on the China site.
   * 
   * @remarks
   * Ensure that the current calling account is a distribution partner. 
   * <notice>Available only on the international site.</notice>
   * 
   * @param request - GetCommissionableProductsRequest
   * @returns GetCommissionableProductsResponse
   */
  async getCommissionableProducts(request: $_model.GetCommissionableProductsRequest): Promise<$_model.GetCommissionableProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCommissionableProductsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a coupon template.
   * 
   * @remarks
   * Ensure that the current calling account is a distribution partner. 
   * <notice>Available only on the International site
   * 
   * @param request - GetCouponTemplateDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCouponTemplateDetailResponse
   */
  async getCouponTemplateDetailWithOptions(request: $_model.GetCouponTemplateDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCouponTemplateDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCouponTemplateDetail",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCouponTemplateDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetCouponTemplateDetailResponse({}));
  }

  /**
   * Queries the details of a coupon template.
   * 
   * @remarks
   * Ensure that the current calling account is a distribution partner. 
   * <notice>Available only on the International site
   * 
   * @param request - GetCouponTemplateDetailRequest
   * @returns GetCouponTemplateDetailResponse
   */
  async getCouponTemplateDetail(request: $_model.GetCouponTemplateDetailRequest): Promise<$_model.GetCouponTemplateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCouponTemplateDetailWithOptions(request, runtime);
  }

  /**
   * Queries the products that can be offset by international channel distribution coupons.
   * 
   * @param request - GetCoupondeductProductCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCoupondeductProductCodeResponse
   */
  async getCoupondeductProductCodeWithOptions(request: $_model.GetCoupondeductProductCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCoupondeductProductCodeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCoupondeductProductCode",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCoupondeductProductCodeResponse>(await this.callApi(params, req, runtime), new $_model.GetCoupondeductProductCodeResponse({}));
  }

  /**
   * Queries the products that can be offset by international channel distribution coupons.
   * 
   * @param request - GetCoupondeductProductCodeRequest
   * @returns GetCoupondeductProductCodeResponse
   */
  async getCoupondeductProductCode(request: $_model.GetCoupondeductProductCodeRequest): Promise<$_model.GetCoupondeductProductCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCoupondeductProductCodeWithOptions(request, runtime);
  }

  /**
   * Queries the credit control information of a distributor customer. If the distributor customer is of the Agency type, the PopCreditInfoJson parameter in the response is empty. This feature is available only for Reseller and Distributor.
   * 
   * @param request - GetCreditInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCreditInfoResponse
   */
  async getCreditInfoWithOptions(request: $_model.GetCreditInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCreditInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCreditInfo",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCreditInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetCreditInfoResponse({}));
  }

  /**
   * Queries the credit control information of a distributor customer. If the distributor customer is of the Agency type, the PopCreditInfoJson parameter in the response is empty. This feature is available only for Reseller and Distributor.
   * 
   * @param request - GetCreditInfoRequest
   * @returns GetCreditInfoResponse
   */
  async getCreditInfo(request: $_model.GetCreditInfoRequest): Promise<$_model.GetCreditInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCreditInfoWithOptions(request, runtime);
  }

  /**
   * Queries customer orders on the Alibaba Cloud International site. This operation is only allowed for the international site.
   * 
   * @remarks
   * The caller must be an Alibaba Cloud International site channel master distributor partner or an Alibaba Cloud International site channel distributor partner.
   * 
   * @param request - GetCustomerOrdersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomerOrdersResponse
   */
  async getCustomerOrdersWithOptions(request: $_model.GetCustomerOrdersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomerOrdersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomerOrders",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomerOrdersResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomerOrdersResponse({}));
  }

  /**
   * Queries customer orders on the Alibaba Cloud International site. This operation is only allowed for the international site.
   * 
   * @remarks
   * The caller must be an Alibaba Cloud International site channel master distributor partner or an Alibaba Cloud International site channel distributor partner.
   * 
   * @param request - GetCustomerOrdersRequest
   * @returns GetCustomerOrdersResponse
   */
  async getCustomerOrders(request: $_model.GetCustomerOrdersRequest): Promise<$_model.GetCustomerOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomerOrdersWithOptions(request, runtime);
  }

  /**
   * Retrieves the daily bills for resellers and distributors. This feature is only available for resellers and distributors.
   * 
   * @param request - GetDailyBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDailyBillResponse
   */
  async getDailyBillWithOptions(request: $_model.GetDailyBillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDailyBillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billOwner)) {
      query["BillOwner"] = request.billOwner;
    }

    if (!$dara.isNull(request.billType)) {
      query["BillType"] = request.billType;
    }

    if (!$dara.isNull(request.date)) {
      query["Date"] = request.date;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDailyBill",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDailyBillResponse>(await this.callApi(params, req, runtime), new $_model.GetDailyBillResponse({}));
  }

  /**
   * Retrieves the daily bills for resellers and distributors. This feature is only available for resellers and distributors.
   * 
   * @param request - GetDailyBillRequest
   * @returns GetDailyBillResponse
   */
  async getDailyBill(request: $_model.GetDailyBillRequest): Promise<$_model.GetDailyBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDailyBillWithOptions(request, runtime);
  }

  /**
   * Queries the invitation status of registered customers who have been sent invitations.
   * 
   * @param request - GetInviteStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInviteStatusResponse
   */
  async getInviteStatusWithOptions(request: $_model.GetInviteStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInviteStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inviteStatusList)) {
      query["InviteStatusList"] = request.inviteStatusList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInviteStatus",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInviteStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetInviteStatusResponse({}));
  }

  /**
   * Queries the invitation status of registered customers who have been sent invitations.
   * 
   * @param request - GetInviteStatusRequest
   * @returns GetInviteStatusResponse
   */
  async getInviteStatus(request: $_model.GetInviteStatusRequest): Promise<$_model.GetInviteStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInviteStatusWithOptions(request, runtime);
  }

  /**
   * Retrieves the monthly bill for distributors. This feature is available only to resellers and distributors.
   * 
   * @param request - GetMonthlyBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMonthlyBillResponse
   */
  async getMonthlyBillWithOptions(request: $_model.GetMonthlyBillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMonthlyBillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billOwner)) {
      query["BillOwner"] = request.billOwner;
    }

    if (!$dara.isNull(request.billType)) {
      query["BillType"] = request.billType;
    }

    if (!$dara.isNull(request.month)) {
      query["Month"] = request.month;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMonthlyBill",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMonthlyBillResponse>(await this.callApi(params, req, runtime), new $_model.GetMonthlyBillResponse({}));
  }

  /**
   * Retrieves the monthly bill for distributors. This feature is available only to resellers and distributors.
   * 
   * @param request - GetMonthlyBillRequest
   * @returns GetMonthlyBillResponse
   */
  async getMonthlyBill(request: $_model.GetMonthlyBillRequest): Promise<$_model.GetMonthlyBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMonthlyBillWithOptions(request, runtime);
  }

  /**
   * Queries order control change records.
   * 
   * @remarks
   * The caller must be an Alibaba Cloud international site channel master distributor partner or an Alibaba Cloud international site channel distributor partner.
   * 
   * @param request - GetPurchaseControlRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPurchaseControlRecordResponse
   */
  async getPurchaseControlRecordWithOptions(request: $_model.GetPurchaseControlRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPurchaseControlRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerUID)) {
      query["CustomerUID"] = request.customerUID;
    }

    if (!$dara.isNull(request.operationTime)) {
      query["OperationTime"] = request.operationTime;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPurchaseControlRecord",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPurchaseControlRecordResponse>(await this.callApi(params, req, runtime), new $_model.GetPurchaseControlRecordResponse({}));
  }

  /**
   * Queries order control change records.
   * 
   * @remarks
   * The caller must be an Alibaba Cloud international site channel master distributor partner or an Alibaba Cloud international site channel distributor partner.
   * 
   * @param request - GetPurchaseControlRecordRequest
   * @returns GetPurchaseControlRecordResponse
   */
  async getPurchaseControlRecord(request: $_model.GetPurchaseControlRecordRequest): Promise<$_model.GetPurchaseControlRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPurchaseControlRecordWithOptions(request, runtime);
  }

  /**
   * Queries the modification records of the deferred shutdown policy.
   * 
   * @remarks
   * The caller must be an Alibaba Cloud international site channel master distributor partner or an Alibaba Cloud international site channel distributor partner.
   * **This content is published only on the international site.**.
   * 
   * @param request - GetShutdownPolicyRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetShutdownPolicyRecordResponse
   */
  async getShutdownPolicyRecordWithOptions(request: $_model.GetShutdownPolicyRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetShutdownPolicyRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerUID)) {
      query["CustomerUID"] = request.customerUID;
    }

    if (!$dara.isNull(request.operationTime)) {
      query["OperationTime"] = request.operationTime;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetShutdownPolicyRecord",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetShutdownPolicyRecordResponse>(await this.callApi(params, req, runtime), new $_model.GetShutdownPolicyRecordResponse({}));
  }

  /**
   * Queries the modification records of the deferred shutdown policy.
   * 
   * @remarks
   * The caller must be an Alibaba Cloud international site channel master distributor partner or an Alibaba Cloud international site channel distributor partner.
   * **This content is published only on the international site.**.
   * 
   * @param request - GetShutdownPolicyRecordRequest
   * @returns GetShutdownPolicyRecordResponse
   */
  async getShutdownPolicyRecord(request: $_model.GetShutdownPolicyRecordRequest): Promise<$_model.GetShutdownPolicyRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getShutdownPolicyRecordWithOptions(request, runtime);
  }

  /**
   * Queries the details of a coupon application initiated by a tier-2 distributor. This operation applies only to distributors.
   * 
   * @param request - GetTier2CouponApprovalDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTier2CouponApprovalDetailResponse
   */
  async getTier2CouponApprovalDetailWithOptions(request: $_model.GetTier2CouponApprovalDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTier2CouponApprovalDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationSheetId)) {
      query["ApplicationSheetId"] = request.applicationSheetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTier2CouponApprovalDetail",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTier2CouponApprovalDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetTier2CouponApprovalDetailResponse({}));
  }

  /**
   * Queries the details of a coupon application initiated by a tier-2 distributor. This operation applies only to distributors.
   * 
   * @param request - GetTier2CouponApprovalDetailRequest
   * @returns GetTier2CouponApprovalDetailResponse
   */
  async getTier2CouponApprovalDetail(request: $_model.GetTier2CouponApprovalDetailRequest): Promise<$_model.GetTier2CouponApprovalDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTier2CouponApprovalDetailWithOptions(request, runtime);
  }

  /**
   * Retrieves all unassociated customers.
   * 
   * @param request - GetUnassociatedCustomerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUnassociatedCustomerResponse
   */
  async getUnassociatedCustomerWithOptions(request: $_model.GetUnassociatedCustomerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUnassociatedCustomerResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUnassociatedCustomer",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUnassociatedCustomerResponse>(await this.callApi(params, req, runtime), new $_model.GetUnassociatedCustomerResponse({}));
  }

  /**
   * Retrieves all unassociated customers.
   * 
   * @param request - GetUnassociatedCustomerRequest
   * @returns GetUnassociatedCustomerResponse
   */
  async getUnassociatedCustomer(request: $_model.GetUnassociatedCustomerRequest): Promise<$_model.GetUnassociatedCustomerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUnassociatedCustomerWithOptions(request, runtime);
  }

  /**
   * Invites a customer to register as a partner customer.
   * 
   * @param request - InviteSubAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InviteSubAccountResponse
   */
  async inviteSubAccountWithOptions(request: $_model.InviteSubAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InviteSubAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountInfoList)) {
      query["AccountInfoList"] = request.accountInfoList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InviteSubAccount",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InviteSubAccountResponse>(await this.callApi(params, req, runtime), new $_model.InviteSubAccountResponse({}));
  }

  /**
   * Invites a customer to register as a partner customer.
   * 
   * @param request - InviteSubAccountRequest
   * @returns InviteSubAccountResponse
   */
  async inviteSubAccount(request: $_model.InviteSubAccountRequest): Promise<$_model.InviteSubAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.inviteSubAccountWithOptions(request, runtime);
  }

  /**
   * Invites T2 Reseller sub-accounts in batch as a T1 partner.
   * 
   * @remarks
   * 1. The caller of this operation must be a channel master reseller partner on Alibaba Cloud International Website.
   * 2. The system automatically determines whether the invitation is cross-region based on whether the RegisterNation parameter falls within the T1 contract coverage area. You can call the ListCountries operation to query the contract coverage area.
   * - If the invitation is cross-region, a cross-region invitation approval process is initiated. After Alibaba Cloud approves the request, an invitation registration email is sent to the specified email address.
   * - If the invitation is not cross-region, an invitation registration email is sent directly.
   * 
   * @param request - InviteSubResellerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InviteSubResellerResponse
   */
  async inviteSubResellerWithOptions(request: $_model.InviteSubResellerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InviteSubResellerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountInfoList)) {
      query["AccountInfoList"] = request.accountInfoList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InviteSubReseller",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InviteSubResellerResponse>(await this.callApi(params, req, runtime), new $_model.InviteSubResellerResponse({}));
  }

  /**
   * Invites T2 Reseller sub-accounts in batch as a T1 partner.
   * 
   * @remarks
   * 1. The caller of this operation must be a channel master reseller partner on Alibaba Cloud International Website.
   * 2. The system automatically determines whether the invitation is cross-region based on whether the RegisterNation parameter falls within the T1 contract coverage area. You can call the ListCountries operation to query the contract coverage area.
   * - If the invitation is cross-region, a cross-region invitation approval process is initiated. After Alibaba Cloud approves the request, an invitation registration email is sent to the specified email address.
   * - If the invitation is not cross-region, an invitation registration email is sent directly.
   * 
   * @param request - InviteSubResellerRequest
   * @returns InviteSubResellerResponse
   */
  async inviteSubReseller(request: $_model.InviteSubResellerRequest): Promise<$_model.InviteSubResellerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.inviteSubResellerWithOptions(request, runtime);
  }

  /**
   * Issues coupons.
   * 
   * @param request - IssueCouponForCustomerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IssueCouponForCustomerResponse
   */
  async issueCouponForCustomerWithOptions(request: $_model.IssueCouponForCustomerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IssueCouponForCustomerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.applicationReason)) {
      query["ApplicationReason"] = request.applicationReason;
    }

    if (!$dara.isNull(request.couponTemplateId)) {
      query["CouponTemplateId"] = request.couponTemplateId;
    }

    if (!$dara.isNull(request.isUseBenefit)) {
      query["IsUseBenefit"] = request.isUseBenefit;
    }

    if (!$dara.isNull(request.uidlist)) {
      query["Uidlist"] = request.uidlist;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IssueCouponForCustomer",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IssueCouponForCustomerResponse>(await this.callApi(params, req, runtime), new $_model.IssueCouponForCustomerResponse({}));
  }

  /**
   * Issues coupons.
   * 
   * @param request - IssueCouponForCustomerRequest
   * @returns IssueCouponForCustomerResponse
   */
  async issueCouponForCustomer(request: $_model.IssueCouponForCustomerRequest): Promise<$_model.IssueCouponForCustomerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.issueCouponForCustomerWithOptions(request, runtime);
  }

  /**
   * Queries the list of serviceable regions. This feature is available to all distributors. The response returns region codes based on the serviceable countries specified in the distributor contract.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCountriesResponse
   */
  async listCountriesWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListCountriesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListCountries",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCountriesResponse>(await this.callApi(params, req, runtime), new $_model.ListCountriesResponse({}));
  }

  /**
   * Queries the list of serviceable regions. This feature is available to all distributors. The response returns region codes based on the serviceable countries specified in the distributor contract.
   * @returns ListCountriesResponse
   */
  async listCountries(): Promise<$_model.ListCountriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCountriesWithOptions(runtime);
  }

  /**
   * Queries the usage of coupons issued by a distribution partner.
   * 
   * @remarks
   * Ensure that the current calling account is a distribution partner. 
   * <notice>Available only on the international site.</notice>
   * 
   * @param request - ListCouponUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCouponUsageResponse
   */
  async listCouponUsageWithOptions(request: $_model.ListCouponUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCouponUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.couponTemplateId)) {
      query["CouponTemplateId"] = request.couponTemplateId;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.t2PartnerUid)) {
      query["T2PartnerUid"] = request.t2PartnerUid;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCouponUsage",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCouponUsageResponse>(await this.callApi(params, req, runtime), new $_model.ListCouponUsageResponse({}));
  }

  /**
   * Queries the usage of coupons issued by a distribution partner.
   * 
   * @remarks
   * Ensure that the current calling account is a distribution partner. 
   * <notice>Available only on the international site.</notice>
   * 
   * @param request - ListCouponUsageRequest
   * @returns ListCouponUsageResponse
   */
  async listCouponUsage(request: $_model.ListCouponUsageRequest): Promise<$_model.ListCouponUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCouponUsageWithOptions(request, runtime);
  }

  /**
   * Queries the list of exported files.
   * 
   * @param request - ListExportTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExportTasksResponse
   */
  async listExportTasksWithOptions(request: $_model.ListExportTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExportTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExportTasks",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExportTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListExportTasksResponse({}));
  }

  /**
   * Queries the list of exported files.
   * 
   * @param request - ListExportTasksRequest
   * @returns ListExportTasksResponse
   */
  async listExportTasks(request: $_model.ListExportTasksRequest): Promise<$_model.ListExportTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExportTasksWithOptions(request, runtime);
  }

  /**
   * Queries the coupon applications submitted by secondary distributors for their end users. This operation applies only to tier-1 distributors.
   * 
   * @param request - ListTier2CouponApprovalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTier2CouponApprovalResponse
   */
  async listTier2CouponApprovalWithOptions(request: $_model.ListTier2CouponApprovalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTier2CouponApprovalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationSheetId)) {
      query["ApplicationSheetId"] = request.applicationSheetId;
    }

    if (!$dara.isNull(request.approvalStatus)) {
      query["ApprovalStatus"] = request.approvalStatus;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.t2PartnerName)) {
      query["T2PartnerName"] = request.t2PartnerName;
    }

    if (!$dara.isNull(request.t2PartnerUid)) {
      query["T2PartnerUid"] = request.t2PartnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTier2CouponApproval",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTier2CouponApprovalResponse>(await this.callApi(params, req, runtime), new $_model.ListTier2CouponApprovalResponse({}));
  }

  /**
   * Queries the coupon applications submitted by secondary distributors for their end users. This operation applies only to tier-1 distributors.
   * 
   * @param request - ListTier2CouponApprovalRequest
   * @returns ListTier2CouponApprovalResponse
   */
  async listTier2CouponApproval(request: $_model.ListTier2CouponApprovalRequest): Promise<$_model.ListTier2CouponApprovalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTier2CouponApprovalWithOptions(request, runtime);
  }

  /**
   * Approves a process that requires partner approval. This operation is applicable only to distributors.
   * 
   * @param request - ProcessApprovalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProcessApprovalResponse
   */
  async processApprovalWithOptions(request: $_model.ProcessApprovalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ProcessApprovalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationSheetId)) {
      query["ApplicationSheetId"] = request.applicationSheetId;
    }

    if (!$dara.isNull(request.approvalAction)) {
      query["ApprovalAction"] = request.approvalAction;
    }

    if (!$dara.isNull(request.approvalComments)) {
      query["ApprovalComments"] = request.approvalComments;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ProcessApproval",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ProcessApprovalResponse>(await this.callApi(params, req, runtime), new $_model.ProcessApprovalResponse({}));
  }

  /**
   * Approves a process that requires partner approval. This operation is applicable only to distributors.
   * 
   * @param request - ProcessApprovalRequest
   * @returns ProcessApprovalResponse
   */
  async processApproval(request: $_model.ProcessApprovalRequest): Promise<$_model.ProcessApprovalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.processApprovalWithOptions(request, runtime);
  }

  /**
   * Queries the change records of the automatic write-off quota by using paging.
   * 
   * @param request - QueryAutomaticWriteOffChangeRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAutomaticWriteOffChangeRecordsResponse
   */
  async queryAutomaticWriteOffChangeRecordsWithOptions(request: $_model.QueryAutomaticWriteOffChangeRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAutomaticWriteOffChangeRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerUid)) {
      query["CustomerUid"] = request.customerUid;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAutomaticWriteOffChangeRecords",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAutomaticWriteOffChangeRecordsResponse>(await this.callApi(params, req, runtime), new $_model.QueryAutomaticWriteOffChangeRecordsResponse({}));
  }

  /**
   * Queries the change records of the automatic write-off quota by using paging.
   * 
   * @param request - QueryAutomaticWriteOffChangeRecordsRequest
   * @returns QueryAutomaticWriteOffChangeRecordsResponse
   */
  async queryAutomaticWriteOffChangeRecords(request: $_model.QueryAutomaticWriteOffChangeRecordsRequest): Promise<$_model.QueryAutomaticWriteOffChangeRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAutomaticWriteOffChangeRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the quota offset details of a specified customer.
   * 
   * @param request - QueryReversedDeductionHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryReversedDeductionHistoryResponse
   */
  async queryReversedDeductionHistoryWithOptions(request: $_model.QueryReversedDeductionHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryReversedDeductionHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
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

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryReversedDeductionHistory",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryReversedDeductionHistoryResponse>(await this.callApi(params, req, runtime), new $_model.QueryReversedDeductionHistoryResponse({}));
  }

  /**
   * Queries the quota offset details of a specified customer.
   * 
   * @param request - QueryReversedDeductionHistoryRequest
   * @returns QueryReversedDeductionHistoryResponse
   */
  async queryReversedDeductionHistory(request: $_model.QueryReversedDeductionHistoryRequest): Promise<$_model.QueryReversedDeductionHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryReversedDeductionHistoryWithOptions(request, runtime);
  }

  /**
   * Queries the quota transaction export results for international distribution users. This API operation is available only on the international site.
   * 
   * @remarks
   * The caller must be an Alibaba Cloud International site channel master distributor partner or an Alibaba Cloud International site channel distributor partner.
   * 
   * @param request - QuotaListExportPagedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuotaListExportPagedResponse
   */
  async quotaListExportPagedWithOptions(request: $_model.QuotaListExportPagedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuotaListExportPagedResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuotaListExportPaged",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuotaListExportPagedResponse>(await this.callApi(params, req, runtime), new $_model.QuotaListExportPagedResponse({}));
  }

  /**
   * Queries the quota transaction export results for international distribution users. This API operation is available only on the international site.
   * 
   * @remarks
   * The caller must be an Alibaba Cloud International site channel master distributor partner or an Alibaba Cloud International site channel distributor partner.
   * 
   * @param request - QuotaListExportPagedRequest
   * @returns QuotaListExportPagedResponse
   */
  async quotaListExportPaged(request: $_model.QuotaListExportPagedRequest): Promise<$_model.QuotaListExportPagedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.quotaListExportPagedWithOptions(request, runtime);
  }

  /**
   * Resends an invitation email.
   * 
   * @param request - ResendEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResendEmailResponse
   */
  async resendEmailWithOptions(request: $_model.ResendEmailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResendEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inviteId)) {
      query["InviteId"] = request.inviteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResendEmail",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResendEmailResponse>(await this.callApi(params, req, runtime), new $_model.ResendEmailResponse({}));
  }

  /**
   * Resends an invitation email.
   * 
   * @param request - ResendEmailRequest
   * @returns ResendEmailResponse
   */
  async resendEmail(request: $_model.ResendEmailRequest): Promise<$_model.ResendEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resendEmailWithOptions(request, runtime);
  }

  /**
   * Updates sub-account information, including the nickname and remarks.
   * 
   * @param request - SetAccountInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAccountInfoResponse
   */
  async setAccountInfoWithOptions(request: $_model.SetAccountInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAccountInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountNickname)) {
      query["AccountNickname"] = request.accountNickname;
    }

    if (!$dara.isNull(request.customerBd)) {
      query["CustomerBd"] = request.customerBd;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAccountInfo",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAccountInfoResponse>(await this.callApi(params, req, runtime), new $_model.SetAccountInfoResponse({}));
  }

  /**
   * Updates sub-account information, including the nickname and remarks.
   * 
   * @param request - SetAccountInfoRequest
   * @returns SetAccountInfoResponse
   */
  async setAccountInfo(request: $_model.SetAccountInfoRequest): Promise<$_model.SetAccountInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAccountInfoWithOptions(request, runtime);
  }

  /**
   * Sets the credit limit for a reseller customer. This feature is available only for Resellers and Distributors.
   * 
   * @param request - SetCreditLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetCreditLineResponse
   */
  async setCreditLineWithOptions(request: $_model.SetCreditLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetCreditLineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.creditLine)) {
      query["CreditLine"] = request.creditLine;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetCreditLine",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetCreditLineResponse>(await this.callApi(params, req, runtime), new $_model.SetCreditLineResponse({}));
  }

  /**
   * Sets the credit limit for a reseller customer. This feature is available only for Resellers and Distributors.
   * 
   * @param request - SetCreditLineRequest
   * @returns SetCreditLineResponse
   */
  async setCreditLine(request: $_model.SetCreditLineRequest): Promise<$_model.SetCreditLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setCreditLineWithOptions(request, runtime);
  }

  /**
   * Sets the credit usage threshold. When a customer\\"s available credit falls below the threshold, the reseller is notified by email. This feature is available only for Resellers and Distributors.
   * 
   * @param request - SetWarningThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetWarningThresholdResponse
   */
  async setWarningThresholdWithOptions(request: $_model.SetWarningThresholdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetWarningThresholdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!$dara.isNull(request.warningValue)) {
      query["WarningValue"] = request.warningValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetWarningThreshold",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetWarningThresholdResponse>(await this.callApi(params, req, runtime), new $_model.SetWarningThresholdResponse({}));
  }

  /**
   * Sets the credit usage threshold. When a customer\\"s available credit falls below the threshold, the reseller is notified by email. This feature is available only for Resellers and Distributors.
   * 
   * @param request - SetWarningThresholdRequest
   * @returns SetWarningThresholdResponse
   */
  async setWarningThreshold(request: $_model.SetWarningThresholdRequest): Promise<$_model.SetWarningThresholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setWarningThresholdWithOptions(request, runtime);
  }

  /**
   * Subscribes to multi-level ecosystem partner bills on Alibaba Cloud International and generates bill files to OSS.
   * 
   * @remarks
   * - Ensure that the caller is an Alibaba Cloud international master reseller partner.
   * - A user can subscribe to one type of bill file at a time.
   * - After subscription, bill files generated on the previous day are pushed daily starting from the next day. On the 5th of each month, full bill files for the previous billing cycle are pushed.
   * - Bill files generated on a daily basis may be delayed. Delayed bill files are pushed the day after they are generated and may include bills that were delayed from earlier days. Pull the full files for the previous month at the beginning of each month.
   * - Grant the [AliyunConsumeDump2OSSRole](https://ram.console.aliyun.com/?spm=api-workbench.API%20Document.0.0.68c71e0fhmTSJp#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D) permission to the subscribing user.
   * - File names.
   * ```.
   * BillingItemDetailForBillingPeriod   (Billing item detail)
   *   
   * Daily push file name format: UID_PartnerBillingItemDetail_YYYYMMDD_SquenceNo_fileNo. Example: 169**_BillingItemDetail_20190310_0001_01.
   *   
   * Full file name format at the beginning of the next month: UID_PartnerBillingItemDetail_YYYYMM_SquenceNo_fileNo. Example: 169**_BillingItemDetail_201903_0001_01.
   * InstanceDetailForBillingPeriod  (Instance bill detail)
   *  
   *  Daily push file name format: UID_PartnerInstanceDetail_YYYYMMDD_SquenceNo_fileNo. Example: 169**_InstanceDetail_20190310_0001_01.
   *   
   * Full file name format at the beginning of the next month: UID_PartnerInstanceDetail_YYYYMM_SquenceNo_fileNo. Example: 169**_InstanceDetail_201903_1999-0001_01.
   * BillingItemDetailMonthly   (Billing item monthly bill)
   *   
   * Daily push file name format: UID_PartnerBillingItemDetailMonthly_YYYYMM_SquenceNo_fileNo. Example: 169**_BillingItemDetailMonthly_201903_0001_01. This file is updated daily with full data from the beginning of the month to the current day, until the 5th of the next month.
   * InstanceDetailMonthly  (Instance monthly bill)
   *   
   * Daily push file name format: UID_PartnerInstanceDetailMonthly_YYYYMM_SquenceNo_fileNo. Example: 169**_InstanceDetailMonthly_201903_0001_01. This file is updated daily with full data from the beginning of the month to the current day, until the 5th of the next month.
   * fileNo exists only when the number of bill rows reaches the split threshold and the file is split.
   * ```
   * **This content is published only on the Chinese site.**.
   * 
   * @param request - SubscriptionBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubscriptionBillResponse
   */
  async subscriptionBillWithOptions(request: $_model.SubscriptionBillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubscriptionBillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginBillingCycle)) {
      query["BeginBillingCycle"] = request.beginBillingCycle;
    }

    if (!$dara.isNull(request.billFormat)) {
      query["BillFormat"] = request.billFormat;
    }

    if (!$dara.isNull(request.bucketOwnerId)) {
      query["BucketOwnerId"] = request.bucketOwnerId;
    }

    if (!$dara.isNull(request.subscribeBucket)) {
      query["SubscribeBucket"] = request.subscribeBucket;
    }

    if (!$dara.isNull(request.subscribeSegmentSize)) {
      query["SubscribeSegmentSize"] = request.subscribeSegmentSize;
    }

    if (!$dara.isNull(request.subscribeType)) {
      query["SubscribeType"] = request.subscribeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubscriptionBill",
      version: "2022-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubscriptionBillResponse>(await this.callApi(params, req, runtime), new $_model.SubscriptionBillResponse({}));
  }

  /**
   * Subscribes to multi-level ecosystem partner bills on Alibaba Cloud International and generates bill files to OSS.
   * 
   * @remarks
   * - Ensure that the caller is an Alibaba Cloud international master reseller partner.
   * - A user can subscribe to one type of bill file at a time.
   * - After subscription, bill files generated on the previous day are pushed daily starting from the next day. On the 5th of each month, full bill files for the previous billing cycle are pushed.
   * - Bill files generated on a daily basis may be delayed. Delayed bill files are pushed the day after they are generated and may include bills that were delayed from earlier days. Pull the full files for the previous month at the beginning of each month.
   * - Grant the [AliyunConsumeDump2OSSRole](https://ram.console.aliyun.com/?spm=api-workbench.API%20Document.0.0.68c71e0fhmTSJp#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D) permission to the subscribing user.
   * - File names.
   * ```.
   * BillingItemDetailForBillingPeriod   (Billing item detail)
   *   
   * Daily push file name format: UID_PartnerBillingItemDetail_YYYYMMDD_SquenceNo_fileNo. Example: 169**_BillingItemDetail_20190310_0001_01.
   *   
   * Full file name format at the beginning of the next month: UID_PartnerBillingItemDetail_YYYYMM_SquenceNo_fileNo. Example: 169**_BillingItemDetail_201903_0001_01.
   * InstanceDetailForBillingPeriod  (Instance bill detail)
   *  
   *  Daily push file name format: UID_PartnerInstanceDetail_YYYYMMDD_SquenceNo_fileNo. Example: 169**_InstanceDetail_20190310_0001_01.
   *   
   * Full file name format at the beginning of the next month: UID_PartnerInstanceDetail_YYYYMM_SquenceNo_fileNo. Example: 169**_InstanceDetail_201903_1999-0001_01.
   * BillingItemDetailMonthly   (Billing item monthly bill)
   *   
   * Daily push file name format: UID_PartnerBillingItemDetailMonthly_YYYYMM_SquenceNo_fileNo. Example: 169**_BillingItemDetailMonthly_201903_0001_01. This file is updated daily with full data from the beginning of the month to the current day, until the 5th of the next month.
   * InstanceDetailMonthly  (Instance monthly bill)
   *   
   * Daily push file name format: UID_PartnerInstanceDetailMonthly_YYYYMM_SquenceNo_fileNo. Example: 169**_InstanceDetailMonthly_201903_0001_01. This file is updated daily with full data from the beginning of the month to the current day, until the 5th of the next month.
   * fileNo exists only when the number of bill rows reaches the split threshold and the file is split.
   * ```
   * **This content is published only on the Chinese site.**.
   * 
   * @param request - SubscriptionBillRequest
   * @returns SubscriptionBillResponse
   */
  async subscriptionBill(request: $_model.SubscriptionBillRequest): Promise<$_model.SubscriptionBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.subscriptionBillWithOptions(request, runtime);
  }

}
