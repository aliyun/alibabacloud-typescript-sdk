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

    if (!$dara.isNull(request.referenceIds)) {
      query["ReferenceIds"] = request.referenceIds;
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

    if (!$dara.isNull(request.referenceId)) {
      query["ReferenceId"] = request.referenceId;
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

    if (!$dara.isNull(request.referenceIds)) {
      query["ReferenceIds"] = request.referenceIds;
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

    if (!$dara.isNull(request.referenceId)) {
      query["ReferenceId"] = request.referenceId;
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
    if (!$dara.isNull(request.referenceIds)) {
      query["ReferenceIds"] = request.referenceIds;
    }

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
   * 获取域名Vip
   * 
   * @param request - DescribeVodUserVipsByDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodUserVipsByDomainResponse
   */
  async describeVodUserVipsByDomainWithOptions(request: $_model.DescribeVodUserVipsByDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodUserVipsByDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.available)) {
      query["Available"] = request.available;
    }

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
      action: "DescribeVodUserVipsByDomain",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodUserVipsByDomainResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodUserVipsByDomainResponse({}));
  }

  /**
   * 获取域名Vip
   * 
   * @param request - DescribeVodUserVipsByDomainRequest
   * @returns DescribeVodUserVipsByDomainResponse
   */
  async describeVodUserVipsByDomain(request: $_model.DescribeVodUserVipsByDomainRequest): Promise<$_model.DescribeVodUserVipsByDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodUserVipsByDomainWithOptions(request, runtime);
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
   * 获取应用播放密钥
   * 
   * @param request - GetAppPlayKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppPlayKeyResponse
   */
  async getAppPlayKeyWithOptions(request: $_model.GetAppPlayKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppPlayKeyResponse> {
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
      action: "GetAppPlayKey",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppPlayKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetAppPlayKeyResponse({}));
  }

  /**
   * 获取应用播放密钥
   * 
   * @param request - GetAppPlayKeyRequest
   * @returns GetAppPlayKeyResponse
   */
  async getAppPlayKey(request: $_model.GetAppPlayKeyRequest): Promise<$_model.GetAppPlayKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppPlayKeyWithOptions(request, runtime);
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

    if (!$dara.isNull(request.referenceId)) {
      query["ReferenceId"] = request.referenceId;
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

    if (!$dara.isNull(request.referenceId)) {
      query["ReferenceId"] = request.referenceId;
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
    if (!$dara.isNull(request.referenceId)) {
      query["ReferenceId"] = request.referenceId;
    }

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
    if (!$dara.isNull(request.referenceIds)) {
      query["ReferenceIds"] = request.referenceIds;
    }

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

    if (!$dara.isNull(request.referenceIds)) {
      query["ReferenceIds"] = request.referenceIds;
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

    if (!$dara.isNull(request.referenceId)) {
      query["ReferenceId"] = request.referenceId;
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

    if (!$dara.isNull(request.referenceId)) {
      query["ReferenceId"] = request.referenceId;
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
   * 设置应用播放密钥
   * 
   * @param request - SetAppPlayKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAppPlayKeyResponse
   */
  async setAppPlayKeyWithOptions(request: $_model.SetAppPlayKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAppPlayKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playKey)) {
      query["PlayKey"] = request.playKey;
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
      action: "SetAppPlayKey",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAppPlayKeyResponse>(await this.callApi(params, req, runtime), new $_model.SetAppPlayKeyResponse({}));
  }

  /**
   * 设置应用播放密钥
   * 
   * @param request - SetAppPlayKeyRequest
   * @returns SetAppPlayKeyResponse
   */
  async setAppPlayKey(request: $_model.SetAppPlayKeyRequest): Promise<$_model.SetAppPlayKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAppPlayKeyWithOptions(request, runtime);
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

    if (!$dara.isNull(request.referenceId)) {
      query["ReferenceId"] = request.referenceId;
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

    if (!$dara.isNull(request.referenceId)) {
      query["ReferenceId"] = request.referenceId;
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

    if (!$dara.isNull(request.referenceId)) {
      query["ReferenceId"] = request.referenceId;
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
