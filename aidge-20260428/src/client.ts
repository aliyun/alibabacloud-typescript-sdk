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
   * Generates virtual try-on images by applying a specified garment to a model image based on AI algorithms. The service preserves the model\\"s pose, facial features, and background details while ensuring a realistic and well-fitted appearance. You only need to provide the URLs of the original model and garment images to obtain the processed image.
   * 
   * @remarks
   * ## Scenarios
   * - **Virtual try-on for clothing:**
   * Supports various clothing categories such as tops, bottoms, jumpsuits, and dresses. After you upload a model image and a garment image, the service generates natural and realistic try-on effects to visually demonstrate how the garment looks on the model.
   * - **Virtual try-on for shoes and hats:**
   * Supports virtual try-on for accessories such as shoes and hats. The service intelligently matches the position and proportion of the product based on the model\\"s pose and body parts to present a coordinated and realistic wearing effect.
   * - **E-commerce product display and marketing:**
   * Helps merchants quickly generate model try-on images for different products. This reduces the costs of traditional photography, outfit changes, and post-production, and improves the production efficiency of product images.
   * - **Online shopping experience optimization:**
   * Allows consumers to preview the wearing effect of products through virtual try-on. This provides a more intuitive understanding of the style, matching, and overall effect of the product, which assists in purchase decisions and enhances the shopping experience.
   * ## Features
   * - **Provide a model image and a product image. The system uses the model image as the try-on subject and applies the garment from the product image to the model:**
   *   - a. Model image: The image of the person who will wear the garment in the virtual try-on.
   *   - b. Product image: The image of the clothing, shoes, or hat to be worn by the model.
   * - **Select the corresponding product type based on the actual product. Supported types include tops, bottoms, jumpsuits, dresses, shoes, and hats:**
   *   - a. Specify product type: You can directly specify the type of the current product, and the system will process it accordingly.
   *   - b. Automatic type recognition: If you do not specify the product type, the system automatically recognizes the product category in the product image and performs the virtual try-on based on the recognition result.
   * - **The system generates a virtual try-on image by combining the model image, product image, and product type to show the wearing effect of the product on the model:**
   *   - a. Preserve model details: The generation process does not alter the appearance, hairstyle, pose, body shape, or other details of the person in the original model image.
   *   - b. Maintain image consistency: The background, composition, lighting, and overall visual effect of the original model image remain unchanged. Only the wearing area corresponding to the product is processed.
   *   - c. Generate try-on effect: The product is naturally applied to the model, fitting the person\\"s pose and body structure to generate a coordinated and realistic virtual try-on image.
   * ## Examples
   * | **Type** | **Model image** | **Garment image** | **Try-on result** |
   * | --- | --- | --- | --- |
   * | Tops | ![lQLPJv-OKUNDSxvNBojNA62wAMWEBuiTUuMKXnNidWFWAA_941_1672.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/e4273b03-0d3b-4e98-b8f3-8713fccee303.png) | ![男模特衬衫正面-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/d9ab77f7-8791-4fa5-8d76-4fda3e2e1310.png) | ![7c1c0c04-9828-940f-b86d-c08f7ec8fb97_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/42982786-73ee-4d23-a8d0-551f7a18be22.png) |
   * | Bottoms | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/64147be2-0c95-431a-8c04-f756fac96db2.jpeg) | ![微喇牛仔裤-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/f79a31cb-08bd-4b59-be9d-9b9aa3f60230.png) | ![adbb8e02-9738-991a-9699-f46bc5c089a9_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/297f29eb-7bc9-49a5-b4f7-114375a0f312.png) |
   * | Shoes | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/64147be2-0c95-431a-8c04-f756fac96db2.jpeg) | ![男模特鞋子正面-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/bb9804b5-0ab9-485b-829b-d54708377fd2.png) | ![91d7b8c4-fc31-9a7f-8b6e-3bec5e62efb3_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/8e54fdc3-7a86-4e3b-aa1d-f3741ce7658c.png) |
   * | Jumpsuits | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/eddffa7c-a494-4f5b-9d66-da758fb0265f.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/7f5cec40-a884-4640-8339-6109305dfa1d.png) | ![20c8b46a-213e-985c-aab2-d56f8752f3a4_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/635096eb-f2b2-4fd8-91d8-4c7e2e7d7ad1.png) |
   * | Dresses | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/eddffa7c-a494-4f5b-9d66-da758fb0265f.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/3d4a6de0-95d2-40cf-9105-48b5e899e0d3.png) | ![45b630e6-4e9d-9bf0-bb4e-224b30a91f77_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/a3cbb609-db71-47d6-8ac6-884f18c6596f.png) |
   * | Hats | ![adbb8e02-9738-991a-9699-f46bc5c089a9_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/ac26f38e-acc7-49d1-a4ec-a51b54e4bd66.png) | ![帽子-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/34176b57-3aa8-4b6e-8d0f-808ae953654a.png) | ![881f02f3-12f5-95dd-b651-98fab6e30fa0_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/949b4c28-8821-4aa5-a2b4-e4acc1e57b9b.png) |
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
   * Generates virtual try-on images by applying a specified garment to a model image based on AI algorithms. The service preserves the model\\"s pose, facial features, and background details while ensuring a realistic and well-fitted appearance. You only need to provide the URLs of the original model and garment images to obtain the processed image.
   * 
   * @remarks
   * ## Scenarios
   * - **Virtual try-on for clothing:**
   * Supports various clothing categories such as tops, bottoms, jumpsuits, and dresses. After you upload a model image and a garment image, the service generates natural and realistic try-on effects to visually demonstrate how the garment looks on the model.
   * - **Virtual try-on for shoes and hats:**
   * Supports virtual try-on for accessories such as shoes and hats. The service intelligently matches the position and proportion of the product based on the model\\"s pose and body parts to present a coordinated and realistic wearing effect.
   * - **E-commerce product display and marketing:**
   * Helps merchants quickly generate model try-on images for different products. This reduces the costs of traditional photography, outfit changes, and post-production, and improves the production efficiency of product images.
   * - **Online shopping experience optimization:**
   * Allows consumers to preview the wearing effect of products through virtual try-on. This provides a more intuitive understanding of the style, matching, and overall effect of the product, which assists in purchase decisions and enhances the shopping experience.
   * ## Features
   * - **Provide a model image and a product image. The system uses the model image as the try-on subject and applies the garment from the product image to the model:**
   *   - a. Model image: The image of the person who will wear the garment in the virtual try-on.
   *   - b. Product image: The image of the clothing, shoes, or hat to be worn by the model.
   * - **Select the corresponding product type based on the actual product. Supported types include tops, bottoms, jumpsuits, dresses, shoes, and hats:**
   *   - a. Specify product type: You can directly specify the type of the current product, and the system will process it accordingly.
   *   - b. Automatic type recognition: If you do not specify the product type, the system automatically recognizes the product category in the product image and performs the virtual try-on based on the recognition result.
   * - **The system generates a virtual try-on image by combining the model image, product image, and product type to show the wearing effect of the product on the model:**
   *   - a. Preserve model details: The generation process does not alter the appearance, hairstyle, pose, body shape, or other details of the person in the original model image.
   *   - b. Maintain image consistency: The background, composition, lighting, and overall visual effect of the original model image remain unchanged. Only the wearing area corresponding to the product is processed.
   *   - c. Generate try-on effect: The product is naturally applied to the model, fitting the person\\"s pose and body structure to generate a coordinated and realistic virtual try-on image.
   * ## Examples
   * | **Type** | **Model image** | **Garment image** | **Try-on result** |
   * | --- | --- | --- | --- |
   * | Tops | ![lQLPJv-OKUNDSxvNBojNA62wAMWEBuiTUuMKXnNidWFWAA_941_1672.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/e4273b03-0d3b-4e98-b8f3-8713fccee303.png) | ![男模特衬衫正面-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/d9ab77f7-8791-4fa5-8d76-4fda3e2e1310.png) | ![7c1c0c04-9828-940f-b86d-c08f7ec8fb97_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/42982786-73ee-4d23-a8d0-551f7a18be22.png) |
   * | Bottoms | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/64147be2-0c95-431a-8c04-f756fac96db2.jpeg) | ![微喇牛仔裤-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/f79a31cb-08bd-4b59-be9d-9b9aa3f60230.png) | ![adbb8e02-9738-991a-9699-f46bc5c089a9_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/297f29eb-7bc9-49a5-b4f7-114375a0f312.png) |
   * | Shoes | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/64147be2-0c95-431a-8c04-f756fac96db2.jpeg) | ![男模特鞋子正面-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/bb9804b5-0ab9-485b-829b-d54708377fd2.png) | ![91d7b8c4-fc31-9a7f-8b6e-3bec5e62efb3_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/8e54fdc3-7a86-4e3b-aa1d-f3741ce7658c.png) |
   * | Jumpsuits | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/eddffa7c-a494-4f5b-9d66-da758fb0265f.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/7f5cec40-a884-4640-8339-6109305dfa1d.png) | ![20c8b46a-213e-985c-aab2-d56f8752f3a4_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/635096eb-f2b2-4fd8-91d8-4c7e2e7d7ad1.png) |
   * | Dresses | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/eddffa7c-a494-4f5b-9d66-da758fb0265f.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/3d4a6de0-95d2-40cf-9105-48b5e899e0d3.png) | ![45b630e6-4e9d-9bf0-bb4e-224b30a91f77_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/a3cbb609-db71-47d6-8ac6-884f18c6596f.png) |
   * | Hats | ![adbb8e02-9738-991a-9699-f46bc5c089a9_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/ac26f38e-acc7-49d1-a4ec-a51b54e4bd66.png) | ![帽子-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/34176b57-3aa8-4b6e-8d0f-808ae953654a.png) | ![881f02f3-12f5-95dd-b651-98fab6e30fa0_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/949b4c28-8821-4aa5-a2b4-e4acc1e57b9b.png) |
   * 
   * @param request - AiTryOnRequest
   * @returns AiTryOnResponse
   */
  async aiTryOn(request: $_model.AiTryOnRequest): Promise<$_model.AiTryOnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.aiTryOnWithOptions(request, runtime);
  }

  /**
   * Provides a one-click cross-platform product listing optimization service for cross-border e-commerce sellers (minimum cost edition). Accepts a product link from a source platform and outputs all listing assets adapted to the target platform requirements, including titles, attributes, main images, SKU images, detail images, and copywriting. Uses an officially preset minimum-cost workflow that focuses on filtering and lightweight processing without calling expensive image translation capabilities, maximizing cost control while ensuring listing compliance. (Asynchronous)
   * 
   * @remarks
   * ## Product Introduction
   * A one-click cross-platform product listing optimization service for cross-border e-commerce sellers (minimum cost edition). Accepts a product link from a source platform and outputs all listing assets adapted to the target platform requirements, including titles, attributes, main images, SKU images, detail images, and copywriting. Uses an officially preset minimum-cost workflow that focuses on filtering and lightweight processing without calling expensive image translation capabilities, maximizing cost control while ensuring listing compliance. (Asynchronous)
   * ## Scenarios
   * Suitable for cost-sensitive cross-platform listing scenarios where speed, volume, and low cost are the top priorities. Examples include bulk listing from 1688 to TEMU, batch uploading of high-SKU inventory, entry-level AI processing for top sellers and ERP/SaaS platforms, and merchants with high daily processing volumes but low requirements for marketing performance.
   * By filtering images that contain watermarks or non-compliant elements and prioritizing clean original images, this service reduces AI generation steps and helps merchants complete cross-platform listings at minimal call cost.
   * ## Features
   * This service uses an officially preset minimum-cost product optimization workflow that covers the entire pipeline from asset retrieval, compliance filtering, and text optimization to image processing:
   * 1. Automatically parses 1688 product links and extracts multiple asset types such as titles, SKUs, main images, detail images, and attributes.
   * 2. Performs text filtering and SEO optimization based on the TEMU platform blocklist and compliance rules.
   * 3. Intelligently identifies watermarks, logos, and Chinese text in images, prioritizing filtering and selecting clean original images. SKU images and a small number of main images are processed with image translation capabilities to meet platform standards (high-conversion images with marketing text may be filtered out).
   * 4. Completes category matching, attribute filling, and localized rewriting based on target platform requirements.
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
   * Provides a one-click cross-platform product listing optimization service for cross-border e-commerce sellers (minimum cost edition). Accepts a product link from a source platform and outputs all listing assets adapted to the target platform requirements, including titles, attributes, main images, SKU images, detail images, and copywriting. Uses an officially preset minimum-cost workflow that focuses on filtering and lightweight processing without calling expensive image translation capabilities, maximizing cost control while ensuring listing compliance. (Asynchronous)
   * 
   * @remarks
   * ## Product Introduction
   * A one-click cross-platform product listing optimization service for cross-border e-commerce sellers (minimum cost edition). Accepts a product link from a source platform and outputs all listing assets adapted to the target platform requirements, including titles, attributes, main images, SKU images, detail images, and copywriting. Uses an officially preset minimum-cost workflow that focuses on filtering and lightweight processing without calling expensive image translation capabilities, maximizing cost control while ensuring listing compliance. (Asynchronous)
   * ## Scenarios
   * Suitable for cost-sensitive cross-platform listing scenarios where speed, volume, and low cost are the top priorities. Examples include bulk listing from 1688 to TEMU, batch uploading of high-SKU inventory, entry-level AI processing for top sellers and ERP/SaaS platforms, and merchants with high daily processing volumes but low requirements for marketing performance.
   * By filtering images that contain watermarks or non-compliant elements and prioritizing clean original images, this service reduces AI generation steps and helps merchants complete cross-platform listings at minimal call cost.
   * ## Features
   * This service uses an officially preset minimum-cost product optimization workflow that covers the entire pipeline from asset retrieval, compliance filtering, and text optimization to image processing:
   * 1. Automatically parses 1688 product links and extracts multiple asset types such as titles, SKUs, main images, detail images, and attributes.
   * 2. Performs text filtering and SEO optimization based on the TEMU platform blocklist and compliance rules.
   * 3. Intelligently identifies watermarks, logos, and Chinese text in images, prioritizing filtering and selecting clean original images. SKU images and a small number of main images are processed with image translation capabilities to meet platform standards (high-conversion images with marketing text may be filtered out).
   * 4. Completes category matching, attribute filling, and localized rewriting based on target platform requirements.
   * 
   * @param request - AssetOptimizeLiteRequest
   * @returns AssetOptimizeLiteResponse
   */
  async assetOptimizeLite(request: $_model.AssetOptimizeLiteRequest): Promise<$_model.AssetOptimizeLiteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assetOptimizeLiteWithOptions(request, runtime);
  }

  /**
   * Provides a one-click cross-platform product listing optimization service for cross-border e-commerce sellers (best performance edition). Accepts a 1688 product link as input and outputs a complete set of assets adapted to TEMU platform requirements, including titles, attributes, main images, SKU images, detail images, and copywriting. Uses an officially pre-built best-performance workflow that maximizes AI capabilities, preserves and localizes brand marketing assets, and generates category-specific assets such as size charts for apparel categories. (Asynchronous)
   * 
   * @remarks
   * ## Product Introduction
   * A one-click cross-platform product listing optimization service for cross-border e-commerce sellers (best performance edition). Accepts a 1688 product link as input and outputs a complete set of assets adapted to TEMU platform requirements, including titles, attributes, main images, SKU images, detail images, and copywriting.
   * ## Common scenarios
   * Suitable for scenarios that demand high-quality cross-platform product listing assets and strong conversion performance. Examples include categories with high dependency on marketing assets such as apparel, accessories, beauty, and home goods. Also ideal for brand merchants and high-value products that need to preserve the tone of marketing images with embedded copywriting. Designed for top sellers and ERP/SaaS platforms conducting localized operations across multiple languages and markets, as well as scenarios that require category-specific assets (such as size charts and weight/dimension tables) to improve listing quality and conversion rates.
   * ## Functions and features
   * This service uses an officially pre-built "Best Performance" product optimization workflow that covers the entire pipeline from asset retrieval, diagnosis, filtering, and optimization to output:
   * 1. Automatically parses 1688 product links to extract all assets including titles, SKUs, main images, detail images, and attributes. Intelligently diagnoses missing assets and optimization opportunities.
   * 2. Uses LLM-based text compliance filtering, SEO keyword optimization, five-point description generation, and multilingual localization rewriting.
   * 3. Invokes multiple image processing capabilities including intelligent recognition, intelligent background removal, intelligent erasure, Image Translation Pro, image expansion, intelligent cropping, and HD upscaling.
   * 4. Outputs category-specific assets such as size charts and weight/dimension tables for apparel categories.
   * 5. Delivers a standardized product asset package ready for direct listing.
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
   * Provides a one-click cross-platform product listing optimization service for cross-border e-commerce sellers (best performance edition). Accepts a 1688 product link as input and outputs a complete set of assets adapted to TEMU platform requirements, including titles, attributes, main images, SKU images, detail images, and copywriting. Uses an officially pre-built best-performance workflow that maximizes AI capabilities, preserves and localizes brand marketing assets, and generates category-specific assets such as size charts for apparel categories. (Asynchronous)
   * 
   * @remarks
   * ## Product Introduction
   * A one-click cross-platform product listing optimization service for cross-border e-commerce sellers (best performance edition). Accepts a 1688 product link as input and outputs a complete set of assets adapted to TEMU platform requirements, including titles, attributes, main images, SKU images, detail images, and copywriting.
   * ## Common scenarios
   * Suitable for scenarios that demand high-quality cross-platform product listing assets and strong conversion performance. Examples include categories with high dependency on marketing assets such as apparel, accessories, beauty, and home goods. Also ideal for brand merchants and high-value products that need to preserve the tone of marketing images with embedded copywriting. Designed for top sellers and ERP/SaaS platforms conducting localized operations across multiple languages and markets, as well as scenarios that require category-specific assets (such as size charts and weight/dimension tables) to improve listing quality and conversion rates.
   * ## Functions and features
   * This service uses an officially pre-built "Best Performance" product optimization workflow that covers the entire pipeline from asset retrieval, diagnosis, filtering, and optimization to output:
   * 1. Automatically parses 1688 product links to extract all assets including titles, SKUs, main images, detail images, and attributes. Intelligently diagnoses missing assets and optimization opportunities.
   * 2. Uses LLM-based text compliance filtering, SEO keyword optimization, five-point description generation, and multilingual localization rewriting.
   * 3. Invokes multiple image processing capabilities including intelligent recognition, intelligent background removal, intelligent erasure, Image Translation Pro, image expansion, intelligent cropping, and HD upscaling.
   * 4. Outputs category-specific assets such as size charts and weight/dimension tables for apparel categories.
   * 5. Delivers a standardized product asset package ready for direct listing.
   * 
   * @param request - AssetOptimizeProRequest
   * @returns AssetOptimizeProResponse
   */
  async assetOptimizePro(request: $_model.AssetOptimizeProRequest): Promise<$_model.AssetOptimizeProResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assetOptimizeProWithOptions(request, runtime);
  }

  /**
   * Provides a cross-platform product category and attribute intelligent filling service based on multimodal foundation models. Takes product information from a source platform, automatically matches the category on the target listing platform, and intelligently fills in all required attribute fields under that category, offering a one-stop solution for category selection and attribute filling during product listing. (Synchronous)
   * 
   * @remarks
   * # Applicable scenarios
   * Cross-platform product listing attribute filling: When merchants list products across platforms, the attribute fields required by different platforms (such as the source platform and the TEMU platform) vary significantly, and complex hierarchical option dependencies exist (such as Material → Wood Type → Density). Manual filling is time-consuming and error-prone. This service automatically understands product information and intelligently fills in various attributes. It is applicable to scenarios such as automated bulk listing for top sellers, ERP/SaaS platform integration, and quick product listing for SMB merchants.
   * # Feature overview
   * Users input the product title, source category, product details, SKU, product attributes, and product images (up to 10). The system uses multimodal AI to understand the product semantics and visual features, and completes two core tasks: ① Matches the precise category path for the product on the TEMU platform. ② Automatically fills in the required attributes under that category (such as material, battery properties, size, and connectivity), and returns the confidence score and reasoning for each attribute. The API uses synchronous mode and returns results immediately after the call.
   * # Comparison
   * The following example shows the attributes of a USB fan:
   * | **1688 Attribute** | **1688 Attribute Value** | **TEMU Attribute** | **TEMU Attribute Value** | **Existing in 1688** |
   * | --- | --- | --- | --- | --- |
   * | Brand | Other | Power Mode | USB Charging (Built-in Battery) | No |
   * | Battery Life | 3-6h (inclusive) | Rechargeable Battery | Lithium Battery | No |
   * | Additional Features | Digital Display | Battery Capacity (mAh) | 4000 | Yes |
   * | Built-in Battery Capacity | 2000mAh-4000mAh (inclusive) | Fan Features | High Speed | No |
   * | Item Number | X699 | Control Method | Button | Yes |
   * | Main Downstream Platforms | ebay, Amazon, wish, AliExpress, Independent Site, LAZADA, Other | Finish Type | Painted | Yes |
   * | Has Licensable Own Brand | No | Recommended Use | Cooling | No |
   * | Dimensions | 65\\*60\\*171 | Fan Design | Wearable Fan | No |
   * | Applicable Gift Occasion | Personal Gift | Included Components | None | No |
   * | Shell Process | Spray Coating (UV Paint, Rubber Paint, Metallic Paint, Piano Lacquer, Pearl Powder) | Material | Plastic | No |
   * | Package Volume | 65\\*60\\*171 | Special Features | Portable | No |
   * | Appearance Dimensions | 51\\*36\\*34 | Indoor/Outdoor Use | Indoor and Outdoor | No |
   * | Wind Speed Levels | 3 Levels | Brand Name | None | No |
   * | Operation Method | Standard Button |  |  |  |
   * | Blade Material | ABS |  |  |  |
   * | Power Mode | USB |  |  |  |
   * | Built-in Battery | Yes |  |  |  |
   * | Patented Source | No |  |  |  |
   * | Color | X699 Fan-Yellow, X699 Fan-Light Purple, X699 Fan-Sky Blue, X699 Fan-Orange, X699 Fan-Light Green, Standard Small Fan |  |  |  |
   * | Main Sales Regions | Japan & Korea, Africa, Korea, Japan, Europe, South America, Southeast Asia, North America, Northeast Asia, Middle East, Latin America, Europe & America, Other |  |  |  |
   * | Cross-border Export Exclusive | Yes |  |  |  |
   * | Style | Fresh |  |  |  |
   * | Motor Type | Brushless Motor |  |  |  |
   * | Noise | 36dB(A)-45dB(A) (inclusive) |  |  |  |
   * | Net Weight | 125g |  |  |  |
   * | Number of Blades | 6 or More |  |  |  |
   * | Fan Type | Handheld Fan |  |  |  |
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
   * Provides a cross-platform product category and attribute intelligent filling service based on multimodal foundation models. Takes product information from a source platform, automatically matches the category on the target listing platform, and intelligently fills in all required attribute fields under that category, offering a one-stop solution for category selection and attribute filling during product listing. (Synchronous)
   * 
   * @remarks
   * # Applicable scenarios
   * Cross-platform product listing attribute filling: When merchants list products across platforms, the attribute fields required by different platforms (such as the source platform and the TEMU platform) vary significantly, and complex hierarchical option dependencies exist (such as Material → Wood Type → Density). Manual filling is time-consuming and error-prone. This service automatically understands product information and intelligently fills in various attributes. It is applicable to scenarios such as automated bulk listing for top sellers, ERP/SaaS platform integration, and quick product listing for SMB merchants.
   * # Feature overview
   * Users input the product title, source category, product details, SKU, product attributes, and product images (up to 10). The system uses multimodal AI to understand the product semantics and visual features, and completes two core tasks: ① Matches the precise category path for the product on the TEMU platform. ② Automatically fills in the required attributes under that category (such as material, battery properties, size, and connectivity), and returns the confidence score and reasoning for each attribute. The API uses synchronous mode and returns results immediately after the call.
   * # Comparison
   * The following example shows the attributes of a USB fan:
   * | **1688 Attribute** | **1688 Attribute Value** | **TEMU Attribute** | **TEMU Attribute Value** | **Existing in 1688** |
   * | --- | --- | --- | --- | --- |
   * | Brand | Other | Power Mode | USB Charging (Built-in Battery) | No |
   * | Battery Life | 3-6h (inclusive) | Rechargeable Battery | Lithium Battery | No |
   * | Additional Features | Digital Display | Battery Capacity (mAh) | 4000 | Yes |
   * | Built-in Battery Capacity | 2000mAh-4000mAh (inclusive) | Fan Features | High Speed | No |
   * | Item Number | X699 | Control Method | Button | Yes |
   * | Main Downstream Platforms | ebay, Amazon, wish, AliExpress, Independent Site, LAZADA, Other | Finish Type | Painted | Yes |
   * | Has Licensable Own Brand | No | Recommended Use | Cooling | No |
   * | Dimensions | 65\\*60\\*171 | Fan Design | Wearable Fan | No |
   * | Applicable Gift Occasion | Personal Gift | Included Components | None | No |
   * | Shell Process | Spray Coating (UV Paint, Rubber Paint, Metallic Paint, Piano Lacquer, Pearl Powder) | Material | Plastic | No |
   * | Package Volume | 65\\*60\\*171 | Special Features | Portable | No |
   * | Appearance Dimensions | 51\\*36\\*34 | Indoor/Outdoor Use | Indoor and Outdoor | No |
   * | Wind Speed Levels | 3 Levels | Brand Name | None | No |
   * | Operation Method | Standard Button |  |  |  |
   * | Blade Material | ABS |  |  |  |
   * | Power Mode | USB |  |  |  |
   * | Built-in Battery | Yes |  |  |  |
   * | Patented Source | No |  |  |  |
   * | Color | X699 Fan-Yellow, X699 Fan-Light Purple, X699 Fan-Sky Blue, X699 Fan-Orange, X699 Fan-Light Green, Standard Small Fan |  |  |  |
   * | Main Sales Regions | Japan & Korea, Africa, Korea, Japan, Europe, South America, Southeast Asia, North America, Northeast Asia, Middle East, Latin America, Europe & America, Other |  |  |  |
   * | Cross-border Export Exclusive | Yes |  |  |  |
   * | Style | Fresh |  |  |  |
   * | Motor Type | Brushless Motor |  |  |  |
   * | Noise | 36dB(A)-45dB(A) (inclusive) |  |  |  |
   * | Net Weight | 125g |  |  |  |
   * | Number of Blades | 6 or More |  |  |  |
   * | Fan Type | Handheld Fan |  |  |  |
   * 
   * @param request - CategoryAttributeMatchRequest
   * @returns CategoryAttributeMatchResponse
   */
  async categoryAttributeMatch(request: $_model.CategoryAttributeMatchRequest): Promise<$_model.CategoryAttributeMatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.categoryAttributeMatchWithOptions(request, runtime);
  }

  /**
   * Provides an intelligent cross-platform product category matching service based on a large language model. Accepts product information from a source platform, automatically matches the best category on the target listing platform, and returns a confidence score with matching reasons to help sellers quickly select categories for cross-platform product listing. (Synchronous)
   * 
   * @remarks
   * ## Product Introduction
   * An intelligent cross-platform product category matching service based on a large language model. Accepts product information from a source platform, automatically matches the best category on the target listing platform, and returns a confidence score with matching reasons to help sellers quickly select categories for cross-platform product listing. (Synchronous)
   * ## Common scenarios
   * Cross-platform product listing: After sourcing products, sellers list them on a target platform and must map each product to the correct category in the target platform\\"s category tree. Manually selecting categories requires familiarity with the entire category structure of the target platform, which is time-consuming, labor-intensive, and error-prone. Incorrect category mapping can cause products to be delisted.
   * This service automates category mapping and is suitable for bulk API calls from large sellers\\" proprietary systems, integration into ERP/SaaS platforms for automated listing workflows, and quick single-product listing for SMB sellers.
   * The current version supports only TEMU as the target listing platform. Automatic retrieval of product information from source platforms is not yet supported — users must provide product details manually. Support for this capability and additional source and target platforms will be added in future releases.
   * ## Features
   * Users provide fields such as product title, source category, product description, SKU information, and product attributes. The system uses an AI model to understand product semantics and matches the most appropriate category path from the full TEMU platform category tree. The response includes the complete category path (CategoryPath), category name (CategoryName), confidence score (0–100), and matching reason. The API operates in synchronous mode and returns results immediately, making it suitable for embedding in real-time business workflows.
   * ## Demo
   * | **Source platform** | **Image** | **Source platform category** | **Target platform** | **Target platform category** |
   * | --- | --- | --- | --- | --- |
   * | 1688 | ![done-image-245c58c8-a9fc-4e32-b959-8b4bcd52b264.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/jP2lRYjv7234mO8g/img/69a226e8-aff1-4891-bb0a-c47c1ea397ae.png) | USB Fans, Mini Fans | TEMU | Home Appliances
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
   * Provides an intelligent cross-platform product category matching service based on a large language model. Accepts product information from a source platform, automatically matches the best category on the target listing platform, and returns a confidence score with matching reasons to help sellers quickly select categories for cross-platform product listing. (Synchronous)
   * 
   * @remarks
   * ## Product Introduction
   * An intelligent cross-platform product category matching service based on a large language model. Accepts product information from a source platform, automatically matches the best category on the target listing platform, and returns a confidence score with matching reasons to help sellers quickly select categories for cross-platform product listing. (Synchronous)
   * ## Common scenarios
   * Cross-platform product listing: After sourcing products, sellers list them on a target platform and must map each product to the correct category in the target platform\\"s category tree. Manually selecting categories requires familiarity with the entire category structure of the target platform, which is time-consuming, labor-intensive, and error-prone. Incorrect category mapping can cause products to be delisted.
   * This service automates category mapping and is suitable for bulk API calls from large sellers\\" proprietary systems, integration into ERP/SaaS platforms for automated listing workflows, and quick single-product listing for SMB sellers.
   * The current version supports only TEMU as the target listing platform. Automatic retrieval of product information from source platforms is not yet supported — users must provide product details manually. Support for this capability and additional source and target platforms will be added in future releases.
   * ## Features
   * Users provide fields such as product title, source category, product description, SKU information, and product attributes. The system uses an AI model to understand product semantics and matches the most appropriate category path from the full TEMU platform category tree. The response includes the complete category path (CategoryPath), category name (CategoryName), confidence score (0–100), and matching reason. The API operates in synchronous mode and returns results immediately, making it suitable for embedding in real-time business workflows.
   * ## Demo
   * | **Source platform** | **Image** | **Source platform category** | **Target platform** | **Target platform category** |
   * | --- | --- | --- | --- | --- |
   * | 1688 | ![done-image-245c58c8-a9fc-4e32-b959-8b4bcd52b264.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/jP2lRYjv7234mO8g/img/69a226e8-aff1-4891-bb0a-c47c1ea397ae.png) | USB Fans, Mini Fans | TEMU | Home Appliances
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
   * Deletes display knowledge base content in batches synchronously.
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
   * Deletes display knowledge base content in batches synchronously.
   * 
   * @param request - DeleteDisplayKnowledgeRequest
   * @returns DeleteDisplayKnowledgeResponse
   */
  async deleteDisplayKnowledge(request: $_model.DeleteDisplayKnowledgeRequest): Promise<$_model.DeleteDisplayKnowledgeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDisplayKnowledgeWithOptions(request, runtime);
  }

  /**
   * Calculates the edge lengths and floor area of a floor display based on the floor display image and product detection boxes.
   * 
   * @remarks
   * ## Usage notes
   * **Before you use this operation, make sure that you fully understand the billing method and [pricing](https://www.aliyun.com/price/product#/ecs/detail) of the floor display area inference service.**
   * - This operation infers the actual dimensions (lengths of two edges) and floor area of a floor display based on the provided overall floor display image, SKU knowledge base, and product location information in the image.
   * - Make sure that the knowledge base corresponding to the specified `RagId` belongs to the caller and is in the active (`AVAILABLE`) state.
   * - The `Products` array must contain at least one product item, and each product item must have at least one bounding box defined in `Boxes`.
   * - All coordinate values are represented in a normalized coordinate system ranging from 0 to 1000. Make sure that the input satisfies the relationships `Left < Right` and `Top < Bottom`.
   * - Set a reasonable timeout period when you call this operation (300 seconds or less recommended) to avoid failures caused by network latency or high processing complexity.
   * - For calls in a production environment, use the POP Action method. The internal REST address is intended for integration testing during the development phase.
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
   * Calculates the edge lengths and floor area of a floor display based on the floor display image and product detection boxes.
   * 
   * @remarks
   * ## Usage notes
   * **Before you use this operation, make sure that you fully understand the billing method and [pricing](https://www.aliyun.com/price/product#/ecs/detail) of the floor display area inference service.**
   * - This operation infers the actual dimensions (lengths of two edges) and floor area of a floor display based on the provided overall floor display image, SKU knowledge base, and product location information in the image.
   * - Make sure that the knowledge base corresponding to the specified `RagId` belongs to the caller and is in the active (`AVAILABLE`) state.
   * - The `Products` array must contain at least one product item, and each product item must have at least one bounding box defined in `Boxes`.
   * - All coordinate values are represented in a normalized coordinate system ranging from 0 to 1000. Make sure that the input satisfies the relationships `Left < Right` and `Top < Bottom`.
   * - Set a reasonable timeout period when you call this operation (300 seconds or less recommended) to avoid failures caused by network latency or high processing complexity.
   * - For calls in a production environment, use the POP Action method. The internal REST address is intended for integration testing during the development phase.
   * 
   * @param request - DiduiAreaDeductionRequest
   * @returns DiduiAreaDeductionResponse
   */
  async diduiAreaDeduction(request: $_model.DiduiAreaDeductionRequest): Promise<$_model.DiduiAreaDeductionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.diduiAreaDeductionWithOptions(request, runtime);
  }

  /**
   * Analyzes the floor display area based on product recognition, SKU asset knowledge base, and a dedicated area reasoning model building. The product first locates floor display products, then reads the actual length, width, height, and reference images of the corresponding SKUs to infer the two side lengths and area of the bounding rectangle of the floor display footprint. This is applicable to floor display scale assessment and inspection review in retail stores.
   * 
   * @remarks
   * *Scenarios**
   * - Floor display area assessment: Infers the bounding rectangle area of the floor display footprint based on an overall photo of the floor display and the actual dimensions of the products.
   * - Multi-SKU mixed arrangement analysis: Uses the dimensions of each different product to participate in side length inference.
   * - Area result review: Verifies results by combining the original image, product assets, and the returned two side lengths and area.
   * **Features**
   * - SKU asset-driven: Specifies the asset knowledge base through ragId. Each participating product must have a name, positive length, width, and height values, and at least one HTTPS reference image.
   * - Phased area inference: Sequentially forms decision edges, SKU projections, dimension accumulation, and final area.
   * - Unified units: SKU asset dimensions are stored in centimeters. Result side lengths are output in meters and area in square meters.
   * - Completeness and numerical validation: Returns failure when there are missing assets, no valid bounding boxes, or the area does not satisfy product consistency.
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
   * Analyzes the floor display area based on product recognition, SKU asset knowledge base, and a dedicated area reasoning model building. The product first locates floor display products, then reads the actual length, width, height, and reference images of the corresponding SKUs to infer the two side lengths and area of the bounding rectangle of the floor display footprint. This is applicable to floor display scale assessment and inspection review in retail stores.
   * 
   * @remarks
   * *Scenarios**
   * - Floor display area assessment: Infers the bounding rectangle area of the floor display footprint based on an overall photo of the floor display and the actual dimensions of the products.
   * - Multi-SKU mixed arrangement analysis: Uses the dimensions of each different product to participate in side length inference.
   * - Area result review: Verifies results by combining the original image, product assets, and the returned two side lengths and area.
   * **Features**
   * - SKU asset-driven: Specifies the asset knowledge base through ragId. Each participating product must have a name, positive length, width, and height values, and at least one HTTPS reference image.
   * - Phased area inference: Sequentially forms decision edges, SKU projections, dimension accumulation, and final area.
   * - Unified units: SKU asset dimensions are stored in centimeters. Result side lengths are output in meters and area in square meters.
   * - Completeness and numerical validation: Returns failure when there are missing assets, no valid bounding boxes, or the area does not satisfy product consistency.
   * 
   * @param request - DiduiAreaDeductionProRequest
   * @returns DiduiAreaDeductionProResponse
   */
  async diduiAreaDeductionPro(request: $_model.DiduiAreaDeductionProRequest): Promise<$_model.DiduiAreaDeductionProResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.diduiAreaDeductionProWithOptions(request, runtime);
  }

  /**
   * Designed specifically for document translation. Supports translation between more than 400 language pairs (including bridged pairs) to handle multi-scenario, multi-page, and highly complex document translation. Scanned documents are not currently supported. Excels in the following areas:
   * - Content accuracy: translation accuracy, parameter and unit accuracy.
   * - Structural integrity: overall layout continuity, page margin and layout restoration.
   * 
   * @remarks
   * ## Product Introduction
   * Designed specifically for document translation. Supports translation between more than 400 language pairs (including bridged pairs) to handle multi-scenario, multi-page, and highly complex document translation. Scanned documents are not currently supported.
   * Excels in the following areas:
   * - Content accuracy: translation accuracy, parameter and unit accuracy
   * - Structural integrity: overall layout continuity, page margin and layout restoration
   * ## Common scenarios
   * Cross-border e-commerce product manuals, contracts, agreements, business proposals, qualification documents, textbooks, courseware, and other scenarios.
   * ## Functions and features
   * - Supports PDF and Word formats. Supports source documents that contain multiple languages. For a detailed language list, see [Language pair mapping table](https://www.alibabacloud.com/help/en/document_detail/3041883.html).
   * - Supports translation of text within images in documents, as well as complex translation scenarios involving charts, special symbols, and more.
   * - Supports high-fidelity layout restoration after translation.
   * - A single PDF supports up to 100 pages. A single Word document supports up to 100 pages.
   * - Supports custom translation results, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and skip translation (ABC-empty value). This is commonly used for brand name protection and similar scenarios. Simply pass the corresponding glossary ID when calling the API to meet your translation needs across different scenarios. You can upload up to 100,000 glossary entries. If you need more, contact the platform for assistance.
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
   * Designed specifically for document translation. Supports translation between more than 400 language pairs (including bridged pairs) to handle multi-scenario, multi-page, and highly complex document translation. Scanned documents are not currently supported. Excels in the following areas:
   * - Content accuracy: translation accuracy, parameter and unit accuracy.
   * - Structural integrity: overall layout continuity, page margin and layout restoration.
   * 
   * @remarks
   * ## Product Introduction
   * Designed specifically for document translation. Supports translation between more than 400 language pairs (including bridged pairs) to handle multi-scenario, multi-page, and highly complex document translation. Scanned documents are not currently supported.
   * Excels in the following areas:
   * - Content accuracy: translation accuracy, parameter and unit accuracy
   * - Structural integrity: overall layout continuity, page margin and layout restoration
   * ## Common scenarios
   * Cross-border e-commerce product manuals, contracts, agreements, business proposals, qualification documents, textbooks, courseware, and other scenarios.
   * ## Functions and features
   * - Supports PDF and Word formats. Supports source documents that contain multiple languages. For a detailed language list, see [Language pair mapping table](https://www.alibabacloud.com/help/en/document_detail/3041883.html).
   * - Supports translation of text within images in documents, as well as complex translation scenarios involving charts, special symbols, and more.
   * - Supports high-fidelity layout restoration after translation.
   * - A single PDF supports up to 100 pages. A single Word document supports up to 100 pages.
   * - Supports custom translation results, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and skip translation (ABC-empty value). This is commonly used for brand name protection and similar scenarios. Simply pass the corresponding glossary ID when calling the API to meet your translation needs across different scenarios. You can upload up to 100,000 glossary entries. If you need more, contact the platform for assistance.
   * 
   * @param request - DocumentTranslateRequest
   * @returns DocumentTranslateResponse
   */
  async documentTranslate(request: $_model.DocumentTranslateRequest): Promise<$_model.DocumentTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.documentTranslateWithOptions(request, runtime);
  }

  /**
   * Creates an asynchronous task for e-commerce video variation generation, an AI video service for product content production that covers video understanding, element replacement, quality verification, and result delivery. The service focuses on product and person consistency, detail restoration, conversion expression, and large-scale production. It supports targeted replacement of products or persons based on popular video templates, quickly generating multiple content versions while retaining original actions, camera rhythms, and marketing structures to reduce shooting, editing, and adaptation costs.
   * 
   * @remarks
   * ## **Product introduction**
   * E-commerce video variation generation is an AI video service for product content production that covers video understanding, element replacement, quality verification, and result delivery. The service focuses on product and person consistency, detail restoration, conversion expression, and large-scale production. It supports targeted replacement of products or persons based on popular video templates, quickly generating multiple content versions while retaining original actions, camera rhythms, and marketing structures to reduce shooting, editing, and adaptation costs.
   * ## **Scenarios**
   * - **Video asset variation generation:** Uses an existing e-commerce video as a template and replaces only specified products or persons in the video, preserving the original camera angles, rhythms, and marketing expressions as much as possible. This is suitable for producing assets with multiple SKUs, models, regions, and versions.
   * - **Quick asset generation for new products:** For newly launched products, this reduces the need for live-action shooting, studio setup, post-production editing, and repetitive production. It quickly deploys video assets for new products, helping merchants shorten the launch cycle from spotting a popular video to breaking down the script and shooting new content.
   * - **Product explanation and selling point expression:** Suitable for products such as apparel, beauty and personal care, food and beverage, home and daily necessities, 3C digital products, and small home appliances. It can replicate the explanation structure, display actions, and camera rhythms based on the selling points of the original video to generate explanation videos tailored for the conversion of new products.
   * - **Multi-selling point and multi-version testing:** Quickly generates multiple versions based on different product selling points, target audiences, scripts, camera angles, and visual styles. This supports merchants in conducting content testing and iterating on delivered assets.
   * ## **Feature overview**
   * ### **Core features**
   * *   **Supports two replacement modes:**
   *     
   *     *   **Product replacement (**`product_replacement`**)**: Retains the original video host\\"s identity, actions, scene, and sales structure, and replaces the original product with the target product.
   *         
   *     *   **Person replacement (**`person_replacement`**)**: Retains the original product, actions, scene, and sales structure, and replaces the person on camera with the target person from a reference image or description.
   *         
   * *   **Supports two generation modes:**
   *     
   *     *   **Reference generation (**`reference`**)**: 1:1 replication. Uses the original video as a complete reference to automatically generate a new video with the same duration as the original video. It retains the original script, storyboard, actions, scene, and rhythm, and only performs targeted replacement of specified content such as persons or products.
   *         
   *     *   **Rebuild generation (**`rebuild`**)**: Breaks down the script, storyboard, and key elements of the original video, retains only core content such as specified persons or products, and then redesigns and generates a new video. It is not limited by the duration of the original video and supports inputting a target duration.
   *         
   * *   **Fully automated end-to-end generation with zero prompt engineering required**: Only requires the reference video and target product or person images. The system automatically completes the entire process of video understanding, script planning, storyboard design, first-frame generation, and video synthesis.
   *     
   * *   **Product understanding and information structuring**: Identifies product categories, appearance, materials, colors, structures, and key components, and combines them with the titles, attributes, and selling points provided by the merchant to generate usable video expression information.
   *     
   * *   **Template video element replacement**: Supports replacing products or persons within the authorized scope, and defines the replacement scope and protection scope to minimize changes in non-target areas.
   *     
   * *   **Product subject consistency**: Maintains the stability of the product\\"s shape, color, texture, pattern, packaging, and logo as much as possible across different camera angles, perspectives, actions, and scenes.
   *     
   * *   **Product fidelity**: Multi-round VL quality inspection locks the product state (color, texture, structure, print) throughout the process to prevent product feature drift.
   *     
   * *   **Selling point script and storyboard replication**: Replicates the selling point planning, video structure, camera sequence, display actions, voiceover content, and ending style based on the original video.
   *     
   * *   **Commercial model adaptation**: Supports matching the corresponding model image and display method based on the product style, fit, target audience, and market demand.
   *     
   * *   **Quality verification and result feedback**: Performs multi-dimensional checks on the product subject, person, clothing, text, image integrity, audio, and overall usability, and outputs result information for manual review.
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
   * Creates an asynchronous task for e-commerce video variation generation, an AI video service for product content production that covers video understanding, element replacement, quality verification, and result delivery. The service focuses on product and person consistency, detail restoration, conversion expression, and large-scale production. It supports targeted replacement of products or persons based on popular video templates, quickly generating multiple content versions while retaining original actions, camera rhythms, and marketing structures to reduce shooting, editing, and adaptation costs.
   * 
   * @remarks
   * ## **Product introduction**
   * E-commerce video variation generation is an AI video service for product content production that covers video understanding, element replacement, quality verification, and result delivery. The service focuses on product and person consistency, detail restoration, conversion expression, and large-scale production. It supports targeted replacement of products or persons based on popular video templates, quickly generating multiple content versions while retaining original actions, camera rhythms, and marketing structures to reduce shooting, editing, and adaptation costs.
   * ## **Scenarios**
   * - **Video asset variation generation:** Uses an existing e-commerce video as a template and replaces only specified products or persons in the video, preserving the original camera angles, rhythms, and marketing expressions as much as possible. This is suitable for producing assets with multiple SKUs, models, regions, and versions.
   * - **Quick asset generation for new products:** For newly launched products, this reduces the need for live-action shooting, studio setup, post-production editing, and repetitive production. It quickly deploys video assets for new products, helping merchants shorten the launch cycle from spotting a popular video to breaking down the script and shooting new content.
   * - **Product explanation and selling point expression:** Suitable for products such as apparel, beauty and personal care, food and beverage, home and daily necessities, 3C digital products, and small home appliances. It can replicate the explanation structure, display actions, and camera rhythms based on the selling points of the original video to generate explanation videos tailored for the conversion of new products.
   * - **Multi-selling point and multi-version testing:** Quickly generates multiple versions based on different product selling points, target audiences, scripts, camera angles, and visual styles. This supports merchants in conducting content testing and iterating on delivered assets.
   * ## **Feature overview**
   * ### **Core features**
   * *   **Supports two replacement modes:**
   *     
   *     *   **Product replacement (**`product_replacement`**)**: Retains the original video host\\"s identity, actions, scene, and sales structure, and replaces the original product with the target product.
   *         
   *     *   **Person replacement (**`person_replacement`**)**: Retains the original product, actions, scene, and sales structure, and replaces the person on camera with the target person from a reference image or description.
   *         
   * *   **Supports two generation modes:**
   *     
   *     *   **Reference generation (**`reference`**)**: 1:1 replication. Uses the original video as a complete reference to automatically generate a new video with the same duration as the original video. It retains the original script, storyboard, actions, scene, and rhythm, and only performs targeted replacement of specified content such as persons or products.
   *         
   *     *   **Rebuild generation (**`rebuild`**)**: Breaks down the script, storyboard, and key elements of the original video, retains only core content such as specified persons or products, and then redesigns and generates a new video. It is not limited by the duration of the original video and supports inputting a target duration.
   *         
   * *   **Fully automated end-to-end generation with zero prompt engineering required**: Only requires the reference video and target product or person images. The system automatically completes the entire process of video understanding, script planning, storyboard design, first-frame generation, and video synthesis.
   *     
   * *   **Product understanding and information structuring**: Identifies product categories, appearance, materials, colors, structures, and key components, and combines them with the titles, attributes, and selling points provided by the merchant to generate usable video expression information.
   *     
   * *   **Template video element replacement**: Supports replacing products or persons within the authorized scope, and defines the replacement scope and protection scope to minimize changes in non-target areas.
   *     
   * *   **Product subject consistency**: Maintains the stability of the product\\"s shape, color, texture, pattern, packaging, and logo as much as possible across different camera angles, perspectives, actions, and scenes.
   *     
   * *   **Product fidelity**: Multi-round VL quality inspection locks the product state (color, texture, structure, print) throughout the process to prevent product feature drift.
   *     
   * *   **Selling point script and storyboard replication**: Replicates the selling point planning, video structure, camera sequence, display actions, voiceover content, and ending style based on the original video.
   *     
   * *   **Commercial model adaptation**: Supports matching the corresponding model image and display method based on the product style, fit, target audience, and market demand.
   *     
   * *   **Quality verification and result feedback**: Performs multi-dimensional checks on the product subject, person, clothing, text, image integrity, audio, and overall usability, and outputs result information for manual review.
   * 
   * @param request - EcomVideoRecreationRequest
   * @returns EcomVideoRecreationResponse
   */
  async ecomVideoRecreation(request: $_model.EcomVideoRecreationRequest): Promise<$_model.EcomVideoRecreationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.ecomVideoRecreationWithOptions(request, runtime);
  }

  /**
   * Provides a general-purpose image review service built on recapture recognition and multimodal large model element localization. The service determines whether an image is a recaptured photo and locates primary physical products, screen display areas, printed photos, and visible recapture clues. It is applicable to risk screening and manual review of inspection photos across multiple store categories.
   * 
   * @remarks
   * *Scenarios**
   * 1. Inspection photo review: Screens photos submitted by stores for recapture risks.
   * 2. Screen or printed photo recapture verification: Locates visible screens, printed photos, and other carriers.
   * 3. Review clue display: Annotates products and visible clues on the original image to assist re-examination.
   * **Features**
   * 1. General recapture detection: Returns an isFake Boolean result.
   * 2. Review element localization: Distinguishes physical products, screens, printed photos, and visible recapture clues. Products displayed within a screen are not redundantly output as physical products.
   * 3. Separate presentation of clues and conclusions: Localization text describes only visible phenomena. Normal reflections or standard packaging prints are not directly treated as recapture evidence.
   * Supports a single HTTPS image as input. Supplementary localization returns up to 12 targets, each containing a category, a bounding box, and up to 24 characters of visible text. The coverage field indicates whether the localization is complete.
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
   * Provides a general-purpose image review service built on recapture recognition and multimodal large model element localization. The service determines whether an image is a recaptured photo and locates primary physical products, screen display areas, printed photos, and visible recapture clues. It is applicable to risk screening and manual review of inspection photos across multiple store categories.
   * 
   * @remarks
   * *Scenarios**
   * 1. Inspection photo review: Screens photos submitted by stores for recapture risks.
   * 2. Screen or printed photo recapture verification: Locates visible screens, printed photos, and other carriers.
   * 3. Review clue display: Annotates products and visible clues on the original image to assist re-examination.
   * **Features**
   * 1. General recapture detection: Returns an isFake Boolean result.
   * 2. Review element localization: Distinguishes physical products, screens, printed photos, and visible recapture clues. Products displayed within a screen are not redundantly output as physical products.
   * 3. Separate presentation of clues and conclusions: Localization text describes only visible phenomena. Normal reflections or standard packaging prints are not directly treated as recapture evidence.
   * Supports a single HTTPS image as input. Supplementary localization returns up to 12 targets, each containing a category, a bounding box, and up to 24 characters of visible text. The coverage field indicates whether the localization is complete.
   * 
   * @param request - GeneralRephotographyDetectionRequest
   * @returns GeneralRephotographyDetectionResponse
   */
  async generalRephotographyDetection(request: $_model.GeneralRephotographyDetectionRequest): Promise<$_model.GeneralRephotographyDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generalRephotographyDetectionWithOptions(request, runtime);
  }

  /**
   * Intelligently crops images to specified dimensions, automatically identifies the main subject area, and precisely crops to various sizes to meet design requirements across different scenarios. (Synchronous)
   * 
   * @remarks
   * ## Product Introduction
   * The image cropping service resizes input images to specified dimensions. It automatically identifies the main subject area and precisely crops to various sizes to meet design requirements across different scenarios. (Synchronous)
   * ## Common scenarios
   * - **Multi-platform content distribution**: Automatically generates content in multiple sizes to meet the different image size requirements of various platforms and scenarios.
   *     
   * - **Content placement**: Automatically adjusts sizes for different ad slots across platforms, highlights the main subject, reduces whitespace, and emphasizes product features.
   * ## Features
   * *   Automatically identifies the main subject area of an image for precise cropping.
   *     
   * *   Supports custom cropping dimensions to adapt to different platforms and devices.
   * ## Comparison
   * | **Original image** | **Cropped to 1000×1000** | **Cropped to 3000×2000** |
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
   * Intelligently crops images to specified dimensions, automatically identifies the main subject area, and precisely crops to various sizes to meet design requirements across different scenarios. (Synchronous)
   * 
   * @remarks
   * ## Product Introduction
   * The image cropping service resizes input images to specified dimensions. It automatically identifies the main subject area and precisely crops to various sizes to meet design requirements across different scenarios. (Synchronous)
   * ## Common scenarios
   * - **Multi-platform content distribution**: Automatically generates content in multiple sizes to meet the different image size requirements of various platforms and scenarios.
   *     
   * - **Content placement**: Automatically adjusts sizes for different ad slots across platforms, highlights the main subject, reduces whitespace, and emphasizes product features.
   * ## Features
   * *   Automatically identifies the main subject area of an image for precise cropping.
   *     
   * *   Supports custom cropping dimensions to adapt to different platforms and devices.
   * ## Comparison
   * | **Original image** | **Cropped to 1000×1000** | **Cropped to 3000×2000** |
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
   * Automatically identifies the salient subject in an image, separates the subject from the background, and returns the subject image with the background removed. This product also provides multiple background options and custom size selections to optimize product display. (Synchronous)
   * 
   * @remarks
   * ## Product Introduction
   * The intelligent image matting product automatically identifies the salient subject in an image, separates the subject from the background, and returns the subject image with the background removed. This product also provides multiple background options and custom size selections to optimize product display. (Synchronous)
   * ## Scenarios
   * *   **Secondary editing of materials**: After separating the image subject from the background, you can further edit the image.
   *     
   * *   **Improved material processing efficiency**: Quickly extract the subject from various material images for easy background replacement, improving the production efficiency of advertising visuals and marketing posters.
   * ## Features.
   * #### 1. One-click precise subject recognition
   * *   **AI automatic recognition**: Based on deep learning models, intelligently distinguishes foreground subjects (portraits, products, objects, etc.) from backgrounds without manual tracing.
   *     
   * *   **Multi-scenario adaptation**: Supports precise segmentation in complex scenarios (such as hair strands, transparent objects, and fur edges) with an accuracy rate exceeding 95%.
   * #### 2. Intelligent edge optimization
   * *   **Detail-level processing**: Performs automatic optimization on edge aliasing and semi-transparent areas (such as smoke and glass) to preserve natural transition effects.
   * #### 3. Multi-format output and background operations
   * *   **Transparent background export**: Directly generates PNG images with transparent backgrounds and white backgrounds, suitable for e-commerce, design, and other scenarios.
   *     
   * *   **Custom background color support**
   * ## Effect comparison
   * | **Original image (input)** | **Result image (output)** |
   * | --- | --- |
   * | ![主图3.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/62b39e16-5b30-469f-88cd-7f31ba790008.jpeg) | ![ae4cd8ce912c4d9fa171dc5217be576d_202605251928_0.5899999737739563.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/bfad041f-a8e0-4d6f-a2bf-999292ea9ebc.jpeg) |
   * | ![主图2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/b201b356-24b8-4f98-babc-c7fe918bdc37.jpeg) | ![52033655bd054737960a87518655d935_202605251926_5.959999978542328.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/8b266603-e80a-42dd-9d3d-6fa9f0948e52.jpeg) |
   * | ![主图6.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/d3c0d876-42a0-4294-8ce5-2a20df2deab9.jpeg) | ![abdecd31cc45450f83b33f9baf4499c6_202605251930_7.9700000286102295.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/5677f55e-4fe3-4978-a676-1ce71ad604b0.jpeg) |
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
   * Automatically identifies the salient subject in an image, separates the subject from the background, and returns the subject image with the background removed. This product also provides multiple background options and custom size selections to optimize product display. (Synchronous)
   * 
   * @remarks
   * ## Product Introduction
   * The intelligent image matting product automatically identifies the salient subject in an image, separates the subject from the background, and returns the subject image with the background removed. This product also provides multiple background options and custom size selections to optimize product display. (Synchronous)
   * ## Scenarios
   * *   **Secondary editing of materials**: After separating the image subject from the background, you can further edit the image.
   *     
   * *   **Improved material processing efficiency**: Quickly extract the subject from various material images for easy background replacement, improving the production efficiency of advertising visuals and marketing posters.
   * ## Features.
   * #### 1. One-click precise subject recognition
   * *   **AI automatic recognition**: Based on deep learning models, intelligently distinguishes foreground subjects (portraits, products, objects, etc.) from backgrounds without manual tracing.
   *     
   * *   **Multi-scenario adaptation**: Supports precise segmentation in complex scenarios (such as hair strands, transparent objects, and fur edges) with an accuracy rate exceeding 95%.
   * #### 2. Intelligent edge optimization
   * *   **Detail-level processing**: Performs automatic optimization on edge aliasing and semi-transparent areas (such as smoke and glass) to preserve natural transition effects.
   * #### 3. Multi-format output and background operations
   * *   **Transparent background export**: Directly generates PNG images with transparent backgrounds and white backgrounds, suitable for e-commerce, design, and other scenarios.
   *     
   * *   **Custom background color support**
   * ## Effect comparison
   * | **Original image (input)** | **Result image (output)** |
   * | --- | --- |
   * | ![主图3.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/62b39e16-5b30-469f-88cd-7f31ba790008.jpeg) | ![ae4cd8ce912c4d9fa171dc5217be576d_202605251928_0.5899999737739563.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/bfad041f-a8e0-4d6f-a2bf-999292ea9ebc.jpeg) |
   * | ![主图2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/b201b356-24b8-4f98-babc-c7fe918bdc37.jpeg) | ![52033655bd054737960a87518655d935_202605251926_5.959999978542328.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/8b266603-e80a-42dd-9d3d-6fa9f0948e52.jpeg) |
   * | ![主图6.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/d3c0d876-42a0-4294-8ce5-2a20df2deab9.jpeg) | ![abdecd31cc45450f83b33f9baf4499c6_202605251930_7.9700000286102295.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/a2QnV4jwexAy7O4X/img/5677f55e-4fe3-4978-a676-1ce71ad604b0.jpeg) |
   * 
   * @param request - ImageMattingRequest
   * @returns ImageMattingResponse
   */
  async imageMatting(request: $_model.ImageMattingRequest): Promise<$_model.ImageMattingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageMattingWithOptions(request, runtime);
  }

  /**
   * Extracts the salient subject from an image, separates it from the background, and returns the subject image without the background. It also provides multiple background options and custom size options to optimize product display.
   * 
   * @remarks
   * # Scenarios
   * *   Supports secondary editing of materials: After the image subject is separated from the background, you can further edit the image.
   *     
   * *   Improves material processing efficiency: Quickly extracts the subjects from various material images for background replacement, which improves the production efficiency of advertising images and marketing posters.
   * # Features.
   * #### 1. One-click precise subject recognition
   * *   **AI-based automatic recognition**: Based on deep learning models, it intelligently distinguishes foreground subjects (portraits, products, objects, etc.) from the background without manual outlining.
   *     
   * *   **Multi-scenario adaptation**: Supports precise segmentation in complex scenarios (such as hair, transparent objects, and fur edges) with an accuracy rate of over 95%.
   * #### 2. Intelligent edge optimization
   * *   **Detail-level processing**: Performs automatic optimization on edge jaggies and semi-transparent areas (such as smoke and glass) to retain natural transition effects.
   * #### 3. Multi-format output and background operations
   * *   **Transparent background export**: Directly generates PNG images with transparent or white backgrounds, which adapts to e-commerce and design scenarios.
   *     
   * *   **Supports custom background colors**
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
   * Extracts the salient subject from an image, separates it from the background, and returns the subject image without the background. It also provides multiple background options and custom size options to optimize product display.
   * 
   * @remarks
   * # Scenarios
   * *   Supports secondary editing of materials: After the image subject is separated from the background, you can further edit the image.
   *     
   * *   Improves material processing efficiency: Quickly extracts the subjects from various material images for background replacement, which improves the production efficiency of advertising images and marketing posters.
   * # Features.
   * #### 1. One-click precise subject recognition
   * *   **AI-based automatic recognition**: Based on deep learning models, it intelligently distinguishes foreground subjects (portraits, products, objects, etc.) from the background without manual outlining.
   *     
   * *   **Multi-scenario adaptation**: Supports precise segmentation in complex scenarios (such as hair, transparent objects, and fur edges) with an accuracy rate of over 95%.
   * #### 2. Intelligent edge optimization
   * *   **Detail-level processing**: Performs automatic optimization on edge jaggies and semi-transparent areas (such as smoke and glass) to retain natural transition effects.
   * #### 3. Multi-format output and background operations
   * *   **Transparent background export**: Directly generates PNG images with transparent or white backgrounds, which adapts to e-commerce and design scenarios.
   *     
   * *   **Supports custom background colors**
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
   * Intelligent element recognition.
   * 
   * @remarks
   * ## Product Introduction
   * The Intelligent Element Recognition API is designed specifically for identifying specific elements in e-commerce images. It analyzes image details in depth, helping users quickly identify elements such as text, logos, watermarks, and text-containing color blocks in both the subject and background of images. This greatly improves the efficiency and accuracy of image screening. (Synchronous)
   * ## Scenarios
   * **1. Intelligent image screening and optimization:**
   * Merchants and platforms can use the Intelligent Element Recognition API for image screening to automatically identify images that contain specific elements such as watermarks and logos. After screening, you can call the Intelligent Removal API to optimize these images, improve image quality, and shorten the product release cycle.
   * **2. Automated image processing and efficiency improvement:**
   * With the Intelligent Element Recognition API, merchants and platforms can automate the image processing workflow by automatically identifying and marking image elements that require optimization. This process reduces manual intervention and improves image processing efficiency.
   * ## Features
   * **1. Definitions of image subject, image background, text, logo, watermark, and text-containing color block: For details, see the related examples in the removal documentation (reserved text link)**
   * *   Image subject: The core product area in the image.
   *     
   * *   Image background: The remaining part of the image other than the product subject.
   *     
   * *   Text: Horizontal, vertical, or diagonal English or Chinese text.
   *     
   * *   Logo: An emblem or trademark.
   *     
   * *   Watermark: Monochrome transparent text, emblems, images, URLs, or store names.
   *     
   * *   Text-containing color block: A color block outside the subject that contains text.
   *     
   * **2. The main features of the Intelligent Element Recognition API include:**
   * *   Element recognition: Identifies whether elements such as text, logos, watermarks, and text-containing color blocks exist in the image subject and background.
   *     
   * *   Workflow coordination: Used in combination with the Intelligent Removal API. First, the Intelligent Element Recognition API identifies elements that need to be removed, and then the Intelligent Removal API removes them effectively, ensuring the accuracy and efficiency of image processing.
   * ## Technical advantages
   * *   Synchronous batch processing: As a synchronous API, the Intelligent Element Recognition API can process a large number of images while maintaining fast response times, adapting to business needs of different scales.
   *     
   * *   Flexibility: Users can select the types of elements to identify, including elements in both the subject and non-subject areas, such as watermarks, logos, and text, to meet personalized recognition needs.
   * ## Comparison
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
   * Intelligent element recognition.
   * 
   * @remarks
   * ## Product Introduction
   * The Intelligent Element Recognition API is designed specifically for identifying specific elements in e-commerce images. It analyzes image details in depth, helping users quickly identify elements such as text, logos, watermarks, and text-containing color blocks in both the subject and background of images. This greatly improves the efficiency and accuracy of image screening. (Synchronous)
   * ## Scenarios
   * **1. Intelligent image screening and optimization:**
   * Merchants and platforms can use the Intelligent Element Recognition API for image screening to automatically identify images that contain specific elements such as watermarks and logos. After screening, you can call the Intelligent Removal API to optimize these images, improve image quality, and shorten the product release cycle.
   * **2. Automated image processing and efficiency improvement:**
   * With the Intelligent Element Recognition API, merchants and platforms can automate the image processing workflow by automatically identifying and marking image elements that require optimization. This process reduces manual intervention and improves image processing efficiency.
   * ## Features
   * **1. Definitions of image subject, image background, text, logo, watermark, and text-containing color block: For details, see the related examples in the removal documentation (reserved text link)**
   * *   Image subject: The core product area in the image.
   *     
   * *   Image background: The remaining part of the image other than the product subject.
   *     
   * *   Text: Horizontal, vertical, or diagonal English or Chinese text.
   *     
   * *   Logo: An emblem or trademark.
   *     
   * *   Watermark: Monochrome transparent text, emblems, images, URLs, or store names.
   *     
   * *   Text-containing color block: A color block outside the subject that contains text.
   *     
   * **2. The main features of the Intelligent Element Recognition API include:**
   * *   Element recognition: Identifies whether elements such as text, logos, watermarks, and text-containing color blocks exist in the image subject and background.
   *     
   * *   Workflow coordination: Used in combination with the Intelligent Removal API. First, the Intelligent Element Recognition API identifies elements that need to be removed, and then the Intelligent Removal API removes them effectively, ensuring the accuracy and efficiency of image processing.
   * ## Technical advantages
   * *   Synchronous batch processing: As a synchronous API, the Intelligent Element Recognition API can process a large number of images while maintaining fast response times, adapting to business needs of different scales.
   *     
   * *   Flexibility: Users can select the types of elements to identify, including elements in both the subject and non-subject areas, such as watermarks, logos, and text, to meet personalized recognition needs.
   * ## Comparison
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
   * Identifies specific elements in e-commerce images. It analyzes image details to help users quickly identify elements such as text, logos, watermarks, and text-containing color blocks in the main subject and background, significantly improving the efficiency and accuracy of image filtering.
   * 
   * @remarks
   * # Scenarios
   * 1. Intelligent image filtering and optimization:
   * Merchants and platforms can use the intelligent element recognition API to filter images and automatically identify images containing specific elements such as watermarks and logos. After filtering, they can further call the intelligent elimination API to optimize these images, improve image quality, and shorten the product release cycle.
   * 2. Automated image processing and efficiency improvement:
   * Through the intelligent element recognition API, merchants and platforms can automate the image processing workflow and automatically identify and mark image elements that need to be optimized. This workflow reduces manual intervention and improves the efficiency of image processing.
   * # Features
   * **1. Definitions of image subject, image background, text, logo, watermark, and text-containing color block: For details, see the relevant examples in the elimination documentation (reserved text link).**
   * *   Image subject: The core product area in the image.
   *     
   * *   Image background: The rest of the image other than the product subject.
   *     
   * *   Text: Horizontal, vertical, or diagonal English or Chinese text.
   *     
   * *   Logo: A logo or trademark.
   *     
   * *   Watermark: Monochrome transparent text, logos, images, URLs, or store names.
   *     
   * *   Text-containing color block: A color block containing text outside the subject.
   *     
   * **2. The main features of the intelligent element recognition API include:**
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
   * Identifies specific elements in e-commerce images. It analyzes image details to help users quickly identify elements such as text, logos, watermarks, and text-containing color blocks in the main subject and background, significantly improving the efficiency and accuracy of image filtering.
   * 
   * @remarks
   * # Scenarios
   * 1. Intelligent image filtering and optimization:
   * Merchants and platforms can use the intelligent element recognition API to filter images and automatically identify images containing specific elements such as watermarks and logos. After filtering, they can further call the intelligent elimination API to optimize these images, improve image quality, and shorten the product release cycle.
   * 2. Automated image processing and efficiency improvement:
   * Through the intelligent element recognition API, merchants and platforms can automate the image processing workflow and automatically identify and mark image elements that need to be optimized. This workflow reduces manual intervention and improves the efficiency of image processing.
   * # Features
   * **1. Definitions of image subject, image background, text, logo, watermark, and text-containing color block: For details, see the relevant examples in the elimination documentation (reserved text link).**
   * *   Image subject: The core product area in the image.
   *     
   * *   Image background: The rest of the image other than the product subject.
   *     
   * *   Text: Horizontal, vertical, or diagonal English or Chinese text.
   *     
   * *   Logo: A logo or trademark.
   *     
   * *   Watermark: Monochrome transparent text, logos, images, URLs, or store names.
   *     
   * *   Text-containing color block: A color block containing text outside the subject.
   *     
   * **2. The main features of the intelligent element recognition API include:**
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
   * Intelligently erases unwanted elements from e-commerce images, automatically identifying and removing text, specific names, transparent text blocks, and watermarks. Supports specifying objects to erase as needed, enabling efficient and precise batch processing of images to simplify image editing workflows (synchronous/asynchronous).
   * 
   * @remarks
   * ## Product Introduction
   * The Intelligent Image Eraser product is designed specifically for e-commerce images. It automatically identifies and removes text, specific names, transparent text blocks, and watermarks from e-commerce images. You can specify objects to erase as needed, enabling efficient and precise batch processing of images to simplify image editing workflows. (Synchronous/Asynchronous)
   * ## Common scenarios
   * *   **Efficient e-commerce image processing:**
   *     
   * Remove irrelevant visual elements to provide clearer, more focused product displays and enhance the shopping experience.
   * *   **Multi-platform product information synchronization:**
   *     
   * When listing products across different e-commerce platforms, quickly remove specific text and watermarks to comply with image specifications of different platforms.
   * ## Functions and features
   * 1.  First, understand the definitions of image subject and image background. When specifying objects to erase, you can choose whether the erasure scope is the image subject or the image background area. Both API and editor access methods are supported to meet different types of requirements.
   *     
   *     1.  Image subject: the core product area in the image.
   *         
   *     2.  Image background: the remaining part of the image other than the product subject.
   *         
   * 2.  The following four types of objects can be erased: text, specific names, transparent text blocks, and watermarks. Refer to the following examples to clarify your requirements and perform targeted operations:
   * ## Effect comparison
   * | **Original image** | **Image after erasure** |
   * | --- | --- |
   * | ![主图1-豹纹大容量千禧单肩斜跨帆布包.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/AJdl65AyryVZyOke/img/4bd2c812-ed3c-45da-8a86-ebd29102f4b1.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/eff0eb1b-36df-431d-a010-3bb3b7348ff9.png) |
   * | ![主图1-带柄超短半贴圆头法式假指甲.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/c44ac17b-3fa4-4a6f-b411-90f1062b183b.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/af779684-4aa5-49b0-8668-34ab8bd4bcc1.png) |
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
   * Intelligently erases unwanted elements from e-commerce images, automatically identifying and removing text, specific names, transparent text blocks, and watermarks. Supports specifying objects to erase as needed, enabling efficient and precise batch processing of images to simplify image editing workflows (synchronous/asynchronous).
   * 
   * @remarks
   * ## Product Introduction
   * The Intelligent Image Eraser product is designed specifically for e-commerce images. It automatically identifies and removes text, specific names, transparent text blocks, and watermarks from e-commerce images. You can specify objects to erase as needed, enabling efficient and precise batch processing of images to simplify image editing workflows. (Synchronous/Asynchronous)
   * ## Common scenarios
   * *   **Efficient e-commerce image processing:**
   *     
   * Remove irrelevant visual elements to provide clearer, more focused product displays and enhance the shopping experience.
   * *   **Multi-platform product information synchronization:**
   *     
   * When listing products across different e-commerce platforms, quickly remove specific text and watermarks to comply with image specifications of different platforms.
   * ## Functions and features
   * 1.  First, understand the definitions of image subject and image background. When specifying objects to erase, you can choose whether the erasure scope is the image subject or the image background area. Both API and editor access methods are supported to meet different types of requirements.
   *     
   *     1.  Image subject: the core product area in the image.
   *         
   *     2.  Image background: the remaining part of the image other than the product subject.
   *         
   * 2.  The following four types of objects can be erased: text, specific names, transparent text blocks, and watermarks. Refer to the following examples to clarify your requirements and perform targeted operations:
   * ## Effect comparison
   * | **Original image** | **Image after erasure** |
   * | --- | --- |
   * | ![主图1-豹纹大容量千禧单肩斜跨帆布包.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/AJdl65AyryVZyOke/img/4bd2c812-ed3c-45da-8a86-ebd29102f4b1.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/eff0eb1b-36df-431d-a010-3bb3b7348ff9.png) |
   * | ![主图1-带柄超短半贴圆头法式假指甲.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/c44ac17b-3fa4-4a6f-b411-90f1062b183b.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/af779684-4aa5-49b0-8668-34ab8bd4bcc1.png) |
   * 
   * @param request - ImageRemovalProRequest
   * @returns ImageRemovalProResponse
   */
  async imageRemovalPro(request: $_model.ImageRemovalProRequest): Promise<$_model.ImageRemovalProResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageRemovalProWithOptions(request, runtime);
  }

  /**
   * Erases text, specific names, transparent text blocks, and watermarks from e-commerce images. This feature automatically identifies these elements and allows you to specify objects to be removed, enabling efficient and accurate processing of large batches of images to simplify image editing.
   * 
   * @remarks
   * ## Scenarios
   * *   **Efficient e-commerce image processing:**
   *     Removes irrelevant visual elements to provide clearer and more focused product displays, enhancing the customer shopping experience.
   * *   **Multi-platform product information synchronization:**
   *     When merchants list products on different e-commerce platforms, they can quickly remove specific text and watermarks to comply with the image specifications of different platforms.
   * ## Features
   * 1.  First, clarify the definitions of the image subject and the image background. In actual use, when specifying the objects to be removed, you can choose to remove them from the image subject or the image background. Both API and editor integration methods are supported to meet different types of requirements.
   *     
   *     1.  Image subject: the core product area in the image.
   *         
   *     2.  Image background: the rest of the image other than the product subject.
   *         
   * 2.  Second, the objects to be removed support the following four types: text, specific names, transparent text blocks, and watermarks. You can refer to the following examples to clarify your usage requirements and perform targeted operations:
   * ## Before and after
   * | **Original image** | **Erased image** |
   * | --- | --- |
   * | ![Main image 1 - Leopard print large capacity crossbody canvas bag.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/AJdl65AyryVZyOke/img/4bd2c812-ed3c-45da-8a86-ebd29102f4b1.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/eff0eb1b-36df-431d-a010-3bb3b7348ff9.png) |
   * | ![Main image 1 - Short half-cover round-tip French false nails with handle.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/c44ac17b-3fa4-4a6f-b411-90f1062b183b.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/af779684-4aa5-49b0-8668-34ab8bd4bcc1.png) |
   * 
   * @param request - ImageRemovalProAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageRemovalProAsyncResponse
   */
  async imageRemovalProAsyncWithOptions(request: $_model.ImageRemovalProAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageRemovalProAsyncResponse> {
    request.validate();
    let query = { };
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
   * Erases text, specific names, transparent text blocks, and watermarks from e-commerce images. This feature automatically identifies these elements and allows you to specify objects to be removed, enabling efficient and accurate processing of large batches of images to simplify image editing.
   * 
   * @remarks
   * ## Scenarios
   * *   **Efficient e-commerce image processing:**
   *     Removes irrelevant visual elements to provide clearer and more focused product displays, enhancing the customer shopping experience.
   * *   **Multi-platform product information synchronization:**
   *     When merchants list products on different e-commerce platforms, they can quickly remove specific text and watermarks to comply with the image specifications of different platforms.
   * ## Features
   * 1.  First, clarify the definitions of the image subject and the image background. In actual use, when specifying the objects to be removed, you can choose to remove them from the image subject or the image background. Both API and editor integration methods are supported to meet different types of requirements.
   *     
   *     1.  Image subject: the core product area in the image.
   *         
   *     2.  Image background: the rest of the image other than the product subject.
   *         
   * 2.  Second, the objects to be removed support the following four types: text, specific names, transparent text blocks, and watermarks. You can refer to the following examples to clarify your usage requirements and perform targeted operations:
   * ## Before and after
   * | **Original image** | **Erased image** |
   * | --- | --- |
   * | ![Main image 1 - Leopard print large capacity crossbody canvas bag.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/AJdl65AyryVZyOke/img/4bd2c812-ed3c-45da-8a86-ebd29102f4b1.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/eff0eb1b-36df-431d-a010-3bb3b7348ff9.png) |
   * | ![Main image 1 - Short half-cover round-tip French false nails with handle.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/c44ac17b-3fa4-4a6f-b411-90f1062b183b.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/af779684-4aa5-49b0-8668-34ab8bd4bcc1.png) |
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
   * Provides intelligent image erasure tailored for e-commerce images by automatically identifying and removing text, specific names, transparent text blocks, and unwanted overlays, and allows you to specify objects to remove for efficient and accurate batch processing to simplify image editing.
   * 
   * @remarks
   * ## Scenarios
   * *   **Efficient processing of e-commerce images:**  
   * Removes irrelevant visual elements to provide clearer and more focused product displays, enhancing the customer shopping experience.
   * *   **Multi-platform product information synchronization:**
   * When merchants synchronize product listings across different e-commerce platforms, they can quickly remove specific text and watermarks to comply with the image specifications of different platforms.
   * *   **Marketing material preparation:**
   * Merchants can easily remove original promotional information and quickly update it with the latest campaign information.
   * > Note: Merchants or platforms can batch remove unwanted elements in images to optimize image quality. We recommend using this feature in combination with the "Intelligent Recognition API" (coming soon) to first filter out images containing text, specific names, transparent text blocks, and watermarks, and then use the "Intelligent Erasure API" for batch removal. The Intelligent Recognition API focuses on "recognition", while the Intelligent Erasure API focuses on "erasure". By calling them in sequence, you can maximize the erasure effect and reduce "false removals" and "false recognitions".
   * ## Features
   * 1.  First, clarify the definitions of the image subject and the image background. In actual use, when specifying the objects to remove, you can choose whether the removal scope is the image subject or the image background area. Both API and editor integration methods are supported to meet different types of needs.
   *     
   *     1.  Image subject: the core product area in the image.
   *         
   *     2.  Image background: the rest of the image other than the product subject.
   *         
   * 2.  Second, the objects to remove support the following three cases:
   *     
   *     1.  The user selects only the type. You can select text, specific names, transparent text blocks, and watermarks. You can clarify your usage requirements through the following examples for targeted operations.
   *         
   *     2.  (Upgraded) Provides specified image erasure. Users can specify multiple images at a time.
   *         
   *     3.  (Upgraded) Provides specified text erasure. Users can specify multiple texts at a time.
   *         
   * Processing flow: The user provides the original image URL → OCR and VLM models detect the text or image position → The coordinates of the area to be repaired are determined → AI repairs and generates a clean image → The result image URL is returned.
   * ## Effect comparison
   * | **Objects that can be removed from the image** | **Original image** | **Image after erasure** |
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
   * | Specified image element erasure (supports multiple image links) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/9297951f-53c1-4476-8c69-5c31df3fce21.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/ef3f35aa-609f-454c-bba0-dd1710c83945.png) |
   * | Specified text erasure (supports multiple texts) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/c784d8be-4b4d-4972-8b99-828c742b8f03.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/805423ca-bd0d-4d44-a18e-a7d7bfe88587.png) |
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
   * Provides intelligent image erasure tailored for e-commerce images by automatically identifying and removing text, specific names, transparent text blocks, and unwanted overlays, and allows you to specify objects to remove for efficient and accurate batch processing to simplify image editing.
   * 
   * @remarks
   * ## Scenarios
   * *   **Efficient processing of e-commerce images:**  
   * Removes irrelevant visual elements to provide clearer and more focused product displays, enhancing the customer shopping experience.
   * *   **Multi-platform product information synchronization:**
   * When merchants synchronize product listings across different e-commerce platforms, they can quickly remove specific text and watermarks to comply with the image specifications of different platforms.
   * *   **Marketing material preparation:**
   * Merchants can easily remove original promotional information and quickly update it with the latest campaign information.
   * > Note: Merchants or platforms can batch remove unwanted elements in images to optimize image quality. We recommend using this feature in combination with the "Intelligent Recognition API" (coming soon) to first filter out images containing text, specific names, transparent text blocks, and watermarks, and then use the "Intelligent Erasure API" for batch removal. The Intelligent Recognition API focuses on "recognition", while the Intelligent Erasure API focuses on "erasure". By calling them in sequence, you can maximize the erasure effect and reduce "false removals" and "false recognitions".
   * ## Features
   * 1.  First, clarify the definitions of the image subject and the image background. In actual use, when specifying the objects to remove, you can choose whether the removal scope is the image subject or the image background area. Both API and editor integration methods are supported to meet different types of needs.
   *     
   *     1.  Image subject: the core product area in the image.
   *         
   *     2.  Image background: the rest of the image other than the product subject.
   *         
   * 2.  Second, the objects to remove support the following three cases:
   *     
   *     1.  The user selects only the type. You can select text, specific names, transparent text blocks, and watermarks. You can clarify your usage requirements through the following examples for targeted operations.
   *         
   *     2.  (Upgraded) Provides specified image erasure. Users can specify multiple images at a time.
   *         
   *     3.  (Upgraded) Provides specified text erasure. Users can specify multiple texts at a time.
   *         
   * Processing flow: The user provides the original image URL → OCR and VLM models detect the text or image position → The coordinates of the area to be repaired are determined → AI repairs and generates a clean image → The result image URL is returned.
   * ## Effect comparison
   * | **Objects that can be removed from the image** | **Original image** | **Image after erasure** |
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
   * | Specified image element erasure (supports multiple image links) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/9297951f-53c1-4476-8c69-5c31df3fce21.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/ef3f35aa-609f-454c-bba0-dd1710c83945.png) |
   * | Specified text erasure (supports multiple texts) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/c784d8be-4b4d-4972-8b99-828c742b8f03.png) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/Mp7ld7bZAb2VAOBQ/img/805423ca-bd0d-4d44-a18e-a7d7bfe88587.png) |
   * 
   * @param request - ImageRemoveAsyncRequest
   * @returns ImageRemoveAsyncResponse
   */
  async imageRemoveAsync(request: $_model.ImageRemoveAsyncRequest): Promise<$_model.ImageRemoveAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageRemoveAsyncWithOptions(request, runtime);
  }

  /**
   * Image Translation PLUS is designed specifically for e-commerce images and uses a Mixture of Experts (MOE) architecture. Compared to the Image Translation Lite and Pro editions, it delivers superior translation accuracy for multiple minority languages. We recommend using it for the following 12 language pairs, with more language pairs to be supported in the future.
   * 
   * @remarks
   * ## Product Introduction
   * Image Translation PLUS is designed specifically for e-commerce images and uses a Mixture of Experts (MOE) architecture. Compared to the Image Translation Lite and Pro editions, it delivers superior translation accuracy for multiple minority languages. Use it for the following 12 language pairs. More language pairs will be supported in the future.
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
   * Main product images and detail images for cross-border e-commerce.
   * ## Features
   * *   **Product body information protection**: Allows you to choose whether to translate text on the product body. This helps protect body information such as embedded product names from being translated.
   *     
   * *   **Brand name protection**: Allows you to choose whether to translate brand names on images. This helps protect brand name information from being translated.
   *     
   * *   **Translation intervention**: Allows you to customize translation results, including keeping text untranslated (ABC→ABC), specifying a translation (ABC→DEF), or removing text (ABC→empty value). This is commonly used for brand name protection and similar scenarios. Pass the corresponding intervention glossary ID when calling the API to meet your translation needs across different scenarios. You can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.
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
   * Image Translation PLUS is designed specifically for e-commerce images and uses a Mixture of Experts (MOE) architecture. Compared to the Image Translation Lite and Pro editions, it delivers superior translation accuracy for multiple minority languages. We recommend using it for the following 12 language pairs, with more language pairs to be supported in the future.
   * 
   * @remarks
   * ## Product Introduction
   * Image Translation PLUS is designed specifically for e-commerce images and uses a Mixture of Experts (MOE) architecture. Compared to the Image Translation Lite and Pro editions, it delivers superior translation accuracy for multiple minority languages. Use it for the following 12 language pairs. More language pairs will be supported in the future.
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
   * Main product images and detail images for cross-border e-commerce.
   * ## Features
   * *   **Product body information protection**: Allows you to choose whether to translate text on the product body. This helps protect body information such as embedded product names from being translated.
   *     
   * *   **Brand name protection**: Allows you to choose whether to translate brand names on images. This helps protect brand name information from being translated.
   *     
   * *   **Translation intervention**: Allows you to customize translation results, including keeping text untranslated (ABC→ABC), specifying a translation (ABC→DEF), or removing text (ABC→empty value). This is commonly used for brand name protection and similar scenarios. Pass the corresponding intervention glossary ID when calling the API to meet your translation needs across different scenarios. You can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.
   * 
   * @param request - ImageTranslationPlusRequest
   * @returns ImageTranslationPlusResponse
   */
  async imageTranslationPlus(request: $_model.ImageTranslationPlusRequest): Promise<$_model.ImageTranslationPlusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageTranslationPlusWithOptions(request, runtime);
  }

  /**
   * Translates e-commerce images by using the Mixture of Experts (MOE) architecture, delivering higher translation accuracy for multiple minor languages than the Lite and Pro editions.
   * 
   * @remarks
   * ## Scenarios
   * Main images and detail images for cross-border e-commerce.
   * ## Features
   * *   **Product subject information protection**: Allows you to specify whether to translate the text on the product subject. This helps you protect subject information, such as embedded product names, from being translated.
   *     
   * *   **Brand name protection**: Allows you to specify whether to translate brand names in the image. This helps you protect brand name information from being translated.
   *     
   * *   **Translation intervention**: Allows you to customize translation results, including keeping the original text (ABC-ABC), specifying a translation (ABC-DEF), or omitting the translation (ABC-null). This is commonly used in scenarios such as brand word protection. You can implement this by passing the corresponding intervention glossary ID when calling the API, which meets your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention words. If you need more, contact the platform for processing.
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
   * The asynchronous API for Image Translation Plus and other capabilities share the same result retrieval process, RocketMQ subscription rules, message encryption protocol, dependency configurations, and Java consumption and decryption code.
   * For the asynchronous call process, subscription rules, message format and encryption protocol, and detailed integration solutions, refer to [Asynchronous API call instructions](https://www.alibabacloud.com/help/en/aidge/asynchronous-interface-call-instructions).
   * 
   * @param request - ImageTranslationPlusAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageTranslationPlusAsyncResponse
   */
  async imageTranslationPlusAsyncWithOptions(request: $_model.ImageTranslationPlusAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageTranslationPlusAsyncResponse> {
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
   * Translates e-commerce images by using the Mixture of Experts (MOE) architecture, delivering higher translation accuracy for multiple minor languages than the Lite and Pro editions.
   * 
   * @remarks
   * ## Scenarios
   * Main images and detail images for cross-border e-commerce.
   * ## Features
   * *   **Product subject information protection**: Allows you to specify whether to translate the text on the product subject. This helps you protect subject information, such as embedded product names, from being translated.
   *     
   * *   **Brand name protection**: Allows you to specify whether to translate brand names in the image. This helps you protect brand name information from being translated.
   *     
   * *   **Translation intervention**: Allows you to customize translation results, including keeping the original text (ABC-ABC), specifying a translation (ABC-DEF), or omitting the translation (ABC-null). This is commonly used in scenarios such as brand word protection. You can implement this by passing the corresponding intervention glossary ID when calling the API, which meets your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention words. If you need more, contact the platform for processing.
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
   * The asynchronous API for Image Translation Plus and other capabilities share the same result retrieval process, RocketMQ subscription rules, message encryption protocol, dependency configurations, and Java consumption and decryption code.
   * For the asynchronous call process, subscription rules, message format and encryption protocol, and detailed integration solutions, refer to [Asynchronous API call instructions](https://www.alibabacloud.com/help/en/aidge/asynchronous-interface-call-instructions).
   * 
   * @param request - ImageTranslationPlusAsyncRequest
   * @returns ImageTranslationPlusAsyncResponse
   */
  async imageTranslationPlusAsync(request: $_model.ImageTranslationPlusAsyncRequest): Promise<$_model.ImageTranslationPlusAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageTranslationPlusAsyncWithOptions(request, runtime);
  }

  /**
   * Translates images using the Pro edition, which is designed for e-commerce images. This edition integrates multimodal foundation model technology to achieve more accurate image understanding, significantly improve translation quality, and continuously expand and optimize multilingual translation capabilities. More than 400 language directions are supported, including bridged directions.
   * 
   * @remarks
   * ## Product Introduction
   * The Image Translation Pro edition is designed for e-commerce images. It integrates multimodal foundation model technology to achieve more accurate image understanding, significantly improve translation quality, and continuously expand and optimize multilingual translation capabilities. More than 400 language directions are supported, including bridged directions.
   * ## Scenarios
   * E-commerce product images, marketing images, and images for various other scenarios.
   * ## Functions and features
   * - **Product subject information protection**: You can choose whether to translate text on the product subject, which helps protect subject information such as embedded product names from being translated.
   * - **Post-translation editing**: You can choose whether to return layout information such as text position, font, and color. This information can be used for secondary editing when integrated with an image editor. The editor SDK package is not yet available. Follow platform notifications for updates.
   * - **Brand name protection**: You can choose whether to translate brand names on images, which helps protect brand name information from being translated.
   * - **Translation intervention**: You can customize translation results, including keeping text untranslated (ABC→ABC), specifying translations (ABC→DEF), or removing text (ABC→empty value). This is commonly used for brand name protection and similar scenarios. Pass the corresponding intervention glossary ID when calling the API. You can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.  
   * - <props="china"> **Image editor integration**: For more information, see [Image Translation Editor Protocol](https://www.alibabacloud.com/help/en/document_detail/3042647.html).
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
   * Translates images using the Pro edition, which is designed for e-commerce images. This edition integrates multimodal foundation model technology to achieve more accurate image understanding, significantly improve translation quality, and continuously expand and optimize multilingual translation capabilities. More than 400 language directions are supported, including bridged directions.
   * 
   * @remarks
   * ## Product Introduction
   * The Image Translation Pro edition is designed for e-commerce images. It integrates multimodal foundation model technology to achieve more accurate image understanding, significantly improve translation quality, and continuously expand and optimize multilingual translation capabilities. More than 400 language directions are supported, including bridged directions.
   * ## Scenarios
   * E-commerce product images, marketing images, and images for various other scenarios.
   * ## Functions and features
   * - **Product subject information protection**: You can choose whether to translate text on the product subject, which helps protect subject information such as embedded product names from being translated.
   * - **Post-translation editing**: You can choose whether to return layout information such as text position, font, and color. This information can be used for secondary editing when integrated with an image editor. The editor SDK package is not yet available. Follow platform notifications for updates.
   * - **Brand name protection**: You can choose whether to translate brand names on images, which helps protect brand name information from being translated.
   * - **Translation intervention**: You can customize translation results, including keeping text untranslated (ABC→ABC), specifying translations (ABC→DEF), or removing text (ABC→empty value). This is commonly used for brand name protection and similar scenarios. Pass the corresponding intervention glossary ID when calling the API. You can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.  
   * - <props="china"> **Image editor integration**: For more information, see [Image Translation Editor Protocol](https://www.alibabacloud.com/help/en/document_detail/3042647.html).
   * 
   * @param request - ImageTranslationProRequest
   * @returns ImageTranslationProResponse
   */
  async imageTranslationPro(request: $_model.ImageTranslationProRequest): Promise<$_model.ImageTranslationProResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageTranslationProWithOptions(request, runtime);
  }

  /**
   * Translates images by using Image Translation Pro. This service is designed specifically for e-commerce images, integrates multimodal large language model technology for more accurate image understanding, significantly improves translation quality, and continuously expands and optimizes multilingual translation capabilities. It supports more than 400 language pairs, including pivot languages.
   * 
   * @remarks
   * ## Scenarios
   * E-commerce product images, marketing images, and images in various other scenarios.
   * ## Features
   * *   Product subject information protection: Allows you to specify whether to translate the text on the product subject. This helps protect the subject information, such as embedded product names, from being translated.
   *     
   * *   Post-translation editing: Allows you to specify whether to return layout information such as the position, font, and color of the text. This information can be used for secondary editing when integrated with an image editor. The SDK package for the editor is not yet available. Follow platform notifications for updates.
   *     
   * *   Brand name protection: Allows you to specify whether to translate brand names in the image. This helps protect brand name information from being translated.
   *     
   * *   Translation intervention: Allows you to customize translation results, including keeping the original text (ABC-ABC), specifying a translation (ABC-DEF), or omitting the translation (ABC-null). This is commonly used in scenarios such as brand word protection. You can implement this by passing the corresponding intervention glossary ID when calling the API, which meets your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.
   * ## Preparations and call process
   * Image Translation Pro supports both synchronous and asynchronous call methods. This topic describes the asynchronous call API. For synchronous calls, refer to [Image Translation Pro](https://www.alibabacloud.com/help/en/aidge/image-translation-pro).
   * The asynchronous APIs for text translation and other capabilities share the result retrieval process, ApsaraMQ for RocketMQ subscription rules, message encryption protocols, dependency configurations, and Java consumption and decryption code.
   * For the integration process, subscription rules, message formats and encryption protocols, and detailed integration solutions for asynchronous calls, refer to [Asynchronous API call instructions](https://www.alibabacloud.com/help/en/aidge/asynchronous-interface-call-instructions).
   * 
   * @param request - ImageTranslationProAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageTranslationProAsyncResponse
   */
  async imageTranslationProAsyncWithOptions(request: $_model.ImageTranslationProAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageTranslationProAsyncResponse> {
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
   * Translates images by using Image Translation Pro. This service is designed specifically for e-commerce images, integrates multimodal large language model technology for more accurate image understanding, significantly improves translation quality, and continuously expands and optimizes multilingual translation capabilities. It supports more than 400 language pairs, including pivot languages.
   * 
   * @remarks
   * ## Scenarios
   * E-commerce product images, marketing images, and images in various other scenarios.
   * ## Features
   * *   Product subject information protection: Allows you to specify whether to translate the text on the product subject. This helps protect the subject information, such as embedded product names, from being translated.
   *     
   * *   Post-translation editing: Allows you to specify whether to return layout information such as the position, font, and color of the text. This information can be used for secondary editing when integrated with an image editor. The SDK package for the editor is not yet available. Follow platform notifications for updates.
   *     
   * *   Brand name protection: Allows you to specify whether to translate brand names in the image. This helps protect brand name information from being translated.
   *     
   * *   Translation intervention: Allows you to customize translation results, including keeping the original text (ABC-ABC), specifying a translation (ABC-DEF), or omitting the translation (ABC-null). This is commonly used in scenarios such as brand word protection. You can implement this by passing the corresponding intervention glossary ID when calling the API, which meets your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.
   * ## Preparations and call process
   * Image Translation Pro supports both synchronous and asynchronous call methods. This topic describes the asynchronous call API. For synchronous calls, refer to [Image Translation Pro](https://www.alibabacloud.com/help/en/aidge/image-translation-pro).
   * The asynchronous APIs for text translation and other capabilities share the result retrieval process, ApsaraMQ for RocketMQ subscription rules, message encryption protocols, dependency configurations, and Java consumption and decryption code.
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
   * Translates text in images with support for over 400 language directions (including bridging). This product is designed specifically for e-commerce images, accurately handling complex text layouts within images and ensuring that translated content matches the image context. It helps e-commerce platforms and developers easily achieve multilingual conversion and rendering of image content. The product also returns layer information such as text position, font, and color, enabling secondary editing of translation results through an image editor.
   * 
   * @remarks
   * # 1. Product Introduction
   * The image translation product is designed specifically for e-commerce images, supporting over 400 language directions (including bridging). It accurately handles complex text layouts within images and ensures that translated content matches the image context, helping e-commerce platforms and developers easily achieve multilingual conversion and rendering of image content. The product also returns layer information such as text position, font, and color, enabling secondary editing of translation results through an image editor.
   * # 2. Common scenarios
   * E-commerce product images, marketing images, and images for various other scenarios.
   * # 3. Features
   * *   **Product subject information protection**: Allows you to choose whether to translate text on the product subject, helping protect subject information from being translated and avoiding translation of embedded information such as product names.
   *     
   * *   **Brand name protection**: Allows you to choose whether to translate brand names on images, helping protect brand name information from being translated.
   *     
   * *   **Secondary editing after translation (layer information)**: Allows you to choose whether to return layer information such as text position, font, and color, which can be used to connect to an image editor for secondary editing of translation results. Follow platform notifications for updates on the editor SDK package release.
   *     
   * *   **Translation intervention support**: Allows you to customize translation results, including no translation (ABC-ABC), specified translation (ABC-DEF), and skip translation (ABC-empty value). This is commonly used for brand term protection and similar scenarios. Simply pass the corresponding intervention glossary ID when calling the API to meet your translation needs across different scenarios. You can upload up to 100,000 intervention terms. Contact the platform if you need more.  
   * <props="china">*   **Image editor integration support**: For more information, see [Image translation editor protocol](https://www.alibabacloud.com/help/en/document_detail/3042647.html).
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
   * Translates text in images with support for over 400 language directions (including bridging). This product is designed specifically for e-commerce images, accurately handling complex text layouts within images and ensuring that translated content matches the image context. It helps e-commerce platforms and developers easily achieve multilingual conversion and rendering of image content. The product also returns layer information such as text position, font, and color, enabling secondary editing of translation results through an image editor.
   * 
   * @remarks
   * # 1. Product Introduction
   * The image translation product is designed specifically for e-commerce images, supporting over 400 language directions (including bridging). It accurately handles complex text layouts within images and ensures that translated content matches the image context, helping e-commerce platforms and developers easily achieve multilingual conversion and rendering of image content. The product also returns layer information such as text position, font, and color, enabling secondary editing of translation results through an image editor.
   * # 2. Common scenarios
   * E-commerce product images, marketing images, and images for various other scenarios.
   * # 3. Features
   * *   **Product subject information protection**: Allows you to choose whether to translate text on the product subject, helping protect subject information from being translated and avoiding translation of embedded information such as product names.
   *     
   * *   **Brand name protection**: Allows you to choose whether to translate brand names on images, helping protect brand name information from being translated.
   *     
   * *   **Secondary editing after translation (layer information)**: Allows you to choose whether to return layer information such as text position, font, and color, which can be used to connect to an image editor for secondary editing of translation results. Follow platform notifications for updates on the editor SDK package release.
   *     
   * *   **Translation intervention support**: Allows you to customize translation results, including no translation (ABC-ABC), specified translation (ABC-DEF), and skip translation (ABC-empty value). This is commonly used for brand term protection and similar scenarios. Simply pass the corresponding intervention glossary ID when calling the API to meet your translation needs across different scenarios. You can upload up to 100,000 intervention terms. Contact the platform if you need more.  
   * <props="china">*   **Image editor integration support**: For more information, see [Image translation editor protocol](https://www.alibabacloud.com/help/en/document_detail/3042647.html).
   * 
   * @param request - ImageTranslationStandardRequest
   * @returns ImageTranslationStandardResponse
   */
  async imageTranslationStandard(request: $_model.ImageTranslationStandardRequest): Promise<$_model.ImageTranslationStandardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageTranslationStandardWithOptions(request, runtime);
  }

  /**
   * Translates e-commerce images by supporting over 400 language pairs, including bridged pairs. Accurately processes complex text layouts within images and ensures that translated content matches the image context, helping e-commerce platforms and developers easily achieve multilingual conversion and presentation of image content. The service also returns layer information such as text position, font, and color, facilitating secondary editing of translation results in image editors.
   * 
   * @remarks
   * ## Scenarios  
   * E-commerce product images, marketing images, and images for various other scenarios.
   * ## Features
   * *   **Product subject information protection**: Allows you to specify whether to translate text on the product subject, protecting the subject information and preventing the translation of embedded information such as product names.
   *     
   * *   **Brand name protection**: Allows you to specify whether to translate brand names in the image, protecting brand name information from being translated.
   *     
   * *   **Secondary editing after translation (layer information)**: Allows you to specify whether to return layer information such as text position, font, and color. This information can be used to integrate with image editors for secondary editing of translation results. Refer to platform notifications for updates on the availability of the editor SDK.
   *     
   * *   **Translation intervention**: Allows you to customize translation results, including keeping the original text (ABC-ABC), specifying a translation (ABC-DEF), and skipping translation (ABC-null value). This is commonly used in scenarios such as brand word protection. You can implement this by passing the corresponding intervention glossary ID when calling the API to meet your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention terms. Contact the platform if you need a higher limit.
   * ## Preparations and call process 
   * * Image Translation Standard Edition supports both synchronous and asynchronous call methods. This topic describes the asynchronous call API. For synchronous calls, refer to [Image Translation Standard Edition](https://www.alibabacloud.com/help/en/aidge/image-translation).   
   * * The asynchronous APIs for Image Translation Standard Edition and other features share the same result retrieval process, RocketMQ subscription rules, message encryption protocols, dependency configurations, and Java consumption and decryption code.   
   * * For the integration process, subscription rules, message formats and encryption protocols, and detailed integration solutions for asynchronous calls, refer to [Asynchronous API call instructions](https://www.alibabacloud.com/help/en/aidge/asynchronous-interface-call-instructions).
   * 
   * @param request - ImageTranslationStandardAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageTranslationStandardAsyncResponse
   */
  async imageTranslationStandardAsyncWithOptions(request: $_model.ImageTranslationStandardAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageTranslationStandardAsyncResponse> {
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
   * Translates e-commerce images by supporting over 400 language pairs, including bridged pairs. Accurately processes complex text layouts within images and ensures that translated content matches the image context, helping e-commerce platforms and developers easily achieve multilingual conversion and presentation of image content. The service also returns layer information such as text position, font, and color, facilitating secondary editing of translation results in image editors.
   * 
   * @remarks
   * ## Scenarios  
   * E-commerce product images, marketing images, and images for various other scenarios.
   * ## Features
   * *   **Product subject information protection**: Allows you to specify whether to translate text on the product subject, protecting the subject information and preventing the translation of embedded information such as product names.
   *     
   * *   **Brand name protection**: Allows you to specify whether to translate brand names in the image, protecting brand name information from being translated.
   *     
   * *   **Secondary editing after translation (layer information)**: Allows you to specify whether to return layer information such as text position, font, and color. This information can be used to integrate with image editors for secondary editing of translation results. Refer to platform notifications for updates on the availability of the editor SDK.
   *     
   * *   **Translation intervention**: Allows you to customize translation results, including keeping the original text (ABC-ABC), specifying a translation (ABC-DEF), and skipping translation (ABC-null value). This is commonly used in scenarios such as brand word protection. You can implement this by passing the corresponding intervention glossary ID when calling the API to meet your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention terms. Contact the platform if you need a higher limit.
   * ## Preparations and call process 
   * * Image Translation Standard Edition supports both synchronous and asynchronous call methods. This topic describes the asynchronous call API. For synchronous calls, refer to [Image Translation Standard Edition](https://www.alibabacloud.com/help/en/aidge/image-translation).   
   * * The asynchronous APIs for Image Translation Standard Edition and other features share the same result retrieval process, RocketMQ subscription rules, message encryption protocols, dependency configurations, and Java consumption and decryption code.   
   * * For the integration process, subscription rules, message formats and encryption protocols, and detailed integration solutions for asynchronous calls, refer to [Asynchronous API call instructions](https://www.alibabacloud.com/help/en/aidge/asynchronous-interface-call-instructions).
   * 
   * @param request - ImageTranslationStandardAsyncRequest
   * @returns ImageTranslationStandardAsyncResponse
   */
  async imageTranslationStandardAsync(request: $_model.ImageTranslationStandardAsyncRequest): Promise<$_model.ImageTranslationStandardAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageTranslationStandardAsyncWithOptions(request, runtime);
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
   * Material display detection is an intelligent compliance detection capability for in-store marketing materials built on a Multimodal Large Language Model (MLLM), designed for marketing material inspection scenarios in offline retail and channel stores. For standard materials such as functional card stands, posters, and door-shaped display stands, as well as long-tail materials such as light cloth banners, KT boards, floor stickers, and light boxes captured in store photos, the service performs natural-language-level compliance checks based on inspection rules and outputs structured conclusions and evidence descriptions that can be directly integrated with business systems. This is a **synchronous** call that returns results in a single request.
   * 
   * @remarks
   * ## **Scenarios**
   * -   **In-store marketing material compliance inspection**: Automatically determines whether marketing materials (functional card stands, posters, door-shaped display stands, etc.) are placed or posted in the store according to the standard display guidelines issued by headquarters. Identifies typical issues such as "not placed," "incorrectly placed," or "content mismatch."
   *     
   * -   **New product / campaign material deployment verification**: During new product launches or sales promotions, automatically verifies in batch whether campaign materials have been listed as required based on store photos, replacing manual spot checks.
   *     
   * -   **Adaptive dual-image comparison and single-image detection**: A single API supports both "reference image + target image" dual-image comparison (Mode A) and "target image only" single-image detection (Mode B). The mode switches automatically based on whether `ImageRefer` is provided, so callers do not need to differentiate between invocation methods.
   * ## **Features**
   * -   **Multi-mode intelligent routing**: Built-in material type parsing capability that automatically identifies the target material type based on `Rules` natural language text and routes to the corresponding detection pipeline. Callers only need to provide image URLs and rule text. Currently, four detection routing pipelines are supported: "functional card stand," "poster," "door-shaped display stand," and "other materials." More detection pipelines for specific marketing material types will be added over time.
   *     
   * -   **MLLM semantic-level understanding + structured rule coordination**: Uses a multimodal large language model for material recognition, content comparison, text OCR, and other semantic-level understanding tasks. Combined with rule cleaning and structured models, natural language rules are decomposed into individually evaluable steps (S1 / S2…), ensuring accuracy while maintaining rule flexibility and traceability.
   *     
   * -   **Structured inspection conclusion output**: Output follows a unified structure of `Result.OverallResult` + `Result.Steps[]` + `Result.Evidence`. The overall conclusion is derived by logical AND of all steps. Each step is independently visible, making it easy to drive downstream business systems and support case-level manual review traceability.
   *     
   * -   **Supported input formats**: Currently supports publicly accessible image URLs. Both single-image (Mode B) and dual-image (Mode A) calling modes are supported, with identical output structures.
   * ## **Invocation method**
   * -   **Synchronous call**: A single request returns the detection result without polling. The response follows a unified envelope of `Code` / `Message` / `RequestId` / `Success` / `Data`.
   *     
   * -   **Authentication and signing**: Invoked through the Aidge gateway. Authentication, signing, and common parameters follow the platform\\"s unified access method. Refer to the officially published API reference for the exact request path.
   *     
   * -   **Timeout settings**: Set the request timeout to no less than the maximum response time of the API (refer to the official release for the specific value).
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
   * Material display detection is an intelligent compliance detection capability for in-store marketing materials built on a Multimodal Large Language Model (MLLM), designed for marketing material inspection scenarios in offline retail and channel stores. For standard materials such as functional card stands, posters, and door-shaped display stands, as well as long-tail materials such as light cloth banners, KT boards, floor stickers, and light boxes captured in store photos, the service performs natural-language-level compliance checks based on inspection rules and outputs structured conclusions and evidence descriptions that can be directly integrated with business systems. This is a **synchronous** call that returns results in a single request.
   * 
   * @remarks
   * ## **Scenarios**
   * -   **In-store marketing material compliance inspection**: Automatically determines whether marketing materials (functional card stands, posters, door-shaped display stands, etc.) are placed or posted in the store according to the standard display guidelines issued by headquarters. Identifies typical issues such as "not placed," "incorrectly placed," or "content mismatch."
   *     
   * -   **New product / campaign material deployment verification**: During new product launches or sales promotions, automatically verifies in batch whether campaign materials have been listed as required based on store photos, replacing manual spot checks.
   *     
   * -   **Adaptive dual-image comparison and single-image detection**: A single API supports both "reference image + target image" dual-image comparison (Mode A) and "target image only" single-image detection (Mode B). The mode switches automatically based on whether `ImageRefer` is provided, so callers do not need to differentiate between invocation methods.
   * ## **Features**
   * -   **Multi-mode intelligent routing**: Built-in material type parsing capability that automatically identifies the target material type based on `Rules` natural language text and routes to the corresponding detection pipeline. Callers only need to provide image URLs and rule text. Currently, four detection routing pipelines are supported: "functional card stand," "poster," "door-shaped display stand," and "other materials." More detection pipelines for specific marketing material types will be added over time.
   *     
   * -   **MLLM semantic-level understanding + structured rule coordination**: Uses a multimodal large language model for material recognition, content comparison, text OCR, and other semantic-level understanding tasks. Combined with rule cleaning and structured models, natural language rules are decomposed into individually evaluable steps (S1 / S2…), ensuring accuracy while maintaining rule flexibility and traceability.
   *     
   * -   **Structured inspection conclusion output**: Output follows a unified structure of `Result.OverallResult` + `Result.Steps[]` + `Result.Evidence`. The overall conclusion is derived by logical AND of all steps. Each step is independently visible, making it easy to drive downstream business systems and support case-level manual review traceability.
   *     
   * -   **Supported input formats**: Currently supports publicly accessible image URLs. Both single-image (Mode B) and dual-image (Mode A) calling modes are supported, with identical output structures.
   * ## **Invocation method**
   * -   **Synchronous call**: A single request returns the detection result without polling. The response follows a unified envelope of `Code` / `Message` / `RequestId` / `Success` / `Data`.
   *     
   * -   **Authentication and signing**: Invoked through the Aidge gateway. Authentication, signing, and common parameters follow the platform\\"s unified access method. Refer to the officially published API reference for the exact request path.
   *     
   * -   **Timeout settings**: Set the request timeout to no less than the maximum response time of the API (refer to the official release for the specific value).
   * 
   * @param request - MaterialInspectionRequest
   * @returns MaterialInspectionResponse
   */
  async materialInspection(request: $_model.MaterialInspectionRequest): Promise<$_model.MaterialInspectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.materialInspectionWithOptions(request, runtime);
  }

  /**
   * Detects and identifies products displayed on store shelves or floor stacks by using a multimodal large language model (MLLM) combined with visual vector recall. The service is designed for shelf and floor stack inspection scenarios in offline retail and channel stores. It first uses the MLLM to detect the bounding box and preliminary name of each product in a store photo, then performs similarity recall against a customer-specific SKU vector library to exactly match each product to the customer\\"s own SKUs, and outputs per-product structured results that can be directly integrated with business systems. This service is suitable for large-scale, high-concurrent visual recognition pipelines such as remote display auditing by headquarters, SKU distribution verification, and display compliance inspection for offline stores.
   * 
   * @remarks
   * ## **Product Introduction**
   * Display detection is an intelligent product display recognition capability built on a multimodal large language model (MLLM) combined with visual vector recall. It is designed for shelf and floor stack inspection scenarios in offline retail and channel stores. The service takes real photos of store shelves and floor stacks, first uses the MLLM to detect the bounding box and preliminary name of each product, then performs similarity recall against a customer-specific SKU vector library to exactly match each product to the customer\\"s own SKUs, and outputs per-product structured results that can be directly integrated with business systems. This service is suitable for large-scale, high-concurrent visual recognition pipelines such as remote display auditing by headquarters, SKU distribution verification, and display compliance inspection for offline stores.
   * ## **Scenarios**
   * -   **Shelf/floor stack display recognition and inventory**: Identifies each product in a shelf or floor stack image, matches it to the customer\\"s SKU library, and outputs a per-product list (product name + position + similarity score), replacing manual counting.
   *     
   * -   **Distribution verification/SKU compliance**: Verifies whether a store displays the specified SKUs as required by headquarters and whether any out-of-stock or misplaced items exist. This supports batch automated verification during sales promotions or new product launches.
   *     
   * -   **Customer-specific SKU library**: Customers can upload their own standard SKU images to build a dedicated vector library (isolated by `RagId`). During recognition, retrieval is performed only within the corresponding customer library, ensuring name accuracy and data isolation between customers.
   * ## **Functions and features**
   * -   **Two-stage detection + retrieval pipeline**: The MLLM detects each product bounding box and preliminary name across the entire image (semantic-level understanding, adapted for dense displays and partial occlusion). Then, visual embedding vectors are used for similarity retrieval within the customer\\"s SKU library, and the top-1 precise SKU name overrides the preliminary name, balancing recall rate and name accuracy.
   *     
   * -   **Isolated retrieval with dedicated vector libraries**: A dedicated SKU vector library is maintained for each customer by `RagId`. Recognition retrieves only within the corresponding library, ensuring strict isolation between customers. Newly added or updated SKUs take effect in real time.
   *     
   * -   **Per-product structured output**: Output is unified as `Result.Items[]`, with each product independently providing a bounding box, recalled SKU name, SKU code, and similarity score. This facilitates direct integration with downstream inventory and verification systems and supports case-level manual review and traceability.
   *     
   * -   **Supported input formats**: Currently supports image URLs accessible over the Internet or through OSS. A single shelf or floor stack image is sufficient for recognition, and the output structure is consistent.
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
   * Detects and identifies products displayed on store shelves or floor stacks by using a multimodal large language model (MLLM) combined with visual vector recall. The service is designed for shelf and floor stack inspection scenarios in offline retail and channel stores. It first uses the MLLM to detect the bounding box and preliminary name of each product in a store photo, then performs similarity recall against a customer-specific SKU vector library to exactly match each product to the customer\\"s own SKUs, and outputs per-product structured results that can be directly integrated with business systems. This service is suitable for large-scale, high-concurrent visual recognition pipelines such as remote display auditing by headquarters, SKU distribution verification, and display compliance inspection for offline stores.
   * 
   * @remarks
   * ## **Product Introduction**
   * Display detection is an intelligent product display recognition capability built on a multimodal large language model (MLLM) combined with visual vector recall. It is designed for shelf and floor stack inspection scenarios in offline retail and channel stores. The service takes real photos of store shelves and floor stacks, first uses the MLLM to detect the bounding box and preliminary name of each product, then performs similarity recall against a customer-specific SKU vector library to exactly match each product to the customer\\"s own SKUs, and outputs per-product structured results that can be directly integrated with business systems. This service is suitable for large-scale, high-concurrent visual recognition pipelines such as remote display auditing by headquarters, SKU distribution verification, and display compliance inspection for offline stores.
   * ## **Scenarios**
   * -   **Shelf/floor stack display recognition and inventory**: Identifies each product in a shelf or floor stack image, matches it to the customer\\"s SKU library, and outputs a per-product list (product name + position + similarity score), replacing manual counting.
   *     
   * -   **Distribution verification/SKU compliance**: Verifies whether a store displays the specified SKUs as required by headquarters and whether any out-of-stock or misplaced items exist. This supports batch automated verification during sales promotions or new product launches.
   *     
   * -   **Customer-specific SKU library**: Customers can upload their own standard SKU images to build a dedicated vector library (isolated by `RagId`). During recognition, retrieval is performed only within the corresponding customer library, ensuring name accuracy and data isolation between customers.
   * ## **Functions and features**
   * -   **Two-stage detection + retrieval pipeline**: The MLLM detects each product bounding box and preliminary name across the entire image (semantic-level understanding, adapted for dense displays and partial occlusion). Then, visual embedding vectors are used for similarity retrieval within the customer\\"s SKU library, and the top-1 precise SKU name overrides the preliminary name, balancing recall rate and name accuracy.
   *     
   * -   **Isolated retrieval with dedicated vector libraries**: A dedicated SKU vector library is maintained for each customer by `RagId`. Recognition retrieves only within the corresponding library, ensuring strict isolation between customers. Newly added or updated SKUs take effect in real time.
   *     
   * -   **Per-product structured output**: Output is unified as `Result.Items[]`, with each product independently providing a bounding box, recalled SKU name, SKU code, and similarity score. This facilitates direct integration with downstream inventory and verification systems and supports case-level manual review and traceability.
   *     
   * -   **Supported input formats**: Currently supports image URLs accessible over the Internet or through OSS. A single shelf or floor stack image is sufficient for recognition, and the output structure is consistent.
   * 
   * @param request - MerchandisePlacementDetectionRequest
   * @returns MerchandisePlacementDetectionResponse
   */
  async merchandisePlacementDetection(request: $_model.MerchandisePlacementDetectionRequest): Promise<$_model.MerchandisePlacementDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.merchandisePlacementDetectionWithOptions(request, runtime);
  }

  /**
   * Detects product displays in photos of shelves, endcaps, freezers, display tables, and dump bins by using product SKU recognition and multimodal large model grounding. It aggregates product locations by SKU and supplements the results with visible single-item grounding and short names to facilitate product location display, display inventory, and subsequent distribution verification in business systems.
   * 
   * @remarks
   * ## Scenarios
   * - Display product inventory: Aggregates recognized product bounding boxes by SKU for business system statistics.
   * - Distribution list verification: Compares the recognized SKU list with the target list on the business side.
   * - Single-item location review: Assists in checking recognition results by combining product bounding boxes and visible names.
   * ## Features
   * - Aggregation by SKU: Aggregates multiple Boxes for the same SkuId in Products, and skuIds returns a deduplicated list of SKU codes.
   * - Supplementary single-item grounding: The multimodal model individually grounds recognizable sales packages and provides confirmable short names.
   * - Independent use of two result sets: Products comes from SKU recognition, and grounding comes from supplementary grounding. Grounding does not return SKU codes and does not guarantee item-by-item correspondence with Products.
   * - Supports single HTTPS image input. Supplementary grounding returns up to 12 targets, each containing a category, a bounding box, and visible text of up to 24 characters. The coverage field indicates whether the grounding is complete.
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
   * Detects product displays in photos of shelves, endcaps, freezers, display tables, and dump bins by using product SKU recognition and multimodal large model grounding. It aggregates product locations by SKU and supplements the results with visible single-item grounding and short names to facilitate product location display, display inventory, and subsequent distribution verification in business systems.
   * 
   * @remarks
   * ## Scenarios
   * - Display product inventory: Aggregates recognized product bounding boxes by SKU for business system statistics.
   * - Distribution list verification: Compares the recognized SKU list with the target list on the business side.
   * - Single-item location review: Assists in checking recognition results by combining product bounding boxes and visible names.
   * ## Features
   * - Aggregation by SKU: Aggregates multiple Boxes for the same SkuId in Products, and skuIds returns a deduplicated list of SKU codes.
   * - Supplementary single-item grounding: The multimodal model individually grounds recognizable sales packages and provides confirmable short names.
   * - Independent use of two result sets: Products comes from SKU recognition, and grounding comes from supplementary grounding. Grounding does not return SKU codes and does not guarantee item-by-item correspondence with Products.
   * - Supports single HTTPS image input. Supplementary grounding returns up to 12 targets, each containing a category, a bounding box, and visible text of up to 24 characters. The coverage field indicates whether the grounding is complete.
   * 
   * @param request - MerchandisePlacementDetectionLiteRequest
   * @returns MerchandisePlacementDetectionLiteResponse
   */
  async merchandisePlacementDetectionLite(request: $_model.MerchandisePlacementDetectionLiteRequest): Promise<$_model.MerchandisePlacementDetectionLiteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.merchandisePlacementDetectionLiteWithOptions(request, runtime);
  }

  /**
   * Detects the positions and names of visible products in an image based on a dedicated visual model. The product supports default recognition rules for the Genki Forest business type and custom rules provided by the invoker. It outputs per-product positions and names, applicable to beverage display inspection and product location display.
   * 
   * @remarks
   * ## Scenarios
   * - Beverage display recognition: Uses default rules for the Genki Forest business type to recognize visible beverage products.
   * - Custom detection rules: Specifies product recognition tasks that comply with output constraints through the rule parameter.
   * - Product location display: Uses per-product names and bounding boxes for display, statistics, or manual review.
   * ## Features
   * - Direct product recognition: Each product outputs a bounding box and a name. The name is returned as unknown if it cannot be determined.
   * - Two rule entry points: A non-empty rule takes priority. If no valid rule is provided, the type must be set to Genki Forest.
   * - Unified result validation: Bounding box coordinates are converted to integers and restricted to the range 0–1000. Reversed coordinates are swapped. Missing names default to unknown. The entire batch fails if any item is not a valid product object, has an invalid bounding box, or has no area.
   * - Result scope: Currently outputs detected names and positions only. Vector library recall, SKU codes, and similarity scores are not included.
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
   * Detects the positions and names of visible products in an image based on a dedicated visual model. The product supports default recognition rules for the Genki Forest business type and custom rules provided by the invoker. It outputs per-product positions and names, applicable to beverage display inspection and product location display.
   * 
   * @remarks
   * ## Scenarios
   * - Beverage display recognition: Uses default rules for the Genki Forest business type to recognize visible beverage products.
   * - Custom detection rules: Specifies product recognition tasks that comply with output constraints through the rule parameter.
   * - Product location display: Uses per-product names and bounding boxes for display, statistics, or manual review.
   * ## Features
   * - Direct product recognition: Each product outputs a bounding box and a name. The name is returned as unknown if it cannot be determined.
   * - Two rule entry points: A non-empty rule takes priority. If no valid rule is provided, the type must be set to Genki Forest.
   * - Unified result validation: Bounding box coordinates are converted to integers and restricted to the range 0–1000. Reversed coordinates are swapped. Missing names default to unknown. The entire batch fails if any item is not a valid product object, has an invalid bounding box, or has no area.
   * - Result scope: Currently outputs detected names and positions only. Vector library recall, SKU codes, and similarity scores are not included.
   * 
   * @param request - MerchandisePlacementDetectionProRequest
   * @returns MerchandisePlacementDetectionProResponse
   */
  async merchandisePlacementDetectionPro(request: $_model.MerchandisePlacementDetectionProRequest): Promise<$_model.MerchandisePlacementDetectionProResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.merchandisePlacementDetectionProWithOptions(request, runtime);
  }

  /**
   * Detects display price tags based on price tag recognition and multimodal large model localization, extracting product information, selling prices, original prices, and locations, while providing visible bounding boxes for paper price tags, electronic price tags, and promotional price signs for store price collection, price tag inspection, and business-side price verification.
   * 
   * @remarks
   * ## Scenarios
   * - Store price collection: Reads the recognized selling prices and available original prices of price tags.
   * - Price execution verification: Compares the recognized prices with the business-side price list.
   * - Manual price tag review: Locates paper, electronic, and promotional price tags to facilitate reviewing the original images.
   * ## Features
   * - Structured price output: Returns the product name, code, price, and location item by item. Prices are retained as strings.
   * - Multi-type price tag localization: Covers common paper price tags, electronic price tags, and promotional signs with clear selling prices.
   * - Original text and location-assisted review: Prioritizes extracting clear selling prices from located text, leaving it empty if unreadable. Supplementary localization does not infer that a price tag necessarily corresponds to a specific SKU based on its location.
   * - Supports single HTTPS image input. Supplementary localization returns up to 12 targets, each containing a category, a bounding box, and up to 24 characters of visible text, and indicates whether the localization is complete through coverage.
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
   * Detects display price tags based on price tag recognition and multimodal large model localization, extracting product information, selling prices, original prices, and locations, while providing visible bounding boxes for paper price tags, electronic price tags, and promotional price signs for store price collection, price tag inspection, and business-side price verification.
   * 
   * @remarks
   * ## Scenarios
   * - Store price collection: Reads the recognized selling prices and available original prices of price tags.
   * - Price execution verification: Compares the recognized prices with the business-side price list.
   * - Manual price tag review: Locates paper, electronic, and promotional price tags to facilitate reviewing the original images.
   * ## Features
   * - Structured price output: Returns the product name, code, price, and location item by item. Prices are retained as strings.
   * - Multi-type price tag localization: Covers common paper price tags, electronic price tags, and promotional signs with clear selling prices.
   * - Original text and location-assisted review: Prioritizes extracting clear selling prices from located text, leaving it empty if unreadable. Supplementary localization does not infer that a price tag necessarily corresponds to a specific SKU based on its location.
   * - Supports single HTTPS image input. Supplementary localization returns up to 12 targets, each containing a category, a bounding box, and up to 24 characters of visible text, and indicates whether the localization is complete through coverage.
   * 
   * @param request - MerchandisePriceTagDetectionRequest
   * @returns MerchandisePriceTagDetectionResponse
   */
  async merchandisePriceTagDetection(request: $_model.MerchandisePriceTagDetectionRequest): Promise<$_model.MerchandisePriceTagDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.merchandisePriceTagDetectionWithOptions(request, runtime);
  }

  /**
   * Detects store displays based on display scene recognition and holistic positioning powered by multimodal large models. This product identifies display areas such as shelves, refrigerators, and floor displays, and outputs available scene names, locations, and display metrics. It also provides overall facility bounding boxes, making it suitable for display facility inspection, area visualization, and display metric verification.
   * 
   * @remarks
   * ## Scenarios
   * - Display facility inspection: identifies facilities such as shelves, endcaps, floor displays, upright refrigerators, and chest freezers.
   * - Display metric verification: reads active metrics such as proportion, purity, and plumpness for further evaluation by business systems.
   * - Display area visualization: displays area locations and overall facility bounding boxes on the original image.
   * ## Features
   * - Scene structured output: returns scene names, center points, area contours, and active metrics.
   * - Holistic facility positioning: uses one bounding box for an independent facility or floor display, which is suitable for overall area review.
   * - Retains two types of coordinates: the positions in scenes retain the original normalization coordinates of the recognition service, while grounding uses 0–1000 integer bounding boxes.
   * - Supports a single HTTPS image as input. The supplementary positioning returns up to 12 targets. Each target includes a category, a bounding box, and up to 24 characters of visible text, and uses coverage to indicate whether the positioning is complete.
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
   * Detects store displays based on display scene recognition and holistic positioning powered by multimodal large models. This product identifies display areas such as shelves, refrigerators, and floor displays, and outputs available scene names, locations, and display metrics. It also provides overall facility bounding boxes, making it suitable for display facility inspection, area visualization, and display metric verification.
   * 
   * @remarks
   * ## Scenarios
   * - Display facility inspection: identifies facilities such as shelves, endcaps, floor displays, upright refrigerators, and chest freezers.
   * - Display metric verification: reads active metrics such as proportion, purity, and plumpness for further evaluation by business systems.
   * - Display area visualization: displays area locations and overall facility bounding boxes on the original image.
   * ## Features
   * - Scene structured output: returns scene names, center points, area contours, and active metrics.
   * - Holistic facility positioning: uses one bounding box for an independent facility or floor display, which is suitable for overall area review.
   * - Retains two types of coordinates: the positions in scenes retain the original normalization coordinates of the recognition service, while grounding uses 0–1000 integer bounding boxes.
   * - Supports a single HTTPS image as input. The supplementary positioning returns up to 12 targets. Each target includes a category, a bounding box, and up to 24 characters of visible text, and uses coverage to indicate whether the positioning is complete.
   * 
   * @param request - MerchandiseSceneDetectionRequest
   * @returns MerchandiseSceneDetectionResponse
   */
  async merchandiseSceneDetection(request: $_model.MerchandiseSceneDetectionRequest): Promise<$_model.MerchandiseSceneDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.merchandiseSceneDetectionWithOptions(request, runtime);
  }

  /**
   * Reviews images of milk powder can bottom codes by using recapture detection and multimodal large model-based element localization. The service determines whether an uploaded photo is recaptured and localizes visible milk powder products, can bottoms, and bottom code areas. It is suitable for milk powder channel inspections, can bottom code photo reviews, and manual verifications.
   * 
   * @remarks
   * ## Features
   * - Recapture binary classification: isFake=true indicates a recapture, and false indicates a non-recapture. Element localization is performed for both results.
   * - Milk powder subject and bottom code localization: Prioritizes the localization of the milk powder subject. Adds corresponding bounding boxes when the can bottom, spray code, batch code, or traceability code areas are clear.
   * - Visible information output: Outputs only confirmed short names or text without guessing blurred code values. Localization results do not change the recapture conclusion.
   * - Supports a single HTTPS image input. The supplementary localization returns up to 12 targets. Each target includes a category, a bounding box, and up to 24 characters of visible text. The coverage field indicates whether the localization is complete.
   * ## Scenarios:
   * - Can bottom code photo review: Determines whether a photo of a milk powder can bottom code has a recapture risk.
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
   * Reviews images of milk powder can bottom codes by using recapture detection and multimodal large model-based element localization. The service determines whether an uploaded photo is recaptured and localizes visible milk powder products, can bottoms, and bottom code areas. It is suitable for milk powder channel inspections, can bottom code photo reviews, and manual verifications.
   * 
   * @remarks
   * ## Features
   * - Recapture binary classification: isFake=true indicates a recapture, and false indicates a non-recapture. Element localization is performed for both results.
   * - Milk powder subject and bottom code localization: Prioritizes the localization of the milk powder subject. Adds corresponding bounding boxes when the can bottom, spray code, batch code, or traceability code areas are clear.
   * - Visible information output: Outputs only confirmed short names or text without guessing blurred code values. Localization results do not change the recapture conclusion.
   * - Supports a single HTTPS image input. The supplementary localization returns up to 12 targets. Each target includes a category, a bounding box, and up to 24 characters of visible text. The coverage field indicates whether the localization is complete.
   * ## Scenarios:
   * - Can bottom code photo review: Determines whether a photo of a milk powder can bottom code has a recapture risk.
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
   * Reviews infant formula carton code images based on recapture detection and element localization using multimodal foundation models. It targets photos of infant formula products, outer cartons, and carton codes captured during channel inspections. It determines whether images are non-recaptured, recaptured, or suspected recaptures, and localizes visible infant formula products, outer cartons, and code regions to provide a structured basis for image review and manual verification.
   * 
   * @remarks
   * ## Features
   * - Three-state recapture detection: When photoStatus is 0, 1, or 2, it indicates non-recapture, recapture, or suspected recapture, respectively. The isFake, isSuspect, and score fields are also returned.
   * - Subject and code area grounding: Prioritizes the grounding of individual milk powder products and outer boxes, and supplements clear box codes, barcodes, and QR code areas. The milk powder subject can still be grounded even if no box code is present.
   * - Result coordination: Element grounding supplements visible targets without changing the recapture detection conclusion. It does not decode QR codes or provide product authenticity verification.
   * - Supports a single HTTPS image as input. The supplementary grounding returns up to 12 targets. Each target includes a category, a bounding box, and up to 24 characters of visible text. The coverage field indicates whether the grounding is complete.
   * ## Scenarios
   * - Box code photo review: Checks whether milk powder outer box photos uploaded by stores or channels carry recapture risks.
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
   * Reviews infant formula carton code images based on recapture detection and element localization using multimodal foundation models. It targets photos of infant formula products, outer cartons, and carton codes captured during channel inspections. It determines whether images are non-recaptured, recaptured, or suspected recaptures, and localizes visible infant formula products, outer cartons, and code regions to provide a structured basis for image review and manual verification.
   * 
   * @remarks
   * ## Features
   * - Three-state recapture detection: When photoStatus is 0, 1, or 2, it indicates non-recapture, recapture, or suspected recapture, respectively. The isFake, isSuspect, and score fields are also returned.
   * - Subject and code area grounding: Prioritizes the grounding of individual milk powder products and outer boxes, and supplements clear box codes, barcodes, and QR code areas. The milk powder subject can still be grounded even if no box code is present.
   * - Result coordination: Element grounding supplements visible targets without changing the recapture detection conclusion. It does not decode QR codes or provide product authenticity verification.
   * - Supports a single HTTPS image as input. The supplementary grounding returns up to 12 targets. Each target includes a category, a bounding box, and up to 24 characters of visible text. The coverage field indicates whether the grounding is complete.
   * ## Scenarios
   * - Box code photo review: Checks whether milk powder outer box photos uploaded by stores or channels carry recapture risks.
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
   * Maas-MT is an e-commerce translation model trained on over 1 billion high-quality bilingual sentence pairs, continuously optimized for e-commerce-specific terminology such as brands, models, materials, and attributes. It supports mutual translation among more than 400 language directions (including bridged translations), especially Chinese-English, Chinese-to-multilingual, and English-to-multilingual translations. It supports language detection for 24 language directions. If you do not specify a source language, automatic detection is performed.
   * 
   * @remarks
   * ## Product Introduction
   * Marco MT is an e-commerce translation model trained on over 1 billion\\+ high-quality bilingual sentence pairs, continuously optimized for e-commerce-specific terminology such as brands, models, materials, and attributes. It supports mutual translation among more than 100 language directions (including bridged translations), especially Chinese-English, Chinese-to-multilingual, and English-to-multilingual translations. It supports language detection for 24 language directions. If you do not specify a source language, automatic detection is performed.
   * ## Common scenarios
   * - Product titles: Marco MT large model translation accurately translates phrases, keywords, and trending terms in product titles into the target language, improving product visibility on e-commerce platforms.
   * - Product descriptions: Product descriptions are typically long with diverse and complex formatting. Marco MT large model translation supports long text translation and HTML formatting, delivering excellent translation quality and format preservation.
   * - Product attributes: Product attribute terms are typically short and may contain e-commerce-specific terms such as model numbers and specifications.
   * - Customer service conversations: In customer service scenarios, the model optimizes issues such as missing context and typos, and supports polite expressions for certain language directions.
   * Marco MT large model translation can also be used for general-purpose translation scenarios, such as office work, meetings, and daily conversations.
   * ## Features
   * - **Supported language directions** Marco MT large model translation supports mutual translation among more than 100 languages and language detection for 23 languages. For specific language directions, refer to the language mapping table in Section 5.6.
   * - **Ultra-low hallucination rate and high-speed inference** Marco MT large model translation is a large language model with preference alignment for translation scenarios. Compared with general-purpose large language models, it delivers faster translation inference and an extremely low hallucination rate, making it especially suitable for large-scale invocation scenarios.
   * - **Supported text format types** Currently supports text and html text types.
   * - **Translation intervention support** Supports custom translation results, including do-not-translate (ABC→ABC), specified translation (ABC→DEF), and skip translation (ABC→empty value). This is commonly used for scenarios such as brand name protection. Simply pass the corresponding intervention glossary ID when calling the API to meet your translation needs across different scenarios. You can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.
   * ## Translation quality comparison
   * | **Source text** | **Aidge translation** | **Other translation product 1** | **Other translation product 2** | **Aidge translation advantage** |
   * |----------|---------------|-----------------------|-----------------------|---------------------|
   * | 75mm 4Pin 0.38A GA81S2U 12V GTX 960 Cooling Fan for Zotac GTX960 Graphics Card Cooling Fan | 75mm 4Pin 0.38A GA81S2U 12V GTX 960, ventilador de enfriamiento para tarjeta gráfica Zotac GTX960. | Ventilador de refrigeración de 75mm 4Pin 0.38A GA81S2U 12V para la tarjeta gráfica Zotac GTX960 Ventilador de enfriamiento GTX 960. | Ventilador de refrigeración para tarjeta gráfica Zotac GTX960, 75mm, 4 pines, 0,38A, GA81S2U, 12V, GTX 960 | Clearer product subject |
   * | New Arrival Classic Style Luxury Brand 6 Hands Swiss Automatic Mechanical Men\\"s Business Steel Watch | Nueva llegada, reloj mecánico automático de lujo con 6 manecillas, estilo clásico, de acero para hombres de negocios | Nueva Llegada Reloj De Acero de Negocios para Hombre con Mecanismo Automático Suizo y 6 Agujas de Estilo Clásico de Marca de Lujo. | Reloj de acero de negocios para hombre, mecánico automático suizo, marca de lujo, estilo clásico, 6 manos, nueva llegada | More complete sentence structure, clearer expression, and more reasonable segmentation |
   * | Men Key Bag Genuine Cow Leather Buckets Key Cases Pouch Zipper Keychain Auto Car Key Case Women Home Key Holder Wallet | Sac à clés pour hommes en cuir de vache véritable, étuis à clés, pochette à fermeture éclair, porte-clés, étui à clé de voiture, porte-clés pour femmes, organisateur de portefeuille | Porte-clés sac en cuir de vache véritable, étuis à clés en forme de seau, pochette à fermeture éclair, porte-clés auto pour voiture, étui à clés pour femmes, organisateur de clés de maison, portefeuille. | Hommes porte-clés en cuir de vache véritable sac/pochette fermature éclair porte-clés Auto voiture porte-clés femmes maison porte-clés organisateur portefeuille | Clearer and more accurate product subject description — correctly identifies "key bag" rather than "keychain." Other translations may cause ambiguity about the product subject |
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
   * Maas-MT is an e-commerce translation model trained on over 1 billion high-quality bilingual sentence pairs, continuously optimized for e-commerce-specific terminology such as brands, models, materials, and attributes. It supports mutual translation among more than 400 language directions (including bridged translations), especially Chinese-English, Chinese-to-multilingual, and English-to-multilingual translations. It supports language detection for 24 language directions. If you do not specify a source language, automatic detection is performed.
   * 
   * @remarks
   * ## Product Introduction
   * Marco MT is an e-commerce translation model trained on over 1 billion\\+ high-quality bilingual sentence pairs, continuously optimized for e-commerce-specific terminology such as brands, models, materials, and attributes. It supports mutual translation among more than 100 language directions (including bridged translations), especially Chinese-English, Chinese-to-multilingual, and English-to-multilingual translations. It supports language detection for 24 language directions. If you do not specify a source language, automatic detection is performed.
   * ## Common scenarios
   * - Product titles: Marco MT large model translation accurately translates phrases, keywords, and trending terms in product titles into the target language, improving product visibility on e-commerce platforms.
   * - Product descriptions: Product descriptions are typically long with diverse and complex formatting. Marco MT large model translation supports long text translation and HTML formatting, delivering excellent translation quality and format preservation.
   * - Product attributes: Product attribute terms are typically short and may contain e-commerce-specific terms such as model numbers and specifications.
   * - Customer service conversations: In customer service scenarios, the model optimizes issues such as missing context and typos, and supports polite expressions for certain language directions.
   * Marco MT large model translation can also be used for general-purpose translation scenarios, such as office work, meetings, and daily conversations.
   * ## Features
   * - **Supported language directions** Marco MT large model translation supports mutual translation among more than 100 languages and language detection for 23 languages. For specific language directions, refer to the language mapping table in Section 5.6.
   * - **Ultra-low hallucination rate and high-speed inference** Marco MT large model translation is a large language model with preference alignment for translation scenarios. Compared with general-purpose large language models, it delivers faster translation inference and an extremely low hallucination rate, making it especially suitable for large-scale invocation scenarios.
   * - **Supported text format types** Currently supports text and html text types.
   * - **Translation intervention support** Supports custom translation results, including do-not-translate (ABC→ABC), specified translation (ABC→DEF), and skip translation (ABC→empty value). This is commonly used for scenarios such as brand name protection. Simply pass the corresponding intervention glossary ID when calling the API to meet your translation needs across different scenarios. You can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.
   * ## Translation quality comparison
   * | **Source text** | **Aidge translation** | **Other translation product 1** | **Other translation product 2** | **Aidge translation advantage** |
   * |----------|---------------|-----------------------|-----------------------|---------------------|
   * | 75mm 4Pin 0.38A GA81S2U 12V GTX 960 Cooling Fan for Zotac GTX960 Graphics Card Cooling Fan | 75mm 4Pin 0.38A GA81S2U 12V GTX 960, ventilador de enfriamiento para tarjeta gráfica Zotac GTX960. | Ventilador de refrigeración de 75mm 4Pin 0.38A GA81S2U 12V para la tarjeta gráfica Zotac GTX960 Ventilador de enfriamiento GTX 960. | Ventilador de refrigeración para tarjeta gráfica Zotac GTX960, 75mm, 4 pines, 0,38A, GA81S2U, 12V, GTX 960 | Clearer product subject |
   * | New Arrival Classic Style Luxury Brand 6 Hands Swiss Automatic Mechanical Men\\"s Business Steel Watch | Nueva llegada, reloj mecánico automático de lujo con 6 manecillas, estilo clásico, de acero para hombres de negocios | Nueva Llegada Reloj De Acero de Negocios para Hombre con Mecanismo Automático Suizo y 6 Agujas de Estilo Clásico de Marca de Lujo. | Reloj de acero de negocios para hombre, mecánico automático suizo, marca de lujo, estilo clásico, 6 manos, nueva llegada | More complete sentence structure, clearer expression, and more reasonable segmentation |
   * | Men Key Bag Genuine Cow Leather Buckets Key Cases Pouch Zipper Keychain Auto Car Key Case Women Home Key Holder Wallet | Sac à clés pour hommes en cuir de vache véritable, étuis à clés, pochette à fermeture éclair, porte-clés, étui à clé de voiture, porte-clés pour femmes, organisateur de portefeuille | Porte-clés sac en cuir de vache véritable, étuis à clés en forme de seau, pochette à fermeture éclair, porte-clés auto pour voiture, étui à clés pour femmes, organisateur de clés de maison, portefeuille. | Hommes porte-clés en cuir de vache véritable sac/pochette fermature éclair porte-clés Auto voiture porte-clés femmes maison porte-clés organisateur portefeuille | Clearer and more accurate product subject description — correctly identifies "key bag" rather than "keychain." Other translations may cause ambiguity about the product subject |
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
   * API name on the POP gateway: QueryAsyncTaskResult.
   * 
   * @remarks
   * API name on the POP gateway: QueryAsyncTaskResult.
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
   * API name on the POP gateway: QueryAsyncTaskResult.
   * 
   * @remarks
   * API name on the POP gateway: QueryAsyncTaskResult.
   * 
   * @param request - QueryAsyncTaskResultRequest
   * @returns QueryAsyncTaskResultResponse
   */
  async queryAsyncTaskResult(request: $_model.QueryAsyncTaskResultRequest): Promise<$_model.QueryAsyncTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAsyncTaskResultWithOptions(request, runtime);
  }

  /**
   * Performs a paged query on the content of a display knowledge base with paging (synchronization).
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
   * Performs a paged query on the content of a display knowledge base with paging (synchronization).
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
   * Extracts structured information such as size charts and package weight and dimensions from images by using multimodal large models in asynchronous mode.
   * 
   * @remarks
   * ## Scenarios
   * Size charts: Extracts size charts for apparel categories into text.
   * Package weight and dimensions: Extracts package weight and dimension information from images.
   * ## Feature description
   * The size chart extraction service is based on multimodal foundation models. It automatically recognizes size charts or package weight and dimension information in images and converts the information into structured text. Provide an image URL, and the system processes the request as an asynchronous task and returns the extracted structured data. You can specify the column names to be recognized, such as Size, Bust, and Length, by using ColumnNameList for precise targeted extraction. You can also control the output language by using the LanguageModel parameter. Valid values: cn for Chinese and en for English. If you do not specify this parameter, the original language is retained. This service is applicable to scenarios such as text conversion of size charts for apparel categories and batch structuring of package weight and dimension information for commodities.
   * Core capabilities: Input an image URL and optional column name configurations to output the structured data of the size chart or package weight and dimensions in the image. The API operation uses the asynchronous task mode (background: true). After you submit the task, a task ID is returned. You must poll the task to obtain the final result. This mode is suitable for processing complex images or handling large-scale calls.
   * ## Example results
   * | Input image | Output result |
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
   *             "Size",
   *             "Skirt length",
   *             "Waist",
   *             "Weight recommendation"
   *           \\],
   *           "IntersectionAttributes": [
   *             "Size",
   *             "Skirt length",
   *             "Waist (stretched)",
   *             "Weight recommendation"
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
   * Extracts structured information such as size charts and package weight and dimensions from images by using multimodal large models in asynchronous mode.
   * 
   * @remarks
   * ## Scenarios
   * Size charts: Extracts size charts for apparel categories into text.
   * Package weight and dimensions: Extracts package weight and dimension information from images.
   * ## Feature description
   * The size chart extraction service is based on multimodal foundation models. It automatically recognizes size charts or package weight and dimension information in images and converts the information into structured text. Provide an image URL, and the system processes the request as an asynchronous task and returns the extracted structured data. You can specify the column names to be recognized, such as Size, Bust, and Length, by using ColumnNameList for precise targeted extraction. You can also control the output language by using the LanguageModel parameter. Valid values: cn for Chinese and en for English. If you do not specify this parameter, the original language is retained. This service is applicable to scenarios such as text conversion of size charts for apparel categories and batch structuring of package weight and dimension information for commodities.
   * Core capabilities: Input an image URL and optional column name configurations to output the structured data of the size chart or package weight and dimensions in the image. The API operation uses the asynchronous task mode (background: true). After you submit the task, a task ID is returned. You must poll the task to obtain the final result. This mode is suitable for processing complex images or handling large-scale calls.
   * ## Example results
   * | Input image | Output result |
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
   *             "Size",
   *             "Skirt length",
   *             "Waist",
   *             "Weight recommendation"
   *           \\],
   *           "IntersectionAttributes": [
   *             "Size",
   *             "Skirt length",
   *             "Waist (stretched)",
   *             "Weight recommendation"
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
   * Reviews store photos based on storefront scene recognition and multimodal large model element localization. It outputs storefront scene classifications and confidence details, and localizes storefronts, signboards, entrances, and business signs. It is applicable to store data collection, storefront photo classification, and inspection reviews.
   * 
   * @remarks
   * ## Common scenarios
   * - Storefront photo classification: Distinguishes storefront-related photos from non-storefront photos.
   * - Store data verification: Localizes signboards and entrances, and extracts clear and readable short text.
   * - Multi-store photo review: Localizes visible storefronts and signs of adjacent stores separately.
   * ## Features
   * - Scene classification and details: Returns the scenes string array and classification details. Non-storefront photos are also valid classification results.
   * - Storefront key element localization: Covers storefronts, signboards, store entrances, and business-related signs.
   * - Readable text extraction: Extracts only clear short text. It does not infer business status based on whether the door is open or closed, and does not infer addresses or store ownership.
   * - Supports single HTTPS image input. Supplementary localization returns up to 12 targets, each containing a category, a bounding box, and up to 24 characters of visible text. The coverage field indicates whether the localization is complete.
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
   * Reviews store photos based on storefront scene recognition and multimodal large model element localization. It outputs storefront scene classifications and confidence details, and localizes storefronts, signboards, entrances, and business signs. It is applicable to store data collection, storefront photo classification, and inspection reviews.
   * 
   * @remarks
   * ## Common scenarios
   * - Storefront photo classification: Distinguishes storefront-related photos from non-storefront photos.
   * - Store data verification: Localizes signboards and entrances, and extracts clear and readable short text.
   * - Multi-store photo review: Localizes visible storefronts and signs of adjacent stores separately.
   * ## Features
   * - Scene classification and details: Returns the scenes string array and classification details. Non-storefront photos are also valid classification results.
   * - Storefront key element localization: Covers storefronts, signboards, store entrances, and business-related signs.
   * - Readable text extraction: Extracts only clear short text. It does not infer business status based on whether the door is open or closed, and does not infer addresses or store ownership.
   * - Supports single HTTPS image input. Supplementary localization returns up to 12 targets, each containing a category, a bounding box, and up to 24 characters of visible text. The coverage field indicates whether the localization is complete.
   * 
   * @param request - StorefrontSceneRecognitionRequest
   * @returns StorefrontSceneRecognitionResponse
   */
  async storefrontSceneRecognition(request: $_model.StorefrontSceneRecognitionRequest): Promise<$_model.StorefrontSceneRecognitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.storefrontSceneRecognitionWithOptions(request, runtime);
  }

  /**
   * Generates product detail page assets automatically based on a multimodal large language model (MLLM) and structured image-text extraction, designed for product detail page asset completion scenarios on e-commerce platforms and for brand merchants. The caller pushes product information to be queried (product ID, title, brand, main image, and shop name). The service automatically locates matching products and performs consistency verification, then extracts size information and product attributes from the matching product details, and renders them into size charts and attribute charts (SVG) that can be directly used on detail pages. The service also returns structured detail copy classifications and processing notes.
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
   * Generates product detail page assets automatically based on a multimodal large language model (MLLM) and structured image-text extraction, designed for product detail page asset completion scenarios on e-commerce platforms and for brand merchants. The caller pushes product information to be queried (product ID, title, brand, main image, and shop name). The service automatically locates matching products and performs consistency verification, then extracts size information and product attributes from the matching product details, and renders them into size charts and attribute charts (SVG) that can be directly used on detail pages. The service also returns structured detail copy classifications and processing notes.
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
   * Translates text by using the Maas MT model, an e-commerce translation model trained on over 1 billion high-quality bilingual sentence pairs and optimized for e-commerce terms such as brands, models, materials, and attributes. It supports 156 languages, more than 400 language pairs, and automatic language detection for source texts.
   * 
   * @remarks
   * ## Scenarios
   * *   Product titles: The Maas MT large language model accurately translates phrases, keywords, and trending words in product titles into the target language to increase product exposure on e-commerce platforms.
   *     
   * *   Product descriptions: Product descriptions are typically long and have diverse and complex formats. The Maas large language model supports long-text translation and HTML formatting, delivering excellent translation quality and format restoration.
   *     
   * *   Product attributes: Product attribute terms are short and contain e-commerce-specific words such as models and parameters.
   *     
   * *   Customer service conversations: In customer service scenarios, the model optimizes issues such as missing context and typos, and supports polite expressions in specific language pairs.
   *     
   *       The Maas MT large language model can also be used for translation in general scenarios, such as office work, meetings, and daily conversations.
   * ## Features
   * *   **Ultra-low hallucination rate and high-speed inference** The Maas MT large language model is aligned with preferences for translation scenarios. Compared with general-purpose large language models, it provides faster translation inference and an extremely low hallucination rate, making it especially suitable for large-scale invocation scenarios.
   *     
   * *   **Supported text formats** The model supports text and HTML formats.
   *     
   * *   **Translation intervention** You can customize translation results, including keeping terms untranslated (ABC-ABC), specifying translations (ABC-DEF), and omitting translations (ABC-null value). This feature is commonly used for brand word protection. You only need to pass the corresponding intervention glossary ID when calling the API. This meets your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.
   *     
   * *   **Translation quality comparison**
   * | **Source text** | **Aidge translation** | **Other translation product 1** | **Other translation product 2** | **Aidge translation advantages** |
   * | --- | --- | --- | --- | --- |
   * | 75mm 4Pin 0.38A GA81S2U 12V GTX 960 Cooling Fan for Zotac GTX960 Graphics Card Cooling Fan | 75mm 4Pin 0.38A GA81S2U 12V GTX 960, ventilador de enfriamiento para tarjeta gráfica Zotac GTX960. | Ventilador de refrigeración de 75mm 4Pin 0.38A GA81S2U 12V para la tarjeta gráfica Zotac GTX960 Ventilador de enfriamiento GTX 960. | Ventilador de refrigeración para tarjeta gráfica Zotac GTX960, 75mm, 4 pines, 0,38A, GA81S2U, 12V, GTX 960 | Clearer product subject |
   * | New Arrival Classic Style Luxury Brand 6 Hands Swiss Automatic Mechanical Men\\"s Business Steel Watch | Nueva llegada, reloj mecánico automático de lujo con 6 manecillas, estilo clásico, de acero para hombres de negocios | Nueva Llegada Reloj De Acero de Negocios para Hombre con Mecanismo Automático Suizo y 6 Agujas de Estilo Clásico de Marca de Lujo. | Reloj de acero de negocios para hombre, mecánico automático suizo, marca de lujo, estilo clásico, 6 manos, nueva llegada | More complete sentence structure, clearer expression, and more reasonable punctuation |
   * | Men Key Bag Genuine Cow Leather Buckets Key Cases Pouch Zipper Keychain Auto Car Key Case Women Home Key Holder Wallet | Sac à clés pour hommes en cuir de vache véritable, étuis à clés, pochette à fermeture éclair, porte-clés, étui à clé de voiture, porte-clés pour femmes, organisateur de portefeuille | Porte-clés sac en cuir de vache véritable, étuis à clés en forme de seau, pochette à fermeture éclair, porte-clés auto pour voiture, étui à clés pour femmes, organisateur de clés de maison, portefeuille. | Hommes porte-clés en cuir de vache véritable sac/pochette fermeture éclair porte-clés Auto voiture porte-clés femmes maison porte-clés organisateur portefeuille | Clearer and more explicit product subject expression, identifying it as a "key bag" rather than a "keychain", avoiding ambiguity in other translations |
   * ## Preparations and invocation flow
   * Text translation supports both synchronous and asynchronous invocation methods. This topic describes the asynchronous invocation API. To use synchronous calls, see [Text Translation - Synchronous API](https://api.aliyun.com/document/Aidge/2026-04-28/TextTranslate).
   * The asynchronous APIs for text translation and other features share the same result retrieval flow, RocketMQ subscribe rules, message encryption protocols, dependency configurations, and Java consumption and decryption code.
   * For the asynchronous invocation onboarding flow, subscribe rules, message formats and encryption protocols, and detailed integration solutions, see [Asynchronous API invocation instructions](https://www.alibabacloud.com/help/en/aidge/asynchronous-interface-call-instructions).
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
   * Translates text by using the Maas MT model, an e-commerce translation model trained on over 1 billion high-quality bilingual sentence pairs and optimized for e-commerce terms such as brands, models, materials, and attributes. It supports 156 languages, more than 400 language pairs, and automatic language detection for source texts.
   * 
   * @remarks
   * ## Scenarios
   * *   Product titles: The Maas MT large language model accurately translates phrases, keywords, and trending words in product titles into the target language to increase product exposure on e-commerce platforms.
   *     
   * *   Product descriptions: Product descriptions are typically long and have diverse and complex formats. The Maas large language model supports long-text translation and HTML formatting, delivering excellent translation quality and format restoration.
   *     
   * *   Product attributes: Product attribute terms are short and contain e-commerce-specific words such as models and parameters.
   *     
   * *   Customer service conversations: In customer service scenarios, the model optimizes issues such as missing context and typos, and supports polite expressions in specific language pairs.
   *     
   *       The Maas MT large language model can also be used for translation in general scenarios, such as office work, meetings, and daily conversations.
   * ## Features
   * *   **Ultra-low hallucination rate and high-speed inference** The Maas MT large language model is aligned with preferences for translation scenarios. Compared with general-purpose large language models, it provides faster translation inference and an extremely low hallucination rate, making it especially suitable for large-scale invocation scenarios.
   *     
   * *   **Supported text formats** The model supports text and HTML formats.
   *     
   * *   **Translation intervention** You can customize translation results, including keeping terms untranslated (ABC-ABC), specifying translations (ABC-DEF), and omitting translations (ABC-null value). This feature is commonly used for brand word protection. You only need to pass the corresponding intervention glossary ID when calling the API. This meets your translation needs in different scenarios. Generally, you can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.
   *     
   * *   **Translation quality comparison**
   * | **Source text** | **Aidge translation** | **Other translation product 1** | **Other translation product 2** | **Aidge translation advantages** |
   * | --- | --- | --- | --- | --- |
   * | 75mm 4Pin 0.38A GA81S2U 12V GTX 960 Cooling Fan for Zotac GTX960 Graphics Card Cooling Fan | 75mm 4Pin 0.38A GA81S2U 12V GTX 960, ventilador de enfriamiento para tarjeta gráfica Zotac GTX960. | Ventilador de refrigeración de 75mm 4Pin 0.38A GA81S2U 12V para la tarjeta gráfica Zotac GTX960 Ventilador de enfriamiento GTX 960. | Ventilador de refrigeración para tarjeta gráfica Zotac GTX960, 75mm, 4 pines, 0,38A, GA81S2U, 12V, GTX 960 | Clearer product subject |
   * | New Arrival Classic Style Luxury Brand 6 Hands Swiss Automatic Mechanical Men\\"s Business Steel Watch | Nueva llegada, reloj mecánico automático de lujo con 6 manecillas, estilo clásico, de acero para hombres de negocios | Nueva Llegada Reloj De Acero de Negocios para Hombre con Mecanismo Automático Suizo y 6 Agujas de Estilo Clásico de Marca de Lujo. | Reloj de acero de negocios para hombre, mecánico automático suizo, marca de lujo, estilo clásico, 6 manos, nueva llegada | More complete sentence structure, clearer expression, and more reasonable punctuation |
   * | Men Key Bag Genuine Cow Leather Buckets Key Cases Pouch Zipper Keychain Auto Car Key Case Women Home Key Holder Wallet | Sac à clés pour hommes en cuir de vache véritable, étuis à clés, pochette à fermeture éclair, porte-clés, étui à clé de voiture, porte-clés pour femmes, organisateur de portefeuille | Porte-clés sac en cuir de vache véritable, étuis à clés en forme de seau, pochette à fermeture éclair, porte-clés auto pour voiture, étui à clés pour femmes, organisateur de clés de maison, portefeuille. | Hommes porte-clés en cuir de vache véritable sac/pochette fermeture éclair porte-clés Auto voiture porte-clés femmes maison porte-clés organisateur portefeuille | Clearer and more explicit product subject expression, identifying it as a "key bag" rather than a "keychain", avoiding ambiguity in other translations |
   * ## Preparations and invocation flow
   * Text translation supports both synchronous and asynchronous invocation methods. This topic describes the asynchronous invocation API. To use synchronous calls, see [Text Translation - Synchronous API](https://api.aliyun.com/document/Aidge/2026-04-28/TextTranslate).
   * The asynchronous APIs for text translation and other features share the same result retrieval flow, RocketMQ subscribe rules, message encryption protocols, dependency configurations, and Java consumption and decryption code.
   * For the asynchronous invocation onboarding flow, subscribe rules, message formats and encryption protocols, and detailed integration solutions, see [Asynchronous API invocation instructions](https://www.alibabacloud.com/help/en/aidge/asynchronous-interface-call-instructions).
   * 
   * @param request - TextTranslateAsyncRequest
   * @returns TextTranslateAsyncResponse
   */
  async textTranslateAsync(request: $_model.TextTranslateAsyncRequest): Promise<$_model.TextTranslateAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.textTranslateAsyncWithOptions(request, runtime);
  }

  /**
   * Synchronously updates the content of a display knowledge base in batches.
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
   * Synchronously updates the content of a display knowledge base in batches.
   * 
   * @param request - UpdateDisplayKnowledgeRequest
   * @returns UpdateDisplayKnowledgeResponse
   */
  async updateDisplayKnowledge(request: $_model.UpdateDisplayKnowledgeRequest): Promise<$_model.UpdateDisplayKnowledgeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDisplayKnowledgeWithOptions(request, runtime);
  }

  /**
   * The e-commerce AI video generation agent is designed for e-commerce merchants and platforms. Based on product main images, titles, and selling points, it automatically generates 5- to 30-second product showcase short videos to help customers efficiently produce and distribute e-commerce content. The product supports multiple resolution outputs such as 720P and 1080P. You can invoke single products quickly and generate multiple products in batches, meeting the needs of daily operations and large-scale product content production. It currently overwrites all clothing categories (tops, pants, skirts, suits, underwear, swimwear, etc.) and is gradually expanding to core e-commerce categories such as skincare, cosmetics, food and beverages, and home appliances.
   * 
   * @remarks
   * # Scenarios
   * - Batch generation of product short videos for sellers and platforms: Supports multiple video aspect ratios and sizes (3:4, 9:16), adapting to product detail page video slots, product homepage displays, information feed placements, short video promotions, and event venue materials.
   * - Quick generation of the first batch of video materials for new product launches: When merchants have a large number of new products to launch, they only need to upload basic information such as product images and titles to quickly generate product showcase videos, model wearing videos, and spoken explanation videos, helping merchants quickly complete material deployment during the launch phase.
   * - High-fidelity clothing display: Generates model display videos that are closer to real commercial shooting effects based on product main images, focusing on optimizing capabilities such as pattern restoration, fabric texture retention, accurate color presentation, and stable and consistent details. It supports common e-commerce display methods such as wearing, turning, walking, close-up shots, and multi-angle switching.
   * - Generation of high-quality commercial shooting models: Built-in target audience model library, covering plus-size women, plus-size men, swimwear, girl style, light mature commuting, youth casual, business menswear, sports and fitness, and other body types, skin colors, and races. It supports various commercial shooting expressions such as standing display, side display, walking display, and partial close-ups.
   * - High-frequency e-commerce scenarios such as standard product explanations: Applicable to standardized product categories such as skincare, cosmetics, personal care small appliances, food and beverages, home cleaning daily necessities, and 3C digital products. It can quickly generate product explanation videos based on product main images, titles, selling point information, and explanation scripts.
   * - Multi-product and multi-selling point testing to improve delivery efficiency: For information feed advertising, short video delivery, and content promotion scenarios, it can quickly generate multiple versions of video materials, making it easy for enterprises to verify the conversion effects of different selling points and presentation forms at a low cost, and improve delivery ROI.
   * # Features
   * - Fully automatic end-to-end batch generation with zero prompt threshold: Callers only need to pass in the product image URL and title, and the system automatically completes the entire process from product understanding, storyboard planning to video generation, without the need to manually write prompts, select templates, or repeatedly adjust parameters. Built-in multiple agents such as product understanding, image quality inspection, script planning, and director camera movement greatly lower the threshold for use.
   * - Highly stable generation with a low waste rate: Adopts a deterministic generation process and multi-layer quality control mechanism to output usable materials with fewer retries, reducing invalid generation and resource waste, and making the overall production cost more controllable.
   * - E-commerce exclusive product fidelity capability: Built-in multi-round quality inspection agent locks the product state throughout the video generation process (such as zippers will not be pulled open, sleeves will not be put down, and prints will not disappear), ensuring product consistency through multi-layer defense of script rewriting, explicit constraint injection, and failure-aware retry.
   * - Reference image first + 6-axis consistency check: Adopts the Reference-Image-First generation paradigm, using the original product image as the only visual source of truth, and automatically performs 6-dimensional VL diagnosis (color drift, pattern missing, contour deviation, structure addition/reduction, model matching, dirt detection) to fundamentally eliminate the problem of generated images not looking like the product.
   * - Flexible storyboard arrangement and duration control: Supports adjustable video duration of 5 to 30 seconds; the agent independently plans independent storyboards to display the product effects in different scenarios; it also supports a fixed scene mode to deeply display the product tonality under a unified visual style.
   * - Cinematic camera movement capabilities: Built-in advanced camera movement modes such as bullet time, Grammy slow motion, 360° surround rotation, and model full-body rotation display, achieving deterministic output through segmented precise control.
   * - Model library and customization services: Built-in multi-type model resource library, supporting merchants to specify fixed models, customize exclusive model images, and bind brand visual personas for a long time to ensure brand visual consistency.
   * - Adapting to high-frequency e-commerce content scenarios: Supports multiple resolutions such as 720P and 1080P, and multiple aspect ratios such as 3:4 and 9:16, adapting to product detail page video slots, product homepage video displays, waterfall/information feed placements, event venue materials, and new product and promotional video generation.
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
   * The e-commerce AI video generation agent is designed for e-commerce merchants and platforms. Based on product main images, titles, and selling points, it automatically generates 5- to 30-second product showcase short videos to help customers efficiently produce and distribute e-commerce content. The product supports multiple resolution outputs such as 720P and 1080P. You can invoke single products quickly and generate multiple products in batches, meeting the needs of daily operations and large-scale product content production. It currently overwrites all clothing categories (tops, pants, skirts, suits, underwear, swimwear, etc.) and is gradually expanding to core e-commerce categories such as skincare, cosmetics, food and beverages, and home appliances.
   * 
   * @remarks
   * # Scenarios
   * - Batch generation of product short videos for sellers and platforms: Supports multiple video aspect ratios and sizes (3:4, 9:16), adapting to product detail page video slots, product homepage displays, information feed placements, short video promotions, and event venue materials.
   * - Quick generation of the first batch of video materials for new product launches: When merchants have a large number of new products to launch, they only need to upload basic information such as product images and titles to quickly generate product showcase videos, model wearing videos, and spoken explanation videos, helping merchants quickly complete material deployment during the launch phase.
   * - High-fidelity clothing display: Generates model display videos that are closer to real commercial shooting effects based on product main images, focusing on optimizing capabilities such as pattern restoration, fabric texture retention, accurate color presentation, and stable and consistent details. It supports common e-commerce display methods such as wearing, turning, walking, close-up shots, and multi-angle switching.
   * - Generation of high-quality commercial shooting models: Built-in target audience model library, covering plus-size women, plus-size men, swimwear, girl style, light mature commuting, youth casual, business menswear, sports and fitness, and other body types, skin colors, and races. It supports various commercial shooting expressions such as standing display, side display, walking display, and partial close-ups.
   * - High-frequency e-commerce scenarios such as standard product explanations: Applicable to standardized product categories such as skincare, cosmetics, personal care small appliances, food and beverages, home cleaning daily necessities, and 3C digital products. It can quickly generate product explanation videos based on product main images, titles, selling point information, and explanation scripts.
   * - Multi-product and multi-selling point testing to improve delivery efficiency: For information feed advertising, short video delivery, and content promotion scenarios, it can quickly generate multiple versions of video materials, making it easy for enterprises to verify the conversion effects of different selling points and presentation forms at a low cost, and improve delivery ROI.
   * # Features
   * - Fully automatic end-to-end batch generation with zero prompt threshold: Callers only need to pass in the product image URL and title, and the system automatically completes the entire process from product understanding, storyboard planning to video generation, without the need to manually write prompts, select templates, or repeatedly adjust parameters. Built-in multiple agents such as product understanding, image quality inspection, script planning, and director camera movement greatly lower the threshold for use.
   * - Highly stable generation with a low waste rate: Adopts a deterministic generation process and multi-layer quality control mechanism to output usable materials with fewer retries, reducing invalid generation and resource waste, and making the overall production cost more controllable.
   * - E-commerce exclusive product fidelity capability: Built-in multi-round quality inspection agent locks the product state throughout the video generation process (such as zippers will not be pulled open, sleeves will not be put down, and prints will not disappear), ensuring product consistency through multi-layer defense of script rewriting, explicit constraint injection, and failure-aware retry.
   * - Reference image first + 6-axis consistency check: Adopts the Reference-Image-First generation paradigm, using the original product image as the only visual source of truth, and automatically performs 6-dimensional VL diagnosis (color drift, pattern missing, contour deviation, structure addition/reduction, model matching, dirt detection) to fundamentally eliminate the problem of generated images not looking like the product.
   * - Flexible storyboard arrangement and duration control: Supports adjustable video duration of 5 to 30 seconds; the agent independently plans independent storyboards to display the product effects in different scenarios; it also supports a fixed scene mode to deeply display the product tonality under a unified visual style.
   * - Cinematic camera movement capabilities: Built-in advanced camera movement modes such as bullet time, Grammy slow motion, 360° surround rotation, and model full-body rotation display, achieving deterministic output through segmented precise control.
   * - Model library and customization services: Built-in multi-type model resource library, supporting merchants to specify fixed models, customize exclusive model images, and bind brand visual personas for a long time to ensure brand visual consistency.
   * - Adapting to high-frequency e-commerce content scenarios: Supports multiple resolutions such as 720P and 1080P, and multiple aspect ratios such as 3:4 and 9:16, adapting to product detail page video slots, product homepage video displays, waterfall/information feed placements, event venue materials, and new product and promotional video generation.
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
   * *   **Cross-border e-commerce video localization**: Translates the selling point text in product introduction videos into the language of the target market to facilitate promotion on overseas platforms.
   *     
   * *   **International social media marketing**: Localizes the on-screen text in videos for platforms such as TikTok, Instagram, and YouTube with one click to improve comprehension and conversion rates among overseas users.
   *     
   * *   **Global brand advertising**: Automatically generates video versions in the languages of the target regions to reduce manual production costs.
   *     
   * *   **Training and product instructions**: Translates the on-screen text in training courses or product demo videos into multiple languages for global teams.
   * ## Features
   * | Feature | Identifier | Description |
   * | --- | --- | --- |
   * | Speech subtitle translation | `speech` | Translates the video speech into target language dubbing. Original subtitles are not removed, and no new subtitles are added. |
   * | On-screen text translation | `visual` | Translates the embedded text (subtitles, selling point text, etc.) in the video frames and erases the original text. You can enable quality check for on-screen text processing by using the API. |
   * Speech subtitle translation (`speech`) generates target language dubbing based on the spoken content in the video and synthesizes it into the video. It does not remove original subtitles or add new subtitles. Original subtitles refer to the existing subtitles in the video frames that correspond to the spoken content.
   * On-screen text translation (`visual`) targets the recognizable original language text in the video frames, such as titles, product selling points, and descriptive text. It can be used independently without selecting speech subtitle translation first, and the text does not need to appear in the speech. Original subtitles within the processing scope may also be processed.
   * When both `speech` and `visual` are selected, the speech subtitle translation is completed and the video is synthesized first. Then, on-screen text processing is performed on this video, retaining the translated dubbing and outputting a final video. The order of features in the array does not affect the execution order. Therefore, not processing original subtitles only means that no subtitles are removed or added during the speech subtitle phase. Subsequent on-screen text processing may still alter the original subtitles.
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
   * *   **Cross-border e-commerce video localization**: Translates the selling point text in product introduction videos into the language of the target market to facilitate promotion on overseas platforms.
   *     
   * *   **International social media marketing**: Localizes the on-screen text in videos for platforms such as TikTok, Instagram, and YouTube with one click to improve comprehension and conversion rates among overseas users.
   *     
   * *   **Global brand advertising**: Automatically generates video versions in the languages of the target regions to reduce manual production costs.
   *     
   * *   **Training and product instructions**: Translates the on-screen text in training courses or product demo videos into multiple languages for global teams.
   * ## Features
   * | Feature | Identifier | Description |
   * | --- | --- | --- |
   * | Speech subtitle translation | `speech` | Translates the video speech into target language dubbing. Original subtitles are not removed, and no new subtitles are added. |
   * | On-screen text translation | `visual` | Translates the embedded text (subtitles, selling point text, etc.) in the video frames and erases the original text. You can enable quality check for on-screen text processing by using the API. |
   * Speech subtitle translation (`speech`) generates target language dubbing based on the spoken content in the video and synthesizes it into the video. It does not remove original subtitles or add new subtitles. Original subtitles refer to the existing subtitles in the video frames that correspond to the spoken content.
   * On-screen text translation (`visual`) targets the recognizable original language text in the video frames, such as titles, product selling points, and descriptive text. It can be used independently without selecting speech subtitle translation first, and the text does not need to appear in the speech. Original subtitles within the processing scope may also be processed.
   * When both `speech` and `visual` are selected, the speech subtitle translation is completed and the video is synthesized first. Then, on-screen text processing is performed on this video, retaining the translated dubbing and outputting a final video. The order of features in the array does not affect the execution order. Therefore, not processing original subtitles only means that no subtitles are removed or added during the speech subtitle phase. Subsequent on-screen text processing may still alter the original subtitles.
   * 
   * @param request - VideoTranslationRequest
   * @returns VideoTranslationResponse
   */
  async videoTranslation(request: $_model.VideoTranslationRequest): Promise<$_model.VideoTranslationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.videoTranslationWithOptions(request, runtime);
  }

  /**
   * Generates virtual try-on images based on AI algorithms. This API service replaces the clothing on a model with the specified garment based on the input garment image and model image, while preserving the model\\"s appearance details, pose, facial features, and scene details to produce realistic and well-fitted try-on results. You only need to provide the URL of the original product image to obtain a processed clean image.
   * 
   * @remarks
   * ## Scenarios
   * - **Virtual try-on for clothing products:**
   * Supports multiple clothing categories such as tops, bottoms, jumpsuits, and dresses. After uploading a model image and a product image, the system generates a natural and realistic try-on effect that visually demonstrates how the garment looks when worn.
   * - **Virtual try-on for shoes and hats:**
   * Supports virtual try-on for shoes, hats, and similar products. The system intelligently matches the product position and proportion based on the model\\"s pose and body parts to produce a coordinated and realistic wearing effect.
   * - **E-commerce product display and marketing:**
   * Helps merchants quickly generate model try-on images for different products, reducing the costs of traditional photography, outfit changes, and post-production while improving the production efficiency of product images.  
   * - **Online shopping experience optimization:**
   * Consumers can preview how products look when worn through virtual try-on, gaining a more intuitive understanding of the style, coordination, and overall effect of products to support purchasing decisions and enhance the shopping experience.
   * ## Features
   * - **First, provide a model image and a product image. The system uses the model image as the try-on subject and applies the garment from the product image onto the model:**
   *   - a. Model image: the image of the person for virtual try-on.
   *   - b. Product image: the image of the clothing, shoes, or hat to be applied onto the model.
   * - **Second, select the corresponding product type based on the actual product. Supported types include tops, bottoms, jumpsuits, dresses, shoes, and hats:**
   *   - a. Specify product type: directly specify the product type, and the system processes accordingly.
   *   - b. Automatic type recognition: if no product type is specified, the system automatically identifies the product category from the product image and performs the virtual try-on based on the recognition result.
   * - **Finally, the system combines the model image, product image, and product type to generate a virtual try-on image that shows how the product looks on the model:**
   *   - a. Preserve model details: the generation process does not alter the model\\"s appearance, hairstyle, pose, body shape, or other details from the original model image.
   *   - b. Maintain scene consistency: the background, composition, lighting, and overall visual effect of the original model image remain unchanged. Only the wearing area corresponding to the product is processed.
   *   - c. Generate try-on effect: the product is naturally applied onto the model, conforming to the model\\"s pose and body structure, to produce a coordinated and realistic virtual try-on image.
   * ## Sample results
   * | **Type** | **Model image** | **Garment image** | **Try-on result** |
   * | --- | --- | --- | --- |
   * | Tops | ![lQLPJv-OKUNDSxvNBojNA62wAMWEBuiTUuMKXnNidWFWAA_941_1672.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/e4273b03-0d3b-4e98-b8f3-8713fccee303.png) | ![男模特衬衫正面-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/d9ab77f7-8791-4fa5-8d76-4fda3e2e1310.png) | ![7c1c0c04-9828-940f-b86d-c08f7ec8fb97_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/42982786-73ee-4d23-a8d0-551f7a18be22.png) |
   * | Bottoms | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/64147be2-0c95-431a-8c04-f756fac96db2.jpeg) | ![微喇牛仔裤-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/f79a31cb-08bd-4b59-be9d-9b9aa3f60230.png) | ![adbb8e02-9738-991a-9699-f46bc5c089a9_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/297f29eb-7bc9-49a5-b4f7-114375a0f312.png) |
   * | Shoes | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/64147be2-0c95-431a-8c04-f756fac96db2.jpeg) | ![男模特鞋子正面-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/bb9804b5-0ab9-485b-829b-d54708377fd2.png) | ![91d7b8c4-fc31-9a7f-8b6e-3bec5e62efb3_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/8e54fdc3-7a86-4e3b-aa1d-f3741ce7658c.png) |
   * | Jumpsuits | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/eddffa7c-a494-4f5b-9d66-da758fb0265f.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/7f5cec40-a884-4640-8339-6109305dfa1d.png) | ![20c8b46a-213e-985c-aab2-d56f8752f3a4_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/635096eb-f2b2-4fd8-91d8-4c7e2e7d7ad1.png) |
   * | Dresses | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/eddffa7c-a494-4f5b-9d66-da758fb0265f.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/3d4a6de0-95d2-40cf-9105-48b5e899e0d3.png) | ![45b630e6-4e9d-9bf0-bb4e-224b30a91f77_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/a3cbb609-db71-47d6-8ac6-884f18c6596f.png) |
   * | Hats | ![adbb8e02-9738-991a-9699-f46bc5c089a9_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/ac26f38e-acc7-49d1-a4ec-a51b54e4bd66.png) | ![帽子-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/34176b57-3aa8-4b6e-8d0f-808ae953654a.png) | ![881f02f3-12f5-95dd-b651-98fab6e30fa0_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/949b4c28-8821-4aa5-a2b4-e4acc1e57b9b.png) |
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
   * Generates virtual try-on images based on AI algorithms. This API service replaces the clothing on a model with the specified garment based on the input garment image and model image, while preserving the model\\"s appearance details, pose, facial features, and scene details to produce realistic and well-fitted try-on results. You only need to provide the URL of the original product image to obtain a processed clean image.
   * 
   * @remarks
   * ## Scenarios
   * - **Virtual try-on for clothing products:**
   * Supports multiple clothing categories such as tops, bottoms, jumpsuits, and dresses. After uploading a model image and a product image, the system generates a natural and realistic try-on effect that visually demonstrates how the garment looks when worn.
   * - **Virtual try-on for shoes and hats:**
   * Supports virtual try-on for shoes, hats, and similar products. The system intelligently matches the product position and proportion based on the model\\"s pose and body parts to produce a coordinated and realistic wearing effect.
   * - **E-commerce product display and marketing:**
   * Helps merchants quickly generate model try-on images for different products, reducing the costs of traditional photography, outfit changes, and post-production while improving the production efficiency of product images.  
   * - **Online shopping experience optimization:**
   * Consumers can preview how products look when worn through virtual try-on, gaining a more intuitive understanding of the style, coordination, and overall effect of products to support purchasing decisions and enhance the shopping experience.
   * ## Features
   * - **First, provide a model image and a product image. The system uses the model image as the try-on subject and applies the garment from the product image onto the model:**
   *   - a. Model image: the image of the person for virtual try-on.
   *   - b. Product image: the image of the clothing, shoes, or hat to be applied onto the model.
   * - **Second, select the corresponding product type based on the actual product. Supported types include tops, bottoms, jumpsuits, dresses, shoes, and hats:**
   *   - a. Specify product type: directly specify the product type, and the system processes accordingly.
   *   - b. Automatic type recognition: if no product type is specified, the system automatically identifies the product category from the product image and performs the virtual try-on based on the recognition result.
   * - **Finally, the system combines the model image, product image, and product type to generate a virtual try-on image that shows how the product looks on the model:**
   *   - a. Preserve model details: the generation process does not alter the model\\"s appearance, hairstyle, pose, body shape, or other details from the original model image.
   *   - b. Maintain scene consistency: the background, composition, lighting, and overall visual effect of the original model image remain unchanged. Only the wearing area corresponding to the product is processed.
   *   - c. Generate try-on effect: the product is naturally applied onto the model, conforming to the model\\"s pose and body structure, to produce a coordinated and realistic virtual try-on image.
   * ## Sample results
   * | **Type** | **Model image** | **Garment image** | **Try-on result** |
   * | --- | --- | --- | --- |
   * | Tops | ![lQLPJv-OKUNDSxvNBojNA62wAMWEBuiTUuMKXnNidWFWAA_941_1672.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/e4273b03-0d3b-4e98-b8f3-8713fccee303.png) | ![男模特衬衫正面-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/d9ab77f7-8791-4fa5-8d76-4fda3e2e1310.png) | ![7c1c0c04-9828-940f-b86d-c08f7ec8fb97_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/42982786-73ee-4d23-a8d0-551f7a18be22.png) |
   * | Bottoms | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/64147be2-0c95-431a-8c04-f756fac96db2.jpeg) | ![微喇牛仔裤-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/f79a31cb-08bd-4b59-be9d-9b9aa3f60230.png) | ![adbb8e02-9738-991a-9699-f46bc5c089a9_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/297f29eb-7bc9-49a5-b4f7-114375a0f312.png) |
   * | Shoes | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/64147be2-0c95-431a-8c04-f756fac96db2.jpeg) | ![男模特鞋子正面-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/bb9804b5-0ab9-485b-829b-d54708377fd2.png) | ![91d7b8c4-fc31-9a7f-8b6e-3bec5e62efb3_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/8e54fdc3-7a86-4e3b-aa1d-f3741ce7658c.png) |
   * | Jumpsuits | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/eddffa7c-a494-4f5b-9d66-da758fb0265f.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/7f5cec40-a884-4640-8339-6109305dfa1d.png) | ![20c8b46a-213e-985c-aab2-d56f8752f3a4_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/635096eb-f2b2-4fd8-91d8-4c7e2e7d7ad1.png) |
   * | Dresses | ![lQDPJwcNMfxtoRvNBQDNAtCwhseujKzDt_QKXnNSTPaeAA_720_1280.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/eddffa7c-a494-4f5b-9d66-da758fb0265f.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/3d4a6de0-95d2-40cf-9105-48b5e899e0d3.png) | ![45b630e6-4e9d-9bf0-bb4e-224b30a91f77_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/a3cbb609-db71-47d6-8ac6-884f18c6596f.png) |
   * | Hats | ![adbb8e02-9738-991a-9699-f46bc5c089a9_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/ac26f38e-acc7-49d1-a4ec-a51b54e4bd66.png) | ![帽子-aidge.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/34176b57-3aa8-4b6e-8d0f-808ae953654a.png) | ![881f02f3-12f5-95dd-b651-98fab6e30fa0_qwen_image3_serving_output_0.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4j6OJ5PZM1WeKq3p/img/949b4c28-8821-4aa5-a2b4-e4acc1e57b9b.png) |
   * 
   * @param request - VirtualTryOnRequest
   * @returns VirtualTryOnResponse
   */
  async virtualTryOn(request: $_model.VirtualTryOnRequest): Promise<$_model.VirtualTryOnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.virtualTryOnWithOptions(request, runtime);
  }

  /**
   * Provides a one-stop AI-powered image processing service for e-commerce sellers. Orchestrates seven atomic capabilities — element detection, intelligent matting, intelligent removal, Image Translation Pro, image expansion, intelligent cropping, and HD upscaling — into an image processing workflow. Upload an image once, select the desired capabilities, and complete multiple image optimizations sequentially in a single call to produce product images that meet listing platform requirements. (Asynchronous)
   * 
   * @remarks
   * # 1. Product Introduction
   * A one-stop AI-powered image processing service for e-commerce sellers. Orchestrates seven atomic capabilities — element detection, intelligent matting, intelligent removal, Image Translation Pro, image expansion, intelligent cropping, and HD upscaling — into an image processing workflow. Upload an image once, select the desired capabilities, and complete multiple image optimizations sequentially in a single call to produce product images that meet listing platform requirements. (Asynchronous)
   * # 2. Common scenarios
   * Applicable to batch optimization of product images in cross-platform listing scenarios. Adapts source product images into main images, SKU images, and detail images required by listing platforms. Supported capabilities include:
   * *   Detecting low-quality images that contain text, watermarks, logos, or overlay patches, allowing users to filter images that need processing
   *     
   * *   Removing non-compliant elements such as watermarks, logos, overlay patches, and Chinese text from original images
   *     
   * *   Removing the background around the product subject edges
   *     
   * *   Translating text within images into other languages
   *     
   * *   Expanding images to other dimensions (by ratio, size, etc.) with automatic background fill
   *     
   * *   Cropping images to specified dimensions
   *     
   * *   Upscaling image resolution by a specified factor
   * # 3. Features
   * Provide a product image URL and use the Ability parameter to select the desired combination of AI capabilities (1 = Intelligent Element Detection, 2 = Intelligent Matting, 3 = Intelligent Removal, 4 = Image Translation Pro, 5 = Image Expansion, 6 = Intelligent Cropping, 7 = HD Upscaling). The system executes the selected capabilities sequentially in a preset order. Because Intelligent Element Detection helps determine whether an image contains certain specified elements, and the presence of those elements affects the selection of subsequent AI capabilities, an additional input is provided that allows users to choose whether to filter images out of or retain images in the subsequent AI processing pipeline.
   * ![ai-pipeline-flowchart.svg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/bddb522a-0795-4b5c-b25d-10e933426367.svg)
   * Each AI capability is described as follows:
   * 1.  **Intelligent Element Detection:** An element detection capability designed specifically for e-commerce images. Detects elements such as text, logos, watermarks, and text-bearing color blocks in both the image subject and background, and returns Boolean detection results. Supports filtering images based on detection results (for example, processing only images that contain watermarks). Works in conjunction with subsequent capabilities — first identifies the types of elements that need optimization, then precisely executes removal and other operations.
   *     
   * 2.  **Intelligent Matting:** Automatically identifies the product subject in an image and precisely separates the subject from the background. Based on deep learning models, supports accurate segmentation of complex edges such as hair strands and transparent objects. Outputs images with a transparent or white background, supports custom background colors and target size cropping, and directly generates product display images that comply with e-commerce platform specifications.
   *     
   * 3.  **Intelligent Removal:** Automatically detects and removes non-compliant elements from e-commerce images, including text, specific names (brand/store names), transparent text blocks, and overlay patches. Supports specifying removal of elements in the subject area or non-subject area separately. Also supports specifying exact removal regions through the Mask parameter for efficient compliance cleanup of large batches of images.
   *     
   * 4.  **Image Translation Pro:** Leverages multimodal foundation model technology to translate text in images into a target language and render it directly at the corresponding position in the original image. Supports more than 100 language pairs. Provides product subject text protection, brand name protection, and translation intervention glossaries to prevent mistranslation of embedded product information. After translation, returns layout information such as text position, font, and color to support secondary editing.
   *     
   * 5.  **Intelligent Image Expansion:** Expands the image canvas using AI generation technology to broaden the image view without cropping the subject. Supports multiple expansion methods: by aspect ratio (1:1, 3:4, 4:3, 9:16, 16:9), by horizontal/vertical scaling ratio (1.0× to 3.0×), or by pixel offset in the up, down, left, and right directions. AI automatically fills in naturally transitioning background content.
   *     
   * 6.  **Intelligent Cropping:** Intelligently crops images to specified dimensions, automatically identifies the subject area, and precisely preserves core content. Supports custom output width and height (100–5000 pixels) to meet the image dimension requirements of different e-commerce platforms and ad placements, ensuring the subject remains prominent and the composition stays balanced after cropping.
   *     
   * 7.  **HD Upscaling:** Enhances details and reduces noise while upscaling images. Supports 2× to 4× upscaling. Suitable for improving the clarity of low-resolution product images and optimizing visual presentation. Supports output in PNG, JPG, BMP, and other formats.
   * # 4. Before and after comparison 
   * | **Original image** | **Capabilities used** | **Output image** |
   * | --- | --- | --- |
   * | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/3c1af966-8a5a-491d-9bfa-aefc321c9bed.png) | *   Intelligent detection
   *     
   * *   Image Translation Pro
   *     
   * *   Intelligent cropping | ![R1.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/c2579e3e-389e-4717-84e3-834e60fea6b0.png) |
   * | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/a92d14a9-ecf4-4e77-ad96-a2fcdd95dd1d.png) | *   Intelligent matting
   *     
   * *   Intelligent removal
   *     
   * *   Intelligent cropping | ![R1.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/f631f578-3496-4aa1-b5ef-cd1ea603e049.png) |
   * | ![C2.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/12965cf8-cfdf-4a85-95fe-fdfcefcaa4ae.png) | *   Intelligent detection
   *     
   * *   Intelligent removal
   *     
   * *   HD upscaling | ![R2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/95d29e79-8622-45fb-b284-cd580fe40ea0.jpeg) |
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
   * Provides a one-stop AI-powered image processing service for e-commerce sellers. Orchestrates seven atomic capabilities — element detection, intelligent matting, intelligent removal, Image Translation Pro, image expansion, intelligent cropping, and HD upscaling — into an image processing workflow. Upload an image once, select the desired capabilities, and complete multiple image optimizations sequentially in a single call to produce product images that meet listing platform requirements. (Asynchronous)
   * 
   * @remarks
   * # 1. Product Introduction
   * A one-stop AI-powered image processing service for e-commerce sellers. Orchestrates seven atomic capabilities — element detection, intelligent matting, intelligent removal, Image Translation Pro, image expansion, intelligent cropping, and HD upscaling — into an image processing workflow. Upload an image once, select the desired capabilities, and complete multiple image optimizations sequentially in a single call to produce product images that meet listing platform requirements. (Asynchronous)
   * # 2. Common scenarios
   * Applicable to batch optimization of product images in cross-platform listing scenarios. Adapts source product images into main images, SKU images, and detail images required by listing platforms. Supported capabilities include:
   * *   Detecting low-quality images that contain text, watermarks, logos, or overlay patches, allowing users to filter images that need processing
   *     
   * *   Removing non-compliant elements such as watermarks, logos, overlay patches, and Chinese text from original images
   *     
   * *   Removing the background around the product subject edges
   *     
   * *   Translating text within images into other languages
   *     
   * *   Expanding images to other dimensions (by ratio, size, etc.) with automatic background fill
   *     
   * *   Cropping images to specified dimensions
   *     
   * *   Upscaling image resolution by a specified factor
   * # 3. Features
   * Provide a product image URL and use the Ability parameter to select the desired combination of AI capabilities (1 = Intelligent Element Detection, 2 = Intelligent Matting, 3 = Intelligent Removal, 4 = Image Translation Pro, 5 = Image Expansion, 6 = Intelligent Cropping, 7 = HD Upscaling). The system executes the selected capabilities sequentially in a preset order. Because Intelligent Element Detection helps determine whether an image contains certain specified elements, and the presence of those elements affects the selection of subsequent AI capabilities, an additional input is provided that allows users to choose whether to filter images out of or retain images in the subsequent AI processing pipeline.
   * ![ai-pipeline-flowchart.svg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/bddb522a-0795-4b5c-b25d-10e933426367.svg)
   * Each AI capability is described as follows:
   * 1.  **Intelligent Element Detection:** An element detection capability designed specifically for e-commerce images. Detects elements such as text, logos, watermarks, and text-bearing color blocks in both the image subject and background, and returns Boolean detection results. Supports filtering images based on detection results (for example, processing only images that contain watermarks). Works in conjunction with subsequent capabilities — first identifies the types of elements that need optimization, then precisely executes removal and other operations.
   *     
   * 2.  **Intelligent Matting:** Automatically identifies the product subject in an image and precisely separates the subject from the background. Based on deep learning models, supports accurate segmentation of complex edges such as hair strands and transparent objects. Outputs images with a transparent or white background, supports custom background colors and target size cropping, and directly generates product display images that comply with e-commerce platform specifications.
   *     
   * 3.  **Intelligent Removal:** Automatically detects and removes non-compliant elements from e-commerce images, including text, specific names (brand/store names), transparent text blocks, and overlay patches. Supports specifying removal of elements in the subject area or non-subject area separately. Also supports specifying exact removal regions through the Mask parameter for efficient compliance cleanup of large batches of images.
   *     
   * 4.  **Image Translation Pro:** Leverages multimodal foundation model technology to translate text in images into a target language and render it directly at the corresponding position in the original image. Supports more than 100 language pairs. Provides product subject text protection, brand name protection, and translation intervention glossaries to prevent mistranslation of embedded product information. After translation, returns layout information such as text position, font, and color to support secondary editing.
   *     
   * 5.  **Intelligent Image Expansion:** Expands the image canvas using AI generation technology to broaden the image view without cropping the subject. Supports multiple expansion methods: by aspect ratio (1:1, 3:4, 4:3, 9:16, 16:9), by horizontal/vertical scaling ratio (1.0× to 3.0×), or by pixel offset in the up, down, left, and right directions. AI automatically fills in naturally transitioning background content.
   *     
   * 6.  **Intelligent Cropping:** Intelligently crops images to specified dimensions, automatically identifies the subject area, and precisely preserves core content. Supports custom output width and height (100–5000 pixels) to meet the image dimension requirements of different e-commerce platforms and ad placements, ensuring the subject remains prominent and the composition stays balanced after cropping.
   *     
   * 7.  **HD Upscaling:** Enhances details and reduces noise while upscaling images. Supports 2× to 4× upscaling. Suitable for improving the clarity of low-resolution product images and optimizing visual presentation. Supports output in PNG, JPG, BMP, and other formats.
   * # 4. Before and after comparison 
   * | **Original image** | **Capabilities used** | **Output image** |
   * | --- | --- | --- |
   * | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/3c1af966-8a5a-491d-9bfa-aefc321c9bed.png) | *   Intelligent detection
   *     
   * *   Image Translation Pro
   *     
   * *   Intelligent cropping | ![R1.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/c2579e3e-389e-4717-84e3-834e60fea6b0.png) |
   * | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/a92d14a9-ecf4-4e77-ad96-a2fcdd95dd1d.png) | *   Intelligent matting
   *     
   * *   Intelligent removal
   *     
   * *   Intelligent cropping | ![R1.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/f631f578-3496-4aa1-b5ef-cd1ea603e049.png) |
   * | ![C2.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/12965cf8-cfdf-4a85-95fe-fdfcefcaa4ae.png) | *   Intelligent detection
   *     
   * *   Intelligent removal
   *     
   * *   HD upscaling | ![R2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/95d29e79-8622-45fb-b284-cd580fe40ea0.jpeg) |
   * 
   * @param request - VisionFlowRequest
   * @returns VisionFlowResponse
   */
  async visionFlow(request: $_model.VisionFlowRequest): Promise<$_model.VisionFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.visionFlowWithOptions(request, runtime);
  }

}
