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
   * 作废优惠券
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
   * 作废优惠券
   * 
   * @param request - CancelCouponRequest
   * @returns CancelCouponResponse
   */
  async cancelCoupon(request: $_model.CancelCouponRequest): Promise<$_model.CancelCouponResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelCouponWithOptions(request, runtime);
  }

  /**
   * Cancels the subscription to multi-level bills as an Alibaba Cloud eco-partner.
   * 
   * @remarks
   * Make sure that you are a distributor of the Alibaba Cloud international ecosystem.
   * You can call this operation to cancel the subscription to only one type of bill at a time.
   * After the subscription to a type of bill is canceled, bills of this type are no longer pushed to the specified Object Storage Service (OSS) bucket.
   * **This topic is published only on the international site (alibabacloud.com).
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
   * Cancels the subscription to multi-level bills as an Alibaba Cloud eco-partner.
   * 
   * @remarks
   * Make sure that you are a distributor of the Alibaba Cloud international ecosystem.
   * You can call this operation to cancel the subscription to only one type of bill at a time.
   * After the subscription to a type of bill is canceled, bills of this type are no longer pushed to the specified Object Storage Service (OSS) bucket.
   * **This topic is published only on the international site (alibabacloud.com).
   * 
   * @param request - CancelSubscriptionBillRequest
   * @returns CancelSubscriptionBillResponse
   */
  async cancelSubscriptionBill(request: $_model.CancelSubscriptionBillRequest): Promise<$_model.CancelSubscriptionBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelSubscriptionBillWithOptions(request, runtime);
  }

  /**
   * 优惠券审批状态列表
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
   * 优惠券审批状态列表
   * 
   * @param request - CouponApprovalStatusListRequest
   * @returns CouponApprovalStatusListResponse
   */
  async couponApprovalStatusList(request: $_model.CouponApprovalStatusListRequest): Promise<$_model.CouponApprovalStatusListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.couponApprovalStatusListWithOptions(request, runtime);
  }

  /**
   * 创建优惠券模板
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
   * 创建优惠券模板
   * 
   * @param request - CreateCouponTemplateRequest
   * @returns CreateCouponTemplateResponse
   */
  async createCouponTemplate(request: $_model.CreateCouponTemplateRequest): Promise<$_model.CreateCouponTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCouponTemplateWithOptions(request, runtime);
  }

  /**
   * This function is designed for create a customer who is to be invited.
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
   * This function is designed for create a customer who is to be invited.
   * 
   * @param request - CreateCustomerRequest
   * @returns CreateCustomerResponse
   */
  async createCustomer(request: $_model.CreateCustomerRequest): Promise<$_model.CreateCustomerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomerWithOptions(request, runtime);
  }

  /**
   * Query quota adjustment list of Distribution Customer from International Site. Not available on Domestic Site.
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
   * Query quota adjustment list of Distribution Customer from International Site. Not available on Domestic Site.
   * 
   * @param request - CustomerQuotaRecordListRequest
   * @returns CustomerQuotaRecordListResponse
   */
  async customerQuotaRecordList(request: $_model.CustomerQuotaRecordListRequest): Promise<$_model.CustomerQuotaRecordListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.customerQuotaRecordListWithOptions(request, runtime);
  }

  /**
   * This API is used to offset the Deducted Credit of a Distribution Customer. For example, if the current Deducted Credit is 500 and the Available Credit is 1000, by offsetting 300, the Deducted Credit will then become 200, and the Available Credit becomes 1300.
   * 
   * @remarks
   * Note that sometimes you may find that the customer\\"s Used Credit is negative. This indicates that there is no need to restore the Used Credit, and its ready for customer\\"s usage. This phenomenon occurs because a refund is generated while the customer\\"s credit is full, thereby triggered additional increasing on the customer\\"s credit.
   * For example, if the customer\\"s maximum Available Credit is 1000 with no usage, and a refund of 300 occurs, the Used Credit will become -300.
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
   * This API is used to offset the Deducted Credit of a Distribution Customer. For example, if the current Deducted Credit is 500 and the Available Credit is 1000, by offsetting 300, the Deducted Credit will then become 200, and the Available Credit becomes 1300.
   * 
   * @remarks
   * Note that sometimes you may find that the customer\\"s Used Credit is negative. This indicates that there is no need to restore the Used Credit, and its ready for customer\\"s usage. This phenomenon occurs because a refund is generated while the customer\\"s credit is full, thereby triggered additional increasing on the customer\\"s credit.
   * For example, if the customer\\"s maximum Available Credit is 1000 with no usage, and a refund of 300 occurs, the Used Credit will become -300.
   * 
   * @param request - DeductOutstandingBalanceRequest
   * @returns DeductOutstandingBalanceResponse
   */
  async deductOutstandingBalance(request: $_model.DeductOutstandingBalanceRequest): Promise<$_model.DeductOutstandingBalanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deductOutstandingBalanceWithOptions(request, runtime);
  }

  /**
   * 作废优惠券模板
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
   * 作废优惠券模板
   * 
   * @param request - DeleteCouponTemplateRequest
   * @returns DeleteCouponTemplateResponse
   */
  async deleteCouponTemplate(request: $_model.DeleteCouponTemplateRequest): Promise<$_model.DeleteCouponTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCouponTemplateWithOptions(request, runtime);
  }

  /**
   * Set the after-shutdown instance status for post-pay End Users as a Reseller.
   * 
   * @remarks
   * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
   * **This content is only published on the international site. **
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
   * Set the after-shutdown instance status for post-pay End Users as a Reseller.
   * 
   * @remarks
   * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
   * **This content is only published on the international site. **
   * 
   * @param request - EditEndUserStatusRequest
   * @returns EditEndUserStatusResponse
   */
  async editEndUserStatus(request: $_model.EditEndUserStatusRequest): Promise<$_model.EditEndUserStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editEndUserStatusWithOptions(request, runtime);
  }

  /**
   * Set the New Buy status for Sub-Customer as a Partner.
   * 
   * @remarks
   * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
   * **This content is only published on the international site. **
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
   * Set the New Buy status for Sub-Customer as a Partner.
   * 
   * @remarks
   * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
   * **This content is only published on the international site. **
   * 
   * @param request - EditNewBuyStatusRequest
   * @returns EditNewBuyStatusResponse
   */
  async editNewBuyStatus(request: $_model.EditNewBuyStatusRequest): Promise<$_model.EditNewBuyStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editNewBuyStatusWithOptions(request, runtime);
  }

  /**
   * Modify the End User\\"s Shutdown Policy as a Reseller.
   * 
   * @remarks
   * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
   * **This content is only published on the international site. **
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
   * Modify the End User\\"s Shutdown Policy as a Reseller.
   * 
   * @remarks
   * The caller should be the Partner as identified in the Alibaba Cloud distribution model. </br>
   * **This content is only published on the international site. **
   * 
   * @param request - EditZeroCreditShutdownRequest
   * @returns EditZeroCreditShutdownResponse
   */
  async editZeroCreditShutdown(request: $_model.EditZeroCreditShutdownRequest): Promise<$_model.EditZeroCreditShutdownResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editZeroCreditShutdownWithOptions(request, runtime);
  }

  /**
   * Export quota amount adjustment history as a Distribution Customer from International Site. Only available on International Site.
   * 
   * @remarks
   * Caller must be a Partner from International Site, either Distribution or Reseller will do.
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
   * Export quota amount adjustment history as a Distribution Customer from International Site. Only available on International Site.
   * 
   * @remarks
   * Caller must be a Partner from International Site, either Distribution or Reseller will do.
   * 
   * @param request - ExportCustomerQuotaRecordRequest
   * @returns ExportCustomerQuotaRecordResponse
   */
  async exportCustomerQuotaRecord(request: $_model.ExportCustomerQuotaRecordRequest): Promise<$_model.ExportCustomerQuotaRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportCustomerQuotaRecordWithOptions(request, runtime);
  }

  /**
   * 额度冲减明细列表导出接口
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
   * 额度冲减明细列表导出接口
   * 
   * @param request - ExportReversedDeductionHistoryRequest
   * @returns ExportReversedDeductionHistoryResponse
   */
  async exportReversedDeductionHistory(request: $_model.ExportReversedDeductionHistoryRequest): Promise<$_model.ExportReversedDeductionHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportReversedDeductionHistoryWithOptions(request, runtime);
  }

  /**
   * Return Distribution Customer\\"s account information.
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
   * Return Distribution Customer\\"s account information.
   * 
   * @param request - GetAccountInfoRequest
   * @returns GetAccountInfoResponse
   */
  async getAccountInfo(request: $_model.GetAccountInfoRequest): Promise<$_model.GetAccountInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountInfoWithOptions(request, runtime);
  }

  /**
   * 提供返佣商品API
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
   * 提供返佣商品API
   * 
   * @param request - GetCommissionableProductsRequest
   * @returns GetCommissionableProductsResponse
   */
  async getCommissionableProducts(request: $_model.GetCommissionableProductsRequest): Promise<$_model.GetCommissionableProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCommissionableProductsWithOptions(request, runtime);
  }

  /**
   * 查询优惠券模板详情
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
   * 查询优惠券模板详情
   * 
   * @param request - GetCouponTemplateDetailRequest
   * @returns GetCouponTemplateDetailResponse
   */
  async getCouponTemplateDetail(request: $_model.GetCouponTemplateDetailRequest): Promise<$_model.GetCouponTemplateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCouponTemplateDetailWithOptions(request, runtime);
  }

  /**
   * 国际渠道分销优惠券可抵扣产品
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
   * 国际渠道分销优惠券可抵扣产品
   * 
   * @param request - GetCoupondeductProductCodeRequest
   * @returns GetCoupondeductProductCodeResponse
   */
  async getCoupondeductProductCode(request: $_model.GetCoupondeductProductCodeRequest): Promise<$_model.GetCoupondeductProductCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCoupondeductProductCodeWithOptions(request, runtime);
  }

  /**
   * Query Credit Control information of Distribution Customers. The PopCreditInfoJson in the Return Parameter will be empty if the Distribution Customer is an Agency. This function is only available for Resellers and Distributors.
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
   * Query Credit Control information of Distribution Customers. The PopCreditInfoJson in the Return Parameter will be empty if the Distribution Customer is an Agency. This function is only available for Resellers and Distributors.
   * 
   * @param request - GetCreditInfoRequest
   * @returns GetCreditInfoResponse
   */
  async getCreditInfo(request: $_model.GetCreditInfoRequest): Promise<$_model.GetCreditInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCreditInfoWithOptions(request, runtime);
  }

  /**
   * 客户订单查询
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
   * 客户订单查询
   * 
   * @param request - GetCustomerOrdersRequest
   * @returns GetCustomerOrdersResponse
   */
  async getCustomerOrders(request: $_model.GetCustomerOrdersRequest): Promise<$_model.GetCustomerOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomerOrdersWithOptions(request, runtime);
  }

  /**
   * Issue Distributor\\"s daily Bill. This function is only available for Resellers and Distributors.
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
   * Issue Distributor\\"s daily Bill. This function is only available for Resellers and Distributors.
   * 
   * @param request - GetDailyBillRequest
   * @returns GetDailyBillResponse
   */
  async getDailyBill(request: $_model.GetDailyBillRequest): Promise<$_model.GetDailyBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDailyBillWithOptions(request, runtime);
  }

  /**
   * Query invitation status of customer who have been created and invited.
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
   * Query invitation status of customer who have been created and invited.
   * 
   * @param request - GetInviteStatusRequest
   * @returns GetInviteStatusResponse
   */
  async getInviteStatus(request: $_model.GetInviteStatusRequest): Promise<$_model.GetInviteStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInviteStatusWithOptions(request, runtime);
  }

  /**
   * Issue Distributor\\"s Monthly Bill. This function is only available for Resellers and Distributors.
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
   * Issue Distributor\\"s Monthly Bill. This function is only available for Resellers and Distributors.
   * 
   * @param request - GetMonthlyBillRequest
   * @returns GetMonthlyBillResponse
   */
  async getMonthlyBill(request: $_model.GetMonthlyBillRequest): Promise<$_model.GetMonthlyBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMonthlyBillWithOptions(request, runtime);
  }

  /**
   * 下单控制记录查询
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
   * 下单控制记录查询
   * 
   * @param request - GetPurchaseControlRecordRequest
   * @returns GetPurchaseControlRecordResponse
   */
  async getPurchaseControlRecord(request: $_model.GetPurchaseControlRecordRequest): Promise<$_model.GetPurchaseControlRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPurchaseControlRecordWithOptions(request, runtime);
  }

  /**
   * 查询延停策略修改记录
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
   * 查询延停策略修改记录
   * 
   * @param request - GetShutdownPolicyRecordRequest
   * @returns GetShutdownPolicyRecordResponse
   */
  async getShutdownPolicyRecord(request: $_model.GetShutdownPolicyRecordRequest): Promise<$_model.GetShutdownPolicyRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getShutdownPolicyRecordWithOptions(request, runtime);
  }

  /**
   * Query all the Unassociated Customer.
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
   * Query all the Unassociated Customer.
   * 
   * @param request - GetUnassociatedCustomerRequest
   * @returns GetUnassociatedCustomerResponse
   */
  async getUnassociatedCustomer(request: $_model.GetUnassociatedCustomerRequest): Promise<$_model.GetUnassociatedCustomerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUnassociatedCustomerWithOptions(request, runtime);
  }

  /**
   * Initiate the Partner registration invitation.
   * 
   * @remarks
   * The current API request rate for the Cloud Product has not been disclosed.
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
   * Initiate the Partner registration invitation.
   * 
   * @remarks
   * The current API request rate for the Cloud Product has not been disclosed.
   * 
   * @param request - InviteSubAccountRequest
   * @returns InviteSubAccountResponse
   */
  async inviteSubAccount(request: $_model.InviteSubAccountRequest): Promise<$_model.InviteSubAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.inviteSubAccountWithOptions(request, runtime);
  }

  /**
   * 发放优惠券
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
   * 发放优惠券
   * 
   * @param request - IssueCouponForCustomerRequest
   * @returns IssueCouponForCustomerResponse
   */
  async issueCouponForCustomer(request: $_model.IssueCouponForCustomerRequest): Promise<$_model.IssueCouponForCustomerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.issueCouponForCustomerWithOptions(request, runtime);
  }

  /**
   * This function is available for all Distributors. It displays the corresponding region code information based on the operable countries as agreed in the Distributor\\"s contract.
   * 
   * @remarks
   * The current API request rate for cloud products has not been disclosed.
   * 
   * @param request - ListCountriesRequest
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
   * This function is available for all Distributors. It displays the corresponding region code information based on the operable countries as agreed in the Distributor\\"s contract.
   * 
   * @remarks
   * The current API request rate for cloud products has not been disclosed.
   * @returns ListCountriesResponse
   */
  async listCountries(): Promise<$_model.ListCountriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCountriesWithOptions(runtime);
  }

  /**
   * 优惠券使用量列表查询
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
   * 优惠券使用量列表查询
   * 
   * @param request - ListCouponUsageRequest
   * @returns ListCouponUsageResponse
   */
  async listCouponUsage(request: $_model.ListCouponUsageRequest): Promise<$_model.ListCouponUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCouponUsageWithOptions(request, runtime);
  }

  /**
   * 通用查询导出任务列表
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
   * 通用查询导出任务列表
   * 
   * @param request - ListExportTasksRequest
   * @returns ListExportTasksResponse
   */
  async listExportTasks(request: $_model.ListExportTasksRequest): Promise<$_model.ListExportTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExportTasksWithOptions(request, runtime);
  }

  /**
   * 额度冲减明细列表
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
   * 额度冲减明细列表
   * 
   * @param request - QueryReversedDeductionHistoryRequest
   * @returns QueryReversedDeductionHistoryResponse
   */
  async queryReversedDeductionHistory(request: $_model.QueryReversedDeductionHistoryRequest): Promise<$_model.QueryReversedDeductionHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryReversedDeductionHistoryWithOptions(request, runtime);
  }

  /**
   * Check the result of export quota list as a Distribution Customer from International Site. Only available on International Site.
   * 
   * @remarks
   * Caller must be a Partner from International Site, either Distribution or Reseller will do.
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
   * Check the result of export quota list as a Distribution Customer from International Site. Only available on International Site.
   * 
   * @remarks
   * Caller must be a Partner from International Site, either Distribution or Reseller will do.
   * 
   * @param request - QuotaListExportPagedRequest
   * @returns QuotaListExportPagedResponse
   */
  async quotaListExportPaged(request: $_model.QuotaListExportPagedRequest): Promise<$_model.QuotaListExportPagedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.quotaListExportPagedWithOptions(request, runtime);
  }

  /**
   * Resend invitation email.
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
   * Resend invitation email.
   * 
   * @param request - ResendEmailRequest
   * @returns ResendEmailResponse
   */
  async resendEmail(request: $_model.ResendEmailRequest): Promise<$_model.ResendEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resendEmailWithOptions(request, runtime);
  }

  /**
   * This function is designed for Sub Account information maintenance, including Nickname and Remark.
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
   * This function is designed for Sub Account information maintenance, including Nickname and Remark.
   * 
   * @param request - SetAccountInfoRequest
   * @returns SetAccountInfoResponse
   */
  async setAccountInfo(request: $_model.SetAccountInfoRequest): Promise<$_model.SetAccountInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAccountInfoWithOptions(request, runtime);
  }

  /**
   * Set Credit Line for Distribution Customers. This function is only available for Resellers and Distributors.
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
   * Set Credit Line for Distribution Customers. This function is only available for Resellers and Distributors.
   * 
   * @param request - SetCreditLineRequest
   * @returns SetCreditLineResponse
   */
  async setCreditLine(request: $_model.SetCreditLineRequest): Promise<$_model.SetCreditLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setCreditLineWithOptions(request, runtime);
  }

  /**
   * You can use this API to set the threshold for the use of credit control. When the customer credit control reaches below the threshold, it will pass through the notification email distributor. This feature is for Reseller and Distributor only.
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
   * You can use this API to set the threshold for the use of credit control. When the customer credit control reaches below the threshold, it will pass through the notification email distributor. This feature is for Reseller and Distributor only.
   * 
   * @param request - SetWarningThresholdRequest
   * @returns SetWarningThresholdResponse
   */
  async setWarningThreshold(request: $_model.SetWarningThresholdRequest): Promise<$_model.SetWarningThresholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setWarningThresholdWithOptions(request, runtime);
  }

  /**
   * Generates the subscription to multi-level bills as an Alibaba Cloud eco-partner.
   * 
   * @remarks
   *   Make sure that you are a distributor of the Alibaba Cloud international ecosystem.
   * *   You can call this operation to subscribe to only one type of bill at a time.
   * *   After the subscription to a type of bill is generated, the bill for the previous day is pushed on a daily basis from the next day. On the fifth day of each month, the full-data bill for the previous month is pushed.
   * *   A daily bill may be delayed. The delayed bill is pushed the next day after it is generated. The delayed bill may contain the bill data that is delayed until the previous day. We recommend that you query the full-data bill for the previous month at the beginning of each month.
   * *   Your account must be granted the [AliyunConsumeDump2OSSRole](https://ram.console.aliyun.com/?spm=api-workbench.API%20Document.0.0.68c71e0fhmTSJp#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D) permission.
   * *   The following file name formats are supported for bills:
   * ```
   * BillingItemDetailForBillingPeriod
   *   
   * File name format of a daily bill: UID_PartnerBillingItemDetail_YYYYMMDD_SquenceNo_fileNo. Example: 169**_BillingItemDetail_20190310_0001_01. 
   *   
   * File name format of a monthly full-data bill: UID_PartnerBillingItemDetail_YYYYMM_SquenceNo_fileNo. Example: 169**_BillingItemDetail_201903_0001_01. 
   * InstanceDetailForBillingPeriod
   *  
   *  File name format of a daily bill: UID_PartnerInstanceDetail_YYYYMMDD_SquenceNo_fileNo. Example: 169**_InstanceDetail_20190310_0001_01. 
   *   
   * File name format of a monthly full-data bill: UID_PartnerInstanceDetail_YYYYMM_SquenceNo_fileNo. Example: 169**_InstanceDetail_201903_1999-0001_01. 
   * BillingItemDetailMonthly
   *   
   * File name format of a daily bill: UID_PartnerBillingItemDetailMonthly_YYYYMM_SquenceNo_fileNo. Example: 169**_BillingItemDetailMonthly_201903_0001_01. This bill contains the bill data that is generated from the beginning of the current month to the fifth day of the next month. 
   * InstanceDetailMonthly
   *   
   * File name format of a daily bill: UID_PartnerInstanceDetailMonthly_YYYYMM_SquenceNo_fileNo. Example: 169**_InstanceDetailMonthly_201903_0001_01. This bill contains the bill data that is generated from the beginning of the current month to the fifth day of the next month. 
   * The fileNo field exists only when the number of bill rows reaches the maximum rows in a single bill file and the bill is split into multiple files.
   * ```
   * **This topic is published only on the international site (alibabacloud.com).
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
   * Generates the subscription to multi-level bills as an Alibaba Cloud eco-partner.
   * 
   * @remarks
   *   Make sure that you are a distributor of the Alibaba Cloud international ecosystem.
   * *   You can call this operation to subscribe to only one type of bill at a time.
   * *   After the subscription to a type of bill is generated, the bill for the previous day is pushed on a daily basis from the next day. On the fifth day of each month, the full-data bill for the previous month is pushed.
   * *   A daily bill may be delayed. The delayed bill is pushed the next day after it is generated. The delayed bill may contain the bill data that is delayed until the previous day. We recommend that you query the full-data bill for the previous month at the beginning of each month.
   * *   Your account must be granted the [AliyunConsumeDump2OSSRole](https://ram.console.aliyun.com/?spm=api-workbench.API%20Document.0.0.68c71e0fhmTSJp#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D) permission.
   * *   The following file name formats are supported for bills:
   * ```
   * BillingItemDetailForBillingPeriod
   *   
   * File name format of a daily bill: UID_PartnerBillingItemDetail_YYYYMMDD_SquenceNo_fileNo. Example: 169**_BillingItemDetail_20190310_0001_01. 
   *   
   * File name format of a monthly full-data bill: UID_PartnerBillingItemDetail_YYYYMM_SquenceNo_fileNo. Example: 169**_BillingItemDetail_201903_0001_01. 
   * InstanceDetailForBillingPeriod
   *  
   *  File name format of a daily bill: UID_PartnerInstanceDetail_YYYYMMDD_SquenceNo_fileNo. Example: 169**_InstanceDetail_20190310_0001_01. 
   *   
   * File name format of a monthly full-data bill: UID_PartnerInstanceDetail_YYYYMM_SquenceNo_fileNo. Example: 169**_InstanceDetail_201903_1999-0001_01. 
   * BillingItemDetailMonthly
   *   
   * File name format of a daily bill: UID_PartnerBillingItemDetailMonthly_YYYYMM_SquenceNo_fileNo. Example: 169**_BillingItemDetailMonthly_201903_0001_01. This bill contains the bill data that is generated from the beginning of the current month to the fifth day of the next month. 
   * InstanceDetailMonthly
   *   
   * File name format of a daily bill: UID_PartnerInstanceDetailMonthly_YYYYMM_SquenceNo_fileNo. Example: 169**_InstanceDetailMonthly_201903_0001_01. This bill contains the bill data that is generated from the beginning of the current month to the fifth day of the next month. 
   * The fileNo field exists only when the number of bill rows reaches the maximum rows in a single bill file and the bill is split into multiple files.
   * ```
   * **This topic is published only on the international site (alibabacloud.com).
   * 
   * @param request - SubscriptionBillRequest
   * @returns SubscriptionBillResponse
   */
  async subscriptionBill(request: $_model.SubscriptionBillRequest): Promise<$_model.SubscriptionBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.subscriptionBillWithOptions(request, runtime);
  }

}
