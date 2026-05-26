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
    this._endpoint = this.getEndpoint("agentretailvision", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 商品导入
   * 
   * @param tmpReq - ImportProductsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportProductsResponse
   */
  async importProductsWithOptions(tmpReq: $_model.ImportProductsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportProductsResponse> {
    tmpReq.validate();
    let request = new $_model.ImportProductsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extraImages)) {
      request.extraImagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extraImages, "ExtraImages", "json");
    }

    if (!$dara.isNull(tmpReq.mainImage)) {
      request.mainImageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.mainImage, "MainImage", "json");
    }

    if (!$dara.isNull(tmpReq.multiViewImages)) {
      request.multiViewImagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.multiViewImages, "MultiViewImages", "json");
    }

    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.extraImagesShrink)) {
      query["ExtraImages"] = request.extraImagesShrink;
    }

    if (!$dara.isNull(request.imageTitle)) {
      query["ImageTitle"] = request.imageTitle;
    }

    if (!$dara.isNull(request.itemUniqueId)) {
      query["ItemUniqueId"] = request.itemUniqueId;
    }

    if (!$dara.isNull(request.mainImageShrink)) {
      query["MainImage"] = request.mainImageShrink;
    }

    if (!$dara.isNull(request.multiViewImagesShrink)) {
      query["MultiViewImages"] = request.multiViewImagesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportProducts",
      version: "2026-05-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportProductsResponse>(await this.callApi(params, req, runtime), new $_model.ImportProductsResponse({}));
  }

  /**
   * 商品导入
   * 
   * @param request - ImportProductsRequest
   * @returns ImportProductsResponse
   */
  async importProducts(request: $_model.ImportProductsRequest): Promise<$_model.ImportProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importProductsWithOptions(request, runtime);
  }

  /**
   * 查询任务状态
   * 
   * @param request - QueryRecognitionResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecognitionResultResponse
   */
  async queryRecognitionResultWithOptions(request: $_model.QueryRecognitionResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecognitionResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderUniqueId)) {
      query["OrderUniqueId"] = request.orderUniqueId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecognitionResult",
      version: "2026-05-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecognitionResultResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecognitionResultResponse({}));
  }

  /**
   * 查询任务状态
   * 
   * @param request - QueryRecognitionResultRequest
   * @returns QueryRecognitionResultResponse
   */
  async queryRecognitionResult(request: $_model.QueryRecognitionResultRequest): Promise<$_model.QueryRecognitionResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecognitionResultWithOptions(request, runtime);
  }

  /**
   * 购物识别
   * 
   * @param tmpReq - RecognizeOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeOrderResponse
   */
  async recognizeOrderWithOptions(tmpReq: $_model.RecognizeOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecognizeOrderResponse> {
    tmpReq.validate();
    let request = new $_model.RecognizeOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.candidateItems)) {
      request.candidateItemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.candidateItems, "CandidateItems", "json");
    }

    if (!$dara.isNull(tmpReq.videoUrls)) {
      request.videoUrlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoUrls, "VideoUrls", "json");
    }

    let query = { };
    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.candidateItemsShrink)) {
      query["CandidateItems"] = request.candidateItemsShrink;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.orderUniqueId)) {
      query["OrderUniqueId"] = request.orderUniqueId;
    }

    if (!$dara.isNull(request.videoUrlsShrink)) {
      query["VideoUrls"] = request.videoUrlsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecognizeOrder",
      version: "2026-05-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecognizeOrderResponse>(await this.callApi(params, req, runtime), new $_model.RecognizeOrderResponse({}));
  }

  /**
   * 购物识别
   * 
   * @param request - RecognizeOrderRequest
   * @returns RecognizeOrderResponse
   */
  async recognizeOrder(request: $_model.RecognizeOrderRequest): Promise<$_model.RecognizeOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeOrderWithOptions(request, runtime);
  }

  /**
   * Webhook注册
   * 
   * @param request - RegisterWebhookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterWebhookResponse
   */
  async registerWebhookWithOptions(request: $_model.RegisterWebhookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterWebhookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callbackSecret)) {
      query["CallbackSecret"] = request.callbackSecret;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterWebhook",
      version: "2026-05-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterWebhookResponse>(await this.callApi(params, req, runtime), new $_model.RegisterWebhookResponse({}));
  }

  /**
   * Webhook注册
   * 
   * @param request - RegisterWebhookRequest
   * @returns RegisterWebhookResponse
   */
  async registerWebhook(request: $_model.RegisterWebhookRequest): Promise<$_model.RegisterWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerWebhookWithOptions(request, runtime);
  }

  /**
   * 商品更新
   * 
   * @param tmpReq - UpdateProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProductResponse
   */
  async updateProductWithOptions(tmpReq: $_model.UpdateProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProductResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateProductShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extraImages)) {
      request.extraImagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extraImages, "ExtraImages", "json");
    }

    if (!$dara.isNull(tmpReq.mainImage)) {
      request.mainImageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.mainImage, "MainImage", "json");
    }

    if (!$dara.isNull(tmpReq.multiViewImages)) {
      request.multiViewImagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.multiViewImages, "MultiViewImages", "json");
    }

    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.extraImagesShrink)) {
      query["ExtraImages"] = request.extraImagesShrink;
    }

    if (!$dara.isNull(request.imageTitle)) {
      query["ImageTitle"] = request.imageTitle;
    }

    if (!$dara.isNull(request.itemUniqueId)) {
      query["ItemUniqueId"] = request.itemUniqueId;
    }

    if (!$dara.isNull(request.mainImageShrink)) {
      query["MainImage"] = request.mainImageShrink;
    }

    if (!$dara.isNull(request.multiViewImagesShrink)) {
      query["MultiViewImages"] = request.multiViewImagesShrink;
    }

    if (!$dara.isNull(request.platformItemId)) {
      query["PlatformItemId"] = request.platformItemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProduct",
      version: "2026-05-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProductResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProductResponse({}));
  }

  /**
   * 商品更新
   * 
   * @param request - UpdateProductRequest
   * @returns UpdateProductResponse
   */
  async updateProduct(request: $_model.UpdateProductRequest): Promise<$_model.UpdateProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProductWithOptions(request, runtime);
  }

}
