// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "Aidge";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aidge", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Synchronously adds content to a display knowledge base in batches.
   * 
   * @param tmpReq - AddDisplayKnowledgeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDisplayKnowledgeResponse
   */
  async addDisplayKnowledgeWithOptions(tmpReq: $_model.AddDisplayKnowledgeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDisplayKnowledgeResponse> {
    tmpReq.validate();
    let request = new $_model.AddDisplayKnowledgeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.records)) {
      request.recordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.records, "Records", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ragId)) {
      query["RagId"] = request.ragId;
    }

    if (!$dara.isNull(request.recordsShrink)) {
      query["Records"] = request.recordsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDisplayKnowledge",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDisplayKnowledgeResponse>(await this.callApi(params, req, runtime), new $_model.AddDisplayKnowledgeResponse({}));
  }

  /**
   * Synchronously adds content to a display knowledge base in batches.
   * 
   * @param request - AddDisplayKnowledgeRequest
   * @returns AddDisplayKnowledgeResponse
   */
  async addDisplayKnowledge(request: $_model.AddDisplayKnowledgeRequest): Promise<$_model.AddDisplayKnowledgeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDisplayKnowledgeWithOptions(request, runtime);
  }

  /**
   * Generates virtual try-on images by using AI algorithms to replace a model\\"s clothing with a specified garment based on the input garment and model images. The operation preserves the model\\"s posture, facial features, and other visual details while ensuring a realistic and well-fitted appearance of the garment. It returns a processed image based on the provided URL of the original product image.
   * 
   * @remarks
   * # Product overview
   * Virtual try-on is an AI-based image generation API service that replaces the clothing on a model with specified garments based on user-provided clothing and model images. It preserves the model\\"s other details and scene details without changing the model\\"s pose or facial features, ensuring a realistic and well-fitted appearance of the garments. You only need to provide the URLs of the original product images to obtain the processed images.
   * # Scenarios
   * *   **Virtual try-on for clothing, shoes, and hats:**
   *     
   * Supports virtual try-on for 14 categories of clothing, shoes, hats, and accessories, including tops, coats, bottoms, dresses, jumpsuits, socks, shoes, hats, earrings, necklaces, bracelets, scarves, bags, and glasses. After you upload a person image and product images, the system intelligently matches the position and proportion of the products based on the person\\"s pose and body parts to generate natural and realistic try-on effects. This intuitively displays the on-body performance of the clothing and presents a coordinated and realistic wearing effect.
   * *   **Model replacement (model skin/face replacement)**
   *     
   *     You provide the original model scene image and the face or reference image of the target model to apply the target person\\"s face to the model in the original image. This is applicable to customer-specified models, unified brand images, and character image adaptation for different markets. It also reduces the duplication of using the same model image as other merchants.
   *     
   * *   **Pose replacement (pose fission)**
   *     
   * You provide the original model scene image and a pose reference image with a specified pose to generate the effect of the original person and outfit in the new pose. This displays the fit, silhouette, and on-body performance of the products in different poses such as standing, raising hands, and turning around.
   * *   **E-commerce product display and marketing:**
   *     
   * Helps merchants quickly generate model try-on images for different products, reducing the costs of traditional shooting, outfit changes, and post-production, and improving the production efficiency of product images.
   * *   **Online shopping experience optimization:**
   *     
   * Consumers can preview the wearing effect of products through virtual try-on to more intuitively understand the style, matching, and overall effect of the products, assisting in purchase decisions and enhancing the shopping experience.
   * # Features 
   * | Feature | Supported scope | User input and specification method | Scenario value |
   * | --- | --- | --- | --- |
   * | **Clothing replacement/product wearing** | *   Clothing: tops, bottoms (pants, skirts), coats, dresses, jumpsuits/rompers.
   *     
   * *   Shoes and hats: shoes, socks, hats.
   *     
   * *   Accessories: earrings, necklaces, bracelets, scarves, bags, glasses. | Upload a model image and product images, and the products will naturally fit the model. The system automatically matches the wearing position based on the clothing category, ensuring that the pose, proportion, and wearing layers are consistent with real human effects, while maintaining the person\\"s scene and pose in the original image.
   * Try-on modes:
   * *   Supports single-item try-on.
   *     
   * *   Supports multi-item outfit matching (multiple items in one image or multiple items across multiple images).
   *     
   * Note: The multi-item outfit matching capability was newly launched in November. | Uniformly generates the wearing effects of clothing, shoes, hats, and accessories, reducing item-by-item outfit changes and real-life shooting. |
   * | **Model replacement/model skin replacement (face replacement)** | Supports user-specified target models.
   * The original image can be a single-item try-on image or a multi-item outfit image. | Upload the original model scene image and provide one face photo or clear model reference image of the target person to replace the face and identity features of the model in the scene with those of the target person.
   * The original outfit, pose, and scene are all preserved, and the generated result uses the person\\"s pose and background from the scene image. | Uses customer-specified or authorized model images to reduce duplication with existing model images and unify brand visuals. |
   * | **Pose replacement/pose fission** | Generates images based on the user-specified pose.
   * The original image can be a single-item try-on image or a multi-item outfit image. | Upload the original model scene image and one pose reference image to change the model\\"s pose to the action in the reference image. The person and outfit remain unchanged, and the wrinkles, drape, and layers of the clothing naturally adjust to the new pose. | Displays the fit, silhouette, and on-body style of the products in different poses, expanding the detail pages and marketing materials. |
   * # 4. Effect examples
   * | Scenario | Type/outfit description | Original model scene image | Product image/reference image | Effect image |
   * | --- | --- | --- | --- | --- |
   * | Single-item try-on | **Vest**
   * Black buttoned sleeveless vest | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/b7810d3c-547d-44eb-8a4e-4ef7dc2db008.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/dc248e7a-48ba-4e13-a2f9-c5e25bbafdb3.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/bec2501d-698f-4bf8-9ed7-6d20bb2d2b70.png) |
   * | Single-item try-on | Top | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/4ff4ce16-4069-4721-a77d-44afd0b6c839.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/0c63b027-95a0-4380-809c-dabdbeeae49f.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/933fa99c-2e75-417c-8ca1-ff8b89e8512d.png) |
   * | Single-item try-on | Bottom | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/71976528-8ccc-4583-a28e-fbd595c5eb83.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/abe67eeb-35f5-44a8-8701-c3e1b40cf0e4.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/f3705fa3-9458-4cd2-8ee9-57144898cf05.png) |
   * | Single-item try-on | Shoes | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/e60b4b54-16dc-4170-a2f4-6f9571c95048.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/0ece47ca-08d2-4f6e-b945-695592a49b09.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/46c2ca51-13f8-4e4b-93ae-fcdac30a9c99.png) |
   * | Single-item try-on | Jumpsuit | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/f36cad25-f199-4338-b945-7901c810c819.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/5aa1a24d-0d3f-4765-92f5-7ea6c9f0b0b8.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/0449c368-c362-42f5-8292-3ebba7b2d478.png) |
   * | Single-item try-on | Skirt | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/956b4a14-7657-4082-ae2d-48f955df662b.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/de3fb424-477d-4ed8-8e54-2561a30d3379.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/297fa740-b125-420b-acc5-9ed062a01214.png) |
   * | Single-item try-on | Hat | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/2cb272dd-e8e0-456d-b671-251d88d6eb5a.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/40240f57-1e16-4b7b-bfe2-bcb560635c88.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/b3a0a6a6-c437-4aa2-842b-5b93e7af1a4f.png) |
   * | Multi-item try-on | **Two-item outfit**
   * Dress + high heels | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/1c0002da-1b62-4d2e-9d0e-2e5a74d7cb50.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/f5150020-a9fb-4869-b126-57770c482d72.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/c5fd01c4-b754-4298-8c2d-914fc4ac9497.png) |
   * | Multi-item try-on | **Three-item outfit**
   * Striped polo shirt + denim shorts + work boots | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/da280053-6a2d-48c9-b99c-db0dc60884a2.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/3ad6de9b-75c8-44a2-8de8-a2124ac95b3b.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/8cad69c1-c1af-457f-8c1a-1c8b3faeb63f.png) |
   * | Multi-item try-on | **Four-item outfit**
   * Printed T-shirt + pants + hat + bag | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/a6c3cc3f-1665-43c9-8891-cce00d58535c.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/1facf32c-1876-4858-8ae8-80a8d16bf8ed.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/e979c290-3593-49f2-926b-20be35a02872.png) |
   * | Model replacement | **Model skin/face replacement**
   * Preserves the original top, pants, and scene | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/983f7257-79f7-4100-9c49-a11d45d0f529.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/7d3f7a66-4865-4fde-a363-a202d6e2fc91.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/40519a91-bdfe-4712-a9a3-20d0bad0ed99.png) |
   * | Pose replacement | **Specified pose**
   * Preserves the original outfit and adjusts to the hand-raising pose in the reference image | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/1626981b-8fa2-4241-930c-db5d6dd0462b.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/3db8ad38-cd33-4ecb-aa99-a3362d7b20b0.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/3c2d424f-6ab5-43d4-92c1-c1510a498bb7.png) |
   * 
   * @param request - AiTryOnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AiTryOnResponse
   */
  async aiTryOnWithOptions(request: $_model.AiTryOnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AiTryOnResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clothImageUrl)) {
      query["ClothImageUrl"] = request.clothImageUrl;
    }

    if (!$dara.isNull(request.clothType)) {
      query["ClothType"] = request.clothType;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.modelImageUrl)) {
      query["ModelImageUrl"] = request.modelImageUrl;
    }

    if (!$dara.isNull(request.modelTemplateUrl)) {
      query["ModelTemplateUrl"] = request.modelTemplateUrl;
    }

    if (!$dara.isNull(request.poseTemplateUrl)) {
      query["PoseTemplateUrl"] = request.poseTemplateUrl;
    }

    if (!$dara.isNull(request.ratio)) {
      query["Ratio"] = request.ratio;
    }

    if (!$dara.isNull(request.resolution)) {
      query["Resolution"] = request.resolution;
    }

    if (!$dara.isNull(request.tryonType)) {
      query["TryonType"] = request.tryonType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AiTryOn",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AiTryOnResponse>(await this.callApi(params, req, runtime), new $_model.AiTryOnResponse({}));
  }

  /**
   * Generates virtual try-on images by using AI algorithms to replace a model\\"s clothing with a specified garment based on the input garment and model images. The operation preserves the model\\"s posture, facial features, and other visual details while ensuring a realistic and well-fitted appearance of the garment. It returns a processed image based on the provided URL of the original product image.
   * 
   * @remarks
   * # Product overview
   * Virtual try-on is an AI-based image generation API service that replaces the clothing on a model with specified garments based on user-provided clothing and model images. It preserves the model\\"s other details and scene details without changing the model\\"s pose or facial features, ensuring a realistic and well-fitted appearance of the garments. You only need to provide the URLs of the original product images to obtain the processed images.
   * # Scenarios
   * *   **Virtual try-on for clothing, shoes, and hats:**
   *     
   * Supports virtual try-on for 14 categories of clothing, shoes, hats, and accessories, including tops, coats, bottoms, dresses, jumpsuits, socks, shoes, hats, earrings, necklaces, bracelets, scarves, bags, and glasses. After you upload a person image and product images, the system intelligently matches the position and proportion of the products based on the person\\"s pose and body parts to generate natural and realistic try-on effects. This intuitively displays the on-body performance of the clothing and presents a coordinated and realistic wearing effect.
   * *   **Model replacement (model skin/face replacement)**
   *     
   *     You provide the original model scene image and the face or reference image of the target model to apply the target person\\"s face to the model in the original image. This is applicable to customer-specified models, unified brand images, and character image adaptation for different markets. It also reduces the duplication of using the same model image as other merchants.
   *     
   * *   **Pose replacement (pose fission)**
   *     
   * You provide the original model scene image and a pose reference image with a specified pose to generate the effect of the original person and outfit in the new pose. This displays the fit, silhouette, and on-body performance of the products in different poses such as standing, raising hands, and turning around.
   * *   **E-commerce product display and marketing:**
   *     
   * Helps merchants quickly generate model try-on images for different products, reducing the costs of traditional shooting, outfit changes, and post-production, and improving the production efficiency of product images.
   * *   **Online shopping experience optimization:**
   *     
   * Consumers can preview the wearing effect of products through virtual try-on to more intuitively understand the style, matching, and overall effect of the products, assisting in purchase decisions and enhancing the shopping experience.
   * # Features 
   * | Feature | Supported scope | User input and specification method | Scenario value |
   * | --- | --- | --- | --- |
   * | **Clothing replacement/product wearing** | *   Clothing: tops, bottoms (pants, skirts), coats, dresses, jumpsuits/rompers.
   *     
   * *   Shoes and hats: shoes, socks, hats.
   *     
   * *   Accessories: earrings, necklaces, bracelets, scarves, bags, glasses. | Upload a model image and product images, and the products will naturally fit the model. The system automatically matches the wearing position based on the clothing category, ensuring that the pose, proportion, and wearing layers are consistent with real human effects, while maintaining the person\\"s scene and pose in the original image.
   * Try-on modes:
   * *   Supports single-item try-on.
   *     
   * *   Supports multi-item outfit matching (multiple items in one image or multiple items across multiple images).
   *     
   * Note: The multi-item outfit matching capability was newly launched in November. | Uniformly generates the wearing effects of clothing, shoes, hats, and accessories, reducing item-by-item outfit changes and real-life shooting. |
   * | **Model replacement/model skin replacement (face replacement)** | Supports user-specified target models.
   * The original image can be a single-item try-on image or a multi-item outfit image. | Upload the original model scene image and provide one face photo or clear model reference image of the target person to replace the face and identity features of the model in the scene with those of the target person.
   * The original outfit, pose, and scene are all preserved, and the generated result uses the person\\"s pose and background from the scene image. | Uses customer-specified or authorized model images to reduce duplication with existing model images and unify brand visuals. |
   * | **Pose replacement/pose fission** | Generates images based on the user-specified pose.
   * The original image can be a single-item try-on image or a multi-item outfit image. | Upload the original model scene image and one pose reference image to change the model\\"s pose to the action in the reference image. The person and outfit remain unchanged, and the wrinkles, drape, and layers of the clothing naturally adjust to the new pose. | Displays the fit, silhouette, and on-body style of the products in different poses, expanding the detail pages and marketing materials. |
   * # 4. Effect examples
   * | Scenario | Type/outfit description | Original model scene image | Product image/reference image | Effect image |
   * | --- | --- | --- | --- | --- |
   * | Single-item try-on | **Vest**
   * Black buttoned sleeveless vest | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/b7810d3c-547d-44eb-8a4e-4ef7dc2db008.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/dc248e7a-48ba-4e13-a2f9-c5e25bbafdb3.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/bec2501d-698f-4bf8-9ed7-6d20bb2d2b70.png) |
   * | Single-item try-on | Top | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/4ff4ce16-4069-4721-a77d-44afd0b6c839.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/0c63b027-95a0-4380-809c-dabdbeeae49f.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/933fa99c-2e75-417c-8ca1-ff8b89e8512d.png) |
   * | Single-item try-on | Bottom | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/71976528-8ccc-4583-a28e-fbd595c5eb83.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/abe67eeb-35f5-44a8-8701-c3e1b40cf0e4.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/f3705fa3-9458-4cd2-8ee9-57144898cf05.png) |
   * | Single-item try-on | Shoes | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/e60b4b54-16dc-4170-a2f4-6f9571c95048.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/0ece47ca-08d2-4f6e-b945-695592a49b09.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/46c2ca51-13f8-4e4b-93ae-fcdac30a9c99.png) |
   * | Single-item try-on | Jumpsuit | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/f36cad25-f199-4338-b945-7901c810c819.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/5aa1a24d-0d3f-4765-92f5-7ea6c9f0b0b8.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/0449c368-c362-42f5-8292-3ebba7b2d478.png) |
   * | Single-item try-on | Skirt | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/956b4a14-7657-4082-ae2d-48f955df662b.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/de3fb424-477d-4ed8-8e54-2561a30d3379.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/297fa740-b125-420b-acc5-9ed062a01214.png) |
   * | Single-item try-on | Hat | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/2cb272dd-e8e0-456d-b671-251d88d6eb5a.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/40240f57-1e16-4b7b-bfe2-bcb560635c88.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/b3a0a6a6-c437-4aa2-842b-5b93e7af1a4f.png) |
   * | Multi-item try-on | **Two-item outfit**
   * Dress + high heels | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/1c0002da-1b62-4d2e-9d0e-2e5a74d7cb50.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/f5150020-a9fb-4869-b126-57770c482d72.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/c5fd01c4-b754-4298-8c2d-914fc4ac9497.png) |
   * | Multi-item try-on | **Three-item outfit**
   * Striped polo shirt + denim shorts + work boots | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/da280053-6a2d-48c9-b99c-db0dc60884a2.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/3ad6de9b-75c8-44a2-8de8-a2124ac95b3b.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/8cad69c1-c1af-457f-8c1a-1c8b3faeb63f.png) |
   * | Multi-item try-on | **Four-item outfit**
   * Printed T-shirt + pants + hat + bag | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/a6c3cc3f-1665-43c9-8891-cce00d58535c.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/1facf32c-1876-4858-8ae8-80a8d16bf8ed.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/e979c290-3593-49f2-926b-20be35a02872.png) |
   * | Model replacement | **Model skin/face replacement**
   * Preserves the original top, pants, and scene | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/983f7257-79f7-4100-9c49-a11d45d0f529.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/7d3f7a66-4865-4fde-a363-a202d6e2fc91.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/40519a91-bdfe-4712-a9a3-20d0bad0ed99.png) |
   * | Pose replacement | **Specified pose**
   * Preserves the original outfit and adjusts to the hand-raising pose in the reference image | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/1626981b-8fa2-4241-930c-db5d6dd0462b.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/3db8ad38-cd33-4ecb-aa99-a3362d7b20b0.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/YVOLrG0ZAjy0Gnpz/img/3c2d424f-6ab5-43d4-92c1-c1510a498bb7.png) |
   * 
   * @param request - AiTryOnRequest
   * @returns AiTryOnResponse
   */
  async aiTryOn(request: $_model.AiTryOnRequest): Promise<$_model.AiTryOnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.aiTryOnWithOptions(request, runtime);
  }

  /**
   * Optimizes cross-platform product materials for cross-border e-commerce sellers with a one-click, cost-effective service. Takes a product link from a source platform and outputs a full set of materials, including titles, attributes, main images, SKU images, detail images, and copy, tailored to the target platform requirements. Uses an official pre-built, lowest-cost workflow that focuses on filtering and lightweight processing without invoking high-cost image translation capabilities, maximizing cost control while ensuring listing compliance. (Asynchronous)
   * 
   * @remarks
   * ## Product introduction
   * Optimizes cross-platform product materials for cross-border e-commerce sellers with a one-click, cost-effective service. Takes a product link from a source platform and outputs a full set of materials, including titles, attributes, main images, SKU images, detail images, and copy, tailored to the target platform requirements. Uses an official pre-built, lowest-cost workflow that focuses on filtering and lightweight processing without invoking high-cost image translation capabilities, maximizing cost control while ensuring listing compliance. (Asynchronous)
   * ## Scenarios
   * Applies to cost-sensitive, cross-platform listing scenarios that prioritize speed, volume, and low cost. Examples include broad listing from 1688 to TEMU, bulk listing of high-SKU inventory, entry-level AI processing capabilities provided by top sellers and ERP or SaaS platforms, and merchants with high daily processing volumes but low requirements for marketing performance.
   * Reduces AI generation steps by filtering images with watermarks or non-compliant elements and prioritizing clean original images. This helps merchants complete cross-platform listing at an extremely low call cost.
   * ## Features
   * This service uses the official pre-built lowest-cost product optimization workflow, covering the entire process from material acquisition, compliance filtering, and text optimization to image processing:
   * 1. Automatically parses 1688 product links and extracts multiple types of materials, including titles, SKUs, main images, detail images, and attributes.
   * 2. Completes text filtering and SEO optimization based on the TEMU platform blacklist and compliance rules.
   * 3. Intelligently identifies watermarks, logos, and Chinese copy in images, and prioritizes filtering and selecting clean original images. SKU images and a small number of main images are processed by using image translation capabilities to meet platform specifications. High-conversion images with marketing copy may be filtered out.
   * 4. Completes category matching, attribute filling, and localized rewriting based on the requirements of the target platform.
   * 
   * @param request - AssetOptimizeLiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssetOptimizeLiteResponse
   */
  async assetOptimizeLiteWithOptions(request: $_model.AssetOptimizeLiteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssetOptimizeLiteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.glossary)) {
      query["Glossary"] = request.glossary;
    }

    if (!$dara.isNull(request.includingProductArea)) {
      query["IncludingProductArea"] = request.includingProductArea;
    }

    if (!$dara.isNull(request.needTrans)) {
      query["NeedTrans"] = request.needTrans;
    }

    if (!$dara.isNull(request.productUrl)) {
      query["ProductUrl"] = request.productUrl;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      query["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.sourcePlatform)) {
      query["SourcePlatform"] = request.sourcePlatform;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      query["TargetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.targetPlatform)) {
      query["TargetPlatform"] = request.targetPlatform;
    }

    if (!$dara.isNull(request.translatingBrandInTheProduct)) {
      query["TranslatingBrandInTheProduct"] = request.translatingBrandInTheProduct;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssetOptimizeLite",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssetOptimizeLiteResponse>(await this.callApi(params, req, runtime), new $_model.AssetOptimizeLiteResponse({}));
  }

  /**
   * Optimizes cross-platform product materials for cross-border e-commerce sellers with a one-click, cost-effective service. Takes a product link from a source platform and outputs a full set of materials, including titles, attributes, main images, SKU images, detail images, and copy, tailored to the target platform requirements. Uses an official pre-built, lowest-cost workflow that focuses on filtering and lightweight processing without invoking high-cost image translation capabilities, maximizing cost control while ensuring listing compliance. (Asynchronous)
   * 
   * @remarks
   * ## Product introduction
   * Optimizes cross-platform product materials for cross-border e-commerce sellers with a one-click, cost-effective service. Takes a product link from a source platform and outputs a full set of materials, including titles, attributes, main images, SKU images, detail images, and copy, tailored to the target platform requirements. Uses an official pre-built, lowest-cost workflow that focuses on filtering and lightweight processing without invoking high-cost image translation capabilities, maximizing cost control while ensuring listing compliance. (Asynchronous)
   * ## Scenarios
   * Applies to cost-sensitive, cross-platform listing scenarios that prioritize speed, volume, and low cost. Examples include broad listing from 1688 to TEMU, bulk listing of high-SKU inventory, entry-level AI processing capabilities provided by top sellers and ERP or SaaS platforms, and merchants with high daily processing volumes but low requirements for marketing performance.
   * Reduces AI generation steps by filtering images with watermarks or non-compliant elements and prioritizing clean original images. This helps merchants complete cross-platform listing at an extremely low call cost.
   * ## Features
   * This service uses the official pre-built lowest-cost product optimization workflow, covering the entire process from material acquisition, compliance filtering, and text optimization to image processing:
   * 1. Automatically parses 1688 product links and extracts multiple types of materials, including titles, SKUs, main images, detail images, and attributes.
   * 2. Completes text filtering and SEO optimization based on the TEMU platform blacklist and compliance rules.
   * 3. Intelligently identifies watermarks, logos, and Chinese copy in images, and prioritizes filtering and selecting clean original images. SKU images and a small number of main images are processed by using image translation capabilities to meet platform specifications. High-conversion images with marketing copy may be filtered out.
   * 4. Completes category matching, attribute filling, and localized rewriting based on the requirements of the target platform.
   * 
   * @param request - AssetOptimizeLiteRequest
   * @returns AssetOptimizeLiteResponse
   */
  async assetOptimizeLite(request: $_model.AssetOptimizeLiteRequest): Promise<$_model.AssetOptimizeLiteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assetOptimizeLiteWithOptions(request, runtime);
  }

  /**
   * Provides a one-click cross-platform product material optimization service for cross-border e-commerce sellers (optimal performance edition). This asynchronous operation takes 1688 product links as input and generates a full set of materials tailored to TEMU platform requirements, including titles, attributes, main images, SKU images, detail images, and copy. It uses officially pre-configured optimal workflows to maximize AI capabilities, retains and localizes brand marketing materials, and generates personalized materials such as size charts for categories like apparel.
   * 
   * @remarks
   * ## Product introduction
   * A one-click cross-platform product material optimization service for cross-border e-commerce sellers (best effect edition). Input a 1688 product link to generate a complete set of materials, including titles, attributes, main images, SKU images, detail images, and copy, tailored to TEMU platform requirements.
   * ## Scenarios
   * Applicable to scenarios with high requirements for the quality and conversion performance of cross-platform product materials. Examples include categories highly dependent on marketing materials such as apparel, accessories, cosmetics, and home goods; brand merchants and high-ticket items that need to retain the tone of marketing images with copy; top sellers and ERP/SaaS platforms conducting localized operations across multiple languages and markets; and scenarios requiring category-specific materials, such as size charts and weight and dimension charts, to improve listing quality and conversion rates.
   * ## Features
   * This service uses the official pre-built best-effect product optimization workflow, covering the entire pipeline from material acquisition, diagnosis, filtering, and optimization to output:
   * 1. Automatically parses 1688 product links to extract a full set of materials, including titles, SKUs, main images, detail images, and attributes, and intelligently diagnoses missing materials and optimization opportunities.
   * 2. Uses LLMs for text compliance filtering, SEO keyword optimization, five-point description generation, and multilingual localization rewriting.
   * 3. Invokes multiple capabilities for images, including intelligent recognition, intelligent background removal, intelligent object removal, Image Translation Pro, image outpainting, intelligent cropping, and high-definition upscaling.
   * 4. Generates category-specific materials, such as size charts and weight and dimension charts for apparel.
   * 5. Outputs a standardized product material package ready for direct listing.
   * 
   * @param tmpReq - AssetOptimizeProRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssetOptimizeProResponse
   */
  async assetOptimizeProWithOptions(tmpReq: $_model.AssetOptimizeProRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssetOptimizeProResponse> {
    tmpReq.validate();
    let request = new $_model.AssetOptimizeProShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.columnNameList)) {
      request.columnNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.columnNameList, "ColumnNameList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.columnNameListShrink)) {
      query["ColumnNameList"] = request.columnNameListShrink;
    }

    if (!$dara.isNull(request.glossary)) {
      query["Glossary"] = request.glossary;
    }

    if (!$dara.isNull(request.includingProductArea)) {
      query["IncludingProductArea"] = request.includingProductArea;
    }

    if (!$dara.isNull(request.languageModel)) {
      query["LanguageModel"] = request.languageModel;
    }

    if (!$dara.isNull(request.needTrans)) {
      query["NeedTrans"] = request.needTrans;
    }

    if (!$dara.isNull(request.productUrl)) {
      query["ProductUrl"] = request.productUrl;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      query["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.sourcePlatform)) {
      query["SourcePlatform"] = request.sourcePlatform;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      query["TargetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.targetPlatform)) {
      query["TargetPlatform"] = request.targetPlatform;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    if (!$dara.isNull(request.translatingBrandInTheProduct)) {
      query["TranslatingBrandInTheProduct"] = request.translatingBrandInTheProduct;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssetOptimizePro",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssetOptimizeProResponse>(await this.callApi(params, req, runtime), new $_model.AssetOptimizeProResponse({}));
  }

  /**
   * Provides a one-click cross-platform product material optimization service for cross-border e-commerce sellers (optimal performance edition). This asynchronous operation takes 1688 product links as input and generates a full set of materials tailored to TEMU platform requirements, including titles, attributes, main images, SKU images, detail images, and copy. It uses officially pre-configured optimal workflows to maximize AI capabilities, retains and localizes brand marketing materials, and generates personalized materials such as size charts for categories like apparel.
   * 
   * @remarks
   * ## Product introduction
   * A one-click cross-platform product material optimization service for cross-border e-commerce sellers (best effect edition). Input a 1688 product link to generate a complete set of materials, including titles, attributes, main images, SKU images, detail images, and copy, tailored to TEMU platform requirements.
   * ## Scenarios
   * Applicable to scenarios with high requirements for the quality and conversion performance of cross-platform product materials. Examples include categories highly dependent on marketing materials such as apparel, accessories, cosmetics, and home goods; brand merchants and high-ticket items that need to retain the tone of marketing images with copy; top sellers and ERP/SaaS platforms conducting localized operations across multiple languages and markets; and scenarios requiring category-specific materials, such as size charts and weight and dimension charts, to improve listing quality and conversion rates.
   * ## Features
   * This service uses the official pre-built best-effect product optimization workflow, covering the entire pipeline from material acquisition, diagnosis, filtering, and optimization to output:
   * 1. Automatically parses 1688 product links to extract a full set of materials, including titles, SKUs, main images, detail images, and attributes, and intelligently diagnoses missing materials and optimization opportunities.
   * 2. Uses LLMs for text compliance filtering, SEO keyword optimization, five-point description generation, and multilingual localization rewriting.
   * 3. Invokes multiple capabilities for images, including intelligent recognition, intelligent background removal, intelligent object removal, Image Translation Pro, image outpainting, intelligent cropping, and high-definition upscaling.
   * 4. Generates category-specific materials, such as size charts and weight and dimension charts for apparel.
   * 5. Outputs a standardized product material package ready for direct listing.
   * 
   * @param request - AssetOptimizeProRequest
   * @returns AssetOptimizeProResponse
   */
  async assetOptimizePro(request: $_model.AssetOptimizeProRequest): Promise<$_model.AssetOptimizeProResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assetOptimizeProWithOptions(request, runtime);
  }

  /**
   * Provides an intelligent cross-platform product category attribute filling service based on multimodal large models. Accepts product information from a source platform, automatically matches the category on a target platform, and intelligently fills all required attribute fields under the category to provide a one-stop solution for category selection and attribute filling during product listing. (Synchronous)
   * 
   * @remarks
   * # Scenarios
   * Cross-platform product listing attribute filling: When merchants list products across platforms, the source platform and the TEMU platform have different attribute fields required for different categories, and there are complex hierarchical associated options (such as material -> wood type -> density). Manual filling is time-consuming and error-prone. This service automatically understands product information and intelligently fills in various attributes. It is suitable for scenarios such as automated batch product listing for top sellers, ERP/SaaS platform integration, and quick product listing for SMB merchants.
   * # Features
   * Users input the product title, source category, product details, SKU, product attributes, and product images (up to 10). The system uses multimodal AI to understand the semantic and visual features of the product and completes two core tasks: 1. Matches the precise category path of the product on the TEMU platform. 2. Automatically fills in the required attributes under the category (such as material, battery properties, size, and connectivity) and returns the confidence level and filling reason for each attribute. The API operates in synchronous mode and returns results immediately after the call.
   * # Comparison
   * Take the attributes of a USB fan as an example:
   * | **1688 attribute** | **1688 attribute value** | **TEMU attribute** | **TEMU attribute value** | **Is it an existing**
   * **1688 attribute?** |
   * | --- | --- | --- | --- | --- |
   * | Brand | Other | Power supply method | USB charging (built-in battery) | No |
   * | Battery life | 3-6h (inclusive) | Rechargeable battery | Lithium battery | No |
   * | Additional features | Digital display | Battery capacity (mAh) | 4000 | Yes |
   * | Built-in battery capacity | 2000mAh-4000mAh (inclusive) | Fan features | High-speed features | No |
   * | Item number | X699 | Control method | Button | Yes |
   * | Main downstream platforms | eBay, Amazon, Wish, AliExpress, Independent site, LAZADA, Other | Finish type | Painted | Yes |
   * | Has licensable own brand | No | Recommended use | Cooling | No |
   * | Dimensions | 65\\*60\\*171 | Fan design | Wearable fan | No |
   * | Suitable gift-giving occasions | Personal gifts | Included components | None | No |
   * | Shell craftsmanship | Spraying (UV paint, rubber paint, metallic paint, piano baking paint, pearlescent powder) | Material | Plastic | No |
   * | Package volume | 65\\*60\\*171 | Special features | Portable | No |
   * | Exterior dimensions | 51\\*36\\*34 | Indoor/outdoor use | Both indoor and outdoor | No |
   * | Wind speed gears | 3 gears | Brand name | None | No |
   * | Operation method | Standard button |  |  |  |
   * | Fan blade material | ABS |  |  |  |
   * | Power supply method | USB |  |  |  |
   * | Built-in battery | Built-in battery |  |  |  |
   * | Patented source | No |  |  |  |
   * | Color | X699 fan-yellow, X699 fan-light purple, X699 fan-sky blue, X699 fan-orange, X699 fan-light green, Standard small fan |  |  |  |
   * | Main sales regions | Japan and South Korea, Africa, South Korea, Japan, Europe, South America, Southeast Asia, North America, Northeast Asia, Middle East, Latin America, Europe and America, Other |  |  |  |
   * | Exclusive source for cross-border export | Yes |  |  |  |
   * | Style | Fresh |  |  |  |
   * | Motor type | Brushless motor |  |  |  |
   * | Noise | 36dB(A)-45dB(A) (inclusive) |  |  |  |
   * | Net weight | 125g |  |  |  |
   * | Number of fan blades | 6 or more |  |  |  |
   * | Fan category | Handheld fan |  |  |  |
   * 
   * @param tmpReq - CategoryAttributeMatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CategoryAttributeMatchResponse
   */
  async categoryAttributeMatchWithOptions(tmpReq: $_model.CategoryAttributeMatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CategoryAttributeMatchResponse> {
    tmpReq.validate();
    let request = new $_model.CategoryAttributeMatchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.imageUrl)) {
      request.imageUrlShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageUrl, "ImageUrl", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.imageUrlShrink)) {
      body["ImageUrl"] = request.imageUrlShrink;
    }

    if (!$dara.isNull(request.itemSpec)) {
      body["ItemSpec"] = request.itemSpec;
    }

    if (!$dara.isNull(request.sku)) {
      body["Sku"] = request.sku;
    }

    if (!$dara.isNull(request.sourceCategory)) {
      body["SourceCategory"] = request.sourceCategory;
    }

    if (!$dara.isNull(request.sourcePlatform)) {
      body["SourcePlatform"] = request.sourcePlatform;
    }

    if (!$dara.isNull(request.targetPlatform)) {
      body["TargetPlatform"] = request.targetPlatform;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CategoryAttributeMatch",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CategoryAttributeMatchResponse>(await this.callApi(params, req, runtime), new $_model.CategoryAttributeMatchResponse({}));
  }

  /**
   * Provides an intelligent cross-platform product category attribute filling service based on multimodal large models. Accepts product information from a source platform, automatically matches the category on a target platform, and intelligently fills all required attribute fields under the category to provide a one-stop solution for category selection and attribute filling during product listing. (Synchronous)
   * 
   * @remarks
   * # Scenarios
   * Cross-platform product listing attribute filling: When merchants list products across platforms, the source platform and the TEMU platform have different attribute fields required for different categories, and there are complex hierarchical associated options (such as material -> wood type -> density). Manual filling is time-consuming and error-prone. This service automatically understands product information and intelligently fills in various attributes. It is suitable for scenarios such as automated batch product listing for top sellers, ERP/SaaS platform integration, and quick product listing for SMB merchants.
   * # Features
   * Users input the product title, source category, product details, SKU, product attributes, and product images (up to 10). The system uses multimodal AI to understand the semantic and visual features of the product and completes two core tasks: 1. Matches the precise category path of the product on the TEMU platform. 2. Automatically fills in the required attributes under the category (such as material, battery properties, size, and connectivity) and returns the confidence level and filling reason for each attribute. The API operates in synchronous mode and returns results immediately after the call.
   * # Comparison
   * Take the attributes of a USB fan as an example:
   * | **1688 attribute** | **1688 attribute value** | **TEMU attribute** | **TEMU attribute value** | **Is it an existing**
   * **1688 attribute?** |
   * | --- | --- | --- | --- | --- |
   * | Brand | Other | Power supply method | USB charging (built-in battery) | No |
   * | Battery life | 3-6h (inclusive) | Rechargeable battery | Lithium battery | No |
   * | Additional features | Digital display | Battery capacity (mAh) | 4000 | Yes |
   * | Built-in battery capacity | 2000mAh-4000mAh (inclusive) | Fan features | High-speed features | No |
   * | Item number | X699 | Control method | Button | Yes |
   * | Main downstream platforms | eBay, Amazon, Wish, AliExpress, Independent site, LAZADA, Other | Finish type | Painted | Yes |
   * | Has licensable own brand | No | Recommended use | Cooling | No |
   * | Dimensions | 65\\*60\\*171 | Fan design | Wearable fan | No |
   * | Suitable gift-giving occasions | Personal gifts | Included components | None | No |
   * | Shell craftsmanship | Spraying (UV paint, rubber paint, metallic paint, piano baking paint, pearlescent powder) | Material | Plastic | No |
   * | Package volume | 65\\*60\\*171 | Special features | Portable | No |
   * | Exterior dimensions | 51\\*36\\*34 | Indoor/outdoor use | Both indoor and outdoor | No |
   * | Wind speed gears | 3 gears | Brand name | None | No |
   * | Operation method | Standard button |  |  |  |
   * | Fan blade material | ABS |  |  |  |
   * | Power supply method | USB |  |  |  |
   * | Built-in battery | Built-in battery |  |  |  |
   * | Patented source | No |  |  |  |
   * | Color | X699 fan-yellow, X699 fan-light purple, X699 fan-sky blue, X699 fan-orange, X699 fan-light green, Standard small fan |  |  |  |
   * | Main sales regions | Japan and South Korea, Africa, South Korea, Japan, Europe, South America, Southeast Asia, North America, Northeast Asia, Middle East, Latin America, Europe and America, Other |  |  |  |
   * | Exclusive source for cross-border export | Yes |  |  |  |
   * | Style | Fresh |  |  |  |
   * | Motor type | Brushless motor |  |  |  |
   * | Noise | 36dB(A)-45dB(A) (inclusive) |  |  |  |
   * | Net weight | 125g |  |  |  |
   * | Number of fan blades | 6 or more |  |  |  |
   * | Fan category | Handheld fan |  |  |  |
   * 
   * @param request - CategoryAttributeMatchRequest
   * @returns CategoryAttributeMatchResponse
   */
  async categoryAttributeMatch(request: $_model.CategoryAttributeMatchRequest): Promise<$_model.CategoryAttributeMatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.categoryAttributeMatchWithOptions(request, runtime);
  }

  /**
   * Provides an intelligent cross-platform product category matching service based on large language models. Accepts product information from a source platform, automatically matches the optimal category on the target platform, and returns a confidence score and matching rationale to help merchants quickly select categories for cross-platform product listing. (Synchronous)
   * 
   * @remarks
   * ## Product Introduction
   * Provides an intelligent cross-platform product category matching service based on large language models. Accepts product information from a source platform, automatically matches the optimal category on the target platform, and returns a confidence score and matching rationale to help merchants quickly select categories for cross-platform product listing. (Synchronous)
   * ## Scenarios
   * Cross-platform product listing: After sourcing products, merchants list them on a target platform and need to map the products to the correct categories in the target platform\\"s category tree. Manual category selection requires familiarity with the target platform\\"s complete category system, which is time-consuming, labor-intensive, and error-prone. Incorrect category matching can lead to product delisting and other issues.
   * This service automatically completes category mapping and is suitable for scenarios such as batch calls from self-built systems of top sellers, integration of automated product listing workflows into ERP/SaaS platforms, and quick listing of single products by SMB merchants.
   * The current version only supports TEMU as the target platform. It does not currently support directly retrieving product information from the source platform, requiring users to manually input parameters. Future updates will add this capability and expand support for more source and target platforms.
   * ## Features
   * Users input fields such as the product title, source category, product details, SKU information, and product attributes. The system uses an AI model to understand the product semantics and matches the most appropriate category path from the full category tree of the TEMU platform. The returned results include the complete category path (CategoryPath), category name (CategoryName), confidence score (0-100), and matching rationale. The API operates in synchronous mode and returns results immediately after the call, making it suitable for embedding in real-time business workflows.
   * ## Examples
   * | **Source platform** | **Image** | **Source platform category** | **Target platform** | **Target platform category** |
   * | --- | --- | --- | --- | --- |
   * | 1688 | ![done-image-245c58c8-a9fc-4e32-b959-8b4bcd52b264.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/jP2lRYjv7234mO8g/img/69a226e8-aff1-4891-bb0a-c47c1ea397ae.png) | USB fans, mini fans | TEMU | Home Appliances
   * \\>Heating, Cooling & Air Quality Appliances
   * \\>Electric Fans
   * \\>USB Fans |
   * | 1688 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/jP2lRYjv7234mO8g/img/8a546f7d-826e-43d6-b5f3-12d1edef8897.png) | Bracelets | TEMU | Clothing, Shoes & Jewelry
   * \\>Women\\"s Fashion
   * \\>Women\\"s Accessories
   * \\>Women\\"s Fashion Bracelets & Bangles
   * \\>Women\\"s Fashion Charms & Charm Bracelets
   * \\>Women\\"s Fashion Charm Bracelets
   * \\>Women\\"s Fashion Chain Charm Bracelets |
   * 
   * @param request - CategoryMatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CategoryMatchResponse
   */
  async categoryMatchWithOptions(request: $_model.CategoryMatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CategoryMatchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.itemSpec)) {
      query["ItemSpec"] = request.itemSpec;
    }

    if (!$dara.isNull(request.sku)) {
      query["Sku"] = request.sku;
    }

    if (!$dara.isNull(request.sourceCategory)) {
      query["SourceCategory"] = request.sourceCategory;
    }

    if (!$dara.isNull(request.sourcePlatform)) {
      query["SourcePlatform"] = request.sourcePlatform;
    }

    if (!$dara.isNull(request.targetPlatform)) {
      query["TargetPlatform"] = request.targetPlatform;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CategoryMatch",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CategoryMatchResponse>(await this.callApi(params, req, runtime), new $_model.CategoryMatchResponse({}));
  }

  /**
   * Provides an intelligent cross-platform product category matching service based on large language models. Accepts product information from a source platform, automatically matches the optimal category on the target platform, and returns a confidence score and matching rationale to help merchants quickly select categories for cross-platform product listing. (Synchronous)
   * 
   * @remarks
   * ## Product Introduction
   * Provides an intelligent cross-platform product category matching service based on large language models. Accepts product information from a source platform, automatically matches the optimal category on the target platform, and returns a confidence score and matching rationale to help merchants quickly select categories for cross-platform product listing. (Synchronous)
   * ## Scenarios
   * Cross-platform product listing: After sourcing products, merchants list them on a target platform and need to map the products to the correct categories in the target platform\\"s category tree. Manual category selection requires familiarity with the target platform\\"s complete category system, which is time-consuming, labor-intensive, and error-prone. Incorrect category matching can lead to product delisting and other issues.
   * This service automatically completes category mapping and is suitable for scenarios such as batch calls from self-built systems of top sellers, integration of automated product listing workflows into ERP/SaaS platforms, and quick listing of single products by SMB merchants.
   * The current version only supports TEMU as the target platform. It does not currently support directly retrieving product information from the source platform, requiring users to manually input parameters. Future updates will add this capability and expand support for more source and target platforms.
   * ## Features
   * Users input fields such as the product title, source category, product details, SKU information, and product attributes. The system uses an AI model to understand the product semantics and matches the most appropriate category path from the full category tree of the TEMU platform. The returned results include the complete category path (CategoryPath), category name (CategoryName), confidence score (0-100), and matching rationale. The API operates in synchronous mode and returns results immediately after the call, making it suitable for embedding in real-time business workflows.
   * ## Examples
   * | **Source platform** | **Image** | **Source platform category** | **Target platform** | **Target platform category** |
   * | --- | --- | --- | --- | --- |
   * | 1688 | ![done-image-245c58c8-a9fc-4e32-b959-8b4bcd52b264.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/jP2lRYjv7234mO8g/img/69a226e8-aff1-4891-bb0a-c47c1ea397ae.png) | USB fans, mini fans | TEMU | Home Appliances
   * \\>Heating, Cooling & Air Quality Appliances
   * \\>Electric Fans
   * \\>USB Fans |
   * | 1688 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/jP2lRYjv7234mO8g/img/8a546f7d-826e-43d6-b5f3-12d1edef8897.png) | Bracelets | TEMU | Clothing, Shoes & Jewelry
   * \\>Women\\"s Fashion
   * \\>Women\\"s Accessories
   * \\>Women\\"s Fashion Bracelets & Bangles
   * \\>Women\\"s Fashion Charms & Charm Bracelets
   * \\>Women\\"s Fashion Charm Bracelets
   * \\>Women\\"s Fashion Chain Charm Bracelets |
   * 
   * @param request - CategoryMatchRequest
   * @returns CategoryMatchResponse
   */
  async categoryMatch(request: $_model.CategoryMatchRequest): Promise<$_model.CategoryMatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.categoryMatchWithOptions(request, runtime);
  }

  /**
   * Synchronously deletes content from a display knowledge base in batches.
   * 
   * @param tmpReq - DeleteDisplayKnowledgeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDisplayKnowledgeResponse
   */
  async deleteDisplayKnowledgeWithOptions(tmpReq: $_model.DeleteDisplayKnowledgeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDisplayKnowledgeResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteDisplayKnowledgeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.recordIds)) {
      request.recordIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recordIds, "RecordIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ragId)) {
      query["RagId"] = request.ragId;
    }

    if (!$dara.isNull(request.recordIdsShrink)) {
      query["RecordIds"] = request.recordIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDisplayKnowledge",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDisplayKnowledgeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDisplayKnowledgeResponse({}));
  }

  /**
   * Synchronously deletes content from a display knowledge base in batches.
   * 
   * @param request - DeleteDisplayKnowledgeRequest
   * @returns DeleteDisplayKnowledgeResponse
   */
  async deleteDisplayKnowledge(request: $_model.DeleteDisplayKnowledgeRequest): Promise<$_model.DeleteDisplayKnowledgeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDisplayKnowledgeWithOptions(request, runtime);
  }

  /**
   * Calculates the side lengths and floor area of a floor display based on the floor display image and product bounding boxes.
   * 
   * @remarks
   * ## Request description
   * **Before calling this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product#/ecs/detail) of the floor display area inference product.**
   * - This operation infers the actual dimensions (the lengths of the two sides) and floor area of a floor display based on the provided overall image of the floor display, the SKU knowledge base, and the position information of products in the image.
   * - Make sure that the knowledge base corresponding to the provided `RagId` belongs to the caller and is in the `AVAILABLE` state.
   * - The `Products` array must contain at least one product item, and the `Boxes` array under each product item must contain at least one bounding box.
   * - All coordinate values are represented in a normalized coordinate system ranging from 0 to 1000. Make sure that the input satisfies the `Left < Right` and `Top < Bottom` conditions.
   * - Set a reasonable timeout period (recommended maximum of 300 seconds) when calling this API to prevent failures caused by network latency or high processing complexity.
   * - For calls in the production environment, use the POP Action method for access. Internal REST addresses are mainly used for joint debugging during the development and testing phases.
   * 
   * @param tmpReq - DiduiAreaDeductionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DiduiAreaDeductionResponse
   */
  async diduiAreaDeductionWithOptions(tmpReq: $_model.DiduiAreaDeductionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DiduiAreaDeductionResponse> {
    tmpReq.validate();
    let request = new $_model.DiduiAreaDeductionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.products)) {
      request.productsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.products, "Products", "json");
    }

    let query = { };
    if (!$dara.isNull(request.productsShrink)) {
      query["Products"] = request.productsShrink;
    }

    if (!$dara.isNull(request.ragId)) {
      query["RagId"] = request.ragId;
    }

    if (!$dara.isNull(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!$dara.isNull(request.targetImageUrl)) {
      query["TargetImageUrl"] = request.targetImageUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DiduiAreaDeduction",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DiduiAreaDeductionResponse>(await this.callApi(params, req, runtime), new $_model.DiduiAreaDeductionResponse({}));
  }

  /**
   * Calculates the side lengths and floor area of a floor display based on the floor display image and product bounding boxes.
   * 
   * @remarks
   * ## Request description
   * **Before calling this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product#/ecs/detail) of the floor display area inference product.**
   * - This operation infers the actual dimensions (the lengths of the two sides) and floor area of a floor display based on the provided overall image of the floor display, the SKU knowledge base, and the position information of products in the image.
   * - Make sure that the knowledge base corresponding to the provided `RagId` belongs to the caller and is in the `AVAILABLE` state.
   * - The `Products` array must contain at least one product item, and the `Boxes` array under each product item must contain at least one bounding box.
   * - All coordinate values are represented in a normalized coordinate system ranging from 0 to 1000. Make sure that the input satisfies the `Left < Right` and `Top < Bottom` conditions.
   * - Set a reasonable timeout period (recommended maximum of 300 seconds) when calling this API to prevent failures caused by network latency or high processing complexity.
   * - For calls in the production environment, use the POP Action method for access. Internal REST addresses are mainly used for joint debugging during the development and testing phases.
   * 
   * @param request - DiduiAreaDeductionRequest
   * @returns DiduiAreaDeductionResponse
   */
  async diduiAreaDeduction(request: $_model.DiduiAreaDeductionRequest): Promise<$_model.DiduiAreaDeductionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.diduiAreaDeductionWithOptions(request, runtime);
  }

  /**
   * Analyzes the area of floor displays based on product recognition, SKU asset knowledge bases, and dedicated area reasoning model building. The product first locates products in floor displays, reads the actual length, width, height, and reference images of the corresponding SKUs, and infers the two side lengths and area of the bounding rectangle of the floor display area. This feature is suitable for evaluating the scale of floor displays in stores and conducting inspection reviews.
   * 
   * @remarks
   * *Scenarios**
   * - Floor display area evaluation: Infers the area of the bounding rectangle based on the overall photo of the floor display and the actual dimensions of the products.
   * - Multi-SKU mixed layout analysis: Uses the dimensions of different products to infer side lengths.
   * - Area result review: Verifies the results based on the original image, product assets, and the returned two side lengths and area.
   * **Features**
   * - SKU asset-driven: Specifies the asset knowledge base by using ragId. Each participating product must have a name, positive length, width, and height, and at least one HTTPS reference image.
   * - Phased area inference: Sequentially forms decision edges, SKU projections, dimension accumulation, and the final area.
   * - Unified units: SKU asset dimensions are stored in centimeters. The result side lengths are output in meters and the area is output in square meters.
   * - Completeness and value verification: Returns a failure if assets are missing, no valid bounding boxes are found, or the area does not match the product of the side lengths.
   * 
   * @param request - DiduiAreaDeductionProRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DiduiAreaDeductionProResponse
   */
  async diduiAreaDeductionProWithOptions(request: $_model.DiduiAreaDeductionProRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DiduiAreaDeductionProResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.ragId)) {
      query["RagId"] = request.ragId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DiduiAreaDeductionPro",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DiduiAreaDeductionProResponse>(await this.callApi(params, req, runtime), new $_model.DiduiAreaDeductionProResponse({}));
  }

  /**
   * Analyzes the area of floor displays based on product recognition, SKU asset knowledge bases, and dedicated area reasoning model building. The product first locates products in floor displays, reads the actual length, width, height, and reference images of the corresponding SKUs, and infers the two side lengths and area of the bounding rectangle of the floor display area. This feature is suitable for evaluating the scale of floor displays in stores and conducting inspection reviews.
   * 
   * @remarks
   * *Scenarios**
   * - Floor display area evaluation: Infers the area of the bounding rectangle based on the overall photo of the floor display and the actual dimensions of the products.
   * - Multi-SKU mixed layout analysis: Uses the dimensions of different products to infer side lengths.
   * - Area result review: Verifies the results based on the original image, product assets, and the returned two side lengths and area.
   * **Features**
   * - SKU asset-driven: Specifies the asset knowledge base by using ragId. Each participating product must have a name, positive length, width, and height, and at least one HTTPS reference image.
   * - Phased area inference: Sequentially forms decision edges, SKU projections, dimension accumulation, and the final area.
   * - Unified units: SKU asset dimensions are stored in centimeters. The result side lengths are output in meters and the area is output in square meters.
   * - Completeness and value verification: Returns a failure if assets are missing, no valid bounding boxes are found, or the area does not match the product of the side lengths.
   * 
   * @param request - DiduiAreaDeductionProRequest
   * @returns DiduiAreaDeductionProResponse
   */
  async diduiAreaDeductionPro(request: $_model.DiduiAreaDeductionProRequest): Promise<$_model.DiduiAreaDeductionProResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.diduiAreaDeductionProWithOptions(request, runtime);
  }

  /**
   * Translates documents with a solution designed specifically for document translation. It supports over 150 languages and provides pivot translation capabilities with thousands of pivot combinations. It handles multi-scenario, multi-page, and highly complex document translation, but does not currently support scanned documents. It excels in the following aspects:
   * - Content accuracy: translation accuracy, and accuracy of parameters and units.
   * - Structural integrity: overall layout continuity, and restoration of page margins and layouts.
   * 
   * @remarks
   * # Product introduction
   * Designed specifically for document translation, this service supports more than 150 languages and provides bridging translation capabilities with thousands of language combinations. It handles multi-scenario, multi-page, and highly complex document translations, but does not currently support scanned documents.
   * It excels in the following aspects:
   * *   Content accuracy: translation accuracy, and accuracy of parameters and units.
   *     
   * *   Structural integrity: overall layout continuity, and restoration of page margins and layouts.
   * # Scenarios
   * Cross-border e-commerce product manuals, contracts, agreements, business proposals, qualification documents, teaching materials, courseware, and various other scenarios.
   * # Features
   * *   Supports PDF, Word, and Excel formats. Supports source documents that contain multiple languages. For the detailed language list, see Section 4.4.
   *     
   * *   Supports the translation of text within images in documents, as well as complex translation scenarios involving other charts and special symbols.
   *     
   * *   Supports highly accurate layout restoration after translation.
   *     
   * *   Supports the translation of a single PDF or Word document with up to **800 pages**.
   *     
   * *   Supports custom translation results, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and translation omission (ABC-null value). This is commonly used in scenarios such as brand word protection. You can implement this by passing the corresponding intervention glossary ID when calling the API to meet your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance. For detailed instructions on translation intervention, see [Full-modal translation - Translation intervention instruction manual](https://www.alibabacloud.com/help/en/aidge/full-modal-translation-translation-intervention-instruction-manual)
   * 
   * @param request - DocumentTranslateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DocumentTranslateResponse
   */
  async documentTranslateWithOptions(request: $_model.DocumentTranslateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DocumentTranslateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.glossary)) {
      query["Glossary"] = request.glossary;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      query["TargetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DocumentTranslate",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DocumentTranslateResponse>(await this.callApi(params, req, runtime), new $_model.DocumentTranslateResponse({}));
  }

  /**
   * Translates documents with a solution designed specifically for document translation. It supports over 150 languages and provides pivot translation capabilities with thousands of pivot combinations. It handles multi-scenario, multi-page, and highly complex document translation, but does not currently support scanned documents. It excels in the following aspects:
   * - Content accuracy: translation accuracy, and accuracy of parameters and units.
   * - Structural integrity: overall layout continuity, and restoration of page margins and layouts.
   * 
   * @remarks
   * # Product introduction
   * Designed specifically for document translation, this service supports more than 150 languages and provides bridging translation capabilities with thousands of language combinations. It handles multi-scenario, multi-page, and highly complex document translations, but does not currently support scanned documents.
   * It excels in the following aspects:
   * *   Content accuracy: translation accuracy, and accuracy of parameters and units.
   *     
   * *   Structural integrity: overall layout continuity, and restoration of page margins and layouts.
   * # Scenarios
   * Cross-border e-commerce product manuals, contracts, agreements, business proposals, qualification documents, teaching materials, courseware, and various other scenarios.
   * # Features
   * *   Supports PDF, Word, and Excel formats. Supports source documents that contain multiple languages. For the detailed language list, see Section 4.4.
   *     
   * *   Supports the translation of text within images in documents, as well as complex translation scenarios involving other charts and special symbols.
   *     
   * *   Supports highly accurate layout restoration after translation.
   *     
   * *   Supports the translation of a single PDF or Word document with up to **800 pages**.
   *     
   * *   Supports custom translation results, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and translation omission (ABC-null value). This is commonly used in scenarios such as brand word protection. You can implement this by passing the corresponding intervention glossary ID when calling the API to meet your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance. For detailed instructions on translation intervention, see [Full-modal translation - Translation intervention instruction manual](https://www.alibabacloud.com/help/en/aidge/full-modal-translation-translation-intervention-instruction-manual)
   * 
   * @param request - DocumentTranslateRequest
   * @returns DocumentTranslateResponse
   */
  async documentTranslate(request: $_model.DocumentTranslateRequest): Promise<$_model.DocumentTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.documentTranslateWithOptions(request, runtime);
  }

  /**
   * Provides an AI video service for e-commerce content production, covering video understanding, element replacement, quality verification, and result delivery. The service focuses on product and person consistency, detail restoration, conversion expression, and scaled production. It supports targeted replacement of products or persons based on viral video templates, quickly generating multiple versions of content while preserving original actions, camera rhythms, and marketing structures to reduce shooting, editing, and adaptation costs.
   * 
   * @remarks
   * ## **Product introduction**
   * E-commerce video variation is an AI video service for product content production, covering video understanding, element replacement, quality verification, and result delivery. The service focuses on product and person consistency, detail restoration, conversion expression, and scaled production. It supports targeted replacement of products or persons based on viral video templates, quickly generating multiple versions of content while preserving original actions, camera rhythms, and marketing structures to reduce shooting, editing, and adaptation costs.
   * ## **Scenarios**
   * - **Video material variation:** Uses an existing e-commerce video as a template and replaces only specified products or persons in the video, preserving the original camera angles, rhythm, and marketing expression as much as possible. This is suitable for producing materials with multiple SKUs, models, regions, and versions.
   * - **New product launch and rapid material generation:** For centrally launched new products, this reduces manual shooting, studio setup, post-production editing, and repetitive production processes. It quickly deploys new product video materials, helping merchants shorten the launch cycle from spotting a viral video to breaking down the script and shooting new content.
   * - **Product explanation and selling point expression:** Suitable for products such as apparel, beauty and personal care, food and beverages, home and daily necessities, 3C digital products, and small home appliances. It can plan the explanation structure, display actions, and camera rhythm based on the selling points of the original video, and generate explanation videos tailored for the conversion of new products.
   * - **Multi-selling point and multi-version testing:** Quickly generates multiple versions based on different product selling points, target audiences, scripts, camera angles, and visual styles, supporting merchants in conducting content testing and iterating delivery materials.
   * ## **Feature overview**
   * ### **Core capabilities**
   * *   **Supports two replacement modes:**
   *     
   *     *   **Product replacement (**`product_replacement`**)**: Preserves the original video\\"s host identity, actions, scene, and sales structure, and replaces the original product with the target product.
   *         
   *     *   **Person replacement (**`person_replacement`**)**: Preserves the original video\\"s product, actions, scene, and sales structure, and replaces the on-screen person with the target person from reference images or descriptions.
   *         
   * *   **Supports two generation modes:**
   *     
   *     *   **Reference generation (**`reference`**)**: 1:1 replication. Uses the original video as a complete reference to automatically generate a new video with the same duration as the original video. It preserves the original script, storyboard, actions, scene, and rhythm, and only performs targeted replacement of specified content such as persons or products.
   *         
   *     *   **Rebuild generation (**`rebuild`**)**: Breaks down the script, storyboard, and key elements of the original video, retains only core content such as specified persons or products, and then redesigns and generates a new video. It is not limited by the original video duration and supports inputting a target duration.
   *         
   * *   **Fully automated end-to-end generation with zero prompt threshold**: Only requires passing the reference video and target product or person images. The system automatically completes the entire process of video understanding, script planning, storyboard design, first-frame generation, and video synthesis.
   *     
   * *   **Product understanding and information structuring**: Identifies product categories, appearance, materials, colors, structures, and key components, and combines them with titles, attributes, and selling points provided by merchants to generate usable video expression information.
   *     
   * *   **Template video element replacement**: Supports replacing products or persons within the authorized scope, and defines the replacement scope and protection scope to minimize changes in non-target areas.
   *     
   * *   **Product subject consistency**: Maintains the stability of the product\\"s shape, color, texture, pattern, packaging, and logo as much as possible across different camera angles, perspectives, actions, and scenes.
   *     
   * *   **Product fidelity**: Multi-round VL quality inspection locks the product state (color, texture, structure, print) throughout the process to prevent product feature drift.
   *     
   * *   **Selling point script and storyboard replication**: Follows the selling point planning, video structure, camera sequence, display actions, voiceover content, and ending style of the original video.
   *     
   * *   **Commercial model adaptation**: Supports matching corresponding model images and display methods based on product style, fit, target audience, and market demand.
   *     
   * *   **Quality verification and result feedback**: Performs multi-dimensional checks on the product subject, person, clothing, text, picture integrity, audio, and overall usability, and outputs result information for manual review.
   * 
   * @param tmpReq - EcomVideoRecreationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EcomVideoRecreationResponse
   */
  async ecomVideoRecreationWithOptions(tmpReq: $_model.EcomVideoRecreationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EcomVideoRecreationResponse> {
    tmpReq.validate();
    let request = new $_model.EcomVideoRecreationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!$dara.isNull(tmpReq.output)) {
      request.outputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.output, "Output", "json");
    }

    let query = { };
    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.outputShrink)) {
      query["Output"] = request.outputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EcomVideoRecreation",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EcomVideoRecreationResponse>(await this.callApi(params, req, runtime), new $_model.EcomVideoRecreationResponse({}));
  }

  /**
   * Provides an AI video service for e-commerce content production, covering video understanding, element replacement, quality verification, and result delivery. The service focuses on product and person consistency, detail restoration, conversion expression, and scaled production. It supports targeted replacement of products or persons based on viral video templates, quickly generating multiple versions of content while preserving original actions, camera rhythms, and marketing structures to reduce shooting, editing, and adaptation costs.
   * 
   * @remarks
   * ## **Product introduction**
   * E-commerce video variation is an AI video service for product content production, covering video understanding, element replacement, quality verification, and result delivery. The service focuses on product and person consistency, detail restoration, conversion expression, and scaled production. It supports targeted replacement of products or persons based on viral video templates, quickly generating multiple versions of content while preserving original actions, camera rhythms, and marketing structures to reduce shooting, editing, and adaptation costs.
   * ## **Scenarios**
   * - **Video material variation:** Uses an existing e-commerce video as a template and replaces only specified products or persons in the video, preserving the original camera angles, rhythm, and marketing expression as much as possible. This is suitable for producing materials with multiple SKUs, models, regions, and versions.
   * - **New product launch and rapid material generation:** For centrally launched new products, this reduces manual shooting, studio setup, post-production editing, and repetitive production processes. It quickly deploys new product video materials, helping merchants shorten the launch cycle from spotting a viral video to breaking down the script and shooting new content.
   * - **Product explanation and selling point expression:** Suitable for products such as apparel, beauty and personal care, food and beverages, home and daily necessities, 3C digital products, and small home appliances. It can plan the explanation structure, display actions, and camera rhythm based on the selling points of the original video, and generate explanation videos tailored for the conversion of new products.
   * - **Multi-selling point and multi-version testing:** Quickly generates multiple versions based on different product selling points, target audiences, scripts, camera angles, and visual styles, supporting merchants in conducting content testing and iterating delivery materials.
   * ## **Feature overview**
   * ### **Core capabilities**
   * *   **Supports two replacement modes:**
   *     
   *     *   **Product replacement (**`product_replacement`**)**: Preserves the original video\\"s host identity, actions, scene, and sales structure, and replaces the original product with the target product.
   *         
   *     *   **Person replacement (**`person_replacement`**)**: Preserves the original video\\"s product, actions, scene, and sales structure, and replaces the on-screen person with the target person from reference images or descriptions.
   *         
   * *   **Supports two generation modes:**
   *     
   *     *   **Reference generation (**`reference`**)**: 1:1 replication. Uses the original video as a complete reference to automatically generate a new video with the same duration as the original video. It preserves the original script, storyboard, actions, scene, and rhythm, and only performs targeted replacement of specified content such as persons or products.
   *         
   *     *   **Rebuild generation (**`rebuild`**)**: Breaks down the script, storyboard, and key elements of the original video, retains only core content such as specified persons or products, and then redesigns and generates a new video. It is not limited by the original video duration and supports inputting a target duration.
   *         
   * *   **Fully automated end-to-end generation with zero prompt threshold**: Only requires passing the reference video and target product or person images. The system automatically completes the entire process of video understanding, script planning, storyboard design, first-frame generation, and video synthesis.
   *     
   * *   **Product understanding and information structuring**: Identifies product categories, appearance, materials, colors, structures, and key components, and combines them with titles, attributes, and selling points provided by merchants to generate usable video expression information.
   *     
   * *   **Template video element replacement**: Supports replacing products or persons within the authorized scope, and defines the replacement scope and protection scope to minimize changes in non-target areas.
   *     
   * *   **Product subject consistency**: Maintains the stability of the product\\"s shape, color, texture, pattern, packaging, and logo as much as possible across different camera angles, perspectives, actions, and scenes.
   *     
   * *   **Product fidelity**: Multi-round VL quality inspection locks the product state (color, texture, structure, print) throughout the process to prevent product feature drift.
   *     
   * *   **Selling point script and storyboard replication**: Follows the selling point planning, video structure, camera sequence, display actions, voiceover content, and ending style of the original video.
   *     
   * *   **Commercial model adaptation**: Supports matching corresponding model images and display methods based on product style, fit, target audience, and market demand.
   *     
   * *   **Quality verification and result feedback**: Performs multi-dimensional checks on the product subject, person, clothing, text, picture integrity, audio, and overall usability, and outputs result information for manual review.
   * 
   * @param request - EcomVideoRecreationRequest
   * @returns EcomVideoRecreationResponse
   */
  async ecomVideoRecreation(request: $_model.EcomVideoRecreationRequest): Promise<$_model.EcomVideoRecreationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.ecomVideoRecreationWithOptions(request, runtime);
  }

  /**
   * Detects whether an image is recaptured and locates main physical products, screen display areas, printed photos, and visible recapture clues based on recapture recognition and multimodal large model element localization. This general-purpose image moderation service applies to risk screening and manual review of store inspection photos across multiple categories.
   * 
   * @remarks
   * *Scenarios**
   * 1. Inspection photo review: Screens photos submitted by stores for recapture risks.
   * 2. Screen or printed photo recapture verification: Locates visible screens, printed photos, and other media.
   * 3. Review clue display: Annotates products and visible clues on the original image to assist in manual review.
   * **Features**
   * 1. General recapture detection: Outputs a Boolean conclusion for isFake.
   * 2. Review element localization: Distinguishes physical products, screens, printed photos, and visible recapture clues. Products inside screens are not repeatedly output as physical products.
   * 3. Separate presentation of clues and conclusions: Localization text only describes visible phenomena and does not directly use normal reflections or standard packaging prints as recapture evidence.
   * Supports single HTTPS image input. Supplementary localization returns up to 12 targets. Each target includes a category, a bounding box, and up to 24 characters of visible text, and uses coverage to indicate whether the localization is complete.
   * 
   * @param request - GeneralRephotographyDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GeneralRephotographyDetectionResponse
   */
  async generalRephotographyDetectionWithOptions(request: $_model.GeneralRephotographyDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GeneralRephotographyDetectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GeneralRephotographyDetection",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GeneralRephotographyDetectionResponse>(await this.callApi(params, req, runtime), new $_model.GeneralRephotographyDetectionResponse({}));
  }

  /**
   * Detects whether an image is recaptured and locates main physical products, screen display areas, printed photos, and visible recapture clues based on recapture recognition and multimodal large model element localization. This general-purpose image moderation service applies to risk screening and manual review of store inspection photos across multiple categories.
   * 
   * @remarks
   * *Scenarios**
   * 1. Inspection photo review: Screens photos submitted by stores for recapture risks.
   * 2. Screen or printed photo recapture verification: Locates visible screens, printed photos, and other media.
   * 3. Review clue display: Annotates products and visible clues on the original image to assist in manual review.
   * **Features**
   * 1. General recapture detection: Outputs a Boolean conclusion for isFake.
   * 2. Review element localization: Distinguishes physical products, screens, printed photos, and visible recapture clues. Products inside screens are not repeatedly output as physical products.
   * 3. Separate presentation of clues and conclusions: Localization text only describes visible phenomena and does not directly use normal reflections or standard packaging prints as recapture evidence.
   * Supports single HTTPS image input. Supplementary localization returns up to 12 targets. Each target includes a category, a bounding box, and up to 24 characters of visible text, and uses coverage to indicate whether the localization is complete.
   * 
   * @param request - GeneralRephotographyDetectionRequest
   * @returns GeneralRephotographyDetectionResponse
   */
  async generalRephotographyDetection(request: $_model.GeneralRephotographyDetectionRequest): Promise<$_model.GeneralRephotographyDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generalRephotographyDetectionWithOptions(request, runtime);
  }

  /**
   * Generates or rewrites e-commerce product copy, such as titles, short highlights, search keywords, bulleted selling points, and product descriptions, based on input product information or existing copy, and adapts the content type and length to the requirements of the target platform. Supports Chinese and English input materials and optional multilingual translation for scenarios such as domestic product listing, cross-border product distribution, and product copy localization. Uses synchronous invocation to process one copy type for a single product per request.
   * 
   * @remarks
   * # Product introduction
   * E-commerce product copy generation is an AI text service for e-commerce product content production. By inputting product materials or existing copy, you can generate or rewrite product titles, short highlights, search keywords, bullet points, and product descriptions, and adapt the content type and length to the target platform as needed.
   * It supports Chinese and English material inputs and optional multilingual translation, and applies to scenarios such as domestic product listing, cross-border distribution, and product copy localization. The API uses synchronous calls and processes one copy type for one product per request.
   * # Scenarios
   * | **Scenario** | **Description** |
   * | --- | --- |
   * | Same-platform localization | Select rewrite and translate as needed to retain the original facts and type structure. |
   * | Cross-platform content adaptation | Select the target platform to generate or rewrite content according to its configuration limits. The source platform of the input is not required. |
   * | New product material production | Select generate to generate the target type based on product materials. Categories and attributes can be used to supplement facts. |
   * | Batch operation tool integration | The caller submits requests product by product. The workflow itself does not provide batch task or queue APIs. |
   * # Features
   * ## Core capabilities
   * This capability supports the production of different copy content types in domestic and cross-border e-commerce scenarios. It can produce titles, detailed descriptions, keywords, highlights, and descriptions that adapt to the content rules (length requirements and writing styles) of different platforms, and supports cross-language production.
   * | Content type | Platform |  |  |  |  |  | Target language |
   * | --- | --- | --- | --- | --- | --- | --- | --- |
   * |  | Amazon | Temu | TikTok | Shopify | Wildberries | Tmall |
   * | **title** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Covers languages in popular regions:
   * Chinese (zh), English (en), Russian (ru), German (de), French (fr), Korean (ko), Italian (it), Thai (th), Arabic (ar), Turkish (tr), Hebrew (he), Ukrainian (uk), Polish (pl), Japanese (ja), Dutch (nl), Portuguese (pt), Spanish (es), Malay (ms), Bulgarian (bg), Indonesian (id), and Vietnamese (vi). |
   * | **highlight** | ✓ |  |  |  |  | ✓ |
   * | **bulletPoint** | ✓ |  |  | ✓ |  |  |
   * | **keywords** | ✓ |  |  |  |  |  |
   * | **description** | ✓ | ✓ | ✓ | ✓ | ✓ |  |
   * Based on the content inputs provided by users, two production modes are supported:
   * | **Mode** | **Description** | **Recommended scenario** |
   * | --- | --- | --- |
   * | Generate | Reorganizes and writes copy based on product materials. | Only product parameters, attributes, or selling points are available, or other types of product materials are available, and new titles, keywords, product descriptions, and other copy need to be created. |
   * | Rewrite | Retains the original information and main structure, and optimizes the expression. | Existing product copy is available, and you want to adjust the wording, improve readability, or localize it with translation. |
   * # Examples
   * The following examples use the Amazon platform:
   * | **Content type** | **Source language** | **Source content** | **Target language** | **Generated result** | **Capability advantage** |
   * | --- | --- | --- | --- | --- | --- |
   * | bulletPoint | en | [VERSATILE RESIN FILTRATION SYSTEM\\] This silicone funnel and metal filter mesh combination is designed for all 3D printing enthusiasts. It is ideal for pouring used photosensitive resin back into standard bottles with a 15mm neck width ensuring a clean transfer every time. The durable metal filter effectively catches all solidified debris protecting your valuable resin from  and extending its usability. | de | [Vielseitiges Harz-Filtersystem\\] Silikontrichter und Metallfiltergitter für 3D-Druck; Einfüllen von gebrauchtem lichtempfindlichem Harz in Flaschen mit 15 mm Halsweite | Extracts core selling points, retains key information such as bottle neck size, and presents it in German bullet points for quick reading. |
   * | description | en | [VERSATILE RESIN FILTRATION SYSTEM\\] This silicone funnel and metal filter mesh combination is designed for all 3D printing enthusiasts. It is ideal for pouring used photosensitive resin back into standard bottles with a 15mm neck width ensuring a clean transfer every time. The durable metal filter effectively catches all solidified debris protecting your valuable resin from  and extending its usability. | de | [Vielseitiges Harz-Filtrationssystem\\] Diese Kombination aus Silikontrichter und Metallfilternetz richtet sich an alle, die mit 3D-Druck arbeiten. Der flexible Silikontrichter passt sicher auf Standardflaschen mit einer Halsweite von 15 mm und ermöglicht ein sauberes Zurückfüllen von gebrauchtem lichtempfindlichem Harz ohne Kleckern. Das feine Metallfilter fängt verfestigte Partikel zuverlässig ab, sodass Ihr Harz frei von Verunreinigungen bleibt und seine Nutzbarkeit erhalten wird. Die robuste Konstruktion des Filters unterstützt eine gleichmäßige Durchflussrate beim Umfüllen. | Organizes the product purpose, usage, and filtration features into a coherent German introduction for easy understanding. |
   * | highlight | en | [VERSATILE RESIN FILTRATION SYSTEM\\] This silicone funnel and metal filter mesh combination is designed for all 3D printing enthusiasts. It is ideal for pouring used photosensitive resin back into standard bottles with a 15mm neck width ensuring a clean transfer every time. The durable metal filter effectively catches all solidified debris protecting your valuable resin from  and extending its usability. | de | [Vielseitiges Harz-Filtrationssystem\\] Silikontrichter, Metallfilternetz, für 3D-Druck-Harz | Simplifies long materials, highlights core components and purposes, and makes it easy to grasp product features at a glance. |
   * | keywords | en | [VERSATILE RESIN FILTRATION SYSTEM\\] This silicone funnel and metal filter mesh combination is designed for all 3D printing enthusiasts. It is ideal for pouring used photosensitive resin back into standard bottles with a 15mm neck width ensuring a clean transfer every time. The durable metal filter effectively catches all solidified debris protecting your valuable resin from  and extending its usability. | de | Silikontrichter Metallfilter Harz Filterungssystem 3D Drucker Harz umfüllen Metall Sieb für Photosensitive Harze | Extracts German search terms related to materials, categories, and purposes to reduce manual sorting and translation. |
   * | title | en | [VERSATILE RESIN FILTRATION SYSTEM\\] This silicone funnel and metal filter mesh combination is designed for all 3D printing enthusiasts. It is ideal for pouring used photosensitive resin back into standard bottles with a 15mm neck width ensuring a clean transfer every time. The durable metal filter effectively catches all solidified debris protecting your valuable resin from  and extending its usability. | de | Silikontrichter mit Metallfilter für 3D-Druck-Harz | Extracts the product name, core components, and purpose to generate a concise and clear German title. |
   * 
   * @param request - GenerateProductContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateProductContentResponse
   */
  async generateProductContentWithOptions(request: $_model.GenerateProductContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateProductContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bulletPointCount)) {
      query["BulletPointCount"] = request.bulletPointCount;
    }

    if (!$dara.isNull(request.contentType)) {
      query["ContentType"] = request.contentType;
    }

    if (!$dara.isNull(request.enableTranslation)) {
      query["EnableTranslation"] = request.enableTranslation;
    }

    if (!$dara.isNull(request.maxLength)) {
      query["MaxLength"] = request.maxLength;
    }

    if (!$dara.isNull(request.minLength)) {
      query["MinLength"] = request.minLength;
    }

    if (!$dara.isNull(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.productAttributes)) {
      query["ProductAttributes"] = request.productAttributes;
    }

    if (!$dara.isNull(request.productCategory)) {
      query["ProductCategory"] = request.productCategory;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      query["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.sourceText)) {
      query["SourceText"] = request.sourceText;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      query["TargetLanguage"] = request.targetLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateProductContent",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateProductContentResponse>(await this.callApi(params, req, runtime), new $_model.GenerateProductContentResponse({}));
  }

  /**
   * Generates or rewrites e-commerce product copy, such as titles, short highlights, search keywords, bulleted selling points, and product descriptions, based on input product information or existing copy, and adapts the content type and length to the requirements of the target platform. Supports Chinese and English input materials and optional multilingual translation for scenarios such as domestic product listing, cross-border product distribution, and product copy localization. Uses synchronous invocation to process one copy type for a single product per request.
   * 
   * @remarks
   * # Product introduction
   * E-commerce product copy generation is an AI text service for e-commerce product content production. By inputting product materials or existing copy, you can generate or rewrite product titles, short highlights, search keywords, bullet points, and product descriptions, and adapt the content type and length to the target platform as needed.
   * It supports Chinese and English material inputs and optional multilingual translation, and applies to scenarios such as domestic product listing, cross-border distribution, and product copy localization. The API uses synchronous calls and processes one copy type for one product per request.
   * # Scenarios
   * | **Scenario** | **Description** |
   * | --- | --- |
   * | Same-platform localization | Select rewrite and translate as needed to retain the original facts and type structure. |
   * | Cross-platform content adaptation | Select the target platform to generate or rewrite content according to its configuration limits. The source platform of the input is not required. |
   * | New product material production | Select generate to generate the target type based on product materials. Categories and attributes can be used to supplement facts. |
   * | Batch operation tool integration | The caller submits requests product by product. The workflow itself does not provide batch task or queue APIs. |
   * # Features
   * ## Core capabilities
   * This capability supports the production of different copy content types in domestic and cross-border e-commerce scenarios. It can produce titles, detailed descriptions, keywords, highlights, and descriptions that adapt to the content rules (length requirements and writing styles) of different platforms, and supports cross-language production.
   * | Content type | Platform |  |  |  |  |  | Target language |
   * | --- | --- | --- | --- | --- | --- | --- | --- |
   * |  | Amazon | Temu | TikTok | Shopify | Wildberries | Tmall |
   * | **title** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Covers languages in popular regions:
   * Chinese (zh), English (en), Russian (ru), German (de), French (fr), Korean (ko), Italian (it), Thai (th), Arabic (ar), Turkish (tr), Hebrew (he), Ukrainian (uk), Polish (pl), Japanese (ja), Dutch (nl), Portuguese (pt), Spanish (es), Malay (ms), Bulgarian (bg), Indonesian (id), and Vietnamese (vi). |
   * | **highlight** | ✓ |  |  |  |  | ✓ |
   * | **bulletPoint** | ✓ |  |  | ✓ |  |  |
   * | **keywords** | ✓ |  |  |  |  |  |
   * | **description** | ✓ | ✓ | ✓ | ✓ | ✓ |  |
   * Based on the content inputs provided by users, two production modes are supported:
   * | **Mode** | **Description** | **Recommended scenario** |
   * | --- | --- | --- |
   * | Generate | Reorganizes and writes copy based on product materials. | Only product parameters, attributes, or selling points are available, or other types of product materials are available, and new titles, keywords, product descriptions, and other copy need to be created. |
   * | Rewrite | Retains the original information and main structure, and optimizes the expression. | Existing product copy is available, and you want to adjust the wording, improve readability, or localize it with translation. |
   * # Examples
   * The following examples use the Amazon platform:
   * | **Content type** | **Source language** | **Source content** | **Target language** | **Generated result** | **Capability advantage** |
   * | --- | --- | --- | --- | --- | --- |
   * | bulletPoint | en | [VERSATILE RESIN FILTRATION SYSTEM\\] This silicone funnel and metal filter mesh combination is designed for all 3D printing enthusiasts. It is ideal for pouring used photosensitive resin back into standard bottles with a 15mm neck width ensuring a clean transfer every time. The durable metal filter effectively catches all solidified debris protecting your valuable resin from  and extending its usability. | de | [Vielseitiges Harz-Filtersystem\\] Silikontrichter und Metallfiltergitter für 3D-Druck; Einfüllen von gebrauchtem lichtempfindlichem Harz in Flaschen mit 15 mm Halsweite | Extracts core selling points, retains key information such as bottle neck size, and presents it in German bullet points for quick reading. |
   * | description | en | [VERSATILE RESIN FILTRATION SYSTEM\\] This silicone funnel and metal filter mesh combination is designed for all 3D printing enthusiasts. It is ideal for pouring used photosensitive resin back into standard bottles with a 15mm neck width ensuring a clean transfer every time. The durable metal filter effectively catches all solidified debris protecting your valuable resin from  and extending its usability. | de | [Vielseitiges Harz-Filtrationssystem\\] Diese Kombination aus Silikontrichter und Metallfilternetz richtet sich an alle, die mit 3D-Druck arbeiten. Der flexible Silikontrichter passt sicher auf Standardflaschen mit einer Halsweite von 15 mm und ermöglicht ein sauberes Zurückfüllen von gebrauchtem lichtempfindlichem Harz ohne Kleckern. Das feine Metallfilter fängt verfestigte Partikel zuverlässig ab, sodass Ihr Harz frei von Verunreinigungen bleibt und seine Nutzbarkeit erhalten wird. Die robuste Konstruktion des Filters unterstützt eine gleichmäßige Durchflussrate beim Umfüllen. | Organizes the product purpose, usage, and filtration features into a coherent German introduction for easy understanding. |
   * | highlight | en | [VERSATILE RESIN FILTRATION SYSTEM\\] This silicone funnel and metal filter mesh combination is designed for all 3D printing enthusiasts. It is ideal for pouring used photosensitive resin back into standard bottles with a 15mm neck width ensuring a clean transfer every time. The durable metal filter effectively catches all solidified debris protecting your valuable resin from  and extending its usability. | de | [Vielseitiges Harz-Filtrationssystem\\] Silikontrichter, Metallfilternetz, für 3D-Druck-Harz | Simplifies long materials, highlights core components and purposes, and makes it easy to grasp product features at a glance. |
   * | keywords | en | [VERSATILE RESIN FILTRATION SYSTEM\\] This silicone funnel and metal filter mesh combination is designed for all 3D printing enthusiasts. It is ideal for pouring used photosensitive resin back into standard bottles with a 15mm neck width ensuring a clean transfer every time. The durable metal filter effectively catches all solidified debris protecting your valuable resin from  and extending its usability. | de | Silikontrichter Metallfilter Harz Filterungssystem 3D Drucker Harz umfüllen Metall Sieb für Photosensitive Harze | Extracts German search terms related to materials, categories, and purposes to reduce manual sorting and translation. |
   * | title | en | [VERSATILE RESIN FILTRATION SYSTEM\\] This silicone funnel and metal filter mesh combination is designed for all 3D printing enthusiasts. It is ideal for pouring used photosensitive resin back into standard bottles with a 15mm neck width ensuring a clean transfer every time. The durable metal filter effectively catches all solidified debris protecting your valuable resin from  and extending its usability. | de | Silikontrichter mit Metallfilter für 3D-Druck-Harz | Extracts the product name, core components, and purpose to generate a concise and clear German title. |
   * 
   * @param request - GenerateProductContentRequest
   * @returns GenerateProductContentResponse
   */
  async generateProductContent(request: $_model.GenerateProductContentRequest): Promise<$_model.GenerateProductContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateProductContentWithOptions(request, runtime);
  }

  /**
   * Intelligently crops images to specified sizes by automatically identifying the main subject area and precisely cropping them to various sizes to meet design requirements across different scenarios. (Synchronous)
   * 
   * @remarks
   * ## Product introduction
   * The image cropping service can resize input images to specified dimensions. It supports automatic identification of the main subject area and precisely crops images to various sizes to meet design requirements across different scenarios. (Synchronous)
   * ## Scenarios
   * - **Multi-platform content distribution**: Automatically generates content styles in various sizes to adapt to the different image size requirements of different platforms and scenarios.
   *     
   * - **Content delivery**: Automatically adjusts sizes for different ad slots on different platforms to highlight the main content, reduce blank space, and emphasize product features.
   * ## Features
   * * Automatically identifies the main subject area of an image for precise cropping.
   *     
   * * Supports custom output sizes for cropping to adapt to different platforms and devices.
   * ## Effect comparison
   * | **Original image** | **Cropped to 1000\\*1000** | **Cropped to 3000\\*2000** |
   * | --- | --- | --- |
   * | ![done-image-5e6abdf1-3c64-48db-9301-a5a9db1f8cb1.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/b356e8a7-cc18-41f7-8da5-dd25f48c6338.png) | ![a715a30a-b594-40db-9f7a-d620add9081c.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/969e0fb6-435c-47f9-aeb6-1624b5a43f3c.png) | ![1e6569f3-a494-4e7c-94c8-439748992deb.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/cd6bbde6-e923-4fd1-b252-e5f299377fb8.png) |
   * | ![done-image-0ff8edc4-5bd5-48ca-90ac-38e1701a4573.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/6c4d02ea-c3bc-4865-9655-afc8c5f5c2ef.png) | ![d026cfbc-207c-425b-b8c7-67cc7396c9c9.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/ac6b07f3-0dbf-48de-9fcc-f1450792f75f.png) | ![b9f62dd8-7379-45be-b130-eb534506e77a.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/a3486b31-4cc3-4f23-b326-41ab0780a84e.png) |
   * | ![done-image-8eade64e-c849-46f8-b2e3-29122e280e8c.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/a42cb77c-6f1c-4474-aeff-939f16d5f8dc.png) | ![5d88645b-91b3-4e46-9ba4-5a16189d3ff8.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/62a89676-a424-4d2a-a174-72ed4ae107ed.png) | ![2afdf6cb-44ae-41f3-8d85-7416d2c8fc3c.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/ea22ead8-0eb8-4224-8f1e-319f64173912.png) |
   * 
   * @param request - ImageCroppingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageCroppingResponse
   */
  async imageCroppingWithOptions(request: $_model.ImageCroppingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageCroppingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.targetHeight)) {
      query["TargetHeight"] = request.targetHeight;
    }

    if (!$dara.isNull(request.targetWidth)) {
      query["TargetWidth"] = request.targetWidth;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageCropping",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageCroppingResponse>(await this.callApi(params, req, runtime), new $_model.ImageCroppingResponse({}));
  }

  /**
   * Intelligently crops images to specified sizes by automatically identifying the main subject area and precisely cropping them to various sizes to meet design requirements across different scenarios. (Synchronous)
   * 
   * @remarks
   * ## Product introduction
   * The image cropping service can resize input images to specified dimensions. It supports automatic identification of the main subject area and precisely crops images to various sizes to meet design requirements across different scenarios. (Synchronous)
   * ## Scenarios
   * - **Multi-platform content distribution**: Automatically generates content styles in various sizes to adapt to the different image size requirements of different platforms and scenarios.
   *     
   * - **Content delivery**: Automatically adjusts sizes for different ad slots on different platforms to highlight the main content, reduce blank space, and emphasize product features.
   * ## Features
   * * Automatically identifies the main subject area of an image for precise cropping.
   *     
   * * Supports custom output sizes for cropping to adapt to different platforms and devices.
   * ## Effect comparison
   * | **Original image** | **Cropped to 1000\\*1000** | **Cropped to 3000\\*2000** |
   * | --- | --- | --- |
   * | ![done-image-5e6abdf1-3c64-48db-9301-a5a9db1f8cb1.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/b356e8a7-cc18-41f7-8da5-dd25f48c6338.png) | ![a715a30a-b594-40db-9f7a-d620add9081c.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/969e0fb6-435c-47f9-aeb6-1624b5a43f3c.png) | ![1e6569f3-a494-4e7c-94c8-439748992deb.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/cd6bbde6-e923-4fd1-b252-e5f299377fb8.png) |
   * | ![done-image-0ff8edc4-5bd5-48ca-90ac-38e1701a4573.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/6c4d02ea-c3bc-4865-9655-afc8c5f5c2ef.png) | ![d026cfbc-207c-425b-b8c7-67cc7396c9c9.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/ac6b07f3-0dbf-48de-9fcc-f1450792f75f.png) | ![b9f62dd8-7379-45be-b130-eb534506e77a.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/a3486b31-4cc3-4f23-b326-41ab0780a84e.png) |
   * | ![done-image-8eade64e-c849-46f8-b2e3-29122e280e8c.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/a42cb77c-6f1c-4474-aeff-939f16d5f8dc.png) | ![5d88645b-91b3-4e46-9ba4-5a16189d3ff8.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/62a89676-a424-4d2a-a174-72ed4ae107ed.png) | ![2afdf6cb-44ae-41f3-8d85-7416d2c8fc3c.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/eYVOL5jBbQ7QJlpz/img/ea22ead8-0eb8-4224-8f1e-319f64173912.png) |
   * 
   * @param request - ImageCroppingRequest
   * @returns ImageCroppingResponse
   */
  async imageCropping(request: $_model.ImageCroppingRequest): Promise<$_model.ImageCroppingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageCroppingWithOptions(request, runtime);
  }

  /**
   * Identifies the salient subject in an image, separates the subject from the background, and returns the subject image with the background removed. This feature also provides multiple background options and custom size options to optimize product display effects. (Synchronous)
   * 
   * @remarks
   * ## Product introduction
   * The intelligent image matting feature automatically identifies the salient subject in an image, separates the subject from the background, and returns the subject image with the background removed. It also provides multiple background options and custom size options to optimize product display effects. (Synchronous)
   * ## Scenarios
   * *   **Support secondary editing of materials**: After separating the image subject from the background, you can further edit the image.
   *     
   * *   **Improve material processing efficiency**: Quickly extract the subjects from various material images to facilitate background replacement, thereby improving the production efficiency of advertising images and marketing posters.
   * ## Features.
   * #### 1. One-click accurate subject identification
   * *   **Automatic AI identification**: Based on deep learning models, it intelligently distinguishes foreground subjects (such as portraits, products, and objects) from the background without manual outlining.
   *     
   * *   **Multi-scenario adaptation**: Supports accurate segmentation in complex scenarios (such as hair, transparent objects, and fur edges) with an accuracy rate of over 95%.
   * #### 2. Intelligent edge optimization
   * *   **Detail-level processing**: Performs automatic optimization on edge jaggies and semi-transparent areas (such as smoke and glass) to retain natural transition effects.
   * #### 3. Multi-format output and background operations
   * *   **Transparent background export**: Directly generates PNG images with transparent backgrounds and white backgrounds, adapting to e-commerce and design scenarios.
   *     
   * *   **Custom background color support**: Supports custom background colors.
   * ## Effect comparison
   * | **Original image (input)** | **Result image (output)** |
   * | --- | --- |
   * | ![Main image 3.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/62b39e16-5b30-469f-88cd-7f31ba790008.jpeg) | ![ae4cd8ce912c4d9fa171dc5217be576d_202605251928_0.5899999737739563.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/bfad041f-a8e0-4d6f-a2bf-999292ea9ebc.jpeg) |
   * | ![Main image 2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/b201b356-24b8-4f98-babc-c7fe918bdc37.jpeg) | ![52033655bd054737960a87518655d935_202605251926_5.959999978542328.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/8b266603-e80a-42dd-9d3d-6fa9f0948e52.jpeg) |
   * | ![Main image 6.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/d3c0d876-42a0-4294-8ce5-2a20df2deab9.jpeg) | ![abdecd31cc45450f83b33f9baf4499c6_202605251930_7.9700000286102295.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/5677f55e-4fe3-4978-a676-1ce71ad604b0.jpeg) |
   * 
   * @param request - ImageMattingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageMattingResponse
   */
  async imageMattingWithOptions(request: $_model.ImageMattingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageMattingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backGroundType)) {
      query["BackGroundType"] = request.backGroundType;
    }

    if (!$dara.isNull(request.bgColor)) {
      query["BgColor"] = request.bgColor;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.targetHeight)) {
      query["TargetHeight"] = request.targetHeight;
    }

    if (!$dara.isNull(request.targetWidth)) {
      query["TargetWidth"] = request.targetWidth;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageMatting",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageMattingResponse>(await this.callApi(params, req, runtime), new $_model.ImageMattingResponse({}));
  }

  /**
   * Identifies the salient subject in an image, separates the subject from the background, and returns the subject image with the background removed. This feature also provides multiple background options and custom size options to optimize product display effects. (Synchronous)
   * 
   * @remarks
   * ## Product introduction
   * The intelligent image matting feature automatically identifies the salient subject in an image, separates the subject from the background, and returns the subject image with the background removed. It also provides multiple background options and custom size options to optimize product display effects. (Synchronous)
   * ## Scenarios
   * *   **Support secondary editing of materials**: After separating the image subject from the background, you can further edit the image.
   *     
   * *   **Improve material processing efficiency**: Quickly extract the subjects from various material images to facilitate background replacement, thereby improving the production efficiency of advertising images and marketing posters.
   * ## Features.
   * #### 1. One-click accurate subject identification
   * *   **Automatic AI identification**: Based on deep learning models, it intelligently distinguishes foreground subjects (such as portraits, products, and objects) from the background without manual outlining.
   *     
   * *   **Multi-scenario adaptation**: Supports accurate segmentation in complex scenarios (such as hair, transparent objects, and fur edges) with an accuracy rate of over 95%.
   * #### 2. Intelligent edge optimization
   * *   **Detail-level processing**: Performs automatic optimization on edge jaggies and semi-transparent areas (such as smoke and glass) to retain natural transition effects.
   * #### 3. Multi-format output and background operations
   * *   **Transparent background export**: Directly generates PNG images with transparent backgrounds and white backgrounds, adapting to e-commerce and design scenarios.
   *     
   * *   **Custom background color support**: Supports custom background colors.
   * ## Effect comparison
   * | **Original image (input)** | **Result image (output)** |
   * | --- | --- |
   * | ![Main image 3.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/62b39e16-5b30-469f-88cd-7f31ba790008.jpeg) | ![ae4cd8ce912c4d9fa171dc5217be576d_202605251928_0.5899999737739563.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/bfad041f-a8e0-4d6f-a2bf-999292ea9ebc.jpeg) |
   * | ![Main image 2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/b201b356-24b8-4f98-babc-c7fe918bdc37.jpeg) | ![52033655bd054737960a87518655d935_202605251926_5.959999978542328.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/8b266603-e80a-42dd-9d3d-6fa9f0948e52.jpeg) |
   * | ![Main image 6.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/d3c0d876-42a0-4294-8ce5-2a20df2deab9.jpeg) | ![abdecd31cc45450f83b33f9baf4499c6_202605251930_7.9700000286102295.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/5677f55e-4fe3-4978-a676-1ce71ad604b0.jpeg) |
   * 
   * @param request - ImageMattingRequest
   * @returns ImageMattingResponse
   */
  async imageMatting(request: $_model.ImageMattingRequest): Promise<$_model.ImageMattingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageMattingWithOptions(request, runtime);
  }

  /**
   * Automatically identifies the salient subject in an image, separates the subject from the background, and returns the subject image with the background removed. This operation also provides multiple background options and custom size options to optimize product displays.
   * 
   * @remarks
   * # Scenarios
   * *   Supports secondary editing of materials: After separating the image subject from the background, you can further edit the image.
   *     
   * *   Improves material processing efficiency: Quickly extracts the subjects of various material images for background replacement, improving the production efficiency of advertising images and marketing posters.
   * # Features.
   * #### 1. One-click accurate subject recognition
   * *   **AI-based automatic recognition**: Based on deep learning models, it intelligently distinguishes foreground subjects (portraits, products, objects, etc.) from the background without manual outlining.
   *     
   * *   **Multi-scenario adaptation**: Supports accurate segmentation in complex scenarios (such as hair, transparent objects, and fur edges) with an accuracy rate of over 95%.
   * #### 2. Intelligent edge optimization
   * *   **Detail-level processing**: Performs automatic optimization on edge jaggies and semi-transparent areas (such as smoke and glass) to retain natural transition effects.
   * #### 3. Multi-format output and background operations
   * *   **Transparent background export**: Directly generates PNG images with transparent backgrounds and white backgrounds, adapting to e-commerce and design scenarios.
   *     
   * *   **Custom background color support**
   * # Effect comparison
   * | **Original image (input)** | **Result image (output)** |
   * | --- | --- |
   * | ![Main image 3.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/62b39e16-5b30-469f-88cd-7f31ba790008.jpeg) | ![ae4cd8ce912c4d9fa171dc5217be576d_202605251928_0.5899999737739563.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/bfad041f-a8e0-4d6f-a2bf-999292ea9ebc.jpeg) |
   * | ![Main image 2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/b201b356-24b8-4f98-babc-c7fe918bdc37.jpeg) | ![52033655bd054737960a87518655d935_202605251926_5.959999978542328.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/8b266603-e80a-42dd-9d3d-6fa9f0948e52.jpeg) |
   * | ![Main image 6.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/d3c0d876-42a0-4294-8ce5-2a20df2deab9.jpeg) | ![abdecd31cc45450f83b33f9baf4499c6_202605251930_7.9700000286102295.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/5677f55e-4fe3-4978-a676-1ce71ad604b0.jpeg) |
   * 
   * @param request - ImageMattingAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageMattingAsyncResponse
   */
  async imageMattingAsyncWithOptions(request: $_model.ImageMattingAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageMattingAsyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backGroundType)) {
      query["BackGroundType"] = request.backGroundType;
    }

    if (!$dara.isNull(request.bgColor)) {
      query["BgColor"] = request.bgColor;
    }

    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.targetHeight)) {
      query["TargetHeight"] = request.targetHeight;
    }

    if (!$dara.isNull(request.targetWidth)) {
      query["TargetWidth"] = request.targetWidth;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageMattingAsync",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageMattingAsyncResponse>(await this.callApi(params, req, runtime), new $_model.ImageMattingAsyncResponse({}));
  }

  /**
   * Automatically identifies the salient subject in an image, separates the subject from the background, and returns the subject image with the background removed. This operation also provides multiple background options and custom size options to optimize product displays.
   * 
   * @remarks
   * # Scenarios
   * *   Supports secondary editing of materials: After separating the image subject from the background, you can further edit the image.
   *     
   * *   Improves material processing efficiency: Quickly extracts the subjects of various material images for background replacement, improving the production efficiency of advertising images and marketing posters.
   * # Features.
   * #### 1. One-click accurate subject recognition
   * *   **AI-based automatic recognition**: Based on deep learning models, it intelligently distinguishes foreground subjects (portraits, products, objects, etc.) from the background without manual outlining.
   *     
   * *   **Multi-scenario adaptation**: Supports accurate segmentation in complex scenarios (such as hair, transparent objects, and fur edges) with an accuracy rate of over 95%.
   * #### 2. Intelligent edge optimization
   * *   **Detail-level processing**: Performs automatic optimization on edge jaggies and semi-transparent areas (such as smoke and glass) to retain natural transition effects.
   * #### 3. Multi-format output and background operations
   * *   **Transparent background export**: Directly generates PNG images with transparent backgrounds and white backgrounds, adapting to e-commerce and design scenarios.
   *     
   * *   **Custom background color support**
   * # Effect comparison
   * | **Original image (input)** | **Result image (output)** |
   * | --- | --- |
   * | ![Main image 3.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/62b39e16-5b30-469f-88cd-7f31ba790008.jpeg) | ![ae4cd8ce912c4d9fa171dc5217be576d_202605251928_0.5899999737739563.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/bfad041f-a8e0-4d6f-a2bf-999292ea9ebc.jpeg) |
   * | ![Main image 2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/b201b356-24b8-4f98-babc-c7fe918bdc37.jpeg) | ![52033655bd054737960a87518655d935_202605251926_5.959999978542328.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/8b266603-e80a-42dd-9d3d-6fa9f0948e52.jpeg) |
   * | ![Main image 6.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/d3c0d876-42a0-4294-8ce5-2a20df2deab9.jpeg) | ![abdecd31cc45450f83b33f9baf4499c6_202605251930_7.9700000286102295.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/5677f55e-4fe3-4978-a676-1ce71ad604b0.jpeg) |
   * 
   * @param request - ImageMattingAsyncRequest
   * @returns ImageMattingAsyncResponse
   */
  async imageMattingAsync(request: $_model.ImageMattingAsyncRequest): Promise<$_model.ImageMattingAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageMattingAsyncWithOptions(request, runtime);
  }

  /**
   * Identifies specific elements in e-commerce images.
   * 
   * @remarks
   * ## Product Introduction
   * The intelligent element recognition API is designed specifically for recognizing specific elements in e-commerce images. It deeply analyzes image details to help users quickly identify elements such as text, logos, watermarks, and text-containing color blocks in the main subject and background of an image, greatly improving the efficiency and accuracy of image filtering. (Synchronous)
   * ## Scenarios
   * **1. Intelligent image filtering and optimization:**
   * Merchants and platforms can use the intelligent element recognition API to filter images and automatically identify images containing specific elements such as watermarks and logos. After filtering, you can further call the intelligent elimination API to optimize these images, improve image quality, and shorten the product release cycle.
   * **2. Automated image processing and efficiency improvement:**
   * Through the intelligent element recognition API, merchants and platforms can automate the image processing workflow to automatically identify and mark image elements that need optimization. This workflow reduces manual intervention and improves image processing efficiency.
   * ## Features
   * **1. Definitions of image subject, image background, text, logo, watermark, and text-containing color block: For details, see the relevant examples in the elimination documentation (reserved text link).**
   * *   Image subject: The core product area in the image.
   *     
   * *   Image background: The rest of the image other than the product subject.
   *     
   * *   Text: Horizontal, vertical, or slanted English or Chinese text.
   *     
   * *   Logo: Logos or trademarks.
   *     
   * *   Watermark: Monochrome transparent text, logos, images, URLs, store names, etc.
   *     
   * *   Text-containing color block: Color blocks containing text outside the subject.
   *     
   * **2. The features of the intelligent element recognition API mainly include:**
   * *   Element recognition: Identifies whether elements such as text, logos, watermarks, and text-containing color blocks exist in the image subject and background.
   *     
   * *   Workflow collaboration: Used in combination with the intelligent elimination API. First, the intelligent element recognition API identifies the elements to be removed, and then the intelligent elimination API effectively removes them to ensure the accuracy and efficiency of image processing.
   * ## Technical advantages
   * *   Synchronous batch processing: As a synchronous API, the intelligent element recognition API can process a large number of images while maintaining fast response, adapting to business needs of different scales.
   *     
   * *   Flexibility: Users can select the types of elements to be recognized as needed, including elements in the subject and non-subject areas, such as watermarks, logos, and text, to meet personalized recognition needs.
   * ## Result comparison
   * | **Original image** | **Recognition result** |
   * | --- | --- |
   * | ![done-image-30091469-e1be-4d31-85de-18983a358a61.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/vBPlN5j4yM2KVOdG/img/bbd3dbca-9f91-4b57-a382-2701e90c0d46.png) | [Subject]
   * *   Watermark: false
   *     
   * *   Logo: false
   *     
   * *   Text: false
   *     
   * *   Text-containing color block: false
   *     
   * [Non-subject]
   * *   Watermark: false
   *     
   * *   Logo: true
   *     
   * *   Text: true
   *     
   * *   Text-containing color block: false |
   * | ![image-1781169602620.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/vBPlN5j4yM2KVOdG/img/6bcbd976-0de1-4b5e-855b-56e20a9c675c.png) | [Subject]
   * *   Watermark: false
   *     
   * *   Logo: false
   *     
   * *   Text: false
   *     
   * *   Text-containing color block: false
   *     
   * [Non-subject]
   * *   Watermark: true
   *     
   * *   Logo: false
   *     
   * *   Text: true
   *     
   * *   Text-containing color block: true |
   * 
   * @param tmpReq - ImageRecognitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageRecognitionResponse
   */
  async imageRecognitionWithOptions(tmpReq: $_model.ImageRecognitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageRecognitionResponse> {
    tmpReq.validate();
    let request = new $_model.ImageRecognitionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nonObjectDetectElements)) {
      request.nonObjectDetectElementsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nonObjectDetectElements, "NonObjectDetectElements", "json");
    }

    if (!$dara.isNull(tmpReq.objectDetectElements)) {
      request.objectDetectElementsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.objectDetectElements, "ObjectDetectElements", "json");
    }

    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.nonObjectDetectElementsShrink)) {
      query["NonObjectDetectElements"] = request.nonObjectDetectElementsShrink;
    }

    if (!$dara.isNull(request.objectDetectElementsShrink)) {
      query["ObjectDetectElements"] = request.objectDetectElementsShrink;
    }

    if (!$dara.isNull(request.returnBorderPixel)) {
      query["ReturnBorderPixel"] = request.returnBorderPixel;
    }

    if (!$dara.isNull(request.returnCharacter)) {
      query["ReturnCharacter"] = request.returnCharacter;
    }

    if (!$dara.isNull(request.returnCharacterProp)) {
      query["ReturnCharacterProp"] = request.returnCharacterProp;
    }

    if (!$dara.isNull(request.returnProductNum)) {
      query["ReturnProductNum"] = request.returnProductNum;
    }

    if (!$dara.isNull(request.returnProductProp)) {
      query["ReturnProductProp"] = request.returnProductProp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageRecognition",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageRecognitionResponse>(await this.callApi(params, req, runtime), new $_model.ImageRecognitionResponse({}));
  }

  /**
   * Identifies specific elements in e-commerce images.
   * 
   * @remarks
   * ## Product Introduction
   * The intelligent element recognition API is designed specifically for recognizing specific elements in e-commerce images. It deeply analyzes image details to help users quickly identify elements such as text, logos, watermarks, and text-containing color blocks in the main subject and background of an image, greatly improving the efficiency and accuracy of image filtering. (Synchronous)
   * ## Scenarios
   * **1. Intelligent image filtering and optimization:**
   * Merchants and platforms can use the intelligent element recognition API to filter images and automatically identify images containing specific elements such as watermarks and logos. After filtering, you can further call the intelligent elimination API to optimize these images, improve image quality, and shorten the product release cycle.
   * **2. Automated image processing and efficiency improvement:**
   * Through the intelligent element recognition API, merchants and platforms can automate the image processing workflow to automatically identify and mark image elements that need optimization. This workflow reduces manual intervention and improves image processing efficiency.
   * ## Features
   * **1. Definitions of image subject, image background, text, logo, watermark, and text-containing color block: For details, see the relevant examples in the elimination documentation (reserved text link).**
   * *   Image subject: The core product area in the image.
   *     
   * *   Image background: The rest of the image other than the product subject.
   *     
   * *   Text: Horizontal, vertical, or slanted English or Chinese text.
   *     
   * *   Logo: Logos or trademarks.
   *     
   * *   Watermark: Monochrome transparent text, logos, images, URLs, store names, etc.
   *     
   * *   Text-containing color block: Color blocks containing text outside the subject.
   *     
   * **2. The features of the intelligent element recognition API mainly include:**
   * *   Element recognition: Identifies whether elements such as text, logos, watermarks, and text-containing color blocks exist in the image subject and background.
   *     
   * *   Workflow collaboration: Used in combination with the intelligent elimination API. First, the intelligent element recognition API identifies the elements to be removed, and then the intelligent elimination API effectively removes them to ensure the accuracy and efficiency of image processing.
   * ## Technical advantages
   * *   Synchronous batch processing: As a synchronous API, the intelligent element recognition API can process a large number of images while maintaining fast response, adapting to business needs of different scales.
   *     
   * *   Flexibility: Users can select the types of elements to be recognized as needed, including elements in the subject and non-subject areas, such as watermarks, logos, and text, to meet personalized recognition needs.
   * ## Result comparison
   * | **Original image** | **Recognition result** |
   * | --- | --- |
   * | ![done-image-30091469-e1be-4d31-85de-18983a358a61.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/vBPlN5j4yM2KVOdG/img/bbd3dbca-9f91-4b57-a382-2701e90c0d46.png) | [Subject]
   * *   Watermark: false
   *     
   * *   Logo: false
   *     
   * *   Text: false
   *     
   * *   Text-containing color block: false
   *     
   * [Non-subject]
   * *   Watermark: false
   *     
   * *   Logo: true
   *     
   * *   Text: true
   *     
   * *   Text-containing color block: false |
   * | ![image-1781169602620.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/vBPlN5j4yM2KVOdG/img/6bcbd976-0de1-4b5e-855b-56e20a9c675c.png) | [Subject]
   * *   Watermark: false
   *     
   * *   Logo: false
   *     
   * *   Text: false
   *     
   * *   Text-containing color block: false
   *     
   * [Non-subject]
   * *   Watermark: true
   *     
   * *   Logo: false
   *     
   * *   Text: true
   *     
   * *   Text-containing color block: true |
   * 
   * @param request - ImageRecognitionRequest
   * @returns ImageRecognitionResponse
   */
  async imageRecognition(request: $_model.ImageRecognitionRequest): Promise<$_model.ImageRecognitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageRecognitionWithOptions(request, runtime);
  }

  /**
   * Identifies specific elements in e-commerce images. This API extracts image details to help users quickly identify text, logos, watermarks, and text-containing color blocks in the main subject and background, significantly improving the efficiency and accuracy of image filtering.
   * 
   * @remarks
   * # Scenarios
   * 1. Intelligent image filtering and optimization:
   * Merchants and platforms can use the intelligent element recognition API to filter images and automatically identify images containing specific elements such as watermarks and logos. After filtering, they can call the intelligent elimination API to optimize these images, improve image quality, and shorten the product release cycle.
   * 2. Automated image processing and efficiency improvement:
   * Through the intelligent element recognition API, merchants and platforms can automate the image processing workflow and automatically identify and mark image elements that need to be optimized. This workflow reduces manual intervention and improves the efficiency of image processing.
   * # Feature description
   * **1. Definitions of image subject, image background, text, logo, watermark, and text-containing color block: For details, see the relevant examples in the elimination documentation (reserved text link).**
   * *   Image subject: The core product area in the image.
   *     
   * *   Image background: The rest of the image other than the product subject.
   *     
   * *   Text: Horizontal, vertical, or slanted English or Chinese text.
   *     
   * *   Logo: A logo or trademark.
   *     
   * *   Watermark: Monochrome transparent text, logos, images, URLs, store names, etc.
   *     
   * *   Text-containing color block: A color block containing text outside the main subject.
   *     
   * **2. The intelligent element recognition API provides the following features:**
   * *   Element recognition: Identifies whether elements such as text, logos, watermarks, and text-containing color blocks exist in the image subject and background.
   *     
   * *   Workflow collaboration: Used in combination with the intelligent elimination API. The intelligent element recognition API first identifies the elements to be removed, and then the intelligent elimination API effectively removes them to ensure the accuracy and efficiency of image processing.
   *     
   * **3. Technical advantages:**
   * *   Synchronous batch processing: As a synchronous API, the intelligent element recognition API can process a large number of images while maintaining fast response, adapting to business needs of different scales.
   *     
   * *   Flexibility: Users can select the types of elements to be recognized as needed, including elements in the subject and non-subject areas, such as watermarks, logos, and text, to meet personalized recognition needs.
   * # Effect comparison
   * | **Original image** | **Recognition result** |
   * | --- | --- |
   * | ![done-image-30091469-e1be-4d31-85de-18983a358a61.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/vBPlN5j4yM2KVOdG/img/bbd3dbca-9f91-4b57-a382-2701e90c0d46.png) | [Subject]
   * *   Watermark: false
   *     
   * *   Logo: false
   *     
   * *   Text: false
   *     
   * *   Text-containing color block: false
   *     
   * [Non-subject]
   * *   Watermark: false
   *     
   * *   Logo: true
   *     
   * *   Text: true
   *     
   * *   Text-containing color block: false |
   * | ![image-1781169602620.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/vBPlN5j4yM2KVOdG/img/6bcbd976-0de1-4b5e-855b-56e20a9c675c.png) | [Subject]
   * *   Watermark: false
   *     
   * *   Logo: false
   *     
   * *   Text: false
   *     
   * *   Text-containing color block: false
   *     
   * [Non-subject]
   * *   Watermark: true
   *     
   * *   Logo: false
   *     
   * *   Text: true
   *     
   * *   Text-containing color block: true |
   * 
   * @param tmpReq - ImageRecognitionAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageRecognitionAsyncResponse
   */
  async imageRecognitionAsyncWithOptions(tmpReq: $_model.ImageRecognitionAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageRecognitionAsyncResponse> {
    tmpReq.validate();
    let request = new $_model.ImageRecognitionAsyncShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nonObjectDetectElements)) {
      request.nonObjectDetectElementsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nonObjectDetectElements, "NonObjectDetectElements", "json");
    }

    if (!$dara.isNull(tmpReq.objectDetectElements)) {
      request.objectDetectElementsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.objectDetectElements, "ObjectDetectElements", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.nonObjectDetectElementsShrink)) {
      query["NonObjectDetectElements"] = request.nonObjectDetectElementsShrink;
    }

    if (!$dara.isNull(request.objectDetectElementsShrink)) {
      query["ObjectDetectElements"] = request.objectDetectElementsShrink;
    }

    if (!$dara.isNull(request.returnBorderPixel)) {
      query["ReturnBorderPixel"] = request.returnBorderPixel;
    }

    if (!$dara.isNull(request.returnCharacter)) {
      query["ReturnCharacter"] = request.returnCharacter;
    }

    if (!$dara.isNull(request.returnCharacterProp)) {
      query["ReturnCharacterProp"] = request.returnCharacterProp;
    }

    if (!$dara.isNull(request.returnProductNum)) {
      query["ReturnProductNum"] = request.returnProductNum;
    }

    if (!$dara.isNull(request.returnProductProp)) {
      query["ReturnProductProp"] = request.returnProductProp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageRecognitionAsync",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageRecognitionAsyncResponse>(await this.callApi(params, req, runtime), new $_model.ImageRecognitionAsyncResponse({}));
  }

  /**
   * Identifies specific elements in e-commerce images. This API extracts image details to help users quickly identify text, logos, watermarks, and text-containing color blocks in the main subject and background, significantly improving the efficiency and accuracy of image filtering.
   * 
   * @remarks
   * # Scenarios
   * 1. Intelligent image filtering and optimization:
   * Merchants and platforms can use the intelligent element recognition API to filter images and automatically identify images containing specific elements such as watermarks and logos. After filtering, they can call the intelligent elimination API to optimize these images, improve image quality, and shorten the product release cycle.
   * 2. Automated image processing and efficiency improvement:
   * Through the intelligent element recognition API, merchants and platforms can automate the image processing workflow and automatically identify and mark image elements that need to be optimized. This workflow reduces manual intervention and improves the efficiency of image processing.
   * # Feature description
   * **1. Definitions of image subject, image background, text, logo, watermark, and text-containing color block: For details, see the relevant examples in the elimination documentation (reserved text link).**
   * *   Image subject: The core product area in the image.
   *     
   * *   Image background: The rest of the image other than the product subject.
   *     
   * *   Text: Horizontal, vertical, or slanted English or Chinese text.
   *     
   * *   Logo: A logo or trademark.
   *     
   * *   Watermark: Monochrome transparent text, logos, images, URLs, store names, etc.
   *     
   * *   Text-containing color block: A color block containing text outside the main subject.
   *     
   * **2. The intelligent element recognition API provides the following features:**
   * *   Element recognition: Identifies whether elements such as text, logos, watermarks, and text-containing color blocks exist in the image subject and background.
   *     
   * *   Workflow collaboration: Used in combination with the intelligent elimination API. The intelligent element recognition API first identifies the elements to be removed, and then the intelligent elimination API effectively removes them to ensure the accuracy and efficiency of image processing.
   *     
   * **3. Technical advantages:**
   * *   Synchronous batch processing: As a synchronous API, the intelligent element recognition API can process a large number of images while maintaining fast response, adapting to business needs of different scales.
   *     
   * *   Flexibility: Users can select the types of elements to be recognized as needed, including elements in the subject and non-subject areas, such as watermarks, logos, and text, to meet personalized recognition needs.
   * # Effect comparison
   * | **Original image** | **Recognition result** |
   * | --- | --- |
   * | ![done-image-30091469-e1be-4d31-85de-18983a358a61.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/vBPlN5j4yM2KVOdG/img/bbd3dbca-9f91-4b57-a382-2701e90c0d46.png) | [Subject]
   * *   Watermark: false
   *     
   * *   Logo: false
   *     
   * *   Text: false
   *     
   * *   Text-containing color block: false
   *     
   * [Non-subject]
   * *   Watermark: false
   *     
   * *   Logo: true
   *     
   * *   Text: true
   *     
   * *   Text-containing color block: false |
   * | ![image-1781169602620.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/vBPlN5j4yM2KVOdG/img/6bcbd976-0de1-4b5e-855b-56e20a9c675c.png) | [Subject]
   * *   Watermark: false
   *     
   * *   Logo: false
   *     
   * *   Text: false
   *     
   * *   Text-containing color block: false
   *     
   * [Non-subject]
   * *   Watermark: true
   *     
   * *   Logo: false
   *     
   * *   Text: true
   *     
   * *   Text-containing color block: true |
   * 
   * @param request - ImageRecognitionAsyncRequest
   * @returns ImageRecognitionAsyncResponse
   */
  async imageRecognitionAsync(request: $_model.ImageRecognitionAsyncRequest): Promise<$_model.ImageRecognitionAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageRecognitionAsyncWithOptions(request, runtime);
  }

  /**
   * Intelligently removes unwanted elements from e-commerce images. Tailored for e-commerce scenarios, it automatically identifies and removes text, specific names, transparent text blocks, and watermarks. You can specify objects to remove on demand to efficiently and accurately process large image batches and simplify image editing in synchronous or asynchronous mode.
   * 
   * @remarks
   * ## Product Introduction
   * The intelligent image object removal product is customized for e-commerce images. It automatically identifies and removes text, specific names, transparent text blocks, and intrusive text overlays from e-commerce images. You can specify objects to be removed as needed to efficiently and accurately process large batches of images and simplify image editing. Supports synchronous and asynchronous modes.
   * ## Scenarios
   * *   **Efficient processing of e-commerce images:**
   *     
   * Removes irrelevant visual elements to provide clearer and more focused product displays, enhancing the customer shopping experience.
   * *   **Product information synchronization across multiple platforms:**
   *     
   * When merchants list products on different e-commerce platforms, they can quickly remove specific text and intrusive text overlays to comply with the image specifications of different platforms.
   * ## Features
   * 1.  First, clarify the definitions of the image subject and the image background. In actual use, when specifying the objects to be removed, you can choose the removal scope to be the image subject or the image background area. Both API and editor integration methods are supported to meet different types of requirements.
   *     
   *     1.  Image subject: the core product area in the image.
   *         
   *     2.  Image background: the rest of the image other than the product subject.
   *         
   * 2.  Second, the objects to be removed support the following four types: text, specific names, transparent text blocks, and intrusive text overlays. You can refer to the following examples to clarify your usage requirements and perform targeted operations:
   * ## Result comparison
   * | **Original image** | **Image after removal** |
   * | --- | --- |
   * | ![Main image 1 - Leopard print large capacity millennium single shoulder crossbody canvas bag.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/AJdl65AyryVZyOke/img/4bd2c812-ed3c-45da-8a86-ebd29102f4b1.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/eff0eb1b-36df-431d-a010-3bb3b7348ff9.png) |
   * | ![Main image 1 - Handled ultra-short half-cover round-head French false nails.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/c44ac17b-3fa4-4a6f-b411-90f1062b183b.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/af779684-4aa5-49b0-8668-34ab8bd4bcc1.png) |
   * 
   * @param request - ImageRemovalProRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageRemovalProResponse
   */
  async imageRemovalProWithOptions(request: $_model.ImageRemovalProRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageRemovalProResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.async)) {
      query["Async"] = request.async;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageRemovalPro",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageRemovalProResponse>(await this.callApi(params, req, runtime), new $_model.ImageRemovalProResponse({}));
  }

  /**
   * Intelligently removes unwanted elements from e-commerce images. Tailored for e-commerce scenarios, it automatically identifies and removes text, specific names, transparent text blocks, and watermarks. You can specify objects to remove on demand to efficiently and accurately process large image batches and simplify image editing in synchronous or asynchronous mode.
   * 
   * @remarks
   * ## Product Introduction
   * The intelligent image object removal product is customized for e-commerce images. It automatically identifies and removes text, specific names, transparent text blocks, and intrusive text overlays from e-commerce images. You can specify objects to be removed as needed to efficiently and accurately process large batches of images and simplify image editing. Supports synchronous and asynchronous modes.
   * ## Scenarios
   * *   **Efficient processing of e-commerce images:**
   *     
   * Removes irrelevant visual elements to provide clearer and more focused product displays, enhancing the customer shopping experience.
   * *   **Product information synchronization across multiple platforms:**
   *     
   * When merchants list products on different e-commerce platforms, they can quickly remove specific text and intrusive text overlays to comply with the image specifications of different platforms.
   * ## Features
   * 1.  First, clarify the definitions of the image subject and the image background. In actual use, when specifying the objects to be removed, you can choose the removal scope to be the image subject or the image background area. Both API and editor integration methods are supported to meet different types of requirements.
   *     
   *     1.  Image subject: the core product area in the image.
   *         
   *     2.  Image background: the rest of the image other than the product subject.
   *         
   * 2.  Second, the objects to be removed support the following four types: text, specific names, transparent text blocks, and intrusive text overlays. You can refer to the following examples to clarify your usage requirements and perform targeted operations:
   * ## Result comparison
   * | **Original image** | **Image after removal** |
   * | --- | --- |
   * | ![Main image 1 - Leopard print large capacity millennium single shoulder crossbody canvas bag.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/AJdl65AyryVZyOke/img/4bd2c812-ed3c-45da-8a86-ebd29102f4b1.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/eff0eb1b-36df-431d-a010-3bb3b7348ff9.png) |
   * | ![Main image 1 - Handled ultra-short half-cover round-head French false nails.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/c44ac17b-3fa4-4a6f-b411-90f1062b183b.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/af779684-4aa5-49b0-8668-34ab8bd4bcc1.png) |
   * 
   * @param request - ImageRemovalProRequest
   * @returns ImageRemovalProResponse
   */
  async imageRemovalPro(request: $_model.ImageRemovalProRequest): Promise<$_model.ImageRemovalProResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageRemovalProWithOptions(request, runtime);
  }

  /**
   * Provides intelligent image erasure tailored for e-commerce images, automatically identifying and removing text, specific names, transparent text blocks, and unwanted overlays. It allows you to specify objects to remove as needed, enabling efficient and precise processing of large image batches and simplifying image editing workflows.
   * 
   * @remarks
   * ## Scenarios
   * *   **Efficient processing of e-commerce images:**
   *     Removes irrelevant visual elements to provide clearer and more focused product displays, enhancing the customer shopping experience.
   * *   **Synchronization of product information across multiple platforms:**
   *     When merchants list products on different e-commerce platforms, they can quickly remove specific text and watermarks to comply with the image specifications of different platforms.
   * ## Features
   * 1.  First, clarify the definitions of the image subject and the image background. When specifying the objects to remove, you can choose to remove them from the image subject or the image background. Both API and editor integration methods are supported.
   *     
   *     1.  Image subject: The core product area in the image.
   *         
   *     2.  Image background: The rest of the image excluding the product subject.
   *         
   * 2.  Second, the objects to be removed support the following four types: text, specific names, transparent text blocks, and watermarks. Refer to the following examples to clarify your requirements and perform targeted operations:
   * ## Before and after
   * | **Original image** | **Processed image** |
   * | --- | --- |
   * | ![Main image 1 - Leopard print large-capacity millennium single-shoulder crossbody canvas bag.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/AJdl65AyryVZyOke/img/4bd2c812-ed3c-45da-8a86-ebd29102f4b1.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/eff0eb1b-36df-431d-a010-3bb3b7348ff9.png) |
   * | ![Main image 1 - Ultra-short half-cover round-head French false nails with handle.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/c44ac17b-3fa4-4a6f-b411-90f1062b183b.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/af779684-4aa5-49b0-8668-34ab8bd4bcc1.png) |
   * 
   * @param request - ImageRemovalProAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageRemovalProAsyncResponse
   */
  async imageRemovalProAsyncWithOptions(request: $_model.ImageRemovalProAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageRemovalProAsyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageRemovalProAsync",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageRemovalProAsyncResponse>(await this.callApi(params, req, runtime), new $_model.ImageRemovalProAsyncResponse({}));
  }

  /**
   * Provides intelligent image erasure tailored for e-commerce images, automatically identifying and removing text, specific names, transparent text blocks, and unwanted overlays. It allows you to specify objects to remove as needed, enabling efficient and precise processing of large image batches and simplifying image editing workflows.
   * 
   * @remarks
   * ## Scenarios
   * *   **Efficient processing of e-commerce images:**
   *     Removes irrelevant visual elements to provide clearer and more focused product displays, enhancing the customer shopping experience.
   * *   **Synchronization of product information across multiple platforms:**
   *     When merchants list products on different e-commerce platforms, they can quickly remove specific text and watermarks to comply with the image specifications of different platforms.
   * ## Features
   * 1.  First, clarify the definitions of the image subject and the image background. When specifying the objects to remove, you can choose to remove them from the image subject or the image background. Both API and editor integration methods are supported.
   *     
   *     1.  Image subject: The core product area in the image.
   *         
   *     2.  Image background: The rest of the image excluding the product subject.
   *         
   * 2.  Second, the objects to be removed support the following four types: text, specific names, transparent text blocks, and watermarks. Refer to the following examples to clarify your requirements and perform targeted operations:
   * ## Before and after
   * | **Original image** | **Processed image** |
   * | --- | --- |
   * | ![Main image 1 - Leopard print large-capacity millennium single-shoulder crossbody canvas bag.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/AJdl65AyryVZyOke/img/4bd2c812-ed3c-45da-8a86-ebd29102f4b1.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/eff0eb1b-36df-431d-a010-3bb3b7348ff9.png) |
   * | ![Main image 1 - Ultra-short half-cover round-head French false nails with handle.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/c44ac17b-3fa4-4a6f-b411-90f1062b183b.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/af779684-4aa5-49b0-8668-34ab8bd4bcc1.png) |
   * 
   * @param request - ImageRemovalProAsyncRequest
   * @returns ImageRemovalProAsyncResponse
   */
  async imageRemovalProAsync(request: $_model.ImageRemovalProAsyncRequest): Promise<$_model.ImageRemovalProAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageRemovalProAsyncWithOptions(request, runtime);
  }

  /**
   * Intelligently removes unwanted elements from e-commerce images. This product automatically identifies and removes text, specific names, transparent text blocks, and image blemishes from e-commerce images. You can specify objects to remove as needed, enabling efficient and precise batch processing of large volumes of images and simplifying image editing workflows. (Synchronous)
   * 
   * @remarks
   * # Product Introduction
   * The intelligent image removal product is designed specifically for e-commerce images. It automatically identifies and removes text, specific names, transparent text blocks, and image blemishes from e-commerce images. You can specify objects to remove as needed, enabling efficient and precise batch processing of large volumes of images and simplifying image editing workflows. (Synchronous)
   * # Common scenarios
   * *   **Efficient e-commerce image processing:**
   *     
   * Remove irrelevant visual elements to provide clearer, more focused product displays and enhance the shopping experience.
   * *   **Multi-platform product information synchronization:**
   *     
   * When listing products across different e-commerce platforms, quickly remove specific text and image blemishes to comply with the image standards of each platform.
   * *   **Marketing material preparation:**
   *     
   * Easily remove existing promotional information and quickly update images with the latest campaign details.
   * > Note: Merchants or platforms can batch-remove impurities from images to optimize image quality. Use this product together with the Intelligent Recognition API (coming soon). First, filter out images that contain text, specific names, transparent text blocks, and image blemishes, and then use the Intelligent Removal API for batch removal. The Intelligent Recognition API focuses on "recognition", while the Intelligent Removal API focuses on "removal". By calling them in sequence, you can maximize removal effectiveness and reduce false removals and false identifications.
   * # Features
   * 1.  First, understand the definitions of image subject and image background. When specifying objects to remove, you can choose whether the removal scope is the image subject or the image background area. Both API and editor access methods are supported to meet different requirements.
   *     
   *     1.  Image subject: The core product area in the image.
   *         
   *     2.  Image background: The remaining part of the image other than the product subject.
   *         
   * 2.  The following three types of removal targets are supported:
   *     
   *     1.  Select by type only. You can select text, specific names, transparent text blocks, and image blemishes. Refer to the following examples to clarify your requirements and perform targeted operations.
   *         
   *     2.  (Upgrade) Specify images to remove. You can specify multiple images at a time.
   *         
   *     3.  (Upgrade) Specify text to remove. You can specify multiple text strings at a time.
   *         
   * Processing flow: User submits the original image URL → OCR + VLM model detects text or image positions → Determines the coordinates of areas to repair → AI repairs and generates a clean image → Returns the result image URL.
   * # 4. Effect comparison
   * | **Removable objects in images** | **Original image** | **Image after removal** |
   * | --- | --- | --- |
   * | Text | *   Involves the image subject area
   *     
   *     ![done-image-4a2a96c2-9ac6-4b35-b76b-a6eac303740f (1).png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/d72a7982-e761-4b45-af1e-f8f90b3f1fc3.png)
   *     
   * *   Does not involve the image subject area
   *     
   * ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/47428227-7523-432e-89ce-eba263e5ebda.png) | *   Involves the image subject area
   *     
   * ![359ddfcf-a2b1-4e59-ae54-5e76705d0adf.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/d69e38e4-5657-471d-aff6-1e6a4c269455.png)
   * *   Does not involve the image subject area
   *     
   * ![c35611f8-dab4-4df2-8942-36d7375ed55f.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/365024b4-4863-46d4-9013-bdd9408ea6b9.png) |
   * | Specific names | *   Involves the image subject area
   *     
   *     ![done-image-aca80515-aca6-4f4e-9429-47c5dd6b811f.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/ac35f8bc-d527-49de-8fba-cdeb71e3b058.png)
   *     
   * *   Does not involve the image subject area
   *     
   * ![done-image-29a89f03-964a-455e-968c-7c8d5282ebbb.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/2db445c8-6bdd-424e-b6a7-2ddb46e6786d.png) | *   Involves the image subject area
   *     
   * ![fd2db0ab-1b89-4085-b91d-99f40a1aea77.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/36ace8aa-3b3b-4b1c-81e6-b691104262f0.png)
   * *   Does not involve the image subject area
   *     
   * ![8726b148-ab74-4409-a6c1-4c50fcac3887.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/a7653a0c-d14e-4f97-9c2f-83327b43203f.png) |
   * | Transparent text blocks | *   Involves the image subject area
   *     
   *     ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/0f6068f0-168a-47bd-9fcd-c38b9e520506.png)
   *     
   * *   Does not involve the image subject area
   *     
   * ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/c9ac2a4c-0aa3-40ee-8855-62a262364dbe.png) | *   Involves the image subject area
   *     
   * ![8e84a5d6-da8c-4e3e-a705-71a66d0c78a2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/06ac537f-875a-48e2-8934-a84a79dfd8ff.jpeg)
   * *   Does not involve the image subject area
   *     
   * ![b05173e7-2ae5-494e-99d2-7111fc966fd5.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/05759aef-1720-41cd-8800-f7d0801e4d95.jpeg) |
   * | Image blemishes | *   Involves the image subject area
   *     
   *     ![2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/bf1442f8-a9fa-40d3-bcb0-7a8a41b49b5d.jpeg)
   *     
   * *   Does not involve the image subject area
   *     
   * ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/0d68612e-845d-466f-8a4a-b85facea095b.png) | *   Involves the image subject area
   *     
   * ![b6ef803f-743f-4e61-b901-d1f68167186f.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/621daadc-454f-41b4-9ac4-752d457034b6.jpeg)
   * *   Does not involve the image subject area
   *     
   * ![dee0c7cf-8b0d-4d6d-9677-d5f2e6099834.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/caa6994b-2f97-484d-a807-671a0dc75947.jpeg) |
   * | Specified image element removal (supports multiple image links) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/9297951f-53c1-4476-8c69-5c31df3fce21.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/ef3f35aa-609f-454c-bba0-dd1710c83945.png) |
   * | Specified text removal (supports multiple text strings) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/c784d8be-4b4d-4972-8b99-828c742b8f03.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/805423ca-bd0d-4d44-a18e-a7d7bfe88587.png) |
   * 
   * @param tmpReq - ImageRemoveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageRemoveResponse
   */
  async imageRemoveWithOptions(tmpReq: $_model.ImageRemoveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageRemoveResponse> {
    tmpReq.validate();
    let request = new $_model.ImageRemoveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nonObjectRemoveElements)) {
      request.nonObjectRemoveElementsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nonObjectRemoveElements, "NonObjectRemoveElements", "json");
    }

    if (!$dara.isNull(tmpReq.objectRemoveElements)) {
      request.objectRemoveElementsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.objectRemoveElements, "ObjectRemoveElements", "json");
    }

    if (!$dara.isNull(tmpReq.userImage)) {
      request.userImageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userImage, "UserImage", "json");
    }

    if (!$dara.isNull(tmpReq.userText)) {
      request.userTextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userText, "UserText", "json");
    }

    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.nonObjectRemoveElementsShrink)) {
      query["NonObjectRemoveElements"] = request.nonObjectRemoveElementsShrink;
    }

    if (!$dara.isNull(request.objectRemoveElementsShrink)) {
      query["ObjectRemoveElements"] = request.objectRemoveElementsShrink;
    }

    if (!$dara.isNull(request.position)) {
      query["Position"] = request.position;
    }

    if (!$dara.isNull(request.userImageShrink)) {
      query["UserImage"] = request.userImageShrink;
    }

    if (!$dara.isNull(request.userTextShrink)) {
      query["UserText"] = request.userTextShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageRemove",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageRemoveResponse>(await this.callApi(params, req, runtime), new $_model.ImageRemoveResponse({}));
  }

  /**
   * Intelligently removes unwanted elements from e-commerce images. This product automatically identifies and removes text, specific names, transparent text blocks, and image blemishes from e-commerce images. You can specify objects to remove as needed, enabling efficient and precise batch processing of large volumes of images and simplifying image editing workflows. (Synchronous)
   * 
   * @remarks
   * # Product Introduction
   * The intelligent image removal product is designed specifically for e-commerce images. It automatically identifies and removes text, specific names, transparent text blocks, and image blemishes from e-commerce images. You can specify objects to remove as needed, enabling efficient and precise batch processing of large volumes of images and simplifying image editing workflows. (Synchronous)
   * # Common scenarios
   * *   **Efficient e-commerce image processing:**
   *     
   * Remove irrelevant visual elements to provide clearer, more focused product displays and enhance the shopping experience.
   * *   **Multi-platform product information synchronization:**
   *     
   * When listing products across different e-commerce platforms, quickly remove specific text and image blemishes to comply with the image standards of each platform.
   * *   **Marketing material preparation:**
   *     
   * Easily remove existing promotional information and quickly update images with the latest campaign details.
   * > Note: Merchants or platforms can batch-remove impurities from images to optimize image quality. Use this product together with the Intelligent Recognition API (coming soon). First, filter out images that contain text, specific names, transparent text blocks, and image blemishes, and then use the Intelligent Removal API for batch removal. The Intelligent Recognition API focuses on "recognition", while the Intelligent Removal API focuses on "removal". By calling them in sequence, you can maximize removal effectiveness and reduce false removals and false identifications.
   * # Features
   * 1.  First, understand the definitions of image subject and image background. When specifying objects to remove, you can choose whether the removal scope is the image subject or the image background area. Both API and editor access methods are supported to meet different requirements.
   *     
   *     1.  Image subject: The core product area in the image.
   *         
   *     2.  Image background: The remaining part of the image other than the product subject.
   *         
   * 2.  The following three types of removal targets are supported:
   *     
   *     1.  Select by type only. You can select text, specific names, transparent text blocks, and image blemishes. Refer to the following examples to clarify your requirements and perform targeted operations.
   *         
   *     2.  (Upgrade) Specify images to remove. You can specify multiple images at a time.
   *         
   *     3.  (Upgrade) Specify text to remove. You can specify multiple text strings at a time.
   *         
   * Processing flow: User submits the original image URL → OCR + VLM model detects text or image positions → Determines the coordinates of areas to repair → AI repairs and generates a clean image → Returns the result image URL.
   * # 4. Effect comparison
   * | **Removable objects in images** | **Original image** | **Image after removal** |
   * | --- | --- | --- |
   * | Text | *   Involves the image subject area
   *     
   *     ![done-image-4a2a96c2-9ac6-4b35-b76b-a6eac303740f (1).png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/d72a7982-e761-4b45-af1e-f8f90b3f1fc3.png)
   *     
   * *   Does not involve the image subject area
   *     
   * ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/47428227-7523-432e-89ce-eba263e5ebda.png) | *   Involves the image subject area
   *     
   * ![359ddfcf-a2b1-4e59-ae54-5e76705d0adf.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/d69e38e4-5657-471d-aff6-1e6a4c269455.png)
   * *   Does not involve the image subject area
   *     
   * ![c35611f8-dab4-4df2-8942-36d7375ed55f.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/365024b4-4863-46d4-9013-bdd9408ea6b9.png) |
   * | Specific names | *   Involves the image subject area
   *     
   *     ![done-image-aca80515-aca6-4f4e-9429-47c5dd6b811f.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/ac35f8bc-d527-49de-8fba-cdeb71e3b058.png)
   *     
   * *   Does not involve the image subject area
   *     
   * ![done-image-29a89f03-964a-455e-968c-7c8d5282ebbb.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/2db445c8-6bdd-424e-b6a7-2ddb46e6786d.png) | *   Involves the image subject area
   *     
   * ![fd2db0ab-1b89-4085-b91d-99f40a1aea77.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/36ace8aa-3b3b-4b1c-81e6-b691104262f0.png)
   * *   Does not involve the image subject area
   *     
   * ![8726b148-ab74-4409-a6c1-4c50fcac3887.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/a7653a0c-d14e-4f97-9c2f-83327b43203f.png) |
   * | Transparent text blocks | *   Involves the image subject area
   *     
   *     ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/0f6068f0-168a-47bd-9fcd-c38b9e520506.png)
   *     
   * *   Does not involve the image subject area
   *     
   * ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/c9ac2a4c-0aa3-40ee-8855-62a262364dbe.png) | *   Involves the image subject area
   *     
   * ![8e84a5d6-da8c-4e3e-a705-71a66d0c78a2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/06ac537f-875a-48e2-8934-a84a79dfd8ff.jpeg)
   * *   Does not involve the image subject area
   *     
   * ![b05173e7-2ae5-494e-99d2-7111fc966fd5.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/05759aef-1720-41cd-8800-f7d0801e4d95.jpeg) |
   * | Image blemishes | *   Involves the image subject area
   *     
   *     ![2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/bf1442f8-a9fa-40d3-bcb0-7a8a41b49b5d.jpeg)
   *     
   * *   Does not involve the image subject area
   *     
   * ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/0d68612e-845d-466f-8a4a-b85facea095b.png) | *   Involves the image subject area
   *     
   * ![b6ef803f-743f-4e61-b901-d1f68167186f.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/621daadc-454f-41b4-9ac4-752d457034b6.jpeg)
   * *   Does not involve the image subject area
   *     
   * ![dee0c7cf-8b0d-4d6d-9677-d5f2e6099834.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/caa6994b-2f97-484d-a807-671a0dc75947.jpeg) |
   * | Specified image element removal (supports multiple image links) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/9297951f-53c1-4476-8c69-5c31df3fce21.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/ef3f35aa-609f-454c-bba0-dd1710c83945.png) |
   * | Specified text removal (supports multiple text strings) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/c784d8be-4b4d-4972-8b99-828c742b8f03.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/805423ca-bd0d-4d44-a18e-a7d7bfe88587.png) |
   * 
   * @param request - ImageRemoveRequest
   * @returns ImageRemoveResponse
   */
  async imageRemove(request: $_model.ImageRemoveRequest): Promise<$_model.ImageRemoveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageRemoveWithOptions(request, runtime);
  }

  /**
   * Provides intelligent object removal tailored for e-commerce images. It automatically identifies and removes text, specific names, transparent text blocks, and watermarks. You can also specify objects for removal as needed, enabling efficient and accurate processing of large image batches and simplifying image editing workflows.
   * 
   * @remarks
   * ## Scenarios
   * *   **Efficient processing of e-commerce images:**  
   * Removes irrelevant visual elements to provide clearer and more focused product displays, enhancing the customer shopping experience.
   * *   **Multi-platform product information synchronization:**  
   * When merchants list products on different e-commerce platforms, they can quickly remove specific text and watermarks to comply with the image specifications of different platforms.
   * *   **Marketing material preparation:**  
   * Merchants can easily remove original promotional information and quickly update it with the latest campaign information.
   * > Note: Merchants or platforms can remove impurities from images in batches to optimize image quality. Use this API in combination with the Intelligent Recognition API (coming soon) to first filter images containing text, specific names, transparent text blocks, and watermarks, and then use the Intelligent Erasure API for batch removal. The Intelligent Recognition API focuses on recognition, while the Intelligent Erasure API focuses on erasure. Calling them in sequence maximizes the erasure effect and reduces false removals and false recognitions.
   * ## Features
   * 1.  First, clarify the definitions of the image subject and the image background. In actual use, when specifying the objects to remove, you can choose whether the removal scope is the image subject or the image background. Both API and editor integration methods are supported to meet different needs.
   *     
   *     1.  Image subject: the core product area in the image.
   *         
   *     2.  Image background: the rest of the image other than the product subject.
   *         
   * 2.  Second, the following three types of objects can be removed:
   *     
   *     1.  Select by type: You can select text, specific names, transparent text blocks, and watermarks. Refer to the following examples to clarify your requirements and perform targeted operations.
   *         
   *     2.  (Upgraded) Specify images to remove: You can specify multiple images at a time.
   *         
   *     3.  (Upgraded) Specify text to remove: You can specify multiple text strings at a time.
   *         
   * Processing flow: Pass the original image URL -> The OCR and VLM models detect text or image positions -> Determine the coordinates of the area to be inpainted -> AI inpainting generates a clean image -> Return the result image URL.
   * ## Effect comparison
   * | **Objects that can be removed** | **Original image** | **Processed image** |
   * | --- | --- | --- |
   * | Text | *   Involves the image subject area
   *     
   *     ![done-image-4a2a96c2-9ac6-4b35-b76b-a6eac303740f (1).png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/d72a7982-e761-4b45-af1e-f8f90b3f1fc3.png)
   *     
   * *   Does not involve the image subject area
   *     
   * ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/47428227-7523-432e-89ce-eba263e5ebda.png) | *   Involves the image subject area
   *     
   * ![359ddfcf-a2b1-4e59-ae54-5e76705d0adf.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/d69e38e4-5657-471d-aff6-1e6a4c269455.png)
   * *   Does not involve the image subject area
   *     
   * ![c35611f8-dab4-4df2-8942-36d7375ed55f.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/365024b4-4863-46d4-9013-bdd9408ea6b9.png) |
   * | Specific names | *   Involves the image subject area
   *     
   *     ![done-image-aca80515-aca6-4f4e-9429-47c5dd6b811f.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/ac35f8bc-d527-49de-8fba-cdeb71e3b058.png)
   *     
   * *   Does not involve the image subject area
   *     
   * ![done-image-29a89f03-964a-455e-968c-7c8d5282ebbb.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/2db445c8-6bdd-424e-b6a7-2ddb46e6786d.png) | *   Involves the image subject area
   *     
   * ![fd2db0ab-1b89-4085-b91d-99f40a1aea77.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/36ace8aa-3b3b-4b1c-81e6-b691104262f0.png)
   * *   Does not involve the image subject area
   *     
   * ![8726b148-ab74-4409-a6c1-4c50fcac3887.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/a7653a0c-d14e-4f97-9c2f-83327b43203f.png) |
   * | Transparent text blocks | *   Involves the image subject area
   *     
   *     ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/0f6068f0-168a-47bd-9fcd-c38b9e520506.png)
   *     
   * *   Does not involve the image subject area
   *     
   * ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/c9ac2a4c-0aa3-40ee-8855-62a262364dbe.png) | *   Involves the image subject area
   *     
   * ![8e84a5d6-da8c-4e3e-a705-71a66d0c78a2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/06ac537f-875a-48e2-8934-a84a79dfd8ff.jpeg)
   * *   Does not involve the image subject area
   *     
   * ![b05173e7-2ae5-494e-99d2-7111fc966fd5.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/05759aef-1720-41cd-8800-f7d0801e4d95.jpeg) |
   * | Watermarks | *   Involves the image subject area
   *     
   *     ![2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/bf1442f8-a9fa-40d3-bcb0-7a8a41b49b5d.jpeg)
   *     
   * *   Does not involve the image subject area
   *     
   * ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/0d68612e-845d-466f-8a4a-b85facea095b.png) | *   Involves the image subject area
   *     
   * ![b6ef803f-743f-4e61-b901-d1f68167186f.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/621daadc-454f-41b4-9ac4-752d457034b6.jpeg)
   * *   Does not involve the image subject area
   *     
   * ![dee0c7cf-8b0d-4d6d-9677-d5f2e6099834.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/caa6994b-2f97-484d-a807-671a0dc75947.jpeg) |
   * | Specified image element removal (supports multiple image URLs) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/9297951f-53c1-4476-8c69-5c31df3fce21.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/ef3f35aa-609f-454c-bba0-dd1710c83945.png) |
   * | Specified text removal (supports multiple text strings) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/c784d8be-4b4d-4972-8b99-828c742b8f03.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/805423ca-bd0d-4d44-a18e-a7d7bfe88587.png) |
   * 
   * @param tmpReq - ImageRemoveAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageRemoveAsyncResponse
   */
  async imageRemoveAsyncWithOptions(tmpReq: $_model.ImageRemoveAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageRemoveAsyncResponse> {
    tmpReq.validate();
    let request = new $_model.ImageRemoveAsyncShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nonObjectRemoveElements)) {
      request.nonObjectRemoveElementsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nonObjectRemoveElements, "NonObjectRemoveElements", "json");
    }

    if (!$dara.isNull(tmpReq.objectRemoveElements)) {
      request.objectRemoveElementsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.objectRemoveElements, "ObjectRemoveElements", "json");
    }

    if (!$dara.isNull(tmpReq.userImage)) {
      request.userImageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userImage, "UserImage", "json");
    }

    if (!$dara.isNull(tmpReq.userText)) {
      request.userTextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userText, "UserText", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.nonObjectRemoveElementsShrink)) {
      query["NonObjectRemoveElements"] = request.nonObjectRemoveElementsShrink;
    }

    if (!$dara.isNull(request.objectRemoveElementsShrink)) {
      query["ObjectRemoveElements"] = request.objectRemoveElementsShrink;
    }

    if (!$dara.isNull(request.position)) {
      query["Position"] = request.position;
    }

    if (!$dara.isNull(request.userImageShrink)) {
      query["UserImage"] = request.userImageShrink;
    }

    if (!$dara.isNull(request.userTextShrink)) {
      query["UserText"] = request.userTextShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageRemoveAsync",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageRemoveAsyncResponse>(await this.callApi(params, req, runtime), new $_model.ImageRemoveAsyncResponse({}));
  }

  /**
   * Provides intelligent object removal tailored for e-commerce images. It automatically identifies and removes text, specific names, transparent text blocks, and watermarks. You can also specify objects for removal as needed, enabling efficient and accurate processing of large image batches and simplifying image editing workflows.
   * 
   * @remarks
   * ## Scenarios
   * *   **Efficient processing of e-commerce images:**  
   * Removes irrelevant visual elements to provide clearer and more focused product displays, enhancing the customer shopping experience.
   * *   **Multi-platform product information synchronization:**  
   * When merchants list products on different e-commerce platforms, they can quickly remove specific text and watermarks to comply with the image specifications of different platforms.
   * *   **Marketing material preparation:**  
   * Merchants can easily remove original promotional information and quickly update it with the latest campaign information.
   * > Note: Merchants or platforms can remove impurities from images in batches to optimize image quality. Use this API in combination with the Intelligent Recognition API (coming soon) to first filter images containing text, specific names, transparent text blocks, and watermarks, and then use the Intelligent Erasure API for batch removal. The Intelligent Recognition API focuses on recognition, while the Intelligent Erasure API focuses on erasure. Calling them in sequence maximizes the erasure effect and reduces false removals and false recognitions.
   * ## Features
   * 1.  First, clarify the definitions of the image subject and the image background. In actual use, when specifying the objects to remove, you can choose whether the removal scope is the image subject or the image background. Both API and editor integration methods are supported to meet different needs.
   *     
   *     1.  Image subject: the core product area in the image.
   *         
   *     2.  Image background: the rest of the image other than the product subject.
   *         
   * 2.  Second, the following three types of objects can be removed:
   *     
   *     1.  Select by type: You can select text, specific names, transparent text blocks, and watermarks. Refer to the following examples to clarify your requirements and perform targeted operations.
   *         
   *     2.  (Upgraded) Specify images to remove: You can specify multiple images at a time.
   *         
   *     3.  (Upgraded) Specify text to remove: You can specify multiple text strings at a time.
   *         
   * Processing flow: Pass the original image URL -> The OCR and VLM models detect text or image positions -> Determine the coordinates of the area to be inpainted -> AI inpainting generates a clean image -> Return the result image URL.
   * ## Effect comparison
   * | **Objects that can be removed** | **Original image** | **Processed image** |
   * | --- | --- | --- |
   * | Text | *   Involves the image subject area
   *     
   *     ![done-image-4a2a96c2-9ac6-4b35-b76b-a6eac303740f (1).png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/d72a7982-e761-4b45-af1e-f8f90b3f1fc3.png)
   *     
   * *   Does not involve the image subject area
   *     
   * ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/47428227-7523-432e-89ce-eba263e5ebda.png) | *   Involves the image subject area
   *     
   * ![359ddfcf-a2b1-4e59-ae54-5e76705d0adf.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/d69e38e4-5657-471d-aff6-1e6a4c269455.png)
   * *   Does not involve the image subject area
   *     
   * ![c35611f8-dab4-4df2-8942-36d7375ed55f.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/365024b4-4863-46d4-9013-bdd9408ea6b9.png) |
   * | Specific names | *   Involves the image subject area
   *     
   *     ![done-image-aca80515-aca6-4f4e-9429-47c5dd6b811f.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/ac35f8bc-d527-49de-8fba-cdeb71e3b058.png)
   *     
   * *   Does not involve the image subject area
   *     
   * ![done-image-29a89f03-964a-455e-968c-7c8d5282ebbb.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/2db445c8-6bdd-424e-b6a7-2ddb46e6786d.png) | *   Involves the image subject area
   *     
   * ![fd2db0ab-1b89-4085-b91d-99f40a1aea77.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/36ace8aa-3b3b-4b1c-81e6-b691104262f0.png)
   * *   Does not involve the image subject area
   *     
   * ![8726b148-ab74-4409-a6c1-4c50fcac3887.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/a7653a0c-d14e-4f97-9c2f-83327b43203f.png) |
   * | Transparent text blocks | *   Involves the image subject area
   *     
   *     ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/0f6068f0-168a-47bd-9fcd-c38b9e520506.png)
   *     
   * *   Does not involve the image subject area
   *     
   * ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/c9ac2a4c-0aa3-40ee-8855-62a262364dbe.png) | *   Involves the image subject area
   *     
   * ![8e84a5d6-da8c-4e3e-a705-71a66d0c78a2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/06ac537f-875a-48e2-8934-a84a79dfd8ff.jpeg)
   * *   Does not involve the image subject area
   *     
   * ![b05173e7-2ae5-494e-99d2-7111fc966fd5.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/05759aef-1720-41cd-8800-f7d0801e4d95.jpeg) |
   * | Watermarks | *   Involves the image subject area
   *     
   *     ![2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/bf1442f8-a9fa-40d3-bcb0-7a8a41b49b5d.jpeg)
   *     
   * *   Does not involve the image subject area
   *     
   * ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/0d68612e-845d-466f-8a4a-b85facea095b.png) | *   Involves the image subject area
   *     
   * ![b6ef803f-743f-4e61-b901-d1f68167186f.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/621daadc-454f-41b4-9ac4-752d457034b6.jpeg)
   * *   Does not involve the image subject area
   *     
   * ![dee0c7cf-8b0d-4d6d-9677-d5f2e6099834.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/caa6994b-2f97-484d-a807-671a0dc75947.jpeg) |
   * | Specified image element removal (supports multiple image URLs) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/9297951f-53c1-4476-8c69-5c31df3fce21.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/ef3f35aa-609f-454c-bba0-dd1710c83945.png) |
   * | Specified text removal (supports multiple text strings) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/c784d8be-4b4d-4972-8b99-828c742b8f03.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/805423ca-bd0d-4d44-a18e-a7d7bfe88587.png) |
   * 
   * @param request - ImageRemoveAsyncRequest
   * @returns ImageRemoveAsyncResponse
   */
  async imageRemoveAsync(request: $_model.ImageRemoveAsyncRequest): Promise<$_model.ImageRemoveAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageRemoveAsyncWithOptions(request, runtime);
  }

  /**
   * Translates e-commerce images by using the PLUS edition of the image translation service. Built on the Mixture of Experts (MOE) architecture, this edition delivers higher translation accuracy for multiple minor languages than the Lite and Pro editions. It is recommended for the following 12 language pairs, with more to be added in the future.
   * 
   * @remarks
   * ## Product introduction
   * The PLUS edition of the image translation service is designed specifically for e-commerce images. Built on the Mixture of Experts (MOE) architecture, it delivers higher translation accuracy for multiple minor languages than the Lite and Pro editions. We recommend that you use this edition for the following 12 language pairs. More language pairs will be supported in the future.
   * Supported language pairs:
   * | **No.** | **Source language** |  | **Target language** |  |
   * | --- | --- | --- | --- | --- |
   * |  | Language code | Language name | Language code | Language name |
   * | 1 | en | English | ar | Arabic |
   * | 2 | en | English | id | Indonesian |
   * | 3 | en | English | th | Thai |
   * | 4 | en | English | ko | Korean |
   * | 5 | en | English | ja | Japanese |
   * | 6 | en | English | vi | Vietnamese |
   * | 7 | en | English | ru | Russian |
   * | 8 | en | English | tl | Filipino |
   * | 9 | en | English | es | Spanish |
   * | 10 | en | English | fr | French |
   * | 11 | en | English | de | German |
   * | 12 | en | English | pl | Polish |
   * ## Scenarios
   * Main images and detail images for cross-border e-commerce.
   * ## Features
   * *   **Product subject information protection**: Allows you to specify whether to translate the text on the product subject. This helps protect the subject information, such as the embedded product name, from being translated.
   *     
   * *   **Brand name protection**: Allows you to specify whether to translate the brand name in the image. This helps protect the brand name from being translated.
   *     
   * *   **Translation intervention**: Allows you to customize translation results, including keeping the original text (ABC-ABC), specifying a translation (ABC-DEF), or leaving it untranslated (ABC-null). This is commonly used for scenarios such as brand word protection. You can implement this by passing the corresponding intervention glossary ID when calling the API operation to meet your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention words. If you need more, contact the platform for assistance.
   * 
   * @param request - ImageTranslationPlusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageTranslationPlusResponse
   */
  async imageTranslationPlusWithOptions(request: $_model.ImageTranslationPlusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageTranslationPlusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.glossary)) {
      body["Glossary"] = request.glossary;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.includingProductArea)) {
      body["IncludingProductArea"] = request.includingProductArea;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.translatingBrandInTheProduct)) {
      body["TranslatingBrandInTheProduct"] = request.translatingBrandInTheProduct;
    }

    if (!$dara.isNull(request.useImageEditor)) {
      body["UseImageEditor"] = request.useImageEditor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageTranslationPlus",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageTranslationPlusResponse>(await this.callApi(params, req, runtime), new $_model.ImageTranslationPlusResponse({}));
  }

  /**
   * Translates e-commerce images by using the PLUS edition of the image translation service. Built on the Mixture of Experts (MOE) architecture, this edition delivers higher translation accuracy for multiple minor languages than the Lite and Pro editions. It is recommended for the following 12 language pairs, with more to be added in the future.
   * 
   * @remarks
   * ## Product introduction
   * The PLUS edition of the image translation service is designed specifically for e-commerce images. Built on the Mixture of Experts (MOE) architecture, it delivers higher translation accuracy for multiple minor languages than the Lite and Pro editions. We recommend that you use this edition for the following 12 language pairs. More language pairs will be supported in the future.
   * Supported language pairs:
   * | **No.** | **Source language** |  | **Target language** |  |
   * | --- | --- | --- | --- | --- |
   * |  | Language code | Language name | Language code | Language name |
   * | 1 | en | English | ar | Arabic |
   * | 2 | en | English | id | Indonesian |
   * | 3 | en | English | th | Thai |
   * | 4 | en | English | ko | Korean |
   * | 5 | en | English | ja | Japanese |
   * | 6 | en | English | vi | Vietnamese |
   * | 7 | en | English | ru | Russian |
   * | 8 | en | English | tl | Filipino |
   * | 9 | en | English | es | Spanish |
   * | 10 | en | English | fr | French |
   * | 11 | en | English | de | German |
   * | 12 | en | English | pl | Polish |
   * ## Scenarios
   * Main images and detail images for cross-border e-commerce.
   * ## Features
   * *   **Product subject information protection**: Allows you to specify whether to translate the text on the product subject. This helps protect the subject information, such as the embedded product name, from being translated.
   *     
   * *   **Brand name protection**: Allows you to specify whether to translate the brand name in the image. This helps protect the brand name from being translated.
   *     
   * *   **Translation intervention**: Allows you to customize translation results, including keeping the original text (ABC-ABC), specifying a translation (ABC-DEF), or leaving it untranslated (ABC-null). This is commonly used for scenarios such as brand word protection. You can implement this by passing the corresponding intervention glossary ID when calling the API operation to meet your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention words. If you need more, contact the platform for assistance.
   * 
   * @param request - ImageTranslationPlusRequest
   * @returns ImageTranslationPlusResponse
   */
  async imageTranslationPlus(request: $_model.ImageTranslationPlusRequest): Promise<$_model.ImageTranslationPlusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageTranslationPlusWithOptions(request, runtime);
  }

  /**
   * Translates e-commerce images by using the Image Translation Plus edition. This edition adopts the Mixture of Experts (MoE) architecture and delivers higher translation accuracy for multiple minor languages compared with the Lite and Pro editions.
   * 
   * @remarks
   * ## Scenarios
   * Main images and detail images for cross-border e-commerce.
   * ## Features
   * *   **Product subject information protection**: Allows you to specify whether to translate the text on the product subject. This helps you protect the subject information, such as the embedded product name, from being translated.
   *     
   * *   **Brand name protection**: Allows you to specify whether to translate the brand names in the image. This helps you protect the brand name information from being translated.
   *     
   * *   **Translation intervention**: Allows you to customize translation results, including keeping the original text (ABC-ABC), specifying a translation (ABC-DEF), and skipping translation (ABC-null). This is commonly used in scenarios such as brand word protection. You can implement this by passing the corresponding intervention glossary ID when you call the API operation. This meets your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention words. If you need more, contact the platform for assistance.
   * ## Supported language pairs
   * | **No.** | **Source language** |  | **Target language** |  |
   * | --- | --- | --- | --- | --- |
   * |  | Language code | Language name | Language code | Language name |
   * | 1 | en | English | ar | Arabic |
   * | 2 | en | English | id | Indonesian |
   * | 3 | en | English | th | Thai |
   * | 4 | en | English | ko | Korean |
   * | 5 | en | English | ja | Japanese |
   * | 6 | en | English | vi | Vietnamese |
   * | 7 | en | English | ru | Russian |
   * | 8 | en | English | tl | Filipino |
   * | 9 | en | English | es | Spanish |
   * | 10 | en | English | fr | French |
   * | 11 | en | English | de | German |
   * | 12 | en | English | pl | Polish |
   * ## Preparations and call process
   * The asynchronous API operations for Image Translation Plus and other features share the same result retrieval process, RocketMQ subscription rules, message encryption protocols, dependency configurations, and Java consumption and decryption code.
   * For the asynchronous call process, subscription rules, message formats and encryption protocols, and detailed integration solutions, refer to [Asynchronous API operation call instructions](https://www.alibabacloud.com/help/en/aidge/asynchronous-interface-call-instructions).
   * 
   * @param request - ImageTranslationPlusAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageTranslationPlusAsyncResponse
   */
  async imageTranslationPlusAsyncWithOptions(request: $_model.ImageTranslationPlusAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageTranslationPlusAsyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.glossary)) {
      query["Glossary"] = request.glossary;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.includingProductArea)) {
      query["IncludingProductArea"] = request.includingProductArea;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      query["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      query["TargetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.translatingBrandInTheProduct)) {
      query["TranslatingBrandInTheProduct"] = request.translatingBrandInTheProduct;
    }

    if (!$dara.isNull(request.useImageEditor)) {
      query["UseImageEditor"] = request.useImageEditor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageTranslationPlusAsync",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageTranslationPlusAsyncResponse>(await this.callApi(params, req, runtime), new $_model.ImageTranslationPlusAsyncResponse({}));
  }

  /**
   * Translates e-commerce images by using the Image Translation Plus edition. This edition adopts the Mixture of Experts (MoE) architecture and delivers higher translation accuracy for multiple minor languages compared with the Lite and Pro editions.
   * 
   * @remarks
   * ## Scenarios
   * Main images and detail images for cross-border e-commerce.
   * ## Features
   * *   **Product subject information protection**: Allows you to specify whether to translate the text on the product subject. This helps you protect the subject information, such as the embedded product name, from being translated.
   *     
   * *   **Brand name protection**: Allows you to specify whether to translate the brand names in the image. This helps you protect the brand name information from being translated.
   *     
   * *   **Translation intervention**: Allows you to customize translation results, including keeping the original text (ABC-ABC), specifying a translation (ABC-DEF), and skipping translation (ABC-null). This is commonly used in scenarios such as brand word protection. You can implement this by passing the corresponding intervention glossary ID when you call the API operation. This meets your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention words. If you need more, contact the platform for assistance.
   * ## Supported language pairs
   * | **No.** | **Source language** |  | **Target language** |  |
   * | --- | --- | --- | --- | --- |
   * |  | Language code | Language name | Language code | Language name |
   * | 1 | en | English | ar | Arabic |
   * | 2 | en | English | id | Indonesian |
   * | 3 | en | English | th | Thai |
   * | 4 | en | English | ko | Korean |
   * | 5 | en | English | ja | Japanese |
   * | 6 | en | English | vi | Vietnamese |
   * | 7 | en | English | ru | Russian |
   * | 8 | en | English | tl | Filipino |
   * | 9 | en | English | es | Spanish |
   * | 10 | en | English | fr | French |
   * | 11 | en | English | de | German |
   * | 12 | en | English | pl | Polish |
   * ## Preparations and call process
   * The asynchronous API operations for Image Translation Plus and other features share the same result retrieval process, RocketMQ subscription rules, message encryption protocols, dependency configurations, and Java consumption and decryption code.
   * For the asynchronous call process, subscription rules, message formats and encryption protocols, and detailed integration solutions, refer to [Asynchronous API operation call instructions](https://www.alibabacloud.com/help/en/aidge/asynchronous-interface-call-instructions).
   * 
   * @param request - ImageTranslationPlusAsyncRequest
   * @returns ImageTranslationPlusAsyncResponse
   */
  async imageTranslationPlusAsync(request: $_model.ImageTranslationPlusAsyncRequest): Promise<$_model.ImageTranslationPlusAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageTranslationPlusAsyncWithOptions(request, runtime);
  }

  /**
   * Translates e-commerce images by using the Pro edition of the image translation service. Integrates multimodal large models to achieve more accurate image understanding, significantly improves translation quality, and continuously expands and optimizes multilingual translation capabilities. Supports over 400 language pairs, including bridged languages.
   * 
   * @remarks
   * ## Product introduction
   * The Pro edition of the image translation service is designed specifically for e-commerce images. It integrates multimodal large models to achieve more accurate image understanding, significantly improves translation quality, and continuously expands and optimizes multilingual translation capabilities. It supports over 400 language pairs, including bridged languages.
   * ## Scenarios
   * E-commerce product images, marketing images, and images in various other scenarios.
   * ## Features
   * - **Product subject information protection**: Allows you to specify whether to translate text on the product subject. This helps you protect subject information and prevents embedded information such as product names from being translated.
   * - **Secondary editing after translation**: Allows you to specify whether to return layout information such as text position, font, and color. This information can be used for secondary editing when you integrate an image editor. The SDK package for the editor is not yet available. Follow platform notifications for updates.
   * - **Brand name protection**: Allows you to specify whether to translate brand names in images. This helps you protect brand name information from being translated.
   * - **Translation intervention**: Allows you to customize translation results, including keeping the original text (ABC-ABC), specifying a translation (ABC-DEF), and omitting the translation (ABC-null). This is commonly used for scenarios such as brand word protection. You only need to pass the corresponding intervention glossary ID when calling the API to meet your translation needs in different scenarios. You can upload up to 100,000 intervention words. If you need a higher quota, contact the platform.  
   * - <props="china"> **Image editor integration**: For details, see [Image translation editor protocol](https://www.alibabacloud.com/help/en/document_detail/3042647.html).
   * 
   * @param request - ImageTranslationProRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageTranslationProResponse
   */
  async imageTranslationProWithOptions(request: $_model.ImageTranslationProRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageTranslationProResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.async)) {
      body["Async"] = request.async;
    }

    if (!$dara.isNull(request.glossary)) {
      body["Glossary"] = request.glossary;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.includingProductArea)) {
      body["IncludingProductArea"] = request.includingProductArea;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.translatingBrandInTheProduct)) {
      body["TranslatingBrandInTheProduct"] = request.translatingBrandInTheProduct;
    }

    if (!$dara.isNull(request.useImageEditor)) {
      body["UseImageEditor"] = request.useImageEditor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageTranslationPro",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageTranslationProResponse>(await this.callApi(params, req, runtime), new $_model.ImageTranslationProResponse({}));
  }

  /**
   * Translates e-commerce images by using the Pro edition of the image translation service. Integrates multimodal large models to achieve more accurate image understanding, significantly improves translation quality, and continuously expands and optimizes multilingual translation capabilities. Supports over 400 language pairs, including bridged languages.
   * 
   * @remarks
   * ## Product introduction
   * The Pro edition of the image translation service is designed specifically for e-commerce images. It integrates multimodal large models to achieve more accurate image understanding, significantly improves translation quality, and continuously expands and optimizes multilingual translation capabilities. It supports over 400 language pairs, including bridged languages.
   * ## Scenarios
   * E-commerce product images, marketing images, and images in various other scenarios.
   * ## Features
   * - **Product subject information protection**: Allows you to specify whether to translate text on the product subject. This helps you protect subject information and prevents embedded information such as product names from being translated.
   * - **Secondary editing after translation**: Allows you to specify whether to return layout information such as text position, font, and color. This information can be used for secondary editing when you integrate an image editor. The SDK package for the editor is not yet available. Follow platform notifications for updates.
   * - **Brand name protection**: Allows you to specify whether to translate brand names in images. This helps you protect brand name information from being translated.
   * - **Translation intervention**: Allows you to customize translation results, including keeping the original text (ABC-ABC), specifying a translation (ABC-DEF), and omitting the translation (ABC-null). This is commonly used for scenarios such as brand word protection. You only need to pass the corresponding intervention glossary ID when calling the API to meet your translation needs in different scenarios. You can upload up to 100,000 intervention words. If you need a higher quota, contact the platform.  
   * - <props="china"> **Image editor integration**: For details, see [Image translation editor protocol](https://www.alibabacloud.com/help/en/document_detail/3042647.html).
   * 
   * @param request - ImageTranslationProRequest
   * @returns ImageTranslationProResponse
   */
  async imageTranslationPro(request: $_model.ImageTranslationProRequest): Promise<$_model.ImageTranslationProResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageTranslationProWithOptions(request, runtime);
  }

  /**
   * Translates images by using the Image Translation Pro edition, which is designed for e-commerce images, integrates multimodal large model technology for more accurate image understanding, significantly improves translation quality, and continuously expands and optimizes multilingual translation capabilities, supporting more than 400 language pairs including bridged languages.
   * 
   * @remarks
   * ## Scenarios
   * E-commerce product images, marketing images, and images in various other scenarios.
   * ## Features
   * *   Product subject information protection: You can specify whether to translate the text on the product subject. This helps you protect the subject information, such as the embedded product name, from being translated.
   *     
   * *   Secondary editing after translation: You can specify whether to return layout information such as the position, font, and color of the text. This information can be used for secondary editing when you integrate an image editor. The SDK package for the editor is not yet available. Follow platform notifications for updates.
   *     
   * *   Brand name protection: You can specify whether to translate brand names in the image. This helps you protect brand name information from being translated.
   *     
   * *   Translation intervention: You can customize translation results, including keeping the original text (ABC-ABC), specifying a translation (ABC-DEF), or omitting the translation (ABC-null). This is commonly used in scenarios such as brand word protection. You can implement this by passing the corresponding intervention glossary ID when calling the API, which meets your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention entries. If you need more, contact the platform for assistance.
   * ## Preparations and call process
   * Image Translation Pro supports both synchronous and asynchronous call methods. This topic describes the asynchronous call API. For synchronous calls, refer to [Image Translation Pro](https://www.alibabacloud.com/help/en/aidge/image-translation-pro).
   * Asynchronous APIs for text translation and other capabilities share the same result retrieval process, RocketMQ subscription rules, message encryption protocols, dependency configurations, and Java consumption and decryption code.
   * For the integration process, subscription rules, message formats and encryption protocols, and detailed integration solutions for asynchronous calls, refer to [Asynchronous API call instructions](https://www.alibabacloud.com/help/en/aidge/asynchronous-interface-call-instructions).
   * 
   * @param request - ImageTranslationProAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageTranslationProAsyncResponse
   */
  async imageTranslationProAsyncWithOptions(request: $_model.ImageTranslationProAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageTranslationProAsyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.glossary)) {
      query["Glossary"] = request.glossary;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.includingProductArea)) {
      query["IncludingProductArea"] = request.includingProductArea;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      query["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      query["TargetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.translatingBrandInTheProduct)) {
      query["TranslatingBrandInTheProduct"] = request.translatingBrandInTheProduct;
    }

    if (!$dara.isNull(request.useImageEditor)) {
      query["UseImageEditor"] = request.useImageEditor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageTranslationProAsync",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageTranslationProAsyncResponse>(await this.callApi(params, req, runtime), new $_model.ImageTranslationProAsyncResponse({}));
  }

  /**
   * Translates images by using the Image Translation Pro edition, which is designed for e-commerce images, integrates multimodal large model technology for more accurate image understanding, significantly improves translation quality, and continuously expands and optimizes multilingual translation capabilities, supporting more than 400 language pairs including bridged languages.
   * 
   * @remarks
   * ## Scenarios
   * E-commerce product images, marketing images, and images in various other scenarios.
   * ## Features
   * *   Product subject information protection: You can specify whether to translate the text on the product subject. This helps you protect the subject information, such as the embedded product name, from being translated.
   *     
   * *   Secondary editing after translation: You can specify whether to return layout information such as the position, font, and color of the text. This information can be used for secondary editing when you integrate an image editor. The SDK package for the editor is not yet available. Follow platform notifications for updates.
   *     
   * *   Brand name protection: You can specify whether to translate brand names in the image. This helps you protect brand name information from being translated.
   *     
   * *   Translation intervention: You can customize translation results, including keeping the original text (ABC-ABC), specifying a translation (ABC-DEF), or omitting the translation (ABC-null). This is commonly used in scenarios such as brand word protection. You can implement this by passing the corresponding intervention glossary ID when calling the API, which meets your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention entries. If you need more, contact the platform for assistance.
   * ## Preparations and call process
   * Image Translation Pro supports both synchronous and asynchronous call methods. This topic describes the asynchronous call API. For synchronous calls, refer to [Image Translation Pro](https://www.alibabacloud.com/help/en/aidge/image-translation-pro).
   * Asynchronous APIs for text translation and other capabilities share the same result retrieval process, RocketMQ subscription rules, message encryption protocols, dependency configurations, and Java consumption and decryption code.
   * For the integration process, subscription rules, message formats and encryption protocols, and detailed integration solutions for asynchronous calls, refer to [Asynchronous API call instructions](https://www.alibabacloud.com/help/en/aidge/asynchronous-interface-call-instructions).
   * 
   * @param request - ImageTranslationProAsyncRequest
   * @returns ImageTranslationProAsyncResponse
   */
  async imageTranslationProAsync(request: $_model.ImageTranslationProAsyncRequest): Promise<$_model.ImageTranslationProAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageTranslationProAsyncWithOptions(request, runtime);
  }

  /**
   * Provides image translation tailored for e-commerce, supporting over 400 language pairs, including bridged pairs. Accurately processes complex text layouts within images and ensures translated content aligns with the image context, helping e-commerce platforms and developers easily achieve multilingual conversion and presentation. Additionally, returns layer information such as text position, font, and color to facilitate secondary editing through image editors.
   * 
   * @remarks
   * # 1. Product introduction
   * The image translation product is tailored for e-commerce images, supporting over 400 language pairs, including bridged pairs. It accurately processes complex text layouts within images and ensures that the translated content aligns with the image context, helping e-commerce platforms and developers easily achieve multilingual conversion and presentation. Additionally, it returns layer information such as text position, font, and color to facilitate secondary editing through image editors.
   * # 2. Scenarios
   * E-commerce product images, marketing images, and images for various other scenarios.
   * # 3. Features
   * *   **Product subject information protection**: Allows you to choose whether to translate the text on the product subject. This helps protect the subject information from being translated, avoiding the translation of embedded information such as product names.
   *     
   * *   **Brand name protection**: Allows you to choose whether to translate brand names in the image. This helps protect brand name information from being translated.
   *     
   * *   **Secondary editing after translation (layer information)**: Allows you to choose whether to return layer information such as text position, font, and color. This information can be used to integrate with image editors for secondary editing of the translation results. For updates on the release of the editor SDK package, refer to platform notifications.
   *     
   * *   **Translation intervention**: Allows you to customize translation results, including do not translate (ABC-ABC), specify translation (ABC-DEF), and skip translation (ABC-null value). This is commonly used in scenarios such as brand word protection. You can achieve this by passing the corresponding intervention glossary ID when calling the API, meeting your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.  
   * <props="china">*   **Image editor integration**: For more information, see [Image translation editor protocol](https://www.alibabacloud.com/help/en/document_detail/3042647.html).
   * 
   * @param request - ImageTranslationStandardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageTranslationStandardResponse
   */
  async imageTranslationStandardWithOptions(request: $_model.ImageTranslationStandardRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageTranslationStandardResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.glossary)) {
      query["Glossary"] = request.glossary;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.includingProductArea)) {
      query["IncludingProductArea"] = request.includingProductArea;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      query["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      query["TargetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.translatingBrandInTheProduct)) {
      query["TranslatingBrandInTheProduct"] = request.translatingBrandInTheProduct;
    }

    if (!$dara.isNull(request.useImageEditor)) {
      query["UseImageEditor"] = request.useImageEditor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageTranslationStandard",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageTranslationStandardResponse>(await this.callApi(params, req, runtime), new $_model.ImageTranslationStandardResponse({}));
  }

  /**
   * Provides image translation tailored for e-commerce, supporting over 400 language pairs, including bridged pairs. Accurately processes complex text layouts within images and ensures translated content aligns with the image context, helping e-commerce platforms and developers easily achieve multilingual conversion and presentation. Additionally, returns layer information such as text position, font, and color to facilitate secondary editing through image editors.
   * 
   * @remarks
   * # 1. Product introduction
   * The image translation product is tailored for e-commerce images, supporting over 400 language pairs, including bridged pairs. It accurately processes complex text layouts within images and ensures that the translated content aligns with the image context, helping e-commerce platforms and developers easily achieve multilingual conversion and presentation. Additionally, it returns layer information such as text position, font, and color to facilitate secondary editing through image editors.
   * # 2. Scenarios
   * E-commerce product images, marketing images, and images for various other scenarios.
   * # 3. Features
   * *   **Product subject information protection**: Allows you to choose whether to translate the text on the product subject. This helps protect the subject information from being translated, avoiding the translation of embedded information such as product names.
   *     
   * *   **Brand name protection**: Allows you to choose whether to translate brand names in the image. This helps protect brand name information from being translated.
   *     
   * *   **Secondary editing after translation (layer information)**: Allows you to choose whether to return layer information such as text position, font, and color. This information can be used to integrate with image editors for secondary editing of the translation results. For updates on the release of the editor SDK package, refer to platform notifications.
   *     
   * *   **Translation intervention**: Allows you to customize translation results, including do not translate (ABC-ABC), specify translation (ABC-DEF), and skip translation (ABC-null value). This is commonly used in scenarios such as brand word protection. You can achieve this by passing the corresponding intervention glossary ID when calling the API, meeting your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.  
   * <props="china">*   **Image editor integration**: For more information, see [Image translation editor protocol](https://www.alibabacloud.com/help/en/document_detail/3042647.html).
   * 
   * @param request - ImageTranslationStandardRequest
   * @returns ImageTranslationStandardResponse
   */
  async imageTranslationStandard(request: $_model.ImageTranslationStandardRequest): Promise<$_model.ImageTranslationStandardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageTranslationStandardWithOptions(request, runtime);
  }

  /**
   * Translates e-commerce images and supports over 400 language pairs, including bridged pairs. Accurately processes complex text layouts within images and ensures that the translated content matches the image context, which helps e-commerce platforms and developers easily achieve multilingual conversion and presentation of image content. Additionally, the service returns layer information such as the position, font, and color of text in the image to facilitate secondary editing of translation results by using image editors.
   * 
   * @remarks
   * ## Scenarios  
   * Product images, marketing images, and images for various other scenarios in e-commerce.
   * ## Features
   * *   **Product subject information protection**: Allows you to specify whether to translate the text on the product subject. This helps protect the subject information from being translated and prevents embedded information such as product names from being translated.
   *     
   * *   **Brand name protection**: Allows you to specify whether to translate brand names in the image. This helps protect brand name information from being translated.
   *     
   * *   **Secondary editing after translation (layer information)**: Allows you to specify whether to return layer information such as the position, font, and color of the text. This information can be used to integrate with image editors for secondary editing of translation results. For the release progress of the editor SDK package, refer to platform notifications.
   *     
   * *   **Translation intervention**: Allows you to customize translation results, including no translation (ABC-ABC), specified translation (ABC-DEF), and skip translation (ABC-null value). This is commonly used in scenarios such as brand word protection. You can implement this by passing the corresponding intervention glossary ID when calling the API operation to meet your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention words. If you need more, contact the platform for assistance.
   * ## Preparations and call process 
   * * Image Translation Standard Edition supports both synchronous and asynchronous call methods. This topic describes the asynchronous call API operation. For synchronous calls, refer to [Image Translation Standard Edition](https://www.alibabacloud.com/help/en/aidge/image-translation).   
   * * The asynchronous API operations for Image Translation Standard Edition and other features share the same result retrieval process, ApsaraMQ for RocketMQ subscription rules, message encryption protocols, dependency configurations, and Java consumption and decryption code.   
   * * For the integration process, subscription rules, message formats and encryption protocols, and detailed integration solutions for asynchronous calls, refer to [Asynchronous API operation call instructions](https://www.alibabacloud.com/help/en/aidge/asynchronous-interface-call-instructions).
   * 
   * @param request - ImageTranslationStandardAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageTranslationStandardAsyncResponse
   */
  async imageTranslationStandardAsyncWithOptions(request: $_model.ImageTranslationStandardAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageTranslationStandardAsyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.glossary)) {
      query["Glossary"] = request.glossary;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.includingProductArea)) {
      query["IncludingProductArea"] = request.includingProductArea;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      query["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      query["TargetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.translatingBrandInTheProduct)) {
      query["TranslatingBrandInTheProduct"] = request.translatingBrandInTheProduct;
    }

    if (!$dara.isNull(request.useImageEditor)) {
      query["UseImageEditor"] = request.useImageEditor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageTranslationStandardAsync",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageTranslationStandardAsyncResponse>(await this.callApi(params, req, runtime), new $_model.ImageTranslationStandardAsyncResponse({}));
  }

  /**
   * Translates e-commerce images and supports over 400 language pairs, including bridged pairs. Accurately processes complex text layouts within images and ensures that the translated content matches the image context, which helps e-commerce platforms and developers easily achieve multilingual conversion and presentation of image content. Additionally, the service returns layer information such as the position, font, and color of text in the image to facilitate secondary editing of translation results by using image editors.
   * 
   * @remarks
   * ## Scenarios  
   * Product images, marketing images, and images for various other scenarios in e-commerce.
   * ## Features
   * *   **Product subject information protection**: Allows you to specify whether to translate the text on the product subject. This helps protect the subject information from being translated and prevents embedded information such as product names from being translated.
   *     
   * *   **Brand name protection**: Allows you to specify whether to translate brand names in the image. This helps protect brand name information from being translated.
   *     
   * *   **Secondary editing after translation (layer information)**: Allows you to specify whether to return layer information such as the position, font, and color of the text. This information can be used to integrate with image editors for secondary editing of translation results. For the release progress of the editor SDK package, refer to platform notifications.
   *     
   * *   **Translation intervention**: Allows you to customize translation results, including no translation (ABC-ABC), specified translation (ABC-DEF), and skip translation (ABC-null value). This is commonly used in scenarios such as brand word protection. You can implement this by passing the corresponding intervention glossary ID when calling the API operation to meet your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention words. If you need more, contact the platform for assistance.
   * ## Preparations and call process 
   * * Image Translation Standard Edition supports both synchronous and asynchronous call methods. This topic describes the asynchronous call API operation. For synchronous calls, refer to [Image Translation Standard Edition](https://www.alibabacloud.com/help/en/aidge/image-translation).   
   * * The asynchronous API operations for Image Translation Standard Edition and other features share the same result retrieval process, ApsaraMQ for RocketMQ subscription rules, message encryption protocols, dependency configurations, and Java consumption and decryption code.   
   * * For the integration process, subscription rules, message formats and encryption protocols, and detailed integration solutions for asynchronous calls, refer to [Asynchronous API operation call instructions](https://www.alibabacloud.com/help/en/aidge/asynchronous-interface-call-instructions).
   * 
   * @param request - ImageTranslationStandardAsyncRequest
   * @returns ImageTranslationStandardAsyncResponse
   */
  async imageTranslationStandardAsync(request: $_model.ImageTranslationStandardAsyncRequest): Promise<$_model.ImageTranslationStandardAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageTranslationStandardAsyncWithOptions(request, runtime);
  }

  /**
   * Upscales e-commerce images by intelligently enhancing resolution and details, improving textures and image quality during the upscaling process. Supports high-definition outputs such as 2K and 4K to meet the requirements for product main images, detail images, and marketing materials, enabling efficient and clear processing of large batches of images to improve product image quality. (Synchronous)
   * 
   * @remarks
   * # Product Introduction
   * The high-definition upscaling product is customized for e-commerce images. It intelligently enhances image resolution and detail performance, and provides texture enhancement and image quality optimization during the upscaling procedure. It supports high-definition outputs such as 2K and 4K to meet the high-definition requirements for product main images, detail images, and marketing materials. It enables efficient and clear processing of large batches of images to improve product image quality. (synchronous)
   * # Scenarios
   * *   High-definition e-commerce product images: Enhances the resolution and details of product main images, detail images, and marketing materials to make details such as product textures and materials clearer, improving the quality of product displays.
   *     
   * *   Multi-platform product material adaptation: Upscales existing product images in high definition to meet the image display requirements of different e-commerce platforms, satisfying the material usage needs across multiple platforms and scenarios.
   *     
   * *   Batch optimization of existing images: Enhances existing low-resolution product images in high definition to reduce reshooting and production costs, improving the reuse efficiency of image materials.
   * # Features
   * 1.  Intelligent high-definition upscaling: Based on AI image enhancement technology, it improves the resolution and optimizes the details of input images to enhance image clarity and texture performance.
   *     
   * 2.  Multiple upscaling factors: Supports 2x and 4x upscaling factors, allowing flexible selection based on image quality and business requirements.
   *     
   * 3.  Synchronous API calls: Supports synchronous submission of images and retrieval of processing results through APIs, facilitating integration into e-commerce image processing workflows.
   * # Before and after
   * | **Original image** | **Upscaled image** |
   * | --- | --- |
   * | ![Original image.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/p7ldzRN3LAP3oqBQ/img/eec1cb9d-d109-480a-8ef1-363f3123c92d.jpeg) | ![Upscaled image.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/p7ldzRN3LAP3oqBQ/img/b45c4d15-15b8-4c9e-ae93-2b0831c191e2.jpeg) |
   * 
   * @param request - ImageUpscaleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageUpscaleResponse
   */
  async imageUpscaleWithOptions(request: $_model.ImageUpscaleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageUpscaleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.upscaleFactor)) {
      query["UpscaleFactor"] = request.upscaleFactor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageUpscale",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageUpscaleResponse>(await this.callApi(params, req, runtime), new $_model.ImageUpscaleResponse({}));
  }

  /**
   * Upscales e-commerce images by intelligently enhancing resolution and details, improving textures and image quality during the upscaling process. Supports high-definition outputs such as 2K and 4K to meet the requirements for product main images, detail images, and marketing materials, enabling efficient and clear processing of large batches of images to improve product image quality. (Synchronous)
   * 
   * @remarks
   * # Product Introduction
   * The high-definition upscaling product is customized for e-commerce images. It intelligently enhances image resolution and detail performance, and provides texture enhancement and image quality optimization during the upscaling procedure. It supports high-definition outputs such as 2K and 4K to meet the high-definition requirements for product main images, detail images, and marketing materials. It enables efficient and clear processing of large batches of images to improve product image quality. (synchronous)
   * # Scenarios
   * *   High-definition e-commerce product images: Enhances the resolution and details of product main images, detail images, and marketing materials to make details such as product textures and materials clearer, improving the quality of product displays.
   *     
   * *   Multi-platform product material adaptation: Upscales existing product images in high definition to meet the image display requirements of different e-commerce platforms, satisfying the material usage needs across multiple platforms and scenarios.
   *     
   * *   Batch optimization of existing images: Enhances existing low-resolution product images in high definition to reduce reshooting and production costs, improving the reuse efficiency of image materials.
   * # Features
   * 1.  Intelligent high-definition upscaling: Based on AI image enhancement technology, it improves the resolution and optimizes the details of input images to enhance image clarity and texture performance.
   *     
   * 2.  Multiple upscaling factors: Supports 2x and 4x upscaling factors, allowing flexible selection based on image quality and business requirements.
   *     
   * 3.  Synchronous API calls: Supports synchronous submission of images and retrieval of processing results through APIs, facilitating integration into e-commerce image processing workflows.
   * # Before and after
   * | **Original image** | **Upscaled image** |
   * | --- | --- |
   * | ![Original image.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/p7ldzRN3LAP3oqBQ/img/eec1cb9d-d109-480a-8ef1-363f3123c92d.jpeg) | ![Upscaled image.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/p7ldzRN3LAP3oqBQ/img/b45c4d15-15b8-4c9e-ae93-2b0831c191e2.jpeg) |
   * 
   * @param request - ImageUpscaleRequest
   * @returns ImageUpscaleResponse
   */
  async imageUpscale(request: $_model.ImageUpscaleRequest): Promise<$_model.ImageUpscaleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageUpscaleWithOptions(request, runtime);
  }

  /**
   * Supports automatic language identification for 31 languages in query scenarios and 35 languages in general scenarios. Applicable to short text such as search terms, titles, and conversations.
   * 
   * @remarks
   * ## Product Introduction
   * Supports automatic language identification for 31 languages in query phrase scenarios and 35 languages in general scenarios. Applicable to short text such as search terms, titles, and conversations. For supported language directions, refer to the [Language Direction Mapping Table](https://www.alibabacloud.com/help/en/document_detail/3041883.html).
   * 
   * @param request - LanguageDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LanguageDetectResponse
   */
  async languageDetectWithOptions(request: $_model.LanguageDetectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LanguageDetectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.sourceText)) {
      query["SourceText"] = request.sourceText;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LanguageDetect",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LanguageDetectResponse>(await this.callApi(params, req, runtime), new $_model.LanguageDetectResponse({}));
  }

  /**
   * Supports automatic language identification for 31 languages in query scenarios and 35 languages in general scenarios. Applicable to short text such as search terms, titles, and conversations.
   * 
   * @remarks
   * ## Product Introduction
   * Supports automatic language identification for 31 languages in query phrase scenarios and 35 languages in general scenarios. Applicable to short text such as search terms, titles, and conversations. For supported language directions, refer to the [Language Direction Mapping Table](https://www.alibabacloud.com/help/en/document_detail/3041883.html).
   * 
   * @param request - LanguageDetectRequest
   * @returns LanguageDetectResponse
   */
  async languageDetect(request: $_model.LanguageDetectRequest): Promise<$_model.LanguageDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.languageDetectWithOptions(request, runtime);
  }

  /**
   * Inspects the compliance of in-store marketing material displays based on a multimodal large language model (MLLM) for offline retail and channel store inspection scenarios. It evaluates standard materials such as functional table cards, posters, and door-shaped display stands, along with long-tail materials like light cloths, KT boards, floor stickers, and light boxes in actual store photos against inspection rules at the natural language level. The operation outputs structured conclusions and Chinese evidence descriptions that can be directly integrated into business systems. This is a **synchronous** call that returns results in a single request.
   * 
   * @remarks
   * ## **Scenarios**
   * -   **Store marketing material compliance inspection**: Automatically determines whether specified marketing materials (feature table cards, posters, door-shaped display stands, etc.) are placed or posted in the store according to the standard display guidelines issued by the headquarters. Identifies typical issues such as missing materials, placement faults, and content mismatch.
   *     
   * -   **New product or campaign material verification**: During new product releases or sales promotions, automatically verifies in batches the listing of campaign materials in actual store photos as required, replacing manual sampling inspections.
   *     
   * -   **Adaptive dual-image comparison and single-image detection**: A single API operation supports both dual-image comparison (reference image + target image, Pattern A) and single-image detection (target image only, Pattern B). An automatic switchover is performed based on whether `ImageRefer` is provided, so callers do not need to distinguish between invoke methods.
   * ## **Features**
   * -   **Multi-mode intelligent routing**: Built-in material type parsing capability. Automatically identifies the target material type based on the natural language text in `Rules` and routes the request to the corresponding material detection pipeline. Callers only need to pass the image URL and rule text. Currently supports routing for four detection items: functional table cards, posters, door-shaped display stands, and other materials. More specific marketing material detection pipelines will be added in the future.
   *     
   * -   **MLLM semantic understanding + structured rule collaboration**: Uses a multimodal large language model to perform semantic-level understanding such as material recognition, content comparison, and text OCR. Combines rule cleaning and structured models to break down natural language rules into step-by-step verifiable steps (S1, S2, etc.), ensuring accuracy while maintaining rule flexibility and traceability.
   *     
   * -   **Structured audit conclusion output**: The output is unified into the structure of `Result.OverallResult` + `Result.Steps[]` + `Result.Evidence`. The overall conclusion is derived from the logical AND of all steps. Each step is independently visible, making it easy to directly drive downstream business systems and support case-level manual review tracing.
   *     
   * -   **Supported input formats**: Currently supports publicly accessible image URLs. Supports both single-image (Mode B) and dual-image (Mode A) calling formats, with completely identical output structures.
   * ## **Invoke methods**
   * -   **Synchronous call**: Returns the detection result in a single request without the need for polling. The response uses a unified envelope containing `Code`, `Message`, `RequestId`, `Success`, and `Data`.
   *     
   * -   **Authentication and signing**: Invoked through the Aidge gateway. Authentication, signing, and common parameters follow the unified platform access methods. Refer to the officially published API documentation for the specific request path.
   *     
   * -   **Timeout settings**: Set the request timeout to a value no less than the maximum response time of the API operation. Refer to the officially published documentation for the specific value.
   * 
   * @param request - MaterialInspectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MaterialInspectionResponse
   */
  async materialInspectionWithOptions(request: $_model.MaterialInspectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MaterialInspectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.imageRefer)) {
      query["ImageRefer"] = request.imageRefer;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!$dara.isNull(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MaterialInspection",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MaterialInspectionResponse>(await this.callApi(params, req, runtime), new $_model.MaterialInspectionResponse({}));
  }

  /**
   * Inspects the compliance of in-store marketing material displays based on a multimodal large language model (MLLM) for offline retail and channel store inspection scenarios. It evaluates standard materials such as functional table cards, posters, and door-shaped display stands, along with long-tail materials like light cloths, KT boards, floor stickers, and light boxes in actual store photos against inspection rules at the natural language level. The operation outputs structured conclusions and Chinese evidence descriptions that can be directly integrated into business systems. This is a **synchronous** call that returns results in a single request.
   * 
   * @remarks
   * ## **Scenarios**
   * -   **Store marketing material compliance inspection**: Automatically determines whether specified marketing materials (feature table cards, posters, door-shaped display stands, etc.) are placed or posted in the store according to the standard display guidelines issued by the headquarters. Identifies typical issues such as missing materials, placement faults, and content mismatch.
   *     
   * -   **New product or campaign material verification**: During new product releases or sales promotions, automatically verifies in batches the listing of campaign materials in actual store photos as required, replacing manual sampling inspections.
   *     
   * -   **Adaptive dual-image comparison and single-image detection**: A single API operation supports both dual-image comparison (reference image + target image, Pattern A) and single-image detection (target image only, Pattern B). An automatic switchover is performed based on whether `ImageRefer` is provided, so callers do not need to distinguish between invoke methods.
   * ## **Features**
   * -   **Multi-mode intelligent routing**: Built-in material type parsing capability. Automatically identifies the target material type based on the natural language text in `Rules` and routes the request to the corresponding material detection pipeline. Callers only need to pass the image URL and rule text. Currently supports routing for four detection items: functional table cards, posters, door-shaped display stands, and other materials. More specific marketing material detection pipelines will be added in the future.
   *     
   * -   **MLLM semantic understanding + structured rule collaboration**: Uses a multimodal large language model to perform semantic-level understanding such as material recognition, content comparison, and text OCR. Combines rule cleaning and structured models to break down natural language rules into step-by-step verifiable steps (S1, S2, etc.), ensuring accuracy while maintaining rule flexibility and traceability.
   *     
   * -   **Structured audit conclusion output**: The output is unified into the structure of `Result.OverallResult` + `Result.Steps[]` + `Result.Evidence`. The overall conclusion is derived from the logical AND of all steps. Each step is independently visible, making it easy to directly drive downstream business systems and support case-level manual review tracing.
   *     
   * -   **Supported input formats**: Currently supports publicly accessible image URLs. Supports both single-image (Mode B) and dual-image (Mode A) calling formats, with completely identical output structures.
   * ## **Invoke methods**
   * -   **Synchronous call**: Returns the detection result in a single request without the need for polling. The response uses a unified envelope containing `Code`, `Message`, `RequestId`, `Success`, and `Data`.
   *     
   * -   **Authentication and signing**: Invoked through the Aidge gateway. Authentication, signing, and common parameters follow the unified platform access methods. Refer to the officially published API documentation for the specific request path.
   *     
   * -   **Timeout settings**: Set the request timeout to a value no less than the maximum response time of the API operation. Refer to the officially published documentation for the specific value.
   * 
   * @param request - MaterialInspectionRequest
   * @returns MaterialInspectionResponse
   */
  async materialInspection(request: $_model.MaterialInspectionRequest): Promise<$_model.MaterialInspectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.materialInspectionWithOptions(request, runtime);
  }

  /**
   * Detects product displays in physical stores based on multimodal large language models (MLLMs) and visual vector recall. This capability is designed for shelf and floor display inspection scenarios in offline retail and channel stores. The service first uses an MLLM to detect the bounding boxes and preliminary names of each product in real-world shelf and floor display photos, and then performs similarity recall against a customer-specific SKU vector database, enabling an exact match for each product to the customer\\"s own SKUs. It outputs item-by-item structured results that can be directly integrated with business systems. This service is suitable for large-scale, highly concurrent visual recognition pipelines such as remote auditing of offline store displays by headquarters, SKU distribution verification, and display compliance inspections.
   * 
   * @remarks
   * ## **Product Introduction**
   * Display detection is an intelligent recognition capability for store product displays built on multimodal large language models (MLLMs) and visual vector recall. It is designed for shelf and floor display inspection scenarios in offline retail and channel stores. For real-world shelf and floor display photos taken in stores, the service first uses an MLLM to detect the bounding boxes and preliminary names of each product, and then performs similarity recall against a customer-specific SKU vector database, enabling an exact match for each product to the customer\\"s own SKUs. It outputs item-by-item structured results that can be directly integrated with business systems. This service is suitable for large-scale, highly concurrent visual recognition pipelines such as remote auditing of offline store displays by headquarters, SKU distribution verification, and display compliance inspections.
   * ## **Scenarios**
   * -   **Shelf and floor display recognition and inventory**: Recognizes each product in a shelf or floor display image and matches it to the customer\\"s SKU database. It outputs an item-by-item list (product name, location, and similarity score) to replace manual item-by-item counting.
   *     
   * -   **Distribution verification and SKU compliance**: Verifies whether stores display specified SKUs as required by headquarters, and checks for out-of-stock or misplaced items. This supports batch automatic verification during sales promotions or new product launches.
   *     
   * -   **Customer-specific SKU database**: Customers can upload their own standard SKU images to create a dedicated vector database (isolated by RagId). During recognition, retrieval is performed only within this customer\\"s database to ensure accurate naming and data isolation between customers.
   * ## **Features**
   * -   **Two-stage collaboration of detection and retrieval**: The MLLM detects the bounding box and preliminary name of each product in the entire image (semantic-level understanding, adapted for dense displays and partial occlusion). Then, visual embedding vectors are used to perform similarity retrieval within the customer\\"s SKU database. The preliminary name is replaced with the exact SKU name of the top-1 result, balancing the recall rate and naming accuracy.
   *     
   * -   **Isolated retrieval with dedicated vector databases**: A dedicated SKU vector database is maintained for each customer based on RagId. Recognition retrieves data only within the corresponding database, ensuring strict isolation between customers. Added or updated SKUs take effect in real time.
   *     
   * -   **Item-by-item structured output**: The output is unified as Result.Items[]. Each product independently provides the bounding box, retrieved SKU name, SKU code, and similarity score. This facilitates direct integration with downstream inventory and verification systems and supports case-level manual review and tracing.
   *     
   * -   **Supported input formats**: Currently supports image URLs accessible over the Internet or from OSS. A single shelf or floor display image is sufficient for recognition, and the output structure is unified.
   * 
   * @param request - MerchandisePlacementDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MerchandisePlacementDetectionResponse
   */
  async merchandisePlacementDetectionWithOptions(request: $_model.MerchandisePlacementDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MerchandisePlacementDetectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.ragId)) {
      query["RagId"] = request.ragId;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MerchandisePlacementDetection",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MerchandisePlacementDetectionResponse>(await this.callApi(params, req, runtime), new $_model.MerchandisePlacementDetectionResponse({}));
  }

  /**
   * Detects product displays in physical stores based on multimodal large language models (MLLMs) and visual vector recall. This capability is designed for shelf and floor display inspection scenarios in offline retail and channel stores. The service first uses an MLLM to detect the bounding boxes and preliminary names of each product in real-world shelf and floor display photos, and then performs similarity recall against a customer-specific SKU vector database, enabling an exact match for each product to the customer\\"s own SKUs. It outputs item-by-item structured results that can be directly integrated with business systems. This service is suitable for large-scale, highly concurrent visual recognition pipelines such as remote auditing of offline store displays by headquarters, SKU distribution verification, and display compliance inspections.
   * 
   * @remarks
   * ## **Product Introduction**
   * Display detection is an intelligent recognition capability for store product displays built on multimodal large language models (MLLMs) and visual vector recall. It is designed for shelf and floor display inspection scenarios in offline retail and channel stores. For real-world shelf and floor display photos taken in stores, the service first uses an MLLM to detect the bounding boxes and preliminary names of each product, and then performs similarity recall against a customer-specific SKU vector database, enabling an exact match for each product to the customer\\"s own SKUs. It outputs item-by-item structured results that can be directly integrated with business systems. This service is suitable for large-scale, highly concurrent visual recognition pipelines such as remote auditing of offline store displays by headquarters, SKU distribution verification, and display compliance inspections.
   * ## **Scenarios**
   * -   **Shelf and floor display recognition and inventory**: Recognizes each product in a shelf or floor display image and matches it to the customer\\"s SKU database. It outputs an item-by-item list (product name, location, and similarity score) to replace manual item-by-item counting.
   *     
   * -   **Distribution verification and SKU compliance**: Verifies whether stores display specified SKUs as required by headquarters, and checks for out-of-stock or misplaced items. This supports batch automatic verification during sales promotions or new product launches.
   *     
   * -   **Customer-specific SKU database**: Customers can upload their own standard SKU images to create a dedicated vector database (isolated by RagId). During recognition, retrieval is performed only within this customer\\"s database to ensure accurate naming and data isolation between customers.
   * ## **Features**
   * -   **Two-stage collaboration of detection and retrieval**: The MLLM detects the bounding box and preliminary name of each product in the entire image (semantic-level understanding, adapted for dense displays and partial occlusion). Then, visual embedding vectors are used to perform similarity retrieval within the customer\\"s SKU database. The preliminary name is replaced with the exact SKU name of the top-1 result, balancing the recall rate and naming accuracy.
   *     
   * -   **Isolated retrieval with dedicated vector databases**: A dedicated SKU vector database is maintained for each customer based on RagId. Recognition retrieves data only within the corresponding database, ensuring strict isolation between customers. Added or updated SKUs take effect in real time.
   *     
   * -   **Item-by-item structured output**: The output is unified as Result.Items[]. Each product independently provides the bounding box, retrieved SKU name, SKU code, and similarity score. This facilitates direct integration with downstream inventory and verification systems and supports case-level manual review and tracing.
   *     
   * -   **Supported input formats**: Currently supports image URLs accessible over the Internet or from OSS. A single shelf or floor display image is sufficient for recognition, and the output structure is unified.
   * 
   * @param request - MerchandisePlacementDetectionRequest
   * @returns MerchandisePlacementDetectionResponse
   */
  async merchandisePlacementDetection(request: $_model.MerchandisePlacementDetectionRequest): Promise<$_model.MerchandisePlacementDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.merchandisePlacementDetectionWithOptions(request, runtime);
  }

  /**
   * Detects product displays in photos of shelves, endcaps, freezers, display stands, and dump bins by using product SKU recognition and multimodal large model grounding, aggregates product locations by SKU, and supplements the results with visible single-item grounding and short names to facilitate product location display, inventory counting, and distribution verification.
   * 
   * @remarks
   * ## Scenarios
   * - Display inventory: Aggregates recognized product bounding boxes by SKU for business system statistics.
   * - Distribution checklist verification: Compares the recognized SKU list with the target checklist on the business side.
   * - Single-item location review: Assists in checking recognition results by combining product bounding boxes and visible names.
   * ## Features
   * - Aggregation by SKU: Aggregates multiple bounding boxes for the same SkuId in Products, and returns a deduplicated list of SKU codes in skuIds.
   * - Supplementary single-item grounding: The multimodal model locates each recognizable sales package and provides a confirmable short name.
   * - Independent use of two result sets: Products comes from SKU recognition, and grounding comes from supplementary grounding. Grounding does not return SKU codes and does not guarantee item-by-item correspondence with Products.
   * - Supports a single HTTPS image as input. Supplementary grounding returns up to 12 targets. Each target includes a category, a bounding box, and visible text of up to 24 characters. The coverage field indicates whether the grounding is complete.
   * 
   * @param request - MerchandisePlacementDetectionLiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MerchandisePlacementDetectionLiteResponse
   */
  async merchandisePlacementDetectionLiteWithOptions(request: $_model.MerchandisePlacementDetectionLiteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MerchandisePlacementDetectionLiteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MerchandisePlacementDetectionLite",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MerchandisePlacementDetectionLiteResponse>(await this.callApi(params, req, runtime), new $_model.MerchandisePlacementDetectionLiteResponse({}));
  }

  /**
   * Detects product displays in photos of shelves, endcaps, freezers, display stands, and dump bins by using product SKU recognition and multimodal large model grounding, aggregates product locations by SKU, and supplements the results with visible single-item grounding and short names to facilitate product location display, inventory counting, and distribution verification.
   * 
   * @remarks
   * ## Scenarios
   * - Display inventory: Aggregates recognized product bounding boxes by SKU for business system statistics.
   * - Distribution checklist verification: Compares the recognized SKU list with the target checklist on the business side.
   * - Single-item location review: Assists in checking recognition results by combining product bounding boxes and visible names.
   * ## Features
   * - Aggregation by SKU: Aggregates multiple bounding boxes for the same SkuId in Products, and returns a deduplicated list of SKU codes in skuIds.
   * - Supplementary single-item grounding: The multimodal model locates each recognizable sales package and provides a confirmable short name.
   * - Independent use of two result sets: Products comes from SKU recognition, and grounding comes from supplementary grounding. Grounding does not return SKU codes and does not guarantee item-by-item correspondence with Products.
   * - Supports a single HTTPS image as input. Supplementary grounding returns up to 12 targets. Each target includes a category, a bounding box, and visible text of up to 24 characters. The coverage field indicates whether the grounding is complete.
   * 
   * @param request - MerchandisePlacementDetectionLiteRequest
   * @returns MerchandisePlacementDetectionLiteResponse
   */
  async merchandisePlacementDetectionLite(request: $_model.MerchandisePlacementDetectionLiteRequest): Promise<$_model.MerchandisePlacementDetectionLiteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.merchandisePlacementDetectionLiteWithOptions(request, runtime);
  }

  /**
   * Detects the positions and names of visible products in an image. Built on a dedicated visual model, this product display detection service supports default recognition rules for the Genki Forest business type and allows the caller to invoke custom rules. It outputs the position and name of each product, and is applicable to beverage display inspection and product positioning.
   * 
   * @remarks
   * ## Scenarios
   * - Beverage display recognition: Uses the default rules for the Genki Forest business type to recognize visible beverage products.
   * - Custom detection rules: Specifies a product recognition task that meets output constraints by using the rule parameter.
   * - Product positioning display: Uses the name and bounding box of each product for display, statistics, or manual review.
   * ## Features
   * - Direct product recognition: Outputs a bounding box and a name for each product. If the name cannot be determined, unknown is returned.
   * - Two rule entries: A non-empty rule takes precedence. If no valid rule is provided, the type must be Genki Forest.
   * - Unified result validation: Converts bounding box coordinates to integers and limits them to 0-1000, and swaps reverse coordinates. Uses unknown when the name is missing. The entire batch fails if any item is not a valid product object, the bounding box is invalid, or the bounding box has no area.
   * - Result scope: Currently outputs the detected names and positions, and does not include vector database recall, SKU codes, or similarity scores.
   * 
   * @param request - MerchandisePlacementDetectionProRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MerchandisePlacementDetectionProResponse
   */
  async merchandisePlacementDetectionProWithOptions(request: $_model.MerchandisePlacementDetectionProRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MerchandisePlacementDetectionProResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MerchandisePlacementDetectionPro",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MerchandisePlacementDetectionProResponse>(await this.callApi(params, req, runtime), new $_model.MerchandisePlacementDetectionProResponse({}));
  }

  /**
   * Detects the positions and names of visible products in an image. Built on a dedicated visual model, this product display detection service supports default recognition rules for the Genki Forest business type and allows the caller to invoke custom rules. It outputs the position and name of each product, and is applicable to beverage display inspection and product positioning.
   * 
   * @remarks
   * ## Scenarios
   * - Beverage display recognition: Uses the default rules for the Genki Forest business type to recognize visible beverage products.
   * - Custom detection rules: Specifies a product recognition task that meets output constraints by using the rule parameter.
   * - Product positioning display: Uses the name and bounding box of each product for display, statistics, or manual review.
   * ## Features
   * - Direct product recognition: Outputs a bounding box and a name for each product. If the name cannot be determined, unknown is returned.
   * - Two rule entries: A non-empty rule takes precedence. If no valid rule is provided, the type must be Genki Forest.
   * - Unified result validation: Converts bounding box coordinates to integers and limits them to 0-1000, and swaps reverse coordinates. Uses unknown when the name is missing. The entire batch fails if any item is not a valid product object, the bounding box is invalid, or the bounding box has no area.
   * - Result scope: Currently outputs the detected names and positions, and does not include vector database recall, SKU codes, or similarity scores.
   * 
   * @param request - MerchandisePlacementDetectionProRequest
   * @returns MerchandisePlacementDetectionProResponse
   */
  async merchandisePlacementDetectionPro(request: $_model.MerchandisePlacementDetectionProRequest): Promise<$_model.MerchandisePlacementDetectionProResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.merchandisePlacementDetectionProWithOptions(request, runtime);
  }

  /**
   * Detects display price tags based on price tag recognition and multimodal large model grounding. This operation extracts product information, selling prices, original prices, and locations from price tags, and provides visible bounding boxes for paper price tags, electronic price tags, and promotional price tags. It is applicable to store price collection, price tag inspection, and business-side price verification.
   * 
   * @remarks
   * ## Scenarios
   * - Store price collection: Reads and recognizes the selling prices and available original prices of price tags.
   * - Price execution verification: Compares the recognized prices with the business-side price list.
   * - Manual price tag review: Locates paper, electronic, and promotional price tags for easy review of the original images.
   * ## Features
   * - Structured price output: Returns the product name, code, price, and location item by item. Prices are retained as strings.
   * - Multi-type price tag grounding: Covers ordinary paper price tags, electronic price tags, and promotional tags with clear selling prices.
   * - Original text and location-assisted review: Prioritizes extracting clear selling prices based on located text. Leaves the field empty if the text is unreadable. Supplementary grounding does not infer that a price tag necessarily corresponds to a specific SKU based on its location.
   * - Supports single HTTPS image input. Supplementary grounding returns up to 12 targets. Each target includes a category, a bounding box, and up to 24 characters of visible text, and uses the coverage field to indicate whether the grounding is complete.
   * 
   * @param request - MerchandisePriceTagDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MerchandisePriceTagDetectionResponse
   */
  async merchandisePriceTagDetectionWithOptions(request: $_model.MerchandisePriceTagDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MerchandisePriceTagDetectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MerchandisePriceTagDetection",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MerchandisePriceTagDetectionResponse>(await this.callApi(params, req, runtime), new $_model.MerchandisePriceTagDetectionResponse({}));
  }

  /**
   * Detects display price tags based on price tag recognition and multimodal large model grounding. This operation extracts product information, selling prices, original prices, and locations from price tags, and provides visible bounding boxes for paper price tags, electronic price tags, and promotional price tags. It is applicable to store price collection, price tag inspection, and business-side price verification.
   * 
   * @remarks
   * ## Scenarios
   * - Store price collection: Reads and recognizes the selling prices and available original prices of price tags.
   * - Price execution verification: Compares the recognized prices with the business-side price list.
   * - Manual price tag review: Locates paper, electronic, and promotional price tags for easy review of the original images.
   * ## Features
   * - Structured price output: Returns the product name, code, price, and location item by item. Prices are retained as strings.
   * - Multi-type price tag grounding: Covers ordinary paper price tags, electronic price tags, and promotional tags with clear selling prices.
   * - Original text and location-assisted review: Prioritizes extracting clear selling prices based on located text. Leaves the field empty if the text is unreadable. Supplementary grounding does not infer that a price tag necessarily corresponds to a specific SKU based on its location.
   * - Supports single HTTPS image input. Supplementary grounding returns up to 12 targets. Each target includes a category, a bounding box, and up to 24 characters of visible text, and uses the coverage field to indicate whether the grounding is complete.
   * 
   * @param request - MerchandisePriceTagDetectionRequest
   * @returns MerchandisePriceTagDetectionResponse
   */
  async merchandisePriceTagDetection(request: $_model.MerchandisePriceTagDetectionRequest): Promise<$_model.MerchandisePriceTagDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.merchandisePriceTagDetectionWithOptions(request, runtime);
  }

  /**
   * Detects store displays based on display scene recognition and holistic positioning of multimodal large models. Identifies display areas such as shelves, refrigerators, and floor displays, outputs available scene names, locations, and display metrics, and supplements overall facility bounding boxes for display facility inspection, area visualization, and display metric verification.
   * 
   * @remarks
   * ## Scenarios
   * - Display facility inspection: Identifies facilities such as shelves, endcaps, floor displays, upright refrigerators, and chest freezers.
   * - Display metric verification: Reads active metrics such as proportion, purity, and fullness for further evaluation by business systems.
   * - Display area visualization: Displays area locations and overall facility bounding boxes on the original image.
   * ## Features
   * - Scene structured output: Returns scene names, center points, area contours, and active metrics.
   * - Holistic facility positioning: Uses one bounding box for an independent facility or promotional display, which is suitable for overall area review.
   * - Retains two types of coordinates: The positions in scenes retain the original normalization coordinates of the recognition service, while grounding uses 0-1000 integer bounding boxes.
   * - Supports single HTTPS image input. The supplementary positioning returns up to 12 targets. Each target includes a category, a bounding box, and up to 24 characters of visible text, and uses coverage to indicate whether the positioning is complete.
   * 
   * @param request - MerchandiseSceneDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MerchandiseSceneDetectionResponse
   */
  async merchandiseSceneDetectionWithOptions(request: $_model.MerchandiseSceneDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MerchandiseSceneDetectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MerchandiseSceneDetection",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MerchandiseSceneDetectionResponse>(await this.callApi(params, req, runtime), new $_model.MerchandiseSceneDetectionResponse({}));
  }

  /**
   * Detects store displays based on display scene recognition and holistic positioning of multimodal large models. Identifies display areas such as shelves, refrigerators, and floor displays, outputs available scene names, locations, and display metrics, and supplements overall facility bounding boxes for display facility inspection, area visualization, and display metric verification.
   * 
   * @remarks
   * ## Scenarios
   * - Display facility inspection: Identifies facilities such as shelves, endcaps, floor displays, upright refrigerators, and chest freezers.
   * - Display metric verification: Reads active metrics such as proportion, purity, and fullness for further evaluation by business systems.
   * - Display area visualization: Displays area locations and overall facility bounding boxes on the original image.
   * ## Features
   * - Scene structured output: Returns scene names, center points, area contours, and active metrics.
   * - Holistic facility positioning: Uses one bounding box for an independent facility or promotional display, which is suitable for overall area review.
   * - Retains two types of coordinates: The positions in scenes retain the original normalization coordinates of the recognition service, while grounding uses 0-1000 integer bounding boxes.
   * - Supports single HTTPS image input. The supplementary positioning returns up to 12 targets. Each target includes a category, a bounding box, and up to 24 characters of visible text, and uses coverage to indicate whether the positioning is complete.
   * 
   * @param request - MerchandiseSceneDetectionRequest
   * @returns MerchandiseSceneDetectionResponse
   */
  async merchandiseSceneDetection(request: $_model.MerchandiseSceneDetectionRequest): Promise<$_model.MerchandiseSceneDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.merchandiseSceneDetectionWithOptions(request, runtime);
  }

  /**
   * Detects recaptured images of milk powder can bottom codes and localizes elements based on recapture recognition and multimodal large model capabilities. The operation determines whether an uploaded photo is recaptured and localizes visible milk powder products, can bottoms, and bottom code areas. It applies to milk powder channel inspections, bottom code photo reviews, and manual verifications.
   * 
   * @remarks
   * ## Features
   * - Recapture binary classification: isFake=true indicates a recaptured image, and false indicates a non-recaptured image. Element localization is performed for both results.
   * - Milk powder subject and bottom code localization: Prioritizes the localization of the milk powder subject. Adds bounding boxes for the can bottom, spray code, batch code, or traceability code areas when they are clear.
   * - Visible information output: Outputs only confirmed short names or text without guessing blurred code values. Localization results do not change the recapture conclusion.
   * - Supports a single HTTPS image input. Supplementary localization returns up to 12 targets. Each target includes a category, a bounding box, and up to 24 characters of visible text. The coverage field indicates whether the localization is complete.
   * ## Scenarios
   * - Bottom code photo review: Determines whether a photo of a milk powder can bottom code has a recapture risk.
   * - Milk powder product inspection: Localizes canned, boxed, or bagged milk powder, as well as clearly visible can bottoms and bottom codes.
   * - Review result playback: Displays target bounding boxes on the original image to assist personnel in verifying the photo content.
   * 
   * @param request - MilkPowderCanBottomCodeRephotographyDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MilkPowderCanBottomCodeRephotographyDetectionResponse
   */
  async milkPowderCanBottomCodeRephotographyDetectionWithOptions(request: $_model.MilkPowderCanBottomCodeRephotographyDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MilkPowderCanBottomCodeRephotographyDetectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MilkPowderCanBottomCodeRephotographyDetection",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MilkPowderCanBottomCodeRephotographyDetectionResponse>(await this.callApi(params, req, runtime), new $_model.MilkPowderCanBottomCodeRephotographyDetectionResponse({}));
  }

  /**
   * Detects recaptured images of milk powder can bottom codes and localizes elements based on recapture recognition and multimodal large model capabilities. The operation determines whether an uploaded photo is recaptured and localizes visible milk powder products, can bottoms, and bottom code areas. It applies to milk powder channel inspections, bottom code photo reviews, and manual verifications.
   * 
   * @remarks
   * ## Features
   * - Recapture binary classification: isFake=true indicates a recaptured image, and false indicates a non-recaptured image. Element localization is performed for both results.
   * - Milk powder subject and bottom code localization: Prioritizes the localization of the milk powder subject. Adds bounding boxes for the can bottom, spray code, batch code, or traceability code areas when they are clear.
   * - Visible information output: Outputs only confirmed short names or text without guessing blurred code values. Localization results do not change the recapture conclusion.
   * - Supports a single HTTPS image input. Supplementary localization returns up to 12 targets. Each target includes a category, a bounding box, and up to 24 characters of visible text. The coverage field indicates whether the localization is complete.
   * ## Scenarios
   * - Bottom code photo review: Determines whether a photo of a milk powder can bottom code has a recapture risk.
   * - Milk powder product inspection: Localizes canned, boxed, or bagged milk powder, as well as clearly visible can bottoms and bottom codes.
   * - Review result playback: Displays target bounding boxes on the original image to assist personnel in verifying the photo content.
   * 
   * @param request - MilkPowderCanBottomCodeRephotographyDetectionRequest
   * @returns MilkPowderCanBottomCodeRephotographyDetectionResponse
   */
  async milkPowderCanBottomCodeRephotographyDetection(request: $_model.MilkPowderCanBottomCodeRephotographyDetectionRequest): Promise<$_model.MilkPowderCanBottomCodeRephotographyDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.milkPowderCanBottomCodeRephotographyDetectionWithOptions(request, runtime);
  }

  /**
   * Analyzes milk powder box code images for channel inspection by using recapture detection and multimodal large model element grounding. Outputs non-recapture, recapture, or suspected recapture conclusions, and locates visible milk powder products, outer boxes, and code areas to provide a structured basis for photo review and manual verification.
   * 
   * @remarks
   * ## Features
   * - Three-state recapture detection: When photoStatus is 0, 1, or 2, it indicates non-recapture, recapture, or suspected recapture, respectively. The operation also outputs isFake, isSuspect, and score.
   * - Subject and code area grounding: Prioritizes grounding of individual milk powder products and outer boxes, and supplements clear box codes, barcodes, and QR code areas. If no box code is present, the milk powder subject can still be grounded.
   * - Result synergy: Element grounding supplements visible targets without changing the recapture detection conclusion. It does not decode QR codes or provide product authenticity verification.
   * - Supports a single HTTPS image as input. The supplementary grounding returns up to 12 targets, each containing a category, bounding box, and up to 24 characters of visible text. The coverage field indicates whether the grounding is complete.
   * ## Scenarios
   * - Box code photo review: Checks milk powder outer box photos uploaded by stores or channels for recapture risks.
   * - Milk powder display inspection: Locates visible individual milk powder products, full boxes, and clear code areas in photos.
   * - Suspected sample review: Filters images that require manual verification based on the suspected status, algorithm score, and bounding boxes.
   * 
   * @param request - MilkPowderCartonCodeRephotographyDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MilkPowderCartonCodeRephotographyDetectionResponse
   */
  async milkPowderCartonCodeRephotographyDetectionWithOptions(request: $_model.MilkPowderCartonCodeRephotographyDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MilkPowderCartonCodeRephotographyDetectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MilkPowderCartonCodeRephotographyDetection",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MilkPowderCartonCodeRephotographyDetectionResponse>(await this.callApi(params, req, runtime), new $_model.MilkPowderCartonCodeRephotographyDetectionResponse({}));
  }

  /**
   * Analyzes milk powder box code images for channel inspection by using recapture detection and multimodal large model element grounding. Outputs non-recapture, recapture, or suspected recapture conclusions, and locates visible milk powder products, outer boxes, and code areas to provide a structured basis for photo review and manual verification.
   * 
   * @remarks
   * ## Features
   * - Three-state recapture detection: When photoStatus is 0, 1, or 2, it indicates non-recapture, recapture, or suspected recapture, respectively. The operation also outputs isFake, isSuspect, and score.
   * - Subject and code area grounding: Prioritizes grounding of individual milk powder products and outer boxes, and supplements clear box codes, barcodes, and QR code areas. If no box code is present, the milk powder subject can still be grounded.
   * - Result synergy: Element grounding supplements visible targets without changing the recapture detection conclusion. It does not decode QR codes or provide product authenticity verification.
   * - Supports a single HTTPS image as input. The supplementary grounding returns up to 12 targets, each containing a category, bounding box, and up to 24 characters of visible text. The coverage field indicates whether the grounding is complete.
   * ## Scenarios
   * - Box code photo review: Checks milk powder outer box photos uploaded by stores or channels for recapture risks.
   * - Milk powder display inspection: Locates visible individual milk powder products, full boxes, and clear code areas in photos.
   * - Suspected sample review: Filters images that require manual verification based on the suspected status, algorithm score, and bounding boxes.
   * 
   * @param request - MilkPowderCartonCodeRephotographyDetectionRequest
   * @returns MilkPowderCartonCodeRephotographyDetectionResponse
   */
  async milkPowderCartonCodeRephotographyDetection(request: $_model.MilkPowderCartonCodeRephotographyDetectionRequest): Promise<$_model.MilkPowderCartonCodeRephotographyDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.milkPowderCartonCodeRephotographyDetectionWithOptions(request, runtime);
  }

  /**
   * An intelligent logistics parcel review product built on the collaboration of a multimodal large language model (MLLM) and dedicated vision algorithms. It targets automated compliance review for the "piece-weight-dimension" stage in e-commerce logistics. The product performs structured review across multiple dimensions, including bounding box validity, bounding box fit, and foreign object interference for parcels on scanning platforms. It supports different hardware capture scenarios such as white and green background boards, and outputs Boolean review conclusions with Chinese-language reason descriptions that can be directly integrated with business systems. It is suitable for large-scale, high-concurrency inbound quality inspection pipelines.
   * 
   * @remarks
   * ## Product Introduction
   * An intelligent logistics parcel review product built on the collaboration of a multimodal large language model (MLLM) and dedicated vision algorithms. It targets automated compliance review for the "piece-weight-dimension" stage in e-commerce logistics. The product performs structured review across multiple dimensions, including **bounding box validity, bounding box fit, and foreign object interference** for parcels on scanning platforms. It supports different hardware capture scenarios such as white and green background boards, and outputs Boolean review conclusions with Chinese-language reason descriptions that can be directly integrated with business systems. It is suitable for large-scale, high-concurrency inbound quality inspection pipelines.
   * ## Scenarios
   * 1. **Parcel bounding box review**: Automatically determines whether the operator\\"s manual bounding box constitutes the "minimum effective border rectangle" for the parcel, and identifies typical issues such as oversized or undersized bounding boxes.
   * 2. **Foreign object interference detection**: Automatically detects whether non-target objects such as fingers, keyboards, or supporting tools are present in the scanning area.
   * 3. **Multi-capture environment adaptation**: A single API can handle two common capture patterns — white background board (blue box) and green background board (blue box \\+ red box) — without requiring the caller to distinguish between scenarios.
   * 4. **Inbound quality inspection pipeline**: Used for automated compliance review in the piece-weight-dimension stage of the logistics warehouse new product inbound SOP, as a replacement for or supplement to outsourced manual review.
   * The product is also applicable to general image "box-subject" relationship review scenarios, such as product photo material review and document scan quality verification.
   * ## Features
   * 1. **Multi-scenario intelligent routing**: The product has built-in scenario classification capabilities. It automatically identifies the background type (white/green) and bounding box type (none/single box/double box) in the image, and routes the request to the corresponding review sub-process. The caller only needs to pass in the image URL without manually specifying the scenario.
   * 2. **MLLM + dedicated CV model collaboration**: A multimodal large language model performs semantic-level scenario understanding and foreign object recognition, while a dedicated parcel segmentation and IoU evaluation model performs pixel-level bounding box fit quantification. This ensures accuracy while controlling inference latency and cost.
   * 3. **Structured review conclusions**: The output is unified as a `result` (Boolean) \\+ `info` (Chinese-language reason) structure. Supported reason types include "审核通过" (review passed), "审核不通过:框选过大" (review failed: bounding box too large), "审核不通过:框选过小" (review failed: bounding box too small), and "审核不通过:存在异物" (review failed: foreign object detected), enabling direct integration with downstream business systems.
   * 4. **Supported input formats**: Currently supports publicly accessible image URLs.
   * 
   * @param request - PackageWeightSizeCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PackageWeightSizeCheckResponse
   */
  async packageWeightSizeCheckWithOptions(request: $_model.PackageWeightSizeCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PackageWeightSizeCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.annotatedImageUrl)) {
      query["AnnotatedImageUrl"] = request.annotatedImageUrl;
    }

    if (!$dara.isNull(request.rawImageUrl)) {
      query["RawImageUrl"] = request.rawImageUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PackageWeightSizeCheck",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PackageWeightSizeCheckResponse>(await this.callApi(params, req, runtime), new $_model.PackageWeightSizeCheckResponse({}));
  }

  /**
   * An intelligent logistics parcel review product built on the collaboration of a multimodal large language model (MLLM) and dedicated vision algorithms. It targets automated compliance review for the "piece-weight-dimension" stage in e-commerce logistics. The product performs structured review across multiple dimensions, including bounding box validity, bounding box fit, and foreign object interference for parcels on scanning platforms. It supports different hardware capture scenarios such as white and green background boards, and outputs Boolean review conclusions with Chinese-language reason descriptions that can be directly integrated with business systems. It is suitable for large-scale, high-concurrency inbound quality inspection pipelines.
   * 
   * @remarks
   * ## Product Introduction
   * An intelligent logistics parcel review product built on the collaboration of a multimodal large language model (MLLM) and dedicated vision algorithms. It targets automated compliance review for the "piece-weight-dimension" stage in e-commerce logistics. The product performs structured review across multiple dimensions, including **bounding box validity, bounding box fit, and foreign object interference** for parcels on scanning platforms. It supports different hardware capture scenarios such as white and green background boards, and outputs Boolean review conclusions with Chinese-language reason descriptions that can be directly integrated with business systems. It is suitable for large-scale, high-concurrency inbound quality inspection pipelines.
   * ## Scenarios
   * 1. **Parcel bounding box review**: Automatically determines whether the operator\\"s manual bounding box constitutes the "minimum effective border rectangle" for the parcel, and identifies typical issues such as oversized or undersized bounding boxes.
   * 2. **Foreign object interference detection**: Automatically detects whether non-target objects such as fingers, keyboards, or supporting tools are present in the scanning area.
   * 3. **Multi-capture environment adaptation**: A single API can handle two common capture patterns — white background board (blue box) and green background board (blue box \\+ red box) — without requiring the caller to distinguish between scenarios.
   * 4. **Inbound quality inspection pipeline**: Used for automated compliance review in the piece-weight-dimension stage of the logistics warehouse new product inbound SOP, as a replacement for or supplement to outsourced manual review.
   * The product is also applicable to general image "box-subject" relationship review scenarios, such as product photo material review and document scan quality verification.
   * ## Features
   * 1. **Multi-scenario intelligent routing**: The product has built-in scenario classification capabilities. It automatically identifies the background type (white/green) and bounding box type (none/single box/double box) in the image, and routes the request to the corresponding review sub-process. The caller only needs to pass in the image URL without manually specifying the scenario.
   * 2. **MLLM + dedicated CV model collaboration**: A multimodal large language model performs semantic-level scenario understanding and foreign object recognition, while a dedicated parcel segmentation and IoU evaluation model performs pixel-level bounding box fit quantification. This ensures accuracy while controlling inference latency and cost.
   * 3. **Structured review conclusions**: The output is unified as a `result` (Boolean) \\+ `info` (Chinese-language reason) structure. Supported reason types include "审核通过" (review passed), "审核不通过:框选过大" (review failed: bounding box too large), "审核不通过:框选过小" (review failed: bounding box too small), and "审核不通过:存在异物" (review failed: foreign object detected), enabling direct integration with downstream business systems.
   * 4. **Supported input formats**: Currently supports publicly accessible image URLs.
   * 
   * @param request - PackageWeightSizeCheckRequest
   * @returns PackageWeightSizeCheckResponse
   */
  async packageWeightSizeCheck(request: $_model.PackageWeightSizeCheckRequest): Promise<$_model.PackageWeightSizeCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.packageWeightSizeCheckWithOptions(request, runtime);
  }

  /**
   * 宠物健康分析
   * 
   * @param tmpReq - PetHealthAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PetHealthAnalysisResponse
   */
  async petHealthAnalysisWithOptions(tmpReq: $_model.PetHealthAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PetHealthAnalysisResponse> {
    tmpReq.validate();
    let request = new $_model.PetHealthAnalysisShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.imageUrl)) {
      request.imageUrlShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageUrl, "ImageUrl", "json");
    }

    let query = { };
    if (!$dara.isNull(request.imageUrlShrink)) {
      query["ImageUrl"] = request.imageUrlShrink;
    }

    if (!$dara.isNull(request.systemPrompt)) {
      query["SystemPrompt"] = request.systemPrompt;
    }

    if (!$dara.isNull(request.userPrompt)) {
      query["UserPrompt"] = request.userPrompt;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PetHealthAnalysis",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PetHealthAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.PetHealthAnalysisResponse({}));
  }

  /**
   * 宠物健康分析
   * 
   * @param request - PetHealthAnalysisRequest
   * @returns PetHealthAnalysisResponse
   */
  async petHealthAnalysis(request: $_model.PetHealthAnalysisRequest): Promise<$_model.PetHealthAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.petHealthAnalysisWithOptions(request, runtime);
  }

  /**
   * Provides Maas-MT, an e-commerce translation model trained on over 1 billion high-quality bilingual sentence pairs, which is continuously optimized for e-commerce-specific terms such as brands, models, materials, and attributes. Supports translation across more than 400 language pairs, including bridged pairs, with a focus on Chinese-English, Chinese-multilingual, and English-multilingual translations. Supports language detection for 24 language pairs and automatically detects the source language if it is not specified.
   * 
   * @remarks
   * ## Product introduction
   * Marco MT is an e-commerce translation model trained on over 1 billion high-quality bilingual sentence pairs, continuously optimized for e-commerce-specific terms such as brands, models, materials, and attributes. It supports translation across more than 100 language pairs, including bridged pairs, especially between Chinese and English, Chinese and multiple languages, and English and multiple languages. It supports language detection for 24 language pairs and automatically detects the source language if it is not specified.
   * ## Scenarios
   * - Product titles: Marco MT large model translation can accurately translate phrases, keywords, and trending words in product titles into the target language, increasing product exposure on e-commerce platforms.
   * - Product descriptions: Product descriptions are generally long and have diverse and complex formats. Marco MT large model translation supports long-text translation and HTML format, delivering excellent translation quality and format restoration.
   * - Product attributes: Product attribute terms are short and contain e-commerce-specific words, such as models and parameters.
   * - Customer service conversations: In customer service scenarios, it can optimize issues such as missing context and typos, and supports polite expressions in some language pairs.
   * Additionally, Marco MT large model translation can also be used for translation in general scenarios, such as office work, meetings, and daily conversations.
   * ## Features
   * - **Supported language pairs**: Marco MT large model translation supports translation between more than 100 languages and language detection for 23 languages. For specific language pairs, refer to the language mapping table in Section 5.6.
   * - **Ultra-low hallucination rate and high-speed inference**: Marco MT large model translation is a large language model aligned with preferences for translation scenarios. Compared with general large language models, it features faster translation inference speed and an extremely low hallucination rate, making it especially suitable for large-scale invocation scenarios.
   * - **Supported text formats**: Currently supports text and HTML formats.
   * - **Translation intervention**: Supports custom translation results, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and skip translation (ABC-null). This is commonly used for brand word protection. You only need to pass the corresponding intervention glossary ID when calling the API. This meets your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention terms. If you need more, contact the platform.
   * ## Translation quality comparison
   * | **Source text** | **Aidge translation** | **Other translation product 1** | **Other translation product 2** | **Aidge translation advantages** |
   * |----------|---------------|-----------------------|-----------------------|---------------------|
   * | 75mm 4Pin 0.38A GA81S2U 12V GTX 960 Cooling Fan for Zotac GTX960 Graphics Card Cooling Fan | 75mm 4Pin 0.38A GA81S2U 12V GTX 960, ventilador de enfriamiento para tarjeta gráfica Zotac GTX960. | Ventilador de refrigeración de 75mm 4Pin 0.38A GA81S2U 12V para la tarjeta gráfica Zotac GTX960 Ventilador de enfriamiento GTX 960. | Ventilador de refrigeración para tarjeta gráfica Zotac GTX960, 75mm, 4 pines, 0,38A, GA81S2U, 12V, GTX 960 | Clearer product subject |
   * | New Arrival Classic Style Luxury Brand 6 Hands Swiss Automatic Mechanical Men\\"s Business Steel Watch | Nueva llegada, reloj mecánico automático de lujo con 6 manecillas, estilo clásico, de acero para hombres de negocios | Nueva Llegada Reloj De Acero de Negocios para Hombre con Mecanismo Automático Suizo y 6 Agujas de Estilo Clásico de Marca de Lujo. | Reloj de acero de negocios para hombre, mecánico automático suizo, marca de lujo, estilo clásico, 6 manos, nueva llegada | More complete sentence structure, clearer expression, and more reasonable punctuation |
   * | Men Key Bag Genuine Cow Leather Buckets Key Cases Pouch Zipper Keychain Auto Car Key Case Women Home Key Holder Wallet | Sac à clés pour hommes en cuir de vache véritable, étuis à clés, pochette à fermeture éclair, porte-clés, étui à clé de voiture, porte-clés pour femmes, organisateur de portefeuille | Porte-clés sac en cuir de vache véritable, étuis à clés en forme de seau, pochette à fermeture éclair, porte-clés auto pour voiture, étui à clés pour femmes, organisateur de clés de maison, portefeuille. | Hommes porte-clés en cuir de vache véritable sac/pochette fermature éclair porte-clés Auto voiture porte-clés femmes maison porte-clés organisateur portefeuille | Clearer and more explicit product subject expression, identifying it as a "key bag" rather than a "keychain", whereas other translations may cause ambiguity regarding the product subject |
   * 
   * @param tmpReq - PrepaidTextTranslateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PrepaidTextTranslateResponse
   */
  async prepaidTextTranslateWithOptions(tmpReq: $_model.PrepaidTextTranslateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PrepaidTextTranslateResponse> {
    tmpReq.validate();
    let request = new $_model.PrepaidTextTranslateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sourceTextList)) {
      request.sourceTextListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceTextList, "SourceTextList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!$dara.isNull(request.glossary)) {
      body["Glossary"] = request.glossary;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.sourceTextListShrink)) {
      body["SourceTextList"] = request.sourceTextListShrink;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.translateScene)) {
      body["TranslateScene"] = request.translateScene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PrepaidTextTranslate",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PrepaidTextTranslateResponse>(await this.callApi(params, req, runtime), new $_model.PrepaidTextTranslateResponse({}));
  }

  /**
   * Provides Maas-MT, an e-commerce translation model trained on over 1 billion high-quality bilingual sentence pairs, which is continuously optimized for e-commerce-specific terms such as brands, models, materials, and attributes. Supports translation across more than 400 language pairs, including bridged pairs, with a focus on Chinese-English, Chinese-multilingual, and English-multilingual translations. Supports language detection for 24 language pairs and automatically detects the source language if it is not specified.
   * 
   * @remarks
   * ## Product introduction
   * Marco MT is an e-commerce translation model trained on over 1 billion high-quality bilingual sentence pairs, continuously optimized for e-commerce-specific terms such as brands, models, materials, and attributes. It supports translation across more than 100 language pairs, including bridged pairs, especially between Chinese and English, Chinese and multiple languages, and English and multiple languages. It supports language detection for 24 language pairs and automatically detects the source language if it is not specified.
   * ## Scenarios
   * - Product titles: Marco MT large model translation can accurately translate phrases, keywords, and trending words in product titles into the target language, increasing product exposure on e-commerce platforms.
   * - Product descriptions: Product descriptions are generally long and have diverse and complex formats. Marco MT large model translation supports long-text translation and HTML format, delivering excellent translation quality and format restoration.
   * - Product attributes: Product attribute terms are short and contain e-commerce-specific words, such as models and parameters.
   * - Customer service conversations: In customer service scenarios, it can optimize issues such as missing context and typos, and supports polite expressions in some language pairs.
   * Additionally, Marco MT large model translation can also be used for translation in general scenarios, such as office work, meetings, and daily conversations.
   * ## Features
   * - **Supported language pairs**: Marco MT large model translation supports translation between more than 100 languages and language detection for 23 languages. For specific language pairs, refer to the language mapping table in Section 5.6.
   * - **Ultra-low hallucination rate and high-speed inference**: Marco MT large model translation is a large language model aligned with preferences for translation scenarios. Compared with general large language models, it features faster translation inference speed and an extremely low hallucination rate, making it especially suitable for large-scale invocation scenarios.
   * - **Supported text formats**: Currently supports text and HTML formats.
   * - **Translation intervention**: Supports custom translation results, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and skip translation (ABC-null). This is commonly used for brand word protection. You only need to pass the corresponding intervention glossary ID when calling the API. This meets your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention terms. If you need more, contact the platform.
   * ## Translation quality comparison
   * | **Source text** | **Aidge translation** | **Other translation product 1** | **Other translation product 2** | **Aidge translation advantages** |
   * |----------|---------------|-----------------------|-----------------------|---------------------|
   * | 75mm 4Pin 0.38A GA81S2U 12V GTX 960 Cooling Fan for Zotac GTX960 Graphics Card Cooling Fan | 75mm 4Pin 0.38A GA81S2U 12V GTX 960, ventilador de enfriamiento para tarjeta gráfica Zotac GTX960. | Ventilador de refrigeración de 75mm 4Pin 0.38A GA81S2U 12V para la tarjeta gráfica Zotac GTX960 Ventilador de enfriamiento GTX 960. | Ventilador de refrigeración para tarjeta gráfica Zotac GTX960, 75mm, 4 pines, 0,38A, GA81S2U, 12V, GTX 960 | Clearer product subject |
   * | New Arrival Classic Style Luxury Brand 6 Hands Swiss Automatic Mechanical Men\\"s Business Steel Watch | Nueva llegada, reloj mecánico automático de lujo con 6 manecillas, estilo clásico, de acero para hombres de negocios | Nueva Llegada Reloj De Acero de Negocios para Hombre con Mecanismo Automático Suizo y 6 Agujas de Estilo Clásico de Marca de Lujo. | Reloj de acero de negocios para hombre, mecánico automático suizo, marca de lujo, estilo clásico, 6 manos, nueva llegada | More complete sentence structure, clearer expression, and more reasonable punctuation |
   * | Men Key Bag Genuine Cow Leather Buckets Key Cases Pouch Zipper Keychain Auto Car Key Case Women Home Key Holder Wallet | Sac à clés pour hommes en cuir de vache véritable, étuis à clés, pochette à fermeture éclair, porte-clés, étui à clé de voiture, porte-clés pour femmes, organisateur de portefeuille | Porte-clés sac en cuir de vache véritable, étuis à clés en forme de seau, pochette à fermeture éclair, porte-clés auto pour voiture, étui à clés pour femmes, organisateur de clés de maison, portefeuille. | Hommes porte-clés en cuir de vache véritable sac/pochette fermature éclair porte-clés Auto voiture porte-clés femmes maison porte-clés organisateur portefeuille | Clearer and more explicit product subject expression, identifying it as a "key bag" rather than a "keychain", whereas other translations may cause ambiguity regarding the product subject |
   * 
   * @param request - PrepaidTextTranslateRequest
   * @returns PrepaidTextTranslateResponse
   */
  async prepaidTextTranslate(request: $_model.PrepaidTextTranslateRequest): Promise<$_model.PrepaidTextTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.prepaidTextTranslateWithOptions(request, runtime);
  }

  /**
   * Automatically identifies and locates specified products in an image based on a multimodal foundation model.
   * 
   * @remarks
   * ## Request description
   * **Before you use this operation, make sure that you fully understand the billing method and [pricing](https://www.aliyun.com/price/product#/ecs/detail) of the product hotzone recognition feature.**
   * This operation automatically identifies and locates specified products in a target scene image based on the provided target scene image and product reference images, and returns the product names and normalized bounding boxes. Each request accepts one target scene image and a set of product reference images. If the same case contains multiple target images, call this operation separately for each target image.
   * ### Precautions
   * - Image URLs must use HTTPS and must be accessible by the server.
   * - Common image formats such as JPEG, PNG, and WebP are supported.
   * - Each image should not exceed 2 MB.
   * - When using signed URLs, set the validity period to at least 30 minutes.
   * - If the same case contains multiple target scene images, call this operation separately for each target image. The reference image list can be reused.
   * 
   * @param tmpReq - ProductHotspotDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProductHotspotDetectionResponse
   */
  async productHotspotDetectionWithOptions(tmpReq: $_model.ProductHotspotDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ProductHotspotDetectionResponse> {
    tmpReq.validate();
    let request = new $_model.ProductHotspotDetectionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.referenceImageUrls)) {
      request.referenceImageUrlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceImageUrls, "ReferenceImageUrls", "json");
    }

    let query = { };
    if (!$dara.isNull(request.referenceImageUrlsShrink)) {
      query["ReferenceImageUrls"] = request.referenceImageUrlsShrink;
    }

    if (!$dara.isNull(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!$dara.isNull(request.targetImageUrl)) {
      query["TargetImageUrl"] = request.targetImageUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ProductHotspotDetection",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ProductHotspotDetectionResponse>(await this.callApi(params, req, runtime), new $_model.ProductHotspotDetectionResponse({}));
  }

  /**
   * Automatically identifies and locates specified products in an image based on a multimodal foundation model.
   * 
   * @remarks
   * ## Request description
   * **Before you use this operation, make sure that you fully understand the billing method and [pricing](https://www.aliyun.com/price/product#/ecs/detail) of the product hotzone recognition feature.**
   * This operation automatically identifies and locates specified products in a target scene image based on the provided target scene image and product reference images, and returns the product names and normalized bounding boxes. Each request accepts one target scene image and a set of product reference images. If the same case contains multiple target images, call this operation separately for each target image.
   * ### Precautions
   * - Image URLs must use HTTPS and must be accessible by the server.
   * - Common image formats such as JPEG, PNG, and WebP are supported.
   * - Each image should not exceed 2 MB.
   * - When using signed URLs, set the validity period to at least 30 minutes.
   * - If the same case contains multiple target scene images, call this operation separately for each target image. The reference image list can be reused.
   * 
   * @param request - ProductHotspotDetectionRequest
   * @returns ProductHotspotDetectionResponse
   */
  async productHotspotDetection(request: $_model.ProductHotspotDetectionRequest): Promise<$_model.ProductHotspotDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.productHotspotDetectionWithOptions(request, runtime);
  }

  /**
   * Generates a single-product showcase video for e-commerce merchants and platforms based on the product title and multiple images of the same product. This API optionally accepts a storyboard script, automatically selects reference images, plans a three-shot storyboard, and generates the video. It uses asynchronous tasks, supports 720p and 1080p resolutions and four aspect ratios, and is suitable for content production of non-apparel products. For apparel products, use the E-commerce Video Enhanced Edition.
   * 
   * @remarks
   * # Product introduction
   * The basic e-commerce video edition is designed for e-commerce merchants and platforms. It generates a single-product showcase video based on the product title and multiple images of the same product. You can optionally provide a storyboard script. The system automatically selects reference images, plans a three-shot storyboard, and generates the video. The API uses asynchronous tasks, supports 720p and 1080p resolutions and four aspect ratios, and is suitable for content production of non-apparel products. For apparel products, use the e-commerce enhanced edition.
   * # Scenarios
   * - New product material generation: Provide the product title and images to automatically plan storyboard shots such as product debut, details, or usage demonstrations.
   * - Video production with existing scripts: Provide a storyboard script or creative description. The system optimizes the storyboard script based on the product images and retains shot intentions that are supported by the images.
   * - Adaptation to different video placements: Use the aspect ratio parameter to adapt to vertical short videos, main product images, detail pages, and horizontal displays. For batch production, each request corresponds to one product and one video.
   * # Features
   * - Automatic image selection and storyboard planning: When no script is provided, the system generates a storyboard based on the product title and images. When a script is provided, the system still performs image selection and planning, eliminating the need for callers to organize video prompts.
   * - Product appearance consistency constraint: The system uses the selected complete product image as the appearance baseline. It checks the color scheme, structure, proportions, texture, version, and specifications of other images, and selects only reference images that can be confirmed to belong to the same SKU.
   * - Flexible video specifications: Without a script, the duration is 5 to 15 seconds. With a script, the duration is 5 to 30 seconds. The system supports four aspect ratios (16:9, 1:1, 3:4, and 9:16) and two resolutions (720p and 1080p).
   * - Asynchronous generation and task query: After a task is created, a task ID is returned. The caller queries the result by using the query API. The final video includes background music, no voiceover, and no additional subtitles or marketing text.
   * # Examples
   * [View the attachment "Digital_040_WiFi6_Gigabit_Router.mp4" in the DingTalk document.](https://alidocs.dingtalk.com/i/nodes/gwva2dxOW4vRkd9DUn1g1p6kJbkz3BRL?cid=6760411388:7016395022&corpId=dingd8e1123006514592&iframeQuery=anchorId%3DX02mvsyycduj3nepwoeush&utm_medium=im_card&utm_scene=person_space&utm_source=im)
   * 
   * @param tmpReq - ProductVideoGenerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProductVideoGenerationResponse
   */
  async productVideoGenerationWithOptions(tmpReq: $_model.ProductVideoGenerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ProductVideoGenerationResponse> {
    tmpReq.validate();
    let request = new $_model.ProductVideoGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.productImages)) {
      request.productImagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.productImages, "product_images", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aspectRatio)) {
      query["aspect_ratio"] = request.aspectRatio;
    }

    if (!$dara.isNull(request.duration)) {
      query["duration"] = request.duration;
    }

    if (!$dara.isNull(request.productImagesShrink)) {
      query["product_images"] = request.productImagesShrink;
    }

    if (!$dara.isNull(request.productTitle)) {
      query["product_title"] = request.productTitle;
    }

    if (!$dara.isNull(request.resolution)) {
      query["resolution"] = request.resolution;
    }

    if (!$dara.isNull(request.script)) {
      query["script"] = request.script;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ProductVideoGeneration",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ProductVideoGenerationResponse>(await this.callApi(params, req, runtime), new $_model.ProductVideoGenerationResponse({}));
  }

  /**
   * Generates a single-product showcase video for e-commerce merchants and platforms based on the product title and multiple images of the same product. This API optionally accepts a storyboard script, automatically selects reference images, plans a three-shot storyboard, and generates the video. It uses asynchronous tasks, supports 720p and 1080p resolutions and four aspect ratios, and is suitable for content production of non-apparel products. For apparel products, use the E-commerce Video Enhanced Edition.
   * 
   * @remarks
   * # Product introduction
   * The basic e-commerce video edition is designed for e-commerce merchants and platforms. It generates a single-product showcase video based on the product title and multiple images of the same product. You can optionally provide a storyboard script. The system automatically selects reference images, plans a three-shot storyboard, and generates the video. The API uses asynchronous tasks, supports 720p and 1080p resolutions and four aspect ratios, and is suitable for content production of non-apparel products. For apparel products, use the e-commerce enhanced edition.
   * # Scenarios
   * - New product material generation: Provide the product title and images to automatically plan storyboard shots such as product debut, details, or usage demonstrations.
   * - Video production with existing scripts: Provide a storyboard script or creative description. The system optimizes the storyboard script based on the product images and retains shot intentions that are supported by the images.
   * - Adaptation to different video placements: Use the aspect ratio parameter to adapt to vertical short videos, main product images, detail pages, and horizontal displays. For batch production, each request corresponds to one product and one video.
   * # Features
   * - Automatic image selection and storyboard planning: When no script is provided, the system generates a storyboard based on the product title and images. When a script is provided, the system still performs image selection and planning, eliminating the need for callers to organize video prompts.
   * - Product appearance consistency constraint: The system uses the selected complete product image as the appearance baseline. It checks the color scheme, structure, proportions, texture, version, and specifications of other images, and selects only reference images that can be confirmed to belong to the same SKU.
   * - Flexible video specifications: Without a script, the duration is 5 to 15 seconds. With a script, the duration is 5 to 30 seconds. The system supports four aspect ratios (16:9, 1:1, 3:4, and 9:16) and two resolutions (720p and 1080p).
   * - Asynchronous generation and task query: After a task is created, a task ID is returned. The caller queries the result by using the query API. The final video includes background music, no voiceover, and no additional subtitles or marketing text.
   * # Examples
   * [View the attachment "Digital_040_WiFi6_Gigabit_Router.mp4" in the DingTalk document.](https://alidocs.dingtalk.com/i/nodes/gwva2dxOW4vRkd9DUn1g1p6kJbkz3BRL?cid=6760411388:7016395022&corpId=dingd8e1123006514592&iframeQuery=anchorId%3DX02mvsyycduj3nepwoeush&utm_medium=im_card&utm_scene=person_space&utm_source=im)
   * 
   * @param request - ProductVideoGenerationRequest
   * @returns ProductVideoGenerationResponse
   */
  async productVideoGeneration(request: $_model.ProductVideoGenerationRequest): Promise<$_model.ProductVideoGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.productVideoGenerationWithOptions(request, runtime);
  }

  /**
   * Queries the result of an asynchronous task. The API name in the POP gateway is QueryAsyncTaskResult.
   * 
   * @remarks
   * The API name in the POP gateway is QueryAsyncTaskResult.
   * 
   * @param request - QueryAsyncTaskResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAsyncTaskResultResponse
   */
  async queryAsyncTaskResultWithOptions(request: $_model.QueryAsyncTaskResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAsyncTaskResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAsyncTaskResult",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAsyncTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.QueryAsyncTaskResultResponse({}));
  }

  /**
   * Queries the result of an asynchronous task. The API name in the POP gateway is QueryAsyncTaskResult.
   * 
   * @remarks
   * The API name in the POP gateway is QueryAsyncTaskResult.
   * 
   * @param request - QueryAsyncTaskResultRequest
   * @returns QueryAsyncTaskResultResponse
   */
  async queryAsyncTaskResult(request: $_model.QueryAsyncTaskResultRequest): Promise<$_model.QueryAsyncTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAsyncTaskResultWithOptions(request, runtime);
  }

  /**
   * Queries the display knowledge base content by using a paged query with paging (synchronization).
   * 
   * @param tmpReq - QueryDisplayKnowledgeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDisplayKnowledgeResponse
   */
  async queryDisplayKnowledgeWithOptions(tmpReq: $_model.QueryDisplayKnowledgeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDisplayKnowledgeResponse> {
    tmpReq.validate();
    let request = new $_model.QueryDisplayKnowledgeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.statuses)) {
      request.statusesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statuses, "Statuses", "json");
    }

    let query = { };
    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.ragId)) {
      query["RagId"] = request.ragId;
    }

    if (!$dara.isNull(request.skuId)) {
      query["SkuId"] = request.skuId;
    }

    if (!$dara.isNull(request.skuName)) {
      query["SkuName"] = request.skuName;
    }

    if (!$dara.isNull(request.statusesShrink)) {
      query["Statuses"] = request.statusesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDisplayKnowledge",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDisplayKnowledgeResponse>(await this.callApi(params, req, runtime), new $_model.QueryDisplayKnowledgeResponse({}));
  }

  /**
   * Queries the display knowledge base content by using a paged query with paging (synchronization).
   * 
   * @param request - QueryDisplayKnowledgeRequest
   * @returns QueryDisplayKnowledgeResponse
   */
  async queryDisplayKnowledge(request: $_model.QueryDisplayKnowledgeRequest): Promise<$_model.QueryDisplayKnowledgeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDisplayKnowledgeWithOptions(request, runtime);
  }

  /**
   * Detects whether an image contains a size chart. (Synchronous)
   * 
   * @remarks
   * # 1. Product Introduction
   * Detects whether an image contains a size chart. (Synchronous)
   * # 2. Common scenarios
   * **Batch processing scenario:** Detect images that contain size charts from a batch of images for further image translation or extraction. The size chart detection service helps reduce costs.
   * # 3. Features
   * The size chart detection service uses image recognition technology to automatically determine whether an input image contains size chart content. You provide an image URL, and the system returns a detection result (True/False) indicating whether the image is a size chart.
   * You can customize the confidence threshold (default: 0.4) and flexibly adjust the detection sensitivity based on your business precision requirements. A lower threshold results in more lenient detection, while a higher threshold results in stricter detection. The API processes a single image per request, making it suitable for integration into automated batch workflows for sequential invocation.
   * # 4. Effect comparison
   * | **Input image** | **Confidence** | **Output result** |
   * | --- | --- | --- |
   * | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4jKqm0bAebrKLnw1/img/0a914347-2acb-4b94-bf07-86aab2b31279.png) | 0.4 | true |
   * | ![O1CN01ZjViRX1rdaL6QDFNo_!!6000000005654-0-tps-2048-2048.webp](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4jKqm0bAebrKLnw1/img/ab29b032-139a-4b22-9371-b387581559b7.webp) | 0.4 | false |
   * 
   * @param request - SizeChartDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SizeChartDetectResponse
   */
  async sizeChartDetectWithOptions(request: $_model.SizeChartDetectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SizeChartDetectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SizeChartDetect",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SizeChartDetectResponse>(await this.callApi(params, req, runtime), new $_model.SizeChartDetectResponse({}));
  }

  /**
   * Detects whether an image contains a size chart. (Synchronous)
   * 
   * @remarks
   * # 1. Product Introduction
   * Detects whether an image contains a size chart. (Synchronous)
   * # 2. Common scenarios
   * **Batch processing scenario:** Detect images that contain size charts from a batch of images for further image translation or extraction. The size chart detection service helps reduce costs.
   * # 3. Features
   * The size chart detection service uses image recognition technology to automatically determine whether an input image contains size chart content. You provide an image URL, and the system returns a detection result (True/False) indicating whether the image is a size chart.
   * You can customize the confidence threshold (default: 0.4) and flexibly adjust the detection sensitivity based on your business precision requirements. A lower threshold results in more lenient detection, while a higher threshold results in stricter detection. The API processes a single image per request, making it suitable for integration into automated batch workflows for sequential invocation.
   * # 4. Effect comparison
   * | **Input image** | **Confidence** | **Output result** |
   * | --- | --- | --- |
   * | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4jKqm0bAebrKLnw1/img/0a914347-2acb-4b94-bf07-86aab2b31279.png) | 0.4 | true |
   * | ![O1CN01ZjViRX1rdaL6QDFNo_!!6000000005654-0-tps-2048-2048.webp](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4jKqm0bAebrKLnw1/img/ab29b032-139a-4b22-9371-b387581559b7.webp) | 0.4 | false |
   * 
   * @param request - SizeChartDetectRequest
   * @returns SizeChartDetectResponse
   */
  async sizeChartDetect(request: $_model.SizeChartDetectRequest): Promise<$_model.SizeChartDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sizeChartDetectWithOptions(request, runtime);
  }

  /**
   * Intelligently extracts structured information such as size charts and package weight/dimension data from images by using a multimodal large language model. (Asynchronous)
   * 
   * @remarks
   * ## Product Introduction
   * Intelligently extracts structured information such as size charts and package weight/dimension data from images by using a multimodal large language model. (Asynchronous)
   * ## Common scenarios
   * *   Size chart: Extracts size charts from apparel category images into text.
   *     
   * *   Package weight/dimensions: Extracts package weight and dimension information from images.
   * ## Functions and features
   * The size chart extraction service is based on a multimodal large language model. It automatically recognizes size chart or package weight/dimension information in images and converts it into structured text output. You provide an image URL, and the system processes the request as an asynchronous task and returns the extracted structured data. You can use the ColumnNameList parameter to specify the column names to recognize (such as Size, Bust, and Length) for precise targeted extraction. You can also use the LanguageModel parameter to control the output language. Valid values: cn (Chinese) and en (English). If you leave this parameter empty, the original language is retained. This service is applicable to scenarios such as converting apparel size charts to text and batch structuring of product weight/dimension information.
   * Core capability: Provide an image URL and optional column name configurations as input, and receive structured data of size charts or package weight/dimensions from the image as output. The API uses an asynchronous task mode (background: true). After submission, a task ID is returned. Poll for the final result. This mode is suitable for processing complex images or high-volume call scenarios.
   * ## Comparison
   * | **Input image** | **Output result** |
   * | --- | --- |
   * | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4jKqm0bAebrKLnw1/img/0a914347-2acb-4b94-bf07-86aab2b31279.png) | {
   *           "SizeChart": [
   *             {
   *               "尺码": {
   *                 "value": "S"
   *               },
   *               "腰围": {
   *                 "unit": "CM",
   *                 "value": 58
   *               },
   *               "裙长": {
   *                 "unit": "CM",
   *                 "value": 81
   *               },
   *               "体重建议": {
   *                 "unit": "kg",
   *                 "lower_value": 40,
   *                 "upper_value": 47.5
   *               }
   *             },
   *             {
   *               "尺码": {
   *                 "value": "M"
   *               },
   *               "腰围": {
   *                 "unit": "CM",
   *                 "value": 59
   *               },
   *               "裙长": {
   *                 "unit": "CM",
   *                 "value": 82
   *               },
   *               "体重建议": {
   *                 "unit": "kg",
   *                 "lower_value": 45,
   *                 "upper_value": 52.5
   *               }
   *             },
   *             {
   *               "尺码": {
   *                 "value": "L"
   *               },
   *               "腰围": {
   *                 "unit": "CM",
   *                 "value": 60
   *               },
   *               "裙长": {
   *                 "unit": "CM",
   *                 "value": 83
   *               },
   *               "体重建议": {
   *                 "unit": "kg",
   *                 "lower_value": 50,
   *                 "upper_value": 57.5
   *               }
   *             },
   *             {
   *               "尺码": {
   *                 "value": "XL"
   *               },
   *               "腰围": {
   *                 "unit": "CM",
   *                 "value": 61
   *               },
   *               "裙长": {
   *                 "unit": "CM",
   *                 "value": 84
   *               },
   *               "体重建议": {
   *                 "unit": "kg",
   *                 "lower_value": 55,
   *                 "upper_value": 62.5
   *               }
   *             },
   *             {
   *               "尺码": {
   *                 "value": "2XL"
   *               },
   *               "腰围": {
   *                 "unit": "CM",
   *                 "value": 62
   *               },
   *               "裙长": {
   *                 "unit": "CM",
   *                 "value": 85
   *               },
   *               "体重建议": {
   *                 "unit": "kg",
   *                 "lower_value": 60,
   *                 "upper_value": 67.5
   *               }
   *             }
   *           \\],
   *           "SizeChartAttributes": [
   *             "尺码",
   *             "裙长",
   *             "腰围",
   *             "体重建议"
   *           \\],
   *           "IntersectionAttributes": [
   *             "尺码",
   *             "裙长",
   *             "腰围(拉伸)",
   *             "体重建议"
   *           \\]
   * } |
   * 
   * @param tmpReq - SizeChartExtractRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SizeChartExtractResponse
   */
  async sizeChartExtractWithOptions(tmpReq: $_model.SizeChartExtractRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SizeChartExtractResponse> {
    tmpReq.validate();
    let request = new $_model.SizeChartExtractShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.columnNameList)) {
      request.columnNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.columnNameList, "ColumnNameList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.columnNameListShrink)) {
      query["ColumnNameList"] = request.columnNameListShrink;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.languageModel)) {
      query["LanguageModel"] = request.languageModel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SizeChartExtract",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SizeChartExtractResponse>(await this.callApi(params, req, runtime), new $_model.SizeChartExtractResponse({}));
  }

  /**
   * Intelligently extracts structured information such as size charts and package weight/dimension data from images by using a multimodal large language model. (Asynchronous)
   * 
   * @remarks
   * ## Product Introduction
   * Intelligently extracts structured information such as size charts and package weight/dimension data from images by using a multimodal large language model. (Asynchronous)
   * ## Common scenarios
   * *   Size chart: Extracts size charts from apparel category images into text.
   *     
   * *   Package weight/dimensions: Extracts package weight and dimension information from images.
   * ## Functions and features
   * The size chart extraction service is based on a multimodal large language model. It automatically recognizes size chart or package weight/dimension information in images and converts it into structured text output. You provide an image URL, and the system processes the request as an asynchronous task and returns the extracted structured data. You can use the ColumnNameList parameter to specify the column names to recognize (such as Size, Bust, and Length) for precise targeted extraction. You can also use the LanguageModel parameter to control the output language. Valid values: cn (Chinese) and en (English). If you leave this parameter empty, the original language is retained. This service is applicable to scenarios such as converting apparel size charts to text and batch structuring of product weight/dimension information.
   * Core capability: Provide an image URL and optional column name configurations as input, and receive structured data of size charts or package weight/dimensions from the image as output. The API uses an asynchronous task mode (background: true). After submission, a task ID is returned. Poll for the final result. This mode is suitable for processing complex images or high-volume call scenarios.
   * ## Comparison
   * | **Input image** | **Output result** |
   * | --- | --- |
   * | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4jKqm0bAebrKLnw1/img/0a914347-2acb-4b94-bf07-86aab2b31279.png) | {
   *           "SizeChart": [
   *             {
   *               "尺码": {
   *                 "value": "S"
   *               },
   *               "腰围": {
   *                 "unit": "CM",
   *                 "value": 58
   *               },
   *               "裙长": {
   *                 "unit": "CM",
   *                 "value": 81
   *               },
   *               "体重建议": {
   *                 "unit": "kg",
   *                 "lower_value": 40,
   *                 "upper_value": 47.5
   *               }
   *             },
   *             {
   *               "尺码": {
   *                 "value": "M"
   *               },
   *               "腰围": {
   *                 "unit": "CM",
   *                 "value": 59
   *               },
   *               "裙长": {
   *                 "unit": "CM",
   *                 "value": 82
   *               },
   *               "体重建议": {
   *                 "unit": "kg",
   *                 "lower_value": 45,
   *                 "upper_value": 52.5
   *               }
   *             },
   *             {
   *               "尺码": {
   *                 "value": "L"
   *               },
   *               "腰围": {
   *                 "unit": "CM",
   *                 "value": 60
   *               },
   *               "裙长": {
   *                 "unit": "CM",
   *                 "value": 83
   *               },
   *               "体重建议": {
   *                 "unit": "kg",
   *                 "lower_value": 50,
   *                 "upper_value": 57.5
   *               }
   *             },
   *             {
   *               "尺码": {
   *                 "value": "XL"
   *               },
   *               "腰围": {
   *                 "unit": "CM",
   *                 "value": 61
   *               },
   *               "裙长": {
   *                 "unit": "CM",
   *                 "value": 84
   *               },
   *               "体重建议": {
   *                 "unit": "kg",
   *                 "lower_value": 55,
   *                 "upper_value": 62.5
   *               }
   *             },
   *             {
   *               "尺码": {
   *                 "value": "2XL"
   *               },
   *               "腰围": {
   *                 "unit": "CM",
   *                 "value": 62
   *               },
   *               "裙长": {
   *                 "unit": "CM",
   *                 "value": 85
   *               },
   *               "体重建议": {
   *                 "unit": "kg",
   *                 "lower_value": 60,
   *                 "upper_value": 67.5
   *               }
   *             }
   *           \\],
   *           "SizeChartAttributes": [
   *             "尺码",
   *             "裙长",
   *             "腰围",
   *             "体重建议"
   *           \\],
   *           "IntersectionAttributes": [
   *             "尺码",
   *             "裙长",
   *             "腰围(拉伸)",
   *             "体重建议"
   *           \\]
   * } |
   * 
   * @param request - SizeChartExtractRequest
   * @returns SizeChartExtractResponse
   */
  async sizeChartExtract(request: $_model.SizeChartExtractRequest): Promise<$_model.SizeChartExtractResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sizeChartExtractWithOptions(request, runtime);
  }

  /**
   * Extracts structured information such as size charts and package weight and dimensions from images by using a multimodal large language model in asynchronous mode.
   * 
   * @remarks
   * ## Scenarios
   * Size charts: Extracts size charts of apparel categories into text.
   * Package weight and dimensions: Extracts package weight and dimension information from images.
   * ## Features
   * The size chart extraction service is based on a multimodal large language model. It automatically recognizes size charts or package weight and dimension information in images and converts the information into structured text output. You provide an image URL, and the system processes the request as an asynchronous task and returns the extracted structured data. You can specify the column names to be recognized, such as Size, Bust, and Length, by using ColumnNameList to achieve precise and targeted extraction. You can also control the output language by using the LanguageModel parameter. Valid values: cn for Chinese and en for English. If you do not specify this parameter, the original language is retained. This service is applicable to scenarios such as text conversion of size charts for apparel categories and batch structuring of package weight and dimension information for commodities.
   * Core capabilities: You input an image URL and optional column name configurations, and the system outputs the structured data of the size chart or package weight and dimensions in the image. The API operation uses the asynchronous task mode (background: true). After you submit the task, a task ID is returned. You must poll the task to obtain the final result. This mode is suitable for processing complex images or handling large-scale calls.
   * ## Comparison of results
   * | Input image | Output result |
   * | --- | --- |
   * | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4jKqm0bAebrKLnw1/img/0a914347-2acb-4b94-bf07-86aab2b31279.png) | {
   *           "SizeChart": [
   *             {
   *               "Size": {
   *                 "value": "S"
   *               },
   *               "Waist": {
   *                 "unit": "CM",
   *                 "value": 58
   *               },
   *               "Skirt length": {
   *                 "unit": "CM",
   *                 "value": 81
   *               },
   *               "Recommended weight": {
   *                 "unit": "kg",
   *                 "lower_value": 40,
   *                 "upper_value": 47.5
   *               }
   *             },
   *             {
   *               "Size": {
   *                 "value": "M"
   *               },
   *               "Waist": {
   *                 "unit": "CM",
   *                 "value": 59
   *               },
   *               "Skirt length": {
   *                 "unit": "CM",
   *                 "value": 82
   *               },
   *               "Recommended weight": {
   *                 "unit": "kg",
   *                 "lower_value": 45,
   *                 "upper_value": 52.5
   *               }
   *             },
   *             {
   *               "Size": {
   *                 "value": "L"
   *               },
   *               "Waist": {
   *                 "unit": "CM",
   *                 "value": 60
   *               },
   *               "Skirt length": {
   *                 "unit": "CM",
   *                 "value": 83
   *               },
   *               "Recommended weight": {
   *                 "unit": "kg",
   *                 "lower_value": 50,
   *                 "upper_value": 57.5
   *               }
   *             },
   *             {
   *               "Size": {
   *                 "value": "XL"
   *               },
   *               "Waist": {
   *                 "unit": "CM",
   *                 "value": 61
   *               },
   *               "Skirt length": {
   *                 "unit": "CM",
   *                 "value": 84
   *               },
   *               "Recommended weight": {
   *                 "unit": "kg",
   *                 "lower_value": 55,
   *                 "upper_value": 62.5
   *               }
   *             },
   *             {
   *               "Size": {
   *                 "value": "2XL"
   *               },
   *               "Waist": {
   *                 "unit": "CM",
   *                 "value": 62
   *               },
   *               "Skirt length": {
   *                 "unit": "CM",
   *                 "value": 85
   *               },
   *               "Recommended weight": {
   *                 "unit": "kg",
   *                 "lower_value": 60,
   *                 "upper_value": 67.5
   *               }
   *             }
   *           \\],
   *           "SizeChartAttributes": [
   *             "Size",
   *             "Skirt length",
   *             "Waist",
   *             "Recommended weight"
   *           \\],
   *           "IntersectionAttributes": [
   *             "Size",
   *             "Skirt length",
   *             "Waist (stretched)",
   *             "Recommended weight"
   *           \\]
   * } |
   * 
   * @param tmpReq - SizeChartExtractAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SizeChartExtractAsyncResponse
   */
  async sizeChartExtractAsyncWithOptions(tmpReq: $_model.SizeChartExtractAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SizeChartExtractAsyncResponse> {
    tmpReq.validate();
    let request = new $_model.SizeChartExtractAsyncShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.columnNameList)) {
      request.columnNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.columnNameList, "ColumnNameList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.columnNameListShrink)) {
      query["ColumnNameList"] = request.columnNameListShrink;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.languageModel)) {
      query["LanguageModel"] = request.languageModel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SizeChartExtractAsync",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SizeChartExtractAsyncResponse>(await this.callApi(params, req, runtime), new $_model.SizeChartExtractAsyncResponse({}));
  }

  /**
   * Extracts structured information such as size charts and package weight and dimensions from images by using a multimodal large language model in asynchronous mode.
   * 
   * @remarks
   * ## Scenarios
   * Size charts: Extracts size charts of apparel categories into text.
   * Package weight and dimensions: Extracts package weight and dimension information from images.
   * ## Features
   * The size chart extraction service is based on a multimodal large language model. It automatically recognizes size charts or package weight and dimension information in images and converts the information into structured text output. You provide an image URL, and the system processes the request as an asynchronous task and returns the extracted structured data. You can specify the column names to be recognized, such as Size, Bust, and Length, by using ColumnNameList to achieve precise and targeted extraction. You can also control the output language by using the LanguageModel parameter. Valid values: cn for Chinese and en for English. If you do not specify this parameter, the original language is retained. This service is applicable to scenarios such as text conversion of size charts for apparel categories and batch structuring of package weight and dimension information for commodities.
   * Core capabilities: You input an image URL and optional column name configurations, and the system outputs the structured data of the size chart or package weight and dimensions in the image. The API operation uses the asynchronous task mode (background: true). After you submit the task, a task ID is returned. You must poll the task to obtain the final result. This mode is suitable for processing complex images or handling large-scale calls.
   * ## Comparison of results
   * | Input image | Output result |
   * | --- | --- |
   * | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4jKqm0bAebrKLnw1/img/0a914347-2acb-4b94-bf07-86aab2b31279.png) | {
   *           "SizeChart": [
   *             {
   *               "Size": {
   *                 "value": "S"
   *               },
   *               "Waist": {
   *                 "unit": "CM",
   *                 "value": 58
   *               },
   *               "Skirt length": {
   *                 "unit": "CM",
   *                 "value": 81
   *               },
   *               "Recommended weight": {
   *                 "unit": "kg",
   *                 "lower_value": 40,
   *                 "upper_value": 47.5
   *               }
   *             },
   *             {
   *               "Size": {
   *                 "value": "M"
   *               },
   *               "Waist": {
   *                 "unit": "CM",
   *                 "value": 59
   *               },
   *               "Skirt length": {
   *                 "unit": "CM",
   *                 "value": 82
   *               },
   *               "Recommended weight": {
   *                 "unit": "kg",
   *                 "lower_value": 45,
   *                 "upper_value": 52.5
   *               }
   *             },
   *             {
   *               "Size": {
   *                 "value": "L"
   *               },
   *               "Waist": {
   *                 "unit": "CM",
   *                 "value": 60
   *               },
   *               "Skirt length": {
   *                 "unit": "CM",
   *                 "value": 83
   *               },
   *               "Recommended weight": {
   *                 "unit": "kg",
   *                 "lower_value": 50,
   *                 "upper_value": 57.5
   *               }
   *             },
   *             {
   *               "Size": {
   *                 "value": "XL"
   *               },
   *               "Waist": {
   *                 "unit": "CM",
   *                 "value": 61
   *               },
   *               "Skirt length": {
   *                 "unit": "CM",
   *                 "value": 84
   *               },
   *               "Recommended weight": {
   *                 "unit": "kg",
   *                 "lower_value": 55,
   *                 "upper_value": 62.5
   *               }
   *             },
   *             {
   *               "Size": {
   *                 "value": "2XL"
   *               },
   *               "Waist": {
   *                 "unit": "CM",
   *                 "value": 62
   *               },
   *               "Skirt length": {
   *                 "unit": "CM",
   *                 "value": 85
   *               },
   *               "Recommended weight": {
   *                 "unit": "kg",
   *                 "lower_value": 60,
   *                 "upper_value": 67.5
   *               }
   *             }
   *           \\],
   *           "SizeChartAttributes": [
   *             "Size",
   *             "Skirt length",
   *             "Waist",
   *             "Recommended weight"
   *           \\],
   *           "IntersectionAttributes": [
   *             "Size",
   *             "Skirt length",
   *             "Waist (stretched)",
   *             "Recommended weight"
   *           \\]
   * } |
   * 
   * @param request - SizeChartExtractAsyncRequest
   * @returns SizeChartExtractAsyncResponse
   */
  async sizeChartExtractAsync(request: $_model.SizeChartExtractAsyncRequest): Promise<$_model.SizeChartExtractAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sizeChartExtractAsyncWithOptions(request, runtime);
  }

  /**
   * Audits store photos based on storefront scene recognition and multimodal large model element localization. The API outputs storefront scene classifications and confidence details, and localizes storefronts, signboards, entrances, and business signs. It is applicable to store data collection, storefront photo classification, and inspection reviews.
   * 
   * @remarks
   * ## Scenarios
   * - Storefront photo classification: Distinguishes storefront-related photos from non-storefront photos.
   * - Store data verification: Localizes signboards and entrances, and extracts clear and readable short text.
   * - Multi-store photo review: Localizes visible storefronts and signs of adjacent stores separately.
   * ## Features
   * - Scene classification and details: Returns a scenes string array and classification details. Non-storefront photos are also valid classification results.
   * - Storefront key element localization: Covers storefronts, signboards, store entrances, and business-related signs.
   * - Readable text extraction: Extracts only clear short text. Does not infer business status based on whether the door is open or closed, and does not infer addresses or store ownership.
   * - Supports single HTTPS image input. Supplementary localization returns up to 12 targets, each containing a category, bounding box, and up to 24 characters of visible text, with coverage indicating whether the localization is complete.
   * 
   * @param request - StorefrontSceneRecognitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StorefrontSceneRecognitionResponse
   */
  async storefrontSceneRecognitionWithOptions(request: $_model.StorefrontSceneRecognitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StorefrontSceneRecognitionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StorefrontSceneRecognition",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StorefrontSceneRecognitionResponse>(await this.callApi(params, req, runtime), new $_model.StorefrontSceneRecognitionResponse({}));
  }

  /**
   * Audits store photos based on storefront scene recognition and multimodal large model element localization. The API outputs storefront scene classifications and confidence details, and localizes storefronts, signboards, entrances, and business signs. It is applicable to store data collection, storefront photo classification, and inspection reviews.
   * 
   * @remarks
   * ## Scenarios
   * - Storefront photo classification: Distinguishes storefront-related photos from non-storefront photos.
   * - Store data verification: Localizes signboards and entrances, and extracts clear and readable short text.
   * - Multi-store photo review: Localizes visible storefronts and signs of adjacent stores separately.
   * ## Features
   * - Scene classification and details: Returns a scenes string array and classification details. Non-storefront photos are also valid classification results.
   * - Storefront key element localization: Covers storefronts, signboards, store entrances, and business-related signs.
   * - Readable text extraction: Extracts only clear short text. Does not infer business status based on whether the door is open or closed, and does not infer addresses or store ownership.
   * - Supports single HTTPS image input. Supplementary localization returns up to 12 targets, each containing a category, bounding box, and up to 24 characters of visible text, with coverage indicating whether the localization is complete.
   * 
   * @param request - StorefrontSceneRecognitionRequest
   * @returns StorefrontSceneRecognitionResponse
   */
  async storefrontSceneRecognition(request: $_model.StorefrontSceneRecognitionRequest): Promise<$_model.StorefrontSceneRecognitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.storefrontSceneRecognitionWithOptions(request, runtime);
  }

  /**
   * Generates product detail page materials automatically based on a multimodal large language model (MLLM) and structured image-text extraction to help e-commerce platforms and brands supplement product detail pages. After the caller pushes product information such as the product ID, title, brand, main image, and shop name, the service automatically locates identical products, performs consistency checks, extracts size information and product attributes, renders them into SVG size and attribute charts for direct use on the detail page, and returns structured detail copy classifications and processing remarks.
   * 
   * @param request - SubmitProductMatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitProductMatchResponse
   */
  async submitProductMatchWithOptions(request: $_model.SubmitProductMatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitProductMatchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brandName)) {
      query["BrandName"] = request.brandName;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!$dara.isNull(request.productUrl)) {
      query["ProductUrl"] = request.productUrl;
    }

    if (!$dara.isNull(request.shopName)) {
      query["ShopName"] = request.shopName;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitProductMatch",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitProductMatchResponse>(await this.callApi(params, req, runtime), new $_model.SubmitProductMatchResponse({}));
  }

  /**
   * Generates product detail page materials automatically based on a multimodal large language model (MLLM) and structured image-text extraction to help e-commerce platforms and brands supplement product detail pages. After the caller pushes product information such as the product ID, title, brand, main image, and shop name, the service automatically locates identical products, performs consistency checks, extracts size information and product attributes, renders them into SVG size and attribute charts for direct use on the detail page, and returns structured detail copy classifications and processing remarks.
   * 
   * @param request - SubmitProductMatchRequest
   * @returns SubmitProductMatchResponse
   */
  async submitProductMatch(request: $_model.SubmitProductMatchRequest): Promise<$_model.SubmitProductMatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitProductMatchWithOptions(request, runtime);
  }

  /**
   * Corrects errors in search terms and titles.
   * 
   * @remarks
   * ## Product Introduction
   * Corrects errors in search terms and titles. The following 14 languages are currently supported:
   * | No. | Language name (English) | Language code | Language name (Chinese) |
   * |------|------------------------|------------|------------------------|
   * | 1 | Arabic | ar | 阿拉伯语 |
   * | 2 | German | de | 德语 |
   * | 3 | English | en | 英语 |
   * | 4 | Spanish | es | 西班牙语 |
   * | 5 | French | fr | 法语 |
   * | 6 | Hebrew | he | 希伯来语 |
   * | 7 | Italian | it | 意大利语 |
   * | 8 | Japanese | ja | 日语 |
   * | 9 | Korean | ko | 韩语 |
   * | 10 | Dutch | nl | 荷兰语 |
   * | 11 | Polish | pl | 波兰语 |
   * | 12 | Portuguese | pt | 葡萄牙语-巴西 |
   * | 13 | Russian | ru | 俄语 |
   * | 14 | Ukrainian | uk | 乌克兰语 |
   * 
   * @param request - TextCorrectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TextCorrectResponse
   */
  async textCorrectWithOptions(request: $_model.TextCorrectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TextCorrectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sourceLanguage)) {
      query["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.sourceText)) {
      query["SourceText"] = request.sourceText;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TextCorrect",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TextCorrectResponse>(await this.callApi(params, req, runtime), new $_model.TextCorrectResponse({}));
  }

  /**
   * Corrects errors in search terms and titles.
   * 
   * @remarks
   * ## Product Introduction
   * Corrects errors in search terms and titles. The following 14 languages are currently supported:
   * | No. | Language name (English) | Language code | Language name (Chinese) |
   * |------|------------------------|------------|------------------------|
   * | 1 | Arabic | ar | 阿拉伯语 |
   * | 2 | German | de | 德语 |
   * | 3 | English | en | 英语 |
   * | 4 | Spanish | es | 西班牙语 |
   * | 5 | French | fr | 法语 |
   * | 6 | Hebrew | he | 希伯来语 |
   * | 7 | Italian | it | 意大利语 |
   * | 8 | Japanese | ja | 日语 |
   * | 9 | Korean | ko | 韩语 |
   * | 10 | Dutch | nl | 荷兰语 |
   * | 11 | Polish | pl | 波兰语 |
   * | 12 | Portuguese | pt | 葡萄牙语-巴西 |
   * | 13 | Russian | ru | 俄语 |
   * | 14 | Ukrainian | uk | 乌克兰语 |
   * 
   * @param request - TextCorrectRequest
   * @returns TextCorrectResponse
   */
  async textCorrect(request: $_model.TextCorrectRequest): Promise<$_model.TextCorrectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.textCorrectWithOptions(request, runtime);
  }

  /**
   * Maas-MT is an e-commerce translation model trained on over 1 billion high-quality bilingual sentence pairs, with continuous optimization for e-commerce-specific terminology such as brands, models, materials, and attributes. It supports mutual translation among more than 400 language directions (including bridged directions), especially Chinese-English, Chinese-multilingual, and English-multilingual translation. It supports language detection for query phrases in 31 languages and general scenarios in 35 languages. If you do not specify a source language, automatic detection is performed.
   * 
   * @remarks
   * ## Product Introduction
   * Maas-MT is an e-commerce translation model trained on over 1 billion\\+ high-quality bilingual sentence pairs, with continuous optimization for e-commerce-specific terminology such as brands, models, materials, and attributes. It supports mutual translation among more than 400 language directions (including bridged directions), especially Chinese-English, Chinese-multilingual, and English-multilingual translation. It supports language detection for query phrases in 31 languages and general scenarios in 35 languages. If you do not specify a source language, automatic detection is performed.
   * ## Common scenarios
   * - Product titles: Maas-MT large model translation accurately translates phrases, keywords, and trending terms in product titles into the target language, improving product visibility on e-commerce platforms.
   * - Product descriptions: Product descriptions are typically long with diverse and complex formatting. Maas-MT large model translation supports long text translation and HTML formatting, delivering excellent translation quality and format preservation.
   * - Product attributes: Product attribute terms are short and may contain e-commerce-specific terms such as model numbers and specifications.
   * - Customer service conversations: In customer service scenarios, Maas-MT optimizes issues such as missing context and typos, and supports polite expressions for certain language directions.
   * Maas-MT large model translation can also be used for general-purpose translation scenarios such as office work, meetings, and daily conversations.
   * ## Functions and features
   * - **Supported language directions**   
   * Maas-MT large model translation supports mutual translation among more than 400 languages and language detection for query phrases in 31 languages and general scenarios in 35 languages.
   * <props="china">For supported language directions, see [Language direction mapping](https://www.alibabacloud.com/help/en/document_detail/3041883.html)      
   * <props="intl">For supported language directions, see [Language direction mapping](https://www.alibabacloud.com/help/zh/aidge/language-direction-mapping)
   * - **Ultra-low hallucination rate and high-speed inference**   
   * Maas-MT large model translation is a large language model with preference alignment for translation scenarios. Compared with general-purpose large language models, it delivers faster translation inference and an extremely low hallucination rate, making it especially suitable for large-scale invocation scenarios.
   * - **Supported text format types for translation**   
   * Currently, text and html text types are supported.
   * - **Translation intervention support**   
   * Custom translation results are supported, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and skip translation (ABC-empty value). This is commonly used for scenarios such as brand name protection. Simply pass the corresponding intervention glossary ID when calling the API to meet your translation needs across different scenarios. You can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.
   * ## Translation quality comparison
   * | **Source text** | **Aidge translation** | **Other translation product 1** | **Other translation product 2** | **Aidge translation advantages** |
   * |----------|---------------|-----------------------|-----------------------|---------------------|
   * | 75mm 4Pin 0.38A GA81S2U 12V GTX 960 Cooling Fan for Zotac GTX960 Graphics Card Cooling Fan | 75mm 4Pin 0.38A GA81S2U 12V GTX 960, ventilador de enfriamiento para tarjeta gráfica Zotac GTX960. | Ventilador de refrigeración de 75mm 4Pin 0.38A GA81S2U 12V para la tarjeta gráfica Zotac GTX960 Ventilador de enfriamiento GTX 960. | Ventilador de refrigeración para tarjeta gráfica Zotac GTX960, 75mm, 4 pines, 0,38A, GA81S2U, 12V, GTX 960 | Clearer product subject |
   * | New Arrival Classic Style Luxury Brand 6 Hands Swiss Automatic Mechanical Men\\"s Business Steel Watch | Nueva llegada, reloj mecánico automático de lujo con 6 manecillas, estilo clásico, de acero para hombres de negocios | Nueva Llegada Reloj De Acero de Negocios para Hombre con Mecanismo Automático Suizo y 6 Agujas de Estilo Clásico de Marca de Lujo. | Reloj de acero de negocios para hombre, mecánico automático suizo, marca de lujo, estilo clásico, 6 manos, nueva llegada | More complete sentence structure, clearer expression, and more reasonable segmentation |
   * | Men Key Bag Genuine Cow Leather Buckets Key Cases Pouch Zipper Keychain Auto Car Key Case Women Home Key Holder Wallet | Sac à clés pour hommes en cuir de vache véritable, étuis à clés, pochette à fermeture éclair, porte-clés, étui à clé de voiture, porte-clés pour femmes, organisateur de portefeuille | Porte-clés sac en cuir de vache véritable, étuis à clés en forme de seau, pochette à fermeture éclair, porte-clés auto pour voiture, étui à clés pour femmes, organisateur de clés de maison, portefeuille. | Hommes porte-clés en cuir de vache véritable sac/pochette fermature éclair porte-clés Auto voiture porte-clés femmes maison porte-clés organisateur portefeuille | Clearer and more accurate product subject description. The translation correctly identifies the product as a "key bag" rather than a "keychain", avoiding ambiguity present in other translations.
   * 
   * @param tmpReq - TextTranslateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TextTranslateResponse
   */
  async textTranslateWithOptions(tmpReq: $_model.TextTranslateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TextTranslateResponse> {
    tmpReq.validate();
    let request = new $_model.TextTranslateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sourceTextList)) {
      request.sourceTextListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceTextList, "SourceTextList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!$dara.isNull(request.glossary)) {
      body["Glossary"] = request.glossary;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.sourceTextListShrink)) {
      body["SourceTextList"] = request.sourceTextListShrink;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.translateScene)) {
      body["TranslateScene"] = request.translateScene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TextTranslate",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TextTranslateResponse>(await this.callApi(params, req, runtime), new $_model.TextTranslateResponse({}));
  }

  /**
   * Maas-MT is an e-commerce translation model trained on over 1 billion high-quality bilingual sentence pairs, with continuous optimization for e-commerce-specific terminology such as brands, models, materials, and attributes. It supports mutual translation among more than 400 language directions (including bridged directions), especially Chinese-English, Chinese-multilingual, and English-multilingual translation. It supports language detection for query phrases in 31 languages and general scenarios in 35 languages. If you do not specify a source language, automatic detection is performed.
   * 
   * @remarks
   * ## Product Introduction
   * Maas-MT is an e-commerce translation model trained on over 1 billion\\+ high-quality bilingual sentence pairs, with continuous optimization for e-commerce-specific terminology such as brands, models, materials, and attributes. It supports mutual translation among more than 400 language directions (including bridged directions), especially Chinese-English, Chinese-multilingual, and English-multilingual translation. It supports language detection for query phrases in 31 languages and general scenarios in 35 languages. If you do not specify a source language, automatic detection is performed.
   * ## Common scenarios
   * - Product titles: Maas-MT large model translation accurately translates phrases, keywords, and trending terms in product titles into the target language, improving product visibility on e-commerce platforms.
   * - Product descriptions: Product descriptions are typically long with diverse and complex formatting. Maas-MT large model translation supports long text translation and HTML formatting, delivering excellent translation quality and format preservation.
   * - Product attributes: Product attribute terms are short and may contain e-commerce-specific terms such as model numbers and specifications.
   * - Customer service conversations: In customer service scenarios, Maas-MT optimizes issues such as missing context and typos, and supports polite expressions for certain language directions.
   * Maas-MT large model translation can also be used for general-purpose translation scenarios such as office work, meetings, and daily conversations.
   * ## Functions and features
   * - **Supported language directions**   
   * Maas-MT large model translation supports mutual translation among more than 400 languages and language detection for query phrases in 31 languages and general scenarios in 35 languages.
   * <props="china">For supported language directions, see [Language direction mapping](https://www.alibabacloud.com/help/en/document_detail/3041883.html)      
   * <props="intl">For supported language directions, see [Language direction mapping](https://www.alibabacloud.com/help/zh/aidge/language-direction-mapping)
   * - **Ultra-low hallucination rate and high-speed inference**   
   * Maas-MT large model translation is a large language model with preference alignment for translation scenarios. Compared with general-purpose large language models, it delivers faster translation inference and an extremely low hallucination rate, making it especially suitable for large-scale invocation scenarios.
   * - **Supported text format types for translation**   
   * Currently, text and html text types are supported.
   * - **Translation intervention support**   
   * Custom translation results are supported, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and skip translation (ABC-empty value). This is commonly used for scenarios such as brand name protection. Simply pass the corresponding intervention glossary ID when calling the API to meet your translation needs across different scenarios. You can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.
   * ## Translation quality comparison
   * | **Source text** | **Aidge translation** | **Other translation product 1** | **Other translation product 2** | **Aidge translation advantages** |
   * |----------|---------------|-----------------------|-----------------------|---------------------|
   * | 75mm 4Pin 0.38A GA81S2U 12V GTX 960 Cooling Fan for Zotac GTX960 Graphics Card Cooling Fan | 75mm 4Pin 0.38A GA81S2U 12V GTX 960, ventilador de enfriamiento para tarjeta gráfica Zotac GTX960. | Ventilador de refrigeración de 75mm 4Pin 0.38A GA81S2U 12V para la tarjeta gráfica Zotac GTX960 Ventilador de enfriamiento GTX 960. | Ventilador de refrigeración para tarjeta gráfica Zotac GTX960, 75mm, 4 pines, 0,38A, GA81S2U, 12V, GTX 960 | Clearer product subject |
   * | New Arrival Classic Style Luxury Brand 6 Hands Swiss Automatic Mechanical Men\\"s Business Steel Watch | Nueva llegada, reloj mecánico automático de lujo con 6 manecillas, estilo clásico, de acero para hombres de negocios | Nueva Llegada Reloj De Acero de Negocios para Hombre con Mecanismo Automático Suizo y 6 Agujas de Estilo Clásico de Marca de Lujo. | Reloj de acero de negocios para hombre, mecánico automático suizo, marca de lujo, estilo clásico, 6 manos, nueva llegada | More complete sentence structure, clearer expression, and more reasonable segmentation |
   * | Men Key Bag Genuine Cow Leather Buckets Key Cases Pouch Zipper Keychain Auto Car Key Case Women Home Key Holder Wallet | Sac à clés pour hommes en cuir de vache véritable, étuis à clés, pochette à fermeture éclair, porte-clés, étui à clé de voiture, porte-clés pour femmes, organisateur de portefeuille | Porte-clés sac en cuir de vache véritable, étuis à clés en forme de seau, pochette à fermeture éclair, porte-clés auto pour voiture, étui à clés pour femmes, organisateur de clés de maison, portefeuille. | Hommes porte-clés en cuir de vache véritable sac/pochette fermature éclair porte-clés Auto voiture porte-clés femmes maison porte-clés organisateur portefeuille | Clearer and more accurate product subject description. The translation correctly identifies the product as a "key bag" rather than a "keychain", avoiding ambiguity present in other translations.
   * 
   * @param request - TextTranslateRequest
   * @returns TextTranslateResponse
   */
  async textTranslate(request: $_model.TextTranslateRequest): Promise<$_model.TextTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.textTranslateWithOptions(request, runtime);
  }

  /**
   * Translates text asynchronously by using the Maas MT model, an e-commerce translation model trained on over 1 billion high-quality bilingual sentence pairs. The model is continuously optimized for e-commerce-specific terms such as brands, models, materials, and attributes. It supports 156 languages with over 400 language pairs and supports automatic language detection for source languages.
   * 
   * @remarks
   * ## Scenarios
   * *   Product titles: The Maas MT large language model accurately translates phrases, keywords, and trending words in product titles into the target language to increase product exposure on e-commerce platforms.
   *     
   * *   Product descriptions: Product descriptions are typically long and have diverse and complex formats. The Maas large language model supports long-text translation and HTML formatting, delivering excellent translation quality and format restoration.
   *     
   * *   Product attributes: Product attribute terms are short and contain e-commerce-specific words such as models and parameters.
   *     
   * *   Customer service conversations: In customer service scenarios, the model optimizes issues such as missing context and typos, and supports polite expressions in some language pairs.
   *     
   * The Maas MT large language model can also be used for translation in general scenarios, such as office work, meetings, and daily conversations.
   * ## Features
   * *   **Ultra-low hallucination rate and high-speed inference** The Maas MT large language model is aligned with preferences for translation scenarios. Compared with general-purpose large language models, it features faster translation inference and an extremely low hallucination rate, making it especially suitable for large-scale invocation scenarios.
   *     
   * *   **Supported text formats** The model supports text and HTML formats.
   *     
   * *   **Translation intervention** You can customize translation results, including keeping words untranslated (ABC-ABC), specifying translations (ABC-DEF), and omitting translations (ABC-null value). This is commonly used for brand word protection. You only need to pass the corresponding intervention glossary ID when calling the API. This meets your translation needs in different scenarios. You can upload up to 100,000 intervention words. If you need more, contact the platform.
   *     
   * *   **Translation quality comparison**
   * | **Source text** | **Aidge translation** | **Other translation product 1** | **Other translation product 2** | **Aidge translation advantages** |
   * | --- | --- | --- | --- | --- |
   * | 75mm 4Pin 0.38A GA81S2U 12V GTX 960 Cooling Fan for Zotac GTX960 Graphics Card Cooling Fan | 75mm 4Pin 0.38A GA81S2U 12V GTX 960, ventilador de enfriamiento para tarjeta gráfica Zotac GTX960. | Ventilador de refrigeración de 75mm 4Pin 0.38A GA81S2U 12V para la tarjeta gráfica Zotac GTX960 Ventilador de enfriamiento GTX 960. | Ventilador de refrigeración para tarjeta gráfica Zotac GTX960, 75mm, 4 pines, 0,38A, GA81S2U, 12V, GTX 960 | Clearer product subject |
   * | New Arrival Classic Style Luxury Brand 6 Hands Swiss Automatic Mechanical Men\\"s Business Steel Watch | Nueva llegada, reloj mecánico automático de lujo con 6 manecillas, estilo clásico, de acero para hombres de negocios | Nueva Llegada Reloj De Acero de Negocios para Hombre con Mecanismo Automático Suizo y 6 Agujas de Estilo Clásico de Marca de Lujo. | Reloj de acero de negocios para hombre, mecánico automático suizo, marca de lujo, estilo clásico, 6 manos, nueva llegada | More complete sentence structure, clearer expression, and more reasonable punctuation |
   * | Men Key Bag Genuine Cow Leather Buckets Key Cases Pouch Zipper Keychain Auto Car Key Case Women Home Key Holder Wallet | Sac à clés pour hommes en cuir de vache véritable, étuis à clés, pochette à fermeture éclair, porte-clés, étui à clé de voiture, porte-clés pour femmes, organisateur de portefeuille | Porte-clés sac en cuir de vache véritable, étuis à clés en forme de seau, pochette à fermeture éclair, porte-clés auto pour voiture, étui à clés pour femmes, organisateur de clés de maison, portefeuille. | Hommes porte-clés en cuir de vache véritable sac/pochette fermeture éclair porte-clés Auto voiture porte-clés femmes maison porte-clés organisateur portefeuille | Clearer and more explicit product subject. It translates to "key bag" rather than "keychain", avoiding ambiguity in other translations |
   * ## Preparations and invoke flow
   * Text translation supports both synchronization and asynchronous invoke methods. This topic describes the asynchronous invoke API. If you need to use synchronous call, see [Text translation - Synchronous API](https://api.aliyun.com/document/Aidge/2026-04-28/TextTranslate).
   * The asynchronous APIs for text translation and other capabilities share the same result retrieval flow, RocketMQ subscribe rules, message encryption protocols, dependency configurations, and Java consumption and decryption code.
   * For the asynchronous invoke integration flow, subscribe rules, message formats and encryption protocols, and detailed integration solutions, see [Asynchronous API invoke instructions](https://www.alibabacloud.com/help/en/aidge/asynchronous-interface-call-instructions).
   * 
   * @param tmpReq - TextTranslateAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TextTranslateAsyncResponse
   */
  async textTranslateAsyncWithOptions(tmpReq: $_model.TextTranslateAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TextTranslateAsyncResponse> {
    tmpReq.validate();
    let request = new $_model.TextTranslateAsyncShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sourceTextList)) {
      request.sourceTextListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceTextList, "SourceTextList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizName)) {
      query["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.formatType)) {
      query["FormatType"] = request.formatType;
    }

    if (!$dara.isNull(request.glossary)) {
      query["Glossary"] = request.glossary;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      query["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.sourceTextListShrink)) {
      query["SourceTextList"] = request.sourceTextListShrink;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      query["TargetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.translateScene)) {
      query["TranslateScene"] = request.translateScene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TextTranslateAsync",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TextTranslateAsyncResponse>(await this.callApi(params, req, runtime), new $_model.TextTranslateAsyncResponse({}));
  }

  /**
   * Translates text asynchronously by using the Maas MT model, an e-commerce translation model trained on over 1 billion high-quality bilingual sentence pairs. The model is continuously optimized for e-commerce-specific terms such as brands, models, materials, and attributes. It supports 156 languages with over 400 language pairs and supports automatic language detection for source languages.
   * 
   * @remarks
   * ## Scenarios
   * *   Product titles: The Maas MT large language model accurately translates phrases, keywords, and trending words in product titles into the target language to increase product exposure on e-commerce platforms.
   *     
   * *   Product descriptions: Product descriptions are typically long and have diverse and complex formats. The Maas large language model supports long-text translation and HTML formatting, delivering excellent translation quality and format restoration.
   *     
   * *   Product attributes: Product attribute terms are short and contain e-commerce-specific words such as models and parameters.
   *     
   * *   Customer service conversations: In customer service scenarios, the model optimizes issues such as missing context and typos, and supports polite expressions in some language pairs.
   *     
   * The Maas MT large language model can also be used for translation in general scenarios, such as office work, meetings, and daily conversations.
   * ## Features
   * *   **Ultra-low hallucination rate and high-speed inference** The Maas MT large language model is aligned with preferences for translation scenarios. Compared with general-purpose large language models, it features faster translation inference and an extremely low hallucination rate, making it especially suitable for large-scale invocation scenarios.
   *     
   * *   **Supported text formats** The model supports text and HTML formats.
   *     
   * *   **Translation intervention** You can customize translation results, including keeping words untranslated (ABC-ABC), specifying translations (ABC-DEF), and omitting translations (ABC-null value). This is commonly used for brand word protection. You only need to pass the corresponding intervention glossary ID when calling the API. This meets your translation needs in different scenarios. You can upload up to 100,000 intervention words. If you need more, contact the platform.
   *     
   * *   **Translation quality comparison**
   * | **Source text** | **Aidge translation** | **Other translation product 1** | **Other translation product 2** | **Aidge translation advantages** |
   * | --- | --- | --- | --- | --- |
   * | 75mm 4Pin 0.38A GA81S2U 12V GTX 960 Cooling Fan for Zotac GTX960 Graphics Card Cooling Fan | 75mm 4Pin 0.38A GA81S2U 12V GTX 960, ventilador de enfriamiento para tarjeta gráfica Zotac GTX960. | Ventilador de refrigeración de 75mm 4Pin 0.38A GA81S2U 12V para la tarjeta gráfica Zotac GTX960 Ventilador de enfriamiento GTX 960. | Ventilador de refrigeración para tarjeta gráfica Zotac GTX960, 75mm, 4 pines, 0,38A, GA81S2U, 12V, GTX 960 | Clearer product subject |
   * | New Arrival Classic Style Luxury Brand 6 Hands Swiss Automatic Mechanical Men\\"s Business Steel Watch | Nueva llegada, reloj mecánico automático de lujo con 6 manecillas, estilo clásico, de acero para hombres de negocios | Nueva Llegada Reloj De Acero de Negocios para Hombre con Mecanismo Automático Suizo y 6 Agujas de Estilo Clásico de Marca de Lujo. | Reloj de acero de negocios para hombre, mecánico automático suizo, marca de lujo, estilo clásico, 6 manos, nueva llegada | More complete sentence structure, clearer expression, and more reasonable punctuation |
   * | Men Key Bag Genuine Cow Leather Buckets Key Cases Pouch Zipper Keychain Auto Car Key Case Women Home Key Holder Wallet | Sac à clés pour hommes en cuir de vache véritable, étuis à clés, pochette à fermeture éclair, porte-clés, étui à clé de voiture, porte-clés pour femmes, organisateur de portefeuille | Porte-clés sac en cuir de vache véritable, étuis à clés en forme de seau, pochette à fermeture éclair, porte-clés auto pour voiture, étui à clés pour femmes, organisateur de clés de maison, portefeuille. | Hommes porte-clés en cuir de vache véritable sac/pochette fermeture éclair porte-clés Auto voiture porte-clés femmes maison porte-clés organisateur portefeuille | Clearer and more explicit product subject. It translates to "key bag" rather than "keychain", avoiding ambiguity in other translations |
   * ## Preparations and invoke flow
   * Text translation supports both synchronization and asynchronous invoke methods. This topic describes the asynchronous invoke API. If you need to use synchronous call, see [Text translation - Synchronous API](https://api.aliyun.com/document/Aidge/2026-04-28/TextTranslate).
   * The asynchronous APIs for text translation and other capabilities share the same result retrieval flow, RocketMQ subscribe rules, message encryption protocols, dependency configurations, and Java consumption and decryption code.
   * For the asynchronous invoke integration flow, subscribe rules, message formats and encryption protocols, and detailed integration solutions, see [Asynchronous API invoke instructions](https://www.alibabacloud.com/help/en/aidge/asynchronous-interface-call-instructions).
   * 
   * @param request - TextTranslateAsyncRequest
   * @returns TextTranslateAsyncResponse
   */
  async textTranslateAsync(request: $_model.TextTranslateAsyncRequest): Promise<$_model.TextTranslateAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.textTranslateAsyncWithOptions(request, runtime);
  }

  /**
   * Synchronously modifies the content of a display knowledge base in batches.
   * 
   * @param tmpReq - UpdateDisplayKnowledgeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDisplayKnowledgeResponse
   */
  async updateDisplayKnowledgeWithOptions(tmpReq: $_model.UpdateDisplayKnowledgeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDisplayKnowledgeResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDisplayKnowledgeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.records)) {
      request.recordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.records, "Records", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ragId)) {
      query["RagId"] = request.ragId;
    }

    if (!$dara.isNull(request.recordsShrink)) {
      query["Records"] = request.recordsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDisplayKnowledge",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDisplayKnowledgeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDisplayKnowledgeResponse({}));
  }

  /**
   * Synchronously modifies the content of a display knowledge base in batches.
   * 
   * @param request - UpdateDisplayKnowledgeRequest
   * @returns UpdateDisplayKnowledgeResponse
   */
  async updateDisplayKnowledge(request: $_model.UpdateDisplayKnowledgeRequest): Promise<$_model.UpdateDisplayKnowledgeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDisplayKnowledgeWithOptions(request, runtime);
  }

  /**
   * Detects vacancies (asynchronous commit).
   * 
   * @param request - VacancyDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VacancyDetectionResponse
   */
  async vacancyDetectionWithOptions(request: $_model.VacancyDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VacancyDetectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.systemPrompt)) {
      query["SystemPrompt"] = request.systemPrompt;
    }

    if (!$dara.isNull(request.userPrompt)) {
      query["UserPrompt"] = request.userPrompt;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VacancyDetection",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VacancyDetectionResponse>(await this.callApi(params, req, runtime), new $_model.VacancyDetectionResponse({}));
  }

  /**
   * Detects vacancies (asynchronous commit).
   * 
   * @param request - VacancyDetectionRequest
   * @returns VacancyDetectionResponse
   */
  async vacancyDetection(request: $_model.VacancyDetectionRequest): Promise<$_model.VacancyDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.vacancyDetectionWithOptions(request, runtime);
  }

  /**
   * Generates 5- to 30-second product showcase short videos through the e-commerce AI video generation agent for e-commerce merchants and platforms based on product main images, titles, and selling points, helping customers efficiently produce and distribute e-commerce content. The product supports multiple resolutions such as 720P and 1080P, and allows you to invoke single products quickly and generate multiple products in batches, meeting the needs of daily operations and large-scale product content production. Current capabilities overwrite all clothing categories (tops, pants, skirts, suits, underwear, swimwear, etc.), and the service is gradually expanding to core e-commerce categories such as skincare, cosmetics, food and beverages, and home appliances.
   * 
   * @remarks
   * # Scenarios
   * - Batch generation of product short videos for sellers and platforms: Supports multiple video aspect ratios and sizes (3:4, 9:16), adapting to scenarios such as product detail page video slots, product homepage displays, information feed placements, short video promotions, and event venue materials.
   * - Quick generation of the first batch of video materials for new product launches: When merchants have a large number of new products to launch at once, they only need to upload basic information such as product images and titles to quickly generate product showcase videos, model wearing videos, and voiceover explanation videos, helping merchants quickly complete material deployment during the launch phase.
   * - High-fidelity clothing display: Generates model display videos based on product main images that are closer to real commercial shooting effects, focusing on optimizing capabilities such as pattern restoration, fabric texture retention, accurate color presentation, and stable and consistent details. It supports common e-commerce display methods such as wearing, turning, walking, close-up shots, and multi-angle switching.
   * - Generation of high-quality commercial shooting models: Built-in target audience model library, covering plus-size women, plus-size men, swimwear, girly style, light mature commuting, youth casual, business menswear, sports and fitness, and other body types, skin colors, and races. It supports various commercial shooting expressions such as standing display, side display, walking display, and partial close-ups.
   * - High-frequency e-commerce scenarios such as standard product explanations: Applicable to standardized product categories such as skincare, cosmetics, personal care small appliances, food and beverages, home cleaning daily necessities, and 3C digital products. It can quickly generate product explanation videos based on product main images, titles, selling point information, and explanation scripts.
   * - Multi-product and multi-selling point testing to improve delivery efficiency: For information feed advertising, short video placement, and content promotion scenarios, it can quickly generate multiple versions of video materials, making it easy for enterprises to verify the conversion effects of different selling points and presentation forms at a low cost, and improve delivery ROI.
   * # Features
   * - Fully automatic end-to-end batch generation with zero prompt threshold: Callers only need to pass in the product image URL and title, and the system automatically completes the entire process from product understanding and storyboard planning to video generation, without the need to manually write prompts, select templates, or repeatedly adjust parameters. Built-in multiple agents such as product understanding, image quality inspection, script planning, and director camera movement greatly lower the threshold for use.
   * - Highly stable generation with a low waste rate: Adopts a deterministic generation process and a multi-layer quality control mechanism to output usable materials with fewer retries, reducing invalid generation and resource waste, and making the overall production cost more controllable.
   * - E-commerce exclusive product fidelity capability: Built-in multi-round quality inspection agents lock the product state throughout the video generation process (such as zippers will not be pulled open, sleeves will not be rolled down, and prints will not disappear), ensuring product consistency through multi-layer defense of script rewriting, explicit constraint injection, and failure-aware retry.
   * - Reference image first + 6-axis consistency check: Adopts the Reference-Image-First generation paradigm, using the original product image as the only visual source of truth, and automatically performs 6-dimensional VL diagnosis (color drift, pattern missing, contour deviation, structure addition or reduction, model matching, and dirt detection) to fundamentally eliminate the problem of generated images not looking like the product.
   * - Flexible storyboard arrangement and duration control: Supports adjustable video duration of 5 to 30 seconds. Agents independently plan independent storyboards to display the product effects in different scenarios. It also supports fixed scene mode to deeply display product tonality under a unified visual style.
   * - Cinematic camera movement capabilities: Built-in advanced camera movement modes such as bullet time, Grammy slow motion, 360° surround rotation, and full-body model rotation display, achieving deterministic output through precise segmented control.
   * - Model library and customization services: Built-in multi-type model resource library, supporting merchants to specify fixed models, customize exclusive model images, and bind brand visual personas for a long time to ensure brand visual consistency.
   * - Adaptation to high-frequency e-commerce content scenarios: Supports multiple resolutions such as 720P and 1080P and multiple aspect ratios such as 3:4 and 9:16, adapting to product detail page video slots, product homepage video displays, waterfall or information feed placements, event venue materials, and new product and promotional video generation.
   * 
   * @param tmpReq - VideoGenerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoGenerationResponse
   */
  async videoGenerationWithOptions(tmpReq: $_model.VideoGenerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VideoGenerationResponse> {
    tmpReq.validate();
    let request = new $_model.VideoGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!$dara.isNull(tmpReq.intent)) {
      request.intentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.intent, "Intent", "json");
    }

    if (!$dara.isNull(tmpReq.output)) {
      request.outputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.output, "Output", "json");
    }

    let query = { };
    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.intentShrink)) {
      query["Intent"] = request.intentShrink;
    }

    if (!$dara.isNull(request.outputShrink)) {
      query["Output"] = request.outputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VideoGeneration",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VideoGenerationResponse>(await this.callApi(params, req, runtime), new $_model.VideoGenerationResponse({}));
  }

  /**
   * Generates 5- to 30-second product showcase short videos through the e-commerce AI video generation agent for e-commerce merchants and platforms based on product main images, titles, and selling points, helping customers efficiently produce and distribute e-commerce content. The product supports multiple resolutions such as 720P and 1080P, and allows you to invoke single products quickly and generate multiple products in batches, meeting the needs of daily operations and large-scale product content production. Current capabilities overwrite all clothing categories (tops, pants, skirts, suits, underwear, swimwear, etc.), and the service is gradually expanding to core e-commerce categories such as skincare, cosmetics, food and beverages, and home appliances.
   * 
   * @remarks
   * # Scenarios
   * - Batch generation of product short videos for sellers and platforms: Supports multiple video aspect ratios and sizes (3:4, 9:16), adapting to scenarios such as product detail page video slots, product homepage displays, information feed placements, short video promotions, and event venue materials.
   * - Quick generation of the first batch of video materials for new product launches: When merchants have a large number of new products to launch at once, they only need to upload basic information such as product images and titles to quickly generate product showcase videos, model wearing videos, and voiceover explanation videos, helping merchants quickly complete material deployment during the launch phase.
   * - High-fidelity clothing display: Generates model display videos based on product main images that are closer to real commercial shooting effects, focusing on optimizing capabilities such as pattern restoration, fabric texture retention, accurate color presentation, and stable and consistent details. It supports common e-commerce display methods such as wearing, turning, walking, close-up shots, and multi-angle switching.
   * - Generation of high-quality commercial shooting models: Built-in target audience model library, covering plus-size women, plus-size men, swimwear, girly style, light mature commuting, youth casual, business menswear, sports and fitness, and other body types, skin colors, and races. It supports various commercial shooting expressions such as standing display, side display, walking display, and partial close-ups.
   * - High-frequency e-commerce scenarios such as standard product explanations: Applicable to standardized product categories such as skincare, cosmetics, personal care small appliances, food and beverages, home cleaning daily necessities, and 3C digital products. It can quickly generate product explanation videos based on product main images, titles, selling point information, and explanation scripts.
   * - Multi-product and multi-selling point testing to improve delivery efficiency: For information feed advertising, short video placement, and content promotion scenarios, it can quickly generate multiple versions of video materials, making it easy for enterprises to verify the conversion effects of different selling points and presentation forms at a low cost, and improve delivery ROI.
   * # Features
   * - Fully automatic end-to-end batch generation with zero prompt threshold: Callers only need to pass in the product image URL and title, and the system automatically completes the entire process from product understanding and storyboard planning to video generation, without the need to manually write prompts, select templates, or repeatedly adjust parameters. Built-in multiple agents such as product understanding, image quality inspection, script planning, and director camera movement greatly lower the threshold for use.
   * - Highly stable generation with a low waste rate: Adopts a deterministic generation process and a multi-layer quality control mechanism to output usable materials with fewer retries, reducing invalid generation and resource waste, and making the overall production cost more controllable.
   * - E-commerce exclusive product fidelity capability: Built-in multi-round quality inspection agents lock the product state throughout the video generation process (such as zippers will not be pulled open, sleeves will not be rolled down, and prints will not disappear), ensuring product consistency through multi-layer defense of script rewriting, explicit constraint injection, and failure-aware retry.
   * - Reference image first + 6-axis consistency check: Adopts the Reference-Image-First generation paradigm, using the original product image as the only visual source of truth, and automatically performs 6-dimensional VL diagnosis (color drift, pattern missing, contour deviation, structure addition or reduction, model matching, and dirt detection) to fundamentally eliminate the problem of generated images not looking like the product.
   * - Flexible storyboard arrangement and duration control: Supports adjustable video duration of 5 to 30 seconds. Agents independently plan independent storyboards to display the product effects in different scenarios. It also supports fixed scene mode to deeply display product tonality under a unified visual style.
   * - Cinematic camera movement capabilities: Built-in advanced camera movement modes such as bullet time, Grammy slow motion, 360° surround rotation, and full-body model rotation display, achieving deterministic output through precise segmented control.
   * - Model library and customization services: Built-in multi-type model resource library, supporting merchants to specify fixed models, customize exclusive model images, and bind brand visual personas for a long time to ensure brand visual consistency.
   * - Adaptation to high-frequency e-commerce content scenarios: Supports multiple resolutions such as 720P and 1080P and multiple aspect ratios such as 3:4 and 9:16, adapting to product detail page video slots, product homepage video displays, waterfall or information feed placements, event venue materials, and new product and promotional video generation.
   * 
   * @param request - VideoGenerationRequest
   * @returns VideoGenerationResponse
   */
  async videoGeneration(request: $_model.VideoGenerationRequest): Promise<$_model.VideoGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.videoGenerationWithOptions(request, runtime);
  }

  /**
   * Translates the speech and on-screen text in a video into a target language. You can select speech subtitle translation, on-screen text translation, or both. This API applies to scenarios such as multilingual distribution of e-commerce videos, international social media marketing, and global brand advertising. The API uses an asynchronous invocation mode. After you submit a translation task, you can obtain the task ID and poll the task status by calling the query API until the task is completed and the result is returned.
   * 
   * @remarks
   * ## Product introduction
   * The video translation API translates the speech and on-screen text in a video into a target language. You can select speech subtitle translation, on-screen text translation, or both. This API applies to scenarios such as multilingual distribution of e-commerce videos, international social media marketing, and global brand advertising.
   * The API uses an asynchronous invocation mode. After you submit a translation task, you can obtain the `TaskId` and poll the task status by calling the query API until the task is completed and the result is returned.
   * ## Scenarios
   * *   **Cross-border e-commerce video localization**: Translates the speech subtitles and selling point text in product introduction videos into the language of the target market to promote products on overseas platforms.
   *     
   * *   **International social media marketing**: Localizes speech subtitles and on-screen text for platforms such as TikTok, Instagram, and YouTube with one click to improve comprehension and conversion rates among overseas users.
   *     
   * *   **Global brand advertising**: Automatically generates video versions in the corresponding languages based on the target regions to reduce manual production costs.
   *     
   * *   **Training and product instructions**: Translates the speech subtitles and on-screen text in training courses or product demo videos into multiple languages for global teams.
   * ## Features
   * | Capability | Identifier | Description |
   * | --- | --- | --- |
   * | Speech subtitle translation | `speech` | Translates the video speech into target language dubbing. You can choose to erase the original subtitles only or replace them with translated subtitles. By default, the original subtitles are not processed and no new subtitles are added. |
   * | On-screen text translation | `visual` | Translates the source language text in the video frames, or only erases the on-screen text without translation. You can choose to erase brand logos. |
   * Speech subtitle translation (speech) generates target language dubbing based on the spoken content in the video, processes the subtitles based on the original subtitle processing option, and synthesizes the final video. Original subtitles refer to the existing subtitles in the video frames that correspond to the spoken content. Replacing with translated subtitles erases the original subtitles first and then adds subtitles synchronized with the translated speech.
   * On-screen text translation (visual) targets the recognizable original video language text in the video frames, such as titles, product selling points, and descriptive text. It can be used independently without selecting speech subtitle translation first, and does not require the text to appear in the speech. Original subtitles within the processing scope may also be processed.
   * When both speech and visual are selected, the speech subtitle translation is completed and the video is synthesized first, and then the on-screen text processing is performed on this video. The translated dubbing is retained, and a final video is output. The order of capabilities in the array does not affect the execution order. Therefore, not processing original subtitles only means that no subtitles are erased or added during the speech subtitle phase, and subsequent on-screen text processing may still change the original subtitles. Subtitles that have been replaced with translated subtitles are retained during subsequent on-screen text processing.
   * 
   * @param tmpReq - VideoTranslationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoTranslationResponse
   */
  async videoTranslationWithOptions(tmpReq: $_model.VideoTranslationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VideoTranslationResponse> {
    tmpReq.validate();
    let request = new $_model.VideoTranslationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.capabilities)) {
      request.capabilitiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.capabilities, "Capabilities", "json");
    }

    let query = { };
    if (!$dara.isNull(request.eraseOnly)) {
      query["EraseOnly"] = request.eraseOnly;
    }

    if (!$dara.isNull(request.removeLogo)) {
      query["RemoveLogo"] = request.removeLogo;
    }

    if (!$dara.isNull(request.subtitleMode)) {
      query["SubtitleMode"] = request.subtitleMode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.capabilitiesShrink)) {
      body["Capabilities"] = request.capabilitiesShrink;
    }

    if (!$dara.isNull(request.enableQualityCheck)) {
      body["EnableQualityCheck"] = request.enableQualityCheck;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      body["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      body["TargetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.videoUrl)) {
      body["VideoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VideoTranslation",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VideoTranslationResponse>(await this.callApi(params, req, runtime), new $_model.VideoTranslationResponse({}));
  }

  /**
   * Translates the speech and on-screen text in a video into a target language. You can select speech subtitle translation, on-screen text translation, or both. This API applies to scenarios such as multilingual distribution of e-commerce videos, international social media marketing, and global brand advertising. The API uses an asynchronous invocation mode. After you submit a translation task, you can obtain the task ID and poll the task status by calling the query API until the task is completed and the result is returned.
   * 
   * @remarks
   * ## Product introduction
   * The video translation API translates the speech and on-screen text in a video into a target language. You can select speech subtitle translation, on-screen text translation, or both. This API applies to scenarios such as multilingual distribution of e-commerce videos, international social media marketing, and global brand advertising.
   * The API uses an asynchronous invocation mode. After you submit a translation task, you can obtain the `TaskId` and poll the task status by calling the query API until the task is completed and the result is returned.
   * ## Scenarios
   * *   **Cross-border e-commerce video localization**: Translates the speech subtitles and selling point text in product introduction videos into the language of the target market to promote products on overseas platforms.
   *     
   * *   **International social media marketing**: Localizes speech subtitles and on-screen text for platforms such as TikTok, Instagram, and YouTube with one click to improve comprehension and conversion rates among overseas users.
   *     
   * *   **Global brand advertising**: Automatically generates video versions in the corresponding languages based on the target regions to reduce manual production costs.
   *     
   * *   **Training and product instructions**: Translates the speech subtitles and on-screen text in training courses or product demo videos into multiple languages for global teams.
   * ## Features
   * | Capability | Identifier | Description |
   * | --- | --- | --- |
   * | Speech subtitle translation | `speech` | Translates the video speech into target language dubbing. You can choose to erase the original subtitles only or replace them with translated subtitles. By default, the original subtitles are not processed and no new subtitles are added. |
   * | On-screen text translation | `visual` | Translates the source language text in the video frames, or only erases the on-screen text without translation. You can choose to erase brand logos. |
   * Speech subtitle translation (speech) generates target language dubbing based on the spoken content in the video, processes the subtitles based on the original subtitle processing option, and synthesizes the final video. Original subtitles refer to the existing subtitles in the video frames that correspond to the spoken content. Replacing with translated subtitles erases the original subtitles first and then adds subtitles synchronized with the translated speech.
   * On-screen text translation (visual) targets the recognizable original video language text in the video frames, such as titles, product selling points, and descriptive text. It can be used independently without selecting speech subtitle translation first, and does not require the text to appear in the speech. Original subtitles within the processing scope may also be processed.
   * When both speech and visual are selected, the speech subtitle translation is completed and the video is synthesized first, and then the on-screen text processing is performed on this video. The translated dubbing is retained, and a final video is output. The order of capabilities in the array does not affect the execution order. Therefore, not processing original subtitles only means that no subtitles are erased or added during the speech subtitle phase, and subsequent on-screen text processing may still change the original subtitles. Subtitles that have been replaced with translated subtitles are retained during subsequent on-screen text processing.
   * 
   * @param request - VideoTranslationRequest
   * @returns VideoTranslationResponse
   */
  async videoTranslation(request: $_model.VideoTranslationRequest): Promise<$_model.VideoTranslationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.videoTranslationWithOptions(request, runtime);
  }

  /**
   * Generates virtual try-on images by using AI algorithms to replace a model\\"s clothing with a specified garment. The service preserves the model\\"s pose, facial features, and background details while ensuring a realistic and well-fitted appearance. Users only need to provide the URLs of the original model and garment images to obtain the processed images.
   * 
   * @remarks
   * *Note:**
   * VirtualTryOn is an early version that supports only single-item try-on and is scheduled to be deprecated soon.
   * New features such as multi-item outfit matching, model replacement, and pose replacement are now available in [Virtual try-on (AiTryOn)](https://api.aliyun.com/document/Aidge/2026-04-28/AiTryOn). Refer to the new API for integration.
   * ## Scenarios
   * - **Virtual try-on for apparel:**
   * Supports various apparel categories such as tops, bottoms, jumpsuits, and dresses. After users upload a model image and a product image, the service generates natural and realistic try-on effects to intuitively display how the garment looks on the model.
   * - **Virtual try-on for footwear and headwear:**
   * Supports virtual try-on for products such as shoes and hats. The service intelligently matches the product position and proportion based on the model\\"s pose and body parts to present a coordinated and realistic wearing effect.
   * - **E-commerce product display and marketing:**
   * Helps merchants quickly generate model try-on images for different products. This reduces the costs of traditional photography, outfit changes, and post-production, and improves the production efficiency of product images.
   * - **Online shopping experience optimization:**
   * Allows consumers to preview the wearing effect of products through virtual try-on. This provides a more intuitive understanding of the product style, matching, and overall effect to assist in purchase decisions and enhance the shopping experience.
   * ## Features
   * - **First, users need to input a model image and a product image. The system uses the model image as the try-on subject and applies the garment from the product image to the model:**
   *   - a. Model image: The image of the person for the virtual try-on.
   *   - b. Product image: The image of the garment, shoes, or hat to be worn by the model.
   * - **Second, users can select the corresponding product type based on the actual product. Supported types include tops, bottoms, jumpsuits, dresses, shoes, and hats:**
   *   - a. Specify product type: Users can directly input the type of the current product. The system will process it according to the specified type.
   *   - b. Automatic type recognition: If users do not input the product type, the system will automatically recognize the product category in the product image and perform the virtual try-on based on the recognition result.
   * - **Finally, the system combines the model image, product image, and product type to generate a virtual try-on image, displaying the wearing effect of the product on the model:**
   *   - a. Preserve model details: The generation process does not alter the appearance, hairstyle, pose, body shape, or other details of the person in the original model image.
   *   - b. Maintain image consistency: The background, composition, lighting, and overall visual effect of the original model image remain unchanged. Only the wearing area corresponding to the product is processed.
   *   - c. Generate try-on effect: The product is naturally applied to the model, fitting the pose and body structure of the person to generate a coordinated and realistic virtual try-on image.
   * ## Examples
   * | **Type** | **Model image** | **Garment image** | **Try-on result** |
   * | --- | --- | --- | --- |
   * | Tops | ![lQLPJv-OKUNDSxvNBojNA62wAMWEBuiTUuMKXnNidWFWAA_941_1672.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/e4273b03-0d3b-4e98-b8f3-8713fccee303.png) | ![Male model shirt front-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/d9ab77f7-8791-4fa5-8d76-4fda3e2e1310.png) | ![7c1c0c04-9828-940f-b86d-c08f7ec8fb97_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/42982786-73ee-4d23-a8d0-551f7a18be22.png) |
   * | Bottoms | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/64147be2-0c95-431a-8c04-f756fac96db2.jpeg) | ![Bootcut jeans-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/f79a31cb-08bd-4b59-be9d-9b9aa3f60230.png) | ![adbb8e02-9738-991a-9699-f46bc5c089a9_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/297f29eb-7bc9-49a5-b4f7-114375a0f312.png) |
   * | Shoes | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/64147be2-0c95-431a-8c04-f756fac96db2.jpeg) | ![Male model shoes front-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/bb9804b5-0ab9-485b-829b-d54708377fd2.png) | ![91d7b8c4-fc31-9a7f-8b6e-3bec5e62efb3_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/8e54fdc3-7a86-4e3b-aa1d-f3741ce7658c.png) |
   * | Jumpsuits | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/eddffa7c-a494-4f5b-9d66-da758fb0265f.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/7f5cec40-a884-4640-8339-6109305dfa1d.png) | ![20c8b46a-213e-985c-aab2-d56f8752f3a4_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/635096eb-f2b2-4fd8-91d8-4c7e2e7d7ad1.png) |
   * | Dresses | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/eddffa7c-a494-4f5b-9d66-da758fb0265f.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/3d4a6de0-95d2-40cf-9105-48b5e899e0d3.png) | ![45b630e6-4e9d-9bf0-bb4e-224b30a91f77_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/a3cbb609-db71-47d6-8ac6-884f18c6596f.png) |
   * | Hats | ![adbb8e02-9738-991a-9699-f46bc5c089a9_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/ac26f38e-acc7-49d1-a4ec-a51b54e4bd66.png) | ![Hat-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/34176b57-3aa8-4b6e-8d0f-808ae953654a.png) | ![881f02f3-12f5-95dd-b651-98fab6e30fa0_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/949b4c28-8821-4aa5-a2b4-e4acc1e57b9b.png) |
   * 
   * @param request - VirtualTryOnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VirtualTryOnResponse
   */
  async virtualTryOnWithOptions(request: $_model.VirtualTryOnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VirtualTryOnResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clothImageUrl)) {
      query["ClothImageUrl"] = request.clothImageUrl;
    }

    if (!$dara.isNull(request.clothType)) {
      query["ClothType"] = request.clothType;
    }

    if (!$dara.isNull(request.modelImageUrl)) {
      query["ModelImageUrl"] = request.modelImageUrl;
    }

    if (!$dara.isNull(request.resolution)) {
      query["Resolution"] = request.resolution;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VirtualTryOn",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VirtualTryOnResponse>(await this.callApi(params, req, runtime), new $_model.VirtualTryOnResponse({}));
  }

  /**
   * Generates virtual try-on images by using AI algorithms to replace a model\\"s clothing with a specified garment. The service preserves the model\\"s pose, facial features, and background details while ensuring a realistic and well-fitted appearance. Users only need to provide the URLs of the original model and garment images to obtain the processed images.
   * 
   * @remarks
   * *Note:**
   * VirtualTryOn is an early version that supports only single-item try-on and is scheduled to be deprecated soon.
   * New features such as multi-item outfit matching, model replacement, and pose replacement are now available in [Virtual try-on (AiTryOn)](https://api.aliyun.com/document/Aidge/2026-04-28/AiTryOn). Refer to the new API for integration.
   * ## Scenarios
   * - **Virtual try-on for apparel:**
   * Supports various apparel categories such as tops, bottoms, jumpsuits, and dresses. After users upload a model image and a product image, the service generates natural and realistic try-on effects to intuitively display how the garment looks on the model.
   * - **Virtual try-on for footwear and headwear:**
   * Supports virtual try-on for products such as shoes and hats. The service intelligently matches the product position and proportion based on the model\\"s pose and body parts to present a coordinated and realistic wearing effect.
   * - **E-commerce product display and marketing:**
   * Helps merchants quickly generate model try-on images for different products. This reduces the costs of traditional photography, outfit changes, and post-production, and improves the production efficiency of product images.
   * - **Online shopping experience optimization:**
   * Allows consumers to preview the wearing effect of products through virtual try-on. This provides a more intuitive understanding of the product style, matching, and overall effect to assist in purchase decisions and enhance the shopping experience.
   * ## Features
   * - **First, users need to input a model image and a product image. The system uses the model image as the try-on subject and applies the garment from the product image to the model:**
   *   - a. Model image: The image of the person for the virtual try-on.
   *   - b. Product image: The image of the garment, shoes, or hat to be worn by the model.
   * - **Second, users can select the corresponding product type based on the actual product. Supported types include tops, bottoms, jumpsuits, dresses, shoes, and hats:**
   *   - a. Specify product type: Users can directly input the type of the current product. The system will process it according to the specified type.
   *   - b. Automatic type recognition: If users do not input the product type, the system will automatically recognize the product category in the product image and perform the virtual try-on based on the recognition result.
   * - **Finally, the system combines the model image, product image, and product type to generate a virtual try-on image, displaying the wearing effect of the product on the model:**
   *   - a. Preserve model details: The generation process does not alter the appearance, hairstyle, pose, body shape, or other details of the person in the original model image.
   *   - b. Maintain image consistency: The background, composition, lighting, and overall visual effect of the original model image remain unchanged. Only the wearing area corresponding to the product is processed.
   *   - c. Generate try-on effect: The product is naturally applied to the model, fitting the pose and body structure of the person to generate a coordinated and realistic virtual try-on image.
   * ## Examples
   * | **Type** | **Model image** | **Garment image** | **Try-on result** |
   * | --- | --- | --- | --- |
   * | Tops | ![lQLPJv-OKUNDSxvNBojNA62wAMWEBuiTUuMKXnNidWFWAA_941_1672.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/e4273b03-0d3b-4e98-b8f3-8713fccee303.png) | ![Male model shirt front-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/d9ab77f7-8791-4fa5-8d76-4fda3e2e1310.png) | ![7c1c0c04-9828-940f-b86d-c08f7ec8fb97_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/42982786-73ee-4d23-a8d0-551f7a18be22.png) |
   * | Bottoms | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/64147be2-0c95-431a-8c04-f756fac96db2.jpeg) | ![Bootcut jeans-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/f79a31cb-08bd-4b59-be9d-9b9aa3f60230.png) | ![adbb8e02-9738-991a-9699-f46bc5c089a9_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/297f29eb-7bc9-49a5-b4f7-114375a0f312.png) |
   * | Shoes | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/64147be2-0c95-431a-8c04-f756fac96db2.jpeg) | ![Male model shoes front-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/bb9804b5-0ab9-485b-829b-d54708377fd2.png) | ![91d7b8c4-fc31-9a7f-8b6e-3bec5e62efb3_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/8e54fdc3-7a86-4e3b-aa1d-f3741ce7658c.png) |
   * | Jumpsuits | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/eddffa7c-a494-4f5b-9d66-da758fb0265f.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/7f5cec40-a884-4640-8339-6109305dfa1d.png) | ![20c8b46a-213e-985c-aab2-d56f8752f3a4_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/635096eb-f2b2-4fd8-91d8-4c7e2e7d7ad1.png) |
   * | Dresses | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/eddffa7c-a494-4f5b-9d66-da758fb0265f.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/3d4a6de0-95d2-40cf-9105-48b5e899e0d3.png) | ![45b630e6-4e9d-9bf0-bb4e-224b30a91f77_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/a3cbb609-db71-47d6-8ac6-884f18c6596f.png) |
   * | Hats | ![adbb8e02-9738-991a-9699-f46bc5c089a9_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/ac26f38e-acc7-49d1-a4ec-a51b54e4bd66.png) | ![Hat-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/34176b57-3aa8-4b6e-8d0f-808ae953654a.png) | ![881f02f3-12f5-95dd-b651-98fab6e30fa0_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/949b4c28-8821-4aa5-a2b4-e4acc1e57b9b.png) |
   * 
   * @param request - VirtualTryOnRequest
   * @returns VirtualTryOnResponse
   */
  async virtualTryOn(request: $_model.VirtualTryOnRequest): Promise<$_model.VirtualTryOnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.virtualTryOnWithOptions(request, runtime);
  }

  /**
   * Provides a one-stop AI image processing service for e-commerce sellers. Orchestrates six atomic capabilities—element recognition, intelligent cutout, intelligent erasure, image translation Pro, intelligent cropping, and high-definition upscaling—into an image processing workflow. Users can upload an image once, select the required capabilities, and complete multiple image optimizations in sequence to output product images that meet the requirements of e-commerce platforms. (Asynchronous)
   * 
   * @remarks
   * # 1. Product introduction
   * Provides a one-stop AI image processing service for e-commerce sellers. Orchestrates six atomic capabilities—element recognition, intelligent cutout, intelligent erasure, image translation Pro, intelligent cropping, and high-definition upscaling—into an image processing workflow. Users can upload an image once, select the required capabilities, and complete multiple image optimizations in sequence to output product images that meet the requirements of e-commerce platforms. (Asynchronous)
   * # 2. Scenarios
   * Applicable to batch optimization of product images in cross-platform listing scenarios. Adapts source product images into main images, SKU images, and detail images required by listing platforms. Supports the following operations:
   * *   Identifies low-quality images with text, watermarks, logos, or cluttered text, and allows users to filter the images to be processed.
   *     
   * *   Removes non-compliant elements such as watermarks, logos, cluttered text, and Chinese text from the original image.
   *     
   * *   Removes the background around the main product subject.
   *     
   * *   Translates text in the image into other languages.
   *     
   * *   Expands the image to other sizes (by ratio or dimensions) and automatically fills the background.
   *     
   * *   Crops the image to a specified size.
   *     
   * *   Upscales the image pixels by a specified factor.
   * # 3. Features
   * Users input the URL of a product image and select the required AI capabilities through the Ability parameter (1=Intelligent element recognition, 2=Intelligent cutout, 3=Intelligent erasure, 4=Image translation Pro, 5=Image expansion, 6=Intelligent cropping, 7=High-definition upscaling). The system executes the selected capabilities in a preset sequence. Because intelligent element recognition helps users determine whether an image contains specific elements, and the presence of these elements affects the selection of subsequent AI capabilities, an additional input option is provided. This option allows users to choose whether to filter out images from subsequent AI processing or retain them without further processing.
   * ![ai-pipeline-flowchart.svg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/bddb522a-0795-4b5c-b25d-10e933426367.svg)
   * The following section describes each AI capability:
   * **1. Intelligent element recognition**: An element detection capability designed specifically for e-commerce images. It identifies elements such as text, logos, watermarks, and text blocks in the subject and background of an image, and returns Boolean detection results. Users can filter images based on the recognition results (for example, processing only images with watermarks) and link this capability with subsequent ones—first identifying the types of elements to be optimized, and then precisely executing operations such as erasure.
   *     
   * **2. Intelligent cutout**: Automatically identifies the main product subject in an image and precisely separates it from the background. Based on deep learning models, it supports precise segmentation of complex edges such as hair and transparent objects. It can output images with transparent or white backgrounds, supports custom background colors and target size cropping, and directly generates product display images that comply with e-commerce platform specifications.
   *     
   * **3. Intelligent erasure**: Automatically identifies and removes non-compliant elements in e-commerce images, such as text, specific names (brand or store names), transparent text blocks, and cluttered text. It supports specifying the removal of elements in the subject area or non-subject area separately. It also supports precisely specifying the removal area through the Mask parameter to achieve efficient and compliant cleanup of large batches of images.
   *     
   * **4. Image translation Pro**: Integrates multimodal large model technology to translate text in an image into a target language and directly renders it in the corresponding position of the original image. It supports over 100 language pairs. It provides features such as product subject text protection, brand name protection, and translation intervention glossaries to avoid mistranslating embedded product information. After translation, it can return layout information such as text position, font, and color to support secondary editing.
   *     
   * **5. Intelligent image expansion**: Expands the image canvas based on AI generation technology to broaden the image field of view without cropping the subject. It supports multiple expansion methods: expanding by aspect ratio (1:1, 3:4, 4:3, 9:16, 16:9), scaling by horizontal or vertical proportion (1.0 to 3.0 times), and shifting pixels in the up, down, left, or right directions. The AI automatically fills and generates naturally transitioning background content.
   *     
   * **6. Intelligent cropping**: Intelligently crops images to specified sizes, automatically identifies the main subject area of the image, and precisely retains the core content. It supports custom output width and height (100 to 5000 pixels) and adapts to the image size requirements of different e-commerce platforms and ad slots, ensuring that the subject stands out and the picture is balanced after cropping.
   *     
   * **7. High-definition upscaling**: Enhances details and reduces noise while upscaling the image. It supports 2x to 4x upscaling. It is applicable to improving the clarity of low-resolution product images and optimizing visual presentation. It supports output in formats such as PNG, JPG, and BMP.
   * # 4. Effect comparison
   * | **Original image** | **Capabilities used** | **Output image** |
   * | --- | --- | --- |
   * | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/3c1af966-8a5a-491d-9bfa-aefc321c9bed.png) | *   Intelligent recognition
   *     
   * *   Image translation Pro
   *     
   * *   Intelligent cropping | ![R1.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/c2579e3e-389e-4717-84e3-834e60fea6b0.png) |
   * | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/a92d14a9-ecf4-4e77-ad96-a2fcdd95dd1d.png) | *   Intelligent cutout
   *     
   * *   Intelligent erasure
   *     
   * *   Intelligent cropping | ![R1.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/f631f578-3496-4aa1-b5ef-cd1ea603e049.png) |
   * | ![C2.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/12965cf8-cfdf-4a85-95fe-fdfcefcaa4ae.png) | *   Intelligent recognition
   *     
   * *   Intelligent erasure
   *     
   * *   High-definition upscaling | ![R2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/95d29e79-8622-45fb-b284-cd580fe40ea0.jpeg) |
   * 
   * @param tmpReq - VisionFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VisionFlowResponse
   */
  async visionFlowWithOptions(tmpReq: $_model.VisionFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VisionFlowResponse> {
    tmpReq.validate();
    let request = new $_model.VisionFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ability)) {
      request.abilityShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ability, "Ability", "json");
    }

    if (!$dara.isNull(tmpReq.nonobjectDetectElements)) {
      request.nonobjectDetectElementsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nonobjectDetectElements, "NonobjectDetectElements", "json");
    }

    if (!$dara.isNull(tmpReq.nonobjectRemoveElements)) {
      request.nonobjectRemoveElementsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nonobjectRemoveElements, "NonobjectRemoveElements", "json");
    }

    if (!$dara.isNull(tmpReq.objectDetectElements)) {
      request.objectDetectElementsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.objectDetectElements, "ObjectDetectElements", "json");
    }

    if (!$dara.isNull(tmpReq.objectRemoveElements)) {
      request.objectRemoveElementsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.objectRemoveElements, "ObjectRemoveElements", "json");
    }

    let query = { };
    if (!$dara.isNull(request.abilityShrink)) {
      query["Ability"] = request.abilityShrink;
    }

    if (!$dara.isNull(request.backGroundType)) {
      query["BackGroundType"] = request.backGroundType;
    }

    if (!$dara.isNull(request.glossary)) {
      query["Glossary"] = request.glossary;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.includingProductArea)) {
      query["IncludingProductArea"] = request.includingProductArea;
    }

    if (!$dara.isNull(request.isFilter)) {
      query["IsFilter"] = request.isFilter;
    }

    if (!$dara.isNull(request.mask)) {
      query["Mask"] = request.mask;
    }

    if (!$dara.isNull(request.nonobjectDetectElementsShrink)) {
      query["NonobjectDetectElements"] = request.nonobjectDetectElementsShrink;
    }

    if (!$dara.isNull(request.nonobjectRemoveElementsShrink)) {
      query["NonobjectRemoveElements"] = request.nonobjectRemoveElementsShrink;
    }

    if (!$dara.isNull(request.objectDetectElementsShrink)) {
      query["ObjectDetectElements"] = request.objectDetectElementsShrink;
    }

    if (!$dara.isNull(request.objectRemoveElementsShrink)) {
      query["ObjectRemoveElements"] = request.objectRemoveElementsShrink;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      query["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.targetHeight)) {
      query["TargetHeight"] = request.targetHeight;
    }

    if (!$dara.isNull(request.targetLanguage)) {
      query["TargetLanguage"] = request.targetLanguage;
    }

    if (!$dara.isNull(request.targetWidth)) {
      query["TargetWidth"] = request.targetWidth;
    }

    if (!$dara.isNull(request.translatingBrandInTheProduct)) {
      query["TranslatingBrandInTheProduct"] = request.translatingBrandInTheProduct;
    }

    if (!$dara.isNull(request.upscaleFactor)) {
      query["UpscaleFactor"] = request.upscaleFactor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VisionFlow",
      version: "2026-04-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VisionFlowResponse>(await this.callApi(params, req, runtime), new $_model.VisionFlowResponse({}));
  }

  /**
   * Provides a one-stop AI image processing service for e-commerce sellers. Orchestrates six atomic capabilities—element recognition, intelligent cutout, intelligent erasure, image translation Pro, intelligent cropping, and high-definition upscaling—into an image processing workflow. Users can upload an image once, select the required capabilities, and complete multiple image optimizations in sequence to output product images that meet the requirements of e-commerce platforms. (Asynchronous)
   * 
   * @remarks
   * # 1. Product introduction
   * Provides a one-stop AI image processing service for e-commerce sellers. Orchestrates six atomic capabilities—element recognition, intelligent cutout, intelligent erasure, image translation Pro, intelligent cropping, and high-definition upscaling—into an image processing workflow. Users can upload an image once, select the required capabilities, and complete multiple image optimizations in sequence to output product images that meet the requirements of e-commerce platforms. (Asynchronous)
   * # 2. Scenarios
   * Applicable to batch optimization of product images in cross-platform listing scenarios. Adapts source product images into main images, SKU images, and detail images required by listing platforms. Supports the following operations:
   * *   Identifies low-quality images with text, watermarks, logos, or cluttered text, and allows users to filter the images to be processed.
   *     
   * *   Removes non-compliant elements such as watermarks, logos, cluttered text, and Chinese text from the original image.
   *     
   * *   Removes the background around the main product subject.
   *     
   * *   Translates text in the image into other languages.
   *     
   * *   Expands the image to other sizes (by ratio or dimensions) and automatically fills the background.
   *     
   * *   Crops the image to a specified size.
   *     
   * *   Upscales the image pixels by a specified factor.
   * # 3. Features
   * Users input the URL of a product image and select the required AI capabilities through the Ability parameter (1=Intelligent element recognition, 2=Intelligent cutout, 3=Intelligent erasure, 4=Image translation Pro, 5=Image expansion, 6=Intelligent cropping, 7=High-definition upscaling). The system executes the selected capabilities in a preset sequence. Because intelligent element recognition helps users determine whether an image contains specific elements, and the presence of these elements affects the selection of subsequent AI capabilities, an additional input option is provided. This option allows users to choose whether to filter out images from subsequent AI processing or retain them without further processing.
   * ![ai-pipeline-flowchart.svg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/bddb522a-0795-4b5c-b25d-10e933426367.svg)
   * The following section describes each AI capability:
   * **1. Intelligent element recognition**: An element detection capability designed specifically for e-commerce images. It identifies elements such as text, logos, watermarks, and text blocks in the subject and background of an image, and returns Boolean detection results. Users can filter images based on the recognition results (for example, processing only images with watermarks) and link this capability with subsequent ones—first identifying the types of elements to be optimized, and then precisely executing operations such as erasure.
   *     
   * **2. Intelligent cutout**: Automatically identifies the main product subject in an image and precisely separates it from the background. Based on deep learning models, it supports precise segmentation of complex edges such as hair and transparent objects. It can output images with transparent or white backgrounds, supports custom background colors and target size cropping, and directly generates product display images that comply with e-commerce platform specifications.
   *     
   * **3. Intelligent erasure**: Automatically identifies and removes non-compliant elements in e-commerce images, such as text, specific names (brand or store names), transparent text blocks, and cluttered text. It supports specifying the removal of elements in the subject area or non-subject area separately. It also supports precisely specifying the removal area through the Mask parameter to achieve efficient and compliant cleanup of large batches of images.
   *     
   * **4. Image translation Pro**: Integrates multimodal large model technology to translate text in an image into a target language and directly renders it in the corresponding position of the original image. It supports over 100 language pairs. It provides features such as product subject text protection, brand name protection, and translation intervention glossaries to avoid mistranslating embedded product information. After translation, it can return layout information such as text position, font, and color to support secondary editing.
   *     
   * **5. Intelligent image expansion**: Expands the image canvas based on AI generation technology to broaden the image field of view without cropping the subject. It supports multiple expansion methods: expanding by aspect ratio (1:1, 3:4, 4:3, 9:16, 16:9), scaling by horizontal or vertical proportion (1.0 to 3.0 times), and shifting pixels in the up, down, left, or right directions. The AI automatically fills and generates naturally transitioning background content.
   *     
   * **6. Intelligent cropping**: Intelligently crops images to specified sizes, automatically identifies the main subject area of the image, and precisely retains the core content. It supports custom output width and height (100 to 5000 pixels) and adapts to the image size requirements of different e-commerce platforms and ad slots, ensuring that the subject stands out and the picture is balanced after cropping.
   *     
   * **7. High-definition upscaling**: Enhances details and reduces noise while upscaling the image. It supports 2x to 4x upscaling. It is applicable to improving the clarity of low-resolution product images and optimizing visual presentation. It supports output in formats such as PNG, JPG, and BMP.
   * # 4. Effect comparison
   * | **Original image** | **Capabilities used** | **Output image** |
   * | --- | --- | --- |
   * | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/3c1af966-8a5a-491d-9bfa-aefc321c9bed.png) | *   Intelligent recognition
   *     
   * *   Image translation Pro
   *     
   * *   Intelligent cropping | ![R1.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/c2579e3e-389e-4717-84e3-834e60fea6b0.png) |
   * | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/a92d14a9-ecf4-4e77-ad96-a2fcdd95dd1d.png) | *   Intelligent cutout
   *     
   * *   Intelligent erasure
   *     
   * *   Intelligent cropping | ![R1.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/f631f578-3496-4aa1-b5ef-cd1ea603e049.png) |
   * | ![C2.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/12965cf8-cfdf-4a85-95fe-fdfcefcaa4ae.png) | *   Intelligent recognition
   *     
   * *   Intelligent erasure
   *     
   * *   High-definition upscaling | ![R2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/95d29e79-8622-45fb-b284-cd580fe40ea0.jpeg) |
   * 
   * @param request - VisionFlowRequest
   * @returns VisionFlowResponse
   */
  async visionFlow(request: $_model.VisionFlowRequest): Promise<$_model.VisionFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.visionFlowWithOptions(request, runtime);
  }

}
