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
   * Allocates resource instances (instance-based and attached-resource-based) from a source cost center to a destination cost center.
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
   * Allocates resource instances (instance-based and attached-resource-based) from a source cost center to a destination cost center.
   * 
   * @param request - AllocateCostCenterResourceRequest
   * @returns AllocateCostCenterResourceResponse
   */
  async allocateCostCenterResource(request: $_model.AllocateCostCenterResourceRequest): Promise<$_model.AllocateCostCenterResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateCostCenterResourceWithOptions(request, runtime);
  }

  /**
   * Cancels the low balance alert for a fund account.
   * 
   * @remarks
   * Cancels the low balance alert for a fund account.
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
   * Cancels the low balance alert for a fund account.
   * 
   * @remarks
   * Cancels the low balance alert for a fund account.
   * 
   * @param request - CancelFundAccountLowAvailableAmountAlarmRequest
   * @returns CancelFundAccountLowAvailableAmountAlarmResponse
   */
  async cancelFundAccountLowAvailableAmountAlarm(request: $_model.CancelFundAccountLowAvailableAmountAlarmRequest): Promise<$_model.CancelFundAccountLowAvailableAmountAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelFundAccountLowAvailableAmountAlarmWithOptions(request, runtime);
  }

  /**
   * 提货券账户检查是否存在
   * 
   * @param request - CheckAccountExistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckAccountExistResponse
   */
  async checkAccountExistWithOptions(request: $_model.CheckAccountExistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckAccountExistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ecIdAccountIds)) {
      query["EcIdAccountIds"] = request.ecIdAccountIds;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.toUserType)) {
      body["ToUserType"] = request.toUserType;
    }

    if (!$dara.isNull(request.transferAccount)) {
      body["TransferAccount"] = request.transferAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckAccountExist",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckAccountExistResponse>(await this.callApi(params, req, runtime), new $_model.CheckAccountExistResponse({}));
  }

  /**
   * 提货券账户检查是否存在
   * 
   * @param request - CheckAccountExistRequest
   * @returns CheckAccountExistResponse
   */
  async checkAccountExist(request: $_model.CheckAccountExistRequest): Promise<$_model.CheckAccountExistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkAccountExistWithOptions(request, runtime);
  }

  /**
   * Checks whether a specified budgetName exists.
   * 
   * @param request - CheckBudgetNameExistsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckBudgetNameExistsResponse
   */
  async checkBudgetNameExistsWithOptions(request: $_model.CheckBudgetNameExistsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckBudgetNameExistsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.budgetName)) {
      body["BudgetName"] = request.budgetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckBudgetNameExists",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckBudgetNameExistsResponse>(await this.callApi(params, req, runtime), new $_model.CheckBudgetNameExistsResponse({}));
  }

  /**
   * Checks whether a specified budgetName exists.
   * 
   * @param request - CheckBudgetNameExistsRequest
   * @returns CheckBudgetNameExistsResponse
   */
  async checkBudgetNameExists(request: $_model.CheckBudgetNameExistsRequest): Promise<$_model.CheckBudgetNameExistsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkBudgetNameExistsWithOptions(request, runtime);
  }

  /**
   * Creates a budget.
   * 
   * @param tmpReq - CreateBudgetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBudgetResponse
   */
  async createBudgetWithOptions(tmpReq: $_model.CreateBudgetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBudgetResponse> {
    tmpReq.validate();
    let request = new $_model.CreateBudgetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cycleQuota)) {
      request.cycleQuotaShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cycleQuota, "CycleQuota", "json");
    }

    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    if (!$dara.isNull(tmpReq.queryFilter)) {
      request.queryFilterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryFilter, "QueryFilter", "json");
    }

    if (!$dara.isNull(tmpReq.warnConfs)) {
      request.warnConfsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.warnConfs, "WarnConfs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.budgetName)) {
      body["BudgetName"] = request.budgetName;
    }

    if (!$dara.isNull(request.budgetType)) {
      body["BudgetType"] = request.budgetType;
    }

    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.cycleEndPeriod)) {
      body["CycleEndPeriod"] = request.cycleEndPeriod;
    }

    if (!$dara.isNull(request.cycleQuotaShrink)) {
      body["CycleQuota"] = request.cycleQuotaShrink;
    }

    if (!$dara.isNull(request.cycleStartPeriod)) {
      body["CycleStartPeriod"] = request.cycleStartPeriod;
    }

    if (!$dara.isNull(request.cycleType)) {
      body["CycleType"] = request.cycleType;
    }

    if (!$dara.isNull(request.metric)) {
      body["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.queryFilterShrink)) {
      body["QueryFilter"] = request.queryFilterShrink;
    }

    if (!$dara.isNull(request.quota)) {
      body["Quota"] = request.quota;
    }

    if (!$dara.isNull(request.quotaType)) {
      body["QuotaType"] = request.quotaType;
    }

    if (!$dara.isNull(request.warnConfsShrink)) {
      body["WarnConfs"] = request.warnConfsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBudget",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBudgetResponse>(await this.callApi(params, req, runtime), new $_model.CreateBudgetResponse({}));
  }

  /**
   * Creates a budget.
   * 
   * @param request - CreateBudgetRequest
   * @returns CreateBudgetResponse
   */
  async createBudget(request: $_model.CreateBudgetRequest): Promise<$_model.CreateBudgetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBudgetWithOptions(request, runtime);
  }

  /**
   * Create Cost Center
   * 
   * @remarks
   * Creates one or more cost centers.
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
   * Create Cost Center
   * 
   * @remarks
   * Creates one or more cost centers.
   * 
   * @param request - CreateCostCenterRequest
   * @returns CreateCostCenterResponse
   */
  async createCostCenter(request: $_model.CreateCostCenterRequest): Promise<$_model.CreateCostCenterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCostCenterWithOptions(request, runtime);
  }

  /**
   * Create a financial unit auto-allocation rule
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
   * Create a financial unit auto-allocation rule
   * 
   * @param request - CreateCostCenterRuleRequest
   * @returns CreateCostCenterRuleResponse
   */
  async createCostCenterRule(request: $_model.CreateCostCenterRuleRequest): Promise<$_model.CreateCostCenterRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCostCenterRuleWithOptions(request, runtime);
  }

  /**
   * Create payment relationships for a fund account
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
   * Create payment relationships for a fund account
   * 
   * @param request - CreateFundAccountPayRelationRequest
   * @returns CreateFundAccountPayRelationResponse
   */
  async createFundAccountPayRelation(request: $_model.CreateFundAccountPayRelationRequest): Promise<$_model.CreateFundAccountPayRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFundAccountPayRelationWithOptions(request, runtime);
  }

  /**
   * Creates an account transfer or revocation.
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
   * Creates an account transfer or revocation.
   * 
   * @param request - CreateFundAccountTransferRequest
   * @returns CreateFundAccountTransferResponse
   */
  async createFundAccountTransfer(request: $_model.CreateFundAccountTransferRequest): Promise<$_model.CreateFundAccountTransferResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFundAccountTransferWithOptions(request, runtime);
  }

  /**
   * Apply for Invoice
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
   * Apply for Invoice
   * 
   * @param request - CreateInvoiceRequest
   * @returns CreateInvoiceResponse
   */
  async createInvoice(request: $_model.CreateInvoiceRequest): Promise<$_model.CreateInvoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInvoiceWithOptions(request, runtime);
  }

  /**
   * Creates a billing report subscription.
   * 
   * @remarks
   * When you call this API operation, note the following information:
   * - You can subscribe to one type of billing file at a time.
   * - Except for monthly bill PDFs, starting from the day after the subscription, the system pushes daily billing files that contain full detailed data from the beginning of the current month to the present. Before the 4th of each month, the system pushes full billing files for the complete billing cycle of the previous month.
   * - Monthly bill PDFs are pushed before the 4th of each month for the previous month.
   * - Billing files generated on a daily basis may have delays. Delayed billing files are pushed on the day after they are generated and may also contain bills that were delayed from before the previous day and generated on the previous day. We recommend that you pull the full files for the previous month at the beginning of each month.
   * > Apply for the required permissions by following the procedure described in the documentation: [Billing Subscription](https://help.aliyun.com/zh/user-center/user-guide/billing-subscription?spm=5176.21213303.J_v8LsmxMG6alneH-O7TCPa.1.3ef82f3d5ZIf08&scm=20140722.S_help@@%E6%96%87%E6%A1%A3@@2861820._.ID_help@@%E6%96%87%E6%A1%A3@@2861820-RL_%E8%B4%A6%E5%8D%95%E8%AE%A2%E9%98%85-LOC_2024SPHelpResult-OR_ser-PAR1_2150419517478292121114501eaee8-V_4-RE_new5-P0_0-P1_0)
   * - This subscription and the Expenses and Costs - Billing Subscription are the same feature, and subscriptions are interchangeable.
   * - When subscribing to a directory under a bucket, follow the directory naming conventions:
   *     - Emojis are not allowed. Use compliant UTF-8 characters.
   *     - Forward slashes (/) are used to separate paths and can quickly create subdirectories. However, do not start with / or \\, and do not use consecutive forward slashes (/).
   *     - Subdirectories named .. are not allowed.
   *     - The total length must be 1 to 254 characters.
   * - File names:
   *     - Example: **consumeDetailBillV2** (billing item details)
   *     
   *         - Daily push file name format: `{Account UID}_{Site ID}_{Bill type}_{YYYYMM|YYYYMMDD}`, for example: `169**_2688801000001_consumeDetailBillV2_20190312`.
   *     
   *         - Full file name format at the beginning of the next month: `{Account UID}_{Site ID}_{Bill type}_{YYYYMM|YYYYMM}`, for example: `169**_2688801000001_consumeDetailBillV2_201903`.
   * - Monthly bill PDF files are in .pdf format, and other file types are in .csv format. When the data volume is large, the system automatically splits the exported bills into multiple files and compresses them into one or more .zip files. The .zip file name format is the same.
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

    if (!$dara.isNull(request.includeMembers)) {
      query["IncludeMembers"] = request.includeMembers;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.notSendOnNoData)) {
      query["NotSendOnNoData"] = request.notSendOnNoData;
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

    if (!$dara.isNull(request.sendWithAttach)) {
      query["SendWithAttach"] = request.sendWithAttach;
    }

    if (!$dara.isNull(request.splitFileOnUserId)) {
      query["SplitFileOnUserId"] = request.splitFileOnUserId;
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
   * Creates a billing report subscription.
   * 
   * @remarks
   * When you call this API operation, note the following information:
   * - You can subscribe to one type of billing file at a time.
   * - Except for monthly bill PDFs, starting from the day after the subscription, the system pushes daily billing files that contain full detailed data from the beginning of the current month to the present. Before the 4th of each month, the system pushes full billing files for the complete billing cycle of the previous month.
   * - Monthly bill PDFs are pushed before the 4th of each month for the previous month.
   * - Billing files generated on a daily basis may have delays. Delayed billing files are pushed on the day after they are generated and may also contain bills that were delayed from before the previous day and generated on the previous day. We recommend that you pull the full files for the previous month at the beginning of each month.
   * > Apply for the required permissions by following the procedure described in the documentation: [Billing Subscription](https://help.aliyun.com/zh/user-center/user-guide/billing-subscription?spm=5176.21213303.J_v8LsmxMG6alneH-O7TCPa.1.3ef82f3d5ZIf08&scm=20140722.S_help@@%E6%96%87%E6%A1%A3@@2861820._.ID_help@@%E6%96%87%E6%A1%A3@@2861820-RL_%E8%B4%A6%E5%8D%95%E8%AE%A2%E9%98%85-LOC_2024SPHelpResult-OR_ser-PAR1_2150419517478292121114501eaee8-V_4-RE_new5-P0_0-P1_0)
   * - This subscription and the Expenses and Costs - Billing Subscription are the same feature, and subscriptions are interchangeable.
   * - When subscribing to a directory under a bucket, follow the directory naming conventions:
   *     - Emojis are not allowed. Use compliant UTF-8 characters.
   *     - Forward slashes (/) are used to separate paths and can quickly create subdirectories. However, do not start with / or \\, and do not use consecutive forward slashes (/).
   *     - Subdirectories named .. are not allowed.
   *     - The total length must be 1 to 254 characters.
   * - File names:
   *     - Example: **consumeDetailBillV2** (billing item details)
   *     
   *         - Daily push file name format: `{Account UID}_{Site ID}_{Bill type}_{YYYYMM|YYYYMMDD}`, for example: `169**_2688801000001_consumeDetailBillV2_20190312`.
   *     
   *         - Full file name format at the beginning of the next month: `{Account UID}_{Site ID}_{Bill type}_{YYYYMM|YYYYMM}`, for example: `169**_2688801000001_consumeDetailBillV2_201903`.
   * - Monthly bill PDF files are in .pdf format, and other file types are in .csv format. When the data volume is large, the system automatically splits the exported bills into multiple files and compresses them into one or more .zip files. The .zip file name format is the same.
   * 
   * @param request - CreateReportDefinitionRequest
   * @returns CreateReportDefinitionResponse
   */
  async createReportDefinition(request: $_model.CreateReportDefinitionRequest): Promise<$_model.CreateReportDefinitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createReportDefinitionWithOptions(request, runtime);
  }

  /**
   * Deletes a budget.
   * 
   * @param request - DeleteBudgetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBudgetResponse
   */
  async deleteBudgetWithOptions(request: $_model.DeleteBudgetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBudgetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.budgetName)) {
      body["BudgetName"] = request.budgetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBudget",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBudgetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBudgetResponse({}));
  }

  /**
   * Deletes a budget.
   * 
   * @param request - DeleteBudgetRequest
   * @returns DeleteBudgetResponse
   */
  async deleteBudget(request: $_model.DeleteBudgetRequest): Promise<$_model.DeleteBudgetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBudgetWithOptions(request, runtime);
  }

  /**
   * Delete Cost Center
   * 
   * @remarks
   * This API is in canary release and is only available to whitelisted users. Excessive calls may cause performance issues such as response timeouts.
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
   * Delete Cost Center
   * 
   * @remarks
   * This API is in canary release and is only available to whitelisted users. Excessive calls may cause performance issues such as response timeouts.
   * 
   * @param request - DeleteCostCenterRequest
   * @returns DeleteCostCenterResponse
   */
  async deleteCostCenter(request: $_model.DeleteCostCenterRequest): Promise<$_model.DeleteCostCenterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCostCenterWithOptions(request, runtime);
  }

  /**
   * Delete financial unit automatic allocation rule
   * 
   * @remarks
   * This API is in canary release and is only available to whitelisted users. Excessive calls may cause performance issues such as response timeouts.
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
   * Delete financial unit automatic allocation rule
   * 
   * @remarks
   * This API is in canary release and is only available to whitelisted users. Excessive calls may cause performance issues such as response timeouts.
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
   * Deletes a bill report export subscription.
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
   * Deletes a bill report export subscription.
   * 
   * @param request - DeleteReportDefinitionRequest
   * @returns DeleteReportDefinitionResponse
   */
  async deleteReportDefinition(request: $_model.DeleteReportDefinitionRequest): Promise<$_model.DeleteReportDefinitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteReportDefinitionWithOptions(request, runtime);
  }

  /**
   * Query a Single Budget
   * 
   * @param request - DescribeBudgetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBudgetResponse
   */
  async describeBudgetWithOptions(request: $_model.DescribeBudgetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBudgetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.budgetName)) {
      body["BudgetName"] = request.budgetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBudget",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBudgetResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBudgetResponse({}));
  }

  /**
   * Query a Single Budget
   * 
   * @param request - DescribeBudgetRequest
   * @returns DescribeBudgetResponse
   */
  async describeBudget(request: $_model.DescribeBudgetRequest): Promise<$_model.DescribeBudgetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBudgetWithOptions(request, runtime);
  }

  /**
   * Query budget list
   * 
   * @param request - DescribeBudgetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBudgetsResponse
   */
  async describeBudgetsWithOptions(request: $_model.DescribeBudgetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBudgetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.budgetName)) {
      body["BudgetName"] = request.budgetName;
    }

    if (!$dara.isNull(request.budgetType)) {
      body["BudgetType"] = request.budgetType;
    }

    if (!$dara.isNull(request.expireStatus)) {
      body["ExpireStatus"] = request.expireStatus;
    }

    if (!$dara.isNull(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBudgets",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBudgetsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBudgetsResponse({}));
  }

  /**
   * Query budget list
   * 
   * @param request - DescribeBudgetsRequest
   * @returns DescribeBudgetsResponse
   */
  async describeBudgets(request: $_model.DescribeBudgetsRequest): Promise<$_model.DescribeBudgetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBudgetsWithOptions(request, runtime);
  }

  /**
   * Queries a list of coupons.
   * 
   * @param tmpReq - DescribeCouponRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCouponResponse
   */
  async describeCouponWithOptions(tmpReq: $_model.DescribeCouponRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCouponResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeCouponShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.couponTemplateIdList)) {
      request.couponTemplateIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.couponTemplateIdList, "CouponTemplateIdList", "json");
    }

    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.couponId)) {
      query["CouponId"] = request.couponId;
    }

    if (!$dara.isNull(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!$dara.isNull(request.couponTemplateIdListShrink)) {
      query["CouponTemplateIdList"] = request.couponTemplateIdListShrink;
    }

    if (!$dara.isNull(request.couponType)) {
      query["CouponType"] = request.couponType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.effectiveEndTime)) {
      query["EffectiveEndTime"] = request.effectiveEndTime;
    }

    if (!$dara.isNull(request.effectiveStartTime)) {
      query["EffectiveStartTime"] = request.effectiveStartTime;
    }

    if (!$dara.isNull(request.expireEndDate)) {
      query["ExpireEndDate"] = request.expireEndDate;
    }

    if (!$dara.isNull(request.expireStartDate)) {
      query["ExpireStartDate"] = request.expireStartDate;
    }

    if (!$dara.isNull(request.includeShare)) {
      query["IncludeShare"] = request.includeShare;
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

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCoupon",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCouponResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCouponResponse({}));
  }

  /**
   * Queries a list of coupons.
   * 
   * @param request - DescribeCouponRequest
   * @returns DescribeCouponResponse
   */
  async describeCoupon(request: $_model.DescribeCouponRequest): Promise<$_model.DescribeCouponResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCouponWithOptions(request, runtime);
  }

  /**
   * Queries the list of products available for a coupon.
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

    let query = { };
    if (!$dara.isNull(request.couponId)) {
      query["CouponId"] = request.couponId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCouponItemList",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCouponItemListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCouponItemListResponse({}));
  }

  /**
   * Queries the list of products available for a coupon.
   * 
   * @param request - DescribeCouponItemListRequest
   * @returns DescribeCouponItemListResponse
   */
  async describeCouponItemList(request: $_model.DescribeCouponItemListRequest): Promise<$_model.DescribeCouponItemListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCouponItemListWithOptions(request, runtime);
  }

  /**
   * Queries resource plan deduction records.
   * 
   * @param tmpReq - DescribeDeductLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeductLogsResponse
   */
  async describeDeductLogsWithOptions(tmpReq: $_model.DescribeDeductLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeductLogsResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeDeductLogsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    if (!$dara.isNull(tmpReq.relationAccountIds)) {
      request.relationAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relationAccountIds, "RelationAccountIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.billInstanceId)) {
      query["BillInstanceId"] = request.billInstanceId;
    }

    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billingCommodityCode)) {
      body["BillingCommodityCode"] = request.billingCommodityCode;
    }

    if (!$dara.isNull(request.billingEndTime)) {
      body["BillingEndTime"] = request.billingEndTime;
    }

    if (!$dara.isNull(request.billingStartTime)) {
      body["BillingStartTime"] = request.billingStartTime;
    }

    if (!$dara.isNull(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.group)) {
      body["Group"] = request.group;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.relationAccountIdsShrink)) {
      body["RelationAccountIds"] = request.relationAccountIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeductLogs",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeductLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeductLogsResponse({}));
  }

  /**
   * Queries resource plan deduction records.
   * 
   * @param request - DescribeDeductLogsRequest
   * @returns DescribeDeductLogsResponse
   */
  async describeDeductLogs(request: $_model.DescribeDeductLogsRequest): Promise<$_model.DescribeDeductLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeductLogsWithOptions(request, runtime);
  }

  /**
   * Queries resource plan instances.
   * 
   * @param tmpReq - DescribeFrInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFrInstancesResponse
   */
  async describeFrInstancesWithOptions(tmpReq: $_model.DescribeFrInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFrInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeFrInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.instanceTag)) {
      query["InstanceTag"] = request.instanceTag;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.capacityType)) {
      body["CapacityType"] = request.capacityType;
    }

    if (!$dara.isNull(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.cycleType)) {
      body["CycleType"] = request.cycleType;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.group)) {
      body["Group"] = request.group;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortRule)) {
      body["SortRule"] = request.sortRule;
    }

    if (!$dara.isNull(request.spec)) {
      body["Spec"] = request.spec;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFrInstances",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFrInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFrInstancesResponse({}));
  }

  /**
   * Queries resource plan instances.
   * 
   * @param request - DescribeFrInstancesRequest
   * @returns DescribeFrInstancesResponse
   */
  async describeFrInstances(request: $_model.DescribeFrInstancesRequest): Promise<$_model.DescribeFrInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFrInstancesWithOptions(request, runtime);
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
   * Query available balance of fund account
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
   * Query available balance of fund account
   * 
   * @param request - GetFundAccountAvailableAmountRequest
   * @returns GetFundAccountAvailableAmountResponse
   */
  async getFundAccountAvailableAmount(request: $_model.GetFundAccountAvailableAmountRequest): Promise<$_model.GetFundAccountAvailableAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountAvailableAmountWithOptions(request, runtime);
  }

  /**
   * Query allocatable credit limit of a fund account
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
   * Query allocatable credit limit of a fund account
   * 
   * @param request - GetFundAccountCanAllocateCreditAmountRequest
   * @returns GetFundAccountCanAllocateCreditAmountResponse
   */
  async getFundAccountCanAllocateCreditAmount(request: $_model.GetFundAccountCanAllocateCreditAmountRequest): Promise<$_model.GetFundAccountCanAllocateCreditAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountCanAllocateCreditAmountWithOptions(request, runtime);
  }

  /**
   * Queries the reclaimable amount of a fund account.
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
   * Queries the reclaimable amount of a fund account.
   * 
   * @param request - GetFundAccountCanRecycleAmountRequest
   * @returns GetFundAccountCanRecycleAmountResponse
   */
  async getFundAccountCanRecycleAmount(request: $_model.GetFundAccountCanRecycleAmountRequest): Promise<$_model.GetFundAccountCanRecycleAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountCanRecycleAmountWithOptions(request, runtime);
  }

  /**
   * Query the transferable amount of a fund account
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
   * Query the transferable amount of a fund account
   * 
   * @param request - GetFundAccountCanTransferAmountRequest
   * @returns GetFundAccountCanTransferAmountResponse
   */
  async getFundAccountCanTransferAmount(request: $_model.GetFundAccountCanTransferAmountRequest): Promise<$_model.GetFundAccountCanTransferAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountCanTransferAmountWithOptions(request, runtime);
  }

  /**
   * Query Withdrawable Amount of Fund Account
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
   * Query Withdrawable Amount of Fund Account
   * 
   * @param request - GetFundAccountCanWithdrawAmountRequest
   * @returns GetFundAccountCanWithdrawAmountResponse
   */
  async getFundAccountCanWithdrawAmount(request: $_model.GetFundAccountCanWithdrawAmountRequest): Promise<$_model.GetFundAccountCanWithdrawAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountCanWithdrawAmountWithOptions(request, runtime);
  }

  /**
   * Query Fund Account Low Balance Alert
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
   * Query Fund Account Low Balance Alert
   * 
   * @param request - GetFundAccountLowAvailableAmountAlarmRequest
   * @returns GetFundAccountLowAvailableAmountAlarmResponse
   */
  async getFundAccountLowAvailableAmountAlarm(request: $_model.GetFundAccountLowAvailableAmountAlarmRequest): Promise<$_model.GetFundAccountLowAvailableAmountAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountLowAvailableAmountAlarmWithOptions(request, runtime);
  }

  /**
   * Query fund account transaction details
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
   * Query fund account transaction details
   * 
   * @param request - GetFundAccountTransactionDetailsRequest
   * @returns GetFundAccountTransactionDetailsResponse
   */
  async getFundAccountTransactionDetails(request: $_model.GetFundAccountTransactionDetailsRequest): Promise<$_model.GetFundAccountTransactionDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountTransactionDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specific order for a user or a reseller\\"s customer.
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
   * Queries the details of a specific order for a user or a reseller\\"s customer.
   * 
   * @param request - GetOrderDetailRequest
   * @returns GetOrderDetailResponse
   */
  async getOrderDetail(request: $_model.GetOrderDetailRequest): Promise<$_model.GetOrderDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOrderDetailWithOptions(request, runtime);
  }

  /**
   * Queries the order list of a user or a reseller customer. By default, this operation queries orders created within the most recent hour. To query orders over a longer time range, set the CreateTimeStart and CreateTimeEnd parameters.
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
   * Queries the order list of a user or a reseller customer. By default, this operation queries orders created within the most recent hour. To query orders over a longer time range, set the CreateTimeStart and CreateTimeEnd parameters.
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
   * Query fund account list
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
   * Query fund account list
   * 
   * @param request - ListFundAccountRequest
   * @returns ListFundAccountResponse
   */
  async listFundAccount(request: $_model.ListFundAccountRequest): Promise<$_model.ListFundAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFundAccountWithOptions(request, runtime);
  }

  /**
   * Query payment relationships of an account
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
   * Query payment relationships of an account
   * 
   * @param request - ListFundAccountPayRelationRequest
   * @returns ListFundAccountPayRelationResponse
   */
  async listFundAccountPayRelation(request: $_model.ListFundAccountPayRelationRequest): Promise<$_model.ListFundAccountPayRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFundAccountPayRelationWithOptions(request, runtime);
  }

  /**
   * Query invoice candidate data, which can be used for invoicing.
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
   * Query invoice candidate data, which can be used for invoicing.
   * 
   * @param request - ListInvoiceCandidateRequest
   * @returns ListInvoiceCandidateResponse
   */
  async listInvoiceCandidate(request: $_model.ListInvoiceCandidateRequest): Promise<$_model.ListInvoiceCandidateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInvoiceCandidateWithOptions(request, runtime);
  }

  /**
   * Query the list of available invoice titles
   * 
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
   * Query the list of available invoice titles
   * @returns ListInvoiceTitleResponse
   */
  async listInvoiceTitle(): Promise<$_model.ListInvoiceTitleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInvoiceTitleWithOptions(runtime);
  }

  /**
   * Queries the list of subscribed reports.
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
   * Queries the list of subscribed reports.
   * 
   * @param request - ListReportDefinitionsRequest
   * @returns ListReportDefinitionsResponse
   */
  async listReportDefinitions(request: $_model.ListReportDefinitionsRequest): Promise<$_model.ListReportDefinitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listReportDefinitionsWithOptions(request, runtime);
  }

  /**
   * Modify cost centers
   * 
   * @remarks
   * Modifies one or more cost centers.
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
   * Modify cost centers
   * 
   * @remarks
   * Modifies one or more cost centers.
   * 
   * @param request - ModifyCostCenterRequest
   * @returns ModifyCostCenterResponse
   */
  async modifyCostCenter(request: $_model.ModifyCostCenterRequest): Promise<$_model.ModifyCostCenterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCostCenterWithOptions(request, runtime);
  }

  /**
   * Modify financial unit rules
   * 
   * @remarks
   * Modify one or more financial units
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
   * Modify financial unit rules
   * 
   * @remarks
   * Modify one or more financial units
   * 
   * @param request - ModifyCostCenterRuleRequest
   * @returns ModifyCostCenterRuleResponse
   */
  async modifyCostCenterRule(request: $_model.ModifyCostCenterRuleRequest): Promise<$_model.ModifyCostCenterRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCostCenterRuleWithOptions(request, runtime);
  }

  /**
   * 对客订单支付接口
   * 
   * @param request - PayOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PayOrderResponse
   */
  async payOrderWithOptions(request: $_model.PayOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PayOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buyerId)) {
      query["BuyerId"] = request.buyerId;
    }

    if (!$dara.isNull(request.ecIdAccountIds)) {
      query["EcIdAccountIds"] = request.ecIdAccountIds;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.paySubmitUid)) {
      query["PaySubmitUid"] = request.paySubmitUid;
    }

    if (!$dara.isNull(request.payerId)) {
      query["PayerId"] = request.payerId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PayOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PayOrderResponse>(await this.callApi(params, req, runtime), new $_model.PayOrderResponse({}));
  }

  /**
   * 对客订单支付接口
   * 
   * @param request - PayOrderRequest
   * @returns PayOrderResponse
   */
  async payOrder(request: $_model.PayOrderRequest): Promise<$_model.PayOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.payOrderWithOptions(request, runtime);
  }

  /**
   * Query cost center expense overview
   * 
   * @remarks
   * Query cost center expense overview results for a specified billing period
   * 
   * @param request - QueryCostByCostCenterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCostByCostCenterResponse
   */
  async queryCostByCostCenterWithOptions(request: $_model.QueryCostByCostCenterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCostByCostCenterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billingMonth)) {
      query["BillingMonth"] = request.billingMonth;
    }

    if (!$dara.isNull(request.displayZeroAmountBills)) {
      query["DisplayZeroAmountBills"] = request.displayZeroAmountBills;
    }

    if (!$dara.isNull(request.groupByCostCenterLevel)) {
      query["GroupByCostCenterLevel"] = request.groupByCostCenterLevel;
    }

    if (!$dara.isNull(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.ownerAccountId)) {
      query["OwnerAccountId"] = request.ownerAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCostByCostCenter",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCostByCostCenterResponse>(await this.callApi(params, req, runtime), new $_model.QueryCostByCostCenterResponse({}));
  }

  /**
   * Query cost center expense overview
   * 
   * @remarks
   * Query cost center expense overview results for a specified billing period
   * 
   * @param request - QueryCostByCostCenterRequest
   * @returns QueryCostByCostCenterResponse
   */
  async queryCostByCostCenter(request: $_model.QueryCostByCostCenterRequest): Promise<$_model.QueryCostByCostCenterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCostByCostCenterWithOptions(request, runtime);
  }

  /**
   * Queries financial units.
   * 
   * @remarks
   * Queries a parent financial unit and its child financial units.
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
   * Queries financial units.
   * 
   * @remarks
   * Queries a parent financial unit and its child financial units.
   * 
   * @param request - QueryCostCenterRequest
   * @returns QueryCostCenterResponse
   */
  async queryCostCenter(request: $_model.QueryCostCenterRequest): Promise<$_model.QueryCostCenterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCostCenterWithOptions(request, runtime);
  }

  /**
   * Queries the list of resource instances that belong to a cost center of the user. When CostCenterId is 0, it queries unallocated primary and sub-resource instances.
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
   * Queries the list of resource instances that belong to a cost center of the user. When CostCenterId is 0, it queries unallocated primary and sub-resource instances.
   * 
   * @param request - QueryCostCenterResourceRequest
   * @returns QueryCostCenterResourceResponse
   */
  async queryCostCenterResource(request: $_model.QueryCostCenterResourceRequest): Promise<$_model.QueryCostCenterResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCostCenterResourceWithOptions(request, runtime);
  }

  /**
   * Query cost center rules
   * 
   * @remarks
   * Query parent cost center and its child cost centers.
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
   * Query cost center rules
   * 
   * @remarks
   * Query parent cost center and its child cost centers.
   * 
   * @param request - QueryCostCenterRuleRequest
   * @returns QueryCostCenterRuleResponse
   */
  async queryCostCenterRule(request: $_model.QueryCostCenterRuleRequest): Promise<$_model.QueryCostCenterRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCostCenterRuleWithOptions(request, runtime);
  }

  /**
   * Query cost center sharing rules
   * 
   * @remarks
   * Queries the sharing rules of user cost centers.
   * 
   * @param request - QueryCostCenterShareRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCostCenterShareRuleResponse
   */
  async queryCostCenterShareRuleWithOptions(request: $_model.QueryCostCenterShareRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCostCenterShareRuleResponse> {
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

    if (!$dara.isNull(request.ownerAccountId)) {
      query["OwnerAccountId"] = request.ownerAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCostCenterShareRule",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCostCenterShareRuleResponse>(await this.callApi(params, req, runtime), new $_model.QueryCostCenterShareRuleResponse({}));
  }

  /**
   * Query cost center sharing rules
   * 
   * @remarks
   * Queries the sharing rules of user cost centers.
   * 
   * @param request - QueryCostCenterShareRuleRequest
   * @returns QueryCostCenterShareRuleResponse
   */
  async queryCostCenterShareRule(request: $_model.QueryCostCenterShareRuleRequest): Promise<$_model.QueryCostCenterShareRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCostCenterShareRuleWithOptions(request, runtime);
  }

  /**
   * Queries the SLA compensation list of a user.
   * 
   * @remarks
   * Queries the SLA compensation details list of a user. Only data from the last two months is available.
   * 
   * @param request - QueryMonthlySlaListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMonthlySlaListResponse
   */
  async queryMonthlySlaListWithOptions(request: $_model.QueryMonthlySlaListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMonthlySlaListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ecIdAccountIds)) {
      query["EcIdAccountIds"] = request.ecIdAccountIds;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceIds)) {
      body["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.months)) {
      body["Months"] = request.months;
    }

    if (!$dara.isNull(request.payStatuses)) {
      body["PayStatuses"] = request.payStatuses;
    }

    if (!$dara.isNull(request.productCodes)) {
      body["ProductCodes"] = request.productCodes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMonthlySlaList",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMonthlySlaListResponse>(await this.callApi(params, req, runtime), new $_model.QueryMonthlySlaListResponse({}));
  }

  /**
   * Queries the SLA compensation list of a user.
   * 
   * @remarks
   * Queries the SLA compensation details list of a user. Only data from the last two months is available.
   * 
   * @param request - QueryMonthlySlaListRequest
   * @returns QueryMonthlySlaListResponse
   */
  async queryMonthlySlaList(request: $_model.QueryMonthlySlaListRequest): Promise<$_model.QueryMonthlySlaListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMonthlySlaListWithOptions(request, runtime);
  }

  /**
   * Modifies cost center sharing rules, including creating, modifying, and deleting sharing rules.
   * 
   * @param tmpReq - SaveCostCenterShareRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveCostCenterShareRuleResponse
   */
  async saveCostCenterShareRuleWithOptions(tmpReq: $_model.SaveCostCenterShareRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveCostCenterShareRuleResponse> {
    tmpReq.validate();
    let request = new $_model.SaveCostCenterShareRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createShareRuleList)) {
      request.createShareRuleListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createShareRuleList, "CreateShareRuleList", "json");
    }

    if (!$dara.isNull(tmpReq.modifyShareRuleList)) {
      request.modifyShareRuleListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modifyShareRuleList, "ModifyShareRuleList", "json");
    }

    if (!$dara.isNull(tmpReq.removeShareRuleList)) {
      request.removeShareRuleListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.removeShareRuleList, "RemoveShareRuleList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.createShareRuleListShrink)) {
      query["CreateShareRuleList"] = request.createShareRuleListShrink;
    }

    if (!$dara.isNull(request.modifyShareRuleListShrink)) {
      query["ModifyShareRuleList"] = request.modifyShareRuleListShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.ownerAccountId)) {
      query["OwnerAccountId"] = request.ownerAccountId;
    }

    if (!$dara.isNull(request.removeShareRuleListShrink)) {
      query["RemoveShareRuleList"] = request.removeShareRuleListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveCostCenterShareRule",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveCostCenterShareRuleResponse>(await this.callApi(params, req, runtime), new $_model.SaveCostCenterShareRuleResponse({}));
  }

  /**
   * Modifies cost center sharing rules, including creating, modifying, and deleting sharing rules.
   * 
   * @param request - SaveCostCenterShareRuleRequest
   * @returns SaveCostCenterShareRuleResponse
   */
  async saveCostCenterShareRule(request: $_model.SaveCostCenterShareRuleRequest): Promise<$_model.SaveCostCenterShareRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveCostCenterShareRuleWithOptions(request, runtime);
  }

  /**
   * Set the credit control limit for a fund account
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
   * Set the credit control limit for a fund account
   * 
   * @param request - SetFundAccountCreditAmountRequest
   * @returns SetFundAccountCreditAmountResponse
   */
  async setFundAccountCreditAmount(request: $_model.SetFundAccountCreditAmountRequest): Promise<$_model.SetFundAccountCreditAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setFundAccountCreditAmountWithOptions(request, runtime);
  }

  /**
   * Set Fund Account Low Balance Alert
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
   * Set Fund Account Low Balance Alert
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

  /**
   * User claims coupons for the last two months.
   * 
   * @remarks
   * 1. Call QueryMonthlySlaList to obtain the claimable months and records.
   * 2. Claim by month or by record.
   * Note: Only compensation for the last two months can be claimed. Historical compensation has been automatically issued.
   * 
   * @param request - SubmitSlaCouponApplyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSlaCouponApplyResponse
   */
  async submitSlaCouponApplyWithOptions(request: $_model.SubmitSlaCouponApplyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSlaCouponApplyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ecIdAccountIds)) {
      query["EcIdAccountIds"] = request.ecIdAccountIds;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.damagedIds)) {
      body["DamagedIds"] = request.damagedIds;
    }

    if (!$dara.isNull(request.month)) {
      body["Month"] = request.month;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSlaCouponApply",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSlaCouponApplyResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSlaCouponApplyResponse({}));
  }

  /**
   * User claims coupons for the last two months.
   * 
   * @remarks
   * 1. Call QueryMonthlySlaList to obtain the claimable months and records.
   * 2. Claim by month or by record.
   * Note: Only compensation for the last two months can be claimed. Historical compensation has been automatically issued.
   * 
   * @param request - SubmitSlaCouponApplyRequest
   * @returns SubmitSlaCouponApplyResponse
   */
  async submitSlaCouponApply(request: $_model.SubmitSlaCouponApplyRequest): Promise<$_model.SubmitSlaCouponApplyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSlaCouponApplyWithOptions(request, runtime);
  }

  /**
   * Updates a budget.
   * 
   * @param tmpReq - UpdateBudgetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBudgetResponse
   */
  async updateBudgetWithOptions(tmpReq: $_model.UpdateBudgetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBudgetResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateBudgetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cycleQuota)) {
      request.cycleQuotaShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cycleQuota, "CycleQuota", "json");
    }

    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    if (!$dara.isNull(tmpReq.queryFilter)) {
      request.queryFilterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryFilter, "QueryFilter", "json");
    }

    if (!$dara.isNull(tmpReq.warnConfs)) {
      request.warnConfsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.warnConfs, "WarnConfs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.budgetName)) {
      body["BudgetName"] = request.budgetName;
    }

    if (!$dara.isNull(request.budgetType)) {
      body["BudgetType"] = request.budgetType;
    }

    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.cycleEndPeriod)) {
      body["CycleEndPeriod"] = request.cycleEndPeriod;
    }

    if (!$dara.isNull(request.cycleQuotaShrink)) {
      body["CycleQuota"] = request.cycleQuotaShrink;
    }

    if (!$dara.isNull(request.cycleStartPeriod)) {
      body["CycleStartPeriod"] = request.cycleStartPeriod;
    }

    if (!$dara.isNull(request.cycleType)) {
      body["CycleType"] = request.cycleType;
    }

    if (!$dara.isNull(request.metric)) {
      body["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.originalBudgetName)) {
      body["OriginalBudgetName"] = request.originalBudgetName;
    }

    if (!$dara.isNull(request.queryFilterShrink)) {
      body["QueryFilter"] = request.queryFilterShrink;
    }

    if (!$dara.isNull(request.quota)) {
      body["Quota"] = request.quota;
    }

    if (!$dara.isNull(request.quotaType)) {
      body["QuotaType"] = request.quotaType;
    }

    if (!$dara.isNull(request.warnConfsShrink)) {
      body["WarnConfs"] = request.warnConfsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBudget",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBudgetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBudgetResponse({}));
  }

  /**
   * Updates a budget.
   * 
   * @param request - UpdateBudgetRequest
   * @returns UpdateBudgetResponse
   */
  async updateBudget(request: $_model.UpdateBudgetRequest): Promise<$_model.UpdateBudgetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBudgetWithOptions(request, runtime);
  }

}
