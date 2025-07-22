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
      'cn-hangzhou': "business.aliyuncs.com",
      'cn-shanghai': "business.aliyuncs.com",
      'ap-southeast-1': "business.ap-southeast-1.aliyuncs.com",
      'ap-northeast-1': "business.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2': "business.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2-pop': "business.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "business.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "business.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "business.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "business.ap-southeast-1.aliyuncs.com",
      'cn-beijing': "business.aliyuncs.com",
      'cn-beijing-finance-1': "business.aliyuncs.com",
      'cn-beijing-finance-pop': "business.aliyuncs.com",
      'cn-beijing-gov-1': "business.aliyuncs.com",
      'cn-beijing-nu16-b01': "business.aliyuncs.com",
      'cn-chengdu': "business.aliyuncs.com",
      'cn-edge-1': "business.aliyuncs.com",
      'cn-fujian': "business.aliyuncs.com",
      'cn-haidian-cm12-c01': "business.aliyuncs.com",
      'cn-hangzhou-bj-b01': "business.aliyuncs.com",
      'cn-hangzhou-finance': "business.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "business.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "business.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "business.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "business.aliyuncs.com",
      'cn-hangzhou-test-306': "business.aliyuncs.com",
      'cn-hongkong': "business.aliyuncs.com",
      'cn-hongkong-finance-pop': "business.aliyuncs.com",
      'cn-huhehaote': "business.aliyuncs.com",
      'cn-huhehaote-nebula-1': "business.aliyuncs.com",
      'cn-north-2-gov-1': "business.aliyuncs.com",
      'cn-qingdao': "business.aliyuncs.com",
      'cn-qingdao-nebula': "business.aliyuncs.com",
      'cn-shanghai-et15-b01': "business.aliyuncs.com",
      'cn-shanghai-et2-b01': "business.aliyuncs.com",
      'cn-shanghai-finance-1': "business.aliyuncs.com",
      'cn-shanghai-inner': "business.aliyuncs.com",
      'cn-shanghai-internal-test-1': "business.aliyuncs.com",
      'cn-shenzhen': "business.aliyuncs.com",
      'cn-shenzhen-finance-1': "business.aliyuncs.com",
      'cn-shenzhen-inner': "business.aliyuncs.com",
      'cn-shenzhen-st4-d01': "business.aliyuncs.com",
      'cn-shenzhen-su18-b01': "business.aliyuncs.com",
      'cn-wuhan': "business.aliyuncs.com",
      'cn-wulanchabu': "business.aliyuncs.com",
      'cn-yushanfang': "business.aliyuncs.com",
      'cn-zhangbei': "business.aliyuncs.com",
      'cn-zhangbei-na61-b01': "business.aliyuncs.com",
      'cn-zhangjiakou': "business.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "business.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "business.aliyuncs.com",
      'eu-central-1': "business.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "business.ap-southeast-1.aliyuncs.com",
      'eu-west-1-oxs': "business.ap-southeast-1.aliyuncs.com",
      'me-east-1': "business.ap-southeast-1.aliyuncs.com",
      'rus-west-1-pop': "business.ap-southeast-1.aliyuncs.com",
      'us-east-1': "business.ap-southeast-1.aliyuncs.com",
      'us-west-1': "business.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("bssopenapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加优惠券抵扣标签
   * 
   * @param tmpReq - AddCouponDeductTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCouponDeductTagResponse
   */
  async addCouponDeductTagWithOptions(tmpReq: $_model.AddCouponDeductTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddCouponDeductTagResponse> {
    tmpReq.validate();
    let request = new $_model.AddCouponDeductTagShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.couponId)) {
      query["CouponId"] = request.couponId;
    }

    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCouponDeductTag",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCouponDeductTagResponse>(await this.callApi(params, req, runtime), new $_model.AddCouponDeductTagResponse({}));
  }

  /**
   * 添加优惠券抵扣标签
   * 
   * @param request - AddCouponDeductTagRequest
   * @returns AddCouponDeductTagResponse
   */
  async addCouponDeductTag(request: $_model.AddCouponDeductTagRequest): Promise<$_model.AddCouponDeductTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCouponDeductTagWithOptions(request, runtime);
  }

  /**
   * 财务单元实例重分配
   * 
   * @param tmpReq - AllocateCostCenterResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateCostCenterResourceResponse
   */
  async allocateCostCenterResourceWithOptions(tmpReq: $_model.AllocateCostCenterResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocateCostCenterResourceResponse> {
    tmpReq.validate();
    let request = new $_model.AllocateCostCenterResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceInstanceList)) {
      request.resourceInstanceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceInstanceList, "ResourceInstanceList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fromCostCenterId)) {
      body["FromCostCenterId"] = request.fromCostCenterId;
    }

    if (!$dara.isNull(request.fromOwnerAccountId)) {
      body["FromOwnerAccountId"] = request.fromOwnerAccountId;
    }

    if (!$dara.isNull(request.resourceInstanceListShrink)) {
      body["ResourceInstanceList"] = request.resourceInstanceListShrink;
    }

    if (!$dara.isNull(request.toCostCenterId)) {
      body["ToCostCenterId"] = request.toCostCenterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllocateCostCenterResource",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllocateCostCenterResourceResponse>(await this.callApi(params, req, runtime), new $_model.AllocateCostCenterResourceResponse({}));
  }

  /**
   * 财务单元实例重分配
   * 
   * @param request - AllocateCostCenterResourceRequest
   * @returns AllocateCostCenterResourceResponse
   */
  async allocateCostCenterResource(request: $_model.AllocateCostCenterResourceRequest): Promise<$_model.AllocateCostCenterResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateCostCenterResourceWithOptions(request, runtime);
  }

  /**
   * 取消资金账户低额预警
   * 
   * @param request - CancelFundAccountLowAvailableAmountAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelFundAccountLowAvailableAmountAlarmResponse
   */
  async cancelFundAccountLowAvailableAmountAlarmWithOptions(request: $_model.CancelFundAccountLowAvailableAmountAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelFundAccountLowAvailableAmountAlarmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelFundAccountLowAvailableAmountAlarm",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelFundAccountLowAvailableAmountAlarmResponse>(await this.callApi(params, req, runtime), new $_model.CancelFundAccountLowAvailableAmountAlarmResponse({}));
  }

  /**
   * 取消资金账户低额预警
   * 
   * @param request - CancelFundAccountLowAvailableAmountAlarmRequest
   * @returns CancelFundAccountLowAvailableAmountAlarmResponse
   */
  async cancelFundAccountLowAvailableAmountAlarm(request: $_model.CancelFundAccountLowAvailableAmountAlarmRequest): Promise<$_model.CancelFundAccountLowAvailableAmountAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelFundAccountLowAvailableAmountAlarmWithOptions(request, runtime);
  }

  /**
   * 创建财务单元
   * 
   * @param tmpReq - CreateCostCenterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCostCenterResponse
   */
  async createCostCenterWithOptions(tmpReq: $_model.CreateCostCenterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCostCenterResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCostCenterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.costCenterEntityList)) {
      request.costCenterEntityListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.costCenterEntityList, "CostCenterEntityList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.costCenterEntityListShrink)) {
      query["CostCenterEntityList"] = request.costCenterEntityListShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCostCenter",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCostCenterResponse>(await this.callApi(params, req, runtime), new $_model.CreateCostCenterResponse({}));
  }

  /**
   * 创建财务单元
   * 
   * @param request - CreateCostCenterRequest
   * @returns CreateCostCenterResponse
   */
  async createCostCenter(request: $_model.CreateCostCenterRequest): Promise<$_model.CreateCostCenterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCostCenterWithOptions(request, runtime);
  }

  /**
   * 新建财务单元规则
   * 
   * @param tmpReq - CreateCostCenterRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCostCenterRuleResponse
   */
  async createCostCenterRuleWithOptions(tmpReq: $_model.CreateCostCenterRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCostCenterRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCostCenterRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterExpression)) {
      request.filterExpressionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterExpression, "FilterExpression", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filterExpressionShrink)) {
      query["FilterExpression"] = request.filterExpressionShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.costCenterId)) {
      body["CostCenterId"] = request.costCenterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCostCenterRule",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCostCenterRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateCostCenterRuleResponse({}));
  }

  /**
   * 新建财务单元规则
   * 
   * @param request - CreateCostCenterRuleRequest
   * @returns CreateCostCenterRuleResponse
   */
  async createCostCenterRule(request: $_model.CreateCostCenterRuleRequest): Promise<$_model.CreateCostCenterRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCostCenterRuleWithOptions(request, runtime);
  }

  /**
   * 创建资金账户付款关系
   * 
   * @param tmpReq - CreateFundAccountPayRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFundAccountPayRelationResponse
   */
  async createFundAccountPayRelationWithOptions(tmpReq: $_model.CreateFundAccountPayRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFundAccountPayRelationResponse> {
    tmpReq.validate();
    let request = new $_model.CreateFundAccountPayRelationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFundAccountPayRelation",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFundAccountPayRelationResponse>(await this.callApi(params, req, runtime), new $_model.CreateFundAccountPayRelationResponse({}));
  }

  /**
   * 创建资金账户付款关系
   * 
   * @param request - CreateFundAccountPayRelationRequest
   * @returns CreateFundAccountPayRelationResponse
   */
  async createFundAccountPayRelation(request: $_model.CreateFundAccountPayRelationRequest): Promise<$_model.CreateFundAccountPayRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFundAccountPayRelationWithOptions(request, runtime);
  }

  /**
   * 创建资金账户划拨/回收
   * 
   * @param request - CreateFundAccountTransferRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFundAccountTransferResponse
   */
  async createFundAccountTransferWithOptions(request: $_model.CreateFundAccountTransferRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFundAccountTransferResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.amount)) {
      body["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.currency)) {
      body["Currency"] = request.currency;
    }

    if (!$dara.isNull(request.financeType)) {
      body["FinanceType"] = request.financeType;
    }

    if (!$dara.isNull(request.fromFundAccountId)) {
      body["FromFundAccountId"] = request.fromFundAccountId;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.toFundAccountId)) {
      body["ToFundAccountId"] = request.toFundAccountId;
    }

    if (!$dara.isNull(request.transferType)) {
      body["TransferType"] = request.transferType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFundAccountTransfer",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFundAccountTransferResponse>(await this.callApi(params, req, runtime), new $_model.CreateFundAccountTransferResponse({}));
  }

  /**
   * 创建资金账户划拨/回收
   * 
   * @param request - CreateFundAccountTransferRequest
   * @returns CreateFundAccountTransferResponse
   */
  async createFundAccountTransfer(request: $_model.CreateFundAccountTransferRequest): Promise<$_model.CreateFundAccountTransferResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFundAccountTransferWithOptions(request, runtime);
  }

  /**
   * 申请发票
   * 
   * @param tmpReq - CreateInvoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInvoiceResponse
   */
  async createInvoiceWithOptions(tmpReq: $_model.CreateInvoiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInvoiceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateInvoiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    if (!$dara.isNull(tmpReq.invoiceCandidateIds)) {
      request.invoiceCandidateIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.invoiceCandidateIds, "InvoiceCandidateIds", "json");
    }

    if (!$dara.isNull(tmpReq.recipientEmails)) {
      request.recipientEmailsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recipientEmails, "RecipientEmails", "json");
    }

    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.invoiceCandidateIdsShrink)) {
      query["InvoiceCandidateIds"] = request.invoiceCandidateIdsShrink;
    }

    if (!$dara.isNull(request.invoiceMode)) {
      query["InvoiceMode"] = request.invoiceMode;
    }

    if (!$dara.isNull(request.invoiceRemark)) {
      query["InvoiceRemark"] = request.invoiceRemark;
    }

    if (!$dara.isNull(request.invoiceTitleId)) {
      query["InvoiceTitleId"] = request.invoiceTitleId;
    }

    if (!$dara.isNull(request.invoiceType)) {
      query["InvoiceType"] = request.invoiceType;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.recipientEmailsShrink)) {
      query["RecipientEmails"] = request.recipientEmailsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInvoice",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInvoiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInvoiceResponse({}));
  }

  /**
   * 申请发票
   * 
   * @param request - CreateInvoiceRequest
   * @returns CreateInvoiceResponse
   */
  async createInvoice(request: $_model.CreateInvoiceRequest): Promise<$_model.CreateInvoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInvoiceWithOptions(request, runtime);
  }

  /**
   * 创建账单订阅
   * 
   * @param request - CreateReportDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateReportDefinitionResponse
   */
  async createReportDefinitionWithOptions(request: $_model.CreateReportDefinitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateReportDefinitionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginBillingCycle)) {
      query["BeginBillingCycle"] = request.beginBillingCycle;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossBucketOwnerAccountId)) {
      query["OssBucketOwnerAccountId"] = request.ossBucketOwnerAccountId;
    }

    if (!$dara.isNull(request.ossBucketPath)) {
      query["OssBucketPath"] = request.ossBucketPath;
    }

    if (!$dara.isNull(request.reportType)) {
      query["ReportType"] = request.reportType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mcProject)) {
      body["McProject"] = request.mcProject;
    }

    if (!$dara.isNull(request.mcTableName)) {
      body["McTableName"] = request.mcTableName;
    }

    if (!$dara.isNull(request.reportSourceType)) {
      body["ReportSourceType"] = request.reportSourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateReportDefinition",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateReportDefinitionResponse>(await this.callApi(params, req, runtime), new $_model.CreateReportDefinitionResponse({}));
  }

  /**
   * 创建账单订阅
   * 
   * @param request - CreateReportDefinitionRequest
   * @returns CreateReportDefinitionResponse
   */
  async createReportDefinition(request: $_model.CreateReportDefinitionRequest): Promise<$_model.CreateReportDefinitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createReportDefinitionWithOptions(request, runtime);
  }

  /**
   * 删除财务单元
   * 
   * @param request - DeleteCostCenterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCostCenterResponse
   */
  async deleteCostCenterWithOptions(request: $_model.DeleteCostCenterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCostCenterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.costCenterId)) {
      query["CostCenterId"] = request.costCenterId;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.ownerAccountId)) {
      query["OwnerAccountId"] = request.ownerAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCostCenter",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCostCenterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCostCenterResponse({}));
  }

  /**
   * 删除财务单元
   * 
   * @param request - DeleteCostCenterRequest
   * @returns DeleteCostCenterResponse
   */
  async deleteCostCenter(request: $_model.DeleteCostCenterRequest): Promise<$_model.DeleteCostCenterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCostCenterWithOptions(request, runtime);
  }

  /**
   * 删除财务单元规则
   * 
   * @param tmpReq - DeleteCostCenterRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCostCenterRuleResponse
   */
  async deleteCostCenterRuleWithOptions(tmpReq: $_model.DeleteCostCenterRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCostCenterRuleResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteCostCenterRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterExpression)) {
      request.filterExpressionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterExpression, "FilterExpression", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filterExpressionShrink)) {
      query["FilterExpression"] = request.filterExpressionShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.costCenterId)) {
      body["CostCenterId"] = request.costCenterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCostCenterRule",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCostCenterRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCostCenterRuleResponse({}));
  }

  /**
   * 删除财务单元规则
   * 
   * @param request - DeleteCostCenterRuleRequest
   * @returns DeleteCostCenterRuleResponse
   */
  async deleteCostCenterRule(request: $_model.DeleteCostCenterRuleRequest): Promise<$_model.DeleteCostCenterRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCostCenterRuleWithOptions(request, runtime);
  }

  /**
   * 删除优惠券的抵扣标签
   * 
   * @param tmpReq - DeleteCouponDeductTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCouponDeductTagResponse
   */
  async deleteCouponDeductTagWithOptions(tmpReq: $_model.DeleteCouponDeductTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCouponDeductTagResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteCouponDeductTagShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    if (!$dara.isNull(tmpReq.tagKeys)) {
      request.tagKeysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKeys, "TagKeys", "json");
    }

    let query = { };
    if (!$dara.isNull(request.couponId)) {
      query["CouponId"] = request.couponId;
    }

    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.tagKeysShrink)) {
      query["TagKeys"] = request.tagKeysShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCouponDeductTag",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCouponDeductTagResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCouponDeductTagResponse({}));
  }

  /**
   * 删除优惠券的抵扣标签
   * 
   * @param request - DeleteCouponDeductTagRequest
   * @returns DeleteCouponDeductTagResponse
   */
  async deleteCouponDeductTag(request: $_model.DeleteCouponDeductTagRequest): Promise<$_model.DeleteCouponDeductTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCouponDeductTagWithOptions(request, runtime);
  }

  /**
   * 取消账单订阅
   * 
   * @param request - DeleteReportDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteReportDefinitionResponse
   */
  async deleteReportDefinitionWithOptions(request: $_model.DeleteReportDefinitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteReportDefinitionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.reportTaskId)) {
      query["ReportTaskId"] = request.reportTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteReportDefinition",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteReportDefinitionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteReportDefinitionResponse({}));
  }

  /**
   * 取消账单订阅
   * 
   * @param request - DeleteReportDefinitionRequest
   * @returns DeleteReportDefinitionResponse
   */
  async deleteReportDefinition(request: $_model.DeleteReportDefinitionRequest): Promise<$_model.DeleteReportDefinitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteReportDefinitionWithOptions(request, runtime);
  }

  /**
   * 查询优惠券列表
   * 
   * @param tmpReq - DescribeCouponRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCouponResponse
   */
  async describeCouponWithOptions(tmpReq: $_model.DescribeCouponRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCouponResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeCouponShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCoupon",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCouponResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCouponResponse({}));
  }

  /**
   * 查询优惠券列表
   * 
   * @param request - DescribeCouponRequest
   * @returns DescribeCouponResponse
   */
  async describeCoupon(request: $_model.DescribeCouponRequest): Promise<$_model.DescribeCouponResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCouponWithOptions(request, runtime);
  }

  /**
   * 查询优惠券可用商品列表
   * 
   * @param tmpReq - DescribeCouponItemListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCouponItemListResponse
   */
  async describeCouponItemListWithOptions(tmpReq: $_model.DescribeCouponItemListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCouponItemListResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeCouponItemListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCouponItemList",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCouponItemListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCouponItemListResponse({}));
  }

  /**
   * 查询优惠券可用商品列表
   * 
   * @param request - DescribeCouponItemListRequest
   * @returns DescribeCouponItemListResponse
   */
  async describeCouponItemList(request: $_model.DescribeCouponItemListRequest): Promise<$_model.DescribeCouponItemListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCouponItemListWithOptions(request, runtime);
  }

  /**
   * 获取客户使用SPN的概述信息
   * 
   * @param tmpReq - DescribeUserSpnSummaryInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserSpnSummaryInfoResponse
   */
  async describeUserSpnSummaryInfoWithOptions(tmpReq: $_model.DescribeUserSpnSummaryInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserSpnSummaryInfoResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeUserSpnSummaryInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserSpnSummaryInfo",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserSpnSummaryInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserSpnSummaryInfoResponse({}));
  }

  /**
   * 获取客户使用SPN的概述信息
   * 
   * @param request - DescribeUserSpnSummaryInfoRequest
   * @returns DescribeUserSpnSummaryInfoResponse
   */
  async describeUserSpnSummaryInfo(request: $_model.DescribeUserSpnSummaryInfoRequest): Promise<$_model.DescribeUserSpnSummaryInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserSpnSummaryInfoWithOptions(request, runtime);
  }

  /**
   * 查询资金账户可用金
   * 
   * @param request - GetFundAccountAvailableAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFundAccountAvailableAmountResponse
   */
  async getFundAccountAvailableAmountWithOptions(request: $_model.GetFundAccountAvailableAmountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFundAccountAvailableAmountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFundAccountAvailableAmount",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFundAccountAvailableAmountResponse>(await this.callApi(params, req, runtime), new $_model.GetFundAccountAvailableAmountResponse({}));
  }

  /**
   * 查询资金账户可用金
   * 
   * @param request - GetFundAccountAvailableAmountRequest
   * @returns GetFundAccountAvailableAmountResponse
   */
  async getFundAccountAvailableAmount(request: $_model.GetFundAccountAvailableAmountRequest): Promise<$_model.GetFundAccountAvailableAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountAvailableAmountWithOptions(request, runtime);
  }

  /**
   * 查询资金账户可分配信控额度
   * 
   * @param request - GetFundAccountCanAllocateCreditAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFundAccountCanAllocateCreditAmountResponse
   */
  async getFundAccountCanAllocateCreditAmountWithOptions(request: $_model.GetFundAccountCanAllocateCreditAmountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFundAccountCanAllocateCreditAmountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFundAccountCanAllocateCreditAmount",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFundAccountCanAllocateCreditAmountResponse>(await this.callApi(params, req, runtime), new $_model.GetFundAccountCanAllocateCreditAmountResponse({}));
  }

  /**
   * 查询资金账户可分配信控额度
   * 
   * @param request - GetFundAccountCanAllocateCreditAmountRequest
   * @returns GetFundAccountCanAllocateCreditAmountResponse
   */
  async getFundAccountCanAllocateCreditAmount(request: $_model.GetFundAccountCanAllocateCreditAmountRequest): Promise<$_model.GetFundAccountCanAllocateCreditAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountCanAllocateCreditAmountWithOptions(request, runtime);
  }

  /**
   * 查询资金账户可回收金额
   * 
   * @param request - GetFundAccountCanRecycleAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFundAccountCanRecycleAmountResponse
   */
  async getFundAccountCanRecycleAmountWithOptions(request: $_model.GetFundAccountCanRecycleAmountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFundAccountCanRecycleAmountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currency)) {
      body["Currency"] = request.currency;
    }

    if (!$dara.isNull(request.recycleFromFundAccountId)) {
      body["RecycleFromFundAccountId"] = request.recycleFromFundAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFundAccountCanRecycleAmount",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFundAccountCanRecycleAmountResponse>(await this.callApi(params, req, runtime), new $_model.GetFundAccountCanRecycleAmountResponse({}));
  }

  /**
   * 查询资金账户可回收金额
   * 
   * @param request - GetFundAccountCanRecycleAmountRequest
   * @returns GetFundAccountCanRecycleAmountResponse
   */
  async getFundAccountCanRecycleAmount(request: $_model.GetFundAccountCanRecycleAmountRequest): Promise<$_model.GetFundAccountCanRecycleAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountCanRecycleAmountWithOptions(request, runtime);
  }

  /**
   * 查询资金账户的可转出金额
   * 
   * @param request - GetFundAccountCanTransferAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFundAccountCanTransferAmountResponse
   */
  async getFundAccountCanTransferAmountWithOptions(request: $_model.GetFundAccountCanTransferAmountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFundAccountCanTransferAmountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currency)) {
      body["Currency"] = request.currency;
    }

    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFundAccountCanTransferAmount",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFundAccountCanTransferAmountResponse>(await this.callApi(params, req, runtime), new $_model.GetFundAccountCanTransferAmountResponse({}));
  }

  /**
   * 查询资金账户的可转出金额
   * 
   * @param request - GetFundAccountCanTransferAmountRequest
   * @returns GetFundAccountCanTransferAmountResponse
   */
  async getFundAccountCanTransferAmount(request: $_model.GetFundAccountCanTransferAmountRequest): Promise<$_model.GetFundAccountCanTransferAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountCanTransferAmountWithOptions(request, runtime);
  }

  /**
   * 查询资金账户可提现金额
   * 
   * @param request - GetFundAccountCanWithdrawAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFundAccountCanWithdrawAmountResponse
   */
  async getFundAccountCanWithdrawAmountWithOptions(request: $_model.GetFundAccountCanWithdrawAmountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFundAccountCanWithdrawAmountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFundAccountCanWithdrawAmount",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFundAccountCanWithdrawAmountResponse>(await this.callApi(params, req, runtime), new $_model.GetFundAccountCanWithdrawAmountResponse({}));
  }

  /**
   * 查询资金账户可提现金额
   * 
   * @param request - GetFundAccountCanWithdrawAmountRequest
   * @returns GetFundAccountCanWithdrawAmountResponse
   */
  async getFundAccountCanWithdrawAmount(request: $_model.GetFundAccountCanWithdrawAmountRequest): Promise<$_model.GetFundAccountCanWithdrawAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountCanWithdrawAmountWithOptions(request, runtime);
  }

  /**
   * 查询资金账户低额预警
   * 
   * @param request - GetFundAccountLowAvailableAmountAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFundAccountLowAvailableAmountAlarmResponse
   */
  async getFundAccountLowAvailableAmountAlarmWithOptions(request: $_model.GetFundAccountLowAvailableAmountAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFundAccountLowAvailableAmountAlarmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFundAccountLowAvailableAmountAlarm",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFundAccountLowAvailableAmountAlarmResponse>(await this.callApi(params, req, runtime), new $_model.GetFundAccountLowAvailableAmountAlarmResponse({}));
  }

  /**
   * 查询资金账户低额预警
   * 
   * @param request - GetFundAccountLowAvailableAmountAlarmRequest
   * @returns GetFundAccountLowAvailableAmountAlarmResponse
   */
  async getFundAccountLowAvailableAmountAlarm(request: $_model.GetFundAccountLowAvailableAmountAlarmRequest): Promise<$_model.GetFundAccountLowAvailableAmountAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountLowAvailableAmountAlarmWithOptions(request, runtime);
  }

  /**
   * 查询资金账户收支明细
   * 
   * @param tmpReq - GetFundAccountTransactionDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFundAccountTransactionDetailsResponse
   */
  async getFundAccountTransactionDetailsWithOptions(tmpReq: $_model.GetFundAccountTransactionDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFundAccountTransactionDetailsResponse> {
    tmpReq.validate();
    let request = new $_model.GetFundAccountTransactionDetailsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.transactionChannelList)) {
      request.transactionChannelListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transactionChannelList, "TransactionChannelList", "json");
    }

    if (!$dara.isNull(tmpReq.transactionTypeList)) {
      request.transactionTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transactionTypeList, "TransactionTypeList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billNumber)) {
      body["BillNumber"] = request.billNumber;
    }

    if (!$dara.isNull(request.channelTransactionNumber)) {
      body["ChannelTransactionNumber"] = request.channelTransactionNumber;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.transactionChannelListShrink)) {
      body["TransactionChannelList"] = request.transactionChannelListShrink;
    }

    if (!$dara.isNull(request.transactionDirection)) {
      body["TransactionDirection"] = request.transactionDirection;
    }

    if (!$dara.isNull(request.transactionNumber)) {
      body["TransactionNumber"] = request.transactionNumber;
    }

    if (!$dara.isNull(request.transactionType)) {
      body["TransactionType"] = request.transactionType;
    }

    if (!$dara.isNull(request.transactionTypeListShrink)) {
      body["TransactionTypeList"] = request.transactionTypeListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFundAccountTransactionDetails",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFundAccountTransactionDetailsResponse>(await this.callApi(params, req, runtime), new $_model.GetFundAccountTransactionDetailsResponse({}));
  }

  /**
   * 查询资金账户收支明细
   * 
   * @param request - GetFundAccountTransactionDetailsRequest
   * @returns GetFundAccountTransactionDetailsResponse
   */
  async getFundAccountTransactionDetails(request: $_model.GetFundAccountTransactionDetailsRequest): Promise<$_model.GetFundAccountTransactionDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountTransactionDetailsWithOptions(request, runtime);
  }

  /**
   * 订单详情查询
   * 
   * @param request - GetOrderDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrderDetailResponse
   */
  async getOrderDetailWithOptions(request: $_model.GetOrderDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrderDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrderDetail",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOrderDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetOrderDetailResponse({}));
  }

  /**
   * 订单详情查询
   * 
   * @param request - GetOrderDetailRequest
   * @returns GetOrderDetailResponse
   */
  async getOrderDetail(request: $_model.GetOrderDetailRequest): Promise<$_model.GetOrderDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOrderDetailWithOptions(request, runtime);
  }

  /**
   * 订单列表查询
   * 
   * @param request - GetOrdersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrdersResponse
   */
  async getOrdersWithOptions(request: $_model.GetOrdersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrdersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!$dara.isNull(request.createTimeStart)) {
      query["CreateTimeStart"] = request.createTimeStart;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.paymentStatus)) {
      query["PaymentStatus"] = request.paymentStatus;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrders",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOrdersResponse>(await this.callApi(params, req, runtime), new $_model.GetOrdersResponse({}));
  }

  /**
   * 订单列表查询
   * 
   * @param request - GetOrdersRequest
   * @returns GetOrdersResponse
   */
  async getOrders(request: $_model.GetOrdersRequest): Promise<$_model.GetOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOrdersWithOptions(request, runtime);
  }

  /**
   * 获取节省计划及可抵扣商品信息
   * 
   * @param tmpReq - GetSavingPlanDeductableCommodityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSavingPlanDeductableCommodityResponse
   */
  async getSavingPlanDeductableCommodityWithOptions(tmpReq: $_model.GetSavingPlanDeductableCommodityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSavingPlanDeductableCommodityResponse> {
    tmpReq.validate();
    let request = new $_model.GetSavingPlanDeductableCommodityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSavingPlanDeductableCommodity",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSavingPlanDeductableCommodityResponse>(await this.callApi(params, req, runtime), new $_model.GetSavingPlanDeductableCommodityResponse({}));
  }

  /**
   * 获取节省计划及可抵扣商品信息
   * 
   * @param request - GetSavingPlanDeductableCommodityRequest
   * @returns GetSavingPlanDeductableCommodityResponse
   */
  async getSavingPlanDeductableCommodity(request: $_model.GetSavingPlanDeductableCommodityRequest): Promise<$_model.GetSavingPlanDeductableCommodityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSavingPlanDeductableCommodityWithOptions(request, runtime);
  }

  /**
   * 获取节省计划实例共享账号信息
   * 
   * @param tmpReq - GetSavingPlanShareAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSavingPlanShareAccountsResponse
   */
  async getSavingPlanShareAccountsWithOptions(tmpReq: $_model.GetSavingPlanShareAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSavingPlanShareAccountsResponse> {
    tmpReq.validate();
    let request = new $_model.GetSavingPlanShareAccountsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.spnInstanceCode)) {
      query["SpnInstanceCode"] = request.spnInstanceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSavingPlanShareAccounts",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSavingPlanShareAccountsResponse>(await this.callApi(params, req, runtime), new $_model.GetSavingPlanShareAccountsResponse({}));
  }

  /**
   * 获取节省计划实例共享账号信息
   * 
   * @param request - GetSavingPlanShareAccountsRequest
   * @returns GetSavingPlanShareAccountsResponse
   */
  async getSavingPlanShareAccounts(request: $_model.GetSavingPlanShareAccountsRequest): Promise<$_model.GetSavingPlanShareAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSavingPlanShareAccountsWithOptions(request, runtime);
  }

  /**
   * 获取节省计划实例客户自定义规则
   * 
   * @param tmpReq - GetSavingPlanUserDeductRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSavingPlanUserDeductRuleResponse
   */
  async getSavingPlanUserDeductRuleWithOptions(tmpReq: $_model.GetSavingPlanUserDeductRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSavingPlanUserDeductRuleResponse> {
    tmpReq.validate();
    let request = new $_model.GetSavingPlanUserDeductRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.spnInstanceCode)) {
      query["SpnInstanceCode"] = request.spnInstanceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSavingPlanUserDeductRule",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSavingPlanUserDeductRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetSavingPlanUserDeductRuleResponse({}));
  }

  /**
   * 获取节省计划实例客户自定义规则
   * 
   * @param request - GetSavingPlanUserDeductRuleRequest
   * @returns GetSavingPlanUserDeductRuleResponse
   */
  async getSavingPlanUserDeductRule(request: $_model.GetSavingPlanUserDeductRuleRequest): Promise<$_model.GetSavingPlanUserDeductRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSavingPlanUserDeductRuleWithOptions(request, runtime);
  }

  /**
   * 查询优惠券设置的抵扣标签
   * 
   * @param tmpReq - ListCouponDeductTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCouponDeductTagResponse
   */
  async listCouponDeductTagWithOptions(tmpReq: $_model.ListCouponDeductTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCouponDeductTagResponse> {
    tmpReq.validate();
    let request = new $_model.ListCouponDeductTagShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.couponId)) {
      query["CouponId"] = request.couponId;
    }

    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCouponDeductTag",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCouponDeductTagResponse>(await this.callApi(params, req, runtime), new $_model.ListCouponDeductTagResponse({}));
  }

  /**
   * 查询优惠券设置的抵扣标签
   * 
   * @param request - ListCouponDeductTagRequest
   * @returns ListCouponDeductTagResponse
   */
  async listCouponDeductTag(request: $_model.ListCouponDeductTagRequest): Promise<$_model.ListCouponDeductTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCouponDeductTagWithOptions(request, runtime);
  }

  /**
   * 查询资金账户列表
   * 
   * @param request - ListFundAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFundAccountResponse
   */
  async listFundAccountWithOptions(request: $_model.ListFundAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFundAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.queryOnlyInUse)) {
      body["QueryOnlyInUse"] = request.queryOnlyInUse;
    }

    if (!$dara.isNull(request.queryOnlyManage)) {
      body["QueryOnlyManage"] = request.queryOnlyManage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFundAccount",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFundAccountResponse>(await this.callApi(params, req, runtime), new $_model.ListFundAccountResponse({}));
  }

  /**
   * 查询资金账户列表
   * 
   * @param request - ListFundAccountRequest
   * @returns ListFundAccountResponse
   */
  async listFundAccount(request: $_model.ListFundAccountRequest): Promise<$_model.ListFundAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFundAccountWithOptions(request, runtime);
  }

  /**
   * 查询资金账户的付款关系
   * 
   * @param request - ListFundAccountPayRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFundAccountPayRelationResponse
   */
  async listFundAccountPayRelationWithOptions(request: $_model.ListFundAccountPayRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFundAccountPayRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFundAccountPayRelation",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFundAccountPayRelationResponse>(await this.callApi(params, req, runtime), new $_model.ListFundAccountPayRelationResponse({}));
  }

  /**
   * 查询资金账户的付款关系
   * 
   * @param request - ListFundAccountPayRelationRequest
   * @returns ListFundAccountPayRelationResponse
   */
  async listFundAccountPayRelation(request: $_model.ListFundAccountPayRelationRequest): Promise<$_model.ListFundAccountPayRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFundAccountPayRelationWithOptions(request, runtime);
  }

  /**
   * 对客OpenAPI开票对象查询
   * 
   * @param tmpReq - ListInvoiceCandidateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInvoiceCandidateResponse
   */
  async listInvoiceCandidateWithOptions(tmpReq: $_model.ListInvoiceCandidateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInvoiceCandidateResponse> {
    tmpReq.validate();
    let request = new $_model.ListInvoiceCandidateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.billingCycles)) {
      request.billingCyclesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.billingCycles, "BillingCycles", "json");
    }

    if (!$dara.isNull(tmpReq.businessIds)) {
      request.businessIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.businessIds, "BusinessIds", "json");
    }

    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    if (!$dara.isNull(tmpReq.invoiceIssuers)) {
      request.invoiceIssuersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.invoiceIssuers, "InvoiceIssuers", "json");
    }

    if (!$dara.isNull(tmpReq.status)) {
      request.statusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.status, "Status", "json");
    }

    if (!$dara.isNull(tmpReq.types)) {
      request.typesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.types, "Types", "json");
    }

    let query = { };
    if (!$dara.isNull(request.billingCyclesShrink)) {
      query["BillingCycles"] = request.billingCyclesShrink;
    }

    if (!$dara.isNull(request.businessIdsShrink)) {
      query["BusinessIds"] = request.businessIdsShrink;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.invoiceIssuersShrink)) {
      query["InvoiceIssuers"] = request.invoiceIssuersShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statusShrink)) {
      query["Status"] = request.statusShrink;
    }

    if (!$dara.isNull(request.typesShrink)) {
      query["Types"] = request.typesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInvoiceCandidate",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInvoiceCandidateResponse>(await this.callApi(params, req, runtime), new $_model.ListInvoiceCandidateResponse({}));
  }

  /**
   * 对客OpenAPI开票对象查询
   * 
   * @param request - ListInvoiceCandidateRequest
   * @returns ListInvoiceCandidateResponse
   */
  async listInvoiceCandidate(request: $_model.ListInvoiceCandidateRequest): Promise<$_model.ListInvoiceCandidateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInvoiceCandidateWithOptions(request, runtime);
  }

  /**
   * 发票抬头查询服务
   * 
   * @param request - ListInvoiceTitleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInvoiceTitleResponse
   */
  async listInvoiceTitleWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListInvoiceTitleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListInvoiceTitle",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInvoiceTitleResponse>(await this.callApi(params, req, runtime), new $_model.ListInvoiceTitleResponse({}));
  }

  /**
   * 发票抬头查询服务
   * @returns ListInvoiceTitleResponse
   */
  async listInvoiceTitle(): Promise<$_model.ListInvoiceTitleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInvoiceTitleWithOptions(runtime);
  }

  /**
   * 查看已订阅的报告列表
   * 
   * @param request - ListReportDefinitionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListReportDefinitionsResponse
   */
  async listReportDefinitionsWithOptions(request: $_model.ListReportDefinitionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListReportDefinitionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListReportDefinitions",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListReportDefinitionsResponse>(await this.callApi(params, req, runtime), new $_model.ListReportDefinitionsResponse({}));
  }

  /**
   * 查看已订阅的报告列表
   * 
   * @param request - ListReportDefinitionsRequest
   * @returns ListReportDefinitionsResponse
   */
  async listReportDefinitions(request: $_model.ListReportDefinitionsRequest): Promise<$_model.ListReportDefinitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listReportDefinitionsWithOptions(request, runtime);
  }

  /**
   * 修改财务单元
   * 
   * @param tmpReq - ModifyCostCenterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCostCenterResponse
   */
  async modifyCostCenterWithOptions(tmpReq: $_model.ModifyCostCenterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCostCenterResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyCostCenterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.costCenterEntityList)) {
      request.costCenterEntityListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.costCenterEntityList, "CostCenterEntityList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.costCenterEntityListShrink)) {
      query["CostCenterEntityList"] = request.costCenterEntityListShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCostCenter",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCostCenterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCostCenterResponse({}));
  }

  /**
   * 修改财务单元
   * 
   * @param request - ModifyCostCenterRequest
   * @returns ModifyCostCenterResponse
   */
  async modifyCostCenter(request: $_model.ModifyCostCenterRequest): Promise<$_model.ModifyCostCenterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCostCenterWithOptions(request, runtime);
  }

  /**
   * 修改财务单元规则
   * 
   * @param tmpReq - ModifyCostCenterRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCostCenterRuleResponse
   */
  async modifyCostCenterRuleWithOptions(tmpReq: $_model.ModifyCostCenterRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCostCenterRuleResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyCostCenterRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterExpression)) {
      request.filterExpressionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterExpression, "FilterExpression", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filterExpressionShrink)) {
      query["FilterExpression"] = request.filterExpressionShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.costCenterId)) {
      body["CostCenterId"] = request.costCenterId;
    }

    if (!$dara.isNull(request.ownerAccountId)) {
      body["OwnerAccountId"] = request.ownerAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCostCenterRule",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCostCenterRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCostCenterRuleResponse({}));
  }

  /**
   * 修改财务单元规则
   * 
   * @param request - ModifyCostCenterRuleRequest
   * @returns ModifyCostCenterRuleResponse
   */
  async modifyCostCenterRule(request: $_model.ModifyCostCenterRuleRequest): Promise<$_model.ModifyCostCenterRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCostCenterRuleWithOptions(request, runtime);
  }

  /**
   * 查询财务单元
   * 
   * @param tmpReq - QueryCostCenterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCostCenterResponse
   */
  async queryCostCenterWithOptions(tmpReq: $_model.QueryCostCenterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCostCenterResponse> {
    tmpReq.validate();
    let request = new $_model.QueryCostCenterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.ownerAccountId)) {
      query["OwnerAccountId"] = request.ownerAccountId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentCostCenterId)) {
      query["ParentCostCenterId"] = request.parentCostCenterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCostCenter",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCostCenterResponse>(await this.callApi(params, req, runtime), new $_model.QueryCostCenterResponse({}));
  }

  /**
   * 查询财务单元
   * 
   * @param request - QueryCostCenterRequest
   * @returns QueryCostCenterResponse
   */
  async queryCostCenter(request: $_model.QueryCostCenterRequest): Promise<$_model.QueryCostCenterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCostCenterWithOptions(request, runtime);
  }

  /**
   * 查询财务单元下资源信息
   * 
   * @param request - QueryCostCenterResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCostCenterResourceResponse
   */
  async queryCostCenterResourceWithOptions(request: $_model.QueryCostCenterResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCostCenterResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ecIdAccountIds)) {
      query["EcIdAccountIds"] = request.ecIdAccountIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.costCenterId)) {
      body["CostCenterId"] = request.costCenterId;
    }

    if (!$dara.isNull(request.ownerAccountId)) {
      body["OwnerAccountId"] = request.ownerAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCostCenterResource",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCostCenterResourceResponse>(await this.callApi(params, req, runtime), new $_model.QueryCostCenterResourceResponse({}));
  }

  /**
   * 查询财务单元下资源信息
   * 
   * @param request - QueryCostCenterResourceRequest
   * @returns QueryCostCenterResourceResponse
   */
  async queryCostCenterResource(request: $_model.QueryCostCenterResourceRequest): Promise<$_model.QueryCostCenterResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCostCenterResourceWithOptions(request, runtime);
  }

  /**
   * 查询财务单元规则
   * 
   * @param request - QueryCostCenterRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCostCenterRuleResponse
   */
  async queryCostCenterRuleWithOptions(request: $_model.QueryCostCenterRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCostCenterRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ecIdAccountIds)) {
      query["EcIdAccountIds"] = request.ecIdAccountIds;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.costCenterId)) {
      body["CostCenterId"] = request.costCenterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCostCenterRule",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCostCenterRuleResponse>(await this.callApi(params, req, runtime), new $_model.QueryCostCenterRuleResponse({}));
  }

  /**
   * 查询财务单元规则
   * 
   * @param request - QueryCostCenterRuleRequest
   * @returns QueryCostCenterRuleResponse
   */
  async queryCostCenterRule(request: $_model.QueryCostCenterRuleRequest): Promise<$_model.QueryCostCenterRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCostCenterRuleWithOptions(request, runtime);
  }

  /**
   * 设置资金账户的信控限额
   * 
   * @param request - SetFundAccountCreditAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetFundAccountCreditAmountResponse
   */
  async setFundAccountCreditAmountWithOptions(request: $_model.SetFundAccountCreditAmountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetFundAccountCreditAmountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creditAmount)) {
      body["CreditAmount"] = request.creditAmount;
    }

    if (!$dara.isNull(request.currency)) {
      body["Currency"] = request.currency;
    }

    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetFundAccountCreditAmount",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetFundAccountCreditAmountResponse>(await this.callApi(params, req, runtime), new $_model.SetFundAccountCreditAmountResponse({}));
  }

  /**
   * 设置资金账户的信控限额
   * 
   * @param request - SetFundAccountCreditAmountRequest
   * @returns SetFundAccountCreditAmountResponse
   */
  async setFundAccountCreditAmount(request: $_model.SetFundAccountCreditAmountRequest): Promise<$_model.SetFundAccountCreditAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setFundAccountCreditAmountWithOptions(request, runtime);
  }

  /**
   * 设置资金账户低额预警
   * 
   * @param request - SetFundAccountLowAvailableAmountAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetFundAccountLowAvailableAmountAlarmResponse
   */
  async setFundAccountLowAvailableAmountAlarmWithOptions(request: $_model.SetFundAccountLowAvailableAmountAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetFundAccountLowAvailableAmountAlarmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    if (!$dara.isNull(request.thresholdAmount)) {
      body["ThresholdAmount"] = request.thresholdAmount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetFundAccountLowAvailableAmountAlarm",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetFundAccountLowAvailableAmountAlarmResponse>(await this.callApi(params, req, runtime), new $_model.SetFundAccountLowAvailableAmountAlarmResponse({}));
  }

  /**
   * 设置资金账户低额预警
   * 
   * @param request - SetFundAccountLowAvailableAmountAlarmRequest
   * @returns SetFundAccountLowAvailableAmountAlarmResponse
   */
  async setFundAccountLowAvailableAmountAlarm(request: $_model.SetFundAccountLowAvailableAmountAlarmRequest): Promise<$_model.SetFundAccountLowAvailableAmountAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setFundAccountLowAvailableAmountAlarmWithOptions(request, runtime);
  }

  /**
   * 设置节省计划用户级抵扣规则
   * 
   * @param tmpReq - SetSavingPlanUserDeductRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSavingPlanUserDeductRuleResponse
   */
  async setSavingPlanUserDeductRuleWithOptions(tmpReq: $_model.SetSavingPlanUserDeductRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetSavingPlanUserDeductRuleResponse> {
    tmpReq.validate();
    let request = new $_model.SetSavingPlanUserDeductRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    if (!$dara.isNull(tmpReq.userDeductRules)) {
      request.userDeductRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userDeductRules, "UserDeductRules", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.spnInstanceCode)) {
      body["SpnInstanceCode"] = request.spnInstanceCode;
    }

    if (!$dara.isNull(request.userDeductRulesShrink)) {
      body["UserDeductRules"] = request.userDeductRulesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetSavingPlanUserDeductRule",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetSavingPlanUserDeductRuleResponse>(await this.callApi(params, req, runtime), new $_model.SetSavingPlanUserDeductRuleResponse({}));
  }

  /**
   * 设置节省计划用户级抵扣规则
   * 
   * @param request - SetSavingPlanUserDeductRuleRequest
   * @returns SetSavingPlanUserDeductRuleResponse
   */
  async setSavingPlanUserDeductRule(request: $_model.SetSavingPlanUserDeductRuleRequest): Promise<$_model.SetSavingPlanUserDeductRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setSavingPlanUserDeductRuleWithOptions(request, runtime);
  }

}
