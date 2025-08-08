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
      'cn-hangzhou': "market.aliyuncs.com",
      'ap-northeast-1': "market.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "market.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "market.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "market.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "market.ap-southeast-1.aliyuncs.com",
      'cn-beijing': "market.aliyuncs.com",
      'cn-chengdu': "market.aliyuncs.com",
      'cn-hongkong': "market.aliyuncs.com",
      'cn-huhehaote': "market.aliyuncs.com",
      'cn-qingdao': "market.aliyuncs.com",
      'cn-shanghai': "market.aliyuncs.com",
      'cn-shenzhen': "market.aliyuncs.com",
      'cn-zhangjiakou': "market.aliyuncs.com",
      'eu-central-1': "market.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "market.ap-southeast-1.aliyuncs.com",
      'me-east-1': "market.ap-southeast-1.aliyuncs.com",
      'us-east-1': "market.ap-southeast-1.aliyuncs.com",
      'us-west-1': "market.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou-finance': "market.aliyuncs.com",
      'cn-shenzhen-finance-1': "market.aliyuncs.com",
      'cn-shanghai-finance-1': "market.aliyuncs.com",
      'cn-north-2-gov-1': "market.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("market", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 增加STS支持
   * 
   * @param request - ActivateLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateLicenseResponse
   */
  async activateLicenseWithOptions(request: $_model.ActivateLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identification)) {
      query["Identification"] = request.identification;
    }

    if (!$dara.isNull(request.licenseCode)) {
      query["LicenseCode"] = request.licenseCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateLicense",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActivateLicenseResponse>(await this.callApi(params, req, runtime), new $_model.ActivateLicenseResponse({}));
  }

  /**
   * 增加STS支持
   * 
   * @param request - ActivateLicenseRequest
   * @returns ActivateLicenseResponse
   */
  async activateLicense(request: $_model.ActivateLicenseRequest): Promise<$_model.ActivateLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activateLicenseWithOptions(request, runtime);
  }

  /**
   * @param request - AutoRenewInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AutoRenewInstanceResponse
   */
  async autoRenewInstanceWithOptions(request: $_model.AutoRenewInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AutoRenewInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenewCycle)) {
      body["AutoRenewCycle"] = request.autoRenewCycle;
    }

    if (!$dara.isNull(request.autoRenewDuration)) {
      body["AutoRenewDuration"] = request.autoRenewDuration;
    }

    if (!$dara.isNull(request.orderBizId)) {
      body["OrderBizId"] = request.orderBizId;
    }

    if (!$dara.isNull(request.ownerId)) {
      body["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AutoRenewInstance",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AutoRenewInstanceResponse>(await this.callApi(params, req, runtime), new $_model.AutoRenewInstanceResponse({}));
  }

  /**
   * @param request - AutoRenewInstanceRequest
   * @returns AutoRenewInstanceResponse
   */
  async autoRenewInstance(request: $_model.AutoRenewInstanceRequest): Promise<$_model.AutoRenewInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.autoRenewInstanceWithOptions(request, runtime);
  }

  /**
   * 确认查收订阅通知
   * 
   * @param request - ConfirmNotificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmNotificationResponse
   */
  async confirmNotificationWithOptions(request: $_model.ConfirmNotificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfirmNotificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.notificationRequestId)) {
      query["NotificationRequestId"] = request.notificationRequestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfirmNotification",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfirmNotificationResponse>(await this.callApi(params, req, runtime), new $_model.ConfirmNotificationResponse({}));
  }

  /**
   * 确认查收订阅通知
   * 
   * @param request - ConfirmNotificationRequest
   * @returns ConfirmNotificationResponse
   */
  async confirmNotification(request: $_model.ConfirmNotificationRequest): Promise<$_model.ConfirmNotificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.confirmNotificationWithOptions(request, runtime);
  }

  /**
   * @param request - CreateOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrderResponse
   */
  async createOrderWithOptions(request: $_model.CreateOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commodity)) {
      query["Commodity"] = request.commodity;
    }

    if (!$dara.isNull(request.orderSouce)) {
      query["OrderSouce"] = request.orderSouce;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrder",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrderResponse({}));
  }

  /**
   * @param request - CreateOrderRequest
   * @returns CreateOrderResponse
   */
  async createOrder(request: $_model.CreateOrderRequest): Promise<$_model.CreateOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrderWithOptions(request, runtime);
  }

  /**
   * @param request - CrossAccountVerifyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CrossAccountVerifyTokenResponse
   */
  async crossAccountVerifyTokenWithOptions(request: $_model.CrossAccountVerifyTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CrossAccountVerifyTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.token)) {
      body["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CrossAccountVerifyToken",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CrossAccountVerifyTokenResponse>(await this.callApi(params, req, runtime), new $_model.CrossAccountVerifyTokenResponse({}));
  }

  /**
   * @param request - CrossAccountVerifyTokenRequest
   * @returns CrossAccountVerifyTokenResponse
   */
  async crossAccountVerifyToken(request: $_model.CrossAccountVerifyTokenRequest): Promise<$_model.CrossAccountVerifyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.crossAccountVerifyTokenWithOptions(request, runtime);
  }

  /**
   * 查询API用量
   * 
   * @param request - DescribeApiMeteringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiMeteringResponse
   */
  async describeApiMeteringWithOptions(request: $_model.DescribeApiMeteringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiMeteringResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiMetering",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiMeteringResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiMeteringResponse({}));
  }

  /**
   * 查询API用量
   * 
   * @param request - DescribeApiMeteringRequest
   * @returns DescribeApiMeteringResponse
   */
  async describeApiMetering(request: $_model.DescribeApiMeteringRequest): Promise<$_model.DescribeApiMeteringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiMeteringWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeCurrentNodeInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCurrentNodeInfoResponse
   */
  async describeCurrentNodeInfoWithOptions(request: $_model.DescribeCurrentNodeInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCurrentNodeInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCurrentNodeInfo",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCurrentNodeInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCurrentNodeInfoResponse({}));
  }

  /**
   * @param request - DescribeCurrentNodeInfoRequest
   * @returns DescribeCurrentNodeInfoResponse
   */
  async describeCurrentNodeInfo(request: $_model.DescribeCurrentNodeInfoRequest): Promise<$_model.DescribeCurrentNodeInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCurrentNodeInfoWithOptions(request, runtime);
  }

  /**
   * 分页获取推广商品
   * 
   * @param request - DescribeDistributionProductsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDistributionProductsResponse
   */
  async describeDistributionProductsWithOptions(request: $_model.DescribeDistributionProductsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDistributionProductsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDistributionProducts",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDistributionProductsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDistributionProductsResponse({}));
  }

  /**
   * 分页获取推广商品
   * 
   * @param request - DescribeDistributionProductsRequest
   * @returns DescribeDistributionProductsResponse
   */
  async describeDistributionProducts(request: $_model.DescribeDistributionProductsRequest): Promise<$_model.DescribeDistributionProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDistributionProductsWithOptions(request, runtime);
  }

  /**
   * 获取并生成推广商品-链接
   * 
   * @param tmpReq - DescribeDistributionProductsLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDistributionProductsLinkResponse
   */
  async describeDistributionProductsLinkWithOptions(tmpReq: $_model.DescribeDistributionProductsLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDistributionProductsLinkResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeDistributionProductsLinkShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.codes)) {
      request.codesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.codes, "Codes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.codesShrink)) {
      query["Codes"] = request.codesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDistributionProductsLink",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDistributionProductsLinkResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDistributionProductsLinkResponse({}));
  }

  /**
   * 获取并生成推广商品-链接
   * 
   * @param request - DescribeDistributionProductsLinkRequest
   * @returns DescribeDistributionProductsLinkResponse
   */
  async describeDistributionProductsLink(request: $_model.DescribeDistributionProductsLinkRequest): Promise<$_model.DescribeDistributionProductsLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDistributionProductsLinkWithOptions(request, runtime);
  }

  /**
   * 查询订阅通知失败列表
   * 
   * @param request - DescribeFailedNotificationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFailedNotificationsResponse
   */
  async describeFailedNotificationsWithOptions(request: $_model.DescribeFailedNotificationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFailedNotificationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFailedNotifications",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFailedNotificationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFailedNotificationsResponse({}));
  }

  /**
   * 查询订阅通知失败列表
   * 
   * @param request - DescribeFailedNotificationsRequest
   * @returns DescribeFailedNotificationsResponse
   */
  async describeFailedNotifications(request: $_model.DescribeFailedNotificationsRequest): Promise<$_model.DescribeFailedNotificationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFailedNotificationsWithOptions(request, runtime);
  }

  /**
   * 服务商侧查询镜像实例信息
   * 
   * @param request - DescribeImageInstanceForIsvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImageInstanceForIsvResponse
   */
  async describeImageInstanceForIsvWithOptions(request: $_model.DescribeImageInstanceForIsvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImageInstanceForIsvResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerPk)) {
      query["CustomerPk"] = request.customerPk;
    }

    if (!$dara.isNull(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImageInstanceForIsv",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeImageInstanceForIsvResponse>(await this.callApi(params, req, runtime), new $_model.DescribeImageInstanceForIsvResponse({}));
  }

  /**
   * 服务商侧查询镜像实例信息
   * 
   * @param request - DescribeImageInstanceForIsvRequest
   * @returns DescribeImageInstanceForIsvResponse
   */
  async describeImageInstanceForIsv(request: $_model.DescribeImageInstanceForIsvRequest): Promise<$_model.DescribeImageInstanceForIsvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImageInstanceForIsvWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceResponse
   */
  async describeInstanceWithOptions(request: $_model.DescribeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstance",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceResponse({}));
  }

  /**
   * @param request - DescribeInstanceRequest
   * @returns DescribeInstanceResponse
   */
  async describeInstance(request: $_model.DescribeInstanceRequest): Promise<$_model.DescribeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  /**
   * 服务商侧查询实例信息
   * 
   * @param request - DescribeInstanceForIsvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceForIsvResponse
   */
  async describeInstanceForIsvWithOptions(request: $_model.DescribeInstanceForIsvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceForIsvResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceForIsv",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceForIsvResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceForIsvResponse({}));
  }

  /**
   * 服务商侧查询实例信息
   * 
   * @param request - DescribeInstanceForIsvRequest
   * @returns DescribeInstanceForIsvResponse
   */
  async describeInstanceForIsv(request: $_model.DescribeInstanceForIsvRequest): Promise<$_model.DescribeInstanceForIsvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceForIsvWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
   */
  async describeInstancesWithOptions(request: $_model.DescribeInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.codes)) {
      query["Codes"] = request.codes;
    }

    if (!$dara.isNull(request.exceptCodes)) {
      query["ExceptCodes"] = request.exceptCodes;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstances",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstancesResponse({}));
  }

  /**
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: $_model.DescribeInstancesRequest): Promise<$_model.DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * 查询供应商下的发票信息
   * 
   * @param request - DescribeInvoiceForIsvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInvoiceForIsvResponse
   */
  async describeInvoiceForIsvWithOptions(request: $_model.DescribeInvoiceForIsvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInvoiceForIsvResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!$dara.isNull(request.createTimeStart)) {
      query["CreateTimeStart"] = request.createTimeStart;
    }

    if (!$dara.isNull(request.invoiceId)) {
      query["InvoiceId"] = request.invoiceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
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

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInvoiceForIsv",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInvoiceForIsvResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInvoiceForIsvResponse({}));
  }

  /**
   * 查询供应商下的发票信息
   * 
   * @param request - DescribeInvoiceForIsvRequest
   * @returns DescribeInvoiceForIsvResponse
   */
  async describeInvoiceForIsv(request: $_model.DescribeInvoiceForIsvRequest): Promise<$_model.DescribeInvoiceForIsvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInvoiceForIsvWithOptions(request, runtime);
  }

  /**
   * 获取License
   * 
   * @param request - DescribeLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLicenseResponse
   */
  async describeLicenseWithOptions(request: $_model.DescribeLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.licenseCode)) {
      query["LicenseCode"] = request.licenseCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLicense",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLicenseResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLicenseResponse({}));
  }

  /**
   * 获取License
   * 
   * @param request - DescribeLicenseRequest
   * @returns DescribeLicenseResponse
   */
  async describeLicense(request: $_model.DescribeLicenseRequest): Promise<$_model.DescribeLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLicenseWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOrderResponse
   */
  async describeOrderWithOptions(request: $_model.DescribeOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOrder",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOrderResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOrderResponse({}));
  }

  /**
   * @param request - DescribeOrderRequest
   * @returns DescribeOrderResponse
   */
  async describeOrder(request: $_model.DescribeOrderRequest): Promise<$_model.DescribeOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOrderWithOptions(request, runtime);
  }

  /**
   * 服务商侧查询订单详情
   * 
   * @param request - DescribeOrderForIsvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOrderForIsvResponse
   */
  async describeOrderForIsvWithOptions(request: $_model.DescribeOrderForIsvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOrderForIsvResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOrderForIsv",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOrderForIsvResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOrderForIsvResponse({}));
  }

  /**
   * 服务商侧查询订单详情
   * 
   * @param request - DescribeOrderForIsvRequest
   * @returns DescribeOrderForIsvResponse
   */
  async describeOrderForIsv(request: $_model.DescribeOrderForIsvRequest): Promise<$_model.DescribeOrderForIsvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOrderForIsvWithOptions(request, runtime);
  }

  /**
   * @param request - DescribePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePriceResponse
   */
  async describePriceWithOptions(request: $_model.DescribePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commodity)) {
      query["Commodity"] = request.commodity;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePrice",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePriceResponse>(await this.callApi(params, req, runtime), new $_model.DescribePriceResponse({}));
  }

  /**
   * @param request - DescribePriceRequest
   * @returns DescribePriceResponse
   */
  async describePrice(request: $_model.DescribePriceRequest): Promise<$_model.DescribePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProductResponse
   */
  async describeProductWithOptions(request: $_model.DescribeProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.queryDraft)) {
      query["QueryDraft"] = request.queryDraft;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProduct",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProductResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProductResponse({}));
  }

  /**
   * @param request - DescribeProductRequest
   * @returns DescribeProductResponse
   */
  async describeProduct(request: $_model.DescribeProductRequest): Promise<$_model.DescribeProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProductWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeProductsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProductsResponse
   */
  async describeProductsWithOptions(request: $_model.DescribeProductsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProductsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchTerm)) {
      query["SearchTerm"] = request.searchTerm;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProducts",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProductsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProductsResponse({}));
  }

  /**
   * @param request - DescribeProductsRequest
   * @returns DescribeProductsResponse
   */
  async describeProducts(request: $_model.DescribeProductsRequest): Promise<$_model.DescribeProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProductsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeProjectAttachmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectAttachmentsResponse
   */
  async describeProjectAttachmentsWithOptions(request: $_model.DescribeProjectAttachmentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProjectAttachmentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProjectAttachments",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProjectAttachmentsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProjectAttachmentsResponse({}));
  }

  /**
   * @param request - DescribeProjectAttachmentsRequest
   * @returns DescribeProjectAttachmentsResponse
   */
  async describeProjectAttachments(request: $_model.DescribeProjectAttachmentsRequest): Promise<$_model.DescribeProjectAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProjectAttachmentsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeProjectInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectInfoResponse
   */
  async describeProjectInfoWithOptions(request: $_model.DescribeProjectInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProjectInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProjectInfo",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProjectInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProjectInfoResponse({}));
  }

  /**
   * @param request - DescribeProjectInfoRequest
   * @returns DescribeProjectInfoResponse
   */
  async describeProjectInfo(request: $_model.DescribeProjectInfoRequest): Promise<$_model.DescribeProjectInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProjectInfoWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeProjectMessagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectMessagesResponse
   */
  async describeProjectMessagesWithOptions(request: $_model.DescribeProjectMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProjectMessagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProjectMessages",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProjectMessagesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProjectMessagesResponse({}));
  }

  /**
   * @param request - DescribeProjectMessagesRequest
   * @returns DescribeProjectMessagesResponse
   */
  async describeProjectMessages(request: $_model.DescribeProjectMessagesRequest): Promise<$_model.DescribeProjectMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProjectMessagesWithOptions(request, runtime);
  }

  /**
   * @remarks
   * *
   * **
   * 
   * @param request - DescribeProjectNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectNodesResponse
   */
  async describeProjectNodesWithOptions(request: $_model.DescribeProjectNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProjectNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProjectNodes",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProjectNodesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProjectNodesResponse({}));
  }

  /**
   * @remarks
   * *
   * **
   * 
   * @param request - DescribeProjectNodesRequest
   * @returns DescribeProjectNodesResponse
   */
  async describeProjectNodes(request: $_model.DescribeProjectNodesRequest): Promise<$_model.DescribeProjectNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProjectNodesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeProjectOperateLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectOperateLogsResponse
   */
  async describeProjectOperateLogsWithOptions(request: $_model.DescribeProjectOperateLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProjectOperateLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProjectOperateLogs",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProjectOperateLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProjectOperateLogsResponse({}));
  }

  /**
   * @param request - DescribeProjectOperateLogsRequest
   * @returns DescribeProjectOperateLogsResponse
   */
  async describeProjectOperateLogs(request: $_model.DescribeProjectOperateLogsRequest): Promise<$_model.DescribeProjectOperateLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProjectOperateLogsWithOptions(request, runtime);
  }

  /**
   * @param request - FinishCurrentProjectNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FinishCurrentProjectNodeResponse
   */
  async finishCurrentProjectNodeWithOptions(request: $_model.FinishCurrentProjectNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FinishCurrentProjectNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.templateForm)) {
      query["TemplateForm"] = request.templateForm;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FinishCurrentProjectNode",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FinishCurrentProjectNodeResponse>(await this.callApi(params, req, runtime), new $_model.FinishCurrentProjectNodeResponse({}));
  }

  /**
   * @param request - FinishCurrentProjectNodeRequest
   * @returns FinishCurrentProjectNodeResponse
   */
  async finishCurrentProjectNode(request: $_model.FinishCurrentProjectNodeRequest): Promise<$_model.FinishCurrentProjectNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.finishCurrentProjectNodeWithOptions(request, runtime);
  }

  /**
   * 发票受理接口
   * 
   * @param request - ModifyInvoiceForIsvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInvoiceForIsvResponse
   */
  async modifyInvoiceForIsvWithOptions(request: $_model.ModifyInvoiceForIsvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInvoiceForIsvResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkNotice)) {
      query["CheckNotice"] = request.checkNotice;
    }

    if (!$dara.isNull(request.electronUrl)) {
      query["ElectronUrl"] = request.electronUrl;
    }

    if (!$dara.isNull(request.invoiceId)) {
      query["InvoiceId"] = request.invoiceId;
    }

    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInvoiceForIsv",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInvoiceForIsvResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInvoiceForIsvResponse({}));
  }

  /**
   * 发票受理接口
   * 
   * @param request - ModifyInvoiceForIsvRequest
   * @returns ModifyInvoiceForIsvResponse
   */
  async modifyInvoiceForIsv(request: $_model.ModifyInvoiceForIsvRequest): Promise<$_model.ModifyInvoiceForIsvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInvoiceForIsvWithOptions(request, runtime);
  }

  /**
   * @param request - PauseProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseProjectResponse
   */
  async pauseProjectWithOptions(request: $_model.PauseProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PauseProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseProject",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PauseProjectResponse>(await this.callApi(params, req, runtime), new $_model.PauseProjectResponse({}));
  }

  /**
   * @param request - PauseProjectRequest
   * @returns PauseProjectResponse
   */
  async pauseProject(request: $_model.PauseProjectRequest): Promise<$_model.PauseProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pauseProjectWithOptions(request, runtime);
  }

  /**
   * @param request - PushMeteringDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushMeteringDataResponse
   */
  async pushMeteringDataWithOptions(request: $_model.PushMeteringDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushMeteringDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.metering)) {
      query["Metering"] = request.metering;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushMeteringData",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushMeteringDataResponse>(await this.callApi(params, req, runtime), new $_model.PushMeteringDataResponse({}));
  }

  /**
   * @param request - PushMeteringDataRequest
   * @returns PushMeteringDataResponse
   */
  async pushMeteringData(request: $_model.PushMeteringDataRequest): Promise<$_model.PushMeteringDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushMeteringDataWithOptions(request, runtime);
  }

  /**
   * @param request - ResumeProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeProjectResponse
   */
  async resumeProjectWithOptions(request: $_model.ResumeProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeProject",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeProjectResponse>(await this.callApi(params, req, runtime), new $_model.ResumeProjectResponse({}));
  }

  /**
   * @param request - ResumeProjectRequest
   * @returns ResumeProjectResponse
   */
  async resumeProject(request: $_model.ResumeProjectRequest): Promise<$_model.ResumeProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeProjectWithOptions(request, runtime);
  }

  /**
   * @param request - RollbackCurrentProjectNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackCurrentProjectNodeResponse
   */
  async rollbackCurrentProjectNodeWithOptions(request: $_model.RollbackCurrentProjectNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackCurrentProjectNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackCurrentProjectNode",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackCurrentProjectNodeResponse>(await this.callApi(params, req, runtime), new $_model.RollbackCurrentProjectNodeResponse({}));
  }

  /**
   * @param request - RollbackCurrentProjectNodeRequest
   * @returns RollbackCurrentProjectNodeResponse
   */
  async rollbackCurrentProjectNode(request: $_model.RollbackCurrentProjectNodeRequest): Promise<$_model.RollbackCurrentProjectNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackCurrentProjectNodeWithOptions(request, runtime);
  }

}
