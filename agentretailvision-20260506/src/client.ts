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
      'cn-beijing': "agentretailvision.cn-beijing.aliyuncs.com",
    };
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
   * Generates a composite image for single-item multi-image or multi-item scenarios.
   * 
   * @remarks
   * ## Request description
   * - When `groupType=1`, `platformItemIdList` must contain only one element.
   * - When `groupType=2`, `platformItemIdList` can contain 1 to 10 elements.
   * 
   * @param tmpReq - GenerateGroupImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateGroupImageResponse
   */
  async generateGroupImageWithOptions(tmpReq: $_model.GenerateGroupImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateGroupImageResponse> {
    tmpReq.validate();
    let request = new $_model.GenerateGroupImageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.platformItemIdList)) {
      request.platformItemIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.platformItemIdList, "PlatformItemIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.callbackSecret)) {
      query["CallbackSecret"] = request.callbackSecret;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!$dara.isNull(request.platformItemIdListShrink)) {
      query["PlatformItemIdList"] = request.platformItemIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateGroupImage",
      version: "2026-05-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateGroupImageResponse>(await this.callApi(params, req, runtime), new $_model.GenerateGroupImageResponse({}));
  }

  /**
   * Generates a composite image for single-item multi-image or multi-item scenarios.
   * 
   * @remarks
   * ## Request description
   * - When `groupType=1`, `platformItemIdList` must contain only one element.
   * - When `groupType=2`, `platformItemIdList` can contain 1 to 10 elements.
   * 
   * @param request - GenerateGroupImageRequest
   * @returns GenerateGroupImageResponse
   */
  async generateGroupImage(request: $_model.GenerateGroupImageRequest): Promise<$_model.GenerateGroupImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateGroupImageWithOptions(request, runtime);
  }

  /**
   * Adds product information. After a successful import, the platform returns a globally unique platform_item_id for subsequent updates and recognition result association.
   * 
   * @remarks
   * ## Operation description
   * - This operation is used to add product information.
   * - After you import products to the product library, they are stored in Alibaba Cloud OSS for direct recall and retrieval by the product recognition API.
   * - You must provide at least one main image URL, and the `item_unique_id` must be unique within the same business party.
   * - You can optionally provide multi-angle views and extra images to improve recognition accuracy.
   * - The `device_id` field can be used to establish an association between a device and product vectors, but it is not required.
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
   * Adds product information. After a successful import, the platform returns a globally unique platform_item_id for subsequent updates and recognition result association.
   * 
   * @remarks
   * ## Operation description
   * - This operation is used to add product information.
   * - After you import products to the product library, they are stored in Alibaba Cloud OSS for direct recall and retrieval by the product recognition API.
   * - You must provide at least one main image URL, and the `item_unique_id` must be unique within the same business party.
   * - You can optionally provide multi-angle views and extra images to improve recognition accuracy.
   * - The `device_id` field can be used to establish an association between a device and product vectors, but it is not required.
   * 
   * @param request - ImportProductsRequest
   * @returns ImportProductsResponse
   */
  async importProducts(request: $_model.ImportProductsRequest): Promise<$_model.ImportProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importProductsWithOptions(request, runtime);
  }

  /**
   * At least one result retrieval method must be integrated: webhook callback or task status query. Both methods can be used simultaneously.
   * 	•	If the user chooses the webhook callback method, the receiving endpoint must be prepared in advance and implemented according to the following request and response parameters.
   * 	•	After the recognition task is completed, the platform will push the results to the business party based on the callback URL bound to the task.
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
   * At least one result retrieval method must be integrated: webhook callback or task status query. Both methods can be used simultaneously.
   * 	•	If the user chooses the webhook callback method, the receiving endpoint must be prepared in advance and implemented according to the following request and response parameters.
   * 	•	After the recognition task is completed, the platform will push the results to the business party based on the callback URL bound to the task.
   * 
   * @param request - QueryRecognitionResultRequest
   * @returns QueryRecognitionResultResponse
   */
  async queryRecognitionResult(request: $_model.QueryRecognitionResultRequest): Promise<$_model.QueryRecognitionResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecognitionResultWithOptions(request, runtime);
  }

  /**
   * Used for intelligent recognition scenarios. Requires uploading the OSS address of shopping videos. The platform creates an asynchronous recognition task and immediately returns a task_id. Notifications are sent via webhook, and the results need to be actively retrieved through the query API.
   * 
   * @remarks
   * ## Request Description
   * - The user must provide `caller_uid` and `order_unique_id` as required parameters.
   * - The `video_urls` parameter supports video files in mp4, avi, mov, and mkv formats, with a size limit of 100 MB, a duration of no more than 3 minutes, a resolution between 480p and 1080p, and specific aspect ratio requirements.
   * - At least one of `device_id` or `candidate_items` must be provided to specify the recognition scope. If both are provided, the system first filters by the device product library and then further filters based on the candidate items list.
   * - Optionally, the user can specify a `callback_url` to receive notifications of the recognition results. If not provided, the pre-registered default webhook address is used.
   * - If a request is submitted repeatedly with the same `order_unique_id`, the system directly returns the previously existing task status.
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
   * Used for intelligent recognition scenarios. Requires uploading the OSS address of shopping videos. The platform creates an asynchronous recognition task and immediately returns a task_id. Notifications are sent via webhook, and the results need to be actively retrieved through the query API.
   * 
   * @remarks
   * ## Request Description
   * - The user must provide `caller_uid` and `order_unique_id` as required parameters.
   * - The `video_urls` parameter supports video files in mp4, avi, mov, and mkv formats, with a size limit of 100 MB, a duration of no more than 3 minutes, a resolution between 480p and 1080p, and specific aspect ratio requirements.
   * - At least one of `device_id` or `candidate_items` must be provided to specify the recognition scope. If both are provided, the system first filters by the device product library and then further filters based on the candidate items list.
   * - Optionally, the user can specify a `callback_url` to receive notifications of the recognition results. If not provided, the pre-registered default webhook address is used.
   * - If a request is submitted repeatedly with the same `order_unique_id`, the system directly returns the previously existing task status.
   * 
   * @param request - RecognizeOrderRequest
   * @returns RecognizeOrderResponse
   */
  async recognizeOrder(request: $_model.RecognizeOrderRequest): Promise<$_model.RecognizeOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recognizeOrderWithOptions(request, runtime);
  }

  /**
   * Registers or updates the default webhook callback URL.
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
   * Registers or updates the default webhook callback URL.
   * 
   * @param request - RegisterWebhookRequest
   * @returns RegisterWebhookResponse
   */
  async registerWebhook(request: $_model.RegisterWebhookRequest): Promise<$_model.RegisterWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerWebhookWithOptions(request, runtime);
  }

  /**
   * Updates the information of an existing item on the platform.
   * 
   * @remarks
   * ## Operation description
   * - The platform_item_id parameter is used as the primary identifier for the update.
   * - If both platform_item_id and item_unique_id are specified, they must point to the same item.
   * - The item title (image_title) and the list of main image URLs (main_image) are required. The main_image parameter must contain at least one image.
   * - Optional parameters include the multi-angle image list (multi_view_images), the list of additional image URLs (extra_images), and the device ID (device_id).
   * - In multi_view_images, each object must contain the image OSS address (url) and the shooting angle (angle). Valid values of angle: top view (up), bottom view (down), left view (left), right view (right), front view (front), and back view (back).
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
   * Updates the information of an existing item on the platform.
   * 
   * @remarks
   * ## Operation description
   * - The platform_item_id parameter is used as the primary identifier for the update.
   * - If both platform_item_id and item_unique_id are specified, they must point to the same item.
   * - The item title (image_title) and the list of main image URLs (main_image) are required. The main_image parameter must contain at least one image.
   * - Optional parameters include the multi-angle image list (multi_view_images), the list of additional image URLs (extra_images), and the device ID (device_id).
   * - In multi_view_images, each object must contain the image OSS address (url) and the shooting angle (angle). Valid values of angle: top view (up), bottom view (down), left view (left), right view (right), front view (front), and back view (back).
   * 
   * @param request - UpdateProductRequest
   * @returns UpdateProductResponse
   */
  async updateProduct(request: $_model.UpdateProductRequest): Promise<$_model.UpdateProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProductWithOptions(request, runtime);
  }

}
