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
      'ap-northeast-2-pop': "mts.aliyuncs.com",
      'ap-southeast-2': "mts.aliyuncs.com",
      'ap-southeast-3': "mts.aliyuncs.com",
      'cn-beijing-finance-1': "mts.aliyuncs.com",
      'cn-beijing-finance-pop': "mts.aliyuncs.com",
      'cn-beijing-gov-1': "mts.aliyuncs.com",
      'cn-beijing-nu16-b01': "mts.aliyuncs.com",
      'cn-chengdu': "mts.aliyuncs.com",
      'cn-edge-1': "mts.aliyuncs.com",
      'cn-fujian': "mts.aliyuncs.com",
      'cn-haidian-cm12-c01': "mts.aliyuncs.com",
      'cn-hangzhou-bj-b01': "mts.aliyuncs.com",
      'cn-hangzhou-finance': "mts.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "mts.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "mts.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "mts.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "mts.aliyuncs.com",
      'cn-hangzhou-test-306': "mts.aliyuncs.com",
      'cn-hongkong-finance-pop': "mts.aliyuncs.com",
      'cn-huhehaote-nebula-1': "mts.aliyuncs.com",
      'cn-north-2-gov-1': "mts.aliyuncs.com",
      'cn-qingdao-nebula': "mts.aliyuncs.com",
      'cn-shanghai-et15-b01': "mts.aliyuncs.com",
      'cn-shanghai-et2-b01': "mts.aliyuncs.com",
      'cn-shanghai-finance-1': "mts.aliyuncs.com",
      'cn-shanghai-inner': "mts.aliyuncs.com",
      'cn-shanghai-internal-test-1': "mts.aliyuncs.com",
      'cn-shenzhen-finance-1': "mts.aliyuncs.com",
      'cn-shenzhen-inner': "mts.aliyuncs.com",
      'cn-shenzhen-st4-d01': "mts.aliyuncs.com",
      'cn-shenzhen-su18-b01': "mts.aliyuncs.com",
      'cn-wuhan': "mts.aliyuncs.com",
      'cn-wulanchabu': "mts.aliyuncs.com",
      'cn-yushanfang': "mts.aliyuncs.com",
      'cn-zhangbei': "mts.aliyuncs.com",
      'cn-zhangbei-na61-b01': "mts.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "mts.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "mts.aliyuncs.com",
      'eu-west-1-oxs': "mts.aliyuncs.com",
      'me-east-1': "mts.aliyuncs.com",
      'rus-west-1-pop': "mts.aliyuncs.com",
      'us-east-1': "mts.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("mts", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Activates a media workflow.
   * 
   * @remarks
   * You can call this operation to activate a media workflow that has been deactivated. After you activate a media workflow, you cannot modify the workflow information, such as the name, topology, or trigger mode. A media workflow is activated by default after it is created.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ActivateMediaWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateMediaWorkflowResponse
   */
  async activateMediaWorkflowWithOptions(request: $_model.ActivateMediaWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateMediaWorkflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaWorkflowId)) {
      query["MediaWorkflowId"] = request.mediaWorkflowId;
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
      action: "ActivateMediaWorkflow",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActivateMediaWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.ActivateMediaWorkflowResponse({}));
  }

  /**
   * Activates a media workflow.
   * 
   * @remarks
   * You can call this operation to activate a media workflow that has been deactivated. After you activate a media workflow, you cannot modify the workflow information, such as the name, topology, or trigger mode. A media workflow is activated by default after it is created.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ActivateMediaWorkflowRequest
   * @returns ActivateMediaWorkflowResponse
   */
  async activateMediaWorkflow(request: $_model.ActivateMediaWorkflowRequest): Promise<$_model.ActivateMediaWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activateMediaWorkflowWithOptions(request, runtime);
  }

  /**
   * Adds a media file.
   * 
   * @remarks
   *   You can call this operation to process videos that are uploaded to Object Storage Service (OSS) but not processed. This way, you do not need to upload the videos to OSS again. If you have configured media workflows, OSS automatically notifies ApsaraVideo Media Processing (MPS) when a media file is uploaded to OSS. MPS automatically finds the corresponding workflow in the Active state based on the specified OSS bucket and object. Therefore, in most cases, you do not need to manually call the AddMedia operation to process the media file.
   * *   Media information is automatically obtained only when the specified media workflow is in the Active state. If no media workflow is specified or the specified media workflow is not in the Active state, media information is not obtained.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - AddMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMediaResponse
   */
  async addMediaWithOptions(request: $_model.AddMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddMediaResponse> {
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

    if (!$dara.isNull(request.fileURL)) {
      query["FileURL"] = request.fileURL;
    }

    if (!$dara.isNull(request.inputUnbind)) {
      query["InputUnbind"] = request.inputUnbind;
    }

    if (!$dara.isNull(request.mediaWorkflowId)) {
      query["MediaWorkflowId"] = request.mediaWorkflowId;
    }

    if (!$dara.isNull(request.mediaWorkflowUserData)) {
      query["MediaWorkflowUserData"] = request.mediaWorkflowUserData;
    }

    if (!$dara.isNull(request.overrideParams)) {
      query["OverrideParams"] = request.overrideParams;
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

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMedia",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMediaResponse>(await this.callApi(params, req, runtime), new $_model.AddMediaResponse({}));
  }

  /**
   * Adds a media file.
   * 
   * @remarks
   *   You can call this operation to process videos that are uploaded to Object Storage Service (OSS) but not processed. This way, you do not need to upload the videos to OSS again. If you have configured media workflows, OSS automatically notifies ApsaraVideo Media Processing (MPS) when a media file is uploaded to OSS. MPS automatically finds the corresponding workflow in the Active state based on the specified OSS bucket and object. Therefore, in most cases, you do not need to manually call the AddMedia operation to process the media file.
   * *   Media information is automatically obtained only when the specified media workflow is in the Active state. If no media workflow is specified or the specified media workflow is not in the Active state, media information is not obtained.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - AddMediaRequest
   * @returns AddMediaResponse
   */
  async addMedia(request: $_model.AddMediaRequest): Promise<$_model.AddMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addMediaWithOptions(request, runtime);
  }

  /**
   * Adds a tag to a media file.
   * 
   * @remarks
   * You can call this operation to add only one tag. To add multiple tags at a time, you can call the [UpdateMedia](https://help.aliyun.com/document_detail/44464.html) operation.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - AddMediaTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMediaTagResponse
   */
  async addMediaTagWithOptions(request: $_model.AddMediaTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddMediaTagResponse> {
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMediaTag",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMediaTagResponse>(await this.callApi(params, req, runtime), new $_model.AddMediaTagResponse({}));
  }

  /**
   * Adds a tag to a media file.
   * 
   * @remarks
   * You can call this operation to add only one tag. To add multiple tags at a time, you can call the [UpdateMedia](https://help.aliyun.com/document_detail/44464.html) operation.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - AddMediaTagRequest
   * @returns AddMediaTagResponse
   */
  async addMediaTag(request: $_model.AddMediaTagRequest): Promise<$_model.AddMediaTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addMediaTagWithOptions(request, runtime);
  }

  /**
   * Creates a media workflow.
   * 
   * @remarks
   *   You can call this operation to define the topology, activities, and dependencies of a media workflow. The topology is represented by a directed acyclic graph (DAG) in the console. For more information, see [Workflow activities](https://help.aliyun.com/document_detail/68494.html). You can view and run the workflows that are created by calling this operation in the ApsaraVideo Media Processing (MPS) console.
   * *   MPS media workflows can be automatically triggered only by using the prefix of the file path. Automatic triggering by using the suffix is not supported. For more information about the trigger rules, see [Workflow triggering rules for files](https://help.aliyun.com/document_detail/68574.html).
   * ### [](#qps)QPS limits
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - AddMediaWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMediaWorkflowResponse
   */
  async addMediaWorkflowWithOptions(request: $_model.AddMediaWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddMediaWorkflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.topology)) {
      query["Topology"] = request.topology;
    }

    if (!$dara.isNull(request.triggerMode)) {
      query["TriggerMode"] = request.triggerMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMediaWorkflow",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMediaWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.AddMediaWorkflowResponse({}));
  }

  /**
   * Creates a media workflow.
   * 
   * @remarks
   *   You can call this operation to define the topology, activities, and dependencies of a media workflow. The topology is represented by a directed acyclic graph (DAG) in the console. For more information, see [Workflow activities](https://help.aliyun.com/document_detail/68494.html). You can view and run the workflows that are created by calling this operation in the ApsaraVideo Media Processing (MPS) console.
   * *   MPS media workflows can be automatically triggered only by using the prefix of the file path. Automatic triggering by using the suffix is not supported. For more information about the trigger rules, see [Workflow triggering rules for files](https://help.aliyun.com/document_detail/68574.html).
   * ### [](#qps)QPS limits
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - AddMediaWorkflowRequest
   * @returns AddMediaWorkflowResponse
   */
  async addMediaWorkflow(request: $_model.AddMediaWorkflowRequest): Promise<$_model.AddMediaWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addMediaWorkflowWithOptions(request, runtime);
  }

  /**
   * Adds an ApsaraVideo Media Processing (MPS) queue.
   * 
   * @param request - AddPipelineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddPipelineResponse
   */
  async addPipelineWithOptions(request: $_model.AddPipelineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddPipelineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.notifyConfig)) {
      query["NotifyConfig"] = request.notifyConfig;
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

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!$dara.isNull(request.speedLevel)) {
      query["SpeedLevel"] = request.speedLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddPipeline",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddPipelineResponse>(await this.callApi(params, req, runtime), new $_model.AddPipelineResponse({}));
  }

  /**
   * Adds an ApsaraVideo Media Processing (MPS) queue.
   * 
   * @param request - AddPipelineRequest
   * @returns AddPipelineResponse
   */
  async addPipeline(request: $_model.AddPipelineRequest): Promise<$_model.AddPipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addPipelineWithOptions(request, runtime);
  }

  /**
   * 添加labelVersion、knowledgeConfig配置
   * 
   * @param request - AddSmarttagTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSmarttagTemplateResponse
   */
  async addSmarttagTemplateWithOptions(request: $_model.AddSmarttagTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSmarttagTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.analyseTypes)) {
      query["AnalyseTypes"] = request.analyseTypes;
    }

    if (!$dara.isNull(request.faceCategoryIds)) {
      query["FaceCategoryIds"] = request.faceCategoryIds;
    }

    if (!$dara.isNull(request.faceCustomParamsConfig)) {
      query["FaceCustomParamsConfig"] = request.faceCustomParamsConfig;
    }

    if (!$dara.isNull(request.industry)) {
      query["Industry"] = request.industry;
    }

    if (!$dara.isNull(request.isDefault)) {
      query["IsDefault"] = request.isDefault;
    }

    if (!$dara.isNull(request.keywordConfig)) {
      query["KeywordConfig"] = request.keywordConfig;
    }

    if (!$dara.isNull(request.knowledgeConfig)) {
      query["KnowledgeConfig"] = request.knowledgeConfig;
    }

    if (!$dara.isNull(request.labelCustomCategoryIds)) {
      query["LabelCustomCategoryIds"] = request.labelCustomCategoryIds;
    }

    if (!$dara.isNull(request.labelCustomParamsConfig)) {
      query["LabelCustomParamsConfig"] = request.labelCustomParamsConfig;
    }

    if (!$dara.isNull(request.labelType)) {
      query["LabelType"] = request.labelType;
    }

    if (!$dara.isNull(request.labelVersion)) {
      query["LabelVersion"] = request.labelVersion;
    }

    if (!$dara.isNull(request.landmarkGroupIds)) {
      query["LandmarkGroupIds"] = request.landmarkGroupIds;
    }

    if (!$dara.isNull(request.objectGroupIds)) {
      query["ObjectGroupIds"] = request.objectGroupIds;
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

    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSmarttagTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSmarttagTemplateResponse>(await this.callApi(params, req, runtime), new $_model.AddSmarttagTemplateResponse({}));
  }

  /**
   * 添加labelVersion、knowledgeConfig配置
   * 
   * @param request - AddSmarttagTemplateRequest
   * @returns AddSmarttagTemplateResponse
   */
  async addSmarttagTemplate(request: $_model.AddSmarttagTemplateRequest): Promise<$_model.AddSmarttagTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSmarttagTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a custom transcoding template. You need to configure the information such as the container format, video stream settings, and audio stream settings.
   * 
   * @remarks
   * When you call this operation, you need to set transcoding parameters such as those related to the container format, video stream, and audio stream. If you do not specify some parameters, streams that are generated by using the template do not contain the information specified by those parameters.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - AddTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTemplateResponse
   */
  async addTemplateWithOptions(request: $_model.AddTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.audio)) {
      query["Audio"] = request.audio;
    }

    if (!$dara.isNull(request.container)) {
      query["Container"] = request.container;
    }

    if (!$dara.isNull(request.muxConfig)) {
      query["MuxConfig"] = request.muxConfig;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.transConfig)) {
      query["TransConfig"] = request.transConfig;
    }

    if (!$dara.isNull(request.video)) {
      query["Video"] = request.video;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTemplateResponse>(await this.callApi(params, req, runtime), new $_model.AddTemplateResponse({}));
  }

  /**
   * Creates a custom transcoding template. You need to configure the information such as the container format, video stream settings, and audio stream settings.
   * 
   * @remarks
   * When you call this operation, you need to set transcoding parameters such as those related to the container format, video stream, and audio stream. If you do not specify some parameters, streams that are generated by using the template do not contain the information specified by those parameters.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - AddTemplateRequest
   * @returns AddTemplateResponse
   */
  async addTemplate(request: $_model.AddTemplateRequest): Promise<$_model.AddTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a watermark template.
   * 
   * @remarks
   * After you create a watermark template by calling this operation, you can specify the watermark template and watermark asset when you [submit a transcoding job](https://help.aliyun.com/document_detail/29226.html). This allows you to add watermark information to the output video.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - AddWaterMarkTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddWaterMarkTemplateResponse
   */
  async addWaterMarkTemplateWithOptions(request: $_model.AddWaterMarkTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddWaterMarkTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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
      action: "AddWaterMarkTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddWaterMarkTemplateResponse>(await this.callApi(params, req, runtime), new $_model.AddWaterMarkTemplateResponse({}));
  }

  /**
   * Creates a watermark template.
   * 
   * @remarks
   * After you create a watermark template by calling this operation, you can specify the watermark template and watermark asset when you [submit a transcoding job](https://help.aliyun.com/document_detail/29226.html). This allows you to add watermark information to the output video.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - AddWaterMarkTemplateRequest
   * @returns AddWaterMarkTemplateResponse
   */
  async addWaterMarkTemplate(request: $_model.AddWaterMarkTemplateRequest): Promise<$_model.AddWaterMarkTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addWaterMarkTemplateWithOptions(request, runtime);
  }

  /**
   * Binds an input media bucket.
   * 
   * @remarks
   * Before you call this operation to bind an input media bucket, you must create a media bucket. For more information, see [Add media buckets](https://help.aliyun.com/document_detail/42430.html).
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - BindInputBucketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindInputBucketResponse
   */
  async bindInputBucketWithOptions(request: $_model.BindInputBucketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindInputBucketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.referer)) {
      query["Referer"] = request.referer;
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
      action: "BindInputBucket",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindInputBucketResponse>(await this.callApi(params, req, runtime), new $_model.BindInputBucketResponse({}));
  }

  /**
   * Binds an input media bucket.
   * 
   * @remarks
   * Before you call this operation to bind an input media bucket, you must create a media bucket. For more information, see [Add media buckets](https://help.aliyun.com/document_detail/42430.html).
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - BindInputBucketRequest
   * @returns BindInputBucketResponse
   */
  async bindInputBucket(request: $_model.BindInputBucketRequest): Promise<$_model.BindInputBucketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindInputBucketWithOptions(request, runtime);
  }

  /**
   * Binds an output media bucket to the media library.
   * 
   * @remarks
   * Before you call this operation to bind an output media bucket to the media library, you must create a media bucket. For more information, see [Add media buckets](https://help.aliyun.com/document_detail/42430.html).
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - BindOutputBucketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindOutputBucketResponse
   */
  async bindOutputBucketWithOptions(request: $_model.BindOutputBucketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindOutputBucketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
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
      action: "BindOutputBucket",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindOutputBucketResponse>(await this.callApi(params, req, runtime), new $_model.BindOutputBucketResponse({}));
  }

  /**
   * Binds an output media bucket to the media library.
   * 
   * @remarks
   * Before you call this operation to bind an output media bucket to the media library, you must create a media bucket. For more information, see [Add media buckets](https://help.aliyun.com/document_detail/42430.html).
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - BindOutputBucketRequest
   * @returns BindOutputBucketResponse
   */
  async bindOutputBucket(request: $_model.BindOutputBucketRequest): Promise<$_model.BindOutputBucketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindOutputBucketWithOptions(request, runtime);
  }

  /**
   * Cancels a transcoding job.
   * 
   * @remarks
   *   You can cancel a transcoding job only if the job is in the Submitted state.
   * *   We recommend that you call the **UpdatePipeline** operation to set the status of the ApsaraVideo Media Processing (MPS) queue to Paused before you cancel a job. This suspends job scheduling in the MPS queue. After the job is canceled, you must set the status of the MPS queue back to Active so that the other jobs in the MPS queue can be scheduled.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - CancelJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelJobResponse
   */
  async cancelJobWithOptions(request: $_model.CancelJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
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
      action: "CancelJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelJobResponse>(await this.callApi(params, req, runtime), new $_model.CancelJobResponse({}));
  }

  /**
   * Cancels a transcoding job.
   * 
   * @remarks
   *   You can cancel a transcoding job only if the job is in the Submitted state.
   * *   We recommend that you call the **UpdatePipeline** operation to set the status of the ApsaraVideo Media Processing (MPS) queue to Paused before you cancel a job. This suspends job scheduling in the MPS queue. After the job is canceled, you must set the status of the MPS queue back to Active so that the other jobs in the MPS queue can be scheduled.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - CancelJobRequest
   * @returns CancelJobResponse
   */
  async cancelJob(request: $_model.CancelJobRequest): Promise<$_model.CancelJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelJobWithOptions(request, runtime);
  }

  /**
   * @param request - CreateCustomEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomEntityResponse
   */
  async createCustomEntityWithOptions(request: $_model.CreateCustomEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomEntityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.customEntityInfo)) {
      query["CustomEntityInfo"] = request.customEntityInfo;
    }

    if (!$dara.isNull(request.customEntityName)) {
      query["CustomEntityName"] = request.customEntityName;
    }

    if (!$dara.isNull(request.customGroupId)) {
      query["CustomGroupId"] = request.customGroupId;
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
      action: "CreateCustomEntity",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomEntityResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomEntityResponse({}));
  }

  /**
   * @param request - CreateCustomEntityRequest
   * @returns CreateCustomEntityResponse
   */
  async createCustomEntity(request: $_model.CreateCustomEntityRequest): Promise<$_model.CreateCustomEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomEntityWithOptions(request, runtime);
  }

  /**
   * @param request - CreateCustomGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomGroupResponse
   */
  async createCustomGroupWithOptions(request: $_model.CreateCustomGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.customGroupDescription)) {
      query["CustomGroupDescription"] = request.customGroupDescription;
    }

    if (!$dara.isNull(request.customGroupName)) {
      query["CustomGroupName"] = request.customGroupName;
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
      action: "CreateCustomGroup",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomGroupResponse({}));
  }

  /**
   * @param request - CreateCustomGroupRequest
   * @returns CreateCustomGroupResponse
   */
  async createCustomGroup(request: $_model.CreateCustomGroupRequest): Promise<$_model.CreateCustomGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomGroupWithOptions(request, runtime);
  }

  /**
   * Submits a job of creating a media fingerprint library.
   * 
   * @remarks
   *   You can call this operation to submit a job to create a video or text fingerprint library. You can use a text fingerprint library to store fingerprints for text.
   * *   You can submit a job of creating a text fingerprint library only in the China (Shanghai) region.
   * *   By default, you can submit up to 10 jobs of creating a video fingerprint library to an ApsaraVideo Media Processing (MPS) queue at a time. If you submit more than 10 jobs at a time, the call may fail.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - CreateFpShotDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFpShotDBResponse
   */
  async createFpShotDBWithOptions(request: $_model.CreateFpShotDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFpShotDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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
      action: "CreateFpShotDB",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFpShotDBResponse>(await this.callApi(params, req, runtime), new $_model.CreateFpShotDBResponse({}));
  }

  /**
   * Submits a job of creating a media fingerprint library.
   * 
   * @remarks
   *   You can call this operation to submit a job to create a video or text fingerprint library. You can use a text fingerprint library to store fingerprints for text.
   * *   You can submit a job of creating a text fingerprint library only in the China (Shanghai) region.
   * *   By default, you can submit up to 10 jobs of creating a video fingerprint library to an ApsaraVideo Media Processing (MPS) queue at a time. If you submit more than 10 jobs at a time, the call may fail.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - CreateFpShotDBRequest
   * @returns CreateFpShotDBResponse
   */
  async createFpShotDB(request: $_model.CreateFpShotDBRequest): Promise<$_model.CreateFpShotDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFpShotDBWithOptions(request, runtime);
  }

  /**
   * Disables a media workflow.
   * 
   * @remarks
   * The time when the media workflow was created.
   * 
   * @param request - DeactivateMediaWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeactivateMediaWorkflowResponse
   */
  async deactivateMediaWorkflowWithOptions(request: $_model.DeactivateMediaWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeactivateMediaWorkflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaWorkflowId)) {
      query["MediaWorkflowId"] = request.mediaWorkflowId;
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
      action: "DeactivateMediaWorkflow",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeactivateMediaWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.DeactivateMediaWorkflowResponse({}));
  }

  /**
   * Disables a media workflow.
   * 
   * @remarks
   * The time when the media workflow was created.
   * 
   * @param request - DeactivateMediaWorkflowRequest
   * @returns DeactivateMediaWorkflowResponse
   */
  async deactivateMediaWorkflow(request: $_model.DeactivateMediaWorkflowRequest): Promise<$_model.DeactivateMediaWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deactivateMediaWorkflowWithOptions(request, runtime);
  }

  /**
   * Deletes a custom entity from a custom library.
   * 
   * @param request - DeleteCustomEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomEntityResponse
   */
  async deleteCustomEntityWithOptions(request: $_model.DeleteCustomEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomEntityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.customEntityId)) {
      query["CustomEntityId"] = request.customEntityId;
    }

    if (!$dara.isNull(request.customGroupId)) {
      query["CustomGroupId"] = request.customGroupId;
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
      action: "DeleteCustomEntity",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomEntityResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomEntityResponse({}));
  }

  /**
   * Deletes a custom entity from a custom library.
   * 
   * @param request - DeleteCustomEntityRequest
   * @returns DeleteCustomEntityResponse
   */
  async deleteCustomEntity(request: $_model.DeleteCustomEntityRequest): Promise<$_model.DeleteCustomEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomEntityWithOptions(request, runtime);
  }

  /**
   * Delete a custom image library.
   * 
   * @remarks
   * You can call this operation only in the China (Beijing), China (Shanghai), and China (Hangzhou) regions.
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - DeleteCustomGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomGroupResponse
   */
  async deleteCustomGroupWithOptions(request: $_model.DeleteCustomGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.customGroupId)) {
      query["CustomGroupId"] = request.customGroupId;
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
      action: "DeleteCustomGroup",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomGroupResponse({}));
  }

  /**
   * Delete a custom image library.
   * 
   * @remarks
   * You can call this operation only in the China (Beijing), China (Shanghai), and China (Hangzhou) regions.
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - DeleteCustomGroupRequest
   * @returns DeleteCustomGroupResponse
   */
  async deleteCustomGroup(request: $_model.DeleteCustomGroupRequest): Promise<$_model.DeleteCustomGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomGroupWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteCustomViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomViewResponse
   */
  async deleteCustomViewWithOptions(request: $_model.DeleteCustomViewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomViewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.customEntityId)) {
      query["CustomEntityId"] = request.customEntityId;
    }

    if (!$dara.isNull(request.customGroupId)) {
      query["CustomGroupId"] = request.customGroupId;
    }

    if (!$dara.isNull(request.customViewId)) {
      query["CustomViewId"] = request.customViewId;
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
      action: "DeleteCustomView",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomViewResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomViewResponse({}));
  }

  /**
   * @param request - DeleteCustomViewRequest
   * @returns DeleteCustomViewResponse
   */
  async deleteCustomView(request: $_model.DeleteCustomViewRequest): Promise<$_model.DeleteCustomViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomViewWithOptions(request, runtime);
  }

  /**
   * Deletes media files from ApsaraVideo Media Processing (MPS).
   * 
   * @remarks
   * This operation allows you to logically delete a media file. The media file can no longer be processed, but the corresponding objects in the input and output Object Storage Service (OSS) buckets are retained.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - DeleteMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMediaResponse
   */
  async deleteMediaWithOptions(request: $_model.DeleteMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
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
      action: "DeleteMedia",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMediaResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMediaResponse({}));
  }

  /**
   * Deletes media files from ApsaraVideo Media Processing (MPS).
   * 
   * @remarks
   * This operation allows you to logically delete a media file. The media file can no longer be processed, but the corresponding objects in the input and output Object Storage Service (OSS) buckets are retained.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - DeleteMediaRequest
   * @returns DeleteMediaResponse
   */
  async deleteMedia(request: $_model.DeleteMediaRequest): Promise<$_model.DeleteMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMediaWithOptions(request, runtime);
  }

  /**
   * Removes a tag for a media file.
   * 
   * @remarks
   * You can call this operation to remove only one tag at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - DeleteMediaTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMediaTagResponse
   */
  async deleteMediaTagWithOptions(request: $_model.DeleteMediaTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMediaTagResponse> {
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMediaTag",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMediaTagResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMediaTagResponse({}));
  }

  /**
   * Removes a tag for a media file.
   * 
   * @remarks
   * You can call this operation to remove only one tag at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - DeleteMediaTagRequest
   * @returns DeleteMediaTagResponse
   */
  async deleteMediaTag(request: $_model.DeleteMediaTagRequest): Promise<$_model.DeleteMediaTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMediaTagWithOptions(request, runtime);
  }

  /**
   * Deletes a media workflow. This does not affect workflow instances that are running.
   * 
   * @remarks
   * After you delete or disable a workflow, the workflow cannot be used. In this case, the workflow is not automatically triggered when you upload a file to the bucket specified by the workflow.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - DeleteMediaWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMediaWorkflowResponse
   */
  async deleteMediaWorkflowWithOptions(request: $_model.DeleteMediaWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMediaWorkflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaWorkflowId)) {
      query["MediaWorkflowId"] = request.mediaWorkflowId;
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
      action: "DeleteMediaWorkflow",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMediaWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMediaWorkflowResponse({}));
  }

  /**
   * Deletes a media workflow. This does not affect workflow instances that are running.
   * 
   * @remarks
   * After you delete or disable a workflow, the workflow cannot be used. In this case, the workflow is not automatically triggered when you upload a file to the bucket specified by the workflow.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - DeleteMediaWorkflowRequest
   * @returns DeleteMediaWorkflowResponse
   */
  async deleteMediaWorkflow(request: $_model.DeleteMediaWorkflowRequest): Promise<$_model.DeleteMediaWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMediaWorkflowWithOptions(request, runtime);
  }

  /**
   * Deletes an ApsaraVideo Media Processing (MPS) queue.
   * 
   * @remarks
   * You can call this operation to delete only one MPS queue at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - DeletePipelineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePipelineResponse
   */
  async deletePipelineWithOptions(request: $_model.DeletePipelineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePipelineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
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
      action: "DeletePipeline",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePipelineResponse>(await this.callApi(params, req, runtime), new $_model.DeletePipelineResponse({}));
  }

  /**
   * Deletes an ApsaraVideo Media Processing (MPS) queue.
   * 
   * @remarks
   * You can call this operation to delete only one MPS queue at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - DeletePipelineRequest
   * @returns DeletePipelineResponse
   */
  async deletePipeline(request: $_model.DeletePipelineRequest): Promise<$_model.DeletePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePipelineWithOptions(request, runtime);
  }

  /**
   * Deletes a template.
   * 
   * @remarks
   * You can call this operation to delete only one template at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - DeleteSmarttagTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSmarttagTemplateResponse
   */
  async deleteSmarttagTemplateWithOptions(request: $_model.DeleteSmarttagTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSmarttagTemplateResponse> {
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

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSmarttagTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSmarttagTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSmarttagTemplateResponse({}));
  }

  /**
   * Deletes a template.
   * 
   * @remarks
   * You can call this operation to delete only one template at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - DeleteSmarttagTemplateRequest
   * @returns DeleteSmarttagTemplateResponse
   */
  async deleteSmarttagTemplate(request: $_model.DeleteSmarttagTemplateRequest): Promise<$_model.DeleteSmarttagTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSmarttagTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a custom transcoding template.
   * 
   * @remarks
   * A custom transcoding template cannot be deleted if it is being used by a job that has been submitted.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - DeleteTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(request: $_model.DeleteTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTemplateResponse> {
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

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTemplateResponse({}));
  }

  /**
   * Deletes a custom transcoding template.
   * 
   * @remarks
   * A custom transcoding template cannot be deleted if it is being used by a job that has been submitted.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - DeleteTemplateRequest
   * @returns DeleteTemplateResponse
   */
  async deleteTemplate(request: $_model.DeleteTemplateRequest): Promise<$_model.DeleteTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a watermark template.
   * 
   * @remarks
   * A watermark template cannot be deleted if it is being used by a submitted job.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - DeleteWaterMarkTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWaterMarkTemplateResponse
   */
  async deleteWaterMarkTemplateWithOptions(request: $_model.DeleteWaterMarkTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWaterMarkTemplateResponse> {
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

    if (!$dara.isNull(request.waterMarkTemplateId)) {
      query["WaterMarkTemplateId"] = request.waterMarkTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWaterMarkTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWaterMarkTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWaterMarkTemplateResponse({}));
  }

  /**
   * Deletes a watermark template.
   * 
   * @remarks
   * A watermark template cannot be deleted if it is being used by a submitted job.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - DeleteWaterMarkTemplateRequest
   * @returns DeleteWaterMarkTemplateResponse
   */
  async deleteWaterMarkTemplate(request: $_model.DeleteWaterMarkTemplateRequest): Promise<$_model.DeleteWaterMarkTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWaterMarkTemplateWithOptions(request, runtime);
  }

  /**
   * Reviews images and text and returns the review results.
   * 
   * @remarks
   *   The moderation results are synchronously returned after the moderation is complete.
   * *   You can use the image and text moderation feature only in the China (Beijing), China (Shanghai), and Singapore regions.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ImAuditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImAuditResponse
   */
  async imAuditWithOptions(request: $_model.ImAuditRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImAuditResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.contents)) {
      query["Contents"] = request.contents;
    }

    if (!$dara.isNull(request.images)) {
      query["Images"] = request.images;
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

    if (!$dara.isNull(request.scenes)) {
      query["Scenes"] = request.scenes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImAudit",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImAuditResponse>(await this.callApi(params, req, runtime), new $_model.ImAuditResponse({}));
  }

  /**
   * Reviews images and text and returns the review results.
   * 
   * @remarks
   *   The moderation results are synchronously returned after the moderation is complete.
   * *   You can use the image and text moderation feature only in the China (Beijing), China (Shanghai), and Singapore regions.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ImAuditRequest
   * @returns ImAuditResponse
   */
  async imAudit(request: $_model.ImAuditRequest): Promise<$_model.ImAuditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imAuditWithOptions(request, runtime);
  }

  /**
   * Submits a job of importing text files to a text fingerprint library.
   * 
   * @remarks
   *   You can call this operation to import multiple text files to a text fingerprint library at a time. The system extracts fingerprints from the text files and saves the fingerprints to the text fingerprint library.
   * *   You can call this operation only in the China (Shanghai) region.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ImportFpShotJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportFpShotJobResponse
   */
  async importFpShotJobWithOptions(request: $_model.ImportFpShotJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportFpShotJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fpDBId)) {
      query["FpDBId"] = request.fpDBId;
    }

    if (!$dara.isNull(request.fpImportConfig)) {
      query["FpImportConfig"] = request.fpImportConfig;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
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
      action: "ImportFpShotJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportFpShotJobResponse>(await this.callApi(params, req, runtime), new $_model.ImportFpShotJobResponse({}));
  }

  /**
   * Submits a job of importing text files to a text fingerprint library.
   * 
   * @remarks
   *   You can call this operation to import multiple text files to a text fingerprint library at a time. The system extracts fingerprints from the text files and saves the fingerprints to the text fingerprint library.
   * *   You can call this operation only in the China (Shanghai) region.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ImportFpShotJobRequest
   * @returns ImportFpShotJobResponse
   */
  async importFpShotJob(request: $_model.ImportFpShotJobRequest): Promise<$_model.ImportFpShotJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importFpShotJobWithOptions(request, runtime);
  }

  /**
   * Queries all media buckets bound to the media library.
   * 
   * @remarks
   * A maximum of 100 media buckets can be returned.
   * ### QPS limit
   * You can call this operation up to 10 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ListAllMediaBucketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllMediaBucketResponse
   */
  async listAllMediaBucketWithOptions(request: $_model.ListAllMediaBucketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllMediaBucketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maximumPageSize)) {
      query["MaximumPageSize"] = request.maximumPageSize;
    }

    if (!$dara.isNull(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
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
      action: "ListAllMediaBucket",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllMediaBucketResponse>(await this.callApi(params, req, runtime), new $_model.ListAllMediaBucketResponse({}));
  }

  /**
   * Queries all media buckets bound to the media library.
   * 
   * @remarks
   * A maximum of 100 media buckets can be returned.
   * ### QPS limit
   * You can call this operation up to 10 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ListAllMediaBucketRequest
   * @returns ListAllMediaBucketResponse
   */
  async listAllMediaBucket(request: $_model.ListAllMediaBucketRequest): Promise<$_model.ListAllMediaBucketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAllMediaBucketWithOptions(request, runtime);
  }

  /**
   * Queries a list of entities in a custom library.
   * 
   * @param request - ListCustomEntitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomEntitiesResponse
   */
  async listCustomEntitiesWithOptions(request: $_model.ListCustomEntitiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomEntitiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.customGroupId)) {
      query["CustomGroupId"] = request.customGroupId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomEntities",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomEntitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomEntitiesResponse({}));
  }

  /**
   * Queries a list of entities in a custom library.
   * 
   * @param request - ListCustomEntitiesRequest
   * @returns ListCustomEntitiesResponse
   */
  async listCustomEntities(request: $_model.ListCustomEntitiesRequest): Promise<$_model.ListCustomEntitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomEntitiesWithOptions(request, runtime);
  }

  /**
   * @param request - ListCustomGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomGroupsResponse
   */
  async listCustomGroupsWithOptions(request: $_model.ListCustomGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomGroups",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomGroupsResponse({}));
  }

  /**
   * @param request - ListCustomGroupsRequest
   * @returns ListCustomGroupsResponse
   */
  async listCustomGroups(request: $_model.ListCustomGroupsRequest): Promise<$_model.ListCustomGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the information about all figures and faces in a specific figure library.
   * 
   * @remarks
   * You can specify the ID of a figure or a figure library to query the corresponding information. If neither the figure ID nor figure library ID is specified, the operation returns the information about all figures and faces in all figure libraries within the current RAM user.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ListCustomPersonsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomPersonsResponse
   */
  async listCustomPersonsWithOptions(request: $_model.ListCustomPersonsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomPersonsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
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
      action: "ListCustomPersons",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomPersonsResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomPersonsResponse({}));
  }

  /**
   * Queries the information about all figures and faces in a specific figure library.
   * 
   * @remarks
   * You can specify the ID of a figure or a figure library to query the corresponding information. If neither the figure ID nor figure library ID is specified, the operation returns the information about all figures and faces in all figure libraries within the current RAM user.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ListCustomPersonsRequest
   * @returns ListCustomPersonsResponse
   */
  async listCustomPersons(request: $_model.ListCustomPersonsRequest): Promise<$_model.ListCustomPersonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomPersonsWithOptions(request, runtime);
  }

  /**
   * @param request - ListCustomViewsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomViewsResponse
   */
  async listCustomViewsWithOptions(request: $_model.ListCustomViewsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomViewsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.customEntityId)) {
      query["CustomEntityId"] = request.customEntityId;
    }

    if (!$dara.isNull(request.customGroupId)) {
      query["CustomGroupId"] = request.customGroupId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomViews",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomViewsResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomViewsResponse({}));
  }

  /**
   * @param request - ListCustomViewsRequest
   * @returns ListCustomViewsResponse
   */
  async listCustomViews(request: $_model.ListCustomViewsRequest): Promise<$_model.ListCustomViewsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomViewsWithOptions(request, runtime);
  }

  /**
   * Queries media fingerprint libraries.
   * 
   * @remarks
   *   You can call this operation to query the status and information about the media fingerprint libraries based on the specified IDs.
   * *   You can query text fingerprint libraries only in the China (Shanghai) region.
   * *   You can call this operation to query up to 10 media fingerprint libraries.
   * ### QPS limit
   * You can call this operation up to 500 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ListFpShotDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFpShotDBResponse
   */
  async listFpShotDBWithOptions(request: $_model.ListFpShotDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFpShotDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fpDBIds)) {
      query["FpDBIds"] = request.fpDBIds;
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
      action: "ListFpShotDB",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFpShotDBResponse>(await this.callApi(params, req, runtime), new $_model.ListFpShotDBResponse({}));
  }

  /**
   * Queries media fingerprint libraries.
   * 
   * @remarks
   *   You can call this operation to query the status and information about the media fingerprint libraries based on the specified IDs.
   * *   You can query text fingerprint libraries only in the China (Shanghai) region.
   * *   You can call this operation to query up to 10 media fingerprint libraries.
   * ### QPS limit
   * You can call this operation up to 500 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ListFpShotDBRequest
   * @returns ListFpShotDBResponse
   */
  async listFpShotDB(request: $_model.ListFpShotDBRequest): Promise<$_model.ListFpShotDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFpShotDBWithOptions(request, runtime);
  }

  /**
   * Queries media files in a media fingerprint library.
   * 
   * @remarks
   *   You can call this operation to query media files in a specific media fingerprint library based on the library ID. This operation supports paged queries.
   * *   You can call this operation only in the China (Beijing), China (Hangzhou), China (Shanghai), and Singapore regions.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ListFpShotFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFpShotFilesResponse
   */
  async listFpShotFilesWithOptions(request: $_model.ListFpShotFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFpShotFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.fpDBId)) {
      query["FpDBId"] = request.fpDBId;
    }

    if (!$dara.isNull(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFpShotFiles",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFpShotFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListFpShotFilesResponse({}));
  }

  /**
   * Queries media files in a media fingerprint library.
   * 
   * @remarks
   *   You can call this operation to query media files in a specific media fingerprint library based on the library ID. This operation supports paged queries.
   * *   You can call this operation only in the China (Beijing), China (Hangzhou), China (Shanghai), and Singapore regions.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ListFpShotFilesRequest
   * @returns ListFpShotFilesResponse
   */
  async listFpShotFiles(request: $_model.ListFpShotFilesRequest): Promise<$_model.ListFpShotFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFpShotFilesWithOptions(request, runtime);
  }

  /**
   * Queries jobs of importing text files to a text fingerprint library.
   * 
   * @remarks
   * You can call this operation only in the China (Shanghai) region.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ListFpShotImportJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFpShotImportJobResponse
   */
  async listFpShotImportJobWithOptions(request: $_model.ListFpShotImportJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFpShotImportJobResponse> {
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
      action: "ListFpShotImportJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFpShotImportJobResponse>(await this.callApi(params, req, runtime), new $_model.ListFpShotImportJobResponse({}));
  }

  /**
   * Queries jobs of importing text files to a text fingerprint library.
   * 
   * @remarks
   * You can call this operation only in the China (Shanghai) region.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ListFpShotImportJobRequest
   * @returns ListFpShotImportJobResponse
   */
  async listFpShotImportJob(request: $_model.ListFpShotImportJobRequest): Promise<$_model.ListFpShotImportJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFpShotImportJobWithOptions(request, runtime);
  }

  /**
   * Traverses transcoding jobs
   * 
   * @remarks
   *   By default, the returned transcoding jobs are sorted by CreationTime in descending order.
   * *   You can call this operation to return transcoding jobs of the last 90 days. The jobs are returned based on the specified time range.
   * *   You can filter query results by configuring request parameters such as job status, creation time interval, and ApsaraVideo Media Processing (MPS) queue for transcoding.
   * *   By default, MPS does not allow you to access data across regions within the same account. Before you call this operation, make sure that the region that you specify is the same as the region of the transcoding jobs to be queried. Otherwise, this operation may fail to be called, or invalid information may be returned.
   * ### [](#qps)QPS limits
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ListJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobResponse
   */
  async listJobWithOptions(request: $_model.ListJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endOfJobCreatedTimeRange)) {
      query["EndOfJobCreatedTimeRange"] = request.endOfJobCreatedTimeRange;
    }

    if (!$dara.isNull(request.maximumPageSize)) {
      query["MaximumPageSize"] = request.maximumPageSize;
    }

    if (!$dara.isNull(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startOfJobCreatedTimeRange)) {
      query["StartOfJobCreatedTimeRange"] = request.startOfJobCreatedTimeRange;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobResponse>(await this.callApi(params, req, runtime), new $_model.ListJobResponse({}));
  }

  /**
   * Traverses transcoding jobs
   * 
   * @remarks
   *   By default, the returned transcoding jobs are sorted by CreationTime in descending order.
   * *   You can call this operation to return transcoding jobs of the last 90 days. The jobs are returned based on the specified time range.
   * *   You can filter query results by configuring request parameters such as job status, creation time interval, and ApsaraVideo Media Processing (MPS) queue for transcoding.
   * *   By default, MPS does not allow you to access data across regions within the same account. Before you call this operation, make sure that the region that you specify is the same as the region of the transcoding jobs to be queried. Otherwise, this operation may fail to be called, or invalid information may be returned.
   * ### [](#qps)QPS limits
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ListJobRequest
   * @returns ListJobResponse
   */
  async listJob(request: $_model.ListJobRequest): Promise<$_model.ListJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobWithOptions(request, runtime);
  }

  /**
   * Queries the execution instances of a media workflow.
   * 
   * @remarks
   * This operation returns execution instances only in the recent 90 days.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ListMediaWorkflowExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMediaWorkflowExecutionsResponse
   */
  async listMediaWorkflowExecutionsWithOptions(request: $_model.ListMediaWorkflowExecutionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMediaWorkflowExecutionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inputFileURL)) {
      query["InputFileURL"] = request.inputFileURL;
    }

    if (!$dara.isNull(request.maximumPageSize)) {
      query["MaximumPageSize"] = request.maximumPageSize;
    }

    if (!$dara.isNull(request.mediaWorkflowId)) {
      query["MediaWorkflowId"] = request.mediaWorkflowId;
    }

    if (!$dara.isNull(request.mediaWorkflowName)) {
      query["MediaWorkflowName"] = request.mediaWorkflowName;
    }

    if (!$dara.isNull(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
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
      action: "ListMediaWorkflowExecutions",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMediaWorkflowExecutionsResponse>(await this.callApi(params, req, runtime), new $_model.ListMediaWorkflowExecutionsResponse({}));
  }

  /**
   * Queries the execution instances of a media workflow.
   * 
   * @remarks
   * This operation returns execution instances only in the recent 90 days.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - ListMediaWorkflowExecutionsRequest
   * @returns ListMediaWorkflowExecutionsResponse
   */
  async listMediaWorkflowExecutions(request: $_model.ListMediaWorkflowExecutionsRequest): Promise<$_model.ListMediaWorkflowExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMediaWorkflowExecutionsWithOptions(request, runtime);
  }

  /**
   * Queries the template analysis job and returns a list of available preset templates when the template analysis job is complete.
   * 
   * @remarks
   * The time when the job was created.
   * 
   * @param request - QueryAnalysisJobListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAnalysisJobListResponse
   */
  async queryAnalysisJobListWithOptions(request: $_model.QueryAnalysisJobListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAnalysisJobListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.analysisJobIds)) {
      query["AnalysisJobIds"] = request.analysisJobIds;
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
      action: "QueryAnalysisJobList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAnalysisJobListResponse>(await this.callApi(params, req, runtime), new $_model.QueryAnalysisJobListResponse({}));
  }

  /**
   * Queries the template analysis job and returns a list of available preset templates when the template analysis job is complete.
   * 
   * @remarks
   * The time when the job was created.
   * 
   * @param request - QueryAnalysisJobListRequest
   * @returns QueryAnalysisJobListResponse
   */
  async queryAnalysisJobList(request: $_model.QueryAnalysisJobListRequest): Promise<$_model.QueryAnalysisJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAnalysisJobListWithOptions(request, runtime);
  }

  /**
   * 查询版权水印提取任务
   * 
   * @param request - QueryCopyrightExtractJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCopyrightExtractJobResponse
   */
  async queryCopyrightExtractJobWithOptions(request: $_model.QueryCopyrightExtractJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCopyrightExtractJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCopyrightExtractJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCopyrightExtractJobResponse>(await this.callApi(params, req, runtime), new $_model.QueryCopyrightExtractJobResponse({}));
  }

  /**
   * 查询版权水印提取任务
   * 
   * @param request - QueryCopyrightExtractJobRequest
   * @returns QueryCopyrightExtractJobResponse
   */
  async queryCopyrightExtractJob(request: $_model.QueryCopyrightExtractJobRequest): Promise<$_model.QueryCopyrightExtractJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCopyrightExtractJobWithOptions(request, runtime);
  }

  /**
   * 查询视频版权水印任务
   * 
   * @param request - QueryCopyrightJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCopyrightJobResponse
   */
  async queryCopyrightJobWithOptions(request: $_model.QueryCopyrightJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCopyrightJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!$dara.isNull(request.createTimeStart)) {
      query["CreateTimeStart"] = request.createTimeStart;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
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
      action: "QueryCopyrightJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCopyrightJobResponse>(await this.callApi(params, req, runtime), new $_model.QueryCopyrightJobResponse({}));
  }

  /**
   * 查询视频版权水印任务
   * 
   * @param request - QueryCopyrightJobRequest
   * @returns QueryCopyrightJobResponse
   */
  async queryCopyrightJob(request: $_model.QueryCopyrightJobRequest): Promise<$_model.QueryCopyrightJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCopyrightJobWithOptions(request, runtime);
  }

  /**
   * Queries the jobs of clearing or deleting a media fingerprint library.
   * 
   * @remarks
   * You can call this operation to query the specified jobs of clearing or deleting a media fingerprint library based on the job IDs. If you do not specify job IDs, the system returns the latest 20 jobs that are submitted.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryFpDBDeleteJobListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFpDBDeleteJobListResponse
   */
  async queryFpDBDeleteJobListWithOptions(request: $_model.QueryFpDBDeleteJobListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFpDBDeleteJobListResponse> {
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
      action: "QueryFpDBDeleteJobList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFpDBDeleteJobListResponse>(await this.callApi(params, req, runtime), new $_model.QueryFpDBDeleteJobListResponse({}));
  }

  /**
   * Queries the jobs of clearing or deleting a media fingerprint library.
   * 
   * @remarks
   * You can call this operation to query the specified jobs of clearing or deleting a media fingerprint library based on the job IDs. If you do not specify job IDs, the system returns the latest 20 jobs that are submitted.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryFpDBDeleteJobListRequest
   * @returns QueryFpDBDeleteJobListResponse
   */
  async queryFpDBDeleteJobList(request: $_model.QueryFpDBDeleteJobListRequest): Promise<$_model.QueryFpDBDeleteJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFpDBDeleteJobListWithOptions(request, runtime);
  }

  /**
   * Queries the jobs of deleting media files from a media fingerprint library.
   * 
   * @remarks
   * You can call this operation to query the specified jobs of deleting media files from a media fingerprint library based on the job IDs. If you do not specify job IDs, the system returns the latest 20 jobs that are submitted.
   * ### QPS limit
   * You can call this operation up to 500 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryFpFileDeleteJobListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFpFileDeleteJobListResponse
   */
  async queryFpFileDeleteJobListWithOptions(request: $_model.QueryFpFileDeleteJobListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFpFileDeleteJobListResponse> {
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
      action: "QueryFpFileDeleteJobList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFpFileDeleteJobListResponse>(await this.callApi(params, req, runtime), new $_model.QueryFpFileDeleteJobListResponse({}));
  }

  /**
   * Queries the jobs of deleting media files from a media fingerprint library.
   * 
   * @remarks
   * You can call this operation to query the specified jobs of deleting media files from a media fingerprint library based on the job IDs. If you do not specify job IDs, the system returns the latest 20 jobs that are submitted.
   * ### QPS limit
   * You can call this operation up to 500 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryFpFileDeleteJobListRequest
   * @returns QueryFpFileDeleteJobListResponse
   */
  async queryFpFileDeleteJobList(request: $_model.QueryFpFileDeleteJobListRequest): Promise<$_model.QueryFpFileDeleteJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFpFileDeleteJobListWithOptions(request, runtime);
  }

  /**
   * Queries media fingerprint analysis jobs. You can call this operation to query video fingerprint analysis jobs and text fingerprint analysis jobs.
   * 
   * @remarks
   *   After a media fingerprint analysis job is submitted, the media fingerprinting service compares the fingerprints of the job input with those of the media files in the media fingerprint library. You can call this operation to query the job results.
   * *   You can query the results of a text fingerprint analysis job only in the China (Shanghai) region.
   * ### [](#qps)QPS limits
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryFpShotJobListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFpShotJobListResponse
   */
  async queryFpShotJobListWithOptions(request: $_model.QueryFpShotJobListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFpShotJobListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endOfJobCreatedTimeRange)) {
      query["EndOfJobCreatedTimeRange"] = request.endOfJobCreatedTimeRange;
    }

    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!$dara.isNull(request.maximumPageSize)) {
      query["MaximumPageSize"] = request.maximumPageSize;
    }

    if (!$dara.isNull(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startOfJobCreatedTimeRange)) {
      query["StartOfJobCreatedTimeRange"] = request.startOfJobCreatedTimeRange;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFpShotJobList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFpShotJobListResponse>(await this.callApi(params, req, runtime), new $_model.QueryFpShotJobListResponse({}));
  }

  /**
   * Queries media fingerprint analysis jobs. You can call this operation to query video fingerprint analysis jobs and text fingerprint analysis jobs.
   * 
   * @remarks
   *   After a media fingerprint analysis job is submitted, the media fingerprinting service compares the fingerprints of the job input with those of the media files in the media fingerprint library. You can call this operation to query the job results.
   * *   You can query the results of a text fingerprint analysis job only in the China (Shanghai) region.
   * ### [](#qps)QPS limits
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryFpShotJobListRequest
   * @returns QueryFpShotJobListResponse
   */
  async queryFpShotJobList(request: $_model.QueryFpShotJobListRequest): Promise<$_model.QueryFpShotJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFpShotJobListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryIProductionJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryIProductionJobResponse
   */
  async queryIProductionJobWithOptions(request: $_model.QueryIProductionJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryIProductionJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
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
      action: "QueryIProductionJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryIProductionJobResponse>(await this.callApi(params, req, runtime), new $_model.QueryIProductionJobResponse({}));
  }

  /**
   * @param request - QueryIProductionJobRequest
   * @returns QueryIProductionJobResponse
   */
  async queryIProductionJob(request: $_model.QueryIProductionJobRequest): Promise<$_model.QueryIProductionJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryIProductionJobWithOptions(request, runtime);
  }

  /**
   * Queries transcoding jobs at a time by job ID.
   * 
   * @remarks
   *   By default, returned jobs are sorted in descending order by CreationTime.
   * *   You can call this operation to query up to 10 transcoding jobs at a time.
   * *   If you do not set the JobIds parameter, the `InvalidParameter` error code is returned.
   * ## QPS limit
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   * 
   * @param request - QueryJobListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryJobListResponse
   */
  async queryJobListWithOptions(request: $_model.QueryJobListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryJobListResponse> {
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
      action: "QueryJobList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryJobListResponse>(await this.callApi(params, req, runtime), new $_model.QueryJobListResponse({}));
  }

  /**
   * Queries transcoding jobs at a time by job ID.
   * 
   * @remarks
   *   By default, returned jobs are sorted in descending order by CreationTime.
   * *   You can call this operation to query up to 10 transcoding jobs at a time.
   * *   If you do not set the JobIds parameter, the `InvalidParameter` error code is returned.
   * ## QPS limit
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   * 
   * @param request - QueryJobListRequest
   * @returns QueryJobListResponse
   */
  async queryJobList(request: $_model.QueryJobListRequest): Promise<$_model.QueryJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryJobListWithOptions(request, runtime);
  }

  /**
   * Queries the information about a content moderation job.
   * 
   * @remarks
   * In the content moderation results, the moderation results of the video are sorted in ascending order by time into a timeline. If the video is long, the content moderation results are paginated, and the first page is returned. You can call this operation again to query the remaining moderation results of the video.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryMediaCensorJobDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMediaCensorJobDetailResponse
   */
  async queryMediaCensorJobDetailWithOptions(request: $_model.QueryMediaCensorJobDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMediaCensorJobDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.maximumPageSize)) {
      query["MaximumPageSize"] = request.maximumPageSize;
    }

    if (!$dara.isNull(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
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
      action: "QueryMediaCensorJobDetail",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMediaCensorJobDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryMediaCensorJobDetailResponse({}));
  }

  /**
   * Queries the information about a content moderation job.
   * 
   * @remarks
   * In the content moderation results, the moderation results of the video are sorted in ascending order by time into a timeline. If the video is long, the content moderation results are paginated, and the first page is returned. You can call this operation again to query the remaining moderation results of the video.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryMediaCensorJobDetailRequest
   * @returns QueryMediaCensorJobDetailResponse
   */
  async queryMediaCensorJobDetail(request: $_model.QueryMediaCensorJobDetailRequest): Promise<$_model.QueryMediaCensorJobDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMediaCensorJobDetailWithOptions(request, runtime);
  }

  /**
   * Queries content moderation jobs.
   * 
   * @remarks
   * You can call this operation to query only the content moderation jobs within three months.
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryMediaCensorJobListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMediaCensorJobListResponse
   */
  async queryMediaCensorJobListWithOptions(request: $_model.QueryMediaCensorJobListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMediaCensorJobListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endOfJobCreatedTimeRange)) {
      query["EndOfJobCreatedTimeRange"] = request.endOfJobCreatedTimeRange;
    }

    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    if (!$dara.isNull(request.maximumPageSize)) {
      query["MaximumPageSize"] = request.maximumPageSize;
    }

    if (!$dara.isNull(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startOfJobCreatedTimeRange)) {
      query["StartOfJobCreatedTimeRange"] = request.startOfJobCreatedTimeRange;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMediaCensorJobList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMediaCensorJobListResponse>(await this.callApi(params, req, runtime), new $_model.QueryMediaCensorJobListResponse({}));
  }

  /**
   * Queries content moderation jobs.
   * 
   * @remarks
   * You can call this operation to query only the content moderation jobs within three months.
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryMediaCensorJobListRequest
   * @returns QueryMediaCensorJobListResponse
   */
  async queryMediaCensorJobList(request: $_model.QueryMediaCensorJobListRequest): Promise<$_model.QueryMediaCensorJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMediaCensorJobListWithOptions(request, runtime);
  }

  /**
   * Queries the results of media information analysis jobs.
   * 
   * @remarks
   *   In asynchronous mode, the media information can be retrieved only after the Message Service (MNS) callback of **submitting a media information job** is returned. If you have not retrieved the media information for a long period, the job may have failed.
   * *   You can call this operation to query up to 10 media information analysis jobs at a time.
   * *   By default, returned jobs are sorted in descending order by CreationTime.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryMediaInfoJobListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMediaInfoJobListResponse
   */
  async queryMediaInfoJobListWithOptions(request: $_model.QueryMediaInfoJobListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMediaInfoJobListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaInfoJobIds)) {
      query["MediaInfoJobIds"] = request.mediaInfoJobIds;
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
      action: "QueryMediaInfoJobList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMediaInfoJobListResponse>(await this.callApi(params, req, runtime), new $_model.QueryMediaInfoJobListResponse({}));
  }

  /**
   * Queries the results of media information analysis jobs.
   * 
   * @remarks
   *   In asynchronous mode, the media information can be retrieved only after the Message Service (MNS) callback of **submitting a media information job** is returned. If you have not retrieved the media information for a long period, the job may have failed.
   * *   You can call this operation to query up to 10 media information analysis jobs at a time.
   * *   By default, returned jobs are sorted in descending order by CreationTime.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryMediaInfoJobListRequest
   * @returns QueryMediaInfoJobListResponse
   */
  async queryMediaInfoJobList(request: $_model.QueryMediaInfoJobListRequest): Promise<$_model.QueryMediaInfoJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMediaInfoJobListWithOptions(request, runtime);
  }

  /**
   * Queries media files based on media file IDs.
   * 
   * @remarks
   * You can call this operation to query up to 10 media files at a time.
   * ## QPS limit
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limits](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   * 
   * @param request - QueryMediaListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMediaListResponse
   */
  async queryMediaListWithOptions(request: $_model.QueryMediaListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMediaListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.includeMediaInfo)) {
      query["IncludeMediaInfo"] = request.includeMediaInfo;
    }

    if (!$dara.isNull(request.includePlayList)) {
      query["IncludePlayList"] = request.includePlayList;
    }

    if (!$dara.isNull(request.includeSnapshotList)) {
      query["IncludeSnapshotList"] = request.includeSnapshotList;
    }

    if (!$dara.isNull(request.includeSummaryList)) {
      query["IncludeSummaryList"] = request.includeSummaryList;
    }

    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
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
      action: "QueryMediaList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMediaListResponse>(await this.callApi(params, req, runtime), new $_model.QueryMediaListResponse({}));
  }

  /**
   * Queries media files based on media file IDs.
   * 
   * @remarks
   * You can call this operation to query up to 10 media files at a time.
   * ## QPS limit
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limits](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   * 
   * @param request - QueryMediaListRequest
   * @returns QueryMediaListResponse
   */
  async queryMediaList(request: $_model.QueryMediaListRequest): Promise<$_model.QueryMediaListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMediaListWithOptions(request, runtime);
  }

  /**
   * Queries media files based on their Object Storage Service (OSS) URLs.
   * 
   * @remarks
   *   You can call this operation to query up to 10 media files at a time.
   * *   Before you call this operation, you must call the [AddMedia](https://help.aliyun.com/document_detail/44458.html) operation to add media files.
   * *   You can call this operation to query only media files that are processed in a workflow. To obtain comprehensive information about a media file that is newly uploaded to OSS, you can call this operation after the corresponding workflow is complete. To query media files that are not processed in a workflow, you must call the [SubmitMediaInfoJob](https://help.aliyun.com/document_detail/29220.html) operation to submit a media information analysis job. After the job is complete, you can query the information about the media files.
   * ## QPS limit
   * You can call this API operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limit](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   * 
   * @param request - QueryMediaListByURLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMediaListByURLResponse
   */
  async queryMediaListByURLWithOptions(request: $_model.QueryMediaListByURLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMediaListByURLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileURLs)) {
      query["FileURLs"] = request.fileURLs;
    }

    if (!$dara.isNull(request.includeMediaInfo)) {
      query["IncludeMediaInfo"] = request.includeMediaInfo;
    }

    if (!$dara.isNull(request.includePlayList)) {
      query["IncludePlayList"] = request.includePlayList;
    }

    if (!$dara.isNull(request.includeSnapshotList)) {
      query["IncludeSnapshotList"] = request.includeSnapshotList;
    }

    if (!$dara.isNull(request.includeSummaryList)) {
      query["IncludeSummaryList"] = request.includeSummaryList;
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
      action: "QueryMediaListByURL",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMediaListByURLResponse>(await this.callApi(params, req, runtime), new $_model.QueryMediaListByURLResponse({}));
  }

  /**
   * Queries media files based on their Object Storage Service (OSS) URLs.
   * 
   * @remarks
   *   You can call this operation to query up to 10 media files at a time.
   * *   Before you call this operation, you must call the [AddMedia](https://help.aliyun.com/document_detail/44458.html) operation to add media files.
   * *   You can call this operation to query only media files that are processed in a workflow. To obtain comprehensive information about a media file that is newly uploaded to OSS, you can call this operation after the corresponding workflow is complete. To query media files that are not processed in a workflow, you must call the [SubmitMediaInfoJob](https://help.aliyun.com/document_detail/29220.html) operation to submit a media information analysis job. After the job is complete, you can query the information about the media files.
   * ## QPS limit
   * You can call this API operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limit](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   * 
   * @param request - QueryMediaListByURLRequest
   * @returns QueryMediaListByURLResponse
   */
  async queryMediaListByURL(request: $_model.QueryMediaListByURLRequest): Promise<$_model.QueryMediaListByURLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMediaListByURLWithOptions(request, runtime);
  }

  /**
   * Queries media workflow execution instances.
   * 
   * @remarks
   *   You can call this operation to query a maximum of 10 media workflow execution instances at a time.
   * *   Before you call this operation, make sure that the workflow pipeline is enabled. Otherwise, the workflow may not run as expected. For example, the following exceptions may occur: the workflow node is invalid and jobs created in the workflow cannot be executed.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryMediaWorkflowExecutionListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMediaWorkflowExecutionListResponse
   */
  async queryMediaWorkflowExecutionListWithOptions(request: $_model.QueryMediaWorkflowExecutionListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMediaWorkflowExecutionListResponse> {
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

    if (!$dara.isNull(request.runIds)) {
      query["RunIds"] = request.runIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMediaWorkflowExecutionList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMediaWorkflowExecutionListResponse>(await this.callApi(params, req, runtime), new $_model.QueryMediaWorkflowExecutionListResponse({}));
  }

  /**
   * Queries media workflow execution instances.
   * 
   * @remarks
   *   You can call this operation to query a maximum of 10 media workflow execution instances at a time.
   * *   Before you call this operation, make sure that the workflow pipeline is enabled. Otherwise, the workflow may not run as expected. For example, the following exceptions may occur: the workflow node is invalid and jobs created in the workflow cannot be executed.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryMediaWorkflowExecutionListRequest
   * @returns QueryMediaWorkflowExecutionListResponse
   */
  async queryMediaWorkflowExecutionList(request: $_model.QueryMediaWorkflowExecutionListRequest): Promise<$_model.QueryMediaWorkflowExecutionListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMediaWorkflowExecutionListWithOptions(request, runtime);
  }

  /**
   * Queries registered media workflows.
   * 
   * @remarks
   * You can call this operation to query up to 10 media workflows at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryMediaWorkflowListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMediaWorkflowListResponse
   */
  async queryMediaWorkflowListWithOptions(request: $_model.QueryMediaWorkflowListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMediaWorkflowListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaWorkflowIds)) {
      query["MediaWorkflowIds"] = request.mediaWorkflowIds;
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
      action: "QueryMediaWorkflowList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMediaWorkflowListResponse>(await this.callApi(params, req, runtime), new $_model.QueryMediaWorkflowListResponse({}));
  }

  /**
   * Queries registered media workflows.
   * 
   * @remarks
   * You can call this operation to query up to 10 media workflows at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryMediaWorkflowListRequest
   * @returns QueryMediaWorkflowListResponse
   */
  async queryMediaWorkflowList(request: $_model.QueryMediaWorkflowListRequest): Promise<$_model.QueryMediaWorkflowListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMediaWorkflowListWithOptions(request, runtime);
  }

  /**
   * Queries an ApsaraVideo Media Processing (MPS) queue by using the ID of the queue.
   * 
   * @remarks
   *   You can call this operation to query up to 10 MPS queues at a time.
   * *   If `"Code": "InvalidIdentity.ServiceDisabled","Message": "The request identity was not allowed operated.","Recommend"` is returned after you call this operation, check whether the RAM user that you use is assigned the AliyunMTSDefaultRole role to obtain the permissions on MPS and whether your Alibaba Cloud account has overdue payments.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryPipelineListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPipelineListResponse
   */
  async queryPipelineListWithOptions(request: $_model.QueryPipelineListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPipelineListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipelineIds)) {
      query["PipelineIds"] = request.pipelineIds;
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
      action: "QueryPipelineList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPipelineListResponse>(await this.callApi(params, req, runtime), new $_model.QueryPipelineListResponse({}));
  }

  /**
   * Queries an ApsaraVideo Media Processing (MPS) queue by using the ID of the queue.
   * 
   * @remarks
   *   You can call this operation to query up to 10 MPS queues at a time.
   * *   If `"Code": "InvalidIdentity.ServiceDisabled","Message": "The request identity was not allowed operated.","Recommend"` is returned after you call this operation, check whether the RAM user that you use is assigned the AliyunMTSDefaultRole role to obtain the permissions on MPS and whether your Alibaba Cloud account has overdue payments.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryPipelineListRequest
   * @returns QueryPipelineListResponse
   */
  async queryPipelineList(request: $_model.QueryPipelineListRequest): Promise<$_model.QueryPipelineListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPipelineListWithOptions(request, runtime);
  }

  /**
   * 查询智能标签任务
   * 
   * @param request - QuerySmarttagJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmarttagJobResponse
   */
  async querySmarttagJobWithOptions(request: $_model.QuerySmarttagJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmarttagJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
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
      action: "QuerySmarttagJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmarttagJobResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmarttagJobResponse({}));
  }

  /**
   * 查询智能标签任务
   * 
   * @param request - QuerySmarttagJobRequest
   * @returns QuerySmarttagJobResponse
   */
  async querySmarttagJob(request: $_model.QuerySmarttagJobRequest): Promise<$_model.QuerySmarttagJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmarttagJobWithOptions(request, runtime);
  }

  /**
   * Queries the analysis template of a smart tagging job.
   * 
   * @remarks
   * If you call this operation to query the information about a smart tagging template, you must specify the template ID. Otherwise, the operation returns the information about all the templates that are created by the current RAM user.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QuerySmarttagTemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySmarttagTemplateListResponse
   */
  async querySmarttagTemplateListWithOptions(request: $_model.QuerySmarttagTemplateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySmarttagTemplateListResponse> {
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

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmarttagTemplateList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySmarttagTemplateListResponse>(await this.callApi(params, req, runtime), new $_model.QuerySmarttagTemplateListResponse({}));
  }

  /**
   * Queries the analysis template of a smart tagging job.
   * 
   * @remarks
   * If you call this operation to query the information about a smart tagging template, you must specify the template ID. Otherwise, the operation returns the information about all the templates that are created by the current RAM user.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QuerySmarttagTemplateListRequest
   * @returns QuerySmarttagTemplateListResponse
   */
  async querySmarttagTemplateList(request: $_model.QuerySmarttagTemplateListRequest): Promise<$_model.QuerySmarttagTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmarttagTemplateListWithOptions(request, runtime);
  }

  /**
   * Queries snapshot jobs.
   * 
   * @remarks
   * The status of the snapshot jobs that you want to query.
   * *   **Submitted**: The job was submitted.
   * *   **Snapshoting**: The job is being processed.
   * *   **Success**: The job was successfully processed.
   * *   **Fail**: The job failed.
   * 
   * @param request - QuerySnapshotJobListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySnapshotJobListResponse
   */
  async querySnapshotJobListWithOptions(request: $_model.QuerySnapshotJobListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySnapshotJobListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endOfJobCreatedTimeRange)) {
      query["EndOfJobCreatedTimeRange"] = request.endOfJobCreatedTimeRange;
    }

    if (!$dara.isNull(request.maximumPageSize)) {
      query["MaximumPageSize"] = request.maximumPageSize;
    }

    if (!$dara.isNull(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.snapshotJobIds)) {
      query["SnapshotJobIds"] = request.snapshotJobIds;
    }

    if (!$dara.isNull(request.startOfJobCreatedTimeRange)) {
      query["StartOfJobCreatedTimeRange"] = request.startOfJobCreatedTimeRange;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySnapshotJobList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySnapshotJobListResponse>(await this.callApi(params, req, runtime), new $_model.QuerySnapshotJobListResponse({}));
  }

  /**
   * Queries snapshot jobs.
   * 
   * @remarks
   * The status of the snapshot jobs that you want to query.
   * *   **Submitted**: The job was submitted.
   * *   **Snapshoting**: The job is being processed.
   * *   **Success**: The job was successfully processed.
   * *   **Fail**: The job failed.
   * 
   * @param request - QuerySnapshotJobListRequest
   * @returns QuerySnapshotJobListResponse
   */
  async querySnapshotJobList(request: $_model.QuerySnapshotJobListRequest): Promise<$_model.QuerySnapshotJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySnapshotJobListWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query up to 10 transcoding templates at a time.
   * 
   * @remarks
   * The IDs of the transcoding templates that you want to query. You can query up to 10 transcoding templates at a time. Separate multiple IDs of custom transcoding templates with commas (,).
   * 
   * @param request - QueryTemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTemplateListResponse
   */
  async queryTemplateListWithOptions(request: $_model.QueryTemplateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTemplateListResponse> {
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

    if (!$dara.isNull(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTemplateList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTemplateListResponse>(await this.callApi(params, req, runtime), new $_model.QueryTemplateListResponse({}));
  }

  /**
   * You can call this operation to query up to 10 transcoding templates at a time.
   * 
   * @remarks
   * The IDs of the transcoding templates that you want to query. You can query up to 10 transcoding templates at a time. Separate multiple IDs of custom transcoding templates with commas (,).
   * 
   * @param request - QueryTemplateListRequest
   * @returns QueryTemplateListResponse
   */
  async queryTemplateList(request: $_model.QueryTemplateListRequest): Promise<$_model.QueryTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTemplateListWithOptions(request, runtime);
  }

  /**
   * 查询视频溯源水印ab流任务
   * 
   * @param request - QueryTraceAbJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTraceAbJobResponse
   */
  async queryTraceAbJobWithOptions(request: $_model.QueryTraceAbJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTraceAbJobResponse> {
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
      action: "QueryTraceAbJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTraceAbJobResponse>(await this.callApi(params, req, runtime), new $_model.QueryTraceAbJobResponse({}));
  }

  /**
   * 查询视频溯源水印ab流任务
   * 
   * @param request - QueryTraceAbJobRequest
   * @returns QueryTraceAbJobResponse
   */
  async queryTraceAbJob(request: $_model.QueryTraceAbJobRequest): Promise<$_model.QueryTraceAbJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTraceAbJobWithOptions(request, runtime);
  }

  /**
   * 查询溯源水印提取任务
   * 
   * @param request - QueryTraceExtractJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTraceExtractJobResponse
   */
  async queryTraceExtractJobWithOptions(request: $_model.QueryTraceExtractJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTraceExtractJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTraceExtractJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTraceExtractJobResponse>(await this.callApi(params, req, runtime), new $_model.QueryTraceExtractJobResponse({}));
  }

  /**
   * 查询溯源水印提取任务
   * 
   * @param request - QueryTraceExtractJobRequest
   * @returns QueryTraceExtractJobResponse
   */
  async queryTraceExtractJob(request: $_model.QueryTraceExtractJobRequest): Promise<$_model.QueryTraceExtractJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTraceExtractJobWithOptions(request, runtime);
  }

  /**
   * 查询视频溯源水印m3u8任务
   * 
   * @param request - QueryTraceM3u8JobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTraceM3u8JobResponse
   */
  async queryTraceM3u8JobWithOptions(request: $_model.QueryTraceM3u8JobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTraceM3u8JobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!$dara.isNull(request.createTimeStart)) {
      query["CreateTimeStart"] = request.createTimeStart;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
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
      action: "QueryTraceM3u8Job",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTraceM3u8JobResponse>(await this.callApi(params, req, runtime), new $_model.QueryTraceM3u8JobResponse({}));
  }

  /**
   * 查询视频溯源水印m3u8任务
   * 
   * @param request - QueryTraceM3u8JobRequest
   * @returns QueryTraceM3u8JobResponse
   */
  async queryTraceM3u8Job(request: $_model.QueryTraceM3u8JobRequest): Promise<$_model.QueryTraceM3u8JobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTraceM3u8JobWithOptions(request, runtime);
  }

  /**
   * Queries watermark templates.
   * 
   * @remarks
   * You can call this operation to query up to 10 watermark templates at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryWaterMarkTemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWaterMarkTemplateListResponse
   */
  async queryWaterMarkTemplateListWithOptions(request: $_model.QueryWaterMarkTemplateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryWaterMarkTemplateListResponse> {
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

    if (!$dara.isNull(request.waterMarkTemplateIds)) {
      query["WaterMarkTemplateIds"] = request.waterMarkTemplateIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryWaterMarkTemplateList",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryWaterMarkTemplateListResponse>(await this.callApi(params, req, runtime), new $_model.QueryWaterMarkTemplateListResponse({}));
  }

  /**
   * Queries watermark templates.
   * 
   * @remarks
   * You can call this operation to query up to 10 watermark templates at a time.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - QueryWaterMarkTemplateListRequest
   * @returns QueryWaterMarkTemplateListResponse
   */
  async queryWaterMarkTemplateList(request: $_model.QueryWaterMarkTemplateListRequest): Promise<$_model.QueryWaterMarkTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWaterMarkTemplateListWithOptions(request, runtime);
  }

  /**
   * Registers a custom face.
   * 
   * @remarks
   *   You can call this operation to register only one custom face at a time.
   * *   A maximum of 10 images can be registered for a custom face.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - RegisterCustomFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterCustomFaceResponse
   */
  async registerCustomFaceWithOptions(request: $_model.RegisterCustomFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterCustomFaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
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
      action: "RegisterCustomFace",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterCustomFaceResponse>(await this.callApi(params, req, runtime), new $_model.RegisterCustomFaceResponse({}));
  }

  /**
   * Registers a custom face.
   * 
   * @remarks
   *   You can call this operation to register only one custom face at a time.
   * *   A maximum of 10 images can be registered for a custom face.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - RegisterCustomFaceRequest
   * @returns RegisterCustomFaceResponse
   */
  async registerCustomFace(request: $_model.RegisterCustomFaceRequest): Promise<$_model.RegisterCustomFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerCustomFaceWithOptions(request, runtime);
  }

  /**
   * 注册自定义实体项
   * 
   * @param request - RegisterCustomViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterCustomViewResponse
   */
  async registerCustomViewWithOptions(request: $_model.RegisterCustomViewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterCustomViewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.customEntityId)) {
      query["CustomEntityId"] = request.customEntityId;
    }

    if (!$dara.isNull(request.customGroupId)) {
      query["CustomGroupId"] = request.customGroupId;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.labelPrompt)) {
      query["LabelPrompt"] = request.labelPrompt;
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
      action: "RegisterCustomView",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterCustomViewResponse>(await this.callApi(params, req, runtime), new $_model.RegisterCustomViewResponse({}));
  }

  /**
   * 注册自定义实体项
   * 
   * @param request - RegisterCustomViewRequest
   * @returns RegisterCustomViewResponse
   */
  async registerCustomView(request: $_model.RegisterCustomViewRequest): Promise<$_model.RegisterCustomViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerCustomViewWithOptions(request, runtime);
  }

  /**
   * Queries media workflows in the specified state.
   * 
   * @remarks
   * You can call this operation to query media workflows in the specified state. If you do not specify the state, all media workflows are queried by default.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SearchMediaWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchMediaWorkflowResponse
   */
  async searchMediaWorkflowWithOptions(request: $_model.SearchMediaWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchMediaWorkflowResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.stateList)) {
      query["StateList"] = request.stateList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchMediaWorkflow",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchMediaWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.SearchMediaWorkflowResponse({}));
  }

  /**
   * Queries media workflows in the specified state.
   * 
   * @remarks
   * You can call this operation to query media workflows in the specified state. If you do not specify the state, all media workflows are queried by default.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SearchMediaWorkflowRequest
   * @returns SearchMediaWorkflowResponse
   */
  async searchMediaWorkflow(request: $_model.SearchMediaWorkflowRequest): Promise<$_model.SearchMediaWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchMediaWorkflowWithOptions(request, runtime);
  }

  /**
   * Searches for ApsaraVideo Media Processing (MPS) queues in the specified state.
   * 
   * @remarks
   * You can call this operation to query MPS queues in the specified state. If you do not specify the state, all MPS queues are queried by default.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SearchPipelineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchPipelineResponse
   */
  async searchPipelineWithOptions(request: $_model.SearchPipelineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchPipelineResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchPipeline",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchPipelineResponse>(await this.callApi(params, req, runtime), new $_model.SearchPipelineResponse({}));
  }

  /**
   * Searches for ApsaraVideo Media Processing (MPS) queues in the specified state.
   * 
   * @remarks
   * You can call this operation to query MPS queues in the specified state. If you do not specify the state, all MPS queues are queried by default.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SearchPipelineRequest
   * @returns SearchPipelineResponse
   */
  async searchPipeline(request: $_model.SearchPipelineRequest): Promise<$_model.SearchPipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchPipelineWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query custom transcoding templates in the specified state.
   * 
   * @remarks
   * You can call this operation up to 100 times per second. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SearchTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchTemplateResponse
   */
  async searchTemplateWithOptions(request: $_model.SearchTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namePrefix)) {
      query["NamePrefix"] = request.namePrefix;
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

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchTemplateResponse>(await this.callApi(params, req, runtime), new $_model.SearchTemplateResponse({}));
  }

  /**
   * You can call this operation to query custom transcoding templates in the specified state.
   * 
   * @remarks
   * You can call this operation up to 100 times per second. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SearchTemplateRequest
   * @returns SearchTemplateResponse
   */
  async searchTemplate(request: $_model.SearchTemplateRequest): Promise<$_model.SearchTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchTemplateWithOptions(request, runtime);
  }

  /**
   * Searches for watermark templates.
   * 
   * @remarks
   * The total number of returned entries.
   * 
   * @param request - SearchWaterMarkTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchWaterMarkTemplateResponse
   */
  async searchWaterMarkTemplateWithOptions(request: $_model.SearchWaterMarkTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchWaterMarkTemplateResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchWaterMarkTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchWaterMarkTemplateResponse>(await this.callApi(params, req, runtime), new $_model.SearchWaterMarkTemplateResponse({}));
  }

  /**
   * Searches for watermark templates.
   * 
   * @remarks
   * The total number of returned entries.
   * 
   * @param request - SearchWaterMarkTemplateRequest
   * @returns SearchWaterMarkTemplateResponse
   */
  async searchWaterMarkTemplate(request: $_model.SearchWaterMarkTemplateRequest): Promise<$_model.SearchWaterMarkTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchWaterMarkTemplateWithOptions(request, runtime);
  }

  /**
   * Submits a preset template analysis job.
   * 
   * @remarks
   *   After you call the SubmitAnalysisJob operation to submit a preset template analysis job, ApsaraVideo Media Processing (MPS) intelligently analyzes the input file of the job and recommends a suitable preset template. You can call the [QueryAnalysisJobList](https://help.aliyun.com/document_detail/29224.html) operation to query the analysis result or enable asynchronous notifications to receive the analysis result.
   * *   The analysis result is retained only for two weeks after it is generated. The analysis result is deleted after two weeks. If you use the recommended preset template in a transcoding job after two weeks, the job fails, and the `AnalysisResultNotFound` error code is returned.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitAnalysisJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAnalysisJobResponse
   */
  async submitAnalysisJobWithOptions(request: $_model.SubmitAnalysisJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAnalysisJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.analysisConfig)) {
      query["AnalysisConfig"] = request.analysisConfig;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
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
      action: "SubmitAnalysisJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAnalysisJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAnalysisJobResponse({}));
  }

  /**
   * Submits a preset template analysis job.
   * 
   * @remarks
   *   After you call the SubmitAnalysisJob operation to submit a preset template analysis job, ApsaraVideo Media Processing (MPS) intelligently analyzes the input file of the job and recommends a suitable preset template. You can call the [QueryAnalysisJobList](https://help.aliyun.com/document_detail/29224.html) operation to query the analysis result or enable asynchronous notifications to receive the analysis result.
   * *   The analysis result is retained only for two weeks after it is generated. The analysis result is deleted after two weeks. If you use the recommended preset template in a transcoding job after two weeks, the job fails, and the `AnalysisResultNotFound` error code is returned.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitAnalysisJobRequest
   * @returns SubmitAnalysisJobResponse
   */
  async submitAnalysisJob(request: $_model.SubmitAnalysisJobRequest): Promise<$_model.SubmitAnalysisJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAnalysisJobWithOptions(request, runtime);
  }

  /**
   * 提交版权水印提取任务
   * 
   * @param request - SubmitCopyrightExtractJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitCopyrightExtractJobResponse
   */
  async submitCopyrightExtractJobWithOptions(request: $_model.SubmitCopyrightExtractJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitCopyrightExtractJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callBack)) {
      query["CallBack"] = request.callBack;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitCopyrightExtractJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitCopyrightExtractJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitCopyrightExtractJobResponse({}));
  }

  /**
   * 提交版权水印提取任务
   * 
   * @param request - SubmitCopyrightExtractJobRequest
   * @returns SubmitCopyrightExtractJobResponse
   */
  async submitCopyrightExtractJob(request: $_model.SubmitCopyrightExtractJobRequest): Promise<$_model.SubmitCopyrightExtractJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitCopyrightExtractJobWithOptions(request, runtime);
  }

  /**
   * 提交视频版权水印
   * 
   * @param request - SubmitCopyrightJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitCopyrightJobResponse
   */
  async submitCopyrightJobWithOptions(request: $_model.SubmitCopyrightJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitCopyrightJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callBack)) {
      query["CallBack"] = request.callBack;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.output)) {
      query["Output"] = request.output;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.totalTime)) {
      query["TotalTime"] = request.totalTime;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitCopyrightJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitCopyrightJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitCopyrightJobResponse({}));
  }

  /**
   * 提交视频版权水印
   * 
   * @param request - SubmitCopyrightJobRequest
   * @returns SubmitCopyrightJobResponse
   */
  async submitCopyrightJob(request: $_model.SubmitCopyrightJobRequest): Promise<$_model.SubmitCopyrightJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitCopyrightJobWithOptions(request, runtime);
  }

  /**
   * Submits a job of clearing or deleting a media fingerprint library.
   * 
   * @remarks
   * You can call this operation to clear or delete the specified media fingerprint library based on the library ID. If you clear a media fingerprint library, the content in the library is deleted, but the library is not deleted. If you delete a media fingerprint library, both the library and the content in the library are deleted. If you do not specify the operation type, the system clears the media fingerprint library by default.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitFpDBDeleteJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitFpDBDeleteJobResponse
   */
  async submitFpDBDeleteJobWithOptions(request: $_model.SubmitFpDBDeleteJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitFpDBDeleteJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.delType)) {
      query["DelType"] = request.delType;
    }

    if (!$dara.isNull(request.fpDBId)) {
      query["FpDBId"] = request.fpDBId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
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
      action: "SubmitFpDBDeleteJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitFpDBDeleteJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitFpDBDeleteJobResponse({}));
  }

  /**
   * Submits a job of clearing or deleting a media fingerprint library.
   * 
   * @remarks
   * You can call this operation to clear or delete the specified media fingerprint library based on the library ID. If you clear a media fingerprint library, the content in the library is deleted, but the library is not deleted. If you delete a media fingerprint library, both the library and the content in the library are deleted. If you do not specify the operation type, the system clears the media fingerprint library by default.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitFpDBDeleteJobRequest
   * @returns SubmitFpDBDeleteJobResponse
   */
  async submitFpDBDeleteJob(request: $_model.SubmitFpDBDeleteJobRequest): Promise<$_model.SubmitFpDBDeleteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitFpDBDeleteJobWithOptions(request, runtime);
  }

  /**
   * Submits a job of deleting media files from a media fingerprint library.
   * 
   * @remarks
   * ## [](#)Limits
   * *   You can call this operation to delete up to 200 media files from a media fingerprint library at a time.
   * *   This operation is available in the following regions: China (Beijing), China (Hangzhou), China (Shanghai), and Singapore.
   * ## [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitFpFileDeleteJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitFpFileDeleteJobResponse
   */
  async submitFpFileDeleteJobWithOptions(request: $_model.SubmitFpFileDeleteJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitFpFileDeleteJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileIds)) {
      query["FileIds"] = request.fileIds;
    }

    if (!$dara.isNull(request.fpDBId)) {
      query["FpDBId"] = request.fpDBId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.primaryKeys)) {
      query["PrimaryKeys"] = request.primaryKeys;
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
      action: "SubmitFpFileDeleteJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitFpFileDeleteJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitFpFileDeleteJobResponse({}));
  }

  /**
   * Submits a job of deleting media files from a media fingerprint library.
   * 
   * @remarks
   * ## [](#)Limits
   * *   You can call this operation to delete up to 200 media files from a media fingerprint library at a time.
   * *   This operation is available in the following regions: China (Beijing), China (Hangzhou), China (Shanghai), and Singapore.
   * ## [](#qps-)QPS limits
   * You can call this operation up to 10 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitFpFileDeleteJobRequest
   * @returns SubmitFpFileDeleteJobResponse
   */
  async submitFpFileDeleteJob(request: $_model.SubmitFpFileDeleteJobRequest): Promise<$_model.SubmitFpFileDeleteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitFpFileDeleteJobWithOptions(request, runtime);
  }

  /**
   * Submits a media fingerprint analysis job to query the media fingerprint repository for a media file with the identical or similar fingerprint as the input file.
   * 
   * @remarks
   *   You can call this operation to submit a video, audio, image, or text fingerprint analysis job.
   * *   This operation asynchronously submits a job. The query results may not have been generated when the response is returned. After the results are generated, an asynchronous message is returned.
   * *   You can submit a text fingerprint analysis job only in the China (Shanghai) region.
   * *   The input file of the job must be in one of the following formats:
   *     *   Image formats: JPEG, PNG, and BMP.
   *     *   Video formats: MP4, AVI, MKV, MPG, TS, MOV, FLV, MXF.
   *     *   Video encoding formats: MPEG2, MPEG4, H264, HEVC, and WMV.
   * ### QPS limit
   * You can call this operation up to 150 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitFpShotJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitFpShotJobResponse
   */
  async submitFpShotJobWithOptions(request: $_model.SubmitFpShotJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitFpShotJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fpShotConfig)) {
      query["FpShotConfig"] = request.fpShotConfig;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
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
      action: "SubmitFpShotJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitFpShotJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitFpShotJobResponse({}));
  }

  /**
   * Submits a media fingerprint analysis job to query the media fingerprint repository for a media file with the identical or similar fingerprint as the input file.
   * 
   * @remarks
   *   You can call this operation to submit a video, audio, image, or text fingerprint analysis job.
   * *   This operation asynchronously submits a job. The query results may not have been generated when the response is returned. After the results are generated, an asynchronous message is returned.
   * *   You can submit a text fingerprint analysis job only in the China (Shanghai) region.
   * *   The input file of the job must be in one of the following formats:
   *     *   Image formats: JPEG, PNG, and BMP.
   *     *   Video formats: MP4, AVI, MKV, MPG, TS, MOV, FLV, MXF.
   *     *   Video encoding formats: MPEG2, MPEG4, H264, HEVC, and WMV.
   * ### QPS limit
   * You can call this operation up to 150 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitFpShotJobRequest
   * @returns SubmitFpShotJobResponse
   */
  async submitFpShotJob(request: $_model.SubmitFpShotJobRequest): Promise<$_model.SubmitFpShotJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitFpShotJobWithOptions(request, runtime);
  }

  /**
   * @remarks
   *   Jobs that are submitted by calling this operation run in an asynchronous manner. After a job is added to the ApsaraVideo Media Processing (MPS) queue, the job is scheduled to run. You can call the [QueryIProductionJob](https://help.aliyun.com/document_detail/170217.html) operation or configure a callback to query the job result.
   * *   Capabilities provided by the intelligent production feature vary based on the region. Before you call this operation to submit an intelligent production job, check whether the job is supported in the region in which your service is activated. For more information, see [Regions and endpoints](https://help.aliyun.com/document_detail/43248.html).
   * ### [](#qps)QPS limit
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitIProductionJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitIProductionJobResponse
   */
  async submitIProductionJobWithOptions(request: $_model.SubmitIProductionJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitIProductionJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.jobParams)) {
      query["JobParams"] = request.jobParams;
    }

    if (!$dara.isNull(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!$dara.isNull(request.notifyUrl)) {
      query["NotifyUrl"] = request.notifyUrl;
    }

    if (!$dara.isNull(request.output)) {
      query["Output"] = request.output;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scheduleParams)) {
      query["ScheduleParams"] = request.scheduleParams;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitIProductionJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitIProductionJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitIProductionJobResponse({}));
  }

  /**
   * @remarks
   *   Jobs that are submitted by calling this operation run in an asynchronous manner. After a job is added to the ApsaraVideo Media Processing (MPS) queue, the job is scheduled to run. You can call the [QueryIProductionJob](https://help.aliyun.com/document_detail/170217.html) operation or configure a callback to query the job result.
   * *   Capabilities provided by the intelligent production feature vary based on the region. Before you call this operation to submit an intelligent production job, check whether the job is supported in the region in which your service is activated. For more information, see [Regions and endpoints](https://help.aliyun.com/document_detail/43248.html).
   * ### [](#qps)QPS limit
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitIProductionJobRequest
   * @returns SubmitIProductionJobResponse
   */
  async submitIProductionJob(request: $_model.SubmitIProductionJobRequest): Promise<$_model.SubmitIProductionJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitIProductionJobWithOptions(request, runtime);
  }

  /**
   * 提交图片版权水印任务
   * 
   * @param request - SubmitImageCopyrightRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitImageCopyrightResponse
   */
  async submitImageCopyrightWithOptions(request: $_model.SubmitImageCopyrightRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitImageCopyrightResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.output)) {
      query["Output"] = request.output;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitImageCopyright",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitImageCopyrightResponse>(await this.callApi(params, req, runtime), new $_model.SubmitImageCopyrightResponse({}));
  }

  /**
   * 提交图片版权水印任务
   * 
   * @param request - SubmitImageCopyrightRequest
   * @returns SubmitImageCopyrightResponse
   */
  async submitImageCopyright(request: $_model.SubmitImageCopyrightRequest): Promise<$_model.SubmitImageCopyrightResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitImageCopyrightWithOptions(request, runtime);
  }

  /**
   * Submits transcoding jobs. If the transcoding jobs and workflows created in the ApsaraVideo Media Processing (MPS) console cannot meet your business requirements, you can call the SubmitJobs operation to submit transcoding jobs. Specify transcoding parameters as required when you call the SubmitJobs operation.
   * 
   * @remarks
   *   SubmitJobs is an asynchronous operation. After you submit transcoding jobs, the jobs are added to an MPS queue to be scheduled and run. The transcoding jobs may not have been complete when the response is returned. After you call this operation, you can call the [QueryJobList](https://help.aliyun.com/document_detail/602836.html) operation to query the job results. You can also associate a Message Service (MNS) queue or topic with the MPS queue to receive notifications on the jobs. For more information, see [Receive notifications](https://help.aliyun.com/document_detail/42618.html).
   * *   An input file can be up to 100 GB in size. If the size of the input file exceeds this limit, the job may fail.
   * *   If you use an **intelligent preset template** to transcode an input file, you must first call the [SubmitAnalysisJob](https://help.aliyun.com/document_detail/29223.html) operation to submit a preset template analysis job. After the analysis job is complete, you can call the [QueryAnalysisJobList](https://help.aliyun.com/document_detail/29224.html)operation to obtain the available preset templates for the input file. When you submit a transcoding job, set TemplateId to the ID of an available preset template. If you specify a preset template that is not in the available preset templates, the transcoding job fails.
   * *   If you use a **static preset template** to transcode an input file, you do not need to submit a preset template analysis job.
   * *   If you want to use multiple accounts in MPS, you can create Resource Access Management (RAM) users by using your Alibaba Cloud account. For more information, see [Create a RAM user and grant permissions to the RAM user](https://help.aliyun.com/document_detail/42841.html). If the Alibaba Cloud account that is used to query transcoding jobs is not the one that is used to submit the transcoding jobs, no data is returned.
   * *   For information about transcoding FAQ, see [FAQ about MPS](https://help.aliyun.com/document_detail/38986.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitJobsResponse
   */
  async submitJobsWithOptions(request: $_model.SubmitJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.outputBucket)) {
      query["OutputBucket"] = request.outputBucket;
    }

    if (!$dara.isNull(request.outputLocation)) {
      query["OutputLocation"] = request.outputLocation;
    }

    if (!$dara.isNull(request.outputs)) {
      query["Outputs"] = request.outputs;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
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
      action: "SubmitJobs",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitJobsResponse>(await this.callApi(params, req, runtime), new $_model.SubmitJobsResponse({}));
  }

  /**
   * Submits transcoding jobs. If the transcoding jobs and workflows created in the ApsaraVideo Media Processing (MPS) console cannot meet your business requirements, you can call the SubmitJobs operation to submit transcoding jobs. Specify transcoding parameters as required when you call the SubmitJobs operation.
   * 
   * @remarks
   *   SubmitJobs is an asynchronous operation. After you submit transcoding jobs, the jobs are added to an MPS queue to be scheduled and run. The transcoding jobs may not have been complete when the response is returned. After you call this operation, you can call the [QueryJobList](https://help.aliyun.com/document_detail/602836.html) operation to query the job results. You can also associate a Message Service (MNS) queue or topic with the MPS queue to receive notifications on the jobs. For more information, see [Receive notifications](https://help.aliyun.com/document_detail/42618.html).
   * *   An input file can be up to 100 GB in size. If the size of the input file exceeds this limit, the job may fail.
   * *   If you use an **intelligent preset template** to transcode an input file, you must first call the [SubmitAnalysisJob](https://help.aliyun.com/document_detail/29223.html) operation to submit a preset template analysis job. After the analysis job is complete, you can call the [QueryAnalysisJobList](https://help.aliyun.com/document_detail/29224.html)operation to obtain the available preset templates for the input file. When you submit a transcoding job, set TemplateId to the ID of an available preset template. If you specify a preset template that is not in the available preset templates, the transcoding job fails.
   * *   If you use a **static preset template** to transcode an input file, you do not need to submit a preset template analysis job.
   * *   If you want to use multiple accounts in MPS, you can create Resource Access Management (RAM) users by using your Alibaba Cloud account. For more information, see [Create a RAM user and grant permissions to the RAM user](https://help.aliyun.com/document_detail/42841.html). If the Alibaba Cloud account that is used to query transcoding jobs is not the one that is used to submit the transcoding jobs, no data is returned.
   * *   For information about transcoding FAQ, see [FAQ about MPS](https://help.aliyun.com/document_detail/38986.html).
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitJobsRequest
   * @returns SubmitJobsResponse
   */
  async submitJobs(request: $_model.SubmitJobsRequest): Promise<$_model.SubmitJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitJobsWithOptions(request, runtime);
  }

  /**
   * Submits a content moderation job.
   * 
   * @remarks
   * The job that you submit by calling this operation is run in asynchronous mode. The job is added to an ApsaraVideo Media Processing (MPS) queue and then scheduled, queued, and run. You can call the [QueryMediaCensorJobDetail](https://help.aliyun.com/document_detail/91779.html) operation or configure an asynchronous notification to obtain the job result.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitMediaCensorJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitMediaCensorJobResponse
   */
  async submitMediaCensorJobWithOptions(request: $_model.SubmitMediaCensorJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitMediaCensorJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.barrages)) {
      query["Barrages"] = request.barrages;
    }

    if (!$dara.isNull(request.coverImages)) {
      query["CoverImages"] = request.coverImages;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.externalUrl)) {
      query["ExternalUrl"] = request.externalUrl;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.videoCensorConfig)) {
      query["VideoCensorConfig"] = request.videoCensorConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitMediaCensorJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitMediaCensorJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitMediaCensorJobResponse({}));
  }

  /**
   * Submits a content moderation job.
   * 
   * @remarks
   * The job that you submit by calling this operation is run in asynchronous mode. The job is added to an ApsaraVideo Media Processing (MPS) queue and then scheduled, queued, and run. You can call the [QueryMediaCensorJobDetail](https://help.aliyun.com/document_detail/91779.html) operation or configure an asynchronous notification to obtain the job result.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitMediaCensorJobRequest
   * @returns SubmitMediaCensorJobResponse
   */
  async submitMediaCensorJob(request: $_model.SubmitMediaCensorJobRequest): Promise<$_model.SubmitMediaCensorJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitMediaCensorJobWithOptions(request, runtime);
  }

  /**
   * Submits a media information analysis job.
   * 
   * @remarks
   *   Before you submit a media information analysis job, make sure that the input file is uploaded to an Object Storage Service (OSS) bucket. Otherwise, the job fails. You can configure upload callbacks to be notified of the upload status of files.****
   * *   A media information analysis job can be run in synchronous or asynchronous mode.
   * *   In asynchronous mode, the media information analysis job is submitted to and scheduled in an ApsaraVideo Media Processing (MPS) queue. In this case, the media information analysis job may be queued. The media information analysis job may not be generated when the response to the SubmitMediaInfoJob operation is returned. After the execution is complete, you can call the [QueryMediaInfoJobList](https://help.aliyun.com/document_detail/602828.html) operation to poll the execution results, or associate a Message Service (MNS) queue or topic with the MPS queue to receive the execution results. For more information, see [Receive message notifications](https://www.alibabacloud.com/help/en/mps/receive-message-notifications/?spm=a2c63.p38356.0.0.b48576d2jxNSca).
   * ### QPS limits
   * You can call this operation up to 50 times per second per account. If the number of requests that you send to call this operation within one second reaches the request limit of this operation, new requests fail and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitMediaInfoJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitMediaInfoJobResponse
   */
  async submitMediaInfoJobWithOptions(request: $_model.SubmitMediaInfoJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitMediaInfoJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.async)) {
      query["Async"] = request.async;
    }

    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
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
      action: "SubmitMediaInfoJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitMediaInfoJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitMediaInfoJobResponse({}));
  }

  /**
   * Submits a media information analysis job.
   * 
   * @remarks
   *   Before you submit a media information analysis job, make sure that the input file is uploaded to an Object Storage Service (OSS) bucket. Otherwise, the job fails. You can configure upload callbacks to be notified of the upload status of files.****
   * *   A media information analysis job can be run in synchronous or asynchronous mode.
   * *   In asynchronous mode, the media information analysis job is submitted to and scheduled in an ApsaraVideo Media Processing (MPS) queue. In this case, the media information analysis job may be queued. The media information analysis job may not be generated when the response to the SubmitMediaInfoJob operation is returned. After the execution is complete, you can call the [QueryMediaInfoJobList](https://help.aliyun.com/document_detail/602828.html) operation to poll the execution results, or associate a Message Service (MNS) queue or topic with the MPS queue to receive the execution results. For more information, see [Receive message notifications](https://www.alibabacloud.com/help/en/mps/receive-message-notifications/?spm=a2c63.p38356.0.0.b48576d2jxNSca).
   * ### QPS limits
   * You can call this operation up to 50 times per second per account. If the number of requests that you send to call this operation within one second reaches the request limit of this operation, new requests fail and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitMediaInfoJobRequest
   * @returns SubmitMediaInfoJobResponse
   */
  async submitMediaInfoJob(request: $_model.SubmitMediaInfoJobRequest): Promise<$_model.SubmitMediaInfoJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitMediaInfoJobWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitSmarttagJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSmarttagJobResponse
   */
  async submitSmarttagJobWithOptions(request: $_model.SubmitSmarttagJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSmarttagJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.contentAddr)) {
      query["ContentAddr"] = request.contentAddr;
    }

    if (!$dara.isNull(request.contentType)) {
      query["ContentType"] = request.contentType;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.notifyUrl)) {
      query["NotifyUrl"] = request.notifyUrl;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
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
      action: "SubmitSmarttagJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSmarttagJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSmarttagJobResponse({}));
  }

  /**
   * @param request - SubmitSmarttagJobRequest
   * @returns SubmitSmarttagJobResponse
   */
  async submitSmarttagJob(request: $_model.SubmitSmarttagJobRequest): Promise<$_model.SubmitSmarttagJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSmarttagJobWithOptions(request, runtime);
  }

  /**
   * Submits a snapshot job.
   * 
   * @remarks
   *   Only JPG images can be generated by calling this operation.
   * *   Asynchronous mode: This operation may return a response before snapshots are captured. Snapshot jobs are queued in the background and asynchronously processed by ApsaraVideo Media Processing (MPS). If the **Interval** or **Num** parameter is set, the snapshot job is processed in asynchronous mode. For more information about FAQ about capturing snapshots, see [FAQ about taking snapshots](https://help.aliyun.com/document_detail/60805.html).
   * *   Notifications: When you submit a snapshot job, the **PipelineId** parameter is required. An asynchronous message is sent only after the notification feature is enabled for the MPS queue.
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitSnapshotJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSnapshotJobResponse
   */
  async submitSnapshotJobWithOptions(request: $_model.SubmitSnapshotJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSnapshotJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.snapshotConfig)) {
      query["SnapshotConfig"] = request.snapshotConfig;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSnapshotJob",
      version: "2014-06-18",
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
   * Submits a snapshot job.
   * 
   * @remarks
   *   Only JPG images can be generated by calling this operation.
   * *   Asynchronous mode: This operation may return a response before snapshots are captured. Snapshot jobs are queued in the background and asynchronously processed by ApsaraVideo Media Processing (MPS). If the **Interval** or **Num** parameter is set, the snapshot job is processed in asynchronous mode. For more information about FAQ about capturing snapshots, see [FAQ about taking snapshots](https://help.aliyun.com/document_detail/60805.html).
   * *   Notifications: When you submit a snapshot job, the **PipelineId** parameter is required. An asynchronous message is sent only after the notification feature is enabled for the MPS queue.
   * ### QPS limit
   * You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - SubmitSnapshotJobRequest
   * @returns SubmitSnapshotJobResponse
   */
  async submitSnapshotJob(request: $_model.SubmitSnapshotJobRequest): Promise<$_model.SubmitSnapshotJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSnapshotJobWithOptions(request, runtime);
  }

  /**
   * 提交视频溯源水印ab流任务
   * 
   * @param request - SubmitTraceAbJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitTraceAbJobResponse
   */
  async submitTraceAbJobWithOptions(request: $_model.SubmitTraceAbJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitTraceAbJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callBack)) {
      query["CallBack"] = request.callBack;
    }

    if (!$dara.isNull(request.cipherBase64ed)) {
      query["CipherBase64ed"] = request.cipherBase64ed;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.output)) {
      query["Output"] = request.output;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.totalTime)) {
      query["TotalTime"] = request.totalTime;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitTraceAbJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitTraceAbJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitTraceAbJobResponse({}));
  }

  /**
   * 提交视频溯源水印ab流任务
   * 
   * @param request - SubmitTraceAbJobRequest
   * @returns SubmitTraceAbJobResponse
   */
  async submitTraceAbJob(request: $_model.SubmitTraceAbJobRequest): Promise<$_model.SubmitTraceAbJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitTraceAbJobWithOptions(request, runtime);
  }

  /**
   * 提交溯源水印提取任务
   * 
   * @param request - SubmitTraceExtractJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitTraceExtractJobResponse
   */
  async submitTraceExtractJobWithOptions(request: $_model.SubmitTraceExtractJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitTraceExtractJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callBack)) {
      query["CallBack"] = request.callBack;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitTraceExtractJob",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitTraceExtractJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitTraceExtractJobResponse({}));
  }

  /**
   * 提交溯源水印提取任务
   * 
   * @param request - SubmitTraceExtractJobRequest
   * @returns SubmitTraceExtractJobResponse
   */
  async submitTraceExtractJob(request: $_model.SubmitTraceExtractJobRequest): Promise<$_model.SubmitTraceExtractJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitTraceExtractJobWithOptions(request, runtime);
  }

  /**
   * 提交视频溯源水印m3u8文件任务
   * 
   * @param request - SubmitTraceM3u8JobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitTraceM3u8JobResponse
   */
  async submitTraceM3u8JobWithOptions(request: $_model.SubmitTraceM3u8JobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitTraceM3u8JobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyUri)) {
      query["KeyUri"] = request.keyUri;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.output)) {
      query["Output"] = request.output;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.trace)) {
      query["Trace"] = request.trace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitTraceM3u8Job",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitTraceM3u8JobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitTraceM3u8JobResponse({}));
  }

  /**
   * 提交视频溯源水印m3u8文件任务
   * 
   * @param request - SubmitTraceM3u8JobRequest
   * @returns SubmitTraceM3u8JobResponse
   */
  async submitTraceM3u8Job(request: $_model.SubmitTraceM3u8JobRequest): Promise<$_model.SubmitTraceM3u8JobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitTraceM3u8JobWithOptions(request, runtime);
  }

  /**
   * The description of the figure. The description can be up to 512 characters in length.
   * 
   * @remarks
   * The response parameters.
   * 
   * @param request - TagCustomPersonRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagCustomPersonResponse
   */
  async tagCustomPersonWithOptions(request: $_model.TagCustomPersonRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagCustomPersonResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryDescription)) {
      query["CategoryDescription"] = request.categoryDescription;
    }

    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.categoryName)) {
      query["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.personDescription)) {
      query["PersonDescription"] = request.personDescription;
    }

    if (!$dara.isNull(request.personId)) {
      query["PersonId"] = request.personId;
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
      action: "TagCustomPerson",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagCustomPersonResponse>(await this.callApi(params, req, runtime), new $_model.TagCustomPersonResponse({}));
  }

  /**
   * The description of the figure. The description can be up to 512 characters in length.
   * 
   * @remarks
   * The response parameters.
   * 
   * @param request - TagCustomPersonRequest
   * @returns TagCustomPersonResponse
   */
  async tagCustomPerson(request: $_model.TagCustomPersonRequest): Promise<$_model.TagCustomPersonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagCustomPersonWithOptions(request, runtime);
  }

  /**
   * Unbinds an input media bucket from the media library.
   * 
   * @remarks
   * # Usage notes
   * You can call this operation to unbind an input media bucket from the media library based on the name of the output media bucket.
   * # QPS limits
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UnbindInputBucketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindInputBucketResponse
   */
  async unbindInputBucketWithOptions(request: $_model.UnbindInputBucketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindInputBucketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
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

    if (!$dara.isNull(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindInputBucket",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindInputBucketResponse>(await this.callApi(params, req, runtime), new $_model.UnbindInputBucketResponse({}));
  }

  /**
   * Unbinds an input media bucket from the media library.
   * 
   * @remarks
   * # Usage notes
   * You can call this operation to unbind an input media bucket from the media library based on the name of the output media bucket.
   * # QPS limits
   * You can call this API operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UnbindInputBucketRequest
   * @returns UnbindInputBucketResponse
   */
  async unbindInputBucket(request: $_model.UnbindInputBucketRequest): Promise<$_model.UnbindInputBucketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindInputBucketWithOptions(request, runtime);
  }

  /**
   * You can call this operation to unbind an output media bucket from the media library based on the name of the output media bucket.
   * ## QPS limit
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limits](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   * 
   * @remarks
   * The name of the output media bucket to be unbound. To obtain the media bucket name, you can log on to the **ApsaraVideo Media Processing (MPS)** console and choose **Workflows** > **Media Buckets** in the left-side navigation pane. Alternatively, you can log on to the **Object Storage Service (OSS) console** and click **My OSS Paths**.
   * 
   * @param request - UnbindOutputBucketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindOutputBucketResponse
   */
  async unbindOutputBucketWithOptions(request: $_model.UnbindOutputBucketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindOutputBucketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
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
      action: "UnbindOutputBucket",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindOutputBucketResponse>(await this.callApi(params, req, runtime), new $_model.UnbindOutputBucketResponse({}));
  }

  /**
   * You can call this operation to unbind an output media bucket from the media library based on the name of the output media bucket.
   * ## QPS limit
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limits](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   * 
   * @remarks
   * The name of the output media bucket to be unbound. To obtain the media bucket name, you can log on to the **ApsaraVideo Media Processing (MPS)** console and choose **Workflows** > **Media Buckets** in the left-side navigation pane. Alternatively, you can log on to the **Object Storage Service (OSS) console** and click **My OSS Paths**.
   * 
   * @param request - UnbindOutputBucketRequest
   * @returns UnbindOutputBucketResponse
   */
  async unbindOutputBucket(request: $_model.UnbindOutputBucketRequest): Promise<$_model.UnbindOutputBucketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindOutputBucketWithOptions(request, runtime);
  }

  /**
   * Deletes a custom face, all the custom faces that are registered in a custom figure library, or a custom figure library.
   * 
   * @remarks
   * You can call this operation to delete a specific custom face, all the custom faces that are registered in a custom figure library, or a custom figure library.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UnregisterCustomFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnregisterCustomFaceResponse
   */
  async unregisterCustomFaceWithOptions(request: $_model.UnregisterCustomFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnregisterCustomFaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.faceId)) {
      query["FaceId"] = request.faceId;
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
      action: "UnregisterCustomFace",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnregisterCustomFaceResponse>(await this.callApi(params, req, runtime), new $_model.UnregisterCustomFaceResponse({}));
  }

  /**
   * Deletes a custom face, all the custom faces that are registered in a custom figure library, or a custom figure library.
   * 
   * @remarks
   * You can call this operation to delete a specific custom face, all the custom faces that are registered in a custom figure library, or a custom figure library.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped, and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UnregisterCustomFaceRequest
   * @returns UnregisterCustomFaceResponse
   */
  async unregisterCustomFace(request: $_model.UnregisterCustomFaceRequest): Promise<$_model.UnregisterCustomFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unregisterCustomFaceWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about a media file.
   * 
   * @remarks
   * The basic information that you can update by calling this operation includes the title, description, and category of a media file. This operation applies to a full update. You must set all the parameters unless you want to replace the value of a specific parameter with a NULL value.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UpdateMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaResponse
   */
  async updateMediaWithOptions(request: $_model.UpdateMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaResponse> {
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

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMedia",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaResponse({}));
  }

  /**
   * Updates the basic information about a media file.
   * 
   * @remarks
   * The basic information that you can update by calling this operation includes the title, description, and category of a media file. This operation applies to a full update. You must set all the parameters unless you want to replace the value of a specific parameter with a NULL value.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UpdateMediaRequest
   * @returns UpdateMediaResponse
   */
  async updateMedia(request: $_model.UpdateMediaRequest): Promise<$_model.UpdateMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaWithOptions(request, runtime);
  }

  /**
   * Updates the category to which a media file belongs.
   * 
   * @remarks
   * You can call this operation to update only the category of a media file. For more information about how to update all the information about a media file, see [UpdateMedia](https://help.aliyun.com/document_detail/44464.html).
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UpdateMediaCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaCategoryResponse
   */
  async updateMediaCategoryWithOptions(request: $_model.UpdateMediaCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cateId)) {
      query["CateId"] = request.cateId;
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
      action: "UpdateMediaCategory",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaCategoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaCategoryResponse({}));
  }

  /**
   * Updates the category to which a media file belongs.
   * 
   * @remarks
   * You can call this operation to update only the category of a media file. For more information about how to update all the information about a media file, see [UpdateMedia](https://help.aliyun.com/document_detail/44464.html).
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UpdateMediaCategoryRequest
   * @returns UpdateMediaCategoryResponse
   */
  async updateMediaCategory(request: $_model.UpdateMediaCategoryRequest): Promise<$_model.UpdateMediaCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaCategoryWithOptions(request, runtime);
  }

  /**
   * Updates the thumbnail of a media file.
   * 
   * @remarks
   * You can call this operation to update only the thumbnail of a media file. For more information about how to update all the information about a media file, see [UpdateMedia](https://help.aliyun.com/document_detail/44464.html).
   * ## Limits on QPS
   * You can call this operation up to 100 times per second. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limits](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   * 
   * @param request - UpdateMediaCoverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaCoverResponse
   */
  async updateMediaCoverWithOptions(request: $_model.UpdateMediaCoverRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaCoverResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
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
      action: "UpdateMediaCover",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaCoverResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaCoverResponse({}));
  }

  /**
   * Updates the thumbnail of a media file.
   * 
   * @remarks
   * You can call this operation to update only the thumbnail of a media file. For more information about how to update all the information about a media file, see [UpdateMedia](https://help.aliyun.com/document_detail/44464.html).
   * ## Limits on QPS
   * You can call this operation up to 100 times per second. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limits](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   * 
   * @param request - UpdateMediaCoverRequest
   * @returns UpdateMediaCoverResponse
   */
  async updateMediaCover(request: $_model.UpdateMediaCoverRequest): Promise<$_model.UpdateMediaCoverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaCoverWithOptions(request, runtime);
  }

  /**
   * Updates the publishing status of a media file.
   * 
   * @remarks
   * The published state indicates that the access control list (ACL) of media playback resources and snapshot files is set to inherit the ACL of the bucket to which they belong. The unpublished state indicates that the ACL of media playback resources and snapshot files is set to private.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UpdateMediaPublishStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaPublishStateResponse
   */
  async updateMediaPublishStateWithOptions(request: $_model.UpdateMediaPublishStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaPublishStateResponse> {
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

    if (!$dara.isNull(request.publish)) {
      query["Publish"] = request.publish;
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
      action: "UpdateMediaPublishState",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaPublishStateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaPublishStateResponse({}));
  }

  /**
   * Updates the publishing status of a media file.
   * 
   * @remarks
   * The published state indicates that the access control list (ACL) of media playback resources and snapshot files is set to inherit the ACL of the bucket to which they belong. The unpublished state indicates that the ACL of media playback resources and snapshot files is set to private.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UpdateMediaPublishStateRequest
   * @returns UpdateMediaPublishStateResponse
   */
  async updateMediaPublishState(request: $_model.UpdateMediaPublishStateRequest): Promise<$_model.UpdateMediaPublishStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaPublishStateWithOptions(request, runtime);
  }

  /**
   * Updates the topology of a media workflow.
   * 
   * @remarks
   *   You can call this operation to update the topology of a media workflow. To update the trigger mode of a media workflow, call the [UpdateMediaWorkflowTriggerMode](https://help.aliyun.com/document_detail/70372.html) operation.
   * *   After you delete or deactivate a media workflow, the workflow cannot be used. In this case, the workflow is not automatically triggered when you upload a file to the bucket specified by the workflow.
   * <warning>Deleting or deactivating a workflow will not affect tasks that have already been submitted. If a workflow is deleted or deactivated after a task has been submitted, tasks that are already in the processing queue will not be canceled and will be executed normally and charged the corresponding fees.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).>
   * 
   * @param request - UpdateMediaWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaWorkflowResponse
   */
  async updateMediaWorkflowWithOptions(request: $_model.UpdateMediaWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaWorkflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaWorkflowId)) {
      query["MediaWorkflowId"] = request.mediaWorkflowId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.topology)) {
      query["Topology"] = request.topology;
    }

    if (!$dara.isNull(request.triggerMode)) {
      query["TriggerMode"] = request.triggerMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMediaWorkflow",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaWorkflowResponse({}));
  }

  /**
   * Updates the topology of a media workflow.
   * 
   * @remarks
   *   You can call this operation to update the topology of a media workflow. To update the trigger mode of a media workflow, call the [UpdateMediaWorkflowTriggerMode](https://help.aliyun.com/document_detail/70372.html) operation.
   * *   After you delete or deactivate a media workflow, the workflow cannot be used. In this case, the workflow is not automatically triggered when you upload a file to the bucket specified by the workflow.
   * <warning>Deleting or deactivating a workflow will not affect tasks that have already been submitted. If a workflow is deleted or deactivated after a task has been submitted, tasks that are already in the processing queue will not be canceled and will be executed normally and charged the corresponding fees.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).>
   * 
   * @param request - UpdateMediaWorkflowRequest
   * @returns UpdateMediaWorkflowResponse
   */
  async updateMediaWorkflow(request: $_model.UpdateMediaWorkflowRequest): Promise<$_model.UpdateMediaWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaWorkflowWithOptions(request, runtime);
  }

  /**
   * Updates the trigger mode of a media workflow.
   * 
   * @remarks
   * You can call this operation only to modify the trigger mode of a media workflow. To modify other information about the workflow, call the [UpdateMediaWorkflow](https://help.aliyun.com/document_detail/44438.html) operation.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UpdateMediaWorkflowTriggerModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaWorkflowTriggerModeResponse
   */
  async updateMediaWorkflowTriggerModeWithOptions(request: $_model.UpdateMediaWorkflowTriggerModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaWorkflowTriggerModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaWorkflowId)) {
      query["MediaWorkflowId"] = request.mediaWorkflowId;
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

    if (!$dara.isNull(request.triggerMode)) {
      query["TriggerMode"] = request.triggerMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMediaWorkflowTriggerMode",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaWorkflowTriggerModeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaWorkflowTriggerModeResponse({}));
  }

  /**
   * Updates the trigger mode of a media workflow.
   * 
   * @remarks
   * You can call this operation only to modify the trigger mode of a media workflow. To modify other information about the workflow, call the [UpdateMediaWorkflow](https://help.aliyun.com/document_detail/44438.html) operation.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UpdateMediaWorkflowTriggerModeRequest
   * @returns UpdateMediaWorkflowTriggerModeResponse
   */
  async updateMediaWorkflowTriggerMode(request: $_model.UpdateMediaWorkflowTriggerModeRequest): Promise<$_model.UpdateMediaWorkflowTriggerModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaWorkflowTriggerModeWithOptions(request, runtime);
  }

  /**
   * Updates an ApsaraVideo Media Processing (MPS) queue.
   * 
   * @remarks
   *   You can call this operation to modify the name, status, and notification settings of the specified MPS queue.
   * *   If a paused MPS queue is selected in a workflow or a job, such as a video review or media fingerprint job, the workflow or job fails.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UpdatePipelineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePipelineResponse
   */
  async updatePipelineWithOptions(request: $_model.UpdatePipelineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePipelineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extendConfig)) {
      query["ExtendConfig"] = request.extendConfig;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.notifyConfig)) {
      query["NotifyConfig"] = request.notifyConfig;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePipeline",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePipelineResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePipelineResponse({}));
  }

  /**
   * Updates an ApsaraVideo Media Processing (MPS) queue.
   * 
   * @remarks
   *   You can call this operation to modify the name, status, and notification settings of the specified MPS queue.
   * *   If a paused MPS queue is selected in a workflow or a job, such as a video review or media fingerprint job, the workflow or job fails.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UpdatePipelineRequest
   * @returns UpdatePipelineResponse
   */
  async updatePipeline(request: $_model.UpdatePipelineRequest): Promise<$_model.UpdatePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePipelineWithOptions(request, runtime);
  }

  /**
   * 更新智能标签模板接口支持cpv
   * 
   * @param request - UpdateSmarttagTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSmarttagTemplateResponse
   */
  async updateSmarttagTemplateWithOptions(request: $_model.UpdateSmarttagTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSmarttagTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.analyseTypes)) {
      query["AnalyseTypes"] = request.analyseTypes;
    }

    if (!$dara.isNull(request.faceCategoryIds)) {
      query["FaceCategoryIds"] = request.faceCategoryIds;
    }

    if (!$dara.isNull(request.faceCustomParamsConfig)) {
      query["FaceCustomParamsConfig"] = request.faceCustomParamsConfig;
    }

    if (!$dara.isNull(request.industry)) {
      query["Industry"] = request.industry;
    }

    if (!$dara.isNull(request.isDefault)) {
      query["IsDefault"] = request.isDefault;
    }

    if (!$dara.isNull(request.keywordConfig)) {
      query["KeywordConfig"] = request.keywordConfig;
    }

    if (!$dara.isNull(request.knowledgeConfig)) {
      query["KnowledgeConfig"] = request.knowledgeConfig;
    }

    if (!$dara.isNull(request.labelType)) {
      query["LabelType"] = request.labelType;
    }

    if (!$dara.isNull(request.labelVersion)) {
      query["LabelVersion"] = request.labelVersion;
    }

    if (!$dara.isNull(request.landmarkGroupIds)) {
      query["LandmarkGroupIds"] = request.landmarkGroupIds;
    }

    if (!$dara.isNull(request.objectGroupIds)) {
      query["ObjectGroupIds"] = request.objectGroupIds;
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

    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

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
      action: "UpdateSmarttagTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSmarttagTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSmarttagTemplateResponse({}));
  }

  /**
   * 更新智能标签模板接口支持cpv
   * 
   * @param request - UpdateSmarttagTemplateRequest
   * @returns UpdateSmarttagTemplateResponse
   */
  async updateSmarttagTemplate(request: $_model.UpdateSmarttagTemplateRequest): Promise<$_model.UpdateSmarttagTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSmarttagTemplateWithOptions(request, runtime);
  }

  /**
   * @remarks
   * A custom transcoding template cannot be updated if it is being used by a job that has been submitted.The ID of the template. You can obtain the template ID from the response of the [AddTemplate](https://help.aliyun.com/document_detail/213306.html) operation.
   * ### QPS limits
   * You can call this operation up to 100 times per second. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UpdateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTemplateResponse
   */
  async updateTemplateWithOptions(request: $_model.UpdateTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.audio)) {
      query["Audio"] = request.audio;
    }

    if (!$dara.isNull(request.container)) {
      query["Container"] = request.container;
    }

    if (!$dara.isNull(request.muxConfig)) {
      query["MuxConfig"] = request.muxConfig;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.transConfig)) {
      query["TransConfig"] = request.transConfig;
    }

    if (!$dara.isNull(request.video)) {
      query["Video"] = request.video;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTemplateResponse({}));
  }

  /**
   * @remarks
   * A custom transcoding template cannot be updated if it is being used by a job that has been submitted.The ID of the template. You can obtain the template ID from the response of the [AddTemplate](https://help.aliyun.com/document_detail/213306.html) operation.
   * ### QPS limits
   * You can call this operation up to 100 times per second. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UpdateTemplateRequest
   * @returns UpdateTemplateResponse
   */
  async updateTemplate(request: $_model.UpdateTemplateRequest): Promise<$_model.UpdateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTemplateWithOptions(request, runtime);
  }

  /**
   * Updates the name and configurations of the specified watermark template.
   * 
   * @remarks
   *   You can call this operation to update the information about a watermark template based on the ID of the watermark template. For example, you can update the name and configurations of a watermark template.
   * *   A watermark template cannot be updated if it is being used by a job that has been submitted.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UpdateWaterMarkTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWaterMarkTemplateResponse
   */
  async updateWaterMarkTemplateWithOptions(request: $_model.UpdateWaterMarkTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWaterMarkTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.waterMarkTemplateId)) {
      query["WaterMarkTemplateId"] = request.waterMarkTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWaterMarkTemplate",
      version: "2014-06-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWaterMarkTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWaterMarkTemplateResponse({}));
  }

  /**
   * Updates the name and configurations of the specified watermark template.
   * 
   * @remarks
   *   You can call this operation to update the information about a watermark template based on the ID of the watermark template. For example, you can update the name and configurations of a watermark template.
   * *   A watermark template cannot be updated if it is being used by a job that has been submitted.
   * ### QPS limit
   * You can call this operation up to 100 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](https://help.aliyun.com/document_detail/342832.html).
   * 
   * @param request - UpdateWaterMarkTemplateRequest
   * @returns UpdateWaterMarkTemplateResponse
   */
  async updateWaterMarkTemplate(request: $_model.UpdateWaterMarkTemplateRequest): Promise<$_model.UpdateWaterMarkTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWaterMarkTemplateWithOptions(request, runtime);
  }

}
