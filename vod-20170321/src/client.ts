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
      'cn-shenzhen': "vod.cn-shenzhen.aliyuncs.com",
      'cn-beijing': "vod.cn-beijing.aliyuncs.com",
      'cn-shanghai': "vod.cn-shanghai.aliyuncs.com",
      'cn-hongkong': "vod.cn-hongkong.aliyuncs.com",
      'ap-southeast-1': "vod.ap-southeast-1.aliyuncs.com",
      'ap-northeast-1': "vod.ap-northeast-1.aliyuncs.com",
      'ap-southeast-5': "vod.ap-southeast-5.aliyuncs.com",
      'us-west-1': "vod.us-west-1.aliyuncs.com",
      'eu-central-1': "vod.eu-central-1.aliyuncs.com",
      'me-central-1': "vod.me-central-1.aliyuncs.com",
      'cn-north-2-gov-1': "vod.cn-north-2-gov-1.aliyuncs.com",
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
   * Adds an AI template used for automated review and smart thumbnail tasks.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * - Before adding an AI template for automated review or smart thumbnail tasks, make sure that you have activated [automated review](https://ai.aliyun.com/vi/censor) or [smart thumbnail](https://ai.aliyun.com/vi/cover).
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
   * Adds an AI template used for automated review and smart thumbnail tasks.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * - Before adding an AI template for automated review or smart thumbnail tasks, make sure that you have activated [automated review](https://ai.aliyun.com/vi/censor) or [smart thumbnail](https://ai.aliyun.com/vi/cover).
   * 
   * @param request - AddAITemplateRequest
   * @returns AddAITemplateResponse
   */
  async addAITemplate(request: $_model.AddAITemplateRequest): Promise<$_model.AddAITemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAITemplateWithOptions(request, runtime);
  }

  /**
   * Creates a category to classify audio, video, image, and short video materials stored in ApsaraVideo VOD, making resource discovery and management more efficient.
   * 
   * @remarks
   * - Audio/video/image categories (`Type` set to `default`) support up to three levels, with a maximum of 100 subcategories per level. Short video material categories (`Type` set to `material`) support up to two levels, with a maximum of 100 subcategories per level.
   * - After creating a category, you can assign it to media assets during upload or to already uploaded media assets. For more information, see [Media asset categories](https://help.aliyun.com/document_detail/86070.html).
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
   * Creates a category to classify audio, video, image, and short video materials stored in ApsaraVideo VOD, making resource discovery and management more efficient.
   * 
   * @remarks
   * - Audio/video/image categories (`Type` set to `default`) support up to three levels, with a maximum of 100 subcategories per level. Short video material categories (`Type` set to `material`) support up to two levels, with a maximum of 100 subcategories per level.
   * - After creating a category, you can assign it to media assets during upload or to already uploaded media assets. For more information, see [Media asset categories](https://help.aliyun.com/document_detail/86070.html).
   * 
   * @param request - AddCategoryRequest
   * @returns AddCategoryResponse
   */
  async addCategory(request: $_model.AddCategoryRequest): Promise<$_model.AddCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCategoryWithOptions(request, runtime);
  }

  /**
   * Creates an online editing project (video editing task).
   * 
   * @remarks
   * - For more information about online editing, see [Online editing](https://help.aliyun.com/document_detail/95482.html).
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
   * Creates an online editing project (video editing task).
   * 
   * @remarks
   * - For more information about online editing, see [Online editing](https://help.aliyun.com/document_detail/95482.html).
   * 
   * @param request - AddEditingProjectRequest
   * @returns AddEditingProjectResponse
   */
  async addEditingProject(request: $_model.AddEditingProjectRequest): Promise<$_model.AddEditingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addEditingProjectWithOptions(request, runtime);
  }

  /**
   * Adds one or more materials to an online editing project.
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
   * Adds one or more materials to an online editing project.
   * 
   * @param request - AddEditingProjectMaterialsRequest
   * @returns AddEditingProjectMaterialsResponse
   */
  async addEditingProjectMaterials(request: $_model.AddEditingProjectMaterialsRequest): Promise<$_model.AddEditingProjectMaterialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addEditingProjectMaterialsWithOptions(request, runtime);
  }

  /**
   * Adds transcoding configurations. You can create a transcoding template group or add transcoding templates to a specified template group.
   * 
   * @remarks
   * - Transcoding template groups that are **locked** by the ApsaraVideo VOD backend do not support custom operations. You can call the [GetTranscodeTemplateGroup](~~GetTranscodeTemplateGroup~~) operation to query the template configuration and check whether the template group is locked based on the Locked response parameter. You can call the [UpdateTranscodeTemplateGroup](~~UpdateTranscodeTemplateGroup~~) operation to unlock the template before you modify it.
   * - Because transcoding involves storage addresses of files, you cannot add a transcoding template group if no storage address is available. You can activate a **VOD system bucket** in the **ApsaraVideo VOD console > Configuration Management > Media Asset Management Configuration > Storage Management** to obtain an available storage address.
   * - You cannot add transcoding template configurations to a **No Transcoding** template group.
   * - You must specify either **TranscodeTemplateGroupId** or **Name**.
   * - You can create a maximum of 20 transcoding template groups.
   * - You can add a maximum of 20 transcoding template configurations to a transcoding template group.
   * - To generate adaptive bitrate streaming addresses through transcoding, you can add a maximum of 10 video packaging templates to a transcoding template group. If more than 10 templates are added, only individual stream addresses are generated instead of adaptive bitrate streaming addresses.
   * ### QPS limit
   * The maximum number of queries per second (QPS) per user for this operation is 5. If the number of calls per second exceeds the limit, throttling is triggered. This may affect your business. Manage your calls appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Adds transcoding configurations. You can create a transcoding template group or add transcoding templates to a specified template group.
   * 
   * @remarks
   * - Transcoding template groups that are **locked** by the ApsaraVideo VOD backend do not support custom operations. You can call the [GetTranscodeTemplateGroup](~~GetTranscodeTemplateGroup~~) operation to query the template configuration and check whether the template group is locked based on the Locked response parameter. You can call the [UpdateTranscodeTemplateGroup](~~UpdateTranscodeTemplateGroup~~) operation to unlock the template before you modify it.
   * - Because transcoding involves storage addresses of files, you cannot add a transcoding template group if no storage address is available. You can activate a **VOD system bucket** in the **ApsaraVideo VOD console > Configuration Management > Media Asset Management Configuration > Storage Management** to obtain an available storage address.
   * - You cannot add transcoding template configurations to a **No Transcoding** template group.
   * - You must specify either **TranscodeTemplateGroupId** or **Name**.
   * - You can create a maximum of 20 transcoding template groups.
   * - You can add a maximum of 20 transcoding template configurations to a transcoding template group.
   * - To generate adaptive bitrate streaming addresses through transcoding, you can add a maximum of 10 video packaging templates to a transcoding template group. If more than 10 templates are added, only individual stream addresses are generated instead of adaptive bitrate streaming addresses.
   * ### QPS limit
   * The maximum number of queries per second (QPS) per user for this operation is 5. If the number of calls per second exceeds the limit, throttling is triggered. This may affect your business. Manage your calls appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - AddTranscodeTemplateGroupRequest
   * @returns AddTranscodeTemplateGroupResponse
   */
  async addTranscodeTemplateGroup(request: $_model.AddTranscodeTemplateGroupRequest): Promise<$_model.AddTranscodeTemplateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTranscodeTemplateGroupWithOptions(request, runtime);
  }

  /**
   * Adds a domain name for CDN acceleration in ApsaraVideo VOD.
   * 
   * @remarks
   * - Currently, the only supported service address is **China (Shanghai)**.
   * - Before creating an accelerated domain name, you must activate [ApsaraVideo VOD](https://help.aliyun.com/document_detail/51512.html), and the accelerated domain name must have a completed ICP filing. 
   * - Origin content that is not hosted on Alibaba Cloud requires review, which will be completed before the next business day.
   * - You can submit only one accelerated domain name at a time. Each user can add up to 20 domain names.
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
   * Adds a domain name for CDN acceleration in ApsaraVideo VOD.
   * 
   * @remarks
   * - Currently, the only supported service address is **China (Shanghai)**.
   * - Before creating an accelerated domain name, you must activate [ApsaraVideo VOD](https://help.aliyun.com/document_detail/51512.html), and the accelerated domain name must have a completed ICP filing. 
   * - Origin content that is not hosted on Alibaba Cloud requires review, which will be completed before the next business day.
   * - You can submit only one accelerated domain name at a time. Each user can add up to 20 domain names.
   * 
   * @param request - AddVodDomainRequest
   * @returns AddVodDomainResponse
   */
  async addVodDomain(request: $_model.AddVodDomainRequest): Promise<$_model.AddVodDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addVodDomainWithOptions(request, runtime);
  }

  /**
   * Binds a storage bucket to a sub-application of ApsaraVideo VOD.
   * 
   * @remarks
   * Calls AddVodStorageForApp to enable a VOD system bucket for an ApsaraVideo VOD sub-application.
   *  <notice>Each sub-application can have at most one VOD system bucket enabled. If you specify an AppId that does not exist or an AppId that already has a VOD system bucket enabled, an error is returned.</notice>
   * <notice>To call this operation, the caller must have application administrator permissions (VODAppAdministratorAccess). The Alibaba Cloud account has application administrator permissions by default. An application administrator can call AttachAppPolicyToIdentity to grant application permissions to a RAM user or role.</notice>
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
   * Binds a storage bucket to a sub-application of ApsaraVideo VOD.
   * 
   * @remarks
   * Calls AddVodStorageForApp to enable a VOD system bucket for an ApsaraVideo VOD sub-application.
   *  <notice>Each sub-application can have at most one VOD system bucket enabled. If you specify an AppId that does not exist or an AppId that already has a VOD system bucket enabled, an error is returned.</notice>
   * <notice>To call this operation, the caller must have application administrator permissions (VODAppAdministratorAccess). The Alibaba Cloud account has application administrator permissions by default. An application administrator can call AttachAppPolicyToIdentity to grant application permissions to a RAM user or role.</notice>
   * 
   * @param request - AddVodStorageForAppRequest
   * @returns AddVodStorageForAppResponse
   */
  async addVodStorageForApp(request: $_model.AddVodStorageForAppRequest): Promise<$_model.AddVodStorageForAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addVodStorageForAppWithOptions(request, runtime);
  }

  /**
   * Adds a snapshot or animated image template.
   * 
   * @remarks
   * - After adding a template, you can pass the snapshot or animated image template ID through the [SubmitSnapshotJob](~~SubmitSnapshotJob~~) or [SubmitDynamicImageJob](~~SubmitDynamicImageJob~~) operation to initiate a snapshot or animated image job.
   * - You can receive [video snapshot completed](https://help.aliyun.com/document_detail/57337.html) and [video animated image completed](https://help.aliyun.com/document_detail/143490.html) callback messages through HTTP callbacks (compatible with HTTPS) or MNS callbacks. For more information, see [Callback methods](https://help.aliyun.com/document_detail/55627.html).
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
   * Adds a snapshot or animated image template.
   * 
   * @remarks
   * - After adding a template, you can pass the snapshot or animated image template ID through the [SubmitSnapshotJob](~~SubmitSnapshotJob~~) or [SubmitDynamicImageJob](~~SubmitDynamicImageJob~~) operation to initiate a snapshot or animated image job.
   * - You can receive [video snapshot completed](https://help.aliyun.com/document_detail/57337.html) and [video animated image completed](https://help.aliyun.com/document_detail/143490.html) callback messages through HTTP callbacks (compatible with HTTPS) or MNS callbacks. For more information, see [Callback methods](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @param request - AddVodTemplateRequest
   * @returns AddVodTemplateResponse
   */
  async addVodTemplate(request: $_model.AddVodTemplateRequest): Promise<$_model.AddVodTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addVodTemplateWithOptions(request, runtime);
  }

  /**
   * To simplify watermark task processing, ApsaraVideo VOD consolidates complex watermark parameters such as position, size, font, and color into templates, each identified by a unique watermark template ID. Calls this operation to add an image or text watermark template.
   * 
   * @remarks
   * - Call this operation to add an image watermark template (`Image`) or a text watermark template (`Text`). Image watermark templates support the following formats: static images (PNG) and animated images (GIF, APNG, MOV).
   * - After adding a watermark template by calling this operation, call [AddTranscodeTemplateGroup](~~AddTranscodeTemplateGroup~~) or [UpdateTranscodeTemplateGroup](~~UpdateTranscodeTemplateGroup~~) to associate the watermark template with a transcoding template group for subsequent watermark transcoding.
   * - For more information about adding image and text watermarks to videos, see [Video watermarks](https://help.aliyun.com/document_detail/99369.html).
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
   * To simplify watermark task processing, ApsaraVideo VOD consolidates complex watermark parameters such as position, size, font, and color into templates, each identified by a unique watermark template ID. Calls this operation to add an image or text watermark template.
   * 
   * @remarks
   * - Call this operation to add an image watermark template (`Image`) or a text watermark template (`Text`). Image watermark templates support the following formats: static images (PNG) and animated images (GIF, APNG, MOV).
   * - After adding a watermark template by calling this operation, call [AddTranscodeTemplateGroup](~~AddTranscodeTemplateGroup~~) or [UpdateTranscodeTemplateGroup](~~UpdateTranscodeTemplateGroup~~) to associate the watermark template with a transcoding template group for subsequent watermark transcoding.
   * - For more information about adding image and text watermarks to videos, see [Video watermarks](https://help.aliyun.com/document_detail/99369.html).
   * 
   * @param request - AddWatermarkRequest
   * @returns AddWatermarkResponse
   */
  async addWatermark(request: $_model.AddWatermarkRequest): Promise<$_model.AddWatermarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addWatermarkWithOptions(request, runtime);
  }

  /**
   * Invokes this operation to attach access permissions of an ApsaraVideo VOD application to a specified identity (Resource Access Management (RAM) user or RAM role).
   * 
   * @remarks
   * >Notice:  Each Resource Access Management (RAM) user or RAM role can be granted permissions on up to 10 applications.
   * >Notice: You must have application administrator permissions to invoke this operation. For the first invocation, use your Alibaba Cloud account.
   * - If the policy name is VODAppAdministratorAccess, AppId is optional. For other policies, AppId is required.
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
   * Invokes this operation to attach access permissions of an ApsaraVideo VOD application to a specified identity (Resource Access Management (RAM) user or RAM role).
   * 
   * @remarks
   * >Notice:  Each Resource Access Management (RAM) user or RAM role can be granted permissions on up to 10 applications.
   * >Notice: You must have application administrator permissions to invoke this operation. For the first invocation, use your Alibaba Cloud account.
   * - If the policy name is VODAppAdministratorAccess, AppId is optional. For other policies, AppId is required.
   * 
   * @param request - AttachAppPolicyToIdentityRequest
   * @returns AttachAppPolicyToIdentityResponse
   */
  async attachAppPolicyToIdentity(request: $_model.AttachAppPolicyToIdentityRequest): Promise<$_model.AttachAppPolicyToIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachAppPolicyToIdentityWithOptions(request, runtime);
  }

  /**
   * Retrieves the basic information and source file information of multiple media assets in a batch.
   * 
   * @remarks
   * - You can retrieve information about up to 20 audio or video files at a time.
   * - After an audio or video file is uploaded, ApsaraVideo VOD analyzes the uploaded source file. Therefore, media asset information is generated asynchronously. You can configure an [event notification](https://help.aliyun.com/document_detail/55627.html) for the [AudioVideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event. After you receive the [AudioVideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event notification, call this operation to retrieve the audio or video information.
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
   * Retrieves the basic information and source file information of multiple media assets in a batch.
   * 
   * @remarks
   * - You can retrieve information about up to 20 audio or video files at a time.
   * - After an audio or video file is uploaded, ApsaraVideo VOD analyzes the uploaded source file. Therefore, media asset information is generated asynchronously. You can configure an [event notification](https://help.aliyun.com/document_detail/55627.html) for the [AudioVideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event. After you receive the [AudioVideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event notification, call this operation to retrieve the audio or video information.
   * 
   * @param request - BatchGetMediaInfosRequest
   * @returns BatchGetMediaInfosResponse
   */
  async batchGetMediaInfos(request: $_model.BatchGetMediaInfosRequest): Promise<$_model.BatchGetMediaInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetMediaInfosWithOptions(request, runtime);
  }

  /**
   * Configures multiple accelerated domain names in a batch.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - You can configure up to 50 domain names at a time.
   * - After you call this operation to configure certain features for domain names, a unique ConfigId is generated. You can use the ConfigId to update or delete domain name configurations. This operation does not return the ConfigId. To obtain the ConfigId, call the [DescribeVodDomainConfigs](~~DescribeVodDomainConfigs~~) operation.
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
   * Configures multiple accelerated domain names in a batch.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - You can configure up to 50 domain names at a time.
   * - After you call this operation to configure certain features for domain names, a unique ConfigId is generated. You can use the ConfigId to update or delete domain name configurations. This operation does not return the ConfigId. To obtain the ConfigId, call the [DescribeVodDomainConfigs](~~DescribeVodDomainConfigs~~) operation.
   * 
   * @param request - BatchSetVodDomainConfigsRequest
   * @returns BatchSetVodDomainConfigsResponse
   */
  async batchSetVodDomainConfigs(request: $_model.BatchSetVodDomainConfigsRequest): Promise<$_model.BatchSetVodDomainConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchSetVodDomainConfigsWithOptions(request, runtime);
  }

  /**
   * Enables an accelerated domain name that is in the Disabled state.
   * 
   * @remarks
   * - Currently, the only supported endpoint is **China (Shanghai)**.
   * - If the account associated with the domain name has an overdue payment or the domain name is in an illegal state, you cannot call this operation to enable the ApsaraVideo VOD domain name.
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
   * Enables an accelerated domain name that is in the Disabled state.
   * 
   * @remarks
   * - Currently, the only supported endpoint is **China (Shanghai)**.
   * - If the account associated with the domain name has an overdue payment or the domain name is in an illegal state, you cannot call this operation to enable the ApsaraVideo VOD domain name.
   * 
   * @param request - BatchStartVodDomainRequest
   * @returns BatchStartVodDomainResponse
   */
  async batchStartVodDomain(request: $_model.BatchStartVodDomainRequest): Promise<$_model.BatchStartVodDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchStartVodDomainWithOptions(request, runtime);
  }

  /**
   * Pauses domain name acceleration.
   * 
   * @remarks
   * - Currently, the only supported service address is **China (Shanghai)**.
   * - After you pause the accelerated domain name, the domain name information is retained. Requests to the accelerated domain name are automatically redirected to the origin server.
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
   * Pauses domain name acceleration.
   * 
   * @remarks
   * - Currently, the only supported service address is **China (Shanghai)**.
   * - After you pause the accelerated domain name, the domain name information is retained. Requests to the accelerated domain name are automatically redirected to the origin server.
   * 
   * @param request - BatchStopVodDomainRequest
   * @returns BatchStopVodDomainResponse
   */
  async batchStopVodDomain(request: $_model.BatchStopVodDomainRequest): Promise<$_model.BatchStopVodDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchStopVodDomainWithOptions(request, runtime);
  }

  /**
   * Cancels URL upload tasks that are in the queue.
   * 
   * @remarks
   * - You can cancel only URL upload nodes whose status is **Pending**. You can call the [GetURLUploadInfos](https://help.aliyun.com/document_detail/106830.html) operation to query the node status.
   * - Upload nodes that have already started to execute cannot be canceled.
   * - The request parameters JobIds and UploadUrls must have one specified. If both are specified, only JobIds is processed.
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
   * Cancels URL upload tasks that are in the queue.
   * 
   * @remarks
   * - You can cancel only URL upload nodes whose status is **Pending**. You can call the [GetURLUploadInfos](https://help.aliyun.com/document_detail/106830.html) operation to query the node status.
   * - Upload nodes that have already started to execute cannot be canceled.
   * - The request parameters JobIds and UploadUrls must have one specified. If both are specified, only JobIds is processed.
   * 
   * @param request - CancelUrlUploadJobsRequest
   * @returns CancelUrlUploadJobsResponse
   */
  async cancelUrlUploadJobs(request: $_model.CancelUrlUploadJobsRequest): Promise<$_model.CancelUrlUploadJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelUrlUploadJobsWithOptions(request, runtime);
  }

  /**
   * Transfers a resource to a different resource group.
   * 
   * @remarks
   * Transfers a resource to another resource group.
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
   * Transfers a resource to a different resource group.
   * 
   * @remarks
   * Transfers a resource to another resource group.
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
   * Each account can create up to 10 applications. For more information, see [Multi-application development guide](https://help.aliyun.com/document_detail/113600.html).
   * ### QPS limit
   * The single-user QPS limit for this operation is 50 calls per second. If this limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Each account can create up to 10 applications. For more information, see [Multi-application development guide](https://help.aliyun.com/document_detail/113600.html).
   * ### QPS limit
   * The single-user QPS limit for this operation is 50 calls per second. If this limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - CreateAppInfoRequest
   * @returns CreateAppInfoResponse
   */
  async createAppInfo(request: $_model.CreateAppInfoRequest): Promise<$_model.CreateAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppInfoWithOptions(request, runtime);
  }

  /**
   * Submits a manual review request to review media information such as videos and audio files.
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
   * Submits a manual review request to review media information such as videos and audio files.
   * 
   * @param request - CreateAuditRequest
   * @returns CreateAuditResponse
   */
  async createAudit(request: $_model.CreateAuditRequest): Promise<$_model.CreateAuditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAuditWithOptions(request, runtime);
  }

  /**
   * The upload URL and credential are provided by ApsaraVideo VOD to address authorization and security concerns, prevent malicious uploads, and enable automatic creation of a media asset ID (MediaId) for management and processing. For auxiliary media assets such as watermarks and subtitles, invoke this operation to obtain the upload credential and create the corresponding media asset information.
   * 
   * @remarks
   * - **Before using this operation, make sure that you understand the billing methods and pricing of ApsaraVideo VOD. Uploading media files to ApsaraVideo VOD incurs storage fees. For more information, see [Media asset storage billing](~~188308#section_e97_xrp_mzz~~). If you have enabled storage transfer acceleration, uploading media files to ApsaraVideo VOD also incurs upload acceleration fees. For more information, see [Storage transfer acceleration billing](~~188310#section_sta_zm2_tsv~~).**
   * - This operation only obtains the upload URL and credential and creates basic media asset information. It does not upload files. For a complete example of uploading files by using the API, see [Upload media files by using the ApsaraVideo VOD API](https://help.aliyun.com/document_detail/476208.html).
   * - If the upload credential expires (valid for 3000 seconds), call this operation again to obtain a new upload URL and credential.
   * - You can configure callbacks to receive event notifications for [auxiliary media asset upload complete](https://help.aliyun.com/document_detail/103250.html) to determine whether the upload is successful.
   * - Obtaining the upload URL and credential is a core fundamental of ApsaraVideo VOD and a required step for every upload operation. ApsaraVideo VOD provides various upload methods, each with different requirements for obtaining the upload URL and credential. For more information, see the instructions in [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
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
   * The upload URL and credential are provided by ApsaraVideo VOD to address authorization and security concerns, prevent malicious uploads, and enable automatic creation of a media asset ID (MediaId) for management and processing. For auxiliary media assets such as watermarks and subtitles, invoke this operation to obtain the upload credential and create the corresponding media asset information.
   * 
   * @remarks
   * - **Before using this operation, make sure that you understand the billing methods and pricing of ApsaraVideo VOD. Uploading media files to ApsaraVideo VOD incurs storage fees. For more information, see [Media asset storage billing](~~188308#section_e97_xrp_mzz~~). If you have enabled storage transfer acceleration, uploading media files to ApsaraVideo VOD also incurs upload acceleration fees. For more information, see [Storage transfer acceleration billing](~~188310#section_sta_zm2_tsv~~).**
   * - This operation only obtains the upload URL and credential and creates basic media asset information. It does not upload files. For a complete example of uploading files by using the API, see [Upload media files by using the ApsaraVideo VOD API](https://help.aliyun.com/document_detail/476208.html).
   * - If the upload credential expires (valid for 3000 seconds), call this operation again to obtain a new upload URL and credential.
   * - You can configure callbacks to receive event notifications for [auxiliary media asset upload complete](https://help.aliyun.com/document_detail/103250.html) to determine whether the upload is successful.
   * - Obtaining the upload URL and credential is a core fundamental of ApsaraVideo VOD and a required step for every upload operation. ApsaraVideo VOD provides various upload methods, each with different requirements for obtaining the upload URL and credential. For more information, see the instructions in [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
   * 
   * @param request - CreateUploadAttachedMediaRequest
   * @returns CreateUploadAttachedMediaResponse
   */
  async createUploadAttachedMedia(request: $_model.CreateUploadAttachedMediaRequest): Promise<$_model.CreateUploadAttachedMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUploadAttachedMediaWithOptions(request, runtime);
  }

  /**
   * Retrieves the upload URL and upload credential for uploading an image to ApsaraVideo VOD, and creates image information. ApsaraVideo VOD issues upload URLs and credentials to ensure authorization and security, prevent malicious uploads, and supports automatic creation of an image ID (ImageId) for management. You can invoke this operation to obtain the upload URL and credential and create image information.
   * 
   * @remarks
   * - **Before using this operation, make sure that you understand the billing methods and pricing of ApsaraVideo VOD. Uploading media files to ApsaraVideo VOD incurs storage fees. For more information, see [Media asset storage billing](~~188308#section_e97_xrp_mzz~~). If you have enabled storage and transfer acceleration, uploading media files to ApsaraVideo VOD also incurs upload acceleration fees. For more information, see [Storage and transfer acceleration billing](~~188310#section_sta_zm2_tsv~~).**
   * - This operation only retrieves the upload URL and credential and creates basic media asset information. It does not upload files. For a complete example of uploading files by calling API operations, see [Upload media files by using the ApsaraVideo VOD API](https://help.aliyun.com/document_detail/476208.html).
   * - Refreshing the upload URL and credential is not supported for image uploads. If the image upload credential expires (the default validity period is 3000 seconds), call this operation again to obtain a new upload URL and credential.
   * - You can configure callbacks to receive event notifications for [image upload completion](https://help.aliyun.com/document_detail/91968.html) to determine whether the upload is successful.
   * - Retrieving the upload URL and credential is a core operation of ApsaraVideo VOD and is required for every upload. ApsaraVideo VOD provides multiple upload methods, each with different requirements for retrieving the upload URL and credential. For more information, see [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
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
   * Retrieves the upload URL and upload credential for uploading an image to ApsaraVideo VOD, and creates image information. ApsaraVideo VOD issues upload URLs and credentials to ensure authorization and security, prevent malicious uploads, and supports automatic creation of an image ID (ImageId) for management. You can invoke this operation to obtain the upload URL and credential and create image information.
   * 
   * @remarks
   * - **Before using this operation, make sure that you understand the billing methods and pricing of ApsaraVideo VOD. Uploading media files to ApsaraVideo VOD incurs storage fees. For more information, see [Media asset storage billing](~~188308#section_e97_xrp_mzz~~). If you have enabled storage and transfer acceleration, uploading media files to ApsaraVideo VOD also incurs upload acceleration fees. For more information, see [Storage and transfer acceleration billing](~~188310#section_sta_zm2_tsv~~).**
   * - This operation only retrieves the upload URL and credential and creates basic media asset information. It does not upload files. For a complete example of uploading files by calling API operations, see [Upload media files by using the ApsaraVideo VOD API](https://help.aliyun.com/document_detail/476208.html).
   * - Refreshing the upload URL and credential is not supported for image uploads. If the image upload credential expires (the default validity period is 3000 seconds), call this operation again to obtain a new upload URL and credential.
   * - You can configure callbacks to receive event notifications for [image upload completion](https://help.aliyun.com/document_detail/91968.html) to determine whether the upload is successful.
   * - Retrieving the upload URL and credential is a core operation of ApsaraVideo VOD and is required for every upload. ApsaraVideo VOD provides multiple upload methods, each with different requirements for retrieving the upload URL and credential. For more information, see [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
   * 
   * @param request - CreateUploadImageRequest
   * @returns CreateUploadImageResponse
   */
  async createUploadImage(request: $_model.CreateUploadImageRequest): Promise<$_model.CreateUploadImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUploadImageWithOptions(request, runtime);
  }

  /**
   * ApsaraVideo VOD issues the upload URL and upload credential to ensure authorization and security and prevent malicious uploads. During issuance, a media ID (MediaId), also called a video ID (VideoId), undergoes automatic creation for management. Invoke this operation to obtain the upload URL and upload credential, and create audio or video information.
   * 
   * @remarks
   * - **Before you use this operation, make sure that you are familiar with the billing methods and pricing of ApsaraVideo VOD. Uploading media files to ApsaraVideo VOD incurs storage fees. For more information, see [Media asset storage billing](~~188308#section_e97_xrp_mzz~~). If you have enabled storage and transfer acceleration, uploading media files to ApsaraVideo VOD also incurs upload acceleration fees. For more information, see [Storage and transfer acceleration billing](~~188310#section_sta_zm2_tsv~~). Storage fees are calculated from the time when the file is uploaded. Acceleration fees are calculated when you perform upload operations after the feature is enabled. Simply calling this operation does not incur fees.**
   * - Obtaining the upload URL and credential is the core foundation of ApsaraVideo VOD and is a required step for every upload operation. ApsaraVideo VOD provides multiple upload methods, each with different requirements for obtaining the upload URL and credential. For more information, see [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
   * - This operation is used only to obtain the upload URL and credential and create basic media asset information. It does not upload files. For a complete example of uploading files by using API operations, see [Upload media files by using the ApsaraVideo VOD API](https://help.aliyun.com/document_detail/476208.html).
   * - This operation supports obtaining the upload URL and credential for both video and audio files. For more information, see [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
   * - If the upload credential expires (the default validity period is 3000 seconds), call the [RefreshUploadVideo](~~RefreshUploadVideo~~) operation to obtain a new upload credential.
   * - After the upload is complete, you can configure callbacks to receive [upload event notifications](https://help.aliyun.com/document_detail/55396.html) or call the [GetMezzanineInfo](https://help.aliyun.com/document_detail/59624.html) operation to check the file status and determine whether the upload is successful.
   * - The VideoId parameter returned by this operation can be used for media asset lifecycle management or media processing.
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

    if (!$dara.isNull(request.enableFirstFrameCover)) {
      query["EnableFirstFrameCover"] = request.enableFirstFrameCover;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileSize)) {
      query["FileSize"] = request.fileSize;
    }

    if (!$dara.isNull(request.generateThumbnail)) {
      query["GenerateThumbnail"] = request.generateThumbnail;
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
   * ApsaraVideo VOD issues the upload URL and upload credential to ensure authorization and security and prevent malicious uploads. During issuance, a media ID (MediaId), also called a video ID (VideoId), undergoes automatic creation for management. Invoke this operation to obtain the upload URL and upload credential, and create audio or video information.
   * 
   * @remarks
   * - **Before you use this operation, make sure that you are familiar with the billing methods and pricing of ApsaraVideo VOD. Uploading media files to ApsaraVideo VOD incurs storage fees. For more information, see [Media asset storage billing](~~188308#section_e97_xrp_mzz~~). If you have enabled storage and transfer acceleration, uploading media files to ApsaraVideo VOD also incurs upload acceleration fees. For more information, see [Storage and transfer acceleration billing](~~188310#section_sta_zm2_tsv~~). Storage fees are calculated from the time when the file is uploaded. Acceleration fees are calculated when you perform upload operations after the feature is enabled. Simply calling this operation does not incur fees.**
   * - Obtaining the upload URL and credential is the core foundation of ApsaraVideo VOD and is a required step for every upload operation. ApsaraVideo VOD provides multiple upload methods, each with different requirements for obtaining the upload URL and credential. For more information, see [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
   * - This operation is used only to obtain the upload URL and credential and create basic media asset information. It does not upload files. For a complete example of uploading files by using API operations, see [Upload media files by using the ApsaraVideo VOD API](https://help.aliyun.com/document_detail/476208.html).
   * - This operation supports obtaining the upload URL and credential for both video and audio files. For more information, see [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
   * - If the upload credential expires (the default validity period is 3000 seconds), call the [RefreshUploadVideo](~~RefreshUploadVideo~~) operation to obtain a new upload credential.
   * - After the upload is complete, you can configure callbacks to receive [upload event notifications](https://help.aliyun.com/document_detail/55396.html) or call the [GetMezzanineInfo](https://help.aliyun.com/document_detail/59624.html) operation to check the file status and determine whether the upload is successful.
   * - The VideoId parameter returned by this operation can be used for media asset lifecycle management or media processing.
   * 
   * @param request - CreateUploadVideoRequest
   * @returns CreateUploadVideoResponse
   */
  async createUploadVideo(request: $_model.CreateUploadVideoRequest): Promise<$_model.CreateUploadVideoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUploadVideoWithOptions(request, runtime);
  }

  /**
   * Invokes this operation to perform decryption on the CiphertextBlob in a KMS data key (DK).
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
   * Invokes this operation to perform decryption on the CiphertextBlob in a KMS data key (DK).
   * 
   * @param request - DecryptKMSDataKeyRequest
   * @returns DecryptKMSDataKeyResponse
   */
  async decryptKMSDataKey(request: $_model.DecryptKMSDataKeyRequest): Promise<$_model.DecryptKMSDataKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.decryptKMSDataKeyWithOptions(request, runtime);
  }

  /**
   * Deletes AI image information.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)** and **China (Shanghai)**.
   * - **This operation only deletes AI image information and does not actually delete image files**.
   * - A maximum of 10 IDs can be deleted at a time.
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
   * Deletes AI image information.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)** and **China (Shanghai)**.
   * - **This operation only deletes AI image information and does not actually delete image files**.
   * - A maximum of 10 IDs can be deleted at a time.
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
   * - Currently, this operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * - An AI template that is set as the default template cannot be deleted.
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
   * - Currently, this operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * - An AI template that is set as the default template cannot be deleted.
   * 
   * @param request - DeleteAITemplateRequest
   * @returns DeleteAITemplateResponse
   */
  async deleteAITemplate(request: $_model.DeleteAITemplateRequest): Promise<$_model.DeleteAITemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAITemplateWithOptions(request, runtime);
  }

  /**
   * Deletes application information.
   * 
   * @remarks
   * An application cannot be deleted if it contains resources.
   * ### QPS limit
   * The single-user QPS limit for this API is 10 calls per second. If this limit is exceeded, the API calls are throttled, which may affect your business. Call this API appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Deletes application information.
   * 
   * @remarks
   * An application cannot be deleted if it contains resources.
   * ### QPS limit
   * The single-user QPS limit for this API is 10 calls per second. If this limit is exceeded, the API calls are throttled, which may affect your business. Call this API appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - DeleteAppInfoRequest
   * @returns DeleteAppInfoResponse
   */
  async deleteAppInfo(request: $_model.DeleteAppInfoRequest): Promise<$_model.DeleteAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppInfoWithOptions(request, runtime);
  }

  /**
   * Deletes one or more auxiliary media assets that have been uploaded to ApsaraVideo VOD, such as watermark images, subtitle files, and materials.
   * 
   * @remarks
   * - **This operation physically deletes auxiliary media assets. Once deleted, they cannot be recovered. Proceed with caution.**
   * - You can delete up to 20 auxiliary media assets at a time.
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
   * Deletes one or more auxiliary media assets that have been uploaded to ApsaraVideo VOD, such as watermark images, subtitle files, and materials.
   * 
   * @remarks
   * - **This operation physically deletes auxiliary media assets. Once deleted, they cannot be recovered. Proceed with caution.**
   * - You can delete up to 20 auxiliary media assets at a time.
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
   * - **This operation deletes a category and all its subcategories (including second-level and third-level categories). Proceed with caution.**
   * - If a category has been assigned to media assets, deleting the category also removes the category assignment from those media assets.
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
   * - **This operation deletes a category and all its subcategories (including second-level and third-level categories). Proceed with caution.**
   * - If a category has been assigned to media assets, deleting the category also removes the category assignment from those media assets.
   * 
   * @param request - DeleteCategoryRequest
   * @returns DeleteCategoryResponse
   */
  async deleteCategory(request: $_model.DeleteCategoryRequest): Promise<$_model.DeleteCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCategoryWithOptions(request, runtime);
  }

  /**
   * Deletes animated sticker information.
   * 
   * @remarks
   * - This operation only deletes the association between animated stickers and videos. It does not delete the actual animated sticker files.
   * - After the association is deleted, the deleted animated sticker information can no longer be queried by calling the [ListDynamicImage](https://help.aliyun.com/document_detail/180958.html) operation.
   * - If you do not specify **DynamicImageIds**, all animated stickers associated with the specified VideoId are deleted. However, if the video has more than 10 animated stickers, the deletion request is rejected.
   * ### QPS limit
   * The maximum queries per second (QPS) per user for this operation is 10. If the number of calls exceeds the limit, throttling is triggered. This may affect your business. Call this operation as needed. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Deletes animated sticker information.
   * 
   * @remarks
   * - This operation only deletes the association between animated stickers and videos. It does not delete the actual animated sticker files.
   * - After the association is deleted, the deleted animated sticker information can no longer be queried by calling the [ListDynamicImage](https://help.aliyun.com/document_detail/180958.html) operation.
   * - If you do not specify **DynamicImageIds**, all animated stickers associated with the specified VideoId are deleted. However, if the video has more than 10 animated stickers, the deletion request is rejected.
   * ### QPS limit
   * The maximum queries per second (QPS) per user for this operation is 10. If the number of calls exceeds the limit, throttling is triggered. This may affect your business. Call this operation as needed. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - DeleteDynamicImageRequest
   * @returns DeleteDynamicImageResponse
   */
  async deleteDynamicImage(request: $_model.DeleteDynamicImageRequest): Promise<$_model.DeleteDynamicImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDynamicImageWithOptions(request, runtime);
  }

  /**
   * Deletes an online editing project.
   * 
   * @remarks
   * - Supports batch deletion.
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
   * Deletes an online editing project.
   * 
   * @remarks
   * - Supports batch deletion.
   * 
   * @param request - DeleteEditingProjectRequest
   * @returns DeleteEditingProjectResponse
   */
  async deleteEditingProject(request: $_model.DeleteEditingProjectRequest): Promise<$_model.DeleteEditingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEditingProjectWithOptions(request, runtime);
  }

  /**
   * Deletes materials from an online editing project.
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
   * Deletes materials from an online editing project.
   * 
   * @param request - DeleteEditingProjectMaterialsRequest
   * @returns DeleteEditingProjectMaterialsResponse
   */
  async deleteEditingProjectMaterials(request: $_model.DeleteEditingProjectMaterialsRequest): Promise<$_model.DeleteEditingProjectMaterialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEditingProjectMaterialsWithOptions(request, runtime);
  }

  /**
   * Deletes images uploaded by users or images generated from video snapshots.
   * 
   * @remarks
   * - **When you call this operation to delete images, the source files are permanently deleted. This action is irreversible. Once deleted, the images cannot be recovered. Proceed with caution.**
   * - When **DeleteImageType** is set to **VideoId**, **VideoId** and **ImageType** are available and required. 
   * - When **DeleteImageType** is set to **ImageURL**, **ImageIds** and **ImageURLs** are available and required. 
   * - After you call this operation to delete images, CDN caches may still exist in some cases, which means the image URLs may not become invalid immediately.
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
   * Deletes images uploaded by users or images generated from video snapshots.
   * 
   * @remarks
   * - **When you call this operation to delete images, the source files are permanently deleted. This action is irreversible. Once deleted, the images cannot be recovered. Proceed with caution.**
   * - When **DeleteImageType** is set to **VideoId**, **VideoId** and **ImageType** are available and required. 
   * - When **DeleteImageType** is set to **ImageURL**, **ImageIds** and **ImageURLs** are available and required. 
   * - After you call this operation to delete images, CDN caches may still exist in some cases, which means the image URLs may not become invalid immediately.
   * 
   * @param request - DeleteImageRequest
   * @returns DeleteImageResponse
   */
  async deleteImage(request: $_model.DeleteImageRequest): Promise<$_model.DeleteImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  /**
   * Deletes the callback method, callback URL, and event types of an event notification.
   * 
   * @remarks
   * > For more information, see [Event notification development guide](https://help.aliyun.com/document_detail/55627.html).
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
   * Deletes the callback method, callback URL, and event types of an event notification.
   * 
   * @remarks
   * > For more information, see [Event notification development guide](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @param request - DeleteMessageCallbackRequest
   * @returns DeleteMessageCallbackResponse
   */
  async deleteMessageCallback(request: $_model.DeleteMessageCallbackRequest): Promise<$_model.DeleteMessageCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMessageCallbackWithOptions(request, runtime);
  }

  /**
   * Deletes the source files of multiple audio and video files at a time.
   * 
   * @remarks
   * Media processing operations in ApsaraVideo VOD (transcoding, snapshots, automated review, etc.) are performed on source files. Once a source file is deleted, subsequent media processing operations cannot be performed. Proceed with caution.
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
   * Deletes the source files of multiple audio and video files at a time.
   * 
   * @remarks
   * Media processing operations in ApsaraVideo VOD (transcoding, snapshots, automated review, etc.) are performed on source files. Once a source file is deleted, subsequent media processing operations cannot be performed. Proceed with caution.
   * 
   * @param request - DeleteMezzaninesRequest
   * @returns DeleteMezzaninesResponse
   */
  async deleteMezzanines(request: $_model.DeleteMezzaninesRequest): Promise<$_model.DeleteMezzaninesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMezzaninesWithOptions(request, runtime);
  }

  /**
   * Deletes fragment files generated during upload.
   * 
   * @remarks
   * - When you use multipart upload, fragment files may be generated if the upload fails. These fragment files are automatically cleared after 7 days. After the upload is complete or fails, you can call this operation to manually clear the fragment files.
   * - Calling this operation does not delete the original file or transcoded files. It only deletes fragment files generated during the upload process.
   * - Calling the [DeleteVideo](https://help.aliyun.com/document_detail/52837.html) operation deletes the complete video file, including fragment files.
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
   * Deletes fragment files generated during upload.
   * 
   * @remarks
   * - When you use multipart upload, fragment files may be generated if the upload fails. These fragment files are automatically cleared after 7 days. After the upload is complete or fails, you can call this operation to manually clear the fragment files.
   * - Calling this operation does not delete the original file or transcoded files. It only deletes fragment files generated during the upload process.
   * - Calling the [DeleteVideo](https://help.aliyun.com/document_detail/52837.html) operation deletes the complete video file, including fragment files.
   * 
   * @param request - DeleteMultipartUploadRequest
   * @returns DeleteMultipartUploadResponse
   */
  async deleteMultipartUpload(request: $_model.DeleteMultipartUploadRequest): Promise<$_model.DeleteMultipartUploadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMultipartUploadWithOptions(request, runtime);
  }

  /**
   * Deletes media stream (video stream or audio stream) information and storage files.
   * 
   * @remarks
   * ### Usage notes
   * Batch deletion is supported.
   * ### QPS limit
   * A single user can perform a maximum of 50 queries per second (QPS). Throttling is triggered when the QPS limit is exceeded, which may affect your business. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Deletes media stream (video stream or audio stream) information and storage files.
   * 
   * @remarks
   * ### Usage notes
   * Batch deletion is supported.
   * ### QPS limit
   * A single user can perform a maximum of 50 queries per second (QPS). Throttling is triggered when the QPS limit is exceeded, which may affect your business. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - DeleteStreamRequest
   * @returns DeleteStreamResponse
   */
  async deleteStream(request: $_model.DeleteStreamRequest): Promise<$_model.DeleteStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStreamWithOptions(request, runtime);
  }

  /**
   * Deletes transcoding configurations. You can delete specific transcoding templates from a transcoding template group or force delete an entire transcoding template group.
   * 
   * @remarks
   * - Default transcoding templates cannot be deleted. Remove the default designation before deleting them.
   *  - For security protection purposes, a locked transcoding template group cannot be added to, modified, or deleted. Call the [GetTranscodeTemplateGroup](~~GetTranscodeTemplateGroup~~) operation to query the template configuration and check the Locked response parameter to determine whether the template group is locked. Call the [UpdateTranscodeTemplateGroup](~~UpdateTranscodeTemplateGroup~~) operation to unlock the template before making changes.
   *  - If the ForceDelGroup parameter is empty or set to false, the TranscodeTemplateIds parameter is required.
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
   * Deletes transcoding configurations. You can delete specific transcoding templates from a transcoding template group or force delete an entire transcoding template group.
   * 
   * @remarks
   * - Default transcoding templates cannot be deleted. Remove the default designation before deleting them.
   *  - For security protection purposes, a locked transcoding template group cannot be added to, modified, or deleted. Call the [GetTranscodeTemplateGroup](~~GetTranscodeTemplateGroup~~) operation to query the template configuration and check the Locked response parameter to determine whether the template group is locked. Call the [UpdateTranscodeTemplateGroup](~~UpdateTranscodeTemplateGroup~~) operation to unlock the template before making changes.
   *  - If the ForceDelGroup parameter is empty or set to false, the TranscodeTemplateIds parameter is required.
   * 
   * @param request - DeleteTranscodeTemplateGroupRequest
   * @returns DeleteTranscodeTemplateGroupResponse
   */
  async deleteTranscodeTemplateGroup(request: $_model.DeleteTranscodeTemplateGroupRequest): Promise<$_model.DeleteTranscodeTemplateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTranscodeTemplateGroupWithOptions(request, runtime);
  }

  /**
   * Deletes complete videos, including video source files, transcoded stream files, and thumbnails.
   * 
   * @remarks
   * ### Usage notes
   * - **This operation physically deletes videos. Deleted videos cannot be recovered. Proceed with caution.**
   * - Batch deletion is supported.
   * - When you delete a video, the source files are deleted, including the video source file, transcoded stream files, and thumbnails. However, the CDN cache is not refreshed through synchronization. If your business requires it, use the purge feature in the ApsaraVideo VOD console to clear stale data from the point of presence. Related operations: see [Purge and prefetch](https://help.aliyun.com/document_detail/86098.html).
   * ### QPS limit
   * The single-user QPS limit for this operation is 30 calls per second. If the limit is exceeded, the API invoke is throttled, which may affect your business. Invoke this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Deletes complete videos, including video source files, transcoded stream files, and thumbnails.
   * 
   * @remarks
   * ### Usage notes
   * - **This operation physically deletes videos. Deleted videos cannot be recovered. Proceed with caution.**
   * - Batch deletion is supported.
   * - When you delete a video, the source files are deleted, including the video source file, transcoded stream files, and thumbnails. However, the CDN cache is not refreshed through synchronization. If your business requires it, use the purge feature in the ApsaraVideo VOD console to clear stale data from the point of presence. Related operations: see [Purge and prefetch](https://help.aliyun.com/document_detail/86098.html).
   * ### QPS limit
   * The single-user QPS limit for this operation is 30 calls per second. If the limit is exceeded, the API invoke is throttled, which may affect your business. Invoke this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - DeleteVideoRequest
   * @returns DeleteVideoResponse
   */
  async deleteVideo(request: $_model.DeleteVideoRequest): Promise<$_model.DeleteVideoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVideoWithOptions(request, runtime);
  }

  /**
   * Deletes an accelerated domain name that has been added for ApsaraVideo VOD.
   * 
   * @remarks
   * >- Currently, the only supported service region is **China (Shanghai)**.
   * >- This operation makes the domain name inaccessible. Proceed with caution. Before deleting the domain name, restore the A record of the domain name at your DNS service provider.
   * >- After the domain name is successfully deleted, all related records of the ApsaraVideo VOD domain name are deleted. If you only want to temporarily disable the domain name, use the [DisableVodDomainOffline](https://help.aliyun.com/document_detail/120208.html) operation.
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
   * Deletes an accelerated domain name that has been added for ApsaraVideo VOD.
   * 
   * @remarks
   * >- Currently, the only supported service region is **China (Shanghai)**.
   * >- This operation makes the domain name inaccessible. Proceed with caution. Before deleting the domain name, restore the A record of the domain name at your DNS service provider.
   * >- After the domain name is successfully deleted, all related records of the ApsaraVideo VOD domain name are deleted. If you only want to temporarily disable the domain name, use the [DisableVodDomainOffline](https://help.aliyun.com/document_detail/120208.html) operation.
   * 
   * @param request - DeleteVodDomainRequest
   * @returns DeleteVodDomainResponse
   */
  async deleteVodDomain(request: $_model.DeleteVodDomainRequest): Promise<$_model.DeleteVodDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVodDomainWithOptions(request, runtime);
  }

  /**
   * Deletes the configurations of a domain name for CDN acceleration in ApsaraVideo VOD.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - This operation causes the domain name to become inaccessible. Before deleting the domain name, restore the A record of the domain name at your DNS service provider.
   * - After the domain name is successfully deleted, all related records of the ApsaraVideo VOD domain name are removed. If you only want to temporarily disable the domain name, use the [DisableVodRealtimeLogDelivery](https://help.aliyun.com/document_detail/120208.html) operation.
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
   * Deletes the configurations of a domain name for CDN acceleration in ApsaraVideo VOD.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - This operation causes the domain name to become inaccessible. Before deleting the domain name, restore the A record of the domain name at your DNS service provider.
   * - After the domain name is successfully deleted, all related records of the ApsaraVideo VOD domain name are removed. If you only want to temporarily disable the domain name, use the [DisableVodRealtimeLogDelivery](https://help.aliyun.com/document_detail/120208.html) operation.
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
   * Deletes an image watermark template or text watermark template by watermark template ID.
   * 
   * @remarks
   * - **When you delete an image watermark template, the watermark source file is physically deleted and cannot be recovered. Proceed with caution.**
   * - A watermark template that has been set as the default watermark template cannot be deleted. To delete it, call [SetDefaultWatermark](~~SetDefaultWatermark~~) to set another watermark template as the default template to remove the default status, and then delete it.
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
   * Deletes an image watermark template or text watermark template by watermark template ID.
   * 
   * @remarks
   * - **When you delete an image watermark template, the watermark source file is physically deleted and cannot be recovered. Proceed with caution.**
   * - A watermark template that has been set as the default watermark template cannot be deleted. To delete it, call [SetDefaultWatermark](~~SetDefaultWatermark~~) to set another watermark template as the default template to remove the default status, and then delete it.
   * 
   * @param request - DeleteWatermarkRequest
   * @returns DeleteWatermarkResponse
   */
  async deleteWatermark(request: $_model.DeleteWatermarkRequest): Promise<$_model.DeleteWatermarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWatermarkWithOptions(request, runtime);
  }

  /**
   * Queries the time-based distribution of audio and video media assets. The maximum time span between the start time and end time is six months.
   * 
   * @remarks
   * - Currently, this operation is supported only in the China (Shanghai) region.
   * - If you do not specify StartTime and EndTime, this operation returns data for the past 7 days by default. If you specify StartTime and EndTime, this operation returns data for the specified time range.
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
   * Queries the time-based distribution of audio and video media assets. The maximum time span between the start time and end time is six months.
   * 
   * @remarks
   * - Currently, this operation is supported only in the China (Shanghai) region.
   * - If you do not specify StartTime and EndTime, this operation returns data for the past 7 days by default. If you specify StartTime and EndTime, this operation returns data for the specified time range.
   * 
   * @param request - DescribeMediaDistributionRequest
   * @returns DescribeMediaDistributionResponse
   */
  async describeMediaDistribution(request: $_model.DescribeMediaDistributionRequest): Promise<$_model.DescribeMediaDistributionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMediaDistributionWithOptions(request, runtime);
  }

  /**
   * Retrieves daily playback statistics for top videos, including the number of views, unique viewers, and total playback duration.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - You can query playback statistics for up to the top 1000 videos per day. The top video list is sorted in descending order by the number of views by default.
   * - Only playback data collected through ApsaraVideo Player SDK is supported.
   * - Based on UTC+8, playback statistics for the previous day are generated at 9:00 AM each day.
   * - You can query data generated after January 1, 2018. The maximum time range for a query is 180 days.
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
   * Retrieves daily playback statistics for top videos, including the number of views, unique viewers, and total playback duration.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - You can query playback statistics for up to the top 1000 videos per day. The top video list is sorted in descending order by the number of views by default.
   * - Only playback data collected through ApsaraVideo Player SDK is supported.
   * - Based on UTC+8, playback statistics for the previous day are generated at 9:00 AM each day.
   * - You can query data generated after January 1, 2018. The maximum time range for a query is 180 days.
   * 
   * @param request - DescribePlayTopVideosRequest
   * @returns DescribePlayTopVideosResponse
   */
  async describePlayTopVideos(request: $_model.DescribePlayTopVideosRequest): Promise<$_model.DescribePlayTopVideosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlayTopVideosWithOptions(request, runtime);
  }

  /**
   * Retrieves daily average playback statistics for a specified time range, including average playback duration and average playback count.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - Only playback data collected through ApsaraVideo Player SDK is supported.
   * - Playback statistics for the previous day are generated at 9:00 AM (UTC+8) each day.
   * - You can query data generated after 2018-01-01. The maximum time range between the start time and end time is 180 days.
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
   * Retrieves daily average playback statistics for a specified time range, including average playback duration and average playback count.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - Only playback data collected through ApsaraVideo Player SDK is supported.
   * - Playback statistics for the previous day are generated at 9:00 AM (UTC+8) each day.
   * - You can query data generated after 2018-01-01. The maximum time range between the start time and end time is 180 days.
   * 
   * @param request - DescribePlayUserAvgRequest
   * @returns DescribePlayUserAvgResponse
   */
  async describePlayUserAvg(request: $_model.DescribePlayUserAvgRequest): Promise<$_model.DescribePlayUserAvgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlayUserAvgWithOptions(request, runtime);
  }

  /**
   * Retrieves the total daily playback statistics within a specified time range, including total play count, total unique viewers, total playback duration, and playback duration distribution.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - Only playback data from ApsaraVideo Player SDK is supported.
   * - Based on UTC+8, playback statistics for the previous day are generated at 9:00 AM each day.
   * - Data after 2018-01-01 can be queried. The maximum time span between the start time and end time is 180 days.
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
   * Retrieves the total daily playback statistics within a specified time range, including total play count, total unique viewers, total playback duration, and playback duration distribution.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - Only playback data from ApsaraVideo Player SDK is supported.
   * - Based on UTC+8, playback statistics for the previous day are generated at 9:00 AM each day.
   * - Data after 2018-01-01 can be queried. The maximum time span between the start time and end time is 180 days.
   * 
   * @param request - DescribePlayUserTotalRequest
   * @returns DescribePlayUserTotalResponse
   */
  async describePlayUserTotal(request: $_model.DescribePlayUserTotalRequest): Promise<$_model.DescribePlayUserTotalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlayUserTotalWithOptions(request, runtime);
  }

  /**
   * Queries the daily playback statistics of a specified video within a specified time range. The statistics include total playback duration, number of playbacks, number of unique viewers, and playback duration distribution.
   * 
   * @remarks
   * - Currently, the service address supports only **China (Shanghai)**.
   * - Only playback data of videos that use ApsaraVideo Player SDK and rank in the top 1,000 by daily playback count is supported.
   * - Based on UTC+8, playback statistics for the previous day are generated at 9:00 AM each day.
   *  - Only data within the last 2 years (730 days) can be queried, and the maximum time span between the start time and end time is 180 days.
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
   * Queries the daily playback statistics of a specified video within a specified time range. The statistics include total playback duration, number of playbacks, number of unique viewers, and playback duration distribution.
   * 
   * @remarks
   * - Currently, the service address supports only **China (Shanghai)**.
   * - Only playback data of videos that use ApsaraVideo Player SDK and rank in the top 1,000 by daily playback count is supported.
   * - Based on UTC+8, playback statistics for the previous day are generated at 9:00 AM each day.
   *  - Only data within the last 2 years (730 days) can be queried, and the maximum time span between the start time and end time is 180 days.
   * 
   * @param request - DescribePlayVideoStatisRequest
   * @returns DescribePlayVideoStatisResponse
   */
  async describePlayVideoStatis(request: $_model.DescribePlayVideoStatisRequest): Promise<$_model.DescribePlayVideoStatisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlayVideoStatisWithOptions(request, runtime);
  }

  /**
   * Queries usage data of AI processing services such as automated review and media fingerprint.
   * 
   * @remarks
   * - Currently, the service address supports only **China (Shanghai)**.
   * - If the interval between the start time and end time is within 7 days, hourly data is returned. If the interval is greater than 7 days, daily data is returned. The maximum interval is 31 days.
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
   * Queries usage data of AI processing services such as automated review and media fingerprint.
   * 
   * @remarks
   * - Currently, the service address supports only **China (Shanghai)**.
   * - If the interval between the start time and end time is within 7 days, hourly data is returned. If the interval is greater than 7 days, daily data is returned. The maximum interval is 31 days.
   * 
   * @param request - DescribeVodAIDataRequest
   * @returns DescribeVodAIDataResponse
   */
  async describeVodAIData(request: $_model.DescribeVodAIDataRequest): Promise<$_model.DescribeVodAIDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodAIDataWithOptions(request, runtime);
  }

  /**
   * Queries the certificate list information.
   * 
   * @remarks
   * - Currently, the service address is supported only in the **China (Shanghai)** region.
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
   * Queries the certificate list information.
   * 
   * @remarks
   * - Currently, the service address is supported only in the **China (Shanghai)** region.
   * 
   * @param request - DescribeVodCertificateListRequest
   * @returns DescribeVodCertificateListResponse
   */
  async describeVodCertificateList(request: $_model.DescribeVodCertificateListRequest): Promise<$_model.DescribeVodCertificateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodCertificateListWithOptions(request, runtime);
  }

  /**
   * Invokes this operation to query the bandwidth data of an accelerated domain name. Compared with the DescribeVodDomainRealTimeBpsData operation, this operation supports a longer time range for historical data queries (up to 366 days) but provides a larger data time granularity (minimum of 5 minutes) and higher data latency.
   * 
   * @remarks
   * - Currently, this operation is available only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data for up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data for the past 24 hours by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * **Time granularity of returned data**
   * If you specify `StartTime` and `EndTime` without Settings for `Interval`, the default time granularity of returned data, the queryable historical data time range, and the data latency are as follows:
   * |Time granularity  |Time span per query   |  Queryable historical data time range  |  Data latency   |
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes  | Time span per query < 3 days   |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time span per query < 31 days  |186 days  |Generally 3-4 hours  |
   * | 1 day | 31 days ≤ Time span per query ≤ 90 days |366 days  |Generally 4 hours, no more than 24 hours  |
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
   * Invokes this operation to query the bandwidth data of an accelerated domain name. Compared with the DescribeVodDomainRealTimeBpsData operation, this operation supports a longer time range for historical data queries (up to 366 days) but provides a larger data time granularity (minimum of 5 minutes) and higher data latency.
   * 
   * @remarks
   * - Currently, this operation is available only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data for up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data for the past 24 hours by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * **Time granularity of returned data**
   * If you specify `StartTime` and `EndTime` without Settings for `Interval`, the default time granularity of returned data, the queryable historical data time range, and the data latency are as follows:
   * |Time granularity  |Time span per query   |  Queryable historical data time range  |  Data latency   |
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes  | Time span per query < 3 days   |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time span per query < 31 days  |186 days  |Generally 3-4 hours  |
   * | 1 day | 31 days ≤ Time span per query ≤ 90 days |366 days  |Generally 4 hours, no more than 24 hours  |
   * 
   * @param request - DescribeVodDomainBpsDataRequest
   * @returns DescribeVodDomainBpsDataResponse
   */
  async describeVodDomainBpsData(request: $_model.DescribeVodDomainBpsDataRequest): Promise<$_model.DescribeVodDomainBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainBpsDataWithOptions(request, runtime);
  }

  /**
   * Queries bandwidth data of accelerated domain names by protocol type.
   * 
   * @remarks
   * - Currently, this operation is supported only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data of up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data of the last 24 hours by default. If you specify `StartTime` and `EndTime`, this operation returns data of the specified time range.
   * **Time granularity of returned data**
   * If you specify `StartTime` and `EndTime` without configuring `Interval`, the default time granularity, the maximum time range for historical data queries, and the data delay are as follows:
   * |Time granularity  |Time range per query   |  Maximum time range for historical data queries  |  Data delay   |
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes  | Time range per query < 3 days   |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time range per query < 31 days  |186 days  |Typically 3 to 4 hours  |
   * | 1 day | 31 days ≤ Time range per query ≤ 366 days |366 days  |Typically 4 hours, up to 24 hours  |
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
   * Queries bandwidth data of accelerated domain names by protocol type.
   * 
   * @remarks
   * - Currently, this operation is supported only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data of up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data of the last 24 hours by default. If you specify `StartTime` and `EndTime`, this operation returns data of the specified time range.
   * **Time granularity of returned data**
   * If you specify `StartTime` and `EndTime` without configuring `Interval`, the default time granularity, the maximum time range for historical data queries, and the data delay are as follows:
   * |Time granularity  |Time range per query   |  Maximum time range for historical data queries  |  Data delay   |
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes  | Time range per query < 3 days   |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time range per query < 31 days  |186 days  |Typically 3 to 4 hours  |
   * | 1 day | 31 days ≤ Time range per query ≤ 366 days |366 days  |Typically 4 hours, up to 24 hours  |
   * 
   * @param request - DescribeVodDomainBpsDataByLayerRequest
   * @returns DescribeVodDomainBpsDataByLayerResponse
   */
  async describeVodDomainBpsDataByLayer(request: $_model.DescribeVodDomainBpsDataByLayerRequest): Promise<$_model.DescribeVodDomainBpsDataByLayerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainBpsDataByLayerWithOptions(request, runtime);
  }

  /**
   * Retrieves the certificate information of a specified accelerated domain name.
   * 
   * @remarks
   * Currently, the only supported service region is **China (Shanghai)**.
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

    if (!$dara.isNull(request.heraApiAutoVersion)) {
      query["HeraApiAutoVersion"] = request.heraApiAutoVersion;
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
   * Retrieves the certificate information of a specified accelerated domain name.
   * 
   * @remarks
   * Currently, the only supported service region is **China (Shanghai)**.
   * 
   * @param request - DescribeVodDomainCertificateInfoRequest
   * @returns DescribeVodDomainCertificateInfoResponse
   */
  async describeVodDomainCertificateInfo(request: $_model.DescribeVodDomainCertificateInfoRequest): Promise<$_model.DescribeVodDomainCertificateInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainCertificateInfoWithOptions(request, runtime);
  }

  /**
   * Queries domain name configurations. You can query multiple feature configurations in a single request.
   * 
   * @remarks
   * - Currently, the service address supports only **China (Shanghai)**.
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
   * Queries domain name configurations. You can query multiple feature configurations in a single request.
   * 
   * @remarks
   * - Currently, the service address supports only **China (Shanghai)**.
   * 
   * @param request - DescribeVodDomainConfigsRequest
   * @returns DescribeVodDomainConfigsResponse
   */
  async describeVodDomainConfigs(request: $_model.DescribeVodDomainConfigsRequest): Promise<$_model.DescribeVodDomainConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainConfigsWithOptions(request, runtime);
  }

  /**
   * Retrieves the basic configuration information of a specified China domain name for video-on-demand (VOD) acceleration.
   * 
   * @remarks
   * Currently, the China service address supports only **China (Shanghai)**.
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
   * Retrieves the basic configuration information of a specified China domain name for video-on-demand (VOD) acceleration.
   * 
   * @remarks
   * Currently, the China service address supports only **China (Shanghai)**.
   * 
   * @param request - DescribeVodDomainDetailRequest
   * @returns DescribeVodDomainDetailResponse
   */
  async describeVodDomainDetail(request: $_model.DescribeVodDomainDetailRequest): Promise<$_model.DescribeVodDomainDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainDetailWithOptions(request, runtime);
  }

  /**
   * Queries the byte hit ratio (percentage of hit bytes) of an accelerated domain name.
   * 
   * @remarks
   * - Currently, this operation is supported only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data for up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, data from the past 24 hours is returned by default. If you specify `StartTime` and `EndTime`, data for the specified time range is returned.
   * **Time granularity of returned data**
   * If you specify `StartTime` and `EndTime` without setting `Interval`, the default time granularity, the maximum time range for historical data queries, and the data delay are as follows:
   * |Time granularity  |Time span per query   |  Maximum time range for historical data queries  |  Data delay   |
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes  | Time span per query < 3 days   |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time span per query < 31 days  |186 days  |Generally 3 to 4 hours  |
   * | 1 day | 31 days ≤ Time span per query ≤ 366 days |366 days  |Generally 4 hours, up to 24 hours  |
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
   * Queries the byte hit ratio (percentage of hit bytes) of an accelerated domain name.
   * 
   * @remarks
   * - Currently, this operation is supported only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data for up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, data from the past 24 hours is returned by default. If you specify `StartTime` and `EndTime`, data for the specified time range is returned.
   * **Time granularity of returned data**
   * If you specify `StartTime` and `EndTime` without setting `Interval`, the default time granularity, the maximum time range for historical data queries, and the data delay are as follows:
   * |Time granularity  |Time span per query   |  Maximum time range for historical data queries  |  Data delay   |
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes  | Time span per query < 3 days   |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time span per query < 31 days  |186 days  |Generally 3 to 4 hours  |
   * | 1 day | 31 days ≤ Time span per query ≤ 366 days |366 days  |Generally 4 hours, up to 24 hours  |
   * 
   * @param request - DescribeVodDomainHitRateDataRequest
   * @returns DescribeVodDomainHitRateDataResponse
   */
  async describeVodDomainHitRateData(request: $_model.DescribeVodDomainHitRateDataRequest): Promise<$_model.DescribeVodDomainHitRateDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainHitRateDataWithOptions(request, runtime);
  }

  /**
   * Retrieves the download URLs of raw CDN access logs for a specified domain name.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - For details about log formats and latency, refer to [Log Management](https://help.aliyun.com/document_detail/86099.html).
   * - If you do not specify StartTime and EndTime, log data from the past 24 hours is returned by default.
   * - StartTime and EndTime must be specified together to query logs within the specified time range.
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
   * Retrieves the download URLs of raw CDN access logs for a specified domain name.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - For details about log formats and latency, refer to [Log Management](https://help.aliyun.com/document_detail/86099.html).
   * - If you do not specify StartTime and EndTime, log data from the past 24 hours is returned by default.
   * - StartTime and EndTime must be specified together to query logs within the specified time range.
   * 
   * @param request - DescribeVodDomainLogRequest
   * @returns DescribeVodDomainLogResponse
   */
  async describeVodDomainLog(request: $_model.DescribeVodDomainLogRequest): Promise<$_model.DescribeVodDomainLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainLogWithOptions(request, runtime);
  }

  /**
   * Queries the 95th percentile bandwidth monitoring data for accelerated domain names.
   * 
   * @remarks
   * *Three query methods are available:**
   * - When both StartTime and EndTime are specified: if the difference between EndTime and StartTime is within 24 hours, the 95th percentile bandwidth of the day that contains StartTime is returned. Otherwise, the 95th percentile bandwidth of the month that contains StartTime is returned.
   * - When both TimePoint and Cycle are specified, the 95th percentile bandwidth of the cycle that contains TimePoint is returned.
   * - When StartTime and EndTime are specified with an additional Cycle parameter, the 95th percentile bandwidth for all specified cycles within the query range is returned.
   * If none of these three methods are specified, the 95th percentile bandwidth of the past 24 hours is returned by default.
   * - Maximum query span: 90 days.
   * - Minimum query granularity: 1 day.
   * - Maximum query range: 90 days.
   * - Maximum number of calls per user per second: 100.
   * - Data unit: bit/s.
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
   * Queries the 95th percentile bandwidth monitoring data for accelerated domain names.
   * 
   * @remarks
   * *Three query methods are available:**
   * - When both StartTime and EndTime are specified: if the difference between EndTime and StartTime is within 24 hours, the 95th percentile bandwidth of the day that contains StartTime is returned. Otherwise, the 95th percentile bandwidth of the month that contains StartTime is returned.
   * - When both TimePoint and Cycle are specified, the 95th percentile bandwidth of the cycle that contains TimePoint is returned.
   * - When StartTime and EndTime are specified with an additional Cycle parameter, the 95th percentile bandwidth for all specified cycles within the query range is returned.
   * If none of these three methods are specified, the 95th percentile bandwidth of the past 24 hours is returned by default.
   * - Maximum query span: 90 days.
   * - Minimum query granularity: 1 day.
   * - Maximum query range: 90 days.
   * - Maximum number of calls per user per second: 100.
   * - Data unit: bit/s.
   * 
   * @param request - DescribeVodDomainMax95BpsDataRequest
   * @returns DescribeVodDomainMax95BpsDataResponse
   */
  async describeVodDomainMax95BpsData(request: $_model.DescribeVodDomainMax95BpsDataRequest): Promise<$_model.DescribeVodDomainMax95BpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainMax95BpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the queries per second (QPS) of accelerated domain names at a 5-minute granularity. Data from the last 90 days is supported.
   * 
   * @remarks
   * - Currently, this operation is supported only in the **China (Shanghai)** region.
   * - Maximum call frequency per user: 100 calls per second.
   * - If you do not specify StartTime and EndTime, this operation returns data from the last 24 hours. If you specify StartTime and EndTime, this operation returns data for the specified time range.
   * **Supported time granularities**
   * The Interval request parameter supports different data time granularities based on the maximum time range per query. The following table describes the queryable historical data time range and data latency for each time granularity:
   * |Time granularity	|Maximum time range per query	|Queryable historical data time range	|Data latency
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes	|3 days	|93 days	|15 minutes
   * |1 hour	|31 days	|186 days	|Typically 3-4 hours
   * |1 day	|366 days	|366 days	|Typically 4 hours, no more than 24 hours
   * *********
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
   * Queries the queries per second (QPS) of accelerated domain names at a 5-minute granularity. Data from the last 90 days is supported.
   * 
   * @remarks
   * - Currently, this operation is supported only in the **China (Shanghai)** region.
   * - Maximum call frequency per user: 100 calls per second.
   * - If you do not specify StartTime and EndTime, this operation returns data from the last 24 hours. If you specify StartTime and EndTime, this operation returns data for the specified time range.
   * **Supported time granularities**
   * The Interval request parameter supports different data time granularities based on the maximum time range per query. The following table describes the queryable historical data time range and data latency for each time granularity:
   * |Time granularity	|Maximum time range per query	|Queryable historical data time range	|Data latency
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes	|3 days	|93 days	|15 minutes
   * |1 hour	|31 days	|186 days	|Typically 3-4 hours
   * |1 day	|366 days	|366 days	|Typically 4 hours, no more than 24 hours
   * *********
   * 
   * @param request - DescribeVodDomainQpsDataRequest
   * @returns DescribeVodDomainQpsDataResponse
   */
  async describeVodDomainQpsData(request: $_model.DescribeVodDomainQpsDataRequest): Promise<$_model.DescribeVodDomainQpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainQpsDataWithOptions(request, runtime);
  }

  /**
   * Invokes this operation to query the bandwidth data of an accelerated domain name. Compared with the DescribeVodDomainBpsData operation, this operation supports a smaller time granularity (minimum of 1 minute), lower data latency (minimum of 5 minutes), but a shorter historical data time range (up to 186 days).
   * 
   * @remarks
   * - Currently, this operation is supported only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data for up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data for the last hour by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * **Time granularity of returned data**
   * The time granularity of returned data varies based on the time range specified by `StartTime` and `EndTime`. The following table describes the queryable historical data time range and data latency for each time granularity:
   * |Time granularity  |Time range per query   |  Queryable historical data time range  |  Data latency   |
   * | ------------- |------------   | ----------- | ----------- |
   * |1 minute  | Time range per query ≤ 1 hour   |7 days  |5 minutes  |
   * |5 minutes  | 1 hour < Time range per query < 3 days  |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time range per query < 31 days |186 days  |Generally 3 to 4 hours  |
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
   * Invokes this operation to query the bandwidth data of an accelerated domain name. Compared with the DescribeVodDomainBpsData operation, this operation supports a smaller time granularity (minimum of 1 minute), lower data latency (minimum of 5 minutes), but a shorter historical data time range (up to 186 days).
   * 
   * @remarks
   * - Currently, this operation is supported only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data for up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data for the last hour by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * **Time granularity of returned data**
   * The time granularity of returned data varies based on the time range specified by `StartTime` and `EndTime`. The following table describes the queryable historical data time range and data latency for each time granularity:
   * |Time granularity  |Time range per query   |  Queryable historical data time range  |  Data latency   |
   * | ------------- |------------   | ----------- | ----------- |
   * |1 minute  | Time range per query ≤ 1 hour   |7 days  |5 minutes  |
   * |5 minutes  | 1 hour < Time range per query < 3 days  |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time range per query < 31 days |186 days  |Generally 3 to 4 hours  |
   * 
   * @param request - DescribeVodDomainRealTimeBpsDataRequest
   * @returns DescribeVodDomainRealTimeBpsDataResponse
   */
  async describeVodDomainRealTimeBpsData(request: $_model.DescribeVodDomainRealTimeBpsDataRequest): Promise<$_model.DescribeVodDomainRealTimeBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRealTimeBpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the byte hit rate data of accelerated domain names. This operation supports a minimum time granularity of 1 minute, with a data delay of at least 5 minutes, and allows you to query data from the last 186 days.
   * 
   * @remarks
   * - Currently, this operation is supported only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data for up to 100 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data from the last hour by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * **Time granularity of returned data**
   * The time granularity of returned data varies based on the time range specified by `StartTime` and `EndTime`. The following table describes the queryable historical data range and data delay for each time granularity:
   * |Time granularity  |Time range per query   |  Queryable historical data range  |  Data delay   |
   * | ------------- |------------   | ----------- | ----------- |
   * |1 minute  | Time range per query ≤ 1 hour   |7 days  |5 minutes  |
   * |5 minutes  | 1 hour < Time range per query < 3 days  |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time range per query < 31 days |186 days  |Typically 3 to 4 hours  |
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
   * Queries the byte hit rate data of accelerated domain names. This operation supports a minimum time granularity of 1 minute, with a data delay of at least 5 minutes, and allows you to query data from the last 186 days.
   * 
   * @remarks
   * - Currently, this operation is supported only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data for up to 100 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data from the last hour by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * **Time granularity of returned data**
   * The time granularity of returned data varies based on the time range specified by `StartTime` and `EndTime`. The following table describes the queryable historical data range and data delay for each time granularity:
   * |Time granularity  |Time range per query   |  Queryable historical data range  |  Data delay   |
   * | ------------- |------------   | ----------- | ----------- |
   * |1 minute  | Time range per query ≤ 1 hour   |7 days  |5 minutes  |
   * |5 minutes  | 1 hour < Time range per query < 3 days  |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time range per query < 31 days |186 days  |Typically 3 to 4 hours  |
   * 
   * @param request - DescribeVodDomainRealTimeByteHitRateDataRequest
   * @returns DescribeVodDomainRealTimeByteHitRateDataResponse
   */
  async describeVodDomainRealTimeByteHitRateData(request: $_model.DescribeVodDomainRealTimeByteHitRateDataRequest): Promise<$_model.DescribeVodDomainRealTimeByteHitRateDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRealTimeByteHitRateDataWithOptions(request, runtime);
  }

  /**
   * Queries real-time access data for accelerated domain names, including QPS, bandwidth, and HTTP status code data within the last 7 days.
   * 
   * @remarks
   * - Currently, this operation is available only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data for up to 20 domain names at a time.
   * - The maximum time range per query (the time range between StartTime and EndTime) is 10 minutes, and data is returned at a time granularity of 1 minute.
   * - Only data within the last 7 days can be queried.
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
   * Queries real-time access data for accelerated domain names, including QPS, bandwidth, and HTTP status code data within the last 7 days.
   * 
   * @remarks
   * - Currently, this operation is available only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data for up to 20 domain names at a time.
   * - The maximum time range per query (the time range between StartTime and EndTime) is 10 minutes, and data is returned at a time granularity of 1 minute.
   * - Only data within the last 7 days can be queried.
   * 
   * @param request - DescribeVodDomainRealTimeDetailDataRequest
   * @returns DescribeVodDomainRealTimeDetailDataResponse
   */
  async describeVodDomainRealTimeDetailData(request: $_model.DescribeVodDomainRealTimeDetailDataRequest): Promise<$_model.DescribeVodDomainRealTimeDetailDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRealTimeDetailDataWithOptions(request, runtime);
  }

  /**
   * Queries the total number and proportion of HTTP status codes for an accelerated domain name. This operation supports a minimum data time granularity of 1 minute, with a data delay of at least 5 minutes, and allows you to query data from the last 186 days.
   * 
   * @remarks
   * - Currently, this operation is available only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data for up to 100 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data from the last hour by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * **Time granularity of returned data**
   * The time granularity of returned data varies based on the time range specified by `StartTime` and `EndTime`. The following table describes the queryable historical data range and data delay for each time granularity:
   * |Time granularity  |Time range per query   |  Queryable historical data range  |  Data delay   |
   * | ------------- |------------   | ----------- | ----------- |
   * |1 minute  | Time range per query ≤ 1 hour   |7 days  |5 minutes  |
   * |5 minutes  | 1 hour < Time range per query < 3 days  |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time range per query < 31 days |186 days  |Typically 3 to 4 hours  |
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
   * Queries the total number and proportion of HTTP status codes for an accelerated domain name. This operation supports a minimum data time granularity of 1 minute, with a data delay of at least 5 minutes, and allows you to query data from the last 186 days.
   * 
   * @remarks
   * - Currently, this operation is available only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data for up to 100 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data from the last hour by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * **Time granularity of returned data**
   * The time granularity of returned data varies based on the time range specified by `StartTime` and `EndTime`. The following table describes the queryable historical data range and data delay for each time granularity:
   * |Time granularity  |Time range per query   |  Queryable historical data range  |  Data delay   |
   * | ------------- |------------   | ----------- | ----------- |
   * |1 minute  | Time range per query ≤ 1 hour   |7 days  |5 minutes  |
   * |5 minutes  | 1 hour < Time range per query < 3 days  |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time range per query < 31 days |186 days  |Typically 3 to 4 hours  |
   * 
   * @param request - DescribeVodDomainRealTimeHttpCodeDataRequest
   * @returns DescribeVodDomainRealTimeHttpCodeDataResponse
   */
  async describeVodDomainRealTimeHttpCodeData(request: $_model.DescribeVodDomainRealTimeHttpCodeDataRequest): Promise<$_model.DescribeVodDomainRealTimeHttpCodeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRealTimeHttpCodeDataWithOptions(request, runtime);
  }

  /**
   * Invoke this operation to query the queries per second (QPS) data for access to an accelerated domain name. This operation supports a minimum data time granularity of 1 minute, with a data delay of at least 5 minutes, and allows you to query data from the last 186 days.
   * 
   * @remarks
   * - Currently, this operation is available only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data for up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data from the last hour by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * **Time granularity of returned data**
   * The time granularity of returned data varies based on the time range specified by `StartTime` and `EndTime`. The following table describes the queryable historical data range and data delay for each time granularity:
   * |Time granularity  |Time range per query   |  Queryable historical data range  |  Data delay   |
   * | ------------- |------------   | ----------- | ----------- |
   * |1 minute  | Time range per query ≤ 1 hour   |7 days  |5 minutes  |
   * |5 minutes  | 1 hour < Time range per query < 3 days  |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time range per query < 31 days |186 days  |Typically 3 to 4 hours  |
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
   * Invoke this operation to query the queries per second (QPS) data for access to an accelerated domain name. This operation supports a minimum data time granularity of 1 minute, with a data delay of at least 5 minutes, and allows you to query data from the last 186 days.
   * 
   * @remarks
   * - Currently, this operation is available only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data for up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data from the last hour by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * **Time granularity of returned data**
   * The time granularity of returned data varies based on the time range specified by `StartTime` and `EndTime`. The following table describes the queryable historical data range and data delay for each time granularity:
   * |Time granularity  |Time range per query   |  Queryable historical data range  |  Data delay   |
   * | ------------- |------------   | ----------- | ----------- |
   * |1 minute  | Time range per query ≤ 1 hour   |7 days  |5 minutes  |
   * |5 minutes  | 1 hour < Time range per query < 3 days  |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time range per query < 31 days |186 days  |Typically 3 to 4 hours  |
   * 
   * @param request - DescribeVodDomainRealTimeQpsDataRequest
   * @returns DescribeVodDomainRealTimeQpsDataResponse
   */
  async describeVodDomainRealTimeQpsData(request: $_model.DescribeVodDomainRealTimeQpsDataRequest): Promise<$_model.DescribeVodDomainRealTimeQpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRealTimeQpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the request hit ratio data for an accelerated domain name. The minimum time granularity for data queried by this operation is 1 minute. The data latency is at least 5 minutes. You can query data for up to the last 186 days.
   * 
   * @remarks
   * - Currently, this operation is supported only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data for up to 100 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data for the last 1 hour by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * - The Go language uses the POST method by default. Manually change the request method to GET by declaring `request.Method="GET"`.
   * **Time granularity of returned data**
   * The time granularity of returned data varies based on the time range specified by `StartTime` and `EndTime`. The following table describes the queryable historical data range and data latency for each time granularity:
   * |Time granularity  |Time range per query   |  Queryable historical data range  |  Data latency   |
   * | ------------- |------------   | ----------- | ----------- |
   * |1 minute  | Time range per query ≤ 1 hour   |7 days  |5 minutes  |
   * |5 minutes  | 1 hour < Time range per query < 3 days  |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time range per query < 31 days |186 days  |Typically 3 to 4 hours  |
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
   * Queries the request hit ratio data for an accelerated domain name. The minimum time granularity for data queried by this operation is 1 minute. The data latency is at least 5 minutes. You can query data for up to the last 186 days.
   * 
   * @remarks
   * - Currently, this operation is supported only in the **China (Shanghai)** region.
   * - Batch queries are supported. You can query data for up to 100 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data for the last 1 hour by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * - The Go language uses the POST method by default. Manually change the request method to GET by declaring `request.Method="GET"`.
   * **Time granularity of returned data**
   * The time granularity of returned data varies based on the time range specified by `StartTime` and `EndTime`. The following table describes the queryable historical data range and data latency for each time granularity:
   * |Time granularity  |Time range per query   |  Queryable historical data range  |  Data latency   |
   * | ------------- |------------   | ----------- | ----------- |
   * |1 minute  | Time range per query ≤ 1 hour   |7 days  |5 minutes  |
   * |5 minutes  | 1 hour < Time range per query < 3 days  |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time range per query < 31 days |186 days  |Typically 3 to 4 hours  |
   * 
   * @param request - DescribeVodDomainRealTimeReqHitRateDataRequest
   * @returns DescribeVodDomainRealTimeReqHitRateDataResponse
   */
  async describeVodDomainRealTimeReqHitRateData(request: $_model.DescribeVodDomainRealTimeReqHitRateDataRequest): Promise<$_model.DescribeVodDomainRealTimeReqHitRateDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRealTimeReqHitRateDataWithOptions(request, runtime);
  }

  /**
   * Invokes this operation to query the traffic data of an accelerated domain name. Compared with the DescribeVodDomainTrafficData operation, this operation supports a smaller time granularity (minimum of 1 minute), lower data latency (minimum of 5 minutes), but a shorter historical data range (up to 186 days).
   * 
   * @remarks
   * - The service address of this operation supports only **China (Shanghai)**.
   * - Batch queries are supported. You can query data for up to 100 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data for the last hour by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * **Time granularity of returned data**
   * The time granularity of returned data varies based on the time range specified by `StartTime` and `EndTime`. The following table describes the queryable historical data range and data latency for each time granularity:
   * |Time granularity  |Time range per query   |  Queryable historical data range  |  Data latency   |
   * | ------------- |------------   | ----------- | ----------- |
   * |1 minute  | Time range per query ≤ 1 hour   |7 days  |5 minutes  |
   * |5 minutes  | 1 hour < Time range per query < 3 days  |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time range per query < 31 days |186 days  |Generally 3 to 4 hours  |
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
   * Invokes this operation to query the traffic data of an accelerated domain name. Compared with the DescribeVodDomainTrafficData operation, this operation supports a smaller time granularity (minimum of 1 minute), lower data latency (minimum of 5 minutes), but a shorter historical data range (up to 186 days).
   * 
   * @remarks
   * - The service address of this operation supports only **China (Shanghai)**.
   * - Batch queries are supported. You can query data for up to 100 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data for the last hour by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * **Time granularity of returned data**
   * The time granularity of returned data varies based on the time range specified by `StartTime` and `EndTime`. The following table describes the queryable historical data range and data latency for each time granularity:
   * |Time granularity  |Time range per query   |  Queryable historical data range  |  Data latency   |
   * | ------------- |------------   | ----------- | ----------- |
   * |1 minute  | Time range per query ≤ 1 hour   |7 days  |5 minutes  |
   * |5 minutes  | 1 hour < Time range per query < 3 days  |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time range per query < 31 days |186 days  |Generally 3 to 4 hours  |
   * 
   * @param request - DescribeVodDomainRealTimeTrafficDataRequest
   * @returns DescribeVodDomainRealTimeTrafficDataResponse
   */
  async describeVodDomainRealTimeTrafficData(request: $_model.DescribeVodDomainRealTimeTrafficDataRequest): Promise<$_model.DescribeVodDomainRealTimeTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainRealTimeTrafficDataWithOptions(request, runtime);
  }

  /**
   * Queries the request hit ratio (percentage of hit requests) of an accelerated domain name.
   * 
   * @remarks
   * - Currently, this operation supports only the following service address: **China (Shanghai)**.
   * - Batch query is supported. You can query data of up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data of the last 24 hours by default. If you specify `StartTime` and `EndTime`, this operation returns data of the specified time range.
   * **Time granularity of returned data**
   * Based on the time span specified by `StartTime` and `EndTime`, and when `Interval` is not set, the default time granularity of returned data, the queryable historical data time range, and data latency are as follows:
   * |Time granularity  |Time span per query   |  Queryable historical data time range  |  Data latency   |
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes  | Time span per query < 3 days   |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time span per query < 31 days  |186 days  |Generally 3 to 4 hours  |
   * | 1 day | 31 days ≤ Time span per query ≤ 90 days |366 days  |Generally 4 hours, no more than 24 hours  |
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
   * Queries the request hit ratio (percentage of hit requests) of an accelerated domain name.
   * 
   * @remarks
   * - Currently, this operation supports only the following service address: **China (Shanghai)**.
   * - Batch query is supported. You can query data of up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data of the last 24 hours by default. If you specify `StartTime` and `EndTime`, this operation returns data of the specified time range.
   * **Time granularity of returned data**
   * Based on the time span specified by `StartTime` and `EndTime`, and when `Interval` is not set, the default time granularity of returned data, the queryable historical data time range, and data latency are as follows:
   * |Time granularity  |Time span per query   |  Queryable historical data time range  |  Data latency   |
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes  | Time span per query < 3 days   |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time span per query < 31 days  |186 days  |Generally 3 to 4 hours  |
   * | 1 day | 31 days ≤ Time span per query ≤ 90 days |366 days  |Generally 4 hours, no more than 24 hours  |
   * 
   * @param request - DescribeVodDomainReqHitRateDataRequest
   * @returns DescribeVodDomainReqHitRateDataResponse
   */
  async describeVodDomainReqHitRateData(request: $_model.DescribeVodDomainReqHitRateDataRequest): Promise<$_model.DescribeVodDomainReqHitRateDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainReqHitRateDataWithOptions(request, runtime);
  }

  /**
   * Queries the back-to-origin bandwidth data of accelerated domain names.
   * 
   * @remarks
   * - Currently, this operation supports only the following service address: **China (Shanghai)**.
   * - Batch queries are supported. You can query data for up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data from the past 24 hours by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * **Time granularity of returned data**
   * Based on the time span specified by `StartTime` and `EndTime`, and when `Interval` is not set, the default time granularity of returned data, the queryable historical data range, and data latency are as follows:
   * |Time granularity  |Time span per query   |  Queryable historical data range  |  Data latency   |
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes  | Time span per query < 3 days   |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time span per query < 31 days  |186 days  |Generally 3 to 4 hours  |
   * | 1 day | 31 days ≤ Time span per query ≤ 366 days |366 days  |Generally 4 hours, up to 24 hours  |
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
   * Queries the back-to-origin bandwidth data of accelerated domain names.
   * 
   * @remarks
   * - Currently, this operation supports only the following service address: **China (Shanghai)**.
   * - Batch queries are supported. You can query data for up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data from the past 24 hours by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * **Time granularity of returned data**
   * Based on the time span specified by `StartTime` and `EndTime`, and when `Interval` is not set, the default time granularity of returned data, the queryable historical data range, and data latency are as follows:
   * |Time granularity  |Time span per query   |  Queryable historical data range  |  Data latency   |
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes  | Time span per query < 3 days   |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time span per query < 31 days  |186 days  |Generally 3 to 4 hours  |
   * | 1 day | 31 days ≤ Time span per query ≤ 366 days |366 days  |Generally 4 hours, up to 24 hours  |
   * 
   * @param request - DescribeVodDomainSrcBpsDataRequest
   * @returns DescribeVodDomainSrcBpsDataResponse
   */
  async describeVodDomainSrcBpsData(request: $_model.DescribeVodDomainSrcBpsDataRequest): Promise<$_model.DescribeVodDomainSrcBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainSrcBpsDataWithOptions(request, runtime);
  }

  /**
   * Queries the back-to-origin traffic data of accelerated domain names.
   * 
   * @remarks
   * - Currently, this operation supports only the following service address: **China (Shanghai)**.
   * - Batch queries are supported. You can query data for up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data from the past 24 hours by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * **Time granularity of returned data**
   * Based on the time span specified by `StartTime` and `EndTime`, and when `Interval` is not set at the same time, the default time granularity, the queryable historical data range, and data delay are as follows:
   * |Time granularity  |Time span per query   |  Queryable historical data range  |  Data delay   |
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes  | Time span per query < 3 days   |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time span per query < 31 days  |186 days  |Generally 3 to 4 hours  |
   * | 1 day | 31 days ≤ Time span per query ≤ 366 days |366 days  |Generally 4 hours, up to 24 hours  |
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
   * Queries the back-to-origin traffic data of accelerated domain names.
   * 
   * @remarks
   * - Currently, this operation supports only the following service address: **China (Shanghai)**.
   * - Batch queries are supported. You can query data for up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, this operation returns data from the past 24 hours by default. If you specify `StartTime` and `EndTime`, this operation returns data for the specified time range.
   * **Time granularity of returned data**
   * Based on the time span specified by `StartTime` and `EndTime`, and when `Interval` is not set at the same time, the default time granularity, the queryable historical data range, and data delay are as follows:
   * |Time granularity  |Time span per query   |  Queryable historical data range  |  Data delay   |
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes  | Time span per query < 3 days   |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time span per query < 31 days  |186 days  |Generally 3 to 4 hours  |
   * | 1 day | 31 days ≤ Time span per query ≤ 366 days |366 days  |Generally 4 hours, up to 24 hours  |
   * 
   * @param request - DescribeVodDomainSrcTrafficDataRequest
   * @returns DescribeVodDomainSrcTrafficDataResponse
   */
  async describeVodDomainSrcTrafficData(request: $_model.DescribeVodDomainSrcTrafficDataRequest): Promise<$_model.DescribeVodDomainSrcTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainSrcTrafficDataWithOptions(request, runtime);
  }

  /**
   * Invokes this operation to query the traffic data of an accelerated domain name. Compared with the DescribeVodDomainRealTimeTrafficData operation, this operation supports a longer historical data query range (up to 366 days) but provides a larger data time granularity (minimum of 5 minutes) and higher data latency.
   * 
   * @remarks
   * - The service address of this operation supports only **China (Shanghai)**.
   * - Batch queries are supported. You can query data for up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, data of the last 24 hours is returned by default. If you specify `StartTime` and `EndTime`, data of the specified time range is returned.
   * **Data time granularity of returned data**
   * The following table describes the default data time granularity of returned data, the queryable historical data range, and the data latency based on the time span specified by `StartTime` and `EndTime` when `Interval` is not set:
   * |Time granularity  |Time span per query   |  Queryable historical data range  |  Data latency   |
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes  | Time span per query < 3 days   |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time span per query < 31 days  |186 days  |Typically 3 to 4 hours  |
   * | 1 day | 31 days ≤ Time span per query ≤ 366 days |366 days  |Typically 4 hours, up to 24 hours  |
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
   * Invokes this operation to query the traffic data of an accelerated domain name. Compared with the DescribeVodDomainRealTimeTrafficData operation, this operation supports a longer historical data query range (up to 366 days) but provides a larger data time granularity (minimum of 5 minutes) and higher data latency.
   * 
   * @remarks
   * - The service address of this operation supports only **China (Shanghai)**.
   * - Batch queries are supported. You can query data for up to 500 domain names at a time.
   * - If you do not specify `StartTime` and `EndTime`, data of the last 24 hours is returned by default. If you specify `StartTime` and `EndTime`, data of the specified time range is returned.
   * **Data time granularity of returned data**
   * The following table describes the default data time granularity of returned data, the queryable historical data range, and the data latency based on the time span specified by `StartTime` and `EndTime` when `Interval` is not set:
   * |Time granularity  |Time span per query   |  Queryable historical data range  |  Data latency   |
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes  | Time span per query < 3 days   |93 days  |15 minutes  |
   * |1 hour  | 3 days ≤ Time span per query < 31 days  |186 days  |Typically 3 to 4 hours  |
   * | 1 day | 31 days ≤ Time span per query ≤ 366 days |366 days  |Typically 4 hours, up to 24 hours  |
   * 
   * @param request - DescribeVodDomainTrafficDataRequest
   * @returns DescribeVodDomainTrafficDataResponse
   */
  async describeVodDomainTrafficData(request: $_model.DescribeVodDomainTrafficDataRequest): Promise<$_model.DescribeVodDomainTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainTrafficDataWithOptions(request, runtime);
  }

  /**
   * Queries acceleration traffic or bandwidth usage data.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - Batch domain name queries are supported. Separate multiple domain names with commas (,). You can query up to 100 domain names at a time. If this parameter is left empty, data for all domain names under the account is returned.
   * - You can query data for up to the last year. The maximum time span for a single query is 3 months. If the query time range is 1 to 3 days, data is returned at hourly granularity. If the query time range is 4 days or more, data is returned at daily granularity.
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
   * Queries acceleration traffic or bandwidth usage data.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - Batch domain name queries are supported. Separate multiple domain names with commas (,). You can query up to 100 domain names at a time. If this parameter is left empty, data for all domain names under the account is returned.
   * - You can query data for up to the last year. The maximum time span for a single query is 3 months. If the query time range is 1 to 3 days, data is returned at hourly granularity. If the query time range is 4 days or more, data is returned at daily granularity.
   * 
   * @param request - DescribeVodDomainUsageDataRequest
   * @returns DescribeVodDomainUsageDataResponse
   */
  async describeVodDomainUsageData(request: $_model.DescribeVodDomainUsageDataRequest): Promise<$_model.DescribeVodDomainUsageDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodDomainUsageDataWithOptions(request, runtime);
  }

  /**
   * Queries the usage data of online editing in ApsaraVideo VOD.
   * 
   * @remarks
   * - Single user call frequency: 10 calls per second.
   * **Supported time granularities**:
   * The adaptive time granularity and the maximum time range for historical data queries vary based on the maximum time span per query.
   * | Time granularity          | Maximum time span per query            | Maximum time range for historical data queries    |
   * | -------------- | -------------- | ------ |
   * | 1 hour       | 7 days      |   31 days  | 
   * | 1 day  | 31 days     |    366 days  |
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
   * Queries the usage data of online editing in ApsaraVideo VOD.
   * 
   * @remarks
   * - Single user call frequency: 10 calls per second.
   * **Supported time granularities**:
   * The adaptive time granularity and the maximum time range for historical data queries vary based on the maximum time span per query.
   * | Time granularity          | Maximum time span per query            | Maximum time range for historical data queries    |
   * | -------------- | -------------- | ------ |
   * | 1 hour       | 7 days      |   31 days  | 
   * | 1 day  | 31 days     |    366 days  |
   * 
   * @param request - DescribeVodEditingUsageDataRequest
   * @returns DescribeVodEditingUsageDataResponse
   */
  async describeVodEditingUsageData(request: $_model.DescribeVodEditingUsageDataRequest): Promise<$_model.DescribeVodEditingUsageDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodEditingUsageDataWithOptions(request, runtime);
  }

  /**
   * Retrieves playback data of an audio or video file on a specified date by media ID (audio or video ID), including the number of unique visitors, average plays per user, total plays, average play duration per user, and total play duration.
   * 
   * @remarks
   * - Currently, this operation is available only in the **China (Shanghai)** region.
   * - Only playback data collected by ApsaraVideo Player SDK is supported. Traffic statistics for audio-only streams are not supported.
   * - Only data within the last 30 days can be queried.
   * >Notice: - Before calling this operation, make sure that ApsaraVideo Player SDK meets the following conditions:
   *   - Android Player SDK or iOS Player SDK
   *     - The Player SDK version is 5.4.9.2 or later.
   *     - A License for the Player SDK has been obtained and integrated. For more information, see [License management](https://help.aliyun.com/document_detail/469166.html).
   *     - The event tracking log reporting feature of the Player SDK is enabled. By default, this feature is enabled in ApsaraVideo Player SDK. For more information, see [Create a player for Android](~~311525#section-dc4-gp6-xk2~~) and [Create a player for iOS](~~313855#section-cmf-k7d-jg5~~).
   *   - Web Player SDK
   *      - The Player SDK version is 2.16.0 or later.
   *     - A License for **Playback Quality Monitoring** has been obtained and integrated. Submit the [Web Player SDK value-added service application form](https://yida.alibaba-inc.com/o/webplayer#/) to apply. For the License integration method, see the `license` property in [Web SDK API reference](~~125572#section-3ty-gwp-6pa~~).
   *     - The event tracking log reporting feature of the Player SDK is enabled. By default, this feature is enabled in ApsaraVideo Player SDK.
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
   * Retrieves playback data of an audio or video file on a specified date by media ID (audio or video ID), including the number of unique visitors, average plays per user, total plays, average play duration per user, and total play duration.
   * 
   * @remarks
   * - Currently, this operation is available only in the **China (Shanghai)** region.
   * - Only playback data collected by ApsaraVideo Player SDK is supported. Traffic statistics for audio-only streams are not supported.
   * - Only data within the last 30 days can be queried.
   * >Notice: - Before calling this operation, make sure that ApsaraVideo Player SDK meets the following conditions:
   *   - Android Player SDK or iOS Player SDK
   *     - The Player SDK version is 5.4.9.2 or later.
   *     - A License for the Player SDK has been obtained and integrated. For more information, see [License management](https://help.aliyun.com/document_detail/469166.html).
   *     - The event tracking log reporting feature of the Player SDK is enabled. By default, this feature is enabled in ApsaraVideo Player SDK. For more information, see [Create a player for Android](~~311525#section-dc4-gp6-xk2~~) and [Create a player for iOS](~~313855#section-cmf-k7d-jg5~~).
   *   - Web Player SDK
   *      - The Player SDK version is 2.16.0 or later.
   *     - A License for **Playback Quality Monitoring** has been obtained and integrated. Submit the [Web Player SDK value-added service application form](https://yida.alibaba-inc.com/o/webplayer#/) to apply. For the License integration method, see the `license` property in [Web SDK API reference](~~125572#section-3ty-gwp-6pa~~).
   *     - The event tracking log reporting feature of the Player SDK is enabled. By default, this feature is enabled in ApsaraVideo Player SDK.
   * 
   * @param request - DescribeVodMediaPlayDataRequest
   * @returns DescribeVodMediaPlayDataResponse
   */
  async describeVodMediaPlayData(request: $_model.DescribeVodMediaPlayDataRequest): Promise<$_model.DescribeVodMediaPlayDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodMediaPlayDataWithOptions(request, runtime);
  }

  /**
   * Queries aggregated playback data of the player.
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
   * Queries aggregated playback data of the player.
   * 
   * @param request - DescribeVodPlayerCollectDataRequest
   * @returns DescribeVodPlayerCollectDataResponse
   */
  async describeVodPlayerCollectData(request: $_model.DescribeVodPlayerCollectDataRequest): Promise<$_model.DescribeVodPlayerCollectDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodPlayerCollectDataWithOptions(request, runtime);
  }

  /**
   * Queries the dimension metadata of the player.
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
   * Queries the dimension metadata of the player.
   * 
   * @param request - DescribeVodPlayerDimensionDataRequest
   * @returns DescribeVodPlayerDimensionDataResponse
   */
  async describeVodPlayerDimensionData(request: $_model.DescribeVodPlayerDimensionDataRequest): Promise<$_model.DescribeVodPlayerDimensionDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodPlayerDimensionDataWithOptions(request, runtime);
  }

  /**
   * Queries player metric data.
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
   * Queries player metric data.
   * 
   * @param request - DescribeVodPlayerMetricDataRequest
   * @returns DescribeVodPlayerMetricDataResponse
   */
  async describeVodPlayerMetricData(request: $_model.DescribeVodPlayerMetricDataRequest): Promise<$_model.DescribeVodPlayerMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodPlayerMetricDataWithOptions(request, runtime);
  }

  /**
   * Queries access data for an accelerated domain name by ISP or region, including bandwidth, average response rate, page views, cache hit ratio, and request hit ratio.
   * 
   * @remarks
   * - Currently, this operation is supported only in the **China (Shanghai)** region.
   * - The maximum time range for a single query (the time range between StartTime and EndTime) is 1 hour.
   * **Supported time granularities**
   * Based on the time range specified by `StartTime` and `EndTime`, the default data timestamp granularity, queryable historical data range, and data latency are as follows:
   * |Time granularity	|Time range per query|Queryable historical data range|Data latency|
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes	|≤ 1 hour	|93 days	|15 minutes|
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
   * Queries access data for an accelerated domain name by ISP or region, including bandwidth, average response rate, page views, cache hit ratio, and request hit ratio.
   * 
   * @remarks
   * - Currently, this operation is supported only in the **China (Shanghai)** region.
   * - The maximum time range for a single query (the time range between StartTime and EndTime) is 1 hour.
   * **Supported time granularities**
   * Based on the time range specified by `StartTime` and `EndTime`, the default data timestamp granularity, queryable historical data range, and data latency are as follows:
   * |Time granularity	|Time range per query|Queryable historical data range|Data latency|
   * | ------------- |------------   | ----------- | ----------- |
   * |5 minutes	|≤ 1 hour	|93 days	|15 minutes|
   * 
   * @param request - DescribeVodRangeDataByLocateAndIspServiceRequest
   * @returns DescribeVodRangeDataByLocateAndIspServiceResponse
   */
  async describeVodRangeDataByLocateAndIspService(request: $_model.DescribeVodRangeDataByLocateAndIspServiceRequest): Promise<$_model.DescribeVodRangeDataByLocateAndIspServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodRangeDataByLocateAndIspServiceWithOptions(request, runtime);
  }

  /**
   * Queries the maximum number and remaining daily quota of URLs and directories for purge and prefetch operations.
   * 
   * @remarks
   * - Currently, the service address supports only **China (Shanghai)**.
   * - Purge and prefetch operations include the [RefreshVodObjectCaches](https://help.aliyun.com/document_detail/69215.html) purge operation and the [PreloadVodObjectCaches](https://help.aliyun.com/document_detail/69211.html) prefetch operation.
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
   * Queries the maximum number and remaining daily quota of URLs and directories for purge and prefetch operations.
   * 
   * @remarks
   * - Currently, the service address supports only **China (Shanghai)**.
   * - Purge and prefetch operations include the [RefreshVodObjectCaches](https://help.aliyun.com/document_detail/69215.html) purge operation and the [PreloadVodObjectCaches](https://help.aliyun.com/document_detail/69211.html) prefetch operation.
   * 
   * @param request - DescribeVodRefreshQuotaRequest
   * @returns DescribeVodRefreshQuotaResponse
   */
  async describeVodRefreshQuota(request: $_model.DescribeVodRefreshQuotaRequest): Promise<$_model.DescribeVodRefreshQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodRefreshQuotaWithOptions(request, runtime);
  }

  /**
   * Queries whether purge and prefetch tasks have taken effect.
   * 
   * @remarks
   * - Currently, the service address supports only **China (Shanghai)**.
   * - If neither Taskid nor Objectpath is specified, the first page of data (20 entries) within the last 3 days is returned by default. Taskid and Objectpath can be specified at the same time.
   * - When DomainName or Status is specified, ObjectType is required.
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
   * Queries whether purge and prefetch tasks have taken effect.
   * 
   * @remarks
   * - Currently, the service address supports only **China (Shanghai)**.
   * - If neither Taskid nor Objectpath is specified, the first page of data (20 entries) within the last 3 days is returned by default. Taskid and Objectpath can be specified at the same time.
   * - When DomainName or Status is specified, ObjectType is required.
   * 
   * @param request - DescribeVodRefreshTasksRequest
   * @returns DescribeVodRefreshTasksResponse
   */
  async describeVodRefreshTasks(request: $_model.DescribeVodRefreshTasksRequest): Promise<$_model.DescribeVodRefreshTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodRefreshTasksWithOptions(request, runtime);
  }

  /**
   * Queries certificate list information by domain name.
   * 
   * @remarks
   * This operation currently supports only the **China (Shanghai)** region.
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
   * Queries certificate list information by domain name.
   * 
   * @remarks
   * This operation currently supports only the **China (Shanghai)** region.
   * 
   * @param request - DescribeVodSSLCertificateListRequest
   * @returns DescribeVodSSLCertificateListResponse
   */
  async describeVodSSLCertificateList(request: $_model.DescribeVodSSLCertificateListRequest): Promise<$_model.DescribeVodSSLCertificateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodSSLCertificateListWithOptions(request, runtime);
  }

  /**
   * Queries the usage of media asset management, including storage space and outbound storage traffic.
   * 
   * @remarks
   * - Currently, the service address supports only **China (Shanghai)**.
   * - If the interval between the start time and end time is within 7 days, hourly data is returned. If the interval is greater than 7 days, daily data is returned. The maximum interval is 31 days.
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
   * Queries the usage of media asset management, including storage space and outbound storage traffic.
   * 
   * @remarks
   * - Currently, the service address supports only **China (Shanghai)**.
   * - If the interval between the start time and end time is within 7 days, hourly data is returned. If the interval is greater than 7 days, daily data is returned. The maximum interval is 31 days.
   * 
   * @param request - DescribeVodStorageDataRequest
   * @returns DescribeVodStorageDataResponse
   */
  async describeVodStorageData(request: $_model.DescribeVodStorageDataRequest): Promise<$_model.DescribeVodStorageDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodStorageDataWithOptions(request, runtime);
  }

  /**
   * Queries the usage of tiered storage for media asset management.
   * 
   * @remarks
   * - Currently, the service is available only in the **China (Shanghai)** region.
   * - If the query time range is within 7 days, hourly data is returned. If the query time range is greater than 7 days, daily data is returned. The maximum time range is 31 days.
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
   * Queries the usage of tiered storage for media asset management.
   * 
   * @remarks
   * - Currently, the service is available only in the **China (Shanghai)** region.
   * - If the query time range is within 7 days, hourly data is returned. If the query time range is greater than 7 days, daily data is returned. The maximum time range is 31 days.
   * 
   * @param request - DescribeVodTieringStorageDataRequest
   * @returns DescribeVodTieringStorageDataResponse
   */
  async describeVodTieringStorageData(request: $_model.DescribeVodTieringStorageDataRequest): Promise<$_model.DescribeVodTieringStorageDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodTieringStorageDataWithOptions(request, runtime);
  }

  /**
   * Queries the retrieval data usage of tiered storage in media asset management.
   * 
   * @remarks
   * > - Currently, the service address supports only **China (Shanghai)**.
   * > - If the query time interval is within 7 days, data at the hour granularity is returned. If the query time interval is greater than 7 days, data at the day granularity is returned. The maximum interval is 31 days.
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
   * Queries the retrieval data usage of tiered storage in media asset management.
   * 
   * @remarks
   * > - Currently, the service address supports only **China (Shanghai)**.
   * > - If the query time interval is within 7 days, data at the hour granularity is returned. If the query time interval is greater than 7 days, data at the day granularity is returned. The maximum interval is 31 days.
   * 
   * @param request - DescribeVodTieringStorageRetrievalDataRequest
   * @returns DescribeVodTieringStorageRetrievalDataResponse
   */
  async describeVodTieringStorageRetrievalData(request: $_model.DescribeVodTieringStorageRetrievalDataRequest): Promise<$_model.DescribeVodTieringStorageRetrievalDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodTieringStorageRetrievalDataWithOptions(request, runtime);
  }

  /**
   * Queries transcoding usage data.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - If the interval between the start time and end time is within 7 days, hourly data is returned. If the interval is greater than 7 days, daily data is returned. The maximum interval is 31 days.
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
   * Queries transcoding usage data.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - If the interval between the start time and end time is within 7 days, hourly data is returned. If the interval is greater than 7 days, daily data is returned. The maximum interval is 31 days.
   * 
   * @param request - DescribeVodTranscodeDataRequest
   * @returns DescribeVodTranscodeDataResponse
   */
  async describeVodTranscodeData(request: $_model.DescribeVodTranscodeDataRequest): Promise<$_model.DescribeVodTranscodeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodTranscodeDataWithOptions(request, runtime);
  }

  /**
   * Queries the list of all acceleration domain names under your account for ApsaraVideo VOD.
   * 
   * @remarks
   * - Supports fuzzy match filtering by domain name and filtering by domain name status.
   * - This operation currently supports only the following region: **China (Shanghai)**.
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
   * Queries the list of all acceleration domain names under your account for ApsaraVideo VOD.
   * 
   * @remarks
   * - Supports fuzzy match filtering by domain name and filtering by domain name status.
   * - This operation currently supports only the following region: **China (Shanghai)**.
   * 
   * @param request - DescribeVodUserDomainsRequest
   * @returns DescribeVodUserDomainsResponse
   */
  async describeVodUserDomains(request: $_model.DescribeVodUserDomainsRequest): Promise<$_model.DescribeVodUserDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodUserDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the IP list of a domain name.
   * 
   * @remarks
   * This operation is supported only in the China (Shanghai) region.
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
   * Queries the IP list of a domain name.
   * 
   * @remarks
   * This operation is supported only in the China (Shanghai) region.
   * 
   * @param request - DescribeVodUserVipsByDomainRequest
   * @returns DescribeVodUserVipsByDomainResponse
   */
  async describeVodUserVipsByDomain(request: $_model.DescribeVodUserVipsByDomainRequest): Promise<$_model.DescribeVodUserVipsByDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodUserVipsByDomainWithOptions(request, runtime);
  }

  /**
   * Retrieves the domain ownership verification content.
   * 
   * @remarks
   * - Currently, this operation is supported only in the **China (Shanghai)** region.
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
   * Retrieves the domain ownership verification content.
   * 
   * @remarks
   * - Currently, this operation is supported only in the **China (Shanghai)** region.
   * 
   * @param request - DescribeVodVerifyContentRequest
   * @returns DescribeVodVerifyContentResponse
   */
  async describeVodVerifyContent(request: $_model.DescribeVodVerifyContentRequest): Promise<$_model.DescribeVodVerifyContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodVerifyContentWithOptions(request, runtime);
  }

  /**
   * Invokes this operation to revoke application authorization from a specified account identity (Resource Access Management (RAM) user or RAM role).
   * 
   * @remarks
   * >Notice: Each Resource Access Management (RAM) user or RAM role can be granted permissions for up to 10 applications.
   * -  If the policy name is **VODAppAdministratorAccess**, **AppId** is optional. For other policies, **AppId** is required.
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
   * Invokes this operation to revoke application authorization from a specified account identity (Resource Access Management (RAM) user or RAM role).
   * 
   * @remarks
   * >Notice: Each Resource Access Management (RAM) user or RAM role can be granted permissions for up to 10 applications.
   * -  If the policy name is **VODAppAdministratorAccess**, **AppId** is optional. For other policies, **AppId** is required.
   * 
   * @param request - DetachAppPolicyFromIdentityRequest
   * @returns DetachAppPolicyFromIdentityResponse
   */
  async detachAppPolicyFromIdentity(request: $_model.DetachAppPolicyFromIdentityRequest): Promise<$_model.DetachAppPolicyFromIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachAppPolicyFromIdentityWithOptions(request, runtime);
  }

  /**
   * Generates a key for secure download. The secure download feature of ApsaraVideo Player SDK encrypts videos downloaded to local devices by using a key file. The encrypted videos can only be decrypted and played by using the key file generated by the unique app that is bindable in advance. This effectively protects video content and prevents downloaded videos from being maliciously played or distributed.
   * 
   * @remarks
   * - To use the secure download feature, first enable the download feature in the ApsaraVideo VOD console and set the download method to secure download. For more information, see [Download settings](https://help.aliyun.com/document_detail/86107.html).
   * - After generating a key for secure download, configure the key in ApsaraVideo Player SDK. For more information, see [Secure download](https://help.aliyun.com/document_detail/124735.html).
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
   * Generates a key for secure download. The secure download feature of ApsaraVideo Player SDK encrypts videos downloaded to local devices by using a key file. The encrypted videos can only be decrypted and played by using the key file generated by the unique app that is bindable in advance. This effectively protects video content and prevents downloaded videos from being maliciously played or distributed.
   * 
   * @remarks
   * - To use the secure download feature, first enable the download feature in the ApsaraVideo VOD console and set the download method to secure download. For more information, see [Download settings](https://help.aliyun.com/document_detail/86107.html).
   * - After generating a key for secure download, configure the key in ApsaraVideo Player SDK. For more information, see [Secure download](https://help.aliyun.com/document_detail/124735.html).
   * 
   * @param request - GenerateDownloadSecretKeyRequest
   * @returns GenerateDownloadSecretKeyResponse
   */
  async generateDownloadSecretKey(request: $_model.GenerateDownloadSecretKeyRequest): Promise<$_model.GenerateDownloadSecretKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateDownloadSecretKeyWithOptions(request, runtime);
  }

  /**
   * Invokes the operation to generate a random KMS data key (DK) for ApsaraVideo VOD HLS encryption.
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
   * Invokes the operation to generate a random KMS data key (DK) for ApsaraVideo VOD HLS encryption.
   * 
   * @param request - GenerateKMSDataKeyRequest
   * @returns GenerateKMSDataKeyResponse
   */
  async generateKMSDataKey(request: $_model.GenerateKMSDataKeyRequest): Promise<$_model.GenerateKMSDataKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateKMSDataKeyWithOptions(request, runtime);
  }

  /**
   * Queries the list of AI image processing tasks.
   * 
   * @remarks
   * -  Currently, this operation is supported in the following regions: **China (Beijing)** and **China (Shanghai)**.
   * - Call the [SubmitAIImageJob](~~SubmitAIImageJob~~) operation to submit an AI image processing task before you call this operation to query the list of AI image tasks.
   * - You can query up to 10 AI image processing tasks at a time.
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
   * Queries the list of AI image processing tasks.
   * 
   * @remarks
   * -  Currently, this operation is supported in the following regions: **China (Beijing)** and **China (Shanghai)**.
   * - Call the [SubmitAIImageJob](~~SubmitAIImageJob~~) operation to submit an AI image processing task before you call this operation to query the list of AI image tasks.
   * - You can query up to 10 AI image processing tasks at a time.
   * 
   * @param request - GetAIImageJobsRequest
   * @returns GetAIImageJobsResponse
   */
  async getAIImageJobs(request: $_model.GetAIImageJobsRequest): Promise<$_model.GetAIImageJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAIImageJobsWithOptions(request, runtime);
  }

  /**
   * Queries an automated review job. After you submit an AI job, the job is processed asynchronously. You can call this operation to query job information in real time.
   * 
   * @remarks
   * <props="intl">
   * - This operation is supported only in the Singapore region.
   * - Image resources in automated review job results are retained in the free storage provided by ApsaraVideo VOD for only two weeks. After two weeks, the images are automatically deleted.
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
   * Queries an automated review job. After you submit an AI job, the job is processed asynchronously. You can call this operation to query job information in real time.
   * 
   * @remarks
   * <props="intl">
   * - This operation is supported only in the Singapore region.
   * - Image resources in automated review job results are retained in the free storage provided by ApsaraVideo VOD for only two weeks. After two weeks, the images are automatically deleted.
   * 
   * @param request - GetAIMediaAuditJobRequest
   * @returns GetAIMediaAuditJobResponse
   */
  async getAIMediaAuditJob(request: $_model.GetAIMediaAuditJobRequest): Promise<$_model.GetAIMediaAuditJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAIMediaAuditJobWithOptions(request, runtime);
  }

  /**
   * Queries an AI template.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * - Obtain the AI template ID first, and then call this operation to query the configuration information of the AI template.
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
   * Queries an AI template.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * - Obtain the AI template ID first, and then call this operation to query the configuration information of the AI template.
   * 
   * @param request - GetAITemplateRequest
   * @returns GetAITemplateResponse
   */
  async getAITemplate(request: $_model.GetAITemplateRequest): Promise<$_model.GetAITemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAITemplateWithOptions(request, runtime);
  }

  /**
   * Retrieves the results of smart tagging for a video.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)** and **China (Shanghai)**.
   * - Retrieves smart tagging results by video ID.
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
   * Retrieves the results of smart tagging for a video.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)** and **China (Shanghai)**.
   * - Retrieves smart tagging results by video ID.
   * 
   * @param request - GetAIVideoTagResultRequest
   * @returns GetAIVideoTagResultResponse
   */
  async getAIVideoTagResult(request: $_model.GetAIVideoTagResultRequest): Promise<$_model.GetAIVideoTagResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAIVideoTagResultWithOptions(request, runtime);
  }

  /**
   * Queries application information by application ID.
   * 
   * @remarks
   * - Batch queries are supported.
   * - AppIds supports a maximum of 10 IDs.
   * ### QPS limit
   * The single-user QPS limit for this operation is 100 calls per second. If the limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Queries application information by application ID.
   * 
   * @remarks
   * - Batch queries are supported.
   * - AppIds supports a maximum of 10 IDs.
   * ### QPS limit
   * The single-user QPS limit for this operation is 100 calls per second. If the limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - GetAppInfosRequest
   * @returns GetAppInfosResponse
   */
  async getAppInfos(request: $_model.GetAppInfosRequest): Promise<$_model.GetAppInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppInfosWithOptions(request, runtime);
  }

  /**
   * Retrieves the playback key of an application.
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
   * Retrieves the playback key of an application.
   * 
   * @param request - GetAppPlayKeyRequest
   * @returns GetAppPlayKeyResponse
   */
  async getAppPlayKey(request: $_model.GetAppPlayKeyRequest): Promise<$_model.GetAppPlayKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppPlayKeyWithOptions(request, runtime);
  }

  /**
   * Retrieves the basic information and access URLs of multiple auxiliary media assets in a batch by specifying their IDs after the assets such as watermark images, subtitle files, and materials are uploaded to ApsaraVideo VOD.
   * 
   * @remarks
   * You can retrieve information about up to 20 auxiliary media assets at a time.
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
   * Retrieves the basic information and access URLs of multiple auxiliary media assets in a batch by specifying their IDs after the assets such as watermark images, subtitle files, and materials are uploaded to ApsaraVideo VOD.
   * 
   * @remarks
   * You can retrieve information about up to 20 auxiliary media assets at a time.
   * 
   * @param request - GetAttachedMediaInfoRequest
   * @returns GetAttachedMediaInfoResponse
   */
  async getAttachedMediaInfo(request: $_model.GetAttachedMediaInfoRequest): Promise<$_model.GetAttachedMediaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAttachedMediaInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves the history of manual review records.
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
   * Retrieves the history of manual review records.
   * 
   * @param request - GetAuditHistoryRequest
   * @returns GetAuditHistoryResponse
   */
  async getAuditHistory(request: $_model.GetAuditHistoryRequest): Promise<$_model.GetAuditHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuditHistoryWithOptions(request, runtime);
  }

  /**
   * Invokes this operation to perform a filtered query for specified categorization information by ID or type, and retrieves the list of its subcategories (next-level categories).
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
   * Invokes this operation to perform a filtered query for specified categorization information by ID or type, and retrieves the list of its subcategories (next-level categories).
   * 
   * @param request - GetCategoriesRequest
   * @returns GetCategoriesResponse
   */
  async getCategories(request: $_model.GetCategoriesRequest): Promise<$_model.GetCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCategoriesWithOptions(request, runtime);
  }

  /**
   * Retrieves the full traffic data of media assets for a specified date and region. The data is generated based on CDN traffic logs and primarily reflects the traffic consumption of videos. The generated CSV file contains the following information: date, video ID, domain name, traffic, application ID, and category ID. You can download the file to your local machine for scenarios such as operational data analytics.
   * 
   * @remarks
   * - Currently, the service address of this operation only supports: **China (Shanghai)**.
   * - Only data within the past 90 days can be queried (data starts from April 29, 2025).
   * - The traffic data provided by this operation is raw traffic data. To align with billing traffic, multiply the data by a TCP coefficient of 1.1.
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
   * Retrieves the full traffic data of media assets for a specified date and region. The data is generated based on CDN traffic logs and primarily reflects the traffic consumption of videos. The generated CSV file contains the following information: date, video ID, domain name, traffic, application ID, and category ID. You can download the file to your local machine for scenarios such as operational data analytics.
   * 
   * @remarks
   * - Currently, the service address of this operation only supports: **China (Shanghai)**.
   * - Only data within the past 90 days can be queried (data starts from April 29, 2025).
   * - The traffic data provided by this operation is raw traffic data. To align with billing traffic, multiply the data by a TCP coefficient of 1.1.
   * 
   * @param request - GetDailyPlayRegionStatisRequest
   * @returns GetDailyPlayRegionStatisResponse
   */
  async getDailyPlayRegionStatis(request: $_model.GetDailyPlayRegionStatisRequest): Promise<$_model.GetDailyPlayRegionStatisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDailyPlayRegionStatisWithOptions(request, runtime);
  }

  /**
   * Queries the default AI template.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * - Currently, only the default AI template for automated review can be queried.
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
   * Queries the default AI template.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * - Currently, only the default AI template for automated review can be queried.
   * 
   * @param request - GetDefaultAITemplateRequest
   * @returns GetDefaultAITemplateResponse
   */
  async getDefaultAITemplate(request: $_model.GetDefaultAITemplateRequest): Promise<$_model.GetDefaultAITemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDefaultAITemplateWithOptions(request, runtime);
  }

  /**
   * Queries the results of a digital watermarking (copyright watermark or tracing watermark) extraction job, including the job status and the successfully extracted watermark text.
   * 
   * @remarks
   * - Currently, this operation is available only in the China (Shanghai) and China (Beijing) regions.
   * - After you call the [SubmitDigitalWatermarkExtractJob](~~SubmitDigitalWatermarkExtractJob~~) operation to extract the copyright watermark or tracing watermark from a video, call this operation to query the extracted watermark text.
   * - Only watermark extraction jobs from the last 2 years can be queried.
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
   * Queries the results of a digital watermarking (copyright watermark or tracing watermark) extraction job, including the job status and the successfully extracted watermark text.
   * 
   * @remarks
   * - Currently, this operation is available only in the China (Shanghai) and China (Beijing) regions.
   * - After you call the [SubmitDigitalWatermarkExtractJob](~~SubmitDigitalWatermarkExtractJob~~) operation to extract the copyright watermark or tracing watermark from a video, call this operation to query the extracted watermark text.
   * - Only watermark extraction jobs from the last 2 years can be queried.
   * 
   * @param request - GetDigitalWatermarkExtractResultRequest
   * @returns GetDigitalWatermarkExtractResultResponse
   */
  async getDigitalWatermarkExtractResult(request: $_model.GetDigitalWatermarkExtractResultRequest): Promise<$_model.GetDigitalWatermarkExtractResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDigitalWatermarkExtractResultWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an online editing project (video editing task).
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
   * Retrieves the details of an online editing project (video editing task).
   * 
   * @param request - GetEditingProjectRequest
   * @returns GetEditingProjectResponse
   */
  async getEditingProject(request: $_model.GetEditingProjectRequest): Promise<$_model.GetEditingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEditingProjectWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of materials to be edited in an online editing project.
   * 
   * @remarks
   * During the editing process, materials can be added to the timeline but are not necessarily fully used.
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
   * Retrieves the list of materials to be edited in an online editing project.
   * 
   * @remarks
   * During the editing process, materials can be added to the timeline but are not necessarily fully used.
   * 
   * @param request - GetEditingProjectMaterialsRequest
   * @returns GetEditingProjectMaterialsResponse
   */
  async getEditingProjectMaterials(request: $_model.GetEditingProjectMaterialsRequest): Promise<$_model.GetEditingProjectMaterialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEditingProjectMaterialsWithOptions(request, runtime);
  }

  /**
   * Retrieves the basic information and access URL of an image by image ID after the image is uploaded to ApsaraVideo VOD.
   * 
   * @remarks
   * This operation only supports querying information about images uploaded to ApsaraVideo VOD. To query information about snapshots generated from video snapshots, call the [ListSnapshots](~~ListSnapshots~~) operation.
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
   * Retrieves the basic information and access URL of an image by image ID after the image is uploaded to ApsaraVideo VOD.
   * 
   * @remarks
   * This operation only supports querying information about images uploaded to ApsaraVideo VOD. To query information about snapshots generated from video snapshots, call the [ListSnapshots](~~ListSnapshots~~) operation.
   * 
   * @param request - GetImageInfoRequest
   * @returns GetImageInfoResponse
   */
  async getImageInfo(request: $_model.GetImageInfoRequest): Promise<$_model.GetImageInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageInfoWithOptions(request, runtime);
  }

  /**
   * Queries the basic information and access URLs of multiple images by image ID after the images are uploaded to ApsaraVideo VOD.
   * 
   * @remarks
   * - This operation only supports querying information about images uploaded to ApsaraVideo VOD. To query information about snapshots generated from video snapshots, call the [ListSnapshots](~~ListSnapshots~~) operation.
   * - You can query information about up to 20 images at a time.
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
   * Queries the basic information and access URLs of multiple images by image ID after the images are uploaded to ApsaraVideo VOD.
   * 
   * @remarks
   * - This operation only supports querying information about images uploaded to ApsaraVideo VOD. To query information about snapshots generated from video snapshots, call the [ListSnapshots](~~ListSnapshots~~) operation.
   * - You can query information about up to 20 images at a time.
   * 
   * @param request - GetImageInfosRequest
   * @returns GetImageInfosResponse
   */
  async getImageInfos(request: $_model.GetImageInfosRequest): Promise<$_model.GetImageInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageInfosWithOptions(request, runtime);
  }

  /**
   * Queries the details of an asynchronous task by job ID.
   * 
   * @remarks
   * *Usage notes**
   * This operation supports querying asynchronous task data from the last 6 months. Supported task types: transcoding tasks, snapshot tasks, AI tasks, and workflow tasks.
   * **QPS limit**
   * The single-user QPS limit for this operation is 15 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342790.html).
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
   * Queries the details of an asynchronous task by job ID.
   * 
   * @remarks
   * *Usage notes**
   * This operation supports querying asynchronous task data from the last 6 months. Supported task types: transcoding tasks, snapshot tasks, AI tasks, and workflow tasks.
   * **QPS limit**
   * The single-user QPS limit for this operation is 15 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - GetJobDetailRequest
   * @returns GetJobDetailResponse
   */
  async getJobDetail(request: $_model.GetJobDetailRequest): Promise<$_model.GetJobDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobDetailWithOptions(request, runtime);
  }

  /**
   * Retrieves the results of video AI analysis.
   * 
   * @param request - GetMediaAiAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaAiAnalysisResponse
   */
  async getMediaAiAnalysisWithOptions(request: $_model.GetMediaAiAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaAiAnalysisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    if (!$dara.isNull(request.resultTypes)) {
      query["ResultTypes"] = request.resultTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaAiAnalysis",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaAiAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaAiAnalysisResponse({}));
  }

  /**
   * Retrieves the results of video AI analysis.
   * 
   * @param request - GetMediaAiAnalysisRequest
   * @returns GetMediaAiAnalysisResponse
   */
  async getMediaAiAnalysis(request: $_model.GetMediaAiAnalysisRequest): Promise<$_model.GetMediaAiAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaAiAnalysisWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of audio automated review results.
   * 
   * @remarks
   * ### Usage notes
   * <props="china">After automated review is complete, if you have configured the [Automated review complete](https://help.aliyun.com/document_detail/89576.html) event notification, the callback URL is notified through a message callback. You can call this operation to query the details of audio review results.
   * <props="intl">
   * - This operation is supported only in the Singapore region.
   * - After automated review is complete, if you have configured the [Automated review complete](https://help.aliyun.com/document_detail/89576.html) event notification, the callback URL is notified through a message callback. You can call this operation to query the details of audio review results.
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
   * Retrieves the details of audio automated review results.
   * 
   * @remarks
   * ### Usage notes
   * <props="china">After automated review is complete, if you have configured the [Automated review complete](https://help.aliyun.com/document_detail/89576.html) event notification, the callback URL is notified through a message callback. You can call this operation to query the details of audio review results.
   * <props="intl">
   * - This operation is supported only in the Singapore region.
   * - After automated review is complete, if you have configured the [Automated review complete](https://help.aliyun.com/document_detail/89576.html) event notification, the callback URL is notified through a message callback. You can call this operation to query the details of audio review results.
   * 
   * @param request - GetMediaAuditAudioResultDetailRequest
   * @returns GetMediaAuditAudioResultDetailResponse
   */
  async getMediaAuditAudioResultDetail(request: $_model.GetMediaAuditAudioResultDetailRequest): Promise<$_model.GetMediaAuditAudioResultDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaAuditAudioResultDetailWithOptions(request, runtime);
  }

  /**
   * Retrieves the summary of automated review results.
   * 
   * @remarks
   * <props="intl">
   * ### Usage notes
   * This operation is supported only in the Singapore region.
   * ### QPS limit
   * The maximum queries per second (QPS) for a single user for this operation is 20. If the limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Retrieves the summary of automated review results.
   * 
   * @remarks
   * <props="intl">
   * ### Usage notes
   * This operation is supported only in the Singapore region.
   * ### QPS limit
   * The maximum queries per second (QPS) for a single user for this operation is 20. If the limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - GetMediaAuditResultRequest
   * @returns GetMediaAuditResultResponse
   */
  async getMediaAuditResult(request: $_model.GetMediaAuditResultRequest): Promise<$_model.GetMediaAuditResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaAuditResultWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of automated review results. You can call this operation to query the details of review results in real time.
   * 
   * @remarks
   * - By default, only the review screenshot details of violating and suspected violating content are returned. No results are returned for compliant videos and images.
   * - The image resources of review results are retained in the free storage provided by ApsaraVideo VOD for only 2 weeks. After 2 weeks, the images are automatically deleted.
   * <props="intl">
   * - This operation is supported only in the Singapore region.
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
   * Retrieves the details of automated review results. You can call this operation to query the details of review results in real time.
   * 
   * @remarks
   * - By default, only the review screenshot details of violating and suspected violating content are returned. No results are returned for compliant videos and images.
   * - The image resources of review results are retained in the free storage provided by ApsaraVideo VOD for only 2 weeks. After 2 weeks, the images are automatically deleted.
   * <props="intl">
   * - This operation is supported only in the Singapore region.
   * 
   * @param request - GetMediaAuditResultDetailRequest
   * @returns GetMediaAuditResultDetailResponse
   */
  async getMediaAuditResultDetail(request: $_model.GetMediaAuditResultDetailRequest): Promise<$_model.GetMediaAuditResultDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaAuditResultDetailWithOptions(request, runtime);
  }

  /**
   * Retrieves the timestamps of all screenshots that contain violations.
   * 
   * @remarks
   * > By default, only screenshot details for violations and suspected violations are returned. No results are returned for compliant videos and images.
   * <props="intl">
   * This operation is supported only in the Singapore region.
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
   * Retrieves the timestamps of all screenshots that contain violations.
   * 
   * @remarks
   * > By default, only screenshot details for violations and suspected violations are returned. No results are returned for compliant videos and images.
   * <props="intl">
   * This operation is supported only in the Singapore region.
   * 
   * @param request - GetMediaAuditResultTimelineRequest
   * @returns GetMediaAuditResultTimelineResponse
   */
  async getMediaAuditResultTimeline(request: $_model.GetMediaAuditResultTimelineRequest): Promise<$_model.GetMediaAuditResultTimelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaAuditResultTimelineWithOptions(request, runtime);
  }

  /**
   * Retrieves media fingerprint results. After a media fingerprint job is complete, you can call this operation to query the results in real time.
   * 
   * @remarks
   * This operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
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
   * Retrieves media fingerprint results. After a media fingerprint job is complete, you can call this operation to query the results in real time.
   * 
   * @remarks
   * This operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * 
   * @param request - GetMediaDNAResultRequest
   * @returns GetMediaDNAResultResponse
   */
  async getMediaDNAResult(request: $_model.GetMediaDNAResultRequest): Promise<$_model.GetMediaDNAResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaDNAResultWithOptions(request, runtime);
  }

  /**
   * Queries task information such as task status and filtering policies for a video purge or prefetch task.
   * 
   * @remarks
   * ### Usage notes
   * You can query task information for all audio or video files under a purge or prefetch task, or query task information for a specific audio or video file.
   * ### QPS limit
   * The single-user QPS limit for this operation is 50 calls per second. If the limit is exceeded, the API call is throttled, which may affect your business. Call this operation as needed. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Queries task information such as task status and filtering policies for a video purge or prefetch task.
   * 
   * @remarks
   * ### Usage notes
   * You can query task information for all audio or video files under a purge or prefetch task, or query task information for a specific audio or video file.
   * ### QPS limit
   * The single-user QPS limit for this operation is 50 calls per second. If the limit is exceeded, the API call is throttled, which may affect your business. Call this operation as needed. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - GetMediaRefreshJobsRequest
   * @returns GetMediaRefreshJobsResponse
   */
  async getMediaRefreshJobs(request: $_model.GetMediaRefreshJobsRequest): Promise<$_model.GetMediaRefreshJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaRefreshJobsWithOptions(request, runtime);
  }

  /**
   * Queries the callback method, callback URL, and event types of event notifications.
   * 
   * @remarks
   * > For more information, see [Event notification development guide](https://help.aliyun.com/document_detail/55627.html).
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
   * Queries the callback method, callback URL, and event types of event notifications.
   * 
   * @remarks
   * > For more information, see [Event notification development guide](https://help.aliyun.com/document_detail/55627.html).
   * 
   * @param request - GetMessageCallbackRequest
   * @returns GetMessageCallbackResponse
   */
  async getMessageCallback(request: $_model.GetMessageCallbackRequest): Promise<$_model.GetMessageCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMessageCallbackWithOptions(request, runtime);
  }

  /**
   * Retrieves the source file information of an audio or video file, including the file URL, resolution, and bitrate.
   * 
   * @remarks
   * You can retrieve the complete source file information only after a video or audio stream is transcoded.
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
   * Retrieves the source file information of an audio or video file, including the file URL, resolution, and bitrate.
   * 
   * @remarks
   * You can retrieve the complete source file information only after a video or audio stream is transcoded.
   * 
   * @param request - GetMezzanineInfoRequest
   * @returns GetMezzanineInfoResponse
   */
  async getMezzanineInfo(request: $_model.GetMezzanineInfoRequest): Promise<$_model.GetMezzanineInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMezzanineInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves the playback URL of an audio or video file by providing the audio or video ID, which can then be played using ApsaraVideo Player or a third-party player such as a system-native, open-source, or custom-built player.
   * 
   * @remarks
   * - **Before using this operation, make sure you fully understand the billing methods and pricing of ApsaraVideo VOD. Directly downloading or playing videos from ApsaraVideo VOD playback URLs incurs outbound traffic fees. If no accelerated domain name is configured, refer to [Storage outbound traffic billing](~~188308#section-rwh-e88-f7j~~). If an accelerated domain name is configured, refer to [Acceleration service billing](~~188308#section-c5t-oq9-15e~~). If you have enabled storage transfer acceleration, directly downloading or playing videos from ApsaraVideo VOD playback URLs also incurs download acceleration fees. For billing details, refer to [Storage transfer acceleration billing](~~188310#section_sta_zm2_tsv~~).**
   * - Only videos in the Normal state (the Status field value is Normal) can be played. For more information about playback URL descriptions and usage limits, refer to [Audio and video playback](https://help.aliyun.com/document_detail/57290.html).
   * - When the [media storage](https://help.aliyun.com/document_detail/2392368.html) type is non-standard storage, set the StorageClass field of the PlayConfig parameter accordingly. For details, refer to [PlayConfig](~~86952#section-9g7-s9b-v7z~~).
   * - If video playback is abnormal, call the [GetMezzanineInfo](~~GetMezzanineInfo~~) operation to check whether the video source file information is correct.
   * <props="china">
   * - To generate m3u8 tracing watermark video streams by calling this operation, submit a ticket to apply for activation. For information about how to submit a ticket, refer to [Contact us](https://help.aliyun.com/document_detail/464625.html). For more information about tracing watermarks, refer to [Digital watermarking](https://help.aliyun.com/document_detail/2527021.html).
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

    if (!$dara.isNull(request.codecName)) {
      query["CodecName"] = request.codecName;
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
   * Retrieves the playback URL of an audio or video file by providing the audio or video ID, which can then be played using ApsaraVideo Player or a third-party player such as a system-native, open-source, or custom-built player.
   * 
   * @remarks
   * - **Before using this operation, make sure you fully understand the billing methods and pricing of ApsaraVideo VOD. Directly downloading or playing videos from ApsaraVideo VOD playback URLs incurs outbound traffic fees. If no accelerated domain name is configured, refer to [Storage outbound traffic billing](~~188308#section-rwh-e88-f7j~~). If an accelerated domain name is configured, refer to [Acceleration service billing](~~188308#section-c5t-oq9-15e~~). If you have enabled storage transfer acceleration, directly downloading or playing videos from ApsaraVideo VOD playback URLs also incurs download acceleration fees. For billing details, refer to [Storage transfer acceleration billing](~~188310#section_sta_zm2_tsv~~).**
   * - Only videos in the Normal state (the Status field value is Normal) can be played. For more information about playback URL descriptions and usage limits, refer to [Audio and video playback](https://help.aliyun.com/document_detail/57290.html).
   * - When the [media storage](https://help.aliyun.com/document_detail/2392368.html) type is non-standard storage, set the StorageClass field of the PlayConfig parameter accordingly. For details, refer to [PlayConfig](~~86952#section-9g7-s9b-v7z~~).
   * - If video playback is abnormal, call the [GetMezzanineInfo](~~GetMezzanineInfo~~) operation to check whether the video source file information is correct.
   * <props="china">
   * - To generate m3u8 tracing watermark video streams by calling this operation, submit a ticket to apply for activation. For information about how to submit a ticket, refer to [Contact us](https://help.aliyun.com/document_detail/464625.html). For more information about tracing watermarks, refer to [Digital watermarking](https://help.aliyun.com/document_detail/2527021.html).
   * 
   * @param request - GetPlayInfoRequest
   * @returns GetPlayInfoResponse
   */
  async getPlayInfo(request: $_model.GetPlayInfoRequest): Promise<$_model.GetPlayInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPlayInfoWithOptions(request, runtime);
  }

  /**
   * Queries video transcoding summary of one or more audio or video files by their IDs, including video transcoding status and transcoding progress.
   * 
   * @remarks
   * - Because an audio or video file may be transcoded multiple times, this operation returns only the most recent transcoding summary.
   * - Batch queries are supported. You can query the transcoding summaries of up to 10 audio or video files at a time.
   * - To query historical transcoding task information, call the [ListTranscodeTask](https://help.aliyun.com/document_detail/109120.html) operation.
   * - **This operation supports querying transcoding task data only within the last year.**
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
   * Queries video transcoding summary of one or more audio or video files by their IDs, including video transcoding status and transcoding progress.
   * 
   * @remarks
   * - Because an audio or video file may be transcoded multiple times, this operation returns only the most recent transcoding summary.
   * - Batch queries are supported. You can query the transcoding summaries of up to 10 audio or video files at a time.
   * - To query historical transcoding task information, call the [ListTranscodeTask](https://help.aliyun.com/document_detail/109120.html) operation.
   * - **This operation supports querying transcoding task data only within the last year.**
   * 
   * @param request - GetTranscodeSummaryRequest
   * @returns GetTranscodeSummaryResponse
   */
  async getTranscodeSummary(request: $_model.GetTranscodeSummaryRequest): Promise<$_model.GetTranscodeSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTranscodeSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the details of transcoding jobs based on a transcoding task ID.
   * 
   * @remarks
   * ### Usage notes
   * **This operation only supports querying transcoding task data from the last year.**
   * ### QPS limit
   * A single user can perform a maximum of 15 queries per second (QPS). Throttling is triggered if this limit is exceeded, which may affect your business. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342790.html).
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
   * Queries the details of transcoding jobs based on a transcoding task ID.
   * 
   * @remarks
   * ### Usage notes
   * **This operation only supports querying transcoding task data from the last year.**
   * ### QPS limit
   * A single user can perform a maximum of 15 queries per second (QPS). Throttling is triggered if this limit is exceeded, which may affect your business. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - GetTranscodeTaskRequest
   * @returns GetTranscodeTaskResponse
   */
  async getTranscodeTask(request: $_model.GetTranscodeTaskRequest): Promise<$_model.GetTranscodeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTranscodeTaskWithOptions(request, runtime);
  }

  /**
   * Queries the details of a transcoding configuration by transcoding template group ID.
   * 
   * @remarks
   * Retrieves information about a single template group, including the configuration information of all transcoding templates in the group.
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
   * Queries the details of a transcoding configuration by transcoding template group ID.
   * 
   * @remarks
   * Retrieves information about a single template group, including the configuration information of all transcoding templates in the group.
   * 
   * @param request - GetTranscodeTemplateGroupRequest
   * @returns GetTranscodeTemplateGroupResponse
   */
  async getTranscodeTemplateGroup(request: $_model.GetTranscodeTemplateGroupRequest): Promise<$_model.GetTranscodeTemplateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTranscodeTemplateGroupWithOptions(request, runtime);
  }

  /**
   * Retrieves URL upload information.
   * 
   * @remarks
   * - Retrieves URL upload information by using the JobId returned during URL-based upload or the URL used for upload. The information includes the URL upload status, UserData, creation time, and completion time.
   * - **This operation only supports querying upload task data within the last year.**
   * - This operation currently supports only the following service regions: **China (Shanghai)** and **Singapore**.
   * - After you call the [UploadMediaByURL](~~UploadMediaByURL~~) operation to upload a media file to ApsaraVideo VOD, you can call this operation to query the upload information of a specified media file by using the upload task IDs (`JobIds`) or the source file URLs (`UploadURLs`).
   * - When calling this operation, you must specify either `JobIds` or `UploadURLs`. If both are specified, only `JobIds` is processed.
   * - If the media upload fails, you can call this operation to view the error code and error message. If the media upload succeeds, you can call this operation to view the corresponding media ID.
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
   * Retrieves URL upload information.
   * 
   * @remarks
   * - Retrieves URL upload information by using the JobId returned during URL-based upload or the URL used for upload. The information includes the URL upload status, UserData, creation time, and completion time.
   * - **This operation only supports querying upload task data within the last year.**
   * - This operation currently supports only the following service regions: **China (Shanghai)** and **Singapore**.
   * - After you call the [UploadMediaByURL](~~UploadMediaByURL~~) operation to upload a media file to ApsaraVideo VOD, you can call this operation to query the upload information of a specified media file by using the upload task IDs (`JobIds`) or the source file URLs (`UploadURLs`).
   * - When calling this operation, you must specify either `JobIds` or `UploadURLs`. If both are specified, only `JobIds` is processed.
   * - If the media upload fails, you can call this operation to view the error code and error message. If the media upload succeeds, you can call this operation to view the corresponding media ID.
   * 
   * @param request - GetURLUploadInfosRequest
   * @returns GetURLUploadInfosResponse
   */
  async getURLUploadInfos(request: $_model.GetURLUploadInfosRequest): Promise<$_model.GetURLUploadInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getURLUploadInfosWithOptions(request, runtime);
  }

  /**
   * Retrieves media upload details by media ID, such as upload time, upload ratio, and upload source. Batch retrieval is supported.
   * 
   * @remarks
   * - This operation only supports retrieving upload details of audio and video files.
   * - If audio or video files are uploaded through the ApsaraVideo VOD console, you can use this operation to retrieve information such as the upload ratio. If audio or video files are uploaded by using the upload SDK, only the following versions of the [upload SDK](https://help.aliyun.com/document_detail/52200.html) support this operation.
   * > Only the server upload SDK supports this operation. The client upload SDK does not support this operation. The server upload SDK version requirements are as follows:
   * > - Java upload SDK: version ≥ 1.4.4
   * > - C++ upload SDK: version ≥ 1.0.0
   * > - PHP upload SDK: version ≥ 1.0.2
   * > - Python upload SDK: version ≥ 1.3.0
   * ### QPS limit
   * The single-user QPS limit for this operation is 100 calls per second. If the limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Retrieves media upload details by media ID, such as upload time, upload ratio, and upload source. Batch retrieval is supported.
   * 
   * @remarks
   * - This operation only supports retrieving upload details of audio and video files.
   * - If audio or video files are uploaded through the ApsaraVideo VOD console, you can use this operation to retrieve information such as the upload ratio. If audio or video files are uploaded by using the upload SDK, only the following versions of the [upload SDK](https://help.aliyun.com/document_detail/52200.html) support this operation.
   * > Only the server upload SDK supports this operation. The client upload SDK does not support this operation. The server upload SDK version requirements are as follows:
   * > - Java upload SDK: version ≥ 1.4.4
   * > - C++ upload SDK: version ≥ 1.0.0
   * > - PHP upload SDK: version ≥ 1.0.2
   * > - Python upload SDK: version ≥ 1.3.0
   * ### QPS limit
   * The single-user QPS limit for this operation is 100 calls per second. If the limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - GetUploadDetailsRequest
   * @returns GetUploadDetailsResponse
   */
  async getUploadDetails(request: $_model.GetUploadDetailsRequest): Promise<$_model.GetUploadDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUploadDetailsWithOptions(request, runtime);
  }

  /**
   * Retrieves the information about a single audio or video file by audio or video ID, including the title, description, duration, thumbnail URL, status, creation time, size, snapshots, category, and tags.
   * 
   * @remarks
   * After an audio or video file is uploaded, ApsaraVideo VOD analyzes the uploaded source file. Therefore, media asset information is generated asynchronously. You can configure an [event notification](https://help.aliyun.com/document_detail/55627.html) for [AudioVideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html). After you receive the [AudioVideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event notification, call this operation to retrieve the audio or video information.
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
   * Retrieves the information about a single audio or video file by audio or video ID, including the title, description, duration, thumbnail URL, status, creation time, size, snapshots, category, and tags.
   * 
   * @remarks
   * After an audio or video file is uploaded, ApsaraVideo VOD analyzes the uploaded source file. Therefore, media asset information is generated asynchronously. You can configure an [event notification](https://help.aliyun.com/document_detail/55627.html) for [AudioVideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html). After you receive the [AudioVideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event notification, call this operation to retrieve the audio or video information.
   * 
   * @param request - GetVideoInfoRequest
   * @returns GetVideoInfoResponse
   */
  async getVideoInfo(request: $_model.GetVideoInfoRequest): Promise<$_model.GetVideoInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves the information about multiple audio and video files at a time by audio or video ID, including the title, description, duration, thumbnail URL, status, creation time, size, snapshots, category, and tags.
   * 
   * @remarks
   * - You can retrieve information about up to 20 audio and video files at a time.
   * - After an audio or video file is uploaded, ApsaraVideo VOD analyzes the uploaded source file. Therefore, media asset information is generated asynchronously. You can configure the [AudioVideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) [event notification](https://help.aliyun.com/document_detail/55627.html). After you receive the [AudioVideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event notification, call this operation to retrieve the audio and video information.
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
   * Retrieves the information about multiple audio and video files at a time by audio or video ID, including the title, description, duration, thumbnail URL, status, creation time, size, snapshots, category, and tags.
   * 
   * @remarks
   * - You can retrieve information about up to 20 audio and video files at a time.
   * - After an audio or video file is uploaded, ApsaraVideo VOD analyzes the uploaded source file. Therefore, media asset information is generated asynchronously. You can configure the [AudioVideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) [event notification](https://help.aliyun.com/document_detail/55627.html). After you receive the [AudioVideoAnalysisComplete](https://help.aliyun.com/document_detail/99935.html) event notification, call this operation to retrieve the audio and video information.
   * 
   * @param request - GetVideoInfosRequest
   * @returns GetVideoInfosResponse
   */
  async getVideoInfos(request: $_model.GetVideoInfosRequest): Promise<$_model.GetVideoInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoInfosWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of audio and video information.
   * 
   * @remarks
   * This operation retrieves up to **5000** audio and video files that match the specified filter conditions (such as video status and category ID). Specify StartTime and EndTime to retrieve data in batches. To query more audio and video files or traverse all audio and video information, see [Search for media information](https://help.aliyun.com/document_detail/86044.html).
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
   * Retrieves a list of audio and video information.
   * 
   * @remarks
   * This operation retrieves up to **5000** audio and video files that match the specified filter conditions (such as video status and category ID). Specify StartTime and EndTime to retrieve data in batches. To query more audio and video files or traverse all audio and video information, see [Search for media information](https://help.aliyun.com/document_detail/86044.html).
   * 
   * @param request - GetVideoListRequest
   * @returns GetVideoListResponse
   */
  async getVideoList(request: $_model.GetVideoListRequest): Promise<$_model.GetVideoListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoListWithOptions(request, runtime);
  }

  /**
   * Retrieves the playback credential (PlayAuth) for an audio or video file. ApsaraVideo Player SDK uses this credential to automatically obtain the playback URL. Because the playback credential has a validity period and is bound to a specific audio or video file, it cannot be shared or reused. An expired or invalid credential will cause playback failure. This playback method is suitable for audio and video playback scenarios that require high security.
   * 
   * @remarks
   * - When using ApsaraVideo Player SDK (applicable to the PlayAuth playback method), call this operation to obtain the playback credential. ApsaraVideo Player SDK uses the playback credential to automatically obtain the playback URL for playback. For more information, see [ApsaraVideo Player SDK](https://help.aliyun.com/document_detail/125579.html).
   * - If the playback credential expires, the playback URL cannot be obtained. You must obtain a new playback credential.
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
   * Retrieves the playback credential (PlayAuth) for an audio or video file. ApsaraVideo Player SDK uses this credential to automatically obtain the playback URL. Because the playback credential has a validity period and is bound to a specific audio or video file, it cannot be shared or reused. An expired or invalid credential will cause playback failure. This playback method is suitable for audio and video playback scenarios that require high security.
   * 
   * @remarks
   * - When using ApsaraVideo Player SDK (applicable to the PlayAuth playback method), call this operation to obtain the playback credential. ApsaraVideo Player SDK uses the playback credential to automatically obtain the playback URL for playback. For more information, see [ApsaraVideo Player SDK](https://help.aliyun.com/document_detail/125579.html).
   * - If the playback credential expires, the playback URL cannot be obtained. You must obtain a new playback credential.
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
   * Invokes this operation to query the parameter settings of a single image watermark template or text watermark template by watermark template ID, including the position, size, and display time of image watermarks, and the content, font, color, and position of text watermarks.
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
   * Invokes this operation to query the parameter settings of a single image watermark template or text watermark template by watermark template ID, including the position, size, and display time of image watermarks, and the content, font, color, and position of text watermarks.
   * 
   * @param request - GetWatermarkRequest
   * @returns GetWatermarkResponse
   */
  async getWatermark(request: $_model.GetWatermarkRequest): Promise<$_model.GetWatermarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWatermarkWithOptions(request, runtime);
  }

  /**
   * Queries the execution information of a workflow task.
   * 
   * @remarks
   * - **Before you use this operation, make sure that you are familiar with the billing methods and pricing of ApsaraVideo VOD. Using workflows may incur fees for transcoding, encryption, automated review, and other services. For billing details, see [Billing overview](https://help.aliyun.com/document_detail/188307.html).**
   * - You can call this operation to query workflow processing tasks. This operation currently supports only video understanding workflow task queries. Workflow tasks of other versions are not supported.
   * 
   * @param request - GetWorkflowTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkflowTaskResponse
   */
  async getWorkflowTaskWithOptions(request: $_model.GetWorkflowTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkflowTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkflowTask",
      version: "2017-03-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkflowTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkflowTaskResponse({}));
  }

  /**
   * Queries the execution information of a workflow task.
   * 
   * @remarks
   * - **Before you use this operation, make sure that you are familiar with the billing methods and pricing of ApsaraVideo VOD. Using workflows may incur fees for transcoding, encryption, automated review, and other services. For billing details, see [Billing overview](https://help.aliyun.com/document_detail/188307.html).**
   * - You can call this operation to query workflow processing tasks. This operation currently supports only video understanding workflow task queries. Workflow tasks of other versions are not supported.
   * 
   * @param request - GetWorkflowTaskRequest
   * @returns GetWorkflowTaskResponse
   */
  async getWorkflowTask(request: $_model.GetWorkflowTaskRequest): Promise<$_model.GetWorkflowTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkflowTaskWithOptions(request, runtime);
  }

  /**
   * Queries the AI image information of a specified video.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)** and **China (Shanghai)**.
   * - This operation can query AI image information of only a single video. **Batch queries are not supported**.
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
   * Queries the AI image information of a specified video.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)** and **China (Shanghai)**.
   * - This operation can query AI image information of only a single video. **Batch queries are not supported**.
   * 
   * @param request - ListAIImageInfoRequest
   * @returns ListAIImageInfoResponse
   */
  async listAIImageInfo(request: $_model.ListAIImageInfoRequest): Promise<$_model.ListAIImageInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIImageInfoWithOptions(request, runtime);
  }

  /**
   * Queries intelligent tagging or media fingerprint jobs. After you submit an intelligent tagging or media fingerprint job, the job is processed asynchronously. You can call this operation to query job information in real time.
   * 
   * @remarks
   * - Regions that support media fingerprint: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * - Regions that support intelligent tagging: **China (Beijing)** and **China (Shanghai)**.
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
   * Queries intelligent tagging or media fingerprint jobs. After you submit an intelligent tagging or media fingerprint job, the job is processed asynchronously. You can call this operation to query job information in real time.
   * 
   * @remarks
   * - Regions that support media fingerprint: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * - Regions that support intelligent tagging: **China (Beijing)** and **China (Shanghai)**.
   * 
   * @param request - ListAIJobRequest
   * @returns ListAIJobResponse
   */
  async listAIJob(request: $_model.ListAIJobRequest): Promise<$_model.ListAIJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIJobWithOptions(request, runtime);
  }

  /**
   * Queries the list of AI templates.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * - You can call this operation to query the list of AI templates of a specified type.
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
   * Queries the list of AI templates.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * - You can call this operation to query the list of AI templates of a specified type.
   * 
   * @param request - ListAITemplateRequest
   * @returns ListAITemplateResponse
   */
  async listAITemplate(request: $_model.ListAITemplateRequest): Promise<$_model.ListAITemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAITemplateWithOptions(request, runtime);
  }

  /**
   * Queries a list of applications that you are authorized to access based on specified filter conditions.
   * 
   * @remarks
   * ### Usage notes
   * You can filter applications by application status.
   * ### QPS limit
   * The single-user QPS limit for this operation is 30 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation properly. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Queries a list of applications that you are authorized to access based on specified filter conditions.
   * 
   * @remarks
   * ### Usage notes
   * You can filter applications by application status.
   * ### QPS limit
   * The single-user QPS limit for this operation is 30 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation properly. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - ListAppInfoRequest
   * @returns ListAppInfoResponse
   */
  async listAppInfo(request: $_model.ListAppInfoRequest): Promise<$_model.ListAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppInfoWithOptions(request, runtime);
  }

  /**
   * Invokes this operation to list the application permissions granted to a specified account identity (Resource Access Management (RAM) user or RAM role).
   * 
   * @remarks
   * - The **IdentityType** and **IdentityName** parameters take effect only when the caller invokes this operation with administrator permissions. Otherwise, only the application access policies granted to the current account identity are returned.
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
   * Invokes this operation to list the application permissions granted to a specified account identity (Resource Access Management (RAM) user or RAM role).
   * 
   * @remarks
   * - The **IdentityType** and **IdentityName** parameters take effect only when the caller invokes this operation with administrator permissions. Otherwise, only the application access policies granted to the current account identity are returned.
   * 
   * @param request - ListAppPoliciesForIdentityRequest
   * @returns ListAppPoliciesForIdentityResponse
   */
  async listAppPoliciesForIdentity(request: $_model.ListAppPoliciesForIdentityRequest): Promise<$_model.ListAppPoliciesForIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppPoliciesForIdentityWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of China Chinese review security IPs.
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
   * Retrieves the list of China Chinese review security IPs.
   * 
   * @param request - ListAuditSecurityIpRequest
   * @returns ListAuditSecurityIpResponse
   */
  async listAuditSecurityIp(request: $_model.ListAuditSecurityIpRequest): Promise<$_model.ListAuditSecurityIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuditSecurityIpWithOptions(request, runtime);
  }

  /**
   * Queries the list of animated images for a video by video ID.
   * 
   * @remarks
   * ### Usage notes
   * - After animated image capturing for a video is complete, call this operation to obtain the animated image information of the video.
   * - Animated image tasks can be initiated by calling an API operation ([SubmitDynamicImageJob](https://help.aliyun.com/document_detail/186842.html)) or by using the console. For more information, see [Animated images](https://help.aliyun.com/document_detail/177484.html).
   * ### QPS limit
   * The QPS limit for a single user for this operation is 100 calls per second. If the limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342790.html).
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
   * Queries the list of animated images for a video by video ID.
   * 
   * @remarks
   * ### Usage notes
   * - After animated image capturing for a video is complete, call this operation to obtain the animated image information of the video.
   * - Animated image tasks can be initiated by calling an API operation ([SubmitDynamicImageJob](https://help.aliyun.com/document_detail/186842.html)) or by using the console. For more information, see [Animated images](https://help.aliyun.com/document_detail/177484.html).
   * ### QPS limit
   * The QPS limit for a single user for this operation is 100 calls per second. If the limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - ListDynamicImageRequest
   * @returns ListDynamicImageResponse
   */
  async listDynamicImage(request: $_model.ListDynamicImageRequest): Promise<$_model.ListDynamicImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDynamicImageWithOptions(request, runtime);
  }

  /**
   * Queries the historical task list based on a media asset ID.
   * 
   * @remarks
   * *Usage notes**
   * - To query detailed task information, call the [GetJobDetail](https://help.aliyun.com/document_detail/2861326.html) operation.
   * - This operation only supports querying asynchronous task data within the last 6 months. Supported task types: transcoding tasks, snapshot tasks, and AI tasks.
   * **QPS limit**
   * The single-user QPS limit for this operation is 15 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Queries the historical task list based on a media asset ID.
   * 
   * @remarks
   * *Usage notes**
   * - To query detailed task information, call the [GetJobDetail](https://help.aliyun.com/document_detail/2861326.html) operation.
   * - This operation only supports querying asynchronous task data within the last 6 months. Supported task types: transcoding tasks, snapshot tasks, and AI tasks.
   * **QPS limit**
   * The single-user QPS limit for this operation is 15 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - ListJobInfoRequest
   * @returns ListJobInfoResponse
   */
  async listJobInfo(request: $_model.ListJobInfoRequest): Promise<$_model.ListJobInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of Live to VOD videos.
   * 
   * @remarks
   * A maximum of 5,000 records that match the specified filter conditions can be retrieved.
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
   * Retrieves the list of Live to VOD videos.
   * 
   * @remarks
   * A maximum of 5,000 records that match the specified filter conditions can be retrieved.
   * 
   * @param request - ListLiveRecordVideoRequest
   * @returns ListLiveRecordVideoResponse
   */
  async listLiveRecordVideo(request: $_model.ListLiveRecordVideoRequest): Promise<$_model.ListLiveRecordVideoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLiveRecordVideoWithOptions(request, runtime);
  }

  /**
   * Queries snapshots generated by video snapshot jobs and thumbnail snapshots automatically generated by the system during video upload.
   * 
   * @remarks
   * If multiple snapshot jobs have been initiated for a video, this operation returns only the data of the most recent successful snapshot job.
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
   * Queries snapshots generated by video snapshot jobs and thumbnail snapshots automatically generated by the system during video upload.
   * 
   * @remarks
   * If multiple snapshot jobs have been initiated for a video, this operation returns only the data of the most recent successful snapshot job.
   * 
   * @param request - ListSnapshotsRequest
   * @returns ListSnapshotsResponse
   */
  async listSnapshots(request: $_model.ListSnapshotsRequest): Promise<$_model.ListSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSnapshotsWithOptions(request, runtime);
  }

  /**
   * Queries the historical transcoding task information of an audio or video file by its ID. This operation does not return specific job details.
   * 
   * @remarks
   * ### Usage notes
   * - To query detailed transcoding job information, call the [GetTranscodeTask](https://help.aliyun.com/document_detail/109121.html) operation.
   * - **This operation supports only querying transcoding task data within the last year.**
   * ### QPS limit
   * The single-user QPS limit for this operation is 15 calls per second. If the limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Queries the historical transcoding task information of an audio or video file by its ID. This operation does not return specific job details.
   * 
   * @remarks
   * ### Usage notes
   * - To query detailed transcoding job information, call the [GetTranscodeTask](https://help.aliyun.com/document_detail/109121.html) operation.
   * - **This operation supports only querying transcoding task data within the last year.**
   * ### QPS limit
   * The single-user QPS limit for this operation is 15 calls per second. If the limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - ListTranscodeTaskRequest
   * @returns ListTranscodeTaskResponse
   */
  async listTranscodeTask(request: $_model.ListTranscodeTaskRequest): Promise<$_model.ListTranscodeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTranscodeTaskWithOptions(request, runtime);
  }

  /**
   * Queries the list of transcoding template configurations.
   * 
   * @remarks
   * > This operation does not return the transcoding template configuration information under each transcoding template group. You can call the [GetTranscodeTemplateGroup](https://help.aliyun.com/document_detail/102670.html) operation to obtain the information.
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
   * Queries the list of transcoding template configurations.
   * 
   * @remarks
   * > This operation does not return the transcoding template configuration information under each transcoding template group. You can call the [GetTranscodeTemplateGroup](https://help.aliyun.com/document_detail/102670.html) operation to obtain the information.
   * 
   * @param request - ListTranscodeTemplateGroupRequest
   * @returns ListTranscodeTemplateGroupResponse
   */
  async listTranscodeTemplateGroup(request: $_model.ListTranscodeTemplateGroupRequest): Promise<$_model.ListTranscodeTemplateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTranscodeTemplateGroupWithOptions(request, runtime);
  }

  /**
   * Queries the list of snapshot templates.
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
   * Queries the list of snapshot templates.
   * 
   * @param request - ListVodTemplateRequest
   * @returns ListVodTemplateResponse
   */
  async listVodTemplate(request: $_model.ListVodTemplateRequest): Promise<$_model.ListVodTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVodTemplateWithOptions(request, runtime);
  }

  /**
   * Invokes this operation to query the parameter settings of all image watermark templates and text watermark templates that have been added in the current service region, including the position, size, and display time of image watermarks, and the content, font, color, position, and other parameter settings of text watermarks.
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
   * Invokes this operation to query the parameter settings of all image watermark templates and text watermark templates that have been added in the current service region, including the position, size, and display time of image watermarks, and the content, font, color, position, and other parameter settings of text watermarks.
   * 
   * @param request - ListWatermarkRequest
   * @returns ListWatermarkResponse
   */
  async listWatermark(request: $_model.ListWatermarkRequest): Promise<$_model.ListWatermarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWatermarkWithOptions(request, runtime);
  }

  /**
   * Invokes this operation to migrate resources such as media assets from one application to another. Application administrators can directly transfer resources. Resource Access Management (RAM) users or RAM roles must have write permissions on both the source and destination applications. Batch migration is supported.
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
   * Invokes this operation to migrate resources such as media assets from one application to another. Application administrators can directly transfer resources. Resource Access Management (RAM) users or RAM roles must have write permissions on both the source and destination applications. Batch migration is supported.
   * 
   * @param request - MoveAppResourceRequest
   * @returns MoveAppResourceResponse
   */
  async moveAppResource(request: $_model.MoveAppResourceRequest): Promise<$_model.MoveAppResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveAppResourceWithOptions(request, runtime);
  }

  /**
   * Prefetches content from the origin server to L2 Cache nodes so that the first access directly hits the cache, reducing the load on the origin server.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - A maximum of 500 prefetch URL requests can be submitted per account per day. Directory-level prefetch is not supported.
   * - The purge and prefetch operations include the [RefreshVodObjectCaches](~~RefreshVodObjectCaches~~) purge operation and the [PreloadVodObjectCaches](~~PreloadVodObjectCaches~~) prefetch operation.
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
   * Prefetches content from the origin server to L2 Cache nodes so that the first access directly hits the cache, reducing the load on the origin server.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - A maximum of 500 prefetch URL requests can be submitted per account per day. Directory-level prefetch is not supported.
   * - The purge and prefetch operations include the [RefreshVodObjectCaches](~~RefreshVodObjectCaches~~) purge operation and the [PreloadVodObjectCaches](~~PreloadVodObjectCaches~~) prefetch operation.
   * 
   * @param request - PreloadVodObjectCachesRequest
   * @returns PreloadVodObjectCachesResponse
   */
  async preloadVodObjectCaches(request: $_model.PreloadVodObjectCachesRequest): Promise<$_model.PreloadVodObjectCachesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.preloadVodObjectCachesWithOptions(request, runtime);
  }

  /**
   * Produces one or more videos into a finished video. You can submit source videos directly through the timeline parameter, or create an online editing project first and then submit it for production.
   * 
   * @remarks
   * - **Before you use this operation, make sure that you are familiar with the billing methods and pricing of ApsaraVideo VOD. Online editing is a paid feature. For more information about billing, see [Video editing and production billing](~~188310#section-pyv-b8h-bo7~~).**
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, the online editing project ID is returned (the video has not been produced yet, and the task enters a queue for asynchronous execution). The final result is sent through a callback notification. You can also call [GetEditingProject](https://help.aliyun.com/document_detail/69052.html) to query the task status.
   * - The video resources used in the online editing timeline can be materials in the material library or videos in the media library. If you use videos from the media library, make sure that their status is Normal.
   * - Videos are produced based on ProjectId and Timeline. The logic is as follows:
   *     - ProjectId and Timeline cannot both be empty. Otherwise, no basis exists to produce videos.
   *     - If ProjectId is empty and Timeline is not empty, an online editing project is automatically created with the specified Timeline. The materials referenced in the Timeline are extracted and set as the project materials. Then, video production begins.
   *     - If ProjectId is not empty and Timeline is empty, the most recently saved Timeline is retrieved based on ProjectId and used to produce videos.
   *     - If both ProjectId and Timeline are not empty, the specified Timeline is used to produce videos, and the corresponding online editing project is updated (Timeline and project materials). If other fields are specified, the corresponding project fields are also updated.
   * - The maximum number of tracks for video tracks, image tracks, and subtitle tracks is 100 each.
   * - The total number of materials cannot exceed 200, and the total file size of materials cannot exceed 1 TB.
   * - The region of the input or output bucket must be the same as the region where the ApsaraVideo VOD service is used.
   * - When the output is a video, the following resolution limits apply to the finished video:
   *   - Both the width and height must be at least 128 px.
   *   - Both the width and height must be at most 4096 px.
   *   - The short side must be at most 2160 px.
   * - After video production is complete, the video is automatically uploaded to ApsaraVideo VOD. Therefore, after video production is complete, ApsaraVideo VOD sends the **ProduceMediaComplete** and **FileUploadComplete** event notifications. After the produced video transcoding is complete, the **single definition video transcoding complete** and **all definition video transcoding complete** event notifications are sent.
   * - You can also add effects to the produced video. For more details, see [Effects](https://help.aliyun.com/document_detail/69082.html).
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
   * Produces one or more videos into a finished video. You can submit source videos directly through the timeline parameter, or create an online editing project first and then submit it for production.
   * 
   * @remarks
   * - **Before you use this operation, make sure that you are familiar with the billing methods and pricing of ApsaraVideo VOD. Online editing is a paid feature. For more information about billing, see [Video editing and production billing](~~188310#section-pyv-b8h-bo7~~).**
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, the online editing project ID is returned (the video has not been produced yet, and the task enters a queue for asynchronous execution). The final result is sent through a callback notification. You can also call [GetEditingProject](https://help.aliyun.com/document_detail/69052.html) to query the task status.
   * - The video resources used in the online editing timeline can be materials in the material library or videos in the media library. If you use videos from the media library, make sure that their status is Normal.
   * - Videos are produced based on ProjectId and Timeline. The logic is as follows:
   *     - ProjectId and Timeline cannot both be empty. Otherwise, no basis exists to produce videos.
   *     - If ProjectId is empty and Timeline is not empty, an online editing project is automatically created with the specified Timeline. The materials referenced in the Timeline are extracted and set as the project materials. Then, video production begins.
   *     - If ProjectId is not empty and Timeline is empty, the most recently saved Timeline is retrieved based on ProjectId and used to produce videos.
   *     - If both ProjectId and Timeline are not empty, the specified Timeline is used to produce videos, and the corresponding online editing project is updated (Timeline and project materials). If other fields are specified, the corresponding project fields are also updated.
   * - The maximum number of tracks for video tracks, image tracks, and subtitle tracks is 100 each.
   * - The total number of materials cannot exceed 200, and the total file size of materials cannot exceed 1 TB.
   * - The region of the input or output bucket must be the same as the region where the ApsaraVideo VOD service is used.
   * - When the output is a video, the following resolution limits apply to the finished video:
   *   - Both the width and height must be at least 128 px.
   *   - Both the width and height must be at most 4096 px.
   *   - The short side must be at most 2160 px.
   * - After video production is complete, the video is automatically uploaded to ApsaraVideo VOD. Therefore, after video production is complete, ApsaraVideo VOD sends the **ProduceMediaComplete** and **FileUploadComplete** event notifications. After the produced video transcoding is complete, the **single definition video transcoding complete** and **all definition video transcoding complete** event notifications are sent.
   * - You can also add effects to the produced video. For more details, see [Effects](https://help.aliyun.com/document_detail/69082.html).
   * 
   * @param request - ProduceEditingProjectVideoRequest
   * @returns ProduceEditingProjectVideoResponse
   */
  async produceEditingProjectVideo(request: $_model.ProduceEditingProjectVideoRequest): Promise<$_model.ProduceEditingProjectVideoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.produceEditingProjectVideoWithOptions(request, runtime);
  }

  /**
   * Submits a refresh or prefetch task for audio or video files by audio or video ID.
   * 
   * @remarks
   * - ApsaraVideo VOD provides resource purge and prefetch features. The purge feature deletes cached resources on points of presence and forces the points of presence to retrieve the latest resources from the origin server through back-to-origin requests. The prefetch feature allows you to download and cache popular resources to points of presence before peak hours to improve access efficiency.
   * - This operation directly submits a refresh or prefetch node by audio or video ID and supports filtering by streaming format and definition, which allows you to refresh or prefetch specific streams as needed.
   * - You can submit a refresh or prefetch node for up to 20 audio or video files at a time.
   * ### QPS limit
   * The QPS limit for a single user for this operation is 50 calls per second. If the limit is exceeded, the API invocation is throttled, which may affect your business. Invoke this operation properly. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Submits a refresh or prefetch task for audio or video files by audio or video ID.
   * 
   * @remarks
   * - ApsaraVideo VOD provides resource purge and prefetch features. The purge feature deletes cached resources on points of presence and forces the points of presence to retrieve the latest resources from the origin server through back-to-origin requests. The prefetch feature allows you to download and cache popular resources to points of presence before peak hours to improve access efficiency.
   * - This operation directly submits a refresh or prefetch node by audio or video ID and supports filtering by streaming format and definition, which allows you to refresh or prefetch specific streams as needed.
   * - You can submit a refresh or prefetch node for up to 20 audio or video files at a time.
   * ### QPS limit
   * The QPS limit for a single user for this operation is 50 calls per second. If the limit is exceeded, the API invocation is throttled, which may affect your business. Invoke this operation properly. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - RefreshMediaPlayUrlsRequest
   * @returns RefreshMediaPlayUrlsResponse
   */
  async refreshMediaPlayUrls(request: $_model.RefreshMediaPlayUrlsRequest): Promise<$_model.RefreshMediaPlayUrlsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshMediaPlayUrlsWithOptions(request, runtime);
  }

  /**
   * Refreshes the upload credential for a video file after the upload times out.
   * 
   * @remarks
   * This operation can also be used to overwrite the source file of a video or audio file. This means that after you obtain the upload URL of the source file, you can upload the file again while keeping the audio or video ID unchanged. However, this may automatically trigger transcoding and snapshot capture if you have configured transcoding or snapshot capture upon upload. For more information, see [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
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
   * Refreshes the upload credential for a video file after the upload times out.
   * 
   * @remarks
   * This operation can also be used to overwrite the source file of a video or audio file. This means that after you obtain the upload URL of the source file, you can upload the file again while keeping the audio or video ID unchanged. However, this may automatically trigger transcoding and snapshot capture if you have configured transcoding or snapshot capture upon upload. For more information, see [Upload URLs and credentials](https://help.aliyun.com/document_detail/55397.html).
   * 
   * @param request - RefreshUploadVideoRequest
   * @returns RefreshUploadVideoResponse
   */
  async refreshUploadVideo(request: $_model.RefreshUploadVideoRequest): Promise<$_model.RefreshUploadVideoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshUploadVideoWithOptions(request, runtime);
  }

  /**
   * Purges file content on nodes. Specifies URL content to purge on cache nodes, and supports batch URL purging.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - Each account can submit up to 2,000 URL purge requests and 100 directory purge requests per day.
   * - Purge and prefetch operations include the [RefreshVodObjectCaches](https://help.aliyun.com/document_detail/69215.html) purge operation and the [PreloadVodObjectCaches](https://help.aliyun.com/document_detail/69211.html) prefetch operation.
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
   * Purges file content on nodes. Specifies URL content to purge on cache nodes, and supports batch URL purging.
   * 
   * @remarks
   * - Currently, the only supported service region is **China (Shanghai)**.
   * - Each account can submit up to 2,000 URL purge requests and 100 directory purge requests per day.
   * - Purge and prefetch operations include the [RefreshVodObjectCaches](https://help.aliyun.com/document_detail/69215.html) purge operation and the [PreloadVodObjectCaches](https://help.aliyun.com/document_detail/69211.html) prefetch operation.
   * 
   * @param request - RefreshVodObjectCachesRequest
   * @returns RefreshVodObjectCachesResponse
   */
  async refreshVodObjectCaches(request: $_model.RefreshVodObjectCachesRequest): Promise<$_model.RefreshVodObjectCachesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshVodObjectCachesWithOptions(request, runtime);
  }

  /**
   * Registers media assets. Existing media files stored in your own OSS bucket that is connected to ApsaraVideo VOD must be registered to generate the associated data required by VOD before you can use VOD features such as transcoding and snapshotting.
   * 
   * @remarks
   * - For audio and video files already stored in an OSS bucket connected to ApsaraVideo VOD, you must call this operation to generate the associated data required by VOD before you can initiate transcoding, snapshotting, AI processing, and other operations on these files by media ID.
   * - You can register up to **10 OSS media files** at a time, and all media files submitted in a single request must correspond to the same storage address.
   * - For media files uploaded through VOD, if no transcoding template group ID is specified, the default template group is used for transcoding. In contrast, after media asset registration, transcoding is not automatically triggered if no transcoding template group ID is specified. If a transcoding template group ID is specified, transcoding is performed based on the specified template group.
   * - If a media file is registered repeatedly, only the **unique media ID associated with it** is returned, and no other processing is performed.
   * - Make sure that the media file you want to register has a valid file name extension. Otherwise, the registration fails.
   * 
   * @param request - RegisterMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterMediaResponse
   */
  async registerMediaWithOptions(request: $_model.RegisterMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableFirstFrameCover)) {
      query["EnableFirstFrameCover"] = request.enableFirstFrameCover;
    }

    if (!$dara.isNull(request.generateThumbnail)) {
      query["GenerateThumbnail"] = request.generateThumbnail;
    }

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
   * Registers media assets. Existing media files stored in your own OSS bucket that is connected to ApsaraVideo VOD must be registered to generate the associated data required by VOD before you can use VOD features such as transcoding and snapshotting.
   * 
   * @remarks
   * - For audio and video files already stored in an OSS bucket connected to ApsaraVideo VOD, you must call this operation to generate the associated data required by VOD before you can initiate transcoding, snapshotting, AI processing, and other operations on these files by media ID.
   * - You can register up to **10 OSS media files** at a time, and all media files submitted in a single request must correspond to the same storage address.
   * - For media files uploaded through VOD, if no transcoding template group ID is specified, the default template group is used for transcoding. In contrast, after media asset registration, transcoding is not automatically triggered if no transcoding template group ID is specified. If a transcoding template group ID is specified, transcoding is performed based on the specified template group.
   * - If a media file is registered repeatedly, only the **unique media ID associated with it** is returned, and no other processing is performed.
   * - Make sure that the media file you want to register has a valid file name extension. Otherwise, the registration fails.
   * 
   * @param request - RegisterMediaRequest
   * @returns RegisterMediaResponse
   */
  async registerMedia(request: $_model.RegisterMediaRequest): Promise<$_model.RegisterMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerMediaWithOptions(request, runtime);
  }

  /**
   * Restores media assets from frozen storage.
   * 
   * @remarks
   * - Make sure that you are familiar with the billing methods and pricing of ApsaraVideo VOD before you call this operation. Restoring media assets incurs storage fees. For more information, see [Media asset storage billing](~~188308#section-e97-xrp-mzz~~).
   * - This operation applies only to Archive and Cold Archive audio and video files. After a file is restored, it can be accessed. The storage class of an audio or video file that is being restored cannot be changed.
   * Restoration generates retrieval traffic. After a Cold Archive audio or video file is restored, a Standard storage copy of the file is generated for access. The file copy incurs Standard storage fees until the restoration period ends.
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
   * Restores media assets from frozen storage.
   * 
   * @remarks
   * - Make sure that you are familiar with the billing methods and pricing of ApsaraVideo VOD before you call this operation. Restoring media assets incurs storage fees. For more information, see [Media asset storage billing](~~188308#section-e97-xrp-mzz~~).
   * - This operation applies only to Archive and Cold Archive audio and video files. After a file is restored, it can be accessed. The storage class of an audio or video file that is being restored cannot be changed.
   * Restoration generates retrieval traffic. After a Cold Archive audio or video file is restored, a Standard storage copy of the file is generated for access. The file copy incurs Standard storage fees until the restoration period ends.
   * 
   * @param request - RestoreMediaRequest
   * @returns RestoreMediaResponse
   */
  async restoreMedia(request: $_model.RestoreMediaRequest): Promise<$_model.RestoreMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restoreMediaWithOptions(request, runtime);
  }

  /**
   * Searches for online editing projects (video editing lists).
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
   * Searches for online editing projects (video editing lists).
   * 
   * @param request - SearchEditingProjectRequest
   * @returns SearchEditingProjectResponse
   */
  async searchEditingProject(request: $_model.SearchEditingProjectRequest): Promise<$_model.SearchEditingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchEditingProjectWithOptions(request, runtime);
  }

  /**
   * Searches for media asset information such as videos, audio files, and images produced by ApsaraVideo VOD. You can use this operation with the media asset search protocol to perform multi-dimensional searches in ApsaraVideo VOD, including specifying return fields, exact matching, fuzzy matching, multi-value queries, range queries, and sort fields.
   * 
   * @remarks
   * For fields that support exact matching and fuzzy matching, when other query methods are used, the returned results follow the query method supported by the field. For example, if a field supports only fuzzy matching, results obtained through multi-value queries are also based on fuzzy matching.
   * The following describes the limits on the number of data records that can be retrieved:
   * - Method 1: Paged traversal
   *     For matched search results, you can set the pagination parameters PageNo (page number) and PageSize (number of records per page) to traverse up to 5,000 records. If the search results exceed 5,000 records, adjust the search conditions to narrow the result range. This method cannot traverse the complete dataset. To traverse more data, refer to Method 2.
   * - Method 2: Full traversal (for audio and video searches only)
   *   This method applies to video and audio content searches and supports traversing up to 2 million search results. If the number of search results exceeds 2 million, add more filter conditions to reduce the result count. When using this method, in addition to PageNo and PageSize, you must use the ScrollToken parameter for pagination. Each request supports traversing up to 100 records forward.
   * Using a PageSize of 20 as an example, the pagination logic is as follows:
   *     - If PageNo is 1, you can query up to the next 5 pages of data.
   *     - If PageNo is 2, you can query up to the next 6 pages of data.
   * Set pagination parameters properly and choose the appropriate traversal method based on the result set size. If you need to page through more than 1,000 records, use Method 2 for faster and more convenient data processing.
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
   * Searches for media asset information such as videos, audio files, and images produced by ApsaraVideo VOD. You can use this operation with the media asset search protocol to perform multi-dimensional searches in ApsaraVideo VOD, including specifying return fields, exact matching, fuzzy matching, multi-value queries, range queries, and sort fields.
   * 
   * @remarks
   * For fields that support exact matching and fuzzy matching, when other query methods are used, the returned results follow the query method supported by the field. For example, if a field supports only fuzzy matching, results obtained through multi-value queries are also based on fuzzy matching.
   * The following describes the limits on the number of data records that can be retrieved:
   * - Method 1: Paged traversal
   *     For matched search results, you can set the pagination parameters PageNo (page number) and PageSize (number of records per page) to traverse up to 5,000 records. If the search results exceed 5,000 records, adjust the search conditions to narrow the result range. This method cannot traverse the complete dataset. To traverse more data, refer to Method 2.
   * - Method 2: Full traversal (for audio and video searches only)
   *   This method applies to video and audio content searches and supports traversing up to 2 million search results. If the number of search results exceeds 2 million, add more filter conditions to reduce the result count. When using this method, in addition to PageNo and PageSize, you must use the ScrollToken parameter for pagination. Each request supports traversing up to 100 records forward.
   * Using a PageSize of 20 as an example, the pagination logic is as follows:
   *     - If PageNo is 1, you can query up to the next 5 pages of data.
   *     - If PageNo is 2, you can query up to the next 6 pages of data.
   * Set pagination parameters properly and choose the appropriate traversal method based on the result set size. If you need to page through more than 1,000 records, use Method 2 for faster and more convenient data processing.
   * 
   * @param request - SearchMediaRequest
   * @returns SearchMediaResponse
   */
  async searchMedia(request: $_model.SearchMediaRequest): Promise<$_model.SearchMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchMediaWithOptions(request, runtime);
  }

  /**
   * Sets the playback key for an application.
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
   * Sets the playback key for an application.
   * 
   * @param request - SetAppPlayKeyRequest
   * @returns SetAppPlayKeyResponse
   */
  async setAppPlayKey(request: $_model.SetAppPlayKeyRequest): Promise<$_model.SetAppPlayKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAppPlayKeyWithOptions(request, runtime);
  }

  /**
   * Sets the review security IP addresses.
   * 
   * @remarks
   * When a video is in the Checking or Blocked state, only requests from review security IP addresses can play the video.
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
   * Sets the review security IP addresses.
   * 
   * @remarks
   * When a video is in the Checking or Blocked state, only requests from review security IP addresses can play the video.
   * 
   * @param request - SetAuditSecurityIpRequest
   * @returns SetAuditSecurityIpResponse
   */
  async setAuditSecurityIp(request: $_model.SetAuditSecurityIpRequest): Promise<$_model.SetAuditSecurityIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAuditSecurityIpWithOptions(request, runtime);
  }

  /**
   * Updates the content of the cross-domain file crossdomain.xml for ApsaraVideo VOD.
   * 
   * @remarks
   * >Notice: If you access the cross-domain file through a domain name, purge the CDN cache for the update to take effect immediately. You can logon to the console to [purge files](https://help.aliyun.com/document_detail/86098.html) or invoke the [Refresh Cache operation](https://help.aliyun.com/document_detail/69215.html).
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
   * Updates the content of the cross-domain file crossdomain.xml for ApsaraVideo VOD.
   * 
   * @remarks
   * >Notice: If you access the cross-domain file through a domain name, purge the CDN cache for the update to take effect immediately. You can logon to the console to [purge files](https://help.aliyun.com/document_detail/86098.html) or invoke the [Refresh Cache operation](https://help.aliyun.com/document_detail/69215.html).
   * 
   * @param request - SetCrossdomainContentRequest
   * @returns SetCrossdomainContentResponse
   */
  async setCrossdomainContent(request: $_model.SetCrossdomainContentRequest): Promise<$_model.SetCrossdomainContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setCrossdomainContentWithOptions(request, runtime);
  }

  /**
   * Sets a default AI template.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * - Obtain the AI template ID first, and then call this operation to set the template as the default AI template. A default AI template cannot be deleted.
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
   * Sets a default AI template.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * - Obtain the AI template ID first, and then call this operation to set the template as the default AI template. A default AI template cannot be deleted.
   * 
   * @param request - SetDefaultAITemplateRequest
   * @returns SetDefaultAITemplateResponse
   */
  async setDefaultAITemplate(request: $_model.SetDefaultAITemplateRequest): Promise<$_model.SetDefaultAITemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultAITemplateWithOptions(request, runtime);
  }

  /**
   * Sets the default transcoding template group configuration.
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
   * Sets the default transcoding template group configuration.
   * 
   * @param request - SetDefaultTranscodeTemplateGroupRequest
   * @returns SetDefaultTranscodeTemplateGroupResponse
   */
  async setDefaultTranscodeTemplateGroup(request: $_model.SetDefaultTranscodeTemplateGroupRequest): Promise<$_model.SetDefaultTranscodeTemplateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultTranscodeTemplateGroupWithOptions(request, runtime);
  }

  /**
   * Sets a specified watermark template as the default watermark template.
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
   * Sets a specified watermark template as the default watermark template.
   * 
   * @param request - SetDefaultWatermarkRequest
   * @returns SetDefaultWatermarkResponse
   */
  async setDefaultWatermark(request: $_model.SetDefaultWatermarkRequest): Promise<$_model.SetDefaultWatermarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultWatermarkWithOptions(request, runtime);
  }

  /**
   * Sets the materials to be edited for an online editing project.
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
   * Sets the materials to be edited for an online editing project.
   * 
   * @param request - SetEditingProjectMaterialsRequest
   * @returns SetEditingProjectMaterialsResponse
   */
  async setEditingProjectMaterials(request: $_model.SetEditingProjectMaterialsRequest): Promise<$_model.SetEditingProjectMaterialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setEditingProjectMaterialsWithOptions(request, runtime);
  }

  /**
   * Sets the callback method, callback URL, and event types for event notifications.
   * 
   * @remarks
   * HTTP callbacks and Simple Message Queue (formerly MNS) callbacks are supported. For more information, see [Event notifications](https://help.aliyun.com/document_detail/55627.html).
   * ### QPS limit
   * The single-user QPS limit for this operation is 15 calls per second. If the limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Sets the callback method, callback URL, and event types for event notifications.
   * 
   * @remarks
   * HTTP callbacks and Simple Message Queue (formerly MNS) callbacks are supported. For more information, see [Event notifications](https://help.aliyun.com/document_detail/55627.html).
   * ### QPS limit
   * The single-user QPS limit for this operation is 15 calls per second. If the limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - SetMessageCallbackRequest
   * @returns SetMessageCallbackResponse
   */
  async setMessageCallback(request: $_model.SetMessageCallbackRequest): Promise<$_model.SetMessageCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setMessageCallbackWithOptions(request, runtime);
  }

  /**
   * Configures whether the certificate feature is enabled for a specified domain name and modifies certificate information.
   * 
   * @remarks
   * - Currently, the service address supports only **China (Shanghai)**.
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
   * Configures whether the certificate feature is enabled for a specified domain name and modifies certificate information.
   * 
   * @remarks
   * - Currently, the service address supports only **China (Shanghai)**.
   * 
   * @param request - SetVodDomainCertificateRequest
   * @returns SetVodDomainCertificateResponse
   */
  async setVodDomainCertificate(request: $_model.SetVodDomainCertificateRequest): Promise<$_model.SetVodDomainCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setVodDomainCertificateWithOptions(request, runtime);
  }

  /**
   * Sets whether the certificate feature is enabled for a specified domain name and updates the certificate information.
   * 
   * @remarks
   * - This operation currently supports only the **China East 2 (Shanghai)** region.
   * - Maximum calls per user: 30 calls per second.
   * - Request method: POST.
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
   * Sets whether the certificate feature is enabled for a specified domain name and updates the certificate information.
   * 
   * @remarks
   * - This operation currently supports only the **China East 2 (Shanghai)** region.
   * - Maximum calls per user: 30 calls per second.
   * - Request method: POST.
   * 
   * @param request - SetVodDomainSSLCertificateRequest
   * @returns SetVodDomainSSLCertificateResponse
   */
  async setVodDomainSSLCertificate(request: $_model.SetVodDomainSSLCertificateRequest): Promise<$_model.SetVodDomainSSLCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setVodDomainSSLCertificateWithOptions(request, runtime);
  }

  /**
   * Submits an image automated review task. The task is asynchronously executed after it is submitted. The task may not be complete when the response is returned.
   * 
   * @remarks
   * - **Before you use this operation, make sure that you are familiar with the billing methods and pricing of ApsaraVideo VOD. Automated review is a paid feature. For billing details, <props="china">see [Automated review billing](~~188310#section-g7l-s3o-9ng~~).<props="intl">submit a ticket or contact your Alibaba Cloud account manager.**
   * - <props="china">This operation is supported only in the **China (Shanghai), China (Beijing), and Singapore** regions.<props="intl">This operation is supported only in the Singapore region.
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, the task ID is returned. At this point, the task is not complete and enters a queue for asynchronous execution. The final result is sent through a callback notification. You can also call [Query automated review job](https://help.aliyun.com/document_detail/454959.html) to query the task status.
   * - The size of a single image cannot exceed 20 MB. The height or width cannot exceed 30,000 px. The total number of pixels cannot exceed 250 million px.
   * - (Recommended) The image resolution is at least 256 × 256 px. A lower resolution may affect the review results.
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
   * Submits an image automated review task. The task is asynchronously executed after it is submitted. The task may not be complete when the response is returned.
   * 
   * @remarks
   * - **Before you use this operation, make sure that you are familiar with the billing methods and pricing of ApsaraVideo VOD. Automated review is a paid feature. For billing details, <props="china">see [Automated review billing](~~188310#section-g7l-s3o-9ng~~).<props="intl">submit a ticket or contact your Alibaba Cloud account manager.**
   * - <props="china">This operation is supported only in the **China (Shanghai), China (Beijing), and Singapore** regions.<props="intl">This operation is supported only in the Singapore region.
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, the task ID is returned. At this point, the task is not complete and enters a queue for asynchronous execution. The final result is sent through a callback notification. You can also call [Query automated review job](https://help.aliyun.com/document_detail/454959.html) to query the task status.
   * - The size of a single image cannot exceed 20 MB. The height or width cannot exceed 30,000 px. The total number of pixels cannot exceed 250 million px.
   * - (Recommended) The image resolution is at least 256 × 256 px. A lower resolution may affect the review results.
   * 
   * @param request - SubmitAIImageAuditJobRequest
   * @returns SubmitAIImageAuditJobResponse
   */
  async submitAIImageAuditJob(request: $_model.SubmitAIImageAuditJobRequest): Promise<$_model.SubmitAIImageAuditJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIImageAuditJobWithOptions(request, runtime);
  }

  /**
   * Submits an AI image processing task.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)** and **China (Shanghai)**.
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, the task ID is returned. The task is not yet complete at this point and enters a background queue for asynchronous execution. The final result is sent through a callback notification. You can also call [GetAIImageJobs](https://help.aliyun.com/document_detail/186923.html) to query the task execution result.
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
   * Submits an AI image processing task.
   * 
   * @remarks
   * - Currently, this operation is supported in the following regions: **China (Beijing)** and **China (Shanghai)**.
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, the task ID is returned. The task is not yet complete at this point and enters a background queue for asynchronous execution. The final result is sent through a callback notification. You can also call [GetAIImageJobs](https://help.aliyun.com/document_detail/186923.html) to query the task execution result.
   * 
   * @param request - SubmitAIImageJobRequest
   * @returns SubmitAIImageJobResponse
   */
  async submitAIImageJob(request: $_model.SubmitAIImageJobRequest): Promise<$_model.SubmitAIImageJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIImageJobWithOptions(request, runtime);
  }

  /**
   * Submits an intelligent tagging or media fingerprint job.
   * 
   * @remarks
   * - **Before using this operation, make sure that you fully understand the billing methods and pricing of ApsaraVideo VOD. Intelligent tagging and media fingerprint are paid features. For billing details, see [Video AI billing](~~188310#section-g7l-s3o-9ng~~).**
   * - Regions supported by media fingerprint: **China (Beijing)**, **China (Shanghai)**, and **Singapore**. Regions supported by intelligent tagging: **China (Beijing)** and **China (Shanghai)**.
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit an AI job, the job ID is returned. The job is not yet complete at this point and enters a queue for asynchronous execution. We recommend that you configure the [event notification](https://help.aliyun.com/document_detail/55627.html) feature and set the callback event to **Video AI Processing Complete** to obtain the final processing result. You can also call [GetTaskDetail](https://help.aliyun.com/document_detail/2861326.html) to query the job status.
   * - You must activate the media fingerprint or intelligent tagging service before you can call this operation to submit AI jobs. For more information, see [Video AI](https://help.aliyun.com/document_detail/101148.html).
   * - When you use media fingerprint for the first time, provide your UID and region information and submit a ticket to apply for free activation of the fingerprint library. Otherwise, the media fingerprint feature will not work properly. For more information about how to submit a ticket, see [Contact us](https://help.aliyun.com/document_detail/464625.html).
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
   * Submits an intelligent tagging or media fingerprint job.
   * 
   * @remarks
   * - **Before using this operation, make sure that you fully understand the billing methods and pricing of ApsaraVideo VOD. Intelligent tagging and media fingerprint are paid features. For billing details, see [Video AI billing](~~188310#section-g7l-s3o-9ng~~).**
   * - Regions supported by media fingerprint: **China (Beijing)**, **China (Shanghai)**, and **Singapore**. Regions supported by intelligent tagging: **China (Beijing)** and **China (Shanghai)**.
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit an AI job, the job ID is returned. The job is not yet complete at this point and enters a queue for asynchronous execution. We recommend that you configure the [event notification](https://help.aliyun.com/document_detail/55627.html) feature and set the callback event to **Video AI Processing Complete** to obtain the final processing result. You can also call [GetTaskDetail](https://help.aliyun.com/document_detail/2861326.html) to query the job status.
   * - You must activate the media fingerprint or intelligent tagging service before you can call this operation to submit AI jobs. For more information, see [Video AI](https://help.aliyun.com/document_detail/101148.html).
   * - When you use media fingerprint for the first time, provide your UID and region information and submit a ticket to apply for free activation of the fingerprint library. Otherwise, the media fingerprint feature will not work properly. For more information about how to submit a ticket, see [Contact us](https://help.aliyun.com/document_detail/464625.html).
   * 
   * @param request - SubmitAIJobRequest
   * @returns SubmitAIJobResponse
   */
  async submitAIJob(request: $_model.SubmitAIJobRequest): Promise<$_model.SubmitAIJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIJobWithOptions(request, runtime);
  }

  /**
   * Submits an automated review job for audio and video files. The job is executed asynchronously after submission, and the job may not be complete when the response is returned.
   * 
   * @remarks
   * - **Before using this API, make sure that you understand the billing methods and pricing of ApsaraVideo VOD. Automated review is a paid feature. For billing details, <props="china">see [Automated review billing](~~188310#section-g7l-s3o-9ng~~).<props="intl">submit a ticket or contact your Alibaba Cloud account manager.**
   * - This operation currently supports only the **Shanghai**, **Beijing**, and **Singapore** regions.
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, the task ID is returned. The task is not complete at this point and enters a queue for asynchronous execution. The final result is sent through a callback notification. You can also call [Query automated review job](https://help.aliyun.com/document_detail/454959.html) to query the task status.
   * - For the development guide on submitting automated review jobs, see [Automated review](https://help.aliyun.com/document_detail/101148.html).
   * - After an automated review job is complete, the image resources generated during the job are retained free of charge for only two weeks in the VOD system bucket allocated by ApsaraVideo VOD. The images are automatically deleted after two weeks.
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
   * Submits an automated review job for audio and video files. The job is executed asynchronously after submission, and the job may not be complete when the response is returned.
   * 
   * @remarks
   * - **Before using this API, make sure that you understand the billing methods and pricing of ApsaraVideo VOD. Automated review is a paid feature. For billing details, <props="china">see [Automated review billing](~~188310#section-g7l-s3o-9ng~~).<props="intl">submit a ticket or contact your Alibaba Cloud account manager.**
   * - This operation currently supports only the **Shanghai**, **Beijing**, and **Singapore** regions.
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, the task ID is returned. The task is not complete at this point and enters a queue for asynchronous execution. The final result is sent through a callback notification. You can also call [Query automated review job](https://help.aliyun.com/document_detail/454959.html) to query the task status.
   * - For the development guide on submitting automated review jobs, see [Automated review](https://help.aliyun.com/document_detail/101148.html).
   * - After an automated review job is complete, the image resources generated during the job are retained free of charge for only two weeks in the VOD system bucket allocated by ApsaraVideo VOD. The images are automatically deleted after two weeks.
   * 
   * @param request - SubmitAIMediaAuditJobRequest
   * @returns SubmitAIMediaAuditJobResponse
   */
  async submitAIMediaAuditJob(request: $_model.SubmitAIMediaAuditJobRequest): Promise<$_model.SubmitAIMediaAuditJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIMediaAuditJobWithOptions(request, runtime);
  }

  /**
   * Submits a digital watermarking (copyright watermark or tracing watermark) extraction job to asynchronously extract a copyright watermark or tracing watermark.
   * 
   * @remarks
   * - **Before using this operation, make sure that you fully understand the billing methods and pricing of ApsaraVideo VOD. Digital watermarking is a paid feature. Both the generation and extraction of digital watermarks incur fees. For billing details, see [Digital watermarking billing](~~188310#62b9c940403se~~).**
   * - Currently, this operation is available only in the following regions: **China (Shanghai)** and **China (Beijing)**.
   * - <props="china">For more information about the generation and extraction of digital watermarks, see [Digital watermarking](https://help.aliyun.com/document_detail/2527021.html).Before you submit a digital watermark extraction job, make sure that the following conditions are met:
   *   - The video from which you want to extract the watermark has been uploaded to ApsaraVideo VOD.
   *   - The duration of the video from which you want to extract the watermark exceeds 6 minutes.
   * - After you submit a digital watermark extraction job, call the [GetDigitalWatermarkExtractResult](https://help.aliyun.com/document_detail/2587769.html) operation to query the job result.
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
   * Submits a digital watermarking (copyright watermark or tracing watermark) extraction job to asynchronously extract a copyright watermark or tracing watermark.
   * 
   * @remarks
   * - **Before using this operation, make sure that you fully understand the billing methods and pricing of ApsaraVideo VOD. Digital watermarking is a paid feature. Both the generation and extraction of digital watermarks incur fees. For billing details, see [Digital watermarking billing](~~188310#62b9c940403se~~).**
   * - Currently, this operation is available only in the following regions: **China (Shanghai)** and **China (Beijing)**.
   * - <props="china">For more information about the generation and extraction of digital watermarks, see [Digital watermarking](https://help.aliyun.com/document_detail/2527021.html).Before you submit a digital watermark extraction job, make sure that the following conditions are met:
   *   - The video from which you want to extract the watermark has been uploaded to ApsaraVideo VOD.
   *   - The duration of the video from which you want to extract the watermark exceeds 6 minutes.
   * - After you submit a digital watermark extraction job, call the [GetDigitalWatermarkExtractResult](https://help.aliyun.com/document_detail/2587769.html) operation to query the job result.
   * 
   * @param request - SubmitDigitalWatermarkExtractJobRequest
   * @returns SubmitDigitalWatermarkExtractJobResponse
   */
  async submitDigitalWatermarkExtractJob(request: $_model.SubmitDigitalWatermarkExtractJobRequest): Promise<$_model.SubmitDigitalWatermarkExtractJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDigitalWatermarkExtractJobWithOptions(request, runtime);
  }

  /**
   * Submits a media animated image job for asynchronous processing.
   * 
   * @remarks
   * ### Usage notes
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, the task ID is returned. The task is queued for asynchronous execution in the background. You can receive the final result through a callback notification or proactively query the task status by calling [Get task details](https://help.aliyun.com/document_detail/2861326.html).
   * - You can submit an animated image job only for videos in the **UploadSucc**, **Transcoding**, **Normal**, **Checking**, or **Blocked** state.
   * - Animated image production is billed as video transcoding at the same rate, based on resolution and duration. For more information, see [Media transcoding billing](https://help.aliyun.com/document_detail/188308.html).
   * ### QPS limit
   * The QPS limit for a single user on this operation is 30 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Submits a media animated image job for asynchronous processing.
   * 
   * @remarks
   * ### Usage notes
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, the task ID is returned. The task is queued for asynchronous execution in the background. You can receive the final result through a callback notification or proactively query the task status by calling [Get task details](https://help.aliyun.com/document_detail/2861326.html).
   * - You can submit an animated image job only for videos in the **UploadSucc**, **Transcoding**, **Normal**, **Checking**, or **Blocked** state.
   * - Animated image production is billed as video transcoding at the same rate, based on resolution and duration. For more information, see [Media transcoding billing](https://help.aliyun.com/document_detail/188308.html).
   * ### QPS limit
   * The QPS limit for a single user on this operation is 30 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - SubmitDynamicImageJobRequest
   * @returns SubmitDynamicImageJobResponse
   */
  async submitDynamicImageJob(request: $_model.SubmitDynamicImageJobRequest): Promise<$_model.SubmitDynamicImageJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDynamicImageJobWithOptions(request, runtime);
  }

  /**
   * Deletes a media fingerprint job.
   * 
   * @remarks
   * Currently, this operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
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
   * Deletes a media fingerprint job.
   * 
   * @remarks
   * Currently, this operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * 
   * @param request - SubmitMediaDNADeleteJobRequest
   * @returns SubmitMediaDNADeleteJobResponse
   */
  async submitMediaDNADeleteJob(request: $_model.SubmitMediaDNADeleteJobRequest): Promise<$_model.SubmitMediaDNADeleteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitMediaDNADeleteJobWithOptions(request, runtime);
  }

  /**
   * Transcodes a video by using a China Production Studio (China Production Studio) for preprocessing.
   * 
   * @remarks
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, the task ID is returned. The task is queued for asynchronous execution in the background. The final result is sent through a callback notification. You can also call [GetTaskDetail](https://help.aliyun.com/document_detail/2861326.html) to query the task status.
   * - Video preprocessing is essentially a transcoding process that generates videos that meet the playback requirements of the China Production Studio. Therefore, **metering and billing** information is generated. For billing details, see [China Production Studio fees](https://help.aliyun.com/document_detail/64531.html).
   * - To meet the quality requirements of the China Production Studio for materials, videos in MP4 format with a short side of 360 must meet at least one of the following conditions before preprocessing can be initiated: the resolution exceeds 1920, the bit rate exceeds 6000 kbps, or the frame rate exceeds 25.
   * - You can receive the [TranscodeComplete](https://help.aliyun.com/document_detail/55638.html) callback message to obtain the processing result. When the callback message contains **Preprocess=true**, it indicates that the preprocessing is complete.
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
   * Transcodes a video by using a China Production Studio (China Production Studio) for preprocessing.
   * 
   * @remarks
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, the task ID is returned. The task is queued for asynchronous execution in the background. The final result is sent through a callback notification. You can also call [GetTaskDetail](https://help.aliyun.com/document_detail/2861326.html) to query the task status.
   * - Video preprocessing is essentially a transcoding process that generates videos that meet the playback requirements of the China Production Studio. Therefore, **metering and billing** information is generated. For billing details, see [China Production Studio fees](https://help.aliyun.com/document_detail/64531.html).
   * - To meet the quality requirements of the China Production Studio for materials, videos in MP4 format with a short side of 360 must meet at least one of the following conditions before preprocessing can be initiated: the resolution exceeds 1920, the bit rate exceeds 6000 kbps, or the frame rate exceeds 25.
   * - You can receive the [TranscodeComplete](https://help.aliyun.com/document_detail/55638.html) callback message to obtain the processing result. When the callback message contains **Preprocess=true**, it indicates that the preprocessing is complete.
   * 
   * @param request - SubmitPreprocessJobsRequest
   * @returns SubmitPreprocessJobsResponse
   */
  async submitPreprocessJobs(request: $_model.SubmitPreprocessJobsRequest): Promise<$_model.SubmitPreprocessJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitPreprocessJobsWithOptions(request, runtime);
  }

  /**
   * Submits a video snapshot job to start asynchronous snapshot processing.
   * 
   * @remarks
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, the task ID is returned (the task is not yet complete and enters a queue for asynchronous execution). The final result is sent through a callback notification. You can also proactively query the task status by calling [Get task details](https://help.aliyun.com/document_detail/2861326.html).
   * - Only JPG images are supported.
   * - When the snapshot is complete, an event notification of [Video snapshot complete](https://help.aliyun.com/document_detail/57337.html) with EventType=SnapshotComplete and SubType=SpecifiedTime is sent.
   * ### QPS limit
   * The QPS limit for a single user on this operation is 30 calls per second. If this limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Submits a video snapshot job to start asynchronous snapshot processing.
   * 
   * @remarks
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, the task ID is returned (the task is not yet complete and enters a queue for asynchronous execution). The final result is sent through a callback notification. You can also proactively query the task status by calling [Get task details](https://help.aliyun.com/document_detail/2861326.html).
   * - Only JPG images are supported.
   * - When the snapshot is complete, an event notification of [Video snapshot complete](https://help.aliyun.com/document_detail/57337.html) with EventType=SnapshotComplete and SubType=SpecifiedTime is sent.
   * ### QPS limit
   * The QPS limit for a single user on this operation is 30 calls per second. If this limit is exceeded, the API call is throttled, which may affect your business. Call this operation appropriately. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - SubmitSnapshotJobRequest
   * @returns SubmitSnapshotJobResponse
   */
  async submitSnapshotJob(request: $_model.SubmitSnapshotJobRequest): Promise<$_model.SubmitSnapshotJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSnapshotJobWithOptions(request, runtime);
  }

  /**
   * Submits a media transcoding job to start asynchronous transcoding.
   * 
   * @remarks
   * ### Usage notes
   * - **Before you use this operation, make sure that you fully understand the billing methods and pricing of ApsaraVideo VOD. Transcoding is a paid feature. For more information about billing, see [Transcoding billing](~~188308#section-ejb-nii-nqa~~).**
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, the task ID is returned. The task is not yet complete at this point and enters a queue for asynchronous execution. The final result is sent through a callback notification. You can also call [GetTranscodeTask](https://help.aliyun.com/document_detail/454946.html) to query the task status.
   * - Only videos in the **UploadSucc**, **Normal**, or **Checking** state can be transcoded.
   * - To obtain transcoding results, configure callback messages: [SingleCompleteEvent](https://help.aliyun.com/document_detail/55636.html) and [AllCompleteEvent](https://help.aliyun.com/document_detail/55638.html).
   * - This operation supports dynamic replacement of subtitle URLs in HLS adaptive bitrate streaming packaging tasks. If the packaging task does not involve subtitle packaging, do not use this operation to initiate the task. Instead, specify the corresponding transcoding template group ID during video upload to automatically trigger the packaging process.
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
   * Submits a media transcoding job to start asynchronous transcoding.
   * 
   * @remarks
   * ### Usage notes
   * - **Before you use this operation, make sure that you fully understand the billing methods and pricing of ApsaraVideo VOD. Transcoding is a paid feature. For more information about billing, see [Transcoding billing](~~188308#section-ejb-nii-nqa~~).**
   * - This is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, the task ID is returned. The task is not yet complete at this point and enters a queue for asynchronous execution. The final result is sent through a callback notification. You can also call [GetTranscodeTask](https://help.aliyun.com/document_detail/454946.html) to query the task status.
   * - Only videos in the **UploadSucc**, **Normal**, or **Checking** state can be transcoded.
   * - To obtain transcoding results, configure callback messages: [SingleCompleteEvent](https://help.aliyun.com/document_detail/55636.html) and [AllCompleteEvent](https://help.aliyun.com/document_detail/55638.html).
   * - This operation supports dynamic replacement of subtitle URLs in HLS adaptive bitrate streaming packaging tasks. If the packaging task does not involve subtitle packaging, do not use this operation to initiate the task. Instead, specify the corresponding transcoding template group ID during video upload to automatically trigger the packaging process.
   * 
   * @param request - SubmitTranscodeJobsRequest
   * @returns SubmitTranscodeJobsResponse
   */
  async submitTranscodeJobs(request: $_model.SubmitTranscodeJobsRequest): Promise<$_model.SubmitTranscodeJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitTranscodeJobsWithOptions(request, runtime);
  }

  /**
   * Initiates a VOD workflow for a video.
   * 
   * @remarks
   * - **Before using this operation, make sure that you fully understand the billing methods and pricing of ApsaraVideo VOD. Using workflows may incur fees for transcoding, encryption, automated review, and other services. For more information, see [Billing overview](https://help.aliyun.com/document_detail/188307.html).**
   * - This operation is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, a task ID is returned (the task is not yet complete and enters a background queue for asynchronous execution). The final result is sent through a callback notification. You can also call [GetTask](https://help.aliyun.com/document_detail/2861326.html) to query the task status.
   * - Call this operation to initiate a workflow processing task for a video. For more information about workflows, see [Workflow](https://help.aliyun.com/document_detail/115347.html).
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
   * Initiates a VOD workflow for a video.
   * 
   * @remarks
   * - **Before using this operation, make sure that you fully understand the billing methods and pricing of ApsaraVideo VOD. Using workflows may incur fees for transcoding, encryption, automated review, and other services. For more information, see [Billing overview](https://help.aliyun.com/document_detail/188307.html).**
   * - This operation is an [asynchronous operation](https://help.aliyun.com/document_detail/3027551.html). After you submit a task, a task ID is returned (the task is not yet complete and enters a background queue for asynchronous execution). The final result is sent through a callback notification. You can also call [GetTask](https://help.aliyun.com/document_detail/2861326.html) to query the task status.
   * - Call this operation to initiate a workflow processing task for a video. For more information about workflows, see [Workflow](https://help.aliyun.com/document_detail/115347.html).
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
   * - Currently, this operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * - After you call the [AddAITemplate](https://help.aliyun.com/document_detail/102930.html) operation to add an AI template, you can call this operation to modify the AI template.
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
   * - Currently, this operation is supported in the following regions: **China (Beijing)**, **China (Shanghai)**, and **Singapore**.
   * - After you call the [AddAITemplate](https://help.aliyun.com/document_detail/102930.html) operation to add an AI template, you can call this operation to modify the AI template.
   * 
   * @param request - UpdateAITemplateRequest
   * @returns UpdateAITemplateResponse
   */
  async updateAITemplate(request: $_model.UpdateAITemplateRequest): Promise<$_model.UpdateAITemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAITemplateWithOptions(request, runtime);
  }

  /**
   * Updates application information.
   * 
   * @remarks
   * After an application is created, you can call this operation to locate an application by its application ID and modify the name, description, and status of the application.
   * ### QPS limit
   * The single-user QPS limit for this operation is 30 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation properly. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Updates application information.
   * 
   * @remarks
   * After an application is created, you can call this operation to locate an application by its application ID and modify the name, description, and status of the application.
   * ### QPS limit
   * The single-user QPS limit for this operation is 30 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation properly. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - UpdateAppInfoRequest
   * @returns UpdateAppInfoResponse
   */
  async updateAppInfo(request: $_model.UpdateAppInfoRequest): Promise<$_model.UpdateAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAppInfoWithOptions(request, runtime);
  }

  /**
   * Batch updates the information of auxiliary media assets, such as title, description, tags, and category, by specifying the unique identifiers (IDs) of the auxiliary media assets that have been uploaded to ApsaraVideo VOD, including watermarked images, subtitle files, and other materials.
   * 
   * @remarks
   * You can update the information of up to 20 auxiliary media assets at a time.
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
   * Batch updates the information of auxiliary media assets, such as title, description, tags, and category, by specifying the unique identifiers (IDs) of the auxiliary media assets that have been uploaded to ApsaraVideo VOD, including watermarked images, subtitle files, and other materials.
   * 
   * @remarks
   * You can update the information of up to 20 auxiliary media assets at a time.
   * 
   * @param request - UpdateAttachedMediaInfosRequest
   * @returns UpdateAttachedMediaInfosResponse
   */
  async updateAttachedMediaInfos(request: $_model.UpdateAttachedMediaInfosRequest): Promise<$_model.UpdateAttachedMediaInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAttachedMediaInfosWithOptions(request, runtime);
  }

  /**
   * Updates the name of a category.
   * 
   * @remarks
   * After a category is created, you can call this operation to modify the name of the category. If the category has been annotated to some media assets, the category name annotated to those media assets is updated synchronously after the category name is modified.
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
   * Updates the name of a category.
   * 
   * @remarks
   * After a category is created, you can call this operation to modify the name of the category. If the category has been annotated to some media assets, the category name annotated to those media assets is updated synchronously after the category name is modified.
   * 
   * @param request - UpdateCategoryRequest
   * @returns UpdateCategoryResponse
   */
  async updateCategory(request: $_model.UpdateCategoryRequest): Promise<$_model.UpdateCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCategoryWithOptions(request, runtime);
  }

  /**
   * Modifies an online editing project (video editing task).
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
   * Modifies an online editing project (video editing task).
   * 
   * @param request - UpdateEditingProjectRequest
   * @returns UpdateEditingProjectResponse
   */
  async updateEditingProject(request: $_model.UpdateEditingProjectRequest): Promise<$_model.UpdateEditingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEditingProjectWithOptions(request, runtime);
  }

  /**
   * Batch modifies the title, description, tags, and category information of images by image ID after the images are uploaded to ApsaraVideo VOD.
   * 
   * @remarks
   * - This operation only supports modifying uploaded images. Modifying images generated from video snapshots is not supported.
   * - You can modify the information of up to 20 images at a time.
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
   * Batch modifies the title, description, tags, and category information of images by image ID after the images are uploaded to ApsaraVideo VOD.
   * 
   * @remarks
   * - This operation only supports modifying uploaded images. Modifying images generated from video snapshots is not supported.
   * - You can modify the information of up to 20 images at a time.
   * 
   * @param request - UpdateImageInfosRequest
   * @returns UpdateImageInfosResponse
   */
  async updateImageInfos(request: $_model.UpdateImageInfosRequest): Promise<$_model.UpdateImageInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateImageInfosWithOptions(request, runtime);
  }

  /**
   * Modifies the storage class of a media asset.
   * 
   * @remarks
   * - Before using this operation, make sure that you fully understand the billing methods and pricing of ApsaraVideo VOD. Modifying the storage class of a media asset incurs storage fees. For billing details, see [Media asset storage billing](~~188308#section-e97-xrp-mzz~~).
   * - Modifying the storage class is an **asynchronous operation**. A callback is sent to you after the entire operation is complete.
   * - If the current storage class of a media asset is Archive or ColdArchive, calling this operation automatically triggers a restore. After the restore is complete, the storage class is modified. You do not need to manually call the RestoreMedia operation to restore the media asset. For ColdArchive media assets, you need to specify the restore priority. The default value is RestoreTier=Standard.
   * - A media asset that is being modified cannot be modified again or be used for production or processing.
   * - Media assets in non-Standard storage classes have minimum storage duration requirements: Infrequent Access/source file Infrequent Access requires at least 30 days. Archive/source file Archive requires at least 60 days. ColdArchive/source file ColdArchive requires at least 180 days. If the storage duration is insufficient, modifying the storage class incurs storage fees for the remaining days. For example, if you modify the storage class from Infrequent Access to Standard after 10 days of storage, you are charged for the remaining 20 days of Infrequent Access storage, totaling 30 days of Infrequent Access storage fees.
   * - **Modifying the storage class of a self-managed bucket is not supported**.
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
   * Modifies the storage class of a media asset.
   * 
   * @remarks
   * - Before using this operation, make sure that you fully understand the billing methods and pricing of ApsaraVideo VOD. Modifying the storage class of a media asset incurs storage fees. For billing details, see [Media asset storage billing](~~188308#section-e97-xrp-mzz~~).
   * - Modifying the storage class is an **asynchronous operation**. A callback is sent to you after the entire operation is complete.
   * - If the current storage class of a media asset is Archive or ColdArchive, calling this operation automatically triggers a restore. After the restore is complete, the storage class is modified. You do not need to manually call the RestoreMedia operation to restore the media asset. For ColdArchive media assets, you need to specify the restore priority. The default value is RestoreTier=Standard.
   * - A media asset that is being modified cannot be modified again or be used for production or processing.
   * - Media assets in non-Standard storage classes have minimum storage duration requirements: Infrequent Access/source file Infrequent Access requires at least 30 days. Archive/source file Archive requires at least 60 days. ColdArchive/source file ColdArchive requires at least 180 days. If the storage duration is insufficient, modifying the storage class incurs storage fees for the remaining days. For example, if you modify the storage class from Infrequent Access to Standard after 10 days of storage, you are charged for the remaining 20 days of Infrequent Access storage, totaling 30 days of Infrequent Access storage fees.
   * - **Modifying the storage class of a self-managed bucket is not supported**.
   * 
   * @param request - UpdateMediaStorageClassRequest
   * @returns UpdateMediaStorageClassResponse
   */
  async updateMediaStorageClass(request: $_model.UpdateMediaStorageClassRequest): Promise<$_model.UpdateMediaStorageClassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaStorageClassWithOptions(request, runtime);
  }

  /**
   * Modifies transcoding configurations. You can modify the configuration of a specified transcoding template in a transcoding template group.
   * 
   * @remarks
   * For security purposes, you cannot add, modify, or delete transcoding template groups that are in the locked state. You can call the [GetTranscodeTemplateGroup](~~GetTranscodeTemplateGroup~~) operation to query the template configuration and check whether the template group is locked based on the Locked response parameter. Alternatively, you can call this operation to unlock the template group before you add, modify, or delete templates.
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
   * Modifies transcoding configurations. You can modify the configuration of a specified transcoding template in a transcoding template group.
   * 
   * @remarks
   * For security purposes, you cannot add, modify, or delete transcoding template groups that are in the locked state. You can call the [GetTranscodeTemplateGroup](~~GetTranscodeTemplateGroup~~) operation to query the template configuration and check whether the template group is locked based on the Locked response parameter. Alternatively, you can call this operation to unlock the template group before you add, modify, or delete templates.
   * 
   * @param request - UpdateTranscodeTemplateGroupRequest
   * @returns UpdateTranscodeTemplateGroupResponse
   */
  async updateTranscodeTemplateGroup(request: $_model.UpdateTranscodeTemplateGroupRequest): Promise<$_model.UpdateTranscodeTemplateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTranscodeTemplateGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the information about a single audio or video file.
   * 
   * @remarks
   * ### Operation description
   * This operation locates an audio or video file by video ID and supports modifying the title, tags, description, and other information of the file. If a parameter is specified, the corresponding field is updated. Otherwise, the field is not overwritten or updated.
   * ### QPS limit
   * A single user can perform a maximum of 100 queries per second (QPS). Throttling is triggered when the QPS limit is exceeded, which may affect your business. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Modifies the information about a single audio or video file.
   * 
   * @remarks
   * ### Operation description
   * This operation locates an audio or video file by video ID and supports modifying the title, tags, description, and other information of the file. If a parameter is specified, the corresponding field is updated. Otherwise, the field is not overwritten or updated.
   * ### QPS limit
   * A single user can perform a maximum of 100 queries per second (QPS). Throttling is triggered when the QPS limit is exceeded, which may affect your business. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - UpdateVideoInfoRequest
   * @returns UpdateVideoInfoResponse
   */
  async updateVideoInfo(request: $_model.UpdateVideoInfoRequest): Promise<$_model.UpdateVideoInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVideoInfoWithOptions(request, runtime);
  }

  /**
   * Modifies the information about multiple audio and video files at a time.
   * 
   * @remarks
   * ### Usage notes
   * - Audio and video files are identified by their IDs. You can modify the title, tags, and description of audio and video files. If a parameter is specified, the corresponding field is updated. Otherwise, the field is not overwritten or updated.
   * - You can modify the information about up to 20 audio and video files at a time.
   * ### QPS limit
   * The single-user QPS limit for this operation is 30 calls per second. If the limit is exceeded, the API call is throttled, which may affect your business. Call this operation properly. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
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
   * Modifies the information about multiple audio and video files at a time.
   * 
   * @remarks
   * ### Usage notes
   * - Audio and video files are identified by their IDs. You can modify the title, tags, and description of audio and video files. If a parameter is specified, the corresponding field is updated. Otherwise, the field is not overwritten or updated.
   * - You can modify the information about up to 20 audio and video files at a time.
   * ### QPS limit
   * The single-user QPS limit for this operation is 30 calls per second. If the limit is exceeded, the API call is throttled, which may affect your business. Call this operation properly. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342790.html).
   * 
   * @param request - UpdateVideoInfosRequest
   * @returns UpdateVideoInfosResponse
   */
  async updateVideoInfos(request: $_model.UpdateVideoInfosRequest): Promise<$_model.UpdateVideoInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVideoInfosWithOptions(request, runtime);
  }

  /**
   * Modifies an accelerated domain name.
   * 
   * @remarks
   * > This operation is available only in the **China (Shanghai)** region.
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
   * Modifies an accelerated domain name.
   * 
   * @remarks
   * > This operation is available only in the **China (Shanghai)** region.
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
   * Modifies the name and watermark configuration (WatermarkConfig) of an image and text watermark template that was added by calling the AddWatermark operation.
   * 
   * @remarks
   * - After you invoke [AddWatermark](~~AddWatermark~~) to add an image and text watermark template, you can invoke this operation to modify the name and watermark configuration of the template.
   * - This operation does not support replacing the image in an image watermark template or modifying the template across templatetypes (such as changing an image watermark template to a text watermark template).
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
   * Modifies the name and watermark configuration (WatermarkConfig) of an image and text watermark template that was added by calling the AddWatermark operation.
   * 
   * @remarks
   * - After you invoke [AddWatermark](~~AddWatermark~~) to add an image and text watermark template, you can invoke this operation to modify the name and watermark configuration of the template.
   * - This operation does not support replacing the image in an image watermark template or modifying the template across templatetypes (such as changing an image watermark template to a text watermark template).
   * 
   * @param request - UpdateWatermarkRequest
   * @returns UpdateWatermarkResponse
   */
  async updateWatermark(request: $_model.UpdateWatermarkRequest): Promise<$_model.UpdateWatermarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWatermarkWithOptions(request, runtime);
  }

  /**
   * Pulls audio and video media files for upload based on source file URLs. Batch upload is supported.
   * 
   * @remarks
   * - **Before using this operation, make sure that you fully understand the billing methods and pricing of ApsaraVideo VOD. Uploading media files to ApsaraVideo VOD incurs storage fees. For billing details, see [Media asset storage billing](~~188308#section_e97_xrp_mzz~~). If you have enabled storage transfer acceleration, uploading media files to ApsaraVideo VOD also incurs upload acceleration fees. For billing details, see [Storage transfer acceleration billing](~~188310#section_sta_zm2_tsv~~).**
   * - For the media file formats supported by this operation, see [Media formats](~~55396#section-e27-2rj-mde~~).
   * - This operation is mainly applicable to scenarios where files are not stored on a local server or terminal and need to be uploaded through a URL with public network access.
   * - This operation is an [asynchronous upload operation](https://help.aliyun.com/document_detail/3027551.html). It is not real-time and does not guarantee timeliness. Generally, the migration upload is completed within hours or even days after the node is submitted. If you have high timeliness requirements, use the upload SDK instead.
   * - If a callback is configured, you will receive the [URL upload video complete](https://help.aliyun.com/document_detail/86326.html) event notification after the upload is completed. You can call the [GetURLUploadInfos](https://help.aliyun.com/document_detail/106830.html) operation to query the upload status.
   * - After an upload node is submitted, an asynchronous node is generated in the cloud for execute. All URL upload nodes committed by users in the corresponding service region are queued for execute. The completion time is affected by the number of existing nodes. After the upload is completed, you can associate the URL with the video ID based on the information returned in the event notification (message callback).
   * - This operation currently supports only the **China (Shanghai)**, **China (Beijing)**, **China (Shenzhen)**, **Singapore**, and **US (Silicon Valley)** regions.
   * - Each time you commit an upload node for the same media file URL, a new media resource is generated in ApsaraVideo VOD (that is, a new media ID is generated).
   * - If a single file exceeds 20 GB, the upload is failed. If you need to upload a single file larger than 20 GB, use the upload SDK. For more information, see [Overview of the upload SDK](https://help.aliyun.com/document_detail/52200.html).
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

    if (!$dara.isNull(request.enableFirstFrameCover)) {
      query["EnableFirstFrameCover"] = request.enableFirstFrameCover;
    }

    if (!$dara.isNull(request.generateThumbnail)) {
      query["GenerateThumbnail"] = request.generateThumbnail;
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
   * Pulls audio and video media files for upload based on source file URLs. Batch upload is supported.
   * 
   * @remarks
   * - **Before using this operation, make sure that you fully understand the billing methods and pricing of ApsaraVideo VOD. Uploading media files to ApsaraVideo VOD incurs storage fees. For billing details, see [Media asset storage billing](~~188308#section_e97_xrp_mzz~~). If you have enabled storage transfer acceleration, uploading media files to ApsaraVideo VOD also incurs upload acceleration fees. For billing details, see [Storage transfer acceleration billing](~~188310#section_sta_zm2_tsv~~).**
   * - For the media file formats supported by this operation, see [Media formats](~~55396#section-e27-2rj-mde~~).
   * - This operation is mainly applicable to scenarios where files are not stored on a local server or terminal and need to be uploaded through a URL with public network access.
   * - This operation is an [asynchronous upload operation](https://help.aliyun.com/document_detail/3027551.html). It is not real-time and does not guarantee timeliness. Generally, the migration upload is completed within hours or even days after the node is submitted. If you have high timeliness requirements, use the upload SDK instead.
   * - If a callback is configured, you will receive the [URL upload video complete](https://help.aliyun.com/document_detail/86326.html) event notification after the upload is completed. You can call the [GetURLUploadInfos](https://help.aliyun.com/document_detail/106830.html) operation to query the upload status.
   * - After an upload node is submitted, an asynchronous node is generated in the cloud for execute. All URL upload nodes committed by users in the corresponding service region are queued for execute. The completion time is affected by the number of existing nodes. After the upload is completed, you can associate the URL with the video ID based on the information returned in the event notification (message callback).
   * - This operation currently supports only the **China (Shanghai)**, **China (Beijing)**, **China (Shenzhen)**, **Singapore**, and **US (Silicon Valley)** regions.
   * - Each time you commit an upload node for the same media file URL, a new media resource is generated in ApsaraVideo VOD (that is, a new media ID is generated).
   * - If a single file exceeds 20 GB, the upload is failed. If you need to upload a single file larger than 20 GB, use the upload SDK. For more information, see [Overview of the upload SDK](https://help.aliyun.com/document_detail/52200.html).
   * 
   * @param request - UploadMediaByURLRequest
   * @returns UploadMediaByURLResponse
   */
  async uploadMediaByURL(request: $_model.UploadMediaByURLRequest): Promise<$_model.UploadMediaByURLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadMediaByURLWithOptions(request, runtime);
  }

  /**
   * Uploads a transcoded stream file from external storage and mounts it to the corresponding ApsaraVideo VOD media asset.
   * 
   * @remarks
   * - **Before using this operation, make sure that you fully understand the billing methods and pricing of ApsaraVideo VOD. Uploading media files to ApsaraVideo VOD incurs storage fees. For more information, see [Media asset storage billing](~~188308#section_e97_xrp_mzz~~). If you have enabled storage transmission acceleration, upload acceleration fees also apply. For more information, see [Storage transmission acceleration billing](~~188310#section_sta_zm2_tsv~~).**
   * - This operation is currently supported only in the **Shanghai** and **Singapore** regions.
   * - Call this operation to upload a transcoded stream file from external storage and mount it to the corresponding ApsaraVideo VOD media asset. The supported HDR types for transcoded streams are HDR, HDR10, HLG, DolbyVision, HDRVivid, and SDR+.
   * - You can call the [GetURLUploadInfos](https://help.aliyun.com/document_detail/106830.html) operation to query the upload status. After the upload is complete, you will receive the [URL upload transcoded stream complete](https://help.aliyun.com/document_detail/376427.html) event notification.
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
   * Uploads a transcoded stream file from external storage and mounts it to the corresponding ApsaraVideo VOD media asset.
   * 
   * @remarks
   * - **Before using this operation, make sure that you fully understand the billing methods and pricing of ApsaraVideo VOD. Uploading media files to ApsaraVideo VOD incurs storage fees. For more information, see [Media asset storage billing](~~188308#section_e97_xrp_mzz~~). If you have enabled storage transmission acceleration, upload acceleration fees also apply. For more information, see [Storage transmission acceleration billing](~~188310#section_sta_zm2_tsv~~).**
   * - This operation is currently supported only in the **Shanghai** and **Singapore** regions.
   * - Call this operation to upload a transcoded stream file from external storage and mount it to the corresponding ApsaraVideo VOD media asset. The supported HDR types for transcoded streams are HDR, HDR10, HLG, DolbyVision, HDRVivid, and SDR+.
   * - You can call the [GetURLUploadInfos](https://help.aliyun.com/document_detail/106830.html) operation to query the upload status. After the upload is complete, you will receive the [URL upload transcoded stream complete](https://help.aliyun.com/document_detail/376427.html) event notification.
   * 
   * @param request - UploadStreamByURLRequest
   * @returns UploadStreamByURLResponse
   */
  async uploadStreamByURL(request: $_model.UploadStreamByURLRequest): Promise<$_model.UploadStreamByURLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadStreamByURLWithOptions(request, runtime);
  }

  /**
   * Calls this operation to verify domain name ownership.
   * 
   * @remarks
   * Currently, the service is supported only in the **China (Shanghai)** region.
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
   * Calls this operation to verify domain name ownership.
   * 
   * @remarks
   * Currently, the service is supported only in the **China (Shanghai)** region.
   * 
   * @param request - VerifyVodDomainOwnerRequest
   * @returns VerifyVodDomainOwnerResponse
   */
  async verifyVodDomainOwner(request: $_model.VerifyVodDomainOwnerRequest): Promise<$_model.VerifyVodDomainOwnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyVodDomainOwnerWithOptions(request, runtime);
  }

}
