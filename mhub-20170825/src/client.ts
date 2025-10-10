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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("mhub", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - CreateAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppResponse
   */
  async createAppWithOptions(request: $_model.CreateAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!$dara.isNull(request.encodedIcon)) {
      query["EncodedIcon"] = request.encodedIcon;
    }

    if (!$dara.isNull(request.industryId)) {
      query["IndustryId"] = request.industryId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.packageName)) {
      query["PackageName"] = request.packageName;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApp",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppResponse({}));
  }

  /**
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(request: $_model.CreateAppRequest): Promise<$_model.CreateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  /**
   * @param request - CreateProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProductResponse
   */
  async createProductWithOptions(request: $_model.CreateProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProduct",
      version: "2017-08-25",
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
   * @param request - DeleteAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppResponse
   */
  async deleteAppWithOptions(request: $_model.DeleteAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApp",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppResponse({}));
  }

  /**
   * @param request - DeleteAppRequest
   * @returns DeleteAppResponse
   */
  async deleteApp(request: $_model.DeleteAppRequest): Promise<$_model.DeleteAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProductResponse
   */
  async deleteProductWithOptions(request: $_model.DeleteProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProduct",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProductResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProductResponse({}));
  }

  /**
   * @param request - DeleteProductRequest
   * @returns DeleteProductResponse
   */
  async deleteProduct(request: $_model.DeleteProductRequest): Promise<$_model.DeleteProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProductWithOptions(request, runtime);
  }

  /**
   * 获取emas dashboard
   * 
   * @param request - DescribeDashboardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDashboardResponse
   */
  async describeDashboardWithOptions(request: $_model.DescribeDashboardRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDashboardResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.proxyAction)) {
      query["ProxyAction"] = request.proxyAction;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDashboard",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDashboardResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDashboardResponse({}));
  }

  /**
   * 获取emas dashboard
   * 
   * @param request - DescribeDashboardRequest
   * @returns DescribeDashboardResponse
   */
  async describeDashboard(request: $_model.DescribeDashboardRequest): Promise<$_model.DescribeDashboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDashboardWithOptions(request, runtime);
  }

  /**
   * 展示用户应用列表
   * 
   * @param request - ListAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppsResponse
   */
  async listAppsWithOptions(request: $_model.ListAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApps",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppsResponse({}));
  }

  /**
   * 展示用户应用列表
   * 
   * @param request - ListAppsRequest
   * @returns ListAppsResponse
   */
  async listApps(request: $_model.ListAppsRequest): Promise<$_model.ListAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppsWithOptions(request, runtime);
  }

  /**
   * 分页获取产品(在基座中表达为项目)列表
   * 
   * @param request - ListProductsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductsResponse
   */
  async listProductsWithOptions(request: $_model.ListProductsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productName)) {
      query["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.searchKeyWord)) {
      query["SearchKeyWord"] = request.searchKeyWord;
    }

    if (!$dara.isNull(request.simple)) {
      query["Simple"] = request.simple;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProducts",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductsResponse>(await this.callApi(params, req, runtime), new $_model.ListProductsResponse({}));
  }

  /**
   * 分页获取产品(在基座中表达为项目)列表
   * 
   * @param request - ListProductsRequest
   * @returns ListProductsResponse
   */
  async listProducts(request: $_model.ListProductsRequest): Promise<$_model.ListProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductsWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppResponse
   */
  async modifyAppWithOptions(request: $_model.ModifyAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!$dara.isNull(request.encodedIcon)) {
      query["EncodedIcon"] = request.encodedIcon;
    }

    if (!$dara.isNull(request.industryId)) {
      query["IndustryId"] = request.industryId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.packageName)) {
      query["PackageName"] = request.packageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApp",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppResponse({}));
  }

  /**
   * @param request - ModifyAppRequest
   * @returns ModifyAppResponse
   */
  async modifyApp(request: $_model.ModifyAppRequest): Promise<$_model.ModifyAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyProductResponse
   */
  async modifyProductWithOptions(request: $_model.ModifyProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyProduct",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyProductResponse>(await this.callApi(params, req, runtime), new $_model.ModifyProductResponse({}));
  }

  /**
   * @param request - ModifyProductRequest
   * @returns ModifyProductResponse
   */
  async modifyProduct(request: $_model.ModifyProductRequest): Promise<$_model.ModifyProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyProductWithOptions(request, runtime);
  }

  /**
   * @param request - OpenEmasServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenEmasServiceResponse
   */
  async openEmasServiceWithOptions(request: $_model.OpenEmasServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenEmasServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenEmasService",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenEmasServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenEmasServiceResponse({}));
  }

  /**
   * @param request - OpenEmasServiceRequest
   * @returns OpenEmasServiceResponse
   */
  async openEmasService(request: $_model.OpenEmasServiceRequest): Promise<$_model.OpenEmasServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openEmasServiceWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAppInfoResponse
   */
  async queryAppInfoWithOptions(request: $_model.QueryAppInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAppInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAppInfo",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAppInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryAppInfoResponse({}));
  }

  /**
   * @param request - QueryAppInfoRequest
   * @returns QueryAppInfoResponse
   */
  async queryAppInfo(request: $_model.QueryAppInfoRequest): Promise<$_model.QueryAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAppInfoWithOptions(request, runtime);
  }

  /**
   * 查询应用对应的安全字段
   * 
   * @param request - QueryAppSecurityInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAppSecurityInfoResponse
   */
  async queryAppSecurityInfoWithOptions(request: $_model.QueryAppSecurityInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAppSecurityInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAppSecurityInfo",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAppSecurityInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryAppSecurityInfoResponse({}));
  }

  /**
   * 查询应用对应的安全字段
   * 
   * @param request - QueryAppSecurityInfoRequest
   * @returns QueryAppSecurityInfoResponse
   */
  async queryAppSecurityInfo(request: $_model.QueryAppSecurityInfoRequest): Promise<$_model.QueryAppSecurityInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAppSecurityInfoWithOptions(request, runtime);
  }

  /**
   * 查询基座的Product信息
   * 
   * @param request - QueryProductInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProductInfoResponse
   */
  async queryProductInfoWithOptions(request: $_model.QueryProductInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryProductInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryProductInfo",
      version: "2017-08-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryProductInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryProductInfoResponse({}));
  }

  /**
   * 查询基座的Product信息
   * 
   * @param request - QueryProductInfoRequest
   * @returns QueryProductInfoResponse
   */
  async queryProductInfo(request: $_model.QueryProductInfoRequest): Promise<$_model.QueryProductInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryProductInfoWithOptions(request, runtime);
  }

}
