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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("vs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AddVsPullStreamInfoConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddVsPullStreamInfoConfigResponse
   */
  async addVsPullStreamInfoConfigWithOptions(request: $_model.AddVsPullStreamInfoConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddVsPullStreamInfoConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.always)) {
      query["Always"] = request.always;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.sourceUrl)) {
      query["SourceUrl"] = request.sourceUrl;
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
      action: "AddVsPullStreamInfoConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddVsPullStreamInfoConfigResponse>(await this.callApi(params, req, runtime), new $_model.AddVsPullStreamInfoConfigResponse({}));
  }

  /**
   * @param request - AddVsPullStreamInfoConfigRequest
   * @returns AddVsPullStreamInfoConfigResponse
   */
  async addVsPullStreamInfoConfig(request: $_model.AddVsPullStreamInfoConfigRequest): Promise<$_model.AddVsPullStreamInfoConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addVsPullStreamInfoConfigWithOptions(request, runtime);
  }

  /**
   * 云应用服务实例与项目进行关联。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于将满足特定条件的实例与指定项目进行关联。
   * 
   * @param tmpReq - AssociateRenderingProjectInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateRenderingProjectInstancesResponse
   */
  async associateRenderingProjectInstancesWithOptions(tmpReq: $_model.AssociateRenderingProjectInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateRenderingProjectInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.AssociateRenderingProjectInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.renderingInstanceIds)) {
      request.renderingInstanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.renderingInstanceIds, "RenderingInstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.renderingInstanceIdsShrink)) {
      query["RenderingInstanceIds"] = request.renderingInstanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateRenderingProjectInstances",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateRenderingProjectInstancesResponse>(await this.callApi(params, req, runtime), new $_model.AssociateRenderingProjectInstancesResponse({}));
  }

  /**
   * 云应用服务实例与项目进行关联。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于将满足特定条件的实例与指定项目进行关联。
   * 
   * @param request - AssociateRenderingProjectInstancesRequest
   * @returns AssociateRenderingProjectInstancesResponse
   */
  async associateRenderingProjectInstances(request: $_model.AssociateRenderingProjectInstancesRequest): Promise<$_model.AssociateRenderingProjectInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateRenderingProjectInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchBindDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchBindDirectoriesResponse
   */
  async batchBindDirectoriesWithOptions(request: $_model.BatchBindDirectoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchBindDirectoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchBindDirectories",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchBindDirectoriesResponse>(await this.callApi(params, req, runtime), new $_model.BatchBindDirectoriesResponse({}));
  }

  /**
   * @param request - BatchBindDirectoriesRequest
   * @returns BatchBindDirectoriesResponse
   */
  async batchBindDirectories(request: $_model.BatchBindDirectoriesRequest): Promise<$_model.BatchBindDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchBindDirectoriesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchBindParentPlatformDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchBindParentPlatformDevicesResponse
   */
  async batchBindParentPlatformDevicesWithOptions(request: $_model.BatchBindParentPlatformDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchBindParentPlatformDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parentPlatformId)) {
      query["ParentPlatformId"] = request.parentPlatformId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchBindParentPlatformDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchBindParentPlatformDevicesResponse>(await this.callApi(params, req, runtime), new $_model.BatchBindParentPlatformDevicesResponse({}));
  }

  /**
   * @param request - BatchBindParentPlatformDevicesRequest
   * @returns BatchBindParentPlatformDevicesResponse
   */
  async batchBindParentPlatformDevices(request: $_model.BatchBindParentPlatformDevicesRequest): Promise<$_model.BatchBindParentPlatformDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchBindParentPlatformDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchBindPurchasedDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchBindPurchasedDevicesResponse
   */
  async batchBindPurchasedDevicesWithOptions(request: $_model.BatchBindPurchasedDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchBindPurchasedDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchBindPurchasedDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchBindPurchasedDevicesResponse>(await this.callApi(params, req, runtime), new $_model.BatchBindPurchasedDevicesResponse({}));
  }

  /**
   * @param request - BatchBindPurchasedDevicesRequest
   * @returns BatchBindPurchasedDevicesResponse
   */
  async batchBindPurchasedDevices(request: $_model.BatchBindPurchasedDevicesRequest): Promise<$_model.BatchBindPurchasedDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchBindPurchasedDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchBindTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchBindTemplateResponse
   */
  async batchBindTemplateWithOptions(request: $_model.BatchBindTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchBindTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applyAll)) {
      query["ApplyAll"] = request.applyAll;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.replace)) {
      query["Replace"] = request.replace;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchBindTemplate",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchBindTemplateResponse>(await this.callApi(params, req, runtime), new $_model.BatchBindTemplateResponse({}));
  }

  /**
   * @param request - BatchBindTemplateRequest
   * @returns BatchBindTemplateResponse
   */
  async batchBindTemplate(request: $_model.BatchBindTemplateRequest): Promise<$_model.BatchBindTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchBindTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - BatchBindTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchBindTemplatesResponse
   */
  async batchBindTemplatesWithOptions(request: $_model.BatchBindTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchBindTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applyAll)) {
      query["ApplyAll"] = request.applyAll;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.replace)) {
      query["Replace"] = request.replace;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchBindTemplates",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchBindTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.BatchBindTemplatesResponse({}));
  }

  /**
   * @param request - BatchBindTemplatesRequest
   * @returns BatchBindTemplatesResponse
   */
  async batchBindTemplates(request: $_model.BatchBindTemplatesRequest): Promise<$_model.BatchBindTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchBindTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchDeleteDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteDevicesResponse
   */
  async batchDeleteDevicesWithOptions(request: $_model.BatchDeleteDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteDevicesResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteDevicesResponse({}));
  }

  /**
   * @param request - BatchDeleteDevicesRequest
   * @returns BatchDeleteDevicesResponse
   */
  async batchDeleteDevices(request: $_model.BatchDeleteDevicesRequest): Promise<$_model.BatchDeleteDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchDeleteVsDomainConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteVsDomainConfigsResponse
   */
  async batchDeleteVsDomainConfigsWithOptions(request: $_model.BatchDeleteVsDomainConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteVsDomainConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
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
      action: "BatchDeleteVsDomainConfigs",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteVsDomainConfigsResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteVsDomainConfigsResponse({}));
  }

  /**
   * @param request - BatchDeleteVsDomainConfigsRequest
   * @returns BatchDeleteVsDomainConfigsResponse
   */
  async batchDeleteVsDomainConfigs(request: $_model.BatchDeleteVsDomainConfigsRequest): Promise<$_model.BatchDeleteVsDomainConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteVsDomainConfigsWithOptions(request, runtime);
  }

  /**
   * @param request - BatchForbidVsStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchForbidVsStreamResponse
   */
  async batchForbidVsStreamWithOptions(request: $_model.BatchForbidVsStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchForbidVsStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.controlStreamAction)) {
      query["ControlStreamAction"] = request.controlStreamAction;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.liveStreamType)) {
      query["LiveStreamType"] = request.liveStreamType;
    }

    if (!$dara.isNull(request.oneshot)) {
      query["Oneshot"] = request.oneshot;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resumeTime)) {
      query["ResumeTime"] = request.resumeTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchForbidVsStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchForbidVsStreamResponse>(await this.callApi(params, req, runtime), new $_model.BatchForbidVsStreamResponse({}));
  }

  /**
   * @param request - BatchForbidVsStreamRequest
   * @returns BatchForbidVsStreamResponse
   */
  async batchForbidVsStream(request: $_model.BatchForbidVsStreamRequest): Promise<$_model.BatchForbidVsStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchForbidVsStreamWithOptions(request, runtime);
  }

  /**
   * @param request - BatchResumeVsStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchResumeVsStreamResponse
   */
  async batchResumeVsStreamWithOptions(request: $_model.BatchResumeVsStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchResumeVsStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.controlStreamAction)) {
      query["ControlStreamAction"] = request.controlStreamAction;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.liveStreamType)) {
      query["LiveStreamType"] = request.liveStreamType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchResumeVsStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchResumeVsStreamResponse>(await this.callApi(params, req, runtime), new $_model.BatchResumeVsStreamResponse({}));
  }

  /**
   * @param request - BatchResumeVsStreamRequest
   * @returns BatchResumeVsStreamResponse
   */
  async batchResumeVsStream(request: $_model.BatchResumeVsStreamRequest): Promise<$_model.BatchResumeVsStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchResumeVsStreamWithOptions(request, runtime);
  }

  /**
   * @param request - BatchSetVsDomainConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSetVsDomainConfigsResponse
   */
  async batchSetVsDomainConfigsWithOptions(request: $_model.BatchSetVsDomainConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchSetVsDomainConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
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
      action: "BatchSetVsDomainConfigs",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchSetVsDomainConfigsResponse>(await this.callApi(params, req, runtime), new $_model.BatchSetVsDomainConfigsResponse({}));
  }

  /**
   * @param request - BatchSetVsDomainConfigsRequest
   * @returns BatchSetVsDomainConfigsResponse
   */
  async batchSetVsDomainConfigs(request: $_model.BatchSetVsDomainConfigsRequest): Promise<$_model.BatchSetVsDomainConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchSetVsDomainConfigsWithOptions(request, runtime);
  }

  /**
   * @param request - BatchStartDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchStartDevicesResponse
   */
  async batchStartDevicesWithOptions(request: $_model.BatchStartDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchStartDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchStartDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchStartDevicesResponse>(await this.callApi(params, req, runtime), new $_model.BatchStartDevicesResponse({}));
  }

  /**
   * @param request - BatchStartDevicesRequest
   * @returns BatchStartDevicesResponse
   */
  async batchStartDevices(request: $_model.BatchStartDevicesRequest): Promise<$_model.BatchStartDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchStartDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchStartStreamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchStartStreamsResponse
   */
  async batchStartStreamsWithOptions(request: $_model.BatchStartStreamsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchStartStreamsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchStartStreams",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchStartStreamsResponse>(await this.callApi(params, req, runtime), new $_model.BatchStartStreamsResponse({}));
  }

  /**
   * @param request - BatchStartStreamsRequest
   * @returns BatchStartStreamsResponse
   */
  async batchStartStreams(request: $_model.BatchStartStreamsRequest): Promise<$_model.BatchStartStreamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchStartStreamsWithOptions(request, runtime);
  }

  /**
   * @param request - BatchStopDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchStopDevicesResponse
   */
  async batchStopDevicesWithOptions(request: $_model.BatchStopDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchStopDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
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
      action: "BatchStopDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchStopDevicesResponse>(await this.callApi(params, req, runtime), new $_model.BatchStopDevicesResponse({}));
  }

  /**
   * @param request - BatchStopDevicesRequest
   * @returns BatchStopDevicesResponse
   */
  async batchStopDevices(request: $_model.BatchStopDevicesRequest): Promise<$_model.BatchStopDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchStopDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchStopStreamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchStopStreamsResponse
   */
  async batchStopStreamsWithOptions(request: $_model.BatchStopStreamsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchStopStreamsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
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
      action: "BatchStopStreams",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchStopStreamsResponse>(await this.callApi(params, req, runtime), new $_model.BatchStopStreamsResponse({}));
  }

  /**
   * @param request - BatchStopStreamsRequest
   * @returns BatchStopStreamsResponse
   */
  async batchStopStreams(request: $_model.BatchStopStreamsRequest): Promise<$_model.BatchStopStreamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchStopStreamsWithOptions(request, runtime);
  }

  /**
   * @param request - BatchUnbindDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUnbindDirectoriesResponse
   */
  async batchUnbindDirectoriesWithOptions(request: $_model.BatchUnbindDirectoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUnbindDirectoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUnbindDirectories",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchUnbindDirectoriesResponse>(await this.callApi(params, req, runtime), new $_model.BatchUnbindDirectoriesResponse({}));
  }

  /**
   * @param request - BatchUnbindDirectoriesRequest
   * @returns BatchUnbindDirectoriesResponse
   */
  async batchUnbindDirectories(request: $_model.BatchUnbindDirectoriesRequest): Promise<$_model.BatchUnbindDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUnbindDirectoriesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchUnbindParentPlatformDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUnbindParentPlatformDevicesResponse
   */
  async batchUnbindParentPlatformDevicesWithOptions(request: $_model.BatchUnbindParentPlatformDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUnbindParentPlatformDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parentPlatformId)) {
      query["ParentPlatformId"] = request.parentPlatformId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUnbindParentPlatformDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchUnbindParentPlatformDevicesResponse>(await this.callApi(params, req, runtime), new $_model.BatchUnbindParentPlatformDevicesResponse({}));
  }

  /**
   * @param request - BatchUnbindParentPlatformDevicesRequest
   * @returns BatchUnbindParentPlatformDevicesResponse
   */
  async batchUnbindParentPlatformDevices(request: $_model.BatchUnbindParentPlatformDevicesRequest): Promise<$_model.BatchUnbindParentPlatformDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUnbindParentPlatformDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchUnbindPurchasedDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUnbindPurchasedDevicesResponse
   */
  async batchUnbindPurchasedDevicesWithOptions(request: $_model.BatchUnbindPurchasedDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUnbindPurchasedDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUnbindPurchasedDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchUnbindPurchasedDevicesResponse>(await this.callApi(params, req, runtime), new $_model.BatchUnbindPurchasedDevicesResponse({}));
  }

  /**
   * @param request - BatchUnbindPurchasedDevicesRequest
   * @returns BatchUnbindPurchasedDevicesResponse
   */
  async batchUnbindPurchasedDevices(request: $_model.BatchUnbindPurchasedDevicesRequest): Promise<$_model.BatchUnbindPurchasedDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUnbindPurchasedDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchUnbindTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUnbindTemplateResponse
   */
  async batchUnbindTemplateWithOptions(request: $_model.BatchUnbindTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUnbindTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUnbindTemplate",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchUnbindTemplateResponse>(await this.callApi(params, req, runtime), new $_model.BatchUnbindTemplateResponse({}));
  }

  /**
   * @param request - BatchUnbindTemplateRequest
   * @returns BatchUnbindTemplateResponse
   */
  async batchUnbindTemplate(request: $_model.BatchUnbindTemplateRequest): Promise<$_model.BatchUnbindTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUnbindTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - BatchUnbindTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUnbindTemplatesResponse
   */
  async batchUnbindTemplatesWithOptions(request: $_model.BatchUnbindTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUnbindTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUnbindTemplates",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchUnbindTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.BatchUnbindTemplatesResponse({}));
  }

  /**
   * @param request - BatchUnbindTemplatesRequest
   * @returns BatchUnbindTemplatesResponse
   */
  async batchUnbindTemplates(request: $_model.BatchUnbindTemplatesRequest): Promise<$_model.BatchUnbindTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUnbindTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request - BindDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindDirectoryResponse
   */
  async bindDirectoryWithOptions(request: $_model.BindDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindDirectory",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.BindDirectoryResponse({}));
  }

  /**
   * @param request - BindDirectoryRequest
   * @returns BindDirectoryResponse
   */
  async bindDirectory(request: $_model.BindDirectoryRequest): Promise<$_model.BindDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindDirectoryWithOptions(request, runtime);
  }

  /**
   * @param request - BindParentPlatformDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindParentPlatformDeviceResponse
   */
  async bindParentPlatformDeviceWithOptions(request: $_model.BindParentPlatformDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindParentPlatformDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parentPlatformId)) {
      query["ParentPlatformId"] = request.parentPlatformId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindParentPlatformDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindParentPlatformDeviceResponse>(await this.callApi(params, req, runtime), new $_model.BindParentPlatformDeviceResponse({}));
  }

  /**
   * @param request - BindParentPlatformDeviceRequest
   * @returns BindParentPlatformDeviceResponse
   */
  async bindParentPlatformDevice(request: $_model.BindParentPlatformDeviceRequest): Promise<$_model.BindParentPlatformDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindParentPlatformDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - BindPurchasedDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindPurchasedDeviceResponse
   */
  async bindPurchasedDeviceWithOptions(request: $_model.BindPurchasedDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindPurchasedDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindPurchasedDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindPurchasedDeviceResponse>(await this.callApi(params, req, runtime), new $_model.BindPurchasedDeviceResponse({}));
  }

  /**
   * @param request - BindPurchasedDeviceRequest
   * @returns BindPurchasedDeviceResponse
   */
  async bindPurchasedDevice(request: $_model.BindPurchasedDeviceRequest): Promise<$_model.BindPurchasedDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindPurchasedDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - BindTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindTemplateResponse
   */
  async bindTemplateWithOptions(request: $_model.BindTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applyAll)) {
      query["ApplyAll"] = request.applyAll;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.replace)) {
      query["Replace"] = request.replace;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindTemplate",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindTemplateResponse>(await this.callApi(params, req, runtime), new $_model.BindTemplateResponse({}));
  }

  /**
   * @param request - BindTemplateRequest
   * @returns BindTemplateResponse
   */
  async bindTemplate(request: $_model.BindTemplateRequest): Promise<$_model.BindTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - ContinuousAdjustRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinuousAdjustResponse
   */
  async continuousAdjustWithOptions(request: $_model.ContinuousAdjustRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ContinuousAdjustResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.focus)) {
      query["Focus"] = request.focus;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.iris)) {
      query["Iris"] = request.iris;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContinuousAdjust",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ContinuousAdjustResponse>(await this.callApi(params, req, runtime), new $_model.ContinuousAdjustResponse({}));
  }

  /**
   * @param request - ContinuousAdjustRequest
   * @returns ContinuousAdjustResponse
   */
  async continuousAdjust(request: $_model.ContinuousAdjustRequest): Promise<$_model.ContinuousAdjustResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.continuousAdjustWithOptions(request, runtime);
  }

  /**
   * @param request - ContinuousMoveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinuousMoveResponse
   */
  async continuousMoveWithOptions(request: $_model.ContinuousMoveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ContinuousMoveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pan)) {
      query["Pan"] = request.pan;
    }

    if (!$dara.isNull(request.tilt)) {
      query["Tilt"] = request.tilt;
    }

    if (!$dara.isNull(request.zoom)) {
      query["Zoom"] = request.zoom;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContinuousMove",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ContinuousMoveResponse>(await this.callApi(params, req, runtime), new $_model.ContinuousMoveResponse({}));
  }

  /**
   * @param request - ContinuousMoveRequest
   * @returns ContinuousMoveResponse
   */
  async continuousMove(request: $_model.ContinuousMoveRequest): Promise<$_model.ContinuousMoveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.continuousMoveWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeviceResponse
   */
  async createDeviceWithOptions(request: $_model.CreateDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmMethod)) {
      query["AlarmMethod"] = request.alarmMethod;
    }

    if (!$dara.isNull(request.autoDirectory)) {
      query["AutoDirectory"] = request.autoDirectory;
    }

    if (!$dara.isNull(request.autoPos)) {
      query["AutoPos"] = request.autoPos;
    }

    if (!$dara.isNull(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.dsn)) {
      query["Dsn"] = request.dsn;
    }

    if (!$dara.isNull(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.latitude)) {
      query["Latitude"] = request.latitude;
    }

    if (!$dara.isNull(request.longitude)) {
      query["Longitude"] = request.longitude;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.posInterval)) {
      query["PosInterval"] = request.posInterval;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDeviceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDeviceResponse({}));
  }

  /**
   * @param request - CreateDeviceRequest
   * @returns CreateDeviceResponse
   */
  async createDevice(request: $_model.CreateDeviceRequest): Promise<$_model.CreateDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDeviceAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeviceAlarmResponse
   */
  async createDeviceAlarmWithOptions(request: $_model.CreateDeviceAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDeviceAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarm)) {
      query["Alarm"] = request.alarm;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.subAlarm)) {
      query["SubAlarm"] = request.subAlarm;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDeviceAlarm",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDeviceAlarmResponse>(await this.callApi(params, req, runtime), new $_model.CreateDeviceAlarmResponse({}));
  }

  /**
   * @param request - CreateDeviceAlarmRequest
   * @returns CreateDeviceAlarmResponse
   */
  async createDeviceAlarm(request: $_model.CreateDeviceAlarmRequest): Promise<$_model.CreateDeviceAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDeviceAlarmWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDirectoryResponse
   */
  async createDirectoryWithOptions(request: $_model.CreateDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDirectory",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateDirectoryResponse({}));
  }

  /**
   * @param request - CreateDirectoryRequest
   * @returns CreateDirectoryResponse
   */
  async createDirectory(request: $_model.CreateDirectoryRequest): Promise<$_model.CreateDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDirectoryWithOptions(request, runtime);
  }

  /**
   * @param request - CreateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupResponse
   */
  async createGroupWithOptions(request: $_model.CreateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.app)) {
      query["App"] = request.app;
    }

    if (!$dara.isNull(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.inProtocol)) {
      query["InProtocol"] = request.inProtocol;
    }

    if (!$dara.isNull(request.lazyPull)) {
      query["LazyPull"] = request.lazyPull;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.outProtocol)) {
      query["OutProtocol"] = request.outProtocol;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    if (!$dara.isNull(request.pushDomain)) {
      query["PushDomain"] = request.pushDomain;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroup",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateGroupResponse({}));
  }

  /**
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: $_model.CreateGroupRequest): Promise<$_model.CreateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  /**
   * @param request - CreateParentPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateParentPlatformResponse
   */
  async createParentPlatformWithOptions(request: $_model.CreateParentPlatformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateParentPlatformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!$dara.isNull(request.clientAuth)) {
      query["ClientAuth"] = request.clientAuth;
    }

    if (!$dara.isNull(request.clientPassword)) {
      query["ClientPassword"] = request.clientPassword;
    }

    if (!$dara.isNull(request.clientUsername)) {
      query["ClientUsername"] = request.clientUsername;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateParentPlatform",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateParentPlatformResponse>(await this.callApi(params, req, runtime), new $_model.CreateParentPlatformResponse({}));
  }

  /**
   * @param request - CreateParentPlatformRequest
   * @returns CreateParentPlatformResponse
   */
  async createParentPlatform(request: $_model.CreateParentPlatformRequest): Promise<$_model.CreateParentPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createParentPlatformWithOptions(request, runtime);
  }

  /**
   * 创建云渲染数据包
   * 
   * @param request - CreateRenderingDataPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRenderingDataPackageResponse
   */
  async createRenderingDataPackageWithOptions(request: $_model.CreateRenderingDataPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRenderingDataPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRenderingDataPackage",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRenderingDataPackageResponse>(await this.callApi(params, req, runtime), new $_model.CreateRenderingDataPackageResponse({}));
  }

  /**
   * 创建云渲染数据包
   * 
   * @param request - CreateRenderingDataPackageRequest
   * @returns CreateRenderingDataPackageResponse
   */
  async createRenderingDataPackage(request: $_model.CreateRenderingDataPackageRequest): Promise<$_model.CreateRenderingDataPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRenderingDataPackageWithOptions(request, runtime);
  }

  /**
   * 申请云渲染资源实例
   * 
   * @param tmpReq - CreateRenderingInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRenderingInstanceResponse
   */
  async createRenderingInstanceWithOptions(tmpReq: $_model.CreateRenderingInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRenderingInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateRenderingInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clientInfo)) {
      request.clientInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientInfo, "ClientInfo", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.clientInfoShrink)) {
      query["ClientInfo"] = request.clientInfoShrink;
    }

    if (!$dara.isNull(request.instanceBillingCycle)) {
      query["InstanceBillingCycle"] = request.instanceBillingCycle;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.internetMaxBandwidth)) {
      query["InternetMaxBandwidth"] = request.internetMaxBandwidth;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.renderingSpec)) {
      query["RenderingSpec"] = request.renderingSpec;
    }

    if (!$dara.isNull(request.storageSize)) {
      query["StorageSize"] = request.storageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRenderingInstance",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRenderingInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateRenderingInstanceResponse({}));
  }

  /**
   * 申请云渲染资源实例
   * 
   * @param request - CreateRenderingInstanceRequest
   * @returns CreateRenderingInstanceResponse
   */
  async createRenderingInstance(request: $_model.CreateRenderingInstanceRequest): Promise<$_model.CreateRenderingInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * 创建自定义网关
   * 
   * @param request - CreateRenderingInstanceGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRenderingInstanceGatewayResponse
   */
  async createRenderingInstanceGatewayWithOptions(request: $_model.CreateRenderingInstanceGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRenderingInstanceGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.gatewayInstanceId)) {
      query["GatewayInstanceId"] = request.gatewayInstanceId;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRenderingInstanceGateway",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRenderingInstanceGatewayResponse>(await this.callApi(params, req, runtime), new $_model.CreateRenderingInstanceGatewayResponse({}));
  }

  /**
   * 创建自定义网关
   * 
   * @param request - CreateRenderingInstanceGatewayRequest
   * @returns CreateRenderingInstanceGatewayResponse
   */
  async createRenderingInstanceGateway(request: $_model.CreateRenderingInstanceGatewayRequest): Promise<$_model.CreateRenderingInstanceGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRenderingInstanceGatewayWithOptions(request, runtime);
  }

  /**
   * 创建一个新的云应用服务项目，并设置相关属性。
   * 
   * @param tmpReq - CreateRenderingProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRenderingProjectResponse
   */
  async createRenderingProjectWithOptions(tmpReq: $_model.CreateRenderingProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRenderingProjectResponse> {
    tmpReq.validate();
    let request = new $_model.CreateRenderingProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sessionAttribs)) {
      request.sessionAttribsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sessionAttribs, "SessionAttribs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sessionAttribsShrink)) {
      query["SessionAttribs"] = request.sessionAttribsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRenderingProject",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRenderingProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateRenderingProjectResponse({}));
  }

  /**
   * 创建一个新的云应用服务项目，并设置相关属性。
   * 
   * @param request - CreateRenderingProjectRequest
   * @returns CreateRenderingProjectResponse
   */
  async createRenderingProject(request: $_model.CreateRenderingProjectRequest): Promise<$_model.CreateRenderingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRenderingProjectWithOptions(request, runtime);
  }

  /**
   * @param request - CreateStreamSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStreamSnapshotResponse
   */
  async createStreamSnapshotWithOptions(request: $_model.CreateStreamSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStreamSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.location)) {
      query["Location"] = request.location;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStreamSnapshot",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStreamSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.CreateStreamSnapshotResponse({}));
  }

  /**
   * @param request - CreateStreamSnapshotRequest
   * @returns CreateStreamSnapshotResponse
   */
  async createStreamSnapshot(request: $_model.CreateStreamSnapshotRequest): Promise<$_model.CreateStreamSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStreamSnapshotWithOptions(request, runtime);
  }

  /**
   * @param request - CreateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateResponse
   */
  async createTemplateWithOptions(request: $_model.CreateTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileFormat)) {
      query["FileFormat"] = request.fileFormat;
    }

    if (!$dara.isNull(request.flv)) {
      query["Flv"] = request.flv;
    }

    if (!$dara.isNull(request.hlsM3u8)) {
      query["HlsM3u8"] = request.hlsM3u8;
    }

    if (!$dara.isNull(request.hlsTs)) {
      query["HlsTs"] = request.hlsTs;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.jpgOnDemand)) {
      query["JpgOnDemand"] = request.jpgOnDemand;
    }

    if (!$dara.isNull(request.jpgOverwrite)) {
      query["JpgOverwrite"] = request.jpgOverwrite;
    }

    if (!$dara.isNull(request.jpgSequence)) {
      query["JpgSequence"] = request.jpgSequence;
    }

    if (!$dara.isNull(request.mp4)) {
      query["Mp4"] = request.mp4;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    if (!$dara.isNull(request.ossFilePrefix)) {
      query["OssFilePrefix"] = request.ossFilePrefix;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.retention)) {
      query["Retention"] = request.retention;
    }

    if (!$dara.isNull(request.transConfigsJSON)) {
      query["TransConfigsJSON"] = request.transConfigsJSON;
    }

    if (!$dara.isNull(request.trigger)) {
      query["Trigger"] = request.trigger;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTemplate",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateTemplateResponse({}));
  }

  /**
   * @param request - CreateTemplateRequest
   * @returns CreateTemplateResponse
   */
  async createTemplate(request: $_model.CreateTemplateRequest): Promise<$_model.CreateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  /**
   * 删除云应用
   * 
   * @param request - DeleteCloudAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudAppResponse
   */
  async deleteCloudAppWithOptions(request: $_model.DeleteCloudAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloudAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudApp",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloudAppResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloudAppResponse({}));
  }

  /**
   * 删除云应用
   * 
   * @param request - DeleteCloudAppRequest
   * @returns DeleteCloudAppResponse
   */
  async deleteCloudApp(request: $_model.DeleteCloudAppRequest): Promise<$_model.DeleteCloudAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudAppWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeviceResponse
   */
  async deleteDeviceWithOptions(request: $_model.DeleteDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDeviceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDeviceResponse({}));
  }

  /**
   * @param request - DeleteDeviceRequest
   * @returns DeleteDeviceResponse
   */
  async deleteDevice(request: $_model.DeleteDeviceRequest): Promise<$_model.DeleteDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDirectoryResponse
   */
  async deleteDirectoryWithOptions(request: $_model.DeleteDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDirectory",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDirectoryResponse({}));
  }

  /**
   * @param request - DeleteDirectoryRequest
   * @returns DeleteDirectoryResponse
   */
  async deleteDirectory(request: $_model.DeleteDirectoryRequest): Promise<$_model.DeleteDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDirectoryWithOptions(request, runtime);
  }

  /**
   * 删除文件对象。
   * 
   * @param request - DeleteFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFileResponse
   */
  async deleteFileWithOptions(request: $_model.DeleteFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFile",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFileResponse({}));
  }

  /**
   * 删除文件对象。
   * 
   * @param request - DeleteFileRequest
   * @returns DeleteFileResponse
   */
  async deleteFile(request: $_model.DeleteFileRequest): Promise<$_model.DeleteFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFileWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupResponse
   */
  async deleteGroupWithOptions(request: $_model.DeleteGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGroup",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGroupResponse({}));
  }

  /**
   * @param request - DeleteGroupRequest
   * @returns DeleteGroupResponse
   */
  async deleteGroup(request: $_model.DeleteGroupRequest): Promise<$_model.DeleteGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteParentPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteParentPlatformResponse
   */
  async deleteParentPlatformWithOptions(request: $_model.DeleteParentPlatformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteParentPlatformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteParentPlatform",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteParentPlatformResponse>(await this.callApi(params, req, runtime), new $_model.DeleteParentPlatformResponse({}));
  }

  /**
   * @param request - DeleteParentPlatformRequest
   * @returns DeleteParentPlatformResponse
   */
  async deleteParentPlatform(request: $_model.DeleteParentPlatformRequest): Promise<$_model.DeleteParentPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteParentPlatformWithOptions(request, runtime);
  }

  /**
   * @param request - DeletePresetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePresetResponse
   */
  async deletePresetWithOptions(request: $_model.DeletePresetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePresetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.presetId)) {
      query["PresetId"] = request.presetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePreset",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePresetResponse>(await this.callApi(params, req, runtime), new $_model.DeletePresetResponse({}));
  }

  /**
   * @param request - DeletePresetRequest
   * @returns DeletePresetResponse
   */
  async deletePreset(request: $_model.DeletePresetRequest): Promise<$_model.DeletePresetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePresetWithOptions(request, runtime);
  }

  /**
   * 删除公钥信息
   * 
   * @param request - DeletePublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePublicKeyResponse
   */
  async deletePublicKeyWithOptions(request: $_model.DeletePublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePublicKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePublicKey",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePublicKeyResponse>(await this.callApi(params, req, runtime), new $_model.DeletePublicKeyResponse({}));
  }

  /**
   * 删除公钥信息
   * 
   * @param request - DeletePublicKeyRequest
   * @returns DeletePublicKeyResponse
   */
  async deletePublicKey(request: $_model.DeletePublicKeyRequest): Promise<$_model.DeletePublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePublicKeyWithOptions(request, runtime);
  }

  /**
   * 删除云渲染实例配置参数
   * 
   * @param tmpReq - DeleteRenderingInstanceConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRenderingInstanceConfigurationResponse
   */
  async deleteRenderingInstanceConfigurationWithOptions(tmpReq: $_model.DeleteRenderingInstanceConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRenderingInstanceConfigurationResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteRenderingInstanceConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configuration)) {
      request.configurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configuration, "Configuration", "json");
    }

    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configurationShrink)) {
      body["Configuration"] = request.configurationShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRenderingInstanceConfiguration",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRenderingInstanceConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRenderingInstanceConfigurationResponse({}));
  }

  /**
   * 删除云渲染实例配置参数
   * 
   * @param request - DeleteRenderingInstanceConfigurationRequest
   * @returns DeleteRenderingInstanceConfigurationResponse
   */
  async deleteRenderingInstanceConfiguration(request: $_model.DeleteRenderingInstanceConfigurationRequest): Promise<$_model.DeleteRenderingInstanceConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRenderingInstanceConfigurationWithOptions(request, runtime);
  }

  /**
   * 删除自定义网关
   * 
   * @param request - DeleteRenderingInstanceGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRenderingInstanceGatewayResponse
   */
  async deleteRenderingInstanceGatewayWithOptions(request: $_model.DeleteRenderingInstanceGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRenderingInstanceGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRenderingInstanceGateway",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRenderingInstanceGatewayResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRenderingInstanceGatewayResponse({}));
  }

  /**
   * 删除自定义网关
   * 
   * @param request - DeleteRenderingInstanceGatewayRequest
   * @returns DeleteRenderingInstanceGatewayResponse
   */
  async deleteRenderingInstanceGateway(request: $_model.DeleteRenderingInstanceGatewayRequest): Promise<$_model.DeleteRenderingInstanceGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRenderingInstanceGatewayWithOptions(request, runtime);
  }

  /**
   * 清除实例设置
   * 
   * @param tmpReq - DeleteRenderingInstanceSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRenderingInstanceSettingsResponse
   */
  async deleteRenderingInstanceSettingsWithOptions(tmpReq: $_model.DeleteRenderingInstanceSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRenderingInstanceSettingsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteRenderingInstanceSettingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.attributeNames)) {
      request.attributeNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attributeNames, "AttributeNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.attributeNamesShrink)) {
      query["AttributeNames"] = request.attributeNamesShrink;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRenderingInstanceSettings",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRenderingInstanceSettingsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRenderingInstanceSettingsResponse({}));
  }

  /**
   * 清除实例设置
   * 
   * @param request - DeleteRenderingInstanceSettingsRequest
   * @returns DeleteRenderingInstanceSettingsResponse
   */
  async deleteRenderingInstanceSettings(request: $_model.DeleteRenderingInstanceSettingsRequest): Promise<$_model.DeleteRenderingInstanceSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRenderingInstanceSettingsWithOptions(request, runtime);
  }

  /**
   * 删除一个云应用服务项目，有在线会话等业务调度数据的项目不允许删除。
   * 
   * @param request - DeleteRenderingProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRenderingProjectResponse
   */
  async deleteRenderingProjectWithOptions(request: $_model.DeleteRenderingProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRenderingProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRenderingProject",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRenderingProjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRenderingProjectResponse({}));
  }

  /**
   * 删除一个云应用服务项目，有在线会话等业务调度数据的项目不允许删除。
   * 
   * @param request - DeleteRenderingProjectRequest
   * @returns DeleteRenderingProjectResponse
   */
  async deleteRenderingProject(request: $_model.DeleteRenderingProjectRequest): Promise<$_model.DeleteRenderingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRenderingProjectWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(request: $_model.DeleteTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTemplate",
      version: "2018-12-12",
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
   * @param request - DeleteTemplateRequest
   * @returns DeleteTemplateResponse
   */
  async deleteTemplate(request: $_model.DeleteTemplateRequest): Promise<$_model.DeleteTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteVsPullStreamInfoConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVsPullStreamInfoConfigResponse
   */
  async deleteVsPullStreamInfoConfigWithOptions(request: $_model.DeleteVsPullStreamInfoConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVsPullStreamInfoConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVsPullStreamInfoConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVsPullStreamInfoConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVsPullStreamInfoConfigResponse({}));
  }

  /**
   * @param request - DeleteVsPullStreamInfoConfigRequest
   * @returns DeleteVsPullStreamInfoConfigResponse
   */
  async deleteVsPullStreamInfoConfig(request: $_model.DeleteVsPullStreamInfoConfigRequest): Promise<$_model.DeleteVsPullStreamInfoConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVsPullStreamInfoConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteVsStreamsNotifyUrlConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVsStreamsNotifyUrlConfigResponse
   */
  async deleteVsStreamsNotifyUrlConfigWithOptions(request: $_model.DeleteVsStreamsNotifyUrlConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVsStreamsNotifyUrlConfigResponse> {
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
      action: "DeleteVsStreamsNotifyUrlConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVsStreamsNotifyUrlConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVsStreamsNotifyUrlConfigResponse({}));
  }

  /**
   * @param request - DeleteVsStreamsNotifyUrlConfigRequest
   * @returns DeleteVsStreamsNotifyUrlConfigResponse
   */
  async deleteVsStreamsNotifyUrlConfig(request: $_model.DeleteVsStreamsNotifyUrlConfigRequest): Promise<$_model.DeleteVsStreamsNotifyUrlConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVsStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeAccountStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountStatResponse
   */
  async describeAccountStatWithOptions(request: $_model.DescribeAccountStatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountStatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccountStat",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccountStatResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccountStatResponse({}));
  }

  /**
   * @param request - DescribeAccountStatRequest
   * @returns DescribeAccountStatResponse
   */
  async describeAccountStat(request: $_model.DescribeAccountStatRequest): Promise<$_model.DescribeAccountStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountStatWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeviceResponse
   */
  async describeDeviceWithOptions(request: $_model.DescribeDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.includeDirectory)) {
      query["IncludeDirectory"] = request.includeDirectory;
    }

    if (!$dara.isNull(request.includeStats)) {
      query["IncludeStats"] = request.includeStats;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeviceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeviceResponse({}));
  }

  /**
   * @param request - DescribeDeviceRequest
   * @returns DescribeDeviceResponse
   */
  async describeDevice(request: $_model.DescribeDeviceRequest): Promise<$_model.DescribeDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDeviceChannelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeviceChannelsResponse
   */
  async describeDeviceChannelsWithOptions(request: $_model.DescribeDeviceChannelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeviceChannelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeviceChannels",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeviceChannelsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeviceChannelsResponse({}));
  }

  /**
   * @param request - DescribeDeviceChannelsRequest
   * @returns DescribeDeviceChannelsResponse
   */
  async describeDeviceChannels(request: $_model.DescribeDeviceChannelsRequest): Promise<$_model.DescribeDeviceChannelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeviceChannelsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDeviceGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeviceGatewayResponse
   */
  async describeDeviceGatewayWithOptions(request: $_model.DescribeDeviceGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeviceGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeviceGateway",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeviceGatewayResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeviceGatewayResponse({}));
  }

  /**
   * @param request - DescribeDeviceGatewayRequest
   * @returns DescribeDeviceGatewayResponse
   */
  async describeDeviceGateway(request: $_model.DescribeDeviceGatewayRequest): Promise<$_model.DescribeDeviceGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeviceGatewayWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDeviceURLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeviceURLResponse
   */
  async describeDeviceURLWithOptions(request: $_model.DescribeDeviceURLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeviceURLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auth)) {
      query["Auth"] = request.auth;
    }

    if (!$dara.isNull(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.outProtocol)) {
      query["OutProtocol"] = request.outProtocol;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.stream)) {
      query["Stream"] = request.stream;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeviceURL",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeviceURLResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeviceURLResponse({}));
  }

  /**
   * @param request - DescribeDeviceURLRequest
   * @returns DescribeDeviceURLResponse
   */
  async describeDeviceURL(request: $_model.DescribeDeviceURLRequest): Promise<$_model.DescribeDeviceURLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeviceURLWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDevicesResponse
   */
  async describeDevicesWithOptions(request: $_model.DescribeDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.dsn)) {
      query["Dsn"] = request.dsn;
    }

    if (!$dara.isNull(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.includeDirectory)) {
      query["IncludeDirectory"] = request.includeDirectory;
    }

    if (!$dara.isNull(request.includeStats)) {
      query["IncludeStats"] = request.includeStats;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDevicesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDevicesResponse({}));
  }

  /**
   * @param request - DescribeDevicesRequest
   * @returns DescribeDevicesResponse
   */
  async describeDevices(request: $_model.DescribeDevicesRequest): Promise<$_model.DescribeDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDirectoriesResponse
   */
  async describeDirectoriesWithOptions(request: $_model.DescribeDirectoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDirectoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.noPagination)) {
      query["NoPagination"] = request.noPagination;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDirectories",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDirectoriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDirectoriesResponse({}));
  }

  /**
   * @param request - DescribeDirectoriesRequest
   * @returns DescribeDirectoriesResponse
   */
  async describeDirectories(request: $_model.DescribeDirectoriesRequest): Promise<$_model.DescribeDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDirectoriesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDirectoryResponse
   */
  async describeDirectoryWithOptions(request: $_model.DescribeDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDirectory",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDirectoryResponse({}));
  }

  /**
   * @param request - DescribeDirectoryRequest
   * @returns DescribeDirectoryResponse
   */
  async describeDirectory(request: $_model.DescribeDirectoryRequest): Promise<$_model.DescribeDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDirectoryWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupResponse
   */
  async describeGroupWithOptions(request: $_model.DescribeGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.includeStats)) {
      query["IncludeStats"] = request.includeStats;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroup",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupResponse({}));
  }

  /**
   * @param request - DescribeGroupRequest
   * @returns DescribeGroupResponse
   */
  async describeGroup(request: $_model.DescribeGroupRequest): Promise<$_model.DescribeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupsResponse
   */
  async describeGroupsWithOptions(request: $_model.DescribeGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.inProtocol)) {
      query["InProtocol"] = request.inProtocol;
    }

    if (!$dara.isNull(request.includeStats)) {
      query["IncludeStats"] = request.includeStats;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroups",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupsResponse({}));
  }

  /**
   * @param request - DescribeGroupsRequest
   * @returns DescribeGroupsResponse
   */
  async describeGroups(request: $_model.DescribeGroupsRequest): Promise<$_model.DescribeGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeParentPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParentPlatformResponse
   */
  async describeParentPlatformWithOptions(request: $_model.DescribeParentPlatformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParentPlatformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParentPlatform",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeParentPlatformResponse>(await this.callApi(params, req, runtime), new $_model.DescribeParentPlatformResponse({}));
  }

  /**
   * @param request - DescribeParentPlatformRequest
   * @returns DescribeParentPlatformResponse
   */
  async describeParentPlatform(request: $_model.DescribeParentPlatformRequest): Promise<$_model.DescribeParentPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParentPlatformWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeParentPlatformDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParentPlatformDevicesResponse
   */
  async describeParentPlatformDevicesWithOptions(request: $_model.DescribeParentPlatformDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParentPlatformDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParentPlatformDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeParentPlatformDevicesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeParentPlatformDevicesResponse({}));
  }

  /**
   * @param request - DescribeParentPlatformDevicesRequest
   * @returns DescribeParentPlatformDevicesResponse
   */
  async describeParentPlatformDevices(request: $_model.DescribeParentPlatformDevicesRequest): Promise<$_model.DescribeParentPlatformDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParentPlatformDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeParentPlatformsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParentPlatformsResponse
   */
  async describeParentPlatformsWithOptions(request: $_model.DescribeParentPlatformsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParentPlatformsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParentPlatforms",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeParentPlatformsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeParentPlatformsResponse({}));
  }

  /**
   * @param request - DescribeParentPlatformsRequest
   * @returns DescribeParentPlatformsResponse
   */
  async describeParentPlatforms(request: $_model.DescribeParentPlatformsRequest): Promise<$_model.DescribeParentPlatformsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParentPlatformsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribePresetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePresetsResponse
   */
  async describePresetsWithOptions(request: $_model.DescribePresetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePresetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePresets",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePresetsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePresetsResponse({}));
  }

  /**
   * @param request - DescribePresetsRequest
   * @returns DescribePresetsResponse
   */
  async describePresets(request: $_model.DescribePresetsRequest): Promise<$_model.DescribePresetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePresetsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribePublishStreamStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePublishStreamStatusResponse
   */
  async describePublishStreamStatusWithOptions(request: $_model.DescribePublishStreamStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePublishStreamStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePublishStreamStatus",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePublishStreamStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribePublishStreamStatusResponse({}));
  }

  /**
   * @param request - DescribePublishStreamStatusRequest
   * @returns DescribePublishStreamStatusResponse
   */
  async describePublishStreamStatus(request: $_model.DescribePublishStreamStatusRequest): Promise<$_model.DescribePublishStreamStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePublishStreamStatusWithOptions(request, runtime);
  }

  /**
   * @param request - DescribePurchasedDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePurchasedDeviceResponse
   */
  async describePurchasedDeviceWithOptions(request: $_model.DescribePurchasedDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePurchasedDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePurchasedDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePurchasedDeviceResponse>(await this.callApi(params, req, runtime), new $_model.DescribePurchasedDeviceResponse({}));
  }

  /**
   * @param request - DescribePurchasedDeviceRequest
   * @returns DescribePurchasedDeviceResponse
   */
  async describePurchasedDevice(request: $_model.DescribePurchasedDeviceRequest): Promise<$_model.DescribePurchasedDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePurchasedDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribePurchasedDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePurchasedDevicesResponse
   */
  async describePurchasedDevicesWithOptions(request: $_model.DescribePurchasedDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePurchasedDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!$dara.isNull(request.subType)) {
      query["SubType"] = request.subType;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePurchasedDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePurchasedDevicesResponse>(await this.callApi(params, req, runtime), new $_model.DescribePurchasedDevicesResponse({}));
  }

  /**
   * @param request - DescribePurchasedDevicesRequest
   * @returns DescribePurchasedDevicesResponse
   */
  async describePurchasedDevices(request: $_model.DescribePurchasedDevicesRequest): Promise<$_model.DescribePurchasedDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePurchasedDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecordsResponse
   */
  async describeRecordsWithOptions(request: $_model.DescribeRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.privateBucket)) {
      query["PrivateBucket"] = request.privateBucket;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.streamId)) {
      query["StreamId"] = request.streamId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecords",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecordsResponse({}));
  }

  /**
   * @param request - DescribeRecordsRequest
   * @returns DescribeRecordsResponse
   */
  async describeRecords(request: $_model.DescribeRecordsRequest): Promise<$_model.DescribeRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecordsWithOptions(request, runtime);
  }

  /**
   * 查询云渲染实例详细信息。
   * 
   * @param request - DescribeRenderingInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRenderingInstanceResponse
   */
  async describeRenderingInstanceWithOptions(request: $_model.DescribeRenderingInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRenderingInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRenderingInstance",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRenderingInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRenderingInstanceResponse({}));
  }

  /**
   * 查询云渲染实例详细信息。
   * 
   * @param request - DescribeRenderingInstanceRequest
   * @returns DescribeRenderingInstanceResponse
   */
  async describeRenderingInstance(request: $_model.DescribeRenderingInstanceRequest): Promise<$_model.DescribeRenderingInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * 查询云渲染实例模块配置参数
   * 
   * @param tmpReq - DescribeRenderingInstanceConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRenderingInstanceConfigurationResponse
   */
  async describeRenderingInstanceConfigurationWithOptions(tmpReq: $_model.DescribeRenderingInstanceConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRenderingInstanceConfigurationResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeRenderingInstanceConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configuration)) {
      request.configurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configuration, "Configuration", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRenderingInstanceConfiguration",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRenderingInstanceConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRenderingInstanceConfigurationResponse({}));
  }

  /**
   * 查询云渲染实例模块配置参数
   * 
   * @param request - DescribeRenderingInstanceConfigurationRequest
   * @returns DescribeRenderingInstanceConfigurationResponse
   */
  async describeRenderingInstanceConfiguration(request: $_model.DescribeRenderingInstanceConfigurationRequest): Promise<$_model.DescribeRenderingInstanceConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRenderingInstanceConfigurationWithOptions(request, runtime);
  }

  /**
   * 查询实例配置
   * 
   * @param tmpReq - DescribeRenderingInstanceSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRenderingInstanceSettingsResponse
   */
  async describeRenderingInstanceSettingsWithOptions(tmpReq: $_model.DescribeRenderingInstanceSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRenderingInstanceSettingsResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeRenderingInstanceSettingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.attributeNames)) {
      request.attributeNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attributeNames, "AttributeNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.attributeNamesShrink)) {
      query["AttributeNames"] = request.attributeNamesShrink;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRenderingInstanceSettings",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRenderingInstanceSettingsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRenderingInstanceSettingsResponse({}));
  }

  /**
   * 查询实例配置
   * 
   * @param request - DescribeRenderingInstanceSettingsRequest
   * @returns DescribeRenderingInstanceSettingsResponse
   */
  async describeRenderingInstanceSettings(request: $_model.DescribeRenderingInstanceSettingsRequest): Promise<$_model.DescribeRenderingInstanceSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRenderingInstanceSettingsWithOptions(request, runtime);
  }

  /**
   * 输出会话的详情信息，包含关联的实例、网络出口等信息。
   * 
   * @param request - DescribeRenderingSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRenderingSessionResponse
   */
  async describeRenderingSessionWithOptions(request: $_model.DescribeRenderingSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRenderingSessionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRenderingSession",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRenderingSessionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRenderingSessionResponse({}));
  }

  /**
   * 输出会话的详情信息，包含关联的实例、网络出口等信息。
   * 
   * @param request - DescribeRenderingSessionRequest
   * @returns DescribeRenderingSessionResponse
   */
  async describeRenderingSession(request: $_model.DescribeRenderingSessionRequest): Promise<$_model.DescribeRenderingSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRenderingSessionWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStreamResponse
   */
  async describeStreamWithOptions(request: $_model.DescribeStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStreamResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStreamResponse({}));
  }

  /**
   * @param request - DescribeStreamRequest
   * @returns DescribeStreamResponse
   */
  async describeStream(request: $_model.DescribeStreamRequest): Promise<$_model.DescribeStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStreamWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeStreamURLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStreamURLResponse
   */
  async describeStreamURLWithOptions(request: $_model.DescribeStreamURLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStreamURLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auth)) {
      query["Auth"] = request.auth;
    }

    if (!$dara.isNull(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.outProtocol)) {
      query["OutProtocol"] = request.outProtocol;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.transcode)) {
      query["Transcode"] = request.transcode;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStreamURL",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStreamURLResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStreamURLResponse({}));
  }

  /**
   * @param request - DescribeStreamURLRequest
   * @returns DescribeStreamURLResponse
   */
  async describeStreamURL(request: $_model.DescribeStreamURLRequest): Promise<$_model.DescribeStreamURLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStreamURLWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeStreamVodListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStreamVodListResponse
   */
  async describeStreamVodListWithOptions(request: $_model.DescribeStreamVodListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStreamVodListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
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
      action: "DescribeStreamVodList",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStreamVodListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStreamVodListResponse({}));
  }

  /**
   * @param request - DescribeStreamVodListRequest
   * @returns DescribeStreamVodListResponse
   */
  async describeStreamVodList(request: $_model.DescribeStreamVodListRequest): Promise<$_model.DescribeStreamVodListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStreamVodListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeStreamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStreamsResponse
   */
  async describeStreamsWithOptions(request: $_model.DescribeStreamsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStreamsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.app)) {
      query["App"] = request.app;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStreams",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStreamsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStreamsResponse({}));
  }

  /**
   * @param request - DescribeStreamsRequest
   * @returns DescribeStreamsResponse
   */
  async describeStreams(request: $_model.DescribeStreamsRequest): Promise<$_model.DescribeStreamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStreamsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplateResponse
   */
  async describeTemplateWithOptions(request: $_model.DescribeTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTemplate",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTemplateResponse({}));
  }

  /**
   * @param request - DescribeTemplateRequest
   * @returns DescribeTemplateResponse
   */
  async describeTemplate(request: $_model.DescribeTemplateRequest): Promise<$_model.DescribeTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplatesResponse
   */
  async describeTemplatesWithOptions(request: $_model.DescribeTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTemplates",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTemplatesResponse({}));
  }

  /**
   * @param request - DescribeTemplatesRequest
   * @returns DescribeTemplatesResponse
   */
  async describeTemplates(request: $_model.DescribeTemplatesRequest): Promise<$_model.DescribeTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVodStreamURLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodStreamURLResponse
   */
  async describeVodStreamURLWithOptions(request: $_model.DescribeVodStreamURLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVodStreamURLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodStreamURL",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVodStreamURLResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVodStreamURLResponse({}));
  }

  /**
   * @param request - DescribeVodStreamURLRequest
   * @returns DescribeVodStreamURLResponse
   */
  async describeVodStreamURL(request: $_model.DescribeVodStreamURLRequest): Promise<$_model.DescribeVodStreamURLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodStreamURLWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsCertificateDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsCertificateDetailResponse
   */
  async describeVsCertificateDetailWithOptions(request: $_model.DescribeVsCertificateDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsCertificateDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsCertificateDetail",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsCertificateDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsCertificateDetailResponse({}));
  }

  /**
   * @param request - DescribeVsCertificateDetailRequest
   * @returns DescribeVsCertificateDetailResponse
   */
  async describeVsCertificateDetail(request: $_model.DescribeVsCertificateDetailRequest): Promise<$_model.DescribeVsCertificateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsCertificateDetailWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsCertificateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsCertificateListResponse
   */
  async describeVsCertificateListWithOptions(request: $_model.DescribeVsCertificateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsCertificateListResponse> {
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
      action: "DescribeVsCertificateList",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsCertificateListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsCertificateListResponse({}));
  }

  /**
   * @param request - DescribeVsCertificateListRequest
   * @returns DescribeVsCertificateListResponse
   */
  async describeVsCertificateList(request: $_model.DescribeVsCertificateListRequest): Promise<$_model.DescribeVsCertificateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsCertificateListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDevicesDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDevicesDataResponse
   */
  async describeVsDevicesDataWithOptions(request: $_model.DescribeVsDevicesDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsDevicesDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
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
      action: "DescribeVsDevicesData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsDevicesDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsDevicesDataResponse({}));
  }

  /**
   * @param request - DescribeVsDevicesDataRequest
   * @returns DescribeVsDevicesDataResponse
   */
  async describeVsDevicesData(request: $_model.DescribeVsDevicesDataRequest): Promise<$_model.DescribeVsDevicesDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDevicesDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainBpsDataResponse
   */
  async describeVsDomainBpsDataWithOptions(request: $_model.DescribeVsDomainBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsDomainBpsDataResponse> {
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
      action: "DescribeVsDomainBpsData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsDomainBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsDomainBpsDataResponse({}));
  }

  /**
   * @param request - DescribeVsDomainBpsDataRequest
   * @returns DescribeVsDomainBpsDataResponse
   */
  async describeVsDomainBpsData(request: $_model.DescribeVsDomainBpsDataRequest): Promise<$_model.DescribeVsDomainBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainBpsDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainCertificateInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainCertificateInfoResponse
   */
  async describeVsDomainCertificateInfoWithOptions(request: $_model.DescribeVsDomainCertificateInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsDomainCertificateInfoResponse> {
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
      action: "DescribeVsDomainCertificateInfo",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsDomainCertificateInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsDomainCertificateInfoResponse({}));
  }

  /**
   * @param request - DescribeVsDomainCertificateInfoRequest
   * @returns DescribeVsDomainCertificateInfoResponse
   */
  async describeVsDomainCertificateInfo(request: $_model.DescribeVsDomainCertificateInfoRequest): Promise<$_model.DescribeVsDomainCertificateInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainCertificateInfoWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainConfigsResponse
   */
  async describeVsDomainConfigsWithOptions(request: $_model.DescribeVsDomainConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsDomainConfigsResponse> {
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
      action: "DescribeVsDomainConfigs",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsDomainConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsDomainConfigsResponse({}));
  }

  /**
   * @param request - DescribeVsDomainConfigsRequest
   * @returns DescribeVsDomainConfigsResponse
   */
  async describeVsDomainConfigs(request: $_model.DescribeVsDomainConfigsRequest): Promise<$_model.DescribeVsDomainConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainConfigsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainDetailResponse
   */
  async describeVsDomainDetailWithOptions(request: $_model.DescribeVsDomainDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsDomainDetailResponse> {
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
      action: "DescribeVsDomainDetail",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsDomainDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsDomainDetailResponse({}));
  }

  /**
   * @param request - DescribeVsDomainDetailRequest
   * @returns DescribeVsDomainDetailResponse
   */
  async describeVsDomainDetail(request: $_model.DescribeVsDomainDetailRequest): Promise<$_model.DescribeVsDomainDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainDetailWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainPvDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainPvDataResponse
   */
  async describeVsDomainPvDataWithOptions(request: $_model.DescribeVsDomainPvDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsDomainPvDataResponse> {
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
      action: "DescribeVsDomainPvData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsDomainPvDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsDomainPvDataResponse({}));
  }

  /**
   * @param request - DescribeVsDomainPvDataRequest
   * @returns DescribeVsDomainPvDataResponse
   */
  async describeVsDomainPvData(request: $_model.DescribeVsDomainPvDataRequest): Promise<$_model.DescribeVsDomainPvDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainPvDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainPvUvDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainPvUvDataResponse
   */
  async describeVsDomainPvUvDataWithOptions(request: $_model.DescribeVsDomainPvUvDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsDomainPvUvDataResponse> {
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
      action: "DescribeVsDomainPvUvData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsDomainPvUvDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsDomainPvUvDataResponse({}));
  }

  /**
   * @param request - DescribeVsDomainPvUvDataRequest
   * @returns DescribeVsDomainPvUvDataResponse
   */
  async describeVsDomainPvUvData(request: $_model.DescribeVsDomainPvUvDataRequest): Promise<$_model.DescribeVsDomainPvUvDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainPvUvDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainRecordDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainRecordDataResponse
   */
  async describeVsDomainRecordDataWithOptions(request: $_model.DescribeVsDomainRecordDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsDomainRecordDataResponse> {
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
      action: "DescribeVsDomainRecordData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsDomainRecordDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsDomainRecordDataResponse({}));
  }

  /**
   * @param request - DescribeVsDomainRecordDataRequest
   * @returns DescribeVsDomainRecordDataResponse
   */
  async describeVsDomainRecordData(request: $_model.DescribeVsDomainRecordDataRequest): Promise<$_model.DescribeVsDomainRecordDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainRecordDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainRegionDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainRegionDataResponse
   */
  async describeVsDomainRegionDataWithOptions(request: $_model.DescribeVsDomainRegionDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsDomainRegionDataResponse> {
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
      action: "DescribeVsDomainRegionData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsDomainRegionDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsDomainRegionDataResponse({}));
  }

  /**
   * @param request - DescribeVsDomainRegionDataRequest
   * @returns DescribeVsDomainRegionDataResponse
   */
  async describeVsDomainRegionData(request: $_model.DescribeVsDomainRegionDataRequest): Promise<$_model.DescribeVsDomainRegionDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainRegionDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainReqBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainReqBpsDataResponse
   */
  async describeVsDomainReqBpsDataWithOptions(request: $_model.DescribeVsDomainReqBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsDomainReqBpsDataResponse> {
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
      action: "DescribeVsDomainReqBpsData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsDomainReqBpsDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsDomainReqBpsDataResponse({}));
  }

  /**
   * @param request - DescribeVsDomainReqBpsDataRequest
   * @returns DescribeVsDomainReqBpsDataResponse
   */
  async describeVsDomainReqBpsData(request: $_model.DescribeVsDomainReqBpsDataRequest): Promise<$_model.DescribeVsDomainReqBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainReqBpsDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainReqTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainReqTrafficDataResponse
   */
  async describeVsDomainReqTrafficDataWithOptions(request: $_model.DescribeVsDomainReqTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsDomainReqTrafficDataResponse> {
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
      action: "DescribeVsDomainReqTrafficData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsDomainReqTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsDomainReqTrafficDataResponse({}));
  }

  /**
   * @param request - DescribeVsDomainReqTrafficDataRequest
   * @returns DescribeVsDomainReqTrafficDataResponse
   */
  async describeVsDomainReqTrafficData(request: $_model.DescribeVsDomainReqTrafficDataRequest): Promise<$_model.DescribeVsDomainReqTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainReqTrafficDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainSnapshotDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainSnapshotDataResponse
   */
  async describeVsDomainSnapshotDataWithOptions(request: $_model.DescribeVsDomainSnapshotDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsDomainSnapshotDataResponse> {
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
      action: "DescribeVsDomainSnapshotData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsDomainSnapshotDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsDomainSnapshotDataResponse({}));
  }

  /**
   * @param request - DescribeVsDomainSnapshotDataRequest
   * @returns DescribeVsDomainSnapshotDataResponse
   */
  async describeVsDomainSnapshotData(request: $_model.DescribeVsDomainSnapshotDataRequest): Promise<$_model.DescribeVsDomainSnapshotDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainSnapshotDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainTrafficDataResponse
   */
  async describeVsDomainTrafficDataWithOptions(request: $_model.DescribeVsDomainTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsDomainTrafficDataResponse> {
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
      action: "DescribeVsDomainTrafficData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsDomainTrafficDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsDomainTrafficDataResponse({}));
  }

  /**
   * @param request - DescribeVsDomainTrafficDataRequest
   * @returns DescribeVsDomainTrafficDataResponse
   */
  async describeVsDomainTrafficData(request: $_model.DescribeVsDomainTrafficDataRequest): Promise<$_model.DescribeVsDomainTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainTrafficDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainUvDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainUvDataResponse
   */
  async describeVsDomainUvDataWithOptions(request: $_model.DescribeVsDomainUvDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsDomainUvDataResponse> {
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
      action: "DescribeVsDomainUvData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsDomainUvDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsDomainUvDataResponse({}));
  }

  /**
   * @param request - DescribeVsDomainUvDataRequest
   * @returns DescribeVsDomainUvDataResponse
   */
  async describeVsDomainUvData(request: $_model.DescribeVsDomainUvDataRequest): Promise<$_model.DescribeVsDomainUvDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainUvDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsPullStreamInfoConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsPullStreamInfoConfigResponse
   */
  async describeVsPullStreamInfoConfigWithOptions(request: $_model.DescribeVsPullStreamInfoConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsPullStreamInfoConfigResponse> {
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
      action: "DescribeVsPullStreamInfoConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsPullStreamInfoConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsPullStreamInfoConfigResponse({}));
  }

  /**
   * @param request - DescribeVsPullStreamInfoConfigRequest
   * @returns DescribeVsPullStreamInfoConfigResponse
   */
  async describeVsPullStreamInfoConfig(request: $_model.DescribeVsPullStreamInfoConfigRequest): Promise<$_model.DescribeVsPullStreamInfoConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsPullStreamInfoConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsStreamsNotifyUrlConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsStreamsNotifyUrlConfigResponse
   */
  async describeVsStreamsNotifyUrlConfigWithOptions(request: $_model.DescribeVsStreamsNotifyUrlConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsStreamsNotifyUrlConfigResponse> {
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
      action: "DescribeVsStreamsNotifyUrlConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsStreamsNotifyUrlConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsStreamsNotifyUrlConfigResponse({}));
  }

  /**
   * @param request - DescribeVsStreamsNotifyUrlConfigRequest
   * @returns DescribeVsStreamsNotifyUrlConfigResponse
   */
  async describeVsStreamsNotifyUrlConfig(request: $_model.DescribeVsStreamsNotifyUrlConfigRequest): Promise<$_model.DescribeVsStreamsNotifyUrlConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsStreamsOnlineListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsStreamsOnlineListResponse
   */
  async describeVsStreamsOnlineListWithOptions(request: $_model.DescribeVsStreamsOnlineListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsStreamsOnlineListResponse> {
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

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsStreamsOnlineList",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsStreamsOnlineListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsStreamsOnlineListResponse({}));
  }

  /**
   * @param request - DescribeVsStreamsOnlineListRequest
   * @returns DescribeVsStreamsOnlineListResponse
   */
  async describeVsStreamsOnlineList(request: $_model.DescribeVsStreamsOnlineListRequest): Promise<$_model.DescribeVsStreamsOnlineListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsStreamsOnlineListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsStreamsPublishListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsStreamsPublishListResponse
   */
  async describeVsStreamsPublishListWithOptions(request: $_model.DescribeVsStreamsPublishListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsStreamsPublishListResponse> {
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

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
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

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsStreamsPublishList",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsStreamsPublishListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsStreamsPublishListResponse({}));
  }

  /**
   * @param request - DescribeVsStreamsPublishListRequest
   * @returns DescribeVsStreamsPublishListResponse
   */
  async describeVsStreamsPublishList(request: $_model.DescribeVsStreamsPublishListRequest): Promise<$_model.DescribeVsStreamsPublishListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsStreamsPublishListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsTopDomainsByFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsTopDomainsByFlowResponse
   */
  async describeVsTopDomainsByFlowWithOptions(request: $_model.DescribeVsTopDomainsByFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsTopDomainsByFlowResponse> {
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsTopDomainsByFlow",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsTopDomainsByFlowResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsTopDomainsByFlowResponse({}));
  }

  /**
   * @param request - DescribeVsTopDomainsByFlowRequest
   * @returns DescribeVsTopDomainsByFlowResponse
   */
  async describeVsTopDomainsByFlow(request: $_model.DescribeVsTopDomainsByFlowRequest): Promise<$_model.DescribeVsTopDomainsByFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsTopDomainsByFlowWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsUpPeakPublishStreamDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsUpPeakPublishStreamDataResponse
   */
  async describeVsUpPeakPublishStreamDataWithOptions(request: $_model.DescribeVsUpPeakPublishStreamDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsUpPeakPublishStreamDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainSwitch)) {
      query["DomainSwitch"] = request.domainSwitch;
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
      action: "DescribeVsUpPeakPublishStreamData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsUpPeakPublishStreamDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsUpPeakPublishStreamDataResponse({}));
  }

  /**
   * @param request - DescribeVsUpPeakPublishStreamDataRequest
   * @returns DescribeVsUpPeakPublishStreamDataResponse
   */
  async describeVsUpPeakPublishStreamData(request: $_model.DescribeVsUpPeakPublishStreamDataRequest): Promise<$_model.DescribeVsUpPeakPublishStreamDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsUpPeakPublishStreamDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsUserResourcePackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsUserResourcePackageResponse
   */
  async describeVsUserResourcePackageWithOptions(request: $_model.DescribeVsUserResourcePackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsUserResourcePackageResponse> {
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
      action: "DescribeVsUserResourcePackage",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsUserResourcePackageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsUserResourcePackageResponse({}));
  }

  /**
   * @param request - DescribeVsUserResourcePackageRequest
   * @returns DescribeVsUserResourcePackageResponse
   */
  async describeVsUserResourcePackage(request: $_model.DescribeVsUserResourcePackageRequest): Promise<$_model.DescribeVsUserResourcePackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsUserResourcePackageWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsVerifyContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsVerifyContentResponse
   */
  async describeVsVerifyContentWithOptions(request: $_model.DescribeVsVerifyContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVsVerifyContentResponse> {
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
      action: "DescribeVsVerifyContent",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVsVerifyContentResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVsVerifyContentResponse({}));
  }

  /**
   * @param request - DescribeVsVerifyContentRequest
   * @returns DescribeVsVerifyContentResponse
   */
  async describeVsVerifyContent(request: $_model.DescribeVsVerifyContentRequest): Promise<$_model.DescribeVsVerifyContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsVerifyContentWithOptions(request, runtime);
  }

  /**
   * 云应用服务实例与项目解除关联
   * 
   * @param tmpReq - DisassociateRenderingProjectInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateRenderingProjectInstancesResponse
   */
  async disassociateRenderingProjectInstancesWithOptions(tmpReq: $_model.DisassociateRenderingProjectInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisassociateRenderingProjectInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.DisassociateRenderingProjectInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.renderingInstanceIds)) {
      request.renderingInstanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.renderingInstanceIds, "RenderingInstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.renderingInstanceIdsShrink)) {
      query["RenderingInstanceIds"] = request.renderingInstanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisassociateRenderingProjectInstances",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisassociateRenderingProjectInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DisassociateRenderingProjectInstancesResponse({}));
  }

  /**
   * 云应用服务实例与项目解除关联
   * 
   * @param request - DisassociateRenderingProjectInstancesRequest
   * @returns DisassociateRenderingProjectInstancesResponse
   */
  async disassociateRenderingProjectInstances(request: $_model.DisassociateRenderingProjectInstancesRequest): Promise<$_model.DisassociateRenderingProjectInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disassociateRenderingProjectInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - ForbidVsStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ForbidVsStreamResponse
   */
  async forbidVsStreamWithOptions(request: $_model.ForbidVsStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ForbidVsStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.controlStreamAction)) {
      query["ControlStreamAction"] = request.controlStreamAction;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.liveStreamType)) {
      query["LiveStreamType"] = request.liveStreamType;
    }

    if (!$dara.isNull(request.oneshot)) {
      query["Oneshot"] = request.oneshot;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resumeTime)) {
      query["ResumeTime"] = request.resumeTime;
    }

    if (!$dara.isNull(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ForbidVsStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ForbidVsStreamResponse>(await this.callApi(params, req, runtime), new $_model.ForbidVsStreamResponse({}));
  }

  /**
   * @param request - ForbidVsStreamRequest
   * @returns ForbidVsStreamResponse
   */
  async forbidVsStream(request: $_model.ForbidVsStreamRequest): Promise<$_model.ForbidVsStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.forbidVsStreamWithOptions(request, runtime);
  }

  /**
   * 查询命令的执行状态与结果。
   * 
   * @param request - GetRenderingInstanceCommandsStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRenderingInstanceCommandsStatusResponse
   */
  async getRenderingInstanceCommandsStatusWithOptions(request: $_model.GetRenderingInstanceCommandsStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRenderingInstanceCommandsStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cmdId)) {
      query["CmdId"] = request.cmdId;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRenderingInstanceCommandsStatus",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRenderingInstanceCommandsStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetRenderingInstanceCommandsStatusResponse({}));
  }

  /**
   * 查询命令的执行状态与结果。
   * 
   * @param request - GetRenderingInstanceCommandsStatusRequest
   * @returns GetRenderingInstanceCommandsStatusResponse
   */
  async getRenderingInstanceCommandsStatus(request: $_model.GetRenderingInstanceCommandsStatusRequest): Promise<$_model.GetRenderingInstanceCommandsStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRenderingInstanceCommandsStatusWithOptions(request, runtime);
  }

  /**
   * 获取云渲染实例流连接信息，每次流化建联前都需要调用此接口获取最新连接信息
   * 
   * @param request - GetRenderingInstanceStreamingInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRenderingInstanceStreamingInfoResponse
   */
  async getRenderingInstanceStreamingInfoWithOptions(request: $_model.GetRenderingInstanceStreamingInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRenderingInstanceStreamingInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRenderingInstanceStreamingInfo",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRenderingInstanceStreamingInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetRenderingInstanceStreamingInfoResponse({}));
  }

  /**
   * 获取云渲染实例流连接信息，每次流化建联前都需要调用此接口获取最新连接信息
   * 
   * @param request - GetRenderingInstanceStreamingInfoRequest
   * @returns GetRenderingInstanceStreamingInfoResponse
   */
  async getRenderingInstanceStreamingInfo(request: $_model.GetRenderingInstanceStreamingInfoRequest): Promise<$_model.GetRenderingInstanceStreamingInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRenderingInstanceStreamingInfoWithOptions(request, runtime);
  }

  /**
   * 输出满足特定条件的资源各状态数据量统计值。
   * 
   * @param request - GetRenderingProjectInstanceStateMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRenderingProjectInstanceStateMetricsResponse
   */
  async getRenderingProjectInstanceStateMetricsWithOptions(request: $_model.GetRenderingProjectInstanceStateMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRenderingProjectInstanceStateMetricsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRenderingProjectInstanceStateMetrics",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRenderingProjectInstanceStateMetricsResponse>(await this.callApi(params, req, runtime), new $_model.GetRenderingProjectInstanceStateMetricsResponse({}));
  }

  /**
   * 输出满足特定条件的资源各状态数据量统计值。
   * 
   * @param request - GetRenderingProjectInstanceStateMetricsRequest
   * @returns GetRenderingProjectInstanceStateMetricsResponse
   */
  async getRenderingProjectInstanceStateMetrics(request: $_model.GetRenderingProjectInstanceStateMetricsRequest): Promise<$_model.GetRenderingProjectInstanceStateMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRenderingProjectInstanceStateMetricsWithOptions(request, runtime);
  }

  /**
   * @param request - GotoPresetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GotoPresetResponse
   */
  async gotoPresetWithOptions(request: $_model.GotoPresetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GotoPresetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.presetId)) {
      query["PresetId"] = request.presetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GotoPreset",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GotoPresetResponse>(await this.callApi(params, req, runtime), new $_model.GotoPresetResponse({}));
  }

  /**
   * @param request - GotoPresetRequest
   * @returns GotoPresetResponse
   */
  async gotoPreset(request: $_model.GotoPresetRequest): Promise<$_model.GotoPresetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.gotoPresetWithOptions(request, runtime);
  }

  /**
   * 安装云应用
   * 
   * @param tmpReq - InstallCloudAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallCloudAppResponse
   */
  async installCloudAppWithOptions(tmpReq: $_model.InstallCloudAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallCloudAppResponse> {
    tmpReq.validate();
    let request = new $_model.InstallCloudAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.renderingInstanceIds)) {
      request.renderingInstanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.renderingInstanceIds, "RenderingInstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    if (!$dara.isNull(request.renderingInstanceIdsShrink)) {
      query["RenderingInstanceIds"] = request.renderingInstanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallCloudApp",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallCloudAppResponse>(await this.callApi(params, req, runtime), new $_model.InstallCloudAppResponse({}));
  }

  /**
   * 安装云应用
   * 
   * @param request - InstallCloudAppRequest
   * @returns InstallCloudAppResponse
   */
  async installCloudApp(request: $_model.InstallCloudAppRequest): Promise<$_model.InstallCloudAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installCloudAppWithOptions(request, runtime);
  }

  /**
   * 查询云应用安装信息列表
   * 
   * @param request - ListCloudAppInstallationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudAppInstallationsResponse
   */
  async listCloudAppInstallationsWithOptions(request: $_model.ListCloudAppInstallationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloudAppInstallationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudAppInstallations",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloudAppInstallationsResponse>(await this.callApi(params, req, runtime), new $_model.ListCloudAppInstallationsResponse({}));
  }

  /**
   * 查询云应用安装信息列表
   * 
   * @param request - ListCloudAppInstallationsRequest
   * @returns ListCloudAppInstallationsResponse
   */
  async listCloudAppInstallations(request: $_model.ListCloudAppInstallationsRequest): Promise<$_model.ListCloudAppInstallationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudAppInstallationsWithOptions(request, runtime);
  }

  /**
   * 查询云应用列表
   * 
   * @param request - ListCloudAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudAppsResponse
   */
  async listCloudAppsWithOptions(request: $_model.ListCloudAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloudAppsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudApps",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloudAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListCloudAppsResponse({}));
  }

  /**
   * 查询云应用列表
   * 
   * @param request - ListCloudAppsRequest
   * @returns ListCloudAppsResponse
   */
  async listCloudApps(request: $_model.ListCloudAppsRequest): Promise<$_model.ListCloudAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudAppsWithOptions(request, runtime);
  }

  /**
   * 查询文件的实例推送状态信息列表。
   * 
   * @param request - ListFilePushStatusesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFilePushStatusesResponse
   */
  async listFilePushStatusesWithOptions(request: $_model.ListFilePushStatusesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFilePushStatusesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFilePushStatuses",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFilePushStatusesResponse>(await this.callApi(params, req, runtime), new $_model.ListFilePushStatusesResponse({}));
  }

  /**
   * 查询文件的实例推送状态信息列表。
   * 
   * @param request - ListFilePushStatusesRequest
   * @returns ListFilePushStatusesResponse
   */
  async listFilePushStatuses(request: $_model.ListFilePushStatusesRequest): Promise<$_model.ListFilePushStatusesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFilePushStatusesWithOptions(request, runtime);
  }

  /**
   * 查询可用文件列表。
   * 
   * @param request - ListFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFilesResponse
   */
  async listFilesWithOptions(request: $_model.ListFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFilesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFiles",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListFilesResponse({}));
  }

  /**
   * 查询可用文件列表。
   * 
   * @param request - ListFilesRequest
   * @returns ListFilesResponse
   */
  async listFiles(request: $_model.ListFilesRequest): Promise<$_model.ListFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFilesWithOptions(request, runtime);
  }

  /**
   * 查询公钥信息
   * 
   * @param request - ListPublicKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublicKeysResponse
   */
  async listPublicKeysWithOptions(request: $_model.ListPublicKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPublicKeysResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPublicKeys",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPublicKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListPublicKeysResponse({}));
  }

  /**
   * 查询公钥信息
   * 
   * @param request - ListPublicKeysRequest
   * @returns ListPublicKeysResponse
   */
  async listPublicKeys(request: $_model.ListPublicKeysRequest): Promise<$_model.ListPublicKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPublicKeysWithOptions(request, runtime);
  }

  /**
   * 查询所有云应用数据包信息，支持分页查询。
   * 
   * @param request - ListRenderingDataPackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRenderingDataPackagesResponse
   */
  async listRenderingDataPackagesWithOptions(request: $_model.ListRenderingDataPackagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRenderingDataPackagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.dataPackageId)) {
      query["DataPackageId"] = request.dataPackageId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
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
      action: "ListRenderingDataPackages",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRenderingDataPackagesResponse>(await this.callApi(params, req, runtime), new $_model.ListRenderingDataPackagesResponse({}));
  }

  /**
   * 查询所有云应用数据包信息，支持分页查询。
   * 
   * @param request - ListRenderingDataPackagesRequest
   * @returns ListRenderingDataPackagesResponse
   */
  async listRenderingDataPackages(request: $_model.ListRenderingDataPackagesRequest): Promise<$_model.ListRenderingDataPackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRenderingDataPackagesWithOptions(request, runtime);
  }

  /**
   * 查询自定义网关
   * 
   * @param request - ListRenderingInstanceGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRenderingInstanceGatewayResponse
   */
  async listRenderingInstanceGatewayWithOptions(request: $_model.ListRenderingInstanceGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRenderingInstanceGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.gatewayInstanceId)) {
      query["GatewayInstanceId"] = request.gatewayInstanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRenderingInstanceGateway",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRenderingInstanceGatewayResponse>(await this.callApi(params, req, runtime), new $_model.ListRenderingInstanceGatewayResponse({}));
  }

  /**
   * 查询自定义网关
   * 
   * @param request - ListRenderingInstanceGatewayRequest
   * @returns ListRenderingInstanceGatewayResponse
   */
  async listRenderingInstanceGateway(request: $_model.ListRenderingInstanceGatewayRequest): Promise<$_model.ListRenderingInstanceGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRenderingInstanceGatewayWithOptions(request, runtime);
  }

  /**
   * 查询所有云渲染实例信息，支持分页查询。
   * 
   * @param request - ListRenderingInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRenderingInstancesResponse
   */
  async listRenderingInstancesWithOptions(request: $_model.ListRenderingInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRenderingInstancesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRenderingInstances",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRenderingInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListRenderingInstancesResponse({}));
  }

  /**
   * 查询所有云渲染实例信息，支持分页查询。
   * 
   * @param request - ListRenderingInstancesRequest
   * @returns ListRenderingInstancesResponse
   */
  async listRenderingInstances(request: $_model.ListRenderingInstancesRequest): Promise<$_model.ListRenderingInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRenderingInstancesWithOptions(request, runtime);
  }

  /**
   * 分页查询项目关联的云应用服务实例列表。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口支持通过多种筛选条件（如状态、实例ID等）来查询指定项目下的云应用服务实例。
   * 
   * @param request - ListRenderingProjectInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRenderingProjectInstancesResponse
   */
  async listRenderingProjectInstancesWithOptions(request: $_model.ListRenderingProjectInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRenderingProjectInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRenderingProjectInstances",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRenderingProjectInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListRenderingProjectInstancesResponse({}));
  }

  /**
   * 分页查询项目关联的云应用服务实例列表。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口支持通过多种筛选条件（如状态、实例ID等）来查询指定项目下的云应用服务实例。
   * 
   * @param request - ListRenderingProjectInstancesRequest
   * @returns ListRenderingProjectInstancesResponse
   */
  async listRenderingProjectInstances(request: $_model.ListRenderingProjectInstancesRequest): Promise<$_model.ListRenderingProjectInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRenderingProjectInstancesWithOptions(request, runtime);
  }

  /**
   * 分页查询用户下的云应用服务项目基本信息列表。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于分页查询指定用户下的渲染项目基本信息列表。
   * - 可通过 `ProjectId` 和 `ProjectName` 进行过滤查询。
   * 
   * @param request - ListRenderingProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRenderingProjectsResponse
   */
  async listRenderingProjectsWithOptions(request: $_model.ListRenderingProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRenderingProjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRenderingProjects",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRenderingProjectsResponse>(await this.callApi(params, req, runtime), new $_model.ListRenderingProjectsResponse({}));
  }

  /**
   * 分页查询用户下的云应用服务项目基本信息列表。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于分页查询指定用户下的渲染项目基本信息列表。
   * - 可通过 `ProjectId` 和 `ProjectName` 进行过滤查询。
   * 
   * @param request - ListRenderingProjectsRequest
   * @returns ListRenderingProjectsResponse
   */
  async listRenderingProjects(request: $_model.ListRenderingProjectsRequest): Promise<$_model.ListRenderingProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRenderingProjectsWithOptions(request, runtime);
  }

  /**
   * 分页查询指定条件下的渲染会话列表。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口支持通过多种参数组合来过滤和分页查询用户的渲染会话列表。
   * - `SessionId` 和 `ClientId` 参数至少需要提供一个，但两者都不是必选的。如果同时提供了两个参数，则将根据这两个参数进行更精确的匹配。
   * 
   * @param request - ListRenderingSessionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRenderingSessionsResponse
   */
  async listRenderingSessionsWithOptions(request: $_model.ListRenderingSessionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRenderingSessionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRenderingSessions",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRenderingSessionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRenderingSessionsResponse({}));
  }

  /**
   * 分页查询指定条件下的渲染会话列表。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口支持通过多种参数组合来过滤和分页查询用户的渲染会话列表。
   * - `SessionId` 和 `ClientId` 参数至少需要提供一个，但两者都不是必选的。如果同时提供了两个参数，则将根据这两个参数进行更精确的匹配。
   * 
   * @param request - ListRenderingSessionsRequest
   * @returns ListRenderingSessionsResponse
   */
  async listRenderingSessions(request: $_model.ListRenderingSessionsRequest): Promise<$_model.ListRenderingSessionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRenderingSessionsWithOptions(request, runtime);
  }

  /**
   * 安全登陆管理
   * 
   * @param request - ManageLoginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManageLoginResponse
   */
  async manageLoginWithOptions(request: $_model.ManageLoginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ManageLoginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!$dara.isNull(request.keyGroup)) {
      query["KeyGroup"] = request.keyGroup;
    }

    if (!$dara.isNull(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ManageLogin",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ManageLoginResponse>(await this.callApi(params, req, runtime), new $_model.ManageLoginResponse({}));
  }

  /**
   * 安全登陆管理
   * 
   * @param request - ManageLoginRequest
   * @returns ManageLoginResponse
   */
  async manageLogin(request: $_model.ManageLoginRequest): Promise<$_model.ManageLoginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manageLoginWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDeviceResponse
   */
  async modifyDeviceWithOptions(request: $_model.ModifyDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmMethod)) {
      query["AlarmMethod"] = request.alarmMethod;
    }

    if (!$dara.isNull(request.autoDirectory)) {
      query["AutoDirectory"] = request.autoDirectory;
    }

    if (!$dara.isNull(request.autoPos)) {
      query["AutoPos"] = request.autoPos;
    }

    if (!$dara.isNull(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.latitude)) {
      query["Latitude"] = request.latitude;
    }

    if (!$dara.isNull(request.longitude)) {
      query["Longitude"] = request.longitude;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.posInterval)) {
      query["PosInterval"] = request.posInterval;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDeviceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDeviceResponse({}));
  }

  /**
   * @param request - ModifyDeviceRequest
   * @returns ModifyDeviceResponse
   */
  async modifyDevice(request: $_model.ModifyDeviceRequest): Promise<$_model.ModifyDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDeviceAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDeviceAlarmResponse
   */
  async modifyDeviceAlarmWithOptions(request: $_model.ModifyDeviceAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDeviceAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmId)) {
      query["AlarmId"] = request.alarmId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDeviceAlarm",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDeviceAlarmResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDeviceAlarmResponse({}));
  }

  /**
   * @param request - ModifyDeviceAlarmRequest
   * @returns ModifyDeviceAlarmResponse
   */
  async modifyDeviceAlarm(request: $_model.ModifyDeviceAlarmRequest): Promise<$_model.ModifyDeviceAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDeviceAlarmWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDeviceCaptureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDeviceCaptureResponse
   */
  async modifyDeviceCaptureWithOptions(request: $_model.ModifyDeviceCaptureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDeviceCaptureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.image)) {
      query["Image"] = request.image;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.video)) {
      query["Video"] = request.video;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDeviceCapture",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDeviceCaptureResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDeviceCaptureResponse({}));
  }

  /**
   * @param request - ModifyDeviceCaptureRequest
   * @returns ModifyDeviceCaptureResponse
   */
  async modifyDeviceCapture(request: $_model.ModifyDeviceCaptureRequest): Promise<$_model.ModifyDeviceCaptureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDeviceCaptureWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDeviceChannelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDeviceChannelsResponse
   */
  async modifyDeviceChannelsWithOptions(request: $_model.ModifyDeviceChannelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDeviceChannelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channels)) {
      query["Channels"] = request.channels;
    }

    if (!$dara.isNull(request.deviceStatus)) {
      query["DeviceStatus"] = request.deviceStatus;
    }

    if (!$dara.isNull(request.dsn)) {
      query["Dsn"] = request.dsn;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDeviceChannels",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDeviceChannelsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDeviceChannelsResponse({}));
  }

  /**
   * @param request - ModifyDeviceChannelsRequest
   * @returns ModifyDeviceChannelsResponse
   */
  async modifyDeviceChannels(request: $_model.ModifyDeviceChannelsRequest): Promise<$_model.ModifyDeviceChannelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDeviceChannelsWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDirectoryResponse
   */
  async modifyDirectoryWithOptions(request: $_model.ModifyDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDirectory",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDirectoryResponse({}));
  }

  /**
   * @param request - ModifyDirectoryRequest
   * @returns ModifyDirectoryResponse
   */
  async modifyDirectory(request: $_model.ModifyDirectoryRequest): Promise<$_model.ModifyDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDirectoryWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGroupResponse
   */
  async modifyGroupWithOptions(request: $_model.ModifyGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.inProtocol)) {
      query["InProtocol"] = request.inProtocol;
    }

    if (!$dara.isNull(request.lazyPull)) {
      query["LazyPull"] = request.lazyPull;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.outProtocol)) {
      query["OutProtocol"] = request.outProtocol;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    if (!$dara.isNull(request.pushDomain)) {
      query["PushDomain"] = request.pushDomain;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyGroup",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyGroupResponse({}));
  }

  /**
   * @param request - ModifyGroupRequest
   * @returns ModifyGroupResponse
   */
  async modifyGroup(request: $_model.ModifyGroupRequest): Promise<$_model.ModifyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGroupWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyParentPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyParentPlatformResponse
   */
  async modifyParentPlatformWithOptions(request: $_model.ModifyParentPlatformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyParentPlatformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!$dara.isNull(request.clientAuth)) {
      query["ClientAuth"] = request.clientAuth;
    }

    if (!$dara.isNull(request.clientPassword)) {
      query["ClientPassword"] = request.clientPassword;
    }

    if (!$dara.isNull(request.clientUsername)) {
      query["ClientUsername"] = request.clientUsername;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyParentPlatform",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyParentPlatformResponse>(await this.callApi(params, req, runtime), new $_model.ModifyParentPlatformResponse({}));
  }

  /**
   * @param request - ModifyParentPlatformRequest
   * @returns ModifyParentPlatformResponse
   */
  async modifyParentPlatform(request: $_model.ModifyParentPlatformRequest): Promise<$_model.ModifyParentPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyParentPlatformWithOptions(request, runtime);
  }

  /**
   * 变配云渲染资源实例
   * 
   * @param request - ModifyRenderingInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRenderingInstanceResponse
   */
  async modifyRenderingInstanceWithOptions(request: $_model.ModifyRenderingInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRenderingInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    if (!$dara.isNull(request.renderingSpec)) {
      query["RenderingSpec"] = request.renderingSpec;
    }

    if (!$dara.isNull(request.storageSize)) {
      query["StorageSize"] = request.storageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRenderingInstance",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRenderingInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRenderingInstanceResponse({}));
  }

  /**
   * 变配云渲染资源实例
   * 
   * @param request - ModifyRenderingInstanceRequest
   * @returns ModifyRenderingInstanceResponse
   */
  async modifyRenderingInstance(request: $_model.ModifyRenderingInstanceRequest): Promise<$_model.ModifyRenderingInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * 修改云渲染实例限速带宽
   * 
   * @param request - ModifyRenderingInstanceBandwidthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRenderingInstanceBandwidthResponse
   */
  async modifyRenderingInstanceBandwidthWithOptions(request: $_model.ModifyRenderingInstanceBandwidthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRenderingInstanceBandwidthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxEgressBandwidth)) {
      query["MaxEgressBandwidth"] = request.maxEgressBandwidth;
    }

    if (!$dara.isNull(request.maxIngressBandwidth)) {
      query["MaxIngressBandwidth"] = request.maxIngressBandwidth;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRenderingInstanceBandwidth",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRenderingInstanceBandwidthResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRenderingInstanceBandwidthResponse({}));
  }

  /**
   * 修改云渲染实例限速带宽
   * 
   * @param request - ModifyRenderingInstanceBandwidthRequest
   * @returns ModifyRenderingInstanceBandwidthResponse
   */
  async modifyRenderingInstanceBandwidth(request: $_model.ModifyRenderingInstanceBandwidthRequest): Promise<$_model.ModifyRenderingInstanceBandwidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRenderingInstanceBandwidthWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTemplateResponse
   */
  async modifyTemplateWithOptions(request: $_model.ModifyTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileFormat)) {
      query["FileFormat"] = request.fileFormat;
    }

    if (!$dara.isNull(request.flv)) {
      query["Flv"] = request.flv;
    }

    if (!$dara.isNull(request.hlsM3u8)) {
      query["HlsM3u8"] = request.hlsM3u8;
    }

    if (!$dara.isNull(request.hlsTs)) {
      query["HlsTs"] = request.hlsTs;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.jpgOnDemand)) {
      query["JpgOnDemand"] = request.jpgOnDemand;
    }

    if (!$dara.isNull(request.jpgOverwrite)) {
      query["JpgOverwrite"] = request.jpgOverwrite;
    }

    if (!$dara.isNull(request.jpgSequence)) {
      query["JpgSequence"] = request.jpgSequence;
    }

    if (!$dara.isNull(request.mp4)) {
      query["Mp4"] = request.mp4;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    if (!$dara.isNull(request.ossFilePrefix)) {
      query["OssFilePrefix"] = request.ossFilePrefix;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.retention)) {
      query["Retention"] = request.retention;
    }

    if (!$dara.isNull(request.transConfigsJSON)) {
      query["TransConfigsJSON"] = request.transConfigsJSON;
    }

    if (!$dara.isNull(request.trigger)) {
      query["Trigger"] = request.trigger;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTemplate",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTemplateResponse({}));
  }

  /**
   * @param request - ModifyTemplateRequest
   * @returns ModifyTemplateResponse
   */
  async modifyTemplate(request: $_model.ModifyTemplateRequest): Promise<$_model.ModifyTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - OpenVsServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenVsServiceResponse
   */
  async openVsServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.OpenVsServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "OpenVsService",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenVsServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenVsServiceResponse({}));
  }

  /**
   * @returns OpenVsServiceResponse
   */
  async openVsService(): Promise<$_model.OpenVsServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openVsServiceWithOptions(runtime);
  }

  /**
   * 预推文件到云渲染实例。
   * 
   * @param request - PushFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushFileResponse
   */
  async pushFileWithOptions(request: $_model.PushFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushFile",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushFileResponse>(await this.callApi(params, req, runtime), new $_model.PushFileResponse({}));
  }

  /**
   * 预推文件到云渲染实例。
   * 
   * @param request - PushFileRequest
   * @returns PushFileResponse
   */
  async pushFile(request: $_model.PushFileRequest): Promise<$_model.PushFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushFileWithOptions(request, runtime);
  }

  /**
   * 重启云渲染实例
   * 
   * @param request - RebootRenderingInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootRenderingInstanceResponse
   */
  async rebootRenderingInstanceWithOptions(request: $_model.RebootRenderingInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootRenderingInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootRenderingInstance",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebootRenderingInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RebootRenderingInstanceResponse({}));
  }

  /**
   * 重启云渲染实例
   * 
   * @param request - RebootRenderingInstanceRequest
   * @returns RebootRenderingInstanceResponse
   */
  async rebootRenderingInstance(request: $_model.RebootRenderingInstanceRequest): Promise<$_model.RebootRenderingInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * 恢复数据到云渲染实例
   * 
   * @param request - RecoverRenderingDataPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoverRenderingDataPackageResponse
   */
  async recoverRenderingDataPackageWithOptions(request: $_model.RecoverRenderingDataPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecoverRenderingDataPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataPackageId)) {
      query["DataPackageId"] = request.dataPackageId;
    }

    if (!$dara.isNull(request.loadMode)) {
      query["LoadMode"] = request.loadMode;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecoverRenderingDataPackage",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecoverRenderingDataPackageResponse>(await this.callApi(params, req, runtime), new $_model.RecoverRenderingDataPackageResponse({}));
  }

  /**
   * 恢复数据到云渲染实例
   * 
   * @param request - RecoverRenderingDataPackageRequest
   * @returns RecoverRenderingDataPackageResponse
   */
  async recoverRenderingDataPackage(request: $_model.RecoverRenderingDataPackageRequest): Promise<$_model.RecoverRenderingDataPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recoverRenderingDataPackageWithOptions(request, runtime);
  }

  /**
   * 更新实例流连接信息
   * 
   * @param tmpReq - RefreshRenderingInstanceStreamingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshRenderingInstanceStreamingResponse
   */
  async refreshRenderingInstanceStreamingWithOptions(tmpReq: $_model.RefreshRenderingInstanceStreamingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshRenderingInstanceStreamingResponse> {
    tmpReq.validate();
    let request = new $_model.RefreshRenderingInstanceStreamingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clientInfo)) {
      request.clientInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientInfo, "ClientInfo", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientInfoShrink)) {
      query["ClientInfo"] = request.clientInfoShrink;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshRenderingInstanceStreaming",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshRenderingInstanceStreamingResponse>(await this.callApi(params, req, runtime), new $_model.RefreshRenderingInstanceStreamingResponse({}));
  }

  /**
   * 更新实例流连接信息
   * 
   * @param request - RefreshRenderingInstanceStreamingRequest
   * @returns RefreshRenderingInstanceStreamingResponse
   */
  async refreshRenderingInstanceStreaming(request: $_model.RefreshRenderingInstanceStreamingRequest): Promise<$_model.RefreshRenderingInstanceStreamingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshRenderingInstanceStreamingWithOptions(request, runtime);
  }

  /**
   * 释放云渲染数据包
   * 
   * @param request - ReleaseRenderingDataPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseRenderingDataPackageResponse
   */
  async releaseRenderingDataPackageWithOptions(request: $_model.ReleaseRenderingDataPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseRenderingDataPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataPackageId)) {
      query["DataPackageId"] = request.dataPackageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseRenderingDataPackage",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseRenderingDataPackageResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseRenderingDataPackageResponse({}));
  }

  /**
   * 释放云渲染数据包
   * 
   * @param request - ReleaseRenderingDataPackageRequest
   * @returns ReleaseRenderingDataPackageResponse
   */
  async releaseRenderingDataPackage(request: $_model.ReleaseRenderingDataPackageRequest): Promise<$_model.ReleaseRenderingDataPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseRenderingDataPackageWithOptions(request, runtime);
  }

  /**
   * 释放云渲染实例
   * 
   * @param request - ReleaseRenderingInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseRenderingInstanceResponse
   */
  async releaseRenderingInstanceWithOptions(request: $_model.ReleaseRenderingInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseRenderingInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseRenderingInstance",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseRenderingInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseRenderingInstanceResponse({}));
  }

  /**
   * 释放云渲染实例
   * 
   * @param request - ReleaseRenderingInstanceRequest
   * @returns ReleaseRenderingInstanceResponse
   */
  async releaseRenderingInstance(request: $_model.ReleaseRenderingInstanceRequest): Promise<$_model.ReleaseRenderingInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * 续费云渲染资源实例
   * 
   * @param request - RenewRenderingInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewRenderingInstanceResponse
   */
  async renewRenderingInstanceWithOptions(request: $_model.RenewRenderingInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewRenderingInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewRenderingInstance",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewRenderingInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewRenderingInstanceResponse({}));
  }

  /**
   * 续费云渲染资源实例
   * 
   * @param request - RenewRenderingInstanceRequest
   * @returns RenewRenderingInstanceResponse
   */
  async renewRenderingInstance(request: $_model.RenewRenderingInstanceRequest): Promise<$_model.RenewRenderingInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * 重置云渲染实例
   * 
   * @param request - ResetRenderingInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetRenderingInstanceResponse
   */
  async resetRenderingInstanceWithOptions(request: $_model.ResetRenderingInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetRenderingInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!$dara.isNull(request.dataPackageId)) {
      query["DataPackageId"] = request.dataPackageId;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetRenderingInstance",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetRenderingInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ResetRenderingInstanceResponse({}));
  }

  /**
   * 重置云渲染实例
   * 
   * @param request - ResetRenderingInstanceRequest
   * @returns ResetRenderingInstanceResponse
   */
  async resetRenderingInstance(request: $_model.ResetRenderingInstanceRequest): Promise<$_model.ResetRenderingInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - ResumeVsStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeVsStreamResponse
   */
  async resumeVsStreamWithOptions(request: $_model.ResumeVsStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeVsStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.controlStreamAction)) {
      query["ControlStreamAction"] = request.controlStreamAction;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.liveStreamType)) {
      query["LiveStreamType"] = request.liveStreamType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeVsStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeVsStreamResponse>(await this.callApi(params, req, runtime), new $_model.ResumeVsStreamResponse({}));
  }

  /**
   * @param request - ResumeVsStreamRequest
   * @returns ResumeVsStreamResponse
   */
  async resumeVsStream(request: $_model.ResumeVsStreamRequest): Promise<$_model.ResumeVsStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeVsStreamWithOptions(request, runtime);
  }

  /**
   * 下发shell命令，支持同步/异步响应命令。
   * 
   * @param request - SendRenderingInstanceCommandsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendRenderingInstanceCommandsResponse
   */
  async sendRenderingInstanceCommandsWithOptions(request: $_model.SendRenderingInstanceCommandsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendRenderingInstanceCommandsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commands)) {
      body["Commands"] = request.commands;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendRenderingInstanceCommands",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendRenderingInstanceCommandsResponse>(await this.callApi(params, req, runtime), new $_model.SendRenderingInstanceCommandsResponse({}));
  }

  /**
   * 下发shell命令，支持同步/异步响应命令。
   * 
   * @param request - SendRenderingInstanceCommandsRequest
   * @returns SendRenderingInstanceCommandsResponse
   */
  async sendRenderingInstanceCommands(request: $_model.SendRenderingInstanceCommandsRequest): Promise<$_model.SendRenderingInstanceCommandsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendRenderingInstanceCommandsWithOptions(request, runtime);
  }

  /**
   * @param request - SetPresetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPresetResponse
   */
  async setPresetWithOptions(request: $_model.SetPresetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPresetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.presetId)) {
      query["PresetId"] = request.presetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPreset",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPresetResponse>(await this.callApi(params, req, runtime), new $_model.SetPresetResponse({}));
  }

  /**
   * @param request - SetPresetRequest
   * @returns SetPresetResponse
   */
  async setPreset(request: $_model.SetPresetRequest): Promise<$_model.SetPresetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPresetWithOptions(request, runtime);
  }

  /**
   * @param request - SetVsDomainCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetVsDomainCertificateResponse
   */
  async setVsDomainCertificateWithOptions(request: $_model.SetVsDomainCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetVsDomainCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.certType)) {
      query["CertType"] = request.certType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.forceSet)) {
      query["ForceSet"] = request.forceSet;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetVsDomainCertificate",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetVsDomainCertificateResponse>(await this.callApi(params, req, runtime), new $_model.SetVsDomainCertificateResponse({}));
  }

  /**
   * @param request - SetVsDomainCertificateRequest
   * @returns SetVsDomainCertificateResponse
   */
  async setVsDomainCertificate(request: $_model.SetVsDomainCertificateRequest): Promise<$_model.SetVsDomainCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setVsDomainCertificateWithOptions(request, runtime);
  }

  /**
   * @param request - SetVsStreamsNotifyUrlConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetVsStreamsNotifyUrlConfigResponse
   */
  async setVsStreamsNotifyUrlConfigWithOptions(request: $_model.SetVsStreamsNotifyUrlConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetVsStreamsNotifyUrlConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.notifyUrl)) {
      query["NotifyUrl"] = request.notifyUrl;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetVsStreamsNotifyUrlConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetVsStreamsNotifyUrlConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetVsStreamsNotifyUrlConfigResponse({}));
  }

  /**
   * @param request - SetVsStreamsNotifyUrlConfigRequest
   * @returns SetVsStreamsNotifyUrlConfigResponse
   */
  async setVsStreamsNotifyUrlConfig(request: $_model.SetVsStreamsNotifyUrlConfigRequest): Promise<$_model.SetVsStreamsNotifyUrlConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setVsStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  /**
   * @param request - StartDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDeviceResponse
   */
  async startDeviceWithOptions(request: $_model.StartDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDeviceResponse>(await this.callApi(params, req, runtime), new $_model.StartDeviceResponse({}));
  }

  /**
   * @param request - StartDeviceRequest
   * @returns StartDeviceResponse
   */
  async startDevice(request: $_model.StartDeviceRequest): Promise<$_model.StartDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - StartParentPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartParentPlatformResponse
   */
  async startParentPlatformWithOptions(request: $_model.StartParentPlatformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartParentPlatformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartParentPlatform",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartParentPlatformResponse>(await this.callApi(params, req, runtime), new $_model.StartParentPlatformResponse({}));
  }

  /**
   * @param request - StartParentPlatformRequest
   * @returns StartParentPlatformResponse
   */
  async startParentPlatform(request: $_model.StartParentPlatformRequest): Promise<$_model.StartParentPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startParentPlatformWithOptions(request, runtime);
  }

  /**
   * @param request - StartPublishStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartPublishStreamResponse
   */
  async startPublishStreamWithOptions(request: $_model.StartPublishStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartPublishStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.publishUrl)) {
      query["PublishUrl"] = request.publishUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartPublishStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartPublishStreamResponse>(await this.callApi(params, req, runtime), new $_model.StartPublishStreamResponse({}));
  }

  /**
   * @param request - StartPublishStreamRequest
   * @returns StartPublishStreamResponse
   */
  async startPublishStream(request: $_model.StartPublishStreamRequest): Promise<$_model.StartPublishStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startPublishStreamWithOptions(request, runtime);
  }

  /**
   * @param request - StartRecordStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRecordStreamResponse
   */
  async startRecordStreamWithOptions(request: $_model.StartRecordStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartRecordStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.app)) {
      query["App"] = request.app;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartRecordStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartRecordStreamResponse>(await this.callApi(params, req, runtime), new $_model.StartRecordStreamResponse({}));
  }

  /**
   * @param request - StartRecordStreamRequest
   * @returns StartRecordStreamResponse
   */
  async startRecordStream(request: $_model.StartRecordStreamRequest): Promise<$_model.StartRecordStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startRecordStreamWithOptions(request, runtime);
  }

  /**
   * 调度一个空闲云应用服务实例，并完成服务启动。
   * 
   * @param tmpReq - StartRenderingSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRenderingSessionResponse
   */
  async startRenderingSessionWithOptions(tmpReq: $_model.StartRenderingSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartRenderingSessionResponse> {
    tmpReq.validate();
    let request = new $_model.StartRenderingSessionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clientParams)) {
      request.clientParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientParams, "ClientParams", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientParamsShrink)) {
      query["ClientParams"] = request.clientParamsShrink;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartRenderingSession",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartRenderingSessionResponse>(await this.callApi(params, req, runtime), new $_model.StartRenderingSessionResponse({}));
  }

  /**
   * 调度一个空闲云应用服务实例，并完成服务启动。
   * 
   * @param request - StartRenderingSessionRequest
   * @returns StartRenderingSessionResponse
   */
  async startRenderingSession(request: $_model.StartRenderingSessionRequest): Promise<$_model.StartRenderingSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startRenderingSessionWithOptions(request, runtime);
  }

  /**
   * @param request - StartStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartStreamResponse
   */
  async startStreamWithOptions(request: $_model.StartStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
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
      action: "StartStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartStreamResponse>(await this.callApi(params, req, runtime), new $_model.StartStreamResponse({}));
  }

  /**
   * @param request - StartStreamRequest
   * @returns StartStreamResponse
   */
  async startStream(request: $_model.StartStreamRequest): Promise<$_model.StartStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startStreamWithOptions(request, runtime);
  }

  /**
   * @param request - StartTransferStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartTransferStreamResponse
   */
  async startTransferStreamWithOptions(request: $_model.StartTransferStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartTransferStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.transcode)) {
      query["Transcode"] = request.transcode;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartTransferStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartTransferStreamResponse>(await this.callApi(params, req, runtime), new $_model.StartTransferStreamResponse({}));
  }

  /**
   * @param request - StartTransferStreamRequest
   * @returns StartTransferStreamResponse
   */
  async startTransferStream(request: $_model.StartTransferStreamRequest): Promise<$_model.StartTransferStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startTransferStreamWithOptions(request, runtime);
  }

  /**
   * @param request - StopAdjustRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAdjustResponse
   */
  async stopAdjustWithOptions(request: $_model.StopAdjustRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopAdjustResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.focus)) {
      query["Focus"] = request.focus;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.iris)) {
      query["Iris"] = request.iris;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAdjust",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopAdjustResponse>(await this.callApi(params, req, runtime), new $_model.StopAdjustResponse({}));
  }

  /**
   * @param request - StopAdjustRequest
   * @returns StopAdjustResponse
   */
  async stopAdjust(request: $_model.StopAdjustRequest): Promise<$_model.StopAdjustResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAdjustWithOptions(request, runtime);
  }

  /**
   * @param request - StopDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDeviceResponse
   */
  async stopDeviceWithOptions(request: $_model.StopDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
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
      action: "StopDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDeviceResponse>(await this.callApi(params, req, runtime), new $_model.StopDeviceResponse({}));
  }

  /**
   * @param request - StopDeviceRequest
   * @returns StopDeviceResponse
   */
  async stopDevice(request: $_model.StopDeviceRequest): Promise<$_model.StopDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - StopMoveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopMoveResponse
   */
  async stopMoveWithOptions(request: $_model.StopMoveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopMoveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pan)) {
      query["Pan"] = request.pan;
    }

    if (!$dara.isNull(request.tilt)) {
      query["Tilt"] = request.tilt;
    }

    if (!$dara.isNull(request.zoom)) {
      query["Zoom"] = request.zoom;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopMove",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopMoveResponse>(await this.callApi(params, req, runtime), new $_model.StopMoveResponse({}));
  }

  /**
   * @param request - StopMoveRequest
   * @returns StopMoveResponse
   */
  async stopMove(request: $_model.StopMoveRequest): Promise<$_model.StopMoveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopMoveWithOptions(request, runtime);
  }

  /**
   * @param request - StopPublishStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopPublishStreamResponse
   */
  async stopPublishStreamWithOptions(request: $_model.StopPublishStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopPublishStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopPublishStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopPublishStreamResponse>(await this.callApi(params, req, runtime), new $_model.StopPublishStreamResponse({}));
  }

  /**
   * @param request - StopPublishStreamRequest
   * @returns StopPublishStreamResponse
   */
  async stopPublishStream(request: $_model.StopPublishStreamRequest): Promise<$_model.StopPublishStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopPublishStreamWithOptions(request, runtime);
  }

  /**
   * @param request - StopRecordStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopRecordStreamResponse
   */
  async stopRecordStreamWithOptions(request: $_model.StopRecordStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopRecordStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.app)) {
      query["App"] = request.app;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopRecordStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopRecordStreamResponse>(await this.callApi(params, req, runtime), new $_model.StopRecordStreamResponse({}));
  }

  /**
   * @param request - StopRecordStreamRequest
   * @returns StopRecordStreamResponse
   */
  async stopRecordStream(request: $_model.StopRecordStreamRequest): Promise<$_model.StopRecordStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopRecordStreamWithOptions(request, runtime);
  }

  /**
   * 关闭指定的云应用服务会话并回收相关实例资源。
   * 
   * @remarks
   * ## 请求说明
   * 
   * @param request - StopRenderingSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopRenderingSessionResponse
   */
  async stopRenderingSessionWithOptions(request: $_model.StopRenderingSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopRenderingSessionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopRenderingSession",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopRenderingSessionResponse>(await this.callApi(params, req, runtime), new $_model.StopRenderingSessionResponse({}));
  }

  /**
   * 关闭指定的云应用服务会话并回收相关实例资源。
   * 
   * @remarks
   * ## 请求说明
   * 
   * @param request - StopRenderingSessionRequest
   * @returns StopRenderingSessionResponse
   */
  async stopRenderingSession(request: $_model.StopRenderingSessionRequest): Promise<$_model.StopRenderingSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopRenderingSessionWithOptions(request, runtime);
  }

  /**
   * @param request - StopStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopStreamResponse
   */
  async stopStreamWithOptions(request: $_model.StopStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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
      action: "StopStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopStreamResponse>(await this.callApi(params, req, runtime), new $_model.StopStreamResponse({}));
  }

  /**
   * @param request - StopStreamRequest
   * @returns StopStreamResponse
   */
  async stopStream(request: $_model.StopStreamRequest): Promise<$_model.StopStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopStreamWithOptions(request, runtime);
  }

  /**
   * @param request - StopTransferStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTransferStreamResponse
   */
  async stopTransferStreamWithOptions(request: $_model.StopTransferStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopTransferStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.transcode)) {
      query["Transcode"] = request.transcode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTransferStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopTransferStreamResponse>(await this.callApi(params, req, runtime), new $_model.StopTransferStreamResponse({}));
  }

  /**
   * @param request - StopTransferStreamRequest
   * @returns StopTransferStreamResponse
   */
  async stopTransferStream(request: $_model.StopTransferStreamRequest): Promise<$_model.StopTransferStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopTransferStreamWithOptions(request, runtime);
  }

  /**
   * @param request - SyncCatalogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncCatalogsResponse
   */
  async syncCatalogsWithOptions(request: $_model.SyncCatalogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncCatalogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncCatalogs",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncCatalogsResponse>(await this.callApi(params, req, runtime), new $_model.SyncCatalogsResponse({}));
  }

  /**
   * @param request - SyncCatalogsRequest
   * @returns SyncCatalogsResponse
   */
  async syncCatalogs(request: $_model.SyncCatalogsRequest): Promise<$_model.SyncCatalogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncCatalogsWithOptions(request, runtime);
  }

  /**
   * @param request - UnbindDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindDirectoryResponse
   */
  async unbindDirectoryWithOptions(request: $_model.UnbindDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindDirectory",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.UnbindDirectoryResponse({}));
  }

  /**
   * @param request - UnbindDirectoryRequest
   * @returns UnbindDirectoryResponse
   */
  async unbindDirectory(request: $_model.UnbindDirectoryRequest): Promise<$_model.UnbindDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindDirectoryWithOptions(request, runtime);
  }

  /**
   * @param request - UnbindParentPlatformDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindParentPlatformDeviceResponse
   */
  async unbindParentPlatformDeviceWithOptions(request: $_model.UnbindParentPlatformDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindParentPlatformDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parentPlatformId)) {
      query["ParentPlatformId"] = request.parentPlatformId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindParentPlatformDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindParentPlatformDeviceResponse>(await this.callApi(params, req, runtime), new $_model.UnbindParentPlatformDeviceResponse({}));
  }

  /**
   * @param request - UnbindParentPlatformDeviceRequest
   * @returns UnbindParentPlatformDeviceResponse
   */
  async unbindParentPlatformDevice(request: $_model.UnbindParentPlatformDeviceRequest): Promise<$_model.UnbindParentPlatformDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindParentPlatformDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - UnbindPurchasedDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindPurchasedDeviceResponse
   */
  async unbindPurchasedDeviceWithOptions(request: $_model.UnbindPurchasedDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindPurchasedDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindPurchasedDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindPurchasedDeviceResponse>(await this.callApi(params, req, runtime), new $_model.UnbindPurchasedDeviceResponse({}));
  }

  /**
   * @param request - UnbindPurchasedDeviceRequest
   * @returns UnbindPurchasedDeviceResponse
   */
  async unbindPurchasedDevice(request: $_model.UnbindPurchasedDeviceRequest): Promise<$_model.UnbindPurchasedDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindPurchasedDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - UnbindTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindTemplateResponse
   */
  async unbindTemplateWithOptions(request: $_model.UnbindTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindTemplate",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UnbindTemplateResponse({}));
  }

  /**
   * @param request - UnbindTemplateRequest
   * @returns UnbindTemplateResponse
   */
  async unbindTemplate(request: $_model.UnbindTemplateRequest): Promise<$_model.UnbindTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindTemplateWithOptions(request, runtime);
  }

  /**
   * 卸载云应用
   * 
   * @param tmpReq - UninstallCloudAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallCloudAppResponse
   */
  async uninstallCloudAppWithOptions(tmpReq: $_model.UninstallCloudAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallCloudAppResponse> {
    tmpReq.validate();
    let request = new $_model.UninstallCloudAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.renderingInstanceIds)) {
      request.renderingInstanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.renderingInstanceIds, "RenderingInstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    if (!$dara.isNull(request.renderingInstanceIdsShrink)) {
      query["RenderingInstanceIds"] = request.renderingInstanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallCloudApp",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UninstallCloudAppResponse>(await this.callApi(params, req, runtime), new $_model.UninstallCloudAppResponse({}));
  }

  /**
   * 卸载云应用
   * 
   * @param request - UninstallCloudAppRequest
   * @returns UninstallCloudAppResponse
   */
  async uninstallCloudApp(request: $_model.UninstallCloudAppRequest): Promise<$_model.UninstallCloudAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallCloudAppWithOptions(request, runtime);
  }

  /**
   * @param request - UnlockDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockDeviceResponse
   */
  async unlockDeviceWithOptions(request: $_model.UnlockDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnlockDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnlockDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnlockDeviceResponse>(await this.callApi(params, req, runtime), new $_model.UnlockDeviceResponse({}));
  }

  /**
   * @param request - UnlockDeviceRequest
   * @returns UnlockDeviceResponse
   */
  async unlockDevice(request: $_model.UnlockDeviceRequest): Promise<$_model.UnlockDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockDeviceWithOptions(request, runtime);
  }

  /**
   * 更新云应用信息
   * 
   * @param request - UpdateCloudAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudAppInfoResponse
   */
  async updateCloudAppInfoWithOptions(request: $_model.UpdateCloudAppInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloudAppInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudAppInfo",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloudAppInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloudAppInfoResponse({}));
  }

  /**
   * 更新云应用信息
   * 
   * @param request - UpdateCloudAppInfoRequest
   * @returns UpdateCloudAppInfoResponse
   */
  async updateCloudAppInfo(request: $_model.UpdateCloudAppInfoRequest): Promise<$_model.UpdateCloudAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudAppInfoWithOptions(request, runtime);
  }

  /**
   * 更新文件信息。
   * 
   * @param request - UpdateFileInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFileInfoResponse
   */
  async updateFileInfoWithOptions(request: $_model.UpdateFileInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFileInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFileInfo",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFileInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFileInfoResponse({}));
  }

  /**
   * 更新文件信息。
   * 
   * @param request - UpdateFileInfoRequest
   * @returns UpdateFileInfoResponse
   */
  async updateFileInfo(request: $_model.UpdateFileInfoRequest): Promise<$_model.UpdateFileInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFileInfoWithOptions(request, runtime);
  }

  /**
   * 更新云渲染实例配置参数
   * 
   * @param tmpReq - UpdateRenderingInstanceConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRenderingInstanceConfigurationResponse
   */
  async updateRenderingInstanceConfigurationWithOptions(tmpReq: $_model.UpdateRenderingInstanceConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRenderingInstanceConfigurationResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateRenderingInstanceConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configuration)) {
      request.configurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configuration, "Configuration", "json");
    }

    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configurationShrink)) {
      body["Configuration"] = request.configurationShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRenderingInstanceConfiguration",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRenderingInstanceConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRenderingInstanceConfigurationResponse({}));
  }

  /**
   * 更新云渲染实例配置参数
   * 
   * @param request - UpdateRenderingInstanceConfigurationRequest
   * @returns UpdateRenderingInstanceConfigurationResponse
   */
  async updateRenderingInstanceConfiguration(request: $_model.UpdateRenderingInstanceConfigurationRequest): Promise<$_model.UpdateRenderingInstanceConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRenderingInstanceConfigurationWithOptions(request, runtime);
  }

  /**
   * 更新实例设置
   * 
   * @param tmpReq - UpdateRenderingInstanceSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRenderingInstanceSettingsResponse
   */
  async updateRenderingInstanceSettingsWithOptions(tmpReq: $_model.UpdateRenderingInstanceSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRenderingInstanceSettingsResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateRenderingInstanceSettingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.settings)) {
      request.settingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.settings, "Settings", "json");
    }

    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    if (!$dara.isNull(request.settingsShrink)) {
      query["Settings"] = request.settingsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRenderingInstanceSettings",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRenderingInstanceSettingsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRenderingInstanceSettingsResponse({}));
  }

  /**
   * 更新实例设置
   * 
   * @param request - UpdateRenderingInstanceSettingsRequest
   * @returns UpdateRenderingInstanceSettingsResponse
   */
  async updateRenderingInstanceSettings(request: $_model.UpdateRenderingInstanceSettingsRequest): Promise<$_model.UpdateRenderingInstanceSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRenderingInstanceSettingsWithOptions(request, runtime);
  }

  /**
   * 更新一个项目的属性信息
   * 
   * @param tmpReq - UpdateRenderingProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRenderingProjectResponse
   */
  async updateRenderingProjectWithOptions(tmpReq: $_model.UpdateRenderingProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRenderingProjectResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateRenderingProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sessionAttribs)) {
      request.sessionAttribsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sessionAttribs, "SessionAttribs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sessionAttribsShrink)) {
      query["SessionAttribs"] = request.sessionAttribsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRenderingProject",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRenderingProjectResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRenderingProjectResponse({}));
  }

  /**
   * 更新一个项目的属性信息
   * 
   * @param request - UpdateRenderingProjectRequest
   * @returns UpdateRenderingProjectResponse
   */
  async updateRenderingProject(request: $_model.UpdateRenderingProjectRequest): Promise<$_model.UpdateRenderingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRenderingProjectWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateVsPullStreamInfoConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVsPullStreamInfoConfigResponse
   */
  async updateVsPullStreamInfoConfigWithOptions(request: $_model.UpdateVsPullStreamInfoConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVsPullStreamInfoConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.always)) {
      query["Always"] = request.always;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.sourceUrl)) {
      query["SourceUrl"] = request.sourceUrl;
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
      action: "UpdateVsPullStreamInfoConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVsPullStreamInfoConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVsPullStreamInfoConfigResponse({}));
  }

  /**
   * @param request - UpdateVsPullStreamInfoConfigRequest
   * @returns UpdateVsPullStreamInfoConfigResponse
   */
  async updateVsPullStreamInfoConfig(request: $_model.UpdateVsPullStreamInfoConfigRequest): Promise<$_model.UpdateVsPullStreamInfoConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVsPullStreamInfoConfigWithOptions(request, runtime);
  }

  /**
   * 应用上架
   * 
   * @param request - UploadCloudAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadCloudAppResponse
   */
  async uploadCloudAppWithOptions(request: $_model.UploadCloudAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadCloudAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.downloadUrl)) {
      query["DownloadUrl"] = request.downloadUrl;
    }

    if (!$dara.isNull(request.md5)) {
      query["Md5"] = request.md5;
    }

    if (!$dara.isNull(request.pkgFormat)) {
      query["PkgFormat"] = request.pkgFormat;
    }

    if (!$dara.isNull(request.pkgType)) {
      query["PkgType"] = request.pkgType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadCloudApp",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadCloudAppResponse>(await this.callApi(params, req, runtime), new $_model.UploadCloudAppResponse({}));
  }

  /**
   * 应用上架
   * 
   * @param request - UploadCloudAppRequest
   * @returns UploadCloudAppResponse
   */
  async uploadCloudApp(request: $_model.UploadCloudAppRequest): Promise<$_model.UploadCloudAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadCloudAppWithOptions(request, runtime);
  }

  /**
   * 文件上传
   * 
   * @param request - UploadFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadFileResponse
   */
  async uploadFileWithOptions(request: $_model.UploadFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.md5)) {
      query["Md5"] = request.md5;
    }

    if (!$dara.isNull(request.originUrl)) {
      query["OriginUrl"] = request.originUrl;
    }

    if (!$dara.isNull(request.targetPath)) {
      query["TargetPath"] = request.targetPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadFile",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadFileResponse>(await this.callApi(params, req, runtime), new $_model.UploadFileResponse({}));
  }

  /**
   * 文件上传
   * 
   * @param request - UploadFileRequest
   * @returns UploadFileResponse
   */
  async uploadFile(request: $_model.UploadFileRequest): Promise<$_model.UploadFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadFileWithOptions(request, runtime);
  }

  /**
   * 上传公钥，用于安全登陆鉴权。
   * 
   * @param request - UploadPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadPublicKeyResponse
   */
  async uploadPublicKeyWithOptions(request: $_model.UploadPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadPublicKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.keyGroup)) {
      query["KeyGroup"] = request.keyGroup;
    }

    if (!$dara.isNull(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!$dara.isNull(request.keyType)) {
      query["KeyType"] = request.keyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadPublicKey",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadPublicKeyResponse>(await this.callApi(params, req, runtime), new $_model.UploadPublicKeyResponse({}));
  }

  /**
   * 上传公钥，用于安全登陆鉴权。
   * 
   * @param request - UploadPublicKeyRequest
   * @returns UploadPublicKeyResponse
   */
  async uploadPublicKey(request: $_model.UploadPublicKeyRequest): Promise<$_model.UploadPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadPublicKeyWithOptions(request, runtime);
  }

  /**
   * @param request - VerifyVsDomainOwnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyVsDomainOwnerResponse
   */
  async verifyVsDomainOwnerWithOptions(request: $_model.VerifyVsDomainOwnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyVsDomainOwnerResponse> {
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
      action: "VerifyVsDomainOwner",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyVsDomainOwnerResponse>(await this.callApi(params, req, runtime), new $_model.VerifyVsDomainOwnerResponse({}));
  }

  /**
   * @param request - VerifyVsDomainOwnerRequest
   * @returns VerifyVsDomainOwnerResponse
   */
  async verifyVsDomainOwner(request: $_model.VerifyVsDomainOwnerRequest): Promise<$_model.VerifyVsDomainOwnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyVsDomainOwnerWithOptions(request, runtime);
  }

}
