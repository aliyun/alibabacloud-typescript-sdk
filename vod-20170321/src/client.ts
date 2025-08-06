// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "vod.cn-shanghai.aliyuncs.com",
      'ap-northeast-2-pop': "vod.aliyuncs.com",
      'ap-southeast-2': "vod.aliyuncs.com",
      'ap-southeast-3': "vod.aliyuncs.com",
      'cn-beijing-finance-1': "vod.aliyuncs.com",
      'cn-beijing-finance-pop': "vod.aliyuncs.com",
      'cn-beijing-gov-1': "vod.aliyuncs.com",
      'cn-beijing-nu16-b01': "vod.aliyuncs.com",
      'cn-chengdu': "vod.aliyuncs.com",
      'cn-edge-1': "vod.aliyuncs.com",
      'cn-fujian': "vod.aliyuncs.com",
      'cn-haidian-cm12-c01': "vod.aliyuncs.com",
      'cn-hangzhou-bj-b01': "vod.aliyuncs.com",
      'cn-hangzhou-finance': "vod.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "vod.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "vod.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "vod.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "vod.aliyuncs.com",
      'cn-hangzhou-test-306': "vod.aliyuncs.com",
      'cn-hongkong-finance-pop': "vod.aliyuncs.com",
      'cn-huhehaote': "vod.aliyuncs.com",
      'cn-huhehaote-nebula-1': "vod.aliyuncs.com",
      'cn-qingdao': "vod.aliyuncs.com",
      'cn-qingdao-nebula': "vod.aliyuncs.com",
      'cn-shanghai-et15-b01': "vod.aliyuncs.com",
      'cn-shanghai-et2-b01': "vod.aliyuncs.com",
      'cn-shanghai-finance-1': "vod.aliyuncs.com",
      'cn-shanghai-inner': "vod.aliyuncs.com",
      'cn-shanghai-internal-test-1': "vod.aliyuncs.com",
      'cn-shenzhen-finance-1': "vod.aliyuncs.com",
      'cn-shenzhen-inner': "vod.aliyuncs.com",
      'cn-shenzhen-st4-d01': "vod.aliyuncs.com",
      'cn-shenzhen-su18-b01': "vod.aliyuncs.com",
      'cn-wuhan': "vod.aliyuncs.com",
      'cn-wulanchabu': "vod.aliyuncs.com",
      'cn-yushanfang': "vod.aliyuncs.com",
      'cn-zhangbei': "vod.aliyuncs.com",
      'cn-zhangbei-na61-b01': "vod.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "vod.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "vod.aliyuncs.com",
      'eu-west-1-oxs': "vod.aliyuncs.com",
      'me-east-1': "vod.aliyuncs.com",
      'rus-west-1-pop': "vod.aliyuncs.com",
      'us-east-1': "vod.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("vod", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds an AI template for automated review and smart thumbnail tasks.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * *   Before you add an AI template for automated review and smart thumbnail tasks, make sure that [automated review](https://ai.aliyun.com/vi/censor) and [smart thumbnail](https://ai.aliyun.com/vi/cover) are enabled.
   * 
   * @param request - AddAITemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAITemplateResponse
   */
  async addAITemplateWithOptions(request: $_model.AddAITemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAITemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAITemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAITemplateResponse>(await this.callApi(params, req, runtime), new $_model.AddAITemplateResponse({}));
  }

  /**
   * Adds an AI template for automated review and smart thumbnail tasks.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * *   Before you add an AI template for automated review and smart thumbnail tasks, make sure that [automated review](https://ai.aliyun.com/vi/censor) and [smart thumbnail](https://ai.aliyun.com/vi/cover) are enabled.
   * 
   * @param request - AddAITemplateRequest
   * @returns AddAITemplateResponse
   */
  async addAITemplate(request: $_model.AddAITemplateRequest): Promise<$_model.AddAITemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAITemplateWithOptions(request, runtime);
  }

  /**
   * Creates a video category. You can call this operation to categorize media assets including audio or video files, images, and short video materials in ApsaraVideo VOD. This simplifies the query and management of media assets.
   * 
   * @remarks
   *   You can create a maximum of 3 levels of categories for audio, video, and image files and 2 levels of categories for short video materials. Each category level can contain a maximum of 100 subcategories. To create categories for audio and video files, set `Type` to `default`. To create categories for short video materials, set `Type` to `material`.
   * *   After you create a category, you can categorize media resources during upload or categorize the uploaded media resources. For more information, see [Manage video categories](https://help.aliyun.com/document_detail/86070.html).
   * 
   * @param request - AddCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCategoryResponse
   */
  async addCategoryWithOptions(request: $_model.AddCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cateName)) {
      query["CateName"] = request.cateName;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCategory",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCategoryResponse>(await this.callApi(params, req, runtime), new $_model.AddCategoryResponse({}));
  }

  /**
   * Creates a video category. You can call this operation to categorize media assets including audio or video files, images, and short video materials in ApsaraVideo VOD. This simplifies the query and management of media assets.
   * 
   * @remarks
   *   You can create a maximum of 3 levels of categories for audio, video, and image files and 2 levels of categories for short video materials. Each category level can contain a maximum of 100 subcategories. To create categories for audio and video files, set `Type` to `default`. To create categories for short video materials, set `Type` to `material`.
   * *   After you create a category, you can categorize media resources during upload or categorize the uploaded media resources. For more information, see [Manage video categories](https://help.aliyun.com/document_detail/86070.html).
   * 
   * @param request - AddCategoryRequest
   * @returns AddCategoryResponse
   */
  async addCategory(request: $_model.AddCategoryRequest): Promise<$_model.AddCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCategoryWithOptions(request, runtime);
  }

  /**
   * 创建模版
   * 
   * @param request - AddCustomTemplateAndGroupConsoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomTemplateAndGroupConsoleResponse
   */
  async addCustomTemplateAndGroupConsoleWithOptions(request: $_model.AddCustomTemplateAndGroupConsoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddCustomTemplateAndGroupConsoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configs)) {
      query["Configs"] = request.configs;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomTemplateAndGroupConsole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCustomTemplateAndGroupConsoleResponse>(await this.callApi(params, req, runtime), new $_model.AddCustomTemplateAndGroupConsoleResponse({}));
  }

  /**
   * 创建模版
   * 
   * @param request - AddCustomTemplateAndGroupConsoleRequest
   * @returns AddCustomTemplateAndGroupConsoleResponse
   */
  async addCustomTemplateAndGroupConsole(request: $_model.AddCustomTemplateAndGroupConsoleRequest): Promise<$_model.AddCustomTemplateAndGroupConsoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCustomTemplateAndGroupConsoleWithOptions(request, runtime);
  }

  /**
   * Creates an online editing project.
   * 
   * @remarks
   *   For more information about the online editing feature, see [Overview](https://help.aliyun.com/document_detail/95482.html).
   * 
   * @param request - AddEditingProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddEditingProjectResponse
   */
  async addEditingProjectWithOptions(request: $_model.AddEditingProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddEditingProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.division)) {
      query["Division"] = request.division;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.timeline)) {
      query["Timeline"] = request.timeline;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddEditingProject",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddEditingProjectResponse>(await this.callApi(params, req, runtime), new $_model.AddEditingProjectResponse({}));
  }

  /**
   * Creates an online editing project.
   * 
   * @remarks
   *   For more information about the online editing feature, see [Overview](https://help.aliyun.com/document_detail/95482.html).
   * 
   * @param request - AddEditingProjectRequest
   * @returns AddEditingProjectResponse
   */
  async addEditingProject(request: $_model.AddEditingProjectRequest): Promise<$_model.AddEditingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addEditingProjectWithOptions(request, runtime);
  }

  /**
   * Adds one or more materials to an editing project.
   * 
   * @param request - AddEditingProjectMaterialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddEditingProjectMaterialsResponse
   */
  async addEditingProjectMaterialsWithOptions(request: $_model.AddEditingProjectMaterialsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddEditingProjectMaterialsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.materialIds)) {
      query["MaterialIds"] = request.materialIds;
    }

    if (!$dara.isNull(request.materialType)) {
      query["MaterialType"] = request.materialType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddEditingProjectMaterials",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddEditingProjectMaterialsResponse>(await this.callApi(params, req, runtime), new $_model.AddEditingProjectMaterialsResponse({}));
  }

  /**
   * Adds one or more materials to an editing project.
   * 
   * @param request - AddEditingProjectMaterialsRequest
   * @returns AddEditingProjectMaterialsResponse
   */
  async addEditingProjectMaterials(request: $_model.AddEditingProjectMaterialsRequest): Promise<$_model.AddEditingProjectMaterialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addEditingProjectMaterialsWithOptions(request, runtime);
  }

  /**
   * 添加过滤条件
   * 
   * @param request - AddFilterConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFilterConfigsResponse
   */
  async addFilterConfigsWithOptions(request: $_model.AddFilterConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFilterConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filterName)) {
      query["FilterName"] = request.filterName;
    }

    if (!$dara.isNull(request.itemConfigs)) {
      query["ItemConfigs"] = request.itemConfigs;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFilterConfigs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFilterConfigsResponse>(await this.callApi(params, req, runtime), new $_model.AddFilterConfigsResponse({}));
  }

  /**
   * 添加过滤条件
   * 
   * @param request - AddFilterConfigsRequest
   * @returns AddFilterConfigsResponse
   */
  async addFilterConfigs(request: $_model.AddFilterConfigsRequest): Promise<$_model.AddFilterConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFilterConfigsWithOptions(request, runtime);
  }

  /**
   * 新增免费license
   * 
   * @param request - AddFreeLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFreeLicenseResponse
   */
  async addFreeLicenseWithOptions(request: $_model.AddFreeLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFreeLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appItemId)) {
      query["AppItemId"] = request.appItemId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appPlatforms)) {
      query["AppPlatforms"] = request.appPlatforms;
    }

    if (!$dara.isNull(request.sdkModels)) {
      query["SdkModels"] = request.sdkModels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFreeLicense",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFreeLicenseResponse>(await this.callApi(params, req, runtime), new $_model.AddFreeLicenseResponse({}));
  }

  /**
   * 新增免费license
   * 
   * @param request - AddFreeLicenseRequest
   * @returns AddFreeLicenseResponse
   */
  async addFreeLicense(request: $_model.AddFreeLicenseRequest): Promise<$_model.AddFreeLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFreeLicenseWithOptions(request, runtime);
  }

  /**
   * 新增license
   * 
   * @param request - AddLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddLicenseResponse
   */
  async addLicenseWithOptions(request: $_model.AddLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appItemId)) {
      query["AppItemId"] = request.appItemId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appPlatforms)) {
      query["AppPlatforms"] = request.appPlatforms;
    }

    if (!$dara.isNull(request.contractNo)) {
      query["ContractNo"] = request.contractNo;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sdkModels)) {
      query["SdkModels"] = request.sdkModels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddLicense",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddLicenseResponse>(await this.callApi(params, req, runtime), new $_model.AddLicenseResponse({}));
  }

  /**
   * 新增license
   * 
   * @param request - AddLicenseRequest
   * @returns AddLicenseResponse
   */
  async addLicense(request: $_model.AddLicenseRequest): Promise<$_model.AddLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addLicenseWithOptions(request, runtime);
  }

  /**
   * 添加媒资序列
   * 
   * @param request - AddMediaSequencesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMediaSequencesResponse
   */
  async addMediaSequencesWithOptions(request: $_model.AddMediaSequencesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddMediaSequencesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.mediaSequences)) {
      query["MediaSequences"] = request.mediaSequences;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.mediaURL)) {
      query["MediaURL"] = request.mediaURL;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMediaSequences",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMediaSequencesResponse>(await this.callApi(params, req, runtime), new $_model.AddMediaSequencesResponse({}));
  }

  /**
   * 添加媒资序列
   * 
   * @param request - AddMediaSequencesRequest
   * @returns AddMediaSequencesResponse
   */
  async addMediaSequences(request: $_model.AddMediaSequencesRequest): Promise<$_model.AddMediaSequencesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addMediaSequencesWithOptions(request, runtime);
  }

  /**
   * 新增存储
   * 
   * @param request - AddStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddStorageResponse
   */
  async addStorageWithOptions(request: $_model.AddStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddStorageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    if (!$dara.isNull(request.storageRedundancyType)) {
      query["StorageRedundancyType"] = request.storageRedundancyType;
    }

    if (!$dara.isNull(request.storageRegion)) {
      query["StorageRegion"] = request.storageRegion;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddStorage",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddStorageResponse>(await this.callApi(params, req, runtime), new $_model.AddStorageResponse({}));
  }

  /**
   * 新增存储
   * 
   * @param request - AddStorageRequest
   * @returns AddStorageResponse
   */
  async addStorage(request: $_model.AddStorageRequest): Promise<$_model.AddStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addStorageWithOptions(request, runtime);
  }

  /**
   * Creates a transcoding template group or adds transcoding templates to a transcoding template group.
   * 
   * @remarks
   *   You cannot perform custom operations on transcoding template groups that are **locked** in the ApsaraVideo VOD console. You can call the [GetTranscodeTemplateGroup](~~GetTranscodeTemplateGroup~~) operation to query the information about a transcoding template group and check whether the transcoding template group is locked based on the value of the Locked parameter. You can call the [UpdateTranscodeTemplateGroup](~~UpdateTranscodeTemplateGroup~~) operation to unlock a transcoding template group if it is locked. Then, you can perform custom operations on the transcoding template group.
   * *   An Object Storage Service (OSS) bucket is required to store files that are used for transcoding. You cannot create a transcoding template group if no bucket is available. To activate a bucket, perform the following operations: Log on to the ApsaraVideo VOD console. In the left-side navigation pane, choose **Configuration Management > Media Management > Storage**. On the **Storage** page, activate the bucket that is allocated by ApsaraVideo VOD.
   * *   You cannot add transcoding templates to the **No Transcoding** template group.
   * *   You can create a maximum of 20 transcoding template groups.
   * *   You can add a maximum of 20 transcoding templates to a transcoding template group.
   * *   If you want to generate a URL for adaptive bitrate streaming, you can add video packaging templates to a transcoding template group. You can add a maximum of 10 video packaging templates to a transcoding template group. If you add more than 10 video packaging templates, URLs of the video transcoded based on the video packaging templates are generated but the URL for adaptive bitrate streaming is not generated.
   * ### QPS limits
   * You can call this operation up to five times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - AddTranscodeTemplateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTranscodeTemplateGroupResponse
   */
  async addTranscodeTemplateGroupWithOptions(request: $_model.AddTranscodeTemplateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTranscodeTemplateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.transcodeTemplateGroupId)) {
      query["TranscodeTemplateGroupId"] = request.transcodeTemplateGroupId;
    }

    if (!$dara.isNull(request.transcodeTemplateList)) {
      query["TranscodeTemplateList"] = request.transcodeTemplateList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTranscodeTemplateGroup",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTranscodeTemplateGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddTranscodeTemplateGroupResponse({}));
  }

  /**
   * Creates a transcoding template group or adds transcoding templates to a transcoding template group.
   * 
   * @remarks
   *   You cannot perform custom operations on transcoding template groups that are **locked** in the ApsaraVideo VOD console. You can call the [GetTranscodeTemplateGroup](~~GetTranscodeTemplateGroup~~) operation to query the information about a transcoding template group and check whether the transcoding template group is locked based on the value of the Locked parameter. You can call the [UpdateTranscodeTemplateGroup](~~UpdateTranscodeTemplateGroup~~) operation to unlock a transcoding template group if it is locked. Then, you can perform custom operations on the transcoding template group.
   * *   An Object Storage Service (OSS) bucket is required to store files that are used for transcoding. You cannot create a transcoding template group if no bucket is available. To activate a bucket, perform the following operations: Log on to the ApsaraVideo VOD console. In the left-side navigation pane, choose **Configuration Management > Media Management > Storage**. On the **Storage** page, activate the bucket that is allocated by ApsaraVideo VOD.
   * *   You cannot add transcoding templates to the **No Transcoding** template group.
   * *   You can create a maximum of 20 transcoding template groups.
   * *   You can add a maximum of 20 transcoding templates to a transcoding template group.
   * *   If you want to generate a URL for adaptive bitrate streaming, you can add video packaging templates to a transcoding template group. You can add a maximum of 10 video packaging templates to a transcoding template group. If you add more than 10 video packaging templates, URLs of the video transcoded based on the video packaging templates are generated but the URL for adaptive bitrate streaming is not generated.
   * ### QPS limits
   * You can call this operation up to five times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - AddTranscodeTemplateGroupRequest
   * @returns AddTranscodeTemplateGroupResponse
   */
  async addTranscodeTemplateGroup(request: $_model.AddTranscodeTemplateGroupRequest): Promise<$_model.AddTranscodeTemplateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTranscodeTemplateGroupWithOptions(request, runtime);
  }

  /**
   * Adds a domain name to accelerate in ApsaraVideo VOD.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   Before you add a domain name to accelerate, you must activate ApsaraVideo VOD and apply for an Internet content provider (ICP) filing for the domain name. For more information about how to activate ApsaraVideo VOD, see [Activate ApsaraVideo VOD](https://help.aliyun.com/document_detail/51512.html).
   * *   If the content on the origin server is not stored on Alibaba Cloud, the content must be reviewed by Alibaba Cloud. The review will be complete by the end of the next business day after you submit an application.
   * *   You can add only one domain name to accelerate in a request. You can add a maximum of 20 accelerated domain names within an Alibaba Cloud account.
   * 
   * @param request - AddVodDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddVodDomainResponse
   */
  async addVodDomainWithOptions(request: $_model.AddVodDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddVodDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkUrl)) {
      query["CheckUrl"] = request.checkUrl;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!$dara.isNull(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddVodDomain",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddVodDomainResponse>(await this.callApi(params, req, runtime), new $_model.AddVodDomainResponse({}));
  }

  /**
   * Adds a domain name to accelerate in ApsaraVideo VOD.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   Before you add a domain name to accelerate, you must activate ApsaraVideo VOD and apply for an Internet content provider (ICP) filing for the domain name. For more information about how to activate ApsaraVideo VOD, see [Activate ApsaraVideo VOD](https://help.aliyun.com/document_detail/51512.html).
   * *   If the content on the origin server is not stored on Alibaba Cloud, the content must be reviewed by Alibaba Cloud. The review will be complete by the end of the next business day after you submit an application.
   * *   You can add only one domain name to accelerate in a request. You can add a maximum of 20 accelerated domain names within an Alibaba Cloud account.
   * 
   * @param request - AddVodDomainRequest
   * @returns AddVodDomainResponse
   */
  async addVodDomain(request: $_model.AddVodDomainRequest): Promise<$_model.AddVodDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addVodDomainWithOptions(request, runtime);
  }

  /**
   * Binds a storage bucket to one or more applications in ApsaraVideo VOD.
   * 
   * @remarks
   * You can call this operation to add a buckets to an ApsaraVideo VOD applications.
   * > You can add only one ApsaraVideo VOD bucket for each application. If you specify an AppId that does not exist or the ID of an application for which an VOD bucket is enabled, an error is returned.
   * 
   * @param request - AddVodStorageForAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddVodStorageForAppResponse
   */
  async addVodStorageForAppWithOptions(request: $_model.AddVodStorageForAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddVodStorageForAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddVodStorageForApp",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddVodStorageForAppResponse>(await this.callApi(params, req, runtime), new $_model.AddVodStorageForAppResponse({}));
  }

  /**
   * Binds a storage bucket to one or more applications in ApsaraVideo VOD.
   * 
   * @remarks
   * You can call this operation to add a buckets to an ApsaraVideo VOD applications.
   * > You can add only one ApsaraVideo VOD bucket for each application. If you specify an AppId that does not exist or the ID of an application for which an VOD bucket is enabled, an error is returned.
   * 
   * @param request - AddVodStorageForAppRequest
   * @returns AddVodStorageForAppResponse
   */
  async addVodStorageForApp(request: $_model.AddVodStorageForAppRequest): Promise<$_model.AddVodStorageForAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addVodStorageForAppWithOptions(request, runtime);
  }

  /**
   * Adds a snapshot template or frame animation template.
   * 
   * @remarks
   *   After you add a snapshot template, you can call the [SubmitSnapshotJob](https://help.aliyun.com/document_detail/72213.html) operation and specify the template ID to submit a snapshot job.
   * *   You can use the HTTP (HTTPS compatible) callback or MNS callback method to receive the [SnapshotComplete](https://help.aliyun.com/document_detail/57337.html) callback. For more information, see [Overview](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @param request - AddVodTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddVodTemplateResponse
   */
  async addVodTemplateWithOptions(request: $_model.AddVodTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddVodTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddVodTemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddVodTemplateResponse>(await this.callApi(params, req, runtime), new $_model.AddVodTemplateResponse({}));
  }

  /**
   * Adds a snapshot template or frame animation template.
   * 
   * @remarks
   *   After you add a snapshot template, you can call the [SubmitSnapshotJob](https://help.aliyun.com/document_detail/72213.html) operation and specify the template ID to submit a snapshot job.
   * *   You can use the HTTP (HTTPS compatible) callback or MNS callback method to receive the [SnapshotComplete](https://help.aliyun.com/document_detail/57337.html) callback. For more information, see [Overview](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @param request - AddVodTemplateRequest
   * @returns AddVodTemplateResponse
   */
  async addVodTemplate(request: $_model.AddVodTemplateRequest): Promise<$_model.AddVodTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addVodTemplateWithOptions(request, runtime);
  }

  /**
   * Creates an image or text watermark. ApsaraVideo VOD allows you to create watermark templates to reuse your parameter configurations such as watermark position, size, font, and color. Each watermark template is assigned a unique ID. This simplifies the progress of creating watermark tasks.
   * 
   * @remarks
   *   You can call this operation to create an `Image` watermark template or a `Text` watermark template. You can use static images in the PNG format or dynamic images in the GIF, APNG, and MOV formats as image watermarks.
   * *   After you call this operation to create a watermark template, you must call the [AddTranscodeTemplateGroup](~~AddTranscodeTemplateGroup~~) or [UpdateTranscodeTemplateGroup](~~UpdateTranscodeTemplateGroup~~) operation to associate the watermark template with a transcoding template group. This way, you can add watermarks to videos during transcoding.
   * *   For more information, see [Video watermarks](https://help.aliyun.com/document_detail/99369.html).
   * 
   * @param request - AddWatermarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddWatermarkResponse
   */
  async addWatermarkWithOptions(request: $_model.AddWatermarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddWatermarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.watermarkConfig)) {
      query["WatermarkConfig"] = request.watermarkConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddWatermark",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddWatermarkResponse>(await this.callApi(params, req, runtime), new $_model.AddWatermarkResponse({}));
  }

  /**
   * Creates an image or text watermark. ApsaraVideo VOD allows you to create watermark templates to reuse your parameter configurations such as watermark position, size, font, and color. Each watermark template is assigned a unique ID. This simplifies the progress of creating watermark tasks.
   * 
   * @remarks
   *   You can call this operation to create an `Image` watermark template or a `Text` watermark template. You can use static images in the PNG format or dynamic images in the GIF, APNG, and MOV formats as image watermarks.
   * *   After you call this operation to create a watermark template, you must call the [AddTranscodeTemplateGroup](~~AddTranscodeTemplateGroup~~) or [UpdateTranscodeTemplateGroup](~~UpdateTranscodeTemplateGroup~~) operation to associate the watermark template with a transcoding template group. This way, you can add watermarks to videos during transcoding.
   * *   For more information, see [Video watermarks](https://help.aliyun.com/document_detail/99369.html).
   * 
   * @param request - AddWatermarkRequest
   * @returns AddWatermarkResponse
   */
  async addWatermark(request: $_model.AddWatermarkRequest): Promise<$_model.AddWatermarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addWatermarkWithOptions(request, runtime);
  }

  /**
   * 添加水印
   * 
   * @param request - AddWatermarkConsoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddWatermarkConsoleResponse
   */
  async addWatermarkConsoleWithOptions(request: $_model.AddWatermarkConsoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddWatermarkConsoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.active)) {
      query["Active"] = request.active;
    }

    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.height)) {
      query["Height"] = request.height;
    }

    if (!$dara.isNull(request.horizontalOffet)) {
      query["HorizontalOffet"] = request.horizontalOffet;
    }

    if (!$dara.isNull(request.horizontalOffset)) {
      query["HorizontalOffset"] = request.horizontalOffset;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.object)) {
      query["Object"] = request.object;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.position)) {
      query["Position"] = request.position;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.screenMode)) {
      query["ScreenMode"] = request.screenMode;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.verticalOffset)) {
      query["VerticalOffset"] = request.verticalOffset;
    }

    if (!$dara.isNull(request.videoHeight)) {
      query["VideoHeight"] = request.videoHeight;
    }

    if (!$dara.isNull(request.videoWidth)) {
      query["VideoWidth"] = request.videoWidth;
    }

    if (!$dara.isNull(request.watermarkConfig)) {
      query["WatermarkConfig"] = request.watermarkConfig;
    }

    if (!$dara.isNull(request.width)) {
      query["Width"] = request.width;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddWatermarkConsole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddWatermarkConsoleResponse>(await this.callApi(params, req, runtime), new $_model.AddWatermarkConsoleResponse({}));
  }

  /**
   * 添加水印
   * 
   * @param request - AddWatermarkConsoleRequest
   * @returns AddWatermarkConsoleResponse
   */
  async addWatermarkConsole(request: $_model.AddWatermarkConsoleRequest): Promise<$_model.AddWatermarkConsoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addWatermarkConsoleWithOptions(request, runtime);
  }

  /**
   * 添加工作流
   * 
   * @param request - AddWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddWorkflowResponse
   */
  async addWorkflowWithOptions(request: $_model.AddWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddWorkflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionList)) {
      query["ActionList"] = request.actionList;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.bizVersion)) {
      query["BizVersion"] = request.bizVersion;
    }

    if (!$dara.isNull(request.callbackConfig)) {
      query["CallbackConfig"] = request.callbackConfig;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddWorkflow",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.AddWorkflowResponse({}));
  }

  /**
   * 添加工作流
   * 
   * @param request - AddWorkflowRequest
   * @returns AddWorkflowResponse
   */
  async addWorkflow(request: $_model.AddWorkflowRequest): Promise<$_model.AddWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addWorkflowWithOptions(request, runtime);
  }

  /**
   * 为用户绑定点播生产账号ID
   * 
   * @param request - AssignProductAccountIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignProductAccountIdResponse
   */
  async assignProductAccountIdWithOptions(request: $_model.AssignProductAccountIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssignProductAccountIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.storageRegion)) {
      query["StorageRegion"] = request.storageRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignProductAccountId",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssignProductAccountIdResponse>(await this.callApi(params, req, runtime), new $_model.AssignProductAccountIdResponse({}));
  }

  /**
   * 为用户绑定点播生产账号ID
   * 
   * @param request - AssignProductAccountIdRequest
   * @returns AssignProductAccountIdResponse
   */
  async assignProductAccountId(request: $_model.AssignProductAccountIdRequest): Promise<$_model.AssignProductAccountIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignProductAccountIdWithOptions(request, runtime);
  }

  /**
   * @param request - AssumeExperienceRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssumeExperienceRoleResponse
   */
  async assumeExperienceRoleWithOptions(request: $_model.AssumeExperienceRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssumeExperienceRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssumeExperienceRole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssumeExperienceRoleResponse>(await this.callApi(params, req, runtime), new $_model.AssumeExperienceRoleResponse({}));
  }

  /**
   * @param request - AssumeExperienceRoleRequest
   * @returns AssumeExperienceRoleResponse
   */
  async assumeExperienceRole(request: $_model.AssumeExperienceRoleRequest): Promise<$_model.AssumeExperienceRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assumeExperienceRoleWithOptions(request, runtime);
  }

  /**
   * @param request - AssumeOssRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssumeOssRoleResponse
   */
  async assumeOssRoleWithOptions(request: $_model.AssumeOssRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssumeOssRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.authInfo)) {
      query["AuthInfo"] = request.authInfo;
    }

    if (!$dara.isNull(request.authTimestamp)) {
      query["AuthTimestamp"] = request.authTimestamp;
    }

    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.deviceModel)) {
      query["DeviceModel"] = request.deviceModel;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.terminalType)) {
      query["TerminalType"] = request.terminalType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssumeOssRole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssumeOssRoleResponse>(await this.callApi(params, req, runtime), new $_model.AssumeOssRoleResponse({}));
  }

  /**
   * @param request - AssumeOssRoleRequest
   * @returns AssumeOssRoleResponse
   */
  async assumeOssRole(request: $_model.AssumeOssRoleRequest): Promise<$_model.AssumeOssRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assumeOssRoleWithOptions(request, runtime);
  }

  /**
   * @param request - AssumeSlsRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssumeSlsRoleResponse
   */
  async assumeSlsRoleWithOptions(request: $_model.AssumeSlsRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssumeSlsRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.authInfo)) {
      query["AuthInfo"] = request.authInfo;
    }

    if (!$dara.isNull(request.authTimestamp)) {
      query["AuthTimestamp"] = request.authTimestamp;
    }

    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.deviceModel)) {
      query["DeviceModel"] = request.deviceModel;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.terminalType)) {
      query["TerminalType"] = request.terminalType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssumeSlsRole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssumeSlsRoleResponse>(await this.callApi(params, req, runtime), new $_model.AssumeSlsRoleResponse({}));
  }

  /**
   * @param request - AssumeSlsRoleRequest
   * @returns AssumeSlsRoleResponse
   */
  async assumeSlsRole(request: $_model.AssumeSlsRoleRequest): Promise<$_model.AssumeSlsRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assumeSlsRoleWithOptions(request, runtime);
  }

  /**
   * @param request - AssumeSlsRoleV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssumeSlsRoleV2Response
   */
  async assumeSlsRoleV2WithOptions(request: $_model.AssumeSlsRoleV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.AssumeSlsRoleV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.authInfo)) {
      query["AuthInfo"] = request.authInfo;
    }

    if (!$dara.isNull(request.authTimestamp)) {
      query["AuthTimestamp"] = request.authTimestamp;
    }

    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.deviceModel)) {
      query["DeviceModel"] = request.deviceModel;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.terminalType)) {
      query["TerminalType"] = request.terminalType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssumeSlsRoleV2",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssumeSlsRoleV2Response>(await this.callApi(params, req, runtime), new $_model.AssumeSlsRoleV2Response({}));
  }

  /**
   * @param request - AssumeSlsRoleV2Request
   * @returns AssumeSlsRoleV2Response
   */
  async assumeSlsRoleV2(request: $_model.AssumeSlsRoleV2Request): Promise<$_model.AssumeSlsRoleV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assumeSlsRoleV2WithOptions(request, runtime);
  }

  /**
   * Grants a RAM user or RAM role permissions to access ApsaraVideo VOD applications.
   * 
   * @remarks
   * > You can grant a RAM user or RAM role permissions to access up to 10 applications.
   * 
   * @param request - AttachAppPolicyToIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachAppPolicyToIdentityResponse
   */
  async attachAppPolicyToIdentityWithOptions(request: $_model.AttachAppPolicyToIdentityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachAppPolicyToIdentityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.identityName)) {
      query["IdentityName"] = request.identityName;
    }

    if (!$dara.isNull(request.identityType)) {
      query["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.policyNames)) {
      query["PolicyNames"] = request.policyNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachAppPolicyToIdentity",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachAppPolicyToIdentityResponse>(await this.callApi(params, req, runtime), new $_model.AttachAppPolicyToIdentityResponse({}));
  }

  /**
   * Grants a RAM user or RAM role permissions to access ApsaraVideo VOD applications.
   * 
   * @remarks
   * > You can grant a RAM user or RAM role permissions to access up to 10 applications.
   * 
   * @param request - AttachAppPolicyToIdentityRequest
   * @returns AttachAppPolicyToIdentityResponse
   */
  async attachAppPolicyToIdentity(request: $_model.AttachAppPolicyToIdentityRequest): Promise<$_model.AttachAppPolicyToIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachAppPolicyToIdentityWithOptions(request, runtime);
  }

  /**
   * Obtains the basic information and source file information of multiple media assets.
   * 
   * @remarks
   *   You can specify up to 20 audio or video file IDs in each request.
   * *   After a media file is uploaded, ApsaraVideo VOD processes the source file. Then, information about the media file is asynchronously generated. You can configure notifications for the [VideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event and call this operation to query information about a media file after you receive notifications for the [VideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event. For more information, see [Overview](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @param request - BatchGetMediaInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetMediaInfosResponse
   */
  async batchGetMediaInfosWithOptions(request: $_model.BatchGetMediaInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetMediaInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetMediaInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchGetMediaInfosResponse>(await this.callApi(params, req, runtime), new $_model.BatchGetMediaInfosResponse({}));
  }

  /**
   * Obtains the basic information and source file information of multiple media assets.
   * 
   * @remarks
   *   You can specify up to 20 audio or video file IDs in each request.
   * *   After a media file is uploaded, ApsaraVideo VOD processes the source file. Then, information about the media file is asynchronously generated. You can configure notifications for the [VideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event and call this operation to query information about a media file after you receive notifications for the [VideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event. For more information, see [Overview](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @param request - BatchGetMediaInfosRequest
   * @returns BatchGetMediaInfosResponse
   */
  async batchGetMediaInfos(request: $_model.BatchGetMediaInfosRequest): Promise<$_model.BatchGetMediaInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetMediaInfosWithOptions(request, runtime);
  }

  /**
   * Configures one or more domain names for CDN.
   * 
   * @remarks
   * > This operation is available only in the **China (Shanghai)** region.
   * 
   * @param request - BatchSetVodDomainConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSetVodDomainConfigsResponse
   */
  async batchSetVodDomainConfigsWithOptions(request: $_model.BatchSetVodDomainConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchSetVodDomainConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.functions)) {
      query["Functions"] = request.functions;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchSetVodDomainConfigs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchSetVodDomainConfigsResponse>(await this.callApi(params, req, runtime), new $_model.BatchSetVodDomainConfigsResponse({}));
  }

  /**
   * Configures one or more domain names for CDN.
   * 
   * @remarks
   * > This operation is available only in the **China (Shanghai)** region.
   * 
   * @param request - BatchSetVodDomainConfigsRequest
   * @returns BatchSetVodDomainConfigsResponse
   */
  async batchSetVodDomainConfigs(request: $_model.BatchSetVodDomainConfigsRequest): Promise<$_model.BatchSetVodDomainConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchSetVodDomainConfigsWithOptions(request, runtime);
  }

  /**
   * Enables accelerated domain names that are in the disabled state.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   If the domain name that you want to enable is invalid or your Alibaba Cloud account has overdue payments, you cannot call this operation to enable the domain name.
   * 
   * @param request - BatchStartVodDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchStartVodDomainResponse
   */
  async batchStartVodDomainWithOptions(request: $_model.BatchStartVodDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchStartVodDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchStartVodDomain",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchStartVodDomainResponse>(await this.callApi(params, req, runtime), new $_model.BatchStartVodDomainResponse({}));
  }

  /**
   * Enables accelerated domain names that are in the disabled state.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   If the domain name that you want to enable is invalid or your Alibaba Cloud account has overdue payments, you cannot call this operation to enable the domain name.
   * 
   * @param request - BatchStartVodDomainRequest
   * @returns BatchStartVodDomainResponse
   */
  async batchStartVodDomain(request: $_model.BatchStartVodDomainRequest): Promise<$_model.BatchStartVodDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchStartVodDomainWithOptions(request, runtime);
  }

  /**
   * Disables accelerated domain names.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   After you disable an accelerated domain name, the information about the domain name is retained. The system automatically reroutes all the requests that are destined for the domain name to the origin server.
   * 
   * @param request - BatchStopVodDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchStopVodDomainResponse
   */
  async batchStopVodDomainWithOptions(request: $_model.BatchStopVodDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchStopVodDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchStopVodDomain",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchStopVodDomainResponse>(await this.callApi(params, req, runtime), new $_model.BatchStopVodDomainResponse({}));
  }

  /**
   * Disables accelerated domain names.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   After you disable an accelerated domain name, the information about the domain name is retained. The system automatically reroutes all the requests that are destined for the domain name to the origin server.
   * 
   * @param request - BatchStopVodDomainRequest
   * @returns BatchStopVodDomainResponse
   */
  async batchStopVodDomain(request: $_model.BatchStopVodDomainRequest): Promise<$_model.BatchStopVodDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchStopVodDomainWithOptions(request, runtime);
  }

  /**
   * 屏蔽缓存
   * 
   * @param request - BlockVodObjectCachesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BlockVodObjectCachesResponse
   */
  async blockVodObjectCachesWithOptions(request: $_model.BlockVodObjectCachesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BlockVodObjectCachesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxage)) {
      query["Maxage"] = request.maxage;
    }

    if (!$dara.isNull(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BlockVodObjectCaches",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BlockVodObjectCachesResponse>(await this.callApi(params, req, runtime), new $_model.BlockVodObjectCachesResponse({}));
  }

  /**
   * 屏蔽缓存
   * 
   * @param request - BlockVodObjectCachesRequest
   * @returns BlockVodObjectCachesResponse
   */
  async blockVodObjectCaches(request: $_model.BlockVodObjectCachesRequest): Promise<$_model.BlockVodObjectCachesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.blockVodObjectCachesWithOptions(request, runtime);
  }

  /**
   * 取消系统存储冗余类型转换任务
   * 
   * @param request - CancelBucketRedundancyTransitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelBucketRedundancyTransitionResponse
   */
  async cancelBucketRedundancyTransitionWithOptions(request: $_model.CancelBucketRedundancyTransitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelBucketRedundancyTransitionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelBucketRedundancyTransition",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelBucketRedundancyTransitionResponse>(await this.callApi(params, req, runtime), new $_model.CancelBucketRedundancyTransitionResponse({}));
  }

  /**
   * 取消系统存储冗余类型转换任务
   * 
   * @param request - CancelBucketRedundancyTransitionRequest
   * @returns CancelBucketRedundancyTransitionResponse
   */
  async cancelBucketRedundancyTransition(request: $_model.CancelBucketRedundancyTransitionRequest): Promise<$_model.CancelBucketRedundancyTransitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelBucketRedundancyTransitionWithOptions(request, runtime);
  }

  /**
   * 取消媒资导出任务
   * 
   * @param request - CancelMediaExportJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelMediaExportJobsResponse
   */
  async cancelMediaExportJobsWithOptions(request: $_model.CancelMediaExportJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelMediaExportJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelMediaExportJobs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelMediaExportJobsResponse>(await this.callApi(params, req, runtime), new $_model.CancelMediaExportJobsResponse({}));
  }

  /**
   * 取消媒资导出任务
   * 
   * @param request - CancelMediaExportJobsRequest
   * @returns CancelMediaExportJobsResponse
   */
  async cancelMediaExportJobs(request: $_model.CancelMediaExportJobsRequest): Promise<$_model.CancelMediaExportJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelMediaExportJobsWithOptions(request, runtime);
  }

  /**
   * Cancels URL-based upload jobs in the queue.
   * 
   * @remarks
   *   You can cancel only URL-based upload jobs in the **Pending** state. You can query the status of a URL-based upload job by calling the [GetURLUploadInfos](https://help.aliyun.com/document_detail/106830.html) operation.
   * *   You cannot cancel an upload job that already starts.
   * *   You must specify either JobIds or UploadUrls. If you specify both parameters, only JobIds takes effect.
   * 
   * @param request - CancelUrlUploadJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelUrlUploadJobsResponse
   */
  async cancelUrlUploadJobsWithOptions(request: $_model.CancelUrlUploadJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelUrlUploadJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!$dara.isNull(request.uploadUrls)) {
      query["UploadUrls"] = request.uploadUrls;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelUrlUploadJobs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelUrlUploadJobsResponse>(await this.callApi(params, req, runtime), new $_model.CancelUrlUploadJobsResponse({}));
  }

  /**
   * Cancels URL-based upload jobs in the queue.
   * 
   * @remarks
   *   You can cancel only URL-based upload jobs in the **Pending** state. You can query the status of a URL-based upload job by calling the [GetURLUploadInfos](https://help.aliyun.com/document_detail/106830.html) operation.
   * *   You cannot cancel an upload job that already starts.
   * *   You must specify either JobIds or UploadUrls. If you specify both parameters, only JobIds takes effect.
   * 
   * @param request - CancelUrlUploadJobsRequest
   * @returns CancelUrlUploadJobsResponse
   */
  async cancelUrlUploadJobs(request: $_model.CancelUrlUploadJobsRequest): Promise<$_model.CancelUrlUploadJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelUrlUploadJobsWithOptions(request, runtime);
  }

  /**
   * Transfers a resource to a specified resource group.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Transfers a resource to a specified resource group.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * @param request - CheckLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckLicenseResponse
   */
  async checkLicenseWithOptions(request: $_model.CheckLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.nonce)) {
      query["Nonce"] = request.nonce;
    }

    if (!$dara.isNull(request.sign)) {
      query["Sign"] = request.sign;
    }

    if (!$dara.isNull(request.time)) {
      query["Time"] = request.time;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckLicense",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckLicenseResponse>(await this.callApi(params, req, runtime), new $_model.CheckLicenseResponse({}));
  }

  /**
   * @param request - CheckLicenseRequest
   * @returns CheckLicenseResponse
   */
  async checkLicense(request: $_model.CheckLicenseRequest): Promise<$_model.CheckLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkLicenseWithOptions(request, runtime);
  }

  /**
   * 检查用户是否授权 AliyunVODDefaultRole 系统角色
   * 
   * @param request - CheckVodDefaultRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckVodDefaultRoleResponse
   */
  async checkVodDefaultRoleWithOptions(request: $_model.CheckVodDefaultRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckVodDefaultRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckVodDefaultRole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckVodDefaultRoleResponse>(await this.callApi(params, req, runtime), new $_model.CheckVodDefaultRoleResponse({}));
  }

  /**
   * 检查用户是否授权 AliyunVODDefaultRole 系统角色
   * 
   * @param request - CheckVodDefaultRoleRequest
   * @returns CheckVodDefaultRoleResponse
   */
  async checkVodDefaultRole(request: $_model.CheckVodDefaultRoleRequest): Promise<$_model.CheckVodDefaultRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkVodDefaultRoleWithOptions(request, runtime);
  }

  /**
   * app开通
   * 
   * @param request - ControlVodAppServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ControlVodAppServiceResponse
   */
  async controlVodAppServiceWithOptions(request: $_model.ControlVodAppServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ControlVodAppServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ControlVodAppService",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ControlVodAppServiceResponse>(await this.callApi(params, req, runtime), new $_model.ControlVodAppServiceResponse({}));
  }

  /**
   * app开通
   * 
   * @param request - ControlVodAppServiceRequest
   * @returns ControlVodAppServiceResponse
   */
  async controlVodAppService(request: $_model.ControlVodAppServiceRequest): Promise<$_model.ControlVodAppServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.controlVodAppServiceWithOptions(request, runtime);
  }

  /**
   * Creates an application.
   * 
   * @remarks
   * You can create up to 10 applications within an Alibaba Cloud account. For more information, see [Multi-application service](https://help.aliyun.com/document_detail/113600.html).
   * ### QPS limits
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits on API operations in ApsaraVideo VOD](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - CreateAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppInfoResponse
   */
  async createAppInfoWithOptions(request: $_model.CreateAppInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppInfoResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppInfoResponse({}));
  }

  /**
   * Creates an application.
   * 
   * @remarks
   * You can create up to 10 applications within an Alibaba Cloud account. For more information, see [Multi-application service](https://help.aliyun.com/document_detail/113600.html).
   * ### QPS limits
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits on API operations in ApsaraVideo VOD](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - CreateAppInfoRequest
   * @returns CreateAppInfoResponse
   */
  async createAppInfo(request: $_model.CreateAppInfoRequest): Promise<$_model.CreateAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppInfoWithOptions(request, runtime);
  }

  /**
   * 创建app策略
   * 
   * @param request - CreateAppPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppPolicyResponse
   */
  async createAppPolicyWithOptions(request: $_model.CreateAppPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyValue)) {
      query["PolicyValue"] = request.policyValue;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppPolicy",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppPolicyResponse({}));
  }

  /**
   * 创建app策略
   * 
   * @param request - CreateAppPolicyRequest
   * @returns CreateAppPolicyResponse
   */
  async createAppPolicy(request: $_model.CreateAppPolicyRequest): Promise<$_model.CreateAppPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppPolicyWithOptions(request, runtime);
  }

  /**
   * Performs manual review on media files, such as audio and video files.
   * 
   * @param request - CreateAuditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAuditResponse
   */
  async createAuditWithOptions(request: $_model.CreateAuditRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAuditResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditContent)) {
      query["AuditContent"] = request.auditContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAudit",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAuditResponse>(await this.callApi(params, req, runtime), new $_model.CreateAuditResponse({}));
  }

  /**
   * Performs manual review on media files, such as audio and video files.
   * 
   * @param request - CreateAuditRequest
   * @returns CreateAuditResponse
   */
  async createAudit(request: $_model.CreateAuditRequest): Promise<$_model.CreateAuditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAuditWithOptions(request, runtime);
  }

  /**
   * 创建DNA
   * 
   * @param request - CreateDNADBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDNADBResponse
   */
  async createDNADBWithOptions(request: $_model.CreateDNADBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDNADBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBDescription)) {
      query["DBDescription"] = request.DBDescription;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.DBRegion)) {
      query["DBRegion"] = request.DBRegion;
    }

    if (!$dara.isNull(request.DBType)) {
      query["DBType"] = request.DBType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDNADB",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDNADBResponse>(await this.callApi(params, req, runtime), new $_model.CreateDNADBResponse({}));
  }

  /**
   * 创建DNA
   * 
   * @param request - CreateDNADBRequest
   * @returns CreateDNADBResponse
   */
  async createDNADB(request: $_model.CreateDNADBRequest): Promise<$_model.CreateDNADBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDNADBWithOptions(request, runtime);
  }

  /**
   * 创建智能策略
   * 
   * @param request - CreateIntelligentStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIntelligentStrategyResponse
   */
  async createIntelligentStrategyWithOptions(request: $_model.CreateIntelligentStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIntelligentStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conditions)) {
      query["Conditions"] = request.conditions;
    }

    if (!$dara.isNull(request.executeParams)) {
      query["ExecuteParams"] = request.executeParams;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIntelligentStrategy",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIntelligentStrategyResponse>(await this.callApi(params, req, runtime), new $_model.CreateIntelligentStrategyResponse({}));
  }

  /**
   * 创建智能策略
   * 
   * @param request - CreateIntelligentStrategyRequest
   * @returns CreateIntelligentStrategyResponse
   */
  async createIntelligentStrategy(request: $_model.CreateIntelligentStrategyRequest): Promise<$_model.CreateIntelligentStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIntelligentStrategyWithOptions(request, runtime);
  }

  /**
   * 创建kmsKey
   * 
   * @param request - CreateKMSServiceKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKMSServiceKeyResponse
   */
  async createKMSServiceKeyWithOptions(request: $_model.CreateKMSServiceKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKMSServiceKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.kmsRegionId)) {
      query["KmsRegionId"] = request.kmsRegionId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKMSServiceKey",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKMSServiceKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateKMSServiceKeyResponse({}));
  }

  /**
   * 创建kmsKey
   * 
   * @param request - CreateKMSServiceKeyRequest
   * @returns CreateKMSServiceKeyResponse
   */
  async createKMSServiceKey(request: $_model.CreateKMSServiceKeyRequest): Promise<$_model.CreateKMSServiceKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createKMSServiceKeyWithOptions(request, runtime);
  }

  /**
   * 创建license
   * 
   * @param request - CreateLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLicenseResponse
   */
  async createLicenseWithOptions(request: $_model.CreateLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.contractNo)) {
      query["ContractNo"] = request.contractNo;
    }

    if (!$dara.isNull(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.expiredOn)) {
      query["ExpiredOn"] = request.expiredOn;
    }

    if (!$dara.isNull(request.extraInfo)) {
      query["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.operator)) {
      query["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLicense",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLicenseResponse>(await this.callApi(params, req, runtime), new $_model.CreateLicenseResponse({}));
  }

  /**
   * 创建license
   * 
   * @param request - CreateLicenseRequest
   * @returns CreateLicenseResponse
   */
  async createLicense(request: $_model.CreateLicenseRequest): Promise<$_model.CreateLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLicenseWithOptions(request, runtime);
  }

  /**
   * 创建DNA
   * 
   * @param request - CreateMediaDNALibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMediaDNALibResponse
   */
  async createMediaDNALibWithOptions(request: $_model.CreateMediaDNALibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMediaDNALibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.libRegion)) {
      query["LibRegion"] = request.libRegion;
    }

    if (!$dara.isNull(request.modelType)) {
      query["ModelType"] = request.modelType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMediaDNALib",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMediaDNALibResponse>(await this.callApi(params, req, runtime), new $_model.CreateMediaDNALibResponse({}));
  }

  /**
   * 创建DNA
   * 
   * @param request - CreateMediaDNALibRequest
   * @returns CreateMediaDNALibResponse
   */
  async createMediaDNALib(request: $_model.CreateMediaDNALibRequest): Promise<$_model.CreateMediaDNALibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMediaDNALibWithOptions(request, runtime);
  }

  /**
   * 创建生命周期
   * 
   * @param request - CreateMediaLifecycleRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMediaLifecycleRuleResponse
   */
  async createMediaLifecycleRuleWithOptions(request: $_model.CreateMediaLifecycleRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMediaLifecycleRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.ruleContent)) {
      query["RuleContent"] = request.ruleContent;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMediaLifecycleRule",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMediaLifecycleRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateMediaLifecycleRuleResponse({}));
  }

  /**
   * 创建生命周期
   * 
   * @param request - CreateMediaLifecycleRuleRequest
   * @returns CreateMediaLifecycleRuleResponse
   */
  async createMediaLifecycleRule(request: $_model.CreateMediaLifecycleRuleRequest): Promise<$_model.CreateMediaLifecycleRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMediaLifecycleRuleWithOptions(request, runtime);
  }

  /**
   * 组合下单
   * 
   * @param request - CreateMultiOrderForLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMultiOrderForLicenseResponse
   */
  async createMultiOrderForLicenseWithOptions(request: $_model.CreateMultiOrderForLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMultiOrderForLicenseResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMultiOrderForLicense",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMultiOrderForLicenseResponse>(await this.callApi(params, req, runtime), new $_model.CreateMultiOrderForLicenseResponse({}));
  }

  /**
   * 组合下单
   * 
   * @param request - CreateMultiOrderForLicenseRequest
   * @returns CreateMultiOrderForLicenseResponse
   */
  async createMultiOrderForLicense(request: $_model.CreateMultiOrderForLicenseRequest): Promise<$_model.CreateMultiOrderForLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMultiOrderForLicenseWithOptions(request, runtime);
  }

  /**
   * 下单
   * 
   * @param request - CreateOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrderResponse
   */
  async createOrderWithOptions(request: $_model.CreateOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrder",
      version: "2017-03-21",
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
   * 下单
   * 
   * @param request - CreateOrderRequest
   * @returns CreateOrderResponse
   */
  async createOrder(request: $_model.CreateOrderRequest): Promise<$_model.CreateOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrderWithOptions(request, runtime);
  }

  /**
   * 创建订单
   * 
   * @param request - CreateOrderForLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrderForLicenseResponse
   */
  async createOrderForLicenseWithOptions(request: $_model.CreateOrderForLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrderForLicenseResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrderForLicense",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrderForLicenseResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrderForLicenseResponse({}));
  }

  /**
   * 创建订单
   * 
   * @param request - CreateOrderForLicenseRequest
   * @returns CreateOrderForLicenseResponse
   */
  async createOrderForLicense(request: $_model.CreateOrderForLicenseRequest): Promise<$_model.CreateOrderForLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrderForLicenseWithOptions(request, runtime);
  }

  /**
   * Obtains an upload URL and an upload credential for an auxiliary media asset such as a watermark image, subtitle file, or material and generates the media ID. ApsaraVideo VOD issues upload URLs and credentials to perform authorization and ensure security. This prevents unauthorized users from uploading media files. ApsaraVideo VOD generates media IDs together with upload URLs and credentials. Media IDs are used in lifecycle management and media processing.
   * 
   * @remarks
   *   **Make sure that you understand the billing method and prices of ApsaraVideo VOD before you call this operation. You are charged storage fees after you upload media files to ApsaraVideo VOD. For more information, see [Billing of media asset storage](~~188308#section_e97_xrp_mzz~~). If you have activated the acceleration service, you are charged acceleration fees when you upload media files to ApsaraVideo VOD. For more information, see [Billing of acceleration traffic](~~188310#section_sta_zm2_tsv~~).**
   * *   You can call this operation only to obtain the upload URLs and credentials for media files and create media assets in ApsaraVideo VOD. You cannot call this operation to upload media files. For more information about how to upload media files by calling API operations, see [Upload media files by calling API operations](https://help.aliyun.com/document_detail/476208.html).
   * *   If the upload credential expires after 3,000 seconds, you can call the CreateUploadAttachedMedia operation again to obtain a new upload URL and a new upload credential.
   * *   You can configure a callback to receive an [AttachedMediaUploadComplete](https://help.aliyun.com/document_detail/103250.html) event notification to determine whether the upload is successful.
   * *   You must obtain a URL and a credential before you upload a media file to ApsaraVideo VOD. ApsaraVideo VOD supports multiple upload methods. Each method has different requirements on upload URLs and credentials. For more information, see [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
   * 
   * @param request - CreateUploadAttachedMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUploadAttachedMediaResponse
   */
  async createUploadAttachedMediaWithOptions(request: $_model.CreateUploadAttachedMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUploadAttachedMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.cateIds)) {
      query["CateIds"] = request.cateIds;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileSize)) {
      query["FileSize"] = request.fileSize;
    }

    if (!$dara.isNull(request.mediaExt)) {
      query["MediaExt"] = request.mediaExt;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUploadAttachedMedia",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUploadAttachedMediaResponse>(await this.callApi(params, req, runtime), new $_model.CreateUploadAttachedMediaResponse({}));
  }

  /**
   * Obtains an upload URL and an upload credential for an auxiliary media asset such as a watermark image, subtitle file, or material and generates the media ID. ApsaraVideo VOD issues upload URLs and credentials to perform authorization and ensure security. This prevents unauthorized users from uploading media files. ApsaraVideo VOD generates media IDs together with upload URLs and credentials. Media IDs are used in lifecycle management and media processing.
   * 
   * @remarks
   *   **Make sure that you understand the billing method and prices of ApsaraVideo VOD before you call this operation. You are charged storage fees after you upload media files to ApsaraVideo VOD. For more information, see [Billing of media asset storage](~~188308#section_e97_xrp_mzz~~). If you have activated the acceleration service, you are charged acceleration fees when you upload media files to ApsaraVideo VOD. For more information, see [Billing of acceleration traffic](~~188310#section_sta_zm2_tsv~~).**
   * *   You can call this operation only to obtain the upload URLs and credentials for media files and create media assets in ApsaraVideo VOD. You cannot call this operation to upload media files. For more information about how to upload media files by calling API operations, see [Upload media files by calling API operations](https://help.aliyun.com/document_detail/476208.html).
   * *   If the upload credential expires after 3,000 seconds, you can call the CreateUploadAttachedMedia operation again to obtain a new upload URL and a new upload credential.
   * *   You can configure a callback to receive an [AttachedMediaUploadComplete](https://help.aliyun.com/document_detail/103250.html) event notification to determine whether the upload is successful.
   * *   You must obtain a URL and a credential before you upload a media file to ApsaraVideo VOD. ApsaraVideo VOD supports multiple upload methods. Each method has different requirements on upload URLs and credentials. For more information, see [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
   * 
   * @param request - CreateUploadAttachedMediaRequest
   * @returns CreateUploadAttachedMediaResponse
   */
  async createUploadAttachedMedia(request: $_model.CreateUploadAttachedMediaRequest): Promise<$_model.CreateUploadAttachedMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUploadAttachedMediaWithOptions(request, runtime);
  }

  /**
   * Queries a URL and a credential for uploading an image.
   * 
   * @remarks
   *   **Make sure that you understand the billing method and price of ApsaraVideo VOD before you call this operation. You are charged storage fees after you upload media files to ApsaraVideo VOD. For more information, see [Billing of media asset storage](~~188308#section_e97_xrp_mzz~~). If you have activated the acceleration service, you are charged acceleration fees when you upload media files to ApsaraVideo VOD. For more information, see [Billing of acceleration traffic](~~188310#section_sta_zm2_tsv~~).**
   * *   You must obtain a URL and a credential before you upload an image to ApsaraVideo VOD. ApsaraVideo VOD provides multiple upload methods. You can upload files by using server upload SDKs, client upload SDKs, URLs, Object Storage Service (OSS) API, or OSS SDKs. Each upload method has different requirements for obtaining upload URLs and credentials. For more information, see the "Usage notes" section of the [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html) topic.
   * *   You cannot refresh the upload URL or credential when you upload images. If the image upload credential expires, you can call this operation to obtain a new upload URL and credential. By default, the validity period of an image upload credential is 3,000 seconds.
   * *   You can call the [CreateUploadAttachedMedia](https://help.aliyun.com/document_detail/98467.html) operation to upload image watermarks.
   * *   You can configure a callback for [ImageUploadComplete](https://help.aliyun.com/document_detail/91968.html) to receive notifications about the image upload status.
   * 
   * @param request - CreateUploadImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUploadImageResponse
   */
  async createUploadImageWithOptions(request: $_model.CreateUploadImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUploadImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.imageExt)) {
      query["ImageExt"] = request.imageExt;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!$dara.isNull(request.originalFileName)) {
      query["OriginalFileName"] = request.originalFileName;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUploadImage",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUploadImageResponse>(await this.callApi(params, req, runtime), new $_model.CreateUploadImageResponse({}));
  }

  /**
   * Queries a URL and a credential for uploading an image.
   * 
   * @remarks
   *   **Make sure that you understand the billing method and price of ApsaraVideo VOD before you call this operation. You are charged storage fees after you upload media files to ApsaraVideo VOD. For more information, see [Billing of media asset storage](~~188308#section_e97_xrp_mzz~~). If you have activated the acceleration service, you are charged acceleration fees when you upload media files to ApsaraVideo VOD. For more information, see [Billing of acceleration traffic](~~188310#section_sta_zm2_tsv~~).**
   * *   You must obtain a URL and a credential before you upload an image to ApsaraVideo VOD. ApsaraVideo VOD provides multiple upload methods. You can upload files by using server upload SDKs, client upload SDKs, URLs, Object Storage Service (OSS) API, or OSS SDKs. Each upload method has different requirements for obtaining upload URLs and credentials. For more information, see the "Usage notes" section of the [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html) topic.
   * *   You cannot refresh the upload URL or credential when you upload images. If the image upload credential expires, you can call this operation to obtain a new upload URL and credential. By default, the validity period of an image upload credential is 3,000 seconds.
   * *   You can call the [CreateUploadAttachedMedia](https://help.aliyun.com/document_detail/98467.html) operation to upload image watermarks.
   * *   You can configure a callback for [ImageUploadComplete](https://help.aliyun.com/document_detail/91968.html) to receive notifications about the image upload status.
   * 
   * @param request - CreateUploadImageRequest
   * @returns CreateUploadImageResponse
   */
  async createUploadImage(request: $_model.CreateUploadImageRequest): Promise<$_model.CreateUploadImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUploadImageWithOptions(request, runtime);
  }

  /**
   * Obtains an upload URL and an upload credential for uploading an audio or video file and generates the audio or video ID. ApsaraVideo VOD issues upload URLs and credentials to perform authorization and ensure security. This prevents unauthorized users from uploading media files. ApsaraVideo VOD generates media IDs, video IDs, and image IDs together with upload URLs and credentials. Media IDs are used in lifecycle management and media processing.
   * 
   * @remarks
   *   **Make sure that you understand the billing method and prices of ApsaraVideo VOD before you call this operation. You are charged storage fees after you upload media files to ApsaraVideo VOD. For more information, see [Billing of media asset storage](~~188308#section_e97_xrp_mzz~~). If you have activated the acceleration service, you are charged acceleration fees when you upload media files to ApsaraVideo VOD. For more information, see [Billing of acceleration traffic](~~188310#section_sta_zm2_tsv~~).**
   * *   You can call this operation to obtain upload URLs and credentials for video and audio files. For more information, see [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
   * *   You can call this operation only to obtain the upload URLs and credentials for media files and create media assets in ApsaraVideo VOD. You cannot call this operation to upload media files. For more information about how to upload media files by calling API operations, see [Upload media files by calling API operations](https://help.aliyun.com/document_detail/476208.html).
   * *   If the upload credential expires, call the [RefreshUploadVideo](~~RefreshUploadVideo~~) operation to obtain a new upload credential. The default validity period of an upload credential is 3,000 seconds.
   * *   You can configure a callback to receive an event notification when an audio or video file is uploaded. Alternatively, after you upload an audio or video file, you can call the [GetMezzanineInfo](https://help.aliyun.com/document_detail/59624.html) operation to determine whether the upload is successful. For more information, see [Overview](https://help.aliyun.com/document_detail/55396.html).
   * *   The value of the VideoId parameter that is returned after you call this operation can be used for media processing or the lifecycle management of media assets.
   * *   You must obtain a URL and a credential before you upload a media file to ApsaraVideo VOD. ApsaraVideo VOD supports multiple upload methods. Each method has different requirements on upload URLs and credentials. For more information, see [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
   * 
   * @param request - CreateUploadVideoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUploadVideoResponse
   */
  async createUploadVideoWithOptions(request: $_model.CreateUploadVideoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUploadVideoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!$dara.isNull(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileSize)) {
      query["FileSize"] = request.fileSize;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.templateGroupId)) {
      query["TemplateGroupId"] = request.templateGroupId;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUploadVideo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUploadVideoResponse>(await this.callApi(params, req, runtime), new $_model.CreateUploadVideoResponse({}));
  }

  /**
   * Obtains an upload URL and an upload credential for uploading an audio or video file and generates the audio or video ID. ApsaraVideo VOD issues upload URLs and credentials to perform authorization and ensure security. This prevents unauthorized users from uploading media files. ApsaraVideo VOD generates media IDs, video IDs, and image IDs together with upload URLs and credentials. Media IDs are used in lifecycle management and media processing.
   * 
   * @remarks
   *   **Make sure that you understand the billing method and prices of ApsaraVideo VOD before you call this operation. You are charged storage fees after you upload media files to ApsaraVideo VOD. For more information, see [Billing of media asset storage](~~188308#section_e97_xrp_mzz~~). If you have activated the acceleration service, you are charged acceleration fees when you upload media files to ApsaraVideo VOD. For more information, see [Billing of acceleration traffic](~~188310#section_sta_zm2_tsv~~).**
   * *   You can call this operation to obtain upload URLs and credentials for video and audio files. For more information, see [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
   * *   You can call this operation only to obtain the upload URLs and credentials for media files and create media assets in ApsaraVideo VOD. You cannot call this operation to upload media files. For more information about how to upload media files by calling API operations, see [Upload media files by calling API operations](https://help.aliyun.com/document_detail/476208.html).
   * *   If the upload credential expires, call the [RefreshUploadVideo](~~RefreshUploadVideo~~) operation to obtain a new upload credential. The default validity period of an upload credential is 3,000 seconds.
   * *   You can configure a callback to receive an event notification when an audio or video file is uploaded. Alternatively, after you upload an audio or video file, you can call the [GetMezzanineInfo](https://help.aliyun.com/document_detail/59624.html) operation to determine whether the upload is successful. For more information, see [Overview](https://help.aliyun.com/document_detail/55396.html).
   * *   The value of the VideoId parameter that is returned after you call this operation can be used for media processing or the lifecycle management of media assets.
   * *   You must obtain a URL and a credential before you upload a media file to ApsaraVideo VOD. ApsaraVideo VOD supports multiple upload methods. Each method has different requirements on upload URLs and credentials. For more information, see [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
   * 
   * @param request - CreateUploadVideoRequest
   * @returns CreateUploadVideoResponse
   */
  async createUploadVideo(request: $_model.CreateUploadVideoRequest): Promise<$_model.CreateUploadVideoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUploadVideoWithOptions(request, runtime);
  }

  /**
   * 创建日志
   * 
   * @param request - CreateVodRealTimeLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVodRealTimeLogDeliveryResponse
   */
  async createVodRealTimeLogDeliveryWithOptions(request: $_model.CreateVodRealTimeLogDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVodRealTimeLogDeliveryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVodRealTimeLogDelivery",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVodRealTimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.CreateVodRealTimeLogDeliveryResponse({}));
  }

  /**
   * 创建日志
   * 
   * @param request - CreateVodRealTimeLogDeliveryRequest
   * @returns CreateVodRealTimeLogDeliveryResponse
   */
  async createVodRealTimeLogDelivery(request: $_model.CreateVodRealTimeLogDeliveryRequest): Promise<$_model.CreateVodRealTimeLogDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVodRealTimeLogDeliveryWithOptions(request, runtime);
  }

  /**
   * 创建用量导出任务
   * 
   * @param request - CreateVodUserUsageDetailDataExportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVodUserUsageDetailDataExportTaskResponse
   */
  async createVodUserUsageDetailDataExportTaskWithOptions(request: $_model.CreateVodUserUsageDetailDataExportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVodUserUsageDetailDataExportTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVodUserUsageDetailDataExportTask",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVodUserUsageDetailDataExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateVodUserUsageDetailDataExportTaskResponse({}));
  }

  /**
   * 创建用量导出任务
   * 
   * @param request - CreateVodUserUsageDetailDataExportTaskRequest
   * @returns CreateVodUserUsageDetailDataExportTaskResponse
   */
  async createVodUserUsageDetailDataExportTask(request: $_model.CreateVodUserUsageDetailDataExportTaskRequest): Promise<$_model.CreateVodUserUsageDetailDataExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVodUserUsageDetailDataExportTaskWithOptions(request, runtime);
  }

  /**
   * Decrypts the ciphertext specified by CiphertextBlob in the Key Management Service (KMS) data key.
   * 
   * @param request - DecryptKMSDataKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DecryptKMSDataKeyResponse
   */
  async decryptKMSDataKeyWithOptions(request: $_model.DecryptKMSDataKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DecryptKMSDataKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cipherText)) {
      query["CipherText"] = request.cipherText;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DecryptKMSDataKey",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DecryptKMSDataKeyResponse>(await this.callApi(params, req, runtime), new $_model.DecryptKMSDataKeyResponse({}));
  }

  /**
   * Decrypts the ciphertext specified by CiphertextBlob in the Key Management Service (KMS) data key.
   * 
   * @param request - DecryptKMSDataKeyRequest
   * @returns DecryptKMSDataKeyResponse
   */
  async decryptKMSDataKey(request: $_model.DecryptKMSDataKeyRequest): Promise<$_model.DecryptKMSDataKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.decryptKMSDataKeyWithOptions(request, runtime);
  }

  /**
   * 删除app
   * 
   * @param request - DelAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DelAppResponse
   */
  async delAppWithOptions(request: $_model.DelAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DelAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appItemId)) {
      body["AppItemId"] = request.appItemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DelApp",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DelAppResponse>(await this.callApi(params, req, runtime), new $_model.DelAppResponse({}));
  }

  /**
   * 删除app
   * 
   * @param request - DelAppRequest
   * @returns DelAppResponse
   */
  async delApp(request: $_model.DelAppRequest): Promise<$_model.DelAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.delAppWithOptions(request, runtime);
  }

  /**
   * 删除免费license
   * 
   * @param request - DelFreeLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DelFreeLicenseResponse
   */
  async delFreeLicenseWithOptions(request: $_model.DelFreeLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DelFreeLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appItemId)) {
      query["AppItemId"] = request.appItemId;
    }

    if (!$dara.isNull(request.licenseItemId)) {
      query["LicenseItemId"] = request.licenseItemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DelFreeLicense",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DelFreeLicenseResponse>(await this.callApi(params, req, runtime), new $_model.DelFreeLicenseResponse({}));
  }

  /**
   * 删除免费license
   * 
   * @param request - DelFreeLicenseRequest
   * @returns DelFreeLicenseResponse
   */
  async delFreeLicense(request: $_model.DelFreeLicenseRequest): Promise<$_model.DelFreeLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.delFreeLicenseWithOptions(request, runtime);
  }

  /**
   * Deletes the information about one or more images that are submitted for AI processing.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)** and **China (Shanghai)**.
   * *   This operation deletes only information about images that are submitted for AI processing. The image files are not deleted.
   * 
   * @param request - DeleteAIImageInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAIImageInfosResponse
   */
  async deleteAIImageInfosWithOptions(request: $_model.DeleteAIImageInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAIImageInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIImageInfoIds)) {
      query["AIImageInfoIds"] = request.AIImageInfoIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAIImageInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAIImageInfosResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAIImageInfosResponse({}));
  }

  /**
   * Deletes the information about one or more images that are submitted for AI processing.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)** and **China (Shanghai)**.
   * *   This operation deletes only information about images that are submitted for AI processing. The image files are not deleted.
   * 
   * @param request - DeleteAIImageInfosRequest
   * @returns DeleteAIImageInfosResponse
   */
  async deleteAIImageInfos(request: $_model.DeleteAIImageInfosRequest): Promise<$_model.DeleteAIImageInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAIImageInfosWithOptions(request, runtime);
  }

  /**
   * Deletes an AI template.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * *   You cannot delete an AI template that is set as the default template.
   * 
   * @param request - DeleteAITemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAITemplateResponse
   */
  async deleteAITemplateWithOptions(request: $_model.DeleteAITemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAITemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAITemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAITemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAITemplateResponse({}));
  }

  /**
   * Deletes an AI template.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * *   You cannot delete an AI template that is set as the default template.
   * 
   * @param request - DeleteAITemplateRequest
   * @returns DeleteAITemplateResponse
   */
  async deleteAITemplate(request: $_model.DeleteAITemplateRequest): Promise<$_model.DeleteAITemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAITemplateWithOptions(request, runtime);
  }

  /**
   * Deletes an application.
   * 
   * @remarks
   * Application with resources can not be deleted.
   * 
   * @param request - DeleteAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppInfoResponse
   */
  async deleteAppInfoWithOptions(request: $_model.DeleteAppInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppInfoResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppInfoResponse({}));
  }

  /**
   * Deletes an application.
   * 
   * @remarks
   * Application with resources can not be deleted.
   * 
   * @param request - DeleteAppInfoRequest
   * @returns DeleteAppInfoResponse
   */
  async deleteAppInfo(request: $_model.DeleteAppInfoRequest): Promise<$_model.DeleteAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppInfoWithOptions(request, runtime);
  }

  /**
   * 删除应用授权
   * 
   * @param request - DeleteAppLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppLicenseResponse
   */
  async deleteAppLicenseWithOptions(request: $_model.DeleteAppLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appItemId)) {
      query["AppItemId"] = request.appItemId;
    }

    if (!$dara.isNull(request.licenseItemIds)) {
      query["LicenseItemIds"] = request.licenseItemIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppLicense",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppLicenseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppLicenseResponse({}));
  }

  /**
   * 删除应用授权
   * 
   * @param request - DeleteAppLicenseRequest
   * @returns DeleteAppLicenseResponse
   */
  async deleteAppLicense(request: $_model.DeleteAppLicenseRequest): Promise<$_model.DeleteAppLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppLicenseWithOptions(request, runtime);
  }

  /**
   * 删除App策略
   * 
   * @param request - DeleteAppPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppPolicyResponse
   */
  async deleteAppPolicyWithOptions(request: $_model.DeleteAppPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyNames)) {
      query["PolicyNames"] = request.policyNames;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppPolicy",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppPolicyResponse({}));
  }

  /**
   * 删除App策略
   * 
   * @param request - DeleteAppPolicyRequest
   * @returns DeleteAppPolicyResponse
   */
  async deleteAppPolicy(request: $_model.DeleteAppPolicyRequest): Promise<$_model.DeleteAppPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes auxiliary media assets from ApsaraVideo VOD. You can delete multiple auxiliary media assets such as watermark images, subtitle files, and materials in a batch.
   * 
   * @remarks
   *   **This operation physically deletes auxiliary media assets. You cannot recover the auxiliary media assets that you deleted. Exercise caution when you call this operation.**
   * *   You can delete a maximum of 20 auxiliary media assets in one request.
   * 
   * @param request - DeleteAttachedMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAttachedMediaResponse
   */
  async deleteAttachedMediaWithOptions(request: $_model.DeleteAttachedMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAttachedMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAttachedMedia",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAttachedMediaResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAttachedMediaResponse({}));
  }

  /**
   * Deletes auxiliary media assets from ApsaraVideo VOD. You can delete multiple auxiliary media assets such as watermark images, subtitle files, and materials in a batch.
   * 
   * @remarks
   *   **This operation physically deletes auxiliary media assets. You cannot recover the auxiliary media assets that you deleted. Exercise caution when you call this operation.**
   * *   You can delete a maximum of 20 auxiliary media assets in one request.
   * 
   * @param request - DeleteAttachedMediaRequest
   * @returns DeleteAttachedMediaResponse
   */
  async deleteAttachedMedia(request: $_model.DeleteAttachedMediaRequest): Promise<$_model.DeleteAttachedMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAttachedMediaWithOptions(request, runtime);
  }

  /**
   * Deletes a category and its subcategories.
   * 
   * @remarks
   *   **After you call this operation to delete a category, all subcategories including level 2 and level 3 categories are deleted at the same time. Exercise caution when you call this operation.**
   * *   If you have classified specific media resources to a category, the category names labeled on these media resources are automatically deleted when you delete the category.
   * 
   * @param request - DeleteCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCategoryResponse
   */
  async deleteCategoryWithOptions(request: $_model.DeleteCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCategory",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCategoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCategoryResponse({}));
  }

  /**
   * Deletes a category and its subcategories.
   * 
   * @remarks
   *   **After you call this operation to delete a category, all subcategories including level 2 and level 3 categories are deleted at the same time. Exercise caution when you call this operation.**
   * *   If you have classified specific media resources to a category, the category names labeled on these media resources are automatically deleted when you delete the category.
   * 
   * @param request - DeleteCategoryRequest
   * @returns DeleteCategoryResponse
   */
  async deleteCategory(request: $_model.DeleteCategoryRequest): Promise<$_model.DeleteCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCategoryWithOptions(request, runtime);
  }

  /**
   * 删除模版
   * 
   * @param request - DeleteCustomTemplateConsoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomTemplateConsoleResponse
   */
  async deleteCustomTemplateConsoleWithOptions(request: $_model.DeleteCustomTemplateConsoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomTemplateConsoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomTemplateConsole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomTemplateConsoleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomTemplateConsoleResponse({}));
  }

  /**
   * 删除模版
   * 
   * @param request - DeleteCustomTemplateConsoleRequest
   * @returns DeleteCustomTemplateConsoleResponse
   */
  async deleteCustomTemplateConsole(request: $_model.DeleteCustomTemplateConsoleRequest): Promise<$_model.DeleteCustomTemplateConsoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomTemplateConsoleWithOptions(request, runtime);
  }

  /**
   * 删除DNA
   * 
   * @param request - DeleteDNADBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDNADBResponse
   */
  async deleteDNADBWithOptions(request: $_model.DeleteDNADBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDNADBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBId)) {
      query["DBId"] = request.DBId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDNADB",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDNADBResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDNADBResponse({}));
  }

  /**
   * 删除DNA
   * 
   * @param request - DeleteDNADBRequest
   * @returns DeleteDNADBResponse
   */
  async deleteDNADB(request: $_model.DeleteDNADBRequest): Promise<$_model.DeleteDNADBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDNADBWithOptions(request, runtime);
  }

  /**
   * 删除drm证书
   * 
   * @param request - DeleteDRMCertInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDRMCertInfoResponse
   */
  async deleteDRMCertInfoWithOptions(request: $_model.DeleteDRMCertInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDRMCertInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDRMCertInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDRMCertInfoResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDRMCertInfoResponse({}));
  }

  /**
   * 删除drm证书
   * 
   * @param request - DeleteDRMCertInfoRequest
   * @returns DeleteDRMCertInfoResponse
   */
  async deleteDRMCertInfo(request: $_model.DeleteDRMCertInfoRequest): Promise<$_model.DeleteDRMCertInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDRMCertInfoWithOptions(request, runtime);
  }

  /**
   * Deletes the information about animated stickers.
   * 
   * @remarks
   * > This operation deletes only the information about animated stickers, but not the animated stickers themselves.
   * 
   * @param request - DeleteDynamicImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDynamicImageResponse
   */
  async deleteDynamicImageWithOptions(request: $_model.DeleteDynamicImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDynamicImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dynamicImageIds)) {
      query["DynamicImageIds"] = request.dynamicImageIds;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDynamicImage",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDynamicImageResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDynamicImageResponse({}));
  }

  /**
   * Deletes the information about animated stickers.
   * 
   * @remarks
   * > This operation deletes only the information about animated stickers, but not the animated stickers themselves.
   * 
   * @param request - DeleteDynamicImageRequest
   * @returns DeleteDynamicImageResponse
   */
  async deleteDynamicImage(request: $_model.DeleteDynamicImageRequest): Promise<$_model.DeleteDynamicImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDynamicImageWithOptions(request, runtime);
  }

  /**
   * Deletes online editing projects.
   * 
   * @remarks
   *   You can call this operation to delete multiple online editing projects at a time.
   * 
   * @param request - DeleteEditingProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEditingProjectResponse
   */
  async deleteEditingProjectWithOptions(request: $_model.DeleteEditingProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEditingProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.projectIds)) {
      query["ProjectIds"] = request.projectIds;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEditingProject",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEditingProjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEditingProjectResponse({}));
  }

  /**
   * Deletes online editing projects.
   * 
   * @remarks
   *   You can call this operation to delete multiple online editing projects at a time.
   * 
   * @param request - DeleteEditingProjectRequest
   * @returns DeleteEditingProjectResponse
   */
  async deleteEditingProject(request: $_model.DeleteEditingProjectRequest): Promise<$_model.DeleteEditingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEditingProjectWithOptions(request, runtime);
  }

  /**
   * 删除剪辑资源
   * 
   * @param request - DeleteEditingProjectMaterialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEditingProjectMaterialsResponse
   */
  async deleteEditingProjectMaterialsWithOptions(request: $_model.DeleteEditingProjectMaterialsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEditingProjectMaterialsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.materialIds)) {
      query["MaterialIds"] = request.materialIds;
    }

    if (!$dara.isNull(request.materialType)) {
      query["MaterialType"] = request.materialType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEditingProjectMaterials",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEditingProjectMaterialsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEditingProjectMaterialsResponse({}));
  }

  /**
   * 删除剪辑资源
   * 
   * @param request - DeleteEditingProjectMaterialsRequest
   * @returns DeleteEditingProjectMaterialsResponse
   */
  async deleteEditingProjectMaterials(request: $_model.DeleteEditingProjectMaterialsRequest): Promise<$_model.DeleteEditingProjectMaterialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEditingProjectMaterialsWithOptions(request, runtime);
  }

  /**
   * 删除过滤条件
   * 
   * @param request - DeleteFilterConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFilterConfigsResponse
   */
  async deleteFilterConfigsWithOptions(request: $_model.DeleteFilterConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFilterConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.uuId)) {
      query["UuId"] = request.uuId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFilterConfigs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFilterConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFilterConfigsResponse({}));
  }

  /**
   * 删除过滤条件
   * 
   * @param request - DeleteFilterConfigsRequest
   * @returns DeleteFilterConfigsResponse
   */
  async deleteFilterConfigs(request: $_model.DeleteFilterConfigsRequest): Promise<$_model.DeleteFilterConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFilterConfigsWithOptions(request, runtime);
  }

  /**
   * 删除免费license
   * 
   * @param request - DeleteFreeLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFreeLicenseResponse
   */
  async deleteFreeLicenseWithOptions(request: $_model.DeleteFreeLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFreeLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appItemId)) {
      query["AppItemId"] = request.appItemId;
    }

    if (!$dara.isNull(request.licenseItemId)) {
      query["LicenseItemId"] = request.licenseItemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFreeLicense",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFreeLicenseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFreeLicenseResponse({}));
  }

  /**
   * 删除免费license
   * 
   * @param request - DeleteFreeLicenseRequest
   * @returns DeleteFreeLicenseResponse
   */
  async deleteFreeLicense(request: $_model.DeleteFreeLicenseRequest): Promise<$_model.DeleteFreeLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFreeLicenseWithOptions(request, runtime);
  }

  /**
   * Deletes uploaded images and video snapshots that are automatically captured.
   * 
   * @remarks
   *   **After you call this operation to delete an image, the source file is permanently deleted and cannot be recovered. Exercise caution when you call this operation.**
   * *   If some images are cached on Alibaba Cloud CDN points of presence (POPs), the image URLs do not immediately become invalid.
   * *   You can call this operation to delete uploaded images and video snapshots.
   * 
   * @param request - DeleteImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteImageResponse
   */
  async deleteImageWithOptions(request: $_model.DeleteImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteImageType)) {
      query["DeleteImageType"] = request.deleteImageType;
    }

    if (!$dara.isNull(request.imageIds)) {
      query["ImageIds"] = request.imageIds;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!$dara.isNull(request.imageURLs)) {
      query["ImageURLs"] = request.imageURLs;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteImage",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteImageResponse>(await this.callApi(params, req, runtime), new $_model.DeleteImageResponse({}));
  }

  /**
   * Deletes uploaded images and video snapshots that are automatically captured.
   * 
   * @remarks
   *   **After you call this operation to delete an image, the source file is permanently deleted and cannot be recovered. Exercise caution when you call this operation.**
   * *   If some images are cached on Alibaba Cloud CDN points of presence (POPs), the image URLs do not immediately become invalid.
   * *   You can call this operation to delete uploaded images and video snapshots.
   * 
   * @param request - DeleteImageRequest
   * @returns DeleteImageResponse
   */
  async deleteImage(request: $_model.DeleteImageRequest): Promise<$_model.DeleteImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  /**
   * 删除智能策略信息
   * 
   * @param request - DeleteIntelligentStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIntelligentStrategyResponse
   */
  async deleteIntelligentStrategyWithOptions(request: $_model.DeleteIntelligentStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIntelligentStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIntelligentStrategy",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIntelligentStrategyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIntelligentStrategyResponse({}));
  }

  /**
   * 删除智能策略信息
   * 
   * @param request - DeleteIntelligentStrategyRequest
   * @returns DeleteIntelligentStrategyResponse
   */
  async deleteIntelligentStrategy(request: $_model.DeleteIntelligentStrategyRequest): Promise<$_model.DeleteIntelligentStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIntelligentStrategyWithOptions(request, runtime);
  }

  /**
   * 删除媒资导出任务
   * 
   * @param request - DeleteMediaExportJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMediaExportJobsResponse
   */
  async deleteMediaExportJobsWithOptions(request: $_model.DeleteMediaExportJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMediaExportJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMediaExportJobs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMediaExportJobsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMediaExportJobsResponse({}));
  }

  /**
   * 删除媒资导出任务
   * 
   * @param request - DeleteMediaExportJobsRequest
   * @returns DeleteMediaExportJobsResponse
   */
  async deleteMediaExportJobs(request: $_model.DeleteMediaExportJobsRequest): Promise<$_model.DeleteMediaExportJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMediaExportJobsWithOptions(request, runtime);
  }

  /**
   * 删除生命周期
   * 
   * @param request - DeleteMediaLifecycleRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMediaLifecycleRuleResponse
   */
  async deleteMediaLifecycleRuleWithOptions(request: $_model.DeleteMediaLifecycleRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMediaLifecycleRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.ruleIds)) {
      query["RuleIds"] = request.ruleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMediaLifecycleRule",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMediaLifecycleRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMediaLifecycleRuleResponse({}));
  }

  /**
   * 删除生命周期
   * 
   * @param request - DeleteMediaLifecycleRuleRequest
   * @returns DeleteMediaLifecycleRuleResponse
   */
  async deleteMediaLifecycleRule(request: $_model.DeleteMediaLifecycleRuleRequest): Promise<$_model.DeleteMediaLifecycleRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMediaLifecycleRuleWithOptions(request, runtime);
  }

  /**
   * Deletes the callback method, callback URL, and event type of an event notification.
   * 
   * @remarks
   * > For more information, see [Overview](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @param request - DeleteMessageCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMessageCallbackResponse
   */
  async deleteMessageCallbackWithOptions(request: $_model.DeleteMessageCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMessageCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMessageCallback",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMessageCallbackResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMessageCallbackResponse({}));
  }

  /**
   * Deletes the callback method, callback URL, and event type of an event notification.
   * 
   * @remarks
   * > For more information, see [Overview](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @param request - DeleteMessageCallbackRequest
   * @returns DeleteMessageCallbackResponse
   */
  async deleteMessageCallback(request: $_model.DeleteMessageCallbackRequest): Promise<$_model.DeleteMessageCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMessageCallbackWithOptions(request, runtime);
  }

  /**
   * 删除云监控配置
   * 
   * @param request - DeleteMessageCloudMonitorConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMessageCloudMonitorConfigResponse
   */
  async deleteMessageCloudMonitorConfigWithOptions(request: $_model.DeleteMessageCloudMonitorConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMessageCloudMonitorConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMessageCloudMonitorConfig",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMessageCloudMonitorConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMessageCloudMonitorConfigResponse({}));
  }

  /**
   * 删除云监控配置
   * 
   * @param request - DeleteMessageCloudMonitorConfigRequest
   * @returns DeleteMessageCloudMonitorConfigResponse
   */
  async deleteMessageCloudMonitorConfig(request: $_model.DeleteMessageCloudMonitorConfigRequest): Promise<$_model.DeleteMessageCloudMonitorConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMessageCloudMonitorConfigWithOptions(request, runtime);
  }

  /**
   * Deletes one or more source files at a time.
   * 
   * @remarks
   * All media processing operations in ApsaraVideo VOD, such as transcoding, snapshot capture, and content moderation, are performed based on source files. If you delete the source files, you cannot perform media processing operations. Exercise caution when you call this operation.
   * 
   * @param request - DeleteMezzaninesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMezzaninesResponse
   */
  async deleteMezzaninesWithOptions(request: $_model.DeleteMezzaninesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMezzaninesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.videoIds)) {
      query["VideoIds"] = request.videoIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMezzanines",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMezzaninesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMezzaninesResponse({}));
  }

  /**
   * Deletes one or more source files at a time.
   * 
   * @remarks
   * All media processing operations in ApsaraVideo VOD, such as transcoding, snapshot capture, and content moderation, are performed based on source files. If you delete the source files, you cannot perform media processing operations. Exercise caution when you call this operation.
   * 
   * @param request - DeleteMezzaninesRequest
   * @returns DeleteMezzaninesResponse
   */
  async deleteMezzanines(request: $_model.DeleteMezzaninesRequest): Promise<$_model.DeleteMezzaninesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMezzaninesWithOptions(request, runtime);
  }

  /**
   * Deletes the parts generated during an upload.
   * 
   * @remarks
   *   During multipart upload, useless parts may be retained if the upload fails. These useless parts are automatically deleted after 7 days. You can call this operation to delete the generated parts after the upload is successful or fails.
   * *   This operation does not delete the source file or transcoded file, but deletes only the parts generated during the upload.
   * *   If you call the [DeleteVideo](https://help.aliyun.com/document_detail/52837.html) operation, the entire video file is deleted, including the generated parts.
   * 
   * @param request - DeleteMultipartUploadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMultipartUploadResponse
   */
  async deleteMultipartUploadWithOptions(request: $_model.DeleteMultipartUploadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMultipartUploadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMultipartUpload",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMultipartUploadResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMultipartUploadResponse({}));
  }

  /**
   * Deletes the parts generated during an upload.
   * 
   * @remarks
   *   During multipart upload, useless parts may be retained if the upload fails. These useless parts are automatically deleted after 7 days. You can call this operation to delete the generated parts after the upload is successful or fails.
   * *   This operation does not delete the source file or transcoded file, but deletes only the parts generated during the upload.
   * *   If you call the [DeleteVideo](https://help.aliyun.com/document_detail/52837.html) operation, the entire video file is deleted, including the generated parts.
   * 
   * @param request - DeleteMultipartUploadRequest
   * @returns DeleteMultipartUploadResponse
   */
  async deleteMultipartUpload(request: $_model.DeleteMultipartUploadRequest): Promise<$_model.DeleteMultipartUploadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMultipartUploadWithOptions(request, runtime);
  }

  /**
   * 删除存储信息
   * 
   * @param request - DeleteStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStorageResponse
   */
  async deleteStorageWithOptions(request: $_model.DeleteStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStorageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStorage",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStorageResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStorageResponse({}));
  }

  /**
   * 删除存储信息
   * 
   * @param request - DeleteStorageRequest
   * @returns DeleteStorageResponse
   */
  async deleteStorage(request: $_model.DeleteStorageRequest): Promise<$_model.DeleteStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStorageWithOptions(request, runtime);
  }

  /**
   * Deletes one or more video or audio streams and their storage files at a time.
   * 
   * @param request - DeleteStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStreamResponse
   */
  async deleteStreamWithOptions(request: $_model.DeleteStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStream",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStreamResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStreamResponse({}));
  }

  /**
   * Deletes one or more video or audio streams and their storage files at a time.
   * 
   * @param request - DeleteStreamRequest
   * @returns DeleteStreamResponse
   */
  async deleteStream(request: $_model.DeleteStreamRequest): Promise<$_model.DeleteStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStreamWithOptions(request, runtime);
  }

  /**
   * 删除模版
   * 
   * @param request - DeleteTemplateGroupConsoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateGroupConsoleResponse
   */
  async deleteTemplateGroupConsoleWithOptions(request: $_model.DeleteTemplateGroupConsoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTemplateGroupConsoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTemplateGroupConsole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTemplateGroupConsoleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTemplateGroupConsoleResponse({}));
  }

  /**
   * 删除模版
   * 
   * @param request - DeleteTemplateGroupConsoleRequest
   * @returns DeleteTemplateGroupConsoleResponse
   */
  async deleteTemplateGroupConsole(request: $_model.DeleteTemplateGroupConsoleRequest): Promise<$_model.DeleteTemplateGroupConsoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTemplateGroupConsoleWithOptions(request, runtime);
  }

  /**
   * Deletes one or more transcoding templates from a transcoding template group or forcibly deletes a transcoding template group.
   * 
   * @remarks
   *   You cannot call this operation to delete the default transcoding template. You can delete the transcoding template when it is no longer specified as the default one.
   * *   For security purposes, you cannot add, modify, or delete transcoding templates in a transcoding template group that is locked. To check whether a transcoding template group is locked, call the [GetTranscodeTemplateGroup](~~GetTranscodeTemplateGroup~~) operation and obtain the Locked parameter from the response. To modify transcoding templates within a locked transcoding template group, you must call the [UpdateTranscodeTemplateGroup](~~UpdateTranscodeTemplateGroup~~) operation to unlock the transcoding template group first.
   * 
   * @param request - DeleteTranscodeTemplateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTranscodeTemplateGroupResponse
   */
  async deleteTranscodeTemplateGroupWithOptions(request: $_model.DeleteTranscodeTemplateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTranscodeTemplateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forceDelGroup)) {
      query["ForceDelGroup"] = request.forceDelGroup;
    }

    if (!$dara.isNull(request.transcodeTemplateGroupId)) {
      query["TranscodeTemplateGroupId"] = request.transcodeTemplateGroupId;
    }

    if (!$dara.isNull(request.transcodeTemplateIds)) {
      query["TranscodeTemplateIds"] = request.transcodeTemplateIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTranscodeTemplateGroup",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTranscodeTemplateGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTranscodeTemplateGroupResponse({}));
  }

  /**
   * Deletes one or more transcoding templates from a transcoding template group or forcibly deletes a transcoding template group.
   * 
   * @remarks
   *   You cannot call this operation to delete the default transcoding template. You can delete the transcoding template when it is no longer specified as the default one.
   * *   For security purposes, you cannot add, modify, or delete transcoding templates in a transcoding template group that is locked. To check whether a transcoding template group is locked, call the [GetTranscodeTemplateGroup](~~GetTranscodeTemplateGroup~~) operation and obtain the Locked parameter from the response. To modify transcoding templates within a locked transcoding template group, you must call the [UpdateTranscodeTemplateGroup](~~UpdateTranscodeTemplateGroup~~) operation to unlock the transcoding template group first.
   * 
   * @param request - DeleteTranscodeTemplateGroupRequest
   * @returns DeleteTranscodeTemplateGroupResponse
   */
  async deleteTranscodeTemplateGroup(request: $_model.DeleteTranscodeTemplateGroupRequest): Promise<$_model.DeleteTranscodeTemplateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTranscodeTemplateGroupWithOptions(request, runtime);
  }

  /**
   * 删除模版
   * 
   * @param request - DeleteTranscodeTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTranscodeTemplatesResponse
   */
  async deleteTranscodeTemplatesWithOptions(request: $_model.DeleteTranscodeTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTranscodeTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transcodeTemplateGroupId)) {
      query["TranscodeTemplateGroupId"] = request.transcodeTemplateGroupId;
    }

    if (!$dara.isNull(request.transcodeTemplateIdList)) {
      query["TranscodeTemplateIdList"] = request.transcodeTemplateIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTranscodeTemplates",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTranscodeTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTranscodeTemplatesResponse({}));
  }

  /**
   * 删除模版
   * 
   * @param request - DeleteTranscodeTemplatesRequest
   * @returns DeleteTranscodeTemplatesResponse
   */
  async deleteTranscodeTemplates(request: $_model.DeleteTranscodeTemplatesRequest): Promise<$_model.DeleteTranscodeTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTranscodeTemplatesWithOptions(request, runtime);
  }

  /**
   * Deletes one or more videos at a time, including their mezzanine files, transcoded stream files, and thumbnail snapshots.
   * 
   * @remarks
   *   This operation physically deletes videos. Deleted videos cannot be recovered. Exercise caution when you call this operation.
   * *   You can call this operation to delete multiple videos at a time.
   * *   When you delete a video, its source file, transcoded stream file, and thumbnail screenshot are also deleted. However, the Alibaba Cloud Content Delivery Network (CDN) cache is not refreshed simultaneously. You can use the refresh feature in the ApsaraVideo VOD console to clear garbage data on CDN nodes. For more information, see [Refresh and prefetch](https://help.aliyun.com/document_detail/86098.html).
   * 
   * @param request - DeleteVideoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVideoResponse
   */
  async deleteVideoWithOptions(request: $_model.DeleteVideoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVideoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.videoIds)) {
      query["VideoIds"] = request.videoIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVideo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVideoResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVideoResponse({}));
  }

  /**
   * Deletes one or more videos at a time, including their mezzanine files, transcoded stream files, and thumbnail snapshots.
   * 
   * @remarks
   *   This operation physically deletes videos. Deleted videos cannot be recovered. Exercise caution when you call this operation.
   * *   You can call this operation to delete multiple videos at a time.
   * *   When you delete a video, its source file, transcoded stream file, and thumbnail screenshot are also deleted. However, the Alibaba Cloud Content Delivery Network (CDN) cache is not refreshed simultaneously. You can use the refresh feature in the ApsaraVideo VOD console to clear garbage data on CDN nodes. For more information, see [Refresh and prefetch](https://help.aliyun.com/document_detail/86098.html).
   * 
   * @param request - DeleteVideoRequest
   * @returns DeleteVideoResponse
   */
  async deleteVideo(request: $_model.DeleteVideoRequest): Promise<$_model.DeleteVideoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVideoWithOptions(request, runtime);
  }

  /**
   * Removes a domain name for CDN from ApsaraVideo VOD.
   * 
   * @remarks
   * > *   This operation is available only in the **China (Shanghai)** region.
   * > *   After a domain name for CDN is removed from ApsaraVideo VOD, the domain name becomes unavailable. Proceed with caution. We recommend that you restore the A record at your DNS service provider before you remove the domain name for CDN.
   * > *   After you call this operation to remove a domain name for CDN from ApsaraVideo VOD, all records that are related to the domain name are deleted. If you only want to disable a domain name for CDN, call the [BatchStopVodDomain](https://help.aliyun.com/document_detail/120208.html) operation.
   * 
   * @param request - DeleteVodDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVodDomainResponse
   */
  async deleteVodDomainWithOptions(request: $_model.DeleteVodDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVodDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVodDomain",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVodDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVodDomainResponse({}));
  }

  /**
   * Removes a domain name for CDN from ApsaraVideo VOD.
   * 
   * @remarks
   * > *   This operation is available only in the **China (Shanghai)** region.
   * > *   After a domain name for CDN is removed from ApsaraVideo VOD, the domain name becomes unavailable. Proceed with caution. We recommend that you restore the A record at your DNS service provider before you remove the domain name for CDN.
   * > *   After you call this operation to remove a domain name for CDN from ApsaraVideo VOD, all records that are related to the domain name are deleted. If you only want to disable a domain name for CDN, call the [BatchStopVodDomain](https://help.aliyun.com/document_detail/120208.html) operation.
   * 
   * @param request - DeleteVodDomainRequest
   * @returns DeleteVodDomainResponse
   */
  async deleteVodDomain(request: $_model.DeleteVodDomainRequest): Promise<$_model.DeleteVodDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVodDomainWithOptions(request, runtime);
  }

  /**
   * 删除实时日志LogStore
   * 
   * @param request - DeleteVodRealTimeLogLogstoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVodRealTimeLogLogstoreResponse
   */
  async deleteVodRealTimeLogLogstoreWithOptions(request: $_model.DeleteVodRealTimeLogLogstoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVodRealTimeLogLogstoreResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVodRealTimeLogLogstore",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVodRealTimeLogLogstoreResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVodRealTimeLogLogstoreResponse({}));
  }

  /**
   * 删除实时日志LogStore
   * 
   * @param request - DeleteVodRealTimeLogLogstoreRequest
   * @returns DeleteVodRealTimeLogLogstoreResponse
   */
  async deleteVodRealTimeLogLogstore(request: $_model.DeleteVodRealTimeLogLogstoreRequest): Promise<$_model.DeleteVodRealTimeLogLogstoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVodRealTimeLogLogstoreWithOptions(request, runtime);
  }

  /**
   * 删除实时日志
   * 
   * @param request - DeleteVodRealtimeLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVodRealtimeLogDeliveryResponse
   */
  async deleteVodRealtimeLogDeliveryWithOptions(request: $_model.DeleteVodRealtimeLogDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVodRealtimeLogDeliveryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVodRealtimeLogDelivery",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVodRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVodRealtimeLogDeliveryResponse({}));
  }

  /**
   * 删除实时日志
   * 
   * @param request - DeleteVodRealtimeLogDeliveryRequest
   * @returns DeleteVodRealtimeLogDeliveryResponse
   */
  async deleteVodRealtimeLogDelivery(request: $_model.DeleteVodRealtimeLogDeliveryRequest): Promise<$_model.DeleteVodRealtimeLogDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVodRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
   * Deletes the configurations of a domain name for CDN.
   * 
   * @remarks
   * > 
   * *   This operation is available only in the **China (Shanghai)** region.
   * *   After the configurations of a domain name for CDN are deleted, the domain name becomes unavailable. We recommend that you restore the A record at your DNS service provider before you delete the configurations of the domain name for CDN.
   * *   After you call this operation to remove a domain name for CDN from ApsaraVideo VOD, all records that are related to the domain name are deleted. If you only want to disable a domain name for CDN, call the [BatchStopVodDomain](https://help.aliyun.com/document_detail/120208.html) operation.
   * 
   * @param request - DeleteVodSpecificConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVodSpecificConfigResponse
   */
  async deleteVodSpecificConfigWithOptions(request: $_model.DeleteVodSpecificConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVodSpecificConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVodSpecificConfig",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVodSpecificConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVodSpecificConfigResponse({}));
  }

  /**
   * Deletes the configurations of a domain name for CDN.
   * 
   * @remarks
   * > 
   * *   This operation is available only in the **China (Shanghai)** region.
   * *   After the configurations of a domain name for CDN are deleted, the domain name becomes unavailable. We recommend that you restore the A record at your DNS service provider before you delete the configurations of the domain name for CDN.
   * *   After you call this operation to remove a domain name for CDN from ApsaraVideo VOD, all records that are related to the domain name are deleted. If you only want to disable a domain name for CDN, call the [BatchStopVodDomain](https://help.aliyun.com/document_detail/120208.html) operation.
   * 
   * @param request - DeleteVodSpecificConfigRequest
   * @returns DeleteVodSpecificConfigResponse
   */
  async deleteVodSpecificConfig(request: $_model.DeleteVodSpecificConfigRequest): Promise<$_model.DeleteVodSpecificConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVodSpecificConfigWithOptions(request, runtime);
  }

  /**
   * Deletes a snapshot template.
   * 
   * @param request - DeleteVodTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVodTemplateResponse
   */
  async deleteVodTemplateWithOptions(request: $_model.DeleteVodTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVodTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.vodTemplateId)) {
      query["VodTemplateId"] = request.vodTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVodTemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVodTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVodTemplateResponse({}));
  }

  /**
   * Deletes a snapshot template.
   * 
   * @param request - DeleteVodTemplateRequest
   * @returns DeleteVodTemplateResponse
   */
  async deleteVodTemplate(request: $_model.DeleteVodTemplateRequest): Promise<$_model.DeleteVodTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVodTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes an image watermark or text watermark template.
   * 
   * @remarks
   *   **After you delete an image watermark template, the source watermark file is physically deleted and cannot be restored. Exercise caution when you call this operation.**
   * *   You cannot delete the default watermark template. To delete a default watermark template, call the [SetDefaultWatermark](~~SetDefaultWatermark~~) operation to set another watermark template as the default one.
   * 
   * @param request - DeleteWatermarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWatermarkResponse
   */
  async deleteWatermarkWithOptions(request: $_model.DeleteWatermarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWatermarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.watermarkId)) {
      query["WatermarkId"] = request.watermarkId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWatermark",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWatermarkResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWatermarkResponse({}));
  }

  /**
   * Deletes an image watermark or text watermark template.
   * 
   * @remarks
   *   **After you delete an image watermark template, the source watermark file is physically deleted and cannot be restored. Exercise caution when you call this operation.**
   * *   You cannot delete the default watermark template. To delete a default watermark template, call the [SetDefaultWatermark](~~SetDefaultWatermark~~) operation to set another watermark template as the default one.
   * 
   * @param request - DeleteWatermarkRequest
   * @returns DeleteWatermarkResponse
   */
  async deleteWatermark(request: $_model.DeleteWatermarkRequest): Promise<$_model.DeleteWatermarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWatermarkWithOptions(request, runtime);
  }

  /**
   * 删除水印
   * 
   * @param request - DeleteWatermarkConsoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWatermarkConsoleResponse
   */
  async deleteWatermarkConsoleWithOptions(request: $_model.DeleteWatermarkConsoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWatermarkConsoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.watermarkId)) {
      query["WatermarkId"] = request.watermarkId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWatermarkConsole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWatermarkConsoleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWatermarkConsoleResponse({}));
  }

  /**
   * 删除水印
   * 
   * @param request - DeleteWatermarkConsoleRequest
   * @returns DeleteWatermarkConsoleResponse
   */
  async deleteWatermarkConsole(request: $_model.DeleteWatermarkConsoleRequest): Promise<$_model.DeleteWatermarkConsoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWatermarkConsoleWithOptions(request, runtime);
  }

  /**
   * 删除工作流
   * 
   * @param request - DeleteWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkflowResponse
   */
  async deleteWorkflowWithOptions(request: $_model.DeleteWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkflow",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkflowResponse({}));
  }

  /**
   * 删除工作流
   * 
   * @param request - DeleteWorkflowRequest
   * @returns DeleteWorkflowResponse
   */
  async deleteWorkflow(request: $_model.DeleteWorkflowRequest): Promise<$_model.DeleteWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWorkflowWithOptions(request, runtime);
  }

  /**
   * 查询用户付费类型
   * 
   * @param request - DescribeBizUserTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBizUserTypeResponse
   */
  async describeBizUserTypeWithOptions(request: $_model.DescribeBizUserTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBizUserTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBizUserType",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBizUserTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBizUserTypeResponse({}));
  }

  /**
   * 查询用户付费类型
   * 
   * @param request - DescribeBizUserTypeRequest
   * @returns DescribeBizUserTypeResponse
   */
  async describeBizUserType(request: $_model.DescribeBizUserTypeRequest): Promise<$_model.DescribeBizUserTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBizUserTypeWithOptions(request, runtime);
  }

  /**
   * 获取日志
   * 
   * @param request - DescribeCdnDomainLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCdnDomainLogsResponse
   */
  async describeCdnDomainLogsWithOptions(request: $_model.DescribeCdnDomainLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCdnDomainLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.logDay)) {
      query["LogDay"] = request.logDay;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCdnDomainLogs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCdnDomainLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCdnDomainLogsResponse({}));
  }

  /**
   * 获取日志
   * 
   * @param request - DescribeCdnDomainLogsRequest
   * @returns DescribeCdnDomainLogsResponse
   */
  async describeCdnDomainLogs(request: $_model.DescribeCdnDomainLogsRequest): Promise<$_model.DescribeCdnDomainLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCdnDomainLogsWithOptions(request, runtime);
  }

  /**
   * 异步任务管理能力建设
   * 
   * @param request - DescribeDailyAsyncJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDailyAsyncJobResponse
   */
  async describeDailyAsyncJobWithOptions(request: $_model.DescribeDailyAsyncJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDailyAsyncJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.jobState)) {
      query["JobState"] = request.jobState;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDailyAsyncJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDailyAsyncJobResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDailyAsyncJobResponse({}));
  }

  /**
   * 异步任务管理能力建设
   * 
   * @param request - DescribeDailyAsyncJobRequest
   * @returns DescribeDailyAsyncJobResponse
   */
  async describeDailyAsyncJob(request: $_model.DescribeDailyAsyncJobRequest): Promise<$_model.DescribeDailyAsyncJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDailyAsyncJobWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeDomainBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainBpsDataResponse
   */
  async describeDomainBpsDataWithOptions(request: $_model.DescribeDomainBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainBpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeMerge)) {
      query["TimeMerge"] = request.timeMerge;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainBpsData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainBpsDataResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeDomainBpsDataRequest
   * @returns DescribeDomainBpsDataResponse
   */
  async describeDomainBpsData(request: $_model.DescribeDomainBpsDataRequest): Promise<$_model.DescribeDomainBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainBpsDataWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeDomainFlowDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainFlowDataResponse
   */
  async describeDomainFlowDataWithOptions(request: $_model.DescribeDomainFlowDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainFlowDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeMerge)) {
      query["TimeMerge"] = request.timeMerge;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainFlowData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainFlowDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainFlowDataResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeDomainFlowDataRequest
   * @returns DescribeDomainFlowDataResponse
   */
  async describeDomainFlowData(request: $_model.DescribeDomainFlowDataRequest): Promise<$_model.DescribeDomainFlowDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainFlowDataWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeFileIdPlayStatisByEdgeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFileIdPlayStatisByEdgeResponse
   */
  async describeFileIdPlayStatisByEdgeWithOptions(request: $_model.DescribeFileIdPlayStatisByEdgeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFileIdPlayStatisByEdgeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scrollToken)) {
      query["ScrollToken"] = request.scrollToken;
    }

    if (!$dara.isNull(request.to)) {
      query["To"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFileIdPlayStatisByEdge",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFileIdPlayStatisByEdgeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFileIdPlayStatisByEdgeResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeFileIdPlayStatisByEdgeRequest
   * @returns DescribeFileIdPlayStatisByEdgeResponse
   */
  async describeFileIdPlayStatisByEdge(request: $_model.DescribeFileIdPlayStatisByEdgeRequest): Promise<$_model.DescribeFileIdPlayStatisByEdgeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFileIdPlayStatisByEdgeWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeFileIdPlayStatisByOriginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFileIdPlayStatisByOriginResponse
   */
  async describeFileIdPlayStatisByOriginWithOptions(request: $_model.DescribeFileIdPlayStatisByOriginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFileIdPlayStatisByOriginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scrollToken)) {
      query["ScrollToken"] = request.scrollToken;
    }

    if (!$dara.isNull(request.to)) {
      query["To"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFileIdPlayStatisByOrigin",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFileIdPlayStatisByOriginResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFileIdPlayStatisByOriginResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeFileIdPlayStatisByOriginRequest
   * @returns DescribeFileIdPlayStatisByOriginResponse
   */
  async describeFileIdPlayStatisByOrigin(request: $_model.DescribeFileIdPlayStatisByOriginRequest): Promise<$_model.DescribeFileIdPlayStatisByOriginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFileIdPlayStatisByOriginWithOptions(request, runtime);
  }

  /**
   * 查询已保存的筛选过滤条件
   * 
   * @param request - DescribeFilterConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFilterConfigsResponse
   */
  async describeFilterConfigsWithOptions(request: $_model.DescribeFilterConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFilterConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFilterConfigs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFilterConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFilterConfigsResponse({}));
  }

  /**
   * 查询已保存的筛选过滤条件
   * 
   * @param request - DescribeFilterConfigsRequest
   * @returns DescribeFilterConfigsResponse
   */
  async describeFilterConfigs(request: $_model.DescribeFilterConfigsRequest): Promise<$_model.DescribeFilterConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFilterConfigsWithOptions(request, runtime);
  }

  /**
   * Queries the distribution of media asset data by time. The maximum time range to query is 6 months.
   * 
   * @remarks
   *   This operation is available only in the China (Shanghai) region.
   * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the previous 7 days. If you set both the parameters, the request returns the data collected within the specified time range.
   * 
   * @param request - DescribeMediaDistributionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMediaDistributionResponse
   */
  async describeMediaDistributionWithOptions(request: $_model.DescribeMediaDistributionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMediaDistributionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.storageClass)) {
      query["StorageClass"] = request.storageClass;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMediaDistribution",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMediaDistributionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMediaDistributionResponse({}));
  }

  /**
   * Queries the distribution of media asset data by time. The maximum time range to query is 6 months.
   * 
   * @remarks
   *   This operation is available only in the China (Shanghai) region.
   * *   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the previous 7 days. If you set both the parameters, the request returns the data collected within the specified time range.
   * 
   * @param request - DescribeMediaDistributionRequest
   * @returns DescribeMediaDistributionResponse
   */
  async describeMediaDistribution(request: $_model.DescribeMediaDistributionRequest): Promise<$_model.DescribeMediaDistributionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMediaDistributionWithOptions(request, runtime);
  }

  /**
   * 订单询价
   * 
   * @param request - DescribeMultiPriceForLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMultiPriceForLicenseResponse
   */
  async describeMultiPriceForLicenseWithOptions(request: $_model.DescribeMultiPriceForLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMultiPriceForLicenseResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMultiPriceForLicense",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMultiPriceForLicenseResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMultiPriceForLicenseResponse({}));
  }

  /**
   * 订单询价
   * 
   * @param request - DescribeMultiPriceForLicenseRequest
   * @returns DescribeMultiPriceForLicenseResponse
   */
  async describeMultiPriceForLicense(request: $_model.DescribeMultiPriceForLicenseRequest): Promise<$_model.DescribeMultiPriceForLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMultiPriceForLicenseWithOptions(request, runtime);
  }

  /**
   * 获取客户播放详情信息
   * 
   * @param request - DescribePlayDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlayDetailResponse
   */
  async describePlayDetailWithOptions(request: $_model.DescribePlayDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlayDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.playTs)) {
      query["PlayTs"] = request.playTs;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlayDetail",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlayDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlayDetailResponse({}));
  }

  /**
   * 获取客户播放详情信息
   * 
   * @param request - DescribePlayDetailRequest
   * @returns DescribePlayDetailResponse
   */
  async describePlayDetail(request: $_model.DescribePlayDetailRequest): Promise<$_model.DescribePlayDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlayDetailWithOptions(request, runtime);
  }

  /**
   * 获取客户播放事件列表
   * 
   * @param request - DescribePlayEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlayEventListResponse
   */
  async describePlayEventListWithOptions(request: $_model.DescribePlayEventListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlayEventListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.playTs)) {
      query["PlayTs"] = request.playTs;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlayEventList",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlayEventListResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlayEventListResponse({}));
  }

  /**
   * 获取客户播放事件列表
   * 
   * @param request - DescribePlayEventListRequest
   * @returns DescribePlayEventListResponse
   */
  async describePlayEventList(request: $_model.DescribePlayEventListRequest): Promise<$_model.DescribePlayEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlayEventListWithOptions(request, runtime);
  }

  /**
   * 获取单点首帧耗时数据
   * 
   * @param request - DescribePlayFirstFrameDurationMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlayFirstFrameDurationMetricDataResponse
   */
  async describePlayFirstFrameDurationMetricDataWithOptions(request: $_model.DescribePlayFirstFrameDurationMetricDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlayFirstFrameDurationMetricDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTs)) {
      query["BeginTs"] = request.beginTs;
    }

    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.traceId)) {
      query["TraceId"] = request.traceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlayFirstFrameDurationMetricData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlayFirstFrameDurationMetricDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlayFirstFrameDurationMetricDataResponse({}));
  }

  /**
   * 获取单点首帧耗时数据
   * 
   * @param request - DescribePlayFirstFrameDurationMetricDataRequest
   * @returns DescribePlayFirstFrameDurationMetricDataResponse
   */
  async describePlayFirstFrameDurationMetricData(request: $_model.DescribePlayFirstFrameDurationMetricDataRequest): Promise<$_model.DescribePlayFirstFrameDurationMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlayFirstFrameDurationMetricDataWithOptions(request, runtime);
  }

  /**
   * 获取播放信息列表
   * 
   * @param request - DescribePlayListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlayListResponse
   */
  async describePlayListWithOptions(request: $_model.DescribePlayListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlayListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTs)) {
      query["BeginTs"] = request.beginTs;
    }

    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.orderName)) {
      query["OrderName"] = request.orderName;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.playType)) {
      query["PlayType"] = request.playType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.traceId)) {
      query["TraceId"] = request.traceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlayList",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlayListResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlayListResponse({}));
  }

  /**
   * 获取播放信息列表
   * 
   * @param request - DescribePlayListRequest
   * @returns DescribePlayListResponse
   */
  async describePlayList(request: $_model.DescribePlayListRequest): Promise<$_model.DescribePlayListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlayListWithOptions(request, runtime);
  }

  /**
   * 查询用户能够查询的数据指标
   * 
   * @param request - DescribePlayMetricAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlayMetricAuthResponse
   */
  async describePlayMetricAuthWithOptions(request: $_model.DescribePlayMetricAuthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlayMetricAuthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlayMetricAuth",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlayMetricAuthResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlayMetricAuthResponse({}));
  }

  /**
   * 查询用户能够查询的数据指标
   * 
   * @param request - DescribePlayMetricAuthRequest
   * @returns DescribePlayMetricAuthResponse
   */
  async describePlayMetricAuth(request: $_model.DescribePlayMetricAuthRequest): Promise<$_model.DescribePlayMetricAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlayMetricAuthWithOptions(request, runtime);
  }

  /**
   * 查询播放器指标数据
   * 
   * @param request - DescribePlayMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlayMetricDataResponse
   */
  async describePlayMetricDataWithOptions(request: $_model.DescribePlayMetricDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlayMetricDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.definition)) {
      query["Definition"] = request.definition;
    }

    if (!$dara.isNull(request.itemConfigs)) {
      query["ItemConfigs"] = request.itemConfigs;
    }

    if (!$dara.isNull(request.network)) {
      query["Network"] = request.network;
    }

    if (!$dara.isNull(request.os)) {
      query["Os"] = request.os;
    }

    if (!$dara.isNull(request.sdkVersion)) {
      query["SdkVersion"] = request.sdkVersion;
    }

    if (!$dara.isNull(request.terminalType)) {
      query["TerminalType"] = request.terminalType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.beginTs)) {
      body["BeginTs"] = request.beginTs;
    }

    if (!$dara.isNull(request.endTs)) {
      body["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.experienceLevel)) {
      body["ExperienceLevel"] = request.experienceLevel;
    }

    if (!$dara.isNull(request.metricType)) {
      body["MetricType"] = request.metricType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlayMetricData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlayMetricDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlayMetricDataResponse({}));
  }

  /**
   * 查询播放器指标数据
   * 
   * @param request - DescribePlayMetricDataRequest
   * @returns DescribePlayMetricDataResponse
   */
  async describePlayMetricData(request: $_model.DescribePlayMetricDataRequest): Promise<$_model.DescribePlayMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlayMetricDataWithOptions(request, runtime);
  }

  /**
   * 获取Ooe播放信息列表
   * 
   * @param tmpReq - DescribePlayQoeListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlayQoeListResponse
   */
  async describePlayQoeListWithOptions(tmpReq: $_model.DescribePlayQoeListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlayQoeListResponse> {
    tmpReq.validate();
    let request = new $_model.DescribePlayQoeListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.metricTypes)) {
      request.metricTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metricTypes, "MetricTypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.beginTs)) {
      query["BeginTs"] = request.beginTs;
    }

    if (!$dara.isNull(request.definition)) {
      query["Definition"] = request.definition;
    }

    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.itemConfigs)) {
      query["ItemConfigs"] = request.itemConfigs;
    }

    if (!$dara.isNull(request.metricTypesShrink)) {
      query["MetricTypes"] = request.metricTypesShrink;
    }

    if (!$dara.isNull(request.network)) {
      query["Network"] = request.network;
    }

    if (!$dara.isNull(request.orderName)) {
      query["OrderName"] = request.orderName;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.os)) {
      query["Os"] = request.os;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.terminalType)) {
      query["TerminalType"] = request.terminalType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlayQoeList",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlayQoeListResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlayQoeListResponse({}));
  }

  /**
   * 获取Ooe播放信息列表
   * 
   * @param request - DescribePlayQoeListRequest
   * @returns DescribePlayQoeListResponse
   */
  async describePlayQoeList(request: $_model.DescribePlayQoeListRequest): Promise<$_model.DescribePlayQoeListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlayQoeListWithOptions(request, runtime);
  }

  /**
   * 获取Oos播放信息列表
   * 
   * @param tmpReq - DescribePlayQosListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlayQosListResponse
   */
  async describePlayQosListWithOptions(tmpReq: $_model.DescribePlayQosListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlayQosListResponse> {
    tmpReq.validate();
    let request = new $_model.DescribePlayQosListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.metricTypes)) {
      request.metricTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metricTypes, "MetricTypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.beginTs)) {
      query["BeginTs"] = request.beginTs;
    }

    if (!$dara.isNull(request.definition)) {
      query["Definition"] = request.definition;
    }

    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.itemConfigs)) {
      query["ItemConfigs"] = request.itemConfigs;
    }

    if (!$dara.isNull(request.metricTypesShrink)) {
      query["MetricTypes"] = request.metricTypesShrink;
    }

    if (!$dara.isNull(request.network)) {
      query["Network"] = request.network;
    }

    if (!$dara.isNull(request.orderName)) {
      query["OrderName"] = request.orderName;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.os)) {
      query["Os"] = request.os;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.terminalType)) {
      query["TerminalType"] = request.terminalType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlayQosList",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlayQosListResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlayQosListResponse({}));
  }

  /**
   * 获取Oos播放信息列表
   * 
   * @param request - DescribePlayQosListRequest
   * @returns DescribePlayQosListResponse
   */
  async describePlayQosList(request: $_model.DescribePlayQosListRequest): Promise<$_model.DescribePlayQosListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlayQosListWithOptions(request, runtime);
  }

  /**
   * Queries daily playback statistics on top videos, including video views, unique visitors, and total playback duration.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   You can query playback statistics on top 1,000 videos at most on a specified day. By default, top videos are sorted in descending order based on video views.
   * *   You can call this operation to query only playback statistics collected on videos that are played by using ApsaraVideo Player SDKs.
   * *   Playback statistics for the previous day are generated at 09:00 on the current day, in UTC+8.
   * *   You can query data that is generated since January 1, 2018. The maximum time range to query is 180 days.
   * 
   * @param request - DescribePlayTopVideosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlayTopVideosResponse
   */
  async describePlayTopVideosWithOptions(request: $_model.DescribePlayTopVideosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlayTopVideosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizDate)) {
      query["BizDate"] = request.bizDate;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlayTopVideos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlayTopVideosResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlayTopVideosResponse({}));
  }

  /**
   * Queries daily playback statistics on top videos, including video views, unique visitors, and total playback duration.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   You can query playback statistics on top 1,000 videos at most on a specified day. By default, top videos are sorted in descending order based on video views.
   * *   You can call this operation to query only playback statistics collected on videos that are played by using ApsaraVideo Player SDKs.
   * *   Playback statistics for the previous day are generated at 09:00 on the current day, in UTC+8.
   * *   You can query data that is generated since January 1, 2018. The maximum time range to query is 180 days.
   * 
   * @param request - DescribePlayTopVideosRequest
   * @returns DescribePlayTopVideosResponse
   */
  async describePlayTopVideos(request: $_model.DescribePlayTopVideosRequest): Promise<$_model.DescribePlayTopVideosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlayTopVideosWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on average playback each day in a specified time range.
   * 
   * @remarks
   * > *   This operation is available only in the **China (Shanghai)** region.
   * > *   You can call this operation to query only playback statistics collected on videos that are played by using ApsaraVideo Player SDKs.
   * > *   Playback statistics for the previous day are generated at 09:00 on the current day, in UTC+8.
   * > *   You can query data that is generated since January 1, 2018. The maximum time range to query is 180 days.
   * 
   * @param request - DescribePlayUserAvgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlayUserAvgResponse
   */
  async describePlayUserAvgWithOptions(request: $_model.DescribePlayUserAvgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlayUserAvgResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlayUserAvg",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlayUserAvgResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlayUserAvgResponse({}));
  }

  /**
   * Queries the statistics on average playback each day in a specified time range.
   * 
   * @remarks
   * > *   This operation is available only in the **China (Shanghai)** region.
   * > *   You can call this operation to query only playback statistics collected on videos that are played by using ApsaraVideo Player SDKs.
   * > *   Playback statistics for the previous day are generated at 09:00 on the current day, in UTC+8.
   * > *   You can query data that is generated since January 1, 2018. The maximum time range to query is 180 days.
   * 
   * @param request - DescribePlayUserAvgRequest
   * @returns DescribePlayUserAvgResponse
   */
  async describePlayUserAvg(request: $_model.DescribePlayUserAvgRequest): Promise<$_model.DescribePlayUserAvgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlayUserAvgWithOptions(request, runtime);
  }

  /**
   * Queries the daily playback statistics in a specified time range. The playback statistics include the total number of views, total number of viewers, total playback duration, and playback duration distribution.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   You can call this operation to query only playback statistics collected on videos that are played by using ApsaraVideo Player SDKs.
   * *   Playback statistics for the current day are generated at 09:00 (UTC+8) on the next day.
   * *   You can query data that is generated since January 1, 2018. The maximum time range to query is 180 days.
   * 
   * @param request - DescribePlayUserTotalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlayUserTotalResponse
   */
  async describePlayUserTotalWithOptions(request: $_model.DescribePlayUserTotalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlayUserTotalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlayUserTotal",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlayUserTotalResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlayUserTotalResponse({}));
  }

  /**
   * Queries the daily playback statistics in a specified time range. The playback statistics include the total number of views, total number of viewers, total playback duration, and playback duration distribution.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   You can call this operation to query only playback statistics collected on videos that are played by using ApsaraVideo Player SDKs.
   * *   Playback statistics for the current day are generated at 09:00 (UTC+8) on the next day.
   * *   You can query data that is generated since January 1, 2018. The maximum time range to query is 180 days.
   * 
   * @param request - DescribePlayUserTotalRequest
   * @returns DescribePlayUserTotalResponse
   */
  async describePlayUserTotal(request: $_model.DescribePlayUserTotalRequest): Promise<$_model.DescribePlayUserTotalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlayUserTotalWithOptions(request, runtime);
  }

  /**
   * Queries daily playback statistics on a video in the specified time range.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   You can call this operation to query only playback statistics collected on videos that are played by using ApsaraVideo Player SDKs.
   * *   Playback statistics for the current day are generated at 09:00 (UTC+8) on the next day.
   * *   You can query only data in the last 730 days. The maximum time range to query is 180 days.
   * 
   * @param request - DescribePlayVideoStatisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlayVideoStatisResponse
   */
  async describePlayVideoStatisWithOptions(request: $_model.DescribePlayVideoStatisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlayVideoStatisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlayVideoStatis",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlayVideoStatisResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlayVideoStatisResponse({}));
  }

  /**
   * Queries daily playback statistics on a video in the specified time range.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   You can call this operation to query only playback statistics collected on videos that are played by using ApsaraVideo Player SDKs.
   * *   Playback statistics for the current day are generated at 09:00 (UTC+8) on the next day.
   * *   You can query only data in the last 730 days. The maximum time range to query is 180 days.
   * 
   * @param request - DescribePlayVideoStatisRequest
   * @returns DescribePlayVideoStatisResponse
   */
  async describePlayVideoStatis(request: $_model.DescribePlayVideoStatisRequest): Promise<$_model.DescribePlayVideoStatisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlayVideoStatisWithOptions(request, runtime);
  }

  /**
   * 获取查询条件信息
   * 
   * @param request - DescribeQueryConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQueryConfigsResponse
   */
  async describeQueryConfigsWithOptions(request: $_model.DescribeQueryConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQueryConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQueryConfigs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeQueryConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeQueryConfigsResponse({}));
  }

  /**
   * 获取查询条件信息
   * 
   * @param request - DescribeQueryConfigsRequest
   * @returns DescribeQueryConfigsResponse
   */
  async describeQueryConfigs(request: $_model.DescribeQueryConfigsRequest): Promise<$_model.DescribeQueryConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQueryConfigsWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeRefreshQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRefreshQuotaResponse
   */
  async describeRefreshQuotaWithOptions(request: $_model.DescribeRefreshQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRefreshQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRefreshQuota",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRefreshQuotaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRefreshQuotaResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeRefreshQuotaRequest
   * @returns DescribeRefreshQuotaResponse
   */
  async describeRefreshQuota(request: $_model.DescribeRefreshQuotaRequest): Promise<$_model.DescribeRefreshQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRefreshQuotaWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeRefreshTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRefreshTasksResponse
   */
  async describeRefreshTasksWithOptions(request: $_model.DescribeRefreshTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRefreshTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRefreshTasks",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRefreshTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRefreshTasksResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeRefreshTasksRequest
   * @returns DescribeRefreshTasksResponse
   */
  async describeRefreshTasks(request: $_model.DescribeRefreshTasksRequest): Promise<$_model.DescribeRefreshTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRefreshTasksWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeUserVodStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserVodStatusResponse
   */
  async describeUserVodStatusWithOptions(request: $_model.DescribeUserVodStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserVodStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserVodStatus",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserVodStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserVodStatusResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeUserVodStatusRequest
   * @returns DescribeUserVodStatusResponse
   */
  async describeUserVodStatus(request: $_model.DescribeUserVodStatusRequest): Promise<$_model.DescribeUserVodStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserVodStatusWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on video AI of different types, such as automated review and media fingerprinting.
   * 
   * @remarks
   * > *   This operation is available only in the **China (Shanghai)** region.
   * >*   If the time range to query is less than or equal to seven days, the system returns the statistics collected on an hourly basis. If the time range to query is greater than seven days, the system returns the statistics collected on a daily basis. The maximum time range that you can specify to query is 31 days.
   * 
   * @param request - DescribeVodAIDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodAIDataResponse
   */
  async describeVodAIDataWithOptions(request: $_model.DescribeVodAIDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodAIDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIType)) {
      query["AIType"] = request.AIType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodAIData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodAIDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodAIDataResponse({}));
  }

  /**
   * Queries the statistics on video AI of different types, such as automated review and media fingerprinting.
   * 
   * @remarks
   * > *   This operation is available only in the **China (Shanghai)** region.
   * >*   If the time range to query is less than or equal to seven days, the system returns the statistics collected on an hourly basis. If the time range to query is greater than seven days, the system returns the statistics collected on a daily basis. The maximum time range that you can specify to query is 31 days.
   * 
   * @param request - DescribeVodAIDataRequest
   * @returns DescribeVodAIDataResponse
   */
  async describeVodAIData(request: $_model.DescribeVodAIDataRequest): Promise<$_model.DescribeVodAIDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodAIDataWithOptions(request, runtime);
  }

  /**
   * 查询App Name
   * 
   * @param request - DescribeVodAppNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodAppNameResponse
   */
  async describeVodAppNameWithOptions(request: $_model.DescribeVodAppNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodAppNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodAppName",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodAppNameResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodAppNameResponse({}));
  }

  /**
   * 查询App Name
   * 
   * @param request - DescribeVodAppNameRequest
   * @returns DescribeVodAppNameResponse
   */
  async describeVodAppName(request: $_model.DescribeVodAppNameRequest): Promise<$_model.DescribeVodAppNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodAppNameWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodCertificateDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodCertificateDetailResponse
   */
  async describeVodCertificateDetailWithOptions(request: $_model.DescribeVodCertificateDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodCertificateDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodCertificateDetail",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodCertificateDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodCertificateDetailResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodCertificateDetailRequest
   * @returns DescribeVodCertificateDetailResponse
   */
  async describeVodCertificateDetail(request: $_model.DescribeVodCertificateDetailRequest): Promise<$_model.DescribeVodCertificateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodCertificateDetailWithOptions(request, runtime);
  }

  /**
   * 查询证书详情
   * 
   * @param request - DescribeVodCertificateDetailByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodCertificateDetailByIdResponse
   */
  async describeVodCertificateDetailByIdWithOptions(request: $_model.DescribeVodCertificateDetailByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodCertificateDetailByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.certRegion)) {
      query["CertRegion"] = request.certRegion;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodCertificateDetailById",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodCertificateDetailByIdResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodCertificateDetailByIdResponse({}));
  }

  /**
   * 查询证书详情
   * 
   * @param request - DescribeVodCertificateDetailByIdRequest
   * @returns DescribeVodCertificateDetailByIdResponse
   */
  async describeVodCertificateDetailById(request: $_model.DescribeVodCertificateDetailByIdRequest): Promise<$_model.DescribeVodCertificateDetailByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodCertificateDetailByIdWithOptions(request, runtime);
  }

  /**
   * Queries the certificates of a specified domain name for CDN or all the domain names for CDN within your Alibaba Cloud account.
   * 
   * @remarks
   * >  This operation is available only in the **China (Shanghai)** region.
   * 
   * @param request - DescribeVodCertificateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodCertificateListResponse
   */
  async describeVodCertificateListWithOptions(request: $_model.DescribeVodCertificateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodCertificateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodCertificateList",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodCertificateListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodCertificateListResponse({}));
  }

  /**
   * Queries the certificates of a specified domain name for CDN or all the domain names for CDN within your Alibaba Cloud account.
   * 
   * @remarks
   * >  This operation is available only in the **China (Shanghai)** region.
   * 
   * @param request - DescribeVodCertificateListRequest
   * @returns DescribeVodCertificateListResponse
   */
  async describeVodCertificateList(request: $_model.DescribeVodCertificateListRequest): Promise<$_model.DescribeVodCertificateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodCertificateListWithOptions(request, runtime);
  }

  /**
   * Queries the bandwidth for one or more specified domain names for CDN.
   * 
   * @remarks
   * If you specify neither the StartTime parameter nor the EndTime parameter, the data in the last 24 hours is queried. Alternatively, you can specify both the StartTime and EndTime parameters to query data that is generated in the specified duration. You can query data for the last 90 days at most.
   * 
   * @param request - DescribeVodDomainBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainBpsDataResponse
   */
  async describeVodDomainBpsDataWithOptions(request: $_model.DescribeVodDomainBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainBpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainBpsData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainBpsDataResponse({}));
  }

  /**
   * Queries the bandwidth for one or more specified domain names for CDN.
   * 
   * @remarks
   * If you specify neither the StartTime parameter nor the EndTime parameter, the data in the last 24 hours is queried. Alternatively, you can specify both the StartTime and EndTime parameters to query data that is generated in the specified duration. You can query data for the last 90 days at most.
   * 
   * @param request - DescribeVodDomainBpsDataRequest
   * @returns DescribeVodDomainBpsDataResponse
   */
  async describeVodDomainBpsData(request: $_model.DescribeVodDomainBpsDataRequest): Promise<$_model.DescribeVodDomainBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainBpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the bandwidth data by protocol.
   * 
   * @remarks
   * You can call this API operation up to 20 times per second per account. If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range. Time granularity
   * The time granularity supported by Interval, the maximum time period within which historical data is available, and the data delay vary based on the time range to query, as described in the following table.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |15 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|3 to 4 hours|
   * |1 day|90 days|366 days|4 hours in most cases, not more than 24 hours|
   * 
   * @param request - DescribeVodDomainBpsDataByLayerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainBpsDataByLayerResponse
   */
  async describeVodDomainBpsDataByLayerWithOptions(request: $_model.DescribeVodDomainBpsDataByLayerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainBpsDataByLayerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.layer)) {
      query["Layer"] = request.layer;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainBpsDataByLayer",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainBpsDataByLayerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainBpsDataByLayerResponse({}));
  }

  /**
   * Queries the bandwidth data by protocol.
   * 
   * @remarks
   * You can call this API operation up to 20 times per second per account. If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range. Time granularity
   * The time granularity supported by Interval, the maximum time period within which historical data is available, and the data delay vary based on the time range to query, as described in the following table.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |15 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|3 to 4 hours|
   * |1 day|90 days|366 days|4 hours in most cases, not more than 24 hours|
   * 
   * @param request - DescribeVodDomainBpsDataByLayerRequest
   * @returns DescribeVodDomainBpsDataByLayerResponse
   */
  async describeVodDomainBpsDataByLayer(request: $_model.DescribeVodDomainBpsDataByLayerRequest): Promise<$_model.DescribeVodDomainBpsDataByLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainBpsDataByLayerWithOptions(request, runtime);
  }

  /**
   * Queries the certificate information about an accelerated domain name.
   * 
   * @remarks
   * This operation is available only in the **China (Shanghai)** region.
   * 
   * @param request - DescribeVodDomainCertificateInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainCertificateInfoResponse
   */
  async describeVodDomainCertificateInfoWithOptions(request: $_model.DescribeVodDomainCertificateInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainCertificateInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainCertificateInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainCertificateInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainCertificateInfoResponse({}));
  }

  /**
   * Queries the certificate information about an accelerated domain name.
   * 
   * @remarks
   * This operation is available only in the **China (Shanghai)** region.
   * 
   * @param request - DescribeVodDomainCertificateInfoRequest
   * @returns DescribeVodDomainCertificateInfoResponse
   */
  async describeVodDomainCertificateInfo(request: $_model.DescribeVodDomainCertificateInfoRequest): Promise<$_model.DescribeVodDomainCertificateInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainCertificateInfoWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainCnameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainCnameResponse
   */
  async describeVodDomainCnameWithOptions(request: $_model.DescribeVodDomainCnameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainCnameResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainCname",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainCnameResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainCnameResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainCnameRequest
   * @returns DescribeVodDomainCnameResponse
   */
  async describeVodDomainCname(request: $_model.DescribeVodDomainCnameRequest): Promise<$_model.DescribeVodDomainCnameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainCnameWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a domain name for CDN. You can query the configurations of multiple features at a time.
   * 
   * @remarks
   * > This operation is available only in the **China (Shanghai)** region.
   * 
   * @param request - DescribeVodDomainConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainConfigsResponse
   */
  async describeVodDomainConfigsWithOptions(request: $_model.DescribeVodDomainConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainConfigs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainConfigsResponse({}));
  }

  /**
   * Queries the configurations of a domain name for CDN. You can query the configurations of multiple features at a time.
   * 
   * @remarks
   * > This operation is available only in the **China (Shanghai)** region.
   * 
   * @param request - DescribeVodDomainConfigsRequest
   * @returns DescribeVodDomainConfigsResponse
   */
  async describeVodDomainConfigs(request: $_model.DescribeVodDomainConfigsRequest): Promise<$_model.DescribeVodDomainConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainConfigsWithOptions(request, runtime);
  }

  /**
   * Queries the basic information about a specified domain name for CDN.
   * 
   * @remarks
   * > This operation is available only in the **China (Shanghai)** region.
   * 
   * @param request - DescribeVodDomainDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainDetailResponse
   */
  async describeVodDomainDetailWithOptions(request: $_model.DescribeVodDomainDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainDetail",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainDetailResponse({}));
  }

  /**
   * Queries the basic information about a specified domain name for CDN.
   * 
   * @remarks
   * > This operation is available only in the **China (Shanghai)** region.
   * 
   * @param request - DescribeVodDomainDetailRequest
   * @returns DescribeVodDomainDetailResponse
   */
  async describeVodDomainDetail(request: $_model.DescribeVodDomainDetailRequest): Promise<$_model.DescribeVodDomainDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainDetailWithOptions(request, runtime);
  }

  /**
   * Queries the byte hit ratios of accelerated domain names. Byte hit ratios are measured in percentage.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 500 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 24 hours is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay when you do not set `Interval`.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|Time range per query &#x3C; 3 days|93 days|15 minutes|
   * |1 hour|3 days ≤ Time range per query &#x3C; 31 days|186 days|3 to 4 hours|
   * |1 day|31 days ≤ Time span of a single query ≤ 366 days|366 days|4 hours in most cases, not more than 24 hours|
   * 
   * @param request - DescribeVodDomainHitRateDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainHitRateDataResponse
   */
  async describeVodDomainHitRateDataWithOptions(request: $_model.DescribeVodDomainHitRateDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainHitRateDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainHitRateData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainHitRateDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainHitRateDataResponse({}));
  }

  /**
   * Queries the byte hit ratios of accelerated domain names. Byte hit ratios are measured in percentage.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 500 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 24 hours is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay when you do not set `Interval`.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|Time range per query &#x3C; 3 days|93 days|15 minutes|
   * |1 hour|3 days ≤ Time range per query &#x3C; 31 days|186 days|3 to 4 hours|
   * |1 day|31 days ≤ Time span of a single query ≤ 366 days|366 days|4 hours in most cases, not more than 24 hours|
   * 
   * @param request - DescribeVodDomainHitRateDataRequest
   * @returns DescribeVodDomainHitRateDataResponse
   */
  async describeVodDomainHitRateData(request: $_model.DescribeVodDomainHitRateDataRequest): Promise<$_model.DescribeVodDomainHitRateDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainHitRateDataWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainHttpCodeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainHttpCodeDataResponse
   */
  async describeVodDomainHttpCodeDataWithOptions(request: $_model.DescribeVodDomainHttpCodeDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainHttpCodeDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainHttpCodeData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainHttpCodeDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainHttpCodeDataResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainHttpCodeDataRequest
   * @returns DescribeVodDomainHttpCodeDataResponse
   */
  async describeVodDomainHttpCodeData(request: $_model.DescribeVodDomainHttpCodeDataRequest): Promise<$_model.DescribeVodDomainHttpCodeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainHttpCodeDataWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainISPDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainISPDataResponse
   */
  async describeVodDomainISPDataWithOptions(request: $_model.DescribeVodDomainISPDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainISPDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainISPData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainISPDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainISPDataResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainISPDataRequest
   * @returns DescribeVodDomainISPDataResponse
   */
  async describeVodDomainISPData(request: $_model.DescribeVodDomainISPDataRequest): Promise<$_model.DescribeVodDomainISPDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainISPDataWithOptions(request, runtime);
  }

  /**
   * Queries the information about the CDN access logs for a domain name, including the log path.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   For more information about the log format and latency, see [Download logs](https://help.aliyun.com/document_detail/86099.html).
   * *   If you specify neither the StartTime parameter nor the EndTime parameter, the log data in the last 24 hours is queried.
   * *   You can specify both the StartTime and EndTime parameters to query the log data that is generated in the specified time range.
   * 
   * @param request - DescribeVodDomainLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainLogResponse
   */
  async describeVodDomainLogWithOptions(request: $_model.DescribeVodDomainLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
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
      action: "DescribeVodDomainLog",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainLogResponse({}));
  }

  /**
   * Queries the information about the CDN access logs for a domain name, including the log path.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   For more information about the log format and latency, see [Download logs](https://help.aliyun.com/document_detail/86099.html).
   * *   If you specify neither the StartTime parameter nor the EndTime parameter, the log data in the last 24 hours is queried.
   * *   You can specify both the StartTime and EndTime parameters to query the log data that is generated in the specified time range.
   * 
   * @param request - DescribeVodDomainLogRequest
   * @returns DescribeVodDomainLogResponse
   */
  async describeVodDomainLog(request: $_model.DescribeVodDomainLogRequest): Promise<$_model.DescribeVodDomainLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainLogWithOptions(request, runtime);
  }

  /**
   * Queries the 95th percentile bandwidth data of an accelerated domain name.
   * 
   * @param request - DescribeVodDomainMax95BpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainMax95BpsDataResponse
   */
  async describeVodDomainMax95BpsDataWithOptions(request: $_model.DescribeVodDomainMax95BpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainMax95BpsDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainMax95BpsData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainMax95BpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainMax95BpsDataResponse({}));
  }

  /**
   * Queries the 95th percentile bandwidth data of an accelerated domain name.
   * 
   * @param request - DescribeVodDomainMax95BpsDataRequest
   * @returns DescribeVodDomainMax95BpsDataResponse
   */
  async describeVodDomainMax95BpsData(request: $_model.DescribeVodDomainMax95BpsDataRequest): Promise<$_model.DescribeVodDomainMax95BpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainMax95BpsDataWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainPvDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainPvDataResponse
   */
  async describeVodDomainPvDataWithOptions(request: $_model.DescribeVodDomainPvDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainPvDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainPvData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainPvDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainPvDataResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainPvDataRequest
   * @returns DescribeVodDomainPvDataResponse
   */
  async describeVodDomainPvData(request: $_model.DescribeVodDomainPvDataRequest): Promise<$_model.DescribeVodDomainPvDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainPvDataWithOptions(request, runtime);
  }

  /**
   * Queries the number of queries per second (QPS) for one or more accelerated domain names. Data is collected every 5 minutes. You can query data collected in the last 90 days.
   * 
   * @remarks
   * This operation is available only in the China (Shanghai) region.
   * * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|3 to 4 hours|
   * |1 day|366 days|366 days|4 to 24 hours|
   * ---
   * 
   * @param request - DescribeVodDomainQpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainQpsDataResponse
   */
  async describeVodDomainQpsDataWithOptions(request: $_model.DescribeVodDomainQpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainQpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainQpsData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainQpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainQpsDataResponse({}));
  }

  /**
   * Queries the number of queries per second (QPS) for one or more accelerated domain names. Data is collected every 5 minutes. You can query data collected in the last 90 days.
   * 
   * @remarks
   * This operation is available only in the China (Shanghai) region.
   * * You can call this operation up to 100 times per second per account.
   * * If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both these parameters, the request returns the data collected within the specified time range.
   * **Time granularity**
   * The time granularity supported by the Interval parameter, the maximum time period within which historical data is available, and the data delay vary with the maximum time range per query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|3 days|93 days|15 minutes|
   * |1 hour|31 days|186 days|3 to 4 hours|
   * |1 day|366 days|366 days|4 to 24 hours|
   * ---
   * 
   * @param request - DescribeVodDomainQpsDataRequest
   * @returns DescribeVodDomainQpsDataResponse
   */
  async describeVodDomainQpsData(request: $_model.DescribeVodDomainQpsDataRequest): Promise<$_model.DescribeVodDomainQpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainQpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the bandwidth data for one or more accelerated domains. The minimum time granularity is 1 minute. The minimum data latency is 5 minutes. You can query data in the last 186 days. Compared with the DescribeVodDomainBpsData operation, this operation provides a smaller time granularity, lower data latency, and allows you to query historical data within a shorter time period.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 500 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 1 hour is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|Time range per query ≤ 1 hour|7 days|5 minutes|
   * |5 minutes|1 Hour &#x3C; Time range per query ≤ 3 days|93 days|15 minutes|
   * |1 hour|3 days &#x3C; Time range per query ≤ 31 days|186 days|3 to 4 hours|
   * 
   * @param request - DescribeVodDomainRealTimeBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainRealTimeBpsDataResponse
   */
  async describeVodDomainRealTimeBpsDataWithOptions(request: $_model.DescribeVodDomainRealTimeBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainRealTimeBpsDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainRealTimeBpsData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainRealTimeBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainRealTimeBpsDataResponse({}));
  }

  /**
   * Queries the bandwidth data for one or more accelerated domains. The minimum time granularity is 1 minute. The minimum data latency is 5 minutes. You can query data in the last 186 days. Compared with the DescribeVodDomainBpsData operation, this operation provides a smaller time granularity, lower data latency, and allows you to query historical data within a shorter time period.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 500 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 1 hour is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|Time range per query ≤ 1 hour|7 days|5 minutes|
   * |5 minutes|1 Hour &#x3C; Time range per query ≤ 3 days|93 days|15 minutes|
   * |1 hour|3 days &#x3C; Time range per query ≤ 31 days|186 days|3 to 4 hours|
   * 
   * @param request - DescribeVodDomainRealTimeBpsDataRequest
   * @returns DescribeVodDomainRealTimeBpsDataResponse
   */
  async describeVodDomainRealTimeBpsData(request: $_model.DescribeVodDomainRealTimeBpsDataRequest): Promise<$_model.DescribeVodDomainRealTimeBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRealTimeBpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the byte hit ratio for one or more accelerated domains. The minimum time granularity is 1 minute. The minimum data latency is 5 minutes. You can query data in the last 186 days.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 100 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 1 hour is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|Time range per query ≤ 1 hour|7 days|5 minutes|
   * |5 minutes|1 Hour &#x3C; Time range per query ≤ 3 days|93 days|15 minutes|
   * |1 hour|3 days &#x3C; Time range per query ≤ 31 days|186 days|3 to 4 hours|
   * 
   * @param request - DescribeVodDomainRealTimeByteHitRateDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainRealTimeByteHitRateDataResponse
   */
  async describeVodDomainRealTimeByteHitRateDataWithOptions(request: $_model.DescribeVodDomainRealTimeByteHitRateDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainRealTimeByteHitRateDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainRealTimeByteHitRateData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainRealTimeByteHitRateDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainRealTimeByteHitRateDataResponse({}));
  }

  /**
   * Queries the byte hit ratio for one or more accelerated domains. The minimum time granularity is 1 minute. The minimum data latency is 5 minutes. You can query data in the last 186 days.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 100 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 1 hour is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|Time range per query ≤ 1 hour|7 days|5 minutes|
   * |5 minutes|1 Hour &#x3C; Time range per query ≤ 3 days|93 days|15 minutes|
   * |1 hour|3 days &#x3C; Time range per query ≤ 31 days|186 days|3 to 4 hours|
   * 
   * @param request - DescribeVodDomainRealTimeByteHitRateDataRequest
   * @returns DescribeVodDomainRealTimeByteHitRateDataResponse
   */
  async describeVodDomainRealTimeByteHitRateData(request: $_model.DescribeVodDomainRealTimeByteHitRateDataRequest): Promise<$_model.DescribeVodDomainRealTimeByteHitRateDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRealTimeByteHitRateDataWithOptions(request, runtime);
  }

  /**
   * Queries real-time monitoring data of one or more accelerated domain names.
   * 
   * @remarks
   * You can query data within the last seven days. Data is collected every minute. You can call this API operation up to 10 times per second per account.
   * 
   * @param request - DescribeVodDomainRealTimeDetailDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainRealTimeDetailDataResponse
   */
  async describeVodDomainRealTimeDetailDataWithOptions(request: $_model.DescribeVodDomainRealTimeDetailDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainRealTimeDetailDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainRealTimeDetailData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainRealTimeDetailDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainRealTimeDetailDataResponse({}));
  }

  /**
   * Queries real-time monitoring data of one or more accelerated domain names.
   * 
   * @remarks
   * You can query data within the last seven days. Data is collected every minute. You can call this API operation up to 10 times per second per account.
   * 
   * @param request - DescribeVodDomainRealTimeDetailDataRequest
   * @returns DescribeVodDomainRealTimeDetailDataResponse
   */
  async describeVodDomainRealTimeDetailData(request: $_model.DescribeVodDomainRealTimeDetailDataRequest): Promise<$_model.DescribeVodDomainRealTimeDetailDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRealTimeDetailDataWithOptions(request, runtime);
  }

  /**
   * Queries the total number of HTTP status codes and proportion of each HTTP status code for one or more accelerated domains. The minimum time granularity is 1 minute. The minimum data latency is 5 minutes. You can query data in the last 186 days.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 100 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 1 hour is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Time range per query|Historical data available (days)|Data latency|
   * |---|---|---|---|
   * |1 minute|Time range per query ≤ 1 hour|7 days|5 minutes|
   * |5 minutes|1 hour &#x3C; Time range per query &#x3C; 3 days|93 days|15 minutes|
   * |1 hour|3 days ≤ Time range per query &#x3C; 31 days|186 days|3 to 4 hours|
   * 
   * @param request - DescribeVodDomainRealTimeHttpCodeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainRealTimeHttpCodeDataResponse
   */
  async describeVodDomainRealTimeHttpCodeDataWithOptions(request: $_model.DescribeVodDomainRealTimeHttpCodeDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainRealTimeHttpCodeDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainRealTimeHttpCodeData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainRealTimeHttpCodeDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainRealTimeHttpCodeDataResponse({}));
  }

  /**
   * Queries the total number of HTTP status codes and proportion of each HTTP status code for one or more accelerated domains. The minimum time granularity is 1 minute. The minimum data latency is 5 minutes. You can query data in the last 186 days.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 100 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 1 hour is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Time range per query|Historical data available (days)|Data latency|
   * |---|---|---|---|
   * |1 minute|Time range per query ≤ 1 hour|7 days|5 minutes|
   * |5 minutes|1 hour &#x3C; Time range per query &#x3C; 3 days|93 days|15 minutes|
   * |1 hour|3 days ≤ Time range per query &#x3C; 31 days|186 days|3 to 4 hours|
   * 
   * @param request - DescribeVodDomainRealTimeHttpCodeDataRequest
   * @returns DescribeVodDomainRealTimeHttpCodeDataResponse
   */
  async describeVodDomainRealTimeHttpCodeData(request: $_model.DescribeVodDomainRealTimeHttpCodeDataRequest): Promise<$_model.DescribeVodDomainRealTimeHttpCodeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRealTimeHttpCodeDataWithOptions(request, runtime);
  }

  /**
   * Queries the number of queries per second (QPS) for one or more accelerated domains. The minimum time granularity is 1 minute. The minimum data latency is 5 minutes. You can query data in the last 186 days.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 500 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 1 hour is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|Time range per query ≤ 1 hour|7 days|5 minutes|
   * |5 minutes|1 Hour &#x3C; Time range per query ≤ 3 days|93 days|15 minutes|
   * |1 hour|3 days &#x3C; Time range per query ≤ 31 days|186 days|3 to 4 hours|
   * 
   * @param request - DescribeVodDomainRealTimeQpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainRealTimeQpsDataResponse
   */
  async describeVodDomainRealTimeQpsDataWithOptions(request: $_model.DescribeVodDomainRealTimeQpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainRealTimeQpsDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainRealTimeQpsData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainRealTimeQpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainRealTimeQpsDataResponse({}));
  }

  /**
   * Queries the number of queries per second (QPS) for one or more accelerated domains. The minimum time granularity is 1 minute. The minimum data latency is 5 minutes. You can query data in the last 186 days.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 500 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 1 hour is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|Time range per query ≤ 1 hour|7 days|5 minutes|
   * |5 minutes|1 Hour &#x3C; Time range per query ≤ 3 days|93 days|15 minutes|
   * |1 hour|3 days &#x3C; Time range per query ≤ 31 days|186 days|3 to 4 hours|
   * 
   * @param request - DescribeVodDomainRealTimeQpsDataRequest
   * @returns DescribeVodDomainRealTimeQpsDataResponse
   */
  async describeVodDomainRealTimeQpsData(request: $_model.DescribeVodDomainRealTimeQpsDataRequest): Promise<$_model.DescribeVodDomainRealTimeQpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRealTimeQpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the request hit ratio data for one or more accelerated domain names. The minimum time granularity is 1 minute. The minimum data latency is 5 minutes. You can query data in the last 186 days.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 100 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 1 hour is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * * By default, the POST method is used for Go. To use the FET method, you must declare `request.Method="GET"`.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|Time range per query ≤ 1 hour|7 days|5 minutes|
   * |5 minutes|1 hour &#x3C; Time range per query &#x3C; 3 days|93 days|15 minutes|
   * |1 hour|3 days ≤ Time range per query &#x3C; 31 days|186 days|3 to 4 hours|
   * 
   * @param request - DescribeVodDomainRealTimeReqHitRateDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainRealTimeReqHitRateDataResponse
   */
  async describeVodDomainRealTimeReqHitRateDataWithOptions(request: $_model.DescribeVodDomainRealTimeReqHitRateDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainRealTimeReqHitRateDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainRealTimeReqHitRateData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainRealTimeReqHitRateDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainRealTimeReqHitRateDataResponse({}));
  }

  /**
   * Queries the request hit ratio data for one or more accelerated domain names. The minimum time granularity is 1 minute. The minimum data latency is 5 minutes. You can query data in the last 186 days.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 100 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 1 hour is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * * By default, the POST method is used for Go. To use the FET method, you must declare `request.Method="GET"`.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|Time range per query ≤ 1 hour|7 days|5 minutes|
   * |5 minutes|1 hour &#x3C; Time range per query &#x3C; 3 days|93 days|15 minutes|
   * |1 hour|3 days ≤ Time range per query &#x3C; 31 days|186 days|3 to 4 hours|
   * 
   * @param request - DescribeVodDomainRealTimeReqHitRateDataRequest
   * @returns DescribeVodDomainRealTimeReqHitRateDataResponse
   */
  async describeVodDomainRealTimeReqHitRateData(request: $_model.DescribeVodDomainRealTimeReqHitRateDataRequest): Promise<$_model.DescribeVodDomainRealTimeReqHitRateDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRealTimeReqHitRateDataWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainRealTimeSrcBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainRealTimeSrcBpsDataResponse
   */
  async describeVodDomainRealTimeSrcBpsDataWithOptions(request: $_model.DescribeVodDomainRealTimeSrcBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainRealTimeSrcBpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainRealTimeSrcBpsData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainRealTimeSrcBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainRealTimeSrcBpsDataResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainRealTimeSrcBpsDataRequest
   * @returns DescribeVodDomainRealTimeSrcBpsDataResponse
   */
  async describeVodDomainRealTimeSrcBpsData(request: $_model.DescribeVodDomainRealTimeSrcBpsDataRequest): Promise<$_model.DescribeVodDomainRealTimeSrcBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRealTimeSrcBpsDataWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainRealTimeSrcTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainRealTimeSrcTrafficDataResponse
   */
  async describeVodDomainRealTimeSrcTrafficDataWithOptions(request: $_model.DescribeVodDomainRealTimeSrcTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainRealTimeSrcTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainRealTimeSrcTrafficData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainRealTimeSrcTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainRealTimeSrcTrafficDataResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainRealTimeSrcTrafficDataRequest
   * @returns DescribeVodDomainRealTimeSrcTrafficDataResponse
   */
  async describeVodDomainRealTimeSrcTrafficData(request: $_model.DescribeVodDomainRealTimeSrcTrafficDataRequest): Promise<$_model.DescribeVodDomainRealTimeSrcTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRealTimeSrcTrafficDataWithOptions(request, runtime);
  }

  /**
   * Queries the traffic data for one or more accelerated domains. The minimum time granularity is 1 minute. The minimum data latency is 5 minutes. You can query data in the last 186 days. Compared with the DescribeVodDomainTrafficData operation, this operation provides a smaller time granularity, lower data latency, and allows you to query historical data within a shorter time period.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 100 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 1 hour is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|Time range per query ≤ 1 hour|7 days|5 minutes|
   * |5 minutes|1 Hour &#x3C; Time range per query ≤ 3 days|93 days|15 minutes|
   * |1 hour|3 days &#x3C; Time range per query ≤ 31 days|186 days|3 to 4 hours|
   * 
   * @param request - DescribeVodDomainRealTimeTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainRealTimeTrafficDataResponse
   */
  async describeVodDomainRealTimeTrafficDataWithOptions(request: $_model.DescribeVodDomainRealTimeTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainRealTimeTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainRealTimeTrafficData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainRealTimeTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainRealTimeTrafficDataResponse({}));
  }

  /**
   * Queries the traffic data for one or more accelerated domains. The minimum time granularity is 1 minute. The minimum data latency is 5 minutes. You can query data in the last 186 days. Compared with the DescribeVodDomainTrafficData operation, this operation provides a smaller time granularity, lower data latency, and allows you to query historical data within a shorter time period.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 100 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 1 hour is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |1 minute|Time range per query ≤ 1 hour|7 days|5 minutes|
   * |5 minutes|1 Hour &#x3C; Time range per query ≤ 3 days|93 days|15 minutes|
   * |1 hour|3 days &#x3C; Time range per query ≤ 31 days|186 days|3 to 4 hours|
   * 
   * @param request - DescribeVodDomainRealTimeTrafficDataRequest
   * @returns DescribeVodDomainRealTimeTrafficDataResponse
   */
  async describeVodDomainRealTimeTrafficData(request: $_model.DescribeVodDomainRealTimeTrafficDataRequest): Promise<$_model.DescribeVodDomainRealTimeTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRealTimeTrafficDataWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainRealtimeLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainRealtimeLogDeliveryResponse
   */
  async describeVodDomainRealtimeLogDeliveryWithOptions(request: $_model.DescribeVodDomainRealtimeLogDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainRealtimeLogDeliveryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainRealtimeLogDelivery",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainRealtimeLogDeliveryResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainRealtimeLogDeliveryRequest
   * @returns DescribeVodDomainRealtimeLogDeliveryResponse
   */
  async describeVodDomainRealtimeLogDelivery(request: $_model.DescribeVodDomainRealtimeLogDeliveryRequest): Promise<$_model.DescribeVodDomainRealtimeLogDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainRegionDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainRegionDataResponse
   */
  async describeVodDomainRegionDataWithOptions(request: $_model.DescribeVodDomainRegionDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainRegionDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainRegionData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainRegionDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainRegionDataResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainRegionDataRequest
   * @returns DescribeVodDomainRegionDataResponse
   */
  async describeVodDomainRegionData(request: $_model.DescribeVodDomainRegionDataRequest): Promise<$_model.DescribeVodDomainRegionDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRegionDataWithOptions(request, runtime);
  }

  /**
   * Queries the byte hit ratio for one or more accelerated domains. Request hit ratios are measured in percentage.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 500 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 24 hours is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay when you do not set `Interval`.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|Time range per query &#x3C; 3 days|93 days|15 minutes|
   * |1 hour|3 days ≤ Time range per query &#x3C; 31 days|186 days|3 to 4 hours|
   * |1 day|31 days ≤ Time range per query ≤ 90 days|366 days|4 hours in most cases, not more than 24 hours|
   * 
   * @param request - DescribeVodDomainReqHitRateDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainReqHitRateDataResponse
   */
  async describeVodDomainReqHitRateDataWithOptions(request: $_model.DescribeVodDomainReqHitRateDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainReqHitRateDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainReqHitRateData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainReqHitRateDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainReqHitRateDataResponse({}));
  }

  /**
   * Queries the byte hit ratio for one or more accelerated domains. Request hit ratios are measured in percentage.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 500 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 24 hours is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay when you do not set `Interval`.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|Time range per query &#x3C; 3 days|93 days|15 minutes|
   * |1 hour|3 days ≤ Time range per query &#x3C; 31 days|186 days|3 to 4 hours|
   * |1 day|31 days ≤ Time range per query ≤ 90 days|366 days|4 hours in most cases, not more than 24 hours|
   * 
   * @param request - DescribeVodDomainReqHitRateDataRequest
   * @returns DescribeVodDomainReqHitRateDataResponse
   */
  async describeVodDomainReqHitRateData(request: $_model.DescribeVodDomainReqHitRateDataRequest): Promise<$_model.DescribeVodDomainReqHitRateDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainReqHitRateDataWithOptions(request, runtime);
  }

  /**
   * Queries the bandwidth data during back-to-origin routing for one or more accelerated domain names.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 500 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 24 hours is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay when you do not set `Interval`.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|Time range per query &#x3C; 3 days|93 days|15 minutes|
   * |1 hour|3 days ≤ Time range per query &#x3C; 31 days|186 days|3 to 4 hours|
   * |1 day|31 days ≤ Time span of a single query ≤ 366 days|366 days|4 hours in most cases, not more than 24 hours|
   * 
   * @param request - DescribeVodDomainSrcBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainSrcBpsDataResponse
   */
  async describeVodDomainSrcBpsDataWithOptions(request: $_model.DescribeVodDomainSrcBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainSrcBpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainSrcBpsData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainSrcBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainSrcBpsDataResponse({}));
  }

  /**
   * Queries the bandwidth data during back-to-origin routing for one or more accelerated domain names.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 500 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 24 hours is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay when you do not set `Interval`.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|Time range per query &#x3C; 3 days|93 days|15 minutes|
   * |1 hour|3 days ≤ Time range per query &#x3C; 31 days|186 days|3 to 4 hours|
   * |1 day|31 days ≤ Time span of a single query ≤ 366 days|366 days|4 hours in most cases, not more than 24 hours|
   * 
   * @param request - DescribeVodDomainSrcBpsDataRequest
   * @returns DescribeVodDomainSrcBpsDataResponse
   */
  async describeVodDomainSrcBpsData(request: $_model.DescribeVodDomainSrcBpsDataRequest): Promise<$_model.DescribeVodDomainSrcBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainSrcBpsDataWithOptions(request, runtime);
  }

  /**
   * Queries origin traffic data for accelerated domain names in ApsaraVideo VOD. The traffic is measured in bytes.
   * 
   * @remarks
   * This operation is available only in the **China (Shanghai)** region.
   * * ApsaraVideo VOD stores the origin traffic data for 90 days before the data is deleted.
   * * If you do not set the `StartTime` or `EndTime` parameter, the request returns the data collected in the last 24 hours. If you set both the `StartTime` and `EndTime` parameters, the request returns the data collected within the specified time range.
   * * You can specify a maximum of 500 domain names in a request. Separate multiple domain names with commas (,). If you specify multiple domain names in a request, aggregation results are returned.
   * ### Time granularity
   * The time granularity supported by the Interval parameter varies based on the time range per query specified by using `StartTime` and `EndTime`. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Time range per query (days)|Historical data available (days)|Data delay|
   * |---|---|---|---|
   * |5 minutes|(0, 3\\]|93|15 minutes|
   * |1 hour|(3, 31\\]|186|4 hours|
   * |1 day|(31, 366\\]|366|04:00 on the next day|
   * 
   * @param request - DescribeVodDomainSrcTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainSrcTrafficDataResponse
   */
  async describeVodDomainSrcTrafficDataWithOptions(request: $_model.DescribeVodDomainSrcTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainSrcTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainSrcTrafficData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainSrcTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainSrcTrafficDataResponse({}));
  }

  /**
   * Queries origin traffic data for accelerated domain names in ApsaraVideo VOD. The traffic is measured in bytes.
   * 
   * @remarks
   * This operation is available only in the **China (Shanghai)** region.
   * * ApsaraVideo VOD stores the origin traffic data for 90 days before the data is deleted.
   * * If you do not set the `StartTime` or `EndTime` parameter, the request returns the data collected in the last 24 hours. If you set both the `StartTime` and `EndTime` parameters, the request returns the data collected within the specified time range.
   * * You can specify a maximum of 500 domain names in a request. Separate multiple domain names with commas (,). If you specify multiple domain names in a request, aggregation results are returned.
   * ### Time granularity
   * The time granularity supported by the Interval parameter varies based on the time range per query specified by using `StartTime` and `EndTime`. The following table describes the time period within which historical data is available and the data delay.
   * |Time granularity|Time range per query (days)|Historical data available (days)|Data delay|
   * |---|---|---|---|
   * |5 minutes|(0, 3\\]|93|15 minutes|
   * |1 hour|(3, 31\\]|186|4 hours|
   * |1 day|(31, 366\\]|366|04:00 on the next day|
   * 
   * @param request - DescribeVodDomainSrcTrafficDataRequest
   * @returns DescribeVodDomainSrcTrafficDataResponse
   */
  async describeVodDomainSrcTrafficData(request: $_model.DescribeVodDomainSrcTrafficDataRequest): Promise<$_model.DescribeVodDomainSrcTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainSrcTrafficDataWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainStagingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainStagingConfigResponse
   */
  async describeVodDomainStagingConfigWithOptions(request: $_model.DescribeVodDomainStagingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainStagingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainStagingConfig",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainStagingConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainStagingConfigResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainStagingConfigRequest
   * @returns DescribeVodDomainStagingConfigResponse
   */
  async describeVodDomainStagingConfig(request: $_model.DescribeVodDomainStagingConfigRequest): Promise<$_model.DescribeVodDomainStagingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainStagingConfigWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainTopReferVisitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainTopReferVisitResponse
   */
  async describeVodDomainTopReferVisitWithOptions(request: $_model.DescribeVodDomainTopReferVisitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainTopReferVisitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.percent)) {
      query["Percent"] = request.percent;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainTopReferVisit",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainTopReferVisitResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainTopReferVisitResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainTopReferVisitRequest
   * @returns DescribeVodDomainTopReferVisitResponse
   */
  async describeVodDomainTopReferVisit(request: $_model.DescribeVodDomainTopReferVisitRequest): Promise<$_model.DescribeVodDomainTopReferVisitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainTopReferVisitWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainTopUrlVisitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainTopUrlVisitResponse
   */
  async describeVodDomainTopUrlVisitWithOptions(request: $_model.DescribeVodDomainTopUrlVisitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainTopUrlVisitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.percent)) {
      query["Percent"] = request.percent;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainTopUrlVisit",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainTopUrlVisitResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainTopUrlVisitResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainTopUrlVisitRequest
   * @returns DescribeVodDomainTopUrlVisitResponse
   */
  async describeVodDomainTopUrlVisit(request: $_model.DescribeVodDomainTopUrlVisitRequest): Promise<$_model.DescribeVodDomainTopUrlVisitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainTopUrlVisitWithOptions(request, runtime);
  }

  /**
   * Queries the traffic data for one or more accelerated domains. The minimum time granularity is 5 minutes. You can query data in the last 366 days. Compared with the DescribeVodDomainRealTimeTrafficData operation, this operation provides a greater time granularity, higher data latency, but allows you to query historical data within a longer time period.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 500 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 24 hour is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay when you do not set `Interval`.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|Time range per query &#x3C; 3 days|93 days|15 minutes|
   * |1 hour|3 days ≤ Time range per query &#x3C; 31 days|186 days|3 to 4 hours|
   * |1 day|31 days ≤ Time range per query ≤ 366 days|366 days|4 hours in most cases, not more than 24 hours|
   * 
   * @param request - DescribeVodDomainTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainTrafficDataResponse
   */
  async describeVodDomainTrafficDataWithOptions(request: $_model.DescribeVodDomainTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainTrafficData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainTrafficDataResponse({}));
  }

  /**
   * Queries the traffic data for one or more accelerated domains. The minimum time granularity is 5 minutes. You can query data in the last 366 days. Compared with the DescribeVodDomainRealTimeTrafficData operation, this operation provides a greater time granularity, higher data latency, but allows you to query historical data within a longer time period.
   * 
   * @remarks
   * This operation is supported only in the **China (Shanghai)** region.
   * * You can specify a maximum of 500 accelerated domain names.
   * * If you specify neither `StartTime` nor `EndTime`, the data of the last 24 hour is queried. You can specify both `StartTime` and `EndTime` parameters to query data of a specified time range.
   * **Time granularity**
   * The time granularity varies with the time range specified by the `StartTime` and `EndTime` parameters. The following table describes the time period within which historical data is available and the data delay when you do not set `Interval`.
   * |Time granularity|Time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|Time range per query &#x3C; 3 days|93 days|15 minutes|
   * |1 hour|3 days ≤ Time range per query &#x3C; 31 days|186 days|3 to 4 hours|
   * |1 day|31 days ≤ Time range per query ≤ 366 days|366 days|4 hours in most cases, not more than 24 hours|
   * 
   * @param request - DescribeVodDomainTrafficDataRequest
   * @returns DescribeVodDomainTrafficDataResponse
   */
  async describeVodDomainTrafficData(request: $_model.DescribeVodDomainTrafficDataRequest): Promise<$_model.DescribeVodDomainTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainTrafficDataWithOptions(request, runtime);
  }

  /**
   * Queries the traffic or bandwidth data of one or more accelerated domain names.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   You can specify up to 100 accelerated domain names in a request. Separate multiple domain names with commas (,). If you do not specify an accelerated domain name, the data of all accelerated domain names within your Alibaba Cloud account is returned.
   * *   You can query data in the last year. The maximum time range that can be queried is three months. If you specify a time range of one to three days, the system returns data on an hourly basis. If you specify a time range of four days or more, the system returns data on a daily basis.
   * 
   * @param request - DescribeVodDomainUsageDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainUsageDataResponse
   */
  async describeVodDomainUsageDataWithOptions(request: $_model.DescribeVodDomainUsageDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainUsageDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.area)) {
      query["Area"] = request.area;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.field)) {
      query["Field"] = request.field;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainUsageData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainUsageDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainUsageDataResponse({}));
  }

  /**
   * Queries the traffic or bandwidth data of one or more accelerated domain names.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   You can specify up to 100 accelerated domain names in a request. Separate multiple domain names with commas (,). If you do not specify an accelerated domain name, the data of all accelerated domain names within your Alibaba Cloud account is returned.
   * *   You can query data in the last year. The maximum time range that can be queried is three months. If you specify a time range of one to three days, the system returns data on an hourly basis. If you specify a time range of four days or more, the system returns data on a daily basis.
   * 
   * @param request - DescribeVodDomainUsageDataRequest
   * @returns DescribeVodDomainUsageDataResponse
   */
  async describeVodDomainUsageData(request: $_model.DescribeVodDomainUsageDataRequest): Promise<$_model.DescribeVodDomainUsageDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainUsageDataWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainUvDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainUvDataResponse
   */
  async describeVodDomainUvDataWithOptions(request: $_model.DescribeVodDomainUvDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainUvDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainUvData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainUvDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainUvDataResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainUvDataRequest
   * @returns DescribeVodDomainUvDataResponse
   */
  async describeVodDomainUvData(request: $_model.DescribeVodDomainUvDataRequest): Promise<$_model.DescribeVodDomainUvDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainUvDataWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainsUsageByDayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodDomainsUsageByDayResponse
   */
  async describeVodDomainsUsageByDayWithOptions(request: $_model.DescribeVodDomainsUsageByDayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodDomainsUsageByDayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodDomainsUsageByDay",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodDomainsUsageByDayResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodDomainsUsageByDayResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodDomainsUsageByDayRequest
   * @returns DescribeVodDomainsUsageByDayResponse
   */
  async describeVodDomainsUsageByDay(request: $_model.DescribeVodDomainsUsageByDayRequest): Promise<$_model.DescribeVodDomainsUsageByDayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainsUsageByDayWithOptions(request, runtime);
  }

  /**
   * 点播云剪辑用量查询
   * 
   * @param request - DescribeVodEditingUsageDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodEditingUsageDataResponse
   */
  async describeVodEditingUsageDataWithOptions(request: $_model.DescribeVodEditingUsageDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodEditingUsageDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodEditingUsageData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodEditingUsageDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodEditingUsageDataResponse({}));
  }

  /**
   * 点播云剪辑用量查询
   * 
   * @param request - DescribeVodEditingUsageDataRequest
   * @returns DescribeVodEditingUsageDataResponse
   */
  async describeVodEditingUsageData(request: $_model.DescribeVodEditingUsageDataRequest): Promise<$_model.DescribeVodEditingUsageDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodEditingUsageDataWithOptions(request, runtime);
  }

  /**
   * Queries the playback statistics based on the media ID. You can call this operation to query information such as the number of visits, average video views per viewer, total number of views, average playback duration per viewer, and total playback duration.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   Only playback data in ApsaraVideo Player SDK is collected.
   * *   You can query only data within the last 30 days.
   * *   Before you call this operation, make sure that the following requirements are met:
   *     *   ApsaraVideo Player SDK for Android or iOS
   *         *   ApsaraVideo Player SDK for Android or iOS V5.4.9.2 or later is used.
   *         *   A license for ApsaraVideo Player SDK is obtained. For more information, see [Manage licenses](https://help.aliyun.com/document_detail/469166.html).
   *         *   The log reporting feature is enabled. By default, the feature is enabled for ApsaraVideo Player SDKs. For more information, see [Integrate ApsaraVideo Player SDK for Android](~~311525#section-dc4-gp6-xk2~~) and [Integrate ApsaraVideo Player SDK for iOS](~~313855#section-cmf-k7d-jg5~~).
   *     *   ApsaraVideo Player SDK for Web
   *         *   ApsaraVideo Player SDK for Web V2.16.0 or later is used.
   *         *   A license for **playback quality monitoring** is obtained. To apply for the license, [submit a request on Yida to enable value-added features for ApsaraVideo Player SDK for Web](https://yida.alibaba-inc.com/o/webplayer#/). For more information, see the description of the `license` parameter in the [API operations](~~125572#section-3ty-gwp-6pa~~) topic.
   *         *   The log reporting feature is enabled. By default, the feature is enabled for ApsaraVideo Player SDKs.
   * 
   * @param request - DescribeVodMediaPlayDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodMediaPlayDataResponse
   */
  async describeVodMediaPlayDataWithOptions(request: $_model.DescribeVodMediaPlayDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodMediaPlayDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.orderName)) {
      query["OrderName"] = request.orderName;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.os)) {
      query["Os"] = request.os;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.playDate)) {
      query["PlayDate"] = request.playDate;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.terminalType)) {
      query["TerminalType"] = request.terminalType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodMediaPlayData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodMediaPlayDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodMediaPlayDataResponse({}));
  }

  /**
   * Queries the playback statistics based on the media ID. You can call this operation to query information such as the number of visits, average video views per viewer, total number of views, average playback duration per viewer, and total playback duration.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   Only playback data in ApsaraVideo Player SDK is collected.
   * *   You can query only data within the last 30 days.
   * *   Before you call this operation, make sure that the following requirements are met:
   *     *   ApsaraVideo Player SDK for Android or iOS
   *         *   ApsaraVideo Player SDK for Android or iOS V5.4.9.2 or later is used.
   *         *   A license for ApsaraVideo Player SDK is obtained. For more information, see [Manage licenses](https://help.aliyun.com/document_detail/469166.html).
   *         *   The log reporting feature is enabled. By default, the feature is enabled for ApsaraVideo Player SDKs. For more information, see [Integrate ApsaraVideo Player SDK for Android](~~311525#section-dc4-gp6-xk2~~) and [Integrate ApsaraVideo Player SDK for iOS](~~313855#section-cmf-k7d-jg5~~).
   *     *   ApsaraVideo Player SDK for Web
   *         *   ApsaraVideo Player SDK for Web V2.16.0 or later is used.
   *         *   A license for **playback quality monitoring** is obtained. To apply for the license, [submit a request on Yida to enable value-added features for ApsaraVideo Player SDK for Web](https://yida.alibaba-inc.com/o/webplayer#/). For more information, see the description of the `license` parameter in the [API operations](~~125572#section-3ty-gwp-6pa~~) topic.
   *         *   The log reporting feature is enabled. By default, the feature is enabled for ApsaraVideo Player SDKs.
   * 
   * @param request - DescribeVodMediaPlayDataRequest
   * @returns DescribeVodMediaPlayDataResponse
   */
  async describeVodMediaPlayData(request: $_model.DescribeVodMediaPlayDataRequest): Promise<$_model.DescribeVodMediaPlayDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodMediaPlayDataWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodMultiUsageDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodMultiUsageDataResponse
   */
  async describeVodMultiUsageDataWithOptions(request: $_model.DescribeVodMultiUsageDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodMultiUsageDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodMultiUsageData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodMultiUsageDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodMultiUsageDataResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodMultiUsageDataRequest
   * @returns DescribeVodMultiUsageDataResponse
   */
  async describeVodMultiUsageData(request: $_model.DescribeVodMultiUsageDataRequest): Promise<$_model.DescribeVodMultiUsageDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodMultiUsageDataWithOptions(request, runtime);
  }

  /**
   * 查询播放器指标数据
   * 
   * @param request - DescribeVodPlayerCollectDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodPlayerCollectDataResponse
   */
  async describeVodPlayerCollectDataWithOptions(request: $_model.DescribeVodPlayerCollectDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodPlayerCollectDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.os)) {
      query["Os"] = request.os;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.terminalType)) {
      query["TerminalType"] = request.terminalType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodPlayerCollectData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodPlayerCollectDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodPlayerCollectDataResponse({}));
  }

  /**
   * 查询播放器指标数据
   * 
   * @param request - DescribeVodPlayerCollectDataRequest
   * @returns DescribeVodPlayerCollectDataResponse
   */
  async describeVodPlayerCollectData(request: $_model.DescribeVodPlayerCollectDataRequest): Promise<$_model.DescribeVodPlayerCollectDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodPlayerCollectDataWithOptions(request, runtime);
  }

  /**
   * 查询播放器指标数据
   * 
   * @param request - DescribeVodPlayerCollectDataDemoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodPlayerCollectDataDemoResponse
   */
  async describeVodPlayerCollectDataDemoWithOptions(request: $_model.DescribeVodPlayerCollectDataDemoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodPlayerCollectDataDemoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.os)) {
      query["Os"] = request.os;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.terminalType)) {
      query["TerminalType"] = request.terminalType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodPlayerCollectDataDemo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodPlayerCollectDataDemoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodPlayerCollectDataDemoResponse({}));
  }

  /**
   * 查询播放器指标数据
   * 
   * @param request - DescribeVodPlayerCollectDataDemoRequest
   * @returns DescribeVodPlayerCollectDataDemoResponse
   */
  async describeVodPlayerCollectDataDemo(request: $_model.DescribeVodPlayerCollectDataDemoRequest): Promise<$_model.DescribeVodPlayerCollectDataDemoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodPlayerCollectDataDemoWithOptions(request, runtime);
  }

  /**
   * 查询播放器指标数据
   * 
   * @param request - DescribeVodPlayerDimensionDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodPlayerDimensionDataResponse
   */
  async describeVodPlayerDimensionDataWithOptions(request: $_model.DescribeVodPlayerDimensionDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodPlayerDimensionDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodPlayerDimensionData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodPlayerDimensionDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodPlayerDimensionDataResponse({}));
  }

  /**
   * 查询播放器指标数据
   * 
   * @param request - DescribeVodPlayerDimensionDataRequest
   * @returns DescribeVodPlayerDimensionDataResponse
   */
  async describeVodPlayerDimensionData(request: $_model.DescribeVodPlayerDimensionDataRequest): Promise<$_model.DescribeVodPlayerDimensionDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodPlayerDimensionDataWithOptions(request, runtime);
  }

  /**
   * 查询播放器指标数据
   * 
   * @param request - DescribeVodPlayerDimensionDataDemoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodPlayerDimensionDataDemoResponse
   */
  async describeVodPlayerDimensionDataDemoWithOptions(request: $_model.DescribeVodPlayerDimensionDataDemoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodPlayerDimensionDataDemoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodPlayerDimensionDataDemo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodPlayerDimensionDataDemoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodPlayerDimensionDataDemoResponse({}));
  }

  /**
   * 查询播放器指标数据
   * 
   * @param request - DescribeVodPlayerDimensionDataDemoRequest
   * @returns DescribeVodPlayerDimensionDataDemoResponse
   */
  async describeVodPlayerDimensionDataDemo(request: $_model.DescribeVodPlayerDimensionDataDemoRequest): Promise<$_model.DescribeVodPlayerDimensionDataDemoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodPlayerDimensionDataDemoWithOptions(request, runtime);
  }

  /**
   * 查询播放器指标数据
   * 
   * @param request - DescribeVodPlayerMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodPlayerMetricDataResponse
   */
  async describeVodPlayerMetricDataWithOptions(request: $_model.DescribeVodPlayerMetricDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodPlayerMetricDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.os)) {
      query["Os"] = request.os;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.terminalType)) {
      query["TerminalType"] = request.terminalType;
    }

    if (!$dara.isNull(request.top)) {
      query["Top"] = request.top;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodPlayerMetricData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodPlayerMetricDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodPlayerMetricDataResponse({}));
  }

  /**
   * 查询播放器指标数据
   * 
   * @param request - DescribeVodPlayerMetricDataRequest
   * @returns DescribeVodPlayerMetricDataResponse
   */
  async describeVodPlayerMetricData(request: $_model.DescribeVodPlayerMetricDataRequest): Promise<$_model.DescribeVodPlayerMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodPlayerMetricDataWithOptions(request, runtime);
  }

  /**
   * 查询播放器指标数据
   * 
   * @param request - DescribeVodPlayerMetricDataDemoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodPlayerMetricDataDemoResponse
   */
  async describeVodPlayerMetricDataDemoWithOptions(request: $_model.DescribeVodPlayerMetricDataDemoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodPlayerMetricDataDemoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.os)) {
      query["Os"] = request.os;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.terminalType)) {
      query["TerminalType"] = request.terminalType;
    }

    if (!$dara.isNull(request.top)) {
      query["Top"] = request.top;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodPlayerMetricDataDemo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodPlayerMetricDataDemoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodPlayerMetricDataDemoResponse({}));
  }

  /**
   * 查询播放器指标数据
   * 
   * @param request - DescribeVodPlayerMetricDataDemoRequest
   * @returns DescribeVodPlayerMetricDataDemoResponse
   */
  async describeVodPlayerMetricDataDemo(request: $_model.DescribeVodPlayerMetricDataDemoRequest): Promise<$_model.DescribeVodPlayerMetricDataDemoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodPlayerMetricDataDemoWithOptions(request, runtime);
  }

  /**
   * Queries the bandwidth data by Internet service provider (ISP) and region.
   * 
   * @remarks
   * The data is collected every 5 minutes. You can call this API operation up to 20 times per second per account. Time granularity
   * The time granularity supported by Interval, the maximum time period within which historical data is available, and the data delay vary based on the time range to query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|1 hour|93 days|15 minutes|
   * 
   * @param request - DescribeVodRangeDataByLocateAndIspServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodRangeDataByLocateAndIspServiceResponse
   */
  async describeVodRangeDataByLocateAndIspServiceWithOptions(request: $_model.DescribeVodRangeDataByLocateAndIspServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodRangeDataByLocateAndIspServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodRangeDataByLocateAndIspService",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodRangeDataByLocateAndIspServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodRangeDataByLocateAndIspServiceResponse({}));
  }

  /**
   * Queries the bandwidth data by Internet service provider (ISP) and region.
   * 
   * @remarks
   * The data is collected every 5 minutes. You can call this API operation up to 20 times per second per account. Time granularity
   * The time granularity supported by Interval, the maximum time period within which historical data is available, and the data delay vary based on the time range to query, as described in the following table.
   * |Time granularity|Maximum time range per query|Historical data available|Data delay|
   * |---|---|---|---|
   * |5 minutes|1 hour|93 days|15 minutes|
   * 
   * @param request - DescribeVodRangeDataByLocateAndIspServiceRequest
   * @returns DescribeVodRangeDataByLocateAndIspServiceResponse
   */
  async describeVodRangeDataByLocateAndIspService(request: $_model.DescribeVodRangeDataByLocateAndIspServiceRequest): Promise<$_model.DescribeVodRangeDataByLocateAndIspServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodRangeDataByLocateAndIspServiceWithOptions(request, runtime);
  }

  /**
   * Queries the number of real-time log deliveries.
   * 
   * @param request - DescribeVodRealtimeDeliveryAccRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodRealtimeDeliveryAccResponse
   */
  async describeVodRealtimeDeliveryAccWithOptions(request: $_model.DescribeVodRealtimeDeliveryAccRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodRealtimeDeliveryAccResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.logStore)) {
      query["LogStore"] = request.logStore;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.project)) {
      query["Project"] = request.project;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodRealtimeDeliveryAcc",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodRealtimeDeliveryAccResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodRealtimeDeliveryAccResponse({}));
  }

  /**
   * Queries the number of real-time log deliveries.
   * 
   * @param request - DescribeVodRealtimeDeliveryAccRequest
   * @returns DescribeVodRealtimeDeliveryAccResponse
   */
  async describeVodRealtimeDeliveryAcc(request: $_model.DescribeVodRealtimeDeliveryAccRequest): Promise<$_model.DescribeVodRealtimeDeliveryAccResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodRealtimeDeliveryAccWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodRealtimeLogAuthorizedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodRealtimeLogAuthorizedResponse
   */
  async describeVodRealtimeLogAuthorizedWithOptions(request: $_model.DescribeVodRealtimeLogAuthorizedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodRealtimeLogAuthorizedResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodRealtimeLogAuthorized",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodRealtimeLogAuthorizedResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodRealtimeLogAuthorizedResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodRealtimeLogAuthorizedRequest
   * @returns DescribeVodRealtimeLogAuthorizedResponse
   */
  async describeVodRealtimeLogAuthorized(request: $_model.DescribeVodRealtimeLogAuthorizedRequest): Promise<$_model.DescribeVodRealtimeLogAuthorizedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodRealtimeLogAuthorizedWithOptions(request, runtime);
  }

  /**
   * Queries the maximum number and remaining number of requests to refresh or prefetch files on the current day. You can prefetch files based on URLs and refresh files based on URLs or directories.
   * 
   * @remarks
   * > *   This operation is available only in the **China (Shanghai)** region.
   * > *   You can call the [RefreshVodObjectCaches](https://help.aliyun.com/document_detail/69215.html) operation to refresh content and the [PreloadVodObjectCaches](https://help.aliyun.com/document_detail/69211.html) operation to prefetch content.
   * 
   * @param request - DescribeVodRefreshQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodRefreshQuotaResponse
   */
  async describeVodRefreshQuotaWithOptions(request: $_model.DescribeVodRefreshQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodRefreshQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodRefreshQuota",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodRefreshQuotaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodRefreshQuotaResponse({}));
  }

  /**
   * Queries the maximum number and remaining number of requests to refresh or prefetch files on the current day. You can prefetch files based on URLs and refresh files based on URLs or directories.
   * 
   * @remarks
   * > *   This operation is available only in the **China (Shanghai)** region.
   * > *   You can call the [RefreshVodObjectCaches](https://help.aliyun.com/document_detail/69215.html) operation to refresh content and the [PreloadVodObjectCaches](https://help.aliyun.com/document_detail/69211.html) operation to prefetch content.
   * 
   * @param request - DescribeVodRefreshQuotaRequest
   * @returns DescribeVodRefreshQuotaResponse
   */
  async describeVodRefreshQuota(request: $_model.DescribeVodRefreshQuotaRequest): Promise<$_model.DescribeVodRefreshQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodRefreshQuotaWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more refresh or prefetch tasks.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   If you do not specify the TaskId or ObjectPath parameter, the data in the last three days is returned on the first page. By default, one page displays a maximum of 20 entries. You can specify the TaskId and ObjectPath parameters at the same time.
   * 
   * @param request - DescribeVodRefreshTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodRefreshTasksResponse
   */
  async describeVodRefreshTasksWithOptions(request: $_model.DescribeVodRefreshTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodRefreshTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodRefreshTasks",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodRefreshTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodRefreshTasksResponse({}));
  }

  /**
   * Queries the information about one or more refresh or prefetch tasks.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   If you do not specify the TaskId or ObjectPath parameter, the data in the last three days is returned on the first page. By default, one page displays a maximum of 20 entries. You can specify the TaskId and ObjectPath parameters at the same time.
   * 
   * @param request - DescribeVodRefreshTasksRequest
   * @returns DescribeVodRefreshTasksResponse
   */
  async describeVodRefreshTasks(request: $_model.DescribeVodRefreshTasksRequest): Promise<$_model.DescribeVodRefreshTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodRefreshTasksWithOptions(request, runtime);
  }

  /**
   * Queries the certificates by domain name.
   * 
   * @param request - DescribeVodSSLCertificateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodSSLCertificateListResponse
   */
  async describeVodSSLCertificateListWithOptions(request: $_model.DescribeVodSSLCertificateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodSSLCertificateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKeyword)) {
      query["SearchKeyword"] = request.searchKeyword;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodSSLCertificateList",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodSSLCertificateListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodSSLCertificateListResponse({}));
  }

  /**
   * Queries the certificates by domain name.
   * 
   * @param request - DescribeVodSSLCertificateListRequest
   * @returns DescribeVodSSLCertificateListResponse
   */
  async describeVodSSLCertificateList(request: $_model.DescribeVodSSLCertificateListRequest): Promise<$_model.DescribeVodSSLCertificateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodSSLCertificateListWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodServiceResponse
   */
  async describeVodServiceWithOptions(request: $_model.DescribeVodServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodService",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodServiceResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodServiceRequest
   * @returns DescribeVodServiceResponse
   */
  async describeVodService(request: $_model.DescribeVodServiceRequest): Promise<$_model.DescribeVodServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodServiceWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodStatisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodStatisResponse
   */
  async describeVodStatisWithOptions(request: $_model.DescribeVodStatisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodStatisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodStatis",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodStatisResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodStatisResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodStatisRequest
   * @returns DescribeVodStatisResponse
   */
  async describeVodStatis(request: $_model.DescribeVodStatisRequest): Promise<$_model.DescribeVodStatisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodStatisWithOptions(request, runtime);
  }

  /**
   * Queries the usage of storage-related resources, including the storage volume and outbound traffic.
   * 
   * @remarks
   * > *   This operation is available only in the **China (Shanghai)** region.
   * >*   If the time range to query is less than or equal to seven days, the system returns the statistics collected on an hourly basis. If the time range to query is greater than seven days, the system returns the statistics collected on a daily basis. The maximum time range that you can specify to query is 31 days.
   * 
   * @param request - DescribeVodStorageDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodStorageDataResponse
   */
  async describeVodStorageDataWithOptions(request: $_model.DescribeVodStorageDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodStorageDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.storage)) {
      query["Storage"] = request.storage;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodStorageData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodStorageDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodStorageDataResponse({}));
  }

  /**
   * Queries the usage of storage-related resources, including the storage volume and outbound traffic.
   * 
   * @remarks
   * > *   This operation is available only in the **China (Shanghai)** region.
   * >*   If the time range to query is less than or equal to seven days, the system returns the statistics collected on an hourly basis. If the time range to query is greater than seven days, the system returns the statistics collected on a daily basis. The maximum time range that you can specify to query is 31 days.
   * 
   * @param request - DescribeVodStorageDataRequest
   * @returns DescribeVodStorageDataResponse
   */
  async describeVodStorageData(request: $_model.DescribeVodStorageDataRequest): Promise<$_model.DescribeVodStorageDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodStorageDataWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodTagResourcesResponse
   */
  async describeVodTagResourcesWithOptions(request: $_model.DescribeVodTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

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
      action: "DescribeVodTagResources",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodTagResourcesResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodTagResourcesRequest
   * @returns DescribeVodTagResourcesResponse
   */
  async describeVodTagResources(request: $_model.DescribeVodTagResourcesRequest): Promise<$_model.DescribeVodTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the usage of tiered storage for media assets.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   If you specify a time range within 7 days, the request returns the data based on hours. If you specify a time range longer than 7 days, the request returns the data based on days. The maximum time range is 31 days.
   * 
   * @param request - DescribeVodTieringStorageDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodTieringStorageDataResponse
   */
  async describeVodTieringStorageDataWithOptions(request: $_model.DescribeVodTieringStorageDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodTieringStorageDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.storageClass)) {
      query["StorageClass"] = request.storageClass;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodTieringStorageData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodTieringStorageDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodTieringStorageDataResponse({}));
  }

  /**
   * Queries the usage of tiered storage for media assets.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   If you specify a time range within 7 days, the request returns the data based on hours. If you specify a time range longer than 7 days, the request returns the data based on days. The maximum time range is 31 days.
   * 
   * @param request - DescribeVodTieringStorageDataRequest
   * @returns DescribeVodTieringStorageDataResponse
   */
  async describeVodTieringStorageData(request: $_model.DescribeVodTieringStorageDataRequest): Promise<$_model.DescribeVodTieringStorageDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodTieringStorageDataWithOptions(request, runtime);
  }

  /**
   * Queries the data retrieval from tiered storage.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   If you specify a time range within 7 days, the request returns the data based on hours. If you specify a time range longer than 7 days, the request returns the data based on days. The maximum time range is 31 days.
   * 
   * @param request - DescribeVodTieringStorageRetrievalDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodTieringStorageRetrievalDataResponse
   */
  async describeVodTieringStorageRetrievalDataWithOptions(request: $_model.DescribeVodTieringStorageRetrievalDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodTieringStorageRetrievalDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.storageClass)) {
      query["StorageClass"] = request.storageClass;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodTieringStorageRetrievalData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodTieringStorageRetrievalDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodTieringStorageRetrievalDataResponse({}));
  }

  /**
   * Queries the data retrieval from tiered storage.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   If you specify a time range within 7 days, the request returns the data based on hours. If you specify a time range longer than 7 days, the request returns the data based on days. The maximum time range is 31 days.
   * 
   * @param request - DescribeVodTieringStorageRetrievalDataRequest
   * @returns DescribeVodTieringStorageRetrievalDataResponse
   */
  async describeVodTieringStorageRetrievalData(request: $_model.DescribeVodTieringStorageRetrievalDataRequest): Promise<$_model.DescribeVodTieringStorageRetrievalDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodTieringStorageRetrievalDataWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodTopDomainsByFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodTopDomainsByFlowResponse
   */
  async describeVodTopDomainsByFlowWithOptions(request: $_model.DescribeVodTopDomainsByFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodTopDomainsByFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodTopDomainsByFlow",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodTopDomainsByFlowResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodTopDomainsByFlowResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodTopDomainsByFlowRequest
   * @returns DescribeVodTopDomainsByFlowResponse
   */
  async describeVodTopDomainsByFlow(request: $_model.DescribeVodTopDomainsByFlowRequest): Promise<$_model.DescribeVodTopDomainsByFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodTopDomainsByFlowWithOptions(request, runtime);
  }

  /**
   * Queries the transcoding statistics.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   If the time range to query is less than or equal to seven days, the system returns the statistics collected on an hourly basis. If the time range to query is greater than seven days, the system returns the statistics collected on a daily basis. The maximum time range that you can specify to query is 31 days.
   * 
   * @param request - DescribeVodTranscodeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodTranscodeDataResponse
   */
  async describeVodTranscodeDataWithOptions(request: $_model.DescribeVodTranscodeDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodTranscodeDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.storage)) {
      query["Storage"] = request.storage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodTranscodeData",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodTranscodeDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodTranscodeDataResponse({}));
  }

  /**
   * Queries the transcoding statistics.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   If the time range to query is less than or equal to seven days, the system returns the statistics collected on an hourly basis. If the time range to query is greater than seven days, the system returns the statistics collected on a daily basis. The maximum time range that you can specify to query is 31 days.
   * 
   * @param request - DescribeVodTranscodeDataRequest
   * @returns DescribeVodTranscodeDataResponse
   */
  async describeVodTranscodeData(request: $_model.DescribeVodTranscodeDataRequest): Promise<$_model.DescribeVodTranscodeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodTranscodeDataWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodUserBillPredictionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodUserBillPredictionResponse
   */
  async describeVodUserBillPredictionWithOptions(request: $_model.DescribeVodUserBillPredictionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodUserBillPredictionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.area)) {
      query["Area"] = request.area;
    }

    if (!$dara.isNull(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodUserBillPrediction",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodUserBillPredictionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodUserBillPredictionResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodUserBillPredictionRequest
   * @returns DescribeVodUserBillPredictionResponse
   */
  async describeVodUserBillPrediction(request: $_model.DescribeVodUserBillPredictionRequest): Promise<$_model.DescribeVodUserBillPredictionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodUserBillPredictionWithOptions(request, runtime);
  }

  /**
   * Queries the domain names for CDN within your Alibaba Cloud account.
   * 
   * @remarks
   *   You can filter domain names by name and status. Fuzzy match is supported for domain name-based query.
   * *   This operation is available only in the China (Shanghai) region.
   * 
   * @param request - DescribeVodUserDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodUserDomainsResponse
   */
  async describeVodUserDomainsWithOptions(request: $_model.DescribeVodUserDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodUserDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainSearchType)) {
      query["DomainSearchType"] = request.domainSearchType;
    }

    if (!$dara.isNull(request.domainStatus)) {
      query["DomainStatus"] = request.domainStatus;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodUserDomains",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodUserDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodUserDomainsResponse({}));
  }

  /**
   * Queries the domain names for CDN within your Alibaba Cloud account.
   * 
   * @remarks
   *   You can filter domain names by name and status. Fuzzy match is supported for domain name-based query.
   * *   This operation is available only in the China (Shanghai) region.
   * 
   * @param request - DescribeVodUserDomainsRequest
   * @returns DescribeVodUserDomainsResponse
   */
  async describeVodUserDomains(request: $_model.DescribeVodUserDomainsRequest): Promise<$_model.DescribeVodUserDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodUserDomainsWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodUserQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodUserQuotaResponse
   */
  async describeVodUserQuotaWithOptions(request: $_model.DescribeVodUserQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodUserQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodUserQuota",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodUserQuotaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodUserQuotaResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodUserQuotaRequest
   * @returns DescribeVodUserQuotaResponse
   */
  async describeVodUserQuota(request: $_model.DescribeVodUserQuotaRequest): Promise<$_model.DescribeVodUserQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodUserQuotaWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodUserResourcePackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodUserResourcePackageResponse
   */
  async describeVodUserResourcePackageWithOptions(request: $_model.DescribeVodUserResourcePackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodUserResourcePackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodUserResourcePackage",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodUserResourcePackageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodUserResourcePackageResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodUserResourcePackageRequest
   * @returns DescribeVodUserResourcePackageResponse
   */
  async describeVodUserResourcePackage(request: $_model.DescribeVodUserResourcePackageRequest): Promise<$_model.DescribeVodUserResourcePackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodUserResourcePackageWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodUserTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodUserTagsResponse
   */
  async describeVodUserTagsWithOptions(request: $_model.DescribeVodUserTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodUserTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodUserTags",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodUserTagsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodUserTagsResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodUserTagsRequest
   * @returns DescribeVodUserTagsResponse
   */
  async describeVodUserTags(request: $_model.DescribeVodUserTagsRequest): Promise<$_model.DescribeVodUserTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodUserTagsWithOptions(request, runtime);
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodUserUsageDetailDataExportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodUserUsageDetailDataExportTaskResponse
   */
  async describeVodUserUsageDetailDataExportTaskWithOptions(request: $_model.DescribeVodUserUsageDetailDataExportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodUserUsageDetailDataExportTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

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
      action: "DescribeVodUserUsageDetailDataExportTask",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodUserUsageDetailDataExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodUserUsageDetailDataExportTaskResponse({}));
  }

  /**
   * 用量查询接口
   * 
   * @param request - DescribeVodUserUsageDetailDataExportTaskRequest
   * @returns DescribeVodUserUsageDetailDataExportTaskResponse
   */
  async describeVodUserUsageDetailDataExportTask(request: $_model.DescribeVodUserUsageDetailDataExportTaskRequest): Promise<$_model.DescribeVodUserUsageDetailDataExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodUserUsageDetailDataExportTaskWithOptions(request, runtime);
  }

  /**
   * Queries the ownership verification content.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * 
   * @param request - DescribeVodVerifyContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodVerifyContentResponse
   */
  async describeVodVerifyContentWithOptions(request: $_model.DescribeVodVerifyContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodVerifyContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodVerifyContent",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodVerifyContentResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodVerifyContentResponse({}));
  }

  /**
   * Queries the ownership verification content.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * 
   * @param request - DescribeVodVerifyContentRequest
   * @returns DescribeVodVerifyContentResponse
   */
  async describeVodVerifyContent(request: $_model.DescribeVodVerifyContentRequest): Promise<$_model.DescribeVodVerifyContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodVerifyContentWithOptions(request, runtime);
  }

  /**
   * Revokes application permissions from the specified identity. The identity may a RAM user or RAM role.
   * 
   * @remarks
   * >  You can grant a maximum of 10 application permissions to a RAM user or RAM role.
   * 
   * @param request - DetachAppPolicyFromIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachAppPolicyFromIdentityResponse
   */
  async detachAppPolicyFromIdentityWithOptions(request: $_model.DetachAppPolicyFromIdentityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachAppPolicyFromIdentityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.identityName)) {
      query["IdentityName"] = request.identityName;
    }

    if (!$dara.isNull(request.identityType)) {
      query["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.policyNames)) {
      query["PolicyNames"] = request.policyNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachAppPolicyFromIdentity",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachAppPolicyFromIdentityResponse>(await this.callApi(params, req, runtime), new $_model.DetachAppPolicyFromIdentityResponse({}));
  }

  /**
   * Revokes application permissions from the specified identity. The identity may a RAM user or RAM role.
   * 
   * @remarks
   * >  You can grant a maximum of 10 application permissions to a RAM user or RAM role.
   * 
   * @param request - DetachAppPolicyFromIdentityRequest
   * @returns DetachAppPolicyFromIdentityResponse
   */
  async detachAppPolicyFromIdentity(request: $_model.DetachAppPolicyFromIdentityRequest): Promise<$_model.DetachAppPolicyFromIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachAppPolicyFromIdentityWithOptions(request, runtime);
  }

  /**
   * 停用实时日志
   * 
   * @param request - DisableVodRealtimeLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableVodRealtimeLogDeliveryResponse
   */
  async disableVodRealtimeLogDeliveryWithOptions(request: $_model.DisableVodRealtimeLogDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableVodRealtimeLogDeliveryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableVodRealtimeLogDelivery",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableVodRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.DisableVodRealtimeLogDeliveryResponse({}));
  }

  /**
   * 停用实时日志
   * 
   * @param request - DisableVodRealtimeLogDeliveryRequest
   * @returns DisableVodRealtimeLogDeliveryResponse
   */
  async disableVodRealtimeLogDelivery(request: $_model.DisableVodRealtimeLogDeliveryRequest): Promise<$_model.DisableVodRealtimeLogDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableVodRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
   * 获取AI审核开关
   * 
   * @param request - DisplayAIAuditSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisplayAIAuditSwitchResponse
   */
  async displayAIAuditSwitchWithOptions(request: $_model.DisplayAIAuditSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisplayAIAuditSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisplayAIAuditSwitch",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisplayAIAuditSwitchResponse>(await this.callApi(params, req, runtime), new $_model.DisplayAIAuditSwitchResponse({}));
  }

  /**
   * 获取AI审核开关
   * 
   * @param request - DisplayAIAuditSwitchRequest
   * @returns DisplayAIAuditSwitchResponse
   */
  async displayAIAuditSwitch(request: $_model.DisplayAIAuditSwitchRequest): Promise<$_model.DisplayAIAuditSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.displayAIAuditSwitchWithOptions(request, runtime);
  }

  /**
   * 编辑应用信息
   * 
   * @param tmpReq - EditAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditAppInfoResponse
   */
  async editAppInfoWithOptions(tmpReq: $_model.EditAppInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditAppInfoResponse> {
    tmpReq.validate();
    let request = new $_model.EditAppInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.platforms)) {
      request.platformsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.platforms, "Platforms", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appItemId)) {
      query["AppItemId"] = request.appItemId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.platformsShrink)) {
      query["Platforms"] = request.platformsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditAppInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditAppInfoResponse>(await this.callApi(params, req, runtime), new $_model.EditAppInfoResponse({}));
  }

  /**
   * 编辑应用信息
   * 
   * @param request - EditAppInfoRequest
   * @returns EditAppInfoResponse
   */
  async editAppInfo(request: $_model.EditAppInfoRequest): Promise<$_model.EditAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editAppInfoWithOptions(request, runtime);
  }

  /**
   * 编辑证书
   * 
   * @param request - EditLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditLicenseResponse
   */
  async editLicenseWithOptions(request: $_model.EditLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditLicenseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appItemId)) {
      body["AppItemId"] = request.appItemId;
    }

    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appPlatforms)) {
      body["AppPlatforms"] = request.appPlatforms;
    }

    if (!$dara.isNull(request.contractNo)) {
      body["ContractNo"] = request.contractNo;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sdkModels)) {
      body["SdkModels"] = request.sdkModels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditLicense",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditLicenseResponse>(await this.callApi(params, req, runtime), new $_model.EditLicenseResponse({}));
  }

  /**
   * 编辑证书
   * 
   * @param request - EditLicenseRequest
   * @returns EditLicenseResponse
   */
  async editLicense(request: $_model.EditLicenseRequest): Promise<$_model.EditLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editLicenseWithOptions(request, runtime);
  }

  /**
   * 启用实时日志
   * 
   * @param request - EnableVodRealtimeLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableVodRealtimeLogDeliveryResponse
   */
  async enableVodRealtimeLogDeliveryWithOptions(request: $_model.EnableVodRealtimeLogDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableVodRealtimeLogDeliveryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableVodRealtimeLogDelivery",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableVodRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.EnableVodRealtimeLogDeliveryResponse({}));
  }

  /**
   * 启用实时日志
   * 
   * @param request - EnableVodRealtimeLogDeliveryRequest
   * @returns EnableVodRealtimeLogDeliveryResponse
   */
  async enableVodRealtimeLogDelivery(request: $_model.EnableVodRealtimeLogDeliveryRequest): Promise<$_model.EnableVodRealtimeLogDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableVodRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
   * 人脸注册
   * 
   * @param request - FaceRegistrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FaceRegistrationResponse
   */
  async faceRegistrationWithOptions(request: $_model.FaceRegistrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FaceRegistrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.imageIds)) {
      query["ImageIds"] = request.imageIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.personId)) {
      query["PersonId"] = request.personId;
    }

    if (!$dara.isNull(request.personLibrary)) {
      query["PersonLibrary"] = request.personLibrary;
    }

    if (!$dara.isNull(request.personName)) {
      query["PersonName"] = request.personName;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FaceRegistration",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FaceRegistrationResponse>(await this.callApi(params, req, runtime), new $_model.FaceRegistrationResponse({}));
  }

  /**
   * 人脸注册
   * 
   * @param request - FaceRegistrationRequest
   * @returns FaceRegistrationResponse
   */
  async faceRegistration(request: $_model.FaceRegistrationRequest): Promise<$_model.FaceRegistrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.faceRegistrationWithOptions(request, runtime);
  }

  /**
   * Generates a key for secure download. ApsaraVideo Player SDK provides the secure download feature. Videos that are downloaded to your local device in this mode are encrypted. You can play the encrypted videos only by using the key file generated from the app that you specified. Secure download protects your videos from malicious playback or distribution.
   * 
   * @remarks
   *   To use the secure download feature, you must enable the download feature in the ApsaraVideo VOD console and set the download method to secure download. For more information, see [Configure download settings](https://help.aliyun.com/document_detail/86107.html).
   * *   After you generate a key for secure download, you must configure the key in ApsaraVideo Player SDK. For more information, see [Secure download](https://help.aliyun.com/document_detail/124735.html).
   * 
   * @param request - GenerateDownloadSecretKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateDownloadSecretKeyResponse
   */
  async generateDownloadSecretKeyWithOptions(request: $_model.GenerateDownloadSecretKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateDownloadSecretKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appDecryptKey)) {
      query["AppDecryptKey"] = request.appDecryptKey;
    }

    if (!$dara.isNull(request.appIdentification)) {
      query["AppIdentification"] = request.appIdentification;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateDownloadSecretKey",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateDownloadSecretKeyResponse>(await this.callApi(params, req, runtime), new $_model.GenerateDownloadSecretKeyResponse({}));
  }

  /**
   * Generates a key for secure download. ApsaraVideo Player SDK provides the secure download feature. Videos that are downloaded to your local device in this mode are encrypted. You can play the encrypted videos only by using the key file generated from the app that you specified. Secure download protects your videos from malicious playback or distribution.
   * 
   * @remarks
   *   To use the secure download feature, you must enable the download feature in the ApsaraVideo VOD console and set the download method to secure download. For more information, see [Configure download settings](https://help.aliyun.com/document_detail/86107.html).
   * *   After you generate a key for secure download, you must configure the key in ApsaraVideo Player SDK. For more information, see [Secure download](https://help.aliyun.com/document_detail/124735.html).
   * 
   * @param request - GenerateDownloadSecretKeyRequest
   * @returns GenerateDownloadSecretKeyResponse
   */
  async generateDownloadSecretKey(request: $_model.GenerateDownloadSecretKeyRequest): Promise<$_model.GenerateDownloadSecretKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateDownloadSecretKeyWithOptions(request, runtime);
  }

  /**
   * Generates a random Key Management Service (KMS) data key used for HLS encryption in ApsaraVideo VOD.
   * 
   * @param request - GenerateKMSDataKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateKMSDataKeyResponse
   */
  async generateKMSDataKeyWithOptions(request: $_model.GenerateKMSDataKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateKMSDataKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateKMSDataKey",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateKMSDataKeyResponse>(await this.callApi(params, req, runtime), new $_model.GenerateKMSDataKeyResponse({}));
  }

  /**
   * Generates a random Key Management Service (KMS) data key used for HLS encryption in ApsaraVideo VOD.
   * 
   * @param request - GenerateKMSDataKeyRequest
   * @returns GenerateKMSDataKeyResponse
   */
  async generateKMSDataKey(request: $_model.GenerateKMSDataKeyRequest): Promise<$_model.GenerateKMSDataKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateKMSDataKeyWithOptions(request, runtime);
  }

  /**
   * 获取标题提取任务
   * 
   * @param request - GetAICaptionExtractionJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAICaptionExtractionJobsResponse
   */
  async getAICaptionExtractionJobsWithOptions(request: $_model.GetAICaptionExtractionJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAICaptionExtractionJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAICaptionExtractionJobs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAICaptionExtractionJobsResponse>(await this.callApi(params, req, runtime), new $_model.GetAICaptionExtractionJobsResponse({}));
  }

  /**
   * 获取标题提取任务
   * 
   * @param request - GetAICaptionExtractionJobsRequest
   * @returns GetAICaptionExtractionJobsResponse
   */
  async getAICaptionExtractionJobs(request: $_model.GetAICaptionExtractionJobsRequest): Promise<$_model.GetAICaptionExtractionJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAICaptionExtractionJobsWithOptions(request, runtime);
  }

  /**
   * Queries jobs of image AI processing.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)** and **China (Shanghai)**.
   * *   Call the [SubmitAIImageJob](~~SubmitAIImageJob~~) operation to submit image AI processing jobs before you call this operation to query image AI processing jobs.
   * *   You can query a maximum of 10 jobs of image AI processing in one request.
   * 
   * @param request - GetAIImageJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAIImageJobsResponse
   */
  async getAIImageJobsWithOptions(request: $_model.GetAIImageJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAIImageJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAIImageJobs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAIImageJobsResponse>(await this.callApi(params, req, runtime), new $_model.GetAIImageJobsResponse({}));
  }

  /**
   * Queries jobs of image AI processing.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)** and **China (Shanghai)**.
   * *   Call the [SubmitAIImageJob](~~SubmitAIImageJob~~) operation to submit image AI processing jobs before you call this operation to query image AI processing jobs.
   * *   You can query a maximum of 10 jobs of image AI processing in one request.
   * 
   * @param request - GetAIImageJobsRequest
   * @returns GetAIImageJobsResponse
   */
  async getAIImageJobs(request: $_model.GetAIImageJobsRequest): Promise<$_model.GetAIImageJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAIImageJobsWithOptions(request, runtime);
  }

  /**
   * Queries the information about an intelligent review job. After the job is submitted, it is processed asynchronously. You can call this operation to query the job information in real time.
   * 
   * @remarks
   * ApsaraVideo VOD stores the snapshots of the intelligent review results free of charge for two weeks. After this period, the snapshots are automatically deleted.
   * 
   * @param request - GetAIMediaAuditJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAIMediaAuditJobResponse
   */
  async getAIMediaAuditJobWithOptions(request: $_model.GetAIMediaAuditJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAIMediaAuditJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAIMediaAuditJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAIMediaAuditJobResponse>(await this.callApi(params, req, runtime), new $_model.GetAIMediaAuditJobResponse({}));
  }

  /**
   * Queries the information about an intelligent review job. After the job is submitted, it is processed asynchronously. You can call this operation to query the job information in real time.
   * 
   * @remarks
   * ApsaraVideo VOD stores the snapshots of the intelligent review results free of charge for two weeks. After this period, the snapshots are automatically deleted.
   * 
   * @param request - GetAIMediaAuditJobRequest
   * @returns GetAIMediaAuditJobResponse
   */
  async getAIMediaAuditJob(request: $_model.GetAIMediaAuditJobRequest): Promise<$_model.GetAIMediaAuditJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAIMediaAuditJobWithOptions(request, runtime);
  }

  /**
   * 获取AI服务状态
   * 
   * @param request - GetAIServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAIServiceResponse
   */
  async getAIServiceWithOptions(request: $_model.GetAIServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAIServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.types)) {
      query["Types"] = request.types;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAIService",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAIServiceResponse>(await this.callApi(params, req, runtime), new $_model.GetAIServiceResponse({}));
  }

  /**
   * 获取AI服务状态
   * 
   * @param request - GetAIServiceRequest
   * @returns GetAIServiceResponse
   */
  async getAIService(request: $_model.GetAIServiceRequest): Promise<$_model.GetAIServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAIServiceWithOptions(request, runtime);
  }

  /**
   * 获取AI统计信息
   * 
   * @param request - GetAIStatisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAIStatisResponse
   */
  async getAIStatisWithOptions(request: $_model.GetAIStatisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAIStatisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.division)) {
      query["Division"] = request.division;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endTimeUTC)) {
      query["EndTimeUTC"] = request.endTimeUTC;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.startTimeUTC)) {
      query["StartTimeUTC"] = request.startTimeUTC;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAIStatis",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAIStatisResponse>(await this.callApi(params, req, runtime), new $_model.GetAIStatisResponse({}));
  }

  /**
   * 获取AI统计信息
   * 
   * @param request - GetAIStatisRequest
   * @returns GetAIStatisResponse
   */
  async getAIStatis(request: $_model.GetAIStatisRequest): Promise<$_model.GetAIStatisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAIStatisWithOptions(request, runtime);
  }

  /**
   * Queries the details of an AI template.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * *   Before you call this operation to query details of an AI template, you must obtain the ID of the AI template.
   * 
   * @param request - GetAITemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAITemplateResponse
   */
  async getAITemplateWithOptions(request: $_model.GetAITemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAITemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAITemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAITemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetAITemplateResponse({}));
  }

  /**
   * Queries the details of an AI template.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * *   Before you call this operation to query details of an AI template, you must obtain the ID of the AI template.
   * 
   * @param request - GetAITemplateRequest
   * @returns GetAITemplateResponse
   */
  async getAITemplate(request: $_model.GetAITemplateRequest): Promise<$_model.GetAITemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAITemplateWithOptions(request, runtime);
  }

  /**
   * Queries the results of smart tagging jobs.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * *   You can obtain the smart tagging results by using the video ID.
   * 
   * @param request - GetAIVideoTagResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAIVideoTagResultResponse
   */
  async getAIVideoTagResultWithOptions(request: $_model.GetAIVideoTagResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAIVideoTagResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAIVideoTagResult",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAIVideoTagResultResponse>(await this.callApi(params, req, runtime), new $_model.GetAIVideoTagResultResponse({}));
  }

  /**
   * Queries the results of smart tagging jobs.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * *   You can obtain the smart tagging results by using the video ID.
   * 
   * @param request - GetAIVideoTagResultRequest
   * @returns GetAIVideoTagResultResponse
   */
  async getAIVideoTagResult(request: $_model.GetAIVideoTagResultRequest): Promise<$_model.GetAIVideoTagResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAIVideoTagResultWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more applications based on application IDs.
   * 
   * @remarks
   * You can specify multiple accelerated domain names in a request.
   * 
   * @param request - GetAppInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppInfosResponse
   */
  async getAppInfosWithOptions(request: $_model.GetAppInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppInfosResponse>(await this.callApi(params, req, runtime), new $_model.GetAppInfosResponse({}));
  }

  /**
   * Queries the information about one or more applications based on application IDs.
   * 
   * @remarks
   * You can specify multiple accelerated domain names in a request.
   * 
   * @param request - GetAppInfosRequest
   * @returns GetAppInfosResponse
   */
  async getAppInfos(request: $_model.GetAppInfosRequest): Promise<$_model.GetAppInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppInfosWithOptions(request, runtime);
  }

  /**
   * 获取App策略
   * 
   * @param request - GetAppPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppPoliciesResponse
   */
  async getAppPoliciesWithOptions(request: $_model.GetAppPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyNames)) {
      query["PolicyNames"] = request.policyNames;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppPolicies",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.GetAppPoliciesResponse({}));
  }

  /**
   * 获取App策略
   * 
   * @param request - GetAppPoliciesRequest
   * @returns GetAppPoliciesResponse
   */
  async getAppPolicies(request: $_model.GetAppPoliciesRequest): Promise<$_model.GetAppPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the URL and basic information about one or more auxiliary media assets such as watermark images, subtitle files, and materials based on IDs.
   * 
   * @remarks
   * You can query information about up to 20 auxiliary media assets in a request.
   * 
   * @param request - GetAttachedMediaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAttachedMediaInfoResponse
   */
  async getAttachedMediaInfoWithOptions(request: $_model.GetAttachedMediaInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAttachedMediaInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    if (!$dara.isNull(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAttachedMediaInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAttachedMediaInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetAttachedMediaInfoResponse({}));
  }

  /**
   * Queries the URL and basic information about one or more auxiliary media assets such as watermark images, subtitle files, and materials based on IDs.
   * 
   * @remarks
   * You can query information about up to 20 auxiliary media assets in a request.
   * 
   * @param request - GetAttachedMediaInfoRequest
   * @returns GetAttachedMediaInfoResponse
   */
  async getAttachedMediaInfo(request: $_model.GetAttachedMediaInfoRequest): Promise<$_model.GetAttachedMediaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAttachedMediaInfoWithOptions(request, runtime);
  }

  /**
   * Queries the manual review history.
   * 
   * @param request - GetAuditHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuditHistoryResponse
   */
  async getAuditHistoryWithOptions(request: $_model.GetAuditHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAuditHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAuditHistory",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAuditHistoryResponse>(await this.callApi(params, req, runtime), new $_model.GetAuditHistoryResponse({}));
  }

  /**
   * Queries the manual review history.
   * 
   * @param request - GetAuditHistoryRequest
   * @returns GetAuditHistoryResponse
   */
  async getAuditHistory(request: $_model.GetAuditHistoryRequest): Promise<$_model.GetAuditHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuditHistoryWithOptions(request, runtime);
  }

  /**
   * 获取审核结果
   * 
   * @param request - GetAuditResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuditResultResponse
   */
  async getAuditResultWithOptions(request: $_model.GetAuditResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAuditResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAuditResult",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAuditResultResponse>(await this.callApi(params, req, runtime), new $_model.GetAuditResultResponse({}));
  }

  /**
   * 获取审核结果
   * 
   * @param request - GetAuditResultRequest
   * @returns GetAuditResultResponse
   */
  async getAuditResult(request: $_model.GetAuditResultRequest): Promise<$_model.GetAuditResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuditResultWithOptions(request, runtime);
  }

  /**
   * 获取审核结果详情
   * 
   * @param request - GetAuditResultDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuditResultDetailResponse
   */
  async getAuditResultDetailWithOptions(request: $_model.GetAuditResultDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAuditResultDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAuditResultDetail",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAuditResultDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetAuditResultDetailResponse({}));
  }

  /**
   * 获取审核结果详情
   * 
   * @param request - GetAuditResultDetailRequest
   * @returns GetAuditResultDetailResponse
   */
  async getAuditResultDetail(request: $_model.GetAuditResultDetailRequest): Promise<$_model.GetAuditResultDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuditResultDetailWithOptions(request, runtime);
  }

  /**
   * 查询bucket删除任务信息
   * 
   * @param request - GetBucketDeleteTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBucketDeleteTaskResponse
   */
  async getBucketDeleteTaskWithOptions(request: $_model.GetBucketDeleteTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBucketDeleteTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBucketDeleteTask",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBucketDeleteTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetBucketDeleteTaskResponse({}));
  }

  /**
   * 查询bucket删除任务信息
   * 
   * @param request - GetBucketDeleteTaskRequest
   * @returns GetBucketDeleteTaskResponse
   */
  async getBucketDeleteTask(request: $_model.GetBucketDeleteTaskRequest): Promise<$_model.GetBucketDeleteTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBucketDeleteTaskWithOptions(request, runtime);
  }

  /**
   * 获取CDN统计数据
   * 
   * @param request - GetCDNStatisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCDNStatisResponse
   */
  async getCDNStatisWithOptions(request: $_model.GetCDNStatisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCDNStatisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCDNStatis",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCDNStatisResponse>(await this.callApi(params, req, runtime), new $_model.GetCDNStatisResponse({}));
  }

  /**
   * 获取CDN统计数据
   * 
   * @param request - GetCDNStatisRequest
   * @returns GetCDNStatisResponse
   */
  async getCDNStatis(request: $_model.GetCDNStatisRequest): Promise<$_model.GetCDNStatisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCDNStatisWithOptions(request, runtime);
  }

  /**
   * 获取CDN统计和
   * 
   * @param request - GetCDNStatisSumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCDNStatisSumResponse
   */
  async getCDNStatisSumWithOptions(request: $_model.GetCDNStatisSumRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCDNStatisSumResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endStatisTime)) {
      query["EndStatisTime"] = request.endStatisTime;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startStatisTime)) {
      query["StartStatisTime"] = request.startStatisTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCDNStatisSum",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCDNStatisSumResponse>(await this.callApi(params, req, runtime), new $_model.GetCDNStatisSumResponse({}));
  }

  /**
   * 获取CDN统计和
   * 
   * @param request - GetCDNStatisSumRequest
   * @returns GetCDNStatisSumResponse
   */
  async getCDNStatisSum(request: $_model.GetCDNStatisSumRequest): Promise<$_model.GetCDNStatisSumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCDNStatisSumWithOptions(request, runtime);
  }

  /**
   * Queries the information about a specific category and its subcategories based on the ID or type of the category.
   * 
   * @param request - GetCategoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCategoriesResponse
   */
  async getCategoriesWithOptions(request: $_model.GetCategoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCategoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCategories",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCategoriesResponse>(await this.callApi(params, req, runtime), new $_model.GetCategoriesResponse({}));
  }

  /**
   * Queries the information about a specific category and its subcategories based on the ID or type of the category.
   * 
   * @param request - GetCategoriesRequest
   * @returns GetCategoriesResponse
   */
  async getCategories(request: $_model.GetCategoriesRequest): Promise<$_model.GetCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCategoriesWithOptions(request, runtime);
  }

  /**
   * 获取通道
   * 
   * @param request - GetCheckChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCheckChannelResponse
   */
  async getCheckChannelWithOptions(request: $_model.GetCheckChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCheckChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCheckChannel",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCheckChannelResponse>(await this.callApi(params, req, runtime), new $_model.GetCheckChannelResponse({}));
  }

  /**
   * 获取通道
   * 
   * @param request - GetCheckChannelRequest
   * @returns GetCheckChannelResponse
   */
  async getCheckChannel(request: $_model.GetCheckChannelRequest): Promise<$_model.GetCheckChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCheckChannelWithOptions(request, runtime);
  }

  /**
   * @param request - GetClientConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClientConfigResponse
   */
  async getClientConfigWithOptions(request: $_model.GetClientConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClientConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brand)) {
      query["Brand"] = request.brand;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.osName)) {
      query["OsName"] = request.osName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClientConfig",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClientConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetClientConfigResponse({}));
  }

  /**
   * @param request - GetClientConfigRequest
   * @returns GetClientConfigResponse
   */
  async getClientConfig(request: $_model.GetClientConfigRequest): Promise<$_model.GetClientConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClientConfigWithOptions(request, runtime);
  }

  /**
   * 获取用户配置
   * 
   * @param request - GetCustomerConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomerConfigResponse
   */
  async getCustomerConfigWithOptions(request: $_model.GetCustomerConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomerConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomerConfig",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomerConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomerConfigResponse({}));
  }

  /**
   * 获取用户配置
   * 
   * @param request - GetCustomerConfigRequest
   * @returns GetCustomerConfigResponse
   */
  async getCustomerConfig(request: $_model.GetCustomerConfigRequest): Promise<$_model.GetCustomerConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomerConfigWithOptions(request, runtime);
  }

  /**
   * 获取DNADB
   * 
   * @param request - GetDNADBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDNADBResponse
   */
  async getDNADBWithOptions(request: $_model.GetDNADBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDNADBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBId)) {
      query["DBId"] = request.DBId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDNADB",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDNADBResponse>(await this.callApi(params, req, runtime), new $_model.GetDNADBResponse({}));
  }

  /**
   * 获取DNADB
   * 
   * @param request - GetDNADBRequest
   * @returns GetDNADBResponse
   */
  async getDNADB(request: $_model.GetDNADBRequest): Promise<$_model.GetDNADBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDNADBWithOptions(request, runtime);
  }

  /**
   * 获取DRM证书信息
   * 
   * @param request - GetDRMCertInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDRMCertInfoResponse
   */
  async getDRMCertInfoWithOptions(request: $_model.GetDRMCertInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDRMCertInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDRMCertInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDRMCertInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetDRMCertInfoResponse({}));
  }

  /**
   * 获取DRM证书信息
   * 
   * @param request - GetDRMCertInfoRequest
   * @returns GetDRMCertInfoResponse
   */
  async getDRMCertInfo(request: $_model.GetDRMCertInfoRequest): Promise<$_model.GetDRMCertInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDRMCertInfoWithOptions(request, runtime);
  }

  /**
   * 获取DRM证书
   * 
   * @param request - GetDRMLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDRMLicenseResponse
   */
  async getDRMLicenseWithOptions(request: $_model.GetDRMLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDRMLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.CDMData)) {
      query["CDMData"] = request.CDMData;
    }

    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.DRMType)) {
      query["DRMType"] = request.DRMType;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDRMLicense",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDRMLicenseResponse>(await this.callApi(params, req, runtime), new $_model.GetDRMLicenseResponse({}));
  }

  /**
   * 获取DRM证书
   * 
   * @param request - GetDRMLicenseRequest
   * @returns GetDRMLicenseResponse
   */
  async getDRMLicense(request: $_model.GetDRMLicenseRequest): Promise<$_model.GetDRMLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDRMLicenseWithOptions(request, runtime);
  }

  /**
   * 支持区域化媒资ID级别播放数据查询
   * 
   * @param request - GetDailyPlayRegionStatisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDailyPlayRegionStatisResponse
   */
  async getDailyPlayRegionStatisWithOptions(request: $_model.GetDailyPlayRegionStatisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDailyPlayRegionStatisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.date)) {
      query["Date"] = request.date;
    }

    if (!$dara.isNull(request.mediaRegion)) {
      query["MediaRegion"] = request.mediaRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDailyPlayRegionStatis",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDailyPlayRegionStatisResponse>(await this.callApi(params, req, runtime), new $_model.GetDailyPlayRegionStatisResponse({}));
  }

  /**
   * 支持区域化媒资ID级别播放数据查询
   * 
   * @param request - GetDailyPlayRegionStatisRequest
   * @returns GetDailyPlayRegionStatisResponse
   */
  async getDailyPlayRegionStatis(request: $_model.GetDailyPlayRegionStatisRequest): Promise<$_model.GetDailyPlayRegionStatisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDailyPlayRegionStatisWithOptions(request, runtime);
  }

  /**
   * 支持媒资ID级别播放数据查询
   * 
   * @param request - GetDailyPlayStatisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDailyPlayStatisResponse
   */
  async getDailyPlayStatisWithOptions(request: $_model.GetDailyPlayStatisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDailyPlayStatisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.mediaRegion)) {
      query["MediaRegion"] = request.mediaRegion;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDailyPlayStatis",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDailyPlayStatisResponse>(await this.callApi(params, req, runtime), new $_model.GetDailyPlayStatisResponse({}));
  }

  /**
   * 支持媒资ID级别播放数据查询
   * 
   * @param request - GetDailyPlayStatisRequest
   * @returns GetDailyPlayStatisResponse
   */
  async getDailyPlayStatis(request: $_model.GetDailyPlayStatisRequest): Promise<$_model.GetDailyPlayStatisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDailyPlayStatisWithOptions(request, runtime);
  }

  /**
   * Queries information about the default AI template.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * *   You can query information only about the default AI template for automated review.
   * 
   * @param request - GetDefaultAITemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDefaultAITemplateResponse
   */
  async getDefaultAITemplateWithOptions(request: $_model.GetDefaultAITemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDefaultAITemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDefaultAITemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDefaultAITemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetDefaultAITemplateResponse({}));
  }

  /**
   * Queries information about the default AI template.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * *   You can query information only about the default AI template for automated review.
   * 
   * @param request - GetDefaultAITemplateRequest
   * @returns GetDefaultAITemplateResponse
   */
  async getDefaultAITemplate(request: $_model.GetDefaultAITemplateRequest): Promise<$_model.GetDefaultAITemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDefaultAITemplateWithOptions(request, runtime);
  }

  /**
   * Queries the results of a digital watermark extraction job. You can call this operation to obtain information such as the job status and the content of the copyright or user-tracing watermark.
   * 
   * @remarks
   *   This operation is supported only in the China (Shanghai) and China (Beijing) regions.
   * *   You can call this operation to query the watermark content after you call the [SubmitDigitalWatermarkExtractJob](~~SubmitDigitalWatermarkExtractJob~~) operation to extract the copyright or user-tracing watermark in a video.
   * *   You can query watermark content extracted only from watermark extraction jobs that are submitted in the last 2 years.
   * 
   * @param request - GetDigitalWatermarkExtractResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDigitalWatermarkExtractResultResponse
   */
  async getDigitalWatermarkExtractResultWithOptions(request: $_model.GetDigitalWatermarkExtractResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDigitalWatermarkExtractResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extractType)) {
      query["ExtractType"] = request.extractType;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDigitalWatermarkExtractResult",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDigitalWatermarkExtractResultResponse>(await this.callApi(params, req, runtime), new $_model.GetDigitalWatermarkExtractResultResponse({}));
  }

  /**
   * Queries the results of a digital watermark extraction job. You can call this operation to obtain information such as the job status and the content of the copyright or user-tracing watermark.
   * 
   * @remarks
   *   This operation is supported only in the China (Shanghai) and China (Beijing) regions.
   * *   You can call this operation to query the watermark content after you call the [SubmitDigitalWatermarkExtractJob](~~SubmitDigitalWatermarkExtractJob~~) operation to extract the copyright or user-tracing watermark in a video.
   * *   You can query watermark content extracted only from watermark extraction jobs that are submitted in the last 2 years.
   * 
   * @param request - GetDigitalWatermarkExtractResultRequest
   * @returns GetDigitalWatermarkExtractResultResponse
   */
  async getDigitalWatermarkExtractResult(request: $_model.GetDigitalWatermarkExtractResultRequest): Promise<$_model.GetDigitalWatermarkExtractResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDigitalWatermarkExtractResultWithOptions(request, runtime);
  }

  /**
   * 获取剪辑工程
   * 
   * @param request - GetEditingProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEditingProjectResponse
   */
  async getEditingProjectWithOptions(request: $_model.GetEditingProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEditingProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEditingProject",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEditingProjectResponse>(await this.callApi(params, req, runtime), new $_model.GetEditingProjectResponse({}));
  }

  /**
   * 获取剪辑工程
   * 
   * @param request - GetEditingProjectRequest
   * @returns GetEditingProjectResponse
   */
  async getEditingProject(request: $_model.GetEditingProjectRequest): Promise<$_model.GetEditingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEditingProjectWithOptions(request, runtime);
  }

  /**
   * Queries materials to be edited for an online editing project.
   * 
   * @remarks
   * During editing, you can add materials to the timeline, but some of them may not be used.
   * 
   * @param request - GetEditingProjectMaterialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEditingProjectMaterialsResponse
   */
  async getEditingProjectMaterialsWithOptions(request: $_model.GetEditingProjectMaterialsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEditingProjectMaterialsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.materialType)) {
      query["MaterialType"] = request.materialType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEditingProjectMaterials",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEditingProjectMaterialsResponse>(await this.callApi(params, req, runtime), new $_model.GetEditingProjectMaterialsResponse({}));
  }

  /**
   * Queries materials to be edited for an online editing project.
   * 
   * @remarks
   * During editing, you can add materials to the timeline, but some of them may not be used.
   * 
   * @param request - GetEditingProjectMaterialsRequest
   * @returns GetEditingProjectMaterialsResponse
   */
  async getEditingProjectMaterials(request: $_model.GetEditingProjectMaterialsRequest): Promise<$_model.GetEditingProjectMaterialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEditingProjectMaterialsWithOptions(request, runtime);
  }

  /**
   * Queries the basic information and access URL of an image based on the image ID.
   * 
   * @param request - GetImageInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageInfoResponse
   */
  async getImageInfoWithOptions(request: $_model.GetImageInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetImageInfoResponse({}));
  }

  /**
   * Queries the basic information and access URL of an image based on the image ID.
   * 
   * @param request - GetImageInfoRequest
   * @returns GetImageInfoResponse
   */
  async getImageInfo(request: $_model.GetImageInfoRequest): Promise<$_model.GetImageInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageInfoWithOptions(request, runtime);
  }

  /**
   * Queries the basic information about multiple images at a time.
   * 
   * @remarks
   *   You can call the [CreateUploadImage](~~CreateUploadImage~~) operation to upload images to ApsaraVideo VOD and call this operation to query the basic information about multiple images at a time.
   * *   To query information about video snapshots, call the [ListSnapshots](~~ListSnapshots~~) operation.
   * *   You can specify up to 20 image IDs in one call.
   * 
   * @param request - GetImageInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageInfosResponse
   */
  async getImageInfosWithOptions(request: $_model.GetImageInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!$dara.isNull(request.imageIds)) {
      query["ImageIds"] = request.imageIds;
    }

    if (!$dara.isNull(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageInfosResponse>(await this.callApi(params, req, runtime), new $_model.GetImageInfosResponse({}));
  }

  /**
   * Queries the basic information about multiple images at a time.
   * 
   * @remarks
   *   You can call the [CreateUploadImage](~~CreateUploadImage~~) operation to upload images to ApsaraVideo VOD and call this operation to query the basic information about multiple images at a time.
   * *   To query information about video snapshots, call the [ListSnapshots](~~ListSnapshots~~) operation.
   * *   You can specify up to 20 image IDs in one call.
   * 
   * @param request - GetImageInfosRequest
   * @returns GetImageInfosResponse
   */
  async getImageInfos(request: $_model.GetImageInfosRequest): Promise<$_model.GetImageInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageInfosWithOptions(request, runtime);
  }

  /**
   * 获取单个智能策略信息
   * 
   * @param request - GetIntelligentStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIntelligentStrategyResponse
   */
  async getIntelligentStrategyWithOptions(request: $_model.GetIntelligentStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIntelligentStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIntelligentStrategy",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIntelligentStrategyResponse>(await this.callApi(params, req, runtime), new $_model.GetIntelligentStrategyResponse({}));
  }

  /**
   * 获取单个智能策略信息
   * 
   * @param request - GetIntelligentStrategyRequest
   * @returns GetIntelligentStrategyResponse
   */
  async getIntelligentStrategy(request: $_model.GetIntelligentStrategyRequest): Promise<$_model.GetIntelligentStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIntelligentStrategyWithOptions(request, runtime);
  }

  /**
   * Queries the details of an asynchronous task based on jobId.
   * 
   * @remarks
   * ***
   * You can call this operation to query only asynchronous tasks of the last six months. The types of tasks that you can query include transcoding tasks, snapshot tasks, and AI tasks.
   * **QPS limit**
   * You can call this operation up to 15 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - GetJobDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobDetailResponse
   */
  async getJobDetailWithOptions(request: $_model.GetJobDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobDetail",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetJobDetailResponse({}));
  }

  /**
   * Queries the details of an asynchronous task based on jobId.
   * 
   * @remarks
   * ***
   * You can call this operation to query only asynchronous tasks of the last six months. The types of tasks that you can query include transcoding tasks, snapshot tasks, and AI tasks.
   * **QPS limit**
   * You can call this operation up to 15 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - GetJobDetailRequest
   * @returns GetJobDetailResponse
   */
  async getJobDetail(request: $_model.GetJobDetailRequest): Promise<$_model.GetJobDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobDetailWithOptions(request, runtime);
  }

  /**
   * GetKMSServiceKey
   * 
   * @param request - GetKMSServiceKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKMSServiceKeyResponse
   */
  async getKMSServiceKeyWithOptions(request: $_model.GetKMSServiceKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetKMSServiceKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.kmsRegionId)) {
      query["KmsRegionId"] = request.kmsRegionId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKMSServiceKey",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKMSServiceKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetKMSServiceKeyResponse({}));
  }

  /**
   * GetKMSServiceKey
   * 
   * @param request - GetKMSServiceKeyRequest
   * @returns GetKMSServiceKeyResponse
   */
  async getKMSServiceKey(request: $_model.GetKMSServiceKeyRequest): Promise<$_model.GetKMSServiceKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKMSServiceKeyWithOptions(request, runtime);
  }

  /**
   * 获取License证书信息
   * 
   * @param request - GetLicenseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLicenseInfoResponse
   */
  async getLicenseInfoWithOptions(request: $_model.GetLicenseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLicenseInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.licenseId)) {
      query["LicenseId"] = request.licenseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLicenseInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLicenseInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetLicenseInfoResponse({}));
  }

  /**
   * 获取License证书信息
   * 
   * @param request - GetLicenseInfoRequest
   * @returns GetLicenseInfoResponse
   */
  async getLicenseInfo(request: $_model.GetLicenseInfoRequest): Promise<$_model.GetLicenseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLicenseInfoWithOptions(request, runtime);
  }

  /**
   * 获取LicenseKey
   * 
   * @param request - GetLicenseKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLicenseKeyResponse
   */
  async getLicenseKeyWithOptions(request: $_model.GetLicenseKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLicenseKeyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLicenseKey",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLicenseKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetLicenseKeyResponse({}));
  }

  /**
   * 获取LicenseKey
   * 
   * @param request - GetLicenseKeyRequest
   * @returns GetLicenseKeyResponse
   */
  async getLicenseKey(request: $_model.GetLicenseKeyRequest): Promise<$_model.GetLicenseKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLicenseKeyWithOptions(request, runtime);
  }

  /**
   * 获取License支付状态
   * 
   * @param request - GetLicensePurchaseStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLicensePurchaseStatusResponse
   */
  async getLicensePurchaseStatusWithOptions(request: $_model.GetLicensePurchaseStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLicensePurchaseStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.licenseItemIds)) {
      query["LicenseItemIds"] = request.licenseItemIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLicensePurchaseStatus",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLicensePurchaseStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetLicensePurchaseStatusResponse({}));
  }

  /**
   * 获取License支付状态
   * 
   * @param request - GetLicensePurchaseStatusRequest
   * @returns GetLicensePurchaseStatusResponse
   */
  async getLicensePurchaseStatus(request: $_model.GetLicensePurchaseStatusRequest): Promise<$_model.GetLicensePurchaseStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLicensePurchaseStatusWithOptions(request, runtime);
  }

  /**
   * 查询license列表
   * 
   * @param request - GetLicensesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLicensesResponse
   */
  async getLicensesWithOptions(request: $_model.GetLicensesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLicensesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appItemId)) {
      query["AppItemId"] = request.appItemId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.businessType)) {
      body["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.needTotalCount)) {
      body["NeedTotalCount"] = request.needTotalCount;
    }

    if (!$dara.isNull(request.offset)) {
      body["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pkgName)) {
      body["PkgName"] = request.pkgName;
    }

    if (!$dara.isNull(request.platformType)) {
      body["PlatformType"] = request.platformType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLicenses",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLicensesResponse>(await this.callApi(params, req, runtime), new $_model.GetLicensesResponse({}));
  }

  /**
   * 查询license列表
   * 
   * @param request - GetLicensesRequest
   * @returns GetLicensesResponse
   */
  async getLicenses(request: $_model.GetLicensesRequest): Promise<$_model.GetLicensesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLicensesWithOptions(request, runtime);
  }

  /**
   * 获取MTS统计数据
   * 
   * @param request - GetMTSStatisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMTSStatisResponse
   */
  async getMTSStatisWithOptions(request: $_model.GetMTSStatisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMTSStatisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.division)) {
      query["Division"] = request.division;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endTimeUTC)) {
      query["EndTimeUTC"] = request.endTimeUTC;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.startTimeUTC)) {
      query["StartTimeUTC"] = request.startTimeUTC;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMTSStatis",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMTSStatisResponse>(await this.callApi(params, req, runtime), new $_model.GetMTSStatisResponse({}));
  }

  /**
   * 获取MTS统计数据
   * 
   * @param request - GetMTSStatisRequest
   * @returns GetMTSStatisResponse
   */
  async getMTSStatis(request: $_model.GetMTSStatisRequest): Promise<$_model.GetMTSStatisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMTSStatisWithOptions(request, runtime);
  }

  /**
   * Queries the details of audio review results.
   * 
   * @remarks
   * If notifications for the [CreateAuditComplete](https://help.aliyun.com/document_detail/89576.html) event are configured, event notifications are sent to the callback URL after automated review is complete. You can call this operation to query the details of audio review results.
   * 
   * @param request - GetMediaAuditAudioResultDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaAuditAudioResultDetailResponse
   */
  async getMediaAuditAudioResultDetailWithOptions(request: $_model.GetMediaAuditAudioResultDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaAuditAudioResultDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaAuditAudioResultDetail",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaAuditAudioResultDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaAuditAudioResultDetailResponse({}));
  }

  /**
   * Queries the details of audio review results.
   * 
   * @remarks
   * If notifications for the [CreateAuditComplete](https://help.aliyun.com/document_detail/89576.html) event are configured, event notifications are sent to the callback URL after automated review is complete. You can call this operation to query the details of audio review results.
   * 
   * @param request - GetMediaAuditAudioResultDetailRequest
   * @returns GetMediaAuditAudioResultDetailResponse
   */
  async getMediaAuditAudioResultDetail(request: $_model.GetMediaAuditAudioResultDetailRequest): Promise<$_model.GetMediaAuditAudioResultDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaAuditAudioResultDetailWithOptions(request, runtime);
  }

  /**
   * Queries the summary of automated review results.
   * 
   * @param request - GetMediaAuditResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaAuditResultResponse
   */
  async getMediaAuditResultWithOptions(request: $_model.GetMediaAuditResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaAuditResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaAuditResult",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaAuditResultResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaAuditResultResponse({}));
  }

  /**
   * Queries the summary of automated review results.
   * 
   * @param request - GetMediaAuditResultRequest
   * @returns GetMediaAuditResultResponse
   */
  async getMediaAuditResult(request: $_model.GetMediaAuditResultRequest): Promise<$_model.GetMediaAuditResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaAuditResultWithOptions(request, runtime);
  }

  /**
   * Queries the details of automated review results. You can call this operation to query the details of review results in real time.
   * 
   * @remarks
   *   By default, only details of snapshots that violate content regulations and potentially violate content regulations are returned.
   * *   ApsaraVideo VOD stores the snapshots in the automated review results free of charge for two weeks. After this period, the snapshots are automatically deleted.
   * *   This operation is available only in the Singapore region.
   * 
   * @param request - GetMediaAuditResultDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaAuditResultDetailResponse
   */
  async getMediaAuditResultDetailWithOptions(request: $_model.GetMediaAuditResultDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaAuditResultDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaAuditResultDetail",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaAuditResultDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaAuditResultDetailResponse({}));
  }

  /**
   * Queries the details of automated review results. You can call this operation to query the details of review results in real time.
   * 
   * @remarks
   *   By default, only details of snapshots that violate content regulations and potentially violate content regulations are returned.
   * *   ApsaraVideo VOD stores the snapshots in the automated review results free of charge for two weeks. After this period, the snapshots are automatically deleted.
   * *   This operation is available only in the Singapore region.
   * 
   * @param request - GetMediaAuditResultDetailRequest
   * @returns GetMediaAuditResultDetailResponse
   */
  async getMediaAuditResultDetail(request: $_model.GetMediaAuditResultDetailRequest): Promise<$_model.GetMediaAuditResultDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaAuditResultDetailWithOptions(request, runtime);
  }

  /**
   * Queries the timelines of all snapshots that violate content regulations.
   * 
   * @remarks
   * >  By default, only details of snapshots that violate content regulations and potentially violate content regulations are returned.
   * This operation is available only in the Singapore region.
   * 
   * @param request - GetMediaAuditResultTimelineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaAuditResultTimelineResponse
   */
  async getMediaAuditResultTimelineWithOptions(request: $_model.GetMediaAuditResultTimelineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaAuditResultTimelineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaAuditResultTimeline",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaAuditResultTimelineResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaAuditResultTimelineResponse({}));
  }

  /**
   * Queries the timelines of all snapshots that violate content regulations.
   * 
   * @remarks
   * >  By default, only details of snapshots that violate content regulations and potentially violate content regulations are returned.
   * This operation is available only in the Singapore region.
   * 
   * @param request - GetMediaAuditResultTimelineRequest
   * @returns GetMediaAuditResultTimelineResponse
   */
  async getMediaAuditResultTimeline(request: $_model.GetMediaAuditResultTimelineRequest): Promise<$_model.GetMediaAuditResultTimelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaAuditResultTimelineWithOptions(request, runtime);
  }

  /**
   * Queries a media fingerprinting result. After a media fingerprinting job is complete, you can call this operation to query the media fingerprinting result.
   * 
   * @remarks
   * Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * 
   * @param request - GetMediaDNAResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaDNAResultResponse
   */
  async getMediaDNAResultWithOptions(request: $_model.GetMediaDNAResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaDNAResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaDNAResult",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaDNAResultResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaDNAResultResponse({}));
  }

  /**
   * Queries a media fingerprinting result. After a media fingerprinting job is complete, you can call this operation to query the media fingerprinting result.
   * 
   * @remarks
   * Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * 
   * @param request - GetMediaDNAResultRequest
   * @returns GetMediaDNAResultResponse
   */
  async getMediaDNAResult(request: $_model.GetMediaDNAResultRequest): Promise<$_model.GetMediaDNAResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaDNAResultWithOptions(request, runtime);
  }

  /**
   * 获取媒资导出任务
   * 
   * @param request - GetMediaExportJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaExportJobsResponse
   */
  async getMediaExportJobsWithOptions(request: $_model.GetMediaExportJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaExportJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaExportJobs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaExportJobsResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaExportJobsResponse({}));
  }

  /**
   * 获取媒资导出任务
   * 
   * @param request - GetMediaExportJobsRequest
   * @returns GetMediaExportJobsResponse
   */
  async getMediaExportJobs(request: $_model.GetMediaExportJobsRequest): Promise<$_model.GetMediaExportJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaExportJobsWithOptions(request, runtime);
  }

  /**
   * 获取生命周期规则
   * 
   * @param request - GetMediaLifecycleRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaLifecycleRuleResponse
   */
  async getMediaLifecycleRuleWithOptions(request: $_model.GetMediaLifecycleRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaLifecycleRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.ruleIds)) {
      query["RuleIds"] = request.ruleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaLifecycleRule",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaLifecycleRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaLifecycleRuleResponse({}));
  }

  /**
   * 获取生命周期规则
   * 
   * @param request - GetMediaLifecycleRuleRequest
   * @returns GetMediaLifecycleRuleResponse
   */
  async getMediaLifecycleRule(request: $_model.GetMediaLifecycleRuleRequest): Promise<$_model.GetMediaLifecycleRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaLifecycleRuleWithOptions(request, runtime);
  }

  /**
   * Queries the information about media refresh or prefetch jobs, such as the job status and filtering conditions.
   * 
   * @remarks
   * You can query the information about all media files or a specific media file in a refresh or prefetch job.
   * ### QPS limits
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits on API operations in ApsaraVideo VoD](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - GetMediaRefreshJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaRefreshJobsResponse
   */
  async getMediaRefreshJobsWithOptions(request: $_model.GetMediaRefreshJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaRefreshJobsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaRefreshJobs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaRefreshJobsResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaRefreshJobsResponse({}));
  }

  /**
   * Queries the information about media refresh or prefetch jobs, such as the job status and filtering conditions.
   * 
   * @remarks
   * You can query the information about all media files or a specific media file in a refresh or prefetch job.
   * ### QPS limits
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits on API operations in ApsaraVideo VoD](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - GetMediaRefreshJobsRequest
   * @returns GetMediaRefreshJobsResponse
   */
  async getMediaRefreshJobs(request: $_model.GetMediaRefreshJobsRequest): Promise<$_model.GetMediaRefreshJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaRefreshJobsWithOptions(request, runtime);
  }

  /**
   * Queries the callback method, callback URL, and event type for event notifications.
   * 
   * @remarks
   * > For more information, see [Event notification](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @param request - GetMessageCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMessageCallbackResponse
   */
  async getMessageCallbackWithOptions(request: $_model.GetMessageCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMessageCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMessageCallback",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMessageCallbackResponse>(await this.callApi(params, req, runtime), new $_model.GetMessageCallbackResponse({}));
  }

  /**
   * Queries the callback method, callback URL, and event type for event notifications.
   * 
   * @remarks
   * > For more information, see [Event notification](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @param request - GetMessageCallbackRequest
   * @returns GetMessageCallbackResponse
   */
  async getMessageCallback(request: $_model.GetMessageCallbackRequest): Promise<$_model.GetMessageCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMessageCallbackWithOptions(request, runtime);
  }

  /**
   * 获取回调事件列表
   * 
   * @param request - GetMessageCallbackEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMessageCallbackEventListResponse
   */
  async getMessageCallbackEventListWithOptions(request: $_model.GetMessageCallbackEventListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMessageCallbackEventListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMessageCallbackEventList",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMessageCallbackEventListResponse>(await this.callApi(params, req, runtime), new $_model.GetMessageCallbackEventListResponse({}));
  }

  /**
   * 获取回调事件列表
   * 
   * @param request - GetMessageCallbackEventListRequest
   * @returns GetMessageCallbackEventListResponse
   */
  async getMessageCallbackEventList(request: $_model.GetMessageCallbackEventListRequest): Promise<$_model.GetMessageCallbackEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMessageCallbackEventListWithOptions(request, runtime);
  }

  /**
   * 获取云监控配置
   * 
   * @param request - GetMessageCloudMonitorConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMessageCloudMonitorConfigResponse
   */
  async getMessageCloudMonitorConfigWithOptions(request: $_model.GetMessageCloudMonitorConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMessageCloudMonitorConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMessageCloudMonitorConfig",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMessageCloudMonitorConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetMessageCloudMonitorConfigResponse({}));
  }

  /**
   * 获取云监控配置
   * 
   * @param request - GetMessageCloudMonitorConfigRequest
   * @returns GetMessageCloudMonitorConfigResponse
   */
  async getMessageCloudMonitorConfig(request: $_model.GetMessageCloudMonitorConfigRequest): Promise<$_model.GetMessageCloudMonitorConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMessageCloudMonitorConfigWithOptions(request, runtime);
  }

  /**
   * 获取云监控事件列表
   * 
   * @param request - GetMessageCloudMonitorEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMessageCloudMonitorEventListResponse
   */
  async getMessageCloudMonitorEventListWithOptions(request: $_model.GetMessageCloudMonitorEventListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMessageCloudMonitorEventListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMessageCloudMonitorEventList",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMessageCloudMonitorEventListResponse>(await this.callApi(params, req, runtime), new $_model.GetMessageCloudMonitorEventListResponse({}));
  }

  /**
   * 获取云监控事件列表
   * 
   * @param request - GetMessageCloudMonitorEventListRequest
   * @returns GetMessageCloudMonitorEventListResponse
   */
  async getMessageCloudMonitorEventList(request: $_model.GetMessageCloudMonitorEventListRequest): Promise<$_model.GetMessageCloudMonitorEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMessageCloudMonitorEventListWithOptions(request, runtime);
  }

  /**
   * Queries the information about the mezzanine file of an audio or video. The information includes the mezzanine file URL, resolution, and bitrate of the audio or video.
   * 
   * @remarks
   * You can obtain complete information about the source file only after a stream is transcoded.
   * 
   * @param request - GetMezzanineInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMezzanineInfoResponse
   */
  async getMezzanineInfoWithOptions(request: $_model.GetMezzanineInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMezzanineInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.additionType)) {
      query["AdditionType"] = request.additionType;
    }

    if (!$dara.isNull(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!$dara.isNull(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMezzanineInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMezzanineInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetMezzanineInfoResponse({}));
  }

  /**
   * Queries the information about the mezzanine file of an audio or video. The information includes the mezzanine file URL, resolution, and bitrate of the audio or video.
   * 
   * @remarks
   * You can obtain complete information about the source file only after a stream is transcoded.
   * 
   * @param request - GetMezzanineInfoRequest
   * @returns GetMezzanineInfoResponse
   */
  async getMezzanineInfo(request: $_model.GetMezzanineInfoRequest): Promise<$_model.GetMezzanineInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMezzanineInfoWithOptions(request, runtime);
  }

  /**
   * 获取OSS流量统计
   * 
   * @param request - GetOSSFlowStatisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOSSFlowStatisResponse
   */
  async getOSSFlowStatisWithOptions(request: $_model.GetOSSFlowStatisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOSSFlowStatisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.division)) {
      query["Division"] = request.division;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endTimeUTC)) {
      query["EndTimeUTC"] = request.endTimeUTC;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.startTimeUTC)) {
      query["StartTimeUTC"] = request.startTimeUTC;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOSSFlowStatis",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOSSFlowStatisResponse>(await this.callApi(params, req, runtime), new $_model.GetOSSFlowStatisResponse({}));
  }

  /**
   * 获取OSS流量统计
   * 
   * @param request - GetOSSFlowStatisRequest
   * @returns GetOSSFlowStatisResponse
   */
  async getOSSFlowStatis(request: $_model.GetOSSFlowStatisRequest): Promise<$_model.GetOSSFlowStatisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOSSFlowStatisWithOptions(request, runtime);
  }

  /**
   * 获取OSS统计
   * 
   * @param request - GetOSSStatisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOSSStatisResponse
   */
  async getOSSStatisWithOptions(request: $_model.GetOSSStatisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOSSStatisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.division)) {
      query["Division"] = request.division;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endTimeUTC)) {
      query["EndTimeUTC"] = request.endTimeUTC;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.startTimeUTC)) {
      query["StartTimeUTC"] = request.startTimeUTC;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOSSStatis",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOSSStatisResponse>(await this.callApi(params, req, runtime), new $_model.GetOSSStatisResponse({}));
  }

  /**
   * 获取OSS统计
   * 
   * @param request - GetOSSStatisRequest
   * @returns GetOSSStatisResponse
   */
  async getOSSStatis(request: $_model.GetOSSStatisRequest): Promise<$_model.GetOSSStatisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOSSStatisWithOptions(request, runtime);
  }

  /**
   * 分页获取应用信息列表
   * 
   * @param request - GetPageByCondAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPageByCondAppInfoResponse
   */
  async getPageByCondAppInfoWithOptions(request: $_model.GetPageByCondAppInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPageByCondAppInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appItemId)) {
      query["AppItemId"] = request.appItemId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.needTotalCount)) {
      query["NeedTotalCount"] = request.needTotalCount;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pkgName)) {
      query["PkgName"] = request.pkgName;
    }

    if (!$dara.isNull(request.pkgSignature)) {
      query["PkgSignature"] = request.pkgSignature;
    }

    if (!$dara.isNull(request.platformType)) {
      query["PlatformType"] = request.platformType;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPageByCondAppInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPageByCondAppInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetPageByCondAppInfoResponse({}));
  }

  /**
   * 分页获取应用信息列表
   * 
   * @param request - GetPageByCondAppInfoRequest
   * @returns GetPageByCondAppInfoResponse
   */
  async getPageByCondAppInfo(request: $_model.GetPageByCondAppInfoRequest): Promise<$_model.GetPageByCondAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPageByCondAppInfoWithOptions(request, runtime);
  }

  /**
   * 分页获取实例信息列表
   * 
   * @param request - GetPageByCondLicenseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPageByCondLicenseInstanceResponse
   */
  async getPageByCondLicenseInstanceWithOptions(request: $_model.GetPageByCondLicenseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPageByCondLicenseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contractNo)) {
      query["ContractNo"] = request.contractNo;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.needTotalCount)) {
      query["NeedTotalCount"] = request.needTotalCount;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPageByCondLicenseInstance",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPageByCondLicenseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetPageByCondLicenseInstanceResponse({}));
  }

  /**
   * 分页获取实例信息列表
   * 
   * @param request - GetPageByCondLicenseInstanceRequest
   * @returns GetPageByCondLicenseInstanceResponse
   */
  async getPageByCondLicenseInstance(request: $_model.GetPageByCondLicenseInstanceRequest): Promise<$_model.GetPageByCondLicenseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPageByCondLicenseInstanceWithOptions(request, runtime);
  }

  /**
   * 获取自有存储列表
   * 
   * @param request - GetPersonalStorageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPersonalStorageListResponse
   */
  async getPersonalStorageListWithOptions(request: $_model.GetPersonalStorageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPersonalStorageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxKeys)) {
      query["MaxKeys"] = request.maxKeys;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.storageRegion)) {
      query["StorageRegion"] = request.storageRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPersonalStorageList",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPersonalStorageListResponse>(await this.callApi(params, req, runtime), new $_model.GetPersonalStorageListResponse({}));
  }

  /**
   * 获取自有存储列表
   * 
   * @param request - GetPersonalStorageListRequest
   * @returns GetPersonalStorageListResponse
   */
  async getPersonalStorageList(request: $_model.GetPersonalStorageListRequest): Promise<$_model.GetPersonalStorageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPersonalStorageListWithOptions(request, runtime);
  }

  /**
   * 查询套餐规格
   * 
   * @param request - GetPlanSpecificationForLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPlanSpecificationForLicenseResponse
   */
  async getPlanSpecificationForLicenseWithOptions(request: $_model.GetPlanSpecificationForLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPlanSpecificationForLicenseResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPlanSpecificationForLicense",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPlanSpecificationForLicenseResponse>(await this.callApi(params, req, runtime), new $_model.GetPlanSpecificationForLicenseResponse({}));
  }

  /**
   * 查询套餐规格
   * 
   * @param request - GetPlanSpecificationForLicenseRequest
   * @returns GetPlanSpecificationForLicenseResponse
   */
  async getPlanSpecificationForLicense(request: $_model.GetPlanSpecificationForLicenseRequest): Promise<$_model.GetPlanSpecificationForLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPlanSpecificationForLicenseWithOptions(request, runtime);
  }

  /**
   * 获取播放配置信息
   * 
   * @param request - GetPlayConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPlayConfigResponse
   */
  async getPlayConfigWithOptions(request: $_model.GetPlayConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPlayConfigResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPlayConfig",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPlayConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetPlayConfigResponse({}));
  }

  /**
   * 获取播放配置信息
   * 
   * @param request - GetPlayConfigRequest
   * @returns GetPlayConfigResponse
   */
  async getPlayConfig(request: $_model.GetPlayConfigRequest): Promise<$_model.GetPlayConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPlayConfigWithOptions(request, runtime);
  }

  /**
   * Obtains the playback URL by the audio or video ID. Then, you can use ApsaraVideo Player or a third-party player, such as a system player, open source player, orself-developed player, to play the audio or video.
   * 
   * @remarks
   *   **Make sure that you understand the billing method and price of ApsaraVideo VOD before you call this operation. You are charged for outbound traffic when you download or play videos based on URLs in ApsaraVideo VOD. For more information about billing of outbound traffic, see [Billing of outbound traffic](~~188308#section-rwh-e88-f7j~~). If you have configured an accelerated domain name, see [Billing of the acceleration service](~~188308#section-c5t-oq9-15e~~). If you have activated the acceleration service, you are charged acceleration fees when you upload media files to ApsaraVideo VOD. For more information, see [Billing of acceleration traffic](~~188310#section_sta_zm2_tsv~~).**
   * *   Only videos whose Status is Normal can be played. For more information, see [Overview](https://help.aliyun.com/document_detail/57290.html).
   * *   If video playback fails, you can call the [GetMezzanineInfo](~~GetMezzanineInfo~~) operation to check whether the video source information is correct.
   * 
   * @param request - GetPlayInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPlayInfoResponse
   */
  async getPlayInfoWithOptions(request: $_model.GetPlayInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPlayInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.additionType)) {
      query["AdditionType"] = request.additionType;
    }

    if (!$dara.isNull(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!$dara.isNull(request.definition)) {
      query["Definition"] = request.definition;
    }

    if (!$dara.isNull(request.digitalWatermarkType)) {
      query["DigitalWatermarkType"] = request.digitalWatermarkType;
    }

    if (!$dara.isNull(request.formats)) {
      query["Formats"] = request.formats;
    }

    if (!$dara.isNull(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    if (!$dara.isNull(request.playConfig)) {
      query["PlayConfig"] = request.playConfig;
    }

    if (!$dara.isNull(request.reAuthInfo)) {
      query["ReAuthInfo"] = request.reAuthInfo;
    }

    if (!$dara.isNull(request.resultType)) {
      query["ResultType"] = request.resultType;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    if (!$dara.isNull(request.trace)) {
      query["Trace"] = request.trace;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPlayInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPlayInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetPlayInfoResponse({}));
  }

  /**
   * Obtains the playback URL by the audio or video ID. Then, you can use ApsaraVideo Player or a third-party player, such as a system player, open source player, orself-developed player, to play the audio or video.
   * 
   * @remarks
   *   **Make sure that you understand the billing method and price of ApsaraVideo VOD before you call this operation. You are charged for outbound traffic when you download or play videos based on URLs in ApsaraVideo VOD. For more information about billing of outbound traffic, see [Billing of outbound traffic](~~188308#section-rwh-e88-f7j~~). If you have configured an accelerated domain name, see [Billing of the acceleration service](~~188308#section-c5t-oq9-15e~~). If you have activated the acceleration service, you are charged acceleration fees when you upload media files to ApsaraVideo VOD. For more information, see [Billing of acceleration traffic](~~188310#section_sta_zm2_tsv~~).**
   * *   Only videos whose Status is Normal can be played. For more information, see [Overview](https://help.aliyun.com/document_detail/57290.html).
   * *   If video playback fails, you can call the [GetMezzanineInfo](~~GetMezzanineInfo~~) operation to check whether the video source information is correct.
   * 
   * @param request - GetPlayInfoRequest
   * @returns GetPlayInfoResponse
   */
  async getPlayInfo(request: $_model.GetPlayInfoRequest): Promise<$_model.GetPlayInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPlayInfoWithOptions(request, runtime);
  }

  /**
   * 获取播放配置
   * 
   * @param request - GetPlayerConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPlayerConfigResponse
   */
  async getPlayerConfigWithOptions(request: $_model.GetPlayerConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPlayerConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!$dara.isNull(request.authInfo)) {
      query["AuthInfo"] = request.authInfo;
    }

    if (!$dara.isNull(request.authTimestamp)) {
      query["AuthTimestamp"] = request.authTimestamp;
    }

    if (!$dara.isNull(request.deviceBrand)) {
      query["DeviceBrand"] = request.deviceBrand;
    }

    if (!$dara.isNull(request.deviceModel)) {
      query["DeviceModel"] = request.deviceModel;
    }

    if (!$dara.isNull(request.osName)) {
      query["OsName"] = request.osName;
    }

    if (!$dara.isNull(request.reserved)) {
      query["Reserved"] = request.reserved;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPlayerConfig",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPlayerConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetPlayerConfigResponse({}));
  }

  /**
   * 获取播放配置
   * 
   * @param request - GetPlayerConfigRequest
   * @returns GetPlayerConfigResponse
   */
  async getPlayerConfig(request: $_model.GetPlayerConfigRequest): Promise<$_model.GetPlayerConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPlayerConfigWithOptions(request, runtime);
  }

  /**
   * 获取SDK接入
   * 
   * @param request - GetSdkIntegrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSdkIntegrationResponse
   */
  async getSdkIntegrationWithOptions(request: $_model.GetSdkIntegrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSdkIntegrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.integrationType)) {
      query["IntegrationType"] = request.integrationType;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.sdkCodeId)) {
      query["SdkCodeId"] = request.sdkCodeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSdkIntegration",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSdkIntegrationResponse>(await this.callApi(params, req, runtime), new $_model.GetSdkIntegrationResponse({}));
  }

  /**
   * 获取SDK接入
   * 
   * @param request - GetSdkIntegrationRequest
   * @returns GetSdkIntegrationResponse
   */
  async getSdkIntegration(request: $_model.GetSdkIntegrationRequest): Promise<$_model.GetSdkIntegrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSdkIntegrationWithOptions(request, runtime);
  }

  /**
   * 获取sdk列表
   * 
   * @param request - GetSdkListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSdkListResponse
   */
  async getSdkListWithOptions(request: $_model.GetSdkListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSdkListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSdkList",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSdkListResponse>(await this.callApi(params, req, runtime), new $_model.GetSdkListResponse({}));
  }

  /**
   * 获取sdk列表
   * 
   * @param request - GetSdkListRequest
   * @returns GetSdkListResponse
   */
  async getSdkList(request: $_model.GetSdkListRequest): Promise<$_model.GetSdkListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSdkListWithOptions(request, runtime);
  }

  /**
   * 获取商品完整的规格对象
   * 
   * @param request - GetSpecificationsForLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSpecificationsForLicenseResponse
   */
  async getSpecificationsForLicenseWithOptions(request: $_model.GetSpecificationsForLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSpecificationsForLicenseResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSpecificationsForLicense",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSpecificationsForLicenseResponse>(await this.callApi(params, req, runtime), new $_model.GetSpecificationsForLicenseResponse({}));
  }

  /**
   * 获取商品完整的规格对象
   * 
   * @param request - GetSpecificationsForLicenseRequest
   * @returns GetSpecificationsForLicenseResponse
   */
  async getSpecificationsForLicense(request: $_model.GetSpecificationsForLicenseRequest): Promise<$_model.GetSpecificationsForLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSpecificationsForLicenseWithOptions(request, runtime);
  }

  /**
   * 获取客户的存储信息
   * 
   * @param request - GetStorageInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStorageInfoResponse
   */
  async getStorageInfoWithOptions(request: $_model.GetStorageInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStorageInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStorageInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStorageInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetStorageInfoResponse({}));
  }

  /**
   * 获取客户的存储信息
   * 
   * @param request - GetStorageInfoRequest
   * @returns GetStorageInfoResponse
   */
  async getStorageInfo(request: $_model.GetStorageInfoRequest): Promise<$_model.GetStorageInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStorageInfoWithOptions(request, runtime);
  }

  /**
   * 获取存储列表
   * 
   * @param request - GetStorageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStorageListResponse
   */
  async getStorageListWithOptions(request: $_model.GetStorageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStorageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.division)) {
      query["Division"] = request.division;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.storageRegion)) {
      query["StorageRegion"] = request.storageRegion;
    }

    if (!$dara.isNull(request.storageStatus)) {
      query["StorageStatus"] = request.storageStatus;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStorageList",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStorageListResponse>(await this.callApi(params, req, runtime), new $_model.GetStorageListResponse({}));
  }

  /**
   * 获取存储列表
   * 
   * @param request - GetStorageListRequest
   * @returns GetStorageListResponse
   */
  async getStorageList(request: $_model.GetStorageListRequest): Promise<$_model.GetStorageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStorageListWithOptions(request, runtime);
  }

  /**
   * 获取存储通知配置
   * 
   * @param request - GetStorageNotifyConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStorageNotifyConfigResponse
   */
  async getStorageNotifyConfigWithOptions(request: $_model.GetStorageNotifyConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStorageNotifyConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStorageNotifyConfig",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStorageNotifyConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetStorageNotifyConfigResponse({}));
  }

  /**
   * 获取存储通知配置
   * 
   * @param request - GetStorageNotifyConfigRequest
   * @returns GetStorageNotifyConfigResponse
   */
  async getStorageNotifyConfig(request: $_model.GetStorageNotifyConfigRequest): Promise<$_model.GetStorageNotifyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStorageNotifyConfigWithOptions(request, runtime);
  }

  /**
   * 获取存储区域列表
   * 
   * @param request - GetStorageRegionListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStorageRegionListResponse
   */
  async getStorageRegionListWithOptions(request: $_model.GetStorageRegionListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStorageRegionListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStorageRegionList",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStorageRegionListResponse>(await this.callApi(params, req, runtime), new $_model.GetStorageRegionListResponse({}));
  }

  /**
   * 获取存储区域列表
   * 
   * @param request - GetStorageRegionListRequest
   * @returns GetStorageRegionListResponse
   */
  async getStorageRegionList(request: $_model.GetStorageRegionListRequest): Promise<$_model.GetStorageRegionListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStorageRegionListWithOptions(request, runtime);
  }

  /**
   * 获取模版组
   * 
   * @param request - GetTemplateGroupConsoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateGroupConsoleResponse
   */
  async getTemplateGroupConsoleWithOptions(request: $_model.GetTemplateGroupConsoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateGroupConsoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplateGroupConsole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateGroupConsoleResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateGroupConsoleResponse({}));
  }

  /**
   * 获取模版组
   * 
   * @param request - GetTemplateGroupConsoleRequest
   * @returns GetTemplateGroupConsoleResponse
   */
  async getTemplateGroupConsole(request: $_model.GetTemplateGroupConsoleRequest): Promise<$_model.GetTemplateGroupConsoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTemplateGroupConsoleWithOptions(request, runtime);
  }

  /**
   * 获取全部统计数据
   * 
   * @param request - GetTotalStatisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTotalStatisResponse
   */
  async getTotalStatisWithOptions(request: $_model.GetTotalStatisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTotalStatisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTotalStatis",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTotalStatisResponse>(await this.callApi(params, req, runtime), new $_model.GetTotalStatisResponse({}));
  }

  /**
   * 获取全部统计数据
   * 
   * @param request - GetTotalStatisRequest
   * @returns GetTotalStatisResponse
   */
  async getTotalStatis(request: $_model.GetTotalStatisRequest): Promise<$_model.GetTotalStatisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTotalStatisWithOptions(request, runtime);
  }

  /**
   * Queries transcoding summaries of audio and video files based on the file ID. A transcoding summary includes the status and progress of transcoding.
   * 
   * @remarks
   *   An audio or video file may be transcoded multiple times. This operation returns only the latest transcoding summary.
   * *   You can query transcoding summaries for a maximum of 10 audio and video files in one request.
   * *   You can call the [ListTranscodeTask](https://help.aliyun.com/document_detail/109120.html) operation to query historical transcoding tasks.
   * *   **You can call this operation to query information only about transcoding tasks created within the past year.
   * 
   * @param request - GetTranscodeSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTranscodeSummaryResponse
   */
  async getTranscodeSummaryWithOptions(request: $_model.GetTranscodeSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTranscodeSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.videoIds)) {
      query["VideoIds"] = request.videoIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTranscodeSummary",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTranscodeSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetTranscodeSummaryResponse({}));
  }

  /**
   * Queries transcoding summaries of audio and video files based on the file ID. A transcoding summary includes the status and progress of transcoding.
   * 
   * @remarks
   *   An audio or video file may be transcoded multiple times. This operation returns only the latest transcoding summary.
   * *   You can query transcoding summaries for a maximum of 10 audio and video files in one request.
   * *   You can call the [ListTranscodeTask](https://help.aliyun.com/document_detail/109120.html) operation to query historical transcoding tasks.
   * *   **You can call this operation to query information only about transcoding tasks created within the past year.
   * 
   * @param request - GetTranscodeSummaryRequest
   * @returns GetTranscodeSummaryResponse
   */
  async getTranscodeSummary(request: $_model.GetTranscodeSummaryRequest): Promise<$_model.GetTranscodeSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTranscodeSummaryWithOptions(request, runtime);
  }

  /**
   * Queries details about transcoding jobs based on the transcoding task ID.
   * 
   * @remarks
   * You can call this operation to query only transcoding tasks created within the past year.
   * 
   * @param request - GetTranscodeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTranscodeTaskResponse
   */
  async getTranscodeTaskWithOptions(request: $_model.GetTranscodeTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTranscodeTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!$dara.isNull(request.transcodeTaskId)) {
      query["TranscodeTaskId"] = request.transcodeTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTranscodeTask",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTranscodeTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTranscodeTaskResponse({}));
  }

  /**
   * Queries details about transcoding jobs based on the transcoding task ID.
   * 
   * @remarks
   * You can call this operation to query only transcoding tasks created within the past year.
   * 
   * @param request - GetTranscodeTaskRequest
   * @returns GetTranscodeTaskResponse
   */
  async getTranscodeTask(request: $_model.GetTranscodeTaskRequest): Promise<$_model.GetTranscodeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTranscodeTaskWithOptions(request, runtime);
  }

  /**
   * Queries the details of a transcoding template group based on the template group ID.
   * 
   * @remarks
   * This operation returns information about the specified transcoding template group and the configurations of all the transcoding templates in the group.
   * 
   * @param request - GetTranscodeTemplateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTranscodeTemplateGroupResponse
   */
  async getTranscodeTemplateGroupWithOptions(request: $_model.GetTranscodeTemplateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTranscodeTemplateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.transcodeTemplateGroupId)) {
      query["TranscodeTemplateGroupId"] = request.transcodeTemplateGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTranscodeTemplateGroup",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTranscodeTemplateGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetTranscodeTemplateGroupResponse({}));
  }

  /**
   * Queries the details of a transcoding template group based on the template group ID.
   * 
   * @remarks
   * This operation returns information about the specified transcoding template group and the configurations of all the transcoding templates in the group.
   * 
   * @param request - GetTranscodeTemplateGroupRequest
   * @returns GetTranscodeTemplateGroupResponse
   */
  async getTranscodeTemplateGroup(request: $_model.GetTranscodeTemplateGroupRequest): Promise<$_model.GetTranscodeTemplateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTranscodeTemplateGroupWithOptions(request, runtime);
  }

  /**
   * Queries the information about URL-based upload jobs.
   * 
   * @remarks
   * You can query the information about a URL-based upload job by specifying the upload URL or using the job ID returned when you upload media files. The information includes the status of the upload job, custom configurations, the time when the job was created, and the time when the job was complete.
   * If the upload fails, you can view the error code and error message. If the upload is successful, you can obtain the video ID.
   * 
   * @param request - GetURLUploadInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetURLUploadInfosResponse
   */
  async getURLUploadInfosWithOptions(request: $_model.GetURLUploadInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetURLUploadInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!$dara.isNull(request.uploadURLs)) {
      query["UploadURLs"] = request.uploadURLs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetURLUploadInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetURLUploadInfosResponse>(await this.callApi(params, req, runtime), new $_model.GetURLUploadInfosResponse({}));
  }

  /**
   * Queries the information about URL-based upload jobs.
   * 
   * @remarks
   * You can query the information about a URL-based upload job by specifying the upload URL or using the job ID returned when you upload media files. The information includes the status of the upload job, custom configurations, the time when the job was created, and the time when the job was complete.
   * If the upload fails, you can view the error code and error message. If the upload is successful, you can obtain the video ID.
   * 
   * @param request - GetURLUploadInfosRequest
   * @returns GetURLUploadInfosResponse
   */
  async getURLUploadInfos(request: $_model.GetURLUploadInfosRequest): Promise<$_model.GetURLUploadInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getURLUploadInfosWithOptions(request, runtime);
  }

  /**
   * 查询未核销license订单信息
   * 
   * @param request - GetUnactivatedLicenseOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUnactivatedLicenseOrderResponse
   */
  async getUnactivatedLicenseOrderWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetUnactivatedLicenseOrderResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetUnactivatedLicenseOrder",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUnactivatedLicenseOrderResponse>(await this.callApi(params, req, runtime), new $_model.GetUnactivatedLicenseOrderResponse({}));
  }

  /**
   * 查询未核销license订单信息
   * @returns GetUnactivatedLicenseOrderResponse
   */
  async getUnactivatedLicenseOrder(): Promise<$_model.GetUnactivatedLicenseOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUnactivatedLicenseOrderWithOptions(runtime);
  }

  /**
   * Queries the upload details, such as the upload time, upload ratio, and upload source, about one or more media files based on the media IDs.
   * 
   * @remarks
   *   You can call this operation to obtain the upload details only about audio and video files.
   * *   If you use the ApsaraVideo VOD console to upload audio and video files, you can call this operation to query information such as the upload ratio. If you use an upload SDK to upload audio and video files, make sure that the version of the [upload SDK](https://help.aliyun.com/document_detail/52200.html) meets one of the following requirements:
   *     *   The version of the upload SDK for Java is 1.4.4 or later.
   *     *   The version of the upload SDK for C++ is 1.0.0 or later.
   *     *   The version of the upload SDK for PHP is 1.0.2 or later.
   *     *   The version of the upload SDK for Python is 1.3.0 or later.
   *     *   The version of the upload SDK for JavaScript is 1.4.0 or later.
   *     *   The version of the upload SDK for Android is 1.5.0 or later.
   *     *   The version of the upload SDK for iOS is 1.5.0 or later.
   * 
   * @param request - GetUploadDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadDetailsResponse
   */
  async getUploadDetailsWithOptions(request: $_model.GetUploadDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUploadDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUploadDetails",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUploadDetailsResponse>(await this.callApi(params, req, runtime), new $_model.GetUploadDetailsResponse({}));
  }

  /**
   * Queries the upload details, such as the upload time, upload ratio, and upload source, about one or more media files based on the media IDs.
   * 
   * @remarks
   *   You can call this operation to obtain the upload details only about audio and video files.
   * *   If you use the ApsaraVideo VOD console to upload audio and video files, you can call this operation to query information such as the upload ratio. If you use an upload SDK to upload audio and video files, make sure that the version of the [upload SDK](https://help.aliyun.com/document_detail/52200.html) meets one of the following requirements:
   *     *   The version of the upload SDK for Java is 1.4.4 or later.
   *     *   The version of the upload SDK for C++ is 1.0.0 or later.
   *     *   The version of the upload SDK for PHP is 1.0.2 or later.
   *     *   The version of the upload SDK for Python is 1.3.0 or later.
   *     *   The version of the upload SDK for JavaScript is 1.4.0 or later.
   *     *   The version of the upload SDK for Android is 1.5.0 or later.
   *     *   The version of the upload SDK for iOS is 1.5.0 or later.
   * 
   * @param request - GetUploadDetailsRequest
   * @returns GetUploadDetailsResponse
   */
  async getUploadDetails(request: $_model.GetUploadDetailsRequest): Promise<$_model.GetUploadDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUploadDetailsWithOptions(request, runtime);
  }

  /**
   * 获取上传进度
   * 
   * @param request - GetUploadProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadProgressResponse
   */
  async getUploadProgressWithOptions(request: $_model.GetUploadProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUploadProgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.authInfo)) {
      query["AuthInfo"] = request.authInfo;
    }

    if (!$dara.isNull(request.authTimestamp)) {
      query["AuthTimestamp"] = request.authTimestamp;
    }

    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.deviceModel)) {
      query["DeviceModel"] = request.deviceModel;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.terminalType)) {
      query["TerminalType"] = request.terminalType;
    }

    if (!$dara.isNull(request.uploadAddress)) {
      query["UploadAddress"] = request.uploadAddress;
    }

    if (!$dara.isNull(request.uploadInfoList)) {
      query["UploadInfoList"] = request.uploadInfoList;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUploadProgress",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUploadProgressResponse>(await this.callApi(params, req, runtime), new $_model.GetUploadProgressResponse({}));
  }

  /**
   * 获取上传进度
   * 
   * @param request - GetUploadProgressRequest
   * @returns GetUploadProgressResponse
   */
  async getUploadProgress(request: $_model.GetUploadProgressRequest): Promise<$_model.GetUploadProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUploadProgressWithOptions(request, runtime);
  }

  /**
   * 获取视频配置
   * 
   * @param request - GetVideoConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoConfigResponse
   */
  async getVideoConfigWithOptions(request: $_model.GetVideoConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authInfo)) {
      query["AuthInfo"] = request.authInfo;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoConfig",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoConfigResponse({}));
  }

  /**
   * 获取视频配置
   * 
   * @param request - GetVideoConfigRequest
   * @returns GetVideoConfigResponse
   */
  async getVideoConfig(request: $_model.GetVideoConfigRequest): Promise<$_model.GetVideoConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoConfigWithOptions(request, runtime);
  }

  /**
   * 获取视频DNA结果
   * 
   * @param request - GetVideoDNAResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoDNAResultResponse
   */
  async getVideoDNAResultWithOptions(request: $_model.GetVideoDNAResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoDNAResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoDNAResult",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoDNAResultResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoDNAResultResponse({}));
  }

  /**
   * 获取视频DNA结果
   * 
   * @param request - GetVideoDNAResultRequest
   * @returns GetVideoDNAResultResponse
   */
  async getVideoDNAResult(request: $_model.GetVideoDNAResultRequest): Promise<$_model.GetVideoDNAResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoDNAResultWithOptions(request, runtime);
  }

  /**
   * Obtains the title, description, duration, thumbnail URL, status, creation time, size, snapshots, category, and tags of a media file based on the file ID.
   * 
   * @remarks
   * After a media file is uploaded, ApsaraVideo VOD processes the source file. Then, information about the media file is asynchronously generated. You can configure notifications for the [VideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event and call this operation to query information about a media file after you receive notifications for the [VideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event. For more information, see [Overview](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @param request - GetVideoInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoInfoResponse
   */
  async getVideoInfoWithOptions(request: $_model.GetVideoInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoInfoResponse({}));
  }

  /**
   * Obtains the title, description, duration, thumbnail URL, status, creation time, size, snapshots, category, and tags of a media file based on the file ID.
   * 
   * @remarks
   * After a media file is uploaded, ApsaraVideo VOD processes the source file. Then, information about the media file is asynchronously generated. You can configure notifications for the [VideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event and call this operation to query information about a media file after you receive notifications for the [VideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event. For more information, see [Overview](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @param request - GetVideoInfoRequest
   * @returns GetVideoInfoResponse
   */
  async getVideoInfo(request: $_model.GetVideoInfoRequest): Promise<$_model.GetVideoInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoInfoWithOptions(request, runtime);
  }

  /**
   * Queries information such as the title, description, duration, thumbnail URL, status, creation time, size, snapshots, category, and tags about multiple audio or video files based on IDs.
   * 
   * @remarks
   *   You can specify up to 20 audio or video file IDs in each request.
   * *   After a media file is uploaded, ApsaraVideo VOD processes the source file. Then, information about the media file is asynchronously generated. You can configure notifications for the [VideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event and call this operation to query information about a media file after you receive notifications for the [VideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event. For more information, see [Overview](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @param request - GetVideoInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoInfosResponse
   */
  async getVideoInfosWithOptions(request: $_model.GetVideoInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.videoIds)) {
      query["VideoIds"] = request.videoIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoInfosResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoInfosResponse({}));
  }

  /**
   * Queries information such as the title, description, duration, thumbnail URL, status, creation time, size, snapshots, category, and tags about multiple audio or video files based on IDs.
   * 
   * @remarks
   *   You can specify up to 20 audio or video file IDs in each request.
   * *   After a media file is uploaded, ApsaraVideo VOD processes the source file. Then, information about the media file is asynchronously generated. You can configure notifications for the [VideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event and call this operation to query information about a media file after you receive notifications for the [VideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event. For more information, see [Overview](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @param request - GetVideoInfosRequest
   * @returns GetVideoInfosResponse
   */
  async getVideoInfos(request: $_model.GetVideoInfosRequest): Promise<$_model.GetVideoInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoInfosWithOptions(request, runtime);
  }

  /**
   * Queries information about media files.
   * 
   * @remarks
   * You can call this operation to query information about media files based on the filter conditions that you specify, such as video status and category ID. Information about a maximum of **5,000** media files can be returned for each request. We recommend that you set the StartTime and EndTime parameters to specify a time range for each request. For more information about how to query information about more media files or even all media files, see [SearchMedia](https://help.aliyun.com/document_detail/86044.html).
   * 
   * @param request - GetVideoListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoListResponse
   */
  async getVideoListWithOptions(request: $_model.GetVideoListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoList",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoListResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoListResponse({}));
  }

  /**
   * Queries information about media files.
   * 
   * @remarks
   * You can call this operation to query information about media files based on the filter conditions that you specify, such as video status and category ID. Information about a maximum of **5,000** media files can be returned for each request. We recommend that you set the StartTime and EndTime parameters to specify a time range for each request. For more information about how to query information about more media files or even all media files, see [SearchMedia](https://help.aliyun.com/document_detail/86044.html).
   * 
   * @param request - GetVideoListRequest
   * @returns GetVideoListResponse
   */
  async getVideoList(request: $_model.GetVideoListRequest): Promise<$_model.GetVideoListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoListWithOptions(request, runtime);
  }

  /**
   * Queries the credential required for media playback. ApsaraVideo Player SDK automatically obtains the playback URL based on the playback credential. Each playback credential can be used to obtain the playback URL only for a specific video in a specific period of time. You cannot obtain the playback URL if the credential expires or is incorrect. You can use PlayAuth-based playback when you require high security for audio and video playback.
   * 
   * @remarks
   *   You can call this operation to obtain a playback credential when you use ApsaraVideo Player SDK to play a media file based on PlayAuth. The credential is used to obtain the playback URL. For more information, see [ApsaraVideo Player SDK](https://help.aliyun.com/document_detail/125579.html).
   * *   You cannot obtain the playback URL of a video by using a credential that has expired. A new credential is required.
   * 
   * @param request - GetVideoPlayAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoPlayAuthResponse
   */
  async getVideoPlayAuthWithOptions(request: $_model.GetVideoPlayAuthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoPlayAuthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!$dara.isNull(request.authInfoTimeout)) {
      query["AuthInfoTimeout"] = request.authInfoTimeout;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoPlayAuth",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoPlayAuthResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoPlayAuthResponse({}));
  }

  /**
   * Queries the credential required for media playback. ApsaraVideo Player SDK automatically obtains the playback URL based on the playback credential. Each playback credential can be used to obtain the playback URL only for a specific video in a specific period of time. You cannot obtain the playback URL if the credential expires or is incorrect. You can use PlayAuth-based playback when you require high security for audio and video playback.
   * 
   * @remarks
   *   You can call this operation to obtain a playback credential when you use ApsaraVideo Player SDK to play a media file based on PlayAuth. The credential is used to obtain the playback URL. For more information, see [ApsaraVideo Player SDK](https://help.aliyun.com/document_detail/125579.html).
   * *   You cannot obtain the playback URL of a video by using a credential that has expired. A new credential is required.
   * 
   * @param request - GetVideoPlayAuthRequest
   * @returns GetVideoPlayAuthResponse
   */
  async getVideoPlayAuth(request: $_model.GetVideoPlayAuthRequest): Promise<$_model.GetVideoPlayAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoPlayAuthWithOptions(request, runtime);
  }

  /**
   * 获取视频播放信息
   * 
   * @param request - GetVideoPlayInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoPlayInfoResponse
   */
  async getVideoPlayInfoWithOptions(request: $_model.GetVideoPlayInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoPlayInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.clientTS)) {
      query["ClientTS"] = request.clientTS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playSign)) {
      query["PlaySign"] = request.playSign;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.signVersion)) {
      query["SignVersion"] = request.signVersion;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoPlayInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoPlayInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoPlayInfoResponse({}));
  }

  /**
   * 获取视频播放信息
   * 
   * @param request - GetVideoPlayInfoRequest
   * @returns GetVideoPlayInfoResponse
   */
  async getVideoPlayInfo(request: $_model.GetVideoPlayInfoRequest): Promise<$_model.GetVideoPlayInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoPlayInfoWithOptions(request, runtime);
  }

  /**
   * 获取点播服务区域
   * 
   * @param request - GetVodServiceRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVodServiceRegionResponse
   */
  async getVodServiceRegionWithOptions(request: $_model.GetVodServiceRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVodServiceRegionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVodServiceRegion",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVodServiceRegionResponse>(await this.callApi(params, req, runtime), new $_model.GetVodServiceRegionResponse({}));
  }

  /**
   * 获取点播服务区域
   * 
   * @param request - GetVodServiceRegionRequest
   * @returns GetVodServiceRegionResponse
   */
  async getVodServiceRegion(request: $_model.GetVodServiceRegionRequest): Promise<$_model.GetVodServiceRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVodServiceRegionWithOptions(request, runtime);
  }

  /**
   * Queries a single snapshot template.
   * 
   * @param request - GetVodTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVodTemplateResponse
   */
  async getVodTemplateWithOptions(request: $_model.GetVodTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVodTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.vodTemplateId)) {
      query["VodTemplateId"] = request.vodTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVodTemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVodTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetVodTemplateResponse({}));
  }

  /**
   * Queries a single snapshot template.
   * 
   * @param request - GetVodTemplateRequest
   * @returns GetVodTemplateResponse
   */
  async getVodTemplate(request: $_model.GetVodTemplateRequest): Promise<$_model.GetVodTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVodTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the information about an image or text watermark based on the watermark template ID. You can call this operation to obtain information such as the position, size, and display time of an image watermark or the content, position, font, and font color of a text watermark.
   * 
   * @param request - GetWatermarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWatermarkResponse
   */
  async getWatermarkWithOptions(request: $_model.GetWatermarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWatermarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.watermarkId)) {
      query["WatermarkId"] = request.watermarkId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWatermark",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWatermarkResponse>(await this.callApi(params, req, runtime), new $_model.GetWatermarkResponse({}));
  }

  /**
   * Queries the information about an image or text watermark based on the watermark template ID. You can call this operation to obtain information such as the position, size, and display time of an image watermark or the content, position, font, and font color of a text watermark.
   * 
   * @param request - GetWatermarkRequest
   * @returns GetWatermarkResponse
   */
  async getWatermark(request: $_model.GetWatermarkRequest): Promise<$_model.GetWatermarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWatermarkWithOptions(request, runtime);
  }

  /**
   * 获取水印
   * 
   * @param request - GetWatermarkConsoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWatermarkConsoleResponse
   */
  async getWatermarkConsoleWithOptions(request: $_model.GetWatermarkConsoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWatermarkConsoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.watermarkId)) {
      query["WatermarkId"] = request.watermarkId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWatermarkConsole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWatermarkConsoleResponse>(await this.callApi(params, req, runtime), new $_model.GetWatermarkConsoleResponse({}));
  }

  /**
   * 获取水印
   * 
   * @param request - GetWatermarkConsoleRequest
   * @returns GetWatermarkConsoleResponse
   */
  async getWatermarkConsole(request: $_model.GetWatermarkConsoleRequest): Promise<$_model.GetWatermarkConsoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWatermarkConsoleWithOptions(request, runtime);
  }

  /**
   * 获取水印
   * 
   * @param request - GetWatermarksConsoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWatermarksConsoleResponse
   */
  async getWatermarksConsoleWithOptions(request: $_model.GetWatermarksConsoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWatermarksConsoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWatermarksConsole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWatermarksConsoleResponse>(await this.callApi(params, req, runtime), new $_model.GetWatermarksConsoleResponse({}));
  }

  /**
   * 获取水印
   * 
   * @param request - GetWatermarksConsoleRequest
   * @returns GetWatermarksConsoleResponse
   */
  async getWatermarksConsole(request: $_model.GetWatermarksConsoleRequest): Promise<$_model.GetWatermarksConsoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWatermarksConsoleWithOptions(request, runtime);
  }

  /**
   * 获取工作流信息
   * 
   * @param request - GetWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkflowResponse
   */
  async getWorkflowWithOptions(request: $_model.GetWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkflow",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkflowResponse({}));
  }

  /**
   * 获取工作流信息
   * 
   * @param request - GetWorkflowRequest
   * @returns GetWorkflowResponse
   */
  async getWorkflow(request: $_model.GetWorkflowRequest): Promise<$_model.GetWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkflowWithOptions(request, runtime);
  }

  /**
   * 测试HTTP请求
   * 
   * @param tmpReq - HttpRequestVodTestToolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HttpRequestVodTestToolResponse
   */
  async httpRequestVodTestToolWithOptions(tmpReq: $_model.HttpRequestVodTestToolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.HttpRequestVodTestToolResponse> {
    tmpReq.validate();
    let request = new $_model.HttpRequestVodTestToolShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.header)) {
      request.headerShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.header, "Header", "json");
    }

    let query = { };
    if (!$dara.isNull(request.args)) {
      query["Args"] = request.args;
    }

    if (!$dara.isNull(request.body)) {
      query["Body"] = request.body;
    }

    if (!$dara.isNull(request.headerShrink)) {
      query["Header"] = request.headerShrink;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.method)) {
      query["Method"] = request.method;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.proxyIp)) {
      query["ProxyIp"] = request.proxyIp;
    }

    if (!$dara.isNull(request.scheme)) {
      query["Scheme"] = request.scheme;
    }

    if (!$dara.isNull(request.uri)) {
      query["Uri"] = request.uri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HttpRequestVodTestTool",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HttpRequestVodTestToolResponse>(await this.callApi(params, req, runtime), new $_model.HttpRequestVodTestToolResponse({}));
  }

  /**
   * 测试HTTP请求
   * 
   * @param request - HttpRequestVodTestToolRequest
   * @returns HttpRequestVodTestToolResponse
   */
  async httpRequestVodTestTool(request: $_model.HttpRequestVodTestToolRequest): Promise<$_model.HttpRequestVodTestToolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.httpRequestVodTestToolWithOptions(request, runtime);
  }

  /**
   * 初始化转码配置
   * 
   * @param request - InitialTranscodeConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitialTranscodeConfigResponse
   */
  async initialTranscodeConfigWithOptions(request: $_model.InitialTranscodeConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitialTranscodeConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitialTranscodeConfig",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitialTranscodeConfigResponse>(await this.callApi(params, req, runtime), new $_model.InitialTranscodeConfigResponse({}));
  }

  /**
   * 初始化转码配置
   * 
   * @param request - InitialTranscodeConfigRequest
   * @returns InitialTranscodeConfigResponse
   */
  async initialTranscodeConfig(request: $_model.InitialTranscodeConfigRequest): Promise<$_model.InitialTranscodeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initialTranscodeConfigWithOptions(request, runtime);
  }

  /**
   * 列举AIASR任务
   * 
   * @param request - ListAIASRJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIASRJobResponse
   */
  async listAIASRJobWithOptions(request: $_model.ListAIASRJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIASRJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIASRJobIds)) {
      query["AIASRJobIds"] = request.AIASRJobIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIASRJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIASRJobResponse>(await this.callApi(params, req, runtime), new $_model.ListAIASRJobResponse({}));
  }

  /**
   * 列举AIASR任务
   * 
   * @param request - ListAIASRJobRequest
   * @returns ListAIASRJobResponse
   */
  async listAIASRJob(request: $_model.ListAIASRJobRequest): Promise<$_model.ListAIASRJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIASRJobWithOptions(request, runtime);
  }

  /**
   * Queries the AI processing results about the images of a specified video.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)** and **China (Shanghai)**.
   * *   You can call this operation to query AI processing results about images of a specified video. Images of different videos cannot be queried in one request.
   * 
   * @param request - ListAIImageInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIImageInfoResponse
   */
  async listAIImageInfoWithOptions(request: $_model.ListAIImageInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIImageInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIImageInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIImageInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListAIImageInfoResponse({}));
  }

  /**
   * Queries the AI processing results about the images of a specified video.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)** and **China (Shanghai)**.
   * *   You can call this operation to query AI processing results about images of a specified video. Images of different videos cannot be queried in one request.
   * 
   * @param request - ListAIImageInfoRequest
   * @returns ListAIImageInfoResponse
   */
  async listAIImageInfo(request: $_model.ListAIImageInfoRequest): Promise<$_model.ListAIImageInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIImageInfoWithOptions(request, runtime);
  }

  /**
   * Queries AI jobs. After a job is submitted, ApsaraVideo VOD asynchronously processes the job. You can call this operation to query the job information in real time.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * *   You can call this operation to query video fingerprinting jobs and smart tagging jobs.
   * 
   * @param request - ListAIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIJobResponse
   */
  async listAIJobWithOptions(request: $_model.ListAIJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIJobResponse>(await this.callApi(params, req, runtime), new $_model.ListAIJobResponse({}));
  }

  /**
   * Queries AI jobs. After a job is submitted, ApsaraVideo VOD asynchronously processes the job. You can call this operation to query the job information in real time.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * *   You can call this operation to query video fingerprinting jobs and smart tagging jobs.
   * 
   * @param request - ListAIJobRequest
   * @returns ListAIJobResponse
   */
  async listAIJob(request: $_model.ListAIJobRequest): Promise<$_model.ListAIJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIJobWithOptions(request, runtime);
  }

  /**
   * 列举AI统计类型
   * 
   * @param request - ListAIStatisTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIStatisTypeResponse
   */
  async listAIStatisTypeWithOptions(request: $_model.ListAIStatisTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIStatisTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIStatisType",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIStatisTypeResponse>(await this.callApi(params, req, runtime), new $_model.ListAIStatisTypeResponse({}));
  }

  /**
   * 列举AI统计类型
   * 
   * @param request - ListAIStatisTypeRequest
   * @returns ListAIStatisTypeResponse
   */
  async listAIStatisType(request: $_model.ListAIStatisTypeRequest): Promise<$_model.ListAIStatisTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIStatisTypeWithOptions(request, runtime);
  }

  /**
   * Queries AI templates.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * *   You can call this operation to query AI templates of a specified type.
   * 
   * @param request - ListAITemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAITemplateResponse
   */
  async listAITemplateWithOptions(request: $_model.ListAITemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAITemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAITemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAITemplateResponse>(await this.callApi(params, req, runtime), new $_model.ListAITemplateResponse({}));
  }

  /**
   * Queries AI templates.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * *   You can call this operation to query AI templates of a specified type.
   * 
   * @param request - ListAITemplateRequest
   * @returns ListAITemplateResponse
   */
  async listAITemplate(request: $_model.ListAITemplateRequest): Promise<$_model.ListAITemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAITemplateWithOptions(request, runtime);
  }

  /**
   * 列举AI智能分类任务
   * 
   * @param request - ListAIVideoCategoryJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIVideoCategoryJobResponse
   */
  async listAIVideoCategoryJobWithOptions(request: $_model.ListAIVideoCategoryJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIVideoCategoryJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIVideoCategoryJobIds)) {
      query["AIVideoCategoryJobIds"] = request.AIVideoCategoryJobIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIVideoCategoryJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIVideoCategoryJobResponse>(await this.callApi(params, req, runtime), new $_model.ListAIVideoCategoryJobResponse({}));
  }

  /**
   * 列举AI智能分类任务
   * 
   * @param request - ListAIVideoCategoryJobRequest
   * @returns ListAIVideoCategoryJobResponse
   */
  async listAIVideoCategoryJob(request: $_model.ListAIVideoCategoryJobRequest): Promise<$_model.ListAIVideoCategoryJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIVideoCategoryJobWithOptions(request, runtime);
  }

  /**
   * 列举视频审核任务
   * 
   * @param request - ListAIVideoCensorJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIVideoCensorJobResponse
   */
  async listAIVideoCensorJobWithOptions(request: $_model.ListAIVideoCensorJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIVideoCensorJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIVideoCensorJobIds)) {
      query["AIVideoCensorJobIds"] = request.AIVideoCensorJobIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIVideoCensorJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIVideoCensorJobResponse>(await this.callApi(params, req, runtime), new $_model.ListAIVideoCensorJobResponse({}));
  }

  /**
   * 列举视频审核任务
   * 
   * @param request - ListAIVideoCensorJobRequest
   * @returns ListAIVideoCensorJobResponse
   */
  async listAIVideoCensorJob(request: $_model.ListAIVideoCensorJobRequest): Promise<$_model.ListAIVideoCensorJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIVideoCensorJobWithOptions(request, runtime);
  }

  /**
   * 列举AI封面任务
   * 
   * @param request - ListAIVideoCoverJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIVideoCoverJobResponse
   */
  async listAIVideoCoverJobWithOptions(request: $_model.ListAIVideoCoverJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIVideoCoverJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIVideoCoverJobIds)) {
      query["AIVideoCoverJobIds"] = request.AIVideoCoverJobIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIVideoCoverJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIVideoCoverJobResponse>(await this.callApi(params, req, runtime), new $_model.ListAIVideoCoverJobResponse({}));
  }

  /**
   * 列举AI封面任务
   * 
   * @param request - ListAIVideoCoverJobRequest
   * @returns ListAIVideoCoverJobResponse
   */
  async listAIVideoCoverJob(request: $_model.ListAIVideoCoverJobRequest): Promise<$_model.ListAIVideoCoverJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIVideoCoverJobWithOptions(request, runtime);
  }

  /**
   * 列举AI人脸识别任务
   * 
   * @param request - ListAIVideoFaceRecogJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIVideoFaceRecogJobResponse
   */
  async listAIVideoFaceRecogJobWithOptions(request: $_model.ListAIVideoFaceRecogJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIVideoFaceRecogJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIVideoFaceRecogJobIds)) {
      query["AIVideoFaceRecogJobIds"] = request.AIVideoFaceRecogJobIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIVideoFaceRecogJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIVideoFaceRecogJobResponse>(await this.callApi(params, req, runtime), new $_model.ListAIVideoFaceRecogJobResponse({}));
  }

  /**
   * 列举AI人脸识别任务
   * 
   * @param request - ListAIVideoFaceRecogJobRequest
   * @returns ListAIVideoFaceRecogJobResponse
   */
  async listAIVideoFaceRecogJob(request: $_model.ListAIVideoFaceRecogJobRequest): Promise<$_model.ListAIVideoFaceRecogJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIVideoFaceRecogJobWithOptions(request, runtime);
  }

  /**
   * 列举AI审核任务
   * 
   * @param request - ListAIVideoPornRecogJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIVideoPornRecogJobResponse
   */
  async listAIVideoPornRecogJobWithOptions(request: $_model.ListAIVideoPornRecogJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIVideoPornRecogJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIVideoPornRecogJobIds)) {
      query["AIVideoPornRecogJobIds"] = request.AIVideoPornRecogJobIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIVideoPornRecogJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIVideoPornRecogJobResponse>(await this.callApi(params, req, runtime), new $_model.ListAIVideoPornRecogJobResponse({}));
  }

  /**
   * 列举AI审核任务
   * 
   * @param request - ListAIVideoPornRecogJobRequest
   * @returns ListAIVideoPornRecogJobResponse
   */
  async listAIVideoPornRecogJob(request: $_model.ListAIVideoPornRecogJobRequest): Promise<$_model.ListAIVideoPornRecogJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIVideoPornRecogJobWithOptions(request, runtime);
  }

  /**
   * 列举AI智能摘要任务
   * 
   * @param request - ListAIVideoSummaryJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIVideoSummaryJobResponse
   */
  async listAIVideoSummaryJobWithOptions(request: $_model.ListAIVideoSummaryJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIVideoSummaryJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIVideoSummaryJobIds)) {
      query["AIVideoSummaryJobIds"] = request.AIVideoSummaryJobIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIVideoSummaryJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIVideoSummaryJobResponse>(await this.callApi(params, req, runtime), new $_model.ListAIVideoSummaryJobResponse({}));
  }

  /**
   * 列举AI智能摘要任务
   * 
   * @param request - ListAIVideoSummaryJobRequest
   * @returns ListAIVideoSummaryJobResponse
   */
  async listAIVideoSummaryJob(request: $_model.ListAIVideoSummaryJobRequest): Promise<$_model.ListAIVideoSummaryJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIVideoSummaryJobWithOptions(request, runtime);
  }

  /**
   * 列举AI智能标签任务
   * 
   * @param request - ListAIVideoTagJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIVideoTagJobResponse
   */
  async listAIVideoTagJobWithOptions(request: $_model.ListAIVideoTagJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIVideoTagJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIVideoTagJobIds)) {
      query["AIVideoTagJobIds"] = request.AIVideoTagJobIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIVideoTagJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIVideoTagJobResponse>(await this.callApi(params, req, runtime), new $_model.ListAIVideoTagJobResponse({}));
  }

  /**
   * 列举AI智能标签任务
   * 
   * @param request - ListAIVideoTagJobRequest
   * @returns ListAIVideoTagJobResponse
   */
  async listAIVideoTagJob(request: $_model.ListAIVideoTagJobRequest): Promise<$_model.ListAIVideoTagJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIVideoTagJobWithOptions(request, runtime);
  }

  /**
   * 列举AI暴力审核任务
   * 
   * @param request - ListAIVideoTerrorismRecogJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIVideoTerrorismRecogJobResponse
   */
  async listAIVideoTerrorismRecogJobWithOptions(request: $_model.ListAIVideoTerrorismRecogJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIVideoTerrorismRecogJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIVideoTerrorismRecogJobIds)) {
      query["AIVideoTerrorismRecogJobIds"] = request.AIVideoTerrorismRecogJobIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIVideoTerrorismRecogJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIVideoTerrorismRecogJobResponse>(await this.callApi(params, req, runtime), new $_model.ListAIVideoTerrorismRecogJobResponse({}));
  }

  /**
   * 列举AI暴力审核任务
   * 
   * @param request - ListAIVideoTerrorismRecogJobRequest
   * @returns ListAIVideoTerrorismRecogJobResponse
   */
  async listAIVideoTerrorismRecogJob(request: $_model.ListAIVideoTerrorismRecogJobRequest): Promise<$_model.ListAIVideoTerrorismRecogJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIVideoTerrorismRecogJobWithOptions(request, runtime);
  }

  /**
   * Queries the applications that you are authorized to manage based on query conditions.
   * 
   * @remarks
   * ### [](#)Usage notes
   * You can query applications based on states.
   * ### [](#qps-)QPS limit
   * You can call this operation up to 30 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits on API operations](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - ListAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppInfoResponse
   */
  async listAppInfoWithOptions(request: $_model.ListAppInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListAppInfoResponse({}));
  }

  /**
   * Queries the applications that you are authorized to manage based on query conditions.
   * 
   * @remarks
   * ### [](#)Usage notes
   * You can query applications based on states.
   * ### [](#qps-)QPS limit
   * You can call this operation up to 30 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits on API operations](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - ListAppInfoRequest
   * @returns ListAppInfoResponse
   */
  async listAppInfo(request: $_model.ListAppInfoRequest): Promise<$_model.ListAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppInfoWithOptions(request, runtime);
  }

  /**
   * Queries the application policies that are attached to the specified identity. The identity may be a RAM user or RAM role.
   * 
   * @remarks
   * > The IdentityType and IdentityName parameters take effect only when an identity assumes the application administrator role to call this operation. Otherwise, only application policies that are attached to the current identity are returned.
   * 
   * @param request - ListAppPoliciesForIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppPoliciesForIdentityResponse
   */
  async listAppPoliciesForIdentityWithOptions(request: $_model.ListAppPoliciesForIdentityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppPoliciesForIdentityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.identityName)) {
      query["IdentityName"] = request.identityName;
    }

    if (!$dara.isNull(request.identityType)) {
      query["IdentityType"] = request.identityType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppPoliciesForIdentity",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppPoliciesForIdentityResponse>(await this.callApi(params, req, runtime), new $_model.ListAppPoliciesForIdentityResponse({}));
  }

  /**
   * Queries the application policies that are attached to the specified identity. The identity may be a RAM user or RAM role.
   * 
   * @remarks
   * > The IdentityType and IdentityName parameters take effect only when an identity assumes the application administrator role to call this operation. Otherwise, only application policies that are attached to the current identity are returned.
   * 
   * @param request - ListAppPoliciesForIdentityRequest
   * @returns ListAppPoliciesForIdentityResponse
   */
  async listAppPoliciesForIdentity(request: $_model.ListAppPoliciesForIdentityRequest): Promise<$_model.ListAppPoliciesForIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppPoliciesForIdentityWithOptions(request, runtime);
  }

  /**
   * 列举应用策略
   * 
   * @param request - ListAppPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppPolicyResponse
   */
  async listAppPolicyWithOptions(request: $_model.ListAppPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppPolicy",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ListAppPolicyResponse({}));
  }

  /**
   * 列举应用策略
   * 
   * @param request - ListAppPolicyRequest
   * @returns ListAppPolicyResponse
   */
  async listAppPolicy(request: $_model.ListAppPolicyRequest): Promise<$_model.ListAppPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the IP addresses in a review security group.
   * 
   * @param request - ListAuditSecurityIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuditSecurityIpResponse
   */
  async listAuditSecurityIpWithOptions(request: $_model.ListAuditSecurityIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuditSecurityIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityGroupName)) {
      query["SecurityGroupName"] = request.securityGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAuditSecurityIp",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuditSecurityIpResponse>(await this.callApi(params, req, runtime), new $_model.ListAuditSecurityIpResponse({}));
  }

  /**
   * Queries the IP addresses in a review security group.
   * 
   * @param request - ListAuditSecurityIpRequest
   * @returns ListAuditSecurityIpResponse
   */
  async listAuditSecurityIp(request: $_model.ListAuditSecurityIpRequest): Promise<$_model.ListAuditSecurityIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuditSecurityIpWithOptions(request, runtime);
  }

  /**
   * 查询系统存储冗余类型转换任务
   * 
   * @param request - ListBucketRedundancyTransitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBucketRedundancyTransitionResponse
   */
  async listBucketRedundancyTransitionWithOptions(request: $_model.ListBucketRedundancyTransitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBucketRedundancyTransitionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBucketRedundancyTransition",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBucketRedundancyTransitionResponse>(await this.callApi(params, req, runtime), new $_model.ListBucketRedundancyTransitionResponse({}));
  }

  /**
   * 查询系统存储冗余类型转换任务
   * 
   * @param request - ListBucketRedundancyTransitionRequest
   * @returns ListBucketRedundancyTransitionResponse
   */
  async listBucketRedundancyTransition(request: $_model.ListBucketRedundancyTransitionRequest): Promise<$_model.ListBucketRedundancyTransitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBucketRedundancyTransitionWithOptions(request, runtime);
  }

  /**
   * 列举DNADB
   * 
   * @param request - ListDNADBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDNADBResponse
   */
  async listDNADBWithOptions(request: $_model.ListDNADBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDNADBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDNADB",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDNADBResponse>(await this.callApi(params, req, runtime), new $_model.ListDNADBResponse({}));
  }

  /**
   * 列举DNADB
   * 
   * @param request - ListDNADBRequest
   * @returns ListDNADBResponse
   */
  async listDNADB(request: $_model.ListDNADBRequest): Promise<$_model.ListDNADBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDNADBWithOptions(request, runtime);
  }

  /**
   * 列举DRM证书信息
   * 
   * @param request - ListDRMCertInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDRMCertInfoResponse
   */
  async listDRMCertInfoWithOptions(request: $_model.ListDRMCertInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDRMCertInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDRMCertInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDRMCertInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListDRMCertInfoResponse({}));
  }

  /**
   * 列举DRM证书信息
   * 
   * @param request - ListDRMCertInfoRequest
   * @returns ListDRMCertInfoResponse
   */
  async listDRMCertInfo(request: $_model.ListDRMCertInfoRequest): Promise<$_model.ListDRMCertInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDRMCertInfoWithOptions(request, runtime);
  }

  /**
   * Queries the information about animated stickers of a video based on the video ID.
   * 
   * @param request - ListDynamicImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDynamicImageResponse
   */
  async listDynamicImageWithOptions(request: $_model.ListDynamicImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDynamicImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDynamicImage",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDynamicImageResponse>(await this.callApi(params, req, runtime), new $_model.ListDynamicImageResponse({}));
  }

  /**
   * Queries the information about animated stickers of a video based on the video ID.
   * 
   * @param request - ListDynamicImageRequest
   * @returns ListDynamicImageResponse
   */
  async listDynamicImage(request: $_model.ListDynamicImageRequest): Promise<$_model.ListDynamicImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDynamicImageWithOptions(request, runtime);
  }

  /**
   * 获取智能策略信息列表
   * 
   * @param request - ListIntelligentStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntelligentStrategyResponse
   */
  async listIntelligentStrategyWithOptions(request: $_model.ListIntelligentStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntelligentStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.strategyIds)) {
      query["StrategyIds"] = request.strategyIds;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntelligentStrategy",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntelligentStrategyResponse>(await this.callApi(params, req, runtime), new $_model.ListIntelligentStrategyResponse({}));
  }

  /**
   * 获取智能策略信息列表
   * 
   * @param request - ListIntelligentStrategyRequest
   * @returns ListIntelligentStrategyResponse
   */
  async listIntelligentStrategy(request: $_model.ListIntelligentStrategyRequest): Promise<$_model.ListIntelligentStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIntelligentStrategyWithOptions(request, runtime);
  }

  /**
   * Queries historical tasks based on the media asset ID.
   * 
   * @remarks
   * ***
   * *   You can call the [GetJobDetail](https://apiworkbench.aliyun-inc.com/document/vod/2017-03-21/GetJobDetail?spm=openapi-amp.newDocPublishment.0.0.616a281fSegn0e) operation to query detailed information about the tasks.
   * *   You can call this operation to query only asynchronous tasks of the last six months. The types of tasks that you can query include transcoding tasks, snapshot tasks, and AI tasks.
   * **QPS limits**
   * You can call this operation up to 15 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - ListJobInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobInfoResponse
   */
  async listJobInfoWithOptions(request: $_model.ListJobInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListJobInfoResponse({}));
  }

  /**
   * Queries historical tasks based on the media asset ID.
   * 
   * @remarks
   * ***
   * *   You can call the [GetJobDetail](https://apiworkbench.aliyun-inc.com/document/vod/2017-03-21/GetJobDetail?spm=openapi-amp.newDocPublishment.0.0.616a281fSegn0e) operation to query detailed information about the tasks.
   * *   You can call this operation to query only asynchronous tasks of the last six months. The types of tasks that you can query include transcoding tasks, snapshot tasks, and AI tasks.
   * **QPS limits**
   * You can call this operation up to 15 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - ListJobInfoRequest
   * @returns ListJobInfoResponse
   */
  async listJobInfo(request: $_model.ListJobInfoRequest): Promise<$_model.ListJobInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobInfoWithOptions(request, runtime);
  }

  /**
   * 列举证书信息
   * 
   * @param request - ListLicenseInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLicenseInfosResponse
   */
  async listLicenseInfosWithOptions(request: $_model.ListLicenseInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLicenseInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.contractNo)) {
      query["ContractNo"] = request.contractNo;
    }

    if (!$dara.isNull(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.endBeginTime)) {
      query["EndBeginTime"] = request.endBeginTime;
    }

    if (!$dara.isNull(request.endExpiredOn)) {
      query["EndExpiredOn"] = request.endExpiredOn;
    }

    if (!$dara.isNull(request.extraInfo)) {
      query["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.licenseId)) {
      query["LicenseId"] = request.licenseId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startBeginTime)) {
      query["StartBeginTime"] = request.startBeginTime;
    }

    if (!$dara.isNull(request.startExpiredOn)) {
      query["StartExpiredOn"] = request.startExpiredOn;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLicenseInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLicenseInfosResponse>(await this.callApi(params, req, runtime), new $_model.ListLicenseInfosResponse({}));
  }

  /**
   * 列举证书信息
   * 
   * @param request - ListLicenseInfosRequest
   * @returns ListLicenseInfosResponse
   */
  async listLicenseInfos(request: $_model.ListLicenseInfosRequest): Promise<$_model.ListLicenseInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLicenseInfosWithOptions(request, runtime);
  }

  /**
   * 列举证书
   * 
   * @param request - ListLicensesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLicensesResponse
   */
  async listLicensesWithOptions(request: $_model.ListLicensesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLicensesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.businessType)) {
      body["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.needTotalCount)) {
      body["NeedTotalCount"] = request.needTotalCount;
    }

    if (!$dara.isNull(request.offset)) {
      body["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.orders)) {
      body["Orders"] = request.orders;
    }

    if (!$dara.isNull(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pkgName)) {
      body["PkgName"] = request.pkgName;
    }

    if (!$dara.isNull(request.platformType)) {
      body["PlatformType"] = request.platformType;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLicenses",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLicensesResponse>(await this.callApi(params, req, runtime), new $_model.ListLicensesResponse({}));
  }

  /**
   * 列举证书
   * 
   * @param request - ListLicensesRequest
   * @returns ListLicensesResponse
   */
  async listLicenses(request: $_model.ListLicensesRequest): Promise<$_model.ListLicensesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLicensesWithOptions(request, runtime);
  }

  /**
   * Queries live-to-VOD videos.
   * 
   * @remarks
   * You can query up to 5,000 videos based on the specified filter condition.
   * 
   * @param request - ListLiveRecordVideoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLiveRecordVideoResponse
   */
  async listLiveRecordVideoWithOptions(request: $_model.ListLiveRecordVideoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLiveRecordVideoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLiveRecordVideo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLiveRecordVideoResponse>(await this.callApi(params, req, runtime), new $_model.ListLiveRecordVideoResponse({}));
  }

  /**
   * Queries live-to-VOD videos.
   * 
   * @remarks
   * You can query up to 5,000 videos based on the specified filter condition.
   * 
   * @param request - ListLiveRecordVideoRequest
   * @returns ListLiveRecordVideoResponse
   */
  async listLiveRecordVideo(request: $_model.ListLiveRecordVideoRequest): Promise<$_model.ListLiveRecordVideoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLiveRecordVideoWithOptions(request, runtime);
  }

  /**
   * 列举媒资DNA删除任务
   * 
   * @param request - ListMediaDNADeleteJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMediaDNADeleteJobResponse
   */
  async listMediaDNADeleteJobWithOptions(request: $_model.ListMediaDNADeleteJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMediaDNADeleteJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMediaDNADeleteJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMediaDNADeleteJobResponse>(await this.callApi(params, req, runtime), new $_model.ListMediaDNADeleteJobResponse({}));
  }

  /**
   * 列举媒资DNA删除任务
   * 
   * @param request - ListMediaDNADeleteJobRequest
   * @returns ListMediaDNADeleteJobResponse
   */
  async listMediaDNADeleteJob(request: $_model.ListMediaDNADeleteJobRequest): Promise<$_model.ListMediaDNADeleteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMediaDNADeleteJobWithOptions(request, runtime);
  }

  /**
   * 列举媒资DNALibs
   * 
   * @param request - ListMediaDNALibsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMediaDNALibsResponse
   */
  async listMediaDNALibsWithOptions(request: $_model.ListMediaDNALibsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMediaDNALibsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.libRegion)) {
      query["LibRegion"] = request.libRegion;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMediaDNALibs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMediaDNALibsResponse>(await this.callApi(params, req, runtime), new $_model.ListMediaDNALibsResponse({}));
  }

  /**
   * 列举媒资DNALibs
   * 
   * @param request - ListMediaDNALibsRequest
   * @returns ListMediaDNALibsResponse
   */
  async listMediaDNALibs(request: $_model.ListMediaDNALibsRequest): Promise<$_model.ListMediaDNALibsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMediaDNALibsWithOptions(request, runtime);
  }

  /**
   * 列举媒资导出任务
   * 
   * @param request - ListMediaExportJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMediaExportJobsResponse
   */
  async listMediaExportJobsWithOptions(request: $_model.ListMediaExportJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMediaExportJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMediaExportJobs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMediaExportJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListMediaExportJobsResponse({}));
  }

  /**
   * 列举媒资导出任务
   * 
   * @param request - ListMediaExportJobsRequest
   * @returns ListMediaExportJobsResponse
   */
  async listMediaExportJobs(request: $_model.ListMediaExportJobsRequest): Promise<$_model.ListMediaExportJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMediaExportJobsWithOptions(request, runtime);
  }

  /**
   * 列举媒资生命周期规则
   * 
   * @param request - ListMediaLifecycleRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMediaLifecycleRuleResponse
   */
  async listMediaLifecycleRuleWithOptions(request: $_model.ListMediaLifecycleRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMediaLifecycleRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMediaLifecycleRule",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMediaLifecycleRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListMediaLifecycleRuleResponse({}));
  }

  /**
   * 列举媒资生命周期规则
   * 
   * @param request - ListMediaLifecycleRuleRequest
   * @returns ListMediaLifecycleRuleResponse
   */
  async listMediaLifecycleRule(request: $_model.ListMediaLifecycleRuleRequest): Promise<$_model.ListMediaLifecycleRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMediaLifecycleRuleWithOptions(request, runtime);
  }

  /**
   * Queries the snapshots that are captured by submitting snapshot jobs or snapshots that are generated by the system when you upload the video.
   * 
   * @remarks
   * If multiple snapshots exist for a video, you can call this operation to query information about the latest snapshot.
   * 
   * @param request - ListSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSnapshotsResponse
   */
  async listSnapshotsWithOptions(request: $_model.ListSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSnapshotsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.snapshotType)) {
      query["SnapshotType"] = request.snapshotType;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSnapshots",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSnapshotsResponse>(await this.callApi(params, req, runtime), new $_model.ListSnapshotsResponse({}));
  }

  /**
   * Queries the snapshots that are captured by submitting snapshot jobs or snapshots that are generated by the system when you upload the video.
   * 
   * @remarks
   * If multiple snapshots exist for a video, you can call this operation to query information about the latest snapshot.
   * 
   * @param request - ListSnapshotsRequest
   * @returns ListSnapshotsResponse
   */
  async listSnapshots(request: $_model.ListSnapshotsRequest): Promise<$_model.ListSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSnapshotsWithOptions(request, runtime);
  }

  /**
   * 获取智能策略执行记录列表
   * 
   * @param request - ListStrategyExecutionRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStrategyExecutionRecordResponse
   */
  async listStrategyExecutionRecordWithOptions(request: $_model.ListStrategyExecutionRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStrategyExecutionRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
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

    if (!$dara.isNull(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    if (!$dara.isNull(request.strategyType)) {
      query["StrategyType"] = request.strategyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStrategyExecutionRecord",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStrategyExecutionRecordResponse>(await this.callApi(params, req, runtime), new $_model.ListStrategyExecutionRecordResponse({}));
  }

  /**
   * 获取智能策略执行记录列表
   * 
   * @param request - ListStrategyExecutionRecordRequest
   * @returns ListStrategyExecutionRecordResponse
   */
  async listStrategyExecutionRecord(request: $_model.ListStrategyExecutionRecordRequest): Promise<$_model.ListStrategyExecutionRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStrategyExecutionRecordWithOptions(request, runtime);
  }

  /**
   * 查询资源标签
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

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
      action: "ListTagResources",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * 查询资源标签
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 列举模版组
   * 
   * @param request - ListTemplateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplateGroupResponse
   */
  async listTemplateGroupWithOptions(request: $_model.ListTemplateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isContainsTemplates)) {
      query["IsContainsTemplates"] = request.isContainsTemplates;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTemplateGroup",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplateGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplateGroupResponse({}));
  }

  /**
   * 列举模版组
   * 
   * @param request - ListTemplateGroupRequest
   * @returns ListTemplateGroupResponse
   */
  async listTemplateGroup(request: $_model.ListTemplateGroupRequest): Promise<$_model.ListTemplateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTemplateGroupWithOptions(request, runtime);
  }

  /**
   * 列举模版组
   * 
   * @param request - ListTemplateGroupConsoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplateGroupConsoleResponse
   */
  async listTemplateGroupConsoleWithOptions(request: $_model.ListTemplateGroupConsoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplateGroupConsoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isContainsTemplates)) {
      query["IsContainsTemplates"] = request.isContainsTemplates;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTemplateGroupConsole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplateGroupConsoleResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplateGroupConsoleResponse({}));
  }

  /**
   * 列举模版组
   * 
   * @param request - ListTemplateGroupConsoleRequest
   * @returns ListTemplateGroupConsoleResponse
   */
  async listTemplateGroupConsole(request: $_model.ListTemplateGroupConsoleRequest): Promise<$_model.ListTemplateGroupConsoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTemplateGroupConsoleWithOptions(request, runtime);
  }

  /**
   * Queries transcoding tasks based on the media ID. This operation does not return specific job information.
   * 
   * @remarks
   *   You can call the [GetTranscodeTask](https://help.aliyun.com/document_detail/109121.html) operation to query details about transcoding jobs.
   * *   **You can call this operation to query only transcoding tasks created within the past year.**
   * 
   * @param request - ListTranscodeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTranscodeTaskResponse
   */
  async listTranscodeTaskWithOptions(request: $_model.ListTranscodeTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTranscodeTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTranscodeTask",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTranscodeTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListTranscodeTaskResponse({}));
  }

  /**
   * Queries transcoding tasks based on the media ID. This operation does not return specific job information.
   * 
   * @remarks
   *   You can call the [GetTranscodeTask](https://help.aliyun.com/document_detail/109121.html) operation to query details about transcoding jobs.
   * *   **You can call this operation to query only transcoding tasks created within the past year.**
   * 
   * @param request - ListTranscodeTaskRequest
   * @returns ListTranscodeTaskResponse
   */
  async listTranscodeTask(request: $_model.ListTranscodeTaskRequest): Promise<$_model.ListTranscodeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTranscodeTaskWithOptions(request, runtime);
  }

  /**
   * Queries transcoding template groups.
   * 
   * @remarks
   * > This operation does not return the configurations of transcoding templates in each transcoding template group. To query the configurations of transcoding templates in a specific transcoding template group, call the [GetTranscodeTemplateGroup](https://help.aliyun.com/document_detail/102670.html) operation.
   * 
   * @param request - ListTranscodeTemplateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTranscodeTemplateGroupResponse
   */
  async listTranscodeTemplateGroupWithOptions(request: $_model.ListTranscodeTemplateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTranscodeTemplateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTranscodeTemplateGroup",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTranscodeTemplateGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListTranscodeTemplateGroupResponse({}));
  }

  /**
   * Queries transcoding template groups.
   * 
   * @remarks
   * > This operation does not return the configurations of transcoding templates in each transcoding template group. To query the configurations of transcoding templates in a specific transcoding template group, call the [GetTranscodeTemplateGroup](https://help.aliyun.com/document_detail/102670.html) operation.
   * 
   * @param request - ListTranscodeTemplateGroupRequest
   * @returns ListTranscodeTemplateGroupResponse
   */
  async listTranscodeTemplateGroup(request: $_model.ListTranscodeTemplateGroupRequest): Promise<$_model.ListTranscodeTemplateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTranscodeTemplateGroupWithOptions(request, runtime);
  }

  /**
   * 列举ES模版
   * 
   * @param request - ListVodEsTemplateInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVodEsTemplateInfoResponse
   */
  async listVodEsTemplateInfoWithOptions(request: $_model.ListVodEsTemplateInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVodEsTemplateInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVodEsTemplateInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVodEsTemplateInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListVodEsTemplateInfoResponse({}));
  }

  /**
   * 列举ES模版
   * 
   * @param request - ListVodEsTemplateInfoRequest
   * @returns ListVodEsTemplateInfoResponse
   */
  async listVodEsTemplateInfo(request: $_model.ListVodEsTemplateInfoRequest): Promise<$_model.ListVodEsTemplateInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVodEsTemplateInfoWithOptions(request, runtime);
  }

  /**
   * 列举实时日志
   * 
   * @param request - ListVodRealtimeLogDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVodRealtimeLogDeliveryResponse
   */
  async listVodRealtimeLogDeliveryWithOptions(request: $_model.ListVodRealtimeLogDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVodRealtimeLogDeliveryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVodRealtimeLogDelivery",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVodRealtimeLogDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.ListVodRealtimeLogDeliveryResponse({}));
  }

  /**
   * 列举实时日志
   * 
   * @param request - ListVodRealtimeLogDeliveryRequest
   * @returns ListVodRealtimeLogDeliveryResponse
   */
  async listVodRealtimeLogDelivery(request: $_model.ListVodRealtimeLogDeliveryRequest): Promise<$_model.ListVodRealtimeLogDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVodRealtimeLogDeliveryWithOptions(request, runtime);
  }

  /**
   * 列举实时日志域名
   * 
   * @param request - ListVodRealtimeLogDeliveryDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVodRealtimeLogDeliveryDomainsResponse
   */
  async listVodRealtimeLogDeliveryDomainsWithOptions(request: $_model.ListVodRealtimeLogDeliveryDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVodRealtimeLogDeliveryDomainsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVodRealtimeLogDeliveryDomains",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVodRealtimeLogDeliveryDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ListVodRealtimeLogDeliveryDomainsResponse({}));
  }

  /**
   * 列举实时日志域名
   * 
   * @param request - ListVodRealtimeLogDeliveryDomainsRequest
   * @returns ListVodRealtimeLogDeliveryDomainsResponse
   */
  async listVodRealtimeLogDeliveryDomains(request: $_model.ListVodRealtimeLogDeliveryDomainsRequest): Promise<$_model.ListVodRealtimeLogDeliveryDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVodRealtimeLogDeliveryDomainsWithOptions(request, runtime);
  }

  /**
   * 列举实时日志转存信息
   * 
   * @param request - ListVodRealtimeLogDeliveryInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVodRealtimeLogDeliveryInfosResponse
   */
  async listVodRealtimeLogDeliveryInfosWithOptions(request: $_model.ListVodRealtimeLogDeliveryInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVodRealtimeLogDeliveryInfosResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVodRealtimeLogDeliveryInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVodRealtimeLogDeliveryInfosResponse>(await this.callApi(params, req, runtime), new $_model.ListVodRealtimeLogDeliveryInfosResponse({}));
  }

  /**
   * 列举实时日志转存信息
   * 
   * @param request - ListVodRealtimeLogDeliveryInfosRequest
   * @returns ListVodRealtimeLogDeliveryInfosResponse
   */
  async listVodRealtimeLogDeliveryInfos(request: $_model.ListVodRealtimeLogDeliveryInfosRequest): Promise<$_model.ListVodRealtimeLogDeliveryInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVodRealtimeLogDeliveryInfosWithOptions(request, runtime);
  }

  /**
   * 列举VOD域名标签
   * 
   * @param request - ListVodTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVodTagResourcesResponse
   */
  async listVodTagResourcesWithOptions(request: $_model.ListVodTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVodTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.tagOwnerBid)) {
      query["TagOwnerBid"] = request.tagOwnerBid;
    }

    if (!$dara.isNull(request.tagOwnerUid)) {
      query["TagOwnerUid"] = request.tagOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVodTagResources",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVodTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListVodTagResourcesResponse({}));
  }

  /**
   * 列举VOD域名标签
   * 
   * @param request - ListVodTagResourcesRequest
   * @returns ListVodTagResourcesResponse
   */
  async listVodTagResources(request: $_model.ListVodTagResourcesRequest): Promise<$_model.ListVodTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVodTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries snapshot templates.
   * 
   * @param request - ListVodTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVodTemplateResponse
   */
  async listVodTemplateWithOptions(request: $_model.ListVodTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVodTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVodTemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVodTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ListVodTemplateResponse({}));
  }

  /**
   * Queries snapshot templates.
   * 
   * @param request - ListVodTemplateRequest
   * @returns ListVodTemplateResponse
   */
  async listVodTemplate(request: $_model.ListVodTemplateRequest): Promise<$_model.ListVodTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVodTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the configuration information about all image and text watermark templates in a region. You can call this operation to obtain information such as the position, size, and display time of image watermarks or the content, position, font, and font color of text watermarks.
   * 
   * @param request - ListWatermarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWatermarkResponse
   */
  async listWatermarkWithOptions(request: $_model.ListWatermarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWatermarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWatermark",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWatermarkResponse>(await this.callApi(params, req, runtime), new $_model.ListWatermarkResponse({}));
  }

  /**
   * Queries the configuration information about all image and text watermark templates in a region. You can call this operation to obtain information such as the position, size, and display time of image watermarks or the content, position, font, and font color of text watermarks.
   * 
   * @param request - ListWatermarkRequest
   * @returns ListWatermarkResponse
   */
  async listWatermark(request: $_model.ListWatermarkRequest): Promise<$_model.ListWatermarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWatermarkWithOptions(request, runtime);
  }

  /**
   * 列举工作流
   * 
   * @param request - ListWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowResponse
   */
  async listWorkflowWithOptions(request: $_model.ListWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.bizVersion)) {
      query["BizVersion"] = request.bizVersion;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkflow",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkflowResponse({}));
  }

  /**
   * 列举工作流
   * 
   * @param request - ListWorkflowRequest
   * @returns ListWorkflowResponse
   */
  async listWorkflow(request: $_model.ListWorkflowRequest): Promise<$_model.ListWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkflowWithOptions(request, runtime);
  }

  /**
   * 修改license
   * 
   * @param request - ModifyLicenseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLicenseInfoResponse
   */
  async modifyLicenseInfoWithOptions(request: $_model.ModifyLicenseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLicenseInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.contractNo)) {
      query["ContractNo"] = request.contractNo;
    }

    if (!$dara.isNull(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.expiredOn)) {
      query["ExpiredOn"] = request.expiredOn;
    }

    if (!$dara.isNull(request.extraInfo)) {
      query["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.licenseId)) {
      query["LicenseId"] = request.licenseId;
    }

    if (!$dara.isNull(request.operator)) {
      query["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLicenseInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLicenseInfoResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLicenseInfoResponse({}));
  }

  /**
   * 修改license
   * 
   * @param request - ModifyLicenseInfoRequest
   * @returns ModifyLicenseInfoResponse
   */
  async modifyLicenseInfo(request: $_model.ModifyLicenseInfoRequest): Promise<$_model.ModifyLicenseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLicenseInfoWithOptions(request, runtime);
  }

  /**
   * 修改域名配置
   * 
   * @param request - ModifyVodDomainSchdmByPropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVodDomainSchdmByPropertyResponse
   */
  async modifyVodDomainSchdmByPropertyWithOptions(request: $_model.ModifyVodDomainSchdmByPropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyVodDomainSchdmByPropertyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.property)) {
      query["Property"] = request.property;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyVodDomainSchdmByProperty",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyVodDomainSchdmByPropertyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyVodDomainSchdmByPropertyResponse({}));
  }

  /**
   * 修改域名配置
   * 
   * @param request - ModifyVodDomainSchdmByPropertyRequest
   * @returns ModifyVodDomainSchdmByPropertyResponse
   */
  async modifyVodDomainSchdmByProperty(request: $_model.ModifyVodDomainSchdmByPropertyRequest): Promise<$_model.ModifyVodDomainSchdmByPropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVodDomainSchdmByPropertyWithOptions(request, runtime);
  }

  /**
   * 修改Vod服务配置
   * 
   * @param request - ModifyVodServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVodServiceResponse
   */
  async modifyVodServiceWithOptions(request: $_model.ModifyVodServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyVodServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyVodService",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyVodServiceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyVodServiceResponse({}));
  }

  /**
   * 修改Vod服务配置
   * 
   * @param request - ModifyVodServiceRequest
   * @returns ModifyVodServiceResponse
   */
  async modifyVodService(request: $_model.ModifyVodServiceRequest): Promise<$_model.ModifyVodServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVodServiceWithOptions(request, runtime);
  }

  /**
   * Migrates resources between applications. The application administrator can directly migrate resources between applications. Resource Access Management (RAM) users or RAM roles must obtain the write permissions on the source and destination applications before they migrate resources between applications. Multiple resources can be migrated at a time.
   * 
   * @param request - MoveAppResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveAppResourceResponse
   */
  async moveAppResourceWithOptions(request: $_model.MoveAppResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveAppResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.targetAppId)) {
      query["TargetAppId"] = request.targetAppId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveAppResource",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveAppResourceResponse>(await this.callApi(params, req, runtime), new $_model.MoveAppResourceResponse({}));
  }

  /**
   * Migrates resources between applications. The application administrator can directly migrate resources between applications. Resource Access Management (RAM) users or RAM roles must obtain the write permissions on the source and destination applications before they migrate resources between applications. Multiple resources can be migrated at a time.
   * 
   * @param request - MoveAppResourceRequest
   * @returns MoveAppResourceResponse
   */
  async moveAppResource(request: $_model.MoveAppResourceRequest): Promise<$_model.MoveAppResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveAppResourceWithOptions(request, runtime);
  }

  /**
   * 开通Vod服务
   * 
   * @param request - OpenVodServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenVodServiceResponse
   */
  async openVodServiceWithOptions(request: $_model.OpenVodServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenVodServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenVodService",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenVodServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenVodServiceResponse({}));
  }

  /**
   * 开通Vod服务
   * 
   * @param request - OpenVodServiceRequest
   * @returns OpenVodServiceResponse
   */
  async openVodService(request: $_model.OpenVodServiceRequest): Promise<$_model.OpenVodServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openVodServiceWithOptions(request, runtime);
  }

  /**
   * 预加载播放设备能力数据到缓存
   * 
   * @param request - PreloadPlayDeviceAbilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreloadPlayDeviceAbilityResponse
   */
  async preloadPlayDeviceAbilityWithOptions(request: $_model.PreloadPlayDeviceAbilityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PreloadPlayDeviceAbilityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brand)) {
      query["Brand"] = request.brand;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreloadPlayDeviceAbility",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreloadPlayDeviceAbilityResponse>(await this.callApi(params, req, runtime), new $_model.PreloadPlayDeviceAbilityResponse({}));
  }

  /**
   * 预加载播放设备能力数据到缓存
   * 
   * @param request - PreloadPlayDeviceAbilityRequest
   * @returns PreloadPlayDeviceAbilityResponse
   */
  async preloadPlayDeviceAbility(request: $_model.PreloadPlayDeviceAbilityRequest): Promise<$_model.PreloadPlayDeviceAbilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.preloadPlayDeviceAbilityWithOptions(request, runtime);
  }

  /**
   * Prefetches resources from an origin server to L2 nodes. Users can directly hit the cache upon their first visits. This way, workloads on the origin server can be reduced.
   * 
   * @remarks
   * > *   This operation is available only in the **China (Shanghai)** region.
   * > *   You can submit a maximum of 500 requests to prefetch resources based on URLs each day by using an Alibaba Cloud account. You cannot prefetch resources based on directories.
   * > *   You can call the [RefreshVodObjectCaches](https://help.aliyun.com/document_detail/69215.html) operation to refresh content and the [PreloadVodObjectCaches](https://help.aliyun.com/document_detail/69211.htmll) operation to prefetch content.
   * 
   * @param request - PreloadVodObjectCachesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreloadVodObjectCachesResponse
   */
  async preloadVodObjectCachesWithOptions(request: $_model.PreloadVodObjectCachesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PreloadVodObjectCachesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.area)) {
      query["Area"] = request.area;
    }

    if (!$dara.isNull(request.l2Preload)) {
      query["L2Preload"] = request.l2Preload;
    }

    if (!$dara.isNull(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.withHeader)) {
      query["WithHeader"] = request.withHeader;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreloadVodObjectCaches",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreloadVodObjectCachesResponse>(await this.callApi(params, req, runtime), new $_model.PreloadVodObjectCachesResponse({}));
  }

  /**
   * Prefetches resources from an origin server to L2 nodes. Users can directly hit the cache upon their first visits. This way, workloads on the origin server can be reduced.
   * 
   * @remarks
   * > *   This operation is available only in the **China (Shanghai)** region.
   * > *   You can submit a maximum of 500 requests to prefetch resources based on URLs each day by using an Alibaba Cloud account. You cannot prefetch resources based on directories.
   * > *   You can call the [RefreshVodObjectCaches](https://help.aliyun.com/document_detail/69215.html) operation to refresh content and the [PreloadVodObjectCaches](https://help.aliyun.com/document_detail/69211.htmll) operation to prefetch content.
   * 
   * @param request - PreloadVodObjectCachesRequest
   * @returns PreloadVodObjectCachesResponse
   */
  async preloadVodObjectCaches(request: $_model.PreloadVodObjectCachesRequest): Promise<$_model.PreloadVodObjectCachesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.preloadVodObjectCachesWithOptions(request, runtime);
  }

  /**
   * Produces a video from one or more source files. You can directly specify source files by configuring the Timeline parameter. Alternatively, you can specify source files after you create an online editing project.
   * 
   * @remarks
   *   **Make sure that you understand the billing method and price of ApsaraVideo VOD before you call this operation. You are charged for using the online editing feature. For more information, see [Billing](~~188310#section-pyv-b8h-bo7~~).**
   * *   This operation returns only the submission result of a video production task. When the submission result is returned, video production may still be in progress. After a video production task is submitted, the task is queued in the background for asynchronous processing.
   * *   The source files that are used in the timeline of an online editing project can be materials directly uploaded to the online project or selected from the media asset library. Only media assets that are in the Normal state can be used in the project.
   * *   Videos are produced based on ProjectId and Timeline. The following content describes the parameter configurations:
   *     *   You must specify ProjectId or Timeline. If you leave both parameters empty, the video cannot be produced.
   *     *   If you specify Timeline and leave ProjectId empty, the system automatically creates an online editing project based on Timeline and adds the materials specified in the Timeline to the project to produce videos.
   *     *   If you specify ProjectId and leave Timeline empty, the system automatically uses the latest timeline information of the project to produce videos.
   *     *   If you specify both ProjectId and Timeline, the system automatically uses the timeline information that you specified to produce videos and updates the project timeline and materials. You can also specify other parameters to update the corresponding information about the online editing project.
   * *   You can create up to 100 video tracks, 100 image tracks, and 100 subtitle tracks in a project.
   * *   The total size of material files cannot exceed 1 TB.
   * *   The buckets in which the materials reside and where the exported videos are stored must be in the same region as the region where ApsaraVideo VOD is activated.
   * *   The exported videos must meet the following requirements:
   *     *   The width and height of the video image cannot be less than 128 pixels.
   *     *   The width and height of the video image cannot exceed 4,096 pixels.
   *     *   The width cannot exceed 2,160 pixels.
   * *   After a video is produced, the video is automatically uploaded to ApsaraVideo VOD. Then, the **ProduceMediaComplete** and **FileUploadComplete** event notifications are sent to you. After the produced video is transcoded, the **StreamTranscodeComplete** and **TranscodeComplete** event notifications are sent to you.
   * *   You can add special effects to the video. For more information, see [Special effects](https://help.aliyun.com/document_detail/69082.html).
   * 
   * @param request - ProduceEditingProjectVideoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProduceEditingProjectVideoResponse
   */
  async produceEditingProjectVideoWithOptions(request: $_model.ProduceEditingProjectVideoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ProduceEditingProjectVideoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.mediaMetadata)) {
      query["MediaMetadata"] = request.mediaMetadata;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.produceConfig)) {
      query["ProduceConfig"] = request.produceConfig;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.timeline)) {
      query["Timeline"] = request.timeline;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ProduceEditingProjectVideo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ProduceEditingProjectVideoResponse>(await this.callApi(params, req, runtime), new $_model.ProduceEditingProjectVideoResponse({}));
  }

  /**
   * Produces a video from one or more source files. You can directly specify source files by configuring the Timeline parameter. Alternatively, you can specify source files after you create an online editing project.
   * 
   * @remarks
   *   **Make sure that you understand the billing method and price of ApsaraVideo VOD before you call this operation. You are charged for using the online editing feature. For more information, see [Billing](~~188310#section-pyv-b8h-bo7~~).**
   * *   This operation returns only the submission result of a video production task. When the submission result is returned, video production may still be in progress. After a video production task is submitted, the task is queued in the background for asynchronous processing.
   * *   The source files that are used in the timeline of an online editing project can be materials directly uploaded to the online project or selected from the media asset library. Only media assets that are in the Normal state can be used in the project.
   * *   Videos are produced based on ProjectId and Timeline. The following content describes the parameter configurations:
   *     *   You must specify ProjectId or Timeline. If you leave both parameters empty, the video cannot be produced.
   *     *   If you specify Timeline and leave ProjectId empty, the system automatically creates an online editing project based on Timeline and adds the materials specified in the Timeline to the project to produce videos.
   *     *   If you specify ProjectId and leave Timeline empty, the system automatically uses the latest timeline information of the project to produce videos.
   *     *   If you specify both ProjectId and Timeline, the system automatically uses the timeline information that you specified to produce videos and updates the project timeline and materials. You can also specify other parameters to update the corresponding information about the online editing project.
   * *   You can create up to 100 video tracks, 100 image tracks, and 100 subtitle tracks in a project.
   * *   The total size of material files cannot exceed 1 TB.
   * *   The buckets in which the materials reside and where the exported videos are stored must be in the same region as the region where ApsaraVideo VOD is activated.
   * *   The exported videos must meet the following requirements:
   *     *   The width and height of the video image cannot be less than 128 pixels.
   *     *   The width and height of the video image cannot exceed 4,096 pixels.
   *     *   The width cannot exceed 2,160 pixels.
   * *   After a video is produced, the video is automatically uploaded to ApsaraVideo VOD. Then, the **ProduceMediaComplete** and **FileUploadComplete** event notifications are sent to you. After the produced video is transcoded, the **StreamTranscodeComplete** and **TranscodeComplete** event notifications are sent to you.
   * *   You can add special effects to the video. For more information, see [Special effects](https://help.aliyun.com/document_detail/69082.html).
   * 
   * @param request - ProduceEditingProjectVideoRequest
   * @returns ProduceEditingProjectVideoResponse
   */
  async produceEditingProjectVideo(request: $_model.ProduceEditingProjectVideoRequest): Promise<$_model.ProduceEditingProjectVideoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.produceEditingProjectVideoWithOptions(request, runtime);
  }

  /**
   * 发布灰度配置到生产
   * 
   * @param request - PublishVodStagingConfigToProductionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishVodStagingConfigToProductionResponse
   */
  async publishVodStagingConfigToProductionWithOptions(request: $_model.PublishVodStagingConfigToProductionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishVodStagingConfigToProductionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishVodStagingConfigToProduction",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishVodStagingConfigToProductionResponse>(await this.callApi(params, req, runtime), new $_model.PublishVodStagingConfigToProductionResponse({}));
  }

  /**
   * 发布灰度配置到生产
   * 
   * @param request - PublishVodStagingConfigToProductionRequest
   * @returns PublishVodStagingConfigToProductionResponse
   */
  async publishVodStagingConfigToProduction(request: $_model.PublishVodStagingConfigToProductionRequest): Promise<$_model.PublishVodStagingConfigToProductionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishVodStagingConfigToProductionWithOptions(request, runtime);
  }

  /**
   * 推送缓存
   * 
   * @param request - PushObjectCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushObjectCacheResponse
   */
  async pushObjectCacheWithOptions(request: $_model.PushObjectCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushObjectCacheResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushObjectCache",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushObjectCacheResponse>(await this.callApi(params, req, runtime), new $_model.PushObjectCacheResponse({}));
  }

  /**
   * 推送缓存
   * 
   * @param request - PushObjectCacheRequest
   * @returns PushObjectCacheResponse
   */
  async pushObjectCache(request: $_model.PushObjectCacheRequest): Promise<$_model.PushObjectCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushObjectCacheWithOptions(request, runtime);
  }

  /**
   * 下单询价流量询价
   * 
   * @param request - QueryCssOrderForLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCssOrderForLicenseResponse
   */
  async queryCssOrderForLicenseWithOptions(request: $_model.QueryCssOrderForLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCssOrderForLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paramStr)) {
      query["ParamStr"] = request.paramStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCssOrderForLicense",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCssOrderForLicenseResponse>(await this.callApi(params, req, runtime), new $_model.QueryCssOrderForLicenseResponse({}));
  }

  /**
   * 下单询价流量询价
   * 
   * @param request - QueryCssOrderForLicenseRequest
   * @returns QueryCssOrderForLicenseResponse
   */
  async queryCssOrderForLicense(request: $_model.QueryCssOrderForLicenseRequest): Promise<$_model.QueryCssOrderForLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCssOrderForLicenseWithOptions(request, runtime);
  }

  /**
   * Submits media refresh or prefetch tasks based on the media IDs.
   * 
   * @remarks
   *   ApsaraVideo VOD allows you to purge and prefetch resources. The purge feature forces the point of presence (POP) to clear cached resources and retrieve the latest resources from origin servers. The prefetch feature allows the POP to retrieve frequently accessed resources from origin servers during off-peak hours. This increases the cache hit ratio.
   * *   You can call this operation to submit purge or prefetch tasks based on the media ID. You can also specify the format and resolution of the media streams to purge or prefetch based on your business requirements.
   * *   You can submit a maximum of 20 purge or prefetch tasks at a time.
   * 
   * @param request - RefreshMediaPlayUrlsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshMediaPlayUrlsResponse
   */
  async refreshMediaPlayUrlsWithOptions(request: $_model.RefreshMediaPlayUrlsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshMediaPlayUrlsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.definitions)) {
      query["Definitions"] = request.definitions;
    }

    if (!$dara.isNull(request.formats)) {
      query["Formats"] = request.formats;
    }

    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    if (!$dara.isNull(request.resultType)) {
      query["ResultType"] = request.resultType;
    }

    if (!$dara.isNull(request.sliceCount)) {
      query["SliceCount"] = request.sliceCount;
    }

    if (!$dara.isNull(request.sliceFlag)) {
      query["SliceFlag"] = request.sliceFlag;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshMediaPlayUrls",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshMediaPlayUrlsResponse>(await this.callApi(params, req, runtime), new $_model.RefreshMediaPlayUrlsResponse({}));
  }

  /**
   * Submits media refresh or prefetch tasks based on the media IDs.
   * 
   * @remarks
   *   ApsaraVideo VOD allows you to purge and prefetch resources. The purge feature forces the point of presence (POP) to clear cached resources and retrieve the latest resources from origin servers. The prefetch feature allows the POP to retrieve frequently accessed resources from origin servers during off-peak hours. This increases the cache hit ratio.
   * *   You can call this operation to submit purge or prefetch tasks based on the media ID. You can also specify the format and resolution of the media streams to purge or prefetch based on your business requirements.
   * *   You can submit a maximum of 20 purge or prefetch tasks at a time.
   * 
   * @param request - RefreshMediaPlayUrlsRequest
   * @returns RefreshMediaPlayUrlsResponse
   */
  async refreshMediaPlayUrls(request: $_model.RefreshMediaPlayUrlsRequest): Promise<$_model.RefreshMediaPlayUrlsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshMediaPlayUrlsWithOptions(request, runtime);
  }

  /**
   * 刷新缓存
   * 
   * @param request - RefreshObjectCachesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshObjectCachesResponse
   */
  async refreshObjectCachesWithOptions(request: $_model.RefreshObjectCachesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshObjectCachesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshObjectCaches",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshObjectCachesResponse>(await this.callApi(params, req, runtime), new $_model.RefreshObjectCachesResponse({}));
  }

  /**
   * 刷新缓存
   * 
   * @param request - RefreshObjectCachesRequest
   * @returns RefreshObjectCachesResponse
   */
  async refreshObjectCaches(request: $_model.RefreshObjectCachesRequest): Promise<$_model.RefreshObjectCachesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshObjectCachesWithOptions(request, runtime);
  }

  /**
   * Obtains a new upload credential after a file failed to be uploaded.
   * 
   * @remarks
   * You can also call this operation to overwrite the source file of an audio or video file. After you call this operation, the system obtains the upload URL and uploads a new source file without changing the ID of the audio or video file. If you have configured transcoding or snapshot capture for the upload, the transcoding or snapshot capture job is automatically triggered. For more information, see [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
   * 
   * @param request - RefreshUploadVideoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshUploadVideoResponse
   */
  async refreshUploadVideoWithOptions(request: $_model.RefreshUploadVideoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshUploadVideoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshUploadVideo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshUploadVideoResponse>(await this.callApi(params, req, runtime), new $_model.RefreshUploadVideoResponse({}));
  }

  /**
   * Obtains a new upload credential after a file failed to be uploaded.
   * 
   * @remarks
   * You can also call this operation to overwrite the source file of an audio or video file. After you call this operation, the system obtains the upload URL and uploads a new source file without changing the ID of the audio or video file. If you have configured transcoding or snapshot capture for the upload, the transcoding or snapshot capture job is automatically triggered. For more information, see [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
   * 
   * @param request - RefreshUploadVideoRequest
   * @returns RefreshUploadVideoResponse
   */
  async refreshUploadVideo(request: $_model.RefreshUploadVideoRequest): Promise<$_model.RefreshUploadVideoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshUploadVideoWithOptions(request, runtime);
  }

  /**
   * Refreshes files on Alibaba Cloud CDN nodes. You can refresh multiple files at a time based on URLs.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   You can submit a maximum of 2,000 requests to refresh resources based on URLs and 100 requests to refresh resources based on directories each day by using an Alibaba Cloud account.
   * *   You can call the [RefreshVodObjectCaches](https://help.aliyun.com/document_detail/69215.html) operation to refresh content and the [PreloadVodObjectCaches](https://help.aliyun.com/document_detail/69211.html) operation to prefetch content.
   * 
   * @param request - RefreshVodObjectCachesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshVodObjectCachesResponse
   */
  async refreshVodObjectCachesWithOptions(request: $_model.RefreshVodObjectCachesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshVodObjectCachesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshVodObjectCaches",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshVodObjectCachesResponse>(await this.callApi(params, req, runtime), new $_model.RefreshVodObjectCachesResponse({}));
  }

  /**
   * Refreshes files on Alibaba Cloud CDN nodes. You can refresh multiple files at a time based on URLs.
   * 
   * @remarks
   *   This operation is available only in the **China (Shanghai)** region.
   * *   You can submit a maximum of 2,000 requests to refresh resources based on URLs and 100 requests to refresh resources based on directories each day by using an Alibaba Cloud account.
   * *   You can call the [RefreshVodObjectCaches](https://help.aliyun.com/document_detail/69215.html) operation to refresh content and the [PreloadVodObjectCaches](https://help.aliyun.com/document_detail/69211.html) operation to prefetch content.
   * 
   * @param request - RefreshVodObjectCachesRequest
   * @returns RefreshVodObjectCachesResponse
   */
  async refreshVodObjectCaches(request: $_model.RefreshVodObjectCachesRequest): Promise<$_model.RefreshVodObjectCachesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshVodObjectCachesWithOptions(request, runtime);
  }

  /**
   * 注册DRM证书
   * 
   * @param request - RegistDRMCertInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegistDRMCertInfoResponse
   */
  async registDRMCertInfoWithOptions(request: $_model.RegistDRMCertInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegistDRMCertInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ask)) {
      query["Ask"] = request.ask;
    }

    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.passPhrase)) {
      query["PassPhrase"] = request.passPhrase;
    }

    if (!$dara.isNull(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.servCert)) {
      query["ServCert"] = request.servCert;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegistDRMCertInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegistDRMCertInfoResponse>(await this.callApi(params, req, runtime), new $_model.RegistDRMCertInfoResponse({}));
  }

  /**
   * 注册DRM证书
   * 
   * @param request - RegistDRMCertInfoRequest
   * @returns RegistDRMCertInfoResponse
   */
  async registDRMCertInfo(request: $_model.RegistDRMCertInfoRequest): Promise<$_model.RegistDRMCertInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registDRMCertInfoWithOptions(request, runtime);
  }

  /**
   * Registers media files. After you add an Object Storage Service (OSS) bucket to ApsaraVideo VOD, you must register the media files in the bucket to generate the required information before you use features such as transcoding and snapshot capture on the media files.
   * 
   * @remarks
   *   After you add an OSS bucket to ApsaraVideo VOD, you must register media files in the OSS bucket to generate the required information. Then, you can use media IDs for features such as transcoding, snapshot capture, and AI processing.use features such as xxx on media files by specifying their IDs?
   * *   You can register up to 10 media files in an OSS bucket in a request. The media files must be stored in the same bucket.
   * *   If you do not specify a transcoding template group ID when you upload a media file to ApsaraVideo VOD, the media file is automatically transcoded based on the default template group. If you do not specify a transcoding template group ID after you register a media file, the media file is not automatically transcoded. The registered media files are automatically transcoded only if you specify a transcoding template group ID.
   * *   If the media file that you want to register has been registered, this operation returns only the unique media ID that is associated with the media file. No further operation is performed.
   * *   Make sure that the media file that you want to register has a valid suffix. Otherwise, the registration fails.
   * 
   * @param request - RegisterMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterMediaResponse
   */
  async registerMediaWithOptions(request: $_model.RegisterMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.registerMetadatas)) {
      query["RegisterMetadatas"] = request.registerMetadatas;
    }

    if (!$dara.isNull(request.templateGroupId)) {
      query["TemplateGroupId"] = request.templateGroupId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterMedia",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterMediaResponse>(await this.callApi(params, req, runtime), new $_model.RegisterMediaResponse({}));
  }

  /**
   * Registers media files. After you add an Object Storage Service (OSS) bucket to ApsaraVideo VOD, you must register the media files in the bucket to generate the required information before you use features such as transcoding and snapshot capture on the media files.
   * 
   * @remarks
   *   After you add an OSS bucket to ApsaraVideo VOD, you must register media files in the OSS bucket to generate the required information. Then, you can use media IDs for features such as transcoding, snapshot capture, and AI processing.use features such as xxx on media files by specifying their IDs?
   * *   You can register up to 10 media files in an OSS bucket in a request. The media files must be stored in the same bucket.
   * *   If you do not specify a transcoding template group ID when you upload a media file to ApsaraVideo VOD, the media file is automatically transcoded based on the default template group. If you do not specify a transcoding template group ID after you register a media file, the media file is not automatically transcoded. The registered media files are automatically transcoded only if you specify a transcoding template group ID.
   * *   If the media file that you want to register has been registered, this operation returns only the unique media ID that is associated with the media file. No further operation is performed.
   * *   Make sure that the media file that you want to register has a valid suffix. Otherwise, the registration fails.
   * 
   * @param request - RegisterMediaRequest
   * @returns RegisterMediaResponse
   */
  async registerMedia(request: $_model.RegisterMediaRequest): Promise<$_model.RegisterMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerMediaWithOptions(request, runtime);
  }

  /**
   * 更新AppLicense
   * 
   * @param request - RenewAppLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewAppLicenseResponse
   */
  async renewAppLicenseWithOptions(request: $_model.RenewAppLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewAppLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderIds)) {
      query["OrderIds"] = request.orderIds;
    }

    if (!$dara.isNull(request.purchaseMethod)) {
      query["PurchaseMethod"] = request.purchaseMethod;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.licenseItemIds)) {
      body["LicenseItemIds"] = request.licenseItemIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewAppLicense",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewAppLicenseResponse>(await this.callApi(params, req, runtime), new $_model.RenewAppLicenseResponse({}));
  }

  /**
   * 更新AppLicense
   * 
   * @param request - RenewAppLicenseRequest
   * @returns RenewAppLicenseResponse
   */
  async renewAppLicense(request: $_model.RenewAppLicenseRequest): Promise<$_model.RenewAppLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewAppLicenseWithOptions(request, runtime);
  }

  /**
   * 续费免费license
   * 
   * @param request - RenewFreeLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewFreeLicenseResponse
   */
  async renewFreeLicenseWithOptions(request: $_model.RenewFreeLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewFreeLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appItemId)) {
      query["AppItemId"] = request.appItemId;
    }

    if (!$dara.isNull(request.licenseItemId)) {
      query["LicenseItemId"] = request.licenseItemId;
    }

    if (!$dara.isNull(request.validPeriod)) {
      query["ValidPeriod"] = request.validPeriod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewFreeLicense",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewFreeLicenseResponse>(await this.callApi(params, req, runtime), new $_model.RenewFreeLicenseResponse({}));
  }

  /**
   * 续费免费license
   * 
   * @param request - RenewFreeLicenseRequest
   * @returns RenewFreeLicenseResponse
   */
  async renewFreeLicense(request: $_model.RenewFreeLicenseRequest): Promise<$_model.RenewFreeLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewFreeLicenseWithOptions(request, runtime);
  }

  /**
   * 报告上传进度
   * 
   * @param request - ReportUploadProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportUploadProgressResponse
   */
  async reportUploadProgressWithOptions(request: $_model.ReportUploadProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReportUploadProgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.authInfo)) {
      query["AuthInfo"] = request.authInfo;
    }

    if (!$dara.isNull(request.authTimestamp)) {
      query["AuthTimestamp"] = request.authTimestamp;
    }

    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.deviceModel)) {
      query["DeviceModel"] = request.deviceModel;
    }

    if (!$dara.isNull(request.donePartsCount)) {
      query["DonePartsCount"] = request.donePartsCount;
    }

    if (!$dara.isNull(request.fileCreateTime)) {
      query["FileCreateTime"] = request.fileCreateTime;
    }

    if (!$dara.isNull(request.fileHash)) {
      query["FileHash"] = request.fileHash;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileSize)) {
      query["FileSize"] = request.fileSize;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.partSize)) {
      query["PartSize"] = request.partSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.terminalType)) {
      query["TerminalType"] = request.terminalType;
    }

    if (!$dara.isNull(request.totalPart)) {
      query["TotalPart"] = request.totalPart;
    }

    if (!$dara.isNull(request.uploadAddress)) {
      query["UploadAddress"] = request.uploadAddress;
    }

    if (!$dara.isNull(request.uploadId)) {
      query["UploadId"] = request.uploadId;
    }

    if (!$dara.isNull(request.uploadPoint)) {
      query["UploadPoint"] = request.uploadPoint;
    }

    if (!$dara.isNull(request.uploadRatio)) {
      query["UploadRatio"] = request.uploadRatio;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportUploadProgress",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReportUploadProgressResponse>(await this.callApi(params, req, runtime), new $_model.ReportUploadProgressResponse({}));
  }

  /**
   * 报告上传进度
   * 
   * @param request - ReportUploadProgressRequest
   * @returns ReportUploadProgressResponse
   */
  async reportUploadProgress(request: $_model.ReportUploadProgressRequest): Promise<$_model.ReportUploadProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reportUploadProgressWithOptions(request, runtime);
  }

  /**
   * Restores media assets.
   * 
   * @remarks
   * You can call this operation to restore only Archive and Cold Archive audio and video files. You can access the audio and video files after the files are restored. You cannot change the storage class of an audio or video file that is being restored. You are charged for the retrieval traffic generated during restoration. After a Cold Archive audio or video file is restored, a Standard replica of the file is generated for access. You are charged for the storage of the replica before the file returns to the frozen state.
   * 
   * @param request - RestoreMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreMediaResponse
   */
  async restoreMediaWithOptions(request: $_model.RestoreMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    if (!$dara.isNull(request.restoreDays)) {
      query["RestoreDays"] = request.restoreDays;
    }

    if (!$dara.isNull(request.restoreTier)) {
      query["RestoreTier"] = request.restoreTier;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestoreMedia",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestoreMediaResponse>(await this.callApi(params, req, runtime), new $_model.RestoreMediaResponse({}));
  }

  /**
   * Restores media assets.
   * 
   * @remarks
   * You can call this operation to restore only Archive and Cold Archive audio and video files. You can access the audio and video files after the files are restored. You cannot change the storage class of an audio or video file that is being restored. You are charged for the retrieval traffic generated during restoration. After a Cold Archive audio or video file is restored, a Standard replica of the file is generated for access. You are charged for the storage of the replica before the file returns to the frozen state.
   * 
   * @param request - RestoreMediaRequest
   * @returns RestoreMediaResponse
   */
  async restoreMedia(request: $_model.RestoreMediaRequest): Promise<$_model.RestoreMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restoreMediaWithOptions(request, runtime);
  }

  /**
   * 回滚灰度配置
   * 
   * @param request - RollbackVodStagingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackVodStagingConfigResponse
   */
  async rollbackVodStagingConfigWithOptions(request: $_model.RollbackVodStagingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackVodStagingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackVodStagingConfig",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackVodStagingConfigResponse>(await this.callApi(params, req, runtime), new $_model.RollbackVodStagingConfigResponse({}));
  }

  /**
   * 回滚灰度配置
   * 
   * @param request - RollbackVodStagingConfigRequest
   * @returns RollbackVodStagingConfigResponse
   */
  async rollbackVodStagingConfig(request: $_model.RollbackVodStagingConfigRequest): Promise<$_model.RollbackVodStagingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackVodStagingConfigWithOptions(request, runtime);
  }

  /**
   * Queries online editing projects.
   * 
   * @param request - SearchEditingProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchEditingProjectResponse
   */
  async searchEditingProjectWithOptions(request: $_model.SearchEditingProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchEditingProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchEditingProject",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchEditingProjectResponse>(await this.callApi(params, req, runtime), new $_model.SearchEditingProjectResponse({}));
  }

  /**
   * Queries online editing projects.
   * 
   * @param request - SearchEditingProjectRequest
   * @returns SearchEditingProjectResponse
   */
  async searchEditingProject(request: $_model.SearchEditingProjectRequest): Promise<$_model.SearchEditingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchEditingProjectWithOptions(request, runtime);
  }

  /**
   * Queries information about videos, audio, images, and auxiliary media assets. You can call this operation and specify the search protocol to query media assets based on the return fields, fields used for exact match, fields used for fuzzy match, fields used for a multi-value query, fields used for a range query, and sort fields.
   * 
   * @remarks
   * The maximum number of data records that you can query varies based on the method used to query the data. You can use the following methods to query data:
   * *   Method 1: Traverse data by page
   *     You can use the PageNo and PageSize parameters to traverse up to 5,000 data records that meet the specified filter condition. PageNo specifies the page number and PageSize specifies the number of data records displayed on a page. If the number of data records that meet the specified filter condition exceeds 5,000, change the filter conditions to narrow down the results. You cannot use this method to traverse all data records. If you want to traverse more data records, use Method 2.
   * *   Method 2: Traverse all data (available only for audio and video files)
   *     You can use this method to traverse up to 2 million data records related to audio and video files. If the number of data records that meet the specified filter condition exceeds 2 million, change the filter conditions to narrow down the results. To traverse data page by page, you must set the PageNo, PageSize, and ScrollToken parameters. The total number of data records from the current page to the target page cannot exceed 100. For example, you set PageSize to 20. The following content describes the traverse logic:
   *     *   When the PageNo parameter is set to 1, you can traverse data records from page 1 to page 5.
   *     *   When the PageNo parameter is set to 2, you can traverse data records from page 2 to page 6.
   * Make sure that you set the appropriate page number and page size, and use a traverse method based on the number of results that meet your filter condition.
   * 
   * @param request - SearchMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchMediaResponse
   */
  async searchMediaWithOptions(request: $_model.SearchMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fields)) {
      query["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.match)) {
      query["Match"] = request.match;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scrollToken)) {
      query["ScrollToken"] = request.scrollToken;
    }

    if (!$dara.isNull(request.searchType)) {
      query["SearchType"] = request.searchType;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchMedia",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchMediaResponse>(await this.callApi(params, req, runtime), new $_model.SearchMediaResponse({}));
  }

  /**
   * Queries information about videos, audio, images, and auxiliary media assets. You can call this operation and specify the search protocol to query media assets based on the return fields, fields used for exact match, fields used for fuzzy match, fields used for a multi-value query, fields used for a range query, and sort fields.
   * 
   * @remarks
   * The maximum number of data records that you can query varies based on the method used to query the data. You can use the following methods to query data:
   * *   Method 1: Traverse data by page
   *     You can use the PageNo and PageSize parameters to traverse up to 5,000 data records that meet the specified filter condition. PageNo specifies the page number and PageSize specifies the number of data records displayed on a page. If the number of data records that meet the specified filter condition exceeds 5,000, change the filter conditions to narrow down the results. You cannot use this method to traverse all data records. If you want to traverse more data records, use Method 2.
   * *   Method 2: Traverse all data (available only for audio and video files)
   *     You can use this method to traverse up to 2 million data records related to audio and video files. If the number of data records that meet the specified filter condition exceeds 2 million, change the filter conditions to narrow down the results. To traverse data page by page, you must set the PageNo, PageSize, and ScrollToken parameters. The total number of data records from the current page to the target page cannot exceed 100. For example, you set PageSize to 20. The following content describes the traverse logic:
   *     *   When the PageNo parameter is set to 1, you can traverse data records from page 1 to page 5.
   *     *   When the PageNo parameter is set to 2, you can traverse data records from page 2 to page 6.
   * Make sure that you set the appropriate page number and page size, and use a traverse method based on the number of results that meet your filter condition.
   * 
   * @param request - SearchMediaRequest
   * @returns SearchMediaResponse
   */
  async searchMedia(request: $_model.SearchMediaRequest): Promise<$_model.SearchMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchMediaWithOptions(request, runtime);
  }

  /**
   * 设置AI服务
   * 
   * @param request - SetAIServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAIServiceResponse
   */
  async setAIServiceWithOptions(request: $_model.SetAIServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAIServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.types)) {
      query["Types"] = request.types;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAIService",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAIServiceResponse>(await this.callApi(params, req, runtime), new $_model.SetAIServiceResponse({}));
  }

  /**
   * 设置AI服务
   * 
   * @param request - SetAIServiceRequest
   * @returns SetAIServiceResponse
   */
  async setAIService(request: $_model.SetAIServiceRequest): Promise<$_model.SetAIServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAIServiceWithOptions(request, runtime);
  }

  /**
   * Manages the IP addresses in review security groups.
   * 
   * @remarks
   * You can play videos in the Checking or Blocked state only from the IP addresses that are added to review security groups.
   * 
   * @param request - SetAuditSecurityIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAuditSecurityIpResponse
   */
  async setAuditSecurityIpWithOptions(request: $_model.SetAuditSecurityIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAuditSecurityIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ips)) {
      query["Ips"] = request.ips;
    }

    if (!$dara.isNull(request.operateMode)) {
      query["OperateMode"] = request.operateMode;
    }

    if (!$dara.isNull(request.securityGroupName)) {
      query["SecurityGroupName"] = request.securityGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAuditSecurityIp",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAuditSecurityIpResponse>(await this.callApi(params, req, runtime), new $_model.SetAuditSecurityIpResponse({}));
  }

  /**
   * Manages the IP addresses in review security groups.
   * 
   * @remarks
   * You can play videos in the Checking or Blocked state only from the IP addresses that are added to review security groups.
   * 
   * @param request - SetAuditSecurityIpRequest
   * @returns SetAuditSecurityIpResponse
   */
  async setAuditSecurityIp(request: $_model.SetAuditSecurityIpRequest): Promise<$_model.SetAuditSecurityIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAuditSecurityIpWithOptions(request, runtime);
  }

  /**
   * 设置检查通道
   * 
   * @param request - SetCheckChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetCheckChannelResponse
   */
  async setCheckChannelWithOptions(request: $_model.SetCheckChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetCheckChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.legalSwitch)) {
      query["LegalSwitch"] = request.legalSwitch;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetCheckChannel",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetCheckChannelResponse>(await this.callApi(params, req, runtime), new $_model.SetCheckChannelResponse({}));
  }

  /**
   * 设置检查通道
   * 
   * @param request - SetCheckChannelRequest
   * @returns SetCheckChannelResponse
   */
  async setCheckChannel(request: $_model.SetCheckChannelRequest): Promise<$_model.SetCheckChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setCheckChannelWithOptions(request, runtime);
  }

  /**
   * Updates the cross-domain policy file crossdomain.xml.
   * 
   * @remarks
   * > After you use the cross-domain policy file to update the resources on the origin server, you must refresh the resources that are cached on Alibaba Cloud CDN nodes. You can use the ApsaraVideo VOD console to refresh resources. For more information, see [Refresh and prefetch](https://help.aliyun.com/document_detail/86098.html). Alternatively, you can call the [RefreshVodObjectCaches](https://help.aliyun.com/document_detail/69215.html) operation to refresh resources.
   * 
   * @param request - SetCrossdomainContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetCrossdomainContentResponse
   */
  async setCrossdomainContentWithOptions(request: $_model.SetCrossdomainContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetCrossdomainContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetCrossdomainContent",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetCrossdomainContentResponse>(await this.callApi(params, req, runtime), new $_model.SetCrossdomainContentResponse({}));
  }

  /**
   * Updates the cross-domain policy file crossdomain.xml.
   * 
   * @remarks
   * > After you use the cross-domain policy file to update the resources on the origin server, you must refresh the resources that are cached on Alibaba Cloud CDN nodes. You can use the ApsaraVideo VOD console to refresh resources. For more information, see [Refresh and prefetch](https://help.aliyun.com/document_detail/86098.html). Alternatively, you can call the [RefreshVodObjectCaches](https://help.aliyun.com/document_detail/69215.html) operation to refresh resources.
   * 
   * @param request - SetCrossdomainContentRequest
   * @returns SetCrossdomainContentResponse
   */
  async setCrossdomainContent(request: $_model.SetCrossdomainContentRequest): Promise<$_model.SetCrossdomainContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setCrossdomainContentWithOptions(request, runtime);
  }

  /**
   * 设置用户配置
   * 
   * @param request - SetCustomerConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetCustomerConfigResponse
   */
  async setCustomerConfigWithOptions(request: $_model.SetCustomerConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetCustomerConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIConfig)) {
      query["AIConfig"] = request.AIConfig;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.auditConfig)) {
      query["AuditConfig"] = request.auditConfig;
    }

    if (!$dara.isNull(request.downloadSwitch)) {
      query["DownloadSwitch"] = request.downloadSwitch;
    }

    if (!$dara.isNull(request.metricConfig)) {
      query["MetricConfig"] = request.metricConfig;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetCustomerConfig",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetCustomerConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetCustomerConfigResponse({}));
  }

  /**
   * 设置用户配置
   * 
   * @param request - SetCustomerConfigRequest
   * @returns SetCustomerConfigResponse
   */
  async setCustomerConfig(request: $_model.SetCustomerConfigRequest): Promise<$_model.SetCustomerConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setCustomerConfigWithOptions(request, runtime);
  }

  /**
   * Specifies an AI template as the default template.
   * 
   * @remarks
   * Specifies an AI template as the default template.
   * 
   * @param request - SetDefaultAITemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultAITemplateResponse
   */
  async setDefaultAITemplateWithOptions(request: $_model.SetDefaultAITemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultAITemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultAITemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDefaultAITemplateResponse>(await this.callApi(params, req, runtime), new $_model.SetDefaultAITemplateResponse({}));
  }

  /**
   * Specifies an AI template as the default template.
   * 
   * @remarks
   * Specifies an AI template as the default template.
   * 
   * @param request - SetDefaultAITemplateRequest
   * @returns SetDefaultAITemplateResponse
   */
  async setDefaultAITemplate(request: $_model.SetDefaultAITemplateRequest): Promise<$_model.SetDefaultAITemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultAITemplateWithOptions(request, runtime);
  }

  /**
   * 设置默认播放域名
   * 
   * @param request - SetDefaultPlayDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultPlayDomainResponse
   */
  async setDefaultPlayDomainWithOptions(request: $_model.SetDefaultPlayDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultPlayDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultPlayDomain",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDefaultPlayDomainResponse>(await this.callApi(params, req, runtime), new $_model.SetDefaultPlayDomainResponse({}));
  }

  /**
   * 设置默认播放域名
   * 
   * @param request - SetDefaultPlayDomainRequest
   * @returns SetDefaultPlayDomainResponse
   */
  async setDefaultPlayDomain(request: $_model.SetDefaultPlayDomainRequest): Promise<$_model.SetDefaultPlayDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultPlayDomainWithOptions(request, runtime);
  }

  /**
   * 设置默认转码模版组
   * 
   * @param request - SetDefaultTemplateGroupConsoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultTemplateGroupConsoleResponse
   */
  async setDefaultTemplateGroupConsoleWithOptions(request: $_model.SetDefaultTemplateGroupConsoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultTemplateGroupConsoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupSymbol)) {
      query["GroupSymbol"] = request.groupSymbol;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultTemplateGroupConsole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDefaultTemplateGroupConsoleResponse>(await this.callApi(params, req, runtime), new $_model.SetDefaultTemplateGroupConsoleResponse({}));
  }

  /**
   * 设置默认转码模版组
   * 
   * @param request - SetDefaultTemplateGroupConsoleRequest
   * @returns SetDefaultTemplateGroupConsoleResponse
   */
  async setDefaultTemplateGroupConsole(request: $_model.SetDefaultTemplateGroupConsoleRequest): Promise<$_model.SetDefaultTemplateGroupConsoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultTemplateGroupConsoleWithOptions(request, runtime);
  }

  /**
   * Specifies a transcoding template group as the default one.
   * 
   * @param request - SetDefaultTranscodeTemplateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultTranscodeTemplateGroupResponse
   */
  async setDefaultTranscodeTemplateGroupWithOptions(request: $_model.SetDefaultTranscodeTemplateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultTranscodeTemplateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.transcodeTemplateGroupId)) {
      query["TranscodeTemplateGroupId"] = request.transcodeTemplateGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultTranscodeTemplateGroup",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDefaultTranscodeTemplateGroupResponse>(await this.callApi(params, req, runtime), new $_model.SetDefaultTranscodeTemplateGroupResponse({}));
  }

  /**
   * Specifies a transcoding template group as the default one.
   * 
   * @param request - SetDefaultTranscodeTemplateGroupRequest
   * @returns SetDefaultTranscodeTemplateGroupResponse
   */
  async setDefaultTranscodeTemplateGroup(request: $_model.SetDefaultTranscodeTemplateGroupRequest): Promise<$_model.SetDefaultTranscodeTemplateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultTranscodeTemplateGroupWithOptions(request, runtime);
  }

  /**
   * 设置默认存储
   * 
   * @param request - SetDefaultUploadStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultUploadStorageResponse
   */
  async setDefaultUploadStorageWithOptions(request: $_model.SetDefaultUploadStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultUploadStorageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultUploadStorage",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDefaultUploadStorageResponse>(await this.callApi(params, req, runtime), new $_model.SetDefaultUploadStorageResponse({}));
  }

  /**
   * 设置默认存储
   * 
   * @param request - SetDefaultUploadStorageRequest
   * @returns SetDefaultUploadStorageResponse
   */
  async setDefaultUploadStorage(request: $_model.SetDefaultUploadStorageRequest): Promise<$_model.SetDefaultUploadStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultUploadStorageWithOptions(request, runtime);
  }

  /**
   * 设置默认模版
   * 
   * @param request - SetDefaultVodTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultVodTemplateResponse
   */
  async setDefaultVodTemplateWithOptions(request: $_model.SetDefaultVodTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultVodTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.vodTemplateId)) {
      query["VodTemplateId"] = request.vodTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultVodTemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDefaultVodTemplateResponse>(await this.callApi(params, req, runtime), new $_model.SetDefaultVodTemplateResponse({}));
  }

  /**
   * 设置默认模版
   * 
   * @param request - SetDefaultVodTemplateRequest
   * @returns SetDefaultVodTemplateResponse
   */
  async setDefaultVodTemplate(request: $_model.SetDefaultVodTemplateRequest): Promise<$_model.SetDefaultVodTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultVodTemplateWithOptions(request, runtime);
  }

  /**
   * Sets a watermark template as the default one.
   * 
   * @param request - SetDefaultWatermarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultWatermarkResponse
   */
  async setDefaultWatermarkWithOptions(request: $_model.SetDefaultWatermarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultWatermarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.watermarkId)) {
      query["WatermarkId"] = request.watermarkId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultWatermark",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDefaultWatermarkResponse>(await this.callApi(params, req, runtime), new $_model.SetDefaultWatermarkResponse({}));
  }

  /**
   * Sets a watermark template as the default one.
   * 
   * @param request - SetDefaultWatermarkRequest
   * @returns SetDefaultWatermarkResponse
   */
  async setDefaultWatermark(request: $_model.SetDefaultWatermarkRequest): Promise<$_model.SetDefaultWatermarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultWatermarkWithOptions(request, runtime);
  }

  /**
   * 设置默认水印
   * 
   * @param request - SetDefaultWatermarkConsoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultWatermarkConsoleResponse
   */
  async setDefaultWatermarkConsoleWithOptions(request: $_model.SetDefaultWatermarkConsoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultWatermarkConsoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.watermarkId)) {
      query["WatermarkId"] = request.watermarkId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultWatermarkConsole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDefaultWatermarkConsoleResponse>(await this.callApi(params, req, runtime), new $_model.SetDefaultWatermarkConsoleResponse({}));
  }

  /**
   * 设置默认水印
   * 
   * @param request - SetDefaultWatermarkConsoleRequest
   * @returns SetDefaultWatermarkConsoleResponse
   */
  async setDefaultWatermarkConsole(request: $_model.SetDefaultWatermarkConsoleRequest): Promise<$_model.SetDefaultWatermarkConsoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultWatermarkConsoleWithOptions(request, runtime);
  }

  /**
   * Specifies the media assets that you want to edit in an online editing project.
   * 
   * @param request - SetEditingProjectMaterialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetEditingProjectMaterialsResponse
   */
  async setEditingProjectMaterialsWithOptions(request: $_model.SetEditingProjectMaterialsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetEditingProjectMaterialsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.materialIds)) {
      query["MaterialIds"] = request.materialIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetEditingProjectMaterials",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetEditingProjectMaterialsResponse>(await this.callApi(params, req, runtime), new $_model.SetEditingProjectMaterialsResponse({}));
  }

  /**
   * Specifies the media assets that you want to edit in an online editing project.
   * 
   * @param request - SetEditingProjectMaterialsRequest
   * @returns SetEditingProjectMaterialsResponse
   */
  async setEditingProjectMaterials(request: $_model.SetEditingProjectMaterialsRequest): Promise<$_model.SetEditingProjectMaterialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setEditingProjectMaterialsWithOptions(request, runtime);
  }

  /**
   * 设置L2OssKey配置
   * 
   * @param request - SetL2OssKeyConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetL2OssKeyConfigResponse
   */
  async setL2OssKeyConfigWithOptions(request: $_model.SetL2OssKeyConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetL2OssKeyConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.privateOssAuth)) {
      query["PrivateOssAuth"] = request.privateOssAuth;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetL2OssKeyConfig",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetL2OssKeyConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetL2OssKeyConfigResponse({}));
  }

  /**
   * 设置L2OssKey配置
   * 
   * @param request - SetL2OssKeyConfigRequest
   * @returns SetL2OssKeyConfigResponse
   */
  async setL2OssKeyConfig(request: $_model.SetL2OssKeyConfigRequest): Promise<$_model.SetL2OssKeyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setL2OssKeyConfigWithOptions(request, runtime);
  }

  /**
   * Sets the callback method, callback URL, and event type of an event notification.
   * 
   * @remarks
   * HTTP callbacks and MNS callbacks are supported. For more information, see [Overview](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @param request - SetMessageCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetMessageCallbackResponse
   */
  async setMessageCallbackWithOptions(request: $_model.SetMessageCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetMessageCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSwitch)) {
      query["AuthSwitch"] = request.authSwitch;
    }

    if (!$dara.isNull(request.callbackType)) {
      query["CallbackType"] = request.callbackType;
    }

    if (!$dara.isNull(request.callbackURL)) {
      query["CallbackURL"] = request.callbackURL;
    }

    if (!$dara.isNull(request.eventTypeList)) {
      query["EventTypeList"] = request.eventTypeList;
    }

    if (!$dara.isNull(request.mnsEndpoint)) {
      query["MnsEndpoint"] = request.mnsEndpoint;
    }

    if (!$dara.isNull(request.mnsQueueName)) {
      query["MnsQueueName"] = request.mnsQueueName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetMessageCallback",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetMessageCallbackResponse>(await this.callApi(params, req, runtime), new $_model.SetMessageCallbackResponse({}));
  }

  /**
   * Sets the callback method, callback URL, and event type of an event notification.
   * 
   * @remarks
   * HTTP callbacks and MNS callbacks are supported. For more information, see [Overview](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @param request - SetMessageCallbackRequest
   * @returns SetMessageCallbackResponse
   */
  async setMessageCallback(request: $_model.SetMessageCallbackRequest): Promise<$_model.SetMessageCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setMessageCallbackWithOptions(request, runtime);
  }

  /**
   * 设置云监控配置
   * 
   * @param request - SetMessageCloudMonitorConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetMessageCloudMonitorConfigResponse
   */
  async setMessageCloudMonitorConfigWithOptions(request: $_model.SetMessageCloudMonitorConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetMessageCloudMonitorConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.eventTypeList)) {
      query["EventTypeList"] = request.eventTypeList;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetMessageCloudMonitorConfig",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetMessageCloudMonitorConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetMessageCloudMonitorConfigResponse({}));
  }

  /**
   * 设置云监控配置
   * 
   * @param request - SetMessageCloudMonitorConfigRequest
   * @returns SetMessageCloudMonitorConfigResponse
   */
  async setMessageCloudMonitorConfig(request: $_model.SetMessageCloudMonitorConfigRequest): Promise<$_model.SetMessageCloudMonitorConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setMessageCloudMonitorConfigWithOptions(request, runtime);
  }

  /**
   * 设置存储ACL
   * 
   * @param request - SetStorageACLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetStorageACLResponse
   */
  async setStorageACLWithOptions(request: $_model.SetStorageACLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetStorageACLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.storageACL)) {
      query["StorageACL"] = request.storageACL;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetStorageACL",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetStorageACLResponse>(await this.callApi(params, req, runtime), new $_model.SetStorageACLResponse({}));
  }

  /**
   * 设置存储ACL
   * 
   * @param request - SetStorageACLRequest
   * @returns SetStorageACLResponse
   */
  async setStorageACL(request: $_model.SetStorageACLRequest): Promise<$_model.SetStorageACLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setStorageACLWithOptions(request, runtime);
  }

  /**
   * Enables or disables the certificate of a domain name and modifies the certificate information.
   * 
   * @remarks
   * > This operation is available only in the **China (Shanghai)** region.
   * 
   * @param request - SetVodDomainCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetVodDomainCertificateResponse
   */
  async setVodDomainCertificateWithOptions(request: $_model.SetVodDomainCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetVodDomainCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.SSLPri)) {
      query["SSLPri"] = request.SSLPri;
    }

    if (!$dara.isNull(request.SSLProtocol)) {
      query["SSLProtocol"] = request.SSLProtocol;
    }

    if (!$dara.isNull(request.SSLPub)) {
      query["SSLPub"] = request.SSLPub;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetVodDomainCertificate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetVodDomainCertificateResponse>(await this.callApi(params, req, runtime), new $_model.SetVodDomainCertificateResponse({}));
  }

  /**
   * Enables or disables the certificate of a domain name and modifies the certificate information.
   * 
   * @remarks
   * > This operation is available only in the **China (Shanghai)** region.
   * 
   * @param request - SetVodDomainCertificateRequest
   * @returns SetVodDomainCertificateResponse
   */
  async setVodDomainCertificate(request: $_model.SetVodDomainCertificateRequest): Promise<$_model.SetVodDomainCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setVodDomainCertificateWithOptions(request, runtime);
  }

  /**
   * Enables or disables the SSL certificate of a domain name and updates the certificate information.
   * 
   * @param request - SetVodDomainSSLCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetVodDomainSSLCertificateResponse
   */
  async setVodDomainSSLCertificateWithOptions(request: $_model.SetVodDomainSSLCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetVodDomainSSLCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.certRegion)) {
      query["CertRegion"] = request.certRegion;
    }

    if (!$dara.isNull(request.certType)) {
      query["CertType"] = request.certType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.env)) {
      query["Env"] = request.env;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.SSLPri)) {
      query["SSLPri"] = request.SSLPri;
    }

    if (!$dara.isNull(request.SSLProtocol)) {
      query["SSLProtocol"] = request.SSLProtocol;
    }

    if (!$dara.isNull(request.SSLPub)) {
      query["SSLPub"] = request.SSLPub;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetVodDomainSSLCertificate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetVodDomainSSLCertificateResponse>(await this.callApi(params, req, runtime), new $_model.SetVodDomainSSLCertificateResponse({}));
  }

  /**
   * Enables or disables the SSL certificate of a domain name and updates the certificate information.
   * 
   * @param request - SetVodDomainSSLCertificateRequest
   * @returns SetVodDomainSSLCertificateResponse
   */
  async setVodDomainSSLCertificate(request: $_model.SetVodDomainSSLCertificateRequest): Promise<$_model.SetVodDomainSSLCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setVodDomainSSLCertificateWithOptions(request, runtime);
  }

  /**
   * 设置VOD域名灰度配置
   * 
   * @param request - SetVodDomainStagingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetVodDomainStagingConfigResponse
   */
  async setVodDomainStagingConfigWithOptions(request: $_model.SetVodDomainStagingConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetVodDomainStagingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.functions)) {
      query["Functions"] = request.functions;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetVodDomainStagingConfig",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetVodDomainStagingConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetVodDomainStagingConfigResponse({}));
  }

  /**
   * 设置VOD域名灰度配置
   * 
   * @param request - SetVodDomainStagingConfigRequest
   * @returns SetVodDomainStagingConfigResponse
   */
  async setVodDomainStagingConfig(request: $_model.SetVodDomainStagingConfigRequest): Promise<$_model.SetVodDomainStagingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setVodDomainStagingConfigWithOptions(request, runtime);
  }

  /**
   * 开启VOD域名
   * 
   * @param request - StartVodDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartVodDomainResponse
   */
  async startVodDomainWithOptions(request: $_model.StartVodDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartVodDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartVodDomain",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartVodDomainResponse>(await this.callApi(params, req, runtime), new $_model.StartVodDomainResponse({}));
  }

  /**
   * 开启VOD域名
   * 
   * @param request - StartVodDomainRequest
   * @returns StartVodDomainResponse
   */
  async startVodDomain(request: $_model.StartVodDomainRequest): Promise<$_model.StartVodDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startVodDomainWithOptions(request, runtime);
  }

  /**
   * 停止VOD域名
   * 
   * @param request - StopVodDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopVodDomainResponse
   */
  async stopVodDomainWithOptions(request: $_model.StopVodDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopVodDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopVodDomain",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopVodDomainResponse>(await this.callApi(params, req, runtime), new $_model.StopVodDomainResponse({}));
  }

  /**
   * 停止VOD域名
   * 
   * @param request - StopVodDomainRequest
   * @returns StopVodDomainResponse
   */
  async stopVodDomain(request: $_model.StopVodDomainRequest): Promise<$_model.StopVodDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopVodDomainWithOptions(request, runtime);
  }

  /**
   * 提交AIASR任务
   * 
   * @param request - SubmitAIASRJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAIASRJobResponse
   */
  async submitAIASRJobWithOptions(request: $_model.SubmitAIASRJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAIASRJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIASRConfig)) {
      query["AIASRConfig"] = request.AIASRConfig;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAIASRJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAIASRJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAIASRJobResponse({}));
  }

  /**
   * 提交AIASR任务
   * 
   * @param request - SubmitAIASRJobRequest
   * @returns SubmitAIASRJobResponse
   */
  async submitAIASRJob(request: $_model.SubmitAIASRJobRequest): Promise<$_model.SubmitAIASRJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIASRJobWithOptions(request, runtime);
  }

  /**
   * 提交标题提取任务
   * 
   * @param request - SubmitAICaptionExtractionJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAICaptionExtractionJobResponse
   */
  async submitAICaptionExtractionJobWithOptions(request: $_model.SubmitAICaptionExtractionJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAICaptionExtractionJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIPipelineId)) {
      query["AIPipelineId"] = request.AIPipelineId;
    }

    if (!$dara.isNull(request.jobConfig)) {
      query["JobConfig"] = request.jobConfig;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAICaptionExtractionJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAICaptionExtractionJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAICaptionExtractionJobResponse({}));
  }

  /**
   * 提交标题提取任务
   * 
   * @param request - SubmitAICaptionExtractionJobRequest
   * @returns SubmitAICaptionExtractionJobResponse
   */
  async submitAICaptionExtractionJob(request: $_model.SubmitAICaptionExtractionJobRequest): Promise<$_model.SubmitAICaptionExtractionJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAICaptionExtractionJobWithOptions(request, runtime);
  }

  /**
   * Submits an automated review job for an image. After the job is submitted, the job is processed in an asynchronous manner. The operation may return a response before the job is complete.
   * 
   * @remarks
   * This operation is available only in the Singapore region.
   * 
   * @param request - SubmitAIImageAuditJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAIImageAuditJobResponse
   */
  async submitAIImageAuditJobWithOptions(request: $_model.SubmitAIImageAuditJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAIImageAuditJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaAuditConfiguration)) {
      query["MediaAuditConfiguration"] = request.mediaAuditConfiguration;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAIImageAuditJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAIImageAuditJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAIImageAuditJobResponse({}));
  }

  /**
   * Submits an automated review job for an image. After the job is submitted, the job is processed in an asynchronous manner. The operation may return a response before the job is complete.
   * 
   * @remarks
   * This operation is available only in the Singapore region.
   * 
   * @param request - SubmitAIImageAuditJobRequest
   * @returns SubmitAIImageAuditJobResponse
   */
  async submitAIImageAuditJob(request: $_model.SubmitAIImageAuditJobRequest): Promise<$_model.SubmitAIImageAuditJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIImageAuditJobWithOptions(request, runtime);
  }

  /**
   * Submits jobs of image AI processing.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)** and **China (Shanghai)**.
   * *   After you call this operation, you can call the [GetAIImageJobs](https://help.aliyun.com/document_detail/186923.html) operation to query the job execution result.
   * 
   * @param request - SubmitAIImageJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAIImageJobResponse
   */
  async submitAIImageJobWithOptions(request: $_model.SubmitAIImageJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAIImageJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIPipelineId)) {
      query["AIPipelineId"] = request.AIPipelineId;
    }

    if (!$dara.isNull(request.AITemplateId)) {
      query["AITemplateId"] = request.AITemplateId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAIImageJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAIImageJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAIImageJobResponse({}));
  }

  /**
   * Submits jobs of image AI processing.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)** and **China (Shanghai)**.
   * *   After you call this operation, you can call the [GetAIImageJobs](https://help.aliyun.com/document_detail/186923.html) operation to query the job execution result.
   * 
   * @param request - SubmitAIImageJobRequest
   * @returns SubmitAIImageJobResponse
   */
  async submitAIImageJob(request: $_model.SubmitAIImageJobRequest): Promise<$_model.SubmitAIImageJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIImageJobWithOptions(request, runtime);
  }

  /**
   * Submits a smart tagging or video fingerprinting job.
   * 
   * @remarks
   *   **Make sure that you understand the billing method and price of ApsaraVideo VOD before you call this operation. You are charged for using the smart tagging and video fingerprinting features. For more information, see [Billing of video AI](~~188310#section-g7l-s3o-9ng~~).**
   * *   Regions that support the video fingerprinting feature: **China (Beijing)**, **China (Shanghai)**, and **Singapore**. Regions that support the smart tagging feature: **China (Beijing)** and **China (Shanghai)**.
   * *   You need to enable the video fingerprinting feature or the smart tagging feature before you can call this operation to submit jobs. For more information, see [Overview](https://help.aliyun.com/document_detail/101148.html).
   * *   If this is the first time you use the video fingerprinting feature, you must submit a ticket to apply for using the media fingerprint library for free. Otherwise, the video fingerprinting feature will be affected. For more information about how to submit a ticket, see [Contact us](https://help.aliyun.com/document_detail/464625.html).
   * *   After you submit an AI job, ApsaraVideo VOD asynchronously processes the job. The operation may return a response before the job is complete. You can configure the [Event Notification](https://help.aliyun.com/document_detail/55627.html) feature and set the callback event to **AI Processing Completed**. After you receive the event notification, you can query the execution result of the AI job.
   * 
   * @param request - SubmitAIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAIJobResponse
   */
  async submitAIJobWithOptions(request: $_model.SubmitAIJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAIJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.types)) {
      query["Types"] = request.types;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAIJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAIJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAIJobResponse({}));
  }

  /**
   * Submits a smart tagging or video fingerprinting job.
   * 
   * @remarks
   *   **Make sure that you understand the billing method and price of ApsaraVideo VOD before you call this operation. You are charged for using the smart tagging and video fingerprinting features. For more information, see [Billing of video AI](~~188310#section-g7l-s3o-9ng~~).**
   * *   Regions that support the video fingerprinting feature: **China (Beijing)**, **China (Shanghai)**, and **Singapore**. Regions that support the smart tagging feature: **China (Beijing)** and **China (Shanghai)**.
   * *   You need to enable the video fingerprinting feature or the smart tagging feature before you can call this operation to submit jobs. For more information, see [Overview](https://help.aliyun.com/document_detail/101148.html).
   * *   If this is the first time you use the video fingerprinting feature, you must submit a ticket to apply for using the media fingerprint library for free. Otherwise, the video fingerprinting feature will be affected. For more information about how to submit a ticket, see [Contact us](https://help.aliyun.com/document_detail/464625.html).
   * *   After you submit an AI job, ApsaraVideo VOD asynchronously processes the job. The operation may return a response before the job is complete. You can configure the [Event Notification](https://help.aliyun.com/document_detail/55627.html) feature and set the callback event to **AI Processing Completed**. After you receive the event notification, you can query the execution result of the AI job.
   * 
   * @param request - SubmitAIJobRequest
   * @returns SubmitAIJobResponse
   */
  async submitAIJob(request: $_model.SubmitAIJobRequest): Promise<$_model.SubmitAIJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIJobWithOptions(request, runtime);
  }

  /**
   * Submits an automated review job for a media file. After the job is submitted, ApsaraVideo VOD asynchronously processes the job. Therefore, the operation may return a response before the job is complete.
   * 
   * @remarks
   *   **Make sure that you understand the billing methods and price of ApsaraVideo VOD before you call this operation. You are charged for using the automated review feature. For more information about billing, submit a ticket or contact your account manager.**
   * *   You can call this operation only in the **China (Shanghai)**, **China (Beijing)**, and **Singapore** regions.
   * *   For more information, see [Automated review](https://help.aliyun.com/document_detail/101148.html).
   * *   After an automated review job is complete, the images generated during the review are stored in the VOD bucket for two weeks free of charge. The images are automatically deleted after two weeks.
   * 
   * @param request - SubmitAIMediaAuditJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAIMediaAuditJobResponse
   */
  async submitAIMediaAuditJobWithOptions(request: $_model.SubmitAIMediaAuditJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAIMediaAuditJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaAuditConfiguration)) {
      query["MediaAuditConfiguration"] = request.mediaAuditConfiguration;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAIMediaAuditJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAIMediaAuditJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAIMediaAuditJobResponse({}));
  }

  /**
   * Submits an automated review job for a media file. After the job is submitted, ApsaraVideo VOD asynchronously processes the job. Therefore, the operation may return a response before the job is complete.
   * 
   * @remarks
   *   **Make sure that you understand the billing methods and price of ApsaraVideo VOD before you call this operation. You are charged for using the automated review feature. For more information about billing, submit a ticket or contact your account manager.**
   * *   You can call this operation only in the **China (Shanghai)**, **China (Beijing)**, and **Singapore** regions.
   * *   For more information, see [Automated review](https://help.aliyun.com/document_detail/101148.html).
   * *   After an automated review job is complete, the images generated during the review are stored in the VOD bucket for two weeks free of charge. The images are automatically deleted after two weeks.
   * 
   * @param request - SubmitAIMediaAuditJobRequest
   * @returns SubmitAIMediaAuditJobResponse
   */
  async submitAIMediaAuditJob(request: $_model.SubmitAIMediaAuditJobRequest): Promise<$_model.SubmitAIMediaAuditJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIMediaAuditJobWithOptions(request, runtime);
  }

  /**
   * 提交AI智能分类任务
   * 
   * @param request - SubmitAIVideoCategoryJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAIVideoCategoryJobResponse
   */
  async submitAIVideoCategoryJobWithOptions(request: $_model.SubmitAIVideoCategoryJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAIVideoCategoryJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIVideoCategoryConfig)) {
      query["AIVideoCategoryConfig"] = request.AIVideoCategoryConfig;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAIVideoCategoryJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAIVideoCategoryJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAIVideoCategoryJobResponse({}));
  }

  /**
   * 提交AI智能分类任务
   * 
   * @param request - SubmitAIVideoCategoryJobRequest
   * @returns SubmitAIVideoCategoryJobResponse
   */
  async submitAIVideoCategoryJob(request: $_model.SubmitAIVideoCategoryJobRequest): Promise<$_model.SubmitAIVideoCategoryJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIVideoCategoryJobWithOptions(request, runtime);
  }

  /**
   * 提交视频审核任务
   * 
   * @param request - SubmitAIVideoCensorJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAIVideoCensorJobResponse
   */
  async submitAIVideoCensorJobWithOptions(request: $_model.SubmitAIVideoCensorJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAIVideoCensorJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIVideoCensorConfig)) {
      query["AIVideoCensorConfig"] = request.AIVideoCensorConfig;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAIVideoCensorJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAIVideoCensorJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAIVideoCensorJobResponse({}));
  }

  /**
   * 提交视频审核任务
   * 
   * @param request - SubmitAIVideoCensorJobRequest
   * @returns SubmitAIVideoCensorJobResponse
   */
  async submitAIVideoCensorJob(request: $_model.SubmitAIVideoCensorJobRequest): Promise<$_model.SubmitAIVideoCensorJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIVideoCensorJobWithOptions(request, runtime);
  }

  /**
   * 提交智能封面任务
   * 
   * @param request - SubmitAIVideoCoverJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAIVideoCoverJobResponse
   */
  async submitAIVideoCoverJobWithOptions(request: $_model.SubmitAIVideoCoverJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAIVideoCoverJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIVideoCoverConfig)) {
      query["AIVideoCoverConfig"] = request.AIVideoCoverConfig;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAIVideoCoverJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAIVideoCoverJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAIVideoCoverJobResponse({}));
  }

  /**
   * 提交智能封面任务
   * 
   * @param request - SubmitAIVideoCoverJobRequest
   * @returns SubmitAIVideoCoverJobResponse
   */
  async submitAIVideoCoverJob(request: $_model.SubmitAIVideoCoverJobRequest): Promise<$_model.SubmitAIVideoCoverJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIVideoCoverJobWithOptions(request, runtime);
  }

  /**
   * 提交AI人脸识别任务
   * 
   * @param request - SubmitAIVideoFaceRecogJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAIVideoFaceRecogJobResponse
   */
  async submitAIVideoFaceRecogJobWithOptions(request: $_model.SubmitAIVideoFaceRecogJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAIVideoFaceRecogJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIVideoFaceRecogConfig)) {
      query["AIVideoFaceRecogConfig"] = request.AIVideoFaceRecogConfig;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAIVideoFaceRecogJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAIVideoFaceRecogJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAIVideoFaceRecogJobResponse({}));
  }

  /**
   * 提交AI人脸识别任务
   * 
   * @param request - SubmitAIVideoFaceRecogJobRequest
   * @returns SubmitAIVideoFaceRecogJobResponse
   */
  async submitAIVideoFaceRecogJob(request: $_model.SubmitAIVideoFaceRecogJobRequest): Promise<$_model.SubmitAIVideoFaceRecogJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIVideoFaceRecogJobWithOptions(request, runtime);
  }

  /**
   * 提交AI视频色情识别任务
   * 
   * @param request - SubmitAIVideoPornRecogJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAIVideoPornRecogJobResponse
   */
  async submitAIVideoPornRecogJobWithOptions(request: $_model.SubmitAIVideoPornRecogJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAIVideoPornRecogJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIVideoPornRecogConfig)) {
      query["AIVideoPornRecogConfig"] = request.AIVideoPornRecogConfig;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAIVideoPornRecogJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAIVideoPornRecogJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAIVideoPornRecogJobResponse({}));
  }

  /**
   * 提交AI视频色情识别任务
   * 
   * @param request - SubmitAIVideoPornRecogJobRequest
   * @returns SubmitAIVideoPornRecogJobResponse
   */
  async submitAIVideoPornRecogJob(request: $_model.SubmitAIVideoPornRecogJobRequest): Promise<$_model.SubmitAIVideoPornRecogJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIVideoPornRecogJobWithOptions(request, runtime);
  }

  /**
   * 提交AI摘要任务
   * 
   * @param request - SubmitAIVideoSummaryJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAIVideoSummaryJobResponse
   */
  async submitAIVideoSummaryJobWithOptions(request: $_model.SubmitAIVideoSummaryJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAIVideoSummaryJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIVideoSummaryConfig)) {
      query["AIVideoSummaryConfig"] = request.AIVideoSummaryConfig;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAIVideoSummaryJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAIVideoSummaryJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAIVideoSummaryJobResponse({}));
  }

  /**
   * 提交AI摘要任务
   * 
   * @param request - SubmitAIVideoSummaryJobRequest
   * @returns SubmitAIVideoSummaryJobResponse
   */
  async submitAIVideoSummaryJob(request: $_model.SubmitAIVideoSummaryJobRequest): Promise<$_model.SubmitAIVideoSummaryJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIVideoSummaryJobWithOptions(request, runtime);
  }

  /**
   * 提交智能标签任务
   * 
   * @param request - SubmitAIVideoTagJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAIVideoTagJobResponse
   */
  async submitAIVideoTagJobWithOptions(request: $_model.SubmitAIVideoTagJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAIVideoTagJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIVideoTagConfig)) {
      query["AIVideoTagConfig"] = request.AIVideoTagConfig;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAIVideoTagJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAIVideoTagJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAIVideoTagJobResponse({}));
  }

  /**
   * 提交智能标签任务
   * 
   * @param request - SubmitAIVideoTagJobRequest
   * @returns SubmitAIVideoTagJobResponse
   */
  async submitAIVideoTagJob(request: $_model.SubmitAIVideoTagJobRequest): Promise<$_model.SubmitAIVideoTagJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIVideoTagJobWithOptions(request, runtime);
  }

  /**
   * 提交暴力识别任务
   * 
   * @param request - SubmitAIVideoTerrorismRecogJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAIVideoTerrorismRecogJobResponse
   */
  async submitAIVideoTerrorismRecogJobWithOptions(request: $_model.SubmitAIVideoTerrorismRecogJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAIVideoTerrorismRecogJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIVideoTerrorismRecogConfig)) {
      query["AIVideoTerrorismRecogConfig"] = request.AIVideoTerrorismRecogConfig;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAIVideoTerrorismRecogJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAIVideoTerrorismRecogJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAIVideoTerrorismRecogJobResponse({}));
  }

  /**
   * 提交暴力识别任务
   * 
   * @param request - SubmitAIVideoTerrorismRecogJobRequest
   * @returns SubmitAIVideoTerrorismRecogJobResponse
   */
  async submitAIVideoTerrorismRecogJob(request: $_model.SubmitAIVideoTerrorismRecogJobRequest): Promise<$_model.SubmitAIVideoTerrorismRecogJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIVideoTerrorismRecogJobWithOptions(request, runtime);
  }

  /**
   * 提交bucket删除任务
   * 
   * @param request - SubmitBucketDeleteTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitBucketDeleteTaskResponse
   */
  async submitBucketDeleteTaskWithOptions(request: $_model.SubmitBucketDeleteTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitBucketDeleteTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteFiles)) {
      query["DeleteFiles"] = request.deleteFiles;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitBucketDeleteTask",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitBucketDeleteTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitBucketDeleteTaskResponse({}));
  }

  /**
   * 提交bucket删除任务
   * 
   * @param request - SubmitBucketDeleteTaskRequest
   * @returns SubmitBucketDeleteTaskResponse
   */
  async submitBucketDeleteTask(request: $_model.SubmitBucketDeleteTaskRequest): Promise<$_model.SubmitBucketDeleteTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitBucketDeleteTaskWithOptions(request, runtime);
  }

  /**
   * 修改系统存储冗余类型
   * 
   * @param request - SubmitBucketRedundancyTransitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitBucketRedundancyTransitionResponse
   */
  async submitBucketRedundancyTransitionWithOptions(request: $_model.SubmitBucketRedundancyTransitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitBucketRedundancyTransitionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitBucketRedundancyTransition",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitBucketRedundancyTransitionResponse>(await this.callApi(params, req, runtime), new $_model.SubmitBucketRedundancyTransitionResponse({}));
  }

  /**
   * 修改系统存储冗余类型
   * 
   * @param request - SubmitBucketRedundancyTransitionRequest
   * @returns SubmitBucketRedundancyTransitionResponse
   */
  async submitBucketRedundancyTransition(request: $_model.SubmitBucketRedundancyTransitionRequest): Promise<$_model.SubmitBucketRedundancyTransitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitBucketRedundancyTransitionWithOptions(request, runtime);
  }

  /**
   * 提交DNA初始化任务
   * 
   * @param request - SubmitDNAInitializationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDNAInitializationJobResponse
   */
  async submitDNAInitializationJobWithOptions(request: $_model.SubmitDNAInitializationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDNAInitializationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.recentNumber)) {
      query["RecentNumber"] = request.recentNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitDNAInitializationJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitDNAInitializationJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitDNAInitializationJobResponse({}));
  }

  /**
   * 提交DNA初始化任务
   * 
   * @param request - SubmitDNAInitializationJobRequest
   * @returns SubmitDNAInitializationJobResponse
   */
  async submitDNAInitializationJob(request: $_model.SubmitDNAInitializationJobRequest): Promise<$_model.SubmitDNAInitializationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDNAInitializationJobWithOptions(request, runtime);
  }

  /**
   * Submits a digital watermark extraction job. You can call this operation to asynchronously extract a copyright watermark or user-tracing watermark.
   * 
   * @remarks
   *   **Make sure that you understand the billing methods and price of ApsaraVideo VOD before you call this operation. You are charged for generating and extracting digital watermarks. For more information, see [Billing](~~188310#62b9c940403se~~).**
   * *   This operation is supported only in the **China (Shanghai)** and **China (Beijing)** regions.
   * *   Before you submit a digital watermark extraction job, make sure that the following conditions are met:
   *     *   The video from which you want to extract the watermark is uploaded to the ApsaraVideo VOD.
   *     *   The video from which you want to extract the watermark is longer than 6 minutes.
   * 
   * @param request - SubmitDigitalWatermarkExtractJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDigitalWatermarkExtractJobResponse
   */
  async submitDigitalWatermarkExtractJobWithOptions(request: $_model.SubmitDigitalWatermarkExtractJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDigitalWatermarkExtractJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extractType)) {
      query["ExtractType"] = request.extractType;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitDigitalWatermarkExtractJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitDigitalWatermarkExtractJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitDigitalWatermarkExtractJobResponse({}));
  }

  /**
   * Submits a digital watermark extraction job. You can call this operation to asynchronously extract a copyright watermark or user-tracing watermark.
   * 
   * @remarks
   *   **Make sure that you understand the billing methods and price of ApsaraVideo VOD before you call this operation. You are charged for generating and extracting digital watermarks. For more information, see [Billing](~~188310#62b9c940403se~~).**
   * *   This operation is supported only in the **China (Shanghai)** and **China (Beijing)** regions.
   * *   Before you submit a digital watermark extraction job, make sure that the following conditions are met:
   *     *   The video from which you want to extract the watermark is uploaded to the ApsaraVideo VOD.
   *     *   The video from which you want to extract the watermark is longer than 6 minutes.
   * 
   * @param request - SubmitDigitalWatermarkExtractJobRequest
   * @returns SubmitDigitalWatermarkExtractJobResponse
   */
  async submitDigitalWatermarkExtractJob(request: $_model.SubmitDigitalWatermarkExtractJobRequest): Promise<$_model.SubmitDigitalWatermarkExtractJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDigitalWatermarkExtractJobWithOptions(request, runtime);
  }

  /**
   * Submits a frame animation job and starts asynchronous processing.
   * 
   * @remarks
   *   You can capture a part of a video and generate animated images only when the video is in the **Uploaded**, **Transcoding**, **Normal**, **Reviewing**, or **Flagged** state.
   * *   The fees for frame animation are included in your video transcoding bill. You are charged based on the output resolution and the duration. For more information, see [Billing of basic services](https://help.aliyun.com/document_detail/188308.html).
   * ### QPS limits
   * You can call this operation up to 30 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit on API operations](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - SubmitDynamicImageJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDynamicImageJobResponse
   */
  async submitDynamicImageJobWithOptions(request: $_model.SubmitDynamicImageJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDynamicImageJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dynamicImageTemplateId)) {
      query["DynamicImageTemplateId"] = request.dynamicImageTemplateId;
    }

    if (!$dara.isNull(request.overrideParams)) {
      query["OverrideParams"] = request.overrideParams;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitDynamicImageJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitDynamicImageJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitDynamicImageJobResponse({}));
  }

  /**
   * Submits a frame animation job and starts asynchronous processing.
   * 
   * @remarks
   *   You can capture a part of a video and generate animated images only when the video is in the **Uploaded**, **Transcoding**, **Normal**, **Reviewing**, or **Flagged** state.
   * *   The fees for frame animation are included in your video transcoding bill. You are charged based on the output resolution and the duration. For more information, see [Billing of basic services](https://help.aliyun.com/document_detail/188308.html).
   * ### QPS limits
   * You can call this operation up to 30 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit on API operations](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - SubmitDynamicImageJobRequest
   * @returns SubmitDynamicImageJobResponse
   */
  async submitDynamicImageJob(request: $_model.SubmitDynamicImageJobRequest): Promise<$_model.SubmitDynamicImageJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDynamicImageJobWithOptions(request, runtime);
  }

  /**
   * 直播剪辑
   * 
   * @param request - SubmitLiveEditingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitLiveEditingResponse
   */
  async submitLiveEditingWithOptions(request: $_model.SubmitLiveEditingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitLiveEditingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clips)) {
      query["Clips"] = request.clips;
    }

    if (!$dara.isNull(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.mediaMetadata)) {
      query["MediaMetadata"] = request.mediaMetadata;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.produceConfig)) {
      query["ProduceConfig"] = request.produceConfig;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitLiveEditing",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitLiveEditingResponse>(await this.callApi(params, req, runtime), new $_model.SubmitLiveEditingResponse({}));
  }

  /**
   * 直播剪辑
   * 
   * @param request - SubmitLiveEditingRequest
   * @returns SubmitLiveEditingResponse
   */
  async submitLiveEditing(request: $_model.SubmitLiveEditingRequest): Promise<$_model.SubmitLiveEditingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitLiveEditingWithOptions(request, runtime);
  }

  /**
   * Deletes a video fingerprinting job.
   * 
   * @remarks
   * Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * 
   * @param request - SubmitMediaDNADeleteJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitMediaDNADeleteJobResponse
   */
  async submitMediaDNADeleteJobWithOptions(request: $_model.SubmitMediaDNADeleteJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitMediaDNADeleteJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitMediaDNADeleteJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitMediaDNADeleteJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitMediaDNADeleteJobResponse({}));
  }

  /**
   * Deletes a video fingerprinting job.
   * 
   * @remarks
   * Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * 
   * @param request - SubmitMediaDNADeleteJobRequest
   * @returns SubmitMediaDNADeleteJobResponse
   */
  async submitMediaDNADeleteJob(request: $_model.SubmitMediaDNADeleteJobRequest): Promise<$_model.SubmitMediaDNADeleteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitMediaDNADeleteJobWithOptions(request, runtime);
  }

  /**
   * 提交媒资导出任务
   * 
   * @param request - SubmitMediaExportJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitMediaExportJobResponse
   */
  async submitMediaExportJobWithOptions(request: $_model.SubmitMediaExportJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitMediaExportJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.match)) {
      query["Match"] = request.match;
    }

    if (!$dara.isNull(request.mediaExportConfig)) {
      query["MediaExportConfig"] = request.mediaExportConfig;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitMediaExportJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitMediaExportJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitMediaExportJobResponse({}));
  }

  /**
   * 提交媒资导出任务
   * 
   * @param request - SubmitMediaExportJobRequest
   * @returns SubmitMediaExportJobResponse
   */
  async submitMediaExportJob(request: $_model.SubmitMediaExportJobRequest): Promise<$_model.SubmitMediaExportJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitMediaExportJobWithOptions(request, runtime);
  }

  /**
   * Transcodes a video by using the production studio.
   * 
   * @remarks
   *   During video preprocessing, videos are transcoded to meet the playback requirements of the production studio. Therefore, **you are charged for video preprocessing**. For more information about billing, see [Billing of production studios](https://help.aliyun.com/document_detail/64531.html).
   * *   You can obtain the preprocessing result in the [TranscodeComplete](https://help.aliyun.com/document_detail/55638.html) event notification. If **Preprocess=true** is returned in the event notification, the video is transcoded.
   * 
   * @param request - SubmitPreprocessJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitPreprocessJobsResponse
   */
  async submitPreprocessJobsWithOptions(request: $_model.SubmitPreprocessJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitPreprocessJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.preprocessType)) {
      query["PreprocessType"] = request.preprocessType;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitPreprocessJobs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitPreprocessJobsResponse>(await this.callApi(params, req, runtime), new $_model.SubmitPreprocessJobsResponse({}));
  }

  /**
   * Transcodes a video by using the production studio.
   * 
   * @remarks
   *   During video preprocessing, videos are transcoded to meet the playback requirements of the production studio. Therefore, **you are charged for video preprocessing**. For more information about billing, see [Billing of production studios](https://help.aliyun.com/document_detail/64531.html).
   * *   You can obtain the preprocessing result in the [TranscodeComplete](https://help.aliyun.com/document_detail/55638.html) event notification. If **Preprocess=true** is returned in the event notification, the video is transcoded.
   * 
   * @param request - SubmitPreprocessJobsRequest
   * @returns SubmitPreprocessJobsResponse
   */
  async submitPreprocessJobs(request: $_model.SubmitPreprocessJobsRequest): Promise<$_model.SubmitPreprocessJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitPreprocessJobsWithOptions(request, runtime);
  }

  /**
   * 提交预处理任务
   * 
   * @param request - SubmitPreprocessJobsConsoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitPreprocessJobsConsoleResponse
   */
  async submitPreprocessJobsConsoleWithOptions(request: $_model.SubmitPreprocessJobsConsoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitPreprocessJobsConsoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.preprocessType)) {
      query["PreprocessType"] = request.preprocessType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitPreprocessJobsConsole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitPreprocessJobsConsoleResponse>(await this.callApi(params, req, runtime), new $_model.SubmitPreprocessJobsConsoleResponse({}));
  }

  /**
   * 提交预处理任务
   * 
   * @param request - SubmitPreprocessJobsConsoleRequest
   * @returns SubmitPreprocessJobsConsoleResponse
   */
  async submitPreprocessJobsConsole(request: $_model.SubmitPreprocessJobsConsoleRequest): Promise<$_model.SubmitPreprocessJobsConsoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitPreprocessJobsConsoleWithOptions(request, runtime);
  }

  /**
   * Submits a snapshot job for a video and starts asynchronous snapshot processing.
   * 
   * @remarks
   *   Only snapshots in the JPG format are generated.
   * *   After a snapshot is captured, the [SnapshotComplete](https://help.aliyun.com/document_detail/57337.html) callback is fired and EventType=SnapshotComplete, SubType=SpecifiedTime is returned.
   * ### [](#qps-)QPS limits
   * You can call this operation up to 30 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param tmpReq - SubmitSnapshotJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSnapshotJobResponse
   */
  async submitSnapshotJobWithOptions(tmpReq: $_model.SubmitSnapshotJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSnapshotJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitSnapshotJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.specifiedOffsetTimes)) {
      request.specifiedOffsetTimesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.specifiedOffsetTimes, "SpecifiedOffsetTimes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.count)) {
      query["Count"] = request.count;
    }

    if (!$dara.isNull(request.height)) {
      query["Height"] = request.height;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.snapshotTemplateId)) {
      query["SnapshotTemplateId"] = request.snapshotTemplateId;
    }

    if (!$dara.isNull(request.specifiedOffsetTime)) {
      query["SpecifiedOffsetTime"] = request.specifiedOffsetTime;
    }

    if (!$dara.isNull(request.specifiedOffsetTimesShrink)) {
      query["SpecifiedOffsetTimes"] = request.specifiedOffsetTimesShrink;
    }

    if (!$dara.isNull(request.spriteSnapshotConfig)) {
      query["SpriteSnapshotConfig"] = request.spriteSnapshotConfig;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    if (!$dara.isNull(request.width)) {
      query["Width"] = request.width;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSnapshotJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSnapshotJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSnapshotJobResponse({}));
  }

  /**
   * Submits a snapshot job for a video and starts asynchronous snapshot processing.
   * 
   * @remarks
   *   Only snapshots in the JPG format are generated.
   * *   After a snapshot is captured, the [SnapshotComplete](https://help.aliyun.com/document_detail/57337.html) callback is fired and EventType=SnapshotComplete, SubType=SpecifiedTime is returned.
   * ### [](#qps-)QPS limits
   * You can call this operation up to 30 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - SubmitSnapshotJobRequest
   * @returns SubmitSnapshotJobResponse
   */
  async submitSnapshotJob(request: $_model.SubmitSnapshotJobRequest): Promise<$_model.SubmitSnapshotJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSnapshotJobWithOptions(request, runtime);
  }

  /**
   * Submits a transcoding job to start transcoding in an asynchronous manner.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   **Make sure that you understand the billing methods and prices of ApsaraVideo VOD before you call this operation. For more information about billing of the transcoding feature, see [Billing of basic services](~~188308#section-ejb-nii-nqa~~).**
   * *   You can transcode a video only in the Uploaded, Normal, or Reviewing state.
   * *   You can obtain the transcoding results from the [StreamTranscodeComplete](https://help.aliyun.com/document_detail/55636.html) or [TranscodeComplete](https://help.aliyun.com/document_detail/55638.html) callback.
   * *   You can call this operation to dynamically override the subtitle URL in an HTTP Live Streaming (HLS) packaging task. If the packaging task does not contain subtitles, we recommend that you specify the ID of the specific packaging template group when you upload the video instead of calling this operation.
   * 
   * @param request - SubmitTranscodeJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitTranscodeJobsResponse
   */
  async submitTranscodeJobsWithOptions(request: $_model.SubmitTranscodeJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitTranscodeJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.encryptConfig)) {
      query["EncryptConfig"] = request.encryptConfig;
    }

    if (!$dara.isNull(request.overrideParams)) {
      query["OverrideParams"] = request.overrideParams;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.templateGroupId)) {
      query["TemplateGroupId"] = request.templateGroupId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitTranscodeJobs",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitTranscodeJobsResponse>(await this.callApi(params, req, runtime), new $_model.SubmitTranscodeJobsResponse({}));
  }

  /**
   * Submits a transcoding job to start transcoding in an asynchronous manner.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   **Make sure that you understand the billing methods and prices of ApsaraVideo VOD before you call this operation. For more information about billing of the transcoding feature, see [Billing of basic services](~~188308#section-ejb-nii-nqa~~).**
   * *   You can transcode a video only in the Uploaded, Normal, or Reviewing state.
   * *   You can obtain the transcoding results from the [StreamTranscodeComplete](https://help.aliyun.com/document_detail/55636.html) or [TranscodeComplete](https://help.aliyun.com/document_detail/55638.html) callback.
   * *   You can call this operation to dynamically override the subtitle URL in an HTTP Live Streaming (HLS) packaging task. If the packaging task does not contain subtitles, we recommend that you specify the ID of the specific packaging template group when you upload the video instead of calling this operation.
   * 
   * @param request - SubmitTranscodeJobsRequest
   * @returns SubmitTranscodeJobsResponse
   */
  async submitTranscodeJobs(request: $_model.SubmitTranscodeJobsRequest): Promise<$_model.SubmitTranscodeJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitTranscodeJobsWithOptions(request, runtime);
  }

  /**
   * Initiates a workflow to process media files.
   * 
   * @remarks
   * **Make sure that you understand the billing method and price of ApsaraVideo VOD before you call this operation. When you use workflows to process videos, you may be charged for transcoding, encryption, and automated review. For more information, see [Billing overview](https://help.aliyun.com/document_detail/188307.html).**
   * * You can call this operation to initiate a VOD workflow to process media files. For more information, see [Workflows](https://help.aliyun.com/document_detail/115347.html).
   * 
   * @param request - SubmitWorkflowJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitWorkflowJobResponse
   */
  async submitWorkflowJobWithOptions(request: $_model.SubmitWorkflowJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitWorkflowJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitWorkflowJob",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitWorkflowJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitWorkflowJobResponse({}));
  }

  /**
   * Initiates a workflow to process media files.
   * 
   * @remarks
   * **Make sure that you understand the billing method and price of ApsaraVideo VOD before you call this operation. When you use workflows to process videos, you may be charged for transcoding, encryption, and automated review. For more information, see [Billing overview](https://help.aliyun.com/document_detail/188307.html).**
   * * You can call this operation to initiate a VOD workflow to process media files. For more information, see [Workflows](https://help.aliyun.com/document_detail/115347.html).
   * 
   * @param request - SubmitWorkflowJobRequest
   * @returns SubmitWorkflowJobResponse
   */
  async submitWorkflowJob(request: $_model.SubmitWorkflowJobRequest): Promise<$_model.SubmitWorkflowJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitWorkflowJobWithOptions(request, runtime);
  }

  /**
   * 同步老用户生产账号映射信息并订阅自有bucketoss消息
   * 
   * @param request - SyncUserProdAccountAndBucketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncUserProdAccountAndBucketResponse
   */
  async syncUserProdAccountAndBucketWithOptions(request: $_model.SyncUserProdAccountAndBucketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncUserProdAccountAndBucketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindOssNotification)) {
      query["BindOssNotification"] = request.bindOssNotification;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncUserProdAccountAndBucket",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncUserProdAccountAndBucketResponse>(await this.callApi(params, req, runtime), new $_model.SyncUserProdAccountAndBucketResponse({}));
  }

  /**
   * 同步老用户生产账号映射信息并订阅自有bucketoss消息
   * 
   * @param request - SyncUserProdAccountAndBucketRequest
   * @returns SyncUserProdAccountAndBucketResponse
   */
  async syncUserProdAccountAndBucket(request: $_model.SyncUserProdAccountAndBucketRequest): Promise<$_model.SyncUserProdAccountAndBucketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncUserProdAccountAndBucketWithOptions(request, runtime);
  }

  /**
   * 资源打用户标签
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

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
      version: "2017-03-21",
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
   * 资源打用户标签
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 打标签
   * 
   * @param request - TagVodResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagVodResourcesResponse
   */
  async tagVodResourcesWithOptions(request: $_model.TagVodResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagVodResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

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
      action: "TagVodResources",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagVodResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagVodResourcesResponse({}));
  }

  /**
   * 打标签
   * 
   * @param request - TagVodResourcesRequest
   * @returns TagVodResourcesResponse
   */
  async tagVodResources(request: $_model.TagVodResourcesRequest): Promise<$_model.TagVodResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagVodResourcesWithOptions(request, runtime);
  }

  /**
   * 中止bucket删除任务
   * 
   * @param request - TerminateBucketDeleteTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TerminateBucketDeleteTaskResponse
   */
  async terminateBucketDeleteTaskWithOptions(request: $_model.TerminateBucketDeleteTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TerminateBucketDeleteTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TerminateBucketDeleteTask",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TerminateBucketDeleteTaskResponse>(await this.callApi(params, req, runtime), new $_model.TerminateBucketDeleteTaskResponse({}));
  }

  /**
   * 中止bucket删除任务
   * 
   * @param request - TerminateBucketDeleteTaskRequest
   * @returns TerminateBucketDeleteTaskResponse
   */
  async terminateBucketDeleteTask(request: $_model.TerminateBucketDeleteTaskRequest): Promise<$_model.TerminateBucketDeleteTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.terminateBucketDeleteTaskWithOptions(request, runtime);
  }

  /**
   * 去除标签
   * 
   * @param request - UnTagVodResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnTagVodResourcesResponse
   */
  async unTagVodResourcesWithOptions(request: $_model.UnTagVodResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnTagVodResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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
      action: "UnTagVodResources",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnTagVodResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UnTagVodResourcesResponse({}));
  }

  /**
   * 去除标签
   * 
   * @param request - UnTagVodResourcesRequest
   * @returns UnTagVodResourcesResponse
   */
  async unTagVodResources(request: $_model.UnTagVodResourcesRequest): Promise<$_model.UnTagVodResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unTagVodResourcesWithOptions(request, runtime);
  }

  /**
   * 资源去除用户标签
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      version: "2017-03-21",
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
   * 资源去除用户标签
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies an AI template.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * *   After you call the [AddAITemplate](https://help.aliyun.com/document_detail/102930.html) operation to add an AI template, you can call this operation to modify the AI template.
   * 
   * @param request - UpdateAITemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAITemplateResponse
   */
  async updateAITemplateWithOptions(request: $_model.UpdateAITemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAITemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAITemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAITemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAITemplateResponse({}));
  }

  /**
   * Modifies an AI template.
   * 
   * @remarks
   *   Regions that support this operation: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * *   After you call the [AddAITemplate](https://help.aliyun.com/document_detail/102930.html) operation to add an AI template, you can call this operation to modify the AI template.
   * 
   * @param request - UpdateAITemplateRequest
   * @returns UpdateAITemplateResponse
   */
  async updateAITemplate(request: $_model.UpdateAITemplateRequest): Promise<$_model.UpdateAITemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAITemplateWithOptions(request, runtime);
  }

  /**
   * Updates the information about an application.
   * 
   * @remarks
   * ## QPS limit
   * A single user can perform a maximum of 30 queries per second (QPS). Throttling is triggered when the number of calls per second exceeds the QPS limit. The throttling may affect your business. Thus, we recommend that you observe the QPS limit on this operation.
   * 
   * @param request - UpdateAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppInfoResponse
   */
  async updateAppInfoWithOptions(request: $_model.UpdateAppInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppInfoResponse({}));
  }

  /**
   * Updates the information about an application.
   * 
   * @remarks
   * ## QPS limit
   * A single user can perform a maximum of 30 queries per second (QPS). Throttling is triggered when the number of calls per second exceeds the QPS limit. The throttling may affect your business. Thus, we recommend that you observe the QPS limit on this operation.
   * 
   * @param request - UpdateAppInfoRequest
   * @returns UpdateAppInfoResponse
   */
  async updateAppInfo(request: $_model.UpdateAppInfoRequest): Promise<$_model.UpdateAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAppInfoWithOptions(request, runtime);
  }

  /**
   * 更新App策略
   * 
   * @param request - UpdateAppPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppPolicyResponse
   */
  async updateAppPolicyWithOptions(request: $_model.UpdateAppPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyValue)) {
      query["PolicyValue"] = request.policyValue;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppPolicy",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppPolicyResponse({}));
  }

  /**
   * 更新App策略
   * 
   * @param request - UpdateAppPolicyRequest
   * @returns UpdateAppPolicyResponse
   */
  async updateAppPolicy(request: $_model.UpdateAppPolicyRequest): Promise<$_model.UpdateAppPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAppPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the information about multiple auxiliary media assets such as watermark images, subtitle files, and materials in a batch based on IDs. You can modify information such as the title, description, tags, and category.
   * 
   * @remarks
   * You can modify the information about up to 20 auxiliary media assets at a time.
   * 
   * @param request - UpdateAttachedMediaInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAttachedMediaInfosResponse
   */
  async updateAttachedMediaInfosWithOptions(request: $_model.UpdateAttachedMediaInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAttachedMediaInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.updateContent)) {
      query["UpdateContent"] = request.updateContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAttachedMediaInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAttachedMediaInfosResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAttachedMediaInfosResponse({}));
  }

  /**
   * Modifies the information about multiple auxiliary media assets such as watermark images, subtitle files, and materials in a batch based on IDs. You can modify information such as the title, description, tags, and category.
   * 
   * @remarks
   * You can modify the information about up to 20 auxiliary media assets at a time.
   * 
   * @param request - UpdateAttachedMediaInfosRequest
   * @returns UpdateAttachedMediaInfosResponse
   */
  async updateAttachedMediaInfos(request: $_model.UpdateAttachedMediaInfosRequest): Promise<$_model.UpdateAttachedMediaInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAttachedMediaInfosWithOptions(request, runtime);
  }

  /**
   * Modifies a video category.
   * 
   * @remarks
   * After you create a category, you can call this operation to modify the name of the category. If you have classified specific media resources to this category, the category names that are labeled on the media resources are automatically updated.
   * 
   * @param request - UpdateCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCategoryResponse
   */
  async updateCategoryWithOptions(request: $_model.UpdateCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!$dara.isNull(request.cateName)) {
      query["CateName"] = request.cateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCategory",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCategoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCategoryResponse({}));
  }

  /**
   * Modifies a video category.
   * 
   * @remarks
   * After you create a category, you can call this operation to modify the name of the category. If you have classified specific media resources to this category, the category names that are labeled on the media resources are automatically updated.
   * 
   * @param request - UpdateCategoryRequest
   * @returns UpdateCategoryResponse
   */
  async updateCategory(request: $_model.UpdateCategoryRequest): Promise<$_model.UpdateCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCategoryWithOptions(request, runtime);
  }

  /**
   * 更新模版组
   * 
   * @param request - UpdateCustomTemplateAndGroupConsoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomTemplateAndGroupConsoleResponse
   */
  async updateCustomTemplateAndGroupConsoleWithOptions(request: $_model.UpdateCustomTemplateAndGroupConsoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomTemplateAndGroupConsoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configs)) {
      query["Configs"] = request.configs;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomTemplateAndGroupConsole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomTemplateAndGroupConsoleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomTemplateAndGroupConsoleResponse({}));
  }

  /**
   * 更新模版组
   * 
   * @param request - UpdateCustomTemplateAndGroupConsoleRequest
   * @returns UpdateCustomTemplateAndGroupConsoleResponse
   */
  async updateCustomTemplateAndGroupConsole(request: $_model.UpdateCustomTemplateAndGroupConsoleRequest): Promise<$_model.UpdateCustomTemplateAndGroupConsoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomTemplateAndGroupConsoleWithOptions(request, runtime);
  }

  /**
   * 更新视频DNADB
   * 
   * @param request - UpdateDNADBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDNADBResponse
   */
  async updateDNADBWithOptions(request: $_model.UpdateDNADBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDNADBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBDescription)) {
      query["DBDescription"] = request.DBDescription;
    }

    if (!$dara.isNull(request.DBId)) {
      query["DBId"] = request.DBId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDNADB",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDNADBResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDNADBResponse({}));
  }

  /**
   * 更新视频DNADB
   * 
   * @param request - UpdateDNADBRequest
   * @returns UpdateDNADBResponse
   */
  async updateDNADB(request: $_model.UpdateDNADBRequest): Promise<$_model.UpdateDNADBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDNADBWithOptions(request, runtime);
  }

  /**
   * Modifies an online editing project.
   * 
   * @param request - UpdateEditingProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEditingProjectResponse
   */
  async updateEditingProjectWithOptions(request: $_model.UpdateEditingProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEditingProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.timeline)) {
      query["Timeline"] = request.timeline;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEditingProject",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEditingProjectResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEditingProjectResponse({}));
  }

  /**
   * Modifies an online editing project.
   * 
   * @param request - UpdateEditingProjectRequest
   * @returns UpdateEditingProjectResponse
   */
  async updateEditingProject(request: $_model.UpdateEditingProjectRequest): Promise<$_model.UpdateEditingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEditingProjectWithOptions(request, runtime);
  }

  /**
   * Modifies the information about one or more images at a time.
   * 
   * @remarks
   *   You can call this operation to modify information such as the title, tags, description, and category about images based on image IDs. You must pass in the parameters that you want to modify. Otherwise, parameter configurations are not overwritten.
   * *   You can modify the information about up to 20 images at a time.
   * 
   * @param request - UpdateImageInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateImageInfosResponse
   */
  async updateImageInfosWithOptions(request: $_model.UpdateImageInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateImageInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.updateContent)) {
      query["UpdateContent"] = request.updateContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateImageInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateImageInfosResponse>(await this.callApi(params, req, runtime), new $_model.UpdateImageInfosResponse({}));
  }

  /**
   * Modifies the information about one or more images at a time.
   * 
   * @remarks
   *   You can call this operation to modify information such as the title, tags, description, and category about images based on image IDs. You must pass in the parameters that you want to modify. Otherwise, parameter configurations are not overwritten.
   * *   You can modify the information about up to 20 images at a time.
   * 
   * @param request - UpdateImageInfosRequest
   * @returns UpdateImageInfosResponse
   */
  async updateImageInfos(request: $_model.UpdateImageInfosRequest): Promise<$_model.UpdateImageInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateImageInfosWithOptions(request, runtime);
  }

  /**
   * 修改智能策略信息
   * 
   * @param request - UpdateIntelligentStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIntelligentStrategyResponse
   */
  async updateIntelligentStrategyWithOptions(request: $_model.UpdateIntelligentStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIntelligentStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conditions)) {
      query["Conditions"] = request.conditions;
    }

    if (!$dara.isNull(request.executeParams)) {
      query["ExecuteParams"] = request.executeParams;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIntelligentStrategy",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIntelligentStrategyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIntelligentStrategyResponse({}));
  }

  /**
   * 修改智能策略信息
   * 
   * @param request - UpdateIntelligentStrategyRequest
   * @returns UpdateIntelligentStrategyResponse
   */
  async updateIntelligentStrategy(request: $_model.UpdateIntelligentStrategyRequest): Promise<$_model.UpdateIntelligentStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIntelligentStrategyWithOptions(request, runtime);
  }

  /**
   * 更新媒资生命周期规则
   * 
   * @param request - UpdateMediaLifecycleRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaLifecycleRuleResponse
   */
  async updateMediaLifecycleRuleWithOptions(request: $_model.UpdateMediaLifecycleRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaLifecycleRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.updateContent)) {
      query["UpdateContent"] = request.updateContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMediaLifecycleRule",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaLifecycleRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaLifecycleRuleResponse({}));
  }

  /**
   * 更新媒资生命周期规则
   * 
   * @param request - UpdateMediaLifecycleRuleRequest
   * @returns UpdateMediaLifecycleRuleResponse
   */
  async updateMediaLifecycleRule(request: $_model.UpdateMediaLifecycleRuleRequest): Promise<$_model.UpdateMediaLifecycleRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaLifecycleRuleWithOptions(request, runtime);
  }

  /**
   * Modifies the storage classes of media assets.
   * 
   * @remarks
   *   This operation is an asynchronous operation. You can call this operation to modify the storage classes of media assets. After the storage class is modified, a callback notification is sent.
   * *   If the storage class of the media asset is Archive or Cold Archive and you call this operation to modify the storage class of the media asset, the media asset is automatically restored before the storage class is modified. You do not need to call the RestoreMedia operation to restore the media asset. You must specify the restoration priority for Cold Archive objects. Default configuration: RestoreTier=Standard.
   * *   Media assets whose storage classes are being modified cannot be used or processed.
   * *   Non-Standard objects have minimum storage durations. If an object is stored for less than the minimum storage duration, the storage class of the object cannot be changed. The following content describes the minimum storage durations for objects in different storage classes: IA or IA storage for source files: 30 days, Archive or Archive storage for source files: 60 days, Cold Archive or Cold Archive for source files: 180 days.
   * 
   * @param request - UpdateMediaStorageClassRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaStorageClassResponse
   */
  async updateMediaStorageClassWithOptions(request: $_model.UpdateMediaStorageClassRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaStorageClassResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowUpdateWithoutTimeLimit)) {
      query["AllowUpdateWithoutTimeLimit"] = request.allowUpdateWithoutTimeLimit;
    }

    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    if (!$dara.isNull(request.restoreTier)) {
      query["RestoreTier"] = request.restoreTier;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.storageClass)) {
      query["StorageClass"] = request.storageClass;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMediaStorageClass",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaStorageClassResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaStorageClassResponse({}));
  }

  /**
   * Modifies the storage classes of media assets.
   * 
   * @remarks
   *   This operation is an asynchronous operation. You can call this operation to modify the storage classes of media assets. After the storage class is modified, a callback notification is sent.
   * *   If the storage class of the media asset is Archive or Cold Archive and you call this operation to modify the storage class of the media asset, the media asset is automatically restored before the storage class is modified. You do not need to call the RestoreMedia operation to restore the media asset. You must specify the restoration priority for Cold Archive objects. Default configuration: RestoreTier=Standard.
   * *   Media assets whose storage classes are being modified cannot be used or processed.
   * *   Non-Standard objects have minimum storage durations. If an object is stored for less than the minimum storage duration, the storage class of the object cannot be changed. The following content describes the minimum storage durations for objects in different storage classes: IA or IA storage for source files: 30 days, Archive or Archive storage for source files: 60 days, Cold Archive or Cold Archive for source files: 180 days.
   * 
   * @param request - UpdateMediaStorageClassRequest
   * @returns UpdateMediaStorageClassResponse
   */
  async updateMediaStorageClass(request: $_model.UpdateMediaStorageClassRequest): Promise<$_model.UpdateMediaStorageClassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaStorageClassWithOptions(request, runtime);
  }

  /**
   * 更新视频流清晰度与HDR信息
   * 
   * @param request - UpdateStreamInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStreamInfoResponse
   */
  async updateStreamInfoWithOptions(request: $_model.UpdateStreamInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStreamInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStreamInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStreamInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStreamInfoResponse({}));
  }

  /**
   * 更新视频流清晰度与HDR信息
   * 
   * @param request - UpdateStreamInfoRequest
   * @returns UpdateStreamInfoResponse
   */
  async updateStreamInfo(request: $_model.UpdateStreamInfoRequest): Promise<$_model.UpdateStreamInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStreamInfoWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a transcoding template group or configurations of transcoding templates in the transcoding template group.
   * 
   * @remarks
   * For security purposes, you cannot add, modify, or delete transcoding templates in a transcoding template group that is locked. You can call the [GetTranscodeTemplateGroup](~~GetTranscodeTemplateGroup~~) operation to query the configurations of a transcoding template group, check whether the transcoding template group is locked by using the response parameter Locked, and unlock the transcoding template group before you perform operations such as add, modify, and delete transcoding templates.
   * 
   * @param request - UpdateTranscodeTemplateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTranscodeTemplateGroupResponse
   */
  async updateTranscodeTemplateGroupWithOptions(request: $_model.UpdateTranscodeTemplateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTranscodeTemplateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.locked)) {
      query["Locked"] = request.locked;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.transcodeTemplateGroupId)) {
      query["TranscodeTemplateGroupId"] = request.transcodeTemplateGroupId;
    }

    if (!$dara.isNull(request.transcodeTemplateList)) {
      query["TranscodeTemplateList"] = request.transcodeTemplateList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTranscodeTemplateGroup",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTranscodeTemplateGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTranscodeTemplateGroupResponse({}));
  }

  /**
   * Modifies the configurations of a transcoding template group or configurations of transcoding templates in the transcoding template group.
   * 
   * @remarks
   * For security purposes, you cannot add, modify, or delete transcoding templates in a transcoding template group that is locked. You can call the [GetTranscodeTemplateGroup](~~GetTranscodeTemplateGroup~~) operation to query the configurations of a transcoding template group, check whether the transcoding template group is locked by using the response parameter Locked, and unlock the transcoding template group before you perform operations such as add, modify, and delete transcoding templates.
   * 
   * @param request - UpdateTranscodeTemplateGroupRequest
   * @returns UpdateTranscodeTemplateGroupResponse
   */
  async updateTranscodeTemplateGroup(request: $_model.UpdateTranscodeTemplateGroupRequest): Promise<$_model.UpdateTranscodeTemplateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTranscodeTemplateGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the information about an audio or video file.
   * 
   * @remarks
   * ### [](#)
   * You can call this operation to modify information such as the title, tags, and description about audio and video files based on audio or video IDs. You must pass in the parameters that you want to modify. Otherwise, parameter configurations are not overwritten.
   * ### [](#qps-)Queries per second (QPS) limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits on API operations](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - UpdateVideoInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVideoInfoResponse
   */
  async updateVideoInfoWithOptions(request: $_model.UpdateVideoInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVideoInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!$dara.isNull(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVideoInfo",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVideoInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVideoInfoResponse({}));
  }

  /**
   * Modifies the information about an audio or video file.
   * 
   * @remarks
   * ### [](#)
   * You can call this operation to modify information such as the title, tags, and description about audio and video files based on audio or video IDs. You must pass in the parameters that you want to modify. Otherwise, parameter configurations are not overwritten.
   * ### [](#qps-)Queries per second (QPS) limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits on API operations](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - UpdateVideoInfoRequest
   * @returns UpdateVideoInfoResponse
   */
  async updateVideoInfo(request: $_model.UpdateVideoInfoRequest): Promise<$_model.UpdateVideoInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVideoInfoWithOptions(request, runtime);
  }

  /**
   * Modifies the information about multiple videos at a time.
   * 
   * @remarks
   * The specific parameter of a video is updated only when a new value is passed in the parameter.
   * 
   * @param request - UpdateVideoInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVideoInfosResponse
   */
  async updateVideoInfosWithOptions(request: $_model.UpdateVideoInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVideoInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.updateContent)) {
      query["UpdateContent"] = request.updateContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVideoInfos",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVideoInfosResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVideoInfosResponse({}));
  }

  /**
   * Modifies the information about multiple videos at a time.
   * 
   * @remarks
   * The specific parameter of a video is updated only when a new value is passed in the parameter.
   * 
   * @param request - UpdateVideoInfosRequest
   * @returns UpdateVideoInfosResponse
   */
  async updateVideoInfos(request: $_model.UpdateVideoInfosRequest): Promise<$_model.UpdateVideoInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVideoInfosWithOptions(request, runtime);
  }

  /**
   * Modifies a specific accelerated domain name.
   * 
   * @remarks
   * UpdateVodDomain
   * 
   * @param request - UpdateVodDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVodDomainResponse
   */
  async updateVodDomainWithOptions(request: $_model.UpdateVodDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVodDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!$dara.isNull(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVodDomain",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVodDomainResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVodDomainResponse({}));
  }

  /**
   * Modifies a specific accelerated domain name.
   * 
   * @remarks
   * UpdateVodDomain
   * 
   * @param request - UpdateVodDomainRequest
   * @returns UpdateVodDomainResponse
   */
  async updateVodDomain(request: $_model.UpdateVodDomainRequest): Promise<$_model.UpdateVodDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVodDomainWithOptions(request, runtime);
  }

  /**
   * Modifies a snapshot template.
   * 
   * @param request - UpdateVodTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVodTemplateResponse
   */
  async updateVodTemplateWithOptions(request: $_model.UpdateVodTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVodTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
    }

    if (!$dara.isNull(request.vodTemplateId)) {
      query["VodTemplateId"] = request.vodTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVodTemplate",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVodTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVodTemplateResponse({}));
  }

  /**
   * Modifies a snapshot template.
   * 
   * @param request - UpdateVodTemplateRequest
   * @returns UpdateVodTemplateResponse
   */
  async updateVodTemplate(request: $_model.UpdateVodTemplateRequest): Promise<$_model.UpdateVodTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVodTemplateWithOptions(request, runtime);
  }

  /**
   * Modifies the name and configurations of a watermark template after you create a watermark template.
   * 
   * @remarks
   *   You can modify the name and configurations of the watermark template after you call the [AddWatermark](~~AddWatermark~~) operation to create a watermark template.
   * *   You cannot call this operation to change the image in an image watermark template.
   * 
   * @param request - UpdateWatermarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWatermarkResponse
   */
  async updateWatermarkWithOptions(request: $_model.UpdateWatermarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWatermarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.watermarkConfig)) {
      query["WatermarkConfig"] = request.watermarkConfig;
    }

    if (!$dara.isNull(request.watermarkId)) {
      query["WatermarkId"] = request.watermarkId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWatermark",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWatermarkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWatermarkResponse({}));
  }

  /**
   * Modifies the name and configurations of a watermark template after you create a watermark template.
   * 
   * @remarks
   *   You can modify the name and configurations of the watermark template after you call the [AddWatermark](~~AddWatermark~~) operation to create a watermark template.
   * *   You cannot call this operation to change the image in an image watermark template.
   * 
   * @param request - UpdateWatermarkRequest
   * @returns UpdateWatermarkResponse
   */
  async updateWatermark(request: $_model.UpdateWatermarkRequest): Promise<$_model.UpdateWatermarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWatermarkWithOptions(request, runtime);
  }

  /**
   * 更新水印
   * 
   * @param request - UpdateWatermarkConsoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWatermarkConsoleResponse
   */
  async updateWatermarkConsoleWithOptions(request: $_model.UpdateWatermarkConsoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWatermarkConsoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.height)) {
      query["Height"] = request.height;
    }

    if (!$dara.isNull(request.horizontalOffet)) {
      query["HorizontalOffet"] = request.horizontalOffet;
    }

    if (!$dara.isNull(request.horizontalOffset)) {
      query["HorizontalOffset"] = request.horizontalOffset;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.object)) {
      query["Object"] = request.object;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.position)) {
      query["Position"] = request.position;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.screenMode)) {
      query["ScreenMode"] = request.screenMode;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.verticalOffset)) {
      query["VerticalOffset"] = request.verticalOffset;
    }

    if (!$dara.isNull(request.videoHeight)) {
      query["VideoHeight"] = request.videoHeight;
    }

    if (!$dara.isNull(request.videoWidth)) {
      query["VideoWidth"] = request.videoWidth;
    }

    if (!$dara.isNull(request.watermarkConfig)) {
      query["WatermarkConfig"] = request.watermarkConfig;
    }

    if (!$dara.isNull(request.watermarkId)) {
      query["WatermarkId"] = request.watermarkId;
    }

    if (!$dara.isNull(request.width)) {
      query["Width"] = request.width;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWatermarkConsole",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWatermarkConsoleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWatermarkConsoleResponse({}));
  }

  /**
   * 更新水印
   * 
   * @param request - UpdateWatermarkConsoleRequest
   * @returns UpdateWatermarkConsoleResponse
   */
  async updateWatermarkConsole(request: $_model.UpdateWatermarkConsoleRequest): Promise<$_model.UpdateWatermarkConsoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWatermarkConsoleWithOptions(request, runtime);
  }

  /**
   * 更新工作流
   * 
   * @param request - UpdateWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkflowResponse
   */
  async updateWorkflowWithOptions(request: $_model.UpdateWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionList)) {
      query["ActionList"] = request.actionList;
    }

    if (!$dara.isNull(request.callbackConfig)) {
      query["CallbackConfig"] = request.callbackConfig;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkflow",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkflowResponse({}));
  }

  /**
   * 更新工作流
   * 
   * @param request - UpdateWorkflowRequest
   * @returns UpdateWorkflowResponse
   */
  async updateWorkflow(request: $_model.UpdateWorkflowRequest): Promise<$_model.UpdateWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkflowWithOptions(request, runtime);
  }

  /**
   * Uploads media files based on URLs.
   * 
   * @remarks
   *   You can call this operation to upload media files that are not stored on a local server or device and must be uploaded based on URLs over the Internet.
   * *   The URL-based upload jobs are asynchronous. After you submit a URL-based upload job by calling this operation, it may take hours, even days to complete. If you require high timeliness, we recommend that you use the upload SDK.
   * *   If you configure callbacks, you can receive an [UploadByURLComplete](https://help.aliyun.com/document_detail/86326.html) event notification after the media file is uploaded. You can query the upload status by calling the [GetURLUploadInfos](https://help.aliyun.com/document_detail/106830.html) operation.
   * *   After you submit an upload job, the job is asynchronously processed on the cloud. All URL-based upload jobs that are submitted in each region are queued. The waiting time for the upload job depends on the number of queued jobs. After the upload job is complete, you can associate the playback URL included in the callback with the media ID.
   * *   You can call this operation only in the **China (Shanghai)** and **Singapore** regions.
   * *   Every time you submit a URL-based upload job, a new media ID is generated in ApsaraVideo VOD.
   * 
   * @param request - UploadMediaByURLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadMediaByURLResponse
   */
  async uploadMediaByURLWithOptions(request: $_model.UploadMediaByURLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadMediaByURLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.storageLocation)) {
      query["StorageLocation"] = request.storageLocation;
    }

    if (!$dara.isNull(request.templateGroupId)) {
      query["TemplateGroupId"] = request.templateGroupId;
    }

    if (!$dara.isNull(request.uploadMetadatas)) {
      query["UploadMetadatas"] = request.uploadMetadatas;
    }

    if (!$dara.isNull(request.uploadURLs)) {
      query["UploadURLs"] = request.uploadURLs;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadMediaByURL",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadMediaByURLResponse>(await this.callApi(params, req, runtime), new $_model.UploadMediaByURLResponse({}));
  }

  /**
   * Uploads media files based on URLs.
   * 
   * @remarks
   *   You can call this operation to upload media files that are not stored on a local server or device and must be uploaded based on URLs over the Internet.
   * *   The URL-based upload jobs are asynchronous. After you submit a URL-based upload job by calling this operation, it may take hours, even days to complete. If you require high timeliness, we recommend that you use the upload SDK.
   * *   If you configure callbacks, you can receive an [UploadByURLComplete](https://help.aliyun.com/document_detail/86326.html) event notification after the media file is uploaded. You can query the upload status by calling the [GetURLUploadInfos](https://help.aliyun.com/document_detail/106830.html) operation.
   * *   After you submit an upload job, the job is asynchronously processed on the cloud. All URL-based upload jobs that are submitted in each region are queued. The waiting time for the upload job depends on the number of queued jobs. After the upload job is complete, you can associate the playback URL included in the callback with the media ID.
   * *   You can call this operation only in the **China (Shanghai)** and **Singapore** regions.
   * *   Every time you submit a URL-based upload job, a new media ID is generated in ApsaraVideo VOD.
   * 
   * @param request - UploadMediaByURLRequest
   * @returns UploadMediaByURLResponse
   */
  async uploadMediaByURL(request: $_model.UploadMediaByURLRequest): Promise<$_model.UploadMediaByURLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadMediaByURLWithOptions(request, runtime);
  }

  /**
   * Uploads transcoded streams to ApsaraVideo VOD from external storage.
   * 
   * @remarks
   *   **Make sure that you understand the billing method and price of ApsaraVideo VOD before you call this operation. You are charged storage fees after you upload media files to ApsaraVideo VOD. For more information, see [Billing of media asset storage](~~188308#section_e97_xrp_mzz~~). If you have activated the acceleration service, you are charged acceleration fees when you upload media files to ApsaraVideo VOD. For more information, see [Billing of acceleration traffic](~~188310#section_sta_zm2_tsv~~).**
   * *   This operation is available only in the **China (Shanghai)** and **Singapore** regions.
   * *   You can call this operation to upload transcoded streams to ApsaraVideo VOD from external storage. The following HDR types of transcoded streams are supported: HDR, HDR 10, HLG, Dolby Vision, HDR Vivid, and SDR+.
   * *   You can call the [GetURLUploadInfos](https://help.aliyun.com/document_detail/106830.html) operation to query the upload status. After the upload is complete, the callback of the [UploadByURLComplete](https://help.aliyun.com/document_detail/376427.html) event is returned.
   * 
   * @param request - UploadStreamByURLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadStreamByURLResponse
   */
  async uploadStreamByURLWithOptions(request: $_model.UploadStreamByURLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadStreamByURLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.definition)) {
      query["Definition"] = request.definition;
    }

    if (!$dara.isNull(request.fileExtension)) {
      query["FileExtension"] = request.fileExtension;
    }

    if (!$dara.isNull(request.HDRType)) {
      query["HDRType"] = request.HDRType;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.streamURL)) {
      query["StreamURL"] = request.streamURL;
    }

    if (!$dara.isNull(request.uploadMetadata)) {
      query["UploadMetadata"] = request.uploadMetadata;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadStreamByURL",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadStreamByURLResponse>(await this.callApi(params, req, runtime), new $_model.UploadStreamByURLResponse({}));
  }

  /**
   * Uploads transcoded streams to ApsaraVideo VOD from external storage.
   * 
   * @remarks
   *   **Make sure that you understand the billing method and price of ApsaraVideo VOD before you call this operation. You are charged storage fees after you upload media files to ApsaraVideo VOD. For more information, see [Billing of media asset storage](~~188308#section_e97_xrp_mzz~~). If you have activated the acceleration service, you are charged acceleration fees when you upload media files to ApsaraVideo VOD. For more information, see [Billing of acceleration traffic](~~188310#section_sta_zm2_tsv~~).**
   * *   This operation is available only in the **China (Shanghai)** and **Singapore** regions.
   * *   You can call this operation to upload transcoded streams to ApsaraVideo VOD from external storage. The following HDR types of transcoded streams are supported: HDR, HDR 10, HLG, Dolby Vision, HDR Vivid, and SDR+.
   * *   You can call the [GetURLUploadInfos](https://help.aliyun.com/document_detail/106830.html) operation to query the upload status. After the upload is complete, the callback of the [UploadByURLComplete](https://help.aliyun.com/document_detail/376427.html) event is returned.
   * 
   * @param request - UploadStreamByURLRequest
   * @returns UploadStreamByURLResponse
   */
  async uploadStreamByURL(request: $_model.UploadStreamByURLRequest): Promise<$_model.UploadStreamByURLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadStreamByURLWithOptions(request, runtime);
  }

  /**
   * 检查CDN播放URL鉴权
   * 
   * @param request - ValidateCdnUrlAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateCdnUrlAuthResponse
   */
  async validateCdnUrlAuthWithOptions(request: $_model.ValidateCdnUrlAuthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateCdnUrlAuthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inputUrl)) {
      query["InputUrl"] = request.inputUrl;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceRealOwnerId)) {
      query["ResourceRealOwnerId"] = request.resourceRealOwnerId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateCdnUrlAuth",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateCdnUrlAuthResponse>(await this.callApi(params, req, runtime), new $_model.ValidateCdnUrlAuthResponse({}));
  }

  /**
   * 检查CDN播放URL鉴权
   * 
   * @param request - ValidateCdnUrlAuthRequest
   * @returns ValidateCdnUrlAuthResponse
   */
  async validateCdnUrlAuth(request: $_model.ValidateCdnUrlAuthRequest): Promise<$_model.ValidateCdnUrlAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateCdnUrlAuthWithOptions(request, runtime);
  }

  /**
   * Verifies the ownership of a specified domain name.
   * 
   * @remarks
   * This operation is available only in the **China (Shanghai)** region.
   * 
   * @param request - VerifyVodDomainOwnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyVodDomainOwnerResponse
   */
  async verifyVodDomainOwnerWithOptions(request: $_model.VerifyVodDomainOwnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyVodDomainOwnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.verifyType)) {
      query["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyVodDomainOwner",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyVodDomainOwnerResponse>(await this.callApi(params, req, runtime), new $_model.VerifyVodDomainOwnerResponse({}));
  }

  /**
   * Verifies the ownership of a specified domain name.
   * 
   * @remarks
   * This operation is available only in the **China (Shanghai)** region.
   * 
   * @param request - VerifyVodDomainOwnerRequest
   * @returns VerifyVodDomainOwnerResponse
   */
  async verifyVodDomainOwner(request: $_model.VerifyVodDomainOwnerRequest): Promise<$_model.VerifyVodDomainOwnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyVodDomainOwnerWithOptions(request, runtime);
  }

}
