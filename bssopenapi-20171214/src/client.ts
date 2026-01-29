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
   * Creates a financial relationship.
   * 
   * @remarks
   * For more information about a financial relationship, see <props="intl">[Usage notes on the trusteeship]( https://www.alibabacloud.com/help/doc-detail/116383.html). 
   * If enterprise names used by the management account and a member for real-name verification are the same, you do not need to call an API operation for confirmation. Otherwise, you must call the ConfirmRelation operation for confirmation.
   * 
   * @param request - AddAccountRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAccountRelationResponse
   */
  async addAccountRelationWithOptions(request: $_model.AddAccountRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAccountRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.childNick)) {
      query["ChildNick"] = request.childNick;
    }

    if (!$dara.isNull(request.childUserId)) {
      query["ChildUserId"] = request.childUserId;
    }

    if (!$dara.isNull(request.parentUserId)) {
      query["ParentUserId"] = request.parentUserId;
    }

    if (!$dara.isNull(request.permissionCodes)) {
      query["PermissionCodes"] = request.permissionCodes;
    }

    if (!$dara.isNull(request.relationType)) {
      query["RelationType"] = request.relationType;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.roleCodes)) {
      query["RoleCodes"] = request.roleCodes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAccountRelation",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAccountRelationResponse>(await this.callApi(params, req, runtime), new $_model.AddAccountRelationResponse({}));
  }

  /**
   * Creates a financial relationship.
   * 
   * @remarks
   * For more information about a financial relationship, see <props="intl">[Usage notes on the trusteeship]( https://www.alibabacloud.com/help/doc-detail/116383.html). 
   * If enterprise names used by the management account and a member for real-name verification are the same, you do not need to call an API operation for confirmation. Otherwise, you must call the ConfirmRelation operation for confirmation.
   * 
   * @param request - AddAccountRelationRequest
   * @returns AddAccountRelationResponse
   */
  async addAccountRelation(request: $_model.AddAccountRelationRequest): Promise<$_model.AddAccountRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAccountRelationWithOptions(request, runtime);
  }

  /**
   * Transfers resource instances from the source cost center to the destination cost center.
   * 
   * @param request - AllocateCostUnitResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateCostUnitResourceResponse
   */
  async allocateCostUnitResourceWithOptions(request: $_model.AllocateCostUnitResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocateCostUnitResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fromUnitId)) {
      query["FromUnitId"] = request.fromUnitId;
    }

    if (!$dara.isNull(request.fromUnitUserId)) {
      query["FromUnitUserId"] = request.fromUnitUserId;
    }

    if (!$dara.isNull(request.resourceInstanceList)) {
      query["ResourceInstanceList"] = request.resourceInstanceList;
    }

    if (!$dara.isNull(request.toUnitId)) {
      query["ToUnitId"] = request.toUnitId;
    }

    if (!$dara.isNull(request.toUnitUserId)) {
      query["ToUnitUserId"] = request.toUnitUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllocateCostUnitResource",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllocateCostUnitResourceResponse>(await this.callApi(params, req, runtime), new $_model.AllocateCostUnitResourceResponse({}));
  }

  /**
   * Transfers resource instances from the source cost center to the destination cost center.
   * 
   * @param request - AllocateCostUnitResourceRequest
   * @returns AllocateCostUnitResourceResponse
   */
  async allocateCostUnitResource(request: $_model.AllocateCostUnitResourceRequest): Promise<$_model.AllocateCostUnitResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateCostUnitResourceWithOptions(request, runtime);
  }

  /**
   * Submits an application for an invoice.
   * 
   * @param request - ApplyInvoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyInvoiceResponse
   */
  async applyInvoiceWithOptions(request: $_model.ApplyInvoiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyInvoiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressId)) {
      query["AddressId"] = request.addressId;
    }

    if (!$dara.isNull(request.applyUserNick)) {
      query["ApplyUserNick"] = request.applyUserNick;
    }

    if (!$dara.isNull(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.invoiceAmount)) {
      query["InvoiceAmount"] = request.invoiceAmount;
    }

    if (!$dara.isNull(request.invoiceByAmount)) {
      query["InvoiceByAmount"] = request.invoiceByAmount;
    }

    if (!$dara.isNull(request.invoicingType)) {
      query["InvoicingType"] = request.invoicingType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.processWay)) {
      query["ProcessWay"] = request.processWay;
    }

    if (!$dara.isNull(request.selectedIds)) {
      query["SelectedIds"] = request.selectedIds;
    }

    if (!$dara.isNull(request.userRemark)) {
      query["UserRemark"] = request.userRemark;
    }

    if (!$dara.isNull(request.emails)) {
      query["emails"] = request.emails;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyInvoice",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyInvoiceResponse>(await this.callApi(params, req, runtime), new $_model.ApplyInvoiceResponse({}));
  }

  /**
   * Submits an application for an invoice.
   * 
   * @param request - ApplyInvoiceRequest
   * @returns ApplyInvoiceResponse
   */
  async applyInvoice(request: $_model.ApplyInvoiceRequest): Promise<$_model.ApplyInvoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyInvoiceWithOptions(request, runtime);
  }

  /**
   * Cancels an unpaid order.
   * 
   * @param request - CancelOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelOrderResponse
   */
  async cancelOrderWithOptions(request: $_model.CancelOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelOrderResponse> {
    request.validate();
    let query = { };
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
      action: "CancelOrder",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelOrderResponse>(await this.callApi(params, req, runtime), new $_model.CancelOrderResponse({}));
  }

  /**
   * Cancels an unpaid order.
   * 
   * @param request - CancelOrderRequest
   * @returns CancelOrderResponse
   */
  async cancelOrder(request: $_model.CancelOrderRequest): Promise<$_model.CancelOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelOrderWithOptions(request, runtime);
  }

  /**
   * @param request - ChangeResellerConsumeAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResellerConsumeAmountResponse
   */
  async changeResellerConsumeAmountWithOptions(request: $_model.ChangeResellerConsumeAmountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResellerConsumeAmountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adjustType)) {
      query["AdjustType"] = request.adjustType;
    }

    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.currency)) {
      query["Currency"] = request.currency;
    }

    if (!$dara.isNull(request.extendMap)) {
      query["ExtendMap"] = request.extendMap;
    }

    if (!$dara.isNull(request.outBizId)) {
      query["OutBizId"] = request.outBizId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResellerConsumeAmount",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResellerConsumeAmountResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResellerConsumeAmountResponse({}));
  }

  /**
   * @param request - ChangeResellerConsumeAmountRequest
   * @returns ChangeResellerConsumeAmountResponse
   */
  async changeResellerConsumeAmount(request: $_model.ChangeResellerConsumeAmountRequest): Promise<$_model.ChangeResellerConsumeAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResellerConsumeAmountWithOptions(request, runtime);
  }

  /**
   * Confirms the invitation initiated by the master account.
   * 
   * @remarks
   * 1\\. A member needs to confirm an invitation only if a financial management relationship is established between the management account and the member and enterprise names used by the management account and the member for real-name verification are different. 2. The permissions to be confirmed must be the same as those granted to the member when the management account initiates the invitation.
   * 
   * @param request - ConfirmRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmRelationResponse
   */
  async confirmRelationWithOptions(request: $_model.ConfirmRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfirmRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.childUserId)) {
      query["ChildUserId"] = request.childUserId;
    }

    if (!$dara.isNull(request.confirmCode)) {
      query["ConfirmCode"] = request.confirmCode;
    }

    if (!$dara.isNull(request.parentUserId)) {
      query["ParentUserId"] = request.parentUserId;
    }

    if (!$dara.isNull(request.permissionCodes)) {
      query["PermissionCodes"] = request.permissionCodes;
    }

    if (!$dara.isNull(request.relationId)) {
      query["RelationId"] = request.relationId;
    }

    if (!$dara.isNull(request.relationType)) {
      query["RelationType"] = request.relationType;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfirmRelation",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfirmRelationResponse>(await this.callApi(params, req, runtime), new $_model.ConfirmRelationResponse({}));
  }

  /**
   * Confirms the invitation initiated by the master account.
   * 
   * @remarks
   * 1\\. A member needs to confirm an invitation only if a financial management relationship is established between the management account and the member and enterprise names used by the management account and the member for real-name verification are different. 2. The permissions to be confirmed must be the same as those granted to the member when the management account initiates the invitation.
   * 
   * @param request - ConfirmRelationRequest
   * @returns ConfirmRelationResponse
   */
  async confirmRelation(request: $_model.ConfirmRelationRequest): Promise<$_model.ConfirmRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.confirmRelationWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of an instance. You can call this operation to switch the billing method from pay-as-you-go to subscription for Server Load Balancer (SLB) instances, elastic IP addresses (EIPs), and NAT gateways, and switch the billing method from subscription to pay-as-you-go for SLB instances and EIPs.
   * 
   * @param request - ConvertChargeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertChargeTypeResponse
   */
  async convertChargeTypeWithOptions(request: $_model.ConvertChargeTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConvertChargeTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
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
      action: "ConvertChargeType",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConvertChargeTypeResponse>(await this.callApi(params, req, runtime), new $_model.ConvertChargeTypeResponse({}));
  }

  /**
   * Changes the billing method of an instance. You can call this operation to switch the billing method from pay-as-you-go to subscription for Server Load Balancer (SLB) instances, elastic IP addresses (EIPs), and NAT gateways, and switch the billing method from subscription to pay-as-you-go for SLB instances and EIPs.
   * 
   * @param request - ConvertChargeTypeRequest
   * @returns ConvertChargeTypeResponse
   */
  async convertChargeType(request: $_model.ConvertChargeTypeRequest): Promise<$_model.ConvertChargeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.convertChargeTypeWithOptions(request, runtime);
  }

  /**
   * Creates an account to establish a financial relationship.
   * 
   * @remarks
   * You can call this operation to create an account so as to establish a master-member financial relationship.
   * 
   * @param request - CreateAgAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgAccountResponse
   */
  async createAgAccountWithOptions(request: $_model.CreateAgAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountAttr)) {
      query["AccountAttr"] = request.accountAttr;
    }

    if (!$dara.isNull(request.cityName)) {
      query["CityName"] = request.cityName;
    }

    if (!$dara.isNull(request.enterpriseName)) {
      query["EnterpriseName"] = request.enterpriseName;
    }

    if (!$dara.isNull(request.firstName)) {
      query["FirstName"] = request.firstName;
    }

    if (!$dara.isNull(request.lastName)) {
      query["LastName"] = request.lastName;
    }

    if (!$dara.isNull(request.loginEmail)) {
      query["LoginEmail"] = request.loginEmail;
    }

    if (!$dara.isNull(request.nationCode)) {
      query["NationCode"] = request.nationCode;
    }

    if (!$dara.isNull(request.postcode)) {
      query["Postcode"] = request.postcode;
    }

    if (!$dara.isNull(request.provinceName)) {
      query["ProvinceName"] = request.provinceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgAccount",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgAccountResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgAccountResponse({}));
  }

  /**
   * Creates an account to establish a financial relationship.
   * 
   * @remarks
   * You can call this operation to create an account so as to establish a master-member financial relationship.
   * 
   * @param request - CreateAgAccountRequest
   * @returns CreateAgAccountResponse
   */
  async createAgAccount(request: $_model.CreateAgAccountRequest): Promise<$_model.CreateAgAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAgAccountWithOptions(request, runtime);
  }

  /**
   * Creates a cost center. You can create multiple cost centers at a time.
   * 
   * @param request - CreateCostUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCostUnitResponse
   */
  async createCostUnitWithOptions(request: $_model.CreateCostUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCostUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.unitEntityList)) {
      query["UnitEntityList"] = request.unitEntityList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCostUnit",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCostUnitResponse>(await this.callApi(params, req, runtime), new $_model.CreateCostUnitResponse({}));
  }

  /**
   * Creates a cost center. You can create multiple cost centers at a time.
   * 
   * @param request - CreateCostUnitRequest
   * @returns CreateCostUnitResponse
   */
  async createCostUnit(request: $_model.CreateCostUnitRequest): Promise<$_model.CreateCostUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCostUnitWithOptions(request, runtime);
  }

  /**
   * Creates an instance. If you call this operation, an order for a new instance is created and the order is automatically paid for. You cannot create Elastic Compute Service (ECS) instances or ApsaraDB RDS instances by calling the operation.
   * 
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.logistics)) {
      query["Logistics"] = request.logistics;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parameter)) {
      query["Parameter"] = request.parameter;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.renewPeriod)) {
      query["RenewPeriod"] = request.renewPeriod;
    }

    if (!$dara.isNull(request.renewalStatus)) {
      query["RenewalStatus"] = request.renewalStatus;
    }

    if (!$dara.isNull(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * Creates an instance. If you call this operation, an order for a new instance is created and the order is automatically paid for. You cannot create Elastic Compute Service (ECS) instances or ApsaraDB RDS instances by calling the operation.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * Indicates whether the call is successful. A value of true indicates that the call is successful. A value of false indicates that the call failed.
   * 
   * @param request - CreateResellerUserQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResellerUserQuotaResponse
   */
  async createResellerUserQuotaWithOptions(request: $_model.CreateResellerUserQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResellerUserQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.currency)) {
      query["Currency"] = request.currency;
    }

    if (!$dara.isNull(request.outBizId)) {
      query["OutBizId"] = request.outBizId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResellerUserQuota",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResellerUserQuotaResponse>(await this.callApi(params, req, runtime), new $_model.CreateResellerUserQuotaResponse({}));
  }

  /**
   * Indicates whether the call is successful. A value of true indicates that the call is successful. A value of false indicates that the call failed.
   * 
   * @param request - CreateResellerUserQuotaRequest
   * @returns CreateResellerUserQuotaResponse
   */
  async createResellerUserQuota(request: $_model.CreateResellerUserQuotaRequest): Promise<$_model.CreateResellerUserQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResellerUserQuotaWithOptions(request, runtime);
  }

  /**
   * Creates a resource plan.
   * 
   * @param request - CreateResourcePackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourcePackageResponse
   */
  async createResourcePackageWithOptions(request: $_model.CreateResourcePackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourcePackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.effectiveDate)) {
      query["EffectiveDate"] = request.effectiveDate;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.specification)) {
      query["Specification"] = request.specification;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourcePackage",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourcePackageResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourcePackageResponse({}));
  }

  /**
   * Creates a resource plan.
   * 
   * @param request - CreateResourcePackageRequest
   * @returns CreateResourcePackageResponse
   */
  async createResourcePackage(request: $_model.CreateResourcePackageRequest): Promise<$_model.CreateResourcePackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourcePackageWithOptions(request, runtime);
  }

  /**
   * Creates a savings plan. After you call this operation, a savings plan is purchased and paid for.
   * 
   * @param tmpReq - CreateSavingsPlansInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSavingsPlansInstanceResponse
   */
  async createSavingsPlansInstanceWithOptions(tmpReq: $_model.CreateSavingsPlansInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSavingsPlansInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSavingsPlansInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extendMap)) {
      request.extendMapShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extendMap, "ExtendMap", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.effectiveDate)) {
      query["EffectiveDate"] = request.effectiveDate;
    }

    if (!$dara.isNull(request.extendMapShrink)) {
      query["ExtendMap"] = request.extendMapShrink;
    }

    if (!$dara.isNull(request.payMode)) {
      query["PayMode"] = request.payMode;
    }

    if (!$dara.isNull(request.poolValue)) {
      query["PoolValue"] = request.poolValue;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!$dara.isNull(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSavingsPlansInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSavingsPlansInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateSavingsPlansInstanceResponse({}));
  }

  /**
   * Creates a savings plan. After you call this operation, a savings plan is purchased and paid for.
   * 
   * @param request - CreateSavingsPlansInstanceRequest
   * @returns CreateSavingsPlansInstanceResponse
   */
  async createSavingsPlansInstance(request: $_model.CreateSavingsPlansInstanceRequest): Promise<$_model.CreateSavingsPlansInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSavingsPlansInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a cost center.
   * 
   * @param request - DeleteCostUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCostUnitResponse
   */
  async deleteCostUnitWithOptions(request: $_model.DeleteCostUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCostUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerUid)) {
      query["OwnerUid"] = request.ownerUid;
    }

    if (!$dara.isNull(request.unitId)) {
      query["UnitId"] = request.unitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCostUnit",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCostUnitResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCostUnitResponse({}));
  }

  /**
   * Deletes a cost center.
   * 
   * @param request - DeleteCostUnitRequest
   * @returns DeleteCostUnitResponse
   */
  async deleteCostUnit(request: $_model.DeleteCostUnitRequest): Promise<$_model.DeleteCostUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCostUnitWithOptions(request, runtime);
  }

  /**
   * Query the summary information of the user "Cost Management-Budget".
   * 
   * @remarks
   * This operation is in beta testing and is only available for specific users in the whitelist. Excessive calls may result in performance issues. For example, the response times out.
   * 
   * @param request - DescribeCostBudgetsSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCostBudgetsSummaryResponse
   */
  async describeCostBudgetsSummaryWithOptions(request: $_model.DescribeCostBudgetsSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCostBudgetsSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.budgetName)) {
      query["BudgetName"] = request.budgetName;
    }

    if (!$dara.isNull(request.budgetStatus)) {
      query["BudgetStatus"] = request.budgetStatus;
    }

    if (!$dara.isNull(request.budgetType)) {
      query["BudgetType"] = request.budgetType;
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
      action: "DescribeCostBudgetsSummary",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCostBudgetsSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCostBudgetsSummaryResponse({}));
  }

  /**
   * Query the summary information of the user "Cost Management-Budget".
   * 
   * @remarks
   * This operation is in beta testing and is only available for specific users in the whitelist. Excessive calls may result in performance issues. For example, the response times out.
   * 
   * @param request - DescribeCostBudgetsSummaryRequest
   * @returns DescribeCostBudgetsSummaryResponse
   */
  async describeCostBudgetsSummary(request: $_model.DescribeCostBudgetsSummaryRequest): Promise<$_model.DescribeCostBudgetsSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCostBudgetsSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the monthly allocated costs of instances by allocation month.
   * 
   * @remarks
   * You can view and export the allocated costs of the current month after 10:00 on the fourth day of the next month. The allocated costs of a single allocation month may involve orders or bills in different billing cycles. If a historical allocated amount is incorrect, the historical allocated costs need to be adjusted. As a result, the allocated costs displayed for a single allocation month may be different at different time points.
   * 
   * @param request - DescribeInstanceAmortizedCostByAmortizationPeriodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAmortizedCostByAmortizationPeriodResponse
   */
  async describeInstanceAmortizedCostByAmortizationPeriodWithOptions(request: $_model.DescribeInstanceAmortizedCostByAmortizationPeriodRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAmortizedCostByAmortizationPeriodResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billOwnerIdList)) {
      body["BillOwnerIdList"] = request.billOwnerIdList;
    }

    if (!$dara.isNull(request.billUserIdList)) {
      body["BillUserIdList"] = request.billUserIdList;
    }

    if (!$dara.isNull(request.billingCycle)) {
      body["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.consumePeriodFilter)) {
      body["ConsumePeriodFilter"] = request.consumePeriodFilter;
    }

    if (!$dara.isNull(request.costUnitCode)) {
      body["CostUnitCode"] = request.costUnitCode;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      body["InstanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productDetail)) {
      body["ProductDetail"] = request.productDetail;
    }

    if (!$dara.isNull(request.subscriptionType)) {
      body["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceAmortizedCostByAmortizationPeriod",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceAmortizedCostByAmortizationPeriodResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceAmortizedCostByAmortizationPeriodResponse({}));
  }

  /**
   * Queries the monthly allocated costs of instances by allocation month.
   * 
   * @remarks
   * You can view and export the allocated costs of the current month after 10:00 on the fourth day of the next month. The allocated costs of a single allocation month may involve orders or bills in different billing cycles. If a historical allocated amount is incorrect, the historical allocated costs need to be adjusted. As a result, the allocated costs displayed for a single allocation month may be different at different time points.
   * 
   * @param request - DescribeInstanceAmortizedCostByAmortizationPeriodRequest
   * @returns DescribeInstanceAmortizedCostByAmortizationPeriodResponse
   */
  async describeInstanceAmortizedCostByAmortizationPeriod(request: $_model.DescribeInstanceAmortizedCostByAmortizationPeriodRequest): Promise<$_model.DescribeInstanceAmortizedCostByAmortizationPeriodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAmortizedCostByAmortizationPeriodWithOptions(request, runtime);
  }

  /**
   * 实例摊销日摊销成本
   * 
   * @param request - DescribeInstanceAmortizedCostByAmortizationPeriodDateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse
   */
  async describeInstanceAmortizedCostByAmortizationPeriodDateWithOptions(request: $_model.DescribeInstanceAmortizedCostByAmortizationPeriodDateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.amortizationDateEnd)) {
      body["AmortizationDateEnd"] = request.amortizationDateEnd;
    }

    if (!$dara.isNull(request.amortizationDateStart)) {
      body["AmortizationDateStart"] = request.amortizationDateStart;
    }

    if (!$dara.isNull(request.billOwnerIdList)) {
      body["BillOwnerIdList"] = request.billOwnerIdList;
    }

    if (!$dara.isNull(request.billUserIdList)) {
      body["BillUserIdList"] = request.billUserIdList;
    }

    if (!$dara.isNull(request.billingCycle)) {
      body["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.costUnitCode)) {
      body["CostUnitCode"] = request.costUnitCode;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      body["InstanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productDetail)) {
      body["ProductDetail"] = request.productDetail;
    }

    if (!$dara.isNull(request.subscriptionType)) {
      body["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceAmortizedCostByAmortizationPeriodDate",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse({}));
  }

  /**
   * 实例摊销日摊销成本
   * 
   * @param request - DescribeInstanceAmortizedCostByAmortizationPeriodDateRequest
   * @returns DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse
   */
  async describeInstanceAmortizedCostByAmortizationPeriodDate(request: $_model.DescribeInstanceAmortizedCostByAmortizationPeriodDateRequest): Promise<$_model.DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAmortizedCostByAmortizationPeriodDateWithOptions(request, runtime);
  }

  /**
   * 实例账期月摊销成本
   * 
   * @param request - DescribeInstanceAmortizedCostByConsumePeriodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAmortizedCostByConsumePeriodResponse
   */
  async describeInstanceAmortizedCostByConsumePeriodWithOptions(request: $_model.DescribeInstanceAmortizedCostByConsumePeriodRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAmortizedCostByConsumePeriodResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.amortizationPeriodFilter)) {
      body["AmortizationPeriodFilter"] = request.amortizationPeriodFilter;
    }

    if (!$dara.isNull(request.billOwnerIdList)) {
      body["BillOwnerIdList"] = request.billOwnerIdList;
    }

    if (!$dara.isNull(request.billUserIdList)) {
      body["BillUserIdList"] = request.billUserIdList;
    }

    if (!$dara.isNull(request.billingCycle)) {
      body["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.costUnitCode)) {
      body["CostUnitCode"] = request.costUnitCode;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      body["InstanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productDetail)) {
      body["ProductDetail"] = request.productDetail;
    }

    if (!$dara.isNull(request.subscriptionType)) {
      body["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceAmortizedCostByConsumePeriod",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceAmortizedCostByConsumePeriodResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceAmortizedCostByConsumePeriodResponse({}));
  }

  /**
   * 实例账期月摊销成本
   * 
   * @param request - DescribeInstanceAmortizedCostByConsumePeriodRequest
   * @returns DescribeInstanceAmortizedCostByConsumePeriodResponse
   */
  async describeInstanceAmortizedCostByConsumePeriod(request: $_model.DescribeInstanceAmortizedCostByConsumePeriodRequest): Promise<$_model.DescribeInstanceAmortizedCostByConsumePeriodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAmortizedCostByConsumePeriodWithOptions(request, runtime);
  }

  /**
   * Queries the billing information about instances or billable items in a billing cycle.
   * 
   * @remarks
   *   Instance bills are generated after the total bill is split. In most cases, the instance bills do not include data generated on the last day of the specified billing cycle.
   * *   The instance information may change during the billing cycle. The instance configurations and types in monthly bills are subject to the point in time when you query bills. For more information, see the corresponding bill details.
   * *   You can query data generated after June 2020 for Cloud Communications services. You can query data generated after November 2020 for Alibaba Cloud Domains.
   * 
   * @param request - DescribeInstanceBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceBillResponse
   */
  async describeInstanceBillWithOptions(request: $_model.DescribeInstanceBillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceBillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!$dara.isNull(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.billingDate)) {
      query["BillingDate"] = request.billingDate;
    }

    if (!$dara.isNull(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.instanceID)) {
      query["InstanceID"] = request.instanceID;
    }

    if (!$dara.isNull(request.isBillingItem)) {
      query["IsBillingItem"] = request.isBillingItem;
    }

    if (!$dara.isNull(request.isHideZeroCharge)) {
      query["IsHideZeroCharge"] = request.isHideZeroCharge;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipCode)) {
      query["PipCode"] = request.pipCode;
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
      action: "DescribeInstanceBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceBillResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceBillResponse({}));
  }

  /**
   * Queries the billing information about instances or billable items in a billing cycle.
   * 
   * @remarks
   *   Instance bills are generated after the total bill is split. In most cases, the instance bills do not include data generated on the last day of the specified billing cycle.
   * *   The instance information may change during the billing cycle. The instance configurations and types in monthly bills are subject to the point in time when you query bills. For more information, see the corresponding bill details.
   * *   You can query data generated after June 2020 for Cloud Communications services. You can query data generated after November 2020 for Alibaba Cloud Domains.
   * 
   * @param request - DescribeInstanceBillRequest
   * @returns DescribeInstanceBillResponse
   */
  async describeInstanceBill(request: $_model.DescribeInstanceBillRequest): Promise<$_model.DescribeInstanceBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceBillWithOptions(request, runtime);
  }

  /**
   * 实例摊销日抵扣还原摊销成本
   * 
   * @param request - DescribeInstanceDeductAmortizedCostByAmortizationPeriodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponse
   */
  async describeInstanceDeductAmortizedCostByAmortizationPeriodWithOptions(request: $_model.DescribeInstanceDeductAmortizedCostByAmortizationPeriodRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billOwnerIdList)) {
      body["BillOwnerIdList"] = request.billOwnerIdList;
    }

    if (!$dara.isNull(request.billUserIdList)) {
      body["BillUserIdList"] = request.billUserIdList;
    }

    if (!$dara.isNull(request.billingCycle)) {
      body["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.costUnitCode)) {
      body["CostUnitCode"] = request.costUnitCode;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      body["InstanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productDetail)) {
      body["ProductDetail"] = request.productDetail;
    }

    if (!$dara.isNull(request.subscriptionType)) {
      body["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceDeductAmortizedCostByAmortizationPeriod",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponse({}));
  }

  /**
   * 实例摊销日抵扣还原摊销成本
   * 
   * @param request - DescribeInstanceDeductAmortizedCostByAmortizationPeriodRequest
   * @returns DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponse
   */
  async describeInstanceDeductAmortizedCostByAmortizationPeriod(request: $_model.DescribeInstanceDeductAmortizedCostByAmortizationPeriodRequest): Promise<$_model.DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceDeductAmortizedCostByAmortizationPeriodWithOptions(request, runtime);
  }

  /**
   * Queries the pricing information about an Alibaba Cloud service.
   * 
   * @param request - DescribePricingModuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePricingModuleResponse
   */
  async describePricingModuleWithOptions(request: $_model.DescribePricingModuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePricingModuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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
      action: "DescribePricingModule",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePricingModuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribePricingModuleResponse({}));
  }

  /**
   * Queries the pricing information about an Alibaba Cloud service.
   * 
   * @param request - DescribePricingModuleRequest
   * @returns DescribePricingModuleResponse
   */
  async describePricingModule(request: $_model.DescribePricingModuleRequest): Promise<$_model.DescribePricingModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePricingModuleWithOptions(request, runtime);
  }

  /**
   * Queries the allocated costs of services by allocation month.
   * 
   * @remarks
   * You can view and export the allocated costs of the current month after 10:00 on the fourth day of the next month. The allocated costs of a single allocation month may involve orders or bills in different billing cycles. If a historical allocated amount is incorrect, the historical allocated costs need to be adjusted. As a result, the allocated costs displayed for a single allocation month may be different at different time points.
   * 
   * @param request - DescribeProductAmortizedCostByAmortizationPeriodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProductAmortizedCostByAmortizationPeriodResponse
   */
  async describeProductAmortizedCostByAmortizationPeriodWithOptions(request: $_model.DescribeProductAmortizedCostByAmortizationPeriodRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProductAmortizedCostByAmortizationPeriodResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billOwnerIdList)) {
      body["BillOwnerIdList"] = request.billOwnerIdList;
    }

    if (!$dara.isNull(request.billUserIdList)) {
      body["BillUserIdList"] = request.billUserIdList;
    }

    if (!$dara.isNull(request.billingCycle)) {
      body["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.consumePeriodFilter)) {
      body["ConsumePeriodFilter"] = request.consumePeriodFilter;
    }

    if (!$dara.isNull(request.costUnitCode)) {
      body["CostUnitCode"] = request.costUnitCode;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productDetail)) {
      body["ProductDetail"] = request.productDetail;
    }

    if (!$dara.isNull(request.subscriptionType)) {
      body["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProductAmortizedCostByAmortizationPeriod",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProductAmortizedCostByAmortizationPeriodResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProductAmortizedCostByAmortizationPeriodResponse({}));
  }

  /**
   * Queries the allocated costs of services by allocation month.
   * 
   * @remarks
   * You can view and export the allocated costs of the current month after 10:00 on the fourth day of the next month. The allocated costs of a single allocation month may involve orders or bills in different billing cycles. If a historical allocated amount is incorrect, the historical allocated costs need to be adjusted. As a result, the allocated costs displayed for a single allocation month may be different at different time points.
   * 
   * @param request - DescribeProductAmortizedCostByAmortizationPeriodRequest
   * @returns DescribeProductAmortizedCostByAmortizationPeriodResponse
   */
  async describeProductAmortizedCostByAmortizationPeriod(request: $_model.DescribeProductAmortizedCostByAmortizationPeriodRequest): Promise<$_model.DescribeProductAmortizedCostByAmortizationPeriodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProductAmortizedCostByAmortizationPeriodWithOptions(request, runtime);
  }

  /**
   * 产品账期月摊销成本
   * 
   * @param request - DescribeProductAmortizedCostByConsumePeriodRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProductAmortizedCostByConsumePeriodResponse
   */
  async describeProductAmortizedCostByConsumePeriodWithOptions(request: $_model.DescribeProductAmortizedCostByConsumePeriodRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProductAmortizedCostByConsumePeriodResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.amortizationPeriodFilter)) {
      body["AmortizationPeriodFilter"] = request.amortizationPeriodFilter;
    }

    if (!$dara.isNull(request.billOwnerIdList)) {
      body["BillOwnerIdList"] = request.billOwnerIdList;
    }

    if (!$dara.isNull(request.billUserIdList)) {
      body["BillUserIdList"] = request.billUserIdList;
    }

    if (!$dara.isNull(request.billingCycle)) {
      body["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.costUnitCode)) {
      body["CostUnitCode"] = request.costUnitCode;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productDetail)) {
      body["ProductDetail"] = request.productDetail;
    }

    if (!$dara.isNull(request.subscriptionType)) {
      body["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProductAmortizedCostByConsumePeriod",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProductAmortizedCostByConsumePeriodResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProductAmortizedCostByConsumePeriodResponse({}));
  }

  /**
   * 产品账期月摊销成本
   * 
   * @param request - DescribeProductAmortizedCostByConsumePeriodRequest
   * @returns DescribeProductAmortizedCostByConsumePeriodResponse
   */
  async describeProductAmortizedCostByConsumePeriod(request: $_model.DescribeProductAmortizedCostByConsumePeriodRequest): Promise<$_model.DescribeProductAmortizedCostByConsumePeriodResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProductAmortizedCostByConsumePeriodWithOptions(request, runtime);
  }

  /**
   * Queries the coverage details of reserved instances (RIs) or storage capacity units (SCUs).
   * 
   * @remarks
   * 1\\. The queried coverage details are the same as those displayed in the table on the Coverage tab of the Manage Reserved Instances page in the Billing Management console.
   * 2\\. You can call this operation to query the coverage details of RIs or SCUs.
   * 3\\. You can call this operation to query coverage details at an hourly, daily, or monthly granularity.
   * 
   * @param request - DescribeResourceCoverageDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceCoverageDetailResponse
   */
  async describeResourceCoverageDetailWithOptions(request: $_model.DescribeResourceCoverageDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceCoverageDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!$dara.isNull(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceCoverageDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceCoverageDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceCoverageDetailResponse({}));
  }

  /**
   * Queries the coverage details of reserved instances (RIs) or storage capacity units (SCUs).
   * 
   * @remarks
   * 1\\. The queried coverage details are the same as those displayed in the table on the Coverage tab of the Manage Reserved Instances page in the Billing Management console.
   * 2\\. You can call this operation to query the coverage details of RIs or SCUs.
   * 3\\. You can call this operation to query coverage details at an hourly, daily, or monthly granularity.
   * 
   * @param request - DescribeResourceCoverageDetailRequest
   * @returns DescribeResourceCoverageDetailResponse
   */
  async describeResourceCoverageDetail(request: $_model.DescribeResourceCoverageDetailRequest): Promise<$_model.DescribeResourceCoverageDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceCoverageDetailWithOptions(request, runtime);
  }

  /**
   * Queries the total coverage data of reserved instances (RIs) or storage capacity units (SCUs).
   * 
   * @remarks
   * The queried total coverage data is the same as the aggregated data displayed on the Coverage tab of the Manage Reserved Instances page in the Billing Management console.
   * You can call this operation to query the total coverage data of RIs or SCUs.
   * 
   * @param request - DescribeResourceCoverageTotalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceCoverageTotalResponse
   */
  async describeResourceCoverageTotalWithOptions(request: $_model.DescribeResourceCoverageTotalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceCoverageTotalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!$dara.isNull(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!$dara.isNull(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceCoverageTotal",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceCoverageTotalResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceCoverageTotalResponse({}));
  }

  /**
   * Queries the total coverage data of reserved instances (RIs) or storage capacity units (SCUs).
   * 
   * @remarks
   * The queried total coverage data is the same as the aggregated data displayed on the Coverage tab of the Manage Reserved Instances page in the Billing Management console.
   * You can call this operation to query the total coverage data of RIs or SCUs.
   * 
   * @param request - DescribeResourceCoverageTotalRequest
   * @returns DescribeResourceCoverageTotalResponse
   */
  async describeResourceCoverageTotal(request: $_model.DescribeResourceCoverageTotalRequest): Promise<$_model.DescribeResourceCoverageTotalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceCoverageTotalWithOptions(request, runtime);
  }

  /**
   * Queries the information about resource plans of an Alibaba Cloud service.
   * 
   * @param request - DescribeResourcePackageProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourcePackageProductResponse
   */
  async describeResourcePackageProductWithOptions(request: $_model.DescribeResourcePackageProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourcePackageProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourcePackageProduct",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourcePackageProductResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourcePackageProductResponse({}));
  }

  /**
   * Queries the information about resource plans of an Alibaba Cloud service.
   * 
   * @param request - DescribeResourcePackageProductRequest
   * @returns DescribeResourcePackageProductResponse
   */
  async describeResourcePackageProduct(request: $_model.DescribeResourcePackageProductRequest): Promise<$_model.DescribeResourcePackageProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourcePackageProductWithOptions(request, runtime);
  }

  /**
   * Queries the usage details of reserved instances (RIs) or storage capacity units (SCUs).
   * 
   * @param request - DescribeResourceUsageDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceUsageDetailResponse
   */
  async describeResourceUsageDetailWithOptions(request: $_model.DescribeResourceUsageDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceUsageDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!$dara.isNull(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceUsageDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceUsageDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceUsageDetailResponse({}));
  }

  /**
   * Queries the usage details of reserved instances (RIs) or storage capacity units (SCUs).
   * 
   * @param request - DescribeResourceUsageDetailRequest
   * @returns DescribeResourceUsageDetailResponse
   */
  async describeResourceUsageDetail(request: $_model.DescribeResourceUsageDetailRequest): Promise<$_model.DescribeResourceUsageDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceUsageDetailWithOptions(request, runtime);
  }

  /**
   * Queries the total usage data of reserved instances or storage capacity units (SCUs).
   * 
   * @param request - DescribeResourceUsageTotalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceUsageTotalResponse
   */
  async describeResourceUsageTotalWithOptions(request: $_model.DescribeResourceUsageTotalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceUsageTotalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!$dara.isNull(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!$dara.isNull(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceUsageTotal",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceUsageTotalResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceUsageTotalResponse({}));
  }

  /**
   * Queries the total usage data of reserved instances or storage capacity units (SCUs).
   * 
   * @param request - DescribeResourceUsageTotalRequest
   * @returns DescribeResourceUsageTotalResponse
   */
  async describeResourceUsageTotal(request: $_model.DescribeResourceUsageTotalRequest): Promise<$_model.DescribeResourceUsageTotalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceUsageTotalWithOptions(request, runtime);
  }

  /**
   * Queries the coverage details of savings plans.
   * 
   * @param tmpReq - DescribeSavingsPlansCoverageDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSavingsPlansCoverageDetailResponse
   */
  async describeSavingsPlansCoverageDetailWithOptions(tmpReq: $_model.DescribeSavingsPlansCoverageDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSavingsPlansCoverageDetailResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeSavingsPlansCoverageDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterParam)) {
      request.filterParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterParam, "FilterParam", "json");
    }

    let query = { };
    if (!$dara.isNull(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!$dara.isNull(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!$dara.isNull(request.filterParamShrink)) {
      query["FilterParam"] = request.filterParamShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!$dara.isNull(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSavingsPlansCoverageDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSavingsPlansCoverageDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSavingsPlansCoverageDetailResponse({}));
  }

  /**
   * Queries the coverage details of savings plans.
   * 
   * @param request - DescribeSavingsPlansCoverageDetailRequest
   * @returns DescribeSavingsPlansCoverageDetailResponse
   */
  async describeSavingsPlansCoverageDetail(request: $_model.DescribeSavingsPlansCoverageDetailRequest): Promise<$_model.DescribeSavingsPlansCoverageDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSavingsPlansCoverageDetailWithOptions(request, runtime);
  }

  /**
   * Queries the coverage summary of savings plans.
   * 
   * @param tmpReq - DescribeSavingsPlansCoverageTotalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSavingsPlansCoverageTotalResponse
   */
  async describeSavingsPlansCoverageTotalWithOptions(tmpReq: $_model.DescribeSavingsPlansCoverageTotalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSavingsPlansCoverageTotalResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeSavingsPlansCoverageTotalShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterParam)) {
      request.filterParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterParam, "FilterParam", "json");
    }

    let query = { };
    if (!$dara.isNull(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!$dara.isNull(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!$dara.isNull(request.filterParamShrink)) {
      query["FilterParam"] = request.filterParamShrink;
    }

    if (!$dara.isNull(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!$dara.isNull(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSavingsPlansCoverageTotal",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSavingsPlansCoverageTotalResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSavingsPlansCoverageTotalResponse({}));
  }

  /**
   * Queries the coverage summary of savings plans.
   * 
   * @param request - DescribeSavingsPlansCoverageTotalRequest
   * @returns DescribeSavingsPlansCoverageTotalResponse
   */
  async describeSavingsPlansCoverageTotal(request: $_model.DescribeSavingsPlansCoverageTotalRequest): Promise<$_model.DescribeSavingsPlansCoverageTotalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSavingsPlansCoverageTotalWithOptions(request, runtime);
  }

  /**
   * Queries the usage details of savings plans.
   * 
   * @param tmpReq - DescribeSavingsPlansUsageDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSavingsPlansUsageDetailResponse
   */
  async describeSavingsPlansUsageDetailWithOptions(tmpReq: $_model.DescribeSavingsPlansUsageDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSavingsPlansUsageDetailResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeSavingsPlansUsageDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterParam)) {
      request.filterParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterParam, "FilterParam", "json");
    }

    let query = { };
    if (!$dara.isNull(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!$dara.isNull(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!$dara.isNull(request.filterParamShrink)) {
      query["FilterParam"] = request.filterParamShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!$dara.isNull(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSavingsPlansUsageDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSavingsPlansUsageDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSavingsPlansUsageDetailResponse({}));
  }

  /**
   * Queries the usage details of savings plans.
   * 
   * @param request - DescribeSavingsPlansUsageDetailRequest
   * @returns DescribeSavingsPlansUsageDetailResponse
   */
  async describeSavingsPlansUsageDetail(request: $_model.DescribeSavingsPlansUsageDetailRequest): Promise<$_model.DescribeSavingsPlansUsageDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSavingsPlansUsageDetailWithOptions(request, runtime);
  }

  /**
   * Queries the usage summary of savings plans.
   * 
   * @param tmpReq - DescribeSavingsPlansUsageTotalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSavingsPlansUsageTotalResponse
   */
  async describeSavingsPlansUsageTotalWithOptions(tmpReq: $_model.DescribeSavingsPlansUsageTotalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSavingsPlansUsageTotalResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeSavingsPlansUsageTotalShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterParam)) {
      request.filterParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterParam, "FilterParam", "json");
    }

    let query = { };
    if (!$dara.isNull(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!$dara.isNull(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!$dara.isNull(request.filterParamShrink)) {
      query["FilterParam"] = request.filterParamShrink;
    }

    if (!$dara.isNull(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!$dara.isNull(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSavingsPlansUsageTotal",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSavingsPlansUsageTotalResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSavingsPlansUsageTotalResponse({}));
  }

  /**
   * Queries the usage summary of savings plans.
   * 
   * @param request - DescribeSavingsPlansUsageTotalRequest
   * @returns DescribeSavingsPlansUsageTotalResponse
   */
  async describeSavingsPlansUsageTotal(request: $_model.DescribeSavingsPlansUsageTotalRequest): Promise<$_model.DescribeSavingsPlansUsageTotalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSavingsPlansUsageTotalWithOptions(request, runtime);
  }

  /**
   * Queries split bills.
   * 
   * @remarks
   *   The data that you query by calling this operation is the same as the data that is queried by billing cycles in the Split Bill module of Cost Allocation.
   * *   You can query split bills that were generated within the last 12 months by calling this operation.
   * *   You can query split bills only after you enable the [Split Bill](https://usercenter2-intl.aliyun.com/finance/split-bill) service in the User Center console.
   * 
   * @param request - DescribeSplitItemBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSplitItemBillResponse
   */
  async describeSplitItemBillWithOptions(request: $_model.DescribeSplitItemBillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSplitItemBillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!$dara.isNull(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.billingDate)) {
      query["BillingDate"] = request.billingDate;
    }

    if (!$dara.isNull(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.instanceID)) {
      query["InstanceID"] = request.instanceID;
    }

    if (!$dara.isNull(request.isHideZeroCharge)) {
      query["IsHideZeroCharge"] = request.isHideZeroCharge;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipCode)) {
      query["PipCode"] = request.pipCode;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.splitItemID)) {
      query["SplitItemID"] = request.splitItemID;
    }

    if (!$dara.isNull(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    if (!$dara.isNull(request.tagFilter)) {
      query["TagFilter"] = request.tagFilter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSplitItemBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSplitItemBillResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSplitItemBillResponse({}));
  }

  /**
   * Queries split bills.
   * 
   * @remarks
   *   The data that you query by calling this operation is the same as the data that is queried by billing cycles in the Split Bill module of Cost Allocation.
   * *   You can query split bills that were generated within the last 12 months by calling this operation.
   * *   You can query split bills only after you enable the [Split Bill](https://usercenter2-intl.aliyun.com/finance/split-bill) service in the User Center console.
   * 
   * @param request - DescribeSplitItemBillRequest
   * @returns DescribeSplitItemBillResponse
   */
  async describeSplitItemBill(request: $_model.DescribeSplitItemBillRequest): Promise<$_model.DescribeSplitItemBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSplitItemBillWithOptions(request, runtime);
  }

  /**
   * Queries the details of a financial relationship.
   * 
   * @param request - GetAccountRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountRelationResponse
   */
  async getAccountRelationWithOptions(request: $_model.GetAccountRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountRelationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountRelation",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccountRelationResponse>(await this.callApi(params, req, runtime), new $_model.GetAccountRelationResponse({}));
  }

  /**
   * Queries the details of a financial relationship.
   * 
   * @param request - GetAccountRelationRequest
   * @returns GetAccountRelationResponse
   */
  async getAccountRelation(request: $_model.GetAccountRelationRequest): Promise<$_model.GetAccountRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountRelationWithOptions(request, runtime);
  }

  /**
   * Queries the account information about a customer of a virtual network operator (VNO).
   * 
   * @param request - GetCustomerAccountInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomerAccountInfoResponse
   */
  async getCustomerAccountInfoWithOptions(request: $_model.GetCustomerAccountInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomerAccountInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomerAccountInfo",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomerAccountInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomerAccountInfoResponse({}));
  }

  /**
   * Queries the account information about a customer of a virtual network operator (VNO).
   * 
   * @param request - GetCustomerAccountInfoRequest
   * @returns GetCustomerAccountInfoResponse
   */
  async getCustomerAccountInfo(request: $_model.GetCustomerAccountInfoRequest): Promise<$_model.GetCustomerAccountInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomerAccountInfoWithOptions(request, runtime);
  }

  /**
   * Queries the IDs of customers of a virtual network operator (VNO).
   * 
   * @remarks
   * The system queries the IDs of customers of a VNO based on the AccessKey pair used in the request.
   * 
   * @param request - GetCustomerListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomerListResponse
   */
  async getCustomerListWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomerListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomerList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomerListResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomerListResponse({}));
  }

  /**
   * Queries the IDs of customers of a virtual network operator (VNO).
   * 
   * @remarks
   * The system queries the IDs of customers of a VNO based on the AccessKey pair used in the request.
   * @returns GetCustomerListResponse
   */
  async getCustomerList(): Promise<$_model.GetCustomerListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomerListWithOptions(runtime);
  }

  /**
   * Queries the details of an order that belongs to your Alibaba Cloud account or distributors.
   * 
   * @param request - GetOrderDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrderDetailResponse
   */
  async getOrderDetailWithOptions(request: $_model.GetOrderDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrderDetailResponse> {
    request.validate();
    let query = { };
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
      version: "2017-12-14",
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
   * Queries the details of an order that belongs to your Alibaba Cloud account or distributors.
   * 
   * @param request - GetOrderDetailRequest
   * @returns GetOrderDetailResponse
   */
  async getOrderDetail(request: $_model.GetOrderDetailRequest): Promise<$_model.GetOrderDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOrderDetailWithOptions(request, runtime);
  }

  /**
   * Queries the pay-as-you-go price of an Alibaba Cloud service.
   * 
   * @remarks
   * ### Usage notes
   * 1.  Call the QueryProductList operation to obtain the code of the service. For more information, see [QueryProductList](https://help.aliyun.com/document_detail/95984.html).
   * 2.  Call the DescribePricingModule operation to obtain the configuration parameters of the service. For more information, see [DescribePricingModule](https://help.aliyun.com/document_detail/96469.html).
   * 3.  Call the GetPayAsYouGoPrice operation to obtain the pay-as-you-go price of the service based on the returned configuration parameters.
   * 
   * @param request - GetPayAsYouGoPriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPayAsYouGoPriceResponse
   */
  async getPayAsYouGoPriceWithOptions(request: $_model.GetPayAsYouGoPriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPayAsYouGoPriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.moduleList)) {
      query["ModuleList"] = request.moduleList;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPayAsYouGoPrice",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPayAsYouGoPriceResponse>(await this.callApi(params, req, runtime), new $_model.GetPayAsYouGoPriceResponse({}));
  }

  /**
   * Queries the pay-as-you-go price of an Alibaba Cloud service.
   * 
   * @remarks
   * ### Usage notes
   * 1.  Call the QueryProductList operation to obtain the code of the service. For more information, see [QueryProductList](https://help.aliyun.com/document_detail/95984.html).
   * 2.  Call the DescribePricingModule operation to obtain the configuration parameters of the service. For more information, see [DescribePricingModule](https://help.aliyun.com/document_detail/96469.html).
   * 3.  Call the GetPayAsYouGoPrice operation to obtain the pay-as-you-go price of the service based on the returned configuration parameters.
   * 
   * @param request - GetPayAsYouGoPriceRequest
   * @returns GetPayAsYouGoPriceResponse
   */
  async getPayAsYouGoPrice(request: $_model.GetPayAsYouGoPriceRequest): Promise<$_model.GetPayAsYouGoPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPayAsYouGoPriceWithOptions(request, runtime);
  }

  /**
   * Queries the price of a resource plan.
   * 
   * @param request - GetResourcePackagePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourcePackagePriceResponse
   */
  async getResourcePackagePriceWithOptions(request: $_model.GetResourcePackagePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourcePackagePriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.effectiveDate)) {
      query["EffectiveDate"] = request.effectiveDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.specification)) {
      query["Specification"] = request.specification;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourcePackagePrice",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourcePackagePriceResponse>(await this.callApi(params, req, runtime), new $_model.GetResourcePackagePriceResponse({}));
  }

  /**
   * Queries the price of a resource plan.
   * 
   * @param request - GetResourcePackagePriceRequest
   * @returns GetResourcePackagePriceResponse
   */
  async getResourcePackagePrice(request: $_model.GetResourcePackagePriceRequest): Promise<$_model.GetResourcePackagePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourcePackagePriceWithOptions(request, runtime);
  }

  /**
   * Queries the subscription price of an Alibaba Cloud service.
   * 
   * @remarks
   * 1.  Call the QueryProductList operation to obtain the code of the service. For more information, see [QueryProductList](https://help.aliyun.com/document_detail/95984.html).
   * 2.  Call the DescribePricingModule operation to obtain the configuration parameters of the service. For more information, see [DescribePricingModule](https://help.aliyun.com/document_detail/96469.html).
   * 3.  Call the GetSubscriptionPrice operation to obtain the pricing of the service based on the returned configuration parameters.
   * 
   * @param request - GetSubscriptionPriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubscriptionPriceResponse
   */
  async getSubscriptionPriceWithOptions(request: $_model.GetSubscriptionPriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSubscriptionPriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleList)) {
      query["ModuleList"] = request.moduleList;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.servicePeriodQuantity)) {
      query["ServicePeriodQuantity"] = request.servicePeriodQuantity;
    }

    if (!$dara.isNull(request.servicePeriodUnit)) {
      query["ServicePeriodUnit"] = request.servicePeriodUnit;
    }

    if (!$dara.isNull(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubscriptionPrice",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSubscriptionPriceResponse>(await this.callApi(params, req, runtime), new $_model.GetSubscriptionPriceResponse({}));
  }

  /**
   * Queries the subscription price of an Alibaba Cloud service.
   * 
   * @remarks
   * 1.  Call the QueryProductList operation to obtain the code of the service. For more information, see [QueryProductList](https://help.aliyun.com/document_detail/95984.html).
   * 2.  Call the DescribePricingModule operation to obtain the configuration parameters of the service. For more information, see [DescribePricingModule](https://help.aliyun.com/document_detail/96469.html).
   * 3.  Call the GetSubscriptionPrice operation to obtain the pricing of the service based on the returned configuration parameters.
   * 
   * @param request - GetSubscriptionPriceRequest
   * @returns GetSubscriptionPriceResponse
   */
  async getSubscriptionPrice(request: $_model.GetSubscriptionPriceRequest): Promise<$_model.GetSubscriptionPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSubscriptionPriceWithOptions(request, runtime);
  }

  /**
   * Queries the refundable amount for an instance from which you want to unsubscribe.
   * 
   * @remarks
   * 1.  **Check the information about unsubscription and confirm the unsubscription terms and refundable amount. The resource that is unsubscribed cannot be restored.**
   * 2.  Refunds are applicable only for the actual paid amount. Vouchers used for the purchase are non-refundable.
   * 3.  For more information, see [Rules for unsubscribing from resources](https://www.alibabacloud.com/help/en/user-center/user-guide/refund-rules).
   * 
   * @param request - InquiryPriceRefundInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InquiryPriceRefundInstanceResponse
   */
  async inquiryPriceRefundInstanceWithOptions(request: $_model.InquiryPriceRefundInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InquiryPriceRefundInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InquiryPriceRefundInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InquiryPriceRefundInstanceResponse>(await this.callApi(params, req, runtime), new $_model.InquiryPriceRefundInstanceResponse({}));
  }

  /**
   * Queries the refundable amount for an instance from which you want to unsubscribe.
   * 
   * @remarks
   * 1.  **Check the information about unsubscription and confirm the unsubscription terms and refundable amount. The resource that is unsubscribed cannot be restored.**
   * 2.  Refunds are applicable only for the actual paid amount. Vouchers used for the purchase are non-refundable.
   * 3.  For more information, see [Rules for unsubscribing from resources](https://www.alibabacloud.com/help/en/user-center/user-guide/refund-rules).
   * 
   * @param request - InquiryPriceRefundInstanceRequest
   * @returns InquiryPriceRefundInstanceResponse
   */
  async inquiryPriceRefundInstance(request: $_model.InquiryPriceRefundInstanceRequest): Promise<$_model.InquiryPriceRefundInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.inquiryPriceRefundInstanceWithOptions(request, runtime);
  }

  /**
   * Adds or removes permissions granted to a member in a financial relationship.
   * 
   * @param request - ModifyAccountRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountRelationResponse
   */
  async modifyAccountRelationWithOptions(request: $_model.ModifyAccountRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.childNick)) {
      query["ChildNick"] = request.childNick;
    }

    if (!$dara.isNull(request.childUserId)) {
      query["ChildUserId"] = request.childUserId;
    }

    if (!$dara.isNull(request.parentUserId)) {
      query["ParentUserId"] = request.parentUserId;
    }

    if (!$dara.isNull(request.permissionCodes)) {
      query["PermissionCodes"] = request.permissionCodes;
    }

    if (!$dara.isNull(request.relationId)) {
      query["RelationId"] = request.relationId;
    }

    if (!$dara.isNull(request.relationOperation)) {
      query["RelationOperation"] = request.relationOperation;
    }

    if (!$dara.isNull(request.relationType)) {
      query["RelationType"] = request.relationType;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.roleCodes)) {
      query["RoleCodes"] = request.roleCodes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountRelation",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccountRelationResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccountRelationResponse({}));
  }

  /**
   * Adds or removes permissions granted to a member in a financial relationship.
   * 
   * @param request - ModifyAccountRelationRequest
   * @returns ModifyAccountRelationResponse
   */
  async modifyAccountRelation(request: $_model.ModifyAccountRelationRequest): Promise<$_model.ModifyAccountRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountRelationWithOptions(request, runtime);
  }

  /**
   * Modifies one or more cost centers.
   * 
   * @param request - ModifyCostUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCostUnitResponse
   */
  async modifyCostUnitWithOptions(request: $_model.ModifyCostUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCostUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.unitEntityList)) {
      query["UnitEntityList"] = request.unitEntityList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCostUnit",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCostUnitResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCostUnitResponse({}));
  }

  /**
   * Modifies one or more cost centers.
   * 
   * @param request - ModifyCostUnitRequest
   * @returns ModifyCostUnitResponse
   */
  async modifyCostUnit(request: $_model.ModifyCostUnitRequest): Promise<$_model.ModifyCostUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCostUnitWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an instance. When you call this operation, the system generates a modification order and automatically completes the payment. You cannot call this operation to modify the configurations of an Elastic Compute Service (ECS) instance or ApsaraDB RDS instance. To modify the configurations of an ECS or ApsaraDB RDS instance, call the dedicated operation of the corresponding service.
   * 
   * @param request - ModifyInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceResponse
   */
  async modifyInstanceWithOptions(request: $_model.ModifyInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.modifyType)) {
      query["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parameter)) {
      query["Parameter"] = request.parameter;
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
      action: "ModifyInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceResponse({}));
  }

  /**
   * Modifies the configurations of an instance. When you call this operation, the system generates a modification order and automatically completes the payment. You cannot call this operation to modify the configurations of an Elastic Compute Service (ECS) instance or ApsaraDB RDS instance. To modify the configurations of an ECS or ApsaraDB RDS instance, call the dedicated operation of the corresponding service.
   * 
   * @param request - ModifyInstanceRequest
   * @returns ModifyInstanceResponse
   */
  async modifyInstance(request: $_model.ModifyInstanceRequest): Promise<$_model.ModifyInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceWithOptions(request, runtime);
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
      version: "2017-12-14",
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
   * Queries the balance of your account.
   * 
   * @param request - QueryAccountBalanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccountBalanceResponse
   */
  async queryAccountBalanceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.QueryAccountBalanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "QueryAccountBalance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAccountBalanceResponse>(await this.callApi(params, req, runtime), new $_model.QueryAccountBalanceResponse({}));
  }

  /**
   * Queries the balance of your account.
   * @returns QueryAccountBalanceResponse
   */
  async queryAccountBalance(): Promise<$_model.QueryAccountBalanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAccountBalanceWithOptions(runtime);
  }

  /**
   * Queries the bills of your Alibaba Cloud account within a billing cycle. You can summarize the bills by resource owner.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   Account bills are summarized based on instance bills. In most cases, the account bills do not include the data generated on the last day of the specified period.
   * *   You can query the data generated in June 2020 or later for Cloud Communications services. However, the query results do not include the data of Alibaba Cloud Domains.
   * 
   * @param request - QueryAccountBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccountBillResponse
   */
  async queryAccountBillWithOptions(request: $_model.QueryAccountBillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAccountBillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!$dara.isNull(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.billingDate)) {
      query["BillingDate"] = request.billingDate;
    }

    if (!$dara.isNull(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.isGroupByProduct)) {
      query["IsGroupByProduct"] = request.isGroupByProduct;
    }

    if (!$dara.isNull(request.ownerID)) {
      query["OwnerID"] = request.ownerID;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAccountBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAccountBillResponse>(await this.callApi(params, req, runtime), new $_model.QueryAccountBillResponse({}));
  }

  /**
   * Queries the bills of your Alibaba Cloud account within a billing cycle. You can summarize the bills by resource owner.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   Account bills are summarized based on instance bills. In most cases, the account bills do not include the data generated on the last day of the specified period.
   * *   You can query the data generated in June 2020 or later for Cloud Communications services. However, the query results do not include the data of Alibaba Cloud Domains.
   * 
   * @param request - QueryAccountBillRequest
   * @returns QueryAccountBillResponse
   */
  async queryAccountBill(request: $_model.QueryAccountBillRequest): Promise<$_model.QueryAccountBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAccountBillWithOptions(request, runtime);
  }

  /**
   * Queries the details of transactions within your account.
   * 
   * @param request - QueryAccountTransactionDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccountTransactionDetailsResponse
   */
  async queryAccountTransactionDetailsWithOptions(request: $_model.QueryAccountTransactionDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAccountTransactionDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!$dara.isNull(request.createTimeStart)) {
      query["CreateTimeStart"] = request.createTimeStart;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.recordID)) {
      query["RecordID"] = request.recordID;
    }

    if (!$dara.isNull(request.transactionChannel)) {
      query["TransactionChannel"] = request.transactionChannel;
    }

    if (!$dara.isNull(request.transactionChannelSN)) {
      query["TransactionChannelSN"] = request.transactionChannelSN;
    }

    if (!$dara.isNull(request.transactionNumber)) {
      query["TransactionNumber"] = request.transactionNumber;
    }

    if (!$dara.isNull(request.transactionType)) {
      query["TransactionType"] = request.transactionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAccountTransactionDetails",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAccountTransactionDetailsResponse>(await this.callApi(params, req, runtime), new $_model.QueryAccountTransactionDetailsResponse({}));
  }

  /**
   * Queries the details of transactions within your account.
   * 
   * @param request - QueryAccountTransactionDetailsRequest
   * @returns QueryAccountTransactionDetailsResponse
   */
  async queryAccountTransactionDetails(request: $_model.QueryAccountTransactionDetailsRequest): Promise<$_model.QueryAccountTransactionDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAccountTransactionDetailsWithOptions(request, runtime);
  }

  /**
   * Queries transactions within your Alibaba Cloud account.
   * 
   * @param request - QueryAccountTransactionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccountTransactionsResponse
   */
  async queryAccountTransactionsWithOptions(request: $_model.QueryAccountTransactionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAccountTransactionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!$dara.isNull(request.createTimeStart)) {
      query["CreateTimeStart"] = request.createTimeStart;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.recordID)) {
      query["RecordID"] = request.recordID;
    }

    if (!$dara.isNull(request.transactionChannel)) {
      query["TransactionChannel"] = request.transactionChannel;
    }

    if (!$dara.isNull(request.transactionChannelSN)) {
      query["TransactionChannelSN"] = request.transactionChannelSN;
    }

    if (!$dara.isNull(request.transactionFlow)) {
      query["TransactionFlow"] = request.transactionFlow;
    }

    if (!$dara.isNull(request.transactionNumber)) {
      query["TransactionNumber"] = request.transactionNumber;
    }

    if (!$dara.isNull(request.transactionType)) {
      query["TransactionType"] = request.transactionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAccountTransactions",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAccountTransactionsResponse>(await this.callApi(params, req, runtime), new $_model.QueryAccountTransactionsResponse({}));
  }

  /**
   * Queries transactions within your Alibaba Cloud account.
   * 
   * @param request - QueryAccountTransactionsRequest
   * @returns QueryAccountTransactionsResponse
   */
  async queryAccountTransactions(request: $_model.QueryAccountTransactionsRequest): Promise<$_model.QueryAccountTransactionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAccountTransactionsWithOptions(request, runtime);
  }

  /**
   * Queries available instances.
   * 
   * @param request - QueryAvailableInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAvailableInstancesResponse
   */
  async queryAvailableInstancesWithOptions(request: $_model.QueryAvailableInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAvailableInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!$dara.isNull(request.createTimeStart)) {
      query["CreateTimeStart"] = request.createTimeStart;
    }

    if (!$dara.isNull(request.endTimeEnd)) {
      query["EndTimeEnd"] = request.endTimeEnd;
    }

    if (!$dara.isNull(request.endTimeStart)) {
      query["EndTimeStart"] = request.endTimeStart;
    }

    if (!$dara.isNull(request.instanceIDs)) {
      query["InstanceIDs"] = request.instanceIDs;
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

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.renewStatus)) {
      query["RenewStatus"] = request.renewStatus;
    }

    if (!$dara.isNull(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAvailableInstances",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAvailableInstancesResponse>(await this.callApi(params, req, runtime), new $_model.QueryAvailableInstancesResponse({}));
  }

  /**
   * Queries available instances.
   * 
   * @param request - QueryAvailableInstancesRequest
   * @returns QueryAvailableInstancesResponse
   */
  async queryAvailableInstances(request: $_model.QueryAvailableInstancesRequest): Promise<$_model.QueryAvailableInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAvailableInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the bills in a billing cycle.
   * 
   * @param request - QueryBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBillResponse
   */
  async queryBillWithOptions(request: $_model.QueryBillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!$dara.isNull(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.isDisplayLocalCurrency)) {
      query["IsDisplayLocalCurrency"] = request.isDisplayLocalCurrency;
    }

    if (!$dara.isNull(request.isHideZeroCharge)) {
      query["IsHideZeroCharge"] = request.isHideZeroCharge;
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

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBillResponse>(await this.callApi(params, req, runtime), new $_model.QueryBillResponse({}));
  }

  /**
   * Queries the bills in a billing cycle.
   * 
   * @param request - QueryBillRequest
   * @returns QueryBillResponse
   */
  async queryBill(request: $_model.QueryBillRequest): Promise<$_model.QueryBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBillWithOptions(request, runtime);
  }

  /**
   * Queries the bill overview information in a billing cycle.
   * 
   * @param request - QueryBillOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBillOverviewResponse
   */
  async queryBillOverviewWithOptions(request: $_model.QueryBillOverviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBillOverviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!$dara.isNull(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
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
      action: "QueryBillOverview",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBillOverviewResponse>(await this.callApi(params, req, runtime), new $_model.QueryBillOverviewResponse({}));
  }

  /**
   * Queries the bill overview information in a billing cycle.
   * 
   * @param request - QueryBillOverviewRequest
   * @returns QueryBillOverviewResponse
   */
  async queryBillOverview(request: $_model.QueryBillOverviewRequest): Promise<$_model.QueryBillOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBillOverviewWithOptions(request, runtime);
  }

  /**
   * Queries the subscribed bills that are stored in Object Storage Service (OSS) bucket.
   * 
   * @param request - QueryBillToOSSSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBillToOSSSubscriptionResponse
   */
  async queryBillToOSSSubscriptionWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.QueryBillToOSSSubscriptionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "QueryBillToOSSSubscription",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBillToOSSSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.QueryBillToOSSSubscriptionResponse({}));
  }

  /**
   * Queries the subscribed bills that are stored in Object Storage Service (OSS) bucket.
   * @returns QueryBillToOSSSubscriptionResponse
   */
  async queryBillToOSSSubscription(): Promise<$_model.QueryBillToOSSSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBillToOSSSubscriptionWithOptions(runtime);
  }

  /**
   * Queries the information about vouchers.
   * 
   * @param request - QueryCashCouponsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCashCouponsResponse
   */
  async queryCashCouponsWithOptions(request: $_model.QueryCashCouponsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCashCouponsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.effectiveOrNot)) {
      query["EffectiveOrNot"] = request.effectiveOrNot;
    }

    if (!$dara.isNull(request.expiryTimeEnd)) {
      query["ExpiryTimeEnd"] = request.expiryTimeEnd;
    }

    if (!$dara.isNull(request.expiryTimeStart)) {
      query["ExpiryTimeStart"] = request.expiryTimeStart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCashCoupons",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCashCouponsResponse>(await this.callApi(params, req, runtime), new $_model.QueryCashCouponsResponse({}));
  }

  /**
   * Queries the information about vouchers.
   * 
   * @param request - QueryCashCouponsRequest
   * @returns QueryCashCouponsResponse
   */
  async queryCashCoupons(request: $_model.QueryCashCouponsRequest): Promise<$_model.QueryCashCouponsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCashCouponsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a service based on the service code.
   * 
   * @remarks
   * You can call this operation to query the information about a service based on the service code.
   * 
   * @param request - QueryCommodityListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCommodityListResponse
   */
  async queryCommodityListWithOptions(request: $_model.QueryCommodityListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCommodityListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCommodityList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCommodityListResponse>(await this.callApi(params, req, runtime), new $_model.QueryCommodityListResponse({}));
  }

  /**
   * Queries the information about a service based on the service code.
   * 
   * @remarks
   * You can call this operation to query the information about a service based on the service code.
   * 
   * @param request - QueryCommodityListRequest
   * @returns QueryCommodityListResponse
   */
  async queryCommodityList(request: $_model.QueryCommodityListRequest): Promise<$_model.QueryCommodityListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCommodityListWithOptions(request, runtime);
  }

  /**
   * Queries all cost centers within the current node of the cost center tree. If the ParentUnitId parameter is set to -1, all cost centers are queried.
   * 
   * @param request - QueryCostUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCostUnitResponse
   */
  async queryCostUnitWithOptions(request: $_model.QueryCostUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCostUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerUid)) {
      query["OwnerUid"] = request.ownerUid;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentUnitId)) {
      query["ParentUnitId"] = request.parentUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCostUnit",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCostUnitResponse>(await this.callApi(params, req, runtime), new $_model.QueryCostUnitResponse({}));
  }

  /**
   * Queries all cost centers within the current node of the cost center tree. If the ParentUnitId parameter is set to -1, all cost centers are queried.
   * 
   * @param request - QueryCostUnitRequest
   * @returns QueryCostUnitResponse
   */
  async queryCostUnit(request: $_model.QueryCostUnitRequest): Promise<$_model.QueryCostUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCostUnitWithOptions(request, runtime);
  }

  /**
   * Queries the resource instances that are allocated to a cost center. If the unitId parameter is set to 0, the unallocated primary resource instances and sub-resource instances are queried.
   * 
   * @param request - QueryCostUnitResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCostUnitResourceResponse
   */
  async queryCostUnitResourceWithOptions(request: $_model.QueryCostUnitResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCostUnitResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerUid)) {
      query["OwnerUid"] = request.ownerUid;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.unitId)) {
      query["UnitId"] = request.unitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCostUnitResource",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCostUnitResourceResponse>(await this.callApi(params, req, runtime), new $_model.QueryCostUnitResourceResponse({}));
  }

  /**
   * Queries the resource instances that are allocated to a cost center. If the unitId parameter is set to 0, the unallocated primary resource instances and sub-resource instances are queried.
   * 
   * @param request - QueryCostUnitResourceRequest
   * @returns QueryCostUnitResourceResponse
   */
  async queryCostUnitResource(request: $_model.QueryCostUnitResourceRequest): Promise<$_model.QueryCostUnitResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCostUnitResourceWithOptions(request, runtime);
  }

  /**
   * Queries the addresses to which invoices are mailed.
   * 
   * @param request - QueryCustomerAddressListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCustomerAddressListResponse
   */
  async queryCustomerAddressListWithOptions(request: $_model.QueryCustomerAddressListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCustomerAddressListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCustomerAddressList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCustomerAddressListResponse>(await this.callApi(params, req, runtime), new $_model.QueryCustomerAddressListResponse({}));
  }

  /**
   * Queries the addresses to which invoices are mailed.
   * 
   * @param request - QueryCustomerAddressListRequest
   * @returns QueryCustomerAddressListResponse
   */
  async queryCustomerAddressList(request: $_model.QueryCustomerAddressListRequest): Promise<$_model.QueryCustomerAddressListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCustomerAddressListWithOptions(request, runtime);
  }

  /**
   * Queries the usage of resource plans, including reserved instances (RIs) and storage capacity units (SCUs).
   * 
   * @remarks
   * Limits:
   * *   Only the usage records within the past year can be queried.
   * 
   * @param request - QueryDPUtilizationDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDPUtilizationDetailResponse
   */
  async queryDPUtilizationDetailWithOptions(request: $_model.QueryDPUtilizationDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDPUtilizationDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.deductedInstanceId)) {
      query["DeductedInstanceId"] = request.deductedInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.includeShare)) {
      query["IncludeShare"] = request.includeShare;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!$dara.isNull(request.lastToken)) {
      query["LastToken"] = request.lastToken;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDPUtilizationDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDPUtilizationDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryDPUtilizationDetailResponse({}));
  }

  /**
   * Queries the usage of resource plans, including reserved instances (RIs) and storage capacity units (SCUs).
   * 
   * @remarks
   * Limits:
   * *   Only the usage records within the past year can be queried.
   * 
   * @param request - QueryDPUtilizationDetailRequest
   * @returns QueryDPUtilizationDetailResponse
   */
  async queryDPUtilizationDetail(request: $_model.QueryDPUtilizationDetailRequest): Promise<$_model.QueryDPUtilizationDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDPUtilizationDetailWithOptions(request, runtime);
  }

  /**
   * Queries the information about the orders for which you want to apply for invoices.
   * 
   * @param request - QueryEvaluateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEvaluateListResponse
   */
  async queryEvaluateListWithOptions(request: $_model.QueryEvaluateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEvaluateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billCycle)) {
      query["BillCycle"] = request.billCycle;
    }

    if (!$dara.isNull(request.bizTypeList)) {
      query["BizTypeList"] = request.bizTypeList;
    }

    if (!$dara.isNull(request.endAmount)) {
      query["EndAmount"] = request.endAmount;
    }

    if (!$dara.isNull(request.endBizTime)) {
      query["EndBizTime"] = request.endBizTime;
    }

    if (!$dara.isNull(request.endSearchTime)) {
      query["EndSearchTime"] = request.endSearchTime;
    }

    if (!$dara.isNull(request.outBizId)) {
      query["OutBizId"] = request.outBizId;
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

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!$dara.isNull(request.startAmount)) {
      query["StartAmount"] = request.startAmount;
    }

    if (!$dara.isNull(request.startBizTime)) {
      query["StartBizTime"] = request.startBizTime;
    }

    if (!$dara.isNull(request.startSearchTime)) {
      query["StartSearchTime"] = request.startSearchTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEvaluateList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEvaluateListResponse>(await this.callApi(params, req, runtime), new $_model.QueryEvaluateListResponse({}));
  }

  /**
   * Queries the information about the orders for which you want to apply for invoices.
   * 
   * @param request - QueryEvaluateListRequest
   * @returns QueryEvaluateListResponse
   */
  async queryEvaluateList(request: $_model.QueryEvaluateListRequest): Promise<$_model.QueryEvaluateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEvaluateListWithOptions(request, runtime);
  }

  /**
   * Queries the information about a financial account.
   * 
   * @param request - QueryFinancialAccountInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFinancialAccountInfoResponse
   */
  async queryFinancialAccountInfoWithOptions(request: $_model.QueryFinancialAccountInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFinancialAccountInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFinancialAccountInfo",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFinancialAccountInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryFinancialAccountInfoResponse({}));
  }

  /**
   * Queries the information about a financial account.
   * 
   * @param request - QueryFinancialAccountInfoRequest
   * @returns QueryFinancialAccountInfoResponse
   */
  async queryFinancialAccountInfo(request: $_model.QueryFinancialAccountInfoRequest): Promise<$_model.QueryFinancialAccountInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFinancialAccountInfoWithOptions(request, runtime);
  }

  /**
   * Queries the bills of instances or billable items in a billing cycle.
   * 
   * @remarks
   * ##
   * *   This API operation has been upgraded to DescribeInstanceBill. We recommend that you call the [DescribeInstanceBill](https://help.aliyun.com/document_detail/209402.html) operation to query the bills of instances or billable items in a billing cycle. You can call the QueryInstanceBill operation to query a maximum of 50,000 data rows in a bill.
   * *   Instance bills are generated after bills are split. In most cases, the instance bills do not include data generated on the last day of the specified period.
   * *   The instance information changes within a billing cycle. The instance configurations and specifications and the time when the instance was used in the billing cycle are all recorded. For more information, see the corresponding bill details.
   * *   You can query the data generated in June 2020 or later for Cloud Communications services, and the data generated in November 2020 or later for Alibaba Cloud Domains.
   * 
   * @param request - QueryInstanceBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInstanceBillResponse
   */
  async queryInstanceBillWithOptions(request: $_model.QueryInstanceBillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInstanceBillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!$dara.isNull(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.billingDate)) {
      query["BillingDate"] = request.billingDate;
    }

    if (!$dara.isNull(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.isBillingItem)) {
      query["IsBillingItem"] = request.isBillingItem;
    }

    if (!$dara.isNull(request.isHideZeroCharge)) {
      query["IsHideZeroCharge"] = request.isHideZeroCharge;
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
      action: "QueryInstanceBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInstanceBillResponse>(await this.callApi(params, req, runtime), new $_model.QueryInstanceBillResponse({}));
  }

  /**
   * Queries the bills of instances or billable items in a billing cycle.
   * 
   * @remarks
   * ##
   * *   This API operation has been upgraded to DescribeInstanceBill. We recommend that you call the [DescribeInstanceBill](https://help.aliyun.com/document_detail/209402.html) operation to query the bills of instances or billable items in a billing cycle. You can call the QueryInstanceBill operation to query a maximum of 50,000 data rows in a bill.
   * *   Instance bills are generated after bills are split. In most cases, the instance bills do not include data generated on the last day of the specified period.
   * *   The instance information changes within a billing cycle. The instance configurations and specifications and the time when the instance was used in the billing cycle are all recorded. For more information, see the corresponding bill details.
   * *   You can query the data generated in June 2020 or later for Cloud Communications services, and the data generated in November 2020 or later for Alibaba Cloud Domains.
   * 
   * @param request - QueryInstanceBillRequest
   * @returns QueryInstanceBillResponse
   */
  async queryInstanceBill(request: $_model.QueryInstanceBillRequest): Promise<$_model.QueryInstanceBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInstanceBillWithOptions(request, runtime);
  }

  /**
   * Queries instances by tag.
   * 
   * @param request - QueryInstanceByTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInstanceByTagResponse
   */
  async queryInstanceByTagWithOptions(request: $_model.QueryInstanceByTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInstanceByTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      action: "QueryInstanceByTag",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInstanceByTagResponse>(await this.callApi(params, req, runtime), new $_model.QueryInstanceByTagResponse({}));
  }

  /**
   * Queries instances by tag.
   * 
   * @param request - QueryInstanceByTagRequest
   * @returns QueryInstanceByTagResponse
   */
  async queryInstanceByTag(request: $_model.QueryInstanceByTagRequest): Promise<$_model.QueryInstanceByTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInstanceByTagWithOptions(request, runtime);
  }

  /**
   * The code of the service.
   * 
   * @param request - QueryInstanceGaapCostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInstanceGaapCostResponse
   */
  async queryInstanceGaapCostWithOptions(request: $_model.QueryInstanceGaapCostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInstanceGaapCostResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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
      action: "QueryInstanceGaapCost",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInstanceGaapCostResponse>(await this.callApi(params, req, runtime), new $_model.QueryInstanceGaapCostResponse({}));
  }

  /**
   * The code of the service.
   * 
   * @param request - QueryInstanceGaapCostRequest
   * @returns QueryInstanceGaapCostResponse
   */
  async queryInstanceGaapCost(request: $_model.QueryInstanceGaapCostRequest): Promise<$_model.QueryInstanceGaapCostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInstanceGaapCostWithOptions(request, runtime);
  }

  /**
   * Queries the information about invoice titles.
   * 
   * @param request - QueryInvoicingCustomerListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInvoicingCustomerListResponse
   */
  async queryInvoicingCustomerListWithOptions(request: $_model.QueryInvoicingCustomerListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInvoicingCustomerListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryInvoicingCustomerList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInvoicingCustomerListResponse>(await this.callApi(params, req, runtime), new $_model.QueryInvoicingCustomerListResponse({}));
  }

  /**
   * Queries the information about invoice titles.
   * 
   * @param request - QueryInvoicingCustomerListRequest
   * @returns QueryInvoicingCustomerListResponse
   */
  async queryInvoicingCustomerList(request: $_model.QueryInvoicingCustomerListRequest): Promise<$_model.QueryInvoicingCustomerListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInvoicingCustomerListWithOptions(request, runtime);
  }

  /**
   * Queries the orders of your Alibaba Cloud account or distributors. By default, orders within the last hour are queried. To query earlier orders, specify the CreateTimeStart and CreateTimeEnd parameters.
   * 
   * @param request - QueryOrdersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrdersResponse
   */
  async queryOrdersWithOptions(request: $_model.QueryOrdersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryOrdersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!$dara.isNull(request.createTimeStart)) {
      query["CreateTimeStart"] = request.createTimeStart;
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
      action: "QueryOrders",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryOrdersResponse>(await this.callApi(params, req, runtime), new $_model.QueryOrdersResponse({}));
  }

  /**
   * Queries the orders of your Alibaba Cloud account or distributors. By default, orders within the last hour are queried. To query earlier orders, specify the CreateTimeStart and CreateTimeEnd parameters.
   * 
   * @param request - QueryOrdersRequest
   * @returns QueryOrdersResponse
   */
  async queryOrders(request: $_model.QueryOrdersRequest): Promise<$_model.QueryOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryOrdersWithOptions(request, runtime);
  }

  /**
   * Queries, by relationship ID, permissions granted to accounts between which a management-member relationship is established.
   * 
   * @param request - QueryPermissionListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPermissionListResponse
   */
  async queryPermissionListWithOptions(request: $_model.QueryPermissionListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPermissionListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.relationId)) {
      query["RelationId"] = request.relationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPermissionList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPermissionListResponse>(await this.callApi(params, req, runtime), new $_model.QueryPermissionListResponse({}));
  }

  /**
   * Queries, by relationship ID, permissions granted to accounts between which a management-member relationship is established.
   * 
   * @param request - QueryPermissionListRequest
   * @returns QueryPermissionListResponse
   */
  async queryPermissionList(request: $_model.QueryPermissionListRequest): Promise<$_model.QueryPermissionListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPermissionListWithOptions(request, runtime);
  }

  /**
   * Queries prepaid cards.
   * 
   * @param request - QueryPrepaidCardsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPrepaidCardsResponse
   */
  async queryPrepaidCardsWithOptions(request: $_model.QueryPrepaidCardsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPrepaidCardsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.effectiveOrNot)) {
      query["EffectiveOrNot"] = request.effectiveOrNot;
    }

    if (!$dara.isNull(request.expiryTimeEnd)) {
      query["ExpiryTimeEnd"] = request.expiryTimeEnd;
    }

    if (!$dara.isNull(request.expiryTimeStart)) {
      query["ExpiryTimeStart"] = request.expiryTimeStart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPrepaidCards",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPrepaidCardsResponse>(await this.callApi(params, req, runtime), new $_model.QueryPrepaidCardsResponse({}));
  }

  /**
   * Queries prepaid cards.
   * 
   * @param request - QueryPrepaidCardsRequest
   * @returns QueryPrepaidCardsResponse
   */
  async queryPrepaidCards(request: $_model.QueryPrepaidCardsRequest): Promise<$_model.QueryPrepaidCardsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPrepaidCardsWithOptions(request, runtime);
  }

  /**
   * Queries the billable items of a service.
   * 
   * @remarks
   * You can call this operation to query the billable items of a service. A billable item is the minimum unit used to calculate costs.
   * 
   * @param request - QueryPriceEntityListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPriceEntityListResponse
   */
  async queryPriceEntityListWithOptions(request: $_model.QueryPriceEntityListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPriceEntityListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPriceEntityList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPriceEntityListResponse>(await this.callApi(params, req, runtime), new $_model.QueryPriceEntityListResponse({}));
  }

  /**
   * Queries the billable items of a service.
   * 
   * @remarks
   * You can call this operation to query the billable items of a service. A billable item is the minimum unit used to calculate costs.
   * 
   * @param request - QueryPriceEntityListRequest
   * @returns QueryPriceEntityListResponse
   */
  async queryPriceEntityList(request: $_model.QueryPriceEntityListRequest): Promise<$_model.QueryPriceEntityListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPriceEntityListWithOptions(request, runtime);
  }

  /**
   * Queries the information about all Alibaba Cloud services.
   * 
   * @param request - QueryProductListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProductListResponse
   */
  async queryProductListWithOptions(request: $_model.QueryProductListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryProductListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryTotalCount)) {
      query["QueryTotalCount"] = request.queryTotalCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryProductList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryProductListResponse>(await this.callApi(params, req, runtime), new $_model.QueryProductListResponse({}));
  }

  /**
   * Queries the information about all Alibaba Cloud services.
   * 
   * @param request - QueryProductListRequest
   * @returns QueryProductListResponse
   */
  async queryProductList(request: $_model.QueryProductListRequest): Promise<$_model.QueryProductListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryProductListWithOptions(request, runtime);
  }

  /**
   * Queries the usage details of a reserved instance (RI).
   * 
   * @param request - QueryRIUtilizationDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRIUtilizationDetailResponse
   */
  async queryRIUtilizationDetailWithOptions(request: $_model.QueryRIUtilizationDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRIUtilizationDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deductedInstanceId)) {
      query["DeductedInstanceId"] = request.deductedInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.RICommodityCode)) {
      query["RICommodityCode"] = request.RICommodityCode;
    }

    if (!$dara.isNull(request.RIInstanceId)) {
      query["RIInstanceId"] = request.RIInstanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRIUtilizationDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRIUtilizationDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryRIUtilizationDetailResponse({}));
  }

  /**
   * Queries the usage details of a reserved instance (RI).
   * 
   * @param request - QueryRIUtilizationDetailRequest
   * @returns QueryRIUtilizationDetailResponse
   */
  async queryRIUtilizationDetail(request: $_model.QueryRIUtilizationDetailRequest): Promise<$_model.QueryRIUtilizationDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRIUtilizationDetailWithOptions(request, runtime);
  }

  /**
   * Queries the information about a redemption coupon.
   * 
   * @param request - QueryRedeemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRedeemResponse
   */
  async queryRedeemWithOptions(request: $_model.QueryRedeemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRedeemResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRedeem",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRedeemResponse>(await this.callApi(params, req, runtime), new $_model.QueryRedeemResponse({}));
  }

  /**
   * Queries the information about a redemption coupon.
   * 
   * @param request - QueryRedeemRequest
   * @returns QueryRedeemResponse
   */
  async queryRedeem(request: $_model.QueryRedeemRequest): Promise<$_model.QueryRedeemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRedeemWithOptions(request, runtime);
  }

  /**
   * Queries the members of a management account.
   * 
   * @param request - QueryRelationListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRelationListResponse
   */
  async queryRelationListWithOptions(request: $_model.QueryRelationListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRelationListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRelationList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRelationListResponse>(await this.callApi(params, req, runtime), new $_model.QueryRelationListResponse({}));
  }

  /**
   * Queries the members of a management account.
   * 
   * @param request - QueryRelationListRequest
   * @returns QueryRelationListResponse
   */
  async queryRelationList(request: $_model.QueryRelationListRequest): Promise<$_model.QueryRelationListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRelationListWithOptions(request, runtime);
  }

  /**
   * Indicates whether the call is successful. A value of true indicates that the call is successful. A value of false indicates that the call failed.
   * 
   * @param request - QueryResellerAvailableQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryResellerAvailableQuotaResponse
   */
  async queryResellerAvailableQuotaWithOptions(request: $_model.QueryResellerAvailableQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryResellerAvailableQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.itemCodes)) {
      query["ItemCodes"] = request.itemCodes;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryResellerAvailableQuota",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryResellerAvailableQuotaResponse>(await this.callApi(params, req, runtime), new $_model.QueryResellerAvailableQuotaResponse({}));
  }

  /**
   * Indicates whether the call is successful. A value of true indicates that the call is successful. A value of false indicates that the call failed.
   * 
   * @param request - QueryResellerAvailableQuotaRequest
   * @returns QueryResellerAvailableQuotaResponse
   */
  async queryResellerAvailableQuota(request: $_model.QueryResellerAvailableQuotaRequest): Promise<$_model.QueryResellerAvailableQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryResellerAvailableQuotaWithOptions(request, runtime);
  }

  /**
   * 查询用户的信控预警阀值,该接口暂未测试启用
   * 
   * @param request - QueryResellerUserAlarmThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryResellerUserAlarmThresholdResponse
   */
  async queryResellerUserAlarmThresholdWithOptions(request: $_model.QueryResellerUserAlarmThresholdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryResellerUserAlarmThresholdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmType)) {
      query["AlarmType"] = request.alarmType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryResellerUserAlarmThreshold",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryResellerUserAlarmThresholdResponse>(await this.callApi(params, req, runtime), new $_model.QueryResellerUserAlarmThresholdResponse({}));
  }

  /**
   * 查询用户的信控预警阀值,该接口暂未测试启用
   * 
   * @param request - QueryResellerUserAlarmThresholdRequest
   * @returns QueryResellerUserAlarmThresholdResponse
   */
  async queryResellerUserAlarmThreshold(request: $_model.QueryResellerUserAlarmThresholdRequest): Promise<$_model.QueryResellerUserAlarmThresholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryResellerUserAlarmThresholdWithOptions(request, runtime);
  }

  /**
   * Queries the instances of a resource plan. You can query the resource plans that are expired within one year.
   * 
   * @param request - QueryResourcePackageInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryResourcePackageInstancesResponse
   */
  async queryResourcePackageInstancesWithOptions(request: $_model.QueryResourcePackageInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryResourcePackageInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.expiryTimeEnd)) {
      query["ExpiryTimeEnd"] = request.expiryTimeEnd;
    }

    if (!$dara.isNull(request.expiryTimeStart)) {
      query["ExpiryTimeStart"] = request.expiryTimeStart;
    }

    if (!$dara.isNull(request.includePartner)) {
      query["IncludePartner"] = request.includePartner;
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

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryResourcePackageInstances",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryResourcePackageInstancesResponse>(await this.callApi(params, req, runtime), new $_model.QueryResourcePackageInstancesResponse({}));
  }

  /**
   * Queries the instances of a resource plan. You can query the resource plans that are expired within one year.
   * 
   * @param request - QueryResourcePackageInstancesRequest
   * @returns QueryResourcePackageInstancesResponse
   */
  async queryResourcePackageInstances(request: $_model.QueryResourcePackageInstancesRequest): Promise<$_model.QueryResourcePackageInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryResourcePackageInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the deduction details of savings plans.
   * 
   * @param request - QuerySavingsPlansDeductLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySavingsPlansDeductLogResponse
   */
  async querySavingsPlansDeductLogWithOptions(request: $_model.QuerySavingsPlansDeductLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySavingsPlansDeductLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.locale)) {
      query["Locale"] = request.locale;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySavingsPlansDeductLog",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySavingsPlansDeductLogResponse>(await this.callApi(params, req, runtime), new $_model.QuerySavingsPlansDeductLogResponse({}));
  }

  /**
   * Queries the deduction details of savings plans.
   * 
   * @param request - QuerySavingsPlansDeductLogRequest
   * @returns QuerySavingsPlansDeductLogResponse
   */
  async querySavingsPlansDeductLog(request: $_model.QuerySavingsPlansDeductLogRequest): Promise<$_model.QuerySavingsPlansDeductLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySavingsPlansDeductLogWithOptions(request, runtime);
  }

  /**
   * Queries discounts on savings plans.
   * 
   * @param request - QuerySavingsPlansDiscountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySavingsPlansDiscountResponse
   */
  async querySavingsPlansDiscountWithOptions(request: $_model.QuerySavingsPlansDiscountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySavingsPlansDiscountResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySavingsPlansDiscount",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySavingsPlansDiscountResponse>(await this.callApi(params, req, runtime), new $_model.QuerySavingsPlansDiscountResponse({}));
  }

  /**
   * Queries discounts on savings plans.
   * 
   * @param request - QuerySavingsPlansDiscountRequest
   * @returns QuerySavingsPlansDiscountResponse
   */
  async querySavingsPlansDiscount(request: $_model.QuerySavingsPlansDiscountRequest): Promise<$_model.QuerySavingsPlansDiscountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySavingsPlansDiscountWithOptions(request, runtime);
  }

  /**
   * Queries the information about savings plan instances of the current user.
   * 
   * @param request - QuerySavingsPlansInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySavingsPlansInstanceResponse
   */
  async querySavingsPlansInstanceWithOptions(request: $_model.QuerySavingsPlansInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySavingsPlansInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.locale)) {
      query["Locale"] = request.locale;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySavingsPlansInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySavingsPlansInstanceResponse>(await this.callApi(params, req, runtime), new $_model.QuerySavingsPlansInstanceResponse({}));
  }

  /**
   * Queries the information about savings plan instances of the current user.
   * 
   * @param request - QuerySavingsPlansInstanceRequest
   * @returns QuerySavingsPlansInstanceResponse
   */
  async querySavingsPlansInstance(request: $_model.QuerySavingsPlansInstanceRequest): Promise<$_model.QuerySavingsPlansInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySavingsPlansInstanceWithOptions(request, runtime);
  }

  /**
   * The code of the service.
   * 
   * @param request - QuerySettleBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySettleBillResponse
   */
  async querySettleBillWithOptions(request: $_model.QuerySettleBillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySettleBillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!$dara.isNull(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.isDisplayLocalCurrency)) {
      query["IsDisplayLocalCurrency"] = request.isDisplayLocalCurrency;
    }

    if (!$dara.isNull(request.isHideZeroCharge)) {
      query["IsHideZeroCharge"] = request.isHideZeroCharge;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.recordID)) {
      query["RecordID"] = request.recordID;
    }

    if (!$dara.isNull(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySettleBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySettleBillResponse>(await this.callApi(params, req, runtime), new $_model.QuerySettleBillResponse({}));
  }

  /**
   * The code of the service.
   * 
   * @param request - QuerySettleBillRequest
   * @returns QuerySettleBillResponse
   */
  async querySettleBill(request: $_model.QuerySettleBillRequest): Promise<$_model.QuerySettleBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySettleBillWithOptions(request, runtime);
  }

  /**
   * Queries the stock keeping units (SKUs) of a service. In most cases, a service has one or more SKUs. A service may even have tens of thousands of SKUs. You can call this operation to query the SKUs of a specific service and the prices of the SKUs. You can configure request parameters to query the specified SKUs based on the configurations of the SKUs.
   * 
   * @param tmpReq - QuerySkuPriceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySkuPriceListResponse
   */
  async querySkuPriceListWithOptions(tmpReq: $_model.QuerySkuPriceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySkuPriceListResponse> {
    tmpReq.validate();
    let request = new $_model.QuerySkuPriceListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.priceFactorConditionMap)) {
      request.priceFactorConditionMapShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.priceFactorConditionMap, "PriceFactorConditionMap", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySkuPriceList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySkuPriceListResponse>(await this.callApi(params, req, runtime), new $_model.QuerySkuPriceListResponse({}));
  }

  /**
   * Queries the stock keeping units (SKUs) of a service. In most cases, a service has one or more SKUs. A service may even have tens of thousands of SKUs. You can call this operation to query the SKUs of a specific service and the prices of the SKUs. You can configure request parameters to query the specified SKUs based on the configurations of the SKUs.
   * 
   * @param request - QuerySkuPriceListRequest
   * @returns QuerySkuPriceListResponse
   */
  async querySkuPriceList(request: $_model.QuerySkuPriceListRequest): Promise<$_model.QuerySkuPriceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySkuPriceListWithOptions(request, runtime);
  }

  /**
   * Queries split bills.
   * 
   * @remarks
   *   This API operation has been upgraded to DescribeSplitItemBill. We recommend that you call the [DescribeSplitItemBill](https://help.aliyun.com/document_detail/208169.html) operation to query split bills. You can call the QuerySplitItemBill operation to query a maximum of 50,000 data rows in a bill.
   * *   The data queried by calling the QuerySplitItemBill operation is consistent with the data that is displayed for the specified billing cycle on the Split Bill page in User Center.
   * *   You can call this operation to query split bills generated within the last 12 months.
   * *   This operation returns split bills only after you activate the [Split Bill](https://usercenter2.aliyun.com/finance/split-bill) service in User Center.
   * 
   * @param request - QuerySplitItemBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySplitItemBillResponse
   */
  async querySplitItemBillWithOptions(request: $_model.QuerySplitItemBillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySplitItemBillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!$dara.isNull(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
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
      action: "QuerySplitItemBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySplitItemBillResponse>(await this.callApi(params, req, runtime), new $_model.QuerySplitItemBillResponse({}));
  }

  /**
   * Queries split bills.
   * 
   * @remarks
   *   This API operation has been upgraded to DescribeSplitItemBill. We recommend that you call the [DescribeSplitItemBill](https://help.aliyun.com/document_detail/208169.html) operation to query split bills. You can call the QuerySplitItemBill operation to query a maximum of 50,000 data rows in a bill.
   * *   The data queried by calling the QuerySplitItemBill operation is consistent with the data that is displayed for the specified billing cycle on the Split Bill page in User Center.
   * *   You can call this operation to query split bills generated within the last 12 months.
   * *   This operation returns split bills only after you activate the [Split Bill](https://usercenter2.aliyun.com/finance/split-bill) service in User Center.
   * 
   * @param request - QuerySplitItemBillRequest
   * @returns QuerySplitItemBillResponse
   */
  async querySplitItemBill(request: $_model.QuerySplitItemBillRequest): Promise<$_model.QuerySplitItemBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySplitItemBillWithOptions(request, runtime);
  }

  /**
   * Queries the usage data of an Alibaba Cloud service.
   * 
   * @remarks
   * You can call this operation to query the usage data of an Alibaba Cloud service. Take note of the following items:
   * *   The service code that you specify for querying the usage data of a specific Alibaba Cloud service must be valid. You can query the usage data by hour or by day.
   * *   The time that you specify must follow the ISO8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   *     *   Latency exists in data pushes. Therefore, if you set the DataType parameter to Hour, the integrity of usage data recorded in the last 24 hours can be ensured. If you set the DataType parameter to Day, the integrity of usage data recorded in the last two days can be ensured.
   *     *   You can query the usage data that is recorded in the last quarter.
   * 
   * @param request - QueryUserOmsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserOmsDataResponse
   */
  async queryUserOmsDataWithOptions(request: $_model.QueryUserOmsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUserOmsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.table)) {
      query["Table"] = request.table;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserOmsData",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUserOmsDataResponse>(await this.callApi(params, req, runtime), new $_model.QueryUserOmsDataResponse({}));
  }

  /**
   * Queries the usage data of an Alibaba Cloud service.
   * 
   * @remarks
   * You can call this operation to query the usage data of an Alibaba Cloud service. Take note of the following items:
   * *   The service code that you specify for querying the usage data of a specific Alibaba Cloud service must be valid. You can query the usage data by hour or by day.
   * *   The time that you specify must follow the ISO8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   *     *   Latency exists in data pushes. Therefore, if you set the DataType parameter to Hour, the integrity of usage data recorded in the last 24 hours can be ensured. If you set the DataType parameter to Day, the integrity of usage data recorded in the last two days can be ensured.
   *     *   You can query the usage data that is recorded in the last quarter.
   * 
   * @param request - QueryUserOmsDataRequest
   * @returns QueryUserOmsDataResponse
   */
  async queryUserOmsData(request: $_model.QueryUserOmsDataRequest): Promise<$_model.QueryUserOmsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserOmsDataWithOptions(request, runtime);
  }

  /**
   * Unsubscribes from an instance that is no longer needed.
   * 
   * @remarks
   * 1.  Refunds are applicable only for the actual paid amount. Vouchers used for the purchase are non-refundable.
   * 2.  Check the information about unsubscription and confirm the unsubscription terms and refundable amount. The resource that is unsubscribed cannot be restored.
   * 3.  For more information, see [Rules for unsubscribing from resources](https://www.alibabacloud.com/help/en/user-center/refund-rules).
   * 
   * @param request - RefundInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefundInstanceResponse
   */
  async refundInstanceWithOptions(request: $_model.RefundInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefundInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.immediatelyRelease)) {
      query["ImmediatelyRelease"] = request.immediatelyRelease;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefundInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefundInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RefundInstanceResponse({}));
  }

  /**
   * Unsubscribes from an instance that is no longer needed.
   * 
   * @remarks
   * 1.  Refunds are applicable only for the actual paid amount. Vouchers used for the purchase are non-refundable.
   * 2.  Check the information about unsubscription and confirm the unsubscription terms and refundable amount. The resource that is unsubscribed cannot be restored.
   * 3.  For more information, see [Rules for unsubscribing from resources](https://www.alibabacloud.com/help/en/user-center/refund-rules).
   * 
   * @param request - RefundInstanceRequest
   * @returns RefundInstanceResponse
   */
  async refundInstance(request: $_model.RefundInstanceRequest): Promise<$_model.RefundInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refundInstanceWithOptions(request, runtime);
  }

  /**
   * Releases instances by Virtual Network Operators (VNOs).
   * 
   * @remarks
   * This operation is provided for only VNOs to release instances. If a non-specific VNO calls this operation, the request is blocked.
   * 
   * @param request - ReleaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstanceResponse
   */
  async releaseInstanceWithOptions(request: $_model.ReleaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.renewStatus)) {
      query["RenewStatus"] = request.renewStatus;
    }

    if (!$dara.isNull(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseInstanceResponse({}));
  }

  /**
   * Releases instances by Virtual Network Operators (VNOs).
   * 
   * @remarks
   * This operation is provided for only VNOs to release instances. If a non-specific VNO calls this operation, the request is blocked.
   * 
   * @param request - ReleaseInstanceRequest
   * @returns ReleaseInstanceResponse
   */
  async releaseInstance(request: $_model.ReleaseInstanceRequest): Promise<$_model.ReleaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  /**
   * Terminates a financial relationship between the management account and a member.
   * 
   * @param request - RelieveAccountRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RelieveAccountRelationResponse
   */
  async relieveAccountRelationWithOptions(request: $_model.RelieveAccountRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RelieveAccountRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.childUserId)) {
      query["ChildUserId"] = request.childUserId;
    }

    if (!$dara.isNull(request.parentUserId)) {
      query["ParentUserId"] = request.parentUserId;
    }

    if (!$dara.isNull(request.relationId)) {
      query["RelationId"] = request.relationId;
    }

    if (!$dara.isNull(request.relationType)) {
      query["RelationType"] = request.relationType;
    }

    if (!$dara.isNull(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RelieveAccountRelation",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RelieveAccountRelationResponse>(await this.callApi(params, req, runtime), new $_model.RelieveAccountRelationResponse({}));
  }

  /**
   * Terminates a financial relationship between the management account and a member.
   * 
   * @param request - RelieveAccountRelationRequest
   * @returns RelieveAccountRelationResponse
   */
  async relieveAccountRelation(request: $_model.RelieveAccountRelationRequest): Promise<$_model.RelieveAccountRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.relieveAccountRelationWithOptions(request, runtime);
  }

  /**
   * 续费变配接口
   * 
   * @param request - RenewChangeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewChangeInstanceResponse
   */
  async renewChangeInstanceWithOptions(request: $_model.RenewChangeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewChangeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parameter)) {
      query["Parameter"] = request.parameter;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.renewPeriod)) {
      query["RenewPeriod"] = request.renewPeriod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewChangeInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewChangeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewChangeInstanceResponse({}));
  }

  /**
   * 续费变配接口
   * 
   * @param request - RenewChangeInstanceRequest
   * @returns RenewChangeInstanceResponse
   */
  async renewChangeInstance(request: $_model.RenewChangeInstanceRequest): Promise<$_model.RenewChangeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewChangeInstanceWithOptions(request, runtime);
  }

  /**
   * Renews a specified instance. You cannot call this operation to renew Elastic Compute Service (ECS) instances, ApsaraDB RDS instances, or ApsaraDB for Redis instances. To renew these types of instances, call the dedicated operation of the corresponding service.
   * 
   * @param request - RenewInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewInstanceResponse
   */
  async renewInstanceWithOptions(request: $_model.RenewInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.renewPeriod)) {
      query["RenewPeriod"] = request.renewPeriod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewInstanceResponse({}));
  }

  /**
   * Renews a specified instance. You cannot call this operation to renew Elastic Compute Service (ECS) instances, ApsaraDB RDS instances, or ApsaraDB for Redis instances. To renew these types of instances, call the dedicated operation of the corresponding service.
   * 
   * @param request - RenewInstanceRequest
   * @returns RenewInstanceResponse
   */
  async renewInstance(request: $_model.RenewInstanceRequest): Promise<$_model.RenewInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  /**
   * Renews a resource plan.
   * 
   * @param request - RenewResourcePackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewResourcePackageResponse
   */
  async renewResourcePackageWithOptions(request: $_model.RenewResourcePackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewResourcePackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.effectiveDate)) {
      query["EffectiveDate"] = request.effectiveDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewResourcePackage",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewResourcePackageResponse>(await this.callApi(params, req, runtime), new $_model.RenewResourcePackageResponse({}));
  }

  /**
   * Renews a resource plan.
   * 
   * @param request - RenewResourcePackageRequest
   * @returns RenewResourcePackageResponse
   */
  async renewResourcePackage(request: $_model.RenewResourcePackageRequest): Promise<$_model.RenewResourcePackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewResourcePackageWithOptions(request, runtime);
  }

  /**
   * Sets an expiration date for all Elastic Compute Service (ECS) instances.
   * 
   * @param request - SetAllExpirationDayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAllExpirationDayResponse
   */
  async setAllExpirationDayWithOptions(request: $_model.SetAllExpirationDayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAllExpirationDayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.unifyExpireDay)) {
      query["UnifyExpireDay"] = request.unifyExpireDay;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAllExpirationDay",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAllExpirationDayResponse>(await this.callApi(params, req, runtime), new $_model.SetAllExpirationDayResponse({}));
  }

  /**
   * Sets an expiration date for all Elastic Compute Service (ECS) instances.
   * 
   * @param request - SetAllExpirationDayRequest
   * @returns SetAllExpirationDayResponse
   */
  async setAllExpirationDay(request: $_model.SetAllExpirationDayRequest): Promise<$_model.SetAllExpirationDayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAllExpirationDayWithOptions(request, runtime);
  }

  /**
   * Enables auto-renewal for an instance.
   * 
   * @param request - SetRenewalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetRenewalResponse
   */
  async setRenewalWithOptions(request: $_model.SetRenewalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetRenewalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIDs)) {
      query["InstanceIDs"] = request.instanceIDs;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.renewalPeriod)) {
      query["RenewalPeriod"] = request.renewalPeriod;
    }

    if (!$dara.isNull(request.renewalPeriodUnit)) {
      query["RenewalPeriodUnit"] = request.renewalPeriodUnit;
    }

    if (!$dara.isNull(request.renewalStatus)) {
      query["RenewalStatus"] = request.renewalStatus;
    }

    if (!$dara.isNull(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetRenewal",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetRenewalResponse>(await this.callApi(params, req, runtime), new $_model.SetRenewalResponse({}));
  }

  /**
   * Enables auto-renewal for an instance.
   * 
   * @param request - SetRenewalRequest
   * @returns SetRenewalResponse
   */
  async setRenewal(request: $_model.SetRenewalRequest): Promise<$_model.SetRenewalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setRenewalWithOptions(request, runtime);
  }

  /**
   * @param request - SetResellerUserAlarmThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetResellerUserAlarmThresholdResponse
   */
  async setResellerUserAlarmThresholdWithOptions(request: $_model.SetResellerUserAlarmThresholdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetResellerUserAlarmThresholdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmThresholds)) {
      query["AlarmThresholds"] = request.alarmThresholds;
    }

    if (!$dara.isNull(request.alarmType)) {
      query["AlarmType"] = request.alarmType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetResellerUserAlarmThreshold",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetResellerUserAlarmThresholdResponse>(await this.callApi(params, req, runtime), new $_model.SetResellerUserAlarmThresholdResponse({}));
  }

  /**
   * @param request - SetResellerUserAlarmThresholdRequest
   * @returns SetResellerUserAlarmThresholdResponse
   */
  async setResellerUserAlarmThreshold(request: $_model.SetResellerUserAlarmThresholdRequest): Promise<$_model.SetResellerUserAlarmThresholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setResellerUserAlarmThresholdWithOptions(request, runtime);
  }

  /**
   * Modify the quota ledger and consumption ledger.
   * 
   * @param request - SetResellerUserQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetResellerUserQuotaResponse
   */
  async setResellerUserQuotaWithOptions(request: $_model.SetResellerUserQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetResellerUserQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.currency)) {
      query["Currency"] = request.currency;
    }

    if (!$dara.isNull(request.outBizId)) {
      query["OutBizId"] = request.outBizId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetResellerUserQuota",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetResellerUserQuotaResponse>(await this.callApi(params, req, runtime), new $_model.SetResellerUserQuotaResponse({}));
  }

  /**
   * Modify the quota ledger and consumption ledger.
   * 
   * @param request - SetResellerUserQuotaRequest
   * @returns SetResellerUserQuotaResponse
   */
  async setResellerUserQuota(request: $_model.SetResellerUserQuotaRequest): Promise<$_model.SetResellerUserQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setResellerUserQuotaWithOptions(request, runtime);
  }

  /**
   * @param request - SetResellerUserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetResellerUserStatusResponse
   */
  async setResellerUserStatusWithOptions(request: $_model.SetResellerUserStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetResellerUserStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.stopMode)) {
      query["StopMode"] = request.stopMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetResellerUserStatus",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetResellerUserStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetResellerUserStatusResponse({}));
  }

  /**
   * @param request - SetResellerUserStatusRequest
   * @returns SetResellerUserStatusResponse
   */
  async setResellerUserStatus(request: $_model.SetResellerUserStatusRequest): Promise<$_model.SetResellerUserStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setResellerUserStatusWithOptions(request, runtime);
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
      version: "2017-12-14",
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
   * Subscribes to the bills that are stored in Object Storage Service (OSS) buckets.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   You can subscribe to only one type of bill at a time.
   * *   The bills generated on the previous day are pushed on a daily basis the next day after you subscribe to the bills. The full-data bills for the previous month are pushed on the fourth day of each month. The monthly bills in the PDF format for the previous month are pushed on the fourth day of each month.
   * *   The daily bills may be delayed. The delayed bills are pushed the next day after they are generated. The delayed bills may include the bills that should have been pushed on the previous day. We recommend that you query the full-data bills for the previous month at the beginning of each month.
   * *   The bill subscriber must have the [AliyunConsumeDump2OSSRole](https://ram.console.aliyun.com/#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D) permission.
   * *   The SubscribeBillToOSS operation has the same functionality as the Save Expense Details to OSS Bucket feature in User Center.
   * *   To subscribe to the bills stored in an OSS bucket, make sure that the directory name specified for the OSS bucket conforms to the following naming rules:
   * 1.  1.  The directory name can contain only UTF-8 characters and cannot contain emoticons.
   * 2.  2.  Forward slashes (/) are used to separate paths and can be used to create subdirectories with ease. The directory name cannot start with a forward slash (/), a backslash (\\\\), or consecutive forward slashes (/).
   * 3.  3.  The name of a subdirectory cannot be set to two consecutive periods (..).
   * 4.  4.  The directory name must be 1 to 254 characters in length.
   * *   File names:
   *     *   **BillingItemDetailForBillingPeriod** (Detailed bills of billable items)
   *         *   File name format for a daily push: `UID_BillingItemDetail_YYYYMMDD`. Example: `169**_BillingItemDetail_20190310`.
   *         *   File name format for a full-data push at the beginning of the next month: `UID_BillingItemDetail_YYYYMM`. Example: `169**_BillingItemDetail_201903`.
   *     *   **InstanceDetailForBillingPeriod** (Detailed bills of instances)
   *         *   File name format for a daily push: `UID_InstanceDetail_YYYYMMDD`. Example: `169**_InstanceDetail_20190310`.
   *         *   File name format for a full-data push at the beginning of the next month: `UID_InstanceDetail_YYYYMM`. Example: `169**_InstanceDetail_201903`.
   *     *   **InstanceDetailMonthly** (Instance-based bills summarized by billing cycle)
   *         *   File name format for a daily push: `UID_InstanceDetailMonthly_YYYYMM`. Example: `169**_InstanceDetailMonthly_201903`. A bill of this type contains the full data generated from the beginning of the month to the current day, and is updated every day until the fourth day of the next month.
   *     *   **BillingItemDetailMonthly** (Billable item-based bills summarized by billing cycle)
   *         *   File name format for a daily push: `UID_BillingItemDetailMonthly_YYYYMM`. Example: `169**_BillingItemDetailMonthly_201903`. A bill of this type contains the full data generated from the beginning of the month to the current day, and is updated every day until the fourth day of the next month.
   *     *   **SplitItemDetailDaily** (Split bills summarized by day)
   *         *   File name format for a daily push: `UID_SplitItemDetailDaily_YYYYMM`. Example: `169**_SplitItemDetailDaily_201903`. A bill of this type contains the full data generated from the beginning of the month to the current day, and is updated every day until the fourth day of the next month.
   *     *   **MonthBill** (Monthly bill in the PDF format)
   *         *   File name format for a monthly push: `UID_MonthBill_YYYYMM`. Example: `169**_MonthBill_201903`. The bill for the previous month is pushed on the fourth day of each month.
   * *   The bills of the MonthBill type are PDF files, whereas the bills of other types are CSV files. If the number of data rows in a bill exceeds a threshold, the bill is automatically split into multiple CSV files. Then, the multiple CSV files are automatically merged and compressed into a ZIP file that has the same name format as the original file.
   * 
   * @param request - SubscribeBillToOSSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubscribeBillToOSSResponse
   */
  async subscribeBillToOSSWithOptions(request: $_model.SubscribeBillToOSSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubscribeBillToOSSResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginBillingCycle)) {
      query["BeginBillingCycle"] = request.beginBillingCycle;
    }

    if (!$dara.isNull(request.bucketOwnerId)) {
      query["BucketOwnerId"] = request.bucketOwnerId;
    }

    if (!$dara.isNull(request.bucketPath)) {
      query["BucketPath"] = request.bucketPath;
    }

    if (!$dara.isNull(request.multAccountRelSubscribe)) {
      query["MultAccountRelSubscribe"] = request.multAccountRelSubscribe;
    }

    if (!$dara.isNull(request.rowLimitPerFile)) {
      query["RowLimitPerFile"] = request.rowLimitPerFile;
    }

    if (!$dara.isNull(request.subscribeBucket)) {
      query["SubscribeBucket"] = request.subscribeBucket;
    }

    if (!$dara.isNull(request.subscribeType)) {
      query["SubscribeType"] = request.subscribeType;
    }

    if (!$dara.isNull(request.usingSsl)) {
      query["UsingSsl"] = request.usingSsl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubscribeBillToOSS",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubscribeBillToOSSResponse>(await this.callApi(params, req, runtime), new $_model.SubscribeBillToOSSResponse({}));
  }

  /**
   * Subscribes to the bills that are stored in Object Storage Service (OSS) buckets.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   You can subscribe to only one type of bill at a time.
   * *   The bills generated on the previous day are pushed on a daily basis the next day after you subscribe to the bills. The full-data bills for the previous month are pushed on the fourth day of each month. The monthly bills in the PDF format for the previous month are pushed on the fourth day of each month.
   * *   The daily bills may be delayed. The delayed bills are pushed the next day after they are generated. The delayed bills may include the bills that should have been pushed on the previous day. We recommend that you query the full-data bills for the previous month at the beginning of each month.
   * *   The bill subscriber must have the [AliyunConsumeDump2OSSRole](https://ram.console.aliyun.com/#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunConsumeDump2OSSRole%22,%20%22TemplateId%22:%20%22Dump2OSSRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fusercenter2.aliyun.com%22,%20%22Service%22:%20%22Consume%22%7D) permission.
   * *   The SubscribeBillToOSS operation has the same functionality as the Save Expense Details to OSS Bucket feature in User Center.
   * *   To subscribe to the bills stored in an OSS bucket, make sure that the directory name specified for the OSS bucket conforms to the following naming rules:
   * 1.  1.  The directory name can contain only UTF-8 characters and cannot contain emoticons.
   * 2.  2.  Forward slashes (/) are used to separate paths and can be used to create subdirectories with ease. The directory name cannot start with a forward slash (/), a backslash (\\\\), or consecutive forward slashes (/).
   * 3.  3.  The name of a subdirectory cannot be set to two consecutive periods (..).
   * 4.  4.  The directory name must be 1 to 254 characters in length.
   * *   File names:
   *     *   **BillingItemDetailForBillingPeriod** (Detailed bills of billable items)
   *         *   File name format for a daily push: `UID_BillingItemDetail_YYYYMMDD`. Example: `169**_BillingItemDetail_20190310`.
   *         *   File name format for a full-data push at the beginning of the next month: `UID_BillingItemDetail_YYYYMM`. Example: `169**_BillingItemDetail_201903`.
   *     *   **InstanceDetailForBillingPeriod** (Detailed bills of instances)
   *         *   File name format for a daily push: `UID_InstanceDetail_YYYYMMDD`. Example: `169**_InstanceDetail_20190310`.
   *         *   File name format for a full-data push at the beginning of the next month: `UID_InstanceDetail_YYYYMM`. Example: `169**_InstanceDetail_201903`.
   *     *   **InstanceDetailMonthly** (Instance-based bills summarized by billing cycle)
   *         *   File name format for a daily push: `UID_InstanceDetailMonthly_YYYYMM`. Example: `169**_InstanceDetailMonthly_201903`. A bill of this type contains the full data generated from the beginning of the month to the current day, and is updated every day until the fourth day of the next month.
   *     *   **BillingItemDetailMonthly** (Billable item-based bills summarized by billing cycle)
   *         *   File name format for a daily push: `UID_BillingItemDetailMonthly_YYYYMM`. Example: `169**_BillingItemDetailMonthly_201903`. A bill of this type contains the full data generated from the beginning of the month to the current day, and is updated every day until the fourth day of the next month.
   *     *   **SplitItemDetailDaily** (Split bills summarized by day)
   *         *   File name format for a daily push: `UID_SplitItemDetailDaily_YYYYMM`. Example: `169**_SplitItemDetailDaily_201903`. A bill of this type contains the full data generated from the beginning of the month to the current day, and is updated every day until the fourth day of the next month.
   *     *   **MonthBill** (Monthly bill in the PDF format)
   *         *   File name format for a monthly push: `UID_MonthBill_YYYYMM`. Example: `169**_MonthBill_201903`. The bill for the previous month is pushed on the fourth day of each month.
   * *   The bills of the MonthBill type are PDF files, whereas the bills of other types are CSV files. If the number of data rows in a bill exceeds a threshold, the bill is automatically split into multiple CSV files. Then, the multiple CSV files are automatically merged and compressed into a ZIP file that has the same name format as the original file.
   * 
   * @param request - SubscribeBillToOSSRequest
   * @returns SubscribeBillToOSSResponse
   */
  async subscribeBillToOSS(request: $_model.SubscribeBillToOSSRequest): Promise<$_model.SubscribeBillToOSSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.subscribeBillToOSSWithOptions(request, runtime);
  }

  /**
   * Add tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2017-12-14",
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
   * Add tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Unsubscribes from the bills that are stored in Object Storage Service (OSS) buckets.
   * 
   * @param request - UnsubscribeBillToOSSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnsubscribeBillToOSSResponse
   */
  async unsubscribeBillToOSSWithOptions(request: $_model.UnsubscribeBillToOSSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnsubscribeBillToOSSResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.multAccountRelSubscribe)) {
      query["MultAccountRelSubscribe"] = request.multAccountRelSubscribe;
    }

    if (!$dara.isNull(request.subscribeType)) {
      query["SubscribeType"] = request.subscribeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnsubscribeBillToOSS",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnsubscribeBillToOSSResponse>(await this.callApi(params, req, runtime), new $_model.UnsubscribeBillToOSSResponse({}));
  }

  /**
   * Unsubscribes from the bills that are stored in Object Storage Service (OSS) buckets.
   * 
   * @param request - UnsubscribeBillToOSSRequest
   * @returns UnsubscribeBillToOSSResponse
   */
  async unsubscribeBillToOSS(request: $_model.UnsubscribeBillToOSSRequest): Promise<$_model.UnsubscribeBillToOSSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unsubscribeBillToOSSWithOptions(request, runtime);
  }

  /**
   * Removes tags from resources.
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

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2017-12-14",
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
   * Removes tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Upgrades a resource plan.
   * 
   * @param request - UpgradeResourcePackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeResourcePackageResponse
   */
  async upgradeResourcePackageWithOptions(request: $_model.UpgradeResourcePackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeResourcePackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.effectiveDate)) {
      query["EffectiveDate"] = request.effectiveDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.specification)) {
      query["Specification"] = request.specification;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeResourcePackage",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeResourcePackageResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeResourcePackageResponse({}));
  }

  /**
   * Upgrades a resource plan.
   * 
   * @param request - UpgradeResourcePackageRequest
   * @returns UpgradeResourcePackageResponse
   */
  async upgradeResourcePackage(request: $_model.UpgradeResourcePackageRequest): Promise<$_model.UpgradeResourcePackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeResourcePackageWithOptions(request, runtime);
  }

}
