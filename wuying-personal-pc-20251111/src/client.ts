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
    this._endpoint = this.getEndpoint("wuying-personal-pc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建桌面镜像
   * 
   * @param tmpReq - CreateDesktopImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDesktopImageResponse
   */
  async createDesktopImageWithOptions(tmpReq: $_model.CreateDesktopImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDesktopImageResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDesktopImageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.startUpFilePathList)) {
      request.startUpFilePathListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.startUpFilePathList, "StartUpFilePathList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.autoCleanUserData)) {
      query["AutoCleanUserData"] = request.autoCleanUserData;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.enableStartUpConfig)) {
      query["EnableStartUpConfig"] = request.enableStartUpConfig;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.startUpFilePathListShrink)) {
      query["StartUpFilePathList"] = request.startUpFilePathListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDesktopImage",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDesktopImageResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.CreateDesktopImageResponse({}));
  }

  /**
   * 创建桌面镜像
   * 
   * @param request - CreateDesktopImageRequest
   * @returns CreateDesktopImageResponse
   */
  async createDesktopImage(request: $_model.CreateDesktopImageRequest): Promise<$_model.CreateDesktopImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDesktopImageWithOptions(request, runtime);
  }

  /**
   * 下单套餐包和核时包
   * 
   * @param tmpReq - CreateOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrderResponse
   */
  async createOrderWithOptions(tmpReq: $_model.CreateOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dynamicProductParams)) {
      request.dynamicProductParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dynamicProductParams, "DynamicProductParams", "json");
    }

    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.dynamicProductParamsShrink)) {
      query["DynamicProductParams"] = request.dynamicProductParamsShrink;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.orderFrom)) {
      query["OrderFrom"] = request.orderFrom;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrder",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrderResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.CreateOrderResponse({}));
  }

  /**
   * 下单套餐包和核时包
   * 
   * @param request - CreateOrderRequest
   * @returns CreateOrderResponse
   */
  async createOrder(request: $_model.CreateOrderRequest): Promise<$_model.CreateOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrderWithOptions(request, runtime);
  }

  /**
   * 删除云桌面
   * 
   * @param request - DeleteDesktopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDesktopResponse
   */
  async deleteDesktopWithOptions(request: $_model.DeleteDesktopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDesktopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDesktop",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDesktopResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DeleteDesktopResponse({}));
  }

  /**
   * 删除云桌面
   * 
   * @param request - DeleteDesktopRequest
   * @returns DeleteDesktopResponse
   */
  async deleteDesktop(request: $_model.DeleteDesktopRequest): Promise<$_model.DeleteDesktopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDesktopWithOptions(request, runtime);
  }

  /**
   * 删除桌面镜像
   * 
   * @param request - DeleteDesktopImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDesktopImageResponse
   */
  async deleteDesktopImageWithOptions(request: $_model.DeleteDesktopImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDesktopImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.isCleanImageCode)) {
      query["IsCleanImageCode"] = request.isCleanImageCode;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDesktopImage",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDesktopImageResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DeleteDesktopImageResponse({}));
  }

  /**
   * 删除桌面镜像
   * 
   * @param request - DeleteDesktopImageRequest
   * @returns DeleteDesktopImageResponse
   */
  async deleteDesktopImage(request: $_model.DeleteDesktopImageRequest): Promise<$_model.DeleteDesktopImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDesktopImageWithOptions(request, runtime);
  }

  /**
   * 查询用户可变更的镜像
   * 
   * @param request - DescribeAccessibleImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccessibleImagesResponse
   */
  async describeAccessibleImagesWithOptions(request: $_model.DescribeAccessibleImagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccessibleImagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.bizSource)) {
      query["BizSource"] = request.bizSource;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.desktopType)) {
      query["DesktopType"] = request.desktopType;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccessibleImages",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccessibleImagesResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeAccessibleImagesResponse({}));
  }

  /**
   * 查询用户可变更的镜像
   * 
   * @param request - DescribeAccessibleImagesRequest
   * @returns DescribeAccessibleImagesResponse
   */
  async describeAccessibleImages(request: $_model.DescribeAccessibleImagesRequest): Promise<$_model.DescribeAccessibleImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccessibleImagesWithOptions(request, runtime);
  }

  /**
   * 查询核时包包列表
   * 
   * @param request - DescribeCorePackageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCorePackageListResponse
   */
  async describeCorePackageListWithOptions(request: $_model.DescribeCorePackageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCorePackageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.queryDeductionInstances)) {
      query["QueryDeductionInstances"] = request.queryDeductionInstances;
    }

    if (!$dara.isNull(request.queryScenario)) {
      query["QueryScenario"] = request.queryScenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCorePackageList",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCorePackageListResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeCorePackageListResponse({}));
  }

  /**
   * 查询核时包包列表
   * 
   * @param request - DescribeCorePackageListRequest
   * @returns DescribeCorePackageListResponse
   */
  async describeCorePackageList(request: $_model.DescribeCorePackageListRequest): Promise<$_model.DescribeCorePackageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCorePackageListWithOptions(request, runtime);
  }

  /**
   * 软终端分tab查询云桌面列表 & 组织信息
   * 
   * @param request - DescribeDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDesktopsResponse
   */
  async describeDesktopsWithOptions(request: $_model.DescribeDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.displayType)) {
      query["DisplayType"] = request.displayType;
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
      action: "DescribeDesktops",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDesktopsResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeDesktopsResponse({}));
  }

  /**
   * 软终端分tab查询云桌面列表 & 组织信息
   * 
   * @param request - DescribeDesktopsRequest
   * @returns DescribeDesktopsResponse
   */
  async describeDesktops(request: $_model.DescribeDesktopsRequest): Promise<$_model.DescribeDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDesktopsWithOptions(request, runtime);
  }

  /**
   * 根据分享码查询镜像
   * 
   * @param request - DescribeImageDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImageDetailResponse
   */
  async describeImageDetailWithOptions(request: $_model.DescribeImageDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImageDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.shareCode)) {
      query["ShareCode"] = request.shareCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImageDetail",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeImageDetailResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribeImageDetailResponse({}));
  }

  /**
   * 根据分享码查询镜像
   * 
   * @param request - DescribeImageDetailRequest
   * @returns DescribeImageDetailResponse
   */
  async describeImageDetail(request: $_model.DescribeImageDetailRequest): Promise<$_model.DescribeImageDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImageDetailWithOptions(request, runtime);
  }

  /**
   * 查询套餐包订单列表
   * 
   * @param tmpReq - DescribePackageOrdersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePackageOrdersResponse
   */
  async describePackageOrdersWithOptions(tmpReq: $_model.DescribePackageOrdersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePackageOrdersResponse> {
    tmpReq.validate();
    let request = new $_model.DescribePackageOrdersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.desktopIdList)) {
      request.desktopIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.desktopIdList, "DesktopIdList", "json");
    }

    if (!$dara.isNull(tmpReq.orderIdList)) {
      request.orderIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderIdList, "OrderIdList", "json");
    }

    if (!$dara.isNull(tmpReq.orderStatusList)) {
      request.orderStatusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderStatusList, "OrderStatusList", "json");
    }

    if (!$dara.isNull(tmpReq.productTypeList)) {
      request.productTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.productTypeList, "ProductTypeList", "json");
    }

    if (!$dara.isNull(tmpReq.resourceIdList)) {
      request.resourceIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIdList, "ResourceIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.desktopIdListShrink)) {
      query["DesktopIdList"] = request.desktopIdListShrink;
    }

    if (!$dara.isNull(request.orderIdListShrink)) {
      query["OrderIdList"] = request.orderIdListShrink;
    }

    if (!$dara.isNull(request.orderStatusListShrink)) {
      query["OrderStatusList"] = request.orderStatusListShrink;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productTypeListShrink)) {
      query["ProductTypeList"] = request.productTypeListShrink;
    }

    if (!$dara.isNull(request.resourceIdListShrink)) {
      query["ResourceIdList"] = request.resourceIdListShrink;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePackageOrders",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePackageOrdersResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.DescribePackageOrdersResponse({}));
  }

  /**
   * 查询套餐包订单列表
   * 
   * @param request - DescribePackageOrdersRequest
   * @returns DescribePackageOrdersResponse
   */
  async describePackageOrders(request: $_model.DescribePackageOrdersRequest): Promise<$_model.DescribePackageOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePackageOrdersWithOptions(request, runtime);
  }

  /**
   * 生成无影工作站的场景url
   * 
   * @param request - GenerateWuyingServerSceneUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateWuyingServerSceneUrlResponse
   */
  async generateWuyingServerSceneUrlWithOptions(request: $_model.GenerateWuyingServerSceneUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateWuyingServerSceneUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    if (!$dara.isNull(request.wuyingServerId)) {
      body["WuyingServerId"] = request.wuyingServerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateWuyingServerSceneUrl",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateWuyingServerSceneUrlResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.GenerateWuyingServerSceneUrlResponse({}));
  }

  /**
   * 生成无影工作站的场景url
   * 
   * @param request - GenerateWuyingServerSceneUrlRequest
   * @returns GenerateWuyingServerSceneUrlResponse
   */
  async generateWuyingServerSceneUrl(request: $_model.GenerateWuyingServerSceneUrlRequest): Promise<$_model.GenerateWuyingServerSceneUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateWuyingServerSceneUrlWithOptions(request, runtime);
  }

  /**
   * 查询展示商品列表
   * 
   * @param request - GetProductListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProductListResponse
   */
  async getProductListWithOptions(request: $_model.GetProductListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProductListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.configVersion)) {
      query["ConfigVersion"] = request.configVersion;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProductList",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProductListResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.GetProductListResponse({}));
  }

  /**
   * 查询展示商品列表
   * 
   * @param request - GetProductListRequest
   * @returns GetProductListResponse
   */
  async getProductList(request: $_model.GetProductListRequest): Promise<$_model.GetProductListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProductListWithOptions(request, runtime);
  }

  /**
   * 获取用户信息
   * 
   * @param request - GetUserInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserInfoResponse
   */
  async getUserInfoWithOptions(request: $_model.GetUserInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserInfo",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserInfoResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.GetUserInfoResponse({}));
  }

  /**
   * 获取用户信息
   * 
   * @param request - GetUserInfoRequest
   * @returns GetUserInfoResponse
   */
  async getUserInfo(request: $_model.GetUserInfoRequest): Promise<$_model.GetUserInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserInfoWithOptions(request, runtime);
  }

  /**
   * 开机
   * 
   * @param request - StartDesktopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDesktopResponse
   */
  async startDesktopWithOptions(request: $_model.StartDesktopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDesktopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDesktop",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDesktopResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.StartDesktopResponse({}));
  }

  /**
   * 开机
   * 
   * @param request - StartDesktopRequest
   * @returns StartDesktopResponse
   */
  async startDesktop(request: $_model.StartDesktopRequest): Promise<$_model.StartDesktopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDesktopWithOptions(request, runtime);
  }

  /**
   * 关机
   * 
   * @param request - StopDesktopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDesktopResponse
   */
  async stopDesktopWithOptions(request: $_model.StopDesktopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDesktopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDesktop",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDesktopResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.StopDesktopResponse({}));
  }

  /**
   * 关机
   * 
   * @param request - StopDesktopRequest
   * @returns StopDesktopResponse
   */
  async stopDesktop(request: $_model.StopDesktopRequest): Promise<$_model.StopDesktopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDesktopWithOptions(request, runtime);
  }

}
