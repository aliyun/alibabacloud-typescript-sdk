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
      'cn-beijing': "aidge.cn-beijing.aliyuncs.com",
    };
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
   * A one-click cross-platform product material optimization service for cross-border e-commerce sellers (minimum cost version). Input product links from source platforms to generate optimized materials including titles, attributes, main images, SKU images, detail images, and descriptions that comply with the target platform\\"s requirements. Uses officially pre-built minimum-cost workflows, primarily based on filtering and lightweight processing without invoking high-cost image translation capabilities, maximizing cost control while ensuring listing compliance. (Asynchronous)
   * 
   * @remarks
   * ## Product Introduction
   * A one-click cross-platform product material optimization service for cross-border e-commerce sellers (minimum cost version). Input product links from source platforms to generate optimized materials including titles, attributes, main images, SKU images, detail images, and descriptions that comply with the target platform\\"s requirements. Uses officially pre-built minimum-cost workflows, primarily based on filtering and lightweight processing without invoking high-cost image translation capabilities, maximizing cost control while ensuring listing compliance. (Asynchronous)
   * ## Applicable Scenarios
   * Suitable for cost-sensitive cross-platform product listing scenarios where speed, volume, and affordability are top priorities: for example, bulk listing from 1688 to TEMU, high-SKU inventory batch uploads, entry-level AI processing capabilities provided by top sellers and ERP/SaaS platforms, and merchants with high daily processing volumes but low requirements for marketing performance.
   * By filtering images containing watermarks or non-compliant elements and prioritizing clean original images, it helps merchants complete cross-platform listings at minimal cost.
   * ## Feature Overview
   * This service uses an officially pre-built "Minimum Cost" product optimization workflow, covering the full pipeline from material acquisition, compliance filtering, text optimization, to image processing:
   * 1. Automatically parses 1688 product links to extract multiple material types including titles, SKUs, main images, detail images, and attributes;
   * 2. Performs text filtering and SEO optimization based on TEMU platform blacklisted terms and compliance rules;
   * 3. Intelligently identifies watermarks, logos, and Chinese text in images, prioritizing filtering and selecting clean original images. SKU images and a small number of main images are processed using image translation capabilities to comply with platform standards (high-conversion images with marketing text may be filtered out);
   * 4. Completes category matching, attribute filling, and localization rewriting according to target platform requirements.
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
   * A one-click cross-platform product material optimization service for cross-border e-commerce sellers (minimum cost version). Input product links from source platforms to generate optimized materials including titles, attributes, main images, SKU images, detail images, and descriptions that comply with the target platform\\"s requirements. Uses officially pre-built minimum-cost workflows, primarily based on filtering and lightweight processing without invoking high-cost image translation capabilities, maximizing cost control while ensuring listing compliance. (Asynchronous)
   * 
   * @remarks
   * ## Product Introduction
   * A one-click cross-platform product material optimization service for cross-border e-commerce sellers (minimum cost version). Input product links from source platforms to generate optimized materials including titles, attributes, main images, SKU images, detail images, and descriptions that comply with the target platform\\"s requirements. Uses officially pre-built minimum-cost workflows, primarily based on filtering and lightweight processing without invoking high-cost image translation capabilities, maximizing cost control while ensuring listing compliance. (Asynchronous)
   * ## Applicable Scenarios
   * Suitable for cost-sensitive cross-platform product listing scenarios where speed, volume, and affordability are top priorities: for example, bulk listing from 1688 to TEMU, high-SKU inventory batch uploads, entry-level AI processing capabilities provided by top sellers and ERP/SaaS platforms, and merchants with high daily processing volumes but low requirements for marketing performance.
   * By filtering images containing watermarks or non-compliant elements and prioritizing clean original images, it helps merchants complete cross-platform listings at minimal cost.
   * ## Feature Overview
   * This service uses an officially pre-built "Minimum Cost" product optimization workflow, covering the full pipeline from material acquisition, compliance filtering, text optimization, to image processing:
   * 1. Automatically parses 1688 product links to extract multiple material types including titles, SKUs, main images, detail images, and attributes;
   * 2. Performs text filtering and SEO optimization based on TEMU platform blacklisted terms and compliance rules;
   * 3. Intelligently identifies watermarks, logos, and Chinese text in images, prioritizing filtering and selecting clean original images. SKU images and a small number of main images are processed using image translation capabilities to comply with platform standards (high-conversion images with marketing text may be filtered out);
   * 4. Completes category matching, attribute filling, and localization rewriting according to target platform requirements.
   * 
   * @param request - AssetOptimizeLiteRequest
   * @returns AssetOptimizeLiteResponse
   */
  async assetOptimizeLite(request: $_model.AssetOptimizeLiteRequest): Promise<$_model.AssetOptimizeLiteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assetOptimizeLiteWithOptions(request, runtime);
  }

  /**
   * Provides a one-click cross-platform product listing optimization service (best effect edition) for cross-border e-commerce sellers. Takes a 1688 product link as input and outputs a complete set of assets adapted to TEMU platform requirements, including titles, attributes, main images, SKU images, detail images, and copywriting. Uses the official pre-built best-effect workflow to maximize AI capabilities, retains and localizes brand marketing assets, and outputs category-specific assets such as size charts for apparel categories. (Asynchronous).
   * 
   * @remarks
   * ## Product Introduction
   * A one-click cross-platform product listing optimization service (best effect edition) for cross-border e-commerce sellers. Takes a 1688 product link as input and outputs a complete set of assets adapted to TEMU platform requirements, including titles, attributes, main images, SKU images, detail images, and copywriting.
   * ## Common scenarios
   * Suitable for scenarios that demand high-quality cross-platform product listing assets and strong conversion performance. Examples include categories with high dependency on marketing assets such as apparel, accessories, beauty, and home goods. Also suitable for brand merchants and high-value products that need to retain marketing images with embedded copywriting. Ideal for top sellers and ERP/SaaS platforms conducting localized operations across multiple languages and markets, as well as scenarios that require category-specific assets (such as size charts and package weight/dimensions) to improve listing quality and conversion rates.
   * ## Features
   * This service uses the official pre-built "Best Effect" product optimization workflow, covering the entire pipeline from asset retrieval, diagnosis, filtering, and optimization to output:
   * 1. Automatically parses 1688 product links to extract all assets including titles, SKUs, main images, detail images, and attributes. Intelligently diagnoses missing assets and optimization opportunities.
   * 2. Uses LLM-based text compliance filtering, SEO keyword optimization, five-point description generation, and multilingual localization rewriting.
   * 3. Invokes multiple image processing capabilities including intelligent recognition, intelligent background removal, intelligent erasure, Image Translation Pro, image expansion, intelligent cropping, and HD upscaling.
   * 4. Outputs category-specific assets, such as size charts and package weight/dimensions for apparel categories.
   * 5. Outputs a standardized product asset package ready for direct listing.
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
   * Provides a one-click cross-platform product listing optimization service (best effect edition) for cross-border e-commerce sellers. Takes a 1688 product link as input and outputs a complete set of assets adapted to TEMU platform requirements, including titles, attributes, main images, SKU images, detail images, and copywriting. Uses the official pre-built best-effect workflow to maximize AI capabilities, retains and localizes brand marketing assets, and outputs category-specific assets such as size charts for apparel categories. (Asynchronous).
   * 
   * @remarks
   * ## Product Introduction
   * A one-click cross-platform product listing optimization service (best effect edition) for cross-border e-commerce sellers. Takes a 1688 product link as input and outputs a complete set of assets adapted to TEMU platform requirements, including titles, attributes, main images, SKU images, detail images, and copywriting.
   * ## Common scenarios
   * Suitable for scenarios that demand high-quality cross-platform product listing assets and strong conversion performance. Examples include categories with high dependency on marketing assets such as apparel, accessories, beauty, and home goods. Also suitable for brand merchants and high-value products that need to retain marketing images with embedded copywriting. Ideal for top sellers and ERP/SaaS platforms conducting localized operations across multiple languages and markets, as well as scenarios that require category-specific assets (such as size charts and package weight/dimensions) to improve listing quality and conversion rates.
   * ## Features
   * This service uses the official pre-built "Best Effect" product optimization workflow, covering the entire pipeline from asset retrieval, diagnosis, filtering, and optimization to output:
   * 1. Automatically parses 1688 product links to extract all assets including titles, SKUs, main images, detail images, and attributes. Intelligently diagnoses missing assets and optimization opportunities.
   * 2. Uses LLM-based text compliance filtering, SEO keyword optimization, five-point description generation, and multilingual localization rewriting.
   * 3. Invokes multiple image processing capabilities including intelligent recognition, intelligent background removal, intelligent erasure, Image Translation Pro, image expansion, intelligent cropping, and HD upscaling.
   * 4. Outputs category-specific assets, such as size charts and package weight/dimensions for apparel categories.
   * 5. Outputs a standardized product asset package ready for direct listing.
   * 
   * @param request - AssetOptimizeProRequest
   * @returns AssetOptimizeProResponse
   */
  async assetOptimizePro(request: $_model.AssetOptimizeProRequest): Promise<$_model.AssetOptimizeProResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assetOptimizeProWithOptions(request, runtime);
  }

  /**
   * Provides a cross-platform product category and attribute intelligent filling service based on multimodal large models. Takes product information from a source platform, automatically matches the category on the target listing platform, and intelligently fills in all required attribute fields under that category, offering a one-stop solution for category selection and attribute filling during product listing. (Synchronous).
   * 
   * @remarks
   * # Scenarios
   * Cross-platform product listing attribute filling: When merchants list products across platforms, different platforms such as the source platform and the TEMU platform require different attribute fields for different categories, with complex hierarchical associations (such as material → wood type → density). Manual filling is time-consuming and error-prone. This service automatically understands product information and intelligently fills in attributes. It is applicable to scenarios such as automated bulk listing for top sellers, ERP/SaaS platform integration, and quick product listing for SMB merchants.
   * # Features
   * Users input the product title, source category, product details, SKU, product attributes, and product images (up to 10). The system uses multimodal AI to understand product semantics and visual features, and completes two core tasks: ① Matches the precise category path for the product on the TEMU platform. ② Automatically fills in the required attributes under that category (such as material, battery properties, size, and connectivity), and returns the confidence score and reasoning for each attribute. The API uses synchronous mode and returns results immediately upon invocation.
   * # Comparison
   * The following example shows the attributes of a USB fan:
   * | **1688 Attribute** | **1688 Attribute Value** | **TEMU Attribute** | **TEMU Attribute Value** | **Existing in 1688** |
   * | --- | --- | --- | --- | --- |
   * | 品牌 | 其他 | 供电方式 | USB充电（内置电池） | No |
   * | 续航时长 | 3-6h(含) | 可充电电池 | 锂系电池 | No |
   * | 附加功能 | 数显 | 电池容量（mAh） | 4000 | Yes |
   * | 内置蓄电池容量 | 2000mAh-4000mAh（含） | 风扇功能 | 高速特征 | No |
   * | 货号 | X699 | 控制方式 | 按键 | Yes |
   * | 主要下游平台 | ebay,亚马逊,wish,速卖通,独立站,LAZADA,其他 | 完成类型 | 涂漆 | Yes |
   * | 有可授权的自有品牌 | 否 | 推荐使用 | 冷却 | No |
   * | 尺寸 | 65\\*60\\*171 | 电风扇设计 | 可穿戴风扇 | No |
   * | 适用送礼场合 | 个人礼品 | 包含的组件 | 无 | No |
   * | 外壳工艺 | 喷涂（UV漆，橡胶漆，金属漆，钢琴烤漆，珠光粉） | 材料 | 塑料 | No |
   * | 包装体积 | 65\\*60\\*171 | 特殊功能 | 便携式 | No |
   * | 外观尺寸 | 51\\*36\\*34 | 室内外使用 | 室内室外均可 | No |
   * | 风速档位 | 3档 | 品牌名 | 无 | No |
   * | 操作方式 | 普通按钮 |  |  |  |
   * | 扇叶材质 | ABS |  |  |  |
   * | 电源方式 | USB |  |  |  |
   * | 是否内置电池 | 内置电池 |  |  |  |
   * | 是否专利货源 | 否 |  |  |  |
   * | 颜色 | X699风扇-黄色,X699风扇-浅紫色,X699风扇-天蓝色,X699风扇-橙色,X699风扇-浅绿色,普通小风扇 |  |  |  |
   * | 主要销售地区 | 日韩,非洲,韩国,日本,欧洲,南美,东南亚,北美,东北亚,中东,拉丁美洲,欧美,其他 |  |  |  |
   * | 是否跨境出口专供货源 | 是 |  |  |  |
   * | 风格 | 清新 |  |  |  |
   * | 电机类型 | 无刷电机 |  |  |  |
   * | 噪音 | 36dB(A)-45dB(A)(含) |  |  |  |
   * | 产品净重 | 125g |  |  |  |
   * | 扇叶数量 | 6片及以上 |  |  |  |
   * | 风扇分类 | 手持风扇 |  |  |  |.
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
   * Provides a cross-platform product category and attribute intelligent filling service based on multimodal large models. Takes product information from a source platform, automatically matches the category on the target listing platform, and intelligently fills in all required attribute fields under that category, offering a one-stop solution for category selection and attribute filling during product listing. (Synchronous).
   * 
   * @remarks
   * # Scenarios
   * Cross-platform product listing attribute filling: When merchants list products across platforms, different platforms such as the source platform and the TEMU platform require different attribute fields for different categories, with complex hierarchical associations (such as material → wood type → density). Manual filling is time-consuming and error-prone. This service automatically understands product information and intelligently fills in attributes. It is applicable to scenarios such as automated bulk listing for top sellers, ERP/SaaS platform integration, and quick product listing for SMB merchants.
   * # Features
   * Users input the product title, source category, product details, SKU, product attributes, and product images (up to 10). The system uses multimodal AI to understand product semantics and visual features, and completes two core tasks: ① Matches the precise category path for the product on the TEMU platform. ② Automatically fills in the required attributes under that category (such as material, battery properties, size, and connectivity), and returns the confidence score and reasoning for each attribute. The API uses synchronous mode and returns results immediately upon invocation.
   * # Comparison
   * The following example shows the attributes of a USB fan:
   * | **1688 Attribute** | **1688 Attribute Value** | **TEMU Attribute** | **TEMU Attribute Value** | **Existing in 1688** |
   * | --- | --- | --- | --- | --- |
   * | 品牌 | 其他 | 供电方式 | USB充电（内置电池） | No |
   * | 续航时长 | 3-6h(含) | 可充电电池 | 锂系电池 | No |
   * | 附加功能 | 数显 | 电池容量（mAh） | 4000 | Yes |
   * | 内置蓄电池容量 | 2000mAh-4000mAh（含） | 风扇功能 | 高速特征 | No |
   * | 货号 | X699 | 控制方式 | 按键 | Yes |
   * | 主要下游平台 | ebay,亚马逊,wish,速卖通,独立站,LAZADA,其他 | 完成类型 | 涂漆 | Yes |
   * | 有可授权的自有品牌 | 否 | 推荐使用 | 冷却 | No |
   * | 尺寸 | 65\\*60\\*171 | 电风扇设计 | 可穿戴风扇 | No |
   * | 适用送礼场合 | 个人礼品 | 包含的组件 | 无 | No |
   * | 外壳工艺 | 喷涂（UV漆，橡胶漆，金属漆，钢琴烤漆，珠光粉） | 材料 | 塑料 | No |
   * | 包装体积 | 65\\*60\\*171 | 特殊功能 | 便携式 | No |
   * | 外观尺寸 | 51\\*36\\*34 | 室内外使用 | 室内室外均可 | No |
   * | 风速档位 | 3档 | 品牌名 | 无 | No |
   * | 操作方式 | 普通按钮 |  |  |  |
   * | 扇叶材质 | ABS |  |  |  |
   * | 电源方式 | USB |  |  |  |
   * | 是否内置电池 | 内置电池 |  |  |  |
   * | 是否专利货源 | 否 |  |  |  |
   * | 颜色 | X699风扇-黄色,X699风扇-浅紫色,X699风扇-天蓝色,X699风扇-橙色,X699风扇-浅绿色,普通小风扇 |  |  |  |
   * | 主要销售地区 | 日韩,非洲,韩国,日本,欧洲,南美,东南亚,北美,东北亚,中东,拉丁美洲,欧美,其他 |  |  |  |
   * | 是否跨境出口专供货源 | 是 |  |  |  |
   * | 风格 | 清新 |  |  |  |
   * | 电机类型 | 无刷电机 |  |  |  |
   * | 噪音 | 36dB(A)-45dB(A)(含) |  |  |  |
   * | 产品净重 | 125g |  |  |  |
   * | 扇叶数量 | 6片及以上 |  |  |  |
   * | 风扇分类 | 手持风扇 |  |  |  |.
   * 
   * @param request - CategoryAttributeMatchRequest
   * @returns CategoryAttributeMatchResponse
   */
  async categoryAttributeMatch(request: $_model.CategoryAttributeMatchRequest): Promise<$_model.CategoryAttributeMatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.categoryAttributeMatchWithOptions(request, runtime);
  }

  /**
   * Provides a large language model-based cross-platform product category intelligent matching service. Accepts product information from a source platform, automatically matches the best category on the target listing platform, and returns a confidence level score with matching reasons to help sellers quickly select categories for cross-platform product listing. (Synchronous)
   * 
   * @remarks
   * ## Product Introduction
   * Provides a large language model-based cross-platform product category intelligent matching service. Accepts product information from a source platform, automatically matches the best category on the target listing platform, and returns a confidence level score with matching reasons to help sellers quickly select categories for cross-platform product listing. (Synchronous)
   * ## Common scenarios
   * Cross-platform product listing: After sourcing products, sellers need to map them to the correct categories in the target platform\\"s category tree. Manually selecting categories requires familiarity with the target platform\\"s entire category structure, which is time-consuming, labor-intensive, and error-prone. Incorrect category mapping can cause products to be delisted.
   * This service automates category mapping and is suitable for bulk API calls from large sellers\\" proprietary systems, integration into ERP/SaaS platforms for automated listing workflows, and quick single-product listing for SMB sellers.
   * The current version supports only TEMU as the target listing platform. Automatic retrieval of product information from source platforms is not yet supported and requires manual parameter input. This capability and support for additional source and target platforms will be added in future releases.
   * ## Functions and features
   * You can input fields such as product title, source category, product description, SKU information, and product attributes. The system uses an AI model to understand product semantics and matches the most appropriate category path from the full TEMU platform category tree. The response includes the complete category path (CategoryPath), category name (CategoryName), confidence score (0–100), and matching reason. The API uses synchronous mode and returns results immediately, making it suitable for embedding in real-time business workflows.
   * ## Demo
   * | **Source platform** | **Image** | **Source platform category** | **Target platform** | **Target platform category** |
   * | --- | --- | --- | --- | --- |
   * | 1688 | ![done-image-245c58c8-a9fc-4e32-b959-8b4bcd52b264.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/jP2lRYjv7234mO8g/img/69a226e8-aff1-4891-bb0a-c47c1ea397ae.png) | USB风扇、迷你风扇 | TEMU | 家电
   * \\>加热、冷却和空气质量电器
   * \\>电风扇
   * \\>USB 风扇 |
   * | 1688 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/jP2lRYjv7234mO8g/img/8a546f7d-826e-43d6-b5f3-12d1edef8897.png) | 手链 | TEMU | 服装、鞋靴和珠宝饰品
   * \\>女士时尚
   * \\>女士饰品
   * \\>女士时尚手链、手镯
   * \\>女士时尚吊饰和吊饰手链
   * \\>女士时尚吊饰手链
   * \\>女士时尚链式吊饰手链 |.
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
   * Provides a large language model-based cross-platform product category intelligent matching service. Accepts product information from a source platform, automatically matches the best category on the target listing platform, and returns a confidence level score with matching reasons to help sellers quickly select categories for cross-platform product listing. (Synchronous)
   * 
   * @remarks
   * ## Product Introduction
   * Provides a large language model-based cross-platform product category intelligent matching service. Accepts product information from a source platform, automatically matches the best category on the target listing platform, and returns a confidence level score with matching reasons to help sellers quickly select categories for cross-platform product listing. (Synchronous)
   * ## Common scenarios
   * Cross-platform product listing: After sourcing products, sellers need to map them to the correct categories in the target platform\\"s category tree. Manually selecting categories requires familiarity with the target platform\\"s entire category structure, which is time-consuming, labor-intensive, and error-prone. Incorrect category mapping can cause products to be delisted.
   * This service automates category mapping and is suitable for bulk API calls from large sellers\\" proprietary systems, integration into ERP/SaaS platforms for automated listing workflows, and quick single-product listing for SMB sellers.
   * The current version supports only TEMU as the target listing platform. Automatic retrieval of product information from source platforms is not yet supported and requires manual parameter input. This capability and support for additional source and target platforms will be added in future releases.
   * ## Functions and features
   * You can input fields such as product title, source category, product description, SKU information, and product attributes. The system uses an AI model to understand product semantics and matches the most appropriate category path from the full TEMU platform category tree. The response includes the complete category path (CategoryPath), category name (CategoryName), confidence score (0–100), and matching reason. The API uses synchronous mode and returns results immediately, making it suitable for embedding in real-time business workflows.
   * ## Demo
   * | **Source platform** | **Image** | **Source platform category** | **Target platform** | **Target platform category** |
   * | --- | --- | --- | --- | --- |
   * | 1688 | ![done-image-245c58c8-a9fc-4e32-b959-8b4bcd52b264.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/jP2lRYjv7234mO8g/img/69a226e8-aff1-4891-bb0a-c47c1ea397ae.png) | USB风扇、迷你风扇 | TEMU | 家电
   * \\>加热、冷却和空气质量电器
   * \\>电风扇
   * \\>USB 风扇 |
   * | 1688 | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/jP2lRYjv7234mO8g/img/8a546f7d-826e-43d6-b5f3-12d1edef8897.png) | 手链 | TEMU | 服装、鞋靴和珠宝饰品
   * \\>女士时尚
   * \\>女士饰品
   * \\>女士时尚手链、手镯
   * \\>女士时尚吊饰和吊饰手链
   * \\>女士时尚吊饰手链
   * \\>女士时尚链式吊饰手链 |.
   * 
   * @param request - CategoryMatchRequest
   * @returns CategoryMatchResponse
   */
  async categoryMatch(request: $_model.CategoryMatchRequest): Promise<$_model.CategoryMatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.categoryMatchWithOptions(request, runtime);
  }

  /**
   * 地堆面积推理
   * 
   * @remarks
   * ## 请求说明
   * **请确保在使用该接口前，已充分了解地堆面积推理产品的收费方式和[价格](https://www.aliyun.com/price/product#/ecs/detail)。**
   * - 本接口用于通过提供的地堆整体图、SKU知识库以及商品在图片中的位置信息来推断地堆的实际尺寸（两条边的长度）及其占地面积。
   * - 确保提供的`RagId`对应的知识库属于调用者且状态为可用(`AVAILABLE`)。
   * - `Products`数组中至少包含一个商品项，并且每个商品项下的`Boxes`也至少需要定义一个边界框。
   * - 所有坐标值均采用0到1000之间的归一化坐标系表示，请确保输入时满足`Left < Right`与`Top < Bottom`的关系。
   * - 调用此API时请设置合理的超时时间（建议不超过300秒），以避免因网络延迟或处理复杂度高导致的操作失败。
   * - 对于正式环境下的调用，请使用POP Action方式接入；内部REST地址主要用于开发测试阶段的联调工作。
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
   * 地堆面积推理
   * 
   * @remarks
   * ## 请求说明
   * **请确保在使用该接口前，已充分了解地堆面积推理产品的收费方式和[价格](https://www.aliyun.com/price/product#/ecs/detail)。**
   * - 本接口用于通过提供的地堆整体图、SKU知识库以及商品在图片中的位置信息来推断地堆的实际尺寸（两条边的长度）及其占地面积。
   * - 确保提供的`RagId`对应的知识库属于调用者且状态为可用(`AVAILABLE`)。
   * - `Products`数组中至少包含一个商品项，并且每个商品项下的`Boxes`也至少需要定义一个边界框。
   * - 所有坐标值均采用0到1000之间的归一化坐标系表示，请确保输入时满足`Left < Right`与`Top < Bottom`的关系。
   * - 调用此API时请设置合理的超时时间（建议不超过300秒），以避免因网络延迟或处理复杂度高导致的操作失败。
   * - 对于正式环境下的调用，请使用POP Action方式接入；内部REST地址主要用于开发测试阶段的联调工作。
   * 
   * @param request - DiduiAreaDeductionRequest
   * @returns DiduiAreaDeductionResponse
   */
  async diduiAreaDeduction(request: $_model.DiduiAreaDeductionRequest): Promise<$_model.DiduiAreaDeductionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.diduiAreaDeductionWithOptions(request, runtime);
  }

  /**
   * Translates documents between more than 100 language pairs (including bridged pairs), supporting multi-scenario, multi-page, and highly complex document translation. Scanned documents are not currently supported. Excels in the following areas: - Content accuracy: translation accuracy, parameter and unit accuracy - Structural integrity: overall layout continuity, page margin and layout preservation.
   * 
   * @remarks
   * ## Product Introduction
   * Designed specifically for document translation, this service supports translation between more than 100 language pairs (including bridged pairs), supporting multi-scenario, multi-page, and highly complex document translation. Scanned documents are not currently supported.
   * Excels in the following areas:
   * - Content accuracy: translation accuracy, parameter and unit accuracy
   * - Structural integrity: overall layout continuity, page margin and layout preservation
   * ## Common scenarios
   * Cross-border e-commerce product manuals, contracts, agreements, business proposals, qualification documents, textbooks and courseware, and other scenarios.
   * ## Features
   * - Supports PDF and Word formats. Supports source documents containing multiple languages. For a detailed language list, see section 4.5.
   * - Supports translation of text within images in documents, as well as other complex translation scenarios such as charts and special symbols.
   * - Supports high-fidelity layout preservation after translation.
   * - A single PDF supports up to 100 pages, and a single Word document supports up to 100 pages.
   * - Supports custom translation results, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and skip translation (ABC-empty value). Commonly used for brand name protection scenarios. Simply pass the corresponding intervention glossary ID when calling the API to meet your translation needs across different scenarios. You can upload up to 100,000 intervention terms. Contact the platform if you need more.
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
   * Translates documents between more than 100 language pairs (including bridged pairs), supporting multi-scenario, multi-page, and highly complex document translation. Scanned documents are not currently supported. Excels in the following areas: - Content accuracy: translation accuracy, parameter and unit accuracy - Structural integrity: overall layout continuity, page margin and layout preservation.
   * 
   * @remarks
   * ## Product Introduction
   * Designed specifically for document translation, this service supports translation between more than 100 language pairs (including bridged pairs), supporting multi-scenario, multi-page, and highly complex document translation. Scanned documents are not currently supported.
   * Excels in the following areas:
   * - Content accuracy: translation accuracy, parameter and unit accuracy
   * - Structural integrity: overall layout continuity, page margin and layout preservation
   * ## Common scenarios
   * Cross-border e-commerce product manuals, contracts, agreements, business proposals, qualification documents, textbooks and courseware, and other scenarios.
   * ## Features
   * - Supports PDF and Word formats. Supports source documents containing multiple languages. For a detailed language list, see section 4.5.
   * - Supports translation of text within images in documents, as well as other complex translation scenarios such as charts and special symbols.
   * - Supports high-fidelity layout preservation after translation.
   * - A single PDF supports up to 100 pages, and a single Word document supports up to 100 pages.
   * - Supports custom translation results, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and skip translation (ABC-empty value). Commonly used for brand name protection scenarios. Simply pass the corresponding intervention glossary ID when calling the API to meet your translation needs across different scenarios. You can upload up to 100,000 intervention terms. Contact the platform if you need more.
   * 
   * @param request - DocumentTranslateRequest
   * @returns DocumentTranslateResponse
   */
  async documentTranslate(request: $_model.DocumentTranslateRequest): Promise<$_model.DocumentTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.documentTranslateWithOptions(request, runtime);
  }

  /**
   * Intelligently crop images to specified dimensions, automatically identify the main subject area of the image, and precisely crop to various sizes to meet design requirements for different scenarios. (Synchronous)
   * 
   * @remarks
   * ## Product Overview
   * The image cropping product can resize input images to specified dimensions. It supports automatic identification of the main subject area in images and precisely crops to various sizes to meet design requirements for different scenarios. (Synchronous)
   * ## Use Cases
   * - **Multi-platform Content Distribution**: Automatically generate content in multiple sizes to meet the different image size requirements of various platforms and scenarios.
   *     
   * -   **Content Placement**: Automatically adjust sizes for different ad slots on different platforms, highlighting the main content, reducing blank space, and showcasing product features.
   *     
   * ## Feature Description
   * *   Automatically identify the main subject area of an image and crop precisely.
   *     
   * *   Support custom crop size output to adapt to different platforms and devices.
   *     
   * ## Effect Comparison
   * | **Original Image** | **Cropped to 1000\\*1000** | **Cropped to 3000\\*2000** |
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
   * Intelligently crop images to specified dimensions, automatically identify the main subject area of the image, and precisely crop to various sizes to meet design requirements for different scenarios. (Synchronous)
   * 
   * @remarks
   * ## Product Overview
   * The image cropping product can resize input images to specified dimensions. It supports automatic identification of the main subject area in images and precisely crops to various sizes to meet design requirements for different scenarios. (Synchronous)
   * ## Use Cases
   * - **Multi-platform Content Distribution**: Automatically generate content in multiple sizes to meet the different image size requirements of various platforms and scenarios.
   *     
   * -   **Content Placement**: Automatically adjust sizes for different ad slots on different platforms, highlighting the main content, reducing blank space, and showcasing product features.
   *     
   * ## Feature Description
   * *   Automatically identify the main subject area of an image and crop precisely.
   *     
   * *   Support custom crop size output to adapt to different platforms and devices.
   *     
   * ## Effect Comparison
   * | **Original Image** | **Cropped to 1000\\*1000** | **Cropped to 3000\\*2000** |
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
   * Automatically identifies salient subjects in images, separates subjects from backgrounds, and returns subject images with backgrounds removed. This product also provides multiple background options and custom size selections to optimize product display. (Synchronous)
   * 
   * @remarks
   * ## Product Introduction
   * The intelligent image matting product automatically identifies salient subjects in images, separates subjects from backgrounds, and returns subject images with backgrounds removed. This product also provides multiple background options and custom size selections to optimize product display. (Synchronous)
   * ## Scenarios
   * *   **Secondary editing of materials**: After separating the image subject from the background, you can further edit the image.
   *     
   * *   **Improved material processing efficiency**: Quickly extract subjects from various material images for easy background replacement, improving the production efficiency of advertising visuals and marketing posters.
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
   * Automatically identifies salient subjects in images, separates subjects from backgrounds, and returns subject images with backgrounds removed. This product also provides multiple background options and custom size selections to optimize product display. (Synchronous)
   * 
   * @remarks
   * ## Product Introduction
   * The intelligent image matting product automatically identifies salient subjects in images, separates subjects from backgrounds, and returns subject images with backgrounds removed. This product also provides multiple background options and custom size selections to optimize product display. (Synchronous)
   * ## Scenarios
   * *   **Secondary editing of materials**: After separating the image subject from the background, you can further edit the image.
   *     
   * *   **Improved material processing efficiency**: Quickly extract subjects from various material images for easy background replacement, improving the production efficiency of advertising visuals and marketing posters.
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
   * Intelligent element recognition.
   * 
   * @remarks
   * ## Product Introduction
   * The Intelligent Element Recognition API is designed specifically for identifying specific elements in e-commerce images. It analyzes image details in depth, helping you quickly identify elements such as text, logos, watermarks, and text-containing color blocks in both the subject and background of images. This greatly improves the efficiency and accuracy of image screening. (Synchronous).
   * ## Scenarios
   * **1. Intelligent image screening and optimization:**
   * Merchants and platforms can use the Intelligent Element Recognition API for image screening to automatically identify images that contain specific elements such as watermarks and logos. After screening, you can call the Intelligent Removal API to optimize these images, improve image quality, and shorten the product release cycle.
   * **2. Automated image processing and efficiency improvement:**
   * With the Intelligent Element Recognition API, merchants and platforms can automate the image processing workflow by automatically identifying and marking image elements that require optimization. This process reduces manual intervention and improves image processing efficiency.
   * ## Features
   * **1. Definitions of image subject, image background, text, logo, watermark, and text-containing color block: For details, refer to the related examples in the removal documentation (reserved text link)**
   * *   Image subject: The core product area in the image
   *     
   * *   Image background: The remaining part of the image other than the product subject
   *     
   * *   Text: Horizontal, vertical, or diagonal English or Chinese text
   *     
   * *   Logo: An emblem or trademark
   *     
   * *   Watermark: Monochrome transparent text, emblems, images, URLs, or store names
   *     
   * *   Text-containing color block: A color block outside the subject that contains text
   *     
   * **2. The main features of the Intelligent Element Recognition API include:**
   * *   Element recognition: Identifies whether elements such as text, logos, watermarks, and text-containing color blocks exist in the image subject and background.
   *     
   * *   Workflow coordination: Works in conjunction with the Intelligent Removal API. First, the Intelligent Element Recognition API identifies elements that need to be removed, and then the Intelligent Removal API effectively removes them, ensuring accuracy and efficiency in image processing.
   * ## Technical advantages
   * *   Synchronous batch processing: As a synchronous API, the Intelligent Element Recognition API can process large volumes of images while maintaining fast response times, adapting to business needs of different scales.
   *     
   * *   Flexibility: You can select the element types to recognize based on your needs, including elements in both the subject and non-subject areas such as watermarks, logos, and text, to meet personalized recognition requirements.
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
   * *   Text-containing color block: true |.
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
   * The Intelligent Element Recognition API is designed specifically for identifying specific elements in e-commerce images. It analyzes image details in depth, helping you quickly identify elements such as text, logos, watermarks, and text-containing color blocks in both the subject and background of images. This greatly improves the efficiency and accuracy of image screening. (Synchronous).
   * ## Scenarios
   * **1. Intelligent image screening and optimization:**
   * Merchants and platforms can use the Intelligent Element Recognition API for image screening to automatically identify images that contain specific elements such as watermarks and logos. After screening, you can call the Intelligent Removal API to optimize these images, improve image quality, and shorten the product release cycle.
   * **2. Automated image processing and efficiency improvement:**
   * With the Intelligent Element Recognition API, merchants and platforms can automate the image processing workflow by automatically identifying and marking image elements that require optimization. This process reduces manual intervention and improves image processing efficiency.
   * ## Features
   * **1. Definitions of image subject, image background, text, logo, watermark, and text-containing color block: For details, refer to the related examples in the removal documentation (reserved text link)**
   * *   Image subject: The core product area in the image
   *     
   * *   Image background: The remaining part of the image other than the product subject
   *     
   * *   Text: Horizontal, vertical, or diagonal English or Chinese text
   *     
   * *   Logo: An emblem or trademark
   *     
   * *   Watermark: Monochrome transparent text, emblems, images, URLs, or store names
   *     
   * *   Text-containing color block: A color block outside the subject that contains text
   *     
   * **2. The main features of the Intelligent Element Recognition API include:**
   * *   Element recognition: Identifies whether elements such as text, logos, watermarks, and text-containing color blocks exist in the image subject and background.
   *     
   * *   Workflow coordination: Works in conjunction with the Intelligent Removal API. First, the Intelligent Element Recognition API identifies elements that need to be removed, and then the Intelligent Removal API effectively removes them, ensuring accuracy and efficiency in image processing.
   * ## Technical advantages
   * *   Synchronous batch processing: As a synchronous API, the Intelligent Element Recognition API can process large volumes of images while maintaining fast response times, adapting to business needs of different scales.
   *     
   * *   Flexibility: You can select the element types to recognize based on your needs, including elements in both the subject and non-subject areas such as watermarks, logos, and text, to meet personalized recognition requirements.
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
   * *   Text-containing color block: true |.
   * 
   * @param request - ImageRecognitionRequest
   * @returns ImageRecognitionResponse
   */
  async imageRecognition(request: $_model.ImageRecognitionRequest): Promise<$_model.ImageRecognitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageRecognitionWithOptions(request, runtime);
  }

  /**
   * Intelligently identifies and removes text, specific names, transparent text blocks, and watermarks from e-commerce images, supports specifying objects to remove as needed, enables efficient and precise batch processing of images, and simplifies image editing workflows (synchronous/asynchronous).
   * 
   * @remarks
   * ## Product introduction
   * The intelligent image removal product is designed specifically for e-commerce images. It automatically identifies and removes text, specific names, transparent text blocks, and watermarks from e-commerce images. You can specify objects to remove as needed, enabling efficient and precise batch processing of images and simplifying image editing workflows. (Synchronous/Asynchronous)
   * ## Common scenarios
   * *   **Efficient e-commerce image processing:**
   *     
   * Remove irrelevant visual elements to provide clearer, more focused product displays and enhance the shopping experience.
   * *   **Multi-platform product information synchronization:**
   *     
   * When merchants list products across different e-commerce platforms, they can quickly remove specific text and watermarks to comply with image specifications of different platforms.
   * ## Features
   * 1.  First, clarify the definitions of image subject and image background. When specifying objects to remove, you can choose whether the removal scope is the image subject or the image background area. Both API and editor access methods are supported to meet different types of requirements.
   *     
   *     1.  Image subject: the core product area in the image.
   *         
   *     2.  Image background: the remaining part of the image other than the product subject.
   *         
   * 2.  Second, the following four types of objects can be removed: text, specific names, transparent text blocks, and watermarks. Refer to the following examples to clarify your requirements and perform targeted operations:
   * ## Effect comparison
   * | **Original image** | **Image after removal** |
   * | --- | --- |
   * | ![Main image 1 - Leopard print large capacity millennium crossbody canvas bag.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/AJdl65AyryVZyOke/img/4bd2c812-ed3c-45da-8a86-ebd29102f4b1.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/eff0eb1b-36df-431d-a010-3bb3b7348ff9.png) |
   * | ![Main image 1 - Short round-tip French false nails with handle.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/c44ac17b-3fa4-4a6f-b411-90f1062b183b.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/af779684-4aa5-49b0-8668-34ab8bd4bcc1.png) |
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
   * Intelligently identifies and removes text, specific names, transparent text blocks, and watermarks from e-commerce images, supports specifying objects to remove as needed, enables efficient and precise batch processing of images, and simplifies image editing workflows (synchronous/asynchronous).
   * 
   * @remarks
   * ## Product introduction
   * The intelligent image removal product is designed specifically for e-commerce images. It automatically identifies and removes text, specific names, transparent text blocks, and watermarks from e-commerce images. You can specify objects to remove as needed, enabling efficient and precise batch processing of images and simplifying image editing workflows. (Synchronous/Asynchronous)
   * ## Common scenarios
   * *   **Efficient e-commerce image processing:**
   *     
   * Remove irrelevant visual elements to provide clearer, more focused product displays and enhance the shopping experience.
   * *   **Multi-platform product information synchronization:**
   *     
   * When merchants list products across different e-commerce platforms, they can quickly remove specific text and watermarks to comply with image specifications of different platforms.
   * ## Features
   * 1.  First, clarify the definitions of image subject and image background. When specifying objects to remove, you can choose whether the removal scope is the image subject or the image background area. Both API and editor access methods are supported to meet different types of requirements.
   *     
   *     1.  Image subject: the core product area in the image.
   *         
   *     2.  Image background: the remaining part of the image other than the product subject.
   *         
   * 2.  Second, the following four types of objects can be removed: text, specific names, transparent text blocks, and watermarks. Refer to the following examples to clarify your requirements and perform targeted operations:
   * ## Effect comparison
   * | **Original image** | **Image after removal** |
   * | --- | --- |
   * | ![Main image 1 - Leopard print large capacity millennium crossbody canvas bag.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/AJdl65AyryVZyOke/img/4bd2c812-ed3c-45da-8a86-ebd29102f4b1.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/eff0eb1b-36df-431d-a010-3bb3b7348ff9.png) |
   * | ![Main image 1 - Short round-tip French false nails with handle.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/c44ac17b-3fa4-4a6f-b411-90f1062b183b.jpeg) | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/5VLqXLbGJZd3VqX1/img/af779684-4aa5-49b0-8668-34ab8bd4bcc1.png) |
   * 
   * @param request - ImageRemovalProRequest
   * @returns ImageRemovalProResponse
   */
  async imageRemovalPro(request: $_model.ImageRemovalProRequest): Promise<$_model.ImageRemovalProResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageRemovalProWithOptions(request, runtime);
  }

  /**
   * Intelligently erases unwanted elements from e-commerce images, automatically identifying and removing text, specific names, transparent text blocks, and image blemishes, with support for specifying objects to erase as needed for efficient and precise batch processing that simplifies image editing workflows. (Synchronous)
   * 
   * @remarks
   * ## Product Introduction
   * The intelligent image erasure product is designed specifically for e-commerce images. It automatically identifies and removes text, specific names, transparent text blocks, and image blemishes from e-commerce images. You can specify objects to erase as needed, enabling efficient and precise batch processing that simplifies image editing workflows. (Synchronous)
   * ## Scenarios
   * *   **Efficient e-commerce image processing:**
   *     
   * Removes irrelevant visual elements to provide clearer, more focused product displays that enhance the shopping experience.
   * *   **Multi-platform product information synchronization:**
   *     
   * When merchants list products across different e-commerce platforms, they can quickly erase specific text and image blemishes to comply with different platform image requirements.
   * *   **Marketing material preparation:**
   *     
   * Merchants can easily remove existing promotional information and quickly update images with the latest campaign details.
   * > Note: Merchants or platforms can batch-remove impurities from images to optimize image quality. Use this API in combination with the "Intelligent Recognition API" (coming soon). First, filter out images containing text, specific names, transparent text blocks, and image blemishes, then use the "Intelligent Erasure API" for batch removal. The Intelligent Recognition API focuses on "recognition," while the Intelligent Erasure API focuses on "erasure." By calling them sequentially, you can maximize erasure effectiveness and reduce false removals and false identifications.
   * ## Features
   * 1.  First, understand the definitions of image subject and image background. When specifying erasure objects, you can choose whether the erasure scope covers the image subject or the image background area. Both API and editor access methods are supported to meet different requirements.
   *     
   *     1.  Image subject: The core product area in the image.
   *         
   *     2.  Image background: The remaining portion of the image outside the product subject.
   *         
   * 2.  The following four types of objects can be erased: text, specific names, transparent text blocks, and image blemishes. Refer to the following examples to clarify your requirements and perform targeted operations:
   * ## Effect comparison
   * | **Erasable objects in images** | **Original image** | **Image after erasure** |
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
   * Intelligently erases unwanted elements from e-commerce images, automatically identifying and removing text, specific names, transparent text blocks, and image blemishes, with support for specifying objects to erase as needed for efficient and precise batch processing that simplifies image editing workflows. (Synchronous)
   * 
   * @remarks
   * ## Product Introduction
   * The intelligent image erasure product is designed specifically for e-commerce images. It automatically identifies and removes text, specific names, transparent text blocks, and image blemishes from e-commerce images. You can specify objects to erase as needed, enabling efficient and precise batch processing that simplifies image editing workflows. (Synchronous)
   * ## Scenarios
   * *   **Efficient e-commerce image processing:**
   *     
   * Removes irrelevant visual elements to provide clearer, more focused product displays that enhance the shopping experience.
   * *   **Multi-platform product information synchronization:**
   *     
   * When merchants list products across different e-commerce platforms, they can quickly erase specific text and image blemishes to comply with different platform image requirements.
   * *   **Marketing material preparation:**
   *     
   * Merchants can easily remove existing promotional information and quickly update images with the latest campaign details.
   * > Note: Merchants or platforms can batch-remove impurities from images to optimize image quality. Use this API in combination with the "Intelligent Recognition API" (coming soon). First, filter out images containing text, specific names, transparent text blocks, and image blemishes, then use the "Intelligent Erasure API" for batch removal. The Intelligent Recognition API focuses on "recognition," while the Intelligent Erasure API focuses on "erasure." By calling them sequentially, you can maximize erasure effectiveness and reduce false removals and false identifications.
   * ## Features
   * 1.  First, understand the definitions of image subject and image background. When specifying erasure objects, you can choose whether the erasure scope covers the image subject or the image background area. Both API and editor access methods are supported to meet different requirements.
   *     
   *     1.  Image subject: The core product area in the image.
   *         
   *     2.  Image background: The remaining portion of the image outside the product subject.
   *         
   * 2.  The following four types of objects can be erased: text, specific names, transparent text blocks, and image blemishes. Refer to the following examples to clarify your requirements and perform targeted operations:
   * ## Effect comparison
   * | **Erasable objects in images** | **Original image** | **Image after erasure** |
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
   * 
   * @param request - ImageRemoveRequest
   * @returns ImageRemoveResponse
   */
  async imageRemove(request: $_model.ImageRemoveRequest): Promise<$_model.ImageRemoveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageRemoveWithOptions(request, runtime);
  }

  /**
   * Image Translation Plus is designed specifically for e-commerce images. It uses a Mixture of Experts (MOE) architecture and delivers superior translation accuracy for multiple minority languages compared to the Lite and Pro editions. Use it for the following 8 language pairs, with more to be supported in the future.
   * 
   * @remarks
   * ## Product Introduction
   * Image Translation Plus is designed specifically for e-commerce images. It uses a Mixture of Experts (MOE) architecture and delivers superior translation accuracy for multiple minority languages compared to the Lite and Pro editions. Use it for the following 8 language pairs, with more to be supported in the future.
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
   * *   **Translation intervention**: Allows you to customize translation results, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and no translation (ABC-empty value). This is commonly used for brand name protection scenarios. Simply pass the corresponding intervention glossary ID when calling the API to meet your translation needs in different scenarios. You can upload up to 100,000 intervention terms. Contact the platform if you need more.
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
   * Image Translation Plus is designed specifically for e-commerce images. It uses a Mixture of Experts (MOE) architecture and delivers superior translation accuracy for multiple minority languages compared to the Lite and Pro editions. Use it for the following 8 language pairs, with more to be supported in the future.
   * 
   * @remarks
   * ## Product Introduction
   * Image Translation Plus is designed specifically for e-commerce images. It uses a Mixture of Experts (MOE) architecture and delivers superior translation accuracy for multiple minority languages compared to the Lite and Pro editions. Use it for the following 8 language pairs, with more to be supported in the future.
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
   * *   **Translation intervention**: Allows you to customize translation results, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and no translation (ABC-empty value). This is commonly used for brand name protection scenarios. Simply pass the corresponding intervention glossary ID when calling the API to meet your translation needs in different scenarios. You can upload up to 100,000 intervention terms. Contact the platform if you need more.
   * 
   * @param request - ImageTranslationPlusRequest
   * @returns ImageTranslationPlusResponse
   */
  async imageTranslationPlus(request: $_model.ImageTranslationPlusRequest): Promise<$_model.ImageTranslationPlusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageTranslationPlusWithOptions(request, runtime);
  }

  /**
   * Translates text in e-commerce images using the Pro edition, which integrates multimodal foundation model technology for more accurate image understanding and significantly improved translation quality.
   * 
   * @remarks
   * ## Product Introduction.
   * ## Scenarios.
   * ## Features.
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
   * Translates text in e-commerce images using the Pro edition, which integrates multimodal foundation model technology for more accurate image understanding and significantly improved translation quality.
   * 
   * @remarks
   * ## Product Introduction.
   * ## Scenarios.
   * ## Features.
   * 
   * @param request - ImageTranslationProRequest
   * @returns ImageTranslationProResponse
   */
  async imageTranslationPro(request: $_model.ImageTranslationProRequest): Promise<$_model.ImageTranslationProResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageTranslationProWithOptions(request, runtime);
  }

  /**
   * Translates text in images with support for over 100 language pairs (including bridging). This product is designed specifically for e-commerce images, accurately handling complex text layouts within images and ensuring that translated content matches the image context. It helps e-commerce platforms and developers easily achieve multilingual conversion and presentation of image content. The product also returns layer information such as text position, font, and color within images, facilitating integration with image editors for secondary editing of translation results.
   * 
   * @remarks
   * # 1. Product Introduction.
   * # 2. Common scenarios.
   * # 3. Features.
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
   * Translates text in images with support for over 100 language pairs (including bridging). This product is designed specifically for e-commerce images, accurately handling complex text layouts within images and ensuring that translated content matches the image context. It helps e-commerce platforms and developers easily achieve multilingual conversion and presentation of image content. The product also returns layer information such as text position, font, and color within images, facilitating integration with image editors for secondary editing of translation results.
   * 
   * @remarks
   * # 1. Product Introduction.
   * # 2. Common scenarios.
   * # 3. Features.
   * 
   * @param request - ImageTranslationStandardRequest
   * @returns ImageTranslationStandardResponse
   */
  async imageTranslationStandard(request: $_model.ImageTranslationStandardRequest): Promise<$_model.ImageTranslationStandardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageTranslationStandardWithOptions(request, runtime);
  }

  /**
   * Supports automatic language detection for 24 languages. Applicable to short text such as search queries, titles, and conversations.
   * 
   * @remarks
   * ## Product Introduction
   * Supports automatic language detection for 24 languages. Applicable to short text such as search queries, titles, and conversations.
   * 
   * @param request - LanguageDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LanguageDetectResponse
   */
  async languageDetectWithOptions(request: $_model.LanguageDetectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LanguageDetectResponse> {
    request.validate();
    let query = { };
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
   * Supports automatic language detection for 24 languages. Applicable to short text such as search queries, titles, and conversations.
   * 
   * @remarks
   * ## Product Introduction
   * Supports automatic language detection for 24 languages. Applicable to short text such as search queries, titles, and conversations.
   * 
   * @param request - LanguageDetectRequest
   * @returns LanguageDetectResponse
   */
  async languageDetect(request: $_model.LanguageDetectRequest): Promise<$_model.LanguageDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.languageDetectWithOptions(request, runtime);
  }

  /**
   * Material display detection is an intelligent compliance detection capability for in-store marketing materials built on multimodal large language models (MLLMs). It is designed for marketing material inspection scenarios in offline retail and channel stores. For standard materials such as function card stands, posters, and door-shaped display stands, as well as long-tail materials such as light box fabrics, KT boards, floor stickers, and light boxes captured in store photos, the service performs natural-language-level compliance checks based on inspection rules and outputs structured conclusions and Chinese evidence descriptions that can be directly integrated with business systems. This is a **synchronous** call that returns results in a single request.
   * 
   * @remarks
   * ## **Common scenarios**
   * -   **In-store marketing material compliance inspection**: Automatically determines whether a store has placed or posted specified marketing materials (function card stands, posters, door-shaped display stands, etc.) according to the standard display guidelines issued by headquarters. Identifies typical issues such as "not placed," "placement fault," or "content mismatch."
   *     
   * -   **New product or campaign material deployment verification**: During new product launches or sales promotions, automatically verifies in batch whether campaign materials in store photos have been listed as required for publishing, overriding manual spot checks.
   *     
   * -   **Adaptive dual-image comparison and single-image detection**: A single API supports both "reference image + target image" dual-image comparison (Mode A) and "target image only" single-image detection (Mode B). The mode uses automatic switchover based on whether `ImageRefer` is provided. The caller does not need to differentiate between invocation methods.
   * ## **Features**
   * -   **Multi-mode intelligent routing**: The service has built-in material type parsing capabilities. It automatically identifies the target material type from the `Rules` natural language text and routes the request to the corresponding detection pipeline. The caller only needs to provide image URLs and rule text. Four detection routing pipelines are currently supported: "function card stand," "poster," "door-shaped display stand," and "other materials." More detection pipelines for specific marketing material types will be added over time.
   *     
   * -   **MLLM semantic-level understanding + structured rule coordination**: A multimodal large language model performs semantic-level understanding tasks such as material recognition, content comparison, and text OCR. Combined with rule cleaning and a structuring model, natural language rules are broken down into individually evaluable steps (S1, S2, ...), ensuring both accuracy and rule flexibility with full traceability.
   *     
   * -   **Structured inspection conclusion output**: The output follows a unified structure of `Result.OverallResult` + `Result.Steps[]` + `Result.Evidence`. The overall conclusion is derived by logically ANDing all step results. Each step is independently visible, making it easy to drive downstream business systems and support case-level manual review traceability.
   *     
   * -   **Supported input formats**: Currently supports publicly accessible image URLs. Both single-image (Mode B) and dual-image (Mode A) call modes are supported, with an identical output structure.
   * ## **How to invoke**
   * -   **Synchronous call**: Returns detection results in a single request without polling. The response uses a unified envelope of `Code` / `Message` / `RequestId` / `Success` / `Data`.
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
   * Material display detection is an intelligent compliance detection capability for in-store marketing materials built on multimodal large language models (MLLMs). It is designed for marketing material inspection scenarios in offline retail and channel stores. For standard materials such as function card stands, posters, and door-shaped display stands, as well as long-tail materials such as light box fabrics, KT boards, floor stickers, and light boxes captured in store photos, the service performs natural-language-level compliance checks based on inspection rules and outputs structured conclusions and Chinese evidence descriptions that can be directly integrated with business systems. This is a **synchronous** call that returns results in a single request.
   * 
   * @remarks
   * ## **Common scenarios**
   * -   **In-store marketing material compliance inspection**: Automatically determines whether a store has placed or posted specified marketing materials (function card stands, posters, door-shaped display stands, etc.) according to the standard display guidelines issued by headquarters. Identifies typical issues such as "not placed," "placement fault," or "content mismatch."
   *     
   * -   **New product or campaign material deployment verification**: During new product launches or sales promotions, automatically verifies in batch whether campaign materials in store photos have been listed as required for publishing, overriding manual spot checks.
   *     
   * -   **Adaptive dual-image comparison and single-image detection**: A single API supports both "reference image + target image" dual-image comparison (Mode A) and "target image only" single-image detection (Mode B). The mode uses automatic switchover based on whether `ImageRefer` is provided. The caller does not need to differentiate between invocation methods.
   * ## **Features**
   * -   **Multi-mode intelligent routing**: The service has built-in material type parsing capabilities. It automatically identifies the target material type from the `Rules` natural language text and routes the request to the corresponding detection pipeline. The caller only needs to provide image URLs and rule text. Four detection routing pipelines are currently supported: "function card stand," "poster," "door-shaped display stand," and "other materials." More detection pipelines for specific marketing material types will be added over time.
   *     
   * -   **MLLM semantic-level understanding + structured rule coordination**: A multimodal large language model performs semantic-level understanding tasks such as material recognition, content comparison, and text OCR. Combined with rule cleaning and a structuring model, natural language rules are broken down into individually evaluable steps (S1, S2, ...), ensuring both accuracy and rule flexibility with full traceability.
   *     
   * -   **Structured inspection conclusion output**: The output follows a unified structure of `Result.OverallResult` + `Result.Steps[]` + `Result.Evidence`. The overall conclusion is derived by logically ANDing all step results. Each step is independently visible, making it easy to drive downstream business systems and support case-level manual review traceability.
   *     
   * -   **Supported input formats**: Currently supports publicly accessible image URLs. Both single-image (Mode B) and dual-image (Mode A) call modes are supported, with an identical output structure.
   * ## **How to invoke**
   * -   **Synchronous call**: Returns detection results in a single request without polling. The response uses a unified envelope of `Code` / `Message` / `RequestId` / `Success` / `Data`.
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
   * Detects and identifies products displayed on store shelves or floor stacks by combining a multimodal large language model (MLLM) with visual vector recall, targeting shelf and floor-stack inspection scenarios in offline retail and channel stores. The service first uses an MLLM to detect bounding boxes and preliminary names for each product in a store photo, then performs similarity recall against a customer-specific SKU vector library to exactly match each product to the customer\\"s own SKUs, and outputs per-product structured results that can be directly integrated with business systems. This is suitable for large-scale, high-concurrency visual recognition pipelines such as remote auditing of in-store displays by headquarters, SKU distribution verification, and display compliance inspection.
   * 
   * @remarks
   * ## **Product Introduction**
   * Display detection is an intelligent store product display recognition capability built on a multimodal large language model (MLLM) combined with visual vector recall. It targets shelf and floor-stack display inspection scenarios in offline retail and channel stores. For store photos of shelves or floor stacks, the service first uses an MLLM to detect the bounding box and preliminary name for each product, then performs similarity recall against a customer-specific SKU vector library to exactly match each product to the customer\\"s own SKUs, and outputs per-product structured results that can be directly integrated with business systems. This is suitable for large-scale, high-concurrency visual recognition pipelines such as remote auditing of in-store displays by headquarters, SKU distribution verification, and display compliance inspection.
   * ## **Scenarios**
   * -   **Shelf/floor-stack display recognition and inventory**: Identifies each product in a shelf or floor-stack image, matches it to the customer\\"s SKU library, and outputs a per-product list (product name + position + similarity score), replacing manual counting.
   *     
   * -   **Distribution verification/SKU compliance**: Verifies whether stores display specified SKUs as required by headquarters and whether out-of-stock or misplaced items exist, supporting batch automated verification during promotions or new product launches.
   *     
   * -   **Customer-specific SKU library**: Customers upload their own standard SKU images to build a dedicated vector library (isolated by `RagId`). During recognition, retrieval is performed only within that customer\\"s library, ensuring name accuracy and data isolation between customers.
   * ## **Features**
   * -   **Two-stage detection + retrieval collaboration**: The MLLM detects each product\\"s bounding box and preliminary name across the entire image (semantic-level understanding, adapted for dense displays and partial occlusion). Then visual embedding vectors perform similarity retrieval within the customer\\"s SKU library, overriding the preliminary name with the top-1 precise SKU name to balance recall rate and name accuracy.
   *     
   * -   **Isolated retrieval with dedicated vector libraries**: A dedicated SKU vector library is maintained for each customer by `RagId`. Recognition retrieves only within the corresponding library, ensuring strict isolation between customers. Newly added or updated SKUs take effect in real time.
   *     
   * -   **Per-product structured output**: Output is unified as `Result.Items[]`, with each product independently providing a bounding box, recalled SKU name, SKU code, and similarity score. This facilitates direct integration with downstream inventory/verification systems and supports case-level manual review and traceability.
   *     
   * -   **Supported input formats**: Currently supports image URLs accessible via the public network or OSS. A single shelf or floor-stack image is sufficient for recognition, and the output structure is consistent.
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
   * Detects and identifies products displayed on store shelves or floor stacks by combining a multimodal large language model (MLLM) with visual vector recall, targeting shelf and floor-stack inspection scenarios in offline retail and channel stores. The service first uses an MLLM to detect bounding boxes and preliminary names for each product in a store photo, then performs similarity recall against a customer-specific SKU vector library to exactly match each product to the customer\\"s own SKUs, and outputs per-product structured results that can be directly integrated with business systems. This is suitable for large-scale, high-concurrency visual recognition pipelines such as remote auditing of in-store displays by headquarters, SKU distribution verification, and display compliance inspection.
   * 
   * @remarks
   * ## **Product Introduction**
   * Display detection is an intelligent store product display recognition capability built on a multimodal large language model (MLLM) combined with visual vector recall. It targets shelf and floor-stack display inspection scenarios in offline retail and channel stores. For store photos of shelves or floor stacks, the service first uses an MLLM to detect the bounding box and preliminary name for each product, then performs similarity recall against a customer-specific SKU vector library to exactly match each product to the customer\\"s own SKUs, and outputs per-product structured results that can be directly integrated with business systems. This is suitable for large-scale, high-concurrency visual recognition pipelines such as remote auditing of in-store displays by headquarters, SKU distribution verification, and display compliance inspection.
   * ## **Scenarios**
   * -   **Shelf/floor-stack display recognition and inventory**: Identifies each product in a shelf or floor-stack image, matches it to the customer\\"s SKU library, and outputs a per-product list (product name + position + similarity score), replacing manual counting.
   *     
   * -   **Distribution verification/SKU compliance**: Verifies whether stores display specified SKUs as required by headquarters and whether out-of-stock or misplaced items exist, supporting batch automated verification during promotions or new product launches.
   *     
   * -   **Customer-specific SKU library**: Customers upload their own standard SKU images to build a dedicated vector library (isolated by `RagId`). During recognition, retrieval is performed only within that customer\\"s library, ensuring name accuracy and data isolation between customers.
   * ## **Features**
   * -   **Two-stage detection + retrieval collaboration**: The MLLM detects each product\\"s bounding box and preliminary name across the entire image (semantic-level understanding, adapted for dense displays and partial occlusion). Then visual embedding vectors perform similarity retrieval within the customer\\"s SKU library, overriding the preliminary name with the top-1 precise SKU name to balance recall rate and name accuracy.
   *     
   * -   **Isolated retrieval with dedicated vector libraries**: A dedicated SKU vector library is maintained for each customer by `RagId`. Recognition retrieves only within the corresponding library, ensuring strict isolation between customers. Newly added or updated SKUs take effect in real time.
   *     
   * -   **Per-product structured output**: Output is unified as `Result.Items[]`, with each product independently providing a bounding box, recalled SKU name, SKU code, and similarity score. This facilitates direct integration with downstream inventory/verification systems and supports case-level manual review and traceability.
   *     
   * -   **Supported input formats**: Currently supports image URLs accessible via the public network or OSS. A single shelf or floor-stack image is sufficient for recognition, and the output structure is consistent.
   * 
   * @param request - MerchandisePlacementDetectionRequest
   * @returns MerchandisePlacementDetectionResponse
   */
  async merchandisePlacementDetection(request: $_model.MerchandisePlacementDetectionRequest): Promise<$_model.MerchandisePlacementDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.merchandisePlacementDetectionWithOptions(request, runtime);
  }

  /**
   * An intelligent logistics parcel auditing product built on the synergy of Multimodal Large Language Models (MLLM) and specialized vision algorithms, designed for automated compliance review in the "piece-weight-dimension" stage of e-commerce logistics. The product performs structured auditing across multiple dimensions including bounding box validity, bounding box fit accuracy, and foreign object interference on parcels placed on scanning platforms. It supports different hardware acquisition scenarios such as white background boards and green background boards, and outputs Boolean audit conclusions with Chinese reason descriptions that can be directly integrated into business systems. It is suitable for large-scale, high-concurrency inbound quality inspection pipelines.
   * 
   * @remarks
   * ## Product Introduction
   * An intelligent logistics parcel auditing product built on the synergy of Multimodal Large Language Models (MLLM) and specialized vision algorithms, designed for automated compliance review in the "piece-weight-dimension" stage of e-commerce logistics. The product performs structured auditing across multiple dimensions including **bounding box validity, bounding box fit accuracy, and foreign object interference** on parcels placed on scanning platforms. It supports different hardware acquisition scenarios such as white background boards and green background boards, and outputs Boolean audit conclusions with Chinese reason descriptions that can be directly integrated into business systems. It is suitable for large-scale, high-concurrency inbound quality inspection pipelines.
   * ## Applicable Scenarios
   * 1. **Parcel Bounding Box Audit**: Automatically determines whether the operator\\"s manual bounding box constitutes the "minimum valid bounding rectangle" for the parcel, identifying typical issues such as oversized or undersized bounding boxes.
   * 2. **Foreign Object Interference Detection**: Automatically identifies whether non-target objects such as fingers, keyboards, or auxiliary tools have entered the scanning area.
   * 3. **Multi-Acquisition Environment Adaptation**: A single API can handle two common acquisition modes — white background board (blue box) and green background board (blue box + red box) — without requiring the caller to distinguish between scenarios.
   * 4. **Inbound Quality Inspection Pipeline**: Used for automated review in the piece-weight-dimension stage of the logistics warehouse new product inbound SOP, replacing or assisting manual outsourced auditing.
   * Additionally, the product can also be used for general image "box-subject" relationship audit scenarios, such as product photography material review and document scanning quality verification.
   * ## Feature Introduction
   * 1. **Multi-Scenario Intelligent Routing**: The product has a built-in scenario classification capability that can automatically identify the background type (white/green) and bounding box type (none/single box/double box) in the image, and route the request to the corresponding audit sub-process. The caller only needs to provide the image URL without manually specifying the scenario.
   * 2. **MLLM + Specialized CV Model Synergy**: Multimodal large language models are used for semantic-level scene understanding and foreign object recognition, while specialized parcel segmentation and IoU evaluation models are used for pixel-level bounding box fit quantification, ensuring accuracy while controlling inference latency and cost.
   * 3. **Structured Audit Conclusions**: The output is uniformly structured as `result` (Boolean) + `info` (Chinese reason). Supported reason types include "Audit passed", "Audit not passed: bounding box too large", "Audit not passed: bounding box too small", "Audit not passed: foreign object present", etc., facilitating direct integration with downstream business systems.
   * 4. **Supported Input Formats**: Currently supports publicly accessible image URLs.
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
   * An intelligent logistics parcel auditing product built on the synergy of Multimodal Large Language Models (MLLM) and specialized vision algorithms, designed for automated compliance review in the "piece-weight-dimension" stage of e-commerce logistics. The product performs structured auditing across multiple dimensions including bounding box validity, bounding box fit accuracy, and foreign object interference on parcels placed on scanning platforms. It supports different hardware acquisition scenarios such as white background boards and green background boards, and outputs Boolean audit conclusions with Chinese reason descriptions that can be directly integrated into business systems. It is suitable for large-scale, high-concurrency inbound quality inspection pipelines.
   * 
   * @remarks
   * ## Product Introduction
   * An intelligent logistics parcel auditing product built on the synergy of Multimodal Large Language Models (MLLM) and specialized vision algorithms, designed for automated compliance review in the "piece-weight-dimension" stage of e-commerce logistics. The product performs structured auditing across multiple dimensions including **bounding box validity, bounding box fit accuracy, and foreign object interference** on parcels placed on scanning platforms. It supports different hardware acquisition scenarios such as white background boards and green background boards, and outputs Boolean audit conclusions with Chinese reason descriptions that can be directly integrated into business systems. It is suitable for large-scale, high-concurrency inbound quality inspection pipelines.
   * ## Applicable Scenarios
   * 1. **Parcel Bounding Box Audit**: Automatically determines whether the operator\\"s manual bounding box constitutes the "minimum valid bounding rectangle" for the parcel, identifying typical issues such as oversized or undersized bounding boxes.
   * 2. **Foreign Object Interference Detection**: Automatically identifies whether non-target objects such as fingers, keyboards, or auxiliary tools have entered the scanning area.
   * 3. **Multi-Acquisition Environment Adaptation**: A single API can handle two common acquisition modes — white background board (blue box) and green background board (blue box + red box) — without requiring the caller to distinguish between scenarios.
   * 4. **Inbound Quality Inspection Pipeline**: Used for automated review in the piece-weight-dimension stage of the logistics warehouse new product inbound SOP, replacing or assisting manual outsourced auditing.
   * Additionally, the product can also be used for general image "box-subject" relationship audit scenarios, such as product photography material review and document scanning quality verification.
   * ## Feature Introduction
   * 1. **Multi-Scenario Intelligent Routing**: The product has a built-in scenario classification capability that can automatically identify the background type (white/green) and bounding box type (none/single box/double box) in the image, and route the request to the corresponding audit sub-process. The caller only needs to provide the image URL without manually specifying the scenario.
   * 2. **MLLM + Specialized CV Model Synergy**: Multimodal large language models are used for semantic-level scene understanding and foreign object recognition, while specialized parcel segmentation and IoU evaluation models are used for pixel-level bounding box fit quantification, ensuring accuracy while controlling inference latency and cost.
   * 3. **Structured Audit Conclusions**: The output is uniformly structured as `result` (Boolean) + `info` (Chinese reason). Supported reason types include "Audit passed", "Audit not passed: bounding box too large", "Audit not passed: bounding box too small", "Audit not passed: foreign object present", etc., facilitating direct integration with downstream business systems.
   * 4. **Supported Input Formats**: Currently supports publicly accessible image URLs.
   * 
   * @param request - PackageWeightSizeCheckRequest
   * @returns PackageWeightSizeCheckResponse
   */
  async packageWeightSizeCheck(request: $_model.PackageWeightSizeCheckRequest): Promise<$_model.PackageWeightSizeCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.packageWeightSizeCheckWithOptions(request, runtime);
  }

  /**
   * Marco MT is an e-commerce translation model trained on over 1 billion high-quality bilingual sentence pairs, continuously optimized for e-commerce-specific terminology such as brands, models, materials, and attributes. It supports translation between more than 100 language pairs (including bridged translations), especially Chinese-English, Chinese-multilingual, and English-multilingual translations. It supports language detection for 24 language directions. If you do not specify the source language, automatic detection is performed.
   * 
   * @remarks
   * ## Product Introduction
   * Marco MT is an e-commerce translation model trained on over 1 billion\\+ high-quality bilingual sentence pairs, continuously optimized for e-commerce-specific terminology such as brands, models, materials, and attributes. It supports translation between more than 100 language pairs (including bridged translations), especially Chinese-English, Chinese-multilingual, and English-multilingual translations. It supports language detection for 24 language directions. If you do not specify the source language, automatic detection is performed.
   * ## Common scenarios
   * - Product titles: Marco MT large model translation accurately translates phrases, keywords, and trending words in product titles into the target language, improving product visibility on e-commerce platforms.
   * - Product descriptions: Product descriptions are typically long with diverse and complex formatting. Marco large model translation supports long text translation and HTML format, delivering excellent translation quality and format preservation.
   * - Product attributes: Product attribute terms are short and may contain e-commerce-specific terms such as model numbers and parameters.
   * - Customer service conversations: In customer service scenarios, the model optimizes issues such as missing context and typos, and supports polite expressions for certain language directions.
   * Marco MT large model translation can also be used for general-purpose translation scenarios such as office work, meetings, and daily conversations.
   * ## Features
   * - **Supported language directions** Marco MT large model translation supports translation between more than 100 languages and language detection for 23 languages. For specific language directions, refer to the language mapping table in Section 5.6.
   * - **Ultra-low hallucination rate and high-speed inference** Marco MT large model translation is a large language model with preference alignment for translation scenarios. Compared with general-purpose large language models, it offers faster translation inference speed and an extremely low hallucination rate, making it especially suitable for large-scale invocation scenarios.
   * - **Supported text format types** Currently supports text and html text types.
   * - **Translation intervention support** Supports custom translation results, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and no translation (ABC-empty value). This is commonly used for brand name protection scenarios. Simply pass the corresponding intervention glossary ID when calling the API to meet your translation needs across different scenarios. You can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.
   * ## Translation quality comparison
   * | **Source text** | **Aidge translation** | **Other translation product 1** | **Other translation product 2** | **Aidge translation advantage** |
   * |----------|---------------|-----------------------|-----------------------|---------------------|
   * | 75mm 4Pin 0.38A GA81S2U 12V GTX 960 Cooling Fan for Zotac GTX960 Graphics Card Cooling Fan | 75mm 4Pin 0.38A GA81S2U 12V GTX 960, ventilador de enfriamiento para tarjeta gráfica Zotac GTX960. | Ventilador de refrigeración de 75mm 4Pin 0.38A GA81S2U 12V para la tarjeta gráfica Zotac GTX960 Ventilador de enfriamiento GTX 960. | Ventilador de refrigeración para tarjeta gráfica Zotac GTX960, 75mm, 4 pines, 0,38A, GA81S2U, 12V, GTX 960 | Clearer product subject |
   * | New Arrival Classic Style Luxury Brand 6 Hands Swiss Automatic Mechanical Men\\"s Business Steel Watch | Nueva llegada, reloj mecánico automático de lujo con 6 manecillas, estilo clásico, de acero para hombres de negocios | Nueva Llegada Reloj De Acero de Negocios para Hombre con Mecanismo Automático Suizo y 6 Agujas de Estilo Clásico de Marca de Lujo. | Reloj de acero de negocios para hombre, mecánico automático suizo, marca de lujo, estilo clásico, 6 manos, nueva llegada | More complete sentence structure, clearer expression, and more reasonable segmentation |
   * | Men Key Bag Genuine Cow Leather Buckets Key Cases Pouch Zipper Keychain Auto Car Key Case Women Home Key Holder Wallet | Sac à clés pour hommes en cuir de vache véritable, étuis à clés, pochette à fermeture éclair, porte-clés, étui à clé de voiture, porte-clés pour femmes, organisateur de portefeuille | Porte-clés sac en cuir de vache véritable, étuis à clés en forme de seau, pochette à fermeture éclair, porte-clés auto pour voiture, étui à clés pour femmes, organisateur de clés de maison, portefeuille. | Hommes porte-clés en cuir de vache véritable sac/pochette fermature éclair porte-clés Auto voiture porte-clés femmes maison porte-clés organisateur portefeuille | Clearer and more precise product subject expression. The translation correctly identifies "key bag" rather than "keychain", avoiding ambiguity about the product type |
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
   * Marco MT is an e-commerce translation model trained on over 1 billion high-quality bilingual sentence pairs, continuously optimized for e-commerce-specific terminology such as brands, models, materials, and attributes. It supports translation between more than 100 language pairs (including bridged translations), especially Chinese-English, Chinese-multilingual, and English-multilingual translations. It supports language detection for 24 language directions. If you do not specify the source language, automatic detection is performed.
   * 
   * @remarks
   * ## Product Introduction
   * Marco MT is an e-commerce translation model trained on over 1 billion\\+ high-quality bilingual sentence pairs, continuously optimized for e-commerce-specific terminology such as brands, models, materials, and attributes. It supports translation between more than 100 language pairs (including bridged translations), especially Chinese-English, Chinese-multilingual, and English-multilingual translations. It supports language detection for 24 language directions. If you do not specify the source language, automatic detection is performed.
   * ## Common scenarios
   * - Product titles: Marco MT large model translation accurately translates phrases, keywords, and trending words in product titles into the target language, improving product visibility on e-commerce platforms.
   * - Product descriptions: Product descriptions are typically long with diverse and complex formatting. Marco large model translation supports long text translation and HTML format, delivering excellent translation quality and format preservation.
   * - Product attributes: Product attribute terms are short and may contain e-commerce-specific terms such as model numbers and parameters.
   * - Customer service conversations: In customer service scenarios, the model optimizes issues such as missing context and typos, and supports polite expressions for certain language directions.
   * Marco MT large model translation can also be used for general-purpose translation scenarios such as office work, meetings, and daily conversations.
   * ## Features
   * - **Supported language directions** Marco MT large model translation supports translation between more than 100 languages and language detection for 23 languages. For specific language directions, refer to the language mapping table in Section 5.6.
   * - **Ultra-low hallucination rate and high-speed inference** Marco MT large model translation is a large language model with preference alignment for translation scenarios. Compared with general-purpose large language models, it offers faster translation inference speed and an extremely low hallucination rate, making it especially suitable for large-scale invocation scenarios.
   * - **Supported text format types** Currently supports text and html text types.
   * - **Translation intervention support** Supports custom translation results, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and no translation (ABC-empty value). This is commonly used for brand name protection scenarios. Simply pass the corresponding intervention glossary ID when calling the API to meet your translation needs across different scenarios. You can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.
   * ## Translation quality comparison
   * | **Source text** | **Aidge translation** | **Other translation product 1** | **Other translation product 2** | **Aidge translation advantage** |
   * |----------|---------------|-----------------------|-----------------------|---------------------|
   * | 75mm 4Pin 0.38A GA81S2U 12V GTX 960 Cooling Fan for Zotac GTX960 Graphics Card Cooling Fan | 75mm 4Pin 0.38A GA81S2U 12V GTX 960, ventilador de enfriamiento para tarjeta gráfica Zotac GTX960. | Ventilador de refrigeración de 75mm 4Pin 0.38A GA81S2U 12V para la tarjeta gráfica Zotac GTX960 Ventilador de enfriamiento GTX 960. | Ventilador de refrigeración para tarjeta gráfica Zotac GTX960, 75mm, 4 pines, 0,38A, GA81S2U, 12V, GTX 960 | Clearer product subject |
   * | New Arrival Classic Style Luxury Brand 6 Hands Swiss Automatic Mechanical Men\\"s Business Steel Watch | Nueva llegada, reloj mecánico automático de lujo con 6 manecillas, estilo clásico, de acero para hombres de negocios | Nueva Llegada Reloj De Acero de Negocios para Hombre con Mecanismo Automático Suizo y 6 Agujas de Estilo Clásico de Marca de Lujo. | Reloj de acero de negocios para hombre, mecánico automático suizo, marca de lujo, estilo clásico, 6 manos, nueva llegada | More complete sentence structure, clearer expression, and more reasonable segmentation |
   * | Men Key Bag Genuine Cow Leather Buckets Key Cases Pouch Zipper Keychain Auto Car Key Case Women Home Key Holder Wallet | Sac à clés pour hommes en cuir de vache véritable, étuis à clés, pochette à fermeture éclair, porte-clés, étui à clé de voiture, porte-clés pour femmes, organisateur de portefeuille | Porte-clés sac en cuir de vache véritable, étuis à clés en forme de seau, pochette à fermeture éclair, porte-clés auto pour voiture, étui à clés pour femmes, organisateur de clés de maison, portefeuille. | Hommes porte-clés en cuir de vache véritable sac/pochette fermature éclair porte-clés Auto voiture porte-clés femmes maison porte-clés organisateur portefeuille | Clearer and more precise product subject expression. The translation correctly identifies "key bag" rather than "keychain", avoiding ambiguity about the product type |
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
   * **Before using this operation, make sure that you fully understand the billing method and [pricing](https://www.aliyun.com/price/product#/ecs/detail) of the product hotzone recognition service.**
   * This API automatically identifies and locates specified products in a target scene image based on the provided target scene image and product reference images, and outputs the product name and normalized bounding box. Each request takes one target scene image and a set of product reference images. If the same case has multiple target images, call the operation separately for each target image.
   * ### Precautions
   * - Image URLs must use HTTPS and be accessible by the server.
   * - Common image formats such as JPEG, PNG, and WebP are supported.
   * - Each image should not exceed 2 MB.
   * - When using signed URLs, set the validity period to at least 30 minutes.
   * - If the same case has multiple target scene images, call the operation separately for each target image. The reference image list can be reused.
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
   * **Before using this operation, make sure that you fully understand the billing method and [pricing](https://www.aliyun.com/price/product#/ecs/detail) of the product hotzone recognition service.**
   * This API automatically identifies and locates specified products in a target scene image based on the provided target scene image and product reference images, and outputs the product name and normalized bounding box. Each request takes one target scene image and a set of product reference images. If the same case has multiple target images, call the operation separately for each target image.
   * ### Precautions
   * - Image URLs must use HTTPS and be accessible by the server.
   * - Common image formats such as JPEG, PNG, and WebP are supported.
   * - Each image should not exceed 2 MB.
   * - When using signed URLs, set the validity period to at least 30 minutes.
   * - If the same case has multiple target scene images, call the operation separately for each target image. The reference image list can be reused.
   * 
   * @param request - ProductHotspotDetectionRequest
   * @returns ProductHotspotDetectionResponse
   */
  async productHotspotDetection(request: $_model.ProductHotspotDetectionRequest): Promise<$_model.ProductHotspotDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.productHotspotDetectionWithOptions(request, runtime);
  }

  /**
   * Queries the result of an asynchronous task. The API name on the POP gateway is QueryAsyncTaskResult.
   * 
   * @remarks
   * The API name on the POP gateway is QueryAsyncTaskResult.
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
   * Queries the result of an asynchronous task. The API name on the POP gateway is QueryAsyncTaskResult.
   * 
   * @remarks
   * The API name on the POP gateway is QueryAsyncTaskResult.
   * 
   * @param request - QueryAsyncTaskResultRequest
   * @returns QueryAsyncTaskResultResponse
   */
  async queryAsyncTaskResult(request: $_model.QueryAsyncTaskResultRequest): Promise<$_model.QueryAsyncTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAsyncTaskResultWithOptions(request, runtime);
  }

  /**
   * Detects whether an image contains a size chart. (Synchronous).
   * 
   * @remarks
   * # 1. Product Introduction
   * Detects whether an image contains a size chart. (Synchronous).
   * # 2. Common scenarios
   * **Batch processing scenarios:** Detect images that contain size charts from a batch of images for further translation or extraction. The size chart detection service helps reduce costs.
   * # 3. Functions and features
   * The size chart detection service uses image recognition technology to automatically determine whether an input image contains a size chart. You provide an image URL, and the system returns a detection result (True/False) indicating whether the image is a size chart.
   * You can customize the confidence threshold (default: 0.4) and flexibly adjust the detection sensitivity based on your business accuracy requirements. A lower threshold results in more lenient detection, while a higher threshold results in stricter detection. The API processes a single image per request and is suitable for integration into automated batch workflows for sequential invocation.
   * # 4. Effect comparison
   * | **Input image** | **Confidence** | **Output result** |
   * | --- | --- | --- |
   * | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4jKqm0bAebrKLnw1/img/0a914347-2acb-4b94-bf07-86aab2b31279.png) | 0.4 | true |
   * | ![O1CN01ZjViRX1rdaL6QDFNo_!!6000000005654-0-tps-2048-2048.webp](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4jKqm0bAebrKLnw1/img/ab29b032-139a-4b22-9371-b387581559b7.webp) | 0.4 | false |.
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
   * Detects whether an image contains a size chart. (Synchronous).
   * 
   * @remarks
   * # 1. Product Introduction
   * Detects whether an image contains a size chart. (Synchronous).
   * # 2. Common scenarios
   * **Batch processing scenarios:** Detect images that contain size charts from a batch of images for further translation or extraction. The size chart detection service helps reduce costs.
   * # 3. Functions and features
   * The size chart detection service uses image recognition technology to automatically determine whether an input image contains a size chart. You provide an image URL, and the system returns a detection result (True/False) indicating whether the image is a size chart.
   * You can customize the confidence threshold (default: 0.4) and flexibly adjust the detection sensitivity based on your business accuracy requirements. A lower threshold results in more lenient detection, while a higher threshold results in stricter detection. The API processes a single image per request and is suitable for integration into automated batch workflows for sequential invocation.
   * # 4. Effect comparison
   * | **Input image** | **Confidence** | **Output result** |
   * | --- | --- | --- |
   * | ![image.png](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4jKqm0bAebrKLnw1/img/0a914347-2acb-4b94-bf07-86aab2b31279.png) | 0.4 | true |
   * | ![O1CN01ZjViRX1rdaL6QDFNo_!!6000000005654-0-tps-2048-2048.webp](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/4jKqm0bAebrKLnw1/img/ab29b032-139a-4b22-9371-b387581559b7.webp) | 0.4 | false |.
   * 
   * @param request - SizeChartDetectRequest
   * @returns SizeChartDetectResponse
   */
  async sizeChartDetect(request: $_model.SizeChartDetectRequest): Promise<$_model.SizeChartDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sizeChartDetectWithOptions(request, runtime);
  }

  /**
   * Intelligently extracts structured information such as size charts and package weight/dimension data from images by using a multimodal large language model. (Asynchronous).
   * 
   * @remarks
   * ## Product Introduction
   * Intelligently extracts structured information such as size charts and package weight/dimension data from images by using a multimodal large language model. (Asynchronous).
   * ## Common scenarios
   * *   Size charts: Extracts size charts from apparel categories into text.
   *     
   * *   Package weight/dimensions: Extracts package weight and dimension information from images.
   * ## Functions and features
   * The size chart extraction service is based on a multimodal large language model. It automatically recognizes size chart or package weight/dimension information in images and converts it into structured text output. You provide an image URL, and the system processes the request as an asynchronous task and returns the extracted structured data. You can use the ColumnNameList parameter to specify the column names to recognize (such as Size, Bust, and Length) for precise targeted extraction. You can also use the LanguageModel parameter to control the output language. Valid values: cn (Chinese) and en (English). If you leave this parameter empty, the original language is retained. This service is applicable to scenarios such as converting apparel size charts to text and batch structuring of product weight/dimension information.
   * Core capabilities: Provide an image URL and optional column name configurations as input, and receive structured data of size charts or package weight/dimensions from the image as output. The API uses an asynchronous task mode (background: true). After submission, a task ID is returned. Poll for the final result. This mode is suitable for processing complex images or high-volume calls.
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
   * } |.
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
   * Intelligently extracts structured information such as size charts and package weight/dimension data from images by using a multimodal large language model. (Asynchronous).
   * 
   * @remarks
   * ## Product Introduction
   * Intelligently extracts structured information such as size charts and package weight/dimension data from images by using a multimodal large language model. (Asynchronous).
   * ## Common scenarios
   * *   Size charts: Extracts size charts from apparel categories into text.
   *     
   * *   Package weight/dimensions: Extracts package weight and dimension information from images.
   * ## Functions and features
   * The size chart extraction service is based on a multimodal large language model. It automatically recognizes size chart or package weight/dimension information in images and converts it into structured text output. You provide an image URL, and the system processes the request as an asynchronous task and returns the extracted structured data. You can use the ColumnNameList parameter to specify the column names to recognize (such as Size, Bust, and Length) for precise targeted extraction. You can also use the LanguageModel parameter to control the output language. Valid values: cn (Chinese) and en (English). If you leave this parameter empty, the original language is retained. This service is applicable to scenarios such as converting apparel size charts to text and batch structuring of product weight/dimension information.
   * Core capabilities: Provide an image URL and optional column name configurations as input, and receive structured data of size charts or package weight/dimensions from the image as output. The API uses an asynchronous task mode (background: true). After submission, a task ID is returned. Poll for the final result. This mode is suitable for processing complex images or high-volume calls.
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
   * } |.
   * 
   * @param request - SizeChartExtractRequest
   * @returns SizeChartExtractResponse
   */
  async sizeChartExtract(request: $_model.SizeChartExtractRequest): Promise<$_model.SizeChartExtractResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sizeChartExtractWithOptions(request, runtime);
  }

  /**
   * Correct errors in search terms and titles
   * 
   * @remarks
   * ## Product Introduction
   * Corrects errors in search terms and titles. Currently supports the following 14 languages:
   * | No. | Language Name (English) | Language Code | Language Name (Chinese) |
   * |------|------------------------|------------|------------------------|
   * | 1 | Arabic | ar | Arabic |
   * | 2 | German | de | German |
   * | 3 | English | en | English |
   * | 4 | Spanish | es | Spanish |
   * | 5 | French | fr | French |
   * | 6 | Hebrew | he | Hebrew |
   * | 7 | Italian | it | Italian |
   * | 8 | Japanese | ja | Japanese |
   * | 9 | Korean | ko | Korean |
   * | 10 | Dutch | nl | Dutch |
   * | 11 | Polish | pl | Polish |
   * | 12 | Portuguese | pt | Portuguese (Brazil) |
   * | 13 | Russian | ru | Russian |
   * | 14 | Ukrainian | uk | Ukrainian |
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
   * Correct errors in search terms and titles
   * 
   * @remarks
   * ## Product Introduction
   * Corrects errors in search terms and titles. Currently supports the following 14 languages:
   * | No. | Language Name (English) | Language Code | Language Name (Chinese) |
   * |------|------------------------|------------|------------------------|
   * | 1 | Arabic | ar | Arabic |
   * | 2 | German | de | German |
   * | 3 | English | en | English |
   * | 4 | Spanish | es | Spanish |
   * | 5 | French | fr | French |
   * | 6 | Hebrew | he | Hebrew |
   * | 7 | Italian | it | Italian |
   * | 8 | Japanese | ja | Japanese |
   * | 9 | Korean | ko | Korean |
   * | 10 | Dutch | nl | Dutch |
   * | 11 | Polish | pl | Polish |
   * | 12 | Portuguese | pt | Portuguese (Brazil) |
   * | 13 | Russian | ru | Russian |
   * | 14 | Ukrainian | uk | Ukrainian |
   * 
   * @param request - TextCorrectRequest
   * @returns TextCorrectResponse
   */
  async textCorrect(request: $_model.TextCorrectRequest): Promise<$_model.TextCorrectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.textCorrectWithOptions(request, runtime);
  }

  /**
   * Marco MT is an e-commerce translation model trained on over 1 billion high-quality bilingual sentence pairs, continuously optimized for e-commerce-specific terminology such as brands, models, materials, and attributes. It supports translation between more than 100 language pairs (including bridged translations), especially Chinese-English, Chinese-to-multilingual, and English-to-multilingual translations. It supports language detection for 24 language directions. If you do not specify a source language, automatic detection is performed.
   * 
   * @remarks
   * ## Product Introduction
   * Marco MT is an e-commerce translation model trained on over 1 billion\\+ high-quality bilingual sentence pairs, continuously optimized for e-commerce-specific terminology such as brands, models, materials, and attributes. It supports translation between more than 100 language pairs (including bridged translations), especially Chinese-English, Chinese-to-multilingual, and English-to-multilingual translations. It supports language detection for 24 language directions. If you do not specify a source language, automatic detection is performed.
   * ## Common scenarios
   * - Product titles: Marco MT large model translation accurately translates phrases, keywords, and trending words in product titles into the target language, improving product visibility on e-commerce platforms.
   * - Product descriptions: Product descriptions are typically long with diverse and complex formatting. Marco large model translation supports long text translation and HTML format, delivering excellent translation quality and format preservation.
   * - Product attributes: Product attribute terms are short and may contain e-commerce-specific terms such as model numbers and parameters.
   * - Customer service conversations: In customer service scenarios, the model optimizes issues such as missing context and typos, and supports polite expressions for certain language directions.
   * Marco MT large model translation can also be used for general translation scenarios such as office work, meetings, and daily conversations.
   * ## Features
   * - **Supported language directions** Marco MT large model translation supports translation between more than 100 languages and language detection for 23 languages. For specific language directions, refer to the language mapping table in section 5.6.
   * - **Ultra-low hallucination rate and high-speed inference** Marco MT large model translation is a large language model with preference alignment for translation scenarios. Compared with general-purpose large language models, it offers faster translation inference and an extremely low hallucination rate, making it especially suitable for large-scale invocation scenarios.
   * - **Supported text format types** Currently supports text and html text types.
   * - **Translation intervention support** Supports custom translation results, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and no translation (ABC-empty value). This is commonly used for brand name protection scenarios. Simply pass the corresponding intervention glossary ID when calling the API to meet your translation needs across different scenarios. You can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.
   * ## Translation quality comparison
   * | **Source text** | **Aidge translation** | **Other translation product 1** | **Other translation product 2** | **Aidge translation advantage** |
   * |----------|---------------|-----------------------|-----------------------|---------------------|
   * | 75mm 4Pin 0.38A GA81S2U 12V GTX 960 Cooling Fan for Zotac GTX960 Graphics Card Cooling Fan | 75mm 4Pin 0.38A GA81S2U 12V GTX 960, ventilador de enfriamiento para tarjeta gráfica Zotac GTX960. | Ventilador de refrigeración de 75mm 4Pin 0.38A GA81S2U 12V para la tarjeta gráfica Zotac GTX960 Ventilador de enfriamiento GTX 960. | Ventilador de refrigeración para tarjeta gráfica Zotac GTX960, 75mm, 4 pines, 0,38A, GA81S2U, 12V, GTX 960 | Clearer product subject |
   * | New Arrival Classic Style Luxury Brand 6 Hands Swiss Automatic Mechanical Men\\"s Business Steel Watch | Nueva llegada, reloj mecánico automático de lujo con 6 manecillas, estilo clásico, de acero para hombres de negocios | Nueva Llegada Reloj De Acero de Negocios para Hombre con Mecanismo Automático Suizo y 6 Agujas de Estilo Clásico de Marca de Lujo. | Reloj de acero de negocios para hombre, mecánico automático suizo, marca de lujo, estilo clásico, 6 manos, nueva llegada | More complete sentence structure, clearer expression, and more reasonable segmentation |
   * | Men Key Bag Genuine Cow Leather Buckets Key Cases Pouch Zipper Keychain Auto Car Key Case Women Home Key Holder Wallet | Sac à clés pour hommes en cuir de vache véritable, étuis à clés, pochette à fermeture éclair, porte-clés, étui à clé de voiture, porte-clés pour femmes, organisateur de portefeuille | Porte-clés sac en cuir de vache véritable, étuis à clés en forme de seau, pochette à fermeture éclair, porte-clés auto pour voiture, étui à clés pour femmes, organisateur de clés de maison, portefeuille. | Hommes porte-clés en cuir de vache véritable sac/pochette fermature éclair porte-clés Auto voiture porte-clés femmes maison porte-clés organisateur portefeuille | Clearer and more precise product subject expression as "key bag" rather than "keychain", avoiding ambiguity about the product type |
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
   * Marco MT is an e-commerce translation model trained on over 1 billion high-quality bilingual sentence pairs, continuously optimized for e-commerce-specific terminology such as brands, models, materials, and attributes. It supports translation between more than 100 language pairs (including bridged translations), especially Chinese-English, Chinese-to-multilingual, and English-to-multilingual translations. It supports language detection for 24 language directions. If you do not specify a source language, automatic detection is performed.
   * 
   * @remarks
   * ## Product Introduction
   * Marco MT is an e-commerce translation model trained on over 1 billion\\+ high-quality bilingual sentence pairs, continuously optimized for e-commerce-specific terminology such as brands, models, materials, and attributes. It supports translation between more than 100 language pairs (including bridged translations), especially Chinese-English, Chinese-to-multilingual, and English-to-multilingual translations. It supports language detection for 24 language directions. If you do not specify a source language, automatic detection is performed.
   * ## Common scenarios
   * - Product titles: Marco MT large model translation accurately translates phrases, keywords, and trending words in product titles into the target language, improving product visibility on e-commerce platforms.
   * - Product descriptions: Product descriptions are typically long with diverse and complex formatting. Marco large model translation supports long text translation and HTML format, delivering excellent translation quality and format preservation.
   * - Product attributes: Product attribute terms are short and may contain e-commerce-specific terms such as model numbers and parameters.
   * - Customer service conversations: In customer service scenarios, the model optimizes issues such as missing context and typos, and supports polite expressions for certain language directions.
   * Marco MT large model translation can also be used for general translation scenarios such as office work, meetings, and daily conversations.
   * ## Features
   * - **Supported language directions** Marco MT large model translation supports translation between more than 100 languages and language detection for 23 languages. For specific language directions, refer to the language mapping table in section 5.6.
   * - **Ultra-low hallucination rate and high-speed inference** Marco MT large model translation is a large language model with preference alignment for translation scenarios. Compared with general-purpose large language models, it offers faster translation inference and an extremely low hallucination rate, making it especially suitable for large-scale invocation scenarios.
   * - **Supported text format types** Currently supports text and html text types.
   * - **Translation intervention support** Supports custom translation results, including do-not-translate (ABC-ABC), specified translation (ABC-DEF), and no translation (ABC-empty value). This is commonly used for brand name protection scenarios. Simply pass the corresponding intervention glossary ID when calling the API to meet your translation needs across different scenarios. You can upload up to 100,000 intervention terms. If you need more, contact the platform for assistance.
   * ## Translation quality comparison
   * | **Source text** | **Aidge translation** | **Other translation product 1** | **Other translation product 2** | **Aidge translation advantage** |
   * |----------|---------------|-----------------------|-----------------------|---------------------|
   * | 75mm 4Pin 0.38A GA81S2U 12V GTX 960 Cooling Fan for Zotac GTX960 Graphics Card Cooling Fan | 75mm 4Pin 0.38A GA81S2U 12V GTX 960, ventilador de enfriamiento para tarjeta gráfica Zotac GTX960. | Ventilador de refrigeración de 75mm 4Pin 0.38A GA81S2U 12V para la tarjeta gráfica Zotac GTX960 Ventilador de enfriamiento GTX 960. | Ventilador de refrigeración para tarjeta gráfica Zotac GTX960, 75mm, 4 pines, 0,38A, GA81S2U, 12V, GTX 960 | Clearer product subject |
   * | New Arrival Classic Style Luxury Brand 6 Hands Swiss Automatic Mechanical Men\\"s Business Steel Watch | Nueva llegada, reloj mecánico automático de lujo con 6 manecillas, estilo clásico, de acero para hombres de negocios | Nueva Llegada Reloj De Acero de Negocios para Hombre con Mecanismo Automático Suizo y 6 Agujas de Estilo Clásico de Marca de Lujo. | Reloj de acero de negocios para hombre, mecánico automático suizo, marca de lujo, estilo clásico, 6 manos, nueva llegada | More complete sentence structure, clearer expression, and more reasonable segmentation |
   * | Men Key Bag Genuine Cow Leather Buckets Key Cases Pouch Zipper Keychain Auto Car Key Case Women Home Key Holder Wallet | Sac à clés pour hommes en cuir de vache véritable, étuis à clés, pochette à fermeture éclair, porte-clés, étui à clé de voiture, porte-clés pour femmes, organisateur de portefeuille | Porte-clés sac en cuir de vache véritable, étuis à clés en forme de seau, pochette à fermeture éclair, porte-clés auto pour voiture, étui à clés pour femmes, organisateur de clés de maison, portefeuille. | Hommes porte-clés en cuir de vache véritable sac/pochette fermature éclair porte-clés Auto voiture porte-clés femmes maison porte-clés organisateur portefeuille | Clearer and more precise product subject expression as "key bag" rather than "keychain", avoiding ambiguity about the product type |
   * 
   * @param request - TextTranslateRequest
   * @returns TextTranslateResponse
   */
  async textTranslate(request: $_model.TextTranslateRequest): Promise<$_model.TextTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.textTranslateWithOptions(request, runtime);
  }

  /**
   * Invokes the e-commerce AI video generation agent for e-commerce merchants and platforms. Based on product main images, titles, selling points, and other information, it automatically generates 5–30 second product showcase short videos, helping customers efficiently produce and distribute e-commerce content. The service supports multiple resolution outputs such as 720P and 1080P, single-product quick invocation and multi-product batch generation, catering to both daily operations and large-scale product content production needs. Currently overwrites all apparel categories (tops, pants, skirts, suits, underwear, swimwear, etc.), and is gradually expanding to skincare, cosmetics, food and beverages, home appliances, and other core e-commerce categories.
   * 
   * @remarks
   * # Scenarios
   * - Batch generation of product short videos for sellers/platforms: Supports multiple video aspect ratios and sizes (3:4, 9:16), suitable for product detail page video slots, product homepage display, information feed placement, short video content marketing, campaign material, and other scenarios.
   * - Quick generation of initial video assets for new product launches: When merchants have a large number of new products to list, they only need to upload product images and titles to quickly generate product showcase videos, model try-on videos, voiceover explanation videos, and other content, helping merchants rapidly complete asset creation during the launch phase.
   * - High-fidelity apparel display: Generates model showcase videos that closely resemble real commercial photography based on product main images, with optimized capabilities for silhouette reproduction, fabric texture preservation, accurate color rendering, and consistent detail stability. Supports common e-commerce display methods such as garment try-on, turning, walking, close-up shots, and multi-angle switching.
   * - High-quality commercial photography models: Includes 20+ built-in target audience model libraries covering plus-size women, plus-size men, swimwear, youthful style, smart casual commute, young casual, business menswear, sports and fitness, and other body types, skin tones, and ethnicities. Supports standing poses, side views, walking displays, partial close-ups, and other commercial photography expressions.
   * - Standard product explanation and other high-frequency e-commerce scenarios: Applicable to standardized product categories such as skincare, cosmetics, personal care small appliances, food and beverages, household cleaning products, and 3C digital products. Quickly generates product explanation videos based on product main images, titles, selling points, and explanation scripts.
   * - Multi-product and multi-selling-point testing to improve placement efficiency: For information feed advertising, short video placement, and content marketing scenarios, quickly generates multiple versions of video assets, enabling enterprises to validate conversion effects of different selling points and presentation formats at low cost, improving placement ROI.
   * # Features
   * - Fully automated end-to-end batch generation with zero prompt threshold: Callers only need to provide product image URLs and titles. The system automatically completes the entire process from product understanding, storyboard planning, to video generation without manual prompt writing, template selection, or repeated parameter tuning. Built-in multi-agent capabilities including product understanding, visual quality inspection, script planning, and cinematography direction significantly lower the usage barrier.
   * - Highly stable generation with low waste rate: Uses a deterministic generation pipeline and multi-layer quality control mechanism to output usable assets with fewer retries, reducing invalid generation and resource waste, making overall production costs more controllable.
   * - E-commerce-specific product fidelity: Built-in multi-round quality inspection agents lock product state throughout video generation (e.g., zippers won\\"t be unzipped, sleeves won\\"t be lowered, prints won\\"t disappear), ensuring product consistency through multi-layer defense of "script rewriting + explicit constraint injection + failure-aware retry."
   * - Reference image priority + 6-axis consistency verification: Adopts a Reference-Image-First generation paradigm using the original product image as the sole visual truth source, automatically performing 6-dimensional VL diagnostics (color drift, pattern loss, contour deviation, structural addition/removal, model matching, stain detection), fundamentally eliminating the problem of generated images not resembling the product.
   * - Flexible storyboard arrangement and duration control: Supports adjustable video duration of 5–30 seconds. The agent autonomously plans independent storyboards to showcase product effects in different scenarios. Also supports fixed scene mode for in-depth product presentation under a unified visual style.
   * - Cinematic camera movement capabilities: Built-in advanced camera modes including bullet time, Grammy-style slow motion, 360° orbital rotation, and full-body model rotation display, achieving deterministic output through segmented precise control.
   * - Model library and customization services: Built-in multi-type model resource library supporting merchants in specifying fixed models, customizing exclusive model personas, and long-term brand visual identity binding to ensure brand visual consistency.
   * - Adapted to high-frequency e-commerce content scenarios: Supports multiple resolutions such as 720P and 1080P, and multiple aspect ratios such as 3:4 and 9:16, suitable for product detail page video slots, product homepage video display, waterfall/information feed placement, campaign material, and new product and promotional video generation.
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
   * Invokes the e-commerce AI video generation agent for e-commerce merchants and platforms. Based on product main images, titles, selling points, and other information, it automatically generates 5–30 second product showcase short videos, helping customers efficiently produce and distribute e-commerce content. The service supports multiple resolution outputs such as 720P and 1080P, single-product quick invocation and multi-product batch generation, catering to both daily operations and large-scale product content production needs. Currently overwrites all apparel categories (tops, pants, skirts, suits, underwear, swimwear, etc.), and is gradually expanding to skincare, cosmetics, food and beverages, home appliances, and other core e-commerce categories.
   * 
   * @remarks
   * # Scenarios
   * - Batch generation of product short videos for sellers/platforms: Supports multiple video aspect ratios and sizes (3:4, 9:16), suitable for product detail page video slots, product homepage display, information feed placement, short video content marketing, campaign material, and other scenarios.
   * - Quick generation of initial video assets for new product launches: When merchants have a large number of new products to list, they only need to upload product images and titles to quickly generate product showcase videos, model try-on videos, voiceover explanation videos, and other content, helping merchants rapidly complete asset creation during the launch phase.
   * - High-fidelity apparel display: Generates model showcase videos that closely resemble real commercial photography based on product main images, with optimized capabilities for silhouette reproduction, fabric texture preservation, accurate color rendering, and consistent detail stability. Supports common e-commerce display methods such as garment try-on, turning, walking, close-up shots, and multi-angle switching.
   * - High-quality commercial photography models: Includes 20+ built-in target audience model libraries covering plus-size women, plus-size men, swimwear, youthful style, smart casual commute, young casual, business menswear, sports and fitness, and other body types, skin tones, and ethnicities. Supports standing poses, side views, walking displays, partial close-ups, and other commercial photography expressions.
   * - Standard product explanation and other high-frequency e-commerce scenarios: Applicable to standardized product categories such as skincare, cosmetics, personal care small appliances, food and beverages, household cleaning products, and 3C digital products. Quickly generates product explanation videos based on product main images, titles, selling points, and explanation scripts.
   * - Multi-product and multi-selling-point testing to improve placement efficiency: For information feed advertising, short video placement, and content marketing scenarios, quickly generates multiple versions of video assets, enabling enterprises to validate conversion effects of different selling points and presentation formats at low cost, improving placement ROI.
   * # Features
   * - Fully automated end-to-end batch generation with zero prompt threshold: Callers only need to provide product image URLs and titles. The system automatically completes the entire process from product understanding, storyboard planning, to video generation without manual prompt writing, template selection, or repeated parameter tuning. Built-in multi-agent capabilities including product understanding, visual quality inspection, script planning, and cinematography direction significantly lower the usage barrier.
   * - Highly stable generation with low waste rate: Uses a deterministic generation pipeline and multi-layer quality control mechanism to output usable assets with fewer retries, reducing invalid generation and resource waste, making overall production costs more controllable.
   * - E-commerce-specific product fidelity: Built-in multi-round quality inspection agents lock product state throughout video generation (e.g., zippers won\\"t be unzipped, sleeves won\\"t be lowered, prints won\\"t disappear), ensuring product consistency through multi-layer defense of "script rewriting + explicit constraint injection + failure-aware retry."
   * - Reference image priority + 6-axis consistency verification: Adopts a Reference-Image-First generation paradigm using the original product image as the sole visual truth source, automatically performing 6-dimensional VL diagnostics (color drift, pattern loss, contour deviation, structural addition/removal, model matching, stain detection), fundamentally eliminating the problem of generated images not resembling the product.
   * - Flexible storyboard arrangement and duration control: Supports adjustable video duration of 5–30 seconds. The agent autonomously plans independent storyboards to showcase product effects in different scenarios. Also supports fixed scene mode for in-depth product presentation under a unified visual style.
   * - Cinematic camera movement capabilities: Built-in advanced camera modes including bullet time, Grammy-style slow motion, 360° orbital rotation, and full-body model rotation display, achieving deterministic output through segmented precise control.
   * - Model library and customization services: Built-in multi-type model resource library supporting merchants in specifying fixed models, customizing exclusive model personas, and long-term brand visual identity binding to ensure brand visual consistency.
   * - Adapted to high-frequency e-commerce content scenarios: Supports multiple resolutions such as 720P and 1080P, and multiple aspect ratios such as 3:4 and 9:16, suitable for product detail page video slots, product homepage video display, waterfall/information feed placement, campaign material, and new product and promotional video generation.
   * 
   * @param request - VideoGenerationRequest
   * @returns VideoGenerationResponse
   */
  async videoGeneration(request: $_model.VideoGenerationRequest): Promise<$_model.VideoGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.videoGenerationWithOptions(request, runtime);
  }

  /**
   * Translates embedded text (subtitles, promotional text, etc.) in video frames into a target language and erases the original text.
   * 
   * @remarks
   * ## 1. Product Introduction
   * The video translation API translates embedded text (subtitles, promotional text, etc.) in video frames into a target language and erases the original text. This API is applicable to scenarios such as multilingual distribution of e-commerce videos, international social media marketing, and global brand advertising.
   * The API uses an asynchronous call mode: after submitting a translation task, you obtain a `task_id`, then poll the query endpoint for the task status until the task is completed and results are available.
   * ## 2. Common scenarios
   * *   **Cross-border e-commerce video localization**: Translates promotional text in product introduction videos into the target market language to facilitate overseas platform promotion.
   *     
   * *   **International social media marketing**: Localizes text content in video frames with one click for platforms such as TikTok, Instagram, and YouTube, improving comprehension and conversion rates among overseas users.
   *     
   * *   **Global brand advertising**: Automatically generates video versions in the language of the target region, reducing manual production costs.
   *     
   * *   **Training and product documentation**: Translates on-screen text in training courses or product demonstration videos into multiple languages for use by global teams.
   * ## 3. Features
   * | Capability | Identifier | Description |
   * | --- | --- | --- |
   * | Visual translation | `visual` | Translates embedded text (subtitles, promotional text, etc.) in video frames into the target language and erases the original text |
   * ## 4. Developer guide.
   * ### 4.1 Submit a translation task.
   * #### Request
   * `POST /api/v1/video/translation`
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

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.capabilitiesShrink)) {
      body["Capabilities"] = request.capabilitiesShrink;
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
   * Translates embedded text (subtitles, promotional text, etc.) in video frames into a target language and erases the original text.
   * 
   * @remarks
   * ## 1. Product Introduction
   * The video translation API translates embedded text (subtitles, promotional text, etc.) in video frames into a target language and erases the original text. This API is applicable to scenarios such as multilingual distribution of e-commerce videos, international social media marketing, and global brand advertising.
   * The API uses an asynchronous call mode: after submitting a translation task, you obtain a `task_id`, then poll the query endpoint for the task status until the task is completed and results are available.
   * ## 2. Common scenarios
   * *   **Cross-border e-commerce video localization**: Translates promotional text in product introduction videos into the target market language to facilitate overseas platform promotion.
   *     
   * *   **International social media marketing**: Localizes text content in video frames with one click for platforms such as TikTok, Instagram, and YouTube, improving comprehension and conversion rates among overseas users.
   *     
   * *   **Global brand advertising**: Automatically generates video versions in the language of the target region, reducing manual production costs.
   *     
   * *   **Training and product documentation**: Translates on-screen text in training courses or product demonstration videos into multiple languages for use by global teams.
   * ## 3. Features
   * | Capability | Identifier | Description |
   * | --- | --- | --- |
   * | Visual translation | `visual` | Translates embedded text (subtitles, promotional text, etc.) in video frames into the target language and erases the original text |
   * ## 4. Developer guide.
   * ### 4.1 Submit a translation task.
   * #### Request
   * `POST /api/v1/video/translation`
   * 
   * @param request - VideoTranslationRequest
   * @returns VideoTranslationResponse
   */
  async videoTranslation(request: $_model.VideoTranslationRequest): Promise<$_model.VideoTranslationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.videoTranslationWithOptions(request, runtime);
  }

  /**
   * Provides a one-stop AI-powered image processing service for e-commerce sellers. Orchestrates seven atomic capabilities — element detection, intelligent matting, intelligent removal, Image Translation Pro, image expansion, intelligent cropping, and HD upscaling — into an image processing workflow. Upload an image once, select the desired capabilities, and complete multiple image optimizations sequentially in a single call to produce product images that meet listing platform requirements. (Asynchronous).
   * 
   * @remarks
   * # 1. Product Introduction
   * A one-stop AI-powered image processing service for e-commerce sellers. Orchestrates seven atomic capabilities — element detection, intelligent matting, intelligent removal, Image Translation Pro, image expansion, intelligent cropping, and HD upscaling — into an image processing workflow. Upload an image once, select the desired capabilities, and complete multiple image optimizations sequentially in a single call to produce product images that meet listing platform requirements. (Asynchronous).
   * # 2. Common scenarios
   * Applicable to batch optimization of product images for cross-platform listing scenarios. Adapts source product images into main images, SKU images, and detail images required by listing platforms. Supported capabilities include:
   * *   Detecting low-quality images that contain text, watermarks, logos, or overlay patches, and allowing users to filter images that require processing
   *     
   * *   Removing non-compliant elements such as watermarks, logos, overlay patches, and Chinese text from original images
   *     
   * *   Removing the background around the product subject edges
   *     
   * *   Translating text within images into other languages
   *     
   * *   Expanding images to other dimensions (by ratio, size, or other methods) with automatic background completion
   *     
   * *   Cropping images to specified dimensions
   *     
   * *   Upscaling image resolution by a specified factor.
   * # 3. Features
   * Provide a product image URL and use the Ability parameter to select the AI capability combination to invoke (1 = intelligent element detection, 2 = intelligent matting, 3 = intelligent removal, 4 = Image Translation Pro, 5 = image expansion, 6 = intelligent cropping, 7 = HD upscaling). The system executes the selected capabilities sequentially in a preset order. Because intelligent element detection helps users determine whether an image contains certain specified elements, and the presence of elements affects subsequent AI capability selection, an additional input is provided that allows users to either filter images out of or retain images in the subsequent AI processing pipeline.
   * ![ai-pipeline-flowchart.svg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/bddb522a-0795-4b5c-b25d-10e933426367.svg)
   * Each AI capability is described as follows:
   * 1.  **Intelligent element detection:** An element detection capability designed for e-commerce images. Detects text, logos, watermarks, and text-bearing color blocks in both the subject and background of an image, and returns Boolean detection results. Allows users to filter images based on detection results (for example, process only images that contain watermarks). Works in conjunction with subsequent capabilities — first identifies the types of elements that need optimization, then precisely executes removal and other operations.
   *     
   * 2.  **Intelligent matting:** Automatically identifies the product subject in an image and precisely separates the subject from the background. Based on deep learning models, supports accurate segmentation of complex edges such as hair strands and transparent objects. Outputs images with a transparent or white background, supports custom background colors and target dimension cropping, and directly generates product display images that comply with e-commerce platform specifications.
   *     
   * 3.  **Intelligent removal:** Automatically detects and removes non-compliant elements from e-commerce images, including text, specific names (brand/store names), transparent text blocks, and overlay patches. Supports specifying removal of elements in the subject area or non-subject area separately, and also supports precise removal area specification through the Mask parameter for efficient compliance cleanup of large batches of images.
   *     
   * 4.  **Image Translation Pro:** Leverages multimodal foundation model technology to translate text in images into a target language and render it directly at the corresponding position in the original image. Supports more than 100 language pairs. Provides product subject text protection, brand name protection, and translation intervention glossaries to prevent mistranslation of embedded product information. After translation, returns layout information such as text position, font, and color for secondary editing.
   *     
   * 5.  **Intelligent image expansion:** Expands the image canvas using AI generation technology to broaden the image view without cropping the subject. Supports multiple expansion methods: by aspect ratio (1:1, 3:4, 4:3, 9:16, 16:9), by horizontal/vertical scaling ratio (1.0× to 3.0×), or by pixel offset in the up, down, left, and right directions. AI automatically generates naturally transitioning background content.
   *     
   * 6.  **Intelligent cropping:** Intelligently crops images to specified dimensions, automatically identifies the subject area, and precisely preserves core content. Supports custom output width and height (100 to 5000 pixels) to meet the image dimension requirements of different e-commerce platforms and ad placements, ensuring the subject remains prominent and the composition stays balanced after cropping.
   *     
   * 7.  **HD upscaling:** Enhances details and reduces noise while upscaling images. Supports 2× to 4× upscaling. Suitable for improving the clarity of low-resolution product images and optimizing visual presentation. Supports output in PNG, JPG, BMP, and other formats.
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
   * *   HD upscaling | ![R2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/95d29e79-8622-45fb-b284-cd580fe40ea0.jpeg) |.
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
   * Provides a one-stop AI-powered image processing service for e-commerce sellers. Orchestrates seven atomic capabilities — element detection, intelligent matting, intelligent removal, Image Translation Pro, image expansion, intelligent cropping, and HD upscaling — into an image processing workflow. Upload an image once, select the desired capabilities, and complete multiple image optimizations sequentially in a single call to produce product images that meet listing platform requirements. (Asynchronous).
   * 
   * @remarks
   * # 1. Product Introduction
   * A one-stop AI-powered image processing service for e-commerce sellers. Orchestrates seven atomic capabilities — element detection, intelligent matting, intelligent removal, Image Translation Pro, image expansion, intelligent cropping, and HD upscaling — into an image processing workflow. Upload an image once, select the desired capabilities, and complete multiple image optimizations sequentially in a single call to produce product images that meet listing platform requirements. (Asynchronous).
   * # 2. Common scenarios
   * Applicable to batch optimization of product images for cross-platform listing scenarios. Adapts source product images into main images, SKU images, and detail images required by listing platforms. Supported capabilities include:
   * *   Detecting low-quality images that contain text, watermarks, logos, or overlay patches, and allowing users to filter images that require processing
   *     
   * *   Removing non-compliant elements such as watermarks, logos, overlay patches, and Chinese text from original images
   *     
   * *   Removing the background around the product subject edges
   *     
   * *   Translating text within images into other languages
   *     
   * *   Expanding images to other dimensions (by ratio, size, or other methods) with automatic background completion
   *     
   * *   Cropping images to specified dimensions
   *     
   * *   Upscaling image resolution by a specified factor.
   * # 3. Features
   * Provide a product image URL and use the Ability parameter to select the AI capability combination to invoke (1 = intelligent element detection, 2 = intelligent matting, 3 = intelligent removal, 4 = Image Translation Pro, 5 = image expansion, 6 = intelligent cropping, 7 = HD upscaling). The system executes the selected capabilities sequentially in a preset order. Because intelligent element detection helps users determine whether an image contains certain specified elements, and the presence of elements affects subsequent AI capability selection, an additional input is provided that allows users to either filter images out of or retain images in the subsequent AI processing pipeline.
   * ![ai-pipeline-flowchart.svg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/bddb522a-0795-4b5c-b25d-10e933426367.svg)
   * Each AI capability is described as follows:
   * 1.  **Intelligent element detection:** An element detection capability designed for e-commerce images. Detects text, logos, watermarks, and text-bearing color blocks in both the subject and background of an image, and returns Boolean detection results. Allows users to filter images based on detection results (for example, process only images that contain watermarks). Works in conjunction with subsequent capabilities — first identifies the types of elements that need optimization, then precisely executes removal and other operations.
   *     
   * 2.  **Intelligent matting:** Automatically identifies the product subject in an image and precisely separates the subject from the background. Based on deep learning models, supports accurate segmentation of complex edges such as hair strands and transparent objects. Outputs images with a transparent or white background, supports custom background colors and target dimension cropping, and directly generates product display images that comply with e-commerce platform specifications.
   *     
   * 3.  **Intelligent removal:** Automatically detects and removes non-compliant elements from e-commerce images, including text, specific names (brand/store names), transparent text blocks, and overlay patches. Supports specifying removal of elements in the subject area or non-subject area separately, and also supports precise removal area specification through the Mask parameter for efficient compliance cleanup of large batches of images.
   *     
   * 4.  **Image Translation Pro:** Leverages multimodal foundation model technology to translate text in images into a target language and render it directly at the corresponding position in the original image. Supports more than 100 language pairs. Provides product subject text protection, brand name protection, and translation intervention glossaries to prevent mistranslation of embedded product information. After translation, returns layout information such as text position, font, and color for secondary editing.
   *     
   * 5.  **Intelligent image expansion:** Expands the image canvas using AI generation technology to broaden the image view without cropping the subject. Supports multiple expansion methods: by aspect ratio (1:1, 3:4, 4:3, 9:16, 16:9), by horizontal/vertical scaling ratio (1.0× to 3.0×), or by pixel offset in the up, down, left, and right directions. AI automatically generates naturally transitioning background content.
   *     
   * 6.  **Intelligent cropping:** Intelligently crops images to specified dimensions, automatically identifies the subject area, and precisely preserves core content. Supports custom output width and height (100 to 5000 pixels) to meet the image dimension requirements of different e-commerce platforms and ad placements, ensuring the subject remains prominent and the composition stays balanced after cropping.
   *     
   * 7.  **HD upscaling:** Enhances details and reduces noise while upscaling images. Supports 2× to 4× upscaling. Suitable for improving the clarity of low-resolution product images and optimizing visual presentation. Supports output in PNG, JPG, BMP, and other formats.
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
   * *   HD upscaling | ![R2.jpeg](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/NpQlK5jRe9w5jqDv/img/95d29e79-8622-45fb-b284-cd580fe40ea0.jpeg) |.
   * 
   * @param request - VisionFlowRequest
   * @returns VisionFlowResponse
   */
  async visionFlow(request: $_model.VisionFlowRequest): Promise<$_model.VisionFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.visionFlowWithOptions(request, runtime);
  }

}
