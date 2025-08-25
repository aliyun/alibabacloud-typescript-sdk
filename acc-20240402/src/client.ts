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
    this._endpoint = this.getEndpoint("acc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建镜像缓存
   * 
   * @param tmpReq - CreateImageCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageCacheResponse
   */
  async createImageCacheWithOptions(tmpReq: $_model.CreateImageCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageCacheResponse> {
    tmpReq.validate();
    let request = new $_model.CreateImageCacheShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.networkConfig)) {
      request.networkConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networkConfig, "NetworkConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.acrRegistryInfos)) {
      query["AcrRegistryInfos"] = request.acrRegistryInfos;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageCacheName)) {
      query["ImageCacheName"] = request.imageCacheName;
    }

    if (!$dara.isNull(request.imageRegistryCredentials)) {
      query["ImageRegistryCredentials"] = request.imageRegistryCredentials;
    }

    if (!$dara.isNull(request.images)) {
      query["Images"] = request.images;
    }

    if (!$dara.isNull(request.networkConfigShrink)) {
      query["NetworkConfig"] = request.networkConfigShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImageCache",
      version: "2024-04-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImageCacheResponse>(await this.callApi(params, req, runtime), new $_model.CreateImageCacheResponse({}));
  }

  /**
   * 创建镜像缓存
   * 
   * @param request - CreateImageCacheRequest
   * @returns CreateImageCacheResponse
   */
  async createImageCache(request: $_model.CreateImageCacheRequest): Promise<$_model.CreateImageCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImageCacheWithOptions(request, runtime);
  }

  /**
   * 删除镜像缓存
   * 
   * @param request - DeleteImageCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteImageCacheResponse
   */
  async deleteImageCacheWithOptions(request: $_model.DeleteImageCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteImageCacheResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.imageCacheId)) {
      query["ImageCacheId"] = request.imageCacheId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteImageCache",
      version: "2024-04-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteImageCacheResponse>(await this.callApi(params, req, runtime), new $_model.DeleteImageCacheResponse({}));
  }

  /**
   * 删除镜像缓存
   * 
   * @param request - DeleteImageCacheRequest
   * @returns DeleteImageCacheResponse
   */
  async deleteImageCache(request: $_model.DeleteImageCacheRequest): Promise<$_model.DeleteImageCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImageCacheWithOptions(request, runtime);
  }

  /**
   * 查询镜像缓存
   * 
   * @param request - GetImageCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageCacheResponse
   */
  async getImageCacheWithOptions(request: $_model.GetImageCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageCacheResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageCacheId)) {
      query["ImageCacheId"] = request.imageCacheId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageCache",
      version: "2024-04-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageCacheResponse>(await this.callApi(params, req, runtime), new $_model.GetImageCacheResponse({}));
  }

  /**
   * 查询镜像缓存
   * 
   * @param request - GetImageCacheRequest
   * @returns GetImageCacheResponse
   */
  async getImageCache(request: $_model.GetImageCacheRequest): Promise<$_model.GetImageCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageCacheWithOptions(request, runtime);
  }

  /**
   * 查询镜像缓存
   * 
   * @param request - ListImageCachesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImageCachesResponse
   */
  async listImageCachesWithOptions(request: $_model.ListImageCachesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListImageCachesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageCacheName)) {
      query["ImageCacheName"] = request.imageCacheName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImageCaches",
      version: "2024-04-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListImageCachesResponse>(await this.callApi(params, req, runtime), new $_model.ListImageCachesResponse({}));
  }

  /**
   * 查询镜像缓存
   * 
   * @param request - ListImageCachesRequest
   * @returns ListImageCachesResponse
   */
  async listImageCaches(request: $_model.ListImageCachesRequest): Promise<$_model.ListImageCachesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImageCachesWithOptions(request, runtime);
  }

}
